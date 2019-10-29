// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// [START declaration]
'use strict';
var grpc = require('grpc');
var greetings_pb = require('./greetings_pb.js');

function serialize_greetings_HelloReply(arg) {
  if (!(arg instanceof greetings_pb.HelloReply)) {
    throw new Error('Expected argument of type greetings.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greetings_HelloReply(buffer_arg) {
  return greetings_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greetings_HelloRequest(arg) {
  if (!(arg instanceof greetings_pb.HelloRequest)) {
    throw new Error('Expected argument of type greetings.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greetings_HelloRequest(buffer_arg) {
  return greetings_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// [START service]
// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
  sayHello: {
    path: '/greetings.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: greetings_pb.HelloRequest,
    responseType: greetings_pb.HelloReply,
    requestSerialize: serialize_greetings_HelloRequest,
    requestDeserialize: deserialize_greetings_HelloRequest,
    responseSerialize: serialize_greetings_HelloReply,
    responseDeserialize: deserialize_greetings_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
