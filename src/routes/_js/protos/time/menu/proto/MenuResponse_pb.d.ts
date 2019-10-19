// package: timeservice
// file: time/menu/proto/MenuResponse.proto

import * as jspb from "google-protobuf";

export class MenuResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getJson(): string;
  setJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MenuResponse): MenuResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuResponse;
  static deserializeBinaryFromReader(message: MenuResponse, reader: jspb.BinaryReader): MenuResponse;
}

export namespace MenuResponse {
  export type AsObject = {
    name: string,
    json: string,
  }
}

