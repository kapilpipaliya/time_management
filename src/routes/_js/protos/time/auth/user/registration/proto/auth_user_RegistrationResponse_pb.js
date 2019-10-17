// source: time/auth/user/registration/proto/auth_user_RegistrationResponse.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.timeservice.RegistrationResponse', null, global);
goog.exportSymbol('proto.timeservice.RegistrationResponse.ErrorStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.timeservice.RegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.timeservice.RegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.timeservice.RegistrationResponse.displayName = 'proto.timeservice.RegistrationResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.timeservice.RegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.timeservice.RegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.timeservice.RegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.timeservice.RegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorMsg: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.timeservice.RegistrationResponse}
 */
proto.timeservice.RegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.timeservice.RegistrationResponse;
  return proto.timeservice.RegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.timeservice.RegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.timeservice.RegistrationResponse}
 */
proto.timeservice.RegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.timeservice.RegistrationResponse.ErrorStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.timeservice.RegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.timeservice.RegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.timeservice.RegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.timeservice.RegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErrorMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.timeservice.RegistrationResponse.ErrorStatus = {
  OK: 0,
  INVALID_USERNAME: 1,
  WEAK_PASSWORD: 2,
  USERNAME_EXIST: 3,
  UNKNOWN_ERROR: 4
};

/**
 * optional ErrorStatus status = 1;
 * @return {!proto.timeservice.RegistrationResponse.ErrorStatus}
 */
proto.timeservice.RegistrationResponse.prototype.getStatus = function() {
  return /** @type {!proto.timeservice.RegistrationResponse.ErrorStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.timeservice.RegistrationResponse.ErrorStatus} value
 * @return {!proto.timeservice.RegistrationResponse} returns this
 */
proto.timeservice.RegistrationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.timeservice.RegistrationResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.timeservice.RegistrationResponse} returns this
 */
proto.timeservice.RegistrationResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error_msg = 3;
 * @return {string}
 */
proto.timeservice.RegistrationResponse.prototype.getErrorMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.timeservice.RegistrationResponse} returns this
 */
proto.timeservice.RegistrationResponse.prototype.setErrorMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.timeservice);
