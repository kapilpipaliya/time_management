// package: timeservice
// file: time/account/login/proto/account_LoginResponse.proto

import * as jspb from "google-protobuf";

export class LoginResponse extends jspb.Message {
  getStatus(): LoginResponse.ErrorStatusMap[keyof LoginResponse.ErrorStatusMap];
  setStatus(value: LoginResponse.ErrorStatusMap[keyof LoginResponse.ErrorStatusMap]): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    status: LoginResponse.ErrorStatusMap[keyof LoginResponse.ErrorStatusMap],
    token: string,
  }

  export interface ErrorStatusMap {
    OK: 0;
    TEMP_LOCKED: 1;
    DISABLED: 2;
    EXPIRED: 3;
  }

  export const ErrorStatus: ErrorStatusMap;
}

