// package: todo
// file: time.proto

import * as jspb from "google-protobuf";
import * as permission_pb from "./permission_pb";

export class CallStatus extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CallStatus): CallStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallStatus;
  static deserializeBinaryFromReader(message: CallStatus, reader: jspb.BinaryReader): CallStatus;
}

export namespace CallStatus {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
  }
}

export class Paginate extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getFirst(): number;
  setFirst(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paginate.AsObject;
  static toObject(includeInstance: boolean, msg: Paginate): Paginate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Paginate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paginate;
  static deserializeBinaryFromReader(message: Paginate, reader: jspb.BinaryReader): Paginate;
}

export namespace Paginate {
  export type AsObject = {
    count: number,
    first: number,
    offset: number,
  }
}

export class Uids extends jspb.Message {
  clearUidsList(): void;
  getUidsList(): Array<string>;
  setUidsList(value: Array<string>): void;
  addUids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uids.AsObject;
  static toObject(includeInstance: boolean, msg: Uids): Uids.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uids, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uids;
  static deserializeBinaryFromReader(message: Uids, reader: jspb.BinaryReader): Uids;
}

export namespace Uids {
  export type AsObject = {
    uidsList: Array<string>,
  }
}

export class Menu extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  clearChildrenList(): void;
  getChildrenList(): Array<Menu>;
  setChildrenList(value: Array<Menu>): void;
  addChildren(value?: Menu, index?: number): Menu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Menu.AsObject;
  static toObject(includeInstance: boolean, msg: Menu): Menu.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Menu, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Menu;
  static deserializeBinaryFromReader(message: Menu, reader: jspb.BinaryReader): Menu;
}

export namespace Menu {
  export type AsObject = {
    uid: string,
    name: string,
    path: string,
    icon: string,
    childrenList: Array<Menu.AsObject>,
  }
}

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

export class MenuResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearMenuList(): void;
  getMenuList(): Array<Menu>;
  setMenuList(value: Array<Menu>): void;
  addMenu(value?: Menu, index?: number): Menu;

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
    menuList: Array<Menu.AsObject>,
  }
}

export class RegisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    name: string,
    username: string,
    password: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getStatus(): RegisterResponse.ErrorStatusMap[keyof RegisterResponse.ErrorStatusMap];
  setStatus(value: RegisterResponse.ErrorStatusMap[keyof RegisterResponse.ErrorStatusMap]): void;

  getToken(): string;
  setToken(value: string): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    status: RegisterResponse.ErrorStatusMap[keyof RegisterResponse.ErrorStatusMap],
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

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getStatus(): LoginResponse.ErrorStatusMap[keyof LoginResponse.ErrorStatusMap];
  setStatus(value: LoginResponse.ErrorStatusMap[keyof LoginResponse.ErrorStatusMap]): void;

  getToken(): string;
  setToken(value: string): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

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
    errorMsg: string,
  }

  export interface ErrorStatusMap {
    OK: 0;
    USER_OR_PASS_NOT_MATCH: 1;
    UNKNOWN_ERROR: 2;
  }

  export const ErrorStatus: ErrorStatusMap;
}

export class LogoutRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
    token: string,
  }
}

export class LogoutResponse extends jspb.Message {
  getStatus(): LogoutResponse.ErrorStatusMap[keyof LogoutResponse.ErrorStatusMap];
  setStatus(value: LogoutResponse.ErrorStatusMap[keyof LogoutResponse.ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

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
    errorMsg: string,
  }

  export interface ErrorStatusMap {
    OK: 0;
    UNKNOWN_ERROR: 2;
  }

  export const ErrorStatus: ErrorStatusMap;
}

export class User extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getMail(): string;
  setMail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    uid: string,
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    mail: string,
  }
}

export class UserReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  getStatus(): UserReq.StatusMap[keyof UserReq.StatusMap];
  setStatus(value: UserReq.StatusMap[keyof UserReq.StatusMap]): void;

  getName(): string;
  setName(value: string): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserReq): UserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserReq;
  static deserializeBinaryFromReader(message: UserReq, reader: jspb.BinaryReader): UserReq;
}

export namespace UserReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    status: UserReq.StatusMap[keyof UserReq.StatusMap],
    name: string,
    uids?: Uids.AsObject,
  }

  export interface StatusMap {
    ALL: 0;
    ACTIVE: 1;
    LOCKED: 2;
  }

  export const Status: StatusMap;
}

export class UserRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearUserList(): void;
  getUserList(): Array<User>;
  setUserList(value: Array<User>): void;
  addUser(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRes.AsObject;
  static toObject(includeInstance: boolean, msg: UserRes): UserRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRes;
  static deserializeBinaryFromReader(message: UserRes, reader: jspb.BinaryReader): UserRes;
}

