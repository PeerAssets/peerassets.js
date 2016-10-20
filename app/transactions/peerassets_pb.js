/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.CardTransfer', null, global);
goog.exportSymbol('proto.DeckSpawn', null, global);
goog.exportSymbol('proto.DeckSpawn.MODE', null, global);

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
proto.DeckSpawn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeckSpawn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DeckSpawn.displayName = 'proto.DeckSpawn';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeckSpawn.prototype.toObject = function(opt_includeInstance) {
  return proto.DeckSpawn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeckSpawn} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DeckSpawn.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: msg.getVersion(),
    shortName: msg.getShortName(),
    numberOfDecimals: msg.getNumberOfDecimals(),
    issueMode: msg.getIssueMode(),
    assetSpecificData: msg.getAssetSpecificData_asB64()
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
 * @return {!proto.DeckSpawn}
 */
proto.DeckSpawn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeckSpawn;
  return proto.DeckSpawn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeckSpawn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeckSpawn}
 */
proto.DeckSpawn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumberOfDecimals(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIssueMode(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetSpecificData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DeckSpawn} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DeckSpawn.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeckSpawn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DeckSpawn.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getShortName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getNumberOfDecimals();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getIssueMode();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getAssetSpecificData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DeckSpawn} The clone.
 */
proto.DeckSpawn.prototype.cloneMessage = function() {
  return /** @type {!proto.DeckSpawn} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.DeckSpawn.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.DeckSpawn.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string short_name = 2;
 * @return {string}
 */
proto.DeckSpawn.prototype.getShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.DeckSpawn.prototype.setShortName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 number_of_decimals = 3;
 * @return {number}
 */
proto.DeckSpawn.prototype.getNumberOfDecimals = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.DeckSpawn.prototype.setNumberOfDecimals = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 issue_mode = 4;
 * @return {number}
 */
proto.DeckSpawn.prototype.getIssueMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.DeckSpawn.prototype.setIssueMode = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bytes asset_specific_data = 5;
 * @return {!(string|Uint8Array)}
 */
proto.DeckSpawn.prototype.getAssetSpecificData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/**
 * optional bytes asset_specific_data = 5;
 * This is a type-conversion wrapper around `getAssetSpecificData()`
 * @return {string}
 */
proto.DeckSpawn.prototype.getAssetSpecificData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetSpecificData()));
};


/**
 * optional bytes asset_specific_data = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetSpecificData()`
 * @return {!Uint8Array}
 */
proto.DeckSpawn.prototype.getAssetSpecificData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetSpecificData()));
};


/** @param {!(string|Uint8Array)} value  */
proto.DeckSpawn.prototype.setAssetSpecificData = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.DeckSpawn.MODE = {
  NONE: 0,
  CUSTOM: 1,
  ONCE: 2,
  MULTI: 4
};


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
proto.CardTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CardTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CardTransfer.displayName = 'proto.CardTransfer';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CardTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.CardTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CardTransfer} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CardTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: msg.getVersion(),
    amount: msg.getAmount(),
    numberOfDecimals: msg.getNumberOfDecimals(),
    assetSpecificData: msg.getAssetSpecificData_asB64()
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
 * @return {!proto.CardTransfer}
 */
proto.CardTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CardTransfer;
  return proto.CardTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CardTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CardTransfer}
 */
proto.CardTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumberOfDecimals(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetSpecificData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CardTransfer} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CardTransfer.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CardTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CardTransfer.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = this.getNumberOfDecimals();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getAssetSpecificData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CardTransfer} The clone.
 */
proto.CardTransfer.prototype.cloneMessage = function() {
  return /** @type {!proto.CardTransfer} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.CardTransfer.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.CardTransfer.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 amount = 2;
 * @return {number}
 */
proto.CardTransfer.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.CardTransfer.prototype.setAmount = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 number_of_decimals = 3;
 * @return {number}
 */
proto.CardTransfer.prototype.getNumberOfDecimals = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.CardTransfer.prototype.setNumberOfDecimals = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes asset_specific_data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.CardTransfer.prototype.getAssetSpecificData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/**
 * optional bytes asset_specific_data = 4;
 * This is a type-conversion wrapper around `getAssetSpecificData()`
 * @return {string}
 */
proto.CardTransfer.prototype.getAssetSpecificData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetSpecificData()));
};


/**
 * optional bytes asset_specific_data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetSpecificData()`
 * @return {!Uint8Array}
 */
proto.CardTransfer.prototype.getAssetSpecificData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetSpecificData()));
};


/** @param {!(string|Uint8Array)} value  */
proto.CardTransfer.prototype.setAssetSpecificData = function(value) {
  jspb.Message.setField(this, 4, value);
};


goog.object.extend(exports, proto);
