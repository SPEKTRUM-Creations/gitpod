/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

import { ContentServiceClient } from '@gitpod/content-service/lib/content_grpc_pb';
import { DeleteUserContentRequest, DeleteUserContentResponse } from "@gitpod/content-service/lib/content_pb";
import { WorkspaceServiceClient } from '@gitpod/content-service/lib/workspace_grpc_pb';
import { DeleteWorkspaceRequest, DeleteWorkspaceResponse, DownloadUrlWorkspaceRequest, DownloadUrlWorkspaceResponse } from "@gitpod/content-service/lib/workspace_pb";
import { inject, injectable } from "inversify";
import { CreateSignedUrlOptions, StorageClient } from "./storage-client";

@injectable()
export class ContentServiceStorageClient implements StorageClient {

    @inject(ContentServiceClient) private readonly contentServiceClient: ContentServiceClient;
    @inject(WorkspaceServiceClient) private readonly workspaceServiceClient: WorkspaceServiceClient;

    public async deleteUserContent(ownerId: string): Promise<void> {
        const request = new DeleteUserContentRequest();
        request.setOwnerId(ownerId);

        const grcpPromise = new Promise<DeleteUserContentResponse>((resolve, reject) => {
            this.contentServiceClient.deleteUserContent(request, (err: any, resp: DeleteUserContentResponse) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp);
                }
            });
        });
        try {
            await grcpPromise;
            return;
        } catch (err) {
            throw err;
        }
    }

    public async deleteWorkspaceBackups(ownerId: string, workspaceId: string, includeSnapshots: boolean): Promise<void> {
        const request = new DeleteWorkspaceRequest();
        request.setOwnerId(ownerId);
        request.setWorkspaceId(workspaceId);
        request.setIncludeSnapshots(includeSnapshots);

        const grcpPromise = new Promise<DeleteWorkspaceResponse>((resolve, reject) => {
            this.workspaceServiceClient.deleteWorkspace(request, (err: any, resp: DeleteWorkspaceResponse) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp);
                }
            });
        });
        try {
            await grcpPromise;
            return;
        } catch (err) {
            throw err;
        }
    }

    public async createWorkspaceContentDownloadUrl(ownerId: string, workspaceId: string): Promise<string> {
        const request = new DownloadUrlWorkspaceRequest();
        request.setOwnerId(ownerId);
        request.setWorkspaceId(workspaceId);

        const grcpPromise = new Promise<DownloadUrlWorkspaceResponse>((resolve, reject) => {
            this.workspaceServiceClient.downloadUrlWorkspace(request, (err: any, resp: DownloadUrlWorkspaceResponse) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp);
                }
            });
        });
        try {
            const response = (await grcpPromise).toObject();
            // return decodeURI(response.url);
            return response.url;
        } catch (err) {
            throw err;
        }
    }
    
    createSignedUrl(bucketName: string, objectPath: string, action: "write" | "read", opts?: CreateSignedUrlOptions | undefined): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getHash(bucketName: string, objectPath: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
}