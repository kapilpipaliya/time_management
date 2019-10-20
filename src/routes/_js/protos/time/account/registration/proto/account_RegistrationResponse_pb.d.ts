// package: timeservice
// file: time/account/registration/proto/account_RegistrationResponse.proto

import * as jspb from "google-protobuf";

export class RegistrationResponse extends jspb.Message {
  getStatus(): RegistrationResponse.ErrorStatusMap[keyof RegistrationResponse.ErrorStatusMap];
  setStatus(value: RegistrationResponse.ErrorStatusMap[keyof RegistrationResponse.ErrorStatusMap]): void;

  getToken(): string;
  setToken(value: string): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationResponse): RegistrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationResponse;
  static deserializeBinaryFromReader(message: RegistrationResponse, reader: jspb.BinaryReader): RegistrationResponse;
}

export namespace RegistrationResponse {
  export type AsObject = {
    status: RegistrationResponse.ErrorStatusMap[keyof RegistrationResponse.ErrorStatusMap],
    token: string,
    errorMsg: string,
  }

  export interface ErrorStatusMap {
    OK: 0;
    INVALID_USERNAME: 1;
    WEAK_PASSWORD: 2;
    USERNAME_EXIST: 3;
    UNKNOWN_ERROR: 4;
  }

  export const ErrorStatus: ErrorStatusMap;
}

