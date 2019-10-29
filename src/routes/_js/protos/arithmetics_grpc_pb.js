// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// [START declaration]
'use strict';
var grpc = require('grpc');
var arithmetics_pb = require('./arithmetics_pb.js');

function serialize_arithmetics_OneValueReply(arg) {
  if (!(arg instanceof arithmetics_pb.OneValueReply)) {
    throw new Error('Expected argument of type arithmetics.OneValueReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_arithmetics_OneValueReply(buffer_arg) {
  return arithmetics_pb.OneValueReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_arithmetics_TwoValueRequest(arg) {
  if (!(arg instanceof arithmetics_pb.TwoValueRequest)) {
    throw new Error('Expected argument of type arithmetics.TwoValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_arithmetics_TwoValueRequest(buffer_arg) {
  return arithmetics_pb.TwoValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// [START service]
// The arithmetic service definition.
var ArithmeticsService = exports.ArithmeticsService = {
  add: {
    path: '/arithmetics.Arithmetics/Add',
    requestStream: false,
    responseStream: false,
    requestType: arithmetics_pb.TwoValueRequest,
    responseType: arithmetics_pb.OneValueReply,
    requestSerialize: serialize_arithmetics_TwoValueRequest,
    requestDeserialize: deserialize_arithmetics_TwoValueRequest,
    responseSerialize: serialize_arithmetics_OneValueReply,
    responseDeserialize: deserialize_arithmetics_OneValueReply,
  },
  minus: {
    path: '/arithmetics.Arithmetics/Minus',
    requestStream: false,
    responseStream: false,
    requestType: arithmetics_pb.TwoValueRequest,
    responseType: arithmetics_pb.OneValueReply,
    requestSerialize: serialize_arithmetics_TwoValueRequest,
    requestDeserialize: deserialize_arithmetics_TwoValueRequest,
    responseSerialize: serialize_arithmetics_OneValueReply,
    responseDeserialize: deserialize_arithmetics_OneValueReply,
  },
  multiply: {
    path: '/arithmetics.Arithmetics/Multiply',
    requestStream: false,
    responseStream: false,
    requestType: arithmetics_pb.TwoValueRequest,
    responseType: arithmetics_pb.OneValueReply,
    requestSerialize: serialize_arithmetics_TwoValueRequest,
    requestDeserialize: deserialize_arithmetics_TwoValueRequest,
    responseSerialize: serialize_arithmetics_OneValueReply,
    responseDeserialize: deserialize_arithmetics_OneValueReply,
  },
  divide: {
    path: '/arithmetics.Arithmetics/Divide',
    requestStream: false,
    responseStream: false,
    requestType: arithmetics_pb.TwoValueRequest,
    responseType: arithmetics_pb.OneValueReply,
    requestSerialize: serialize_arithmetics_TwoValueRequest,
    requestDeserialize: deserialize_arithmetics_TwoValueRequest,
    responseSerialize: serialize_arithmetics_OneValueReply,
    responseDeserialize: deserialize_arithmetics_OneValueReply,
  },
};

exports.ArithmeticsClient = grpc.makeGenericClientConstructor(ArithmeticsService);