export namespace UserRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    userList: Array<User.AsObject>,
  }
}

export class UserMutationReq extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserMutationReq): UserMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMutationReq;
  static deserializeBinaryFromReader(message: UserMutationReq, reader: jspb.BinaryReader): UserMutationReq;
}

export namespace UserMutationReq {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UserDeleteReq extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserDeleteReq): UserDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDeleteReq;
  static deserializeBinaryFromReader(message: UserDeleteReq, reader: jspb.BinaryReader): UserDeleteReq;
}

export namespace UserDeleteReq {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class Group extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUsersCount(): number;
  setUsersCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    uid: string,
    name: string,
    usersCount: number,
  }
}

export class GroupReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: GroupReq): GroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupReq;
  static deserializeBinaryFromReader(message: GroupReq, reader: jspb.BinaryReader): GroupReq;
}

export namespace GroupReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class GroupRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearGroupList(): void;
  getGroupList(): Array<Group>;
  setGroupList(value: Array<Group>): void;
  addGroup(value?: Group, index?: number): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: GroupRes): GroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupRes;
  static deserializeBinaryFromReader(message: GroupRes, reader: jspb.BinaryReader): GroupRes;
}

export namespace GroupRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    groupList: Array<Group.AsObject>,
  }
}

export class GroupMutationReq extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): Group | undefined;
  setGroup(value?: Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMutationReq): GroupMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMutationReq;
  static deserializeBinaryFromReader(message: GroupMutationReq, reader: jspb.BinaryReader): GroupMutationReq;
}

export namespace GroupMutationReq {
  export type AsObject = {
    group?: Group.AsObject,
  }
}

export class GroupDeleteReq extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): Group | undefined;
  setGroup(value?: Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: GroupDeleteReq): GroupDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupDeleteReq;
  static deserializeBinaryFromReader(message: GroupDeleteReq, reader: jspb.BinaryReader): GroupDeleteReq;
}

export namespace GroupDeleteReq {
  export type AsObject = {
    group?: Group.AsObject,
  }
}

export class Color extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getHexcode(): string;
  setHexcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Color.AsObject;
  static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Color;
  static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
  export type AsObject = {
    uid: string,
    name: string,
    hexcode: string,
  }
}

export class ColorReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorReq.AsObject;
  static toObject(includeInstance: boolean, msg: ColorReq): ColorReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColorReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorReq;
  static deserializeBinaryFromReader(message: ColorReq, reader: jspb.BinaryReader): ColorReq;
}

export namespace ColorReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class ColorRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearColorList(): void;
  getColorList(): Array<Color>;
  setColorList(value: Array<Color>): void;
  addColor(value?: Color, index?: number): Color;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorRes.AsObject;
  static toObject(includeInstance: boolean, msg: ColorRes): ColorRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColorRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorRes;
  static deserializeBinaryFromReader(message: ColorRes, reader: jspb.BinaryReader): ColorRes;
}

export namespace ColorRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    colorList: Array<Color.AsObject>,
  }
}

export class ColorMutationReq extends jspb.Message {
  hasColor(): boolean;
  clearColor(): void;
  getColor(): Color | undefined;
  setColor(value?: Color): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: ColorMutationReq): ColorMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColorMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorMutationReq;
  static deserializeBinaryFromReader(message: ColorMutationReq, reader: jspb.BinaryReader): ColorMutationReq;
}

export namespace ColorMutationReq {
  export type AsObject = {
    color?: Color.AsObject,
  }
}

export class ColorDeleteReq extends jspb.Message {
  hasColor(): boolean;
  clearColor(): void;
  getColor(): Color | undefined;
  setColor(value?: Color): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: ColorDeleteReq): ColorDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColorDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorDeleteReq;
  static deserializeBinaryFromReader(message: ColorDeleteReq, reader: jspb.BinaryReader): ColorDeleteReq;
}

export namespace ColorDeleteReq {
  export type AsObject = {
    color?: Color.AsObject,
  }
}

export class Type extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  getIsInRoadmap(): boolean;
  setIsInRoadmap(value: boolean): void;

  getIsMilestone(): boolean;
  setIsMilestone(value: boolean): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getIsStandard(): boolean;
  setIsStandard(value: boolean): void;

  getColor(): string;
  setColor(value: string): void;

  getAttributeGroups(): string;
  setAttributeGroups(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Type.AsObject;
  static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Type;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
  export type AsObject = {
    uid: string,
    name: string,
    position: number,
    isInRoadmap: boolean,
    isMilestone: boolean,
    isDefault: boolean,
    isStandard: boolean,
    color: string,
    attributeGroups: string,
    description: string,
  }
}

