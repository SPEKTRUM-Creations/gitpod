/*
Copyright 2021 gitpod.io.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package manager

import (
	"context"

	"github.com/go-logr/logr"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/watch"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/reconcile"
)

// ConfigmapReconciler reconciles a Configmap object
type ConfigmapReconciler struct {
	client.Client
	Log    logr.Logger
	Scheme *runtime.Scheme

	Monitor *Monitor
}

// Reconcile performs a reconciliation of a configmap
// For more details, check Reconcile and its Result here:
// - https://pkg.go.dev/sigs.k8s.io/controller-runtime@v0.7.0/pkg/reconcile
func (r *ConfigmapReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	log := r.Log.WithValues("configmap", req.NamespacedName)

	var configmap corev1.ConfigMap
	err := r.Client.Get(context.Background(), req.NamespacedName, &configmap)
	if errors.IsNotFound(err) {
		log.Error(err, "configmap not exist", "key", req)
		return reconcile.Result{}, nil
	}

	queue := configmap.Annotations[workspaceIDAnnotation]
	if queue == "" {
		return ctrl.Result{}, nil
	}

	r.Monitor.eventpool.Add(queue, watch.Event{
		Type:   watch.Modified,
		Object: &configmap,
	})

	return ctrl.Result{}, nil
}

// SetupWithManager sets up the controller with the Manager.
func (r *ConfigmapReconciler) SetupWithManager(mgr ctrl.Manager) error {
	return ctrl.NewControllerManagedBy(mgr).
		For(&corev1.ConfigMap{}).
		Complete(r)
}