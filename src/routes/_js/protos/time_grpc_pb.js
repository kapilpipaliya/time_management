// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// [START declaration]
'use strict';
var grpc = require('grpc');
var time_pb = require('./time_pb.js');
var permission_pb = require('./permission_pb.js');

function serialize_todo_ActivityDeleteReq(arg) {
  if (!(arg instanceof time_pb.ActivityDeleteReq)) {
    throw new Error('Expected argument of type todo.ActivityDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ActivityDeleteReq(buffer_arg) {
  return time_pb.ActivityDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ActivityMutationReq(arg) {
  if (!(arg instanceof time_pb.ActivityMutationReq)) {
    throw new Error('Expected argument of type todo.ActivityMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ActivityMutationReq(buffer_arg) {
  return time_pb.ActivityMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ActivityReq(arg) {
  if (!(arg instanceof time_pb.ActivityReq)) {
    throw new Error('Expected argument of type todo.ActivityReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ActivityReq(buffer_arg) {
  return time_pb.ActivityReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ActivityRes(arg) {
  if (!(arg instanceof time_pb.ActivityRes)) {
    throw new Error('Expected argument of type todo.ActivityRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ActivityRes(buffer_arg) {
  return time_pb.ActivityRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_AnnouncementDeleteReq(arg) {
  if (!(arg instanceof time_pb.AnnouncementDeleteReq)) {
    throw new Error('Expected argument of type todo.AnnouncementDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_AnnouncementDeleteReq(buffer_arg) {
  return time_pb.AnnouncementDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_AnnouncementMutationReq(arg) {
  if (!(arg instanceof time_pb.AnnouncementMutationReq)) {
    throw new Error('Expected argument of type todo.AnnouncementMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_AnnouncementMutationReq(buffer_arg) {
  return time_pb.AnnouncementMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_AnnouncementReq(arg) {
  if (!(arg instanceof time_pb.AnnouncementReq)) {
    throw new Error('Expected argument of type todo.AnnouncementReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_AnnouncementReq(buffer_arg) {
  return time_pb.AnnouncementReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_AnnouncementRes(arg) {
  if (!(arg instanceof time_pb.AnnouncementRes)) {
    throw new Error('Expected argument of type todo.AnnouncementRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_AnnouncementRes(buffer_arg) {
  return time_pb.AnnouncementRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_CallStatus(arg) {
  if (!(arg instanceof time_pb.CallStatus)) {
    throw new Error('Expected argument of type todo.CallStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_CallStatus(buffer_arg) {
  return time_pb.CallStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_CategoryDeleteReq(arg) {
  if (!(arg instanceof time_pb.CategoryDeleteReq)) {
    throw new Error('Expected argument of type todo.CategoryDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_CategoryDeleteReq(buffer_arg) {
  return time_pb.CategoryDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_CategoryMutationReq(arg) {
  if (!(arg instanceof time_pb.CategoryMutationReq)) {
    throw new Error('Expected argument of type todo.CategoryMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_CategoryMutationReq(buffer_arg) {
  return time_pb.CategoryMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_CategoryReq(arg) {
  if (!(arg instanceof time_pb.CategoryReq)) {
    throw new Error('Expected argument of type todo.CategoryReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_CategoryReq(buffer_arg) {
  return time_pb.CategoryReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_CategoryRes(arg) {
  if (!(arg instanceof time_pb.CategoryRes)) {
    throw new Error('Expected argument of type todo.CategoryRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_CategoryRes(buffer_arg) {
  return time_pb.CategoryRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ColorDeleteReq(arg) {
  if (!(arg instanceof time_pb.ColorDeleteReq)) {
    throw new Error('Expected argument of type todo.ColorDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ColorDeleteReq(buffer_arg) {
  return time_pb.ColorDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ColorMutationReq(arg) {
  if (!(arg instanceof time_pb.ColorMutationReq)) {
    throw new Error('Expected argument of type todo.ColorMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ColorMutationReq(buffer_arg) {
  return time_pb.ColorMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ColorReq(arg) {
  if (!(arg instanceof time_pb.ColorReq)) {
    throw new Error('Expected argument of type todo.ColorReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ColorReq(buffer_arg) {
  return time_pb.ColorReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ColorRes(arg) {
  if (!(arg instanceof time_pb.ColorRes)) {
    throw new Error('Expected argument of type todo.ColorRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ColorRes(buffer_arg) {
  return time_pb.ColorRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_DocumentCategoryDeleteReq(arg) {
  if (!(arg instanceof time_pb.DocumentCategoryDeleteReq)) {
    throw new Error('Expected argument of type todo.DocumentCategoryDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_DocumentCategoryDeleteReq(buffer_arg) {
  return time_pb.DocumentCategoryDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_DocumentCategoryMutationReq(arg) {
  if (!(arg instanceof time_pb.DocumentCategoryMutationReq)) {
    throw new Error('Expected argument of type todo.DocumentCategoryMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_DocumentCategoryMutationReq(buffer_arg) {
  return time_pb.DocumentCategoryMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_DocumentCategoryReq(arg) {
  if (!(arg instanceof time_pb.DocumentCategoryReq)) {
    throw new Error('Expected argument of type todo.DocumentCategoryReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_DocumentCategoryReq(buffer_arg) {
  return time_pb.DocumentCategoryReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_DocumentCategoryRes(arg) {
  if (!(arg instanceof time_pb.DocumentCategoryRes)) {
    throw new Error('Expected argument of type todo.DocumentCategoryRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_DocumentCategoryRes(buffer_arg) {
  return time_pb.DocumentCategoryRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_GroupDeleteReq(arg) {
  if (!(arg instanceof time_pb.GroupDeleteReq)) {
    throw new Error('Expected argument of type todo.GroupDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_GroupDeleteReq(buffer_arg) {
  return time_pb.GroupDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_GroupMutationReq(arg) {
  if (!(arg instanceof time_pb.GroupMutationReq)) {
    throw new Error('Expected argument of type todo.GroupMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_GroupMutationReq(buffer_arg) {
  return time_pb.GroupMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_GroupReq(arg) {
  if (!(arg instanceof time_pb.GroupReq)) {
    throw new Error('Expected argument of type todo.GroupReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_GroupReq(buffer_arg) {
  return time_pb.GroupReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_GroupRes(arg) {
  if (!(arg instanceof time_pb.GroupRes)) {
    throw new Error('Expected argument of type todo.GroupRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_GroupRes(buffer_arg) {
  return time_pb.GroupRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_LoginRequest(arg) {
  if (!(arg instanceof time_pb.LoginRequest)) {
    throw new Error('Expected argument of type todo.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_LoginRequest(buffer_arg) {
  return time_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_LoginResponse(arg) {
  if (!(arg instanceof time_pb.LoginResponse)) {
    throw new Error('Expected argument of type todo.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_LoginResponse(buffer_arg) {
  return time_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_LogoutRequest(arg) {
  if (!(arg instanceof time_pb.LogoutRequest)) {
    throw new Error('Expected argument of type todo.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_LogoutRequest(buffer_arg) {
  return time_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_LogoutResponse(arg) {
  if (!(arg instanceof time_pb.LogoutResponse)) {
    throw new Error('Expected argument of type todo.LogoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_LogoutResponse(buffer_arg) {
  return time_pb.LogoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_MenuRequest(arg) {
  if (!(arg instanceof time_pb.MenuRequest)) {
    throw new Error('Expected argument of type todo.MenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_MenuRequest(buffer_arg) {
  return time_pb.MenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_MenuResponse(arg) {
  if (!(arg instanceof time_pb.MenuResponse)) {
    throw new Error('Expected argument of type todo.MenuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_MenuResponse(buffer_arg) {
  return time_pb.MenuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_NewsDeleteReq(arg) {
  if (!(arg instanceof time_pb.NewsDeleteReq)) {
    throw new Error('Expected argument of type todo.NewsDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_NewsDeleteReq(buffer_arg) {
  return time_pb.NewsDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_NewsMutationReq(arg) {
  if (!(arg instanceof time_pb.NewsMutationReq)) {
    throw new Error('Expected argument of type todo.NewsMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_NewsMutationReq(buffer_arg) {
  return time_pb.NewsMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_NewsReq(arg) {
  if (!(arg instanceof time_pb.NewsReq)) {
    throw new Error('Expected argument of type todo.NewsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_NewsReq(buffer_arg) {
  return time_pb.NewsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_NewsRes(arg) {
  if (!(arg instanceof time_pb.NewsRes)) {
    throw new Error('Expected argument of type todo.NewsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_NewsRes(buffer_arg) {
  return time_pb.NewsRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_PriorityDeleteReq(arg) {
  if (!(arg instanceof time_pb.PriorityDeleteReq)) {
    throw new Error('Expected argument of type todo.PriorityDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_PriorityDeleteReq(buffer_arg) {
  return time_pb.PriorityDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_PriorityMutationReq(arg) {
  if (!(arg instanceof time_pb.PriorityMutationReq)) {
    throw new Error('Expected argument of type todo.PriorityMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_PriorityMutationReq(buffer_arg) {
  return time_pb.PriorityMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_PriorityReq(arg) {
  if (!(arg instanceof time_pb.PriorityReq)) {
    throw new Error('Expected argument of type todo.PriorityReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_PriorityReq(buffer_arg) {
  return time_pb.PriorityReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_PriorityRes(arg) {
  if (!(arg instanceof time_pb.PriorityRes)) {
    throw new Error('Expected argument of type todo.PriorityRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_PriorityRes(buffer_arg) {
  return time_pb.PriorityRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ProfileMutationReq(arg) {
  if (!(arg instanceof time_pb.ProfileMutationReq)) {
    throw new Error('Expected argument of type todo.ProfileMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ProfileMutationReq(buffer_arg) {
  return time_pb.ProfileMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ProfileReq(arg) {
  if (!(arg instanceof time_pb.ProfileReq)) {
    throw new Error('Expected argument of type todo.ProfileReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ProfileReq(buffer_arg) {
  return time_pb.ProfileReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ProfileRes(arg) {
  if (!(arg instanceof time_pb.ProfileRes)) {
    throw new Error('Expected argument of type todo.ProfileRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ProfileRes(buffer_arg) {
  return time_pb.ProfileRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_RegisterRequest(arg) {
  if (!(arg instanceof time_pb.RegisterRequest)) {
    throw new Error('Expected argument of type todo.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_RegisterRequest(buffer_arg) {
  return time_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_RegisterResponse(arg) {
  if (!(arg instanceof time_pb.RegisterResponse)) {
    throw new Error('Expected argument of type todo.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_RegisterResponse(buffer_arg) {
  return time_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_RoleDeleteReq(arg) {
  if (!(arg instanceof time_pb.RoleDeleteReq)) {
    throw new Error('Expected argument of type todo.RoleDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_RoleDeleteReq(buffer_arg) {
  return time_pb.RoleDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_RoleMutationReq(arg) {
  if (!(arg instanceof time_pb.RoleMutationReq)) {
    throw new Error('Expected argument of type todo.RoleMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_RoleMutationReq(buffer_arg) {
  return time_pb.RoleMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_RoleReq(arg) {
  if (!(arg instanceof time_pb.RoleReq)) {
    throw new Error('Expected argument of type todo.RoleReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_RoleReq(buffer_arg) {
  return time_pb.RoleReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_RoleRes(arg) {
  if (!(arg instanceof time_pb.RoleRes)) {
    throw new Error('Expected argument of type todo.RoleRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_RoleRes(buffer_arg) {
  return time_pb.RoleRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_SchemaReq(arg) {
  if (!(arg instanceof time_pb.SchemaReq)) {
    throw new Error('Expected argument of type todo.SchemaReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_SchemaReq(buffer_arg) {
  return time_pb.SchemaReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_SchemaRes(arg) {
  if (!(arg instanceof time_pb.SchemaRes)) {
    throw new Error('Expected argument of type todo.SchemaRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_SchemaRes(buffer_arg) {
  return time_pb.SchemaRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_StatusDeleteReq(arg) {
  if (!(arg instanceof time_pb.StatusDeleteReq)) {
    throw new Error('Expected argument of type todo.StatusDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_StatusDeleteReq(buffer_arg) {
  return time_pb.StatusDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_StatusMutationReq(arg) {
  if (!(arg instanceof time_pb.StatusMutationReq)) {
    throw new Error('Expected argument of type todo.StatusMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_StatusMutationReq(buffer_arg) {
  return time_pb.StatusMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_StatusReq(arg) {
  if (!(arg instanceof time_pb.StatusReq)) {
    throw new Error('Expected argument of type todo.StatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_StatusReq(buffer_arg) {
  return time_pb.StatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_StatusRes(arg) {
  if (!(arg instanceof time_pb.StatusRes)) {
    throw new Error('Expected argument of type todo.StatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_StatusRes(buffer_arg) {
  return time_pb.StatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_SystemSettingGeneralReq(arg) {
  if (!(arg instanceof time_pb.SystemSettingGeneralReq)) {
    throw new Error('Expected argument of type todo.SystemSettingGeneralReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_SystemSettingGeneralReq(buffer_arg) {
  return time_pb.SystemSettingGeneralReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_SystemSettingGeneralRes(arg) {
  if (!(arg instanceof time_pb.SystemSettingGeneralRes)) {
    throw new Error('Expected argument of type todo.SystemSettingGeneralRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_SystemSettingGeneralRes(buffer_arg) {
  return time_pb.SystemSettingGeneralRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_SystemSettingMutationGeneralReq(arg) {
  if (!(arg instanceof time_pb.SystemSettingMutationGeneralReq)) {
    throw new Error('Expected argument of type todo.SystemSettingMutationGeneralReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_SystemSettingMutationGeneralReq(buffer_arg) {
  return time_pb.SystemSettingMutationGeneralReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_TypeDeleteReq(arg) {
  if (!(arg instanceof time_pb.TypeDeleteReq)) {
    throw new Error('Expected argument of type todo.TypeDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_TypeDeleteReq(buffer_arg) {
  return time_pb.TypeDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_TypeMutationReq(arg) {
  if (!(arg instanceof time_pb.TypeMutationReq)) {
    throw new Error('Expected argument of type todo.TypeMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_TypeMutationReq(buffer_arg) {
  return time_pb.TypeMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_TypeReq(arg) {
  if (!(arg instanceof time_pb.TypeReq)) {
    throw new Error('Expected argument of type todo.TypeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_TypeReq(buffer_arg) {
  return time_pb.TypeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_TypeRes(arg) {
  if (!(arg instanceof time_pb.TypeRes)) {
    throw new Error('Expected argument of type todo.TypeRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_TypeRes(buffer_arg) {
  return time_pb.TypeRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UserDeleteReq(arg) {
  if (!(arg instanceof time_pb.UserDeleteReq)) {
    throw new Error('Expected argument of type todo.UserDeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UserDeleteReq(buffer_arg) {
  return time_pb.UserDeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UserMutationReq(arg) {
  if (!(arg instanceof time_pb.UserMutationReq)) {
    throw new Error('Expected argument of type todo.UserMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UserMutationReq(buffer_arg) {
  return time_pb.UserMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UserReq(arg) {
  if (!(arg instanceof time_pb.UserReq)) {
    throw new Error('Expected argument of type todo.UserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UserReq(buffer_arg) {
  return time_pb.UserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UserRes(arg) {
  if (!(arg instanceof time_pb.UserRes)) {
    throw new Error('Expected argument of type todo.UserRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UserRes(buffer_arg) {
  return time_pb.UserRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UsersSettingMutationReq(arg) {
  if (!(arg instanceof time_pb.UsersSettingMutationReq)) {
    throw new Error('Expected argument of type todo.UsersSettingMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UsersSettingMutationReq(buffer_arg) {
  return time_pb.UsersSettingMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UsersSettingReq(arg) {
  if (!(arg instanceof time_pb.UsersSettingReq)) {
    throw new Error('Expected argument of type todo.UsersSettingReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UsersSettingReq(buffer_arg) {
  return time_pb.UsersSettingReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UsersSettingRes(arg) {
  if (!(arg instanceof time_pb.UsersSettingRes)) {
    throw new Error('Expected argument of type todo.UsersSettingRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UsersSettingRes(buffer_arg) {
  return time_pb.UsersSettingRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_WorkFlowSettingMutationReq(arg) {
  if (!(arg instanceof time_pb.WorkFlowSettingMutationReq)) {
    throw new Error('Expected argument of type todo.WorkFlowSettingMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_WorkFlowSettingMutationReq(buffer_arg) {
  return time_pb.WorkFlowSettingMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_WorkFlowSettingReq(arg) {
  if (!(arg instanceof time_pb.WorkFlowSettingReq)) {
    throw new Error('Expected argument of type todo.WorkFlowSettingReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_WorkFlowSettingReq(buffer_arg) {
  return time_pb.WorkFlowSettingReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_WorkFlowSettingRes(arg) {
  if (!(arg instanceof time_pb.WorkFlowSettingRes)) {
    throw new Error('Expected argument of type todo.WorkFlowSettingRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_WorkFlowSettingRes(buffer_arg) {
  return time_pb.WorkFlowSettingRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_WorkPackageSettingMutationReq(arg) {
  if (!(arg instanceof time_pb.WorkPackageSettingMutationReq)) {
    throw new Error('Expected argument of type todo.WorkPackageSettingMutationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_WorkPackageSettingMutationReq(buffer_arg) {
  return time_pb.WorkPackageSettingMutationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_WorkPackageSettingReq(arg) {
  if (!(arg instanceof time_pb.WorkPackageSettingReq)) {
    throw new Error('Expected argument of type todo.WorkPackageSettingReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_WorkPackageSettingReq(buffer_arg) {
  return time_pb.WorkPackageSettingReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_WorkPackageSettingRes(arg) {
  if (!(arg instanceof time_pb.WorkPackageSettingRes)) {
    throw new Error('Expected argument of type todo.WorkPackageSettingRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_WorkPackageSettingRes(buffer_arg) {
  return time_pb.WorkPackageSettingRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountServiceService = exports.AccountServiceService = {
  register: {
    path: '/todo.AccountService/Register',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.RegisterRequest,
    responseType: time_pb.RegisterResponse,
    requestSerialize: serialize_todo_RegisterRequest,
    requestDeserialize: deserialize_todo_RegisterRequest,
    responseSerialize: serialize_todo_RegisterResponse,
    responseDeserialize: deserialize_todo_RegisterResponse,
  },
  logout: {
    path: '/todo.AccountService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.LogoutRequest,
    responseType: time_pb.LogoutResponse,
    requestSerialize: serialize_todo_LogoutRequest,
    requestDeserialize: deserialize_todo_LogoutRequest,
    responseSerialize: serialize_todo_LogoutResponse,
    responseDeserialize: deserialize_todo_LogoutResponse,
  },
  login: {
    path: '/todo.AccountService/Login',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.LoginRequest,
    responseType: time_pb.LoginResponse,
    requestSerialize: serialize_todo_LoginRequest,
    requestDeserialize: deserialize_todo_LoginRequest,
    responseSerialize: serialize_todo_LoginResponse,
    responseDeserialize: deserialize_todo_LoginResponse,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
var AdminServiceService = exports.AdminServiceService = {
  getMenu: {
    path: '/todo.AdminService/getMenu',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.MenuRequest,
    responseType: time_pb.MenuResponse,
    requestSerialize: serialize_todo_MenuRequest,
    requestDeserialize: deserialize_todo_MenuRequest,
    responseSerialize: serialize_todo_MenuResponse,
    responseDeserialize: deserialize_todo_MenuResponse,
  },
  getUser: {
    path: '/todo.AdminService/getUser',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.UserReq,
    responseType: time_pb.UserRes,
    requestSerialize: serialize_todo_UserReq,
    requestDeserialize: deserialize_todo_UserReq,
    responseSerialize: serialize_todo_UserRes,
    responseDeserialize: deserialize_todo_UserRes,
  },
  mutateUser: {
    path: '/todo.AdminService/mutateUser',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.UserMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_UserMutationReq,
    requestDeserialize: deserialize_todo_UserMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteUser: {
    path: '/todo.AdminService/deleteUser',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.UserDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_UserDeleteReq,
    requestDeserialize: deserialize_todo_UserDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getGroup: {
    path: '/todo.AdminService/getGroup',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.GroupReq,
    responseType: time_pb.GroupRes,
    requestSerialize: serialize_todo_GroupReq,
    requestDeserialize: deserialize_todo_GroupReq,
    responseSerialize: serialize_todo_GroupRes,
    responseDeserialize: deserialize_todo_GroupRes,
  },
  mutateGroup: {
    path: '/todo.AdminService/mutateGroup',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.GroupMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_GroupMutationReq,
    requestDeserialize: deserialize_todo_GroupMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteGroup: {
    path: '/todo.AdminService/deleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.GroupDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_GroupDeleteReq,
    requestDeserialize: deserialize_todo_GroupDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getColor: {
    path: '/todo.AdminService/getColor',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.ColorReq,
    responseType: time_pb.ColorRes,
    requestSerialize: serialize_todo_ColorReq,
    requestDeserialize: deserialize_todo_ColorReq,
    responseSerialize: serialize_todo_ColorRes,
    responseDeserialize: deserialize_todo_ColorRes,
  },
  mutateColor: {
    path: '/todo.AdminService/mutateColor',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.ColorMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_ColorMutationReq,
    requestDeserialize: deserialize_todo_ColorMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteColor: {
    path: '/todo.AdminService/deleteColor',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.ColorDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_ColorDeleteReq,
    requestDeserialize: deserialize_todo_ColorDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getType: {
    path: '/todo.AdminService/getType',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.TypeReq,
    responseType: time_pb.TypeRes,
    requestSerialize: serialize_todo_TypeReq,
    requestDeserialize: deserialize_todo_TypeReq,
    responseSerialize: serialize_todo_TypeRes,
    responseDeserialize: deserialize_todo_TypeRes,
  },
  mutateType: {
    path: '/todo.AdminService/mutateType',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.TypeMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_TypeMutationReq,
    requestDeserialize: deserialize_todo_TypeMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteType: {
    path: '/todo.AdminService/deleteType',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.TypeDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_TypeDeleteReq,
    requestDeserialize: deserialize_todo_TypeDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getStatus: {
    path: '/todo.AdminService/getStatus',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.StatusReq,
    responseType: time_pb.StatusRes,
    requestSerialize: serialize_todo_StatusReq,
    requestDeserialize: deserialize_todo_StatusReq,
    responseSerialize: serialize_todo_StatusRes,
    responseDeserialize: deserialize_todo_StatusRes,
  },
  mutateStatus: {
    path: '/todo.AdminService/mutateStatus',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.StatusMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_StatusMutationReq,
    requestDeserialize: deserialize_todo_StatusMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteStatus: {
    path: '/todo.AdminService/deleteStatus',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.StatusDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_StatusDeleteReq,
    requestDeserialize: deserialize_todo_StatusDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getActivity: {
    path: '/todo.AdminService/getActivity',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.ActivityReq,
    responseType: time_pb.ActivityRes,
    requestSerialize: serialize_todo_ActivityReq,
    requestDeserialize: deserialize_todo_ActivityReq,
    responseSerialize: serialize_todo_ActivityRes,
    responseDeserialize: deserialize_todo_ActivityRes,
  },
  mutateActivity: {
    path: '/todo.AdminService/mutateActivity',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.ActivityMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_ActivityMutationReq,
    requestDeserialize: deserialize_todo_ActivityMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteActivity: {
    path: '/todo.AdminService/deleteActivity',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.ActivityDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_ActivityDeleteReq,
    requestDeserialize: deserialize_todo_ActivityDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getPriority: {
    path: '/todo.AdminService/getPriority',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.PriorityReq,
    responseType: time_pb.PriorityRes,
    requestSerialize: serialize_todo_PriorityReq,
    requestDeserialize: deserialize_todo_PriorityReq,
    responseSerialize: serialize_todo_PriorityRes,
    responseDeserialize: deserialize_todo_PriorityRes,
  },
  mutatePriority: {
    path: '/todo.AdminService/mutatePriority',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.PriorityMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_PriorityMutationReq,
    requestDeserialize: deserialize_todo_PriorityMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deletePriority: {
    path: '/todo.AdminService/deletePriority',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.PriorityDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_PriorityDeleteReq,
    requestDeserialize: deserialize_todo_PriorityDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getDocumentCategory: {
    path: '/todo.AdminService/getDocumentCategory',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.DocumentCategoryReq,
    responseType: time_pb.DocumentCategoryRes,
    requestSerialize: serialize_todo_DocumentCategoryReq,
    requestDeserialize: deserialize_todo_DocumentCategoryReq,
    responseSerialize: serialize_todo_DocumentCategoryRes,
    responseDeserialize: deserialize_todo_DocumentCategoryRes,
  },
  mutateDocumentCategory: {
    path: '/todo.AdminService/mutateDocumentCategory',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.DocumentCategoryMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_DocumentCategoryMutationReq,
    requestDeserialize: deserialize_todo_DocumentCategoryMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteDocumentCategory: {
    path: '/todo.AdminService/deleteDocumentCategory',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.DocumentCategoryDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_DocumentCategoryDeleteReq,
    requestDeserialize: deserialize_todo_DocumentCategoryDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getCategory: {
    path: '/todo.AdminService/getCategory',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.CategoryReq,
    responseType: time_pb.CategoryRes,
    requestSerialize: serialize_todo_CategoryReq,
    requestDeserialize: deserialize_todo_CategoryReq,
    responseSerialize: serialize_todo_CategoryRes,
    responseDeserialize: deserialize_todo_CategoryRes,
  },
  mutateCategory: {
    path: '/todo.AdminService/mutateCategory',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.CategoryMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_CategoryMutationReq,
    requestDeserialize: deserialize_todo_CategoryMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteCategory: {
    path: '/todo.AdminService/deleteCategory',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.CategoryDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_CategoryDeleteReq,
    requestDeserialize: deserialize_todo_CategoryDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getRole: {
    path: '/todo.AdminService/getRole',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.RoleReq,
    responseType: time_pb.RoleRes,
    requestSerialize: serialize_todo_RoleReq,
    requestDeserialize: deserialize_todo_RoleReq,
    responseSerialize: serialize_todo_RoleRes,
    responseDeserialize: deserialize_todo_RoleRes,
  },
  mutateRole: {
    path: '/todo.AdminService/mutateRole',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.RoleMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_RoleMutationReq,
    requestDeserialize: deserialize_todo_RoleMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteRole: {
    path: '/todo.AdminService/deleteRole',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.RoleDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_RoleDeleteReq,
    requestDeserialize: deserialize_todo_RoleDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getAnnouncement: {
    path: '/todo.AdminService/getAnnouncement',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.AnnouncementReq,
    responseType: time_pb.AnnouncementRes,
    requestSerialize: serialize_todo_AnnouncementReq,
    requestDeserialize: deserialize_todo_AnnouncementReq,
    responseSerialize: serialize_todo_AnnouncementRes,
    responseDeserialize: deserialize_todo_AnnouncementRes,
  },
  mutateAnnouncement: {
    path: '/todo.AdminService/mutateAnnouncement',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.AnnouncementMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_AnnouncementMutationReq,
    requestDeserialize: deserialize_todo_AnnouncementMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteAnnouncement: {
    path: '/todo.AdminService/deleteAnnouncement',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.AnnouncementDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_AnnouncementDeleteReq,
    requestDeserialize: deserialize_todo_AnnouncementDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getNews: {
    path: '/todo.AdminService/getNews',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.NewsReq,
    responseType: time_pb.NewsRes,
    requestSerialize: serialize_todo_NewsReq,
    requestDeserialize: deserialize_todo_NewsReq,
    responseSerialize: serialize_todo_NewsRes,
    responseDeserialize: deserialize_todo_NewsRes,
  },
  mutateNews: {
    path: '/todo.AdminService/mutateNews',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.NewsMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_NewsMutationReq,
    requestDeserialize: deserialize_todo_NewsMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  deleteNews: {
    path: '/todo.AdminService/deleteNews',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.NewsDeleteReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_NewsDeleteReq,
    requestDeserialize: deserialize_todo_NewsDeleteReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getSchema: {
    path: '/todo.AdminService/getSchema',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.SchemaReq,
    responseType: time_pb.SchemaRes,
    requestSerialize: serialize_todo_SchemaReq,
    requestDeserialize: deserialize_todo_SchemaReq,
    responseSerialize: serialize_todo_SchemaRes,
    responseDeserialize: deserialize_todo_SchemaRes,
  },
  getProfile: {
    path: '/todo.AdminService/getProfile',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.ProfileReq,
    responseType: time_pb.ProfileRes,
    requestSerialize: serialize_todo_ProfileReq,
    requestDeserialize: deserialize_todo_ProfileReq,
    responseSerialize: serialize_todo_ProfileRes,
    responseDeserialize: deserialize_todo_ProfileRes,
  },
  mutateProfile: {
    path: '/todo.AdminService/mutateProfile',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.ProfileMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_ProfileMutationReq,
    requestDeserialize: deserialize_todo_ProfileMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getUsersSetting: {
    path: '/todo.AdminService/getUsersSetting',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.UsersSettingReq,
    responseType: time_pb.UsersSettingRes,
    requestSerialize: serialize_todo_UsersSettingReq,
    requestDeserialize: deserialize_todo_UsersSettingReq,
    responseSerialize: serialize_todo_UsersSettingRes,
    responseDeserialize: deserialize_todo_UsersSettingRes,
  },
  mutateUsersSetting: {
    path: '/todo.AdminService/mutateUsersSetting',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.UsersSettingMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_UsersSettingMutationReq,
    requestDeserialize: deserialize_todo_UsersSettingMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getWorkPackageSetting: {
    path: '/todo.AdminService/getWorkPackageSetting',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.WorkPackageSettingReq,
    responseType: time_pb.WorkPackageSettingRes,
    requestSerialize: serialize_todo_WorkPackageSettingReq,
    requestDeserialize: deserialize_todo_WorkPackageSettingReq,
    responseSerialize: serialize_todo_WorkPackageSettingRes,
    responseDeserialize: deserialize_todo_WorkPackageSettingRes,
  },
  mutateWorkPackageSetting: {
    path: '/todo.AdminService/mutateWorkPackageSetting',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.WorkPackageSettingMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_WorkPackageSettingMutationReq,
    requestDeserialize: deserialize_todo_WorkPackageSettingMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getWorkFlowSetting: {
    path: '/todo.AdminService/getWorkFlowSetting',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.WorkFlowSettingReq,
    responseType: time_pb.WorkFlowSettingRes,
    requestSerialize: serialize_todo_WorkFlowSettingReq,
    requestDeserialize: deserialize_todo_WorkFlowSettingReq,
    responseSerialize: serialize_todo_WorkFlowSettingRes,
    responseDeserialize: deserialize_todo_WorkFlowSettingRes,
  },
  mutateWorkFlowSetting: {
    path: '/todo.AdminService/mutateWorkFlowSetting',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.WorkFlowSettingMutationReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_WorkFlowSettingMutationReq,
    requestDeserialize: deserialize_todo_WorkFlowSettingMutationReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
  getSystemGeneralSetting: {
    path: '/todo.AdminService/getSystemGeneralSetting',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.SystemSettingGeneralReq,
    responseType: time_pb.SystemSettingGeneralRes,
    requestSerialize: serialize_todo_SystemSettingGeneralReq,
    requestDeserialize: deserialize_todo_SystemSettingGeneralReq,
    responseSerialize: serialize_todo_SystemSettingGeneralRes,
    responseDeserialize: deserialize_todo_SystemSettingGeneralRes,
  },
  mutateSystemGeneralSetting: {
    path: '/todo.AdminService/mutateSystemGeneralSetting',
    requestStream: false,
    responseStream: false,
    requestType: time_pb.SystemSettingMutationGeneralReq,
    responseType: time_pb.CallStatus,
    requestSerialize: serialize_todo_SystemSettingMutationGeneralReq,
    requestDeserialize: deserialize_todo_SystemSettingMutationGeneralReq,
    responseSerialize: serialize_todo_CallStatus,
    responseDeserialize: deserialize_todo_CallStatus,
  },
};

exports.AdminServiceClient = grpc.makeGenericClientConstructor(AdminServiceService);