export class TypeReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: TypeReq): TypeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeReq;
  static deserializeBinaryFromReader(message: TypeReq, reader: jspb.BinaryReader): TypeReq;
}

export namespace TypeReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class TypeRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearTypeList(): void;
  getTypeList(): Array<Type>;
  setTypeList(value: Array<Type>): void;
  addType(value?: Type, index?: number): Type;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TypeRes): TypeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeRes;
  static deserializeBinaryFromReader(message: TypeRes, reader: jspb.BinaryReader): TypeRes;
}

export namespace TypeRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    typeList: Array<Type.AsObject>,
  }
}

export class TypeMutationReq extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): Type | undefined;
  setType(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: TypeMutationReq): TypeMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeMutationReq;
  static deserializeBinaryFromReader(message: TypeMutationReq, reader: jspb.BinaryReader): TypeMutationReq;
}

export namespace TypeMutationReq {
  export type AsObject = {
    type?: Type.AsObject,
  }
}

export class TypeDeleteReq extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): Type | undefined;
  setType(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: TypeDeleteReq): TypeDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeDeleteReq;
  static deserializeBinaryFromReader(message: TypeDeleteReq, reader: jspb.BinaryReader): TypeDeleteReq;
}

export namespace TypeDeleteReq {
  export type AsObject = {
    type?: Type.AsObject,
  }
}

export class Status extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getIsClosed(): boolean;
  setIsClosed(value: boolean): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): Color | undefined;
  setColor(value?: Color): void;

  getDefaultDoneRatio(): number;
  setDefaultDoneRatio(value: number): void;

  getIsReadonly(): boolean;
  setIsReadonly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    uid: string,
    name: string,
    position: number,
    isDefault: boolean,
    isClosed: boolean,
    color?: Color.AsObject,
    defaultDoneRatio: number,
    isReadonly: boolean,
  }
}

export class StatusReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: StatusReq): StatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusReq;
  static deserializeBinaryFromReader(message: StatusReq, reader: jspb.BinaryReader): StatusReq;
}

export namespace StatusReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class StatusRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearStatusesList(): void;
  getStatusesList(): Array<Status>;
  setStatusesList(value: Array<Status>): void;
  addStatuses(value?: Status, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRes): StatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRes;
  static deserializeBinaryFromReader(message: StatusRes, reader: jspb.BinaryReader): StatusRes;
}

export namespace StatusRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    statusesList: Array<Status.AsObject>,
  }
}

export class StatusMutationReq extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: StatusMutationReq): StatusMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusMutationReq;
  static deserializeBinaryFromReader(message: StatusMutationReq, reader: jspb.BinaryReader): StatusMutationReq;
}

export namespace StatusMutationReq {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class StatusDeleteReq extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: StatusDeleteReq): StatusDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusDeleteReq;
  static deserializeBinaryFromReader(message: StatusDeleteReq, reader: jspb.BinaryReader): StatusDeleteReq;
}

export namespace StatusDeleteReq {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

export class Activity extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Activity.AsObject;
  static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Activity;
  static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
}

export namespace Activity {
  export type AsObject = {
    uid: string,
    name: string,
    position: number,
    isDefault: boolean,
    active: boolean,
    project?: Project.AsObject,
  }
}

export class ActivityReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityReq.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityReq): ActivityReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityReq;
  static deserializeBinaryFromReader(message: ActivityReq, reader: jspb.BinaryReader): ActivityReq;
}

export namespace ActivityReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class ActivityRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearActivityList(): void;
  getActivityList(): Array<Activity>;
  setActivityList(value: Array<Activity>): void;
  addActivity(value?: Activity, index?: number): Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityRes.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityRes): ActivityRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityRes;
  static deserializeBinaryFromReader(message: ActivityRes, reader: jspb.BinaryReader): ActivityRes;
}

export namespace ActivityRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    activityList: Array<Activity.AsObject>,
  }
}

export class ActivityMutationReq extends jspb.Message {
  hasActivity(): boolean;
  clearActivity(): void;
  getActivity(): Activity | undefined;
  setActivity(value?: Activity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityMutationReq): ActivityMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityMutationReq;
  static deserializeBinaryFromReader(message: ActivityMutationReq, reader: jspb.BinaryReader): ActivityMutationReq;
}

export namespace ActivityMutationReq {
  export type AsObject = {
    activity?: Activity.AsObject,
  }
}

export class ActivityDeleteReq extends jspb.Message {
  hasActivity(): boolean;
  clearActivity(): void;
  getActivity(): Activity | undefined;
  setActivity(value?: Activity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityDeleteReq): ActivityDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityDeleteReq;
  static deserializeBinaryFromReader(message: ActivityDeleteReq, reader: jspb.BinaryReader): ActivityDeleteReq;
}

