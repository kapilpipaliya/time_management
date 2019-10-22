// package: timeservice
// file: time/admin/user/user/list/proto/admin_user_user_ListRequest.proto

import * as jspb from "google-protobuf";

export class UserListRequest extends jspb.Message {
  getStatus(): UserListRequest.StatusMap[keyof UserListRequest.StatusMap];
  setStatus(value: UserListRequest.StatusMap[keyof UserListRequest.StatusMap]): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserListRequest): UserListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListRequest;
  static deserializeBinaryFromReader(message: UserListRequest, reader: jspb.BinaryReader): UserListRequest;
}

export namespace UserListRequest {
  export type AsObject = {
    status: UserListRequest.StatusMap[keyof UserListRequest.StatusMap],
    name: string,
  }

  export interface StatusMap {
    ALL: 0;
    ACTIVE: 1;
    LOCKED: 2;
  }

  export const Status: StatusMap;
}

