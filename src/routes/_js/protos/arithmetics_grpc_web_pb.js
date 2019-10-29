/**
 * @fileoverview gRPC-Web generated client stub for arithmetics
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.arithmetics = require('./arithmetics_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.arithmetics.ArithmeticsClient =
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
proto.arithmetics.ArithmeticsPromiseClient =
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
 *   !proto.arithmetics.TwoValueRequest,
 *   !proto.arithmetics.OneValueReply>}
 */
const methodDescriptor_Arithmetics_Add = new grpc.web.MethodDescriptor(
  '/arithmetics.Arithmetics/Add',
  grpc.web.MethodType.UNARY,
  proto.arithmetics.TwoValueRequest,
  proto.arithmetics.OneValueReply,
  /**
   * @param {!proto.arithmetics.TwoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.arithmetics.OneValueReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arithmetics.TwoValueRequest,
 *   !proto.arithmetics.OneValueReply>}
 */
const methodInfo_Arithmetics_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arithmetics.OneValueReply,
  /**
   * @param {!proto.arithmetics.TwoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.arithmetics.OneValueReply.deserializeBinary
);


/**
 * @param {!proto.arithmetics.TwoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arithmetics.OneValueReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arithmetics.OneValueReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arithmetics.ArithmeticsClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arithmetics.Arithmetics/Add',
      request,
      metadata || {},
      methodDescriptor_Arithmetics_Add,
      callback);
};


/**
 * @param {!proto.arithmetics.TwoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arithmetics.OneValueReply>}
 *     A native promise that resolves to the response
 */
proto.arithmetics.ArithmeticsPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/arithmetics.Arithmetics/Add',
      request,
      metadata || {},
      methodDescriptor_Arithmetics_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.arithmetics.TwoValueRequest,
 *   !proto.arithmetics.OneValueReply>}
 */
const methodDescriptor_Arithmetics_Minus = new grpc.web.MethodDescriptor(
  '/arithmetics.Arithmetics/Minus',
  grpc.web.MethodType.UNARY,
  proto.arithmetics.TwoValueRequest,
  proto.arithmetics.OneValueReply,
  /**
   * @param {!proto.arithmetics.TwoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.arithmetics.OneValueReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arithmetics.TwoValueRequest,
 *   !proto.arithmetics.OneValueReply>}
 */
const methodInfo_Arithmetics_Minus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arithmetics.OneValueReply,
  /**
   * @param {!proto.arithmetics.TwoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.arithmetics.OneValueReply.deserializeBinary
);


/**
 * @param {!proto.arithmetics.TwoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arithmetics.OneValueReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arithmetics.OneValueReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arithmetics.ArithmeticsClient.prototype.minus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arithmetics.Arithmetics/Minus',
      request,
      metadata || {},
      methodDescriptor_Arithmetics_Minus,
      callback);
};


/**
 * @param {!proto.arithmetics.TwoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arithmetics.OneValueReply>}
 *     A native promise that resolves to the response
 */
proto.arithmetics.ArithmeticsPromiseClient.prototype.minus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/arithmetics.Arithmetics/Minus',
      request,
      metadata || {},
      methodDescriptor_Arithmetics_Minus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.arithmetics.TwoValueRequest,
 *   !proto.arithmetics.OneValueReply>}
 */
const methodDescriptor_Arithmetics_Multiply = new grpc.web.MethodDescriptor(
  '/arithmetics.Arithmetics/Multiply',
  grpc.web.MethodType.UNARY,
  proto.arithmetics.TwoValueRequest,
  proto.arithmetics.OneValueReply,
  /**
   * @param {!proto.arithmetics.TwoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.arithmetics.OneValueReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arithmetics.TwoValueRequest,
 *   !proto.arithmetics.OneValueReply>}
 */
const methodInfo_Arithmetics_Multiply = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arithmetics.OneValueReply,
  /**
   * @param {!proto.arithmetics.TwoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.arithmetics.OneValueReply.deserializeBinary
);


/**
 * @param {!proto.arithmetics.TwoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arithmetics.OneValueReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arithmetics.OneValueReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arithmetics.ArithmeticsClient.prototype.multiply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arithmetics.Arithmetics/Multiply',
      request,
      metadata || {},
      methodDescriptor_Arithmetics_Multiply,
      callback);
};


/**
 * @param {!proto.arithmetics.TwoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arithmetics.OneValueReply>}
 *     A native promise that resolves to the response
 */
proto.arithmetics.ArithmeticsPromiseClient.prototype.multiply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/arithmetics.Arithmetics/Multiply',
      request,
      metadata || {},
      methodDescriptor_Arithmetics_Multiply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.arithmetics.TwoValueRequest,
 *   !proto.arithmetics.OneValueReply>}
 */
const methodDescriptor_Arithmetics_Divide = new grpc.web.MethodDescriptor(
  '/arithmetics.Arithmetics/Divide',
  grpc.web.MethodType.UNARY,
  proto.arithmetics.TwoValueRequest,
  proto.arithmetics.OneValueReply,
  /**
   * @param {!proto.arithmetics.TwoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.arithmetics.OneValueReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.arithmetics.TwoValueRequest,
 *   !proto.arithmetics.OneValueReply>}
 */
const methodInfo_Arithmetics_Divide = new grpc.web.AbstractClientBase.MethodInfo(
  proto.arithmetics.OneValueReply,
  /**
   * @param {!proto.arithmetics.TwoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.arithmetics.OneValueReply.deserializeBinary
);


/**
 * @param {!proto.arithmetics.TwoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.arithmetics.OneValueReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.arithmetics.OneValueReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.arithmetics.ArithmeticsClient.prototype.divide =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/arithmetics.Arithmetics/Divide',
      request,
      metadata || {},
      methodDescriptor_Arithmetics_Divide,
      callback);
};


/**
 * @param {!proto.arithmetics.TwoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.arithmetics.OneValueReply>}
 *     A native promise that resolves to the response
 */
proto.arithmetics.ArithmeticsPromiseClient.prototype.divide =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/arithmetics.Arithmetics/Divide',
      request,
      metadata || {},
      methodDescriptor_Arithmetics_Divide);
};


module.exports = proto.arithmetics;

