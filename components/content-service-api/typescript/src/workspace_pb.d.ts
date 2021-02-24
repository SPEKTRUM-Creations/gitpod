/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

// package: contentservice
// file: workspace.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DownloadUrlWorkspaceRequest extends jspb.Message { 
    getOwnerId(): string;
    setOwnerId(value: string): DownloadUrlWorkspaceRequest;

    getWorkspaceId(): string;
    setWorkspaceId(value: string): DownloadUrlWorkspaceRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadUrlWorkspaceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadUrlWorkspaceRequest): DownloadUrlWorkspaceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadUrlWorkspaceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadUrlWorkspaceRequest;
    static deserializeBinaryFromReader(message: DownloadUrlWorkspaceRequest, reader: jspb.BinaryReader): DownloadUrlWorkspaceRequest;
}

export namespace DownloadUrlWorkspaceRequest {
    export type AsObject = {
        ownerId: string,
        workspaceId: string,
    }
}

export class DownloadUrlWorkspaceResponse extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): DownloadUrlWorkspaceResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadUrlWorkspaceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadUrlWorkspaceResponse): DownloadUrlWorkspaceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadUrlWorkspaceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadUrlWorkspaceResponse;
    static deserializeBinaryFromReader(message: DownloadUrlWorkspaceResponse, reader: jspb.BinaryReader): DownloadUrlWorkspaceResponse;
}

export namespace DownloadUrlWorkspaceResponse {
    export type AsObject = {
        url: string,
    }
}

export class DeleteWorkspaceRequest extends jspb.Message { 
    getOwnerId(): string;
    setOwnerId(value: string): DeleteWorkspaceRequest;

    getWorkspaceId(): string;
    setWorkspaceId(value: string): DeleteWorkspaceRequest;

    getIncludeSnapshots(): boolean;
    setIncludeSnapshots(value: boolean): DeleteWorkspaceRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWorkspaceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWorkspaceRequest): DeleteWorkspaceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWorkspaceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWorkspaceRequest;
    static deserializeBinaryFromReader(message: DeleteWorkspaceRequest, reader: jspb.BinaryReader): DeleteWorkspaceRequest;
}

export namespace DeleteWorkspaceRequest {
    export type AsObject = {
        ownerId: string,
        workspaceId: string,
        includeSnapshots: boolean,
    }
}

export class DeleteWorkspaceResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWorkspaceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWorkspaceResponse): DeleteWorkspaceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWorkspaceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWorkspaceResponse;
    static deserializeBinaryFromReader(message: DeleteWorkspaceResponse, reader: jspb.BinaryReader): DeleteWorkspaceResponse;
}

export namespace DeleteWorkspaceResponse {
    export type AsObject = {
    }
}