export namespace ActivityDeleteReq {
  export type AsObject = {
    activity?: Activity.AsObject,
  }
}

export class Priority extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): Color | undefined;
  setColor(value?: Color): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Priority.AsObject;
  static toObject(includeInstance: boolean, msg: Priority): Priority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Priority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Priority;
  static deserializeBinaryFromReader(message: Priority, reader: jspb.BinaryReader): Priority;
}

export namespace Priority {
  export type AsObject = {
    uid: string,
    name: string,
    position: number,
    isDefault: boolean,
    active: boolean,
    color?: Color.AsObject,
    project?: Project.AsObject,
  }
}

export class PriorityReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriorityReq.AsObject;
  static toObject(includeInstance: boolean, msg: PriorityReq): PriorityReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriorityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriorityReq;
  static deserializeBinaryFromReader(message: PriorityReq, reader: jspb.BinaryReader): PriorityReq;
}

export namespace PriorityReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class PriorityRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearPriorityList(): void;
  getPriorityList(): Array<Priority>;
  setPriorityList(value: Array<Priority>): void;
  addPriority(value?: Priority, index?: number): Priority;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriorityRes.AsObject;
  static toObject(includeInstance: boolean, msg: PriorityRes): PriorityRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriorityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriorityRes;
  static deserializeBinaryFromReader(message: PriorityRes, reader: jspb.BinaryReader): PriorityRes;
}

export namespace PriorityRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    priorityList: Array<Priority.AsObject>,
  }
}

export class PriorityMutationReq extends jspb.Message {
  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): Priority | undefined;
  setPriority(value?: Priority): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriorityMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: PriorityMutationReq): PriorityMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriorityMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriorityMutationReq;
  static deserializeBinaryFromReader(message: PriorityMutationReq, reader: jspb.BinaryReader): PriorityMutationReq;
}

export namespace PriorityMutationReq {
  export type AsObject = {
    priority?: Priority.AsObject,
  }
}

export class PriorityDeleteReq extends jspb.Message {
  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): Priority | undefined;
  setPriority(value?: Priority): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriorityDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: PriorityDeleteReq): PriorityDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriorityDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriorityDeleteReq;
  static deserializeBinaryFromReader(message: PriorityDeleteReq, reader: jspb.BinaryReader): PriorityDeleteReq;
}

export namespace PriorityDeleteReq {
  export type AsObject = {
    priority?: Priority.AsObject,
  }
}

export class DocumentCategory extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentCategory.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentCategory): DocumentCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentCategory;
  static deserializeBinaryFromReader(message: DocumentCategory, reader: jspb.BinaryReader): DocumentCategory;
}

export namespace DocumentCategory {
  export type AsObject = {
    uid: string,
    name: string,
    position: number,
    isDefault: boolean,
    active: boolean,
    project?: Project.AsObject,
  }
}

export class DocumentCategoryReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentCategoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentCategoryReq): DocumentCategoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentCategoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentCategoryReq;
  static deserializeBinaryFromReader(message: DocumentCategoryReq, reader: jspb.BinaryReader): DocumentCategoryReq;
}

export namespace DocumentCategoryReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class DocumentCategoryRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearDocumentCategoryList(): void;
  getDocumentCategoryList(): Array<DocumentCategory>;
  setDocumentCategoryList(value: Array<DocumentCategory>): void;
  addDocumentCategory(value?: DocumentCategory, index?: number): DocumentCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentCategoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentCategoryRes): DocumentCategoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentCategoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentCategoryRes;
  static deserializeBinaryFromReader(message: DocumentCategoryRes, reader: jspb.BinaryReader): DocumentCategoryRes;
}

export namespace DocumentCategoryRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    documentCategoryList: Array<DocumentCategory.AsObject>,
  }
}

export class DocumentCategoryMutationReq extends jspb.Message {
  hasDocumentCategory(): boolean;
  clearDocumentCategory(): void;
  getDocumentCategory(): DocumentCategory | undefined;
  setDocumentCategory(value?: DocumentCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentCategoryMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentCategoryMutationReq): DocumentCategoryMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentCategoryMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentCategoryMutationReq;
  static deserializeBinaryFromReader(message: DocumentCategoryMutationReq, reader: jspb.BinaryReader): DocumentCategoryMutationReq;
}

export namespace DocumentCategoryMutationReq {
  export type AsObject = {
    documentCategory?: DocumentCategory.AsObject,
  }
}

