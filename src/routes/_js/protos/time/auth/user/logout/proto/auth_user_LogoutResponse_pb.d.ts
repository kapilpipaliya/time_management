// package: timeservice
// file: time/auth/user/logout/proto/auth_user_LogoutResponse.proto

import * as jspb from "google-protobuf";

export class LogoutResponse extends jspb.Message {
  getStatus(): LogoutResponse.ErrorStatusMap[keyof LogoutResponse.ErrorStatusMap];
  setStatus(value: LogoutResponse.ErrorStatusMap[keyof LogoutResponse.ErrorStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
    status: LogoutResponse.ErrorStatusMap[keyof LogoutResponse.ErrorStatusMap],
  }

  export interface ErrorStatusMap {
    OK: 0;
    TEMP_LOCKED: 1;
    DISABLED: 2;
    EXPIRED: 3;
  }

  export const ErrorStatus: ErrorStatusMap;
}

