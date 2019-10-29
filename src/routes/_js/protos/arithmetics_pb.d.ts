// package: arithmetics
// file: arithmetics.proto

import * as jspb from "google-protobuf";

export class TwoValueRequest extends jspb.Message {
  getA(): number;
  setA(value: number): void;

  getB(): number;
  setB(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TwoValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TwoValueRequest): TwoValueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TwoValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TwoValueRequest;
  static deserializeBinaryFromReader(message: TwoValueRequest, reader: jspb.BinaryReader): TwoValueRequest;
}

export namespace TwoValueRequest {
  export type AsObject = {
    a: number,
    b: number,
  }
}

export class OneValueReply extends jspb.Message {
  getC(): number;
  setC(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneValueReply.AsObject;
  static toObject(includeInstance: boolean, msg: OneValueReply): OneValueReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneValueReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneValueReply;
  static deserializeBinaryFromReader(message: OneValueReply, reader: jspb.BinaryReader): OneValueReply;
}

export namespace OneValueReply {
  export type AsObject = {
    c: number,
  }
}