export class DocumentCategoryDeleteReq extends jspb.Message {
  hasDocumentCategory(): boolean;
  clearDocumentCategory(): void;
  getDocumentCategory(): DocumentCategory | undefined;
  setDocumentCategory(value?: DocumentCategory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentCategoryDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentCategoryDeleteReq): DocumentCategoryDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentCategoryDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentCategoryDeleteReq;
  static deserializeBinaryFromReader(message: DocumentCategoryDeleteReq, reader: jspb.BinaryReader): DocumentCategoryDeleteReq;
}

export namespace DocumentCategoryDeleteReq {
  export type AsObject = {
    documentCategory?: DocumentCategory.AsObject,
  }
}

export class Category extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    uid: string,
    name: string,
    position: number,
    isDefault: boolean,
    active: boolean,
    project?: Project.AsObject,
  }
}

export class CategoryReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryReq): CategoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryReq;
  static deserializeBinaryFromReader(message: CategoryReq, reader: jspb.BinaryReader): CategoryReq;
}

export namespace CategoryReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class CategoryRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCategoryList(): void;
  getCategoryList(): Array<Category>;
  setCategoryList(value: Array<Category>): void;
  addCategory(value?: Category, index?: number): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryRes): CategoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryRes;
  static deserializeBinaryFromReader(message: CategoryRes, reader: jspb.BinaryReader): CategoryRes;
}

export namespace CategoryRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    categoryList: Array<Category.AsObject>,
  }
}

export class CategoryMutationReq extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): Category | undefined;
  setCategory(value?: Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryMutationReq): CategoryMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryMutationReq;
  static deserializeBinaryFromReader(message: CategoryMutationReq, reader: jspb.BinaryReader): CategoryMutationReq;
}

export namespace CategoryMutationReq {
  export type AsObject = {
    category?: Category.AsObject,
  }
}

export class CategoryDeleteReq extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): Category | undefined;
  setCategory(value?: Category): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryDeleteReq): CategoryDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryDeleteReq;
  static deserializeBinaryFromReader(message: CategoryDeleteReq, reader: jspb.BinaryReader): CategoryDeleteReq;
}

export namespace CategoryDeleteReq {
  export type AsObject = {
    category?: Category.AsObject,
  }
}

export class Role extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPosition(): number;
  setPosition(value: number): void;

  getAssignable(): boolean;
  setAssignable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    uid: string,
    name: string,
    position: number,
    assignable: boolean,
  }
}

export class RoleReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: RoleReq): RoleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleReq;
  static deserializeBinaryFromReader(message: RoleReq, reader: jspb.BinaryReader): RoleReq;
}

export namespace RoleReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class RoleRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearRoleList(): void;
  getRoleList(): Array<Role>;
  setRoleList(value: Array<Role>): void;
  addRole(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleRes.AsObject;
  static toObject(includeInstance: boolean, msg: RoleRes): RoleRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleRes;
  static deserializeBinaryFromReader(message: RoleRes, reader: jspb.BinaryReader): RoleRes;
}

export namespace RoleRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    roleList: Array<Role.AsObject>,
  }
}

export class RoleMutationReq extends jspb.Message {
  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: RoleMutationReq): RoleMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleMutationReq;
  static deserializeBinaryFromReader(message: RoleMutationReq, reader: jspb.BinaryReader): RoleMutationReq;
}

export namespace RoleMutationReq {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class RoleDeleteReq extends jspb.Message {
  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDeleteReq): RoleDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDeleteReq;
  static deserializeBinaryFromReader(message: RoleDeleteReq, reader: jspb.BinaryReader): RoleDeleteReq;
}

export namespace RoleDeleteReq {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class Announcement extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getText(): string;
  setText(value: string): void;

  getShowUntil(): string;
  setShowUntil(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Announcement.AsObject;
  static toObject(includeInstance: boolean, msg: Announcement): Announcement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Announcement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Announcement;
  static deserializeBinaryFromReader(message: Announcement, reader: jspb.BinaryReader): Announcement;
}

export namespace Announcement {
  export type AsObject = {
    uid: string,
    text: string,
    showUntil: string,
    active: boolean,
  }
}

export class AnnouncementReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnouncementReq.AsObject;
  static toObject(includeInstance: boolean, msg: AnnouncementReq): AnnouncementReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnouncementReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnouncementReq;
  static deserializeBinaryFromReader(message: AnnouncementReq, reader: jspb.BinaryReader): AnnouncementReq;
}

