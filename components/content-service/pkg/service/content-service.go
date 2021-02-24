// Copyright (c) 2021 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.

package service

import (
	"context"

	"github.com/gitpod-io/gitpod/common-go/log"
	"github.com/gitpod-io/gitpod/content-service/api"
	"github.com/gitpod-io/gitpod/content-service/pkg/storage"
)

// ContentService implements ContentServiceServer
type ContentService struct {
	cfg storage.Config
	s   storage.PresignedAccess
}

// NewContentService create a new content service
func NewContentService(cfg storage.Config) (res *ContentService, err error) {
	s, err := storage.NewPresignedAccess(&cfg)
	if err != nil {
		return nil, err
	}
	return &ContentService{cfg, s}, nil
}

// DeleteUserContent deletes all content associated with a user.
func (cs *ContentService) DeleteUserContent(ctx context.Context, req *api.DeleteUserContentRequest) (resp *api.DeleteUserContentResponse, err error) {
	log.WithFields(log.OWI(req.OwnerId, "", "")).Debug("DeleteUserContent")
	return &api.DeleteUserContentResponse{}, nil
}
