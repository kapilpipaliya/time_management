// package: timeservice
// file: time/menu/proto/MenuRequest.proto

import * as jspb from "google-protobuf";

export class MenuRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MenuRequest): MenuRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuRequest;
  static deserializeBinaryFromReader(message: MenuRequest, reader: jspb.BinaryReader): MenuRequest;
}

export namespace MenuRequest {
  export type AsObject = {
    name: string,
  }
}