export namespace AnnouncementReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class AnnouncementRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearAnnouncementList(): void;
  getAnnouncementList(): Array<Announcement>;
  setAnnouncementList(value: Array<Announcement>): void;
  addAnnouncement(value?: Announcement, index?: number): Announcement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnouncementRes.AsObject;
  static toObject(includeInstance: boolean, msg: AnnouncementRes): AnnouncementRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnouncementRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnouncementRes;
  static deserializeBinaryFromReader(message: AnnouncementRes, reader: jspb.BinaryReader): AnnouncementRes;
}

export namespace AnnouncementRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    announcementList: Array<Announcement.AsObject>,
  }
}

export class AnnouncementMutationReq extends jspb.Message {
  hasAnnouncement(): boolean;
  clearAnnouncement(): void;
  getAnnouncement(): Announcement | undefined;
  setAnnouncement(value?: Announcement): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnouncementMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: AnnouncementMutationReq): AnnouncementMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnouncementMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnouncementMutationReq;
  static deserializeBinaryFromReader(message: AnnouncementMutationReq, reader: jspb.BinaryReader): AnnouncementMutationReq;
}

export namespace AnnouncementMutationReq {
  export type AsObject = {
    announcement?: Announcement.AsObject,
  }
}

export class AnnouncementDeleteReq extends jspb.Message {
  hasAnnouncement(): boolean;
  clearAnnouncement(): void;
  getAnnouncement(): Announcement | undefined;
  setAnnouncement(value?: Announcement): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnouncementDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: AnnouncementDeleteReq): AnnouncementDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnouncementDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnouncementDeleteReq;
  static deserializeBinaryFromReader(message: AnnouncementDeleteReq, reader: jspb.BinaryReader): AnnouncementDeleteReq;
}

export namespace AnnouncementDeleteReq {
  export type AsObject = {
    announcement?: Announcement.AsObject,
  }
}

export class News extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  getTitle(): string;
  setTitle(value: string): void;

  getSummery(): string;
  setSummery(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): User | undefined;
  setAuthor(value?: User): void;

  getCommentsCount(): number;
  setCommentsCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): News.AsObject;
  static toObject(includeInstance: boolean, msg: News): News.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: News, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): News;
  static deserializeBinaryFromReader(message: News, reader: jspb.BinaryReader): News;
}

export namespace News {
  export type AsObject = {
    uid: string,
    project?: Project.AsObject,
    title: string,
    summery: string,
    description: string,
    author?: User.AsObject,
    commentsCount: number,
  }
}

export class NewsReq extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  hasUids(): boolean;
  clearUids(): void;
  getUids(): Uids | undefined;
  setUids(value?: Uids): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: NewsReq): NewsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsReq;
  static deserializeBinaryFromReader(message: NewsReq, reader: jspb.BinaryReader): NewsReq;
}

export namespace NewsReq {
  export type AsObject = {
    paginate?: Paginate.AsObject,
    uids?: Uids.AsObject,
  }
}

export class NewsRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearNewsList(): void;
  getNewsList(): Array<News>;
  setNewsList(value: Array<News>): void;
  addNews(value?: News, index?: number): News;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsRes.AsObject;
  static toObject(includeInstance: boolean, msg: NewsRes): NewsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsRes;
  static deserializeBinaryFromReader(message: NewsRes, reader: jspb.BinaryReader): NewsRes;
}

export namespace NewsRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    paginate?: Paginate.AsObject,
    newsList: Array<News.AsObject>,
  }
}

export class NewsMutationReq extends jspb.Message {
  hasNews(): boolean;
  clearNews(): void;
  getNews(): News | undefined;
  setNews(value?: News): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: NewsMutationReq): NewsMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewsMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsMutationReq;
  static deserializeBinaryFromReader(message: NewsMutationReq, reader: jspb.BinaryReader): NewsMutationReq;
}

export namespace NewsMutationReq {
  export type AsObject = {
    news?: News.AsObject,
  }
}

export class NewsDeleteReq extends jspb.Message {
  hasNews(): boolean;
  clearNews(): void;
  getNews(): News | undefined;
  setNews(value?: News): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: NewsDeleteReq): NewsDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewsDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsDeleteReq;
  static deserializeBinaryFromReader(message: NewsDeleteReq, reader: jspb.BinaryReader): NewsDeleteReq;
}

export namespace NewsDeleteReq {
  export type AsObject = {
    news?: News.AsObject,
  }
}

export class Project extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
  }
}

export class SchemaReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaReq.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaReq): SchemaReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchemaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaReq;
  static deserializeBinaryFromReader(message: SchemaReq, reader: jspb.BinaryReader): SchemaReq;
}

export namespace SchemaReq {
  export type AsObject = {
  }
}

export class SchemaRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaRes.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaRes): SchemaRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchemaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaRes;
  static deserializeBinaryFromReader(message: SchemaRes, reader: jspb.BinaryReader): SchemaRes;
}

export namespace SchemaRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    text: string,
  }
}

