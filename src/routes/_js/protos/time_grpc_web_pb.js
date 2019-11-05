/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var permission_pb = require('./permission_pb.js')
const proto = {};
proto.todo = require('./time_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.AccountServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.AccountServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.RegisterRequest,
 *   !proto.todo.RegisterResponse>}
 */
const methodDescriptor_AccountService_Register = new grpc.web.MethodDescriptor(
  '/todo.AccountService/Register',
  grpc.web.MethodType.UNARY,
  proto.todo.RegisterRequest,
  proto.todo.RegisterResponse,
  /**
   * @param {!proto.todo.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.RegisterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.RegisterRequest,
 *   !proto.todo.RegisterResponse>}
 */
const methodInfo_AccountService_Register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.RegisterResponse,
  /**
   * @param {!proto.todo.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.RegisterResponse.deserializeBinary
);


/**
 * @param {!proto.todo.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.RegisterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.RegisterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AccountServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AccountService/Register',
      request,
      metadata || {},
      methodDescriptor_AccountService_Register,
      callback);
};


/**
 * @param {!proto.todo.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.RegisterResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.AccountServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AccountService/Register',
      request,
      metadata || {},
      methodDescriptor_AccountService_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.LogoutRequest,
 *   !proto.todo.LogoutResponse>}
 */
const methodDescriptor_AccountService_Logout = new grpc.web.MethodDescriptor(
  '/todo.AccountService/Logout',
  grpc.web.MethodType.UNARY,
  proto.todo.LogoutRequest,
  proto.todo.LogoutResponse,
  /**
   * @param {!proto.todo.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.LogoutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.LogoutRequest,
 *   !proto.todo.LogoutResponse>}
 */
const methodInfo_AccountService_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.LogoutResponse,
  /**
   * @param {!proto.todo.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.todo.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AccountServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AccountService/Logout',
      request,
      metadata || {},
      methodDescriptor_AccountService_Logout,
      callback);
};


/**
 * @param {!proto.todo.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.LogoutResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.AccountServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AccountService/Logout',
      request,
      metadata || {},
      methodDescriptor_AccountService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.LoginRequest,
 *   !proto.todo.LoginResponse>}
 */
const methodDescriptor_AccountService_Login = new grpc.web.MethodDescriptor(
  '/todo.AccountService/Login',
  grpc.web.MethodType.UNARY,
  proto.todo.LoginRequest,
  proto.todo.LoginResponse,
  /**
   * @param {!proto.todo.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.LoginRequest,
 *   !proto.todo.LoginResponse>}
 */
const methodInfo_AccountService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.LoginResponse,
  /**
   * @param {!proto.todo.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.todo.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AccountServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AccountService/Login',
      request,
      metadata || {},
      methodDescriptor_AccountService_Login,
      callback);
};


/**
 * @param {!proto.todo.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.AccountServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AccountService/Login',
      request,
      metadata || {},
      methodDescriptor_AccountService_Login);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.AdminServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.AdminServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.MenuRequest,
 *   !proto.todo.MenuResponse>}
 */
const methodDescriptor_AdminService_getMenu = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getMenu',
  grpc.web.MethodType.UNARY,
  proto.todo.MenuRequest,
  proto.todo.MenuResponse,
  /**
   * @param {!proto.todo.MenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.MenuResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.MenuRequest,
 *   !proto.todo.MenuResponse>}
 */
const methodInfo_AdminService_getMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.MenuResponse,
  /**
   * @param {!proto.todo.MenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.MenuResponse.deserializeBinary
);


/**
 * @param {!proto.todo.MenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.MenuResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.MenuResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getMenu',
      request,
      metadata || {},
      methodDescriptor_AdminService_getMenu,
      callback);
};


/**
 * @param {!proto.todo.MenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.MenuResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getMenu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getMenu',
      request,
      metadata || {},
      methodDescriptor_AdminService_getMenu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.UserReq,
 *   !proto.todo.UserRes>}
 */
const methodDescriptor_AdminService_getUser = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getUser',
  grpc.web.MethodType.UNARY,
  proto.todo.UserReq,
  proto.todo.UserRes,
  /**
   * @param {!proto.todo.UserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.UserRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.UserReq,
 *   !proto.todo.UserRes>}
 */
const methodInfo_AdminService_getUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.UserRes,
  /**
   * @param {!proto.todo.UserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.UserRes.deserializeBinary
);


/**
 * @param {!proto.todo.UserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.UserRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.UserRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getUser',
      request,
      metadata || {},
      methodDescriptor_AdminService_getUser,
      callback);
};


/**
 * @param {!proto.todo.UserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.UserRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getUser',
      request,
      metadata || {},
      methodDescriptor_AdminService_getUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.UserMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateUser = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateUser',
  grpc.web.MethodType.UNARY,
  proto.todo.UserMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.UserMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.UserMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.UserMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.UserMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateUser',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateUser,
      callback);
};


/**
 * @param {!proto.todo.UserMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateUser',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.UserDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteUser = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteUser',
  grpc.web.MethodType.UNARY,
  proto.todo.UserDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.UserDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.UserDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.UserDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.UserDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteUser',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteUser,
      callback);
};


/**
 * @param {!proto.todo.UserDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteUser',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.GroupReq,
 *   !proto.todo.GroupRes>}
 */
const methodDescriptor_AdminService_getGroup = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getGroup',
  grpc.web.MethodType.UNARY,
  proto.todo.GroupReq,
  proto.todo.GroupRes,
  /**
   * @param {!proto.todo.GroupReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.GroupRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.GroupReq,
 *   !proto.todo.GroupRes>}
 */
const methodInfo_AdminService_getGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.GroupRes,
  /**
   * @param {!proto.todo.GroupReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.GroupRes.deserializeBinary
);


/**
 * @param {!proto.todo.GroupReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.GroupRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.GroupRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getGroup',
      request,
      metadata || {},
      methodDescriptor_AdminService_getGroup,
      callback);
};


/**
 * @param {!proto.todo.GroupReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.GroupRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getGroup',
      request,
      metadata || {},
      methodDescriptor_AdminService_getGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.GroupMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateGroup = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateGroup',
  grpc.web.MethodType.UNARY,
  proto.todo.GroupMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.GroupMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.GroupMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.GroupMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.GroupMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateGroup',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateGroup,
      callback);
};


/**
 * @param {!proto.todo.GroupMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateGroup',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.GroupDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteGroup = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteGroup',
  grpc.web.MethodType.UNARY,
  proto.todo.GroupDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.GroupDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.GroupDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.GroupDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.GroupDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteGroup',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteGroup,
      callback);
};


/**
 * @param {!proto.todo.GroupDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteGroup',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.ColorReq,
 *   !proto.todo.ColorRes>}
 */
const methodDescriptor_AdminService_getColor = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getColor',
  grpc.web.MethodType.UNARY,
  proto.todo.ColorReq,
  proto.todo.ColorRes,
  /**
   * @param {!proto.todo.ColorReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.ColorRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.ColorReq,
 *   !proto.todo.ColorRes>}
 */
const methodInfo_AdminService_getColor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.ColorRes,
  /**
   * @param {!proto.todo.ColorReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.ColorRes.deserializeBinary
);


/**
 * @param {!proto.todo.ColorReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.ColorRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.ColorRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getColor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getColor',
      request,
      metadata || {},
      methodDescriptor_AdminService_getColor,
      callback);
};


/**
 * @param {!proto.todo.ColorReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.ColorRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getColor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getColor',
      request,
      metadata || {},
      methodDescriptor_AdminService_getColor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.ColorMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateColor = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateColor',
  grpc.web.MethodType.UNARY,
  proto.todo.ColorMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ColorMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.ColorMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateColor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ColorMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.ColorMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateColor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateColor',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateColor,
      callback);
};


/**
 * @param {!proto.todo.ColorMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateColor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateColor',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateColor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.ColorDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteColor = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteColor',
  grpc.web.MethodType.UNARY,
  proto.todo.ColorDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ColorDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.ColorDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteColor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ColorDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.ColorDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteColor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteColor',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteColor,
      callback);
};


/**
 * @param {!proto.todo.ColorDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteColor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteColor',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteColor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TypeReq,
 *   !proto.todo.TypeRes>}
 */
const methodDescriptor_AdminService_getType = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getType',
  grpc.web.MethodType.UNARY,
  proto.todo.TypeReq,
  proto.todo.TypeRes,
  /**
   * @param {!proto.todo.TypeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TypeRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.TypeReq,
 *   !proto.todo.TypeRes>}
 */
const methodInfo_AdminService_getType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.TypeRes,
  /**
   * @param {!proto.todo.TypeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TypeRes.deserializeBinary
);


/**
 * @param {!proto.todo.TypeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.TypeRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TypeRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getType',
      request,
      metadata || {},
      methodDescriptor_AdminService_getType,
      callback);
};


/**
 * @param {!proto.todo.TypeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TypeRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getType',
      request,
      metadata || {},
      methodDescriptor_AdminService_getType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TypeMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateType = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateType',
  grpc.web.MethodType.UNARY,
  proto.todo.TypeMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.TypeMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.TypeMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.TypeMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.TypeMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateType',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateType,
      callback);
};


/**
 * @param {!proto.todo.TypeMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateType',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TypeDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteType = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteType',
  grpc.web.MethodType.UNARY,
  proto.todo.TypeDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.TypeDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.TypeDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.TypeDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.TypeDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteType',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteType,
      callback);
};


/**
 * @param {!proto.todo.TypeDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteType',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.StatusReq,
 *   !proto.todo.StatusRes>}
 */
const methodDescriptor_AdminService_getStatus = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getStatus',
  grpc.web.MethodType.UNARY,
  proto.todo.StatusReq,
  proto.todo.StatusRes,
  /**
   * @param {!proto.todo.StatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.StatusRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.StatusReq,
 *   !proto.todo.StatusRes>}
 */
const methodInfo_AdminService_getStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.StatusRes,
  /**
   * @param {!proto.todo.StatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.StatusRes.deserializeBinary
);


/**
 * @param {!proto.todo.StatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.StatusRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.StatusRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getStatus',
      request,
      metadata || {},
      methodDescriptor_AdminService_getStatus,
      callback);
};


/**
 * @param {!proto.todo.StatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.StatusRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getStatus',
      request,
      metadata || {},
      methodDescriptor_AdminService_getStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.StatusMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateStatus = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateStatus',
  grpc.web.MethodType.UNARY,
  proto.todo.StatusMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.StatusMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.StatusMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.StatusMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.StatusMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateStatus',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateStatus,
      callback);
};


/**
 * @param {!proto.todo.StatusMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateStatus',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.StatusDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteStatus = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteStatus',
  grpc.web.MethodType.UNARY,
  proto.todo.StatusDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.StatusDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.StatusDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.StatusDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.StatusDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteStatus',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteStatus,
      callback);
};


/**
 * @param {!proto.todo.StatusDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteStatus',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.ActivityReq,
 *   !proto.todo.ActivityRes>}
 */
const methodDescriptor_AdminService_getActivity = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getActivity',
  grpc.web.MethodType.UNARY,
  proto.todo.ActivityReq,
  proto.todo.ActivityRes,
  /**
   * @param {!proto.todo.ActivityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.ActivityRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.ActivityReq,
 *   !proto.todo.ActivityRes>}
 */
const methodInfo_AdminService_getActivity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.ActivityRes,
  /**
   * @param {!proto.todo.ActivityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.ActivityRes.deserializeBinary
);


/**
 * @param {!proto.todo.ActivityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.ActivityRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.ActivityRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getActivity',
      request,
      metadata || {},
      methodDescriptor_AdminService_getActivity,
      callback);
};


/**
 * @param {!proto.todo.ActivityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.ActivityRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getActivity',
      request,
      metadata || {},
      methodDescriptor_AdminService_getActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.ActivityMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateActivity = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateActivity',
  grpc.web.MethodType.UNARY,
  proto.todo.ActivityMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ActivityMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.ActivityMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateActivity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ActivityMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.ActivityMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateActivity',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateActivity,
      callback);
};


/**
 * @param {!proto.todo.ActivityMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateActivity',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.ActivityDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteActivity = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteActivity',
  grpc.web.MethodType.UNARY,
  proto.todo.ActivityDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ActivityDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.ActivityDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteActivity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ActivityDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.ActivityDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteActivity',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteActivity,
      callback);
};


/**
 * @param {!proto.todo.ActivityDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteActivity',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.PriorityReq,
 *   !proto.todo.PriorityRes>}
 */
const methodDescriptor_AdminService_getPriority = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getPriority',
  grpc.web.MethodType.UNARY,
  proto.todo.PriorityReq,
  proto.todo.PriorityRes,
  /**
   * @param {!proto.todo.PriorityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.PriorityRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.PriorityReq,
 *   !proto.todo.PriorityRes>}
 */
const methodInfo_AdminService_getPriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.PriorityRes,
  /**
   * @param {!proto.todo.PriorityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.PriorityRes.deserializeBinary
);


/**
 * @param {!proto.todo.PriorityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.PriorityRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.PriorityRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getPriority',
      request,
      metadata || {},
      methodDescriptor_AdminService_getPriority,
      callback);
};


/**
 * @param {!proto.todo.PriorityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.PriorityRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getPriority',
      request,
      metadata || {},
      methodDescriptor_AdminService_getPriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.PriorityMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutatePriority = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutatePriority',
  grpc.web.MethodType.UNARY,
  proto.todo.PriorityMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.PriorityMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.PriorityMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutatePriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.PriorityMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.PriorityMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutatePriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutatePriority',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutatePriority,
      callback);
};


/**
 * @param {!proto.todo.PriorityMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutatePriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutatePriority',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutatePriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.PriorityDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deletePriority = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deletePriority',
  grpc.web.MethodType.UNARY,
  proto.todo.PriorityDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.PriorityDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.PriorityDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deletePriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.PriorityDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.PriorityDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deletePriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deletePriority',
      request,
      metadata || {},
      methodDescriptor_AdminService_deletePriority,
      callback);
};


/**
 * @param {!proto.todo.PriorityDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deletePriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deletePriority',
      request,
      metadata || {},
      methodDescriptor_AdminService_deletePriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.DocumentCategoryReq,
 *   !proto.todo.DocumentCategoryRes>}
 */
const methodDescriptor_AdminService_getDocumentCategory = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getDocumentCategory',
  grpc.web.MethodType.UNARY,
  proto.todo.DocumentCategoryReq,
  proto.todo.DocumentCategoryRes,
  /**
   * @param {!proto.todo.DocumentCategoryReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.DocumentCategoryRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.DocumentCategoryReq,
 *   !proto.todo.DocumentCategoryRes>}
 */
const methodInfo_AdminService_getDocumentCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.DocumentCategoryRes,
  /**
   * @param {!proto.todo.DocumentCategoryReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.DocumentCategoryRes.deserializeBinary
);


/**
 * @param {!proto.todo.DocumentCategoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.DocumentCategoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.DocumentCategoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getDocumentCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getDocumentCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_getDocumentCategory,
      callback);
};


/**
 * @param {!proto.todo.DocumentCategoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.DocumentCategoryRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getDocumentCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getDocumentCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_getDocumentCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.DocumentCategoryMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateDocumentCategory = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateDocumentCategory',
  grpc.web.MethodType.UNARY,
  proto.todo.DocumentCategoryMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.DocumentCategoryMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.DocumentCategoryMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateDocumentCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.DocumentCategoryMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.DocumentCategoryMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateDocumentCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateDocumentCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateDocumentCategory,
      callback);
};


/**
 * @param {!proto.todo.DocumentCategoryMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateDocumentCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateDocumentCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateDocumentCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.DocumentCategoryDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteDocumentCategory = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteDocumentCategory',
  grpc.web.MethodType.UNARY,
  proto.todo.DocumentCategoryDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.DocumentCategoryDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.DocumentCategoryDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteDocumentCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.DocumentCategoryDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.DocumentCategoryDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteDocumentCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteDocumentCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteDocumentCategory,
      callback);
};


/**
 * @param {!proto.todo.DocumentCategoryDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteDocumentCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteDocumentCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteDocumentCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.CategoryReq,
 *   !proto.todo.CategoryRes>}
 */
const methodDescriptor_AdminService_getCategory = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getCategory',
  grpc.web.MethodType.UNARY,
  proto.todo.CategoryReq,
  proto.todo.CategoryRes,
  /**
   * @param {!proto.todo.CategoryReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CategoryRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.CategoryReq,
 *   !proto.todo.CategoryRes>}
 */
const methodInfo_AdminService_getCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CategoryRes,
  /**
   * @param {!proto.todo.CategoryReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CategoryRes.deserializeBinary
);


/**
 * @param {!proto.todo.CategoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CategoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CategoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_getCategory,
      callback);
};


/**
 * @param {!proto.todo.CategoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CategoryRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_getCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.CategoryMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateCategory = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateCategory',
  grpc.web.MethodType.UNARY,
  proto.todo.CategoryMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.CategoryMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.CategoryMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.CategoryMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.CategoryMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateCategory,
      callback);
};


/**
 * @param {!proto.todo.CategoryMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.CategoryDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteCategory = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteCategory',
  grpc.web.MethodType.UNARY,
  proto.todo.CategoryDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.CategoryDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.CategoryDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.CategoryDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.CategoryDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteCategory,
      callback);
};


/**
 * @param {!proto.todo.CategoryDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteCategory',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.RoleReq,
 *   !proto.todo.RoleRes>}
 */
const methodDescriptor_AdminService_getRole = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getRole',
  grpc.web.MethodType.UNARY,
  proto.todo.RoleReq,
  proto.todo.RoleRes,
  /**
   * @param {!proto.todo.RoleReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.RoleRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.RoleReq,
 *   !proto.todo.RoleRes>}
 */
const methodInfo_AdminService_getRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.RoleRes,
  /**
   * @param {!proto.todo.RoleReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.RoleRes.deserializeBinary
);


/**
 * @param {!proto.todo.RoleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.RoleRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.RoleRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getRole',
      request,
      metadata || {},
      methodDescriptor_AdminService_getRole,
      callback);
};


/**
 * @param {!proto.todo.RoleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.RoleRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getRole',
      request,
      metadata || {},
      methodDescriptor_AdminService_getRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.RoleMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateRole = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateRole',
  grpc.web.MethodType.UNARY,
  proto.todo.RoleMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.RoleMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.RoleMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.RoleMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.RoleMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateRole',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateRole,
      callback);
};


/**
 * @param {!proto.todo.RoleMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateRole',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.RoleDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteRole = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteRole',
  grpc.web.MethodType.UNARY,
  proto.todo.RoleDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.RoleDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.RoleDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.RoleDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.RoleDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteRole',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteRole,
      callback);
};


/**
 * @param {!proto.todo.RoleDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteRole',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.AnnouncementReq,
 *   !proto.todo.AnnouncementRes>}
 */
const methodDescriptor_AdminService_getAnnouncement = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getAnnouncement',
  grpc.web.MethodType.UNARY,
  proto.todo.AnnouncementReq,
  proto.todo.AnnouncementRes,
  /**
   * @param {!proto.todo.AnnouncementReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.AnnouncementRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.AnnouncementReq,
 *   !proto.todo.AnnouncementRes>}
 */
const methodInfo_AdminService_getAnnouncement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.AnnouncementRes,
  /**
   * @param {!proto.todo.AnnouncementReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.AnnouncementRes.deserializeBinary
);


/**
 * @param {!proto.todo.AnnouncementReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.AnnouncementRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.AnnouncementRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getAnnouncement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getAnnouncement',
      request,
      metadata || {},
      methodDescriptor_AdminService_getAnnouncement,
      callback);
};


/**
 * @param {!proto.todo.AnnouncementReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.AnnouncementRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getAnnouncement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getAnnouncement',
      request,
      metadata || {},
      methodDescriptor_AdminService_getAnnouncement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.AnnouncementMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateAnnouncement = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateAnnouncement',
  grpc.web.MethodType.UNARY,
  proto.todo.AnnouncementMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.AnnouncementMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.AnnouncementMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateAnnouncement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.AnnouncementMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.AnnouncementMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateAnnouncement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateAnnouncement',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateAnnouncement,
      callback);
};


/**
 * @param {!proto.todo.AnnouncementMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateAnnouncement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateAnnouncement',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateAnnouncement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.AnnouncementDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteAnnouncement = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteAnnouncement',
  grpc.web.MethodType.UNARY,
  proto.todo.AnnouncementDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.AnnouncementDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.AnnouncementDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteAnnouncement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.AnnouncementDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.AnnouncementDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteAnnouncement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteAnnouncement',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteAnnouncement,
      callback);
};


/**
 * @param {!proto.todo.AnnouncementDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteAnnouncement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteAnnouncement',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteAnnouncement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.NewsReq,
 *   !proto.todo.NewsRes>}
 */
const methodDescriptor_AdminService_getNews = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getNews',
  grpc.web.MethodType.UNARY,
  proto.todo.NewsReq,
  proto.todo.NewsRes,
  /**
   * @param {!proto.todo.NewsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.NewsRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.NewsReq,
 *   !proto.todo.NewsRes>}
 */
const methodInfo_AdminService_getNews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.NewsRes,
  /**
   * @param {!proto.todo.NewsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.NewsRes.deserializeBinary
);


/**
 * @param {!proto.todo.NewsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.NewsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.NewsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getNews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getNews',
      request,
      metadata || {},
      methodDescriptor_AdminService_getNews,
      callback);
};


/**
 * @param {!proto.todo.NewsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.NewsRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getNews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getNews',
      request,
      metadata || {},
      methodDescriptor_AdminService_getNews);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.NewsMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateNews = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateNews',
  grpc.web.MethodType.UNARY,
  proto.todo.NewsMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.NewsMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.NewsMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateNews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.NewsMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.NewsMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateNews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateNews',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateNews,
      callback);
};


/**
 * @param {!proto.todo.NewsMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateNews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateNews',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateNews);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.NewsDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_deleteNews = new grpc.web.MethodDescriptor(
  '/todo.AdminService/deleteNews',
  grpc.web.MethodType.UNARY,
  proto.todo.NewsDeleteReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.NewsDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.NewsDeleteReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_deleteNews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.NewsDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.NewsDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.deleteNews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/deleteNews',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteNews,
      callback);
};


/**
 * @param {!proto.todo.NewsDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.deleteNews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/deleteNews',
      request,
      metadata || {},
      methodDescriptor_AdminService_deleteNews);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.SchemaReq,
 *   !proto.todo.SchemaRes>}
 */
const methodDescriptor_AdminService_getSchema = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getSchema',
  grpc.web.MethodType.UNARY,
  proto.todo.SchemaReq,
  proto.todo.SchemaRes,
  /**
   * @param {!proto.todo.SchemaReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.SchemaRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.SchemaReq,
 *   !proto.todo.SchemaRes>}
 */
const methodInfo_AdminService_getSchema = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.SchemaRes,
  /**
   * @param {!proto.todo.SchemaReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.SchemaRes.deserializeBinary
);


/**
 * @param {!proto.todo.SchemaReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.SchemaRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.SchemaRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getSchema =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getSchema',
      request,
      metadata || {},
      methodDescriptor_AdminService_getSchema,
      callback);
};


/**
 * @param {!proto.todo.SchemaReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.SchemaRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getSchema =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getSchema',
      request,
      metadata || {},
      methodDescriptor_AdminService_getSchema);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.ProfileReq,
 *   !proto.todo.ProfileRes>}
 */
const methodDescriptor_AdminService_getProfile = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getProfile',
  grpc.web.MethodType.UNARY,
  proto.todo.ProfileReq,
  proto.todo.ProfileRes,
  /**
   * @param {!proto.todo.ProfileReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.ProfileRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.ProfileReq,
 *   !proto.todo.ProfileRes>}
 */
const methodInfo_AdminService_getProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.ProfileRes,
  /**
   * @param {!proto.todo.ProfileReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.ProfileRes.deserializeBinary
);


/**
 * @param {!proto.todo.ProfileReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.ProfileRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.ProfileRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getProfile',
      request,
      metadata || {},
      methodDescriptor_AdminService_getProfile,
      callback);
};


/**
 * @param {!proto.todo.ProfileReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.ProfileRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getProfile',
      request,
      metadata || {},
      methodDescriptor_AdminService_getProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.ProfileMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateProfile = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateProfile',
  grpc.web.MethodType.UNARY,
  proto.todo.ProfileMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ProfileMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.ProfileMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.ProfileMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.ProfileMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateProfile',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateProfile,
      callback);
};


/**
 * @param {!proto.todo.ProfileMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateProfile',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.UsersSettingReq,
 *   !proto.todo.UsersSettingRes>}
 */
const methodDescriptor_AdminService_getUsersSetting = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getUsersSetting',
  grpc.web.MethodType.UNARY,
  proto.todo.UsersSettingReq,
  proto.todo.UsersSettingRes,
  /**
   * @param {!proto.todo.UsersSettingReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.UsersSettingRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.UsersSettingReq,
 *   !proto.todo.UsersSettingRes>}
 */
const methodInfo_AdminService_getUsersSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.UsersSettingRes,
  /**
   * @param {!proto.todo.UsersSettingReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.UsersSettingRes.deserializeBinary
);


/**
 * @param {!proto.todo.UsersSettingReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.UsersSettingRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.UsersSettingRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getUsersSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getUsersSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_getUsersSetting,
      callback);
};


/**
 * @param {!proto.todo.UsersSettingReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.UsersSettingRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getUsersSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getUsersSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_getUsersSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.UsersSettingMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateUsersSetting = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateUsersSetting',
  grpc.web.MethodType.UNARY,
  proto.todo.UsersSettingMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.UsersSettingMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.UsersSettingMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateUsersSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.UsersSettingMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.UsersSettingMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateUsersSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateUsersSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateUsersSetting,
      callback);
};


/**
 * @param {!proto.todo.UsersSettingMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateUsersSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateUsersSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateUsersSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.WorkPackageSettingReq,
 *   !proto.todo.WorkPackageSettingRes>}
 */
const methodDescriptor_AdminService_getWorkPackageSetting = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getWorkPackageSetting',
  grpc.web.MethodType.UNARY,
  proto.todo.WorkPackageSettingReq,
  proto.todo.WorkPackageSettingRes,
  /**
   * @param {!proto.todo.WorkPackageSettingReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.WorkPackageSettingRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.WorkPackageSettingReq,
 *   !proto.todo.WorkPackageSettingRes>}
 */
const methodInfo_AdminService_getWorkPackageSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.WorkPackageSettingRes,
  /**
   * @param {!proto.todo.WorkPackageSettingReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.WorkPackageSettingRes.deserializeBinary
);


/**
 * @param {!proto.todo.WorkPackageSettingReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.WorkPackageSettingRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.WorkPackageSettingRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getWorkPackageSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getWorkPackageSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_getWorkPackageSetting,
      callback);
};


/**
 * @param {!proto.todo.WorkPackageSettingReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.WorkPackageSettingRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getWorkPackageSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getWorkPackageSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_getWorkPackageSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.WorkPackageSettingMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateWorkPackageSetting = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateWorkPackageSetting',
  grpc.web.MethodType.UNARY,
  proto.todo.WorkPackageSettingMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.WorkPackageSettingMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.WorkPackageSettingMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateWorkPackageSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.WorkPackageSettingMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.WorkPackageSettingMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateWorkPackageSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateWorkPackageSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateWorkPackageSetting,
      callback);
};


/**
 * @param {!proto.todo.WorkPackageSettingMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateWorkPackageSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateWorkPackageSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateWorkPackageSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.WorkFlowSettingReq,
 *   !proto.todo.WorkFlowSettingRes>}
 */
const methodDescriptor_AdminService_getWorkFlowSetting = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getWorkFlowSetting',
  grpc.web.MethodType.UNARY,
  proto.todo.WorkFlowSettingReq,
  proto.todo.WorkFlowSettingRes,
  /**
   * @param {!proto.todo.WorkFlowSettingReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.WorkFlowSettingRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.WorkFlowSettingReq,
 *   !proto.todo.WorkFlowSettingRes>}
 */
const methodInfo_AdminService_getWorkFlowSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.WorkFlowSettingRes,
  /**
   * @param {!proto.todo.WorkFlowSettingReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.WorkFlowSettingRes.deserializeBinary
);


/**
 * @param {!proto.todo.WorkFlowSettingReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.WorkFlowSettingRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.WorkFlowSettingRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getWorkFlowSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getWorkFlowSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_getWorkFlowSetting,
      callback);
};


/**
 * @param {!proto.todo.WorkFlowSettingReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.WorkFlowSettingRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getWorkFlowSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getWorkFlowSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_getWorkFlowSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.WorkFlowSettingMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateWorkFlowSetting = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateWorkFlowSetting',
  grpc.web.MethodType.UNARY,
  proto.todo.WorkFlowSettingMutationReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.WorkFlowSettingMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.WorkFlowSettingMutationReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateWorkFlowSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.WorkFlowSettingMutationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.WorkFlowSettingMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateWorkFlowSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateWorkFlowSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateWorkFlowSetting,
      callback);
};


/**
 * @param {!proto.todo.WorkFlowSettingMutationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateWorkFlowSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateWorkFlowSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateWorkFlowSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.SystemSettingGeneralReq,
 *   !proto.todo.SystemSettingGeneralRes>}
 */
const methodDescriptor_AdminService_getSystemGeneralSetting = new grpc.web.MethodDescriptor(
  '/todo.AdminService/getSystemGeneralSetting',
  grpc.web.MethodType.UNARY,
  proto.todo.SystemSettingGeneralReq,
  proto.todo.SystemSettingGeneralRes,
  /**
   * @param {!proto.todo.SystemSettingGeneralReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.SystemSettingGeneralRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.SystemSettingGeneralReq,
 *   !proto.todo.SystemSettingGeneralRes>}
 */
const methodInfo_AdminService_getSystemGeneralSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.SystemSettingGeneralRes,
  /**
   * @param {!proto.todo.SystemSettingGeneralReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.SystemSettingGeneralRes.deserializeBinary
);


/**
 * @param {!proto.todo.SystemSettingGeneralReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.SystemSettingGeneralRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.SystemSettingGeneralRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.getSystemGeneralSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/getSystemGeneralSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_getSystemGeneralSetting,
      callback);
};


/**
 * @param {!proto.todo.SystemSettingGeneralReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.SystemSettingGeneralRes>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.getSystemGeneralSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/getSystemGeneralSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_getSystemGeneralSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.SystemSettingMutationGeneralReq,
 *   !proto.todo.CallStatus>}
 */
const methodDescriptor_AdminService_mutateSystemGeneralSetting = new grpc.web.MethodDescriptor(
  '/todo.AdminService/mutateSystemGeneralSetting',
  grpc.web.MethodType.UNARY,
  proto.todo.SystemSettingMutationGeneralReq,
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.SystemSettingMutationGeneralReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.SystemSettingMutationGeneralReq,
 *   !proto.todo.CallStatus>}
 */
const methodInfo_AdminService_mutateSystemGeneralSetting = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CallStatus,
  /**
   * @param {!proto.todo.SystemSettingMutationGeneralReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CallStatus.deserializeBinary
);


/**
 * @param {!proto.todo.SystemSettingMutationGeneralReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CallStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CallStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.AdminServiceClient.prototype.mutateSystemGeneralSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.AdminService/mutateSystemGeneralSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateSystemGeneralSetting,
      callback);
};


/**
 * @param {!proto.todo.SystemSettingMutationGeneralReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CallStatus>}
 *     A native promise that resolves to the response
 */
proto.todo.AdminServicePromiseClient.prototype.mutateSystemGeneralSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.AdminService/mutateSystemGeneralSetting',
      request,
      metadata || {},
      methodDescriptor_AdminService_mutateSystemGeneralSetting);
};


module.exports = proto.todo;

