// package: timeservice
// file: time/admin/user/user/list/proto/admin_user_user_ListResponse.proto

import * as jspb from "google-protobuf";

export class UserListResponse extends jspb.Message {
  getStatus(): UserListResponse.ErrorStatusMap[keyof UserListResponse.ErrorStatusMap];
  setStatus(value: UserListResponse.ErrorStatusMap[keyof UserListResponse.ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getJson(): string;
  setJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserListResponse): UserListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListResponse;
  static deserializeBinaryFromReader(message: UserListResponse, reader: jspb.BinaryReader): UserListResponse;
}

export namespace UserListResponse {
  export type AsObject = {
    status: UserListResponse.ErrorStatusMap[keyof UserListResponse.ErrorStatusMap],
    errorMsg: string,
    json: string,
  }

  export interface ErrorStatusMap {
    OK: 0;
    UNAUTHORISED: 1;
  }

  export const ErrorStatus: ErrorStatusMap;
}