export class ProfileReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileReq): ProfileReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileReq;
  static deserializeBinaryFromReader(message: ProfileReq, reader: jspb.BinaryReader): ProfileReq;
}

export namespace ProfileReq {
  export type AsObject = {
  }
}

export class ProfileRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getMail(): string;
  setMail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileRes): ProfileRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileRes;
  static deserializeBinaryFromReader(message: ProfileRes, reader: jspb.BinaryReader): ProfileRes;
}

export namespace ProfileRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    mail: string,
  }
}

export class ProfileMutationReq extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getMail(): string;
  setMail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileMutationReq): ProfileMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileMutationReq;
  static deserializeBinaryFromReader(message: ProfileMutationReq, reader: jspb.BinaryReader): ProfileMutationReq;
}

export namespace ProfileMutationReq {
  export type AsObject = {
    uid: string,
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    mail: string,
  }
}

export class UsersSettingReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersSettingReq.AsObject;
  static toObject(includeInstance: boolean, msg: UsersSettingReq): UsersSettingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersSettingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersSettingReq;
  static deserializeBinaryFromReader(message: UsersSettingReq, reader: jspb.BinaryReader): UsersSettingReq;
}

export namespace UsersSettingReq {
  export type AsObject = {
  }
}

export class UsersSettingRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getDefaultLang(): string;
  setDefaultLang(value: string): void;

  getDefaultTimeZone(): string;
  setDefaultTimeZone(value: string): void;

  getAdminCanDelete(): string;
  setAdminCanDelete(value: string): void;

  getConsetRequired(): boolean;
  setConsetRequired(value: boolean): void;

  getConsentText(): string;
  setConsentText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersSettingRes.AsObject;
  static toObject(includeInstance: boolean, msg: UsersSettingRes): UsersSettingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersSettingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersSettingRes;
  static deserializeBinaryFromReader(message: UsersSettingRes, reader: jspb.BinaryReader): UsersSettingRes;
}

export namespace UsersSettingRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    defaultLang: string,
    defaultTimeZone: string,
    adminCanDelete: string,
    consetRequired: boolean,
    consentText: string,
  }
}

export class UsersSettingMutationReq extends jspb.Message {
  getDefaultLang(): string;
  setDefaultLang(value: string): void;

  getDefaultTimeZone(): string;
  setDefaultTimeZone(value: string): void;

  getAdminCanDelete(): string;
  setAdminCanDelete(value: string): void;

  getConsetRequired(): boolean;
  setConsetRequired(value: boolean): void;

  getConsentText(): string;
  setConsentText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersSettingMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UsersSettingMutationReq): UsersSettingMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersSettingMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersSettingMutationReq;
  static deserializeBinaryFromReader(message: UsersSettingMutationReq, reader: jspb.BinaryReader): UsersSettingMutationReq;
}

export namespace UsersSettingMutationReq {
  export type AsObject = {
    defaultLang: string,
    defaultTimeZone: string,
    adminCanDelete: string,
    consetRequired: boolean,
    consentText: string,
  }
}

export class WorkPackageSettingReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkPackageSettingReq.AsObject;
  static toObject(includeInstance: boolean, msg: WorkPackageSettingReq): WorkPackageSettingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkPackageSettingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkPackageSettingReq;
  static deserializeBinaryFromReader(message: WorkPackageSettingReq, reader: jspb.BinaryReader): WorkPackageSettingReq;
}

export namespace WorkPackageSettingReq {
  export type AsObject = {
  }
}

export class WorkPackageSettingRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getCrossProject(): boolean;
  setCrossProject(value: boolean): void;

  getDisplaySubProject(): boolean;
  setDisplaySubProject(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkPackageSettingRes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkPackageSettingRes): WorkPackageSettingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkPackageSettingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkPackageSettingRes;
  static deserializeBinaryFromReader(message: WorkPackageSettingRes, reader: jspb.BinaryReader): WorkPackageSettingRes;
}

export namespace WorkPackageSettingRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    crossProject: boolean,
    displaySubProject: boolean,
  }
}

export class WorkPackageSettingMutationReq extends jspb.Message {
  getCrossProject(): boolean;
  setCrossProject(value: boolean): void;

  getDisplaySubProject(): boolean;
  setDisplaySubProject(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkPackageSettingMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: WorkPackageSettingMutationReq): WorkPackageSettingMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkPackageSettingMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkPackageSettingMutationReq;
  static deserializeBinaryFromReader(message: WorkPackageSettingMutationReq, reader: jspb.BinaryReader): WorkPackageSettingMutationReq;
}

export namespace WorkPackageSettingMutationReq {
  export type AsObject = {
    crossProject: boolean,
    displaySubProject: boolean,
  }
}

export class WorkFlowSettingReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkFlowSettingReq.AsObject;
  static toObject(includeInstance: boolean, msg: WorkFlowSettingReq): WorkFlowSettingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkFlowSettingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkFlowSettingReq;
  static deserializeBinaryFromReader(message: WorkFlowSettingReq, reader: jspb.BinaryReader): WorkFlowSettingReq;
}

export namespace WorkFlowSettingReq {
  export type AsObject = {
  }
}

export class WorkFlowSettingRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkFlowSettingRes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkFlowSettingRes): WorkFlowSettingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkFlowSettingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkFlowSettingRes;
  static deserializeBinaryFromReader(message: WorkFlowSettingRes, reader: jspb.BinaryReader): WorkFlowSettingRes;
}

export namespace WorkFlowSettingRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    role: string,
    type: string,
  }
}

export class WorkFlowSettingMutationReq extends jspb.Message {
  getRole(): string;
  setRole(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkFlowSettingMutationReq.AsObject;
  static toObject(includeInstance: boolean, msg: WorkFlowSettingMutationReq): WorkFlowSettingMutationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkFlowSettingMutationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkFlowSettingMutationReq;
  static deserializeBinaryFromReader(message: WorkFlowSettingMutationReq, reader: jspb.BinaryReader): WorkFlowSettingMutationReq;
}

export namespace WorkFlowSettingMutationReq {
  export type AsObject = {
    role: string,
    type: string,
  }
}

export class SystemSettingGeneralReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSettingGeneralReq.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSettingGeneralReq): SystemSettingGeneralReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemSettingGeneralReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSettingGeneralReq;
  static deserializeBinaryFromReader(message: SystemSettingGeneralReq, reader: jspb.BinaryReader): SystemSettingGeneralReq;
}

export namespace SystemSettingGeneralReq {
  export type AsObject = {
  }
}

export class SystemSettingGeneralRes extends jspb.Message {
  getStatus(): ErrorStatusMap[keyof ErrorStatusMap];
  setStatus(value: ErrorStatusMap[keyof ErrorStatusMap]): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getWelcomeBlockTitle(): string;
  setWelcomeBlockTitle(value: string): void;

  getWelcomeBlockText(): string;
  setWelcomeBlockText(value: string): void;

  getWelcomeBlockOnHomescreen(): boolean;
  setWelcomeBlockOnHomescreen(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSettingGeneralRes.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSettingGeneralRes): SystemSettingGeneralRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemSettingGeneralRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSettingGeneralRes;
  static deserializeBinaryFromReader(message: SystemSettingGeneralRes, reader: jspb.BinaryReader): SystemSettingGeneralRes;
}

export namespace SystemSettingGeneralRes {
  export type AsObject = {
    status: ErrorStatusMap[keyof ErrorStatusMap],
    errorMsg: string,
    title: string,
    welcomeBlockTitle: string,
    welcomeBlockText: string,
    welcomeBlockOnHomescreen: boolean,
  }
}

export class SystemSettingMutationGeneralReq extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getWelcomeBlockTitle(): string;
  setWelcomeBlockTitle(value: string): void;

  getWelcomeBlockText(): string;
  setWelcomeBlockText(value: string): void;

  getWelcomeBlockOnHomescreen(): boolean;
  setWelcomeBlockOnHomescreen(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSettingMutationGeneralReq.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSettingMutationGeneralReq): SystemSettingMutationGeneralReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemSettingMutationGeneralReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSettingMutationGeneralReq;
  static deserializeBinaryFromReader(message: SystemSettingMutationGeneralReq, reader: jspb.BinaryReader): SystemSettingMutationGeneralReq;
}

export namespace SystemSettingMutationGeneralReq {
  export type AsObject = {
    title: string,
    welcomeBlockTitle: string,
    welcomeBlockText: string,
    welcomeBlockOnHomescreen: boolean,
  }
}

export interface ErrorStatusMap {
  OK: 0;
  UNAUTHORISED: 1;
  OTHERERROR: 2;
}

export const ErrorStatus: ErrorStatusMap;

export interface UserTypeMap {
  SYSTEMUSER: 0;
  ANONYMOUSUSER: 1;
  USER: 2;
}

export const UserType: UserTypeMap;

export interface UserMailNotificationMap {
  ONLY_MY_EVENTS: 0;
}

export const UserMailNotification: UserMailNotificationMap;

export interface UserStatusMap {
  BUILTIN: 0;
  ACTIVE: 1;
  REGISTERED: 2;
  LOCKED: 3;
  INVITED: 4;
}

export const UserStatus: UserStatusMap;

