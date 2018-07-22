(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.runtime = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module system
 * @description This module contains System Runtime core system.
 */

'use strict';


/* Public properties */


/**
 * System Runtime core system
 * @property {_System} system
 */
exports.system = 
{
	"name": "system-runtime",
	"master": false,
	"version": "3.0.0",
	"description": "System Runtime",
	"schemas": {
		"1ac07185641fa9f": {
			"_name": "_Behavior",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"core": "property",
			"component": "property",
			"action": "property",
			"state": "property",
			"useCoreAPI": "property",
			"context": "property",
			"_id": "1ac07185641fa9f"
		},
		"104ad1f48518376": {
			"_id": "104ad1f48518376",
			"_name": "_Channel",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"send": "event",
			"$systemInstalled": "event",
			"$systemResolved": "event",
			"$systemStarted": "event",
			"$systemStopped": "event",
			"$systemUninstalled": "event"
		},
		"1c00b13a1b1bc92": {
			"_name": "_ClassInfo",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"model": "property",
			"schema": "property",
			"method": "method",
			"methods": "method",
			"property": "method",
			"properties": "method",
			"link": "method",
			"links": "method",
			"collections": "method",
			"collection": "method",
			"event": "method",
			"events": "method",
			"_id": "1c00b13a1b1bc92"
		},
		"111df11e2b19fde": {
			"_id": "111df11e2b19fde",
			"_name": "_Component",
			"_inherit": [],
			"_core": true,
			"classInfo": "method",
			"on": "method",
			"off": "method",
			"require": "method",
			"destroy": "method",
			"init": "method",
			"error": "event"
		},
		"1723516a30132ac": {
			"_name": "_Database",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"collections": "method",
			"insert": "event",
			"update": "event",
			"remove": "event",
			"_id": "1723516a30132ac"
		},
		"f1a10d1067d1b23a": {
			"_id": "f1a10d1067d1b23a",
			"_name": "_Log",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"action": "property",
			"collection": "property",
			"id": "property",
			"field": "property",
			"value": "property",
			"order": "property"
		},
		"1268f1dddd1fea7": {
			"_name": "_Logger",
			"_core": true,
			"level": "property",
			"debug": "method",
			"info": "method",
			"warn": "method",
			"error": "method",
			"_id": "1268f1dddd1fea7"
		},
		"14caa1c46414ee1": {
			"_name": "_Message",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"event": "property",
			"from": "property",
			"data": "property",
			"_id": "14caa1c46414ee1"
		},
		"193f1166eb16609": {
			"_name": "_Metamodel",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"schema": "method",
			"model": "method",
			"type": "method",
			"create": "method",
			"_id": "193f1166eb16609"
		},
		"157931f7a31b61d": {
			"_id": "157931f7a31b61d",
			"_name": "_OSGi",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"install": "method",
			"uninstall": "method",
			"start": "method",
			"stop": "method",
			"status": "method",
			"bundle": "method"
		},
		"12e211d4cd120a6": {
			"_id": "12e211d4cd120a6",
			"_name": "_Runtime",
			"_inherit": [
				"_OSGi"
			],
			"_core": true,
			"version": "property",
			"system": "method",
			"message": "method",
			"ready": "event"
		},
		"158711d6f215e4b": {
			"_name": "_State",
			"_inherit": [],
			"_core": true,
			"_class": false,
			"state": "property",
			"value": "property",
			"_id": "158711d6f215e4b"
		},
		"1cb761fa4510dca": {
			"_id": "1cb761fa4510dca",
			"_name": "_System",
			"_inherit": [
				"_SystemOSGi"
			],
			"_core": true,
			"name": "property",
			"master": "property",
			"version": "property",
			"description": "property",
			"schemas": "property",
			"models": "property",
			"behaviors": "property",
			"types": "property",
			"components": "property"
		},
		"145fe10c7514298": {
			"_id": "145fe10c7514298",
			"_name": "_SystemOSGi",
			"_inherit": [
				"_Component"
			],
			"_core": true,
			"state": "property",
			"location": "property",
			"start": "method",
			"stop": "method"
		}
	},
	"models": {
		"166971fd9d107fd": {
			"_name": "_Behavior",
			"_core": true,
			"context": {
				"type": "any",
				"readOnly": false,
				"mandatory": false,
				"default": null
			},
			"core": {
				"type": "boolean",
				"readOnly": false,
				"mandatory": false,
				"default": false
			},
			"useCoreAPI": {
				"type": "any",
				"readOnly": false,
				"mandatory": false,
				"default": false
			},
			"component": {
				"type": "string",
				"readOnly": false,
				"mandatory": true,
				"default": ""
			},
			"action": {
				"type": "javascript",
				"readOnly": false,
				"mandatory": true,
				"default": ""
			},
			"state": {
				"type": "string",
				"readOnly": false,
				"mandatory": true,
				"default": ""
			},
			"_id": "166971fd9d107fd"
		},
		"135c71078810af2": {
			"_id": "135c71078810af2",
			"_name": "_Channel",
			"_core": true,
			"send": {
				"params": [
					{
						"name": "message",
						"type": "message"
					}
				]
			},
			"$systemInstalled": {
				"params": [
					{
						"name": "id",
						"type": "string",
						"mandatory": true,
						"default": ""
					}
				]
			},
			"$systemResolved": {
				"params": [
					{
						"name": "id",
						"type": "string",
						"mandatory": true,
						"default": ""
					}
				]
			},
			"$systemUninstalled": {
				"params": [
					{
						"name": "id",
						"type": "string",
						"mandatory": true,
						"default": ""
					}
				]
			},
			"$systemStarted": {
				"params": [
					{
						"name": "id",
						"type": "string",
						"mandatory": true,
						"default": ""
					}
				]
			},
			"$systemStopped": {
				"params": [
					{
						"name": "id",
						"type": "string",
						"mandatory": true,
						"default": ""
					}
				]
			}
		},
		"158321dced1014a": {
			"_name": "_ClassInfo",
			"_core": true,
			"model": {
				"type": "object",
				"readOnly": true,
				"mandatory": true,
				"default": {}
			},
			"property": {
				"params": [
					{
						"name": "name",
						"type": "string"
					}
				],
				"result": "object"
			},
			"properties": {
				"result": "array"
			},
			"link": {
				"params": [
					{
						"name": "name",
						"type": "string"
					}
				],
				"result": "object"
			},
			"links": {
				"result": "array"
			},
			"method": {
				"params": [
					{
						"name": "name",
						"type": "string"
					}
				],
				"result": "object"
			},
			"methods": {
				"result": "array"
			},
			"collection": {
				"params": [
					{
						"name": "name",
						"type": "string"
					}
				],
				"result": "object"
			},
			"collections": {
				"result": "array"
			},
			"event": {
				"params": [
					{
						"name": "name",
						"type": "string"
					}
				],
				"result": "object"
			},
			"events": {
				"result": "array"
			},
			"_id": "158321dced1014a",
			"schema": {
				"type": "object",
				"readOnly": true,
				"mandatory": true,
				"default": {}
			}
		},
		"123751cb591de26": {
			"_id": "123751cb591de26",
			"_name": "_Component",
			"_core": true,
			"on": {
				"params": [
					{
						"name": "state",
						"type": "string"
					},
					{
						"name": "action",
						"type": "function"
					},
					{
						"name": "useCoreAPI",
						"type": "any",
						"mandatory": false,
						"default": false
					},
					{
						"name": "isCore",
						"type": "boolean",
						"mandatory": false,
						"default": false
					}
				]
			},
			"off": {
				"params": [
					{
						"name": "state",
						"type": "string",
						"mandatory": false
					},
					{
						"name": "behaviorId",
						"type": "string",
						"mandatory": false
					}
				]
			},
			"require": {
				"params": [
					{
						"name": "id",
						"type": "string"
					}
				]
			},
			"destroy": {
				"params": []
			},
			"classInfo": {
				"result": "_ClassInfo"
			},
			"init": {
				"params": [
					{
						"name": "conf",
						"type": "object"
					}
				]
			},
			"error": {
				"params": [
					{
						"name": "data",
						"type": "errorParam"
					}
				]
			}
		},
		"18a51169d7112d4": {
			"_name": "_Database",
			"_core": true,
			"collections": {
				"result": "object"
			},
			"insert": {
				"params": [
					{
						"name": "event",
						"type": "dbInsertEvent"
					}
				]
			},
			"update": {
				"params": [
					{
						"name": "event",
						"type": "dbUpdateEvent"
					}
				]
			},
			"remove": {
				"params": [
					{
						"name": "event",
						"type": "dbRemoveEvent"
					}
				]
			},
			"_id": "18a51169d7112d4"
		},
		"o1e1e01e6b41cec3": {
			"_id": "o1e1e01e6b41cec3",
			"_name": "_Log",
			"action": {
				"type": "dbAction",
				"readOnly": false,
				"mandatory": false,
				"default": "insert"
			},
			"collection": {
				"type": "string",
				"readOnly": false,
				"mandatory": false,
				"default": ""
			},
			"id": {
				"type": "string",
				"readOnly": false,
				"mandatory": false,
				"default": ""
			},
			"field": {
				"type": "string",
				"readOnly": false,
				"mandatory": false,
				"default": ""
			},
			"value": {
				"type": "any",
				"readOnly": false,
				"mandatory": false,
				"default": ""
			},
			"order": {
				"type": "number",
				"readOnly": false,
				"mandatory": false,
				"default": 0
			},
			"_core": true
		},
		"16b9d1ac2216ffe": {
			"_id": "16b9d1ac2216ffe",
			"_name": "_Logger",
			"_core": true,
			"level": {
				"type": "log",
				"readOnly": false,
				"mandatory": false,
				"default": "warn"
			},
			"debug": {
				"params": [
					{
						"name": "message",
						"type": "any"
					}
				]
			},
			"info": {
				"params": [
					{
						"name": "message",
						"type": "any"
					}
				]
			},
			"warn": {
				"params": [
					{
						"name": "message",
						"type": "any"
					}
				]
			},
			"error": {
				"params": [
					{
						"name": "message",
						"type": "any"
					}
				]
			}
		},
		"1d9b6139411aa91": {
			"_name": "_Message",
			"_core": true,
			"event": {
				"type": "string",
				"readOnly": false,
				"mandatory": true,
				"default": ""
			},
			"from": {
				"type": "string",
				"readOnly": false,
				"mandatory": true,
				"default": ""
			},
			"data": {
				"type": "array",
				"readOnly": false,
				"mandatory": true,
				"default": []
			},
			"_id": "1d9b6139411aa91"
		},
		"1628c13c22152e6": {
			"_name": "_Metamodel",
			"_core": true,
			"schema": {
				"params": [
					{
						"name": "name",
						"type": "any",
						"default": "",
						"mandatory": false
					},
					{
						"name": "schema",
						"type": "object",
						"default": {},
						"mandatory": false
					}
				],
				"result": "any"
			},
			"model": {
				"params": [
					{
						"name": "name",
						"type": "any",
						"default": "",
						"mandatory": false
					},
					{
						"name": "model",
						"type": "object",
						"default": {},
						"mandatory": false
					}
				],
				"result": "any"
			},
			"type": {
				"params": [
					{
						"name": "name",
						"type": "any",
						"default": "",
						"mandatory": false
					},
					{
						"name": "type",
						"type": "object",
						"default": {},
						"mandatory": false
					}
				],
				"result": "any"
			},
			"create": {
				"params": []
			},
			"_id": "1628c13c22152e6"
		},
		"100b91ed2211b15": {
			"_id": "100b91ed2211b15",
			"_name": "_OSGi",
			"install": {
				"params": [
					{
						"name": "url",
						"type": "any",
						"mandatory": true,
						"default": ""
					},
					{
						"name": "async",
						"type": "boolean",
						"mandatory": false,
						"default": true
					}
				],
				"result": "string"
			},
			"uninstall": {
				"params": [
					{
						"name": "id",
						"type": "string",
						"mandatory": true,
						"default": ""
					}
				]
			},
			"start": {
				"params": [
					{
						"name": "id",
						"type": "string",
						"mandatory": true,
						"default": ""
					}
				]
			},
			"stop": {
				"params": [
					{
						"name": "id",
						"type": "string",
						"mandatory": true,
						"default": ""
					}
				]
			},
			"status": {
				"result": "object"
			},
			"_core": true,
			"bundle": {
				"result": "string"
			}
		},
		"14c7c105b31a160": {
			"_id": "14c7c105b31a160",
			"_name": "_Runtime",
			"_core": true,
			"version": {
				"type": "string",
				"readOnly": true,
				"mandatory": true,
				"default": "0.0.0"
			},
			"system": {
				"params": [
					{
						"name": "params",
						"type": "any",
						"mandatory": false
					}
				],
				"result": "object"
			},
			"message": {
				"params": [
					{
						"name": "msg",
						"type": "message",
						"mandatory": true
					}
				]
			},
			"ready": {}
		},
		"177ac136891629f": {
			"_name": "_State",
			"_core": true,
			"state": {
				"type": "string",
				"readOnly": false,
				"mandatory": true,
				"default": ""
			},
			"value": {
				"type": "any",
				"readOnly": false,
				"mandatory": false,
				"default": null
			},
			"_id": "177ac136891629f"
		},
		"170521b88614387": {
			"_name": "_System",
			"_core": true,
			"name": {
				"type": "string",
				"readOnly": false,
				"mandatory": true,
				"default": ""
			},
			"master": {
				"type": "boolean",
				"readOnly": false,
				"mandatory": false,
				"default": false
			},
			"version": {
				"type": "string",
				"readOnly": false,
				"mandatory": false,
				"default": "0.0.1"
			},
			"description": {
				"type": "string",
				"readOnly": false,
				"mandatory": false,
				"default": ""
			},
			"schemas": {
				"type": "object",
				"readOnly": false,
				"mandatory": false,
				"default": {}
			},
			"models": {
				"type": "object",
				"readOnly": false,
				"mandatory": false,
				"default": {}
			},
			"behaviors": {
				"type": "object",
				"readOnly": false,
				"mandatory": false,
				"default": {}
			},
			"types": {
				"type": "object",
				"readOnly": false,
				"mandatory": false,
				"default": {}
			},
			"components": {
				"type": "object",
				"readOnly": false,
				"mandatory": false,
				"default": {}
			},
			"_id": "170521b88614387"
		},
		"1b2811b092143f5": {
			"_id": "1b2811b092143f5",
			"_name": "_SystemOSGi",
			"start": {},
			"stop": {},
			"_core": true,
			"state": {
				"type": "string",
				"readOnly": false,
				"mandatory": false,
				"default": "none"
			},
			"location": {
				"type": "string",
				"readOnly": false,
				"mandatory": false,
				"default": ""
			}
		}
	},
	"behaviors": {
		"12e491859c13918": {
			"_id": "12e491859c13918",
			"component": "_Channel",
			"state": "$systemStarted",
			"action": "function $systemStarted(id) { \n  var systems = null;\n    \n  if (id !== 'e89c617b6b15d24') {\n    if (typeof document !== 'undefined') {\n      systems = document.querySelectorAll('link[rel=system]');\n         \n      if ($state.get('runtime') && $state.get('runtime').state === 'ready') {    \n      } else {\n        if (systems.length + 1 === $db._System.count()) {\n          $component.get('runtime').ready();\n        }\n      }\n    }\n  }\n}",
			"useCoreAPI": true,
			"core": true
		},
		"1e9021bd4e1bc6e": {
			"_id": "1e9021bd4e1bc6e",
			"component": "_Channel",
			"state": "$systemInstalled",
			"action": "function $systemInstalled(id) {\n  var systems = null,\n    dependencies = [],\n    master = [],\n    canStart = true;\n\n  if (id !== 'e89c617b6b15d24') {\n    // if all systems are installed\n    systems = $db._System.find({});\n\n    systems.forEach(function (system) {\n      var sys = this.require(system._id);\n      if (sys && sys.state && sys.state() === 'none') {\n        canStart = false;\n      }\n    }.bind(this));\n\n    // start all the systems\n    if (canStart) {\n      dependencies = $db._System.find({\n        'master': false\n      });\n\n      dependencies.forEach(function (dep) {\n        var system = this.require(dep._id);\n        channel = this.require('channel');\n\n        if (system.state() === 'resolved') {\n          system.state('starting');\n          system.start();\n          channel.$systemStarted(dep._id);\n          system.state('active');\n        }\n      }.bind(this));\n\n      master = $db._System.find({\n        'master': true\n      });\n\n      master.forEach(function (dep) {\n        var system = this.require(dep._id);\n        channel = this.require('channel');\n\n        if (system && system.state && system.state() === 'resolved') {\n          system.state('starting');\n          system.start();\n          channel.$systemStarted(dep._id);\n          system.state('active');\n        }\n      }.bind(this));\n    }\n  }\n}",
			"useCoreAPI": true,
			"core": true
		},
		"155141e40312cd8": {
			"_id": "155141e40312cd8",
			"component": "_ClassInfo",
			"state": "collection",
			"action": "function collection(name) {\n  var result = {};\n  if (this.schema()[name] === 'collection') {\n    result = this.model()[name];\n  }\n\n  return result;\n}",
			"core": true
		},
		"1f6941a0c012c1f": {
			"_id": "1f6941a0c012c1f",
			"component": "_ClassInfo",
			"state": "collections",
			"action": "function collections(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'collection') {\n      result.push(item);\n    }\n  }\n\n  return result;\n}",
			"core": true
		},
		"1ef711b4171c849": {
			"_id": "1ef711b4171c849",
			"component": "_ClassInfo",
			"state": "event",
			"action": "function event(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'event') {\n    result = this.model()[name];\n  }\n\n  return result;\n}",
			"core": true
		},
		"1bae51b6ed1d25c": {
			"_id": "1bae51b6ed1d25c",
			"component": "_ClassInfo",
			"state": "events",
			"action": "function events(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'event') {\n      result.push(item);\n    }\n  }\n  return result;\n}",
			"core": true
		},
		"19ac2125221528b": {
			"_id": "19ac2125221528b",
			"component": "_ClassInfo",
			"state": "link",
			"action": "function link(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'link') {\n    result = this.model()[name];\n  }\n  return result;\n}",
			"core": true
		},
		"17ed21dfc01b8e8": {
			"_id": "17ed21dfc01b8e8",
			"component": "_ClassInfo",
			"state": "links",
			"action": "function links(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'link') {\n      result.push(item);\n    }\n  } return result;\n}",
			"core": true
		},
		"11ce318a561ac61": {
			"_id": "11ce318a561ac61",
			"component": "_ClassInfo",
			"state": "method",
			"action": "function method(name) {\n  var result = {};\n  if (this.schema()[name] === 'method') {\n    result = this.model()[name];\n  }\n  \n  return result;\n}",
			"core": true
		},
		"12ff2190a018046": {
			"_id": "12ff2190a018046",
			"component": "_ClassInfo",
			"state": "methods",
			"action": "function methods(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'method') {\n      result.push(item);\n    }\n  }\n\n  return result;\n}",
			"core": true
		},
		"1028d1681e1fd58": {
			"_id": "1028d1681e1fd58",
			"component": "_ClassInfo",
			"state": "properties",
			"action": "function properties(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'property') {\n      result.push(item);\n    }\n  } return result;\n}",
			"core": true
		},
		"18eeb10c5319368": {
			"_id": "18eeb10c5319368",
			"component": "_ClassInfo",
			"state": "property",
			"action": "function property(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'property') {\n    result = this.model()[name];\n  }\n  return result;\n}",
			"core": true
		},
		"1ba721201114b6b": {
			"_id": "1ba721201114b6b",
			"component": "_Component",
			"state": "destroy",
			"action": "function destroy() {\n  $component.destroy(this.id());\n}",
			"core": true,
			"useCoreAPI": true
		},
		"15486186f41a48c": {
			"_id": "15486186f41a48c",
			"component": "_Component",
			"state": "off",
			"action": "function off(state, behaviorId) {\n  var args = [],\n    i = 0,\n    numInjectedParams = 8,\n    length = arguments.length;\n\n  if ($helper.isOnNode()) {\n    numInjectedParams = numInjectedParams +1;\n  }\n\n  for (i = 0; i < length - numInjectedParams; i++) {\n    args.push(arguments[i]);\n  }\n\n  if ($workflow.checkInput({\n    \"component\": this,\n    \"methodName\": \"off\",\n    \"args\": args\n  })) {\n\n    if (state || behaviorId) {\n      if ($metamodel.isValidState(state, this.constructor.name)) {\n        $behavior.remove({\n          \"behaviorId\": behaviorId,\n          \"componentId\": this.id(),\n          \"state\": state\n        });\n      } else {\n        this.require('logger').warn(\"invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\");\n      }\n    } else {\n      $behavior.remove({\n        \"componentId\": this.id()\n      });\n    }\n  }\n}",
			"core": true,
			"useCoreAPI": true
		},
		"1da0a17878104c3": {
			"_id": "1da0a17878104c3",
			"component": "_Component",
			"state": "require",
			"action": "function require(id) {\n  return $component.get(id);\n}",
			"core": true,
			"useCoreAPI": true
		},
		"d152631c35813f2e": {
			"_id": "d152631c35813f2e",
			"component": "_Component",
			"state": "classInfo",
			"action": "function classInfo() { \n\tconst className = this.constructor.name;\n\tlet result;\n\t\n\tif (className !== 'Function') {\n\t  result = this.require(className + 'Info');\n\t}\n\t\n\treturn result;\n}",
			"useCoreAPI": false,
			"core": true
		},
		"1a5111d17a1800c": {
			"_id": "1a5111d17a1800c",
			"component": "_Database",
			"state": "collections",
			"action": "function collections() {\n  var result = {},\n    collectionName = '';\n\n  for (collectionName in $db.store) {\n    if ($db.store.hasOwnProperty(collectionName)) {\n      result[collectionName] = $db[collectionName];\n    }\n  }\n  return result;\n}",
			"core": true,
			"useCoreAPI": true
		},
		"1d993108fa18ef2": {
			"_id": "1d993108fa18ef2",
			"component": "_Logger",
			"state": "debug",
			"action": "function debug(message) {\n  if (this.level() === 'debug') {\n    console.log('runtime: ' + message);\n  }\n}",
			"core": true
		},
		"1a37a188e11fe73": {
			"_id": "1a37a188e11fe73",
			"component": "_Logger",
			"state": "error",
			"action": "function error(message) {\n  console.error('runtime: ' + message);\n}",
			"core": true
		},
		"1edd21e12a16534": {
			"_id": "1edd21e12a16534",
			"component": "_Logger",
			"state": "info",
			"action": "function info(message) {\n  if (this.level() === 'info' || this.level() === 'debug') {\n    console.info('runtime: ' + message);\n  }\n}",
			"core": true
		},
		"141f2143d3122a4": {
			"_id": "141f2143d3122a4",
			"component": "_Logger",
			"state": "level",
			"action": "function level(val) {\n  $log.level(val);\n}",
			"core": true,
			"useCoreAPI": true
		},
		"192401bab21304e": {
			"_id": "192401bab21304e",
			"component": "_Logger",
			"state": "warn",
			"action": "function warn(message) {\n  if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {\n    console.warn('runtime: ' + message);\n  }\n}",
			"core": true
		},
		"11fc715e2f1a31e": {
			"_id": "11fc715e2f1a31e",
			"component": "_Metamodel",
			"state": "create",
			"action": "function create() {\n  $metamodel.create();\n}",
			"core": true,
			"useCoreAPI": true
		},
		"1232f1f107142cf": {
			"_id": "1232f1f107142cf",
			"component": "_Metamodel",
			"state": "model",
			"action": "function model(name, model) {\n  return $metamodel.model(name, model);\n}",
			"core": true,
			"useCoreAPI": true
		},
		"1365412f69153d2": {
			"_id": "1365412f69153d2",
			"component": "_Metamodel",
			"state": "schema",
			"action": "function schema(name, schema) {\n  return $metamodel.schema(name, schema);\n}",
			"core": true,
			"useCoreAPI": true
		},
		"194db147fe161a2": {
			"_id": "194db147fe161a2",
			"component": "_Metamodel",
			"state": "type",
			"action": "function type(name, type) {\n  return $metamodel.type(name, type);\n}",
			"core": true,
			"useCoreAPI": true
		},
		"1ef951f1411b895": {
			"_id": "1ef951f1411b895",
			"component": "_OSGi",
			"state": "install",
			"action": "function install(url, async) {\n  var importedSystem = null,\n    system = {},\n    systemId = '',\n    callbackLoad = null,\n    xhr = null,\n    result = '',\n    channel = $component.get('channel');\n\n  if (typeof url === 'object') {\n    importedSystem = url;\n  } else {\n    if (url.indexOf('{') === 0) {\n      importedSystem = JSON.parse(url);\n    }\n  }\n\n  if (importedSystem) {\n    systemId = $db.importSystem(importedSystem);\n    if (systemId) {\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    }\n  } else {\n    if (typeof global !== 'undefined' && typeof window === 'undefined') {\n      if (url.indexOf('.json') !== -1) {\n        system = require(global.process.env.PWD + '/' + url);\n      } else {\n        system = require(url);\n      }\n      systemId = $db.importSystem(system);\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    } else {\n      xhr = new XMLHttpRequest();\n      callbackLoad = function callbackLoad(system, url) {\n        var sysId = $db.importSystem(system),\n          sys = $component.get(sysId),\n          channel = $component.get('channel');\n\n        if (typeof url === 'string') {\n          sys.location(url);\n        }\n        sys.state('installed');\n        channel.$systemInstalled(sysId);\n        sys.state('resolved');\n        channel.$systemResolved(sysId);\n\n        result = sysId;\n      };\n\n      if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status === 200 || xhr.status === 0) {\n              callbackLoad(JSON.parse(xhr.response), url);\n            }\n          }\n        };\n        xhr.send(null);\n      } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200 || xhr.status === 0) {\n          callbackLoad(JSON.parse(xhr.response), url);\n        }\n      }\n    }\n  }\n  return result;\n}",
			"useCoreAPI": true,
			"core": true
		},
		"14c1517b711cb78": {
			"_id": "14c1517b711cb78",
			"component": "_OSGi",
			"state": "uninstall",
			"action": "function uninstall(id) {\n  var search = {},\n    system = null,\n    behaviorId = '',\n    collection = '',\n    componentId = '',\n    length = 0,\n    i = 0,\n    coreComponents = ['admin', 'channel', 'db', 'logger', 'metamodel', 'runtime'];\n\n  search = $db._System.find({\n    '_id': id\n  });\n\n  if (search.length) {\n    system = search[0];\n    // remove behaviors\n    if (system.behaviors) {\n      for (behaviorId in system.behaviors) {\n        $db._Behavior.remove({\n          '_id': system.behaviors[behaviorId]._id\n        });\n      }\n    }\n    // remove components\n    if (system.components) {\n      for (collection in system.components) {\n        for (componentId in system.components[collection]) {\n          if (coreComponents.indexOf(componentId) === -1) {\n            $db[collection].remove({\n              '_id': componentId\n            });\n          }\n        }\n      }\n    }\n  }\n  if (this.require(id) && this.require(id).state) {\n    this.require(id).state('uninstalled');\n    this.require('channel').$systemUninstalled(id);\n  }\n}",
			"useCoreAPI": true,
			"core": true
		},
		"105f219c6813643": {
			"_id": "105f219c6813643",
			"component": "_OSGi",
			"state": "start",
			"action": "function start(id) {\n  var system = this.require(id),\n    channel = this.require('channel');\n\n  if (system.state() === 'resolved' || system.state() === 'installed') {\n    system.state('starting');\n    if (system.start) {\n      system.start();\n    }\n    channel.$systemStarted(id);\n    system.state('active');\n  }\n}",
			"useCoreAPI": false,
			"core": true
		},
		"1a81a1f00d17269": {
			"_id": "1a81a1f00d17269",
			"component": "_OSGi",
			"state": "stop",
			"action": "function stop(id) {\n  var system = this.require(id),\n    channel = this.require('channel');\n\n  if (system.state() === 'active') {\n    system.state('stopping');\n    if (system.stop) {\n      system.stop();\n    }\n    channel.$systemStopped(id);\n    system.state('resolved');\n    channel.$systemResolved(id);\n  }\n}",
			"useCoreAPI": false,
			"core": true
		},
		"116851b602128d1": {
			"_id": "116851b602128d1",
			"component": "_OSGi",
			"state": "status",
			"action": "function status() {\n  var result = {},\n    system = null,\n    length = 0,\n    i = 0;\n\n  systems = $db._System.find({});\n\n  length = systems.length;\n  for (i = 0; i < length; i++) {\n    system = systems[i];\n    result[system.name] = {\n      'id': system._id,\n      'state': system.state,\n      'name': system.name,\n      'version': system.version,\n      'location': system.location,\n      'master': system.master\n    };\n  }\n\n  return result;\n}",
			"useCoreAPI": true,
			"core": true
		},
		"19cf317d7217331": {
			"_id": "19cf317d7217331",
			"component": "_OSGi",
			"state": "bundle",
			"action": "function bundle() { \n\tvar result = $db.exportSystem();\n\treturn result;\n}",
			"useCoreAPI": true,
			"core": true
		},
		"13010167f313f87": {
			"_id": "13010167f313f87",
			"component": "_Runtime",
			"state": "system",
			"action": "function system(params) {\n  var RuntimeSystem = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n\n  if (params) {\n    if (typeof params === 'string') {\n      conf.master = true;\n      conf.name = params;\n    } else {\n      conf = params;\n      conf.master = true;\n    }\n    RuntimeSystem = this.require('_System');\n    system = new RuntimeSystem(conf);\n    system.state('active');\n  } else {\n    result = $db._System.find({\n      'master': true\n    });\n    if (result.length) {\n      systemId = result[0]._id;\n      system = $component.get(systemId);\n    }\n  }\n  return system;\n}",
			"core": true,
			"useCoreAPI": true
		},
		"1cfa4145f614da8": {
			"_id": "1cfa4145f614da8",
			"component": "_Runtime",
			"state": "message",
			"action": "function message(msg) { \n  $db._Message.insert(msg);\n}",
			"useCoreAPI": true,
			"core": true
		},
		"1cb9d103d41dd97": {
			"_id": "1cb9d103d41dd97",
			"component": "e89c617b6b15d24",
			"state": "start",
			"action": "function start() {\n  if (typeof document !== 'undefined') {\n    document.addEventListener('DOMContentLoaded', function DOMContentLoaded(e) {\n      var systems = [],\n        system = null,\n        scripts = [],\n        script = null,\n        logLevel = 'warn',\n        i = 0,\n        length = 0;\n    \n      systems = document.querySelectorAll('link[rel=system]');\n      length = systems.length;\n  \n      // logger\n      scripts = document.querySelectorAll('script[log]');\n      if (scripts.length) {\n        logLevel = scripts[0].getAttribute('log');\n        this.require('logger').level(logLevel);\n      }\n  \n      // systems\n      for (i = 0; i < length; i++) {\n        system = systems[i];\n  \n        if (system.getAttribute('async') === 'false') {\n          this.require('runtime').install(system.href, false);\n        } else {\n          this.require('runtime').install(system.href, true);\n        }\n      }\n  \n      // ready event\n      if (length === 0) {\n        this.require('runtime').ready();\n      }\n  }.bind(this));\n  }\n}",
			"useCoreAPI": true,
			"core": true
		}
	},
	"types": {
		"css": {
			"_id": "h1d88311ac019211",
			"name": "css",
			"type": "string",
			"core": true
		},
		"date": {
			"_id": "c17cad1bc3d17752",
			"name": "date",
			"type": "object",
			"core": true
		},
		"json": {
			"_id": "e1d25a12e67127ed",
			"name": "json",
			"type": "object",
			"core": true
		},
		"dbInsertEvent": {
			"_id": "148ef1e19810e6d",
			"core": true,
			"name": "dbInsertEvent",
			"type": "object",
			"schema": {
				"collection": {
					"type": "string",
					"mandatory": true,
					"default": ""
				},
				"document": {
					"type": "object",
					"mandatory": true,
					"default": {}
				}
			}
		},
		"dbRemoveEvent": {
			"_id": "1952e1ac4213f4a",
			"name": "dbRemoveEvent",
			"type": "object",
			"core": true,
			"schema": {
				"collection": {
					"type": "string",
					"mandatory": true,
					"default": ""
				},
				"id": {
					"type": "string",
					"mandatory": true,
					"default": ""
				}
			}
		},
		"dbUpdateEvent": {
			"_id": "1f5c41309711752",
			"core": true,
			"name": "dbUpdateEvent",
			"type": "object",
			"schema": {
				"collection": {
					"type": "string",
					"mandatory": true,
					"default": ""
				},
				"id": {
					"type": "string",
					"mandatory": true,
					"default": ""
				},
				"field": {
					"type": "string",
					"mandatory": true,
					"default": ""
				},
				"value": {
					"type": "any",
					"mandatory": true,
					"default": null
				}
			}
		},
		"dbAction": {
			"_id": "e1950e16f2914da9",
			"core": true,
			"name": "dbAction",
			"type": "string",
			"value": [
				"insert",
				"update",
				"remove"
			]
		},
		"collection": {
			"_id": "d1c0d0130c616199",
			"name": "collection",
			"type": "object",
			"schema": {
				"type": {
					"type": [
						"string"
					],
					"mandatory": true
				},
				"readOnly": {
					"type": "boolean",
					"mandatory": true
				},
				"mandatory": {
					"type": "boolean",
					"mandatory": true
				},
				"default": {
					"type": "array",
					"mandatory": true
				},
				"description": {
					"type": "string",
					"mandatory": false
				},
				"label": {
					"type": "string",
					"mandatory": false
				}
			},
			"core": true
		},
		"errorParam": {
			"_id": "e198761fc0b1ae8a",
			"name": "errorParam",
			"type": "object",
			"schema": {
				"message": {
					"type": "string",
					"mandatory": true
				},
				"error": {
					"type": "object",
					"mandatory": true
				}
			},
			"core": true
		},
		"event": {
			"_id": "g1668d1de2d1ff6f",
			"name": "event",
			"type": "object",
			"schema": {
				"params": {
					"type": [
						"parameter"
					],
					"mandatory": false
				},
				"description": {
					"type": "string",
					"mandatory": false
				}
			},
			"core": true
		},
		"html": {
			"_id": "y161c21320b11acb",
			"name": "html",
			"type": "string",
			"core": true
		},
		"javascript": {
			"_id": "s13d4c1fdf916504",
			"name": "javascript",
			"type": "string",
			"core": true
		},
		"link": {
			"_id": "p124601801d1dbfa",
			"name": "link",
			"type": "object",
			"schema": {
				"type": {
					"type": "string",
					"mandatory": true
				},
				"readOnly": {
					"type": "boolean",
					"mandatory": true
				},
				"mandatory": {
					"type": "boolean",
					"mandatory": true
				},
				"default": {
					"type": "{type}",
					"mandatory": true
				},
				"description": {
					"type": "string",
					"mandatory": false
				},
				"label": {
					"type": "string",
					"mandatory": false
				}
			},
			"core": true
		},
		"log": {
			"_id": "d1fd161a4a4149fc",
			"name": "log",
			"type": "string",
			"value": [
				"debug",
				"info",
				"warn",
				"error"
			],
			"core": true
		},
		"message": {
			"_id": "l13b061ac571272d",
			"name": "message",
			"type": "object",
			"schema": {
				"event": {
					"type": "string",
					"mandatory": true
				},
				"from": {
					"type": "string",
					"mandatory": false
				},
				"data": {
					"type": "array",
					"mandatory": true
				}
			},
			"core": true
		},
		"method": {
			"_id": "x1227218eed1f3e9",
			"name": "method",
			"type": "object",
			"schema": {
				"result": {
					"type": "any",
					"mandatory": false
				},
				"params": {
					"type": [
						"parameter"
					],
					"mandatory": false
				},
				"description": {
					"type": "string",
					"mandatory": false
				}
			},
			"core": true
		},
		"osgiStates": {
			"_id": "q1f0ca120fc13fb3",
			"name": "osgiStates",
			"type": "string",
			"value": [
				"none",
				"installed",
				"resolved",
				"starting",
				"active",
				"stopping",
				"uninstalled"
			],
			"core": true
		},
		"parameter": {
			"_id": "e1b18e16c6c195ad",
			"name": "parameter",
			"type": "object",
			"schema": {
				"description": {
					"type": "string",
					"mandatory": false
				},
				"name": {
					"type": "string",
					"mandatory": true
				},
				"type": {
					"type": "any",
					"mandatory": true
				},
				"mandatory": {
					"type": "boolean",
					"mandatory": false
				},
				"default": {
					"type": "{type}",
					"mandatory": false
				}
			},
			"core": true
		},
		"property": {
			"_id": "a16a3a1ae051a55d",
			"name": "property",
			"type": "object",
			"schema": {
				"type": {
					"type": "string",
					"mandatory": true
				},
				"readOnly": {
					"type": "boolean",
					"mandatory": true
				},
				"mandatory": {
					"type": "boolean",
					"mandatory": true
				},
				"default": {
					"type": "{type}",
					"mandatory": true
				},
				"description": {
					"type": "string",
					"mandatory": false
				},
				"label": {
					"type": "string",
					"mandatory": false
				}
			},
			"core": true
		},
		"text": {
			"_id": "c136fc129a912f54",
			"name": "text",
			"type": "string",
			"core": true
		}
	},
	"components": {
		"_Channel": {
			"channel": {
				"_id": "channel"
			}
		},
		"_Database": {
			"db": {
				"_id": "db"
			}
		},
		"_Logger": {
			"logger": {
				"_id": "logger",
				"level": "warn"
			}
		},
		"_Metamodel": {
			"metamodel": {
				"_id": "metamodel"
			}
		},
		"_Runtime": {
			"runtime": {
				"_id": "runtime",
				"version": "3.0.0"
			}
		}
	},
	"_id": "e89c617b6b15d24"
}
;

},{}],2:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module behavior
 * @requires db
 * @requires helper
 * @requires mson
 * @description This module manages the behaviors of all components.
 * A behavior is a mecanism that allow users to add actions that will be executed
 * when a specific state of a component will change.
 */

'use strict';

var $db = require('./db.js');
var $helper = require('./helper.js');
var $mson = require('./mson.js');

/* Private properties */

var store = {};

/* Private methods */

/**
 * @method createFunction
 * @param {String} name default name of the function
 * @param {String} func a stringified function
 * @param {Boolean} core if true, the behavior will be treated as a System Runtime core behavior.
 * In that case, the behavior can not be exported in a system (default false)
 * @param {Boolean} useCoreAPI if true, System Runtime core modules will be injected as parameters of the function (default false)
 * @returns {Function} the created function
 * @private
 * @description Create a function from a string.
 * The created function:
 * - will be a named function,
 * - has the context of the component and
 * - can have some core modules injected as parameters
 */
function createFunction(name, func, core, useCoreAPI) {
  var beginBody = -1;
  var funcParams = '';
  var params = [];
  var paramsClean = [];
  var funcBody = '';
  var header = '';
  var action = null;
  var isArrowFunction = true;
  var isOneLine = false;
  var functionName = name;

  if (functionName.indexOf('.') !== -1) {
    functionName = name.split('.')[name.split('.').length - 1];
  }

  if (func.trim().indexOf('function') === 0) {
    isArrowFunction = false;
  }

  if (isArrowFunction) {
    beginBody = func.indexOf('=>');

    header = func.substring(0, beginBody);
    header = header.replace('=>', '');

    if (header.indexOf('(') !== -1) {
      funcParams = header
        .split('(')[1]
        .replace(')', '')
        .trim();
    } else {
      funcParams = header.trim();
    }

    params = funcParams.split(',');
    params.forEach(function(param) {
      paramsClean.push(param.trim());
    });

    funcBody = func.substring(beginBody + 2, func.length).trim();

    if (funcBody.indexOf('{') === 0) {
      funcBody = funcBody.substring(1, funcBody.lastIndexOf('}')).trim();
    }

    if (funcBody.indexOf('\n') === -1) {
      isOneLine = true;
    }

    if (isArrowFunction && isOneLine && funcBody.indexOf('return ') === -1) {
      funcBody = 'return ' + funcBody;
    }
  } else {
    beginBody = func.indexOf('{');
    header = func.substring(0, beginBody);

    funcParams = header
      .split('(')[1]
      .replace(')', '')
      .trim();

    params = funcParams.split(',');
    params.forEach(function(param) {
      paramsClean.push(param.trim());
    });

    funcBody = func.substring(beginBody + 1);
    funcBody = funcBody.substring(0, funcBody.lastIndexOf('}')).trim();
  }

  // kludge for Babel
  funcBody = funcBody.replace(/_this/g, 'this');

  if (paramsClean[0] === '') {
    paramsClean = [];
  }

  if (useCoreAPI) {
    paramsClean.push('$component');
    paramsClean.push('$db');
    paramsClean.push('$metamodel');
    paramsClean.push('$workflow');
    paramsClean.push('$behavior');
    paramsClean.push('$state');
    paramsClean.push('$log');
    paramsClean.push('$helper');
  }

  if ($helper.isOnNode()) {
    paramsClean.push('require');
  }

  if (paramsClean[0] !== '') {
    action = new Function(
      '__action',
      'return function ' +
        functionName +
        ' (' +
        paramsClean.join(', ') +
        ") { return new Function('" +
        paramsClean.join("', '") +
        "', __action).apply(this, arguments) };"
    )(funcBody);
  } else {
    action = new Function(
      '__action',
      'return function ' +
        functionName +
        ' () { return new Function(__action).apply(this, arguments) };'
    )(funcBody);
  }

  return action;
}

/* Public methods */

/**
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed
 * @param {Object} action the action to execute when the component will have a specific state
 * @param {Boolean} useCoreAPI if true, System Runtime core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @param {Object} context new context of the behavior
 * @returns {String} id of the behavior created in System Runtime database
 * @description Add a behavior that will be stored in System Runtime database
 */
exports.add = function add(id, state, action, useCoreAPI, core, context) {
  var behaviorId = $helper.generateId();
  var strAction = action.toString();

  if (typeof core === 'undefined') {
    core = false;
  }
  if (typeof useCoreAPI === 'undefined') {
    useCoreAPI = false;
  }

  action = createFunction(state, strAction, core, useCoreAPI);

  store[behaviorId] = action;

  $db._Behavior.insert({
    _id: behaviorId,
    component: id,
    state: state,
    action: strAction,
    useCoreAPI: useCoreAPI,
    core: core,
    context: context
  });

  return behaviorId;
};

/**
 * @method remove
 * @param {Object} params
 * {String} componentId id of the component
 * {String} state state of the component
 * {String} behaviorId id of the behavior (optional)
 * @description Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component
 */
exports.remove = function remove(params) {
  var result = [];

  params = params || {};
  params.behaviorId = params.behaviorId || '';
  params.componentId = params.componentId || '';
  params.state = params.state || '';

  if (params.componentId) {
    if (params.behaviorId) {
      $db._Behavior.remove({
        _id: params.behaviorId,
        component: params.componentId,
        state: params.state
      });
      delete store[params.behaviorId];
    } else {
      if (params.state) {
        result = $db._Behavior.remove({
          component: params.componentId,
          state: params.state
        });
      } else {
        result = $db._Behavior.remove({
          component: params.componentId
        });
      }
      result.forEach(function(id) {
        delete store[id];
      });
    }
  }
};

/**
 * @method removeFromMemory
 * @param {String} id id of the component
 * @description Remove a behavior with its id from the memory
 */
exports.removeFromMemory = function removeFromMemory(id) {
  delete store[id];
};

/**
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @returns {Array} all the actions that have to be executed for a specific component and state
 * @description Get all the actions of a behavior for a component
 */
exports.getActions = function getActions(id, state) {
  var result = [];
  var dbResult = [];
  var action = null;

  dbResult = $db._Behavior.find({
    component: id,
    state: state
  });

  dbResult.forEach(function(behavior) {
    action = store[behavior[$mson.ID]];
    if (typeof action === 'undefined') {
      action = createFunction(
        behavior.state,
        behavior.action,
        behavior.core,
        behavior.useCoreAPI
      );
      store[behavior[$mson.ID]] = action;
    }
    result.push({
      useCoreAPI: behavior.useCoreAPI,
      context: behavior.context,
      action: action
    });
  });

  return result;
};

/**
 * @method clear
 * @description Remove all the behaviors stored in memory
 */
exports.clear = function clear() {
  store = {};
};

/**
 * @method get
 * @param {String} id id of the behavior
 * @returns {Behavior} the behavior
 * @description Get a behavior by its id
 */
exports.get = function get(id) {
  return store[id];
};

},{"./db.js":4,"./helper.js":5,"./mson.js":8}],3:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module component
 * @requires workflow
 * @requires db
 * @requires metamodel
 * @requires behavior
 * @requires helper
 * @requires log
 * @requires state
 * @requires mson
 * @description This module manages the components.
 * It is the factory of all the components that are created by System Runtime.
 */

'use strict';

var $workflow = require('./workflow.js');
var $db = require('./db.js');
var $metamodel = require('./metamodel.js');
var $behavior = require('./behavior.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $state = require('./state.js');
var $mson = require('./mson.js');

/* Private properties */

var store = {};

/* Private methods */

/**
 * @class _Array
 * @param {Object} conf
 * {String} classId name of the class
 * {String} type type of the array
 * {Array} arr array
 * @private
 * @description Sub class to override many methods of Array Class
 */
function _Array(conf) {
  var arr = [];
  var arrDb = [];
  var type = '';
  var id = '';
  var classId = '';
  var propertyName = '';
  var isReadOnly = false;
  var isClassName = false;

  conf = conf || {};
  type = conf.type || '';
  id = conf.id || '';
  propertyName = conf.propertyName || '';
  arrDb = conf.arr || [];
  classId = conf.classId || '';

  if (typeof conf.readOnly !== 'undefined') {
    isReadOnly = conf.readOnly;
  }

  isClassName = $metamodel.isClassName(type);

  // init
  arrDb.forEach(function(val) {
    if (isClassName) {
      arr.push($helper.getRuntime().require(val));
    } else {
      arr.push(val);
    }
  });

  /**
   * @method _copy
   * @private
   * @description copy the array
   */
  function _copy() {
    var i = 0;
    var j = 0;
    var length = arr.length;

    arrDb.forEach(function(val) {
      if (isClassName) {
        arr[i] = $helper.getRuntime().require(val);
      } else {
        arr[i] = val;
      }
      i = i + 1;
    });

    for (j = i; j < length; j++) {
      delete arr[j];
    }
    arr.length = arrDb.length;
  }

  /**
   * @method _add
   * @param {String} val value to add
   * @param {String} action type of action
   * @param {Number} start
   * @param {String} deleteCount
   * @private
   * @description add an item in the array
   */
  function _add(val, action, start, deleteCount) {
    var i = 0;
    var length = 0;
    var del = [];

    if (!isReadOnly) {
      if (isClassName) {
        if (val && $metamodel.inheritFrom(val.constructor.name, type)) {
          switch (true) {
            case action === 'push':
              arrDb.push(val.id());
              break;
            case action === 'unshift':
              arrDb.unshift(val.id());
              break;
            case action === 'splice':
              del = arrDb.splice(start, deleteCount, val);

              length = del.length;
              for (i = 0; i < length; i++) {
                $workflow.process({
                  component: id,
                  state: propertyName,
                  data: [store[del[i]], 'remove']
                });
              }
              break;
            default:
              break;
          }

          if ($helper.isRuntime()) {
            $helper
              .getRuntime()
              .require('db')
              .update({
                collection: classId,
                id: id,
                field: propertyName,
                value: arrDb
              });
          }

          $workflow.process({
            component: id,
            state: propertyName,
            data: [val, 'add']
          });
        } else {
          $log.invalidPropertyName(id, classId, propertyName, val, type);
        }
      } else {
        if (val && $metamodel.isValidType(val, type)) {
          switch (true) {
            case action === 'push':
              arrDb.push(val);
              break;
            case action === 'unshift':
              arrDb.unshift(val);
              break;
            case action === 'splice':
              arrDb.splice(start, deleteCount, val);
              break;
            default:
              break;
          }

          if ($helper.isRuntime()) {
            $helper
              .getRuntime()
              .require('db')
              .update({
                collection: classId,
                id: id,
                field: propertyName,
                value: arrDb
              });
          }

          $workflow.process({
            component: id,
            state: propertyName,
            data: [val, 'add']
          });
        } else {
          $log.invalidPropertyName(id, classId, propertyName, val, type);
        }
      }
    } else {
      $log.readOnlyProperty(id, classId, propertyName);
    }
    return arrDb.length;
  }

  /**
   * @method _remove
   * @param {String} action
   * @private
   * @description remove an item from the array
   */
  function _remove(action) {
    var result;
    var val = null;

    if (!isReadOnly) {
      if (arrDb.length !== 0) {
        switch (true) {
          case action === 'pop':
            val = arrDb.pop();
            break;
          case action === 'shift':
            val = arrDb.shift();
            break;
          default:
            break;
        }

        if ($helper.isRuntime()) {
          $helper
            .getRuntime()
            .require('db')
            .update({
              collection: classId,
              id: id,
              field: propertyName,
              value: arrDb
            });
        }

        if (isClassName) {
          result = store[val];
        } else {
          result = val;
        }

        $workflow.process({
          component: id,
          state: propertyName,
          data: [result, 'remove']
        });
      }
    } else {
      $log.readOnlyProperty(id, classId, propertyName);
    }
    return result;
  }

  /**
   * @method push
   * @param {_Component|Object} val
   * @description Override push method
   */
  arr.push = function push(val) {
    var result = _add(val, 'push');

    arr[arr.length] = val;

    return result;
  };

  /**
   * @method pop
   * @returns {_Component|Object} value
   * @description Override pop method
   */
  arr.pop = function pop() {
    var result = _remove('pop');
    var length = arr.length;

    if (length !== 0) {
      delete arr[length];
      arr.length = length - 1;
    }

    return result;
  };

  /**
   * @method shift
   * @returns {_Component|Object} value
   * @description Override shift method
   */
  arr.shift = function shift() {
    var result = _remove('shift');
    _copy();

    return result;
  };

  /**
   * @method unshift
   * @param {_Component|Object} val
   * @description Override unshift method
   */
  arr.unshift = function unshift(val) {
    var result = _add(val, 'unshift');
    _copy();

    return result;
  };

  /**
   * @method push
   * @param {_Component|Object} arr
   * @description Override concat method
   */
  arr.concat = function concat(arr) {
    var i = 0;
    var length = 0;
    var result = null;

    if (Array.isArray(arr)) {
      length = arr.length;
      for (i = 0; i < length; i++) {
        _add(arr[i], 'push');
      }
    }

    conf.arr = arrDb;

    result = new _Array(conf);
    _copy();

    return result;
  };

  /**
   * @method sort
   * @param {Function} funct the sort function
   * @returns {_Array} the current _Array
   * @description Override sort method
   */
  arr.sort = function sort(funct) {
    arrDb.sort(funct);

    if ($helper.isRuntime()) {
      $helper
        .getRuntime()
        .require('db')
        .update({
          collection: classId,
          id: id,
          field: propertyName,
          value: arrDb
        });
    }

    _copy();

    return arr;
  };

  /**
   * @method reverse
   * @returns {_Array} the reversed _Array
   * @description Override reverse method
   */
  arr.reverse = function reverse() {
    arrDb.reverse();

    if ($helper.isRuntime()) {
      $helper
        .getRuntime()
        .require('db')
        .update({
          collection: classId,
          id: id,
          field: propertyName,
          value: arrDb
        });
    }

    _copy();

    return arr;
  };

  /**
   * @method splice
   * @returns {_Array} the spliced _Array
   * @description Override splice method
   */
  arr.splice = function splice(start, deleteCount, val) {
    var result = [];
    var i = 0;
    var length = 0;
    var data = null;

    if (typeof val !== 'undefined') {
      _add(val, 'splice', start, deleteCount);
    } else {
      result = arrDb.splice(start, deleteCount);

      if ($helper.isRuntime()) {
        $helper
          .getRuntime()
          .require('db')
          .update({
            collection: classId,
            id: id,
            field: propertyName,
            value: arrDb
          });
      }

      length = result.length;
      for (i = 0; i < length; i++) {
        if (isClassName) {
          data = store[result[i]];
        } else {
          data = result[i];
        }

        $workflow.process({
          component: id,
          state: propertyName,
          data: [data, 'remove']
        });
      }
    }

    _copy();

    return result;
  };

  /**
   * @method slice
   * @returns {_Array} the sliced _Array
   * @description Override slice method
   */
  arr.slice = function slice(begin, end) {
    var result = arrDb.slice(begin, end);
    _copy();

    return result;
  };

  return arr;
}

_Array.prototype = [];

/**
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {Array} all the names of method parameters of the class
 * @private
 * @description Get all the names of method parameters
 */
function getParamNames(id, methodName) {
  var params = [];
  var result = [];
  var length = 0;
  var i = 0;

  params = $metamodel.getModel(id)[methodName].params;
  if (params) {
    length = params.length;
    for (i = 0; i < length; i++) {
      result.push(params[i].name);
    }
  }
  return result;
}

/**
 * @method getProperties
 * @param {String} id id of the class
 * @returns {Array} all the properties of the class
 * @private
 * @description Get all the property of a class
 */
function getProperties(id) {
  var model = null;
  var schema = null;
  var propNames = [];
  var length = 0;
  var i = 0;
  var result = [];

  model = $metamodel.getModel(id);
  schema = $metamodel.getSchema(model[$mson.NAME]);

  propNames = Object.keys(schema);

  length = propNames.length;
  for (i = 0; i < length; i++) {
    if (
      schema[propNames[i]] === $mson.LINK_TYPE ||
      schema[propNames[i]] === $mson.PROPERTY_TYPE ||
      schema[propNames[i]] === $mson.COLLECTION_TYPE
    ) {
      result.push({
        name: propNames[i],
        type: model[propNames[i]].type,
        readOnly: model[propNames[i]].readOnly
      });
    }
  }

  return result;
}

/**
 * @method getMethods
 * @param {String} id id of the class
 * @returns {Array} all the methods of the class
 * @private
 * @description Get all the method of a class
 */
function getMethods(id) {
  var model = null;
  var schema = null;
  var propNames = [];
  var length = 0;
  var i = 0;
  var result = [];

  model = $metamodel.getModel(id);
  schema = $metamodel.getSchema(model[$mson.NAME]);

  propNames = Object.keys(schema);

  length = propNames.length;
  for (i = 0; i < length; i++) {
    if (schema[propNames[i]] === $mson.METHOD_TYPE) {
      result.push(propNames[i]);
    }
  }

  return result;
}

/**
 * @method getStructureProperties
 * @param {String} path path of the property
 * @param {String} name name of the model
 * @returns {Array} list of property schema of the structure type
 * @private
 * @description Get the schema of a structure
 */
function getStructureProperties(path, model) {
  var type = null;
  var structure = null;
  var result = [];
  var propNames = [];

  type = $metamodel.getModelPathType(model, path);
  structure = $metamodel.getType(type);

  if (structure && structure.schema) {
    propNames = Object.keys(structure.schema);
    propNames.forEach(function(name) {
      structure.schema[name].name = name;
      result.push(structure.schema[name]);
    });
  }

  return result;
}

/**
 * @method getEvents
 * @param {String} id id of the class
 * @returns {Array} all the events of the class
 * @private
 * @description Get all the event of a class
 */
function getEvents(id) {
  var model = null;
  var schema = null;
  var propNames = [];
  var length = 0;
  var i = 0;
  var result = [];

  model = $metamodel.getModel(id);
  schema = $metamodel.getSchema(model[$mson.NAME]);

  propNames = Object.keys(schema);

  length = propNames.length;
  for (i = 0; i < length; i++) {
    if (schema[propNames[i]] === $mson.EVENT_TYPE) {
      result.push(propNames[i]);
    }
  }

  return result;
}

/**
 * @method getStructureValue
 * @param {String} model name of the model
 * @param {String} id name of the component
 * @param {String} path
 * @returns {Object} the value
 * @private
 * @description Get the value of a structure
 */
function getStructureValue(model, id, path) {
  var result = null;
  var doc = $db.store[model][id];
  var subPath = path.split('.');
  var length = subPath.length;
  var i = 0;
  var arr = '';
  var index = -1;

  result = doc;

  for (i = 0; i < length; i++) {
    if (subPath[i].indexOf('[') !== -1) {
      arr = subPath[i].split('[')[0];
      index = subPath[i].split('[')[1].replace(']', '');
      result = result[arr][index];
    } else {
      if (result) {
        result = result[subPath[i]];
      }
    }
  }
  return result;
}

/**
 * @method getStructureValue
 * @param {String} model name of the model
 * @param {String} id name of the component
 * @param {String} path
 * @param {String} value the value to set
 * @private
 * @description Set the value of a structure
 */
function setStructureValue(model, id, path, value) {
  var result = null;
  var doc = $db.store[model][id];
  var subPath = path.split('.');
  var length = subPath.length;
  var i = 0;
  var arr = '';
  var index = -1;

  result = doc;

  for (i = 0; i < length - 1; i++) {
    if (subPath[i].indexOf('[') !== -1) {
      arr = subPath[i].split('[')[0];
      index = subPath[i].split('[')[1].replace(']', '');
      result = result[arr][index];
    } else {
      result = result[subPath[i]];
    }
  }
  result[subPath[i]] = value;
}

/**
 * @method createClasss
 * @param {String} classId name of the class
 * @returns {Function} the class
 * @private
 * @description Create a new class from a class definition
 */
function createClass(classId) {
  var proxy = function proxy(config) {
    config = config || {};
    var proxy = {};

    if (config.constructor.name !== 'Object') {
      $log.invalidConctructorParameters(config, classId);
      config = {};
    }

    if (
      !$metamodel.isValidObject(
        config,
        $metamodel.getModel(classId),
        true,
        true
      )
    ) {
      $log.invalidParameters(classId);
    }

    $metamodel.prepareObject(config, $metamodel.getModel(classId));

    if (typeof config[$mson.ID] === 'undefined') {
      config[$mson.ID] = $helper.generateId();
    }

    store[config[$mson.ID]] = this;

    // id
    proxy = function proxy() {
      return config[$mson.ID];
    };
    this.id = new Function(
      '__proxy',
      'return function id () { return __proxy.apply(this) };'
    )(proxy);

    // create link to db
    $db.store[classId][config[$mson.ID]] = config;

    $db.createLog('insert', classId, config[$mson.ID], '', config);

    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
      $helper
        .getRuntime()
        .require('db')
        .insert({
          collection: classId,
          document: config
        });
    }

    Object.freeze(this);

    if (this.init) {
      this.init(config);
    }
  };
  return new Function(
    '__proxy',
    'return function ' +
      classId +
      ' (config) { __proxy.apply(this, arguments) };'
  )(proxy);
}

/**
 * @method addIdClass
 * @param {Function} Class a class
 * @param {String} classId name of the class
 * @private
 * @description Add an id method to a class that will return its id
 */
function addIdClass(Class, classId) {
  var proxy = function proxy() {
    return classId;
  };
  Class.id = new Function(
    '__proxy',
    'return function id () { return __proxy.apply(this) };'
  )(proxy);
}

/**
 * @method addProperties
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add properties to a component.
 * All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 *
 * @example
 * laure.age(); // get the age of a person
 * laure.age(22); // set the age of a person
 */
function addProperties(model, Class, classId) {
  var properties = getProperties(model);

  properties.forEach(function property(prop) {
    var proxy = {};
    var propertyName = '';
    var propertyType = '';
    var propertyReadOnly = '';

    propertyName = prop.name;
    propertyType = prop.type;
    propertyReadOnly = prop.readOnly;

    function _isValidCollection(coll, type) {
      var result = true;

      coll.forEach(function(val) {
        if (
          !(
            $metamodel.isValidType(val, type) &&
            ($metamodel.inheritFrom(val.constructor.name, type) &&
              $metamodel.isClassName(type))
          )
        ) {
          result = result && false;
        }
      });

      return true;
    }

    function _getRealCollection(coll, type) {
      var result = [];

      coll.forEach(function(val) {
        if ($metamodel.isClassName(type)) {
          switch (true) {
            case typeof val === 'string':
              result.push(val);
              break;
            case typeof val.id !== 'undefined':
              result.push(val.id());
              break;
            default:
              result.push(null);
              break;
          }
        } else {
          result.push(val);
        }
      });

      return result;
    }

    if (Array.isArray(propertyType) || propertyType === 'array') {
      // in case of array, return a sub array
      proxy = function proxy(position, value) {
        var search = [];
        var component = null;
        var runtimeArr = null;
        var val = null;
        var realVal = null;
        var i = 0;
        var length = 0;

        if (typeof value === 'undefined') {
          if (typeof position === 'undefined') {
            runtimeArr = new _Array({
              id: this.id(),
              propertyName: propertyName,
              readOnly: propertyReadOnly,
              classId: classId,
              type: propertyType === 'array' ? 'any' : propertyType[0],
              arr: $db.store[classId][this.id()][propertyName]
            });

            return runtimeArr;
          } else {
            if (Array.isArray(position)) {
              // we replace the collection
              if (
                _isValidCollection(
                  position,
                  propertyType === 'array' ? 'any' : propertyType[0]
                )
              ) {
                search = $db[classId].find({
                  _id: this.id()
                });
                if (search.length) {
                  component = search[0];
                  realVal = _getRealCollection(
                    position,
                    propertyType === 'array' ? 'any' : propertyType[0]
                  );

                  $workflow.process({
                    component: this.id(),
                    state: propertyName,
                    data: [position, 'reset']
                  });

                  component[propertyName] = realVal;

                  if ($helper.isRuntime()) {
                    $helper
                      .getRuntime()
                      .require('db')
                      .update({
                        collection: classId,
                        id: this.id(),
                        field: propertyName,
                        value: component[propertyName]
                      });
                  }
                }
              } else {
                $log.invalidPropertyName(
                  this.id(),
                  this.constructor.name,
                  propertyName,
                  position,
                  propertyType[0]
                );
              }
            } else {
              if (typeof position === 'number') {
                val = $db.store[classId][this.id()][propertyName][position];
                if (val) {
                  switch (true) {
                    case $metamodel.isClassName(
                      propertyType === 'array' ? 'array' : propertyType[0]
                    ):
                      realVal = $helper.getRuntime().require(val);
                      break;
                    case propertyType === 'array'
                      ? 'array'
                      : propertyType[0] === 'date':
                      realVal = new Date(val);
                      break;
                    case $metamodel.isStructure(propertyName, model):
                      realVal = addStructure(
                        '',
                        propertyName + '[' + position + ']',
                        model,
                        this.id()
                      );
                      break;
                    default:
                      realVal = val;
                      break;
                  }
                  return realVal;
                }
              } else {
                $log.invalidPropertyName(
                  this.id(),
                  this.constructor.name,
                  propertyName,
                  position,
                  'number'
                );
              }
            }
          }
        } else {
          if (propertyReadOnly) {
            $log.readOnlyProperty(
              this.id(),
              this.constructor.name,
              propertyName
            );
          } else {
            if (
              $metamodel.isValidType(
                value,
                propertyType === 'array' ? 'any' : propertyType[0]
              ) ||
              ($metamodel.inheritFrom(
                value.constructor.name,
                propertyType === 'array' ? 'array' : propertyType[0]
              ) &&
                $metamodel.isClassName(
                  propertyType === 'array' ? 'array' : propertyType[0]
                ))
            ) {
              search = $db[classId].find({
                _id: this.id()
              });
              if (search.length) {
                switch (true) {
                  case $metamodel.isClassName(
                    propertyType === 'array' ? 'array' : propertyType[0]
                  ):
                    switch (true) {
                      case typeof value === 'string':
                        realVal = value;
                        break;
                      case typeof value.id !== 'undefined':
                        realVal = value.id();
                        break;
                      default:
                        realVal = '';
                        break;
                    }
                    break;
                  case Array.isArray(propertyType)
                    ? propertyType[0]
                    : 'any' === 'date':
                    if (typeof value === 'string') {
                      realVal = value;
                    } else {
                      realVal = value.toISOString();
                    }
                    break;
                  default:
                    realVal = '';
                    break;
                }

                component = search[0];
                component[propertyName][position] = realVal;

                if ($helper.isRuntime()) {
                  $helper
                    .getRuntime()
                    .require('db')
                    .update({
                      collection: classId,
                      id: this.id(),
                      field: propertyName,
                      value: component[propertyName]
                    });
                }

                $workflow.process({
                  component: this.id(),
                  state: propertyName,
                  data: [value, 'add']
                });
              }
            } else {
              $log.invalidPropertyName(
                this.id(),
                this.constructor.name,
                propertyName,
                value,
                propertyType[0]
              );
            }
          }
        }
      };
      Class.prototype[propertyName] = new Function(
        '__proxy',
        'return function ' +
          propertyName +
          ' (position, value) { return __proxy.apply(this, arguments) };'
      )(proxy);
    } else {
      proxy = function proxy(value) {
        var search = [];
        var component = null;
        var propertyValue = null;

        if (typeof value === 'undefined') {
          component = $db.store[classId][this.id()];
          if (component) {
            switch (true) {
              case $metamodel.isClassName(propertyType):
                propertyValue = exports.get(component[propertyName]);
                break;
              case propertyType === 'date':
                propertyValue = new Date(component[propertyName]);
                break;
              case propertyType === 'json':
                propertyValue = component[propertyName];
                propertyValue = JSON.parse(JSON.stringify(propertyValue));
                break;
              case propertyType === 'array':
                propertyValue = new _Array({
                  id: this.id(),
                  propertyName: propertyName,
                  readOnly: propertyReadOnly,
                  classId: classId,
                  type: 'any',
                  arr: $db.store[classId][this.id()][propertyName]
                });
                break;
              case $metamodel.isStructure(propertyName, classId):
                propertyValue = addStructure(
                  '',
                  propertyName,
                  model,
                  this.id()
                );
                break;
              default:
                propertyValue = component[propertyName]; // TODO case of object
                break;
            }
            return propertyValue;
          } else {
            $log.destroyedComponentCall(propertyName, this.id());
          }
        } else {
          if (propertyReadOnly) {
            $log.readOnlyProperty(
              this.id(),
              this.constructor.name,
              propertyName
            );
          } else {
            if ($metamodel.isValidType(value, propertyType)) {
              search = $db[classId].find({
                _id: this.id()
              });
              if (search.length) {
                component = search[0];

                switch (true) {
                  case $metamodel.isClassName(propertyType):
                    if (value === null) {
                      component[propertyName] = value;
                    } else {
                      component[propertyName] = value.id();
                    }
                    break;
                  case propertyType === 'date':
                    if (typeof value === 'string') {
                      component[propertyName] = value;
                    } else {
                      component[propertyName] = value.toISOString();
                    }
                    break;
                  default:
                    component[propertyName] = value;
                    break;
                }

                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                  $helper
                    .getRuntime()
                    .require('db')
                    .update({
                      collection: classId,
                      id: this.id(),
                      field: propertyName,
                      value: value
                    });
                }

                // case of _Behavior
                if (classId === '_Behavior') {
                  $behavior.removeFromMemory(this.id());
                }

                $workflow.process({
                  component: this.id(),
                  state: propertyName,
                  data: [value]
                });
              }
            } else {
              $log.invalidPropertyName(
                this.id(),
                this.constructor.name,
                propertyName,
                value,
                propertyType
              );
            }
          }
        }
      };
      Class.prototype[propertyName] = new Function(
        '__proxy',
        'return function ' +
          propertyName +
          ' (value) { return __proxy.apply(this, arguments) };'
      )(proxy);
    }
  });
}

/**
 * @method addStructure
 * @param {String} path parent path
 * @param {String} name property name
 * @param {String} model model name
 * @param {String} id id of the component
 * @returns {Object} object that cointains methods to access the structure
 * @private
 * @description Add structure properties to a component.
 * All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 */
function addStructure(path, name, model, id) {
  var properties = getStructureProperties(
    path ? path + '.' + name : name,
    model
  );
  var sructure = undefined;

  if (getStructureValue(model, id, path ? path + '.' + name : name)) {
    sructure = {};
    properties.forEach(function property(prop) {
      var proxy = {};
      var propertyName = '';
      var propertyType = '';
      var propertyReadOnly = '';

      propertyName = prop.name;
      propertyType = prop.type;
      propertyReadOnly = prop.readOnly;

      if (Array.isArray(propertyType) || propertyType === 'array') {
        // in case of array, return a sub array
        proxy = function proxy(position, value) {
          var search = [];
          var component = null;
          var runtimeArr = null;
          var val = null;
          var realVal = null;
          var i = 0;
          var length = 0;
          var parentPath = '';
          var fullPath = '';

          function _isValidCollection(coll, type) {
            var result = true;

            coll.forEach(function(val) {
              if (!$metamodel.isValidType(val, type)) {
                result = result && false;
              }
            });

            return result;
          }

          if (path) {
            parentPath = path + '.' + name;
          } else {
            parentPath = name;
          }
          fullPath = parentPath + '.' + propertyName;

          if (typeof value === 'undefined') {
            if (typeof position === 'undefined') {
              runtimeArr = new _Array({
                id: id,
                propertyName: fullPath,
                readOnly: propertyReadOnly,
                classId: model,
                type: Array.isArray(propertyType) ? propertyType[0] : 'any',
                arr: getStructureValue(model, id, fullPath)
              });

              return runtimeArr;
            } else {
              if (Array.isArray(position)) {
                // we replace the collection
                if (
                  _isValidCollection(
                    position,
                    Array.isArray(propertyType) ? propertyType[0] : 'any'
                  )
                ) {
                  search = $db[model].find({
                    _id: id
                  });
                  if (search.length) {
                    setStructureValue(model, id, fullPath, position);

                    // all element
                    if (fullPath.indexOf('[') !== -1) {
                      $workflow.process({
                        component: id,
                        state: fullPath.replace(/\[(\d)*\]/g, ''),
                        data: [position, 'reset']
                      });
                    }

                    // current element
                    $workflow.process({
                      component: id,
                      state: fullPath,
                      data: [position, 'reset']
                    });

                    if ($helper.isRuntime()) {
                      $helper
                        .getRuntime()
                        .require('db')
                        .update({
                          collection: model,
                          id: id,
                          field: fullPath,
                          value: position
                        });
                    }
                  }
                } else {
                  $log.invalidPropertyName(
                    id,
                    this.constructor.name,
                    propertyName,
                    position,
                    propertyType[0]
                  );
                }
              } else {
                if (typeof position === 'number') {
                  component = $db.store[model][id];
                  if (component) {
                    switch (true) {
                      case $metamodel.isClassName(
                        Array.isArray(propertyType) ? propertyType[0] : 'any'
                      ):
                        val = exports.get(
                          getStructureValue(
                            model,
                            id,
                            fullPath + '[' + position + ']'
                          )
                        );
                        return val;
                        break;
                      case Array.isArray(propertyType)
                        ? propertyType[0]
                        : 'any' === 'date':
                        val = new Date(
                          getStructureValue(
                            model,
                            id,
                            fullPath + '[' + position + ']'
                          )
                        );
                        return val;
                        break;
                      case Array.isArray(propertyType)
                        ? propertyType[0]
                        : 'any' === 'json':
                        val = getStructureValue(
                          model,
                          id,
                          fullPath + '[' + position + ']'
                        );
                        val = JSON.parse(JSON.stringify(val));
                        return val;
                        break;
                      case $metamodel.isStructure(fullPath, model):
                        val = addStructure(
                          parentPath,
                          propertyName + '[' + position + ']',
                          model,
                          id
                        );
                        return val;
                        break;
                      default:
                        val = getStructureValue(
                          model,
                          id,
                          fullPath + '[' + position + ']'
                        );
                        return val;
                        break;
                    }
                    if (val === undefined && prop.default !== undefined) {
                      val = prop.default;
                    }
                    return val;
                  } else {
                    $log.destroyedComponentCall(
                      fullPath[position] + '[' + position + ']',
                      id
                    );
                  }
                } else {
                  $log.invalidPropertyName(
                    id,
                    this.constructor.name,
                    propertyName,
                    position,
                    'number'
                  );
                }
              }
            }
          } else {
            if (propertyReadOnly) {
              $log.readOnlyProperty(id, this.constructor.name, propertyName);
            } else {
              if (
                $metamodel.isValidType(
                  value,
                  Array.isArray(propertyType) ? propertyType[0] : 'any'
                )
              ) {
                search = $db[model].find({
                  _id: id
                });
                if (search.length) {
                  var arr = getStructureValue(model, id, fullPath);
                  if (typeof arr === 'undefined') {
                    arr = [];
                  }

                  switch (true) {
                    case $metamodel.inheritFrom(
                      value.constructor.name,
                      Array.isArray(propertyType) ? propertyType[0] : 'any'
                    ) &&
                      $metamodel.isClassName(
                        Array.isArray(propertyType) ? propertyType[0] : 'any'
                      ):
                      arr[position] = value.id();
                      break;
                    case Array.isArray(propertyType)
                      ? propertyType[0]
                      : 'any' === 'date':
                      arr[position] = value.toISOString();
                      break;
                    default:
                      arr[position] = value;
                      break;
                  }

                  setStructureValue(model, id, fullPath, arr);

                  if ($helper.isRuntime()) {
                    $helper
                      .getRuntime()
                      .require('db')
                      .update({
                        collection: model,
                        id: id,
                        field: fullPath,
                        value: arr
                      });
                  }

                  // all element
                  if (fullPath.indexOf('[') !== -1) {
                    $workflow.process({
                      component: id,
                      state: fullPath.replace(/\[(\d)*\]/g, ''),
                      data: [value, 'add']
                    });
                  }

                  // current element
                  $workflow.process({
                    component: id,
                    state: fullPath,
                    data: [value, 'add']
                  });
                }
              } else {
                $log.invalidPropertyName(
                  id,
                  this.constructor.name,
                  propertyName,
                  value,
                  Array.isArray(propertyType) ? propertyType[0] : 'any'
                );
              }
            }
          }
        };

        sructure[propertyName] = new Function(
          '__proxy',
          'return function ' +
            propertyName +
            ' (position, value) { return __proxy.apply(this, arguments) };'
        )(proxy);
      } else {
        proxy = function proxy(value) {
          var search = [];
          var component = null;
          var propertyValue = null;
          var parentPath = '';
          var fullPath = '';

          if (path) {
            parentPath = path + '.' + name;
          } else {
            parentPath = name;
          }
          fullPath = parentPath + '.' + propertyName;

          if (typeof value === 'undefined') {
            component = $db.store[model][id];
            if (component) {
              switch (true) {
                case $metamodel.isClassName(propertyType):
                  propertyValue = exports.get(
                    getStructureValue(model, id, fullPath)
                  );
                  break;
                case propertyType === 'date':
                  propertyValue = new Date(
                    getStructureValue(model, id, fullPath)
                  );
                  break;
                case propertyType === 'json':
                  propertyValue = getStructureValue(model, id, fullPath);
                  propertyValue = JSON.parse(JSON.stringify(propertyValue));
                  break;
                case $metamodel.isStructure(fullPath, model):
                  propertyValue = addStructure(
                    parentPath,
                    propertyName,
                    model,
                    id
                  );
                  break;
                default:
                  propertyValue = getStructureValue(model, id, fullPath);
                  break;
              }
              if (propertyValue === undefined && prop.default !== undefined) {
                propertyValue = prop.default;
              }
              return propertyValue;
            } else {
              $log.destroyedComponentCall(fullPath, id);
            }
          } else {
            if (propertyReadOnly) {
              $log.readOnlyProperty(id, model, fullPath);
            } else {
              if ($metamodel.isValidType(value, propertyType)) {
                search = $db[model].find({
                  _id: id
                });
                if (search.length) {
                  component = search[0];

                  switch (true) {
                    case $metamodel.isClassName(propertyType):
                      setStructureValue(model, id, fullPath, value.id());
                      break;
                    case propertyType === 'date':
                      setStructureValue(
                        model,
                        id,
                        fullPath,
                        value.toISOString()
                      );
                      break;
                    default:
                      setStructureValue(model, id, fullPath, value);
                      break;
                  }

                  if (
                    $helper.isRuntime() &&
                    $helper.getRuntime().require('db')
                  ) {
                    $helper
                      .getRuntime()
                      .require('db')
                      .update({
                        collection: model,
                        id: id,
                        field: fullPath,
                        value: value
                      });
                  }

                  // case of _Behavior
                  if (model === '_Behavior') {
                    $behavior.removeFromMemory(id);
                  }

                  // all elements
                  if (fullPath.indexOf('[') !== -1) {
                    $workflow.process({
                      component: id,
                      state: fullPath.replace(/\[(\d)*\]/g, ''),
                      data: [value]
                    });
                  }

                  // the current element
                  $workflow.process({
                    component: id,
                    state: fullPath,
                    data: [value]
                  });
                }
              } else {
                $log.invalidPropertyName(
                  id,
                  model,
                  fullPath,
                  value,
                  propertyType
                );
              }
            }
          }
        };

        sructure[propertyName] = new Function(
          '__proxy',
          'return function ' +
            propertyName +
            ' (value) { return __proxy.apply(this, arguments) };'
        )(proxy);
      }
    });
  }

  return sructure;
}

/**
 * @method addMethods
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add methods to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts / outputs are compliant with the model.
 */
function addMethods(model, Class, classId) {
  var methods = getMethods(model);

  methods.forEach(function method(methodName) {
    var paramsName = getParamNames(classId, methodName);
    var params = paramsName.join(', ');
    var paramsWithContext = '';

    var proxy = function proxy() {
      var result = null;

      result = $workflow.process({
        component: this.id(),
        state: methodName,
        data: arguments
      });

      return result;
    };

    var proxyWithContext = function proxy() {
      var result = null;
      var data = Array.prototype.slice.call(arguments);

      data.shift();

      if (arguments[0]) {
        result = $workflow.process({
          component: this.id(),
          state: methodName,
          data: data,
          context: arguments[0]
        });
      } else {
        $log.unknownContext(classId, methodName);
      }

      return result;
    };

    if (params) {
      paramsName.unshift('context');
      paramsWithContext = paramsName.join(', ');

      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' +
          methodName +
          ' (' +
          params +
          ') { return __proxy.apply(this, arguments) };'
      )(proxy);
      if (methodName !== 'name') {
        Class[methodName] = new Function(
          '__proxy',
          'return function ' +
            methodName +
            ' (' +
            paramsWithContext +
            ') { return __proxy.apply(this, arguments) };'
        )(proxyWithContext);
      }
    } else {
      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' + methodName + ' () { return __proxy.apply(this) };'
      )(proxy);
      if (methodName !== 'name') {
        Class[methodName] = new Function(
          '__proxy',
          'return function ' +
            methodName +
            ' (context) { return __proxy.apply(this, arguments) };'
        )(proxyWithContext);
      }
    }
  });
}

/**
 * @method addEvents
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add events to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts are compliant with the model.
 */
function addEvents(model, Class, classId) {
  var events = getEvents(model);
  events.forEach(function event(methodName) {
    var paramsName = getParamNames(classId, methodName);
    var params = paramsName.join(', ');

    var proxy = function proxy() {
      var systems = [];
      var systemId = 'e89c617b6b15d24';
      var data = [];
      var i = 0;
      var length = -1;
      var message = {};

      if (classId === '_Channel') {
        systems = $db._System.find({
          master: true
        });
        if (systems.length) {
          systemId = systems[0][$mson.ID];
        }

        message.from = systemId;
        length = arguments.length;
        for (i = 0; i < length; i++) {
          data.push(arguments[i]);
        }
        message.data = data;
        message.event = methodName;

        $db._Message.insert(message);

        $workflow.process({
          component: this.id(),
          state: 'send',
          data: [
            {
              event: message.event,
              from: message.from,
              data: message.data
            }
          ]
        });
      } else {
        $workflow.process({
          component: this.id(),
          state: methodName,
          data: arguments
        });
      }
    };
    if (params) {
      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' +
          methodName +
          ' (' +
          params +
          ') { return __proxy.apply(this, arguments) };'
      )(proxy);
    } else {
      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' + methodName + ' () { return __proxy.apply(this) };'
      )(proxy);
    }
  });
}

/**
 * @method addOn
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add a on method to a component to add behaviors to the component
 */
function addOn(Class, classId) {
  var proxy = function proxy(state, action, useCoreAPI, isCore) {
    var behaviorId = '';
    var currentState = '';
    var context = null;

    // case of context
    if (
      useCoreAPI &&
      useCoreAPI.constructor &&
      useCoreAPI.constructor.name !== 'Boolean'
    ) {
      context = useCoreAPI;
      useCoreAPI = false;
      isCore = true;
    }

    if (
      $workflow.checkInput({
        component: this,
        methodName: 'on',
        args: arguments
      })
    ) {
      if ($metamodel.isValidState(state, classId)) {
        if (
          !$metamodel.isEvent(state, classId) &&
          !$metamodel.isProperty(state, classId) &&
          !$metamodel.isLink(state, classId) &&
          !$metamodel.isCollection(state, classId) &&
          $db._Behavior.find({
            component: this.id(),
            state: state
          }).length >= 1
        ) {
          $log.behaviorNotUnique(classId, state);
        } else {
          if ($workflow.checkInputNumbers(classId, state, action)) {
            behaviorId = $behavior.add(
              this.id(),
              state,
              action,
              useCoreAPI,
              isCore,
              context
            );

            currentState = $state.get(this.id());
            if (currentState && currentState.state === state) {
              $workflow.process({
                id: behaviorId,
                data: currentState.value
              });
            }
          } else {
            $log.invalidParamNumberMethodOn(
              this.id(),
              this.constructor.name,
              state
            );
          }
        }
      } else {
        $log.invalidStateOn(classId, state);
      }
    }
    return behaviorId;
  };
  Class.prototype.on = new Function(
    '__proxy',
    'return function on (state, action, useCoreAPI, isCore) { return __proxy.apply(this, arguments) };'
  )(proxy);
}

/**
 * @method addOnClass
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add a on method to a class component to add behaviors to the class
 */
function addOnClass(Class, classId) {
  var proxy = function proxy(state, action, useCoreAPI, isCore) {
    var behaviorId = '';
    var currentState = '';
    var context = null;

    // case of context
    if (
      useCoreAPI &&
      useCoreAPI.constructor &&
      useCoreAPI.constructor.name !== 'Boolean'
    ) {
      context = useCoreAPI;
      useCoreAPI = false;
      isCore = true;
    }
    if (
      $workflow.checkInput({
        component: this,
        methodName: 'on',
        args: arguments
      })
    ) {
      if ($metamodel.isValidState(state, classId)) {
        if (
          !$metamodel.isEvent(state, classId) &&
          !$metamodel.isProperty(state, classId) &&
          !$metamodel.isLink(state, classId) &&
          !$metamodel.isCollection(state, classId) &&
          $db._Behavior.find({
            component: this.id(),
            state: state
          }).length >= 1
        ) {
          $log.behaviorNotUnique(classId, state);
        } else {
          if ($workflow.checkInputNumbers(classId, state, action)) {
            behaviorId = $behavior.add(
              this.id(),
              state,
              action,
              useCoreAPI,
              isCore,
              context
            );

            currentState = $state.get(this.id());
            if (currentState && currentState.state === state) {
              $workflow.process({
                id: behaviorId,
                data: currentState.value
              });
            }
          } else {
            $log.invalidParamNumberMethodOn(
              this.id(),
              this.constructor.name,
              state
            );
          }
        }
      } else {
        $log.invalidStateOn(classId, state);
      }
    }
    return behaviorId;
  };
  Class.on = new Function(
    '__proxy',
    'return function on (state, action, useCoreAPI, isCore) { return __proxy.apply(this, arguments) };'
  )(proxy);
}

/**
 * @method addOffClass
 * @param {Object} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add a off method to a class component to remove behaviors from the class
 */
function addOffClass(Class, classId) {
  var proxy = function proxy(state, behaviorId) {
    if (
      $workflow.checkInput({
        component: this,
        methodName: 'off',
        args: arguments
      })
    ) {
      if ($metamodel.isValidState(state, classId)) {
        $behavior.remove({
          behaviorId: behaviorId,
          componentId: classId,
          state: state
        });
      } else {
        $log.invalidStateOff(classId, state);
      }
    }
  };
  Class.off = new Function(
    '__proxy',
    'return function off (state, behaviorId) { return __proxy.apply(this, arguments) };'
  )(proxy);
}

/**
 * @method addDestroyClass
 * @param {Object} Class Class
 * @private
 * @description Add a destroy method to a class component to detroy the class and all the components of the same class
 */
function addDestroyClass(Class) {
  var proxy = function proxy() {
    var id = this.id();
    var result = [];
    var i = 0;
    var length = 0;

    // if not virtual component
    if ($db[id]) {
      result = $db[id].remove();
    }

    delete store[id];

    // remove behaviors
    $behavior.remove({
      componentId: id
    });

    length = result.length;
    for (i = 0; i < length; i++) {
      // remove behaviors
      $behavior.remove({
        componentId: result[i]
      });
    }

    $workflow.process({
      component: id,
      state: 'destroy'
    });
  };
  Class.destroy = new Function(
    '__proxy',
    'return function destroy () { return __proxy.apply(this) };'
  )(proxy);
}

/**
 * @method addRequireClass
 * @param {Object} Class Class
 * @private
 * @description Require a component
 */
function addRequireClass(Class) {
  var proxy = function proxy(id) {
    return exports.get(id);
  };
  Class.require = new Function(
    '__proxy',
    'return function require (id) { return __proxy.apply(this, arguments) };'
  )(proxy);
}

/**
 * @method addInitClass
 * @param {Object} Class Class
 * @private
 * @description Init a class
 */
function addInitClass(Class) {
  var proxy = function proxy() {};
  Class.init = new Function(
    '__proxy',
    'return function init (conf) { return __proxy.apply(this, arguments) };'
  )(proxy);
}

/**
 * @method addClassInfoClass
 * @param {Object} Class Class
 * @private
 * @description Add the ClassInfo method on a class
 */
function addClassInfoClass(Class) {
  var proxy = function proxy() {
    return exports.get(this.id() + 'Info');
  };
  Class.classInfo = new Function(
    '__proxy',
    'return function classInfo () { return __proxy.apply(this) };'
  )(proxy);
}

/**
 * @method factory
 * @param {JSON} config configuration of the component
 * @returns {Component} the created component
 * @private
 * @description Create a component from its configuration
 */
function factory(config) {
  config = config || {};

  var Class = {};
  var classId = '';

  if (typeof config.model === 'undefined') {
    classId = $helper.generateId();
  } else {
    classId = config.model;
  }

  Class = createClass(classId);

  store[classId] = Class;

  addIdClass(Class, classId);

  addProperties(config.model, Class, classId);
  addMethods(config.model, Class, classId);
  addEvents(config.model, Class, classId);

  // add default properties/methods only if the component
  // inherit from _Component
  if ($metamodel.inheritFrom(classId, '_Component')) {
    addOn(Class, classId);

    addOnClass(Class, classId);
    addOffClass(Class, classId);
    addRequireClass(Class);
    addInitClass(Class);
    addDestroyClass(Class);
    addClassInfoClass(Class);
  }

  Object.freeze(Class);

  return Class;
}

/* Public methods */

/**
 * @method get
 * @param {String} id of the component
 * @returns {Component} component
 * @description Get a component by its id
 */
exports.get = function get(id) {
  return store[id];
};

/**
 * @method create
 * @param {Object} config <br>
 * {String} model model name <br>
 * @returns {Component}
 * @description Create a component from its configuration
 */
exports.create = function create(config) {
  return factory(config);
};

/**
 * @method destroy
 * @param {String} id id of the component to destroy
 * @description Destroy a component from its id
 */
exports.destroy = function destroy(id) {
  var component = store[id];
  var classId = '';

  if (component) {
    delete store[id];
    classId = component.constructor.name;
    $db[classId].remove({
      _id: id
    });

    // remove behaviors
    $behavior.remove({
      componentId: id
    });

    // case of Behavior
    if (classId === '_Behavior') {
      $behavior.removeFromMemory(id);
    }
  }
};

/**
 * @method removeFromMemory
 * @param {String} id id of the component
 * @description Remove a component with its id from the memory
 */
exports.removeFromMemory = function removeFromMemory(id) {
  delete store[id];
};

/**
 * @method clear
 * @description Remove all the components store in the memory
 */
exports.clear = function clear() {
  store = {};
};

},{"./behavior.js":2,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./mson.js":8,"./state.js":10,"./workflow.js":11}],4:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module db
 * @requires component
 * @requires metamodel
 * @requires helper
 * @requires log
 * @requires behavior
 * @requires state
 * @requires workflow
 * @requires mson
 * @description This module manages System Runtime database.
 * System Runtime database is a micro NoSQL Database that contains:
 * - collections to store documents (schemas, types, components, ...) and
 * - APIs to import or export documents.
 *
 * System Runtime Database is closely linked to System Runtime metamodel and System Runtime components because:
 * - all operations done by System Runtime database must be compliant with the model before being finished,
 * - insert operation automatically creates a component and
 * - remove operation automatically destroy a component.
 */

'use strict';

var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $behavior = require('./behavior.js');
var $state = require('./state.js');
var $workflow = require('./workflow.js');
var $mson = require('./mson.js');

/* Private properties */

var collections = [];
var internalDB = [
  '_Runtime',
  '_Schema',
  '_Model',
  '_GeneratedModel',
  '_Behavior',
  '_State',
  '_Type',
  '_Metamodel',
  '_Database',
  '_System',
  '_ClassInfo',
  '_Message',
  '_Channel',
  '_Logger',
  '_Log'
];
var coreDb = [
  '_Log',
  '_Schema',
  '_Logger',
  '_Model',
  '_GeneratedModel',
  '_State',
  '_Type'
];
var logOrder = 0;

/* Private methods */

/**
 * @method incLogOrder
 * @description Increment Log
 */
function incLogOrder() {
  return logOrder++;
}

/**
 * @method dump
 * @returns {Object} the dump of the database. The dump is an object that contains: <br>
 * {Object} schemas the schemas store in the database <br>
 * {Object} types the types store in the database <br>
 * {Object} behaviors the behaviors store in the database <br>
 * {Object} components the components store in the database
 * @private
 * @description Dump the database
 */
function dump() {
  var dbDump = {};
  var collectionName = '';
  var behaviorId = '';
  var typeId = '';
  var type = null;
  var behavior = null;
  var schema = null;
  var model = null;
  var collection = null;
  var schemaId = '';
  var modelId = '';
  var length = 0;
  var i = 0;
  var id = '';

  // schemas
  dbDump.schemas = {};
  if (exports._Schema.count()) {
    for (schemaId in exports.store._Schema) {
      if (!exports.store._Schema[schemaId][$mson.CORE]) {
        schema = JSON.parse(JSON.stringify(exports.store._Schema[schemaId]));
        dbDump.schemas[schemaId] = schema;
      }
    }
  }

  // models
  dbDump.models = {};
  if (exports._Model.count()) {
    for (modelId in exports.store._Model) {
      if (!exports.store._Model[modelId][$mson.CORE]) {
        model = JSON.parse(JSON.stringify(exports.store._Model[modelId]));
        dbDump.models[modelId] = model;
      }
    }
  }

  // types
  dbDump.types = {};
  if (exports._Type.count()) {
    for (typeId in exports.store._Type) {
      if (!exports.store._Type[typeId].core) {
        type = JSON.parse(JSON.stringify(exports.store._Type[typeId]));
        dbDump.types[type.name] = type;
      }
    }
  }

  // behaviors
  dbDump.behaviors = {};
  for (behaviorId in exports.store._Behavior) {
    if (!exports.store._Behavior[behaviorId].core) {
      behavior = JSON.parse(
        JSON.stringify(exports.store._Behavior[behaviorId])
      );
      dbDump.behaviors[behaviorId] = behavior;
    }
  }

  // components
  dbDump.components = {};
  length = collections.length;
  for (i = 0; i < length; i++) {
    collectionName = collections[i];
    if (exports[collectionName].count()) {
      collection = JSON.parse(JSON.stringify(exports.store[collectionName]));

      for (id in collection) {
        if (collection[id][$mson.CORE]) {
          delete collection[id];
        }
      }

      if (Object.keys(collection).length) {
        dbDump.components[collectionName] = collection;
      }
    }
  }

  return dbDump;
}

/**
 * @class _Array
 * @private
 * @description Sub class to override sort method of Array Class
 */
function _Array() {
  var arr = [];

  /**
   * @method sort
   * @param {Function|Object} param the sort function or the sort query
   * @returns {Array} the sorted array
   * @description Override sort method
   */
  arr.sort = function sort(param) {
    var result = null;
    var field = '';
    var arrCopy = [];

    // copy
    arr.forEach(function(val) {
      arrCopy.push(val);
    });

    if (param instanceof Function) {
      arrCopy.sort(param);
    } else {
      field = Object.keys(param)[0];
      arrCopy.sort(function(docA, docB) {
        if (docA[field] < docB[field]) {
          return param[field] === 1 ? -1 : 1;
        }
        if (docA[field] > docB[field]) {
          return param[field] === 1 ? 1 : -1;
        }
        return 0;
      });
    }

    return arrCopy;
  };

  return arr;
}

_Array.prototype = [];

/**
 * @method isValidWithSelectors
 * @param {Object} field field on which made the search
 * @param {Object} query query object
 * @param {Object} document document object
 * @returns {Boolean} true if the query  used for the search is valid with the document
 * @private
 * @description Test if the query used for the search is valid with the document
 */
function isValidWithSelectors(field, query, document) {
  var result = true;
  var selector = '';

  search: for (selector in query) {
    switch (true) {
      case selector === '$eq':
        if (query[selector] instanceof RegExp) {
          if (document[field].toString().match(query[selector]) === null) {
            result = false;
            break search;
          }
        } else {
          if (document[field] !== query[selector]) {
            result = false;
            break search;
          }
        }
        break;
      case selector === '$gt':
        if (document[field] <= query[selector]) {
          result = false;
          break search;
        }
        break;
      case selector === '$gte':
        if (document[field] < query[selector]) {
          result = false;
          break search;
        }
        break;
      case selector === '$lt':
        if (document[field] >= query[selector]) {
          result = false;
          break search;
        }
        break;
      case selector === '$lte':
        if (document[field] > query[selector]) {
          result = false;
          break search;
        }
        break;
      case selector === '$ne':
        if (document[field] === query[selector]) {
          result = false;
          break search;
        }
        break;
      case selector === '$in':
        if (
          Array.isArray(query[selector]) &&
          query[selector].indexOf(document[field]) === -1
        ) {
          result = false;
          break search;
        }
        break;
      case selector === '$nin':
        if (
          Array.isArray(query[selector]) &&
          query[selector].indexOf(document[field]) !== -1
        ) {
          result = false;
          break search;
        }
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * @method isValid
 * @param {Object} query query object
 * @param {Object} document document object
 * @returns {Boolean} true if the query of search is valid with the document
 * @private
 * @description Test if the query of search is valid with the document
 */
function isValid(query, document) {
  var result = true;
  var findInArray = false;
  var field = '';
  var i = 0;
  var length = 0;

  search: for (field in query) {
    if (typeof document[field] !== 'undefined') {
      switch (true) {
        // regular expression
        case query[field] instanceof RegExp:
          if (Array.isArray(document[field]) && !Array.isArray(query[field])) {
            length = document[field].length;
            for (i = 0; i < length; i++) {
              if (document[field][i].toString().match(query[field]) !== null) {
                findInArray = true;
                break search;
              }
            }
            result = findInArray;
          } else {
            if (document[field].toString().match(query[field]) === null) {
              result = false;
              break search;
            }
          }
          break;

        // query selectors
        case query[field] instanceof Object && !Array.isArray(query[field]):
          result = isValidWithSelectors(field, query[field], document);
          break;

        // multiple query
        case Array.isArray(document[field]) && !Array.isArray(query[field]):
          if (document[field].indexOf(query[field]) === -1) {
            result = false;
            break search;
          }
          break;

        // simple query
        default:
          if (document[field] !== query[field]) {
            result = false;
            break search;
          }
          break;
      }
    } else {
      result = false;
      break;
    }
  }
  return result;
}

/**
 * @method impSystem
 * @param {JSON} importedSystem a System Runtime system to import
 * @returns {String} the id of the imported System Runtime system
 * @private
 * @description Import system into the database
 */
function impSystem(importedSystem) {
  var result = '';
  var collectionName = '';
  var componentId = '';
  var typeName = '';
  var schemaName = '';
  var modelName = '';
  var behaviorId = '';
  var systems = [];
  var id = null;

  if (importedSystem) {
    // add types
    for (typeName in importedSystem.types) {
      $metamodel.type(importedSystem.types[typeName]);
    }

    // add schemas
    for (schemaName in importedSystem.schemas) {
      $metamodel.schema(importedSystem.schemas[schemaName]);
    }

    // add models
    for (modelName in importedSystem.models) {
      $metamodel.model(importedSystem.models[modelName]);
    }

    $metamodel.create();

    // add behaviors
    for (behaviorId in importedSystem.behaviors) {
      exports._Behavior.insert(importedSystem.behaviors[behaviorId]);
    }

    // add components
    for (collectionName in importedSystem.components) {
      for (componentId in importedSystem.components[collectionName]) {
        exports[collectionName].insert(
          importedSystem.components[collectionName][componentId]
        );
      }
    }

    // reset info if already a master system
    systems = exports._System.find({
      master: true
    });
    if (systems.length) {
      if (systems[0][$mson.ID] === importedSystem[$mson.ID]) {
        importedSystem.master = true;
      } else {
        if (importedSystem.master) {
          systems[0].master = false;
        }
      }
    }

    // insert the system in DB
    exports._System.insert(importedSystem);

    result = importedSystem[$mson.ID];
  }

  return result;
}

/**
 * @method expSystem
 * @returns {String} a stringified system
 * @private
 * @description Export a system from the database
 */
function expSystem() {
  var result = '';
  var collectionName = '';
  var behaviorId = '';
  var systems = [];
  var id = null;
  var dbDump = null;
  var mastersystem = null;
  var behavior = null;
  var exportedSystem = {};

  // get id of the master system
  systems = exports._System.find({
    master: true
  });

  if (systems.length) {
    mastersystem = systems[0];
    id = mastersystem[$mson.ID];

    // prop
    exportedSystem[$mson.ID] = id;
    exportedSystem.name = mastersystem.name;
    exportedSystem.description = mastersystem.description;
    exportedSystem.version = mastersystem.version;
    exportedSystem.master = true;

    // dump
    dbDump = dump();
    for (collectionName in dbDump) {
      if (dbDump.hasOwnProperty(collectionName)) {
        exportedSystem[collectionName] = dbDump[collectionName];
      }
    }

    result = JSON.stringify(exportedSystem);
  } else {
    result = '{}';
    $log.masterSystemNotFound();
  }

  return result;
}

/**
 * @method exportSubsystem
 * @param {JSON} params parameters
 * @returns {String} a stringified sub-system
 * @private
 * @description Export a sub-system
 */
function expSubsystem(params) {
  var system = {};
  var result = [];
  var defaultName = '';
  var i = 0;
  var length = 0;
  var schema = null;
  var type = null;
  var model = null;
  var behavior = null;
  var component = null;
  var className = '';

  // default values
  result = exports._System.find({
    master: true
  });
  if (result.length) {
    defaultName = result[0].name;
  }

  system.name = params.name || 'sub_' + defaultName;
  system.version = params.version || '0.0.1';
  system.description = params.description || '';

  // schemas
  system.schemas = {};
  if (params.schemas) {
    result = exports._Schema.find(params.schema);

    length = result.length;
    for (i = 0; i < length; i++) {
      schema = result[i];
      if (!schema[$mson.CORE]) {
        system.schemas[schema[$mson.ID]] = schema;
      }
    }
  }

  // models
  system.models = {};
  if (params.models) {
    result = exports._Model.find(params.models);

    length = result.length;
    for (i = 0; i < length; i++) {
      model = result[i];
      if (!model[$mson.CORE]) {
        system.models[model[$mson.ID]] = model;
      }
    }
  }

  // types
  system.types = {};
  if (params.types) {
    result = exports._Type.find(params.types);

    length = result.length;
    for (i = 0; i < length; i++) {
      type = result[i];
      if (!type[$mson.CORE]) {
        system.types[type[$mson.ID]] = type;
      }
    }
  }

  // behaviors
  system.behaviors = {};
  if (params.behaviors) {
    behavior = exports._Behavior.find(params.behaviors);

    length = result.length;
    for (i = 0; i < length; i++) {
      behavior = result[i];
      if (!behavior.core) {
        system.behaviors[behavior[$mson.ID]] = behavior;
      }
    }
  }

  // components
  system.components = {};
  if (params.components) {
    for (className in params.components) {
      if (exports[className]) {
        system.components[className] = {};

        result = exports[className].find(params.components[className]);
        length = result.length;
        for (i = 0; i < length; i++) {
          component = result[i];
          system.components[className][component[$mson.ID]] = component;
        }
      }
    }
  }

  return JSON.stringify(system);
}

/* Public properties */

/**
 * @property {JSON} store
 * @description System Runtime database store that lists all the collections
 */
exports.store = {};

/* Public methods */

/**
 * @class DatabaseCollection
 * @constructor
 * @param {String} name name of the new collection
 * @@description A collection of documents managed by System Runtime.
 * Internal collections manage core objects of System Runtime (schema, type, ...).
 * Public collections manage components of the same class.
 */
var DatabaseCollection = function DatabaseCollection(name) {
  if ($metamodel.getSchema(name) || internalDB.indexOf(name) !== -1) {
    exports.store[name] = {};
    this.name = name;
    if (internalDB.indexOf(name) === -1) {
      collections.push(name);
    }
  } else {
    $log.invalidCollectionName(name);
  }
};

/**
 * @method find
 * @param {Object|Array} query
 * @returns {Array} Array of documents that map the query
 * @description Find a document into the collection
 *
 * @example
 * $db.Person.find({'name': 'laure'});
 * $db.Person.find({'name': 'laure', 'age' : 24});
 * $db.Person.find([{'name': 'rene'}, {'name': 'robert'}]);
 */
DatabaseCollection.prototype.find = function find(query) {
  var result = new _Array();
  var resultId = {};
  var id = '';
  var document = {};

  query = query || null;

  if (query && Object.keys(query).length) {
    if (Array.isArray(query)) {
      query.forEach(
        function multiSearch(criteria) {
          for (id in exports.store[this.name]) {
            document = exports.store[this.name][id];
            if (isValid(criteria, document)) {
              if (typeof resultId[id] === 'undefined') {
                result.push(document);
                resultId[id] = true;
              }
            }
          }
        }.bind(this)
      );
    } else {
      for (id in exports.store[this.name]) {
        document = exports.store[this.name][id];
        if (isValid(query, document)) {
          result.push(document);
        }
      }
    }
  } else {
    for (id in exports.store[this.name]) {
      document = exports.store[this.name][id];
      result.push(document);
    }
  }

  return result;
};

/**
 * @method insert
 * @param {Object|Array} document a new object to add
 * @returns {Array} array of id created
 * @description Insert an new document into the collection.
 * Before inserting the document, System Runtime checks that the document is compliant
 * with its class definition.
 * Then, after inserting it, we create the component.
 *
 * @example
 * $db.Person.insert({
 *      'name': 'bob',
 *      'firstName': 'Saint-Clar',
 *      'age': 43
 * });
 */
DatabaseCollection.prototype.insert = function insert(document) {
  var doc = [];
  var Component = null;
  var result = [];

  if (Array.isArray(document)) {
    doc = document;
  } else {
    doc.push(document);
  }

  doc.forEach(
    function multiInsert(obj) {
      var component = null;
      var channels = [];
      var channel = null;
      var systems = [];

      switch (true) {
        case this.name === '_Schema':
        case this.name === '_Logger':
        case this.name === '_Model':
        case this.name === '_Type':
        case this.name === '_GeneratedModel':
        case $metamodel.isValidObject(obj, $metamodel.getModel(this.name)):
          if (typeof obj[$mson.ID] === 'undefined') {
            obj[$mson.ID] = $helper.generateId();
          }

          $metamodel.prepareObject(obj, $metamodel.getModel(this.name));

          exports.store[this.name][obj[$mson.ID]] = obj;

          Component = $component.get(this.name);
          if (Component) {
            component = new Component(obj);
            result.push(component.id());
          } else {
            exports.createLog('insert', this.name, obj[$mson.ID], '', obj);

            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
              $helper
                .getRuntime()
                .require('db')
                .insert({
                  collection: this.name,
                  document: obj
                });
            }
          }

          if (this.name === '_Message') {
            if ($helper.isRuntime()) {
              channels = exports._Channel.find({});
              var length = channels.length;
              for (var i = 0; i < length; i++) {
                channel = $helper.getRuntime().require(channels[i][$mson.ID]);
                $workflow.process({
                  component: channels[i][$mson.ID],
                  state: obj.event,
                  data: obj.data
                });
              }
            }
          }

          break;
        default:
          $log.invalidDocumentOnDbInsert(obj, this.name);
          break;
      }
    }.bind(this)
  );

  return result;
};

/**
 * @method update
 * @param {Object|Array} query query to find the documents to update
 * @param {Object} update update to make
 * @param {Object} options
 * {Boolean} upsert true if we create a document when no document is found by the query
 * @returns {Number} Number of documents updated
 * @description Update documents into a collection
 *
 * @example
 * $db.Cars.update({'code': 'AZD-71'}, {'price': '10000$'});
 * $db.Cars.update([{'code': 'AZD-71'}, {'code': 'AZD-65'}], {'price': '10000$'});
 * $db.Cars.update({'code': 'AZD-71'}, {'price': '10000$'}, {'upsert': true});
 */
DatabaseCollection.prototype.update = function update(query, update, options) {
  var docs = this.find(query);
  var updated = 0;
  var i = 0;
  var length = docs.length;
  var attributeName = '';
  var schema = $metamodel.getModel(this.name);
  var type = '';

  options = options || {};
  if (typeof options.upsert === 'undefined') {
    options.upsert = options.upsert || false;
  }

  if (update) {
    // upsert case
    if (length === 0 && options.upsert) {
      if (query[$mson.ID]) {
        update[$mson.ID] = query[$mson.ID];
      }
      this.insert(update);
      updated = updated + 1;
    }

    for (i = 0; i < length; i++) {
      // case of update of _id
      if (
        typeof update[$mson.ID] !== 'undefined' &&
        update[$mson.ID] !== docs[i][$mson.ID]
      ) {
        $log.updateUuid(
          docs[i][$mson.ID],
          update[$mson.ID],
          typeof $component.get(update[$mson.ID]) !== 'undefined'
        );
      }

      for (attributeName in update) {
        if (typeof docs[i][attributeName.split('.')[0]] !== 'undefined') {
          if (
            this.name !== '_Schema' &&
            this.name !== '_Model' &&
            this.name !== '_GeneratedModel'
          ) {
            // check type
            type = '';
            if (attributeName.indexOf('_') !== 0) {
              if (attributeName.indexOf('.') !== -1) {
                type = $metamodel.getModelPathType(this.name, attributeName);
              } else {
                type = schema[attributeName].type;
              }
            } else {
              if ($mson.SCHEMA_DEFINITION[attributeName]) {
                type = $mson.SCHEMA_DEFINITION[attributeName].type;
              }
            }
            if (type) {
              if ($metamodel.isValidType(update[attributeName], type)) {
                docs[i][attributeName] = update[attributeName];
                updated = updated + 1;

                exports.createLog(
                  'update',
                  this.name,
                  docs[i][$mson.ID],
                  attributeName,
                  update[attributeName]
                );

                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                  $helper
                    .getRuntime()
                    .require('db')
                    .update({
                      collection: this.name,
                      id: docs[i][$mson.ID],
                      field: attributeName,
                      value: update[attributeName]
                    });
                }
                if (type === 'array') {
                  $workflow.process({
                    component: docs[i][$mson.ID],
                    state: attributeName,
                    data: [update[attributeName], 'reset']
                  });
                } else {
                  $workflow.process({
                    component: docs[i][$mson.ID],
                    state: attributeName,
                    data: [update[attributeName]]
                  });
                }
              } else {
                $log.invalidPropertyTypeOnDbUpdate(
                  this.name,
                  docs[i][$mson.ID],
                  attributeName,
                  update[attributeName],
                  type
                );
              }
            } else {
              $log.unknownPropertyOnDbUpdate(
                this.name,
                attributeName,
                docs[i][$mson.ID]
              );
            }
          } else {
            // TODO more check in case of schema update
            docs[i][attributeName] = update[attributeName];

            exports.createLog(
              'update',
              this.name,
              docs[i][$mson.ID],
              attributeName,
              update[attributeName]
            );

            updated = updated + 1;
            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
              $helper
                .getRuntime()
                .require('db')
                .update({
                  collection: this.name,
                  id: docs[i][$mson.ID],
                  field: attributeName,
                  value: update[attributeName]
                });
            }
          }
        }
      }
    }
  }

  return updated;
};

/**
 * @method remove
 * @param {Object|Array} query query to find the documents to remove
 * @returns {Array} list of documents id removed
 * @description Remove a document from the collection.
 * When a document is removed, the component is destroyed.
 *
 * @example
 * $db.Cars.remove({'code': 'AZD-71'});
 * $db.Cars.remove([{'code': 'AZD-71'}, {'code': 'AZD-65'}]);
 */
DatabaseCollection.prototype.remove = function remove(query) {
  var result = [];
  var id = '';
  var component = null;
  var object = {};

  query = query || null;

  if (query && Object.keys(query).length) {
    if (Array.isArray(query)) {
      query.forEach(
        function multiRemove(criteria) {
          for (id in exports.store[this.name]) {
            object = exports.store[this.name][id];

            if (isValid(criteria, object)) {
              delete exports.store[this.name][id];

              exports.createLog('remove', this.name, id, '', '');

              component = $component.get(id);
              if (component) {
                component.destroy();
              }
              if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                $helper
                  .getRuntime()
                  .require('db')
                  .remove({
                    collection: this.name,
                    id: id
                  });
              }
              result.push(id);
            }
          }
        }.bind(this)
      );
    } else {
      for (id in exports.store[this.name]) {
        object = exports.store[this.name][id];

        if (isValid(query, object)) {
          delete exports.store[this.name][id];

          exports.createLog('remove', this.name, id, '', '');

          component = $component.get(id);
          if (component) {
            component.destroy();
          }
          if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
            $helper
              .getRuntime()
              .require('db')
              .remove({
                collection: this.name,
                id: id
              });
          }
          result.push(id);
        }
      }
    }
  } else {
    for (id in exports.store[this.name]) {
      delete exports.store[this.name][id];

      exports.createLog('remove', this.name, id, '', '');

      if (coreDb.indexOf(this.name) === -1) {
        component = $component.get(id);
        if (component) {
          component.destroy();
        }
      }
      if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
        $helper
          .getRuntime()
          .require('db')
          .remove({
            collection: this.name,
            id: id
          });
      }
      result.push(id);
    }
  }

  return result;
};

/**
 * @method count
 * @returns {Number} number of documents in the collection
 * @description Count the number of documents in the collection
 */
DatabaseCollection.prototype.count = function count() {
  var result = 0;
  var objectId = '';

  for (objectId in exports.store[this.name]) {
    result++;
  }
  return result;
};

/* Public methods */

/**
 * @method createLog
 * @param {String} action CRUD action that happenned
 * @param {String} collection collection of the component
 * @param {String} id id of the component
 * @param {String} field field of the component
 * @param {String} value value of the field of the component
 * @description Create a Log
 */
exports.createLog = function createLog(action, collection, id, field, value) {
  var logId = $helper.generateId();

  collection = collection || '';
  id = id || '';
  field = field || '';
  value = value || '';

  // clean log every 1000 logs
  if (Object.keys(exports.store._Log).length > 1000) {
    exports.store._Log = {};
  }

  exports.store._Log[logId] = {
    _id: logId,
    action: action,
    collection: collection,
    id: id,
    field: field,
    value: value,
    order: incLogOrder()
  };
};

/**
 * @method collection
 * @param {String} name of the collection
 * @description Create a new DatabaseCollection
 */
exports.collection = function collection(name) {
  exports[name] = new DatabaseCollection(name);
};

/**
 * @method importSystem
 * @param {JSON} importedSystem a System Runtime system to import
 * @returns {String} the id of the imported System Runtime system
 * @description Import a system into the database
 */
exports.importSystem = function importSystem(importedSystem) {
  return impSystem(importedSystem);
};

/**
 * @method exportSystem
 * @param {JSON} params parameters
 * @returns {String} a stringified system
 * @description Export a system
 *
 * @example
 * $db.exportSystem(); // export all the system
 * $db.exportSystem({'schemas':{'name':'Person'}}); // filter export on schemas
 * $db.exportSystem({'types':{'name':'address'}}); // filter export on types
 * $db.exportSystem({'behaviors':{'component':'laure'}}); // filter export on behaviors
 * $db.exportSystem({'components':{'Person': {'country': 'France'}}}); // filter export on components
 * $db.exportSystem({'schemas':{'name':'Person'},'components':{'Person': {'country': 'France'}}}); // combine filters
 */
exports.exportSystem = function exportSystem(params) {
  var result = '';

  if (params) {
    result = expSubsystem(params);
  } else {
    result = expSystem();
  }
  return result;
};

/**
 * @method clear
 * @description Clear the database
 */
exports.clear = function clear() {
  var length = 0;
  var i = 0;
  var collectionName = '';

  // remove collections
  length = collections.length;
  for (i = 0; i < length; i++) {
    collectionName = collections[i];
    exports[collectionName].remove();
  }

  // remove internal collections
  length = internalDB.length;
  for (i = 0; i < length; i++) {
    collectionName = internalDB[i];
    exports[collectionName].remove();
  }
};

/**
 * @method init
 * @description Init the database
 */
exports.init = function init() {
  var runtimeSystemId = '';
  var runtimeSystem = null;

  runtimeSystem = exports._System.find({
    _id: 'e89c617b6b15d24'
  })[0];

  // clear all the data in memory
  exports.clear();
  $component.clear();
  $metamodel.clear();
  $state.clear();
  $behavior.clear();

  // init metamodel
  $metamodel.init();

  // reimport System Runtime core system
  runtimeSystemId = exports.importSystem(runtimeSystem);
  $component.get(runtimeSystemId).start();
};

},{"./behavior.js":2,"./component.js":3,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./mson.js":8,"./state.js":10,"./workflow.js":11}],5:[function(require,module,exports){
(function (global){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module helper
 * @requires db
 * @requires component
 * @requires mson
 * @description This module contains all the functions used by all the modules
 */

'use strict';

var $db = require('./db.js');
var $component = require('./component.js');
var $mson = require('./mson.js');

/* Private property */

var runtimeRef = null;
var requireRef = null;

/* Public method */

/**
 * @method isRuntime
 * @returns {Boolean} true if a System Runtime instance exist
 * @description Check if a System Runtime instance exists
 */
exports.isRuntime = function isRuntime() {
  var result = false;

  if ($db._Runtime && $db._Runtime.find().length) {
    result = true;
  }

  return result;
};

/**
 * @method getRuntime
 * @returns {_Runtime} System Runtime instance
 * @description Get the System Runtime instance
 */
exports.getRuntime = function getRuntime() {
  var runtimeId = '';
  var result = null;
  var search = $db._Runtime.find();

  if (!runtimeRef && search[0]) {
    runtimeId = search[0][$mson.ID];
    runtimeRef = $component.get(runtimeId);
  }

  return runtimeRef;
};

/**
 * @method isOnNode
 * @returns {Boolean} true if a System Runtime is running on node
 * @description Check if a System Runtime is running on node
 */
exports.isOnNode = function isOnNode() {
  var result = false;

  if (typeof window === 'undefined' && typeof global !== 'undefined') {
    result = true;
  }

  return result;
};

/**
 * @method getRequire
 * @returns {Object} the require object
 * @description Get the require object
 */
exports.getRequire = function getRequire() {
  if (!requireRef) {
    // kludge for webpack
    requireRef = eval('require');
  }

  return requireRef;
};

/**
 * @method generateId
 * @returns {String} a uuid
 * @description Generate a uuid
 */
exports.generateId = function generateId() {
  function gen() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16);
  }

  function getPrefix() {
    var validPrefix = 'abcdefghijklmnopqrstuvwxyz';
    return validPrefix.charAt(Math.floor(Math.random() * validPrefix.length));
  }

  return getPrefix() + gen() + gen() + gen();
};

/**
 * @method polyfill
 * @description Add Polyfill
 */
exports.polyfill = function polyfill() {
  // fixing constructor.name property in IE
  // taken from http://stackoverflow.com/questions/25140723/constructor-name-is-undefined-in-internet-explorer
  if (
    Function.prototype.name === undefined &&
    Object.defineProperty !== undefined
  ) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var funcNameRegex = /function\s([^(]{1,})\(/;
        var results = funcNameRegex.exec(this.toString());
        return results && results.length > 1 ? results[1].trim() : '';
      },
      set: function set(value) {}
    });
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./component.js":3,"./db.js":4,"./mson.js":8}],6:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module log
 * @requires metamodel
 * @requires db
 * @requires component
 * @requires mson
 * @description This module contains all the functions that write a log
 */

'use strict';

var $metamodel = require('./metamodel.js');
var $db = require('./db.js');
var $component = require('./component.js');
var $mson = require('./mson.js');

/* Private properties */

var currentLevel = 'warn';
var loggerRef = null;
var fakeLoggerRef = {
  currentLevel: 'warn',
  level: function debug(levelName) {
    if (levelName) {
      this.currentLevel = levelName;
    }
    return this.currentLevel;
  },
  debug: function debug(message) {
    if (this.currentLevel === 'debug') {
      console.log('runtime: ' + message);
    }
  },
  info: function info(message) {
    if (this.currentLevel === 'info' || this.currentLevel === 'debug') {
      console.info('runtime: ' + message);
    }
  },
  warn: function warning(message) {
    if (
      this.currentLevel === 'info' ||
      this.currentLevel === 'warn' ||
      this.currentLevel === 'debug'
    ) {
      console.warn('runtime: ' + message);
    }
  },
  error: function error(message) {
    console.error('runtime: ' + message);
  }
};

/**
 * @method getLogger
 * @return {_Logger} _Logger instance
 * @private
 * @description Get the _Logger instance
 */
function getLogger() {
  var loggerId = '';
  var loggers = [];
  var result = null;

  if (!$metamodel.getModel('_Logger')) {
    result = fakeLoggerRef;
  } else {
    loggers = $db._Logger.find();
    if (loggers.length) {
      loggerId = loggers[0][$mson.ID];

      if ($component.get(loggerId)) {
        loggerRef = $component.get(loggerId);
        result = loggerRef;
      } else {
        result = fakeLoggerRef;
      }
    } else {
      result = fakeLoggerRef;
    }
  }

  return result;
}

/* Public methods */

/**
 * @method level
 * @param {String} levelName name of the level
 * @description Set the level of the log
 */
exports.level = function level(levelName) {
  currentLevel = levelName;
};

/**
 * @method unknownProperty
 * @param {String} propertyName the name of the property
 * @param {Object} schema the schema definition
 * @description A property of a schema is unknown
 */
exports.unknownProperty = function unknownProperty(propertyName, schema) {
  var message = '';

  if (schema[$mson.NAME]) {
    message =
      "unknown property '" +
      propertyName +
      "' for the definition of '" +
      schema[$mson.NAME] +
      "'";
  } else {
    message = "unknown property '" + propertyName + "' for a model";
  }

  getLogger().warn(message);
};

/**
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 * @description Invalid type for a property
 */
exports.invalidPropertyType = function invalidPropertyType(
  propertyName,
  type,
  property
) {
  var realType =
    property && property.constructor
      ? property.constructor.name
      : typeof property;
  getLogger().warn(
    "invalid value for property '" +
      propertyName +
      "': expected type '" +
      type +
      "' instead of type '" +
      realType +
      "'"
  );
};

/**
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 * @description Invalid value for type enum
 */
exports.invalidEnumValue = function invalidEnumValue(value, type) {
  getLogger().warn(
    "'" + value + "' is an invalid value for the type enum '" + type + "'"
  );
};

/**
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 * @description Invalid class name for a component
 */
exports.invalidClassName = function invalidClassName(
  componentId,
  type,
  constructorName
) {
  getLogger().warn(
    "invalid component '" +
      componentId +
      "' for a collection: expected a component of class '" +
      type +
      "' instead of '" +
      constructorName +
      "'"
  );
};

/**
 * @method missingProperty
 * @param {String} propertyName name of the property
 * @description Missing a property
 */
exports.missingProperty = function missingProperty(propertyName) {
  getLogger().warn(
    "missing property '" + propertyName + "' for a schema or a model"
  );
};

/**
 * @method missingImplementation
 * @param {String} name name of the missing schema
 * @description A class definition is missing
 */
exports.missingImplementation = function missingImplementation(name) {
  getLogger().warn("schema '" + name + "' is missing");
};

/**
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 * @description Invalid type for a property of a class definition
 */
exports.invalidTypeImp = function invalidTypeImp(property, className) {
  getLogger().error(
    "the property '" +
      property +
      "' of the model '" +
      className +
      "' is invalid"
  );
};

/**
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 * @description Missing a property for a class definition
 */
exports.missingPropertyImp = function missingPropertyImp(property, className) {
  getLogger().warn(
    "missing property '" + property + "' in the model '" + className + "'"
  );
};

/**
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 * @description Unkown property for a class definition
 */
exports.unknownPropertyImp = function unknownPropertyImp(property, schema) {
  getLogger().error(
    "the model '" + schema + "' has an unknown property '" + property + "'"
  );
};

/**
 * @method invalidTypeDefinition
 * @param {String} name a type definition
 * @description  Try to add an invalid type
 */
exports.invalidTypeDefinition = function invalidTypeDefinition(name) {
  getLogger().warn("the type '" + name + "' is not valid");
};

/**
 * @method invalidPropertyName
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 * @description Invalid property name
 */
exports.invalidPropertyName = function invalidPropertyName(
  id,
  className,
  propertyName,
  propertyValue,
  type
) {
  var classInfo = '';
  var realType = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }

  if (typeof type === 'string') {
    realType =
      propertyValue && propertyValue.constructor
        ? propertyValue.constructor.name
        : typeof propertyValue;

    getLogger().warn(
      "invalid value for property '" +
        propertyName +
        "' on component '" +
        id +
        "'" +
        classInfo +
        ": expected type '" +
        type +
        "' instead of type '" +
        realType +
        "'"
    );
  } else {
    realType = type && type.constructor ? type.constructor.name : typeof type;

    getLogger().warn(
      "invalid value for property '" +
        propertyName +
        "' on component '" +
        classInfo +
        ": expected type 'string' instead of type '" +
        realType +
        "'"
    );
  }
};

/**
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} propertyName name of the property
 * @description Trying to set a read-only property
 */
exports.readOnlyProperty = function readOnlyProperty(
  id,
  className,
  propertyName
) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }
  getLogger().warn(
    "can not set read-only property '" +
      propertyName +
      "' on component '" +
      id +
      "'" +
      classInfo
  );
};

/**
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the collection
 * @description Invalid document on a System Runtime database insert operation
 */
exports.invalidDocumentOnDbInsert = function invalidDocumentOnDbInsert(
  doc,
  collectionName
) {
  getLogger().warn(
    "invalid document '" +
      JSON.stringify(doc).replace(/,/g, ', ') +
      "' (collection '" +
      collectionName +
      "' )"
  );
};

/**
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the collection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 * @description  Invalid property on a System Runtime database update operation
 */
exports.invalidPropertyTypeOnDbUpdate = function invalidPropertyTypeOnDbUpdate(
  collectionName,
  id,
  propertyName,
  propertyValue,
  type
) {
  getLogger().warn(
    "invalid type for the property '" +
      propertyName +
      "' of the document '" +
      id +
      "' (collection '" +
      collectionName +
      "') with the value '" +
      JSON.stringify(propertyValue) +
      "': expected type '" +
      type +
      "'"
  );
};

/**
 * @method unknownPropertyOnDbUpdate
 * @param {String} collectionName the name of the collection
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 * @description Unkonw property on a System Runtime database update operation
 */
exports.unknownPropertyOnDbUpdate = function unknownPropertyOnDbUpdate(
  propertyName,
  collectionName,
  id
) {
  getLogger().warn(
    "unknown property '" +
      propertyName +
      "' for document '" +
      id +
      "' (collection '" +
      collectionName +
      "' )"
  );
};

/**
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 * @description Call an unknown method of a class
 */
exports.unknownMethod = function unknownMethod(classId, methodName) {
  getLogger().warn(
    "try to call an unknown action '" +
      methodName +
      "' for the class '" +
      classId +
      "'"
  );
};

/**
 * @method invalidCollectionName
 * @param {String} name name of the collection
 * @description Try to create an invalid DatabaseCollection
 */
exports.invalidCollectionName = function invalidCollectionName(name) {
  getLogger().warn(
    "invalid name for the collection '" +
      name +
      "': there is no schema '" +
      name +
      "'"
  );
};

/**
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name ot the method
 * @param {String} expectedType expected type
 * @param {String} type current type
 * @description Invalid type result of a method
 */
exports.invalidResultType = function invalidResultType(
  id,
  className,
  methodName,
  expectedType,
  type
) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }

  getLogger().warn(
    "invalid type for the result of action '" +
      methodName +
      "' on component '" +
      id +
      "'" +
      classInfo +
      ": expected type '" +
      expectedType +
      "' instead of type '" +
      type +
      "'"
  );
};

/**
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId id of the component
 * @description Unknown class
 */
exports.unknownComponent = function unknownComponent(className, componentId) {
  getLogger().warn(
    "unkown class name '" + className + "' for component '" + componentId + "'"
  );
};

/**
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 * @description invalid parameter number for a method
 */
exports.invalidParamNumber = function invalidParamNumber(
  id,
  className,
  methodName
) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }

  getLogger().warn(
    "invalid number of parameters when calling the action '" +
      methodName +
      "' on component '" +
      id +
      "'" +
      classInfo
  );
};

/**
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * @description  Invalid type parameters for a method
 */
exports.invalidParamType = function invalidParamType(
  id,
  className,
  methodName,
  paramName
) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }
  if (paramName !== undefined) {
    getLogger().warn(
      "invalid type for the parameter '" +
        paramName +
        "' when calling the action '" +
        methodName +
        "' on component '" +
        id +
        "'" +
        classInfo
    );
  } else {
    getLogger().warn(
      "invalid type for a parameter when calling the action '" +
        methodName +
        "' on component '" +
        id +
        "'" +
        classInfo
    );
  }
};

/**
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 * @description Add a more than one behavior to a state
 */
exports.behaviorNotUnique = function behaviorNotUnique(id, stateName) {
  getLogger().warn(
    "try to add more than one action for the state '" +
      stateName +
      "' on class '" +
      id +
      "'"
  );
};

/**
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 * @description Can not add a behavior with an invalid state
 */
exports.invalidStateOn = function invalidStateOn(id, stateName) {
  getLogger().warn(
    "try to add an action to an unkwown state '" +
      stateName +
      "' on class '" +
      id +
      "'"
  );
};

/**
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 * @description The call to a remove state of the behavior module is invalid
 */
exports.invalidStateOff = function invalidStateOff(id, stateName) {
  getLogger().warn(
    "try to remove an action from an unkwown state '" +
      stateName +
      "' on class '" +
      id +
      "'"
  );
};

/**
 * @method masterSystemNotFound
 * @description The master system is not found
 */
exports.masterSystemNotFound = function masterSystemNotFound() {
  getLogger().warn('can not export the database because no system was defined');
};

/**
 * @method invalidType
 * @param {String} name name of the type
 * @param {String} value value of the type
 * @param {String} typeName expected type defined by the schema
 * @description Invalid type
 */
exports.invalidType = function invalidType(name, value, typeName) {
  var realType =
    name && value.constructor ? value.constructor.name : typeof value;

  getLogger().warn(
    "invalid value for property '" +
      name +
      "': expected type '" +
      typeName +
      "' instead of type '" +
      realType +
      "'"
  );
};

/**
 * @method invalidConfiguration
 * @param {Object} obj an object
 * @param {String} type expected type for the configuration
 * @description Invalid class name
 */
exports.invalidConfiguration = function invalidConfiguration(obj, type) {
  getLogger().warn(
    "invalid type for '" + JSON.stringify(obj) + "': expected '" + type + "'"
  );
};

/**
 * @method unknownType
 * @param {String} value value
 * @description Unknown type
 */
exports.unknownType = function unknownType(value) {
  getLogger().warn("unknown type for value '" + JSON.stringify(value) + "'");
};

/**
 * @method unknownPath
 * @param {String} path path
 * @param {String} path subpath
 * @description Unknown subpath in a path
 */
exports.unknownPath = function unknownPath(path, subpath) {
  getLogger().warn(
    "the path '" + path + "' has an unkown subpath '" + subpath + "'"
  );
};

/**
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 * @description A component has not been alreay created
 */
exports.canNotYetValidate = function canNotYetValidate(id, className) {
  getLogger().debug(
    "can not yet validate if the component '" +
      id +
      "' is an instance of '" +
      className +
      "'"
  );
};

/**
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 * @description A message send by the channel is invalid
 */
exports.invalidChannelEvent = function invalidChannelEvent(
  message,
  eventName,
  type
) {
  getLogger().warn(
    "invalid type for the message '" +
      JSON.stringify(message) +
      "': expected type '" +
      type +
      "' for event '" +
      eventName +
      "'"
  );
};

/**
 * @method invalidParamNumberMethodOn
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 * @description invalid parameter number for a behavior add with 'on' method
 */
exports.invalidParamNumberMethodOn = function invalidParamNumberMethodOn(
  id,
  className,
  methodName
) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }
  getLogger().warn(
    "invalid number of parameters when adding an action for the state '" +
      methodName +
      "' on component '" +
      id +
      "'" +
      classInfo
  );
};

/**
 * @method updateUuid
 * @param {String} currentId id of the component
 * @param {String} newId of the component
 * @param {Boolean} alreadyUsed newId already used
 * @description Change the id of a component
 */
exports.updateUuid = function updateUuid(currentId, newId, alreadyUsed) {
  if (alreadyUsed) {
    getLogger().warn(
      "try to update a component of id '" +
        currentId +
        "' with the new id '" +
        newId +
        "' that is already used"
    );
  } else {
    getLogger().warn(
      "try to update a component of id '" +
        currentId +
        "' with the new id '" +
        newId +
        "'"
    );
  }
};

/**
 * @method invalidUseOfComponent
 * @param {String} id id of the component
 * @description Try to change the state of a component that has been destroyed
 */
exports.invalidUseOfComponent = function invalidUseOfComponent(id) {
  getLogger().warn(
    "try to change the state of the destroyed component '" + id + "'"
  );
};

/**
 * @method invalidSchema
 * @param {String} name name of the schema
 * @description Try to add an invalid schema
 */
exports.invalidSchema = function invalidSchema(name) {
  getLogger().warn(
    "the schema '" +
      name +
      "' is not valid, it has been removed from the metamodel"
  );
};

/**
 * @method invalidModel
 * @param {String} name name of the model
 * @description Try to add an invalid model
 */
exports.invalidModel = function invalidModel(name) {
  getLogger().warn(
    "the model '" +
      name +
      "' is not valid, it has been removed from the metamodel"
  );
};

/**
 * @method invalidParameters
 * @param {String} classId class name of the component
 * @description Invalid parameters set when creating an instance of a class
 */
exports.invalidParameters = function invalidParameters(classId) {
  getLogger().warn(
    "the parameters for creating a component of class '" +
      classId +
      "' are not compliant with the model"
  );
};

/**
 * @method destroyedComponentCall
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 * @description Try to get the property of a destroyed component
 */
exports.destroyedComponentCall = function destroyedComponentCall(
  propertyName,
  id
) {
  getLogger().warn(
    "trying to get the property '" +
      propertyName +
      "' on the destroyed component '" +
      id +
      "'"
  );
};

/**
 * @method invalidConctructorParameters
 * @param {String} object configuration
 * @param {String} name schema name
 * @description Invalid parameter type  when creating an instance of a class
 */
exports.invalidConctructorParameters = function invalidConctructorParameters(
  object,
  name
) {
  getLogger().warn(
    "the constructor parameter '" +
      JSON.stringify(object).replace(/,/g, ', ') +
      "' for creating a component of class '" +
      name +
      "' is not an object"
  );
};

/**
 * @method unknownModel
 * @param {String} classId id of the class
 * @description Get the information of an unkown model
 */
exports.unknownModel = function unknownModel(classId) {
  getLogger().warn("the model '" + classId + "' does not exist");
};

/**
 * @method missingSchema
 * @param {String} name name of the schema
 * @description A schema is missing
 */
exports.missingSchema = function missingSchema(name) {
  getLogger().warn("the schema '" + name + "' is missing");
};

/**
 * @method missingSchema
 * @param {String} name name of the schema where the cyclic dependency was found
 * @description A cyclic dependency was found
 */
exports.cyclicDependency = function cyclicDependency(name) {
  if (name) {
    getLogger().error(
      "a cyclic inheritance dependency with the schema '" +
        name +
        "’ has been found, please check the '_inherit' property of this schema"
    );
  } else {
    getLogger().error(
      "a cyclic inheritance dependency has been found, please check the '_inherit' properties of the schemas"
    );
  }
};

/**
 * @method invalidEnumType
 * @param {Object} value the value
 * @param {String} typeName name of the type
 * @param {String} type typeName of the type
 * @description Invalid type for a type enum
 */
exports.invalidEnumType = function invalidEnumType(value, typeName, type) {
  var realType = '';

  if (typeof type !== 'undefined' && type !== typeof value) {
    realType =
      value && value.constructor ? value.constructor.name : typeof value;
    getLogger().warn(
      "invalid type for the type '" +
        typeName +
        "': expected type '" +
        type +
        "' instead of type '" +
        realType +
        "'"
    );
  } else {
    getLogger().warn("invalid type for the type '" + typeName + "'");
  }
};

/**
 * @method loadSchema
 * @param {String} name name of the schema
 * @description Load schema
 */
exports.loadSchema = function loadSchema(name) {
  getLogger().debug("load schema '" + name + "'");
};

/**
 * @method loadModel
 * @param {String} name name of the model
 * @description Load model
 */
exports.loadModel = function loadModel(name) {
  getLogger().debug("load model '" + name + "'");
};

/**
 * @method loadType
 * @param {String} name name of the type
 * @description Load type
 */
exports.loadType = function loadType(name) {
  getLogger().debug("load type '" + name + "'");
};

/**
 * @method compileSchema
 * @param {String} name name of the schema
 * @description Compile schema
 */
exports.compileSchema = function compileSchema(name) {
  getLogger().debug("compile schema '" + name + "'...");
};

/**
 * @method generateModel
 * @param {String} name name of the model
 * @description Generate model
 */
exports.generateModel = function generateModel(name) {
  getLogger().debug("generating model '" + name + "'...");
};

/**
 * @method checkModel
 * @param {String} name name of the model
 * @description Check model
 */
exports.checkModel = function checkModel(name) {
  getLogger().debug("analyzing model '" + name + "'...");
};

/**
 * @method createCollection
 * @param {String} name name of the collection
 * @description Create collection
 */
exports.createCollection = function createCollection(name) {
  getLogger().debug("'" + name + "' database collection created");
};

/**
 * @method createClass
 * @param {String} name name of the class
 * @description Create class
 */
exports.createClass = function createClass(name) {
  getLogger().debug("'" + name + "' class created");
};

/**
 * @method modelCreationBegin
 * @description Begins model creation
 */
exports.modelCreationBegin = function modelCreationBegin() {
  getLogger().debug('starting model creation...');
};

/**
 * @method modelCreationEnd
 * @description End model creation
 */
exports.modelCreationEnd = function modelCreationEnd() {
  getLogger().debug('model creation ended');
};

/**
 * @method actionInvokeError
 * @param {String} state state
 * @param {String} id component id
 * @param {String} className component class name
 * @param {String} message
 * @description An error happened when invoking a behavior
 */
exports.actionInvokeError = function actionInvokeError(
  state,
  id,
  className,
  message
) {
  if (className !== 'Function') {
    getLogger().error(
      "error when calling the action '" +
        state +
        "' on component '" +
        id +
        "' (class '" +
        className +
        "'): " +
        message
    );
  } else {
    getLogger().error(
      "error when calling the action '" +
        state +
        "' on component '" +
        id +
        "': " +
        message
    );
  }
};

/**
 * @method invalidSchemaPropertyName
 * @param {String} name name of the schema
 * @param {String} propName name of the property
 * @description Invalid name for the property of a schema
 */
exports.invalidSchemaPropertyName = function invalidSchemaPropertyName(
  name,
  propName
) {
  getLogger().warn(
    "invalid name '" +
      propName +
      "' for schema '" +
      name +
      "': a property name can not begin with '_'"
  );
};

/**
 * @method invalidSchemaProperty
 * @param {String} name name of the schema
 * @param {String} propName name of the property
 * @description Invalid name for the property of a schema
 */
exports.invalidSchemaProperty = function invalidSchemaProperty(name, propName) {
  getLogger().warn(
    "invalid property '" +
      propName +
      "' for schema '" +
      name +
      "': only 'property', 'link', 'collection', 'method' and 'event' are allowed"
  );
};

/**
 * @method invalidPropertyFormat
 * @param {String} obj definition of a property
 * @description Invalid format for the definition of a property
 */
exports.invalidPropertyFormat = function invalidPropertyFormat(obj) {
  getLogger().warn(
    "invalid format for a definition of a property: '" +
      obj +
      "' is not an object"
  );
};

/**
 * @method invalidState
 * @param {String} model name of the model
 * @param {String} state invalid state
 * @description Invalid state
 */
exports.invalidState = function invalidState(model, state) {
  getLogger().warn(
    "invalid state '" + state + "' for the model '" + model + "'"
  );
};

/**
 * @method unknownContext
 * @param {String} className name of the class
 * @param {String} methodName name of the method
 * @description Invoke a method class without a context
 */
exports.unknownContext = function unknownContext(className, methodName) {
  getLogger().warn(
    "invoke the action '" +
      methodName +
      "' on the class '" +
      className +
      "' without a valid context"
  );
};

},{"./component.js":3,"./db.js":4,"./metamodel.js":7,"./mson.js":8}],7:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module metamodel
 * @requires db
 * @requires log
 * @requires component
 * @requires workflow
 * @requires helper
 * @requires mson
 * @description This module manages System Runtime metamodel.
 * System Runtime metamodel loads schemas and types, analyzes them and
 * creates the component classes and related DatabaseCollections.
 */

'use strict';

var $db = require('./db.js');
var $log = require('./log.js');
var $component = require('./component.js');
var $workflow = require('./workflow.js');
var $helper = require('./helper.js');
var $mson = require('./mson.js');

/* Private properties */

var store = {
  inheritance: {},
  inheritanceTree: {},
  schemas: {},
  compiledSchemas: {},
  models: {},
  generatedModels: {},
  states: {},
  type: {}
};

/* Private methods */

/**
 * @method isInternalName
 * @param {String} name
 * @private
 * @description is name an internal name
 */
function isInternalName(name) {
  var result = true;

  if ($mson.INTERNAL_NAMES.indexOf(name) === -1) {
    result = false;
  }
  return result;
}

/**
 * @method generateModels
 * @private
 * @description Generate the models
 */
function generateModels() {
  var att = '';
  var name = '';
  var schemaName = '';
  var schema = {};
  var modelName = '';
  var modelParent = null;
  var modelExt = null;
  var modelDef = null;
  var model = {};
  var models = {};
  var mergedModel = {};
  var parents = [];
  var length = 0;
  var i = 0;
  var j = 0;
  var nbAncestors = 0;
  var sortInheritTree = [];

  // default values
  for (schemaName in store.compiledSchemas) {
    schema = store.compiledSchemas[schemaName];

    // set model internal properties
    model = {
      _name: schema[$mson.NAME]
    };

    // set _core
    if (typeof schema[$mson.CORE] !== 'undefined') {
      model[$mson.CORE] = schema[$mson.CORE];
    }

    // set inherit
    if (Array.isArray(schema[$mson.INHERIT])) {
      model[$mson.INHERIT] = schema[$mson.INHERIT];
    }

    // set class
    if (typeof schema[$mson.CLASS] !== 'undefined') {
      model[$mson.CLASS] = schema[$mson.CLASS];
    }

    // set description
    if (typeof schema[$mson.DESCRIPTION] !== 'undefined') {
      model[$mson.DESCRIPTION] = schema[$mson.DESCRIPTION];
    }

    // check valid name
    for (att in schema) {
      if (!isInternalName(att) && att.indexOf('_') === 0) {
        $log.invalidSchemaPropertyName(schema[$mson.NAME], att);
      }
    }

    //  set model default values
    for (att in schema) {
      switch (true) {
        case schema[att] === 'property':
          model[att] = {
            type: 'any',
            readOnly: false,
            mandatory: false,
            default: '',
            description: att,
            label: att
          };
          break;
        case schema[att] === 'link':
          model[att] = {
            type: '_Component',
            readOnly: false,
            mandatory: false,
            default: '',
            description: att,
            label: att
          };
          break;
        case schema[att] === 'method':
          model[att] = {
            params: [
              {
                name: 'param1',
                type: 'any',
                mandatory: false,
                default: null
              },
              {
                name: 'param2',
                type: 'any',
                mandatory: false,
                default: null
              },
              {
                name: 'param3',
                type: 'any',
                mandatory: false,
                default: null
              }
            ],
            result: 'any',
            description: att
          };
          break;
        case schema[att] === 'event':
          model[att] = {
            params: [
              {
                name: 'param1',
                type: 'any',
                mandatory: false,
                default: null
              },
              {
                name: 'param2',
                type: 'any',
                mandatory: false,
                default: null
              },
              {
                name: 'param3',
                type: 'any',
                mandatory: false,
                default: null
              }
            ],
            description: att
          };
          break;
        case schema[att] === 'collection':
          model[att] = {
            type: ['_Component'],
            readOnly: false,
            mandatory: false,
            default: [],
            description: att,
            label: att
          };
          break;
        default:
          if (!isInternalName(att)) {
            $log.invalidSchemaProperty(schema[$mson.NAME], att);
          }
          break;
      }
    }

    store.generatedModels[model[$mson.NAME]] = model;
  }

  // models to override
  for (modelName in store.generatedModels) {
    model = store.generatedModels[modelName];
    name = model[$mson.NAME];
    modelExt = store.models[name];
    if (modelExt) {
      mergedModel = merge(modelExt, model);
      store.generatedModels[name] = mergedModel;
    }
  }

  // inheritance
  sortInheritTree = sortInheritanceTree();

  nbAncestors = sortInheritTree.length;
  for (i = 0; i < nbAncestors; i++) {
    modelName = sortInheritTree[i];
    model = store.generatedModels[modelName];

    if (model) {
      parents = exports.getParents(modelName);
      parents.reverse();

      var modelToMerge = JSON.parse(JSON.stringify(model));

      length = parents.length;
      for (j = 0; j < length; j++) {
        name = parents[j];
        modelParent = store.generatedModels[name];
        if (modelParent) {
          mergedModel = merge(modelParent, model);
          store.generatedModels[modelName] = mergedModel;
        }
      }

      // last inherit
      // is the overriden model
      modelExt = store.models[modelName];
      if (modelExt) {
        mergedModel = merge(modelExt, store.generatedModels[modelName]);
        store.generatedModels[modelName] = mergedModel;
      }
    }
  }

  // save
  for (modelName in store.generatedModels) {
    modelDef = store.generatedModels[modelName];
    $db._GeneratedModel.insert(modelDef);

    if (!modelDef[$mson.CORE]) {
      $log.generateModel(modelName);
    }
  }
}

/**
 * @method loadInMemory
 * @private
 * @description Load schemas and types in memory
 */
function loadInMemory() {
  var schemas = [];
  var types = [];
  var schema = null;
  var model = {};
  var models = [];
  var type = null;
  var id = '';
  var name = '';
  var inherit = '';
  var i = 0;
  var length = 0;

  // init store
  store.inheritance = {};
  store.inheritanceTree = {};
  store.schemas = {};
  store.compiledSchemas = {};
  store.models = {};
  store.generatedModels = {};
  store.states = {};
  store.type = {};

  // load schemas
  schemas = $db._Schema.find({});

  length = schemas.length;
  for (i = 0; i < length; i++) {
    schema = schemas[i];

    name = schema[$mson.NAME];
    inherit = schema[$mson.INHERIT];

    store.schemas[name] = schema;
    if (inherit) {
      store.inheritance[name] = inherit;
    }

    if (!schema[$mson.CORE]) {
      $log.loadSchema(name);
    }
  }

  // load models
  models = $db._Model.find({});

  length = models.length;
  for (i = 0; i < length; i++) {
    model = models[i];
    name = model[$mson.NAME];

    store.models[name] = model;

    if (!model[$mson.CORE]) {
      $log.loadModel(name);
    }
  }

  // load types
  types = $db._Type.find({});

  length = types.length;
  for (i = 0; i < length; i++) {
    type = types[i];
    store.type[type.name] = type;

    if (!type.core) {
      $log.loadType(type.name);
    }
  }
}

/**
 * @method createInheritanceTree
 * @private
 * @description Create the inheritance tree
 */
function createInheritanceTree() {
  var name = '';
  var c3linerization = [];
  var ancestors = [];

  /**
   *
   * @param {Array} elts array of elts
   * @returns {Boolean} true if all the arrays are empty
   * @private
   * @description  Check if we have finisehd to linerize
   */
  function _isEmpty(elts) {
    var i = 0;
    var length = 0;
    var result = true;

    length = elts.length;
    for (i = 0; i < length; i++) {
      if (elts[i].length) {
        result = false;
      }
    }
    return result;
  }

  /**
   * @param {String} elt element to remove
   * @param {Array} elts array of elts
   * @private
   * @description Remove an elt from all the arrays
   */
  function _removeCandidate(elt, elts) {
    var i = 0;
    var length = 0;
    var arr = [];

    length = elts.length;
    for (i = 0; i < length; i++) {
      if (elts[i].indexOf(elt) === 0) {
        arr = elts[i];
        arr.reverse();
        arr.pop();
        arr.reverse();
        elts[i] = arr;
      }
    }
  }

  /**
   * @method _isCandidate
   * @param {String} elt element to remove
   * @param {Array} elts array of elts
   * @returns {Boolean} true if the element is a good candidate.
   * @private
   * @description Check the element is a good candidate
   */
  function _isCandidate(elt, elts) {
    var result = true;
    var i = 0;
    var length = 0;

    length = elts.length;
    for (i = 0; i < length; i++) {
      if (elts[i].indexOf(elt) > 0) {
        result = false;
      }
    }

    return result;
  }

  /**
   * @method _findCandidate
   * @param {Array} elts array of elts
   * @returns {Array} array containing the candidate
   * @private
   * @description Find a candidate and return it.
   */
  function _findCandidate(elts) {
    var i = 0;
    var length = 0;
    var result = [];

    length = elts.length;
    for (i = 0; i < length; i++) {
      if (_isCandidate(elts[i][0], elts)) {
        result.push(elts[i][0]);
        _removeCandidate(elts[i][0], elts);
        break;
      }
    }
    return result;
  }

  /**
   * @method _merge
   * @param {Array} elts array of elts
   * @returns {Array} list of candidates returned by the merge
   * @private
   * @description Merge the arrays
   */
  function _merge(elts) {
    var result = [];
    var candidates = [];

    candidates = _findCandidate(elts);
    while (candidates[0] !== undefined) {
      result = result.concat(candidates);
      candidates = _findCandidate(elts);
    }

    if (!_isEmpty(elts)) {
      $log.cyclicDependency();
    }
    return result;
  }

  /**
   * @method _linerize
   * @param {String} name name of the element
   * @returns {Array} list of candidates
   * @private
   * @description Start the linerieation from an element
   */
  function _linerize(name) {
    var result = [];
    var parents = [];
    var i = 0;
    var length = 0;

    /**
     * @method _checkCyclicDep
     * @param {String} name
     * @param {String} item
     * @returns {Boolean} true if there is a cyclic dependency
     * @private
     * @description Check if there is a cyclic dependency
     */
    function _checkCyclicDep(name, item) {
      var isCyclicDeb = false;

      if (
        Array.isArray(store.inheritance[item]) &&
        store.inheritance[item].indexOf(name) !== -1
      ) {
        $log.cyclicDependency(name);
        isCyclicDeb = true;
      }
      return isCyclicDeb;
    }

    if (Array.isArray(store.inheritance[name])) {
      parents = store.inheritance[name].slice();
    } else {
      $log.missingSchema(name);
    }

    length = parents.length;
    for (i = 0; i < length; i++) {
      if (_checkCyclicDep(name, parents[i])) {
        parents = [];
        break;
      }
    }

    if (parents.length) {
      result = [name].concat(_merge(parents.map(_linerize).concat([parents])));
    } else {
      result = [name];
    }
    return result;
  }

  for (name in store.inheritance) {
    c3linerization = _linerize(name);
    ancestors = c3linerization.reverse();
    ancestors.pop();
    if (ancestors.length) {
      store.inheritanceTree[name] = ancestors;
    }
  }
}

/**
 * @method extend
 * @param {String} name name of the schema to extend
 * @returns {JSON} object extended with the properties of its parent
 * @private
 * @description Extend a schema with the properties of its parent
 */
function extend(name) {
  var sonExtend = {};
  var son = store.schemas[name];
  var ancestors = store.inheritanceTree[name];
  var length = 0;
  var i = 0;
  var ancestor = null;
  var prop = '';

  if (ancestors) {
    length = ancestors.length;
    ancestors.reverse();
  }
  for (i = 0; i < length; i++) {
    ancestor = store.schemas[ancestors[i]];
    for (prop in ancestor) {
      if (prop.indexOf('_') !== 0) {
        sonExtend[prop] = ancestor[prop];
      }
    }
  }
  for (prop in son) {
    sonExtend[prop] = son[prop];
  }
  return sonExtend;
}

/**
 * @method sortInheritanceTree
 * @returns {Array} sorted InheritanceTree structure
 * @private
 * @description Get sorted InheritanceTree structure
 */
function sortInheritanceTree() {
  var result = [];
  var temp = {};
  var keys = [];
  var modelName = '';
  var nbAncestors = 0;

  for (modelName in store.inheritanceTree) {
    nbAncestors = store.inheritanceTree[modelName].length;
    if (typeof temp[nbAncestors] === 'undefined') {
      temp[nbAncestors] = [];
    }
    temp[nbAncestors].push(modelName);
  }

  keys = Object.keys(temp).sort();
  keys.forEach(function(index) {
    temp[index].forEach(function(model) {
      result.push(model);
    });
  });

  return result;
}

/**
 * @method compileSchemas
 * @private
 * @description Add the models
 */
function compileSchemas() {
  var name = '';

  for (name in store.schemas) {
    if (!store.schemas[name][$mson.CORE]) {
      $log.compileSchema(name);
    }

    store.compiledSchemas[name] = extend(name);
  }
}

/**
 * @method checkModels
 * @private
 * @description Test if all the models are compliants with their schemas
 */
function checkModels() {
  var name = '';
  var classDef = null;
  var schema = '';

  for (name in store.generatedModels) {
    classDef = store.generatedModels[name];
    if (classDef) {
      schema = store.compiledSchemas[name];
      if (schema) {
        if (!classDef[$mson.CORE]) {
          $log.checkModel(name);
        }
        checkImp(classDef, schema);
      } else {
        $log.missingImplementation(name);
      }
    }
  }
}

/**
 * @method getStates
 * @private
 * @description Get all the states of a schema
 */
function getStates() {
  var name = '';
  var schema = null;
  var type = '';
  var states = [];
  var attribute = '';

  for (name in store.compiledSchemas) {
    states = [];
    schema = store.compiledSchemas[name];
    if (schema) {
      for (attribute in schema) {
        type = schema[attribute];
        if (
          attribute.indexOf('_') !== 0 &&
          $mson.INTERNAL_TYPES.indexOf(type) !== -1
        ) {
          states.push(attribute);
        }
      }
    }
    store.states[name] = states;
  }
}

/**
 * @method checkImp
 * @param {JSON} classDef schema to test
 * @param {JSON} classImp schema to validate
 * @private
 * @description Test if a schema is compliant with its schema
 */
function checkImp(classDef, classImp) {
  var property = '';
  var value = null;

  for (property in classImp) {
    if (
      property !== $mson.ID &&
      property !== $mson.NAME &&
      property !== $mson.DESCRIPTION &&
      property !== $mson.INHERIT &&
      property !== $mson.CLASS &&
      property !== $mson.CORE
    ) {
      if (typeof classDef[property] !== 'undefined') {
        value = classDef[property];
        if (!checkSchema(value, classImp[property])) {
          $log.invalidTypeImp(property, classDef[$mson.NAME]);
        }
      } else {
        $log.missingPropertyImp(property, classDef[$mson.NAME]);
      }
    }
  }
  // check if all properties are there
  for (property in classDef) {
    if (
      property !== $mson.ID &&
      property !== $mson.NAME &&
      property !== $mson.DESCRIPTION &&
      property !== $mson.INHERIT &&
      property !== $mson.CLASS &&
      property !== $mson.CORE
    ) {
      if (typeof classImp[property] === 'undefined') {
        $log.unknownPropertyImp(property, classDef[$mson.NAME]);
      }
    }
  }
}

/**
 * @method checkSchema
 * @param {Object} value value to test
 * @param {Object} type type to test
 * @returns {Boolean} true if the value has the correct type
 * @private
 * @description Test if a value has the correct type
 */
function checkSchema(value, type) {
  var result = true;

  if (hasType(type, 'string') && $mson.DEFAULT_TYPES.indexOf(type) !== -1) {
    result = hasType(value, type);
  } else {
    result = checkCustomSchema(value, type);
  }
  return result;
}

/**
 * @method checkCustomSchema
 * @param {type} value value to test
 * @param {String} typeName type to test
 * @returns {Boolean} true if the value has the correct type
 * @private
 * @description Test if a value has correct custom type
 */
function checkCustomSchema(value, typeName) {
  var result = true;
  var typeDef = store.type[typeName];
  var length = 0;
  var i = 0;

  if (!hasType(typeDef, 'undefined')) {
    if (!hasType(value, 'undefined')) {
      if (typeDef.type === 'array') {
        length = value.length;
        for (i = 0; i < length; i++) {
          if (!hasType(typeDef.schema, 'undefined')) {
            result = exports.isValidSchema(value[i], typeDef.schema);
          } else {
            result = exports.isValidType(value[i], typeDef.type);
          }
          if (result === false) {
            break;
          }
        }
      } else {
        if (!hasType(typeDef.schema, 'undefined')) {
          result = exports.isValidSchema(value, typeDef.schema);
        } else {
          result = exports.isValidType(value, typeDef.type);
        }
      }
    } else {
      result = false;
    }
  } else {
    result = false;
  }

  return result;
}

/**
 * @method initDbStructure
 * @private
 * @description Init the Database stucture
 */
function initDbStructure() {
  $db.collection('_Logger');
  $db.collection('_Schema');
  $db.collection('_Model');
  $db.collection('_GeneratedModel');
  $db.collection('_ClassInfo');
  $db.collection('_Behavior');
  $db.collection('_State');
  $db.collection('_Type');
  $db.collection('_Message');
  $db.collection('_Channel');
  $db.collection('_Log');
}

/**
 * @method createDbStructure
 * @private
 * @description Create the Database structure (i.e. DatabaseCollection)
 */
function createDbStructure() {
  var modelName = '';
  var modelDef = {};

  for (modelName in store.generatedModels) {
    modelDef = store.generatedModels[modelName];
    if (
      typeof $db[modelDef[$mson.NAME]] === 'undefined' &&
      modelDef[$mson.CLASS] !== false
    ) {
      $db.collection(modelDef[$mson.NAME]);

      if (!modelDef[$mson.CORE]) {
        $log.createCollection(modelDef[$mson.NAME]);
      }
    }
  }
}

/**
 * @method createClass
 * @private
 * @description Create all the classes of the model
 */
function createClass() {
  var modelName = '';
  var modelDef = {};

  for (modelName in store.generatedModels) {
    modelDef = store.generatedModels[modelName];
    if (modelDef[$mson.CLASS] !== false) {
      $component.create({
        model: modelName
      });
      if (!modelDef[$mson.CORE]) {
        $log.createClass(modelName);
      }
    }
  }
}

/**
 * @method createClassInfo
 * @private
 * @description Create all the ClassInfo of the model
 */
function createClassInfo() {
  var modelName = '';
  var modelDef = {};
  var name = '';

  for (modelName in store.generatedModels) {
    modelDef = store.generatedModels[modelName];
    name = modelDef[$mson.NAME] + 'Info';

    if (
      modelDef[$mson.CLASS] !== false &&
      exports.inheritFrom(modelDef[$mson.NAME], '_Component')
    ) {
      if (!$component.get(name)) {
        $db._ClassInfo.insert({
          _id: name,
          schema: store.compiledSchemas[modelName],
          model: modelDef
        });
      } else {
        $db._ClassInfo.update(
          {
            _id: name
          },
          {
            _id: name,
            schema: store.compiledSchemas[modelName],
            model: modelDef
          }
        );
      }
    }
  }
}

/**
 * @method getRealClassName
 * @param {String} value
 * @returns {String} real name
 * @private
 * @description Get the real name of the referenced class
 */
function getRealClassName(value) {
  return value.trim();
}

/**
 * @method getRealTypeName
 * @param {String} value
 * @returns {String} real name
 * @private
 * @description Get the real name of the referenced type
 */
function getRealTypeName(value) {
  return value
    .replace('{', '')
    .replace('}', '')
    .trim();
}

/**
 * @method isCustomType
 * @param {String} value
 * @returns {Boolean}
 * @private
 * @description Is the value a custom type
 */
function isCustomType(value) {
  var result =
    hasType(value, 'string') &&
    $mson.DEFAULT_TYPES.indexOf(value) === -1 &&
    !exports.isClassName(value);

  return result;
}

/**
 * @method isTypeReference
 * @param {String} value
 * @returns {Boolean}
 * @description Is the value reference a type value
 */
function isTypeReference(value) {
  return value.indexOf('{') !== -1;
}

/**
 * @method isModelPath
 * @param {String} value
 * @returns {Boolean}
 * @private
 * @description Is the value a model path
 */
function isModelPath(value) {
  return value.indexOf('.') !== -1;
}

/**
 * @method getRealType
 * @param {type} value
 * @returns {String} type of the value
 * @private
 * @description Get the real type of a value
 */
function getRealType(value) {
  var type = '';

  if (Array.isArray(value)) {
    type = 'array';
  } else {
    type = typeof value;
  }
  if (value === 'any') {
    type = 'any';
  }

  return type;
}

/**
 * @method getClassName
 * @param {type} obj object
 * @returns {String} the class name of the object
 * @private
 * @description Get the class name of an object
 */
function getClassName(obj) {
  var result = '';

  if (obj && obj.constructor) {
    result = obj.constructor.name;
  } else {
    result = typeof obj;
  }
  return result;
}

/**
 * @method isValidEnumValue
 * @param {String} value
 * @param {Array} enumValue
 * @returns {Boolean} the class name of the object
 * @private
 * @description Check if the value is a valid enum value
 */
function isValidEnumValue(value, enumValue) {
  return enumValue.indexOf(value) !== -1;
}

/**
 * @param {type} value
 * @param {type} type
 * @returns {Boolean} true is value has type 'type'
 * @description Check if a value has the specified type
 */
function hasType(value, type) {
  var result = true;
  var date = null;

  switch (type) {
    case 'array':
      result = Array.isArray(value);
      break;
    case 'date':
      if (typeof value === 'string') {
        date = new Date(value);
        result = !isNaN(date.getDate());
      } else {
        result = value instanceof Date;
      }
      break;
    case 'any':
      result = true;
      break;
    default:
      result = type === typeof value;
      break;
  }

  return result;
}

/**
 * @method checkType
 * @param {String} name
 * @param {String} id component id
 * @param {String} type type to check
 * @returns {Boolean} true if the attribute has for type type
 * @description Check if an attribute of the schema has a specific type
 */
function checkType(name, id, type) {
  var result = false;
  var componentSchema = store.generatedModels[id];
  var attributeType = '';

  if (componentSchema && componentSchema[$mson.NAME]) {
    componentSchema = store.compiledSchemas[componentSchema[$mson.NAME]];
  }

  if (componentSchema) {
    attributeType = componentSchema[name.split('.')[0]];
    if (attributeType === type) {
      result = true;
    }
  }

  return result;
}

/**
 * @method merge
 * @param {Object} source source schema
 * @param {Object} target target schema
 * @param {Boolean} merge also private properties
 * @returns {Object} merged schema
 * @description Merge two schemas
 */
function merge(source, target, all) {
  var propName = '';
  var result = target;

  for (propName in source) {
    if (source.hasOwnProperty(propName) && propName.indexOf('_') !== 0) {
      result[propName] = source[propName];
    }
  }
  return result;
}

/**
 * @method initConfiguration
 * @param {String} name name of the object to configure
 * @param {String} type type of the object to configure
 * @param {Boolean} isMethod is a method
 * @returns {Object} a configuration
 * @description Init a configuration depending of the context
 */
function initConfiguration(name, type, isMethod) {
  var result = null;
  var typeDef = [];
  var schemaDef = [];
  var defaultValue = '';

  switch (true) {
    case name === '=>':
      break;
    case typeof type === 'string' && type === 'boolean':
      if (isMethod) {
        result = {
          name: name,
          type: 'boolean',
          mandatory: false,
          default: false
        };
      } else {
        result = {
          type: 'boolean',
          readOnly: false,
          mandatory: false,
          default: false
        };
      }
      break;
    case typeof type === 'string' && type === 'string':
      if (isMethod) {
        result = {
          name: name,
          type: 'string',
          mandatory: false,
          default: ''
        };
      } else {
        result = {
          type: 'string',
          readOnly: false,
          mandatory: false,
          default: ''
        };
      }
      break;
    case typeof type === 'string' && type === 'number':
      if (isMethod) {
        result = {
          name: name,
          type: 'number',
          mandatory: false,
          default: 0
        };
      } else {
        result = {
          type: 'number',
          readOnly: false,
          mandatory: false,
          default: 0
        };
      }
      break;
    case typeof type === 'string' && type === 'object':
      if (isMethod) {
        result = {
          name: name,
          type: 'object',
          mandatory: false,
          default: {}
        };
      } else {
        result = {
          type: 'object',
          readOnly: false,
          mandatory: false,
          default: {}
        };
      }
      break;
    case typeof type === 'string' && type === 'array':
      if (isMethod) {
        result = {
          name: name,
          type: 'array',
          mandatory: false,
          default: []
        };
      } else {
        result = {
          type: 'array',
          readOnly: false,
          mandatory: false,
          default: []
        };
      }
      break;
    case typeof type === 'string' && type === 'date':
      if (isMethod) {
        result = {
          name: name,
          type: 'date',
          mandatory: false,
          default: '1970-01-01T00:00:00.000Z'
        };
      } else {
        result = {
          type: 'date',
          readOnly: false,
          mandatory: false,
          default: '1970-01-01T00:00:00.000Z'
        };
      }
      break;
    case typeof type === 'string' && type === 'any':
      if (isMethod) {
        result = {
          name: name,
          type: 'any',
          mandatory: false,
          default: null
        };
      } else {
        result = {
          type: 'any',
          readOnly: false,
          mandatory: false,
          default: ''
        };
      }
      break;
    // link / custom type
    case typeof type === 'string':
      defaultValue = {};

      // case of enumeration
      typeDef = $db._Type.find({
        name: type
      });
      if (typeDef.length) {
        if (typeDef[0].value) {
          defaultValue = typeDef[0].value[0];
        }
      }

      // case of link
      schemaDef = $db._Schema.find({
        _name: type
      });
      if (schemaDef.length) {
        defaultValue = '';
      }

      if (isMethod) {
        result = {
          name: name,
          type: type,
          mandatory: false,
          default: defaultValue
        };
      } else {
        result = {
          type: type,
          readOnly: false,
          mandatory: false,
          default: defaultValue
        };
      }
      break;
    case typeof type === 'array' && typeof type[0] === 'boolean':
      if (isMethod) {
        result = {
          name: name,
          type: ['boolean'],
          mandatory: false,
          default: []
        };
      } else {
        result = {
          type: ['boolean'],
          readOnly: false,
          mandatory: false,
          default: []
        };
      }
      break;
    case typeof type === 'array' && typeof type[0] === 'string':
      if (isMethod) {
        result = {
          name: name,
          type: ['string'],
          mandatory: false,
          default: ''
        };
      } else {
        result = {
          type: ['string'],
          readOnly: false,
          mandatory: false,
          default: ''
        };
      }
      break;
    case typeof type === 'array' && typeof type[0] === 'number':
      if (isMethod) {
        result = {
          name: name,
          type: ['number'],
          mandatory: false,
          default: []
        };
      } else {
        result = {
          type: ['number'],
          readOnly: false,
          mandatory: false,
          default: []
        };
      }
      break;
    case typeof type === 'array' && typeof type[0] === 'object':
      if (isMethod) {
        result = {
          name: name,
          type: ['object'],
          mandatory: false,
          default: []
        };
      } else {
        result = {
          type: ['object'],
          readOnly: false,
          mandatory: false,
          default: []
        };
      }
      break;
    case typeof type === 'array' && typeof type[0] === 'date':
      if (isMethod) {
        result = {
          name: name,
          type: ['date'],
          mandatory: false,
          default: []
        };
      } else {
        result = {
          type: ['date'],
          readOnly: false,
          mandatory: false,
          default: []
        };
      }
      break;
    case typeof type === 'array' && typeof type[0] === 'any':
      if (isMethod) {
        result = {
          name: name,
          type: ['any'],
          mandatory: false,
          default: []
        };
      } else {
        result = {
          type: ['any'],
          readOnly: false,
          mandatory: false,
          default: []
        };
      }
      break;
    case typeof type === 'array':
      if (isMethod) {
        result = {
          name: name,
          type: type,
          mandatory: false,
          default: []
        };
      } else {
        result = {
          type: type,
          readOnly: false,
          mandatory: false,
          default: []
        };
      }
      break;
    default:
      break;
  }

  return result;
}

/**
 * @method compileConfiguration
 * @param {JSON} model definition of the model
 * @returns {Object} compiled model
 * @description Create a full model definition from a model
 */
function compileConfiguration(model) {
  var propName = '';
  var paramPropName = '';
  var configuration = '';
  var methodConf = {};

  model = JSON.parse(JSON.stringify(model));

  for (propName in model) {
    if (model.hasOwnProperty(propName) && propName.indexOf('_') !== 0) {
      switch (true) {
        // property type
        case typeof model[propName] === 'string':
          model[propName] = initConfiguration(propName, model[propName], false);
          break;

        // property configuration
        case typeof model[propName] === 'object' &&
          typeof model[propName]['=>'] === 'undefined':
          model[propName] = merge(
            model[propName],
            initConfiguration(propName, model[propName].type || 'any', false)
          );
          break;

        // method / event
        case typeof model[propName] === 'object' &&
          typeof model[propName]['=>'] !== 'undefined':
          methodConf = {
            params: [],
            result: 'any'
          };

          for (paramPropName in model[propName]) {
            // parameter type
            if (typeof model[propName][paramPropName] === 'string') {
              if (paramPropName === '=>') {
                methodConf.result = model[propName][paramPropName];
              } else {
                methodConf.params.push(
                  initConfiguration(
                    paramPropName,
                    model[propName][paramPropName],
                    true
                  )
                );
              }
            }
            // parameter configuration
            if (typeof model[propName][paramPropName] === 'object') {
              methodConf.params.push(
                merge(model[propName][paramPropName]),
                initConfiguration(
                  paramPropName,
                  model[propName][paramPropName].type || 'any',
                  true
                )
              );
            }
          }
          model[propName] = methodConf;
          break;
        default:
          break;
      }
    }
  }
  return model;
}

/* Public methods */

/**
 * @method schema
 * @param {String} name name of the schema
 * @param {JSON} schema definition of the schema
 * @description Add a new schema to the metamodel
 */
exports.schema = function schema(name, schema) {
  var id = null;
  var result = [];
  var schemaName = '';
  var mergedSchema = {};
  var schemas = [];

  if (typeof schema === 'undefined' || Object.keys(schema).length === 0) {
    if (typeof name === 'string') {
      schema = {};
      schema[$mson.NAME] = name;
      schemaName = name;
    } else {
      schema = JSON.parse(JSON.stringify(name));
      schemaName = schema[$mson.NAME];
    }
  } else {
    schema = JSON.parse(JSON.stringify(schema));
    schema[$mson.NAME] = name;
    schemaName = schema[$mson.NAME];
  }

  if (typeof schema[$mson.ID] === 'undefined') {
    schema[$mson.ID] = $helper.generateId();
  }
  if (typeof schema[$mson.INHERIT] === 'undefined') {
    schema[$mson.INHERIT] = ['_Component'];
  }

  /**
   * @method _removeDuplicate
   * @param {Array} inherits list of parents
   * @private
   * @description remove duplicate parents in the list of parents
   */
  function _removeDuplicate(inherits) {
    var filteredList = [];
    var list = {};

    inherits.forEach(function(name) {
      var cleanName = name.trim();
      if (typeof list[cleanName] === 'undefined') {
        list[cleanName] = cleanName;
        filteredList.push(cleanName);
      }
    });

    return filteredList;
  }

  schema[$mson.INHERIT] = _removeDuplicate(schema[$mson.INHERIT]);

  // check if schema is compliant with the meta meta model
  if (exports.isValidObject(schema, $mson.SCHEMA_DEFINITION, false)) {
    schemas = $db._Schema.find({
      _name: schemaName
    });
    if (schemas.length) {
      mergedSchema = merge(schema, schemas[0]);
      $db._Schema.update(
        {
          _name: schemaName
        },
        mergedSchema
      );
      id = schemas[0][$mson.ID];
    } else {
      result = $db._Schema.insert(schema);
      id = result[0];
    }
  } else {
    $log.invalidSchema(schema[$mson.NAME]);
  }

  return id;
};

/**
 * @method model
 * @param {String} name name of the model
 * @param {JSON} model definition of the model
 * @description Add a new model to the metamodel
 */
exports.model = function model(name, model) {
  var id = null;
  var result = [];
  var inherit = '';
  var modelName = '';
  var mergedModel = {};
  var models = [];

  if (typeof model === 'undefined' || Object.keys(model).length === 0) {
    model = JSON.parse(JSON.stringify(name));
    modelName = model[$mson.NAME];
  } else {
    model = JSON.parse(JSON.stringify(model));
    model[$mson.NAME] = name;
    model = compileConfiguration(model);
    modelName = model[$mson.NAME];
  }

  if (typeof model[$mson.ID] === 'undefined') {
    model[$mson.ID] = $helper.generateId();
  }

  // check if model is compliant with the meta meta model
  if (exports.isValidObject(model, $mson.MODEL_DEFINITION, false)) {
    models = $db._Model.find({
      _name: modelName
    });
    if (models.length) {
      mergedModel = merge(model, models[0]);
      $db._Model.update(
        {
          _name: modelName
        },
        mergedModel
      );
      id = models[0][$mson.ID];
    } else {
      result = $db._Model.insert(model);
      id = result[0];
    }
  } else {
    $log.invalidModel(model[$mson.NAME]);
  }

  return id;
};

/**
 * @method type
 * @param {String} name name of the type
 * @param {JSON} type type to add
 * @description Add a new type
 */
exports.type = function type(name, type) {
  var id = null;
  var result = [];
  var typeName = '';
  var typeDef = {};

  if (typeof type === 'undefined' || Object.keys(type).length === 0) {
    typeDef = JSON.parse(JSON.stringify(name));
    typeName = typeDef.name;
  } else {
    if (Array.isArray(type)) {
      type = JSON.parse(JSON.stringify(type));
      typeDef.value = type;
      typeDef.name = name;
      typeDef.type = typeof type[0] || 'any';
      typeName = typeDef.name;
    } else {
      type = JSON.parse(JSON.stringify(type));
      typeDef.schema = compileConfiguration(type);
      typeDef.name = name;
      typeDef.type = 'object';
      typeName = typeDef.name;
    }
  }

  if (typeof typeDef[$mson.ID] === 'undefined') {
    typeDef[$mson.ID] = $helper.generateId();
  }

  // check if type is compliant with the meta meta model
  if (exports.isValidObject(typeDef, $mson.TYPE_DEFINITION)) {
    result = $db._Type.insert(typeDef);
    id = result[0];
  } else {
    $log.invalidTypeDefinition(typeName);
  }

  return id;
};

/**
 * @method init
 * @description Init the metamodel
 */
exports.init = function init() {
  exports.clear();
  initDbStructure();
};

/**
 * @method clear
 * @description Remove the data of the metamodel from the memory
 */
exports.clear = function clear() {
  store = {
    inheritance: {},
    inheritanceTree: {},
    schemas: {},
    compiledSchemas: {},
    models: {},
    generatedModels: {},
    states: {},
    type: {}
  };
};

/**
 * @method create
 * @description Create the metamodel
 */
exports.create = function create() {
  $log.modelCreationBegin();
  loadInMemory();
  createInheritanceTree();
  compileSchemas();
  generateModels();
  checkModels();
  getStates();
  createDbStructure();
  createClass();
  createClassInfo();
  $log.modelCreationEnd();
};

/**
 * @method isEvent
 * @param {String} name
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is an event
 * @description Check if an attribute of the schema is an event
 */
exports.isEvent = function isEvent(name, id) {
  return checkType(name, id, $mson.EVENT_TYPE);
};

/**
 * @method isProperty
 * @param {String} name name of the property
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a property
 * @description Check if an attribute of the schema is a property
 */
exports.isProperty = function isProperty(name, id) {
  return checkType(name, id, $mson.PROPERTY_TYPE);
};

/**
 * @method isLink
 * @param {String} name name of the property
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a link
 * @description Check if an attribute of the schema is a link
 */
exports.isLink = function isLink(name, id) {
  return checkType(name, id, $mson.LINK_TYPE);
};

/**
 * @method isCollection
 * @param {String} name name of the collection
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a collection
 * @description Check if an attribute of the schema is a collection
 */
exports.isCollection = function isCollection(name, id) {
  return checkType(name, id, $mson.COLLECTION_TYPE);
};

/**
 * @method isMethod
 * @param {String} name name of the method
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a method
 * @description Check if an attribute of the schema is a method
 */
exports.isMethod = function isMethod(name, id) {
  return checkType(name, id, $mson.METHOD_TYPE);
};

/**
 * @method isStructure
 * @param {String} path path of the property
 * @param {String} modelName model name
 * @returns {Boolean} true if the property is a structure
 * @description Check if an attribute of the schema is a structure
 */
exports.isStructure = function isStructure(path, modelName) {
  var result = false;
  var structure = null;
  var type = '';

  type = exports.getModelPathType(modelName, path);

  if (Array.isArray(structure)) {
    structure = exports.getType(type[0]);
  } else {
    structure = exports.getType(type);
  }

  if (structure && structure.schema) {
    result = true;
  }

  return result;
};

/**
 * @method isValidState
 * @param {String} name name of the state
 * @param {String} id component id
 * @returns {Boolean} true if the name is a correct state for the component
 * @description Check if the name is a correct state for the component
 */
exports.isValidState = function isValidState(name, id) {
  var result = false;
  var componentSchema = store.generatedModels[id];
  var state = {};

  if (isModelPath(name)) {
    result = exports.isValidModelPath(id, name);
  } else {
    if (componentSchema && componentSchema[$mson.NAME]) {
      componentSchema = store.generatedModels[componentSchema[$mson.NAME]];
    }
    state = store.states[componentSchema[$mson.NAME]];

    if (Array.isArray(state)) {
      result = state.indexOf(name) !== -1;
    }
  }

  return result;
};

/**
 * @method isValidType
 * @param {Object} object object to validate
 * @param {String} type type to use for validation
 * @returns {Boolean} true if the object is compliant with the type
 * @description Check if a value is compliant with a type
 */
exports.isValidType = function isValidType(value, typeName) {
  var result = true;

  /**
   * @method _isValidCustomType
   * @param {String} value
   * @param {String} typeName
   * @private
   * @description Check if a value has the correct type
   */
  function _isValidCustomType(value, typeName) {
    var typeDef = store.type[typeName];
    var result = true;

    if (Array.isArray(typeDef.value) && typeDef.value.indexOf(value) === -1) {
      result = false;
    }

    if (result === false) {
      $log.invalidEnumValue(value, typeName);
    }
    return result;
  }

  /**
   * @method _isValidType
   * @param {String} value
   * @param {String} typeName
   * @returns {Boolean} the object is compliant with the type
   * @private
   * @description Check if an object is compliant with a type
   */
  function _isValidType(value, typeName) {
    var isValid = true;
    var realType = '';
    var i = 0;
    var length = 0;

    realType = getRealType(typeName);
    switch (realType) {
      case 'string':
        isValid = hasType(value, typeName);
        break;
      case 'array':
        if (Array.isArray(value)) {
          length = value.length;
          for (i = 0; i < length; i++) {
            switch (true) {
              case isCustomType(typeName[0]):
                isValid = checkCustomSchema(value[i], typeName[0]);
                break;
              case exports.isClassName(typeName[0]):
                if (value[i] !== '' && value[i] !== null) {
                  isValid = exports.inheritFrom(
                    getClassName(value[i]),
                    typeName[0]
                  );
                }
                break;
              default:
                isValid = hasType(value[i], typeName[0]);
                break;
            }
          }
        } else {
          isValid = false;
        }
        break;
      default:
        break;
    }
    return isValid;
  }

  switch (true) {
    case isCustomType(typeName):
      result = checkCustomSchema(value, typeName);

      if (!result) {
        if (store.type[typeName]) {
          $log.invalidEnumType(value, typeName, store.type[typeName].type);
        } else {
          $log.invalidEnumType(value, typeName);
        }
      }

      if (result) {
        result = _isValidCustomType(value, typeName);
      }
      break;
    case exports.isClassName(typeName):
      if (value !== '' && value !== null) {
        result = exports.inheritFrom(getClassName(value), typeName);
      }
      break;
    default:
      result = _isValidType(value, typeName);
      break;
  }

  return result;
};

/**
 * @method isValidEnum
 * @param {String|Object} value value to validate
 * @param {Schema} schema schema to use for validation
 * @returns {Boolean} true if the object is compliant with the enum
 * @description Check if a value is compliant with a type enum.
 */
exports.isValidEnum = function isValidEnum(value, schema) {
  var result = true;

  /**
   * @method _isInstanceOf
   * @param {String} component
   * @param {String} className
   * @private Check if the component has for class name className
   */
  function _isInstanceOf(component, className) {
    var result = false;
    var componentClassName = '';

    componentClassName = component.constructor.name;

    if (componentClassName === 'Function') {
      componentClassName = component.name;
    }
    result = componentClassName === className;

    return result;
  }

  if (exports.isClassName(schema.type)) {
    result =
      _isInstanceOf($component.get(value), getRealClassName(schema.type)) &&
      schema.value.indexOf(value) !== -1;
    if (!result) {
      $log.invalidEnumValue(value, schema.type);
    }
  } else {
    result = hasType(value, schema.type) && schema.value.indexOf(value) !== -1;
    if (!result) {
      $log.invalidEnumValue(value, schema.name);
    }
  }

  return result;
};

/**
 * @method isValidSchema
 * @param {JSON} object
 * @param {JSON} schema
 * @returns {Boolean}
 * @description Check if the object is compliant with the schema.
 * Use it to test if a schema is compliant with a schema
 * it is supposed to validate.
 */
exports.isValidSchema = function isValidSchema(object, schema) {
  var fieldName = '';
  var field = null;
  var result = true;
  var mandatory = true;
  var typeSchema = '';
  var typeRef = '';
  var realType = '';
  var length = 0;
  var i = 0;

  /**
   * @method _isValidClassName
   * @returns {Boolean} the field is compliant with the type of the class
   * @private
   * @description Check if a field is compliant with the type of the class name
   */
  function _isValidClassName() {
    var isValid = true;
    var enumValue = [];

    typeRef = getClassName(typeSchema);
    typeRef = object[typeRef];
    if (isCustomType(typeRef)) {
      if (store.type[typeRef]) {
        if (store.type[typeRef].schema) {
          isValid = isValidSchema(field, store.type[typeRef].schema);
        } else {
          // check type
          isValid = hasType(field, store.type[typeRef].type);

          // check value
          enumValue = store.type[typeRef].value;
          if (enumValue) {
            isValid = isValidEnumValue(field, enumValue);
          }
        }
      } else {
        isValid = false;
      }
    } else {
      if (typeRef === 'array') {
        isValid = Array.isArray(field);
      } else {
        if (exports.isClassName(typeRef)) {
          isValid = hasType(field, 'object') || hasType(field, 'string');
          // TODO maybe have a more strict validation than just a type checking
        } else {
          isValid = hasType(field, typeRef);
        }
      }
    }
    if (!isValid) {
      $log.invalidPropertyType(fieldName, typeRef, field);
    }
    return isValid;
  }

  /**
   * @method _isValidTypeReference
   * @returns {Boolean} the field is compliant with the type of the references type
   * @private
   * @description Check if a field is compliant with the type of the references type
   */
  function _isValidTypeReference() {
    var isValid = true;
    var enumValue = [];

    typeRef = getRealTypeName(typeSchema);
    typeRef = object[typeRef];

    switch (true) {
      case typeof typeRef === 'string':
        if (isCustomType(typeRef)) {
          if (store.type[typeRef]) {
            if (store.type[typeRef].schema) {
              isValid = isValidSchema(field, store.type[typeRef].schema);
            } else {
              // check type
              isValid = hasType(field, store.type[typeRef].type);

              // check value
              enumValue = store.type[typeRef].value;
              if (enumValue) {
                isValid = isValidEnumValue(field, enumValue);
              }
            }
          } else {
            isValid = false;
          }
        } else {
          if (typeRef === 'array') {
            isValid = Array.isArray(field);
          } else {
            if (exports.isClassName(typeRef)) {
              isValid = hasType(field, 'object') || hasType(field, 'string');
              // TODO maybe have a more strict validation than just a type checking
            } else {
              isValid = hasType(field, typeRef);
            }
          }
        }
        break;

      case Array.isArray(typeRef):
        if (!Array.isArray(field)) {
          isValid = false;
        }
        break;

      default:
        isValid = false;
        break;
    }

    if (!isValid) {
      $log.invalidPropertyType(fieldName, typeRef, field);
    }
    return isValid;
  }

  /**
   * @method _isValidType
   * @returns {Boolean} the field is compliant with the type
   * @private
   * @description Check if a field is compliant with a type
   */
  function _isValidType() {
    var isValid = true;

    realType = getRealType(typeSchema);
    switch (realType) {
      case 'string':
        if (isCustomType(realType)) {
          isValid = isValidSchema(field, typeSchema);
        } else {
          if (!hasType(field, typeSchema)) {
            $log.invalidPropertyType(fieldName, typeSchema, field);
            isValid = false;
            break;
          }
        }
        break;
      case 'array':
        if (Array.isArray(field)) {
          length = field.length;
          for (i = 0; i < length; i++) {
            if (isCustomType(typeSchema[0])) {
              isValid = isValidSchema(
                field[i],
                store.type[typeSchema[0]].schema
              );
            } else {
              if (!hasType(field[i], typeSchema[0])) {
                $log.invalidPropertyType(fieldName, typeSchema[0], field[i]);
                isValid = false;
                break;
              }
            }
          }
        } else {
          isValid = false;
        }
        break;
      default:
        break;
    }
    return isValid;
  }

  // type
  if (hasType(object, 'object')) {
    for (fieldName in object) {
      field = object[fieldName];

      if (hasType(schema[fieldName], 'undefined')) {
        $log.unknownProperty(fieldName, schema);
        return false;
      } else {
        typeSchema = schema[fieldName].type;
      }

      switch (true) {
        case exports.isClassName(typeSchema):
          result = result && _isValidClassName();
          break;
        case isTypeReference(typeSchema):
          result = result && _isValidTypeReference();
          break;
        default:
          result = result && _isValidType();
          break;
      }
      if (!result) {
        break;
      }
    }

    // mandatory
    for (fieldName in schema) {
      field = schema[fieldName];
      mandatory = field.mandatory;
      if (
        mandatory === true &&
        (hasType(object[fieldName], 'undefined') &&
          object[fieldName] !== undefined)
      ) {
        $log.missingProperty(fieldName);
        result = false;
        break;
      }
    }
  } else {
    result = false;
    $log.invalidPropertyFormat(object);
  }

  return result;
};

/**
 * @method isValidObject
 * @param {Object} object object to validate
 * @param {Object} schema schema that validates the object
 * @param {Boolean} strict true if validation is strict
 * @param {Boolean} cleanRef true if we remove the reference to the object
 * @returns {Boolean} true is the object is compliant with the schema
 * @description Check if the object is compliant with the schema.
 * Use it to test if the constructor of an object is compliant
 * with the definition of the class.
 */
exports.isValidObject = function isValidObject(
  object,
  schema,
  strict,
  cleanRef
) {
  var fieldName = '';
  var field = null;
  var result = true;
  var mandatory = true;
  var typeSchema = '';
  var typeRef = '';
  var realType = '';
  var length = 0;
  var i = 0;

  if (hasType(strict, 'undefined')) {
    strict = true;
  }

  if (hasType(cleanRef, 'undefined')) {
    cleanRef = false;
  }

  /**
   * @method _isValidCustomType
   * @param {String} field a field
   * @param {String} typeSchema a schema
   * @returns {Boolean} the field is compliant with the custom type
   * @private
   * @description Check if a field is compliant with a custom type
   */
  function _isValidCustomType(field, typeSchema) {
    var isValid = true;
    var realType = '';

    realType = store.type[typeSchema];
    if (realType) {
      switch (true) {
        case !hasType(realType.schema, 'undefined'):
          isValid = isValidObject(field, realType.schema, strict, cleanRef);
          break;
        case !hasType(realType.value, 'undefined'):
          isValid = exports.isValidEnum(field, realType);
          break;
        default:
          isValid = exports.isValidType(field, realType.type);
          break;
      }
    } else {
      isValid = false;
    }
    return isValid;
  }

  /**
   * @method _isValidClassName
   * @param {String} field a field
   * @param {String} typeSchema a schema
   * @returns {Boolean} the field is compliant with the type of the class name
   * @private
   * @description Check if a field is compliant with the type of the class name
   */
  function _isValidClassName(field, typeSchema) {
    var isValid = true;
    var comp = null;
    var isComponent = false;

    typeRef = getRealClassName(typeSchema);
    if (field && field.id) {
      comp = field;
      isComponent = true;
    } else {
      comp = $component.get(field);
    }

    if (!hasType(comp, 'undefined')) {
      if (!exports.inheritFrom(comp.constructor.name, typeRef)) {
        isValid = false;
        $log.invalidType(fieldName, field, typeRef);
      } else {
        if (isComponent && cleanRef) {
          object[fieldName] = comp.id(); // store the id instead the full object
        }
      }
    } else {
      // check for default value of an object ({} or null)
      switch (true) {
        case hasType(field, 'object') &&
          field !== null &&
          Object.keys(field).length > 0:
        case hasType(field, 'string') && field !== '':
          $log.canNotYetValidate(field, typeRef);
          break;
        default:
          break;
      }
    }
    return isValid;
  }

  /**
   * @method _isValidType
   * @param {String} field a field
   * @param {String} typeSchema a schema
   * @returns {Boolean} the field is compliant with the type
   * @private
   * @description Check if a field is compliant with a type
   */
  function _isValidType(field, typeSchema) {
    var isValid = true;
    var date = null;
    var typeArray = '';

    realType = getRealType(typeSchema);
    switch (realType) {
      case 'any':
        break;
      case 'string':
        if (isCustomType(realType)) {
          isValid = isValidObject(field, typeSchema, strict, cleanRef);
        } else {
          if (typeSchema === 'array') {
            if (getRealType(field) !== 'array') {
              $log.invalidPropertyType(fieldName, typeSchema, field);
              isValid = false;
              break;
            }
          } else {
            if (typeSchema === 'date') {
              date = new Date(field);
              isValid = !isNaN(date.getDate());
              if (!isValid) {
                $log.invalidPropertyType(fieldName, typeSchema, field);
                break;
              }
            } else {
              if (
                getRealType(field) !== typeSchema &&
                getRealType(field) !== 'any'
              ) {
                $log.invalidPropertyType(fieldName, typeSchema, field);
                isValid = false;
                break;
              }
            }
          }
        }
        break;
      case 'array':
        if (Array.isArray(field)) {
          length = field.length;
          typeArray = typeSchema[0];
          for (i = 0; i < length; i++) {
            if (isCustomType(typeArray)) {
              isValid = _isValidCustomType(field[i], typeArray);
            } else {
              if (!exports.isClassName(typeArray)) {
                if (
                  getRealType(field[i]) !== typeArray &&
                  typeArray !== 'any'
                ) {
                  $log.invalidPropertyType(fieldName, typeArray, field[i]);
                  isValid = false;
                  break;
                }
              } else {
                if (getRealType(field[i]) === 'string') {
                  // Case of an import of a system
                  if ($component.get(field[i])) {
                    if (
                      !exports.inheritFrom(
                        getClassName($component.get(field[i])),
                        getRealClassName(typeArray)
                      )
                    ) {
                      $log.invalidClassName(
                        JSON.stringify(field[i]),
                        getRealClassName(typeArray),
                        getClassName($component.get(field[i]))
                      );
                      isValid = false;
                      break;
                    }
                  } else {
                    if (field[i] !== '') {
                      $log.canNotYetValidate(
                        field[i],
                        getRealClassName(typeArray)
                      );
                    }
                  }
                } else {
                  if (
                    !exports.inheritFrom(
                      getClassName(field[i]),
                      getRealClassName(typeArray)
                    )
                  ) {
                    $log.invalidClassName(
                      JSON.stringify(field[i]),
                      getRealClassName(typeArray),
                      getClassName(field[i])
                    );
                    isValid = false;
                    break;
                  } else {
                    if (cleanRef) {
                      field[i] = field[i].id(); // store the id instead the full object
                    }
                  }
                }
              }
            }
          }
        } else {
          isValid = false;
          $log.invalidType(fieldName, field, 'array');
        }
        break;
      default:
        isValid = false;
        $log.unknownType(field);
        break;
    }
    return isValid;
  }

  // check if object
  if (!hasType(object, 'object')) {
    result = false;
    $log.invalidConfiguration(object, 'object');
  }

  // type
  for (fieldName in object) {
    field = object[fieldName];

    if (
      !hasType(schema[fieldName], 'undefined') ||
      fieldName === $mson.CORE ||
      fieldName === $mson.ID
    ) {
      switch (true) {
        case fieldName === $mson.CORE:
          typeSchema = 'boolean';
          break;
        case fieldName === $mson.ID:
          typeSchema = 'string';
          break;
        default:
          typeSchema = schema[fieldName].type;
          break;
      }
    } else {
      if (strict) {
        $log.unknownProperty(fieldName, schema);
        return false;
      } else {
        continue;
      }
    }

    switch (true) {
      case isCustomType(typeSchema):
        result = result && _isValidCustomType(field, typeSchema);
        break;
      case exports.isClassName(typeSchema):
        result = result && _isValidClassName(field, typeSchema);
        break;
      default:
        result = result && _isValidType(field, typeSchema);
        break;
    }
  }

  // mandatory
  for (fieldName in schema) {
    field = schema[fieldName];
    mandatory = field.mandatory;
    if (object && hasType(object[fieldName], 'undefined')) {
      if (mandatory === true) {
        $log.missingProperty(fieldName);
        result = false;
      }
    }
  }

  return result;
};

/**
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object object to prepate
 * @param {Object} schema schema that validates the object
 */
exports.prepareObject = function prepareObject(object, schema) {
  var fieldName = '';
  var field = null;
  var mandatory = true;
  var defaultValue = '';

  schema = JSON.parse(JSON.stringify(schema));

  // mandatory & default value
  for (fieldName in schema) {
    field = schema[fieldName];
    mandatory = field.mandatory;
    defaultValue = field.default;
    if (hasType(object[fieldName], 'undefined')) {
      if (mandatory === false && !hasType(defaultValue, 'undefined')) {
        object[fieldName] = defaultValue;
      }
    }
  }
};

/**
 * @method getSchema
 * @param {String} name of the schema
 * @returns {Object} the schema
 * @description Get a schema
 */
exports.getSchema = function getSchema(name) {
  var result = null;

  if (store.compiledSchemas[name]) {
    result = store.compiledSchemas[name];
  }
  return result;
};

/**
 * @method getModel
 * @param {String} name of the model
 * @returns {Object} the model
 * @description Get a model
 */
exports.getModel = function getModel(name) {
  var result = null;

  if (store.generatedModels[name]) {
    result = store.generatedModels[name];
  }
  return result;
};

/**
 * @method getType
 * @param {String} name of the type
 * @returns {Object} the type
 * @description Get a type
 */
exports.getType = function getType(name) {
  var result = null;

  if (store.type[name] && store.type[name]) {
    result = JSON.parse(JSON.stringify(store.type[name]));
  }
  return result;
};

/**
 * @method getModelPathType
 * @param {String} model name of the model
 * @param {String} path path of the structure
 * @returns {Object} the type
 * @description Get the type of a model path
 */
exports.getModelPathType = function getModelPathType(model, path) {
  var result = null;
  var subpaths = [];
  var subpath = '';
  var i = 0;
  var length = 0;
  var structure = '';

  subpaths = path.split('.');
  length = subpaths.length;

  for (i = 0; i < length; i++) {
    subpath = subpaths[i];
    subpath = subpath.split('[')[0];
    if (i === 0) {
      result = exports.getModel(model)[subpath].type;
    } else {
      if (Array.isArray(result)) {
        result = result[0];
      }

      if (isCustomType(result)) {
        structure = exports.getType(result);

        switch (true) {
          case typeof structure.schema !== 'undefined':
            if (!structure.schema[subpath]) {
              $log.unknownPath(path, subpath);
            } else {
              result = structure.schema[subpath].type;
            }
            break;
          case typeof structure.type !== 'undefined':
            result = structure.type;
            break;
          default:
            $log.invalidState(model, path);
            break;
        }
      }
    }
  }
  return result;
};

/**
 * @method isValidModelPath
 * @param {String} model name of the model
 * @param {String} path path of the model
 * @returns {Boolean} true if the path is valid for the model
 * @description Check if a path is valid model path
 */
exports.isValidModelPath = function isValidModelPath(model, path) {
  var result = true;
  var type = null;
  var subpaths = [];
  var subpath = '';
  var i = 0;
  var length = 0;
  var structure = '';

  subpaths = path.split('.');
  length = subpaths.length;

  for (i = 0; i < length; i++) {
    subpath = subpaths[i];
    subpath = subpath.split('[')[0];
    if (i === 0) {
      type = exports.getModel(model)[subpath].type;
      if (!type) {
        result = false;
      }
    } else {
      if (Array.isArray(result)) {
        type = type[0];
      }

      if (isCustomType(type)) {
        structure = exports.getType(type);
        if (structure.schema && structure.schema[subpath]) {
          type = structure.schema[subpath].type;
          if (!type) {
            result = false;
          }
        }
      }
    }
  }
  return result;
};

/**
 * @method get
 * @param {String} id id of the schema
 * @returns {Array} id id of the parents
 * @description Get parents of a schema if any
 */
exports.getParents = function getParents(id) {
  var result = [];

  if (!store.inheritanceTree[id]) {
    result = [];
  } else {
    result = store.inheritanceTree[id].slice();
  }

  return result;
};

/**
 * @method inheritFrom
 * @param {String} name name of the class
 * @param {String} parentName name of the parent
 * @returns {Boolean} true if the component inherit from the specific class name
 * @description Check if a class inherits from another one
 */
exports.inheritFrom = function inheritFrom(name, parentName) {
  var result = false;
  var parents = [];
  var i = 0;
  var length = 0;

  /**
   * @method _searchParent
   * @param {String} className name of the class
   * @param {String} ancestorName of the parent
   * @returns {Boolean} true if the component inherit from the specific class name
   * @private
   * @description Check if a class inherits from another one
   */
  function _searchParent(className, ancestorName) {
    var isAncestor = false;
    var parents = [];
    var i = 0;
    var length = 0;

    parents = exports.getParents(className);
    if (parents.length !== 0) {
      if (parents.indexOf(ancestorName) !== -1) {
        isAncestor = true;
      } else {
        for (i = 0; i < length; i++) {
          isAncestor = _searchParent(parents[i], ancestorName);
          if (isAncestor) {
            break;
          }
        }
      }
    }
    return isAncestor;
  }

  if (name !== parentName) {
    parents = exports.getParents(name);
    length = parents.length;

    if (parents.length !== 0) {
      if (parents.indexOf(parentName) !== -1) {
        result = true;
      } else {
        for (i = 0; i < length; i++) {
          result = _searchParent(parents[i], parentName);
          if (result) {
            break;
          }
        }
      }
    }
  } else {
    result = true;
  }

  return result;
};

/**
 * @method isClassName
 * @param {String} value
 * @returns {Boolean} true if the name is a class name
 * @description Is the value a class name
 */
exports.isClassName = function isClassName(value) {
  var result = hasType(value, 'string');

  if (result) {
    if (Object.keys(store.generatedModels).length > 0) {
      result = typeof store.generatedModels[value] !== 'undefined';
    } else {
      result = false;
    }
  }

  return result;
};

},{"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./mson.js":8,"./workflow.js":11}],8:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module mson
 * @description This module contains all the mson definition.
 */

'use strict';

exports.ID = '_id';
exports.NAME = '_name';
exports.DESCRIPTION = '_description';
exports.INHERIT = '_inherit';
exports.CLASS = '_class';
exports.CORE = '_core';

exports.INTERNAL_NAMES = [
  '_id',
  '_name',
  '_inherit',
  '_description',
  '_class',
  '_core'
];

exports.PROPERTY_TYPE = 'property';
exports.COLLECTION_TYPE = 'collection';
exports.LINK_TYPE = 'link';
exports.METHOD_TYPE = 'method';
exports.EVENT_TYPE = 'event';

exports.INTERNAL_TYPES = ['property', 'collection', 'link', 'method', 'event'];

exports.DEFAULT_TYPES = [
  'boolean',
  'string',
  'number',
  'object',
  'function',
  'array',
  'date',
  'any'
];

exports.SCHEMA_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true
  },
  _name: {
    type: 'string',
    mandatory: true
  },
  _inherit: {
    type: ['string'],
    mandatory: false,
    default: ['_Component']
  },
  _class: {
    type: 'boolean',
    mandatory: false
  },
  _core: {
    type: 'boolean',
    mandatory: false
  },
  _description: {
    type: 'string',
    mandatory: false
  }
};

exports.MODEL_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true
  },
  _name: {
    type: 'string',
    mandatory: true
  },
  _inherit: {
    type: ['string'],
    mandatory: false
  },
  _class: {
    type: 'boolean',
    mandatory: false
  },
  _core: {
    type: 'boolean',
    mandatory: false
  },
  _description: {
    type: 'string',
    mandatory: false
  }
};

exports.TYPE_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true
  },
  name: {
    type: 'string',
    mandatory: true
  },
  type: {
    type: 'string',
    mandatory: true
  },
  schema: {
    type: 'object',
    mandatory: false
  },
  value: {
    type: ['any'],
    mandatory: false
  },
  core: {
    type: 'boolean',
    mandatory: false
  },
  description: {
    type: 'string',
    mandatory: false
  }
};

},{}],9:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module runtime
 * @requires db
 * @requires component
 * @requires metamodel
 * @requires system
 * @requires helper
 * @description This module is the main module of System Runtime.
 * It inits System Runtime metamodel and loads System Runtime core system.
 */

'use strict';

var $db = require('./db.js');
var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $system = require('../build/system/system.js');
var $helper = require('./helper.js');

/* Private Property */

var sytemId = '';
var system = '';
var channel = null;

// polyfill
$helper.polyfill();

// init Metamodel
$metamodel.init();

// init runtime from a system
sytemId = $db.importSystem($system.system);

system = $component.get(sytemId);
channel = $component.get('channel');

system.state('installed');
channel.$systemInstalled(sytemId);
system.state('resolved');
channel.$systemResolved(sytemId);
system.state('starting');
channel.$systemStarted(sytemId);

system.start();

system.state('active');

/* Public property */

/**
 * @property runtime
 * @type _Runtime
 * @description _Runtime instance
 */
module.exports = $component.get('runtime');

},{"../build/system/system.js":1,"./component.js":3,"./db.js":4,"./helper.js":5,"./metamodel.js":7}],10:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module state
 * @requires db
 * @description This module manages the states of all thecomponents
 */

'use strict';

var $db = require('./db.js');

/* Private properties */

var store = {};

/* Public methods */

/**
 * @method set
 * @param {String} id component id on which change the state
 * @param {String} state the new state of the component
 * @param {Object} value value of the state
 * @description Set the state of a component
 */
exports.set = function set(id, state, value) {
  store[id] = {
    state: state,
    value: value
  };
  $db.store._State[id] = {
    state: state,
    value: value
  };
};

/**
 * @method get
 * @param {String} id id of the component
 * @returns {String} state of the component
 * @description Get the state of a component
 */
exports.get = function get(id) {
  return store[id];
};

/**
 * @method clear
 * @description Remove all the states of the components from the memory
 */
exports.clear = function clear() {
  store = {};
};

},{"./db.js":4}],11:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module workflow
 * @requires metamodel
 * @requires component
 * @requires behavior
 * @requires state
 * @requires helper
 * @requires log
 * @requires db
 * @description This module manages the workflow of System Runtime.
 * It behaves like a workflow engine.
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:
 * - the state is valid for the component,
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and
 * - the output of all actions are compliants with the model.
 *
 * If an error occurs, the workflow will call the error state of the component and runtime.
 * If the error can break the consistency of the current system, the worklow will stop.
 *
 */

'use strict';

var $metamodel = require('./metamodel.js');
var $component = require('./component.js');
var $behavior = require('./behavior.js');
var $state = require('./state.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $db = require('./db.js');

/* Private methods */

/**
 * @class RuntimeError
 * @constructor
 * @param {String} message message of the error
 * @description The RuntimeError class
 */
function RuntimeError(message) {
  this.message = message;
  this.name = 'RuntimeError';
}
RuntimeError.prototype = new Error();
RuntimeError.prototype.constructor = RuntimeError;

/**
 * @method isModelPath
 * @param {String} value
 * @returns {Boolean}
 * @private
 * @description Is the value a model path
 */
function isModelPath(value) {
  return value.indexOf('.') !== -1;
}

/**
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {Array} the names of all parameters of the method for the class
 * @private
 * @description Get all the names of the parameter of a method
 */
function getParamNames(id, methodName) {
  var method = null;
  var params = [];
  var result = [];
  var length = 0;
  var i = 0;

  if ($metamodel.getModel(id)) {
    method = $metamodel.getModel(id)[methodName];
  } else {
    $log.unknownModel(id);
  }

  if (method) {
    params = method.params;
    if (params) {
      length = params.length;
      for (i = 0; i < length; i++) {
        result.push(params[i].name);
      }
    }
  } else {
    if (!isModelPath(methodName)) {
      $log.unknownMethod(id, methodName);
    }
  }
  return result;
}

/**
 * @method getParamNumber
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {Array} number of parameters min and max for the method
 * @private
 * @description Get the number of parameters of a method
 */
function getParamNumber(id, methodName) {
  var method = null;
  var params = [];
  var result = [];
  var length = 0;
  var i = 0;
  var min = 0;
  var max = 0;

  if ($metamodel.getModel(id)) {
    method = $metamodel.getModel(id)[methodName];
  } else {
    $log.unknownModel(id);
  }

  if (method) {
    params = method.params;
    if (params) {
      length = params.length;
      for (i = 0; i < length; i++) {
        if (
          typeof params[i].mandatory === 'undefined' ||
          params[i].mandatory === true
        ) {
          min = min + 1;
        }
        max = max + 1;
      }
    }
    result.push(min);
    result.push(max);
  } else {
    if (methodName.indexOf('[') === -1 && methodName.indexOf('.') === -1) {
      $log.unknownMethod(id, methodName);
    }
  }
  return result;
}

/**
 * @method setDefaultValue
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @param {Array} args arguments
 * @returns {Array} arguments with default values
 * @private
 * @description Set the default value of the non mandatory parameters of a method
 */
function setDefaultValue(id, methodName, args) {
  var method = null;
  var params = [];
  var result = [];
  var length = 0;
  var i = 0;

  method = $metamodel.getModel(id)[methodName];
  if (method) {
    params = method.params;
    if (params) {
      length = params.length;
      for (i = 0; i < length; i++) {
        if (params[i].mandatory === false && typeof args[i] === 'undefined') {
          result.push(params[i].default);
        } else {
          result.push(args[i]);
        }
      }
    }
  } else {
    if (methodName.indexOf('[') === -1) {
      $log.unknownMethod(id, methodName);
    } else {
      result = args;
    }
  }
  return result;
}

/**
 * @method getReturnType
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {String} the type returned by the method
 * @private
 * @description Get the type returned by a method
 */
function getReturnType(id, methodName) {
  var resultType = null;
  var result = null;

  if ($metamodel.getModel(id)) {
    resultType = $metamodel.getModel(id)[methodName].result;
  } else {
    $log.unknownModel(id);
  }

  if (resultType) {
    result = resultType;
  }
  return result;
}

/**
 * @method getParamTypes
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {Array} the types of the parameters of a method
 * @private
 * @description Get all the type of the parameters of a method
 */
function getParamTypes(id, methodName) {
  var method = null;
  var params = [];
  var result = [];
  var length = 0;
  var i = 0;

  if ($metamodel.getModel(id)) {
    method = $metamodel.getModel(id)[methodName];
  } else {
    $log.unknownModel(id);
  }

  if (method) {
    params = method.params;
    if (params) {
      length = params.length;
      for (i = 0; i < length; i++) {
        result.push(params[i].type);
      }
    }
  } else {
    if (methodName.indexOf('[') === -1 && methodName.indexOf('.') === -1) {
      $log.unknownMethod(id, methodName);
    }
  }
  return result;
}

/**
 * @method getActions
 * @param {Object} component a System Runtime component
 * @param {String} name name of the state
 * @param {Boolean} isEvent true if the state is an event
 * @returns {Array} list of the actions
 * @private
 * @description Get the actions of the specified state
 */
function getActions(component, name, isEvent) {
  var action = $behavior.getActions(component.id(), name);
  var parents = [];
  var length = 0;
  var i = 0;
  var parent = null;

  if (!action.length || isEvent) {
    if (component.constructor.name !== 'Function') {
      action = action.concat(
        getActions($component.get(component.constructor.name), name, isEvent)
      );
    } else {
      parents = $metamodel.getParents(component.name);
      length = parents.length;
      for (i = 0; i < length; i++) {
        parent = $component.get(parents[i]);
        if (parent) {
          action = action.concat(getActions(parent, name, isEvent));
        } else {
          $log.unknownComponent(parents[i], component.name);
        }
        if (action.length) {
          break;
        }
      }
    }
  }

  if (action.length) {
    action.reverse();
  }

  return action;
}

/**
 * @method action
 * @param {Component} component
 * @param {String} state name of the state
 * @param {Object} action action
 * @param {Array} params parameters of the action
 * @param {Boolean} isEvent is the action a callback of an event
 * @returns {Boolean} result of the action
 * @description Execute an action and make some Dependency Injection if it is a core action
 */
function action(component, state, action, params, isEvent) {
  var result = null;
  var injectedParams = [];
  var componentClassName = '';
  var i = 0;
  var length = 0;

  if (component.constructor.name === 'Function') {
    componentClassName = component.name;
  } else {
    componentClassName = component.constructor.name;
  }

  if (
    !$metamodel.isProperty(state, componentClassName) &&
    !$metamodel.isLink(state, componentClassName) &&
    !$metamodel.isCollection(state, componentClassName)
  ) {
    params = setDefaultValue(componentClassName, state, params);
  }

  try {
    length = params.length;
    for (i = 0; i < length; i++) {
      injectedParams.push(params[i]);
    }

    if (action.useCoreAPI) {
      injectedParams.push($component);
      injectedParams.push($db);
      injectedParams.push($metamodel);
      injectedParams.push(exports);
      injectedParams.push($behavior);
      injectedParams.push($state);
      injectedParams.push($log);
      injectedParams.push($helper);
    }

    if ($helper.isOnNode()) {
      injectedParams.push($helper.getRequire());
    }

    if (isEvent) {
      if (action.context) {
        setTimeout(
          action.action.bind.apply(
            action.action,
            [action.context].concat(injectedParams)
          ),
          0
        );
      } else {
        setTimeout(
          action.action.bind.apply(
            action.action,
            [component].concat(injectedParams)
          ),
          0
        );
      }
    } else {
      if (action.context) {
        result = action.action.apply(action.context, injectedParams);
      } else {
        result = action.action.apply(component, injectedParams);
      }
    }
  } catch (e) {
    if (e instanceof RuntimeError) {
      throw e;
    } else {
      if (new Function() === undefined) {
        console.error(
          'runtime: can not execute new Function() instruction in the current context.'
        );
      } else {
        if (component && component.error) {
          component.error({
            message:
              "error when running the behavior '" +
              state +
              "' on component '" +
              component.id() +
              "'",
            error: e
          });
        }
        if ($helper.getRuntime()) {
          $helper.getRuntime().error({
            message:
              "error when running the behavior '" +
              state +
              "' on component '" +
              component.id() +
              "'",
            error: e
          });
        }
        $log.actionInvokeError(
          state,
          component.id(),
          component.constructor.name,
          e.message
        );
      }
    }
  }

  return result;
}

/* Public methods */

/**
 * @method checkInputNumbers
 * @param {String} className name the class
 * @param {String} state state on which the action applied
 * @param {Function} action action
 * @returns {Boolean} true if the action is the valid number of parameters
 * @description Check if an action has the valid number of parameter
 */
exports.checkInputNumbers = function checkInputNumbers(
  className,
  state,
  action
) {
  var func = '';
  var beginBody = -1;
  var header = '';
  var funcParams = '';
  var params = [];
  var paramNumber = 0;
  var modelNumberParam = [];
  var isProperty = false;
  var isLink = false;
  var isCollection = false;
  var result = false;

  // check number of parameters of the action
  func = action.toString();
  beginBody = func.indexOf('{');
  header = func.substring(0, beginBody);
  header = header.replace('=>', '');

  if (header.indexOf('(') !== -1) {
    funcParams = header
      .split('(')[1]
      .replace(')', '')
      .trim();
  } else {
    funcParams = header.trim();
  }

  params = funcParams.split(',');
  if (params[0] === '') {
    params = [];
  }
  paramNumber = params.length;

  // get the number min and max of valid parameters
  isProperty = $metamodel.isProperty(state, className);
  isLink = $metamodel.isLink(state, className);
  isCollection = $metamodel.isCollection(state, className);

  switch (true) {
    case isCollection:
      modelNumberParam = [2, 2];
      break;
    case isProperty:
      if ($metamodel.getModelPathType(className, state) === 'array') {
        modelNumberParam = [2, 2];
      } else {
        modelNumberParam = [1, 1];
      }
      break;
    case isLink:
      modelNumberParam = [1, 1];
      break;
    default:
      modelNumberParam = getParamNumber(className, state);
      break;
  }

  // compare
  if (
    modelNumberParam[0] <= paramNumber &&
    paramNumber <= modelNumberParam[1]
  ) {
    result = true;
  }

  return result;
};

/**
 * @method checkInput
 * @param {Object} params
 * @returns {Boolean} true if condition on input are compliant with the model
 * @description Check if conditions on input are compliant with the model before calling the action
 */
exports.checkInput = function checkInput(params) {
  params = params || {};

  var component = params.component || null;
  var methodName = params.methodName || '';
  var args = params.args || '';
  var paramsName = [];
  var paramsType = [];
  var paramsNumber = [];
  var componentClassName = '';
  var length = args.length;
  var i = 0;
  var param = null;
  var result = true;
  var isProperty = false;
  var isLink = false;
  var isCollection = false;

  if (component.constructor.name === 'Function') {
    componentClassName = component.name;
  } else {
    componentClassName = component.constructor.name;
  }

  isProperty = $metamodel.isProperty(methodName, componentClassName);
  isLink = $metamodel.isLink(methodName, componentClassName);
  isCollection = $metamodel.isCollection(methodName, componentClassName);
  paramsName = getParamNames(componentClassName, methodName);

  switch (true) {
    case isCollection && methodName.indexOf('.') === -1:
      if (args && args[1] && args[1] === 'reset') {
        paramsType = [
          [$metamodel.getModel(componentClassName)[methodName].type[0]],
          'string'
        ];
      } else {
        paramsType = [
          $metamodel.getModel(componentClassName)[methodName].type[0],
          'string'
        ];
      }
      paramsNumber = [2, 2];
      break;
    case isProperty && methodName.indexOf('.') === -1:
      if (isModelPath(methodName)) {
        paramsType = [
          $metamodel.getModelPathType(componentClassName, methodName)
        ];
      } else {
        paramsType = [$metamodel.getModel(componentClassName)[methodName].type];
      }
      if (
        $metamodel.getModelPathType(componentClassName, methodName) === 'array'
      ) {
        if (args && args[1] && args[1] === 'reset') {
          paramsType = [['any'], 'string'];
        } else {
          paramsType = ['any', 'string'];
        }
        paramsNumber = [2, 2];
      } else {
        paramsNumber = [1, 1];
      }
      break;
    case isLink && methodName.indexOf('.') === -1:
      paramsType = [$metamodel.getModel(componentClassName)[methodName].type];
      paramsNumber = [1, 1];
      break;
    default:
      paramsType = getParamTypes(componentClassName, methodName);
      paramsNumber = getParamNumber(componentClassName, methodName);
      break;
  }

  // case of object
  if (typeof length === 'undefined') {
    length = 1;
  }

  if (length < paramsNumber[0] || paramsNumber[1] < length) {
    result = false;
    $log.invalidParamNumber(
      component.id(),
      component.constructor.name,
      methodName
    );
  }

  for (i = 0; i < length; i++) {
    param = args[i];
    if (typeof param === 'undefined') {
      if (i < paramsNumber[0]) {
        result = false;
        $log.invalidParamNumber(
          component.id(),
          component.constructor.name,
          methodName
        );
      } else {
        continue;
      }
    } else {
      if (!$metamodel.isValidType(param, paramsType[i])) {
        result = false;
        $log.invalidParamType(
          component.id(),
          component.constructor.name,
          methodName,
          paramsName[i]
        );
      }
    }
  }

  return result;
};

/**
 * @method checkOutput
 * @param {Object} params
 * @returns {Boolean} true if conditions on ouput are compliant with the metamodel
 * @description Check if conditions on output are compliant with the metamodel
 */
exports.checkOutput = function checkOutput(params) {
  params = params || {};

  var component = params.component || null;
  var methodName = params.methodName || '';
  var methodResult = null;
  var componentClassName = '';
  var returnType = null;
  var result = true;

  if (typeof params.methodResult !== 'undefined') {
    methodResult = params.methodResult;
  } else {
    methodResult = undefined;
  }

  if (component.constructor.name === 'Function') {
    componentClassName = component.name;
  } else {
    componentClassName = component.constructor.name;
  }

  returnType = getReturnType(componentClassName, methodName);
  if (!$metamodel.isValidType(methodResult, returnType)) {
    result = false;
    $log.invalidResultType(
      component.id(),
      component.constructor.name,
      methodName,
      JSON.stringify(returnType),
      Array.isArray(methodResult) ? 'array' : typeof methodResult
    );
  }

  return result;
};

/**
 * @method process
 * @param {Object} params params to process
 * {String} component id of the component
 * {String} state state of the component
 * {Array} data parameters to send to the action
 * @description Task processing.
 */
exports.process = function process(params) {
  params = params || {};

  params.id = params.id || '';
  params.component = params.component || '';
  params.state = params.state || '';
  params.data = params.data || [];
  params.context = params.context || null;

  var component = null;
  var currentState = '';
  var actions = [];
  var result = undefined;
  var i = 0;
  var length = 0;
  var componentClassName = false;
  var isProperty = false;
  var isLink = false;
  var isCollection = false;
  var isEvent = false;
  var isMethod = false;
  var behaviors = [];
  var behavior = null;
  var actionFromMemory = null;

  currentState = $state.get(params.component);

  // check state
  if (currentState && currentState.state === 'destroy') {
    $log.invalidUseOfComponent(params.component);
  }

  // case of event processing
  if (params.id) {
    behaviors = $db._Behavior.find({
      _id: params.id
    });

    if (behaviors.length === 0) {
      behavior = behaviors[0];
      component = $component.get(behavior.component);

      if (component) {
        if (component.constructor.name === 'Function') {
          componentClassName = component.name;
        } else {
          componentClassName = component.constructor.name;
        }

        isProperty = $metamodel.isProperty(behavior.state, componentClassName);
        isLink = $metamodel.isLink(behavior.state, componentClassName);
        isCollection = $metamodel.isCollection(
          behavior.state,
          componentClassName
        );
        isEvent = $metamodel.isEvent(behavior.state, componentClassName);
        isMethod = $metamodel.isMethod(behavior.state, componentClassName);

        actionFromMemory = $behavior.get(params.id);
        if (actionFromMemory) {
          action = {
            useCoreAPI: behavior.useCoreAPI,
            context: behavior.context,
            action: actionFromMemory
          };

          actions.push(action);
        }
      }
    }
  } else {
    component = $component.get(params.component);

    if (component) {
      if (component.constructor.name === 'Function') {
        componentClassName = component.name;
      } else {
        componentClassName = component.constructor.name;
      }

      isProperty = $metamodel.isProperty(params.state, componentClassName);
      isLink = $metamodel.isLink(params.state, componentClassName);
      isCollection = $metamodel.isCollection(params.state, componentClassName);
      isEvent = $metamodel.isEvent(params.state, componentClassName);
      isMethod = $metamodel.isMethod(params.state, componentClassName);

      actions = getActions(component, params.state, isEvent);
    }
  }

  if (actions.length) {
    if (
      exports.checkInput({
        component: component,
        methodName: params.state,
        args: params.data
      })
    ) {
      if (isMethod) {
        result = action(
          params.context || component,
          params.state,
          actions[0],
          params.data,
          false
        );

        exports.checkOutput({
          component: component,
          methodName: params.state,
          methodResult: result
        });
      } else {
        length = actions.length;
        for (i = 0; i < length; i++) {
          action(
            params.context || component,
            params.state,
            actions[i],
            params.data,
            true
          );
        }

        $state.set(component.id(), params.state, params.data);
      }
    }
  } else {
    if (component && (isEvent || isProperty || isLink || isCollection)) {
      $state.set(component.id(), params.state, params.data);
    }
  }

  return result;
};

},{"./behavior.js":2,"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":10}]},{},[9])(9)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9tc29uLmpzIiwic3JjL3J1bnRpbWUuanMiLCJzcmMvc3RhdGUuanMiLCJzcmMvd29ya2Zsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ24rQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaG9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4cUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1bUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3B0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgc3lzdGVtXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgY29udGFpbnMgU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qIFB1YmxpYyBwcm9wZXJ0aWVzICovXG5cblxuLyoqXG4gKiBTeXN0ZW0gUnVudGltZSBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtfU3lzdGVtfSBzeXN0ZW1cbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBcbntcblx0XCJuYW1lXCI6IFwic3lzdGVtLXJ1bnRpbWVcIixcblx0XCJtYXN0ZXJcIjogZmFsc2UsXG5cdFwidmVyc2lvblwiOiBcIjMuMC4wXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJTeXN0ZW0gUnVudGltZVwiLFxuXHRcInNjaGVtYXNcIjoge1xuXHRcdFwiMWFjMDcxODU2NDFmYTlmXCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfQmVoYXZpb3JcIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9Db21wb25lbnRcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwiY29yZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImFjdGlvblwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcInN0YXRlXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwidXNlQ29yZUFQSVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImNvbnRleHRcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJfaWRcIjogXCIxYWMwNzE4NTY0MWZhOWZcIlxuXHRcdH0sXG5cdFx0XCIxMDRhZDFmNDg1MTgzNzZcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMDRhZDFmNDg1MTgzNzZcIixcblx0XHRcdFwiX25hbWVcIjogXCJfQ2hhbm5lbFwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX0NvbXBvbmVudFwiXG5cdFx0XHRdLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJzZW5kXCI6IFwiZXZlbnRcIixcblx0XHRcdFwiJHN5c3RlbUluc3RhbGxlZFwiOiBcImV2ZW50XCIsXG5cdFx0XHRcIiRzeXN0ZW1SZXNvbHZlZFwiOiBcImV2ZW50XCIsXG5cdFx0XHRcIiRzeXN0ZW1TdGFydGVkXCI6IFwiZXZlbnRcIixcblx0XHRcdFwiJHN5c3RlbVN0b3BwZWRcIjogXCJldmVudFwiLFxuXHRcdFx0XCIkc3lzdGVtVW5pbnN0YWxsZWRcIjogXCJldmVudFwiXG5cdFx0fSxcblx0XHRcIjFjMDBiMTNhMWIxYmM5MlwiOiB7XG5cdFx0XHRcIl9uYW1lXCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX0NvbXBvbmVudFwiXG5cdFx0XHRdLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJtb2RlbFwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcInNjaGVtYVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcIm1ldGhvZFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJtZXRob2RzXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcInByb3BlcnR5XCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjogXCJtZXRob2RcIixcblx0XHRcdFwibGlua1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJsaW5rc1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJjb2xsZWN0aW9uc1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJjb2xsZWN0aW9uXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcImV2ZW50XCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcImV2ZW50c1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJfaWRcIjogXCIxYzAwYjEzYTFiMWJjOTJcIlxuXHRcdH0sXG5cdFx0XCIxMTFkZjExZTJiMTlmZGVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMTFkZjExZTJiMTlmZGVcIixcblx0XHRcdFwiX25hbWVcIjogXCJfQ29tcG9uZW50XCIsXG5cdFx0XHRcIl9pbmhlcml0XCI6IFtdLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc0luZm9cIjogXCJtZXRob2RcIixcblx0XHRcdFwib25cIjogXCJtZXRob2RcIixcblx0XHRcdFwib2ZmXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcInJlcXVpcmVcIjogXCJtZXRob2RcIixcblx0XHRcdFwiZGVzdHJveVwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJpbml0XCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcImVycm9yXCI6IFwiZXZlbnRcIlxuXHRcdH0sXG5cdFx0XCIxNzIzNTE2YTMwMTMyYWNcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9EYXRhYmFzZVwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX0NvbXBvbmVudFwiXG5cdFx0XHRdLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJjb2xsZWN0aW9uc1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJpbnNlcnRcIjogXCJldmVudFwiLFxuXHRcdFx0XCJ1cGRhdGVcIjogXCJldmVudFwiLFxuXHRcdFx0XCJyZW1vdmVcIjogXCJldmVudFwiLFxuXHRcdFx0XCJfaWRcIjogXCIxNzIzNTE2YTMwMTMyYWNcIlxuXHRcdH0sXG5cdFx0XCJmMWExMGQxMDY3ZDFiMjNhXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiZjFhMTBkMTA2N2QxYjIzYVwiLFxuXHRcdFx0XCJfbmFtZVwiOiBcIl9Mb2dcIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9Db21wb25lbnRcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwiYWN0aW9uXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiY29sbGVjdGlvblwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImlkXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiZmllbGRcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJ2YWx1ZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcIm9yZGVyXCI6IFwicHJvcGVydHlcIlxuXHRcdH0sXG5cdFx0XCIxMjY4ZjFkZGRkMWZlYTdcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9Mb2dnZXJcIixcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwibGV2ZWxcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJkZWJ1Z1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJpbmZvXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcIndhcm5cIjogXCJtZXRob2RcIixcblx0XHRcdFwiZXJyb3JcIjogXCJtZXRob2RcIixcblx0XHRcdFwiX2lkXCI6IFwiMTI2OGYxZGRkZDFmZWE3XCJcblx0XHR9LFxuXHRcdFwiMTRjYWExYzQ2NDE0ZWUxXCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfTWVzc2FnZVwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX0NvbXBvbmVudFwiXG5cdFx0XHRdLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJldmVudFwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImZyb21cIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJkYXRhXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiX2lkXCI6IFwiMTRjYWExYzQ2NDE0ZWUxXCJcblx0XHR9LFxuXHRcdFwiMTkzZjExNjZlYjE2NjA5XCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfTWV0YW1vZGVsXCIsXG5cdFx0XHRcIl9pbmhlcml0XCI6IFtcblx0XHRcdFx0XCJfQ29tcG9uZW50XCJcblx0XHRcdF0sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcInNjaGVtYVwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJtb2RlbFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcImNyZWF0ZVwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJfaWRcIjogXCIxOTNmMTE2NmViMTY2MDlcIlxuXHRcdH0sXG5cdFx0XCIxNTc5MzFmN2EzMWI2MWRcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxNTc5MzFmN2EzMWI2MWRcIixcblx0XHRcdFwiX25hbWVcIjogXCJfT1NHaVwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX0NvbXBvbmVudFwiXG5cdFx0XHRdLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJpbnN0YWxsXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcInVuaW5zdGFsbFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJzdG9wXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcInN0YXR1c1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJidW5kbGVcIjogXCJtZXRob2RcIlxuXHRcdH0sXG5cdFx0XCIxMmUyMTFkNGNkMTIwYTZcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMmUyMTFkNGNkMTIwYTZcIixcblx0XHRcdFwiX25hbWVcIjogXCJfUnVudGltZVwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX09TR2lcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwidmVyc2lvblwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcInN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJtZXNzYWdlXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcInJlYWR5XCI6IFwiZXZlbnRcIlxuXHRcdH0sXG5cdFx0XCIxNTg3MTFkNmYyMTVlNGJcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9TdGF0ZVwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwiX2NsYXNzXCI6IGZhbHNlLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcInZhbHVlXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiX2lkXCI6IFwiMTU4NzExZDZmMjE1ZTRiXCJcblx0XHR9LFxuXHRcdFwiMWNiNzYxZmE0NTEwZGNhXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWNiNzYxZmE0NTEwZGNhXCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX1N5c3RlbVwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX1N5c3RlbU9TR2lcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcIm1hc3RlclwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcInZlcnNpb25cIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcInNjaGVtYXNcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJtb2RlbHNcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJiZWhhdmlvcnNcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJ0eXBlc1wiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImNvbXBvbmVudHNcIjogXCJwcm9wZXJ0eVwiXG5cdFx0fSxcblx0XHRcIjE0NWZlMTBjNzUxNDI5OFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE0NWZlMTBjNzUxNDI5OFwiLFxuXHRcdFx0XCJfbmFtZVwiOiBcIl9TeXN0ZW1PU0dpXCIsXG5cdFx0XHRcIl9pbmhlcml0XCI6IFtcblx0XHRcdFx0XCJfQ29tcG9uZW50XCJcblx0XHRcdF0sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcInN0YXRlXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwibG9jYXRpb25cIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJzdG9wXCI6IFwibWV0aG9kXCJcblx0XHR9XG5cdH0sXG5cdFwibW9kZWxzXCI6IHtcblx0XHRcIjE2Njk3MWZkOWQxMDdmZFwiOiB7XG5cdFx0XHRcIl9uYW1lXCI6IFwiX0JlaGF2aW9yXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcImNvbnRleHRcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0XCJjb3JlXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRcImNvbXBvbmVudFwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0fSxcblx0XHRcdFwiYWN0aW9uXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiamF2YXNjcmlwdFwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0fSxcblx0XHRcdFwic3RhdGVcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcIl9pZFwiOiBcIjE2Njk3MWZkOWQxMDdmZFwiXG5cdFx0fSxcblx0XHRcIjEzNWM3MTA3ODgxMGFmMlwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjEzNWM3MTA3ODgxMGFmMlwiLFxuXHRcdFx0XCJfbmFtZVwiOiBcIl9DaGFubmVsXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcInNlbmRcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwibWVzc2FnZVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIkc3lzdGVtSW5zdGFsbGVkXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImlkXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiJHN5c3RlbVJlc29sdmVkXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImlkXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiJHN5c3RlbVVuaW5zdGFsbGVkXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImlkXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiJHN5c3RlbVN0YXJ0ZWRcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaWRcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIkc3lzdGVtU3RvcHBlZFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiMTU4MzIxZGNlZDEwMTRhXCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfQ2xhc3NJbmZvXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcIm1vZGVsXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogdHJ1ZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHt9XG5cdFx0XHR9LFxuXHRcdFx0XCJwcm9wZXJ0eVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJuYW1lXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJvYmplY3RcIlxuXHRcdFx0fSxcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuXHRcdFx0fSxcblx0XHRcdFwibGlua1wiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJuYW1lXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJvYmplY3RcIlxuXHRcdFx0fSxcblx0XHRcdFwibGlua3NcIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiBcImFycmF5XCJcblx0XHRcdH0sXG5cdFx0XHRcIm1ldGhvZFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJuYW1lXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJvYmplY3RcIlxuXHRcdFx0fSxcblx0XHRcdFwibWV0aG9kc1wiOiB7XG5cdFx0XHRcdFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuXHRcdFx0fSxcblx0XHRcdFwiY29sbGVjdGlvblwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJuYW1lXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJvYmplY3RcIlxuXHRcdFx0fSxcblx0XHRcdFwiY29sbGVjdGlvbnNcIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiBcImFycmF5XCJcblx0XHRcdH0sXG5cdFx0XHRcImV2ZW50XCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm5hbWVcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInJlc3VsdFwiOiBcIm9iamVjdFwiXG5cdFx0XHR9LFxuXHRcdFx0XCJldmVudHNcIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiBcImFycmF5XCJcblx0XHRcdH0sXG5cdFx0XHRcIl9pZFwiOiBcIjE1ODMyMWRjZWQxMDE0YVwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiB0cnVlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjoge31cblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiMTIzNzUxY2I1OTFkZTI2XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTIzNzUxY2I1OTFkZTI2XCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX0NvbXBvbmVudFwiLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJvblwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGF0ZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImFjdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwidXNlQ29yZUFQSVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaXNDb3JlXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJib29sZWFuXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwib2ZmXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXRlXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJiZWhhdmlvcklkXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJyZXF1aXJlXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImlkXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiZGVzdHJveVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtdXG5cdFx0XHR9LFxuXHRcdFx0XCJjbGFzc0luZm9cIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiBcIl9DbGFzc0luZm9cIlxuXHRcdFx0fSxcblx0XHRcdFwiaW5pdFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJjb25mXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiZXJyb3JcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZGF0YVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZXJyb3JQYXJhbVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIjE4YTUxMTY5ZDcxMTJkNFwiOiB7XG5cdFx0XHRcIl9uYW1lXCI6IFwiX0RhdGFiYXNlXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcImNvbGxlY3Rpb25zXCI6IHtcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJvYmplY3RcIlxuXHRcdFx0fSxcblx0XHRcdFwiaW5zZXJ0XCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImV2ZW50XCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJkYkluc2VydEV2ZW50XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcInVwZGF0ZVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJldmVudFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZGJVcGRhdGVFdmVudFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJyZW1vdmVcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZXZlbnRcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImRiUmVtb3ZlRXZlbnRcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiX2lkXCI6IFwiMThhNTExNjlkNzExMmQ0XCJcblx0XHR9LFxuXHRcdFwibzFlMWUwMWU2YjQxY2VjM1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIm8xZTFlMDFlNmI0MWNlYzNcIixcblx0XHRcdFwiX25hbWVcIjogXCJfTG9nXCIsXG5cdFx0XHRcImFjdGlvblwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcImRiQWN0aW9uXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJpbnNlcnRcIlxuXHRcdFx0fSxcblx0XHRcdFwiY29sbGVjdGlvblwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcImlkXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0fSxcblx0XHRcdFwiZmllbGRcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0XCJ2YWx1ZVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcImFueVwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcIm9yZGVyXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwibnVtYmVyXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogMFxuXHRcdFx0fSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxNmI5ZDFhYzIyMTZmZmVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxNmI5ZDFhYzIyMTZmZmVcIixcblx0XHRcdFwiX25hbWVcIjogXCJfTG9nZ2VyXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcImxldmVsXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwibG9nXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJ3YXJuXCJcblx0XHRcdH0sXG5cdFx0XHRcImRlYnVnXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJpbmZvXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJ3YXJuXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJlcnJvclwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCIxZDliNjEzOTQxMWFhOTFcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9NZXNzYWdlXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcImV2ZW50XCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0XCJmcm9tXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0XCJkYXRhXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYXJyYXlcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtdXG5cdFx0XHR9LFxuXHRcdFx0XCJfaWRcIjogXCIxZDliNjEzOTQxMWFhOTFcIlxuXHRcdH0sXG5cdFx0XCIxNjI4YzEzYzIyMTUyZTZcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9NZXRhbW9kZWxcIixcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwic2NoZW1hXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm5hbWVcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic2NoZW1hXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiB7fSxcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInJlc3VsdFwiOiBcImFueVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJtb2RlbFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJuYW1lXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1vZGVsXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiB7fSxcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInJlc3VsdFwiOiBcImFueVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJ0eXBlXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm5hbWVcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwidHlwZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjoge30sXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJhbnlcIlxuXHRcdFx0fSxcblx0XHRcdFwiY3JlYXRlXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW11cblx0XHRcdH0sXG5cdFx0XHRcIl9pZFwiOiBcIjE2MjhjMTNjMjIxNTJlNlwiXG5cdFx0fSxcblx0XHRcIjEwMGI5MWVkMjIxMWIxNVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjEwMGI5MWVkMjIxMWIxNVwiLFxuXHRcdFx0XCJfbmFtZVwiOiBcIl9PU0dpXCIsXG5cdFx0XHRcImluc3RhbGxcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwidXJsXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiYXN5bmNcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicmVzdWx0XCI6IFwic3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHRcInVuaW5zdGFsbFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcInN0YXJ0XCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImlkXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwic3RvcFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcInN0YXR1c1wiOiB7XG5cdFx0XHRcdFwicmVzdWx0XCI6IFwib2JqZWN0XCJcblx0XHRcdH0sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcImJ1bmRsZVwiOiB7XG5cdFx0XHRcdFwicmVzdWx0XCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiMTRjN2MxMDViMzFhMTYwXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTRjN2MxMDViMzFhMTYwXCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX1J1bnRpbWVcIixcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwidmVyc2lvblwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IHRydWUsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIjAuMC4wXCJcblx0XHRcdH0sXG5cdFx0XHRcInN5c3RlbVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJwYXJhbXNcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicmVzdWx0XCI6IFwib2JqZWN0XCJcblx0XHRcdH0sXG5cdFx0XHRcIm1lc3NhZ2VcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibXNnXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJtZXNzYWdlXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJyZWFkeVwiOiB7fVxuXHRcdH0sXG5cdFx0XCIxNzdhYzEzNjg5MTYyOWZcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9TdGF0ZVwiLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJzdGF0ZVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0fSxcblx0XHRcdFwidmFsdWVcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0XCJfaWRcIjogXCIxNzdhYzEzNjg5MTYyOWZcIlxuXHRcdH0sXG5cdFx0XCIxNzA1MjFiODg2MTQzODdcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9TeXN0ZW1cIixcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwibmFtZVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0fSxcblx0XHRcdFwibWFzdGVyXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0XCJ2ZXJzaW9uXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIwLjAuMVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcInNjaGVtYXNcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB7fVxuXHRcdFx0fSxcblx0XHRcdFwibW9kZWxzXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjoge31cblx0XHRcdH0sXG5cdFx0XHRcImJlaGF2aW9yc1wiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHt9XG5cdFx0XHR9LFxuXHRcdFx0XCJ0eXBlc1wiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHt9XG5cdFx0XHR9LFxuXHRcdFx0XCJjb21wb25lbnRzXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjoge31cblx0XHRcdH0sXG5cdFx0XHRcIl9pZFwiOiBcIjE3MDUyMWI4ODYxNDM4N1wiXG5cdFx0fSxcblx0XHRcIjFiMjgxMWIwOTIxNDNmNVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFiMjgxMWIwOTIxNDNmNVwiLFxuXHRcdFx0XCJfbmFtZVwiOiBcIl9TeXN0ZW1PU0dpXCIsXG5cdFx0XHRcInN0YXJ0XCI6IHt9LFxuXHRcdFx0XCJzdG9wXCI6IHt9LFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJzdGF0ZVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwibm9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvblwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFwiYmVoYXZpb3JzXCI6IHtcblx0XHRcIjEyZTQ5MTg1OWMxMzkxOFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjEyZTQ5MTg1OWMxMzkxOFwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ2hhbm5lbFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcIiRzeXN0ZW1TdGFydGVkXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uICRzeXN0ZW1TdGFydGVkKGlkKSB7IFxcbiAgdmFyIHN5c3RlbXMgPSBudWxsO1xcbiAgICBcXG4gIGlmIChpZCAhPT0gJ2U4OWM2MTdiNmIxNWQyNCcpIHtcXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgICAgIFxcbiAgICAgIGlmICgkc3RhdGUuZ2V0KCdydW50aW1lJykgJiYgJHN0YXRlLmdldCgncnVudGltZScpLnN0YXRlID09PSAncmVhZHknKSB7ICAgIFxcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggKyAxID09PSAkZGIuX1N5c3RlbS5jb3VudCgpKSB7XFxuICAgICAgICAgICRjb21wb25lbnQuZ2V0KCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjFlOTAyMWJkNGUxYmM2ZVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFlOTAyMWJkNGUxYmM2ZVwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ2hhbm5lbFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcIiRzeXN0ZW1JbnN0YWxsZWRcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gJHN5c3RlbUluc3RhbGxlZChpZCkge1xcbiAgdmFyIHN5c3RlbXMgPSBudWxsLFxcbiAgICBkZXBlbmRlbmNpZXMgPSBbXSxcXG4gICAgbWFzdGVyID0gW10sXFxuICAgIGNhblN0YXJ0ID0gdHJ1ZTtcXG5cXG4gIGlmIChpZCAhPT0gJ2U4OWM2MTdiNmIxNWQyNCcpIHtcXG4gICAgLy8gaWYgYWxsIHN5c3RlbXMgYXJlIGluc3RhbGxlZFxcbiAgICBzeXN0ZW1zID0gJGRiLl9TeXN0ZW0uZmluZCh7fSk7XFxuXFxuICAgIHN5c3RlbXMuZm9yRWFjaChmdW5jdGlvbiAoc3lzdGVtKSB7XFxuICAgICAgdmFyIHN5cyA9IHRoaXMucmVxdWlyZShzeXN0ZW0uX2lkKTtcXG4gICAgICBpZiAoc3lzICYmIHN5cy5zdGF0ZSAmJiBzeXMuc3RhdGUoKSA9PT0gJ25vbmUnKSB7XFxuICAgICAgICBjYW5TdGFydCA9IGZhbHNlO1xcbiAgICAgIH1cXG4gICAgfS5iaW5kKHRoaXMpKTtcXG5cXG4gICAgLy8gc3RhcnQgYWxsIHRoZSBzeXN0ZW1zXFxuICAgIGlmIChjYW5TdGFydCkge1xcbiAgICAgIGRlcGVuZGVuY2llcyA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgJ21hc3Rlcic6IGZhbHNlXFxuICAgICAgfSk7XFxuXFxuICAgICAgZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xcbiAgICAgICAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShkZXAuX2lkKTtcXG4gICAgICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXG4gICAgICAgIGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ3Jlc29sdmVkJykge1xcbiAgICAgICAgICBzeXN0ZW0uc3RhdGUoJ3N0YXJ0aW5nJyk7XFxuICAgICAgICAgIHN5c3RlbS5zdGFydCgpO1xcbiAgICAgICAgICBjaGFubmVsLiRzeXN0ZW1TdGFydGVkKGRlcC5faWQpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgICAgICAgfVxcbiAgICAgIH0uYmluZCh0aGlzKSk7XFxuXFxuICAgICAgbWFzdGVyID0gJGRiLl9TeXN0ZW0uZmluZCh7XFxuICAgICAgICAnbWFzdGVyJzogdHJ1ZVxcbiAgICAgIH0pO1xcblxcbiAgICAgIG1hc3Rlci5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcXG4gICAgICAgIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoZGVwLl9pZCk7XFxuICAgICAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICAgICAgICBpZiAoc3lzdGVtICYmIHN5c3RlbS5zdGF0ZSAmJiBzeXN0ZW0uc3RhdGUoKSA9PT0gJ3Jlc29sdmVkJykge1xcbiAgICAgICAgICBzeXN0ZW0uc3RhdGUoJ3N0YXJ0aW5nJyk7XFxuICAgICAgICAgIHN5c3RlbS5zdGFydCgpO1xcbiAgICAgICAgICBjaGFubmVsLiRzeXN0ZW1TdGFydGVkKGRlcC5faWQpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgICAgICAgfVxcbiAgICAgIH0uYmluZCh0aGlzKSk7XFxuICAgIH1cXG4gIH1cXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjE1NTE0MWU0MDMxMmNkOFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE1NTE0MWU0MDMxMmNkOFwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ2xhc3NJbmZvXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwiY29sbGVjdGlvblwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjb2xsZWN0aW9uKG5hbWUpIHtcXG4gIHZhciByZXN1bHQgPSB7fTtcXG4gIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnY29sbGVjdGlvbicpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxZjY5NDFhMGMwMTJjMWZcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxZjY5NDFhMGMwMTJjMWZcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImNvbGxlY3Rpb25zXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNvbGxlY3Rpb25zKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICB9XFxuICB9XFxuXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjFlZjcxMWI0MTcxYzg0OVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFlZjcxMWI0MTcxYzg0OVwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ2xhc3NJbmZvXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwiZXZlbnRcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXZlbnQobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcblxcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdldmVudCcpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxYmFlNTFiNmVkMWQyNWNcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxYmFlNTFiNmVkMWQyNWNcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudHMobmFtZSkge1xcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcblxcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ2V2ZW50Jykge1xcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjE5YWMyMTI1MjIxNTI4YlwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE5YWMyMTI1MjIxNTI4YlwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ2xhc3NJbmZvXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwibGlua1wiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsaW5rKG5hbWUpIHtcXG4gIHZhciByZXN1bHQgPSB7fTtcXG5cXG4gIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnbGluaycpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxN2VkMjFkZmMwMWI4ZThcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxN2VkMjFkZmMwMWI4ZThcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImxpbmtzXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGxpbmtzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdsaW5rJykge1xcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICB9XFxuICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTFjZTMxOGE1NjFhYzYxXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTFjZTMxOGE1NjFhYzYxXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9DbGFzc0luZm9cIixcblx0XHRcdFwic3RhdGVcIjogXCJtZXRob2RcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWV0aG9kKG5hbWUpIHtcXG4gIHZhciByZXN1bHQgPSB7fTtcXG4gIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnbWV0aG9kJykge1xcbiAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICB9XFxuICBcXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTJmZjIxOTBhMDE4MDQ2XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTJmZjIxOTBhMDE4MDQ2XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9DbGFzc0luZm9cIixcblx0XHRcdFwic3RhdGVcIjogXCJtZXRob2RzXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1ldGhvZHMobmFtZSkge1xcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcblxcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ21ldGhvZCcpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxMDI4ZDE2ODFlMWZkNThcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMDI4ZDE2ODFlMWZkNThcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInByb3BlcnRpZXNcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcHJvcGVydGllcyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAncHJvcGVydHknKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH0gcmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxOGVlYjEwYzUzMTkzNjhcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxOGVlYjEwYzUzMTkzNjhcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIHByb3BlcnR5KG5hbWUpIHtcXG4gIHZhciByZXN1bHQgPSB7fTtcXG5cXG4gIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAncHJvcGVydHknKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMWJhNzIxMjAxMTE0YjZiXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWJhNzIxMjAxMTE0YjZiXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9Db21wb25lbnRcIixcblx0XHRcdFwic3RhdGVcIjogXCJkZXN0cm95XCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGRlc3Ryb3koKSB7XFxuICAkY29tcG9uZW50LmRlc3Ryb3kodGhpcy5pZCgpKTtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZSxcblx0XHRcdFwidXNlQ29yZUFQSVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjE1NDg2MTg2ZjQxYTQ4Y1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE1NDg2MTg2ZjQxYTQ4Y1wiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ29tcG9uZW50XCIsXG5cdFx0XHRcInN0YXRlXCI6IFwib2ZmXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIG9mZihzdGF0ZSwgYmVoYXZpb3JJZCkge1xcbiAgdmFyIGFyZ3MgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIG51bUluamVjdGVkUGFyYW1zID0gOCxcXG4gICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcXG5cXG4gIGlmICgkaGVscGVyLmlzT25Ob2RlKCkpIHtcXG4gICAgbnVtSW5qZWN0ZWRQYXJhbXMgPSBudW1JbmplY3RlZFBhcmFtcyArMTtcXG4gIH1cXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGggLSBudW1JbmplY3RlZFBhcmFtczsgaSsrKSB7XFxuICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xcbiAgfVxcblxcbiAgaWYgKCR3b3JrZmxvdy5jaGVja0lucHV0KHtcXG4gICAgXFxcImNvbXBvbmVudFxcXCI6IHRoaXMsXFxuICAgIFxcXCJtZXRob2ROYW1lXFxcIjogXFxcIm9mZlxcXCIsXFxuICAgIFxcXCJhcmdzXFxcIjogYXJnc1xcbiAgfSkpIHtcXG5cXG4gICAgaWYgKHN0YXRlIHx8IGJlaGF2aW9ySWQpIHtcXG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIHRoaXMuY29uc3RydWN0b3IubmFtZSkpIHtcXG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICBcXFwiYmVoYXZpb3JJZFxcXCI6IGJlaGF2aW9ySWQsXFxuICAgICAgICAgIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKSxcXG4gICAgICAgICAgXFxcInN0YXRlXFxcIjogc3RhdGVcXG4gICAgICAgIH0pO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLndhcm4oXFxcImludm9rZSBcXFxcJ29mZlxcXFwnIG1ldGhvZCBvZiBjb21wb25lbnQgJ1xcXCIgKyB0aGlzLmlkKCkgKyBcXFwiJyB3aXRoIGFuIGludmFsaWQgc3RhdGUgJ1xcXCIgKyBzdGF0ZSArIFxcXCInXFxcIik7XFxuICAgICAgfVxcbiAgICB9IGVsc2Uge1xcbiAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgXFxcImNvbXBvbmVudElkXFxcIjogdGhpcy5pZCgpXFxuICAgICAgfSk7XFxuICAgIH1cXG4gIH1cXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZSxcblx0XHRcdFwidXNlQ29yZUFQSVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjFkYTBhMTc4NzgxMDRjM1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFkYTBhMTc4NzgxMDRjM1wiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ29tcG9uZW50XCIsXG5cdFx0XHRcInN0YXRlXCI6IFwicmVxdWlyZVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiByZXF1aXJlKGlkKSB7XFxuICByZXR1cm4gJGNvbXBvbmVudC5nZXQoaWQpO1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiZDE1MjYzMWMzNTgxM2YyZVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImQxNTI2MzFjMzU4MTNmMmVcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NvbXBvbmVudFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImNsYXNzSW5mb1wiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjbGFzc0luZm8oKSB7IFxcblxcdGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcXG5cXHRsZXQgcmVzdWx0O1xcblxcdFxcblxcdGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcXG5cXHQgIHJlc3VsdCA9IHRoaXMucmVxdWlyZShjbGFzc05hbWUgKyAnSW5mbycpO1xcblxcdH1cXG5cXHRcXG5cXHRyZXR1cm4gcmVzdWx0O1xcbn1cIixcblx0XHRcdFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjFhNTExMWQxN2ExODAwY1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFhNTExMWQxN2ExODAwY1wiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfRGF0YWJhc2VcIixcblx0XHRcdFwic3RhdGVcIjogXCJjb2xsZWN0aW9uc1wiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjb2xsZWN0aW9ucygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJztcXG5cXG4gIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gJGRiLnN0b3JlKSB7XFxuICAgIGlmICgkZGIuc3RvcmUuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpKSB7XFxuICAgICAgcmVzdWx0W2NvbGxlY3Rpb25OYW1lXSA9ICRkYltjb2xsZWN0aW9uTmFtZV07XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxZDk5MzEwOGZhMThlZjJcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxZDk5MzEwOGZhMThlZjJcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0xvZ2dlclwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImRlYnVnXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHtcXG4gIGlmICh0aGlzLmxldmVsKCkgPT09ICdkZWJ1ZycpIHtcXG4gICAgY29uc29sZS5sb2coJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gIH1cXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxYTM3YTE4OGUxMWZlNzNcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxYTM3YTE4OGUxMWZlNzNcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0xvZ2dlclwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImVycm9yXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcXG4gIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxZWRkMjFlMTJhMTY1MzRcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxZWRkMjFlMTJhMTY1MzRcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0xvZ2dlclwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImluZm9cIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgfVxcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjE0MWYyMTQzZDMxMjJhNFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE0MWYyMTQzZDMxMjJhNFwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfTG9nZ2VyXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwibGV2ZWxcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGV2ZWwodmFsKSB7XFxuICAkbG9nLmxldmVsKHZhbCk7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxOTI0MDFiYWIyMTMwNGVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxOTI0MDFiYWIyMTMwNGVcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0xvZ2dlclwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcIndhcm5cIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnd2FybicgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgfVxcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjExZmM3MTVlMmYxYTMxZVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjExZmM3MTVlMmYxYTMxZVwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfTWV0YW1vZGVsXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwiY3JlYXRlXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNyZWF0ZSgpIHtcXG4gICRtZXRhbW9kZWwuY3JlYXRlKCk7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxMjMyZjFmMTA3MTQyY2ZcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMjMyZjFmMTA3MTQyY2ZcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX01ldGFtb2RlbFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcIm1vZGVsXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1vZGVsKG5hbWUsIG1vZGVsKSB7XFxuICByZXR1cm4gJG1ldGFtb2RlbC5tb2RlbChuYW1lLCBtb2RlbCk7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxMzY1NDEyZjY5MTUzZDJcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMzY1NDEyZjY5MTUzZDJcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX01ldGFtb2RlbFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInNjaGVtYVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzY2hlbWEobmFtZSwgc2NoZW1hKSB7XFxuICByZXR1cm4gJG1ldGFtb2RlbC5zY2hlbWEobmFtZSwgc2NoZW1hKTtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZSxcblx0XHRcdFwidXNlQ29yZUFQSVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjE5NGRiMTQ3ZmUxNjFhMlwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE5NGRiMTQ3ZmUxNjFhMlwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfTWV0YW1vZGVsXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwidHlwZVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiB0eXBlKG5hbWUsIHR5cGUpIHtcXG4gIHJldHVybiAkbWV0YW1vZGVsLnR5cGUobmFtZSwgdHlwZSk7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxZWY5NTFmMTQxMWI4OTVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxZWY5NTFmMTQxMWI4OTVcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX09TR2lcIixcblx0XHRcdFwic3RhdGVcIjogXCJpbnN0YWxsXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGluc3RhbGwodXJsLCBhc3luYykge1xcbiAgdmFyIGltcG9ydGVkU3lzdGVtID0gbnVsbCxcXG4gICAgc3lzdGVtID0ge30sXFxuICAgIHN5c3RlbUlkID0gJycsXFxuICAgIGNhbGxiYWNrTG9hZCA9IG51bGwsXFxuICAgIHhociA9IG51bGwsXFxuICAgIHJlc3VsdCA9ICcnLFxcbiAgICBjaGFubmVsID0gJGNvbXBvbmVudC5nZXQoJ2NoYW5uZWwnKTtcXG5cXG4gIGlmICh0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xcbiAgICBpbXBvcnRlZFN5c3RlbSA9IHVybDtcXG4gIH0gZWxzZSB7XFxuICAgIGlmICh1cmwuaW5kZXhPZigneycpID09PSAwKSB7XFxuICAgICAgaW1wb3J0ZWRTeXN0ZW0gPSBKU09OLnBhcnNlKHVybCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGlmIChpbXBvcnRlZFN5c3RlbSkge1xcbiAgICBzeXN0ZW1JZCA9ICRkYi5pbXBvcnRTeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pO1xcbiAgICBpZiAoc3lzdGVtSWQpIHtcXG4gICAgICBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoc3lzdGVtSWQpO1xcblxcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xcbiAgICAgICAgc3lzdGVtLmxvY2F0aW9uKHVybCk7XFxuICAgICAgfVxcbiAgICAgIHN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5c3RlbUlkKTtcXG4gICAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3lzdGVtSWQpO1xcblxcbiAgICAgIHJlc3VsdCA9IHN5c3RlbUlkO1xcbiAgICB9XFxuICB9IGVsc2Uge1xcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBpZiAodXJsLmluZGV4T2YoJy5qc29uJykgIT09IC0xKSB7XFxuICAgICAgICBzeXN0ZW0gPSByZXF1aXJlKGdsb2JhbC5wcm9jZXNzLmVudi5QV0QgKyAnLycgKyB1cmwpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBzeXN0ZW0gPSByZXF1aXJlKHVybCk7XFxuICAgICAgfVxcbiAgICAgIHN5c3RlbUlkID0gJGRiLmltcG9ydFN5c3RlbShzeXN0ZW0pO1xcbiAgICAgIHN5c3RlbSA9IHRoaXMucmVxdWlyZShzeXN0ZW1JZCk7XFxuXFxuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgICBzeXN0ZW0ubG9jYXRpb24odXJsKTtcXG4gICAgICB9XFxuICAgICAgc3lzdGVtLnN0YXRlKCdpbnN0YWxsZWQnKTtcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3lzdGVtSWQpO1xcbiAgICAgIHN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXN0ZW1JZCk7XFxuXFxuICAgICAgcmVzdWx0ID0gc3lzdGVtSWQ7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XFxuICAgICAgY2FsbGJhY2tMb2FkID0gZnVuY3Rpb24gY2FsbGJhY2tMb2FkKHN5c3RlbSwgdXJsKSB7XFxuICAgICAgICB2YXIgc3lzSWQgPSAkZGIuaW1wb3J0U3lzdGVtKHN5c3RlbSksXFxuICAgICAgICAgIHN5cyA9ICRjb21wb25lbnQuZ2V0KHN5c0lkKSxcXG4gICAgICAgICAgY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XFxuXFxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcXG4gICAgICAgICAgc3lzLmxvY2F0aW9uKHVybCk7XFxuICAgICAgICB9XFxuICAgICAgICBzeXMuc3RhdGUoJ2luc3RhbGxlZCcpO1xcbiAgICAgICAgY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5c0lkKTtcXG4gICAgICAgIHN5cy5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gICAgICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5c0lkKTtcXG5cXG4gICAgICAgIHJlc3VsdCA9IHN5c0lkO1xcbiAgICAgIH07XFxuXFxuICAgICAgaWYgKGFzeW5jKSB7XFxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgfHwgeGhyLnN0YXR1cyA9PT0gMCkge1xcbiAgICAgICAgICAgICAgY2FsbGJhY2tMb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSwgdXJsKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuICAgICAgICB4aHIuc2VuZChudWxsKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDApIHtcXG4gICAgICAgICAgY2FsbGJhY2tMb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSwgdXJsKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWUsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxNGMxNTE3YjcxMWNiNzhcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxNGMxNTE3YjcxMWNiNzhcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX09TR2lcIixcblx0XHRcdFwic3RhdGVcIjogXCJ1bmluc3RhbGxcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gdW5pbnN0YWxsKGlkKSB7XFxuICB2YXIgc2VhcmNoID0ge30sXFxuICAgIHN5c3RlbSA9IG51bGwsXFxuICAgIGJlaGF2aW9ySWQgPSAnJyxcXG4gICAgY29sbGVjdGlvbiA9ICcnLFxcbiAgICBjb21wb25lbnRJZCA9ICcnLFxcbiAgICBsZW5ndGggPSAwLFxcbiAgICBpID0gMCxcXG4gICAgY29yZUNvbXBvbmVudHMgPSBbJ2FkbWluJywgJ2NoYW5uZWwnLCAnZGInLCAnbG9nZ2VyJywgJ21ldGFtb2RlbCcsICdydW50aW1lJ107XFxuXFxuICBzZWFyY2ggPSAkZGIuX1N5c3RlbS5maW5kKHtcXG4gICAgJ19pZCc6IGlkXFxuICB9KTtcXG5cXG4gIGlmIChzZWFyY2gubGVuZ3RoKSB7XFxuICAgIHN5c3RlbSA9IHNlYXJjaFswXTtcXG4gICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xcbiAgICBpZiAoc3lzdGVtLmJlaGF2aW9ycykge1xcbiAgICAgIGZvciAoYmVoYXZpb3JJZCBpbiBzeXN0ZW0uYmVoYXZpb3JzKSB7XFxuICAgICAgICAkZGIuX0JlaGF2aW9yLnJlbW92ZSh7XFxuICAgICAgICAgICdfaWQnOiBzeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdLl9pZFxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC8vIHJlbW92ZSBjb21wb25lbnRzXFxuICAgIGlmIChzeXN0ZW0uY29tcG9uZW50cykge1xcbiAgICAgIGZvciAoY29sbGVjdGlvbiBpbiBzeXN0ZW0uY29tcG9uZW50cykge1xcbiAgICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBzeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uXSkge1xcbiAgICAgICAgICBpZiAoY29yZUNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnRJZCkgPT09IC0xKSB7XFxuICAgICAgICAgICAgJGRiW2NvbGxlY3Rpb25dLnJlbW92ZSh7XFxuICAgICAgICAgICAgICAnX2lkJzogY29tcG9uZW50SWRcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgaWYgKHRoaXMucmVxdWlyZShpZCkgJiYgdGhpcy5yZXF1aXJlKGlkKS5zdGF0ZSkge1xcbiAgICB0aGlzLnJlcXVpcmUoaWQpLnN0YXRlKCd1bmluc3RhbGxlZCcpO1xcbiAgICB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKS4kc3lzdGVtVW5pbnN0YWxsZWQoaWQpO1xcbiAgfVxcbn1cIixcblx0XHRcdFwidXNlQ29yZUFQSVwiOiB0cnVlLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTA1ZjIxOWM2ODEzNjQzXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTA1ZjIxOWM2ODEzNjQzXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9PU0dpXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwic3RhcnRcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3RhcnQoaWQpIHtcXG4gIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoaWQpLFxcbiAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcgfHwgc3lzdGVtLnN0YXRlKCkgPT09ICdpbnN0YWxsZWQnKSB7XFxuICAgIHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gICAgaWYgKHN5c3RlbS5zdGFydCkge1xcbiAgICAgIHN5c3RlbS5zdGFydCgpO1xcbiAgICB9XFxuICAgIGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoaWQpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgfVxcbn1cIixcblx0XHRcdFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjFhODFhMWYwMGQxNzI2OVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFhODFhMWYwMGQxNzI2OVwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfT1NHaVwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInN0b3BcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3RvcChpZCkge1xcbiAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShpZCksXFxuICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXG4gIGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ2FjdGl2ZScpIHtcXG4gICAgc3lzdGVtLnN0YXRlKCdzdG9wcGluZycpO1xcbiAgICBpZiAoc3lzdGVtLnN0b3ApIHtcXG4gICAgICBzeXN0ZW0uc3RvcCgpO1xcbiAgICB9XFxuICAgIGNoYW5uZWwuJHN5c3RlbVN0b3BwZWQoaWQpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKGlkKTtcXG4gIH1cXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogZmFsc2UsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxMTY4NTFiNjAyMTI4ZDFcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMTY4NTFiNjAyMTI4ZDFcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX09TR2lcIixcblx0XHRcdFwic3RhdGVcIjogXCJzdGF0dXNcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3RhdHVzKCkge1xcbiAgdmFyIHJlc3VsdCA9IHt9LFxcbiAgICBzeXN0ZW0gPSBudWxsLFxcbiAgICBsZW5ndGggPSAwLFxcbiAgICBpID0gMDtcXG5cXG4gIHN5c3RlbXMgPSAkZGIuX1N5c3RlbS5maW5kKHt9KTtcXG5cXG4gIGxlbmd0aCA9IHN5c3RlbXMubGVuZ3RoO1xcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgIHN5c3RlbSA9IHN5c3RlbXNbaV07XFxuICAgIHJlc3VsdFtzeXN0ZW0ubmFtZV0gPSB7XFxuICAgICAgJ2lkJzogc3lzdGVtLl9pZCxcXG4gICAgICAnc3RhdGUnOiBzeXN0ZW0uc3RhdGUsXFxuICAgICAgJ25hbWUnOiBzeXN0ZW0ubmFtZSxcXG4gICAgICAndmVyc2lvbic6IHN5c3RlbS52ZXJzaW9uLFxcbiAgICAgICdsb2NhdGlvbic6IHN5c3RlbS5sb2NhdGlvbixcXG4gICAgICAnbWFzdGVyJzogc3lzdGVtLm1hc3RlclxcbiAgICB9O1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjE5Y2YzMTdkNzIxNzMzMVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE5Y2YzMTdkNzIxNzMzMVwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfT1NHaVwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImJ1bmRsZVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBidW5kbGUoKSB7IFxcblxcdHZhciByZXN1bHQgPSAkZGIuZXhwb3J0U3lzdGVtKCk7XFxuXFx0cmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjEzMDEwMTY3ZjMxM2Y4N1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjEzMDEwMTY3ZjMxM2Y4N1wiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfUnVudGltZVwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInN5c3RlbVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeXN0ZW0ocGFyYW1zKSB7XFxuICB2YXIgUnVudGltZVN5c3RlbSA9IG51bGwsXFxuICAgIHN5c3RlbSA9IHt9LFxcbiAgICBzeXN0ZW1JZCA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgY29uZiA9IHt9O1xcblxcbiAgaWYgKHBhcmFtcykge1xcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3N0cmluZycpIHtcXG4gICAgICBjb25mLm1hc3RlciA9IHRydWU7XFxuICAgICAgY29uZi5uYW1lID0gcGFyYW1zO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIGNvbmYgPSBwYXJhbXM7XFxuICAgICAgY29uZi5tYXN0ZXIgPSB0cnVlO1xcbiAgICB9XFxuICAgIFJ1bnRpbWVTeXN0ZW0gPSB0aGlzLnJlcXVpcmUoJ19TeXN0ZW0nKTtcXG4gICAgc3lzdGVtID0gbmV3IFJ1bnRpbWVTeXN0ZW0oY29uZik7XFxuICAgIHN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XFxuICB9IGVsc2Uge1xcbiAgICByZXN1bHQgPSAkZGIuX1N5c3RlbS5maW5kKHtcXG4gICAgICAnbWFzdGVyJzogdHJ1ZVxcbiAgICB9KTtcXG4gICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcXG4gICAgICBzeXN0ZW1JZCA9IHJlc3VsdFswXS5faWQ7XFxuICAgICAgc3lzdGVtID0gJGNvbXBvbmVudC5nZXQoc3lzdGVtSWQpO1xcbiAgICB9XFxuICB9XFxuICByZXR1cm4gc3lzdGVtO1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMWNmYTQxNDVmNjE0ZGE4XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWNmYTQxNDVmNjE0ZGE4XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9SdW50aW1lXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwibWVzc2FnZVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXNzYWdlKG1zZykgeyBcXG4gICRkYi5fTWVzc2FnZS5pbnNlcnQobXNnKTtcXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjFjYjlkMTAzZDQxZGQ5N1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFjYjlkMTAzZDQxZGQ5N1wiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJlODljNjE3YjZiMTVkMjRcIixcblx0XHRcdFwic3RhdGVcIjogXCJzdGFydFwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGFydCgpIHtcXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiBET01Db250ZW50TG9hZGVkKGUpIHtcXG4gICAgICB2YXIgc3lzdGVtcyA9IFtdLFxcbiAgICAgICAgc3lzdGVtID0gbnVsbCxcXG4gICAgICAgIHNjcmlwdHMgPSBbXSxcXG4gICAgICAgIHNjcmlwdCA9IG51bGwsXFxuICAgICAgICBsb2dMZXZlbCA9ICd3YXJuJyxcXG4gICAgICAgIGkgPSAwLFxcbiAgICAgICAgbGVuZ3RoID0gMDtcXG4gICAgXFxuICAgICAgc3lzdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN5c3RlbV0nKTtcXG4gICAgICBsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG4gIFxcbiAgICAgIC8vIGxvZ2dlclxcbiAgICAgIHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbbG9nXScpO1xcbiAgICAgIGlmIChzY3JpcHRzLmxlbmd0aCkge1xcbiAgICAgICAgbG9nTGV2ZWwgPSBzY3JpcHRzWzBdLmdldEF0dHJpYnV0ZSgnbG9nJyk7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKGxvZ0xldmVsKTtcXG4gICAgICB9XFxuICBcXG4gICAgICAvLyBzeXN0ZW1zXFxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgXFxuICAgICAgICBpZiAoc3lzdGVtLmdldEF0dHJpYnV0ZSgnYXN5bmMnKSA9PT0gJ2ZhbHNlJykge1xcbiAgICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5pbnN0YWxsKHN5c3RlbS5ocmVmLCBmYWxzZSk7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5pbnN0YWxsKHN5c3RlbS5ocmVmLCB0cnVlKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICBcXG4gICAgICAvLyByZWFkeSBldmVudFxcbiAgICAgIGlmIChsZW5ndGggPT09IDApIHtcXG4gICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLnJlYWR5KCk7XFxuICAgICAgfVxcbiAgfS5iaW5kKHRoaXMpKTtcXG4gIH1cXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRcInR5cGVzXCI6IHtcblx0XHRcImNzc1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImgxZDg4MzExYWMwMTkyMTFcIixcblx0XHRcdFwibmFtZVwiOiBcImNzc1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJkYXRlXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiYzE3Y2FkMWJjM2QxNzc1MlwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZGF0ZVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJqc29uXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiZTFkMjVhMTJlNjcxMjdlZFwiLFxuXHRcdFx0XCJuYW1lXCI6IFwianNvblwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJkYkluc2VydEV2ZW50XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTQ4ZWYxZTE5ODEwZTZkXCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZSxcblx0XHRcdFwibmFtZVwiOiBcImRiSW5zZXJ0RXZlbnRcIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcImNvbGxlY3Rpb25cIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJkb2N1bWVudFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImRlZmF1bHRcIjoge31cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJkYlJlbW92ZUV2ZW50XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTk1MmUxYWM0MjEzZjRhXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJkYlJlbW92ZUV2ZW50XCIsXG5cdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcImNvbGxlY3Rpb25cIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJpZFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcImRiVXBkYXRlRXZlbnRcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxZjVjNDEzMDk3MTE3NTJcIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJuYW1lXCI6IFwiZGJVcGRhdGVFdmVudFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcInNjaGVtYVwiOiB7XG5cdFx0XHRcdFwiY29sbGVjdGlvblwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImlkXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZmllbGRcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ2YWx1ZVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImRlZmF1bHRcIjogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcImRiQWN0aW9uXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiZTE5NTBlMTZmMjkxNGRhOVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcIm5hbWVcIjogXCJkYkFjdGlvblwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcInZhbHVlXCI6IFtcblx0XHRcdFx0XCJpbnNlcnRcIixcblx0XHRcdFx0XCJ1cGRhdGVcIixcblx0XHRcdFx0XCJyZW1vdmVcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0XCJjb2xsZWN0aW9uXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiZDFjMGQwMTMwYzYxNjE5OVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcInNjaGVtYVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJyZWFkT25seVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYXJyYXlcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibGFiZWxcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJlcnJvclBhcmFtXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiZTE5ODc2MWZjMGIxYWU4YVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZXJyb3JQYXJhbVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcInNjaGVtYVwiOiB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImVycm9yXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJldmVudFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImcxNjY4ZDFkZTJkMWZmNmZcIixcblx0XHRcdFwibmFtZVwiOiBcImV2ZW50XCIsXG5cdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFwic2NoZW1hXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBbXG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlclwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiaHRtbFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcInkxNjFjMjEzMjBiMTFhY2JcIixcblx0XHRcdFwibmFtZVwiOiBcImh0bWxcIixcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiamF2YXNjcmlwdFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcInMxM2Q0YzFmZGY5MTY1MDRcIixcblx0XHRcdFwibmFtZVwiOiBcImphdmFzY3JpcHRcIixcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwibGlua1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcInAxMjQ2MDE4MDFkMWRiZmFcIixcblx0XHRcdFwibmFtZVwiOiBcImxpbmtcIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcInR5cGVcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJyZWFkT25seVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwie3R5cGV9XCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImxhYmVsXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwibG9nXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiZDFmZDE2MWE0YTQxNDlmY1wiLFxuXHRcdFx0XCJuYW1lXCI6IFwibG9nXCIsXG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwidmFsdWVcIjogW1xuXHRcdFx0XHRcImRlYnVnXCIsXG5cdFx0XHRcdFwiaW5mb1wiLFxuXHRcdFx0XHRcIndhcm5cIixcblx0XHRcdFx0XCJlcnJvclwiXG5cdFx0XHRdLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwibWVzc2FnZVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImwxM2IwNjFhYzU3MTI3MmRcIixcblx0XHRcdFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcImV2ZW50XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZnJvbVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJkYXRhXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJhcnJheVwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIm1ldGhvZFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIngxMjI3MjE4ZWVkMWYzZTlcIixcblx0XHRcdFwibmFtZVwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcInNjaGVtYVwiOiB7XG5cdFx0XHRcdFwicmVzdWx0XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcInBhcmFtc1wiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFtcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJvc2dpU3RhdGVzXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwicTFmMGNhMTIwZmMxM2ZiM1wiLFxuXHRcdFx0XCJuYW1lXCI6IFwib3NnaVN0YXRlc1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcInZhbHVlXCI6IFtcblx0XHRcdFx0XCJub25lXCIsXG5cdFx0XHRcdFwiaW5zdGFsbGVkXCIsXG5cdFx0XHRcdFwicmVzb2x2ZWRcIixcblx0XHRcdFx0XCJzdGFydGluZ1wiLFxuXHRcdFx0XHRcImFjdGl2ZVwiLFxuXHRcdFx0XHRcInN0b3BwaW5nXCIsXG5cdFx0XHRcdFwidW5pbnN0YWxsZWRcIlxuXHRcdFx0XSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcInBhcmFtZXRlclwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImUxYjE4ZTE2YzZjMTk1YWRcIixcblx0XHRcdFwibmFtZVwiOiBcInBhcmFtZXRlclwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcInNjaGVtYVwiOiB7XG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibmFtZVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcInR5cGVcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImRlZmF1bHRcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInt0eXBlfVwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJwcm9wZXJ0eVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImExNmEzYTFhZTA1MWE1NWRcIixcblx0XHRcdFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFwic2NoZW1hXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwicmVhZE9ubHlcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJib29sZWFuXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImRlZmF1bHRcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInt0eXBlfVwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJsYWJlbFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcInRleHRcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJjMTM2ZmMxMjlhOTEyZjU0XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJ0ZXh0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRcImNvbXBvbmVudHNcIjoge1xuXHRcdFwiX0NoYW5uZWxcIjoge1xuXHRcdFx0XCJjaGFubmVsXCI6IHtcblx0XHRcdFx0XCJfaWRcIjogXCJjaGFubmVsXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiX0RhdGFiYXNlXCI6IHtcblx0XHRcdFwiZGJcIjoge1xuXHRcdFx0XHRcIl9pZFwiOiBcImRiXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiX0xvZ2dlclwiOiB7XG5cdFx0XHRcImxvZ2dlclwiOiB7XG5cdFx0XHRcdFwiX2lkXCI6IFwibG9nZ2VyXCIsXG5cdFx0XHRcdFwibGV2ZWxcIjogXCJ3YXJuXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiX01ldGFtb2RlbFwiOiB7XG5cdFx0XHRcIm1ldGFtb2RlbFwiOiB7XG5cdFx0XHRcdFwiX2lkXCI6IFwibWV0YW1vZGVsXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiX1J1bnRpbWVcIjoge1xuXHRcdFx0XCJydW50aW1lXCI6IHtcblx0XHRcdFx0XCJfaWRcIjogXCJydW50aW1lXCIsXG5cdFx0XHRcdFwidmVyc2lvblwiOiBcIjMuMC4wXCJcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFwiX2lkXCI6IFwiZTg5YzYxN2I2YjE1ZDI0XCJcbn1cbjtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQHJlcXVpcmVzIG1zb25cbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuXG4gKiBBIGJlaGF2aW9yIGlzIGEgbWVjYW5pc20gdGhhdCBhbGxvdyB1c2VycyB0byBhZGQgYWN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWRcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJG1zb24gPSByZXF1aXJlKCcuL21zb24uanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBzdG9yZSA9IHt9O1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVuYyBhIHN0cmluZ2lmaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgdGhlIGJlaGF2aW9yIHdpbGwgYmUgdHJlYXRlZCBhcyBhIFN5c3RlbSBSdW50aW1lIGNvcmUgYmVoYXZpb3IuXG4gKiBJbiB0aGF0IGNhc2UsIHRoZSBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkIGluIGEgc3lzdGVtIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFN5c3RlbSBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGZ1bmN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgY3JlYXRlZCBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBmdW5jdGlvbiBmcm9tIGEgc3RyaW5nLlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb246XG4gKiAtIHdpbGwgYmUgYSBuYW1lZCBmdW5jdGlvbixcbiAqIC0gaGFzIHRoZSBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgYW5kXG4gKiAtIGNhbiBoYXZlIHNvbWUgY29yZSBtb2R1bGVzIGluamVjdGVkIGFzIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24obmFtZSwgZnVuYywgY29yZSwgdXNlQ29yZUFQSSkge1xuICB2YXIgYmVnaW5Cb2R5ID0gLTE7XG4gIHZhciBmdW5jUGFyYW1zID0gJyc7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHBhcmFtc0NsZWFuID0gW107XG4gIHZhciBmdW5jQm9keSA9ICcnO1xuICB2YXIgaGVhZGVyID0gJyc7XG4gIHZhciBhY3Rpb24gPSBudWxsO1xuICB2YXIgaXNBcnJvd0Z1bmN0aW9uID0gdHJ1ZTtcbiAgdmFyIGlzT25lTGluZSA9IGZhbHNlO1xuICB2YXIgZnVuY3Rpb25OYW1lID0gbmFtZTtcblxuICBpZiAoZnVuY3Rpb25OYW1lLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICBmdW5jdGlvbk5hbWUgPSBuYW1lLnNwbGl0KCcuJylbbmFtZS5zcGxpdCgnLicpLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgaWYgKGZ1bmMudHJpbSgpLmluZGV4T2YoJ2Z1bmN0aW9uJykgPT09IDApIHtcbiAgICBpc0Fycm93RnVuY3Rpb24gPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0Fycm93RnVuY3Rpb24pIHtcbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJz0+Jyk7XG5cbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuICAgIGhlYWRlciA9IGhlYWRlci5yZXBsYWNlKCc9PicsICcnKTtcblxuICAgIGlmIChoZWFkZXIuaW5kZXhPZignKCcpICE9PSAtMSkge1xuICAgICAgZnVuY1BhcmFtcyA9IGhlYWRlclxuICAgICAgICAuc3BsaXQoJygnKVsxXVxuICAgICAgICAucmVwbGFjZSgnKScsICcnKVxuICAgICAgICAudHJpbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnRyaW0oKTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSBmdW5jUGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIHBhcmFtc0NsZWFuLnB1c2gocGFyYW0udHJpbSgpKTtcbiAgICB9KTtcblxuICAgIGZ1bmNCb2R5ID0gZnVuYy5zdWJzdHJpbmcoYmVnaW5Cb2R5ICsgMiwgZnVuYy5sZW5ndGgpLnRyaW0oKTtcblxuICAgIGlmIChmdW5jQm9keS5pbmRleE9mKCd7JykgPT09IDApIHtcbiAgICAgIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDEsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcbiAgICB9XG5cbiAgICBpZiAoZnVuY0JvZHkuaW5kZXhPZignXFxuJykgPT09IC0xKSB7XG4gICAgICBpc09uZUxpbmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc0Fycm93RnVuY3Rpb24gJiYgaXNPbmVMaW5lICYmIGZ1bmNCb2R5LmluZGV4T2YoJ3JldHVybiAnKSA9PT0gLTEpIHtcbiAgICAgIGZ1bmNCb2R5ID0gJ3JldHVybiAnICsgZnVuY0JvZHk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICAgIGhlYWRlciA9IGZ1bmMuc3Vic3RyaW5nKDAsIGJlZ2luQm9keSk7XG5cbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyXG4gICAgICAuc3BsaXQoJygnKVsxXVxuICAgICAgLnJlcGxhY2UoJyknLCAnJylcbiAgICAgIC50cmltKCk7XG5cbiAgICBwYXJhbXMgPSBmdW5jUGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIHBhcmFtc0NsZWFuLnB1c2gocGFyYW0udHJpbSgpKTtcbiAgICB9KTtcblxuICAgIGZ1bmNCb2R5ID0gZnVuYy5zdWJzdHJpbmcoYmVnaW5Cb2R5ICsgMSk7XG4gICAgZnVuY0JvZHkgPSBmdW5jQm9keS5zdWJzdHJpbmcoMCwgZnVuY0JvZHkubGFzdEluZGV4T2YoJ30nKSkudHJpbSgpO1xuICB9XG5cbiAgLy8ga2x1ZGdlIGZvciBCYWJlbFxuICBmdW5jQm9keSA9IGZ1bmNCb2R5LnJlcGxhY2UoL190aGlzL2csICd0aGlzJyk7XG5cbiAgaWYgKHBhcmFtc0NsZWFuWzBdID09PSAnJykge1xuICAgIHBhcmFtc0NsZWFuID0gW107XG4gIH1cblxuICBpZiAodXNlQ29yZUFQSSkge1xuICAgIHBhcmFtc0NsZWFuLnB1c2goJyRjb21wb25lbnQnKTtcbiAgICBwYXJhbXNDbGVhbi5wdXNoKCckZGInKTtcbiAgICBwYXJhbXNDbGVhbi5wdXNoKCckbWV0YW1vZGVsJyk7XG4gICAgcGFyYW1zQ2xlYW4ucHVzaCgnJHdvcmtmbG93Jyk7XG4gICAgcGFyYW1zQ2xlYW4ucHVzaCgnJGJlaGF2aW9yJyk7XG4gICAgcGFyYW1zQ2xlYW4ucHVzaCgnJHN0YXRlJyk7XG4gICAgcGFyYW1zQ2xlYW4ucHVzaCgnJGxvZycpO1xuICAgIHBhcmFtc0NsZWFuLnB1c2goJyRoZWxwZXInKTtcbiAgfVxuXG4gIGlmICgkaGVscGVyLmlzT25Ob2RlKCkpIHtcbiAgICBwYXJhbXNDbGVhbi5wdXNoKCdyZXF1aXJlJyk7XG4gIH1cblxuICBpZiAocGFyYW1zQ2xlYW5bMF0gIT09ICcnKSB7XG4gICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ19fYWN0aW9uJyxcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgIGZ1bmN0aW9uTmFtZSArXG4gICAgICAgICcgKCcgK1xuICAgICAgICBwYXJhbXNDbGVhbi5qb2luKCcsICcpICtcbiAgICAgICAgXCIpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbignXCIgK1xuICAgICAgICBwYXJhbXNDbGVhbi5qb2luKFwiJywgJ1wiKSArXG4gICAgICAgIFwiJywgX19hY3Rpb24pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIlxuICAgICkoZnVuY0JvZHkpO1xuICB9IGVsc2Uge1xuICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX2FjdGlvbicsXG4gICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICBmdW5jdGlvbk5hbWUgK1xuICAgICAgICAnICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihfX2FjdGlvbikuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICApKGZ1bmNCb2R5KTtcbiAgfVxuXG4gIHJldHVybiBhY3Rpb247XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgU3lzdGVtIFJ1bnRpbWUgY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IG5ldyBjb250ZXh0IG9mIHRoZSBiZWhhdmlvclxuICogQHJldHVybnMge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2VcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBiZWhhdmlvciB0aGF0IHdpbGwgYmUgc3RvcmVkIGluIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuYWRkID0gZnVuY3Rpb24gYWRkKGlkLCBzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBjb3JlLCBjb250ZXh0KSB7XG4gIHZhciBiZWhhdmlvcklkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIHZhciBzdHJBY3Rpb24gPSBhY3Rpb24udG9TdHJpbmcoKTtcblxuICBpZiAodHlwZW9mIGNvcmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29yZSA9IGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgdXNlQ29yZUFQSSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1c2VDb3JlQVBJID0gZmFsc2U7XG4gIH1cblxuICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihzdGF0ZSwgc3RyQWN0aW9uLCBjb3JlLCB1c2VDb3JlQVBJKTtcblxuICBzdG9yZVtiZWhhdmlvcklkXSA9IGFjdGlvbjtcblxuICAkZGIuX0JlaGF2aW9yLmluc2VydCh7XG4gICAgX2lkOiBiZWhhdmlvcklkLFxuICAgIGNvbXBvbmVudDogaWQsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogc3RyQWN0aW9uLFxuICAgIHVzZUNvcmVBUEk6IHVzZUNvcmVBUEksXG4gICAgY29yZTogY29yZSxcbiAgICBjb250ZXh0OiBjb250ZXh0XG4gIH0pO1xuXG4gIHJldHVybiBiZWhhdmlvcklkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICoge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3IgKG9wdGlvbmFsKVxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgcGFyYW1zLmJlaGF2aW9ySWQgPSBwYXJhbXMuYmVoYXZpb3JJZCB8fCAnJztcbiAgcGFyYW1zLmNvbXBvbmVudElkID0gcGFyYW1zLmNvbXBvbmVudElkIHx8ICcnO1xuICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG5cbiAgaWYgKHBhcmFtcy5jb21wb25lbnRJZCkge1xuICAgIGlmIChwYXJhbXMuYmVoYXZpb3JJZCkge1xuICAgICAgJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICBfaWQ6IHBhcmFtcy5iZWhhdmlvcklkLFxuICAgICAgICBjb21wb25lbnQ6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgc3RhdGU6IHBhcmFtcy5zdGF0ZVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgc3RvcmVbcGFyYW1zLmJlaGF2aW9ySWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zLnN0YXRlKSB7XG4gICAgICAgIHJlc3VsdCA9ICRkYi5fQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgICBzdGF0ZTogcGFyYW1zLnN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgIGNvbXBvbmVudDogcGFyYW1zLmNvbXBvbmVudElkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IGZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgZGVsZXRlIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgYWN0aW9ucyB0aGF0IGhhdmUgdG8gYmUgZXhlY3V0ZWQgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IGFuZCBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5nZXRBY3Rpb25zID0gZnVuY3Rpb24gZ2V0QWN0aW9ucyhpZCwgc3RhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgZGJSZXN1bHQgPSBbXTtcbiAgdmFyIGFjdGlvbiA9IG51bGw7XG5cbiAgZGJSZXN1bHQgPSAkZGIuX0JlaGF2aW9yLmZpbmQoe1xuICAgIGNvbXBvbmVudDogaWQsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pO1xuXG4gIGRiUmVzdWx0LmZvckVhY2goZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICBhY3Rpb24gPSBzdG9yZVtiZWhhdmlvclskbXNvbi5JRF1dO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWN0aW9uID0gY3JlYXRlRnVuY3Rpb24oXG4gICAgICAgIGJlaGF2aW9yLnN0YXRlLFxuICAgICAgICBiZWhhdmlvci5hY3Rpb24sXG4gICAgICAgIGJlaGF2aW9yLmNvcmUsXG4gICAgICAgIGJlaGF2aW9yLnVzZUNvcmVBUElcbiAgICAgICk7XG4gICAgICBzdG9yZVtiZWhhdmlvclskbXNvbi5JRF1dID0gYWN0aW9uO1xuICAgIH1cbiAgICByZXN1bHQucHVzaCh7XG4gICAgICB1c2VDb3JlQVBJOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgY29udGV4dDogYmVoYXZpb3IuY29udGV4dCxcbiAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgc3RvcmVkIGluIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcmV0dXJucyB7QmVoYXZpb3J9IHRoZSBiZWhhdmlvclxuICogQGRlc2NyaXB0aW9uIEdldCBhIGJlaGF2aW9yIGJ5IGl0cyBpZFxuICovXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldChpZCkge1xuICByZXR1cm4gc3RvcmVbaWRdO1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAcmVxdWlyZXMgbG9nXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEByZXF1aXJlcyBtc29uXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY29tcG9uZW50cy5cbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IFN5c3RlbSBSdW50aW1lLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkbXNvbiA9IHJlcXVpcmUoJy4vbXNvbi5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxudmFyIHN0b3JlID0ge307XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBjbGFzcyBfQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgbWFueSBtZXRob2RzIG9mIEFycmF5IENsYXNzXG4gKi9cbmZ1bmN0aW9uIF9BcnJheShjb25mKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIGFyckRiID0gW107XG4gIHZhciB0eXBlID0gJyc7XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgY2xhc3NJZCA9ICcnO1xuICB2YXIgcHJvcGVydHlOYW1lID0gJyc7XG4gIHZhciBpc1JlYWRPbmx5ID0gZmFsc2U7XG4gIHZhciBpc0NsYXNzTmFtZSA9IGZhbHNlO1xuXG4gIGNvbmYgPSBjb25mIHx8IHt9O1xuICB0eXBlID0gY29uZi50eXBlIHx8ICcnO1xuICBpZCA9IGNvbmYuaWQgfHwgJyc7XG4gIHByb3BlcnR5TmFtZSA9IGNvbmYucHJvcGVydHlOYW1lIHx8ICcnO1xuICBhcnJEYiA9IGNvbmYuYXJyIHx8IFtdO1xuICBjbGFzc0lkID0gY29uZi5jbGFzc0lkIHx8ICcnO1xuXG4gIGlmICh0eXBlb2YgY29uZi5yZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpc1JlYWRPbmx5ID0gY29uZi5yZWFkT25seTtcbiAgfVxuXG4gIGlzQ2xhc3NOYW1lID0gJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKTtcblxuICAvLyBpbml0XG4gIGFyckRiLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzQ2xhc3NOYW1lKSB7XG4gICAgICBhcnIucHVzaCgkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnIucHVzaCh2YWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvcHlcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIGNvcHkgdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBfY29weSgpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gICAgYXJyRGIuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmIChpc0NsYXNzTmFtZSkge1xuICAgICAgICBhcnJbaV0gPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJbaV0gPSB2YWw7XG4gICAgICB9XG4gICAgICBpID0gaSArIDE7XG4gICAgfSk7XG5cbiAgICBmb3IgKGogPSBpOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgIGRlbGV0ZSBhcnJbal07XG4gICAgfVxuICAgIGFyci5sZW5ndGggPSBhcnJEYi5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfYWRkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWwgdmFsdWUgdG8gYWRkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb24gdHlwZSBvZiBhY3Rpb25cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkZWxldGVDb3VudFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gYWRkIGFuIGl0ZW0gaW4gdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBfYWRkKHZhbCwgYWN0aW9uLCBzdGFydCwgZGVsZXRlQ291bnQpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGRlbCA9IFtdO1xuXG4gICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICBpZiAoaXNDbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlKSkge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwdXNoJzpcbiAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgYXJyRGIudW5zaGlmdCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdzcGxpY2UnOlxuICAgICAgICAgICAgICBkZWwgPSBhcnJEYi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB2YWwpO1xuXG4gICAgICAgICAgICAgIGxlbmd0aCA9IGRlbC5sZW5ndGg7XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3N0b3JlW2RlbFtpXV0sICdyZW1vdmUnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIGRhdGE6IFt2YWwsICdhZGQnXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsICYmICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsLCB0eXBlKSkge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwdXNoJzpcbiAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgIGFyckRiLnVuc2hpZnQodmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NwbGljZSc6XG4gICAgICAgICAgICAgIGFyckRiLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIGRhdGE6IFt2YWwsICdhZGQnXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyckRiLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW1vdmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgYXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIF9yZW1vdmUoYWN0aW9uKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgdmFsID0gbnVsbDtcblxuICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgaWYgKGFyckRiLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3BvcCc6XG4gICAgICAgICAgICB2YWwgPSBhcnJEYi5wb3AoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc2hpZnQnOlxuICAgICAgICAgICAgdmFsID0gYXJyRGIuc2hpZnQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNDbGFzc05hbWUpIHtcbiAgICAgICAgICByZXN1bHQgPSBzdG9yZVt2YWxdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgZGF0YTogW3Jlc3VsdCwgJ3JlbW92ZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBwdXNoXG4gICAqIEBwYXJhbSB7X0NvbXBvbmVudHxPYmplY3R9IHZhbFxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgcHVzaCBtZXRob2RcbiAgICovXG4gIGFyci5wdXNoID0gZnVuY3Rpb24gcHVzaCh2YWwpIHtcbiAgICB2YXIgcmVzdWx0ID0gX2FkZCh2YWwsICdwdXNoJyk7XG5cbiAgICBhcnJbYXJyLmxlbmd0aF0gPSB2YWw7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHBvcFxuICAgKiBAcmV0dXJucyB7X0NvbXBvbmVudHxPYmplY3R9IHZhbHVlXG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBwb3AgbWV0aG9kXG4gICAqL1xuICBhcnIucG9wID0gZnVuY3Rpb24gcG9wKCkge1xuICAgIHZhciByZXN1bHQgPSBfcmVtb3ZlKCdwb3AnKTtcbiAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggIT09IDApIHtcbiAgICAgIGRlbGV0ZSBhcnJbbGVuZ3RoXTtcbiAgICAgIGFyci5sZW5ndGggPSBsZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc2hpZnRcbiAgICogQHJldHVybnMge19Db21wb25lbnR8T2JqZWN0fSB2YWx1ZVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc2hpZnQgbWV0aG9kXG4gICAqL1xuICBhcnIuc2hpZnQgPSBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3JlbW92ZSgnc2hpZnQnKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCB1bnNoaWZ0XG4gICAqIEBwYXJhbSB7X0NvbXBvbmVudHxPYmplY3R9IHZhbFxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgdW5zaGlmdCBtZXRob2RcbiAgICovXG4gIGFyci51bnNoaWZ0ID0gZnVuY3Rpb24gdW5zaGlmdCh2YWwpIHtcbiAgICB2YXIgcmVzdWx0ID0gX2FkZCh2YWwsICd1bnNoaWZ0Jyk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcHVzaFxuICAgKiBAcGFyYW0ge19Db21wb25lbnR8T2JqZWN0fSBhcnJcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIGNvbmNhdCBtZXRob2RcbiAgICovXG4gIGFyci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQoYXJyKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBfYWRkKGFycltpXSwgJ3B1c2gnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25mLmFyciA9IGFyckRiO1xuXG4gICAgcmVzdWx0ID0gbmV3IF9BcnJheShjb25mKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBzb3J0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0IHRoZSBzb3J0IGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSBjdXJyZW50IF9BcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc29ydCBtZXRob2RcbiAgICovXG4gIGFyci5zb3J0ID0gZnVuY3Rpb24gc29ydChmdW5jdCkge1xuICAgIGFyckRiLnNvcnQoZnVuY3QpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICRoZWxwZXJcbiAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCByZXZlcnNlXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSByZXZlcnNlZCBfQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHJldmVyc2UgbWV0aG9kXG4gICAqL1xuICBhcnIucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgYXJyRGIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICRoZWxwZXJcbiAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBzcGxpY2VcbiAgICogQHJldHVybnMge19BcnJheX0gdGhlIHNwbGljZWQgX0FycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzcGxpY2UgbWV0aG9kXG4gICAqL1xuICBhcnIuc3BsaWNlID0gZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgZGF0YSA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9hZGQodmFsLCAnc3BsaWNlJywgc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICRoZWxwZXJcbiAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGFyckRiXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgZGF0YSA9IHN0b3JlW3Jlc3VsdFtpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgZGF0YTogW2RhdGEsICdyZW1vdmUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBzbGljZVxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgc2xpY2VkIF9BcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc2xpY2UgbWV0aG9kXG4gICAqL1xuICBhcnIuc2xpY2UgPSBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKSB7XG4gICAgdmFyIHJlc3VsdCA9IGFyckRiLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBhcnI7XG59XG5cbl9BcnJheS5wcm90b3R5cGUgPSBbXTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIG5hbWVzIG9mIG1ldGhvZCBwYXJhbWV0ZXJzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIHBhcmFtcyA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdLnBhcmFtcztcbiAgaWYgKHBhcmFtcykge1xuICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgcHJvcGVydHkgb2YgYSBjbGFzc1xuICovXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgcHJvcE5hbWVzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpO1xuICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFskbXNvbi5OQU1FXSk7XG5cbiAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoXG4gICAgICBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gJG1zb24uTElOS19UWVBFIHx8XG4gICAgICBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gJG1zb24uUFJPUEVSVFlfVFlQRSB8fFxuICAgICAgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09ICRtc29uLkNPTExFQ1RJT05fVFlQRVxuICAgICkge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBuYW1lOiBwcm9wTmFtZXNbaV0sXG4gICAgICAgIHR5cGU6IG1vZGVsW3Byb3BOYW1lc1tpXV0udHlwZSxcbiAgICAgICAgcmVhZE9ubHk6IG1vZGVsW3Byb3BOYW1lc1tpXV0ucmVhZE9ubHlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgbWV0aG9kcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgbWV0aG9kIG9mIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0TWV0aG9kcyhpZCkge1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHByb3BOYW1lcyA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbJG1zb24uTkFNRV0pO1xuXG4gIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSAkbXNvbi5NRVRIT0RfVFlQRSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcE5hbWVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlUHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGF0aCBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgcHJvcGVydHkgc2NoZW1hIG9mIHRoZSBzdHJ1Y3R1cmUgdHlwZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHNjaGVtYSBvZiBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVQcm9wZXJ0aWVzKHBhdGgsIG1vZGVsKSB7XG4gIHZhciB0eXBlID0gbnVsbDtcbiAgdmFyIHN0cnVjdHVyZSA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHByb3BOYW1lcyA9IFtdO1xuXG4gIHR5cGUgPSAkbWV0YW1vZGVsLmdldE1vZGVsUGF0aFR5cGUobW9kZWwsIHBhdGgpO1xuICBzdHJ1Y3R1cmUgPSAkbWV0YW1vZGVsLmdldFR5cGUodHlwZSk7XG5cbiAgaWYgKHN0cnVjdHVyZSAmJiBzdHJ1Y3R1cmUuc2NoZW1hKSB7XG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc3RydWN0dXJlLnNjaGVtYSk7XG4gICAgcHJvcE5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgc3RydWN0dXJlLnNjaGVtYVtuYW1lXS5uYW1lID0gbmFtZTtcbiAgICAgIHJlc3VsdC5wdXNoKHN0cnVjdHVyZS5zY2hlbWFbbmFtZV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldEV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIGV2ZW50cyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgZXZlbnQgb2YgYSBjbGFzc1xuICovXG5mdW5jdGlvbiBnZXRFdmVudHMoaWQpIHtcbiAgdmFyIG1vZGVsID0gbnVsbDtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBwcm9wTmFtZXMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsWyRtc29uLk5BTUVdKTtcblxuICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gJG1zb24uRVZFTlRfVFlQRSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcE5hbWVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSB2YWx1ZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHZhbHVlIG9mIGEgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIGRvYyA9ICRkYi5zdG9yZVttb2RlbF1baWRdO1xuICB2YXIgc3ViUGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGxlbmd0aCA9IHN1YlBhdGgubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhcnIgPSAnJztcbiAgdmFyIGluZGV4ID0gLTE7XG5cbiAgcmVzdWx0ID0gZG9jO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChzdWJQYXRoW2ldLmluZGV4T2YoJ1snKSAhPT0gLTEpIHtcbiAgICAgIGFyciA9IHN1YlBhdGhbaV0uc3BsaXQoJ1snKVswXTtcbiAgICAgIGluZGV4ID0gc3ViUGF0aFtpXS5zcGxpdCgnWycpWzFdLnJlcGxhY2UoJ10nLCAnJyk7XG4gICAgICByZXN1bHQgPSByZXN1bHRbYXJyXVtpbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0W3N1YlBhdGhbaV1dO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFNldCB0aGUgdmFsdWUgb2YgYSBzdHJ1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBwYXRoLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIGRvYyA9ICRkYi5zdG9yZVttb2RlbF1baWRdO1xuICB2YXIgc3ViUGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGxlbmd0aCA9IHN1YlBhdGgubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhcnIgPSAnJztcbiAgdmFyIGluZGV4ID0gLTE7XG5cbiAgcmVzdWx0ID0gZG9jO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICBpZiAoc3ViUGF0aFtpXS5pbmRleE9mKCdbJykgIT09IC0xKSB7XG4gICAgICBhcnIgPSBzdWJQYXRoW2ldLnNwbGl0KCdbJylbMF07XG4gICAgICBpbmRleCA9IHN1YlBhdGhbaV0uc3BsaXQoJ1snKVsxXS5yZXBsYWNlKCddJywgJycpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0W2Fycl1baW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSByZXN1bHRbc3ViUGF0aFtpXV07XG4gICAgfVxuICB9XG4gIHJlc3VsdFtzdWJQYXRoW2ldXSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgbmV3IGNsYXNzIGZyb20gYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKGNsYXNzSWQpIHtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIHZhciBwcm94eSA9IHt9O1xuXG4gICAgaWYgKGNvbmZpZy5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnT2JqZWN0Jykge1xuICAgICAgJGxvZy5pbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzKGNvbmZpZywgY2xhc3NJZCk7XG4gICAgICBjb25maWcgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KFxuICAgICAgICBjb25maWcsXG4gICAgICAgICRtZXRhbW9kZWwuZ2V0TW9kZWwoY2xhc3NJZCksXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICApIHtcbiAgICAgICRsb2cuaW52YWxpZFBhcmFtZXRlcnMoY2xhc3NJZCk7XG4gICAgfVxuXG4gICAgJG1ldGFtb2RlbC5wcmVwYXJlT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXRNb2RlbChjbGFzc0lkKSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZ1skbXNvbi5JRF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbJG1zb24uSURdID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfVxuXG4gICAgc3RvcmVbY29uZmlnWyRtc29uLklEXV0gPSB0aGlzO1xuXG4gICAgLy8gaWRcbiAgICBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge1xuICAgICAgcmV0dXJuIGNvbmZpZ1skbXNvbi5JRF07XG4gICAgfTtcbiAgICB0aGlzLmlkID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ19fcHJveHknLFxuICAgICAgJ3JldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBfX3Byb3h5LmFwcGx5KHRoaXMpIH07J1xuICAgICkocHJveHkpO1xuXG4gICAgLy8gY3JlYXRlIGxpbmsgdG8gZGJcbiAgICAkZGIuc3RvcmVbY2xhc3NJZF1bY29uZmlnWyRtc29uLklEXV0gPSBjb25maWc7XG5cbiAgICAkZGIuY3JlYXRlTG9nKCdpbnNlcnQnLCBjbGFzc0lkLCBjb25maWdbJG1zb24uSURdLCAnJywgY29uZmlnKTtcblxuICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICRoZWxwZXJcbiAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgIGRvY3VtZW50OiBjb25maWdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcblxuICAgIGlmICh0aGlzLmluaXQpIHtcbiAgICAgIHRoaXMuaW5pdChjb25maWcpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbihcbiAgICAnX19wcm94eScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgIGNsYXNzSWQgK1xuICAgICAgJyAoY29uZmlnKSB7IF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRJZENsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBhIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYW4gaWQgbWV0aG9kIHRvIGEgY2xhc3MgdGhhdCB3aWxsIHJldHVybiBpdHMgaWRcbiAqL1xuZnVuY3Rpb24gYWRkSWRDbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eSgpIHtcbiAgICByZXR1cm4gY2xhc3NJZDtcbiAgfTtcbiAgQ2xhc3MuaWQgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gaWQgKCkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LlxuICogQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqXG4gKiBAZXhhbXBsZVxuICogbGF1cmUuYWdlKCk7IC8vIGdldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBsYXVyZS5hZ2UoMjIpOyAvLyBzZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICovXG5mdW5jdGlvbiBhZGRQcm9wZXJ0aWVzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXMobW9kZWwpO1xuXG4gIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgdmFyIHByb3h5ID0ge307XG4gICAgdmFyIHByb3BlcnR5TmFtZSA9ICcnO1xuICAgIHZhciBwcm9wZXJ0eVR5cGUgPSAnJztcbiAgICB2YXIgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgcHJvcGVydHlOYW1lID0gcHJvcC5uYW1lO1xuICAgIHByb3BlcnR5VHlwZSA9IHByb3AudHlwZTtcbiAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkQ29sbGVjdGlvbihjb2xsLCB0eXBlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsLCB0eXBlKSAmJlxuICAgICAgICAgICAgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20odmFsLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGUpICYmXG4gICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSkpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0UmVhbENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICBjb2xsLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIGlmICgkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnOlxuICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbC5pZCAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXN1bHQucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgfHwgcHJvcGVydHlUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICAvLyBpbiBjYXNlIG9mIGFycmF5LCByZXR1cm4gYSBzdWIgYXJyYXlcbiAgICAgIHByb3h5ID0gZnVuY3Rpb24gcHJveHkocG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBbXTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHZhciBydW50aW1lQXJyID0gbnVsbDtcbiAgICAgICAgdmFyIHZhbCA9IG51bGw7XG4gICAgICAgIHZhciByZWFsVmFsID0gbnVsbDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBydW50aW1lQXJyID0gbmV3IF9BcnJheSh7XG4gICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICByZWFkT25seTogcHJvcGVydHlSZWFkT25seSxcbiAgICAgICAgICAgICAgY2xhc3NJZDogY2xhc3NJZCxcbiAgICAgICAgICAgICAgdHlwZTogcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FueScgOiBwcm9wZXJ0eVR5cGVbMF0sXG4gICAgICAgICAgICAgIGFycjogJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBydW50aW1lQXJyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgLy8gd2UgcmVwbGFjZSB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgX2lzVmFsaWRDb2xsZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgX2lkOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IF9nZXRSZWFsQ29sbGVjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhbnknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbcG9zaXRpb24sICdyZXNldCddXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSByZWFsVmFsO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29tcG9uZW50W3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHZhbCA9ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dO1xuICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgICApOlxuICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnYXJyYXknXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYXJyYXknXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcm9wZXJ0eVR5cGVbMF0gPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzU3RydWN0dXJlKHByb3BlcnR5TmFtZSwgbW9kZWwpOlxuICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSBhZGRTdHJ1Y3R1cmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSArICdbJyArIHBvc2l0aW9uICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkKClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVhbFZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhbnknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICAgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgdmFsdWUuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYXJyYXknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1xuICAgICAgICAgICAgICAgIF9pZDogdGhpcy5pZCgpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYXJyYXknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgICApOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWx1ZS5pZCAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpXG4gICAgICAgICAgICAgICAgICAgID8gcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgICAgIDogJ2FueScgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXVtwb3NpdGlvbl0gPSByZWFsVmFsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29tcG9uZW50W3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3ZhbHVlLCAnYWRkJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19wcm94eScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAnIChwb3NpdGlvbiwgdmFsdWUpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICkocHJveHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBbXTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbXBvbmVudCA9ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZXhwb3J0cy5nZXQoY29tcG9uZW50W3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgRGF0ZShjb21wb25lbnRbcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnanNvbic6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb3BlcnR5VmFsdWUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheSc6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBfQXJyYXkoe1xuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IHByb3BlcnR5UmVhZE9ubHksXG4gICAgICAgICAgICAgICAgICBjbGFzc0lkOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgICBhcnI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzU3RydWN0dXJlKHByb3BlcnR5TmFtZSwgY2xhc3NJZCk6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGFkZFN0cnVjdHVyZShcbiAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICB0aGlzLmlkKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBjb21wb25lbnRbcHJvcGVydHlOYW1lXTsgLy8gVE9ETyBjYXNlIG9mIG9iamVjdFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuZGVzdHJveWVkQ29tcG9uZW50Q2FsbChwcm9wZXJ0eU5hbWUsIHRoaXMuaWQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHtcbiAgICAgICAgICAgICAgICBfaWQ6IHRoaXMuaWQoKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShwcm9wZXJ0eVR5cGUpOlxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNhc2Ugb2YgX0JlaGF2aW9yXG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzSWQgPT09ICdfQmVoYXZpb3InKSB7XG4gICAgICAgICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlRnJvbU1lbW9yeSh0aGlzLmlkKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFt2YWx1ZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19wcm94eScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAnICh2YWx1ZSkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICAgICAgKShwcm94eSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZFN0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGFyZW50IHBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHByb3BlcnR5IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IHRoYXQgY29pbnRhaW5zIG1ldGhvZHMgdG8gYWNjZXNzIHRoZSBzdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIHN0cnVjdHVyZSBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LlxuICogQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkU3RydWN0dXJlKHBhdGgsIG5hbWUsIG1vZGVsLCBpZCkge1xuICB2YXIgcHJvcGVydGllcyA9IGdldFN0cnVjdHVyZVByb3BlcnRpZXMoXG4gICAgcGF0aCA/IHBhdGggKyAnLicgKyBuYW1lIDogbmFtZSxcbiAgICBtb2RlbFxuICApO1xuICB2YXIgc3J1Y3R1cmUgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCA/IHBhdGggKyAnLicgKyBuYW1lIDogbmFtZSkpIHtcbiAgICBzcnVjdHVyZSA9IHt9O1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgICB2YXIgcHJveHkgPSB7fTtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSAnJztcbiAgICAgIHZhciBwcm9wZXJ0eVR5cGUgPSAnJztcbiAgICAgIHZhciBwcm9wZXJ0eVJlYWRPbmx5ID0gJyc7XG5cbiAgICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICAgIHByb3BlcnR5VHlwZSA9IHByb3AudHlwZTtcbiAgICAgIHByb3BlcnR5UmVhZE9ubHkgPSBwcm9wLnJlYWRPbmx5O1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpIHx8IHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAvLyBpbiBjYXNlIG9mIGFycmF5LCByZXR1cm4gYSBzdWIgYXJyYXlcbiAgICAgICAgcHJveHkgPSBmdW5jdGlvbiBwcm94eShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgc2VhcmNoID0gW107XG4gICAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgICAgdmFyIHJ1bnRpbWVBcnIgPSBudWxsO1xuICAgICAgICAgIHZhciB2YWwgPSBudWxsO1xuICAgICAgICAgIHZhciByZWFsVmFsID0gbnVsbDtcbiAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgICAgICAgdmFyIHBhcmVudFBhdGggPSAnJztcbiAgICAgICAgICB2YXIgZnVsbFBhdGggPSAnJztcblxuICAgICAgICAgIGZ1bmN0aW9uIF9pc1ZhbGlkQ29sbGVjdGlvbihjb2xsLCB0eXBlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICBpZiAoISRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHBhcmVudFBhdGggPSBwYXRoICsgJy4nICsgbmFtZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50UGF0aCA9IG5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bGxQYXRoID0gcGFyZW50UGF0aCArICcuJyArIHByb3BlcnR5TmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBydW50aW1lQXJyID0gbmV3IF9BcnJheSh7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6IHByb3BlcnR5UmVhZE9ubHksXG4gICAgICAgICAgICAgICAgY2xhc3NJZDogbW9kZWwsXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpID8gcHJvcGVydHlUeXBlWzBdIDogJ2FueScsXG4gICAgICAgICAgICAgICAgYXJyOiBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2UgdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBfaXNWYWxpZENvbGxlY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgPyBwcm9wZXJ0eVR5cGVbMF0gOiAnYW55J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bGxQYXRoLmluZGV4T2YoJ1snKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZ1bGxQYXRoLnJlcGxhY2UoL1xcWyhcXGQpKlxcXS9nLCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbcG9zaXRpb24sICdyZXNldCddXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtwb3NpdGlvbiwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRkYi5zdG9yZVttb2RlbF1baWRdO1xuICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgPyBwcm9wZXJ0eVR5cGVbMF0gOiAnYW55J1xuICAgICAgICAgICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBleHBvcnRzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3RydWN0dXJlVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFBhdGggKyAnWycgKyBwb3NpdGlvbiArICddJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYW55JyA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0cnVjdHVyZVZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxQYXRoICsgJ1snICsgcG9zaXRpb24gKyAnXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2FueScgPT09ICdqc29uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGdldFN0cnVjdHVyZVZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxQYXRoICsgJ1snICsgcG9zaXRpb24gKyAnXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShmdWxsUGF0aCwgbW9kZWwpOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gYWRkU3RydWN0dXJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUgKyAnWycgKyBwb3NpdGlvbiArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsUGF0aCArICdbJyArIHBvc2l0aW9uICsgJ10nXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCAmJiBwcm9wLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxQYXRoW3Bvc2l0aW9uXSArICdbJyArIHBvc2l0aW9uICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUoXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKSA/IHByb3BlcnR5VHlwZVswXSA6ICdhbnknXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbbW9kZWxdLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgYXJyID0gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgPyBwcm9wZXJ0eVR5cGVbMF0gOiAnYW55J1xuICAgICAgICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKSA/IHByb3BlcnR5VHlwZVswXSA6ICdhbnknXG4gICAgICAgICAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAgICAgICBhcnJbcG9zaXRpb25dID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICA/IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgICAgIDogJ2FueScgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICBhcnJbcG9zaXRpb25dID0gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICBhcnJbcG9zaXRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgsIGFycik7XG5cbiAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFyclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBhbGwgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgaWYgKGZ1bGxQYXRoLmluZGV4T2YoJ1snKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZ1bGxQYXRoLnJlcGxhY2UoL1xcWyhcXGQpKlxcXS9nLCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogW3ZhbHVlLCAnYWRkJ11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFt2YWx1ZSwgJ2FkZCddXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKSA/IHByb3BlcnR5VHlwZVswXSA6ICdhbnknXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzcnVjdHVyZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAgICcgKHBvc2l0aW9uLCB2YWx1ZSkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICAgICAgICApKHByb3h5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3h5ID0gZnVuY3Rpb24gcHJveHkodmFsdWUpIHtcbiAgICAgICAgICB2YXIgc2VhcmNoID0gW107XG4gICAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuICAgICAgICAgIHZhciBwYXJlbnRQYXRoID0gJyc7XG4gICAgICAgICAgdmFyIGZ1bGxQYXRoID0gJyc7XG5cbiAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcGFyZW50UGF0aCA9IHBhdGggKyAnLicgKyBuYW1lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgcHJvcGVydHlOYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9ICRkYi5zdG9yZVttb2RlbF1baWRdO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBleHBvcnRzLmdldChcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnanNvbic6XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9wZXJ0eVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNTdHJ1Y3R1cmUoZnVsbFBhdGgsIG1vZGVsKTpcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvcC5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKGZ1bGxQYXRoLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgbW9kZWwsIGZ1bGxQYXRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHByb3BlcnR5VHlwZSk6XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5pc1J1bnRpbWUoKSAmJlxuICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSBvZiBfQmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgIGlmIChtb2RlbCA9PT0gJ19CZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBhbGwgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgIGlmIChmdWxsUGF0aC5pbmRleE9mKCdbJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmdWxsUGF0aC5yZXBsYWNlKC9cXFsoXFxkKSpcXF0vZywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFt2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbdmFsdWVdXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNydWN0dXJlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICAgICAgJyAodmFsdWUpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICAgKShwcm94eSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3J1Y3R1cmU7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBtZXRob2RzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIC8gb3V0cHV0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICovXG5mdW5jdGlvbiBhZGRNZXRob2RzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgbWV0aG9kcyA9IGdldE1ldGhvZHMobW9kZWwpO1xuXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiBtZXRob2QobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICB2YXIgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsICcpO1xuICAgIHZhciBwYXJhbXNXaXRoQ29udGV4dCA9ICcnO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgc3RhdGU6IG1ldGhvZE5hbWUsXG4gICAgICAgIGRhdGE6IGFyZ3VtZW50c1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHZhciBwcm94eVdpdGhDb250ZXh0ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgIHZhciBkYXRhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgZGF0YS5zaGlmdCgpO1xuXG4gICAgICBpZiAoYXJndW1lbnRzWzBdKSB7XG4gICAgICAgIHJlc3VsdCA9ICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogbWV0aG9kTmFtZSxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGNvbnRleHQ6IGFyZ3VtZW50c1swXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bkNvbnRleHQoY2xhc3NJZCwgbWV0aG9kTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtc05hbWUudW5zaGlmdCgnY29udGV4dCcpO1xuICAgICAgcGFyYW1zV2l0aENvbnRleHQgPSBwYXJhbXNOYW1lLmpvaW4oJywgJyk7XG5cbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICAgICcgKCcgK1xuICAgICAgICAgIHBhcmFtcyArXG4gICAgICAgICAgJykgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICAgICAgKShwcm94eSk7XG4gICAgICBpZiAobWV0aG9kTmFtZSAhPT0gJ25hbWUnKSB7XG4gICAgICAgIENsYXNzW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgICAgICAnICgnICtcbiAgICAgICAgICAgIHBhcmFtc1dpdGhDb250ZXh0ICtcbiAgICAgICAgICAgICcpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICAgKShwcm94eVdpdGhDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19wcm94eScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArIG1ldGhvZE5hbWUgKyAnICgpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcykgfTsnXG4gICAgICApKHByb3h5KTtcbiAgICAgIGlmIChtZXRob2ROYW1lICE9PSAnbmFtZScpIHtcbiAgICAgICAgQ2xhc3NbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAgICcgKGNvbnRleHQpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICAgKShwcm94eVdpdGhDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkRXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBldmVudHMgdG8gYSBjb21wb25lbnQuXG4gKiBUaGUgY2FsbCB0byB0aGVzZSBtZXRob2RzIHdpbGwgaW52b2tlIHRoZSB3b3JrZmxvdyBpbiBvcmRlciB0byBjaGVjayB0aGF0IGlucG91dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnRzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gZXZlbnQobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICB2YXIgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsICcpO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICB2YXIgc3lzdGVtcyA9IFtdO1xuICAgICAgdmFyIHN5c3RlbUlkID0gJ2U4OWM2MTdiNmIxNWQyNCc7XG4gICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGxlbmd0aCA9IC0xO1xuICAgICAgdmFyIG1lc3NhZ2UgPSB7fTtcblxuICAgICAgaWYgKGNsYXNzSWQgPT09ICdfQ2hhbm5lbCcpIHtcbiAgICAgICAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe1xuICAgICAgICAgIG1hc3RlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgc3lzdGVtSWQgPSBzeXN0ZW1zWzBdWyRtc29uLklEXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UuZnJvbSA9IHN5c3RlbUlkO1xuICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkYXRhLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlLmRhdGEgPSBkYXRhO1xuICAgICAgICBtZXNzYWdlLmV2ZW50ID0gbWV0aG9kTmFtZTtcblxuICAgICAgICAkZGIuX01lc3NhZ2UuaW5zZXJ0KG1lc3NhZ2UpO1xuXG4gICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogJ3NlbmQnLFxuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZXZlbnQ6IG1lc3NhZ2UuZXZlbnQsXG4gICAgICAgICAgICAgIGZyb206IG1lc3NhZ2UuZnJvbSxcbiAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogbWV0aG9kTmFtZSxcbiAgICAgICAgICBkYXRhOiBhcmd1bWVudHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAnICgnICtcbiAgICAgICAgICBwYXJhbXMgK1xuICAgICAgICAgICcpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICkocHJveHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICsgbWV0aG9kTmFtZSArICcgKCkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzKSB9OydcbiAgICAgICkocHJveHkpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG9uIG1ldGhvZCB0byBhIGNvbXBvbmVudCB0byBhZGQgYmVoYXZpb3JzIHRvIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gYWRkT24oQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7XG4gICAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgICB2YXIgY3VycmVudFN0YXRlID0gJyc7XG4gICAgdmFyIGNvbnRleHQgPSBudWxsO1xuXG4gICAgLy8gY2FzZSBvZiBjb250ZXh0XG4gICAgaWYgKFxuICAgICAgdXNlQ29yZUFQSSAmJlxuICAgICAgdXNlQ29yZUFQSS5jb25zdHJ1Y3RvciAmJlxuICAgICAgdXNlQ29yZUFQSS5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnQm9vbGVhbidcbiAgICApIHtcbiAgICAgIGNvbnRleHQgPSB1c2VDb3JlQVBJO1xuICAgICAgdXNlQ29yZUFQSSA9IGZhbHNlO1xuICAgICAgaXNDb3JlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAkd29ya2Zsb3cuY2hlY2tJbnB1dCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29uJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzXG4gICAgICB9KVxuICAgICkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgfSkubGVuZ3RoID49IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja0lucHV0TnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgdXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgaXNDb3JlLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgIGlkOiBiZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGN1cnJlbnRTdGF0ZS52YWx1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiZWhhdmlvcklkO1xuICB9O1xuICBDbGFzcy5wcm90b3R5cGUub24gPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGlzQ29yZSkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICApKHByb3h5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eShzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSAnJztcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XG5cbiAgICAvLyBjYXNlIG9mIGNvbnRleHRcbiAgICBpZiAoXG4gICAgICB1c2VDb3JlQVBJICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdCb29sZWFuJ1xuICAgICkge1xuICAgICAgY29udGV4dCA9IHVzZUNvcmVBUEk7XG4gICAgICB1c2VDb3JlQVBJID0gZmFsc2U7XG4gICAgICBpc0NvcmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAkd29ya2Zsb3cuY2hlY2tJbnB1dCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29uJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzXG4gICAgICB9KVxuICAgICkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgfSkubGVuZ3RoID49IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja0lucHV0TnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgdXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgaXNDb3JlLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgIGlkOiBiZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGN1cnJlbnRTdGF0ZS52YWx1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiZWhhdmlvcklkO1xuICB9O1xuICBDbGFzcy5vbiA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19wcm94eScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7IHJldHVybiBfX3Byb3h5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTsnXG4gICkocHJveHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkT2ZmQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgb2ZmIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byByZW1vdmUgYmVoYXZpb3JzIGZyb20gdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KHN0YXRlLCBiZWhhdmlvcklkKSB7XG4gICAgaWYgKFxuICAgICAgJHdvcmtmbG93LmNoZWNrSW5wdXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIG1ldGhvZE5hbWU6ICdvZmYnLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHNcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgIGJlaGF2aW9ySWQ6IGJlaGF2aW9ySWQsXG4gICAgICAgICAgY29tcG9uZW50SWQ6IGNsYXNzSWQsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPZmYoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgQ2xhc3Mub2ZmID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIG9mZiAoc3RhdGUsIGJlaGF2aW9ySWQpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGREZXN0cm95Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkRGVzdHJveUNsYXNzKENsYXNzKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge1xuICAgIHZhciBpZCA9IHRoaXMuaWQoKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgLy8gaWYgbm90IHZpcnR1YWwgY29tcG9uZW50XG4gICAgaWYgKCRkYltpZF0pIHtcbiAgICAgIHJlc3VsdCA9ICRkYltpZF0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIHN0b3JlW2lkXTtcblxuICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgIGNvbXBvbmVudElkOiBpZFxuICAgIH0pO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICBjb21wb25lbnRJZDogcmVzdWx0W2ldXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgc3RhdGU6ICdkZXN0cm95J1xuICAgIH0pO1xuICB9O1xuICBDbGFzcy5kZXN0cm95ID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3kgKCkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRSZXF1aXJlQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBSZXF1aXJlIGEgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGFkZFJlcXVpcmVDbGFzcyhDbGFzcykge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eShpZCkge1xuICAgIHJldHVybiBleHBvcnRzLmdldChpZCk7XG4gIH07XG4gIENsYXNzLnJlcXVpcmUgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gcmVxdWlyZSAoaWQpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRJbml0Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJbml0IGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkSW5pdENsYXNzKENsYXNzKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge307XG4gIENsYXNzLmluaXQgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gaW5pdCAoY29uZikgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICApKHByb3h5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZENsYXNzSW5mb0NsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIHRoZSBDbGFzc0luZm8gbWV0aG9kIG9uIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3NJbmZvQ2xhc3MoQ2xhc3MpIHtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gIH07XG4gIENsYXNzLmNsYXNzSW5mbyA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19wcm94eScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBjbGFzc0luZm8gKCkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBmYWN0b3J5XG4gKiBAcGFyYW0ge0pTT059IGNvbmZpZyBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtDb21wb25lbnR9IHRoZSBjcmVhdGVkIGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvblxuICovXG5mdW5jdGlvbiBmYWN0b3J5KGNvbmZpZykge1xuICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgdmFyIENsYXNzID0ge307XG4gIHZhciBjbGFzc0lkID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBjb25maWcubW9kZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY2xhc3NJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzSWQgPSBjb25maWcubW9kZWw7XG4gIH1cblxuICBDbGFzcyA9IGNyZWF0ZUNsYXNzKGNsYXNzSWQpO1xuXG4gIHN0b3JlW2NsYXNzSWRdID0gQ2xhc3M7XG5cbiAgYWRkSWRDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG5cbiAgYWRkUHJvcGVydGllcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkRXZlbnRzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuXG4gIC8vIGFkZCBkZWZhdWx0IHByb3BlcnRpZXMvbWV0aG9kcyBvbmx5IGlmIHRoZSBjb21wb25lbnRcbiAgLy8gaW5oZXJpdCBmcm9tIF9Db21wb25lbnRcbiAgaWYgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oY2xhc3NJZCwgJ19Db21wb25lbnQnKSkge1xuICAgIGFkZE9uKENsYXNzLCBjbGFzc0lkKTtcblxuICAgIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRSZXF1aXJlQ2xhc3MoQ2xhc3MpO1xuICAgIGFkZEluaXRDbGFzcyhDbGFzcyk7XG4gICAgYWRkRGVzdHJveUNsYXNzKENsYXNzKTtcbiAgICBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcyk7XG4gIH1cblxuICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIDxicj5cbiAqIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWUgPGJyPlxuICogQHJldHVybnMge0NvbXBvbmVudH1cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvblxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShjb25maWcpIHtcbiAgcmV0dXJuIGZhY3RvcnkoY29uZmlnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKiBAZGVzY3JpcHRpb24gRGVzdHJveSBhIGNvbXBvbmVudCBmcm9tIGl0cyBpZFxuICovXG5leHBvcnRzLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGlkKSB7XG4gIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF07XG4gIHZhciBjbGFzc0lkID0gJyc7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICRkYltjbGFzc0lkXS5yZW1vdmUoe1xuICAgICAgX2lkOiBpZFxuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xuICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgY29tcG9uZW50SWQ6IGlkXG4gICAgfSk7XG5cbiAgICAvLyBjYXNlIG9mIEJlaGF2aW9yXG4gICAgaWYgKGNsYXNzSWQgPT09ICdfQmVoYXZpb3InKSB7XG4gICAgICAkYmVoYXZpb3IucmVtb3ZlRnJvbU1lbW9yeShpZCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBjb21wb25lbnQgd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IGZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgZGVsZXRlIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQHJlcXVpcmVzIG1zb25cbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlLlxuICogU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOlxuICogLSBjb2xsZWN0aW9ucyB0byBzdG9yZSBkb2N1bWVudHMgKHNjaGVtYXMsIHR5cGVzLCBjb21wb25lbnRzLCAuLi4pIGFuZFxuICogLSBBUElzIHRvIGltcG9ydCBvciBleHBvcnQgZG9jdW1lbnRzLlxuICpcbiAqIFN5c3RlbSBSdW50aW1lIERhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIFN5c3RlbSBSdW50aW1lIG1ldGFtb2RlbCBhbmQgU3lzdGVtIFJ1bnRpbWUgY29tcG9uZW50cyBiZWNhdXNlOlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCxcbiAqIC0gaW5zZXJ0IG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBjb21wb25lbnQgYW5kXG4gKiAtIHJlbW92ZSBvcGVyYXRpb24gYXV0b21hdGljYWxseSBkZXN0cm95IGEgY29tcG9uZW50LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRtc29uID0gcmVxdWlyZSgnLi9tc29uLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgY29sbGVjdGlvbnMgPSBbXTtcbnZhciBpbnRlcm5hbERCID0gW1xuICAnX1J1bnRpbWUnLFxuICAnX1NjaGVtYScsXG4gICdfTW9kZWwnLFxuICAnX0dlbmVyYXRlZE1vZGVsJyxcbiAgJ19CZWhhdmlvcicsXG4gICdfU3RhdGUnLFxuICAnX1R5cGUnLFxuICAnX01ldGFtb2RlbCcsXG4gICdfRGF0YWJhc2UnLFxuICAnX1N5c3RlbScsXG4gICdfQ2xhc3NJbmZvJyxcbiAgJ19NZXNzYWdlJyxcbiAgJ19DaGFubmVsJyxcbiAgJ19Mb2dnZXInLFxuICAnX0xvZydcbl07XG52YXIgY29yZURiID0gW1xuICAnX0xvZycsXG4gICdfU2NoZW1hJyxcbiAgJ19Mb2dnZXInLFxuICAnX01vZGVsJyxcbiAgJ19HZW5lcmF0ZWRNb2RlbCcsXG4gICdfU3RhdGUnLFxuICAnX1R5cGUnXG5dO1xudmFyIGxvZ09yZGVyID0gMDtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBpbmNMb2dPcmRlclxuICogQGRlc2NyaXB0aW9uIEluY3JlbWVudCBMb2dcbiAqL1xuZnVuY3Rpb24gaW5jTG9nT3JkZXIoKSB7XG4gIHJldHVybiBsb2dPcmRlcisrO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybnMge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRHVtcCB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgdmFyIGRiRHVtcCA9IHt9O1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgdmFyIHR5cGVJZCA9ICcnO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgY29sbGVjdGlvbiA9IG51bGw7XG4gIHZhciBzY2hlbWFJZCA9ICcnO1xuICB2YXIgbW9kZWxJZCA9ICcnO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaWQgPSAnJztcblxuICAvLyBzY2hlbWFzXG4gIGRiRHVtcC5zY2hlbWFzID0ge307XG4gIGlmIChleHBvcnRzLl9TY2hlbWEuY291bnQoKSkge1xuICAgIGZvciAoc2NoZW1hSWQgaW4gZXhwb3J0cy5zdG9yZS5fU2NoZW1hKSB7XG4gICAgICBpZiAoIWV4cG9ydHMuc3RvcmUuX1NjaGVtYVtzY2hlbWFJZF1bJG1zb24uQ09SRV0pIHtcbiAgICAgICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9TY2hlbWFbc2NoZW1hSWRdKSk7XG4gICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBtb2RlbHNcbiAgZGJEdW1wLm1vZGVscyA9IHt9O1xuICBpZiAoZXhwb3J0cy5fTW9kZWwuY291bnQoKSkge1xuICAgIGZvciAobW9kZWxJZCBpbiBleHBvcnRzLnN0b3JlLl9Nb2RlbCkge1xuICAgICAgaWYgKCFleHBvcnRzLnN0b3JlLl9Nb2RlbFttb2RlbElkXVskbXNvbi5DT1JFXSkge1xuICAgICAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhwb3J0cy5zdG9yZS5fTW9kZWxbbW9kZWxJZF0pKTtcbiAgICAgICAgZGJEdW1wLm1vZGVsc1ttb2RlbElkXSA9IG1vZGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGVzXG4gIGRiRHVtcC50eXBlcyA9IHt9O1xuICBpZiAoZXhwb3J0cy5fVHlwZS5jb3VudCgpKSB7XG4gICAgZm9yICh0eXBlSWQgaW4gZXhwb3J0cy5zdG9yZS5fVHlwZSkge1xuICAgICAgaWYgKCFleHBvcnRzLnN0b3JlLl9UeXBlW3R5cGVJZF0uY29yZSkge1xuICAgICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9UeXBlW3R5cGVJZF0pKTtcbiAgICAgICAgZGJEdW1wLnR5cGVzW3R5cGUubmFtZV0gPSB0eXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGJlaGF2aW9yc1xuICBkYkR1bXAuYmVoYXZpb3JzID0ge307XG4gIGZvciAoYmVoYXZpb3JJZCBpbiBleHBvcnRzLnN0b3JlLl9CZWhhdmlvcikge1xuICAgIGlmICghZXhwb3J0cy5zdG9yZS5fQmVoYXZpb3JbYmVoYXZpb3JJZF0uY29yZSkge1xuICAgICAgYmVoYXZpb3IgPSBKU09OLnBhcnNlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9CZWhhdmlvcltiZWhhdmlvcklkXSlcbiAgICAgICk7XG4gICAgICBkYkR1bXAuYmVoYXZpb3JzW2JlaGF2aW9ySWRdID0gYmVoYXZpb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcG9uZW50c1xuICBkYkR1bXAuY29tcG9uZW50cyA9IHt9O1xuICBsZW5ndGggPSBjb2xsZWN0aW9ucy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbnNbaV07XG4gICAgaWYgKGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmNvdW50KCkpIHtcbiAgICAgIGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmVbY29sbGVjdGlvbk5hbWVdKSk7XG5cbiAgICAgIGZvciAoaWQgaW4gY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoY29sbGVjdGlvbltpZF1bJG1zb24uQ09SRV0pIHtcbiAgICAgICAgICBkZWxldGUgY29sbGVjdGlvbltpZF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLmxlbmd0aCkge1xuICAgICAgICBkYkR1bXAuY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0gPSBjb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYkR1bXA7XG59XG5cbi8qKlxuICogQGNsYXNzIF9BcnJheVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgc29ydCBtZXRob2Qgb2YgQXJyYXkgQ2xhc3NcbiAqL1xuZnVuY3Rpb24gX0FycmF5KCkge1xuICB2YXIgYXJyID0gW107XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc29ydFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gcGFyYW0gdGhlIHNvcnQgZnVuY3Rpb24gb3IgdGhlIHNvcnQgcXVlcnlcbiAgICogQHJldHVybnMge0FycmF5fSB0aGUgc29ydGVkIGFycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzb3J0IG1ldGhvZFxuICAgKi9cbiAgYXJyLnNvcnQgPSBmdW5jdGlvbiBzb3J0KHBhcmFtKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgdmFyIGZpZWxkID0gJyc7XG4gICAgdmFyIGFyckNvcHkgPSBbXTtcblxuICAgIC8vIGNvcHlcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgIGFyckNvcHkucHVzaCh2YWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIGFyckNvcHkuc29ydChwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkID0gT2JqZWN0LmtleXMocGFyYW0pWzBdO1xuICAgICAgYXJyQ29weS5zb3J0KGZ1bmN0aW9uKGRvY0EsIGRvY0IpIHtcbiAgICAgICAgaWYgKGRvY0FbZmllbGRdIDwgZG9jQltmaWVsZF0pIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1bZmllbGRdID09PSAxID8gLTEgOiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2NBW2ZpZWxkXSA+IGRvY0JbZmllbGRdKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmFtW2ZpZWxkXSA9PT0gMSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJDb3B5O1xuICB9O1xuXG4gIHJldHVybiBhcnI7XG59XG5cbl9BcnJheS5wcm90b3R5cGUgPSBbXTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRXaXRoU2VsZWN0b3JzXG4gKiBAcGFyYW0ge09iamVjdH0gZmllbGQgZmllbGQgb24gd2hpY2ggbWFkZSB0aGUgc2VhcmNoXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgcXVlcnkgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnQgZG9jdW1lbnQgb2JqZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgIHVzZWQgZm9yIHRoZSBzZWFyY2ggaXMgdmFsaWQgd2l0aCB0aGUgZG9jdW1lbnRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiB0aGUgcXVlcnkgdXNlZCBmb3IgdGhlIHNlYXJjaCBpcyB2YWxpZCB3aXRoIHRoZSBkb2N1bWVudFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkV2l0aFNlbGVjdG9ycyhmaWVsZCwgcXVlcnksIGRvY3VtZW50KSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgc2VsZWN0b3IgPSAnJztcblxuICBzZWFyY2g6IGZvciAoc2VsZWN0b3IgaW4gcXVlcnkpIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZXEnOlxuICAgICAgICBpZiAocXVlcnlbc2VsZWN0b3JdIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXS50b1N0cmluZygpLm1hdGNoKHF1ZXJ5W3NlbGVjdG9yXSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdICE9PSBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZ3QnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdIDw9IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZ3RlJzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA8IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbHQnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdID49IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbHRlJzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA+IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbmUnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdID09PSBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJGluJzpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocXVlcnlbc2VsZWN0b3JdKSAmJlxuICAgICAgICAgIHF1ZXJ5W3NlbGVjdG9yXS5pbmRleE9mKGRvY3VtZW50W2ZpZWxkXSkgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbmluJzpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocXVlcnlbc2VsZWN0b3JdKSAmJlxuICAgICAgICAgIHF1ZXJ5W3NlbGVjdG9yXS5pbmRleE9mKGRvY3VtZW50W2ZpZWxkXSkgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFxuICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5IHF1ZXJ5IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IGRvY3VtZW50IG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHF1ZXJ5IG9mIHNlYXJjaCBpcyB2YWxpZCB3aXRoIHRoZSBkb2N1bWVudFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIHRoZSBxdWVyeSBvZiBzZWFyY2ggaXMgdmFsaWQgd2l0aCB0aGUgZG9jdW1lbnRcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZChxdWVyeSwgZG9jdW1lbnQpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBmaW5kSW5BcnJheSA9IGZhbHNlO1xuICB2YXIgZmllbGQgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcblxuICBzZWFyY2g6IGZvciAoZmllbGQgaW4gcXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50W2ZpZWxkXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAvLyByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgICAgY2FzZSBxdWVyeVtmaWVsZF0gaW5zdGFuY2VvZiBSZWdFeHA6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9jdW1lbnRbZmllbGRdKSAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBkb2N1bWVudFtmaWVsZF0ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF1baV0udG9TdHJpbmcoKS5tYXRjaChxdWVyeVtmaWVsZF0pICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmluZEluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gZmluZEluQXJyYXk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0udG9TdHJpbmcoKS5tYXRjaChxdWVyeVtmaWVsZF0pID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIHF1ZXJ5IHNlbGVjdG9yc1xuICAgICAgICBjYXNlIHF1ZXJ5W2ZpZWxkXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pOlxuICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRXaXRoU2VsZWN0b3JzKGZpZWxkLCBxdWVyeVtmaWVsZF0sIGRvY3VtZW50KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBtdWx0aXBsZSBxdWVyeVxuICAgICAgICBjYXNlIEFycmF5LmlzQXJyYXkoZG9jdW1lbnRbZmllbGRdKSAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pOlxuICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0uaW5kZXhPZihxdWVyeVtmaWVsZF0pID09PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIHNpbXBsZSBxdWVyeVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gIT09IHF1ZXJ5W2ZpZWxkXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaW1wU3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgU3lzdGVtIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBTeXN0ZW0gUnVudGltZSBzeXN0ZW1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW1wb3J0IHN5c3RlbSBpbnRvIHRoZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBpbXBTeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGNvbXBvbmVudElkID0gJyc7XG4gIHZhciB0eXBlTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBiZWhhdmlvcklkID0gJyc7XG4gIHZhciBzeXN0ZW1zID0gW107XG4gIHZhciBpZCA9IG51bGw7XG5cbiAgaWYgKGltcG9ydGVkU3lzdGVtKSB7XG4gICAgLy8gYWRkIHR5cGVzXG4gICAgZm9yICh0eXBlTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS50eXBlcykge1xuICAgICAgJG1ldGFtb2RlbC50eXBlKGltcG9ydGVkU3lzdGVtLnR5cGVzW3R5cGVOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHNjaGVtYXNcbiAgICBmb3IgKHNjaGVtYU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hcykge1xuICAgICAgJG1ldGFtb2RlbC5zY2hlbWEoaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hc1tzY2hlbWFOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIG1vZGVsc1xuICAgIGZvciAobW9kZWxOYW1lIGluIGltcG9ydGVkU3lzdGVtLm1vZGVscykge1xuICAgICAgJG1ldGFtb2RlbC5tb2RlbChpbXBvcnRlZFN5c3RlbS5tb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgfVxuXG4gICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgIC8vIGFkZCBiZWhhdmlvcnNcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICBleHBvcnRzLl9CZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoXG4gICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgaW5mbyBpZiBhbHJlYWR5IGEgbWFzdGVyIHN5c3RlbVxuICAgIHN5c3RlbXMgPSBleHBvcnRzLl9TeXN0ZW0uZmluZCh7XG4gICAgICBtYXN0ZXI6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgIGlmIChzeXN0ZW1zWzBdWyRtc29uLklEXSA9PT0gaW1wb3J0ZWRTeXN0ZW1bJG1zb24uSURdKSB7XG4gICAgICAgIGltcG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyKSB7XG4gICAgICAgICAgc3lzdGVtc1swXS5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluc2VydCB0aGUgc3lzdGVtIGluIERCXG4gICAgZXhwb3J0cy5fU3lzdGVtLmluc2VydChpbXBvcnRlZFN5c3RlbSk7XG5cbiAgICByZXN1bHQgPSBpbXBvcnRlZFN5c3RlbVskbXNvbi5JRF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZXhwU3lzdGVtXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIHN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzeXN0ZW0gZnJvbSB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZXhwU3lzdGVtKCkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICB2YXIgc3lzdGVtcyA9IFtdO1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgZGJEdW1wID0gbnVsbDtcbiAgdmFyIG1hc3RlcnN5c3RlbSA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBleHBvcnRlZFN5c3RlbSA9IHt9O1xuXG4gIC8vIGdldCBpZCBvZiB0aGUgbWFzdGVyIHN5c3RlbVxuICBzeXN0ZW1zID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgIG1hc3RlcjogdHJ1ZVxuICB9KTtcblxuICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICBtYXN0ZXJzeXN0ZW0gPSBzeXN0ZW1zWzBdO1xuICAgIGlkID0gbWFzdGVyc3lzdGVtWyRtc29uLklEXTtcblxuICAgIC8vIHByb3BcbiAgICBleHBvcnRlZFN5c3RlbVskbXNvbi5JRF0gPSBpZDtcbiAgICBleHBvcnRlZFN5c3RlbS5uYW1lID0gbWFzdGVyc3lzdGVtLm5hbWU7XG4gICAgZXhwb3J0ZWRTeXN0ZW0uZGVzY3JpcHRpb24gPSBtYXN0ZXJzeXN0ZW0uZGVzY3JpcHRpb247XG4gICAgZXhwb3J0ZWRTeXN0ZW0udmVyc2lvbiA9IG1hc3RlcnN5c3RlbS52ZXJzaW9uO1xuICAgIGV4cG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG5cbiAgICAvLyBkdW1wXG4gICAgZGJEdW1wID0gZHVtcCgpO1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gZGJEdW1wKSB7XG4gICAgICBpZiAoZGJEdW1wLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICBleHBvcnRlZFN5c3RlbVtjb2xsZWN0aW9uTmFtZV0gPSBkYkR1bXBbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGV4cG9ydGVkU3lzdGVtKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAne30nO1xuICAgICRsb2cubWFzdGVyU3lzdGVtTm90Rm91bmQoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBleHBvcnRTdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgc3ViLXN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzdWItc3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGV4cFN1YnN5c3RlbShwYXJhbXMpIHtcbiAgdmFyIHN5c3RlbSA9IHt9O1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBkZWZhdWx0TmFtZSA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIC8vIGRlZmF1bHQgdmFsdWVzXG4gIHJlc3VsdCA9IGV4cG9ydHMuX1N5c3RlbS5maW5kKHtcbiAgICBtYXN0ZXI6IHRydWVcbiAgfSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgZGVmYXVsdE5hbWUgPSByZXN1bHRbMF0ubmFtZTtcbiAgfVxuXG4gIHN5c3RlbS5uYW1lID0gcGFyYW1zLm5hbWUgfHwgJ3N1Yl8nICsgZGVmYXVsdE5hbWU7XG4gIHN5c3RlbS52ZXJzaW9uID0gcGFyYW1zLnZlcnNpb24gfHwgJzAuMC4xJztcbiAgc3lzdGVtLmRlc2NyaXB0aW9uID0gcGFyYW1zLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gIC8vIHNjaGVtYXNcbiAgc3lzdGVtLnNjaGVtYXMgPSB7fTtcbiAgaWYgKHBhcmFtcy5zY2hlbWFzKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5fU2NoZW1hLmZpbmQocGFyYW1zLnNjaGVtYSk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2NoZW1hID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFzY2hlbWFbJG1zb24uQ09SRV0pIHtcbiAgICAgICAgc3lzdGVtLnNjaGVtYXNbc2NoZW1hWyRtc29uLklEXV0gPSBzY2hlbWE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZWxzXG4gIHN5c3RlbS5tb2RlbHMgPSB7fTtcbiAgaWYgKHBhcmFtcy5tb2RlbHMpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLl9Nb2RlbC5maW5kKHBhcmFtcy5tb2RlbHMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG1vZGVsID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFtb2RlbFskbXNvbi5DT1JFXSkge1xuICAgICAgICBzeXN0ZW0ubW9kZWxzW21vZGVsWyRtc29uLklEXV0gPSBtb2RlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0eXBlc1xuICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgaWYgKHBhcmFtcy50eXBlcykge1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuX1R5cGUuZmluZChwYXJhbXMudHlwZXMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHR5cGUgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIXR5cGVbJG1zb24uQ09SRV0pIHtcbiAgICAgICAgc3lzdGVtLnR5cGVzW3R5cGVbJG1zb24uSURdXSA9IHR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYmVoYXZpb3JzXG4gIHN5c3RlbS5iZWhhdmlvcnMgPSB7fTtcbiAgaWYgKHBhcmFtcy5iZWhhdmlvcnMpIHtcbiAgICBiZWhhdmlvciA9IGV4cG9ydHMuX0JlaGF2aW9yLmZpbmQocGFyYW1zLmJlaGF2aW9ycyk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYmVoYXZpb3IgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvclskbXNvbi5JRF1dID0gYmVoYXZpb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcG9uZW50c1xuICBzeXN0ZW0uY29tcG9uZW50cyA9IHt9O1xuICBpZiAocGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICBmb3IgKGNsYXNzTmFtZSBpbiBwYXJhbXMuY29tcG9uZW50cykge1xuICAgICAgaWYgKGV4cG9ydHNbY2xhc3NOYW1lXSkge1xuICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdID0ge307XG5cbiAgICAgICAgcmVzdWx0ID0gZXhwb3J0c1tjbGFzc05hbWVdLmZpbmQocGFyYW1zLmNvbXBvbmVudHNbY2xhc3NOYW1lXSk7XG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbXBvbmVudCA9IHJlc3VsdFtpXTtcbiAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdW2NvbXBvbmVudFskbXNvbi5JRF1dID0gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN5c3RlbSk7XG59XG5cbi8qIFB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbi8qKlxuICogQHByb3BlcnR5IHtKU09OfSBzdG9yZVxuICogQGRlc2NyaXB0aW9uIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHN0b3JlIHRoYXQgbGlzdHMgYWxsIHRoZSBjb2xsZWN0aW9uc1xuICovXG5leHBvcnRzLnN0b3JlID0ge307XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQGNsYXNzIERhdGFiYXNlQ29sbGVjdGlvblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBuZXcgY29sbGVjdGlvblxuICogQEBkZXNjcmlwdGlvbiBBIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRzIG1hbmFnZWQgYnkgU3lzdGVtIFJ1bnRpbWUuXG4gKiBJbnRlcm5hbCBjb2xsZWN0aW9ucyBtYW5hZ2UgY29yZSBvYmplY3RzIG9mIFN5c3RlbSBSdW50aW1lIChzY2hlbWEsIHR5cGUsIC4uLikuXG4gKiBQdWJsaWMgY29sbGVjdGlvbnMgbWFuYWdlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuXG4gKi9cbnZhciBEYXRhYmFzZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBEYXRhYmFzZUNvbGxlY3Rpb24obmFtZSkge1xuICBpZiAoJG1ldGFtb2RlbC5nZXRTY2hlbWEobmFtZSkgfHwgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgIGV4cG9ydHMuc3RvcmVbbmFtZV0gPSB7fTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGlmIChpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICBjb2xsZWN0aW9ucy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGZpbmRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeVxuICogQHJldHVybnMge0FycmF5fSBBcnJheSBvZiBkb2N1bWVudHMgdGhhdCBtYXAgdGhlIHF1ZXJ5XG4gKiBAZGVzY3JpcHRpb24gRmluZCBhIGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLlBlcnNvbi5maW5kKHsnbmFtZSc6ICdsYXVyZSd9KTtcbiAqICRkYi5QZXJzb24uZmluZCh7J25hbWUnOiAnbGF1cmUnLCAnYWdlJyA6IDI0fSk7XG4gKiAkZGIuUGVyc29uLmZpbmQoW3snbmFtZSc6ICdyZW5lJ30sIHsnbmFtZSc6ICdyb2JlcnQnfV0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kKHF1ZXJ5KSB7XG4gIHZhciByZXN1bHQgPSBuZXcgX0FycmF5KCk7XG4gIHZhciByZXN1bHRJZCA9IHt9O1xuICB2YXIgaWQgPSAnJztcbiAgdmFyIGRvY3VtZW50ID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICBxdWVyeS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiBtdWx0aVNlYXJjaChjcml0ZXJpYSkge1xuICAgICAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBkb2N1bWVudCA9IGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChjcml0ZXJpYSwgZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0SWRbaWRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICByZXN1bHRJZFtpZF0gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgIGRvY3VtZW50ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgaWYgKGlzVmFsaWQocXVlcnksIGRvY3VtZW50KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgZG9jdW1lbnQgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW5zZXJ0XG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gZG9jdW1lbnQgYSBuZXcgb2JqZWN0IHRvIGFkZFxuICogQHJldHVybnMge0FycmF5fSBhcnJheSBvZiBpZCBjcmVhdGVkXG4gKiBAZGVzY3JpcHRpb24gSW5zZXJ0IGFuIG5ldyBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICogQmVmb3JlIGluc2VydGluZyB0aGUgZG9jdW1lbnQsIFN5c3RlbSBSdW50aW1lIGNoZWNrcyB0aGF0IHRoZSBkb2N1bWVudCBpcyBjb21wbGlhbnRcbiAqIHdpdGggaXRzIGNsYXNzIGRlZmluaXRpb24uXG4gKiBUaGVuLCBhZnRlciBpbnNlcnRpbmcgaXQsIHdlIGNyZWF0ZSB0aGUgY29tcG9uZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiAkZGIuUGVyc29uLmluc2VydCh7XG4gKiAgICAgICduYW1lJzogJ2JvYicsXG4gKiAgICAgICdmaXJzdE5hbWUnOiAnU2FpbnQtQ2xhcicsXG4gKiAgICAgICdhZ2UnOiA0M1xuICogfSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KGRvY3VtZW50KSB7XG4gIHZhciBkb2MgPSBbXTtcbiAgdmFyIENvbXBvbmVudCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShkb2N1bWVudCkpIHtcbiAgICBkb2MgPSBkb2N1bWVudDtcbiAgfSBlbHNlIHtcbiAgICBkb2MucHVzaChkb2N1bWVudCk7XG4gIH1cblxuICBkb2MuZm9yRWFjaChcbiAgICBmdW5jdGlvbiBtdWx0aUluc2VydChvYmopIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgdmFyIGNoYW5uZWxzID0gW107XG4gICAgICB2YXIgY2hhbm5lbCA9IG51bGw7XG4gICAgICB2YXIgc3lzdGVtcyA9IFtdO1xuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfU2NoZW1hJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfTG9nZ2VyJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfTW9kZWwnOlxuICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ19UeXBlJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfR2VuZXJhdGVkTW9kZWwnOlxuICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNWYWxpZE9iamVjdChvYmosICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKSk6XG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmpbJG1zb24uSURdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2JqWyRtc29uLklEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRtZXRhbW9kZWwucHJlcGFyZU9iamVjdChvYmosICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKSk7XG5cbiAgICAgICAgICBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1bb2JqWyRtc29uLklEXV0gPSBvYmo7XG5cbiAgICAgICAgICBDb21wb25lbnQgPSAkY29tcG9uZW50LmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQob2JqKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudC5pZCgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ2luc2VydCcsIHRoaXMubmFtZSwgb2JqWyRtc29uLklEXSwgJycsIG9iaik7XG5cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG9ialxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09ICdfTWVzc2FnZScpIHtcbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgIGNoYW5uZWxzID0gZXhwb3J0cy5fQ2hhbm5lbC5maW5kKHt9KTtcbiAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGNoYW5uZWxzLmxlbmd0aDtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKGNoYW5uZWxzW2ldWyRtc29uLklEXSk7XG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBjaGFubmVsc1tpXVskbXNvbi5JRF0sXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogb2JqLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgZGF0YTogb2JqLmRhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICRsb2cuaW52YWxpZERvY3VtZW50T25EYkluc2VydChvYmosIHRoaXMubmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIHVwZGF0ZSB0byBtYWtlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICoge0Jvb2xlYW59IHVwc2VydCB0cnVlIGlmIHdlIGNyZWF0ZSBhIGRvY3VtZW50IHdoZW4gbm8gZG9jdW1lbnQgaXMgZm91bmQgYnkgdGhlIHF1ZXJ5XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBOdW1iZXIgb2YgZG9jdW1lbnRzIHVwZGF0ZWRcbiAqIEBkZXNjcmlwdGlvbiBVcGRhdGUgZG9jdW1lbnRzIGludG8gYSBjb2xsZWN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5DYXJzLnVwZGF0ZSh7J2NvZGUnOiAnQVpELTcxJ30sIHsncHJpY2UnOiAnMTAwMDAkJ30pO1xuICogJGRiLkNhcnMudXBkYXRlKFt7J2NvZGUnOiAnQVpELTcxJ30sIHsnY29kZSc6ICdBWkQtNjUnfV0sIHsncHJpY2UnOiAnMTAwMDAkJ30pO1xuICogJGRiLkNhcnMudXBkYXRlKHsnY29kZSc6ICdBWkQtNzEnfSwgeydwcmljZSc6ICcxMDAwMCQnfSwgeyd1cHNlcnQnOiB0cnVlfSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHF1ZXJ5LCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIGRvY3MgPSB0aGlzLmZpbmQocXVlcnkpO1xuICB2YXIgdXBkYXRlZCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IGRvY3MubGVuZ3RoO1xuICB2YXIgYXR0cmlidXRlTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpO1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAodHlwZW9mIG9wdGlvbnMudXBzZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMudXBzZXJ0ID0gb3B0aW9ucy51cHNlcnQgfHwgZmFsc2U7XG4gIH1cblxuICBpZiAodXBkYXRlKSB7XG4gICAgLy8gdXBzZXJ0IGNhc2VcbiAgICBpZiAobGVuZ3RoID09PSAwICYmIG9wdGlvbnMudXBzZXJ0KSB7XG4gICAgICBpZiAocXVlcnlbJG1zb24uSURdKSB7XG4gICAgICAgIHVwZGF0ZVskbXNvbi5JRF0gPSBxdWVyeVskbXNvbi5JRF07XG4gICAgICB9XG4gICAgICB0aGlzLmluc2VydCh1cGRhdGUpO1xuICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLy8gY2FzZSBvZiB1cGRhdGUgb2YgX2lkXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB1cGRhdGVbJG1zb24uSURdICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB1cGRhdGVbJG1zb24uSURdICE9PSBkb2NzW2ldWyRtc29uLklEXVxuICAgICAgKSB7XG4gICAgICAgICRsb2cudXBkYXRlVXVpZChcbiAgICAgICAgICBkb2NzW2ldWyRtc29uLklEXSxcbiAgICAgICAgICB1cGRhdGVbJG1zb24uSURdLFxuICAgICAgICAgIHR5cGVvZiAkY29tcG9uZW50LmdldCh1cGRhdGVbJG1zb24uSURdKSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChhdHRyaWJ1dGVOYW1lIGluIHVwZGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3NbaV1bYXR0cmlidXRlTmFtZS5zcGxpdCgnLicpWzBdXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm5hbWUgIT09ICdfU2NoZW1hJyAmJlxuICAgICAgICAgICAgdGhpcy5uYW1lICE9PSAnX01vZGVsJyAmJlxuICAgICAgICAgICAgdGhpcy5uYW1lICE9PSAnX0dlbmVyYXRlZE1vZGVsJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgICAgdHlwZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKHRoaXMubmFtZSwgYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHNjaGVtYVthdHRyaWJ1dGVOYW1lXS50eXBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoJG1zb24uU0NIRU1BX0RFRklOSVRJT05bYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJG1zb24uU0NIRU1BX0RFRklOSVRJT05bYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coXG4gICAgICAgICAgICAgICAgICAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGRvY3NbaV1bJG1zb24uSURdLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBkb2NzW2ldWyRtc29uLklEXSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGRvY3NbaV1bJG1zb24uSURdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW3VwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZG9jc1tpXVskbXNvbi5JRF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUoXG4gICAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICBkb2NzW2ldWyRtc29uLklEXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICB1cGRhdGVbYXR0cmlidXRlTmFtZV0sXG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgIGRvY3NbaV1bJG1zb24uSURdXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE8gbW9yZSBjaGVjayBpbiBjYXNlIG9mIHNjaGVtYSB1cGRhdGVcbiAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG5cbiAgICAgICAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKFxuICAgICAgICAgICAgICAndXBkYXRlJyxcbiAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBkb2NzW2ldWyRtc29uLklEXSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGlkOiBkb2NzW2ldWyRtc29uLklEXSxcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1cGRhdGVkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byByZW1vdmVcbiAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiBkb2N1bWVudHMgaWQgcmVtb3ZlZFxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGRvY3VtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gKiBXaGVuIGEgZG9jdW1lbnQgaXMgcmVtb3ZlZCwgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5DYXJzLnJlbW92ZSh7J2NvZGUnOiAnQVpELTcxJ30pO1xuICogJGRiLkNhcnMucmVtb3ZlKFt7J2NvZGUnOiAnQVpELTcxJ30sIHsnY29kZSc6ICdBWkQtNjUnfV0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShxdWVyeSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIG9iamVjdCA9IHt9O1xuXG4gIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgcXVlcnkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gbXVsdGlSZW1vdmUoY3JpdGVyaWEpIHtcbiAgICAgICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgb2JqZWN0ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgaWYgKGlzVmFsaWQoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgIC5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZygncmVtb3ZlJywgdGhpcy5uYW1lLCBpZCwgJycsICcnKTtcblxuICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICBkZWxldGUgZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgIGlmIChjb3JlRGIuaW5kZXhPZih0aGlzLm5hbWUpID09PSAtMSkge1xuICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICRoZWxwZXJcbiAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAucmVtb3ZlKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY291bnRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDb3VudCB0aGUgbnVtYmVyIG9mIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvblxuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHZhciByZXN1bHQgPSAwO1xuICB2YXIgb2JqZWN0SWQgPSAnJztcblxuICBmb3IgKG9iamVjdElkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgIHJlc3VsdCsrO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlTG9nXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uIENSVUQgYWN0aW9uIHRoYXQgaGFwcGVubmVkXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbiBjb2xsZWN0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgZmllbGQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlIG9mIHRoZSBmaWVsZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgTG9nXG4gKi9cbmV4cG9ydHMuY3JlYXRlTG9nID0gZnVuY3Rpb24gY3JlYXRlTG9nKGFjdGlvbiwgY29sbGVjdGlvbiwgaWQsIGZpZWxkLCB2YWx1ZSkge1xuICB2YXIgbG9nSWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcblxuICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbiB8fCAnJztcbiAgaWQgPSBpZCB8fCAnJztcbiAgZmllbGQgPSBmaWVsZCB8fCAnJztcbiAgdmFsdWUgPSB2YWx1ZSB8fCAnJztcblxuICAvLyBjbGVhbiBsb2cgZXZlcnkgMTAwMCBsb2dzXG4gIGlmIChPYmplY3Qua2V5cyhleHBvcnRzLnN0b3JlLl9Mb2cpLmxlbmd0aCA+IDEwMDApIHtcbiAgICBleHBvcnRzLnN0b3JlLl9Mb2cgPSB7fTtcbiAgfVxuXG4gIGV4cG9ydHMuc3RvcmUuX0xvZ1tsb2dJZF0gPSB7XG4gICAgX2lkOiBsb2dJZCxcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgIGlkOiBpZCxcbiAgICBmaWVsZDogZmllbGQsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9yZGVyOiBpbmNMb2dPcmRlcigpXG4gIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBuZXcgRGF0YWJhc2VDb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY29sbGVjdGlvbiA9IGZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xuICBleHBvcnRzW25hbWVdID0gbmV3IERhdGFiYXNlQ29sbGVjdGlvbihuYW1lKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbXBvcnRTeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBTeXN0ZW0gUnVudGltZSBzeXN0ZW0gdG8gaW1wb3J0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIFN5c3RlbSBSdW50aW1lIHN5c3RlbVxuICogQGRlc2NyaXB0aW9uIEltcG9ydCBhIHN5c3RlbSBpbnRvIHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmltcG9ydFN5c3RlbSA9IGZ1bmN0aW9uIGltcG9ydFN5c3RlbShpbXBvcnRlZFN5c3RlbSkge1xuICByZXR1cm4gaW1wU3lzdGVtKGltcG9ydGVkU3lzdGVtKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBleHBvcnRTeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgc3lzdGVtXG4gKiBAZGVzY3JpcHRpb24gRXhwb3J0IGEgc3lzdGVtXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5leHBvcnRTeXN0ZW0oKTsgLy8gZXhwb3J0IGFsbCB0aGUgc3lzdGVtXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnc2NoZW1hcyc6eyduYW1lJzonUGVyc29uJ319KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsndHlwZXMnOnsnbmFtZSc6J2FkZHJlc3MnfX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnYmVoYXZpb3JzJzp7J2NvbXBvbmVudCc6J2xhdXJlJ319KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBiZWhhdmlvcnNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeydjb21wb25lbnRzJzp7J1BlcnNvbic6IHsnY291bnRyeSc6ICdGcmFuY2UnfX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnc2NoZW1hcyc6eyduYW1lJzonUGVyc29uJ30sJ2NvbXBvbmVudHMnOnsnUGVyc29uJzogeydjb3VudHJ5JzogJ0ZyYW5jZSd9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZXhwb3J0cy5leHBvcnRTeXN0ZW0gPSBmdW5jdGlvbiBleHBvcnRTeXN0ZW0ocGFyYW1zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBpZiAocGFyYW1zKSB7XG4gICAgcmVzdWx0ID0gZXhwU3Vic3lzdGVtKHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZXhwU3lzdGVtKCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIENsZWFyIHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuXG4gIC8vIHJlbW92ZSBjb2xsZWN0aW9uc1xuICBsZW5ndGggPSBjb2xsZWN0aW9ucy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbnNbaV07XG4gICAgZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0ucmVtb3ZlKCk7XG4gIH1cblxuICAvLyByZW1vdmUgaW50ZXJuYWwgY29sbGVjdGlvbnNcbiAgbGVuZ3RoID0gaW50ZXJuYWxEQi5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gaW50ZXJuYWxEQltpXTtcbiAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluaXRcbiAqIEBkZXNjcmlwdGlvbiBJbml0IHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICB2YXIgcnVudGltZVN5c3RlbUlkID0gJyc7XG4gIHZhciBydW50aW1lU3lzdGVtID0gbnVsbDtcblxuICBydW50aW1lU3lzdGVtID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgIF9pZDogJ2U4OWM2MTdiNmIxNWQyNCdcbiAgfSlbMF07XG5cbiAgLy8gY2xlYXIgYWxsIHRoZSBkYXRhIGluIG1lbW9yeVxuICBleHBvcnRzLmNsZWFyKCk7XG4gICRjb21wb25lbnQuY2xlYXIoKTtcbiAgJG1ldGFtb2RlbC5jbGVhcigpO1xuICAkc3RhdGUuY2xlYXIoKTtcbiAgJGJlaGF2aW9yLmNsZWFyKCk7XG5cbiAgLy8gaW5pdCBtZXRhbW9kZWxcbiAgJG1ldGFtb2RlbC5pbml0KCk7XG5cbiAgLy8gcmVpbXBvcnQgU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAgcnVudGltZVN5c3RlbUlkID0gZXhwb3J0cy5pbXBvcnRTeXN0ZW0ocnVudGltZVN5c3RlbSk7XG4gICRjb21wb25lbnQuZ2V0KHJ1bnRpbWVTeXN0ZW1JZCkuc3RhcnQoKTtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGhlbHBlclxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbXNvblxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIHRoZSBtb2R1bGVzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtc29uID0gcmVxdWlyZSgnLi9tc29uLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydHkgKi9cblxudmFyIHJ1bnRpbWVSZWYgPSBudWxsO1xudmFyIHJlcXVpcmVSZWYgPSBudWxsO1xuXG4vKiBQdWJsaWMgbWV0aG9kICovXG5cbi8qKlxuICogQG1ldGhvZCBpc1J1bnRpbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIFN5c3RlbSBSdW50aW1lIGluc3RhbmNlIGV4aXN0c1xuICovXG5leHBvcnRzLmlzUnVudGltZSA9IGZ1bmN0aW9uIGlzUnVudGltZSgpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gIGlmICgkZGIuX1J1bnRpbWUgJiYgJGRiLl9SdW50aW1lLmZpbmQoKS5sZW5ndGgpIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSdW50aW1lXG4gKiBAcmV0dXJucyB7X1J1bnRpbWV9IFN5c3RlbSBSdW50aW1lIGluc3RhbmNlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBTeXN0ZW0gUnVudGltZSBpbnN0YW5jZVxuICovXG5leHBvcnRzLmdldFJ1bnRpbWUgPSBmdW5jdGlvbiBnZXRSdW50aW1lKCkge1xuICB2YXIgcnVudGltZUlkID0gJyc7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgc2VhcmNoID0gJGRiLl9SdW50aW1lLmZpbmQoKTtcblxuICBpZiAoIXJ1bnRpbWVSZWYgJiYgc2VhcmNoWzBdKSB7XG4gICAgcnVudGltZUlkID0gc2VhcmNoWzBdWyRtc29uLklEXTtcbiAgICBydW50aW1lUmVmID0gJGNvbXBvbmVudC5nZXQocnVudGltZUlkKTtcbiAgfVxuXG4gIHJldHVybiBydW50aW1lUmVmO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzT25Ob2RlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIFN5c3RlbSBSdW50aW1lIGlzIHJ1bm5pbmcgb24gbm9kZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaXMgcnVubmluZyBvbiBub2RlXG4gKi9cbmV4cG9ydHMuaXNPbk5vZGUgPSBmdW5jdGlvbiBpc09uTm9kZSgpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFJlcXVpcmVcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSByZXF1aXJlIG9iamVjdFxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmVxdWlyZSBvYmplY3RcbiAqL1xuZXhwb3J0cy5nZXRSZXF1aXJlID0gZnVuY3Rpb24gZ2V0UmVxdWlyZSgpIHtcbiAgaWYgKCFyZXF1aXJlUmVmKSB7XG4gICAgLy8ga2x1ZGdlIGZvciB3ZWJwYWNrXG4gICAgcmVxdWlyZVJlZiA9IGV2YWwoJ3JlcXVpcmUnKTtcbiAgfVxuXG4gIHJldHVybiByZXF1aXJlUmVmO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgdXVpZFxuICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlIGEgdXVpZFxuICovXG5leHBvcnRzLmdlbmVyYXRlSWQgPSBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuICBmdW5jdGlvbiBnZW4oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApLnRvU3RyaW5nKDE2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByZWZpeCgpIHtcbiAgICB2YXIgdmFsaWRQcmVmaXggPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICAgIHJldHVybiB2YWxpZFByZWZpeC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRQcmVmaXgubGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4gZ2V0UHJlZml4KCkgKyBnZW4oKSArIGdlbigpICsgZ2VuKCk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcG9seWZpbGxcbiAqIEBkZXNjcmlwdGlvbiBBZGQgUG9seWZpbGxcbiAqL1xuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAvLyBmaXhpbmcgY29uc3RydWN0b3IubmFtZSBwcm9wZXJ0eSBpbiBJRVxuICAvLyB0YWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjUxNDA3MjMvY29uc3RydWN0b3ItbmFtZS1pcy11bmRlZmluZWQtaW4taW50ZXJuZXQtZXhwbG9yZXJcbiAgaWYgKFxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSB1bmRlZmluZWQgJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnbmFtZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB2YXIgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvblxccyhbXihdezEsfSlcXCgvO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IGZ1bmNOYW1lUmVnZXguZXhlYyh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEgPyByZXN1bHRzWzFdLnRyaW0oKSA6ICcnO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7fVxuICAgIH0pO1xuICB9XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsb2dcbiAqIEByZXF1aXJlcyBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1zb25cbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtc29uID0gcmVxdWlyZSgnLi9tc29uLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgY3VycmVudExldmVsID0gJ3dhcm4nO1xudmFyIGxvZ2dlclJlZiA9IG51bGw7XG52YXIgZmFrZUxvZ2dlclJlZiA9IHtcbiAgY3VycmVudExldmVsOiAnd2FybicsXG4gIGxldmVsOiBmdW5jdGlvbiBkZWJ1ZyhsZXZlbE5hbWUpIHtcbiAgICBpZiAobGV2ZWxOYW1lKSB7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGxldmVsTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsO1xuICB9LFxuICBkZWJ1ZzogZnVuY3Rpb24gZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgY29uc29sZS5sb2coJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICB9XG4gIH0sXG4gIGluZm86IGZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2luZm8nIHx8IHRoaXMuY3VycmVudExldmVsID09PSAnZGVidWcnKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICB9XG4gIH0sXG4gIHdhcm46IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY3VycmVudExldmVsID09PSAnaW5mbycgfHxcbiAgICAgIHRoaXMuY3VycmVudExldmVsID09PSAnd2FybicgfHxcbiAgICAgIHRoaXMuY3VycmVudExldmVsID09PSAnZGVidWcnXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICB9XG4gIH0sXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc29sZS5lcnJvcigncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TG9nZ2VyXG4gKiBAcmV0dXJuIHtfTG9nZ2VyfSBfTG9nZ2VyIGluc3RhbmNlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgX0xvZ2dlciBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBnZXRMb2dnZXIoKSB7XG4gIHZhciBsb2dnZXJJZCA9ICcnO1xuICB2YXIgbG9nZ2VycyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoISRtZXRhbW9kZWwuZ2V0TW9kZWwoJ19Mb2dnZXInKSkge1xuICAgIHJlc3VsdCA9IGZha2VMb2dnZXJSZWY7XG4gIH0gZWxzZSB7XG4gICAgbG9nZ2VycyA9ICRkYi5fTG9nZ2VyLmZpbmQoKTtcbiAgICBpZiAobG9nZ2Vycy5sZW5ndGgpIHtcbiAgICAgIGxvZ2dlcklkID0gbG9nZ2Vyc1swXVskbXNvbi5JRF07XG5cbiAgICAgIGlmICgkY29tcG9uZW50LmdldChsb2dnZXJJZCkpIHtcbiAgICAgICAgbG9nZ2VyUmVmID0gJGNvbXBvbmVudC5nZXQobG9nZ2VySWQpO1xuICAgICAgICByZXN1bHQgPSBsb2dnZXJSZWY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBsZXZlbFxuICogQHBhcmFtIHtTdHJpbmd9IGxldmVsTmFtZSBuYW1lIG9mIHRoZSBsZXZlbFxuICogQGRlc2NyaXB0aW9uIFNldCB0aGUgbGV2ZWwgb2YgdGhlIGxvZ1xuICovXG5leHBvcnRzLmxldmVsID0gZnVuY3Rpb24gbGV2ZWwobGV2ZWxOYW1lKSB7XG4gIGN1cnJlbnRMZXZlbCA9IGxldmVsTmFtZTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICogQGRlc2NyaXB0aW9uIEEgcHJvcGVydHkgb2YgYSBzY2hlbWEgaXMgdW5rbm93blxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eSA9IGZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHNjaGVtYSkge1xuICB2YXIgbWVzc2FnZSA9ICcnO1xuXG4gIGlmIChzY2hlbWFbJG1zb24uTkFNRV0pIHtcbiAgICBtZXNzYWdlID1cbiAgICAgIFwidW5rbm93biBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICtcbiAgICAgIHNjaGVtYVskbXNvbi5OQU1FXSArXG4gICAgICBcIidcIjtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlID0gXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgYSBtb2RlbFwiO1xuICB9XG5cbiAgZ2V0TG9nZ2VyKCkud2FybihtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHBlcm9wZXR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSB0aGUgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5VHlwZShcbiAgcHJvcGVydHlOYW1lLFxuICB0eXBlLFxuICBwcm9wZXJ0eVxuKSB7XG4gIHZhciByZWFsVHlwZSA9XG4gICAgcHJvcGVydHkgJiYgcHJvcGVydHkuY29uc3RydWN0b3JcbiAgICAgID8gcHJvcGVydHkuY29uc3RydWN0b3IubmFtZVxuICAgICAgOiB0eXBlb2YgcHJvcGVydHk7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHZhbHVlIGZvciBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICByZWFsVHlwZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdmFsdWUgZm9yIHR5cGUgZW51bVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVmFsdWUgPSBmdW5jdGlvbiBpbnZhbGlkRW51bVZhbHVlKHZhbHVlLCB0eXBlKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCInXCIgKyB2YWx1ZSArIFwiJyBpcyBhbiBpbnZhbGlkIHZhbHVlIGZvciB0aGUgdHlwZSBlbnVtICdcIiArIHR5cGUgKyBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBjbGFzcyBuYW1lIGZvciBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRDbGFzc05hbWUgPSBmdW5jdGlvbiBpbnZhbGlkQ2xhc3NOYW1lKFxuICBjb21wb25lbnRJZCxcbiAgdHlwZSxcbiAgY29uc3RydWN0b3JOYW1lXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgY29tcG9uZW50ICdcIiArXG4gICAgICBjb21wb25lbnRJZCArXG4gICAgICBcIicgZm9yIGEgY29sbGVjdGlvbjogZXhwZWN0ZWQgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgIGNvbnN0cnVjdG9yTmFtZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIE1pc3NpbmcgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eSA9IGZ1bmN0aW9uIG1pc3NpbmdQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGZvciBhIHNjaGVtYSBvciBhIG1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1pc3Npbmcgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmdcbiAqL1xuZXhwb3J0cy5taXNzaW5nSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiBtaXNzaW5nSW1wbGVtZW50YXRpb24obmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwic2NoZW1hICdcIiArIG5hbWUgKyBcIicgaXMgbWlzc2luZ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLmludmFsaWRUeXBlSW1wID0gZnVuY3Rpb24gaW52YWxpZFR5cGVJbXAocHJvcGVydHksIGNsYXNzTmFtZSkge1xuICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICBcInRoZSBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHkgK1xuICAgICAgXCInIG9mIHRoZSBtb2RlbCAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJyBpcyBpbnZhbGlkXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICogQGRlc2NyaXB0aW9uIE1pc3NpbmcgYSBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5SW1wID0gZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgaW4gdGhlIG1vZGVsICdcIiArIGNsYXNzTmFtZSArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5SW1wID0gZnVuY3Rpb24gdW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBzY2hlbWEpIHtcbiAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgXCJ0aGUgbW9kZWwgJ1wiICsgc2NoZW1hICsgXCInIGhhcyBhbiB1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGEgdHlwZSBkZWZpbml0aW9uXG4gKiBAZGVzY3JpcHRpb24gIFRyeSB0byBhZGQgYW4gaW52YWxpZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSB0eXBlICdcIiArIG5hbWUgKyBcIicgaXMgbm90IHZhbGlkXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgcHJvcGVydHkgbmFtZVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eU5hbWUgPSBmdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlOYW1lKFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBwcm9wZXJ0eU5hbWUsXG4gIHByb3BlcnR5VmFsdWUsXG4gIHR5cGVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG4gIHZhciByZWFsVHlwZSA9ICcnO1xuXG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBjbGFzc0luZm8gPSBcIiAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKVwiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJlYWxUeXBlID1cbiAgICAgIHByb3BlcnR5VmFsdWUgJiYgcHJvcGVydHlWYWx1ZS5jb25zdHJ1Y3RvclxuICAgICAgICA/IHByb3BlcnR5VmFsdWUuY29uc3RydWN0b3IubmFtZVxuICAgICAgICA6IHR5cGVvZiBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB2YWx1ZSBmb3IgcHJvcGVydHkgJ1wiICtcbiAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgICAgdHlwZSArXG4gICAgICAgIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICtcbiAgICAgICAgcmVhbFR5cGUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmVhbFR5cGUgPSB0eXBlICYmIHR5cGUuY29uc3RydWN0b3IgPyB0eXBlLmNvbnN0cnVjdG9yLm5hbWUgOiB0eXBlb2YgdHlwZTtcblxuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdmFsdWUgZm9yIHByb3BlcnR5ICdcIiArXG4gICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkIHR5cGUgJ3N0cmluZycgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICAgIHJlYWxUeXBlICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVhZE9ubHlQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gVHJ5aW5nIHRvIHNldCBhIHJlYWQtb25seSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLnJlYWRPbmx5UHJvcGVydHkgPSBmdW5jdGlvbiByZWFkT25seVByb3BlcnR5KFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBwcm9wZXJ0eU5hbWVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImNhbiBub3Qgc2V0IHJlYWQtb25seSBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGNsYXNzSW5mb1xuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBkb2N1bWVudCBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0ID0gZnVuY3Rpb24gaW52YWxpZERvY3VtZW50T25EYkluc2VydChcbiAgZG9jLFxuICBjb2xsZWN0aW9uTmFtZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGRvY3VtZW50ICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShkb2MpLnJlcGxhY2UoLywvZywgJywgJykgK1xuICAgICAgXCInIChjb2xsZWN0aW9uICdcIiArXG4gICAgICBjb2xsZWN0aW9uTmFtZSArXG4gICAgICBcIicgKVwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiAgSW52YWxpZCBwcm9wZXJ0eSBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKFxuICBjb2xsZWN0aW9uTmFtZSxcbiAgaWQsXG4gIHByb3BlcnR5TmFtZSxcbiAgcHJvcGVydHlWYWx1ZSxcbiAgdHlwZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvZiB0aGUgZG9jdW1lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJyAoY29sbGVjdGlvbiAnXCIgK1xuICAgICAgY29sbGVjdGlvbk5hbWUgK1xuICAgICAgXCInKSB3aXRoIHRoZSB2YWx1ZSAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkocHJvcGVydHlWYWx1ZSkgK1xuICAgICAgXCInOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICB0eXBlICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFVua29udyBwcm9wZXJ0eSBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlID0gZnVuY3Rpb24gdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShcbiAgcHJvcGVydHlOYW1lLFxuICBjb2xsZWN0aW9uTmFtZSxcbiAgaWRcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidW5rbm93biBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBmb3IgZG9jdW1lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJyAoY29sbGVjdGlvbiAnXCIgK1xuICAgICAgY29sbGVjdGlvbk5hbWUgK1xuICAgICAgXCInIClcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25NZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAZGVzY3JpcHRpb24gQ2FsbCBhbiB1bmtub3duIG1ldGhvZCBvZiBhIGNsYXNzXG4gKi9cbmV4cG9ydHMudW5rbm93bk1ldGhvZCA9IGZ1bmN0aW9uIHVua25vd25NZXRob2QoY2xhc3NJZCwgbWV0aG9kTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIGNhbGwgYW4gdW5rbm93biBhY3Rpb24gJ1wiICtcbiAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgXCInIGZvciB0aGUgY2xhc3MgJ1wiICtcbiAgICAgIGNsYXNzSWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ29sbGVjdGlvbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gY3JlYXRlIGFuIGludmFsaWQgRGF0YWJhc2VDb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZENvbGxlY3Rpb25OYW1lID0gZnVuY3Rpb24gaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgbmFtZSBmb3IgdGhlIGNvbGxlY3Rpb24gJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInOiB0aGVyZSBpcyBubyBzY2hlbWEgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFR5cGUgZXhwZWN0ZWQgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgY3VycmVudCB0eXBlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIHJlc3VsdCBvZiBhIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRSZXN1bHRUeXBlID0gZnVuY3Rpb24gaW52YWxpZFJlc3VsdFR5cGUoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWUsXG4gIGV4cGVjdGVkVHlwZSxcbiAgdHlwZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSByZXN1bHQgb2YgYWN0aW9uICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGNsYXNzSW5mbyArXG4gICAgICBcIjogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgZXhwZWN0ZWRUeXBlICtcbiAgICAgIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFVua25vd24gY2xhc3NcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ1bmtvd24gY2xhc3MgbmFtZSAnXCIgKyBjbGFzc05hbWUgKyBcIicgZm9yIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnRJZCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1OdW1iZXIgPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXIoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGNhbGxpbmcgdGhlIGFjdGlvbiAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIiArXG4gICAgICBjbGFzc0luZm9cbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAqIEBkZXNjcmlwdGlvbiAgSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtVHlwZSA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbVR5cGUoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWUsXG4gIHBhcmFtTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBpZiAocGFyYW1OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBwYXJhbWV0ZXIgJ1wiICtcbiAgICAgICAgcGFyYW1OYW1lICtcbiAgICAgICAgXCInIHdoZW4gY2FsbGluZyB0aGUgYWN0aW9uICdcIiArXG4gICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGlkICtcbiAgICAgICAgXCInXCIgK1xuICAgICAgICBjbGFzc0luZm9cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgYSBwYXJhbWV0ZXIgd2hlbiBjYWxsaW5nIHRoZSBhY3Rpb24gJ1wiICtcbiAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mb1xuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBiZWhhdmlvck5vdFVuaXF1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZVxuICovXG5leHBvcnRzLmJlaGF2aW9yTm90VW5pcXVlID0gZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIGFkZCBtb3JlIHRoYW4gb25lIGFjdGlvbiBmb3IgdGhlIHN0YXRlICdcIiArXG4gICAgICBzdGF0ZU5hbWUgK1xuICAgICAgXCInIG9uIGNsYXNzICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gQ2FuIG5vdCBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIGludmFsaWQgc3RhdGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU3RhdGVPbiA9IGZ1bmN0aW9uIGludmFsaWRTdGF0ZU9uKGlkLCBzdGF0ZU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeSB0byBhZGQgYW4gYWN0aW9uIHRvIGFuIHVua3dvd24gc3RhdGUgJ1wiICtcbiAgICAgIHN0YXRlTmFtZSArXG4gICAgICBcIicgb24gY2xhc3MgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT2ZmXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gVGhlIGNhbGwgdG8gYSByZW1vdmUgc3RhdGUgb2YgdGhlIGJlaGF2aW9yIG1vZHVsZSBpcyBpbnZhbGlkXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT2ZmID0gZnVuY3Rpb24gaW52YWxpZFN0YXRlT2ZmKGlkLCBzdGF0ZU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeSB0byByZW1vdmUgYW4gYWN0aW9uIGZyb20gYW4gdW5rd293biBzdGF0ZSAnXCIgK1xuICAgICAgc3RhdGVOYW1lICtcbiAgICAgIFwiJyBvbiBjbGFzcyAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICogQGRlc2NyaXB0aW9uIFRoZSBtYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZFxuICovXG5leHBvcnRzLm1hc3RlclN5c3RlbU5vdEZvdW5kID0gZnVuY3Rpb24gbWFzdGVyU3lzdGVtTm90Rm91bmQoKSB7XG4gIGdldExvZ2dlcigpLndhcm4oJ2NhbiBub3QgZXhwb3J0IHRoZSBkYXRhYmFzZSBiZWNhdXNlIG5vIHN5c3RlbSB3YXMgZGVmaW5lZCcpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlID0gZnVuY3Rpb24gaW52YWxpZFR5cGUobmFtZSwgdmFsdWUsIHR5cGVOYW1lKSB7XG4gIHZhciByZWFsVHlwZSA9XG4gICAgbmFtZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA/IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgOiB0eXBlb2YgdmFsdWU7XG5cbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgdmFsdWUgZm9yIHByb3BlcnR5ICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgdHlwZU5hbWUgK1xuICAgICAgXCInIGluc3RlYWQgb2YgdHlwZSAnXCIgK1xuICAgICAgcmVhbFR5cGUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ29uZmlndXJhdGlvblxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZm9yIHRoZSBjb25maWd1cmF0aW9uXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaW52YWxpZENvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbiBpbnZhbGlkQ29uZmlndXJhdGlvbihvYmosIHR5cGUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgdHlwZSBmb3IgJ1wiICsgSlNPTi5zdHJpbmdpZnkob2JqKSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB2YWx1ZVxuICogQGRlc2NyaXB0aW9uIFVua25vd24gdHlwZVxuICovXG5leHBvcnRzLnVua25vd25UeXBlID0gZnVuY3Rpb24gdW5rbm93blR5cGUodmFsdWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInVua25vd24gdHlwZSBmb3IgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25QYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBzdWJwYXRoXG4gKiBAZGVzY3JpcHRpb24gVW5rbm93biBzdWJwYXRoIGluIGEgcGF0aFxuICovXG5leHBvcnRzLnVua25vd25QYXRoID0gZnVuY3Rpb24gdW5rbm93blBhdGgocGF0aCwgc3VicGF0aCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIHBhdGggJ1wiICsgcGF0aCArIFwiJyBoYXMgYW4gdW5rb3duIHN1YnBhdGggJ1wiICsgc3VicGF0aCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gQSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGFscmVheSBjcmVhdGVkXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBmdW5jdGlvbiBjYW5Ob3RZZXRWYWxpZGF0ZShpZCwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFxuICAgIFwiY2FuIG5vdCB5ZXQgdmFsaWRhdGUgaWYgdGhlIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInIGlzIGFuIGluc3RhbmNlIG9mICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ2hhbm5lbEV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGZ1bmN0aW9uIGludmFsaWRDaGFubmVsRXZlbnQoXG4gIG1lc3NhZ2UsXG4gIGV2ZW50TmFtZSxcbiAgdHlwZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBtZXNzYWdlICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArXG4gICAgICBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInIGZvciBldmVudCAnXCIgK1xuICAgICAgZXZlbnROYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIGJlaGF2aW9yIGFkZCB3aXRoICdvbicgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24gPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGFkZGluZyBhbiBhY3Rpb24gZm9yIHRoZSBzdGF0ZSAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIiArXG4gICAgICBjbGFzc0luZm9cbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1cGRhdGVVdWlkXG4gKiBAcGFyYW0ge1N0cmluZ30gY3VycmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuZXdJZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFscmVhZHlVc2VkIG5ld0lkIGFscmVhZHkgdXNlZFxuICogQGRlc2NyaXB0aW9uIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51cGRhdGVVdWlkID0gZnVuY3Rpb24gdXBkYXRlVXVpZChjdXJyZW50SWQsIG5ld0lkLCBhbHJlYWR5VXNlZCkge1xuICBpZiAoYWxyZWFkeVVzZWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJ0cnkgdG8gdXBkYXRlIGEgY29tcG9uZW50IG9mIGlkICdcIiArXG4gICAgICAgIGN1cnJlbnRJZCArXG4gICAgICAgIFwiJyB3aXRoIHRoZSBuZXcgaWQgJ1wiICtcbiAgICAgICAgbmV3SWQgK1xuICAgICAgICBcIicgdGhhdCBpcyBhbHJlYWR5IHVzZWRcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgK1xuICAgICAgICBjdXJyZW50SWQgK1xuICAgICAgICBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArXG4gICAgICAgIG5ld0lkICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFVzZU9mQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50IHRoYXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gKi9cbmV4cG9ydHMuaW52YWxpZFVzZU9mQ29tcG9uZW50ID0gZnVuY3Rpb24gaW52YWxpZFVzZU9mQ29tcG9uZW50KGlkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRTY2hlbWEgPSBmdW5jdGlvbiBpbnZhbGlkU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBzY2hlbWEgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInIGlzIG5vdCB2YWxpZCwgaXQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBtZXRhbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gYWRkIGFuIGludmFsaWQgbW9kZWxcbiAqL1xuZXhwb3J0cy5pbnZhbGlkTW9kZWwgPSBmdW5jdGlvbiBpbnZhbGlkTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIG1vZGVsICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpcyBub3QgdmFsaWQsIGl0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgbWV0YW1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBwYXJhbWV0ZXJzIHNldCB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVycyA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NJZCArXG4gICAgICBcIicgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGRlc3Ryb3llZENvbXBvbmVudENhbGxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGdldCB0aGUgcHJvcGVydHkgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZGVzdHJveWVkQ29tcG9uZW50Q2FsbCA9IGZ1bmN0aW9uIGRlc3Ryb3llZENvbXBvbmVudENhbGwoXG4gIHByb3BlcnR5TmFtZSxcbiAgaWRcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5aW5nIHRvIGdldCB0aGUgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgb24gdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iamVjdCBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBzY2hlbWEgbmFtZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgcGFyYW1ldGVyIHR5cGUgIHdoZW4gY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzc1xuICovXG5leHBvcnRzLmludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzKFxuICBvYmplY3QsXG4gIG5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIGNvbnN0cnVjdG9yIHBhcmFtZXRlciAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkob2JqZWN0KS5yZXBsYWNlKC8sL2csICcsICcpICtcbiAgICAgIFwiJyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInIGlzIG5vdCBhbiBvYmplY3RcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Nb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBpbmZvcm1hdGlvbiBvZiBhbiB1bmtvd24gbW9kZWxcbiAqL1xuZXhwb3J0cy51bmtub3duTW9kZWwgPSBmdW5jdGlvbiB1bmtub3duTW9kZWwoY2xhc3NJZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIG1vZGVsICdcIiArIGNsYXNzSWQgKyBcIicgZG9lcyBub3QgZXhpc3RcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQSBzY2hlbWEgaXMgbWlzc2luZ1xuICovXG5leHBvcnRzLm1pc3NpbmdTY2hlbWEgPSBmdW5jdGlvbiBtaXNzaW5nU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpcyBtaXNzaW5nXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYSB3aGVyZSB0aGUgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kXG4gKiBAZGVzY3JpcHRpb24gQSBjeWNsaWMgZGVwZW5kZW5jeSB3YXMgZm91bmRcbiAqL1xuZXhwb3J0cy5jeWNsaWNEZXBlbmRlbmN5ID0gZnVuY3Rpb24gY3ljbGljRGVwZW5kZW5jeShuYW1lKSB7XG4gIGlmIChuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgICBcImEgY3ljbGljIGluaGVyaXRhbmNlIGRlcGVuZGVuY3kgd2l0aCB0aGUgc2NoZW1hICdcIiArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICBcIuKAmSBoYXMgYmVlbiBmb3VuZCwgcGxlYXNlIGNoZWNrIHRoZSAnX2luaGVyaXQnIHByb3BlcnR5IG9mIHRoaXMgc2NoZW1hXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLmVycm9yKFxuICAgICAgXCJhIGN5Y2xpYyBpbmhlcml0YW5jZSBkZXBlbmRlbmN5IGhhcyBiZWVuIGZvdW5kLCBwbGVhc2UgY2hlY2sgdGhlICdfaW5oZXJpdCcgcHJvcGVydGllcyBvZiB0aGUgc2NoZW1hc1wiXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVOYW1lIG9mIHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIGZvciBhIHR5cGUgZW51bVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVHlwZSA9IGZ1bmN0aW9uIGludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUsIHR5cGUpIHtcbiAgdmFyIHJlYWxUeXBlID0gJyc7XG5cbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlICE9PSB0eXBlb2YgdmFsdWUpIHtcbiAgICByZWFsVHlwZSA9XG4gICAgICB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA/IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgOiB0eXBlb2YgdmFsdWU7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciB0aGUgdHlwZSAnXCIgK1xuICAgICAgICB0eXBlTmFtZSArXG4gICAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgICB0eXBlICtcbiAgICAgICAgXCInIGluc3RlYWQgb2YgdHlwZSAnXCIgK1xuICAgICAgICByZWFsVHlwZSArXG4gICAgICAgIFwiJ1wiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgdHlwZSAnXCIgKyB0eXBlTmFtZSArIFwiJ1wiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGxvYWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIExvYWQgc2NoZW1hXG4gKi9cbmV4cG9ydHMubG9hZFNjaGVtYSA9IGZ1bmN0aW9uIGxvYWRTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgc2NoZW1hICdcIiArIG5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbG9hZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIExvYWQgbW9kZWxcbiAqL1xuZXhwb3J0cy5sb2FkTW9kZWwgPSBmdW5jdGlvbiBsb2FkTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgbW9kZWwgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBsb2FkVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIExvYWQgdHlwZVxuICovXG5leHBvcnRzLmxvYWRUeXBlID0gZnVuY3Rpb24gbG9hZFR5cGUobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgdHlwZSAnXCIgKyBuYW1lICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNvbXBpbGVTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIENvbXBpbGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuY29tcGlsZVNjaGVtYSA9IGZ1bmN0aW9uIGNvbXBpbGVTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImNvbXBpbGUgc2NoZW1hICdcIiArIG5hbWUgKyBcIicuLi5cIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2VuZXJhdGVNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSBtb2RlbFxuICovXG5leHBvcnRzLmdlbmVyYXRlTW9kZWwgPSBmdW5jdGlvbiBnZW5lcmF0ZU1vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJnZW5lcmF0aW5nIG1vZGVsICdcIiArIG5hbWUgKyBcIicuLi5cIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBtb2RlbFxuICovXG5leHBvcnRzLmNoZWNrTW9kZWwgPSBmdW5jdGlvbiBjaGVja01vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJhbmFseXppbmcgbW9kZWwgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jcmVhdGVDb2xsZWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlQ29sbGVjdGlvbihuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiJ1wiICsgbmFtZSArIFwiJyBkYXRhYmFzZSBjb2xsZWN0aW9uIGNyZWF0ZWRcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGNsYXNzXG4gKi9cbmV4cG9ydHMuY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiBjcmVhdGVDbGFzcyhuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiJ1wiICsgbmFtZSArIFwiJyBjbGFzcyBjcmVhdGVkXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25CZWdpblxuICogQGRlc2NyaXB0aW9uIEJlZ2lucyBtb2RlbCBjcmVhdGlvblxuICovXG5leHBvcnRzLm1vZGVsQ3JlYXRpb25CZWdpbiA9IGZ1bmN0aW9uIG1vZGVsQ3JlYXRpb25CZWdpbigpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoJ3N0YXJ0aW5nIG1vZGVsIGNyZWF0aW9uLi4uJyk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkVuZFxuICogQGRlc2NyaXB0aW9uIEVuZCBtb2RlbCBjcmVhdGlvblxuICovXG5leHBvcnRzLm1vZGVsQ3JlYXRpb25FbmQgPSBmdW5jdGlvbiBtb2RlbENyZWF0aW9uRW5kKCkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZygnbW9kZWwgY3JlYXRpb24gZW5kZWQnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBhY3Rpb25JbnZva2VFcnJvclxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNvbXBvbmVudCBjbGFzcyBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICogQGRlc2NyaXB0aW9uIEFuIGVycm9yIGhhcHBlbmVkIHdoZW4gaW52b2tpbmcgYSBiZWhhdmlvclxuICovXG5leHBvcnRzLmFjdGlvbkludm9rZUVycm9yID0gZnVuY3Rpb24gYWN0aW9uSW52b2tlRXJyb3IoXG4gIHN0YXRlLFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBtZXNzYWdlXG4pIHtcbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGdldExvZ2dlcigpLmVycm9yKFxuICAgICAgXCJlcnJvciB3aGVuIGNhbGxpbmcgdGhlIGFjdGlvbiAnXCIgK1xuICAgICAgICBzdGF0ZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIicgKGNsYXNzICdcIiArXG4gICAgICAgIGNsYXNzTmFtZSArXG4gICAgICAgIFwiJyk6IFwiICtcbiAgICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgICBcImVycm9yIHdoZW4gY2FsbGluZyB0aGUgYWN0aW9uICdcIiArXG4gICAgICAgIHN0YXRlICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJzogXCIgK1xuICAgICAgICBtZXNzYWdlXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBuYW1lIGZvciB0aGUgcHJvcGVydHkgb2YgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gaW52YWxpZFNjaGVtYVByb3BlcnR5TmFtZShcbiAgbmFtZSxcbiAgcHJvcE5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBuYW1lICdcIiArXG4gICAgICBwcm9wTmFtZSArXG4gICAgICBcIicgZm9yIHNjaGVtYSAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIic6IGEgcHJvcGVydHkgbmFtZSBjYW4gbm90IGJlZ2luIHdpdGggJ18nXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBuYW1lIGZvciB0aGUgcHJvcGVydHkgb2YgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hUHJvcGVydHkgPSBmdW5jdGlvbiBpbnZhbGlkU2NoZW1hUHJvcGVydHkobmFtZSwgcHJvcE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BOYW1lICtcbiAgICAgIFwiJyBmb3Igc2NoZW1hICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJzogb25seSAncHJvcGVydHknLCAnbGluaycsICdjb2xsZWN0aW9uJywgJ21ldGhvZCcgYW5kICdldmVudCcgYXJlIGFsbG93ZWRcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eUZvcm1hdFxuICogQHBhcmFtIHtTdHJpbmd9IG9iaiBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIGZvcm1hdCBmb3IgdGhlIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eUZvcm1hdCA9IGZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eUZvcm1hdChvYmopIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgZm9ybWF0IGZvciBhIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eTogJ1wiICtcbiAgICAgIG9iaiArXG4gICAgICBcIicgaXMgbm90IGFuIG9iamVjdFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBpbnZhbGlkIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRTdGF0ZShtb2RlbCwgc3RhdGUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgc3RhdGUgJ1wiICsgc3RhdGUgKyBcIicgZm9yIHRoZSBtb2RlbCAnXCIgKyBtb2RlbCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93bkNvbnRleHRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQGRlc2NyaXB0aW9uIEludm9rZSBhIG1ldGhvZCBjbGFzcyB3aXRob3V0IGEgY29udGV4dFxuICovXG5leHBvcnRzLnVua25vd25Db250ZXh0ID0gZnVuY3Rpb24gdW5rbm93bkNvbnRleHQoY2xhc3NOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZva2UgdGhlIGFjdGlvbiAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gdGhlIGNsYXNzICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInIHdpdGhvdXQgYSB2YWxpZCBjb250ZXh0XCJcbiAgKTtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgbG9nXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEByZXF1aXJlcyBtc29uXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwuXG4gKiBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwgbG9hZHMgc2NoZW1hcyBhbmQgdHlwZXMsIGFuYWx5emVzIHRoZW0gYW5kXG4gKiBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBEYXRhYmFzZUNvbGxlY3Rpb25zLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJG1zb24gPSByZXF1aXJlKCcuL21zb24uanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBzdG9yZSA9IHtcbiAgaW5oZXJpdGFuY2U6IHt9LFxuICBpbmhlcml0YW5jZVRyZWU6IHt9LFxuICBzY2hlbWFzOiB7fSxcbiAgY29tcGlsZWRTY2hlbWFzOiB7fSxcbiAgbW9kZWxzOiB7fSxcbiAgZ2VuZXJhdGVkTW9kZWxzOiB7fSxcbiAgc3RhdGVzOiB7fSxcbiAgdHlwZToge31cbn07XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgaXNJbnRlcm5hbE5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIGlzIG5hbWUgYW4gaW50ZXJuYWwgbmFtZVxuICovXG5mdW5jdGlvbiBpc0ludGVybmFsTmFtZShuYW1lKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIGlmICgkbXNvbi5JTlRFUk5BTF9OQU1FUy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSB0aGUgbW9kZWxzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTW9kZWxzKCkge1xuICB2YXIgYXR0ID0gJyc7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBzY2hlbWFOYW1lID0gJyc7XG4gIHZhciBzY2hlbWEgPSB7fTtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxQYXJlbnQgPSBudWxsO1xuICB2YXIgbW9kZWxFeHQgPSBudWxsO1xuICB2YXIgbW9kZWxEZWYgPSBudWxsO1xuICB2YXIgbW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IHt9O1xuICB2YXIgbWVyZ2VkTW9kZWwgPSB7fTtcbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgbmJBbmNlc3RvcnMgPSAwO1xuICB2YXIgc29ydEluaGVyaXRUcmVlID0gW107XG5cbiAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgZm9yIChzY2hlbWFOYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tzY2hlbWFOYW1lXTtcblxuICAgIC8vIHNldCBtb2RlbCBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgbW9kZWwgPSB7XG4gICAgICBfbmFtZTogc2NoZW1hWyRtc29uLk5BTUVdXG4gICAgfTtcblxuICAgIC8vIHNldCBfY29yZVxuICAgIGlmICh0eXBlb2Ygc2NoZW1hWyRtc29uLkNPUkVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbW9kZWxbJG1zb24uQ09SRV0gPSBzY2hlbWFbJG1zb24uQ09SRV07XG4gICAgfVxuXG4gICAgLy8gc2V0IGluaGVyaXRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWFbJG1zb24uSU5IRVJJVF0pKSB7XG4gICAgICBtb2RlbFskbXNvbi5JTkhFUklUXSA9IHNjaGVtYVskbXNvbi5JTkhFUklUXTtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3NcbiAgICBpZiAodHlwZW9mIHNjaGVtYVskbXNvbi5DTEFTU10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtb2RlbFskbXNvbi5DTEFTU10gPSBzY2hlbWFbJG1zb24uQ0xBU1NdO1xuICAgIH1cblxuICAgIC8vIHNldCBkZXNjcmlwdGlvblxuICAgIGlmICh0eXBlb2Ygc2NoZW1hWyRtc29uLkRFU0NSSVBUSU9OXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vZGVsWyRtc29uLkRFU0NSSVBUSU9OXSA9IHNjaGVtYVskbXNvbi5ERVNDUklQVElPTl07XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgdmFsaWQgbmFtZVxuICAgIGZvciAoYXR0IGluIHNjaGVtYSkge1xuICAgICAgaWYgKCFpc0ludGVybmFsTmFtZShhdHQpICYmIGF0dC5pbmRleE9mKCdfJykgPT09IDApIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lKHNjaGVtYVskbXNvbi5OQU1FXSwgYXR0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAgc2V0IG1vZGVsIGRlZmF1bHQgdmFsdWVzXG4gICAgZm9yIChhdHQgaW4gc2NoZW1hKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ3Byb3BlcnR5JzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdsaW5rJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogJ19Db21wb25lbnQnLFxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dCxcbiAgICAgICAgICAgIGxhYmVsOiBhdHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnbWV0aG9kJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYW0xJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJhbTInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFtMycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZXN1bHQ6ICdhbnknLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdldmVudCc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFtMScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYW0yJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJhbTMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdjb2xsZWN0aW9uJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogWydfQ29tcG9uZW50J10sXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZShhdHQpKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRTY2hlbWFQcm9wZXJ0eShzY2hlbWFbJG1zb24uTkFNRV0sIGF0dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbFskbXNvbi5OQU1FXV0gPSBtb2RlbDtcbiAgfVxuXG4gIC8vIG1vZGVscyB0byBvdmVycmlkZVxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIG5hbWUgPSBtb2RlbFskbXNvbi5OQU1FXTtcbiAgICBtb2RlbEV4dCA9IHN0b3JlLm1vZGVsc1tuYW1lXTtcbiAgICBpZiAobW9kZWxFeHQpIHtcbiAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxFeHQsIG1vZGVsKTtcbiAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluaGVyaXRhbmNlXG4gIHNvcnRJbmhlcml0VHJlZSA9IHNvcnRJbmhlcml0YW5jZVRyZWUoKTtcblxuICBuYkFuY2VzdG9ycyA9IHNvcnRJbmhlcml0VHJlZS5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBuYkFuY2VzdG9yczsgaSsrKSB7XG4gICAgbW9kZWxOYW1lID0gc29ydEluaGVyaXRUcmVlW2ldO1xuICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG5cbiAgICBpZiAobW9kZWwpIHtcbiAgICAgIHBhcmVudHMgPSBleHBvcnRzLmdldFBhcmVudHMobW9kZWxOYW1lKTtcbiAgICAgIHBhcmVudHMucmV2ZXJzZSgpO1xuXG4gICAgICB2YXIgbW9kZWxUb01lcmdlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtb2RlbCkpO1xuXG4gICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICBuYW1lID0gcGFyZW50c1tqXTtcbiAgICAgICAgbW9kZWxQYXJlbnQgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgICAgIGlmIChtb2RlbFBhcmVudCkge1xuICAgICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxQYXJlbnQsIG1vZGVsKTtcbiAgICAgICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGxhc3QgaW5oZXJpdFxuICAgICAgLy8gaXMgdGhlIG92ZXJyaWRlbiBtb2RlbFxuICAgICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgIGlmIChtb2RlbEV4dCkge1xuICAgICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsRXh0LCBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gc2F2ZVxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICRkYi5fR2VuZXJhdGVkTW9kZWwuaW5zZXJ0KG1vZGVsRGVmKTtcblxuICAgIGlmICghbW9kZWxEZWZbJG1zb24uQ09SRV0pIHtcbiAgICAgICRsb2cuZ2VuZXJhdGVNb2RlbChtb2RlbE5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgbG9hZEluTWVtb3J5XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIExvYWQgc2NoZW1hcyBhbmQgdHlwZXMgaW4gbWVtb3J5XG4gKi9cbmZ1bmN0aW9uIGxvYWRJbk1lbW9yeSgpIHtcbiAgdmFyIHNjaGVtYXMgPSBbXTtcbiAgdmFyIHR5cGVzID0gW107XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgbW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IFtdO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgaW5oZXJpdCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIC8vIGluaXQgc3RvcmVcbiAgc3RvcmUuaW5oZXJpdGFuY2UgPSB7fTtcbiAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlID0ge307XG4gIHN0b3JlLnNjaGVtYXMgPSB7fTtcbiAgc3RvcmUuY29tcGlsZWRTY2hlbWFzID0ge307XG4gIHN0b3JlLm1vZGVscyA9IHt9O1xuICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMgPSB7fTtcbiAgc3RvcmUuc3RhdGVzID0ge307XG4gIHN0b3JlLnR5cGUgPSB7fTtcblxuICAvLyBsb2FkIHNjaGVtYXNcbiAgc2NoZW1hcyA9ICRkYi5fU2NoZW1hLmZpbmQoe30pO1xuXG4gIGxlbmd0aCA9IHNjaGVtYXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBzY2hlbWEgPSBzY2hlbWFzW2ldO1xuXG4gICAgbmFtZSA9IHNjaGVtYVskbXNvbi5OQU1FXTtcbiAgICBpbmhlcml0ID0gc2NoZW1hWyRtc29uLklOSEVSSVRdO1xuXG4gICAgc3RvcmUuc2NoZW1hc1tuYW1lXSA9IHNjaGVtYTtcbiAgICBpZiAoaW5oZXJpdCkge1xuICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0gPSBpbmhlcml0O1xuICAgIH1cblxuICAgIGlmICghc2NoZW1hWyRtc29uLkNPUkVdKSB7XG4gICAgICAkbG9nLmxvYWRTY2hlbWEobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbG9hZCBtb2RlbHNcbiAgbW9kZWxzID0gJGRiLl9Nb2RlbC5maW5kKHt9KTtcblxuICBsZW5ndGggPSBtb2RlbHMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBtb2RlbCA9IG1vZGVsc1tpXTtcbiAgICBuYW1lID0gbW9kZWxbJG1zb24uTkFNRV07XG5cbiAgICBzdG9yZS5tb2RlbHNbbmFtZV0gPSBtb2RlbDtcblxuICAgIGlmICghbW9kZWxbJG1zb24uQ09SRV0pIHtcbiAgICAgICRsb2cubG9hZE1vZGVsKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvYWQgdHlwZXNcbiAgdHlwZXMgPSAkZGIuX1R5cGUuZmluZCh7fSk7XG5cbiAgbGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0eXBlID0gdHlwZXNbaV07XG4gICAgc3RvcmUudHlwZVt0eXBlLm5hbWVdID0gdHlwZTtcblxuICAgIGlmICghdHlwZS5jb3JlKSB7XG4gICAgICAkbG9nLmxvYWRUeXBlKHR5cGUubmFtZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVJbmhlcml0YW5jZVRyZWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIHRoZSBpbmhlcml0YW5jZSB0cmVlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluaGVyaXRhbmNlVHJlZSgpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIGMzbGluZXJpemF0aW9uID0gW107XG4gIHZhciBhbmNlc3RvcnMgPSBbXTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGFsbCB0aGUgYXJyYXlzIGFyZSBlbXB0eVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gIENoZWNrIGlmIHdlIGhhdmUgZmluaXNlaGQgdG8gbGluZXJpemVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc0VtcHR5KGVsdHMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbHRzW2ldLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWx0IGVsZW1lbnQgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFuIGVsdCBmcm9tIGFsbCB0aGUgYXJyYXlzXG4gICAqL1xuICBmdW5jdGlvbiBfcmVtb3ZlQ2FuZGlkYXRlKGVsdCwgZWx0cykge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgYXJyID0gW107XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA9PT0gMCkge1xuICAgICAgICBhcnIgPSBlbHRzW2ldO1xuICAgICAgICBhcnIucmV2ZXJzZSgpO1xuICAgICAgICBhcnIucG9wKCk7XG4gICAgICAgIGFyci5yZXZlcnNlKCk7XG4gICAgICAgIGVsdHNbaV0gPSBhcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzQ2FuZGlkYXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbHQgZWxlbWVudCB0byByZW1vdmVcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGEgZ29vZCBjYW5kaWRhdGUuXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayB0aGUgZWxlbWVudCBpcyBhIGdvb2QgY2FuZGlkYXRlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNDYW5kaWRhdGUoZWx0LCBlbHRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWx0c1tpXS5pbmRleE9mKGVsdCkgPiAwKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZmluZENhbmRpZGF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHJldHVybnMge0FycmF5fSBhcnJheSBjb250YWluaW5nIHRoZSBjYW5kaWRhdGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIEZpbmQgYSBjYW5kaWRhdGUgYW5kIHJldHVybiBpdC5cbiAgICovXG4gIGZ1bmN0aW9uIF9maW5kQ2FuZGlkYXRlKGVsdHMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX2lzQ2FuZGlkYXRlKGVsdHNbaV1bMF0sIGVsdHMpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsdHNbaV1bMF0pO1xuICAgICAgICBfcmVtb3ZlQ2FuZGlkYXRlKGVsdHNbaV1bMF0sIGVsdHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9tZXJnZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIGNhbmRpZGF0ZXMgcmV0dXJuZWQgYnkgdGhlIG1lcmdlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBNZXJnZSB0aGUgYXJyYXlzXG4gICAqL1xuICBmdW5jdGlvbiBfbWVyZ2UoZWx0cykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuXG4gICAgY2FuZGlkYXRlcyA9IF9maW5kQ2FuZGlkYXRlKGVsdHMpO1xuICAgIHdoaWxlIChjYW5kaWRhdGVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzID0gX2ZpbmRDYW5kaWRhdGUoZWx0cyk7XG4gICAgfVxuXG4gICAgaWYgKCFfaXNFbXB0eShlbHRzKSkge1xuICAgICAgJGxvZy5jeWNsaWNEZXBlbmRlbmN5KCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbGluZXJpemVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgY2FuZGlkYXRlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gU3RhcnQgdGhlIGxpbmVyaWVhdGlvbiBmcm9tIGFuIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9saW5lcml6ZShuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBfY2hlY2tDeWNsaWNEZXBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hlY2tDeWNsaWNEZXAobmFtZSwgaXRlbSkge1xuICAgICAgdmFyIGlzQ3ljbGljRGViID0gZmFsc2U7XG5cbiAgICAgIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtpdGVtXSkgJiZcbiAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbaXRlbV0uaW5kZXhPZihuYW1lKSAhPT0gLTFcbiAgICAgICkge1xuICAgICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3kobmFtZSk7XG4gICAgICAgIGlzQ3ljbGljRGViID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0N5Y2xpY0RlYjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtuYW1lXSkpIHtcbiAgICAgIHBhcmVudHMgPSBzdG9yZS5pbmhlcml0YW5jZVtuYW1lXS5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLm1pc3NpbmdTY2hlbWEobmFtZSk7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX2NoZWNrQ3ljbGljRGVwKG5hbWUsIHBhcmVudHNbaV0pKSB7XG4gICAgICAgIHBhcmVudHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBbbmFtZV0uY29uY2F0KF9tZXJnZShwYXJlbnRzLm1hcChfbGluZXJpemUpLmNvbmNhdChbcGFyZW50c10pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgIGMzbGluZXJpemF0aW9uID0gX2xpbmVyaXplKG5hbWUpO1xuICAgIGFuY2VzdG9ycyA9IGMzbGluZXJpemF0aW9uLnJldmVyc2UoKTtcbiAgICBhbmNlc3RvcnMucG9wKCk7XG4gICAgaWYgKGFuY2VzdG9ycy5sZW5ndGgpIHtcbiAgICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXSA9IGFuY2VzdG9ycztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGV4dGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHRvIGV4dGVuZFxuICogQHJldHVybnMge0pTT059IG9iamVjdCBleHRlbmRlZCB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRXh0ZW5kIGEgc2NoZW1hIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudFxuICovXG5mdW5jdGlvbiBleHRlbmQobmFtZSkge1xuICB2YXIgc29uRXh0ZW5kID0ge307XG4gIHZhciBzb24gPSBzdG9yZS5zY2hlbWFzW25hbWVdO1xuICB2YXIgYW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW25hbWVdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgYW5jZXN0b3IgPSBudWxsO1xuICB2YXIgcHJvcCA9ICcnO1xuXG4gIGlmIChhbmNlc3RvcnMpIHtcbiAgICBsZW5ndGggPSBhbmNlc3RvcnMubGVuZ3RoO1xuICAgIGFuY2VzdG9ycy5yZXZlcnNlKCk7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYW5jZXN0b3IgPSBzdG9yZS5zY2hlbWFzW2FuY2VzdG9yc1tpXV07XG4gICAgZm9yIChwcm9wIGluIGFuY2VzdG9yKSB7XG4gICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgc29uRXh0ZW5kW3Byb3BdID0gYW5jZXN0b3JbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAocHJvcCBpbiBzb24pIHtcbiAgICBzb25FeHRlbmRbcHJvcF0gPSBzb25bcHJvcF07XG4gIH1cbiAgcmV0dXJuIHNvbkV4dGVuZDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIHNvcnRJbmhlcml0YW5jZVRyZWVcbiAqIEByZXR1cm5zIHtBcnJheX0gc29ydGVkIEluaGVyaXRhbmNlVHJlZSBzdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHNvcnRlZCBJbmhlcml0YW5jZVRyZWUgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIHNvcnRJbmhlcml0YW5jZVRyZWUoKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHRlbXAgPSB7fTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbmJBbmNlc3RvcnMgPSAwO1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmluaGVyaXRhbmNlVHJlZSkge1xuICAgIG5iQW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW21vZGVsTmFtZV0ubGVuZ3RoO1xuICAgIGlmICh0eXBlb2YgdGVtcFtuYkFuY2VzdG9yc10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0ZW1wW25iQW5jZXN0b3JzXSA9IFtdO1xuICAgIH1cbiAgICB0ZW1wW25iQW5jZXN0b3JzXS5wdXNoKG1vZGVsTmFtZSk7XG4gIH1cblxuICBrZXlzID0gT2JqZWN0LmtleXModGVtcCkuc29ydCgpO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB0ZW1wW2luZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICByZXN1bHQucHVzaChtb2RlbCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjb21waWxlU2NoZW1hc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgdGhlIG1vZGVsc1xuICovXG5mdW5jdGlvbiBjb21waWxlU2NoZW1hcygpIHtcbiAgdmFyIG5hbWUgPSAnJztcblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuc2NoZW1hcykge1xuICAgIGlmICghc3RvcmUuc2NoZW1hc1tuYW1lXVskbXNvbi5DT1JFXSkge1xuICAgICAgJGxvZy5jb21waWxlU2NoZW1hKG5hbWUpO1xuICAgIH1cblxuICAgIHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXSA9IGV4dGVuZChuYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tNb2RlbHNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhbGwgdGhlIG1vZGVscyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZWlyIHNjaGVtYXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tNb2RlbHMoKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBjbGFzc0RlZiA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSAnJztcblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgY2xhc3NEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgaWYgKGNsYXNzRGVmKSB7XG4gICAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgIGlmICghY2xhc3NEZWZbJG1zb24uQ09SRV0pIHtcbiAgICAgICAgICAkbG9nLmNoZWNrTW9kZWwobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJbXAoY2xhc3NEZWYsIHNjaGVtYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLm1pc3NpbmdJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0YXRlc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBzdGF0ZXMgb2YgYSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHR5cGUgPSAnJztcbiAgdmFyIHN0YXRlcyA9IFtdO1xuICB2YXIgYXR0cmlidXRlID0gJyc7XG5cbiAgZm9yIChuYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgIHN0YXRlcyA9IFtdO1xuICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXTtcbiAgICBpZiAoc2NoZW1hKSB7XG4gICAgICBmb3IgKGF0dHJpYnV0ZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgdHlwZSA9IHNjaGVtYVthdHRyaWJ1dGVdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYXR0cmlidXRlLmluZGV4T2YoJ18nKSAhPT0gMCAmJlxuICAgICAgICAgICRtc29uLklOVEVSTkFMX1RZUEVTLmluZGV4T2YodHlwZSkgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc3RvcmUuc3RhdGVzW25hbWVdID0gc3RhdGVzO1xuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja0ltcFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0RlZiBzY2hlbWEgdG8gdGVzdFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0ltcCBzY2hlbWEgdG8gdmFsaWRhdGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBpdHMgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGNoZWNrSW1wKGNsYXNzRGVmLCBjbGFzc0ltcCkge1xuICB2YXIgcHJvcGVydHkgPSAnJztcbiAgdmFyIHZhbHVlID0gbnVsbDtcblxuICBmb3IgKHByb3BlcnR5IGluIGNsYXNzSW1wKSB7XG4gICAgaWYgKFxuICAgICAgcHJvcGVydHkgIT09ICRtc29uLklEICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gJG1zb24uTkFNRSAmJlxuICAgICAgcHJvcGVydHkgIT09ICRtc29uLkRFU0NSSVBUSU9OICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gJG1zb24uSU5IRVJJVCAmJlxuICAgICAgcHJvcGVydHkgIT09ICRtc29uLkNMQVNTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gJG1zb24uQ09SRVxuICAgICkge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc0RlZltwcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhbHVlID0gY2xhc3NEZWZbcHJvcGVydHldO1xuICAgICAgICBpZiAoIWNoZWNrU2NoZW1hKHZhbHVlLCBjbGFzc0ltcFtwcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbJG1zb24uTkFNRV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbJG1zb24uTkFNRV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBpZiBhbGwgcHJvcGVydGllcyBhcmUgdGhlcmVcbiAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0RlZikge1xuICAgIGlmIChcbiAgICAgIHByb3BlcnR5ICE9PSAkbXNvbi5JRCAmJlxuICAgICAgcHJvcGVydHkgIT09ICRtc29uLk5BTUUgJiZcbiAgICAgIHByb3BlcnR5ICE9PSAkbXNvbi5ERVNDUklQVElPTiAmJlxuICAgICAgcHJvcGVydHkgIT09ICRtc29uLklOSEVSSVQgJiZcbiAgICAgIHByb3BlcnR5ICE9PSAkbXNvbi5DTEFTUyAmJlxuICAgICAgcHJvcGVydHkgIT09ICRtc29uLkNPUkVcbiAgICApIHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NJbXBbcHJvcGVydHldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbJG1zb24uTkFNRV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tTY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGEgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tTY2hlbWEodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgaWYgKGhhc1R5cGUodHlwZSwgJ3N0cmluZycpICYmICRtc29uLkRFRkFVTFRfVFlQRVMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrQ3VzdG9tU2NoZW1hXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGEgdmFsdWUgaGFzIGNvcnJlY3QgY3VzdG9tIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIGlmICghaGFzVHlwZSh0eXBlRGVmLCAndW5kZWZpbmVkJykpIHtcbiAgICBpZiAoIWhhc1R5cGUodmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKHR5cGVEZWYudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRTY2hlbWEodmFsdWVbaV0sIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkVHlwZSh2YWx1ZVtpXSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRTY2hlbWEodmFsdWUsIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpbml0RGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW5pdCB0aGUgRGF0YWJhc2Ugc3R1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gaW5pdERiU3RydWN0dXJlKCkge1xuICAkZGIuY29sbGVjdGlvbignX0xvZ2dlcicpO1xuICAkZGIuY29sbGVjdGlvbignX1NjaGVtYScpO1xuICAkZGIuY29sbGVjdGlvbignX01vZGVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfR2VuZXJhdGVkTW9kZWwnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19DbGFzc0luZm8nKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19CZWhhdmlvcicpO1xuICAkZGIuY29sbGVjdGlvbignX1N0YXRlJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfVHlwZScpO1xuICAkZGIuY29sbGVjdGlvbignX01lc3NhZ2UnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19DaGFubmVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfTG9nJyk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVEYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgdGhlIERhdGFiYXNlIHN0cnVjdHVyZSAoaS5lLiBEYXRhYmFzZUNvbGxlY3Rpb24pXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURiU3RydWN0dXJlKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBtb2RlbERlZiA9IHt9O1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKFxuICAgICAgdHlwZW9mICRkYlttb2RlbERlZlskbXNvbi5OQU1FXV0gPT09ICd1bmRlZmluZWQnICYmXG4gICAgICBtb2RlbERlZlskbXNvbi5DTEFTU10gIT09IGZhbHNlXG4gICAgKSB7XG4gICAgICAkZGIuY29sbGVjdGlvbihtb2RlbERlZlskbXNvbi5OQU1FXSk7XG5cbiAgICAgIGlmICghbW9kZWxEZWZbJG1zb24uQ09SRV0pIHtcbiAgICAgICAgJGxvZy5jcmVhdGVDb2xsZWN0aW9uKG1vZGVsRGVmWyRtc29uLk5BTUVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhbGwgdGhlIGNsYXNzZXMgb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBtb2RlbERlZiA9IHt9O1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKG1vZGVsRGVmWyRtc29uLkNMQVNTXSAhPT0gZmFsc2UpIHtcbiAgICAgICRjb21wb25lbnQuY3JlYXRlKHtcbiAgICAgICAgbW9kZWw6IG1vZGVsTmFtZVxuICAgICAgfSk7XG4gICAgICBpZiAoIW1vZGVsRGVmWyRtc29uLkNPUkVdKSB7XG4gICAgICAgICRsb2cuY3JlYXRlQ2xhc3MobW9kZWxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzSW5mb1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYWxsIHRoZSBDbGFzc0luZm8gb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzSW5mbygpIHtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxEZWYgPSB7fTtcbiAgdmFyIG5hbWUgPSAnJztcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIG5hbWUgPSBtb2RlbERlZlskbXNvbi5OQU1FXSArICdJbmZvJztcblxuICAgIGlmIChcbiAgICAgIG1vZGVsRGVmWyRtc29uLkNMQVNTXSAhPT0gZmFsc2UgJiZcbiAgICAgIGV4cG9ydHMuaW5oZXJpdEZyb20obW9kZWxEZWZbJG1zb24uTkFNRV0sICdfQ29tcG9uZW50JylcbiAgICApIHtcbiAgICAgIGlmICghJGNvbXBvbmVudC5nZXQobmFtZSkpIHtcbiAgICAgICAgJGRiLl9DbGFzc0luZm8uaW5zZXJ0KHtcbiAgICAgICAgICBfaWQ6IG5hbWUsXG4gICAgICAgICAgc2NoZW1hOiBzdG9yZS5jb21waWxlZFNjaGVtYXNbbW9kZWxOYW1lXSxcbiAgICAgICAgICBtb2RlbDogbW9kZWxEZWZcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZGIuX0NsYXNzSW5mby51cGRhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgX2lkOiBuYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfaWQ6IG5hbWUsXG4gICAgICAgICAgICBzY2hlbWE6IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1ttb2RlbE5hbWVdLFxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsRGVmXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmVhbENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0UmVhbENsYXNzTmFtZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUudHJpbSgpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmVhbFR5cGVOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHJlYWwgbmFtZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHJlYWwgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGdldFJlYWxUeXBlTmFtZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZSgneycsICcnKVxuICAgIC5yZXBsYWNlKCd9JywgJycpXG4gICAgLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGlzQ3VzdG9tVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIGEgY3VzdG9tIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNDdXN0b21UeXBlKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPVxuICAgIGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKSAmJlxuICAgICRtc29uLkRFRkFVTFRfVFlQRVMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmXG4gICAgIWV4cG9ydHMuaXNDbGFzc05hbWUodmFsdWUpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc1R5cGVSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIHJlZmVyZW5jZSBhIHR5cGUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gaXNUeXBlUmVmZXJlbmNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCd7JykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNNb2RlbFBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIG1vZGVsIHBhdGhcbiAqL1xuZnVuY3Rpb24gaXNNb2RlbFBhdGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTE7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZWFsVHlwZVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gdHlwZSBvZiB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIHR5cGUgb2YgYSB2YWx1ZVxuICovXG5mdW5jdGlvbiBnZXRSZWFsVHlwZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknO1xuICB9IGVsc2Uge1xuICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSAnYW55Jykge1xuICAgIHR5cGUgPSAnYW55JztcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0Q2xhc3NOYW1lXG4gKiBAcGFyYW0ge3R5cGV9IG9iaiBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdFxuICovXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUob2JqKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBpZiAob2JqICYmIG9iai5jb25zdHJ1Y3Rvcikge1xuICAgIHJlc3VsdCA9IG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHR5cGVvZiBvYmo7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gZW51bVZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgYSB2YWxpZCBlbnVtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbnVtVmFsdWUodmFsdWUsIGVudW1WYWx1ZSkge1xuICByZXR1cm4gZW51bVZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlXG4gKiBAcGFyYW0ge3R5cGV9IHR5cGVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlzIHZhbHVlIGhhcyB0eXBlICd0eXBlJ1xuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaGFzIHRoZSBzcGVjaWZpZWQgdHlwZVxuICovXG5mdW5jdGlvbiBoYXNUeXBlKHZhbHVlLCB0eXBlKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgZGF0ZSA9IG51bGw7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmVzdWx0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIHJlc3VsdCA9ICFpc05hTihkYXRlLmdldERhdGUoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZSBpbnN0YW5jZW9mIERhdGU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbnknOlxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXN1bHQgPSB0eXBlID09PSB0eXBlb2YgdmFsdWU7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja1R5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGhhcyBmb3IgdHlwZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaGFzIGEgc3BlY2lmaWMgdHlwZVxuICovXG5mdW5jdGlvbiBjaGVja1R5cGUobmFtZSwgaWQsIHR5cGUpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2lkXTtcbiAgdmFyIGF0dHJpYnV0ZVR5cGUgPSAnJztcblxuICBpZiAoY29tcG9uZW50U2NoZW1hICYmIGNvbXBvbmVudFNjaGVtYVskbXNvbi5OQU1FXSkge1xuICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tjb21wb25lbnRTY2hlbWFbJG1zb24uTkFNRV1dO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudFNjaGVtYSkge1xuICAgIGF0dHJpYnV0ZVR5cGUgPSBjb21wb25lbnRTY2hlbWFbbmFtZS5zcGxpdCgnLicpWzBdXTtcbiAgICBpZiAoYXR0cmlidXRlVHlwZSA9PT0gdHlwZSkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ugc291cmNlIHNjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCB0YXJnZXQgc2NoZW1hXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG1lcmdlIGFsc28gcHJpdmF0ZSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBtZXJnZWQgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gTWVyZ2UgdHdvIHNjaGVtYXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2Uoc291cmNlLCB0YXJnZXQsIGFsbCkge1xuICB2YXIgcHJvcE5hbWUgPSAnJztcbiAgdmFyIHJlc3VsdCA9IHRhcmdldDtcblxuICBmb3IgKHByb3BOYW1lIGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHByb3BOYW1lLmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgcmVzdWx0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpbml0Q29uZmlndXJhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgb2JqZWN0IHRvIGNvbmZpZ3VyZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBvZiB0aGUgb2JqZWN0IHRvIGNvbmZpZ3VyZVxuICogQHBhcmFtIHtCb29sZWFufSBpc01ldGhvZCBpcyBhIG1ldGhvZFxuICogQHJldHVybnMge09iamVjdH0gYSBjb25maWd1cmF0aW9uXG4gKiBAZGVzY3JpcHRpb24gSW5pdCBhIGNvbmZpZ3VyYXRpb24gZGVwZW5kaW5nIG9mIHRoZSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGluaXRDb25maWd1cmF0aW9uKG5hbWUsIHR5cGUsIGlzTWV0aG9kKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgdHlwZURlZiA9IFtdO1xuICB2YXIgc2NoZW1hRGVmID0gW107XG4gIHZhciBkZWZhdWx0VmFsdWUgPSAnJztcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIG5hbWUgPT09ICc9Pic6XG4gICAgICBicmVhaztcbiAgICBjYXNlIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlID09PSAnYm9vbGVhbic6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUgPT09ICdzdHJpbmcnOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZSA9PT0gJ251bWJlcic6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZSA9PT0gJ29iamVjdCc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlID09PSAnYXJyYXknOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUgPT09ICdkYXRlJzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiAnMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaJ1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiAnMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZSA9PT0gJ2FueSc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIC8vIGxpbmsgLyBjdXN0b20gdHlwZVxuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnOlxuICAgICAgZGVmYXVsdFZhbHVlID0ge307XG5cbiAgICAgIC8vIGNhc2Ugb2YgZW51bWVyYXRpb25cbiAgICAgIHR5cGVEZWYgPSAkZGIuX1R5cGUuZmluZCh7XG4gICAgICAgIG5hbWU6IHR5cGVcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVEZWYubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0eXBlRGVmWzBdLnZhbHVlKSB7XG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gdHlwZURlZlswXS52YWx1ZVswXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjYXNlIG9mIGxpbmtcbiAgICAgIHNjaGVtYURlZiA9ICRkYi5fU2NoZW1hLmZpbmQoe1xuICAgICAgICBfbmFtZTogdHlwZVxuICAgICAgfSk7XG4gICAgICBpZiAoc2NoZW1hRGVmLmxlbmd0aCkge1xuICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBkZWZhdWx0VmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ2FycmF5JyAmJiB0eXBlb2YgdHlwZVswXSA9PT0gJ2Jvb2xlYW4nOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnYm9vbGVhbiddLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiBbJ2Jvb2xlYW4nXSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ2FycmF5JyAmJiB0eXBlb2YgdHlwZVswXSA9PT0gJ3N0cmluZyc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ2FycmF5JyAmJiB0eXBlb2YgdHlwZVswXSA9PT0gJ251bWJlcic6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogWydudW1iZXInXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogWydudW1iZXInXSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ2FycmF5JyAmJiB0eXBlb2YgdHlwZVswXSA9PT0gJ29iamVjdCc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogWydvYmplY3QnXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogWydvYmplY3QnXSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ2FycmF5JyAmJiB0eXBlb2YgdHlwZVswXSA9PT0gJ2RhdGUnOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnZGF0ZSddLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiBbJ2RhdGUnXSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ2FycmF5JyAmJiB0eXBlb2YgdHlwZVswXSA9PT0gJ2FueSc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogWydhbnknXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogWydhbnknXSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ2FycmF5JzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY29tcGlsZUNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7SlNPTn0gbW9kZWwgZGVmaW5pdGlvbiBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm5zIHtPYmplY3R9IGNvbXBpbGVkIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgZnVsbCBtb2RlbCBkZWZpbml0aW9uIGZyb20gYSBtb2RlbFxuICovXG5mdW5jdGlvbiBjb21waWxlQ29uZmlndXJhdGlvbihtb2RlbCkge1xuICB2YXIgcHJvcE5hbWUgPSAnJztcbiAgdmFyIHBhcmFtUHJvcE5hbWUgPSAnJztcbiAgdmFyIGNvbmZpZ3VyYXRpb24gPSAnJztcbiAgdmFyIG1ldGhvZENvbmYgPSB7fTtcblxuICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobW9kZWwpKTtcblxuICBmb3IgKHByb3BOYW1lIGluIG1vZGVsKSB7XG4gICAgaWYgKG1vZGVsLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAvLyBwcm9wZXJ0eSB0eXBlXG4gICAgICAgIGNhc2UgdHlwZW9mIG1vZGVsW3Byb3BOYW1lXSA9PT0gJ3N0cmluZyc6XG4gICAgICAgICAgbW9kZWxbcHJvcE5hbWVdID0gaW5pdENvbmZpZ3VyYXRpb24ocHJvcE5hbWUsIG1vZGVsW3Byb3BOYW1lXSwgZmFsc2UpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIHByb3BlcnR5IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY2FzZSB0eXBlb2YgbW9kZWxbcHJvcE5hbWVdID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgIHR5cGVvZiBtb2RlbFtwcm9wTmFtZV1bJz0+J10gPT09ICd1bmRlZmluZWQnOlxuICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXSA9IG1lcmdlKFxuICAgICAgICAgICAgbW9kZWxbcHJvcE5hbWVdLFxuICAgICAgICAgICAgaW5pdENvbmZpZ3VyYXRpb24ocHJvcE5hbWUsIG1vZGVsW3Byb3BOYW1lXS50eXBlIHx8ICdhbnknLCBmYWxzZSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIG1ldGhvZCAvIGV2ZW50XG4gICAgICAgIGNhc2UgdHlwZW9mIG1vZGVsW3Byb3BOYW1lXSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICB0eXBlb2YgbW9kZWxbcHJvcE5hbWVdWyc9PiddICE9PSAndW5kZWZpbmVkJzpcbiAgICAgICAgICBtZXRob2RDb25mID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBbXSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2FueSdcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yIChwYXJhbVByb3BOYW1lIGluIG1vZGVsW3Byb3BOYW1lXSkge1xuICAgICAgICAgICAgLy8gcGFyYW1ldGVyIHR5cGVcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW9kZWxbcHJvcE5hbWVdW3BhcmFtUHJvcE5hbWVdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBpZiAocGFyYW1Qcm9wTmFtZSA9PT0gJz0+Jykge1xuICAgICAgICAgICAgICAgIG1ldGhvZENvbmYucmVzdWx0ID0gbW9kZWxbcHJvcE5hbWVdW3BhcmFtUHJvcE5hbWVdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1ldGhvZENvbmYucGFyYW1zLnB1c2goXG4gICAgICAgICAgICAgICAgICBpbml0Q29uZmlndXJhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1Qcm9wTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxbcHJvcE5hbWVdW3BhcmFtUHJvcE5hbWVdLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGFyYW1ldGVyIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW9kZWxbcHJvcE5hbWVdW3BhcmFtUHJvcE5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBtZXRob2RDb25mLnBhcmFtcy5wdXNoKFxuICAgICAgICAgICAgICAgIG1lcmdlKG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXSksXG4gICAgICAgICAgICAgICAgaW5pdENvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICAgICAgICBwYXJhbVByb3BOYW1lLFxuICAgICAgICAgICAgICAgICAgbW9kZWxbcHJvcE5hbWVdW3BhcmFtUHJvcE5hbWVdLnR5cGUgfHwgJ2FueScsXG4gICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBtb2RlbFtwcm9wTmFtZV0gPSBtZXRob2RDb25mO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kZWw7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBzY2hlbWEgZGVmaW5pdGlvbiBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbmV3IHNjaGVtYSB0byB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuc2NoZW1hID0gZnVuY3Rpb24gc2NoZW1hKG5hbWUsIHNjaGVtYSkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBzY2hlbWFOYW1lID0gJyc7XG4gIHZhciBtZXJnZWRTY2hlbWEgPSB7fTtcbiAgdmFyIHNjaGVtYXMgPSBbXTtcblxuICBpZiAodHlwZW9mIHNjaGVtYSA9PT0gJ3VuZGVmaW5lZCcgfHwgT2JqZWN0LmtleXMoc2NoZW1hKS5sZW5ndGggPT09IDApIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzY2hlbWEgPSB7fTtcbiAgICAgIHNjaGVtYVskbXNvbi5OQU1FXSA9IG5hbWU7XG4gICAgICBzY2hlbWFOYW1lID0gbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuYW1lKSk7XG4gICAgICBzY2hlbWFOYW1lID0gc2NoZW1hWyRtc29uLk5BTUVdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNjaGVtYSkpO1xuICAgIHNjaGVtYVskbXNvbi5OQU1FXSA9IG5hbWU7XG4gICAgc2NoZW1hTmFtZSA9IHNjaGVtYVskbXNvbi5OQU1FXTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2NoZW1hWyRtc29uLklEXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzY2hlbWFbJG1zb24uSURdID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzY2hlbWFbJG1zb24uSU5IRVJJVF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2NoZW1hWyRtc29uLklOSEVSSVRdID0gWydfQ29tcG9uZW50J107XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVtb3ZlRHVwbGljYXRlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGluaGVyaXRzIGxpc3Qgb2YgcGFyZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlIGR1cGxpY2F0ZSBwYXJlbnRzIGluIHRoZSBsaXN0IG9mIHBhcmVudHNcbiAgICovXG4gIGZ1bmN0aW9uIF9yZW1vdmVEdXBsaWNhdGUoaW5oZXJpdHMpIHtcbiAgICB2YXIgZmlsdGVyZWRMaXN0ID0gW107XG4gICAgdmFyIGxpc3QgPSB7fTtcblxuICAgIGluaGVyaXRzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGNsZWFuTmFtZSA9IG5hbWUudHJpbSgpO1xuICAgICAgaWYgKHR5cGVvZiBsaXN0W2NsZWFuTmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxpc3RbY2xlYW5OYW1lXSA9IGNsZWFuTmFtZTtcbiAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goY2xlYW5OYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZExpc3Q7XG4gIH1cblxuICBzY2hlbWFbJG1zb24uSU5IRVJJVF0gPSBfcmVtb3ZlRHVwbGljYXRlKHNjaGVtYVskbXNvbi5JTkhFUklUXSk7XG5cbiAgLy8gY2hlY2sgaWYgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhIG1ldGEgbW9kZWxcbiAgaWYgKGV4cG9ydHMuaXNWYWxpZE9iamVjdChzY2hlbWEsICRtc29uLlNDSEVNQV9ERUZJTklUSU9OLCBmYWxzZSkpIHtcbiAgICBzY2hlbWFzID0gJGRiLl9TY2hlbWEuZmluZCh7XG4gICAgICBfbmFtZTogc2NoZW1hTmFtZVxuICAgIH0pO1xuICAgIGlmIChzY2hlbWFzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkU2NoZW1hID0gbWVyZ2Uoc2NoZW1hLCBzY2hlbWFzWzBdKTtcbiAgICAgICRkYi5fU2NoZW1hLnVwZGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIF9uYW1lOiBzY2hlbWFOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlZFNjaGVtYVxuICAgICAgKTtcbiAgICAgIGlkID0gc2NoZW1hc1swXVskbXNvbi5JRF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICRkYi5fU2NoZW1hLmluc2VydChzY2hlbWEpO1xuICAgICAgaWQgPSByZXN1bHRbMF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZFNjaGVtYShzY2hlbWFbJG1zb24uTkFNRV0pO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtKU09OfSBtb2RlbCBkZWZpbml0aW9uIG9mIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG5ldyBtb2RlbCB0byB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMubW9kZWwgPSBmdW5jdGlvbiBtb2RlbChuYW1lLCBtb2RlbCkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpbmhlcml0ID0gJyc7XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG1lcmdlZE1vZGVsID0ge307XG4gIHZhciBtb2RlbHMgPSBbXTtcblxuICBpZiAodHlwZW9mIG1vZGVsID09PSAndW5kZWZpbmVkJyB8fCBPYmplY3Qua2V5cyhtb2RlbCkubGVuZ3RoID09PSAwKSB7XG4gICAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5hbWUpKTtcbiAgICBtb2RlbE5hbWUgPSBtb2RlbFskbXNvbi5OQU1FXTtcbiAgfSBlbHNlIHtcbiAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobW9kZWwpKTtcbiAgICBtb2RlbFskbXNvbi5OQU1FXSA9IG5hbWU7XG4gICAgbW9kZWwgPSBjb21waWxlQ29uZmlndXJhdGlvbihtb2RlbCk7XG4gICAgbW9kZWxOYW1lID0gbW9kZWxbJG1zb24uTkFNRV07XG4gIH1cblxuICBpZiAodHlwZW9mIG1vZGVsWyRtc29uLklEXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2RlbFskbXNvbi5JRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIG1vZGVsIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhIG1ldGEgbW9kZWxcbiAgaWYgKGV4cG9ydHMuaXNWYWxpZE9iamVjdChtb2RlbCwgJG1zb24uTU9ERUxfREVGSU5JVElPTiwgZmFsc2UpKSB7XG4gICAgbW9kZWxzID0gJGRiLl9Nb2RlbC5maW5kKHtcbiAgICAgIF9uYW1lOiBtb2RlbE5hbWVcbiAgICB9KTtcbiAgICBpZiAobW9kZWxzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbCwgbW9kZWxzWzBdKTtcbiAgICAgICRkYi5fTW9kZWwudXBkYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgX25hbWU6IG1vZGVsTmFtZVxuICAgICAgICB9LFxuICAgICAgICBtZXJnZWRNb2RlbFxuICAgICAgKTtcbiAgICAgIGlkID0gbW9kZWxzWzBdWyRtc29uLklEXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gJGRiLl9Nb2RlbC5pbnNlcnQobW9kZWwpO1xuICAgICAgaWQgPSByZXN1bHRbMF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZE1vZGVsKG1vZGVsWyRtc29uLk5BTUVdKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge0pTT059IHR5cGUgdHlwZSB0byBhZGRcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBuZXcgdHlwZVxuICovXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbiB0eXBlKG5hbWUsIHR5cGUpIHtcbiAgdmFyIGlkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgdHlwZU5hbWUgPSAnJztcbiAgdmFyIHR5cGVEZWYgPSB7fTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgIHR5cGVEZWYgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5hbWUpKTtcbiAgICB0eXBlTmFtZSA9IHR5cGVEZWYubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHlwZSkpO1xuICAgICAgdHlwZURlZi52YWx1ZSA9IHR5cGU7XG4gICAgICB0eXBlRGVmLm5hbWUgPSBuYW1lO1xuICAgICAgdHlwZURlZi50eXBlID0gdHlwZW9mIHR5cGVbMF0gfHwgJ2FueSc7XG4gICAgICB0eXBlTmFtZSA9IHR5cGVEZWYubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHlwZSkpO1xuICAgICAgdHlwZURlZi5zY2hlbWEgPSBjb21waWxlQ29uZmlndXJhdGlvbih0eXBlKTtcbiAgICAgIHR5cGVEZWYubmFtZSA9IG5hbWU7XG4gICAgICB0eXBlRGVmLnR5cGUgPSAnb2JqZWN0JztcbiAgICAgIHR5cGVOYW1lID0gdHlwZURlZi5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZURlZlskbXNvbi5JRF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZURlZlskbXNvbi5JRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIHR5cGUgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICBpZiAoZXhwb3J0cy5pc1ZhbGlkT2JqZWN0KHR5cGVEZWYsICRtc29uLlRZUEVfREVGSU5JVElPTikpIHtcbiAgICByZXN1bHQgPSAkZGIuX1R5cGUuaW5zZXJ0KHR5cGVEZWYpO1xuICAgIGlkID0gcmVzdWx0WzBdO1xuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKHR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbml0XG4gKiBAZGVzY3JpcHRpb24gSW5pdCB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGV4cG9ydHMuY2xlYXIoKTtcbiAgaW5pdERiU3RydWN0dXJlKCk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgdGhlIGRhdGEgb2YgdGhlIG1ldGFtb2RlbCBmcm9tIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBzdG9yZSA9IHtcbiAgICBpbmhlcml0YW5jZToge30sXG4gICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICBzY2hlbWFzOiB7fSxcbiAgICBjb21waWxlZFNjaGVtYXM6IHt9LFxuICAgIG1vZGVsczoge30sXG4gICAgZ2VuZXJhdGVkTW9kZWxzOiB7fSxcbiAgICBzdGF0ZXM6IHt9LFxuICAgIHR5cGU6IHt9XG4gIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICRsb2cubW9kZWxDcmVhdGlvbkJlZ2luKCk7XG4gIGxvYWRJbk1lbW9yeSgpO1xuICBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKTtcbiAgY29tcGlsZVNjaGVtYXMoKTtcbiAgZ2VuZXJhdGVNb2RlbHMoKTtcbiAgY2hlY2tNb2RlbHMoKTtcbiAgZ2V0U3RhdGVzKCk7XG4gIGNyZWF0ZURiU3RydWN0dXJlKCk7XG4gIGNyZWF0ZUNsYXNzKCk7XG4gIGNyZWF0ZUNsYXNzSW5mbygpO1xuICAkbG9nLm1vZGVsQ3JlYXRpb25FbmQoKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhbiBldmVudFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuaXNFdmVudCA9IGZ1bmN0aW9uIGlzRXZlbnQobmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgJG1zb24uRVZFTlRfVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pc1Byb3BlcnR5ID0gZnVuY3Rpb24gaXNQcm9wZXJ0eShuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCAkbXNvbi5QUk9QRVJUWV9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0xpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbGlua1xuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbGlua1xuICovXG5leHBvcnRzLmlzTGluayA9IGZ1bmN0aW9uIGlzTGluayhuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCAkbXNvbi5MSU5LX1RZUEUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pc0NvbGxlY3Rpb24gPSBmdW5jdGlvbiBpc0NvbGxlY3Rpb24obmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgJG1zb24uQ09MTEVDVElPTl9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc01ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbWV0aG9kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pc01ldGhvZCA9IGZ1bmN0aW9uIGlzTWV0aG9kKG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsICRtc29uLk1FVEhPRF9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1N0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGF0aCBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbE5hbWUgbW9kZWwgbmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGEgc3RydWN0dXJlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBzdHJ1Y3R1cmVcbiAqL1xuZXhwb3J0cy5pc1N0cnVjdHVyZSA9IGZ1bmN0aW9uIGlzU3RydWN0dXJlKHBhdGgsIG1vZGVsTmFtZSkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIHZhciBzdHJ1Y3R1cmUgPSBudWxsO1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIHR5cGUgPSBleHBvcnRzLmdldE1vZGVsUGF0aFR5cGUobW9kZWxOYW1lLCBwYXRoKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShzdHJ1Y3R1cmUpKSB7XG4gICAgc3RydWN0dXJlID0gZXhwb3J0cy5nZXRUeXBlKHR5cGVbMF0pO1xuICB9IGVsc2Uge1xuICAgIHN0cnVjdHVyZSA9IGV4cG9ydHMuZ2V0VHlwZSh0eXBlKTtcbiAgfVxuXG4gIGlmIChzdHJ1Y3R1cmUgJiYgc3RydWN0dXJlLnNjaGVtYSkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmlzVmFsaWRTdGF0ZSA9IGZ1bmN0aW9uIGlzVmFsaWRTdGF0ZShuYW1lLCBpZCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIHZhciBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdO1xuICB2YXIgc3RhdGUgPSB7fTtcblxuICBpZiAoaXNNb2RlbFBhdGgobmFtZSkpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRNb2RlbFBhdGgoaWQsIG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hWyRtc29uLk5BTUVdKSB7XG4gICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbY29tcG9uZW50U2NoZW1hWyRtc29uLk5BTUVdXTtcbiAgICB9XG4gICAgc3RhdGUgPSBzdG9yZS5zdGF0ZXNbY29tcG9uZW50U2NoZW1hWyRtc29uLk5BTUVdXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgcmVzdWx0ID0gc3RhdGUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGVcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkVHlwZSA9IGZ1bmN0aW9uIGlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZEN1c3RvbVR5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDdXN0b21UeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciB0eXBlRGVmID0gc3RvcmUudHlwZVt0eXBlTmFtZV07XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlRGVmLnZhbHVlKSAmJiB0eXBlRGVmLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRUeXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIHJlYWxUeXBlID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlTmFtZSk7XG4gICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZVswXSk6XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlTmFtZVswXSk6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlW2ldICE9PSAnJyAmJiB2YWx1ZVtpXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGV4cG9ydHMuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgICAgIGdldENsYXNzTmFtZSh2YWx1ZVtpXSksXG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lWzBdXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZSk6XG4gICAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlTmFtZV0pIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUsIHN0b3JlLnR5cGVbdHlwZU5hbWVdLnR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cuaW52YWxpZEVudW1UeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSBfaXNWYWxpZEN1c3RvbVR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlTmFtZSk6XG4gICAgICBpZiAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuaW5oZXJpdEZyb20oZ2V0Q2xhc3NOYW1lKHZhbHVlKSwgdHlwZU5hbWUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1NjaGVtYX0gc2NoZW1hIHNjaGVtYSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIGVudW1cbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZSBlbnVtLlxuICovXG5leHBvcnRzLmlzVmFsaWRFbnVtID0gZnVuY3Rpb24gaXNWYWxpZEVudW0odmFsdWUsIHNjaGVtYSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNJbnN0YW5jZU9mXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcHJpdmF0ZSBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBmb3IgY2xhc3MgbmFtZSBjbGFzc05hbWVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc0luc3RhbmNlT2YoY29tcG9uZW50LCBjbGFzc05hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuXG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICBpZiAoY29tcG9uZW50Q2xhc3NOYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9XG4gICAgcmVzdWx0ID0gY29tcG9uZW50Q2xhc3NOYW1lID09PSBjbGFzc05hbWU7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGV4cG9ydHMuaXNDbGFzc05hbWUoc2NoZW1hLnR5cGUpKSB7XG4gICAgcmVzdWx0ID1cbiAgICAgIF9pc0luc3RhbmNlT2YoJGNvbXBvbmVudC5nZXQodmFsdWUpLCBnZXRSZWFsQ2xhc3NOYW1lKHNjaGVtYS50eXBlKSkgJiZcbiAgICAgIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCBzY2hlbWEudHlwZSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IG9iamVjdFxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGEgc2NoZW1hXG4gKiBpdCBpcyBzdXBwb3NlZCB0byB2YWxpZGF0ZS5cbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU2NoZW1hID0gZnVuY3Rpb24gaXNWYWxpZFNjaGVtYShvYmplY3QsIHNjaGVtYSkge1xuICB2YXIgZmllbGROYW1lID0gJyc7XG4gIHZhciBmaWVsZCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgbWFuZGF0b3J5ID0gdHJ1ZTtcbiAgdmFyIHR5cGVTY2hlbWEgPSAnJztcbiAgdmFyIHR5cGVSZWYgPSAnJztcbiAgdmFyIHJlYWxUeXBlID0gJyc7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDbGFzc05hbWVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3NcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ2xhc3NOYW1lKCkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgZW51bVZhbHVlID0gW107XG5cbiAgICB0eXBlUmVmID0gZ2V0Q2xhc3NOYW1lKHR5cGVTY2hlbWEpO1xuICAgIHR5cGVSZWYgPSBvYmplY3RbdHlwZVJlZl07XG4gICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlUmVmKSkge1xuICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0pIHtcbiAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0udHlwZSk7XG5cbiAgICAgICAgICAvLyBjaGVjayB2YWx1ZVxuICAgICAgICAgIGVudW1WYWx1ZSA9IHN0b3JlLnR5cGVbdHlwZVJlZl0udmFsdWU7XG4gICAgICAgICAgaWYgKGVudW1WYWx1ZSkge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRFbnVtVmFsdWUoZmllbGQsIGVudW1WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlUmVmID09PSAnYXJyYXknKSB7XG4gICAgICAgIGlzVmFsaWQgPSBBcnJheS5pc0FycmF5KGZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVSZWYpKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSB8fCBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJyk7XG4gICAgICAgICAgLy8gVE9ETyBtYXliZSBoYXZlIGEgbW9yZSBzdHJpY3QgdmFsaWRhdGlvbiB0aGFuIGp1c3QgYSB0eXBlIGNoZWNraW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVJlZiwgZmllbGQpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVJlZmVyZW5jZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VzIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZXMgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlUmVmZXJlbmNlKCkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgZW51bVZhbHVlID0gW107XG5cbiAgICB0eXBlUmVmID0gZ2V0UmVhbFR5cGVOYW1lKHR5cGVTY2hlbWEpO1xuICAgIHR5cGVSZWYgPSBvYmplY3RbdHlwZVJlZl07XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgdHlwZW9mIHR5cGVSZWYgPT09ICdzdHJpbmcnOlxuICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVSZWYpKSB7XG4gICAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0pIHtcbiAgICAgICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSkge1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS50eXBlKTtcblxuICAgICAgICAgICAgICAvLyBjaGVjayB2YWx1ZVxuICAgICAgICAgICAgICBlbnVtVmFsdWUgPSBzdG9yZS50eXBlW3R5cGVSZWZdLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW51bVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRFbnVtVmFsdWUoZmllbGQsIGVudW1WYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgaXNWYWxpZCA9IEFycmF5LmlzQXJyYXkoZmllbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlUmVmKSkge1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpIHx8IGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgLy8gVE9ETyBtYXliZSBoYXZlIGEgbW9yZSBzdHJpY3QgdmFsaWRhdGlvbiB0aGFuIGp1c3QgYSB0eXBlIGNoZWNraW5nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEFycmF5LmlzQXJyYXkodHlwZVJlZik6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShmaWVsZCkpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlUmVmLCBmaWVsZCk7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRUeXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlU2NoZW1hKTtcbiAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWhhc1R5cGUoZmllbGQsIHR5cGVTY2hlbWEpKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVNjaGVtYVswXSkpIHtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoXG4gICAgICAgICAgICAgICAgZmllbGRbaV0sXG4gICAgICAgICAgICAgICAgc3RvcmUudHlwZVt0eXBlU2NoZW1hWzBdXS5zY2hlbWFcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSkpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hWzBdLCBmaWVsZFtpXSk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8vIHR5cGVcbiAgaWYgKGhhc1R5cGUob2JqZWN0LCAnb2JqZWN0JykpIHtcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgIGZpZWxkID0gb2JqZWN0W2ZpZWxkTmFtZV07XG5cbiAgICAgIGlmIChoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgX2lzVmFsaWRDbGFzc05hbWUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc1R5cGVSZWZlcmVuY2UodHlwZVNjaGVtYSk6XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIF9pc1ZhbGlkVHlwZVJlZmVyZW5jZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBfaXNWYWxpZFR5cGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgIGlmIChcbiAgICAgICAgbWFuZGF0b3J5ID09PSB0cnVlICYmXG4gICAgICAgIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykgJiZcbiAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgKSB7XG4gICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0IHRydWUgaWYgdmFsaWRhdGlvbiBpcyBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWYgdHJ1ZSBpZiB3ZSByZW1vdmUgdGhlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpcyB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0IGlzIGNvbXBsaWFudFxuICogd2l0aCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgY2xhc3MuXG4gKi9cbmV4cG9ydHMuaXNWYWxpZE9iamVjdCA9IGZ1bmN0aW9uIGlzVmFsaWRPYmplY3QoXG4gIG9iamVjdCxcbiAgc2NoZW1hLFxuICBzdHJpY3QsXG4gIGNsZWFuUmVmXG4pIHtcbiAgdmFyIGZpZWxkTmFtZSA9ICcnO1xuICB2YXIgZmllbGQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIG1hbmRhdG9yeSA9IHRydWU7XG4gIHZhciB0eXBlU2NoZW1hID0gJyc7XG4gIHZhciB0eXBlUmVmID0gJyc7XG4gIHZhciByZWFsVHlwZSA9ICcnO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIGlmIChoYXNUeXBlKHN0cmljdCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgc3RyaWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChoYXNUeXBlKGNsZWFuUmVmLCAndW5kZWZpbmVkJykpIHtcbiAgICBjbGVhblJlZiA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDdXN0b21UeXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBhIGZpZWxkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlU2NoZW1hIGEgc2NoZW1hXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIGN1c3RvbSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgY3VzdG9tIHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgcmVhbFR5cGUgPSAnJztcblxuICAgIHJlYWxUeXBlID0gc3RvcmUudHlwZVt0eXBlU2NoZW1hXTtcbiAgICBpZiAocmVhbFR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnNjaGVtYSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCByZWFsVHlwZS5zY2hlbWEsIHN0cmljdCwgY2xlYW5SZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnZhbHVlLCAndW5kZWZpbmVkJyk6XG4gICAgICAgICAgaXNWYWxpZCA9IGV4cG9ydHMuaXNWYWxpZEVudW0oZmllbGQsIHJlYWxUeXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpc1ZhbGlkID0gZXhwb3J0cy5pc1ZhbGlkVHlwZShmaWVsZCwgcmVhbFR5cGUudHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZENsYXNzTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZENsYXNzTmFtZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgY29tcCA9IG51bGw7XG4gICAgdmFyIGlzQ29tcG9uZW50ID0gZmFsc2U7XG5cbiAgICB0eXBlUmVmID0gZ2V0UmVhbENsYXNzTmFtZSh0eXBlU2NoZW1hKTtcbiAgICBpZiAoZmllbGQgJiYgZmllbGQuaWQpIHtcbiAgICAgIGNvbXAgPSBmaWVsZDtcbiAgICAgIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcCA9ICRjb21wb25lbnQuZ2V0KGZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1R5cGUoY29tcCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAoIWV4cG9ydHMuaW5oZXJpdEZyb20oY29tcC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlUmVmKSkge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGROYW1lLCBmaWVsZCwgdHlwZVJlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNDb21wb25lbnQgJiYgY2xlYW5SZWYpIHtcbiAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGNvbXAuaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgZm9yIGRlZmF1bHQgdmFsdWUgb2YgYW4gb2JqZWN0ICh7fSBvciBudWxsKVxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpICYmXG4gICAgICAgICAgZmllbGQgIT09IG51bGwgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoID4gMDpcbiAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJykgJiYgZmllbGQgIT09ICcnOlxuICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciBkYXRlID0gbnVsbDtcbiAgICB2YXIgdHlwZUFycmF5ID0gJyc7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ2FueSc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgdHlwZVNjaGVtYSwgc3RyaWN0LCBjbGVhblJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVTY2hlbWEgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShmaWVsZCk7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSAhaXNOYU4oZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBnZXRSZWFsVHlwZShmaWVsZCkgIT09IHR5cGVTY2hlbWEgJiZcbiAgICAgICAgICAgICAgICBnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhbnknXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICB0eXBlQXJyYXkgPSB0eXBlU2NoZW1hWzBdO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGRbaV0sIHR5cGVBcnJheSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWV4cG9ydHMuaXNDbGFzc05hbWUodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGdldFJlYWxUeXBlKGZpZWxkW2ldKSAhPT0gdHlwZUFycmF5ICYmXG4gICAgICAgICAgICAgICAgICB0eXBlQXJyYXkgIT09ICdhbnknXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlQXJyYXksIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0UmVhbFR5cGUoZmllbGRbaV0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgLy8gQ2FzZSBvZiBhbiBpbXBvcnQgb2YgYSBzeXN0ZW1cbiAgICAgICAgICAgICAgICAgIGlmICgkY29tcG9uZW50LmdldChmaWVsZFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICFleHBvcnRzLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENsYXNzTmFtZSgkY29tcG9uZW50LmdldChmaWVsZFtpXSkpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZFtpXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkbG9nLmNhbk5vdFlldFZhbGlkYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIWV4cG9ydHMuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0UmVhbENsYXNzTmFtZSh0eXBlQXJyYXkpLFxuICAgICAgICAgICAgICAgICAgICAgIGdldENsYXNzTmFtZShmaWVsZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW2ldID0gZmllbGRbaV0uaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGROYW1lLCBmaWVsZCwgJ2FycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICRsb2cudW5rbm93blR5cGUoZmllbGQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvLyBjaGVjayBpZiBvYmplY3RcbiAgaWYgKCFoYXNUeXBlKG9iamVjdCwgJ29iamVjdCcpKSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkQ29uZmlndXJhdGlvbihvYmplY3QsICdvYmplY3QnKTtcbiAgfVxuXG4gIC8vIHR5cGVcbiAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgIGlmIChcbiAgICAgICFoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykgfHxcbiAgICAgIGZpZWxkTmFtZSA9PT0gJG1zb24uQ09SRSB8fFxuICAgICAgZmllbGROYW1lID09PSAkbXNvbi5JRFxuICAgICkge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZmllbGROYW1lID09PSAkbXNvbi5DT1JFOlxuICAgICAgICAgIHR5cGVTY2hlbWEgPSAnYm9vbGVhbic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGROYW1lID09PSAkbXNvbi5JRDpcbiAgICAgICAgICB0eXBlU2NoZW1hID0gJ3N0cmluZyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVTY2hlbWEpOlxuICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgX2lzVmFsaWRDdXN0b21UeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVNjaGVtYSk6XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBfaXNWYWxpZENsYXNzTmFtZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIF9pc1ZhbGlkVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hbmRhdG9yeVxuICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICBpZiAob2JqZWN0ICYmIGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSkge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBvYmplY3QgaW4gb3JkZXIgdG8gYmUgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIEBtZXRob2QgcHJlcGFyZU9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gcHJlcGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICovXG5leHBvcnRzLnByZXBhcmVPYmplY3QgPSBmdW5jdGlvbiBwcmVwYXJlT2JqZWN0KG9iamVjdCwgc2NoZW1hKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJztcbiAgdmFyIGZpZWxkID0gbnVsbDtcbiAgdmFyIG1hbmRhdG9yeSA9IHRydWU7XG4gIHZhciBkZWZhdWx0VmFsdWUgPSAnJztcblxuICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNjaGVtYSkpO1xuXG4gIC8vIG1hbmRhdG9yeSAmIGRlZmF1bHQgdmFsdWVcbiAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdDtcbiAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAobWFuZGF0b3J5ID09PSBmYWxzZSAmJiAhaGFzVHlwZShkZWZhdWx0VmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5nZXRTY2hlbWEgPSBmdW5jdGlvbiBnZXRTY2hlbWEobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdKSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybnMge09iamVjdH0gdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgbW9kZWxcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbCA9IGZ1bmN0aW9uIGdldE1vZGVsKG5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSkge1xuICAgIHJlc3VsdCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEdldCBhIHR5cGVcbiAqL1xuZXhwb3J0cy5nZXRUeXBlID0gZnVuY3Rpb24gZ2V0VHlwZShuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmIChzdG9yZS50eXBlW25hbWVdICYmIHN0b3JlLnR5cGVbbmFtZV0pIHtcbiAgICByZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLnR5cGVbbmFtZV0pKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldE1vZGVsUGF0aFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGF0aCBvZiB0aGUgc3RydWN0dXJlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHlwZSBvZiBhIG1vZGVsIHBhdGhcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbFBhdGhUeXBlID0gZnVuY3Rpb24gZ2V0TW9kZWxQYXRoVHlwZShtb2RlbCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIHN1YnBhdGhzID0gW107XG4gIHZhciBzdWJwYXRoID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBzdHJ1Y3R1cmUgPSAnJztcblxuICBzdWJwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgbGVuZ3RoID0gc3VicGF0aHMubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHN1YnBhdGggPSBzdWJwYXRoc1tpXTtcbiAgICBzdWJwYXRoID0gc3VicGF0aC5zcGxpdCgnWycpWzBdO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICByZXN1bHQgPSBleHBvcnRzLmdldE1vZGVsKG1vZGVsKVtzdWJwYXRoXS50eXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZXN1bHQpKSB7XG4gICAgICAgIHN0cnVjdHVyZSA9IGV4cG9ydHMuZ2V0VHlwZShyZXN1bHQpO1xuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgIGNhc2UgdHlwZW9mIHN0cnVjdHVyZS5zY2hlbWEgIT09ICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgaWYgKCFzdHJ1Y3R1cmUuc2NoZW1hW3N1YnBhdGhdKSB7XG4gICAgICAgICAgICAgICRsb2cudW5rbm93blBhdGgocGF0aCwgc3VicGF0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgPSBzdHJ1Y3R1cmUuc2NoZW1hW3N1YnBhdGhdLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIHR5cGVvZiBzdHJ1Y3R1cmUudHlwZSAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICByZXN1bHQgPSBzdHJ1Y3R1cmUudHlwZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZShtb2RlbCwgcGF0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRNb2RlbFBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGF0aCBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwYXRoIGlzIHZhbGlkIGZvciB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHBhdGggaXMgdmFsaWQgbW9kZWwgcGF0aFxuICovXG5leHBvcnRzLmlzVmFsaWRNb2RlbFBhdGggPSBmdW5jdGlvbiBpc1ZhbGlkTW9kZWxQYXRoKG1vZGVsLCBwYXRoKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBzdWJwYXRocyA9IFtdO1xuICB2YXIgc3VicGF0aCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgc3RydWN0dXJlID0gJyc7XG5cbiAgc3VicGF0aHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIGxlbmd0aCA9IHN1YnBhdGhzLmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBzdWJwYXRoID0gc3VicGF0aHNbaV07XG4gICAgc3VicGF0aCA9IHN1YnBhdGguc3BsaXQoJ1snKVswXTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgdHlwZSA9IGV4cG9ydHMuZ2V0TW9kZWwobW9kZWwpW3N1YnBhdGhdLnR5cGU7XG4gICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgdHlwZSA9IHR5cGVbMF07XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZSkpIHtcbiAgICAgICAgc3RydWN0dXJlID0gZXhwb3J0cy5nZXRUeXBlKHR5cGUpO1xuICAgICAgICBpZiAoc3RydWN0dXJlLnNjaGVtYSAmJiBzdHJ1Y3R1cmUuc2NoZW1hW3N1YnBhdGhdKSB7XG4gICAgICAgICAgdHlwZSA9IHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0udHlwZTtcbiAgICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm5zIHtBcnJheX0gaWQgaWQgb2YgdGhlIHBhcmVudHNcbiAqIEBkZXNjcmlwdGlvbiBHZXQgcGFyZW50cyBvZiBhIHNjaGVtYSBpZiBhbnlcbiAqL1xuZXhwb3J0cy5nZXRQYXJlbnRzID0gZnVuY3Rpb24gZ2V0UGFyZW50cyhpZCkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKCFzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdKSB7XG4gICAgcmVzdWx0ID0gW107XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5zbGljZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqL1xuZXhwb3J0cy5pbmhlcml0RnJvbSA9IGZ1bmN0aW9uIGluaGVyaXRGcm9tKG5hbWUsIHBhcmVudE5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZWFyY2hQYXJlbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYW5jZXN0b3JOYW1lIG9mIHRoZSBwYXJlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICAgKi9cbiAgZnVuY3Rpb24gX3NlYXJjaFBhcmVudChjbGFzc05hbWUsIGFuY2VzdG9yTmFtZSkge1xuICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2U7XG4gICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKGNsYXNzTmFtZSk7XG4gICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAocGFyZW50cy5pbmRleE9mKGFuY2VzdG9yTmFtZSkgIT09IC0xKSB7XG4gICAgICAgIGlzQW5jZXN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXNBbmNlc3RvciA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgYW5jZXN0b3JOYW1lKTtcbiAgICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0FuY2VzdG9yO1xuICB9XG5cbiAgaWYgKG5hbWUgIT09IHBhcmVudE5hbWUpIHtcbiAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKG5hbWUpO1xuICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAocGFyZW50cy5pbmRleE9mKHBhcmVudE5hbWUpICE9PSAtMSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBwYXJlbnROYW1lKTtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmlzQ2xhc3NOYW1lID0gZnVuY3Rpb24gaXNDbGFzc05hbWUodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKTtcblxuICBpZiAocmVzdWx0KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHN0b3JlLmdlbmVyYXRlZE1vZGVscykubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0ID0gdHlwZW9mIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1t2YWx1ZV0gIT09ICd1bmRlZmluZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbXNvblxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgbXNvbiBkZWZpbml0aW9uLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5JRCA9ICdfaWQnO1xuZXhwb3J0cy5OQU1FID0gJ19uYW1lJztcbmV4cG9ydHMuREVTQ1JJUFRJT04gPSAnX2Rlc2NyaXB0aW9uJztcbmV4cG9ydHMuSU5IRVJJVCA9ICdfaW5oZXJpdCc7XG5leHBvcnRzLkNMQVNTID0gJ19jbGFzcyc7XG5leHBvcnRzLkNPUkUgPSAnX2NvcmUnO1xuXG5leHBvcnRzLklOVEVSTkFMX05BTUVTID0gW1xuICAnX2lkJyxcbiAgJ19uYW1lJyxcbiAgJ19pbmhlcml0JyxcbiAgJ19kZXNjcmlwdGlvbicsXG4gICdfY2xhc3MnLFxuICAnX2NvcmUnXG5dO1xuXG5leHBvcnRzLlBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknO1xuZXhwb3J0cy5DT0xMRUNUSU9OX1RZUEUgPSAnY29sbGVjdGlvbic7XG5leHBvcnRzLkxJTktfVFlQRSA9ICdsaW5rJztcbmV4cG9ydHMuTUVUSE9EX1RZUEUgPSAnbWV0aG9kJztcbmV4cG9ydHMuRVZFTlRfVFlQRSA9ICdldmVudCc7XG5cbmV4cG9ydHMuSU5URVJOQUxfVFlQRVMgPSBbJ3Byb3BlcnR5JywgJ2NvbGxlY3Rpb24nLCAnbGluaycsICdtZXRob2QnLCAnZXZlbnQnXTtcblxuZXhwb3J0cy5ERUZBVUxUX1RZUEVTID0gW1xuICAnYm9vbGVhbicsXG4gICdzdHJpbmcnLFxuICAnbnVtYmVyJyxcbiAgJ29iamVjdCcsXG4gICdmdW5jdGlvbicsXG4gICdhcnJheScsXG4gICdkYXRlJyxcbiAgJ2FueSdcbl07XG5cbmV4cG9ydHMuU0NIRU1BX0RFRklOSVRJT04gPSB7XG4gIF9pZDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIG1hbmRhdG9yeTogdHJ1ZVxuICB9LFxuICBfbmFtZToge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIG1hbmRhdG9yeTogdHJ1ZVxuICB9LFxuICBfaW5oZXJpdDoge1xuICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICBkZWZhdWx0OiBbJ19Db21wb25lbnQnXVxuICB9LFxuICBfY2xhc3M6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgbWFuZGF0b3J5OiBmYWxzZVxuICB9LFxuICBfY29yZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBtYW5kYXRvcnk6IGZhbHNlXG4gIH0sXG4gIF9kZXNjcmlwdGlvbjoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgfVxufTtcblxuZXhwb3J0cy5NT0RFTF9ERUZJTklUSU9OID0ge1xuICBfaWQ6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBtYW5kYXRvcnk6IHRydWVcbiAgfSxcbiAgX25hbWU6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBtYW5kYXRvcnk6IHRydWVcbiAgfSxcbiAgX2luaGVyaXQ6IHtcbiAgICB0eXBlOiBbJ3N0cmluZyddLFxuICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgfSxcbiAgX2NsYXNzOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgfSxcbiAgX2NvcmU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgbWFuZGF0b3J5OiBmYWxzZVxuICB9LFxuICBfZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBtYW5kYXRvcnk6IGZhbHNlXG4gIH1cbn07XG5cbmV4cG9ydHMuVFlQRV9ERUZJTklUSU9OID0ge1xuICBfaWQ6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBtYW5kYXRvcnk6IHRydWVcbiAgfSxcbiAgbmFtZToge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIG1hbmRhdG9yeTogdHJ1ZVxuICB9LFxuICB0eXBlOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgbWFuZGF0b3J5OiB0cnVlXG4gIH0sXG4gIHNjaGVtYToge1xuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB0eXBlOiBbJ2FueSddLFxuICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgfSxcbiAgY29yZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBtYW5kYXRvcnk6IGZhbHNlXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgbWFuZGF0b3J5OiBmYWxzZVxuICB9XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEByZXF1aXJlcyBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBzeXN0ZW1cbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBpcyB0aGUgbWFpbiBtb2R1bGUgb2YgU3lzdGVtIFJ1bnRpbWUuXG4gKiBJdCBpbml0cyBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwgYW5kIGxvYWRzIFN5c3RlbSBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkc3lzdGVtID0gcmVxdWlyZSgnLi4vYnVpbGQvc3lzdGVtL3N5c3RlbS5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG4vKiBQcml2YXRlIFByb3BlcnR5ICovXG5cbnZhciBzeXRlbUlkID0gJyc7XG52YXIgc3lzdGVtID0gJyc7XG52YXIgY2hhbm5lbCA9IG51bGw7XG5cbi8vIHBvbHlmaWxsXG4kaGVscGVyLnBvbHlmaWxsKCk7XG5cbi8vIGluaXQgTWV0YW1vZGVsXG4kbWV0YW1vZGVsLmluaXQoKTtcblxuLy8gaW5pdCBydW50aW1lIGZyb20gYSBzeXN0ZW1cbnN5dGVtSWQgPSAkZGIuaW1wb3J0U3lzdGVtKCRzeXN0ZW0uc3lzdGVtKTtcblxuc3lzdGVtID0gJGNvbXBvbmVudC5nZXQoc3l0ZW1JZCk7XG5jaGFubmVsID0gJGNvbXBvbmVudC5nZXQoJ2NoYW5uZWwnKTtcblxuc3lzdGVtLnN0YXRlKCdpbnN0YWxsZWQnKTtcbmNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXRlbUlkKTtcbnN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcbmNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5dGVtSWQpO1xuc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xuY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChzeXRlbUlkKTtcblxuc3lzdGVtLnN0YXJ0KCk7XG5cbnN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XG5cbi8qIFB1YmxpYyBwcm9wZXJ0eSAqL1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBydW50aW1lXG4gKiBAdHlwZSBfUnVudGltZVxuICogQGRlc2NyaXB0aW9uIF9SdW50aW1lIGluc3RhbmNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gJGNvbXBvbmVudC5nZXQoJ3J1bnRpbWUnKTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgc3RhdGVcbiAqIEByZXF1aXJlcyBkYlxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHN0YXRlcyBvZiBhbGwgdGhlY29tcG9uZW50c1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBzdG9yZSA9IHt9O1xuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkIG9uIHdoaWNoIGNoYW5nZSB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBvZiB0aGUgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuc2V0ID0gZnVuY3Rpb24gc2V0KGlkLCBzdGF0ZSwgdmFsdWUpIHtcbiAgc3RvcmVbaWRdID0ge1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbiAgJGRiLnN0b3JlLl9TdGF0ZVtpZF0gPSB7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYWxsIHRoZSBzdGF0ZXMgb2YgdGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7fTtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHdvcmtmbG93XG4gKiBAcmVxdWlyZXMgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBzdGF0ZVxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIGRiXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgU3lzdGVtIFJ1bnRpbWUuXG4gKiBJdCBiZWhhdmVzIGxpa2UgYSB3b3JrZmxvdyBlbmdpbmUuXG4gKiBJdCBjaGVja3MgaWYgdGhlIGNoYW5nZSBvZiBzdGF0dXMgb2YgYSBjb21wb25lbnQgaXMgdmFsaWQgdG8gYmUgZXhlY3V0ZWQuIEJ5IHZhbGlkLCBpdCBtZWFucyB0aGF0OlxuICogLSB0aGUgc3RhdGUgaXMgdmFsaWQgZm9yIHRoZSBjb21wb25lbnQsXG4gKiAtIHRoZSBpbnB1dCAoaS5lLiBwYXJhbWV0ZXJzKSBvZiBhbGwgYWN0aW9ucyBmb3IgdGhlIHN0YXRlIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsIGFuZFxuICogLSB0aGUgb3V0cHV0IG9mIGFsbCBhY3Rpb25zIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsLlxuICpcbiAqIElmIGFuIGVycm9yIG9jY3VycywgdGhlIHdvcmtmbG93IHdpbGwgY2FsbCB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBhbmQgcnVudGltZS5cbiAqIElmIHRoZSBlcnJvciBjYW4gYnJlYWsgdGhlIGNvbnNpc3RlbmN5IG9mIHRoZSBjdXJyZW50IHN5c3RlbSwgdGhlIHdvcmtsb3cgd2lsbCBzdG9wLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZS5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQGNsYXNzIFJ1bnRpbWVFcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIG9mIHRoZSBlcnJvclxuICogQGRlc2NyaXB0aW9uIFRoZSBSdW50aW1lRXJyb3IgY2xhc3NcbiAqL1xuZnVuY3Rpb24gUnVudGltZUVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5uYW1lID0gJ1J1bnRpbWVFcnJvcic7XG59XG5SdW50aW1lRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5SdW50aW1lRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUnVudGltZUVycm9yO1xuXG4vKipcbiAqIEBtZXRob2QgaXNNb2RlbFBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIG1vZGVsIHBhdGhcbiAqL1xuZnVuY3Rpb24gaXNNb2RlbFBhdGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTE7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQYXJhbU5hbWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtBcnJheX0gdGhlIG5hbWVzIG9mIGFsbCBwYXJhbWV0ZXJzIG9mIHRoZSBtZXRob2QgZm9yIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBuYW1lcyBvZiB0aGUgcGFyYW1ldGVyIG9mIGEgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGw7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgfVxuXG4gIGlmIChtZXRob2QpIHtcbiAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTW9kZWxQYXRoKG1ldGhvZE5hbWUpKSB7XG4gICAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge0FycmF5fSBudW1iZXIgb2YgcGFyYW1ldGVycyBtaW4gYW5kIG1heCBmb3IgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTnVtYmVyKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIG1pbiA9IDA7XG4gIHZhciBtYXggPSAwO1xuXG4gIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgfVxuXG4gIGlmIChtZXRob2QpIHtcbiAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGVvZiBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgIHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgbWluID0gbWluICsgMTtcbiAgICAgICAgfVxuICAgICAgICBtYXggPSBtYXggKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChtaW4pO1xuICAgIHJlc3VsdC5wdXNoKG1heCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1ldGhvZE5hbWUuaW5kZXhPZignWycpID09PSAtMSAmJiBtZXRob2ROYW1lLmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcbiAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBzZXREZWZhdWx0VmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtBcnJheX0gYXJncyBhcmd1bWVudHNcbiAqIEByZXR1cm5zIHtBcnJheX0gYXJndW1lbnRzIHdpdGggZGVmYXVsdCB2YWx1ZXNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gU2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBub24gbWFuZGF0b3J5IHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdFZhbHVlKGlkLCBtZXRob2ROYW1lLCBhcmdzKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gZmFsc2UgJiYgdHlwZW9mIGFyZ3NbaV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLmRlZmF1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChtZXRob2ROYW1lLmluZGV4T2YoJ1snKSA9PT0gLTEpIHtcbiAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGFyZ3M7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZXR1cm5UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSB0eXBlIHJldHVybmVkIGJ5IHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSB0eXBlIHJldHVybmVkIGJ5IGEgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGdldFJldHVyblR5cGUoaWQsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIHJlc3VsdFR5cGUgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICByZXN1bHRUeXBlID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV0ucmVzdWx0O1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgfVxuXG4gIGlmIChyZXN1bHRUeXBlKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0VHlwZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UGFyYW1UeXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7QXJyYXl9IHRoZSB0eXBlcyBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtVHlwZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGw7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgfVxuXG4gIGlmIChtZXRob2QpIHtcbiAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLnR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAobWV0aG9kTmFtZS5pbmRleE9mKCdbJykgPT09IC0xICYmIG1ldGhvZE5hbWUuaW5kZXhPZignLicpID09PSAtMSkge1xuICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQgYSBTeXN0ZW0gUnVudGltZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgdHJ1ZSBpZiB0aGUgc3RhdGUgaXMgYW4gZXZlbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiB0aGUgYWN0aW9uc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIGFjdGlvbnMgb2YgdGhlIHNwZWNpZmllZCBzdGF0ZVxuICovXG5mdW5jdGlvbiBnZXRBY3Rpb25zKGNvbXBvbmVudCwgbmFtZSwgaXNFdmVudCkge1xuICB2YXIgYWN0aW9uID0gJGJlaGF2aW9yLmdldEFjdGlvbnMoY29tcG9uZW50LmlkKCksIG5hbWUpO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcGFyZW50ID0gbnVsbDtcblxuICBpZiAoIWFjdGlvbi5sZW5ndGggfHwgaXNFdmVudCkge1xuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChcbiAgICAgICAgZ2V0QWN0aW9ucygkY29tcG9uZW50LmdldChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSksIG5hbWUsIGlzRXZlbnQpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRzID0gJG1ldGFtb2RlbC5nZXRQYXJlbnRzKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmVudHNbaV0pO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKHBhcmVudCwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cudW5rbm93bkNvbXBvbmVudChwYXJlbnRzW2ldLCBjb21wb25lbnQubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgYWN0aW9uLnJldmVyc2UoKTtcbiAgfVxuXG4gIHJldHVybiBhY3Rpb247XG59XG5cbi8qKlxuICogQG1ldGhvZCBhY3Rpb25cbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCBpcyB0aGUgYWN0aW9uIGEgY2FsbGJhY2sgb2YgYW4gZXZlbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICogQGRlc2NyaXB0aW9uIEV4ZWN1dGUgYW4gYWN0aW9uIGFuZCBtYWtlIHNvbWUgRGVwZW5kZW5jeSBJbmplY3Rpb24gaWYgaXQgaXMgYSBjb3JlIGFjdGlvblxuICovXG5mdW5jdGlvbiBhY3Rpb24oY29tcG9uZW50LCBzdGF0ZSwgYWN0aW9uLCBwYXJhbXMsIGlzRXZlbnQpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBpbmplY3RlZFBhcmFtcyA9IFtdO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBpZiAoXG4gICAgISRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSAmJlxuICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSAmJlxuICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKVxuICApIHtcbiAgICBwYXJhbXMgPSBzZXREZWZhdWx0VmFsdWUoY29tcG9uZW50Q2xhc3NOYW1lLCBzdGF0ZSwgcGFyYW1zKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2gocGFyYW1zW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnVzZUNvcmVBUEkpIHtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGNvbXBvbmVudCk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRkYik7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRtZXRhbW9kZWwpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChleHBvcnRzKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGJlaGF2aW9yKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJHN0YXRlKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGxvZyk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRoZWxwZXIpO1xuICAgIH1cblxuICAgIGlmICgkaGVscGVyLmlzT25Ob2RlKCkpIHtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGhlbHBlci5nZXRSZXF1aXJlKCkpO1xuICAgIH1cblxuICAgIGlmIChpc0V2ZW50KSB7XG4gICAgICBpZiAoYWN0aW9uLmNvbnRleHQpIHtcbiAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICBhY3Rpb24uYWN0aW9uLmJpbmQuYXBwbHkoXG4gICAgICAgICAgICBhY3Rpb24uYWN0aW9uLFxuICAgICAgICAgICAgW2FjdGlvbi5jb250ZXh0XS5jb25jYXQoaW5qZWN0ZWRQYXJhbXMpXG4gICAgICAgICAgKSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgIGFjdGlvbi5hY3Rpb24uYmluZC5hcHBseShcbiAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24sXG4gICAgICAgICAgICBbY29tcG9uZW50XS5jb25jYXQoaW5qZWN0ZWRQYXJhbXMpXG4gICAgICAgICAgKSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhY3Rpb24uY29udGV4dCkge1xuICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGFjdGlvbi5jb250ZXh0LCBpbmplY3RlZFBhcmFtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgaW5qZWN0ZWRQYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgUnVudGltZUVycm9yKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3IEZ1bmN0aW9uKCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdydW50aW1lOiBjYW4gbm90IGV4ZWN1dGUgbmV3IEZ1bmN0aW9uKCkgaW5zdHJ1Y3Rpb24gaW4gdGhlIGN1cnJlbnQgY29udGV4dC4nXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lcnJvcikge1xuICAgICAgICAgIGNvbXBvbmVudC5lcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcImVycm9yIHdoZW4gcnVubmluZyB0aGUgYmVoYXZpb3IgJ1wiICtcbiAgICAgICAgICAgICAgc3RhdGUgK1xuICAgICAgICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5pZCgpICtcbiAgICAgICAgICAgICAgXCInXCIsXG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkaGVscGVyLmdldFJ1bnRpbWUoKSkge1xuICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLmVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwiZXJyb3Igd2hlbiBydW5uaW5nIHRoZSBiZWhhdmlvciAnXCIgK1xuICAgICAgICAgICAgICBzdGF0ZSArXG4gICAgICAgICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgICAgICAgY29tcG9uZW50LmlkKCkgK1xuICAgICAgICAgICAgICBcIidcIixcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJGxvZy5hY3Rpb25JbnZva2VFcnJvcihcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBlLm1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tJbnB1dE51bWJlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIGFwcGxpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBhY3Rpb25cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhY3Rpb24gaXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYWN0aW9uIGhhcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlclxuICovXG5leHBvcnRzLmNoZWNrSW5wdXROdW1iZXJzID0gZnVuY3Rpb24gY2hlY2tJbnB1dE51bWJlcnMoXG4gIGNsYXNzTmFtZSxcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSB7XG4gIHZhciBmdW5jID0gJyc7XG4gIHZhciBiZWdpbkJvZHkgPSAtMTtcbiAgdmFyIGhlYWRlciA9ICcnO1xuICB2YXIgZnVuY1BhcmFtcyA9ICcnO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciBwYXJhbU51bWJlciA9IDA7XG4gIHZhciBtb2RlbE51bWJlclBhcmFtID0gW107XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgLy8gY2hlY2sgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICBmdW5jID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuICBoZWFkZXIgPSBoZWFkZXIucmVwbGFjZSgnPT4nLCAnJyk7XG5cbiAgaWYgKGhlYWRlci5pbmRleE9mKCcoJykgIT09IC0xKSB7XG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlclxuICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgIC5yZXBsYWNlKCcpJywgJycpXG4gICAgICAudHJpbSgpO1xuICB9IGVsc2Uge1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXIudHJpbSgpO1xuICB9XG5cbiAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICBpZiAocGFyYW1zWzBdID09PSAnJykge1xuICAgIHBhcmFtcyA9IFtdO1xuICB9XG4gIHBhcmFtTnVtYmVyID0gcGFyYW1zLmxlbmd0aDtcblxuICAvLyBnZXQgdGhlIG51bWJlciBtaW4gYW5kIG1heCBvZiB2YWxpZCBwYXJhbWV0ZXJzXG4gIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzTmFtZSk7XG4gIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc05hbWUpO1xuICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NOYW1lKTtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQ29sbGVjdGlvbjpcbiAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMiwgMl07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKGNsYXNzTmFtZSwgc3RhdGUpID09PSAnYXJyYXknKSB7XG4gICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMiwgMl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gWzEsIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc0xpbms6XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gWzEsIDFdO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBnZXRQYXJhbU51bWJlcihjbGFzc05hbWUsIHN0YXRlKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gY29tcGFyZVxuICBpZiAoXG4gICAgbW9kZWxOdW1iZXJQYXJhbVswXSA8PSBwYXJhbU51bWJlciAmJlxuICAgIHBhcmFtTnVtYmVyIDw9IG1vZGVsTnVtYmVyUGFyYW1bMV1cbiAgKSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tJbnB1dFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvblxuICovXG5leHBvcnRzLmNoZWNrSW5wdXQgPSBmdW5jdGlvbiBjaGVja0lucHV0KHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbDtcbiAgdmFyIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJztcbiAgdmFyIGFyZ3MgPSBwYXJhbXMuYXJncyB8fCAnJztcbiAgdmFyIHBhcmFtc05hbWUgPSBbXTtcbiAgdmFyIHBhcmFtc1R5cGUgPSBbXTtcbiAgdmFyIHBhcmFtc051bWJlciA9IFtdO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciBsZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcGFyYW0gPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIGlzUHJvcGVydHkgPSBmYWxzZTtcbiAgdmFyIGlzTGluayA9IGZhbHNlO1xuICB2YXIgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0NvbGxlY3Rpb24gJiYgbWV0aG9kTmFtZS5pbmRleE9mKCcuJykgPT09IC0xOlxuICAgICAgaWYgKGFyZ3MgJiYgYXJnc1sxXSAmJiBhcmdzWzFdID09PSAncmVzZXQnKSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXG4gICAgICAgICAgWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlWzBdXSxcbiAgICAgICAgICAnc3RyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtcbiAgICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZVswXSxcbiAgICAgICAgICAnc3RyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcGFyYW1zTnVtYmVyID0gWzIsIDJdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc1Byb3BlcnR5ICYmIG1ldGhvZE5hbWUuaW5kZXhPZignLicpID09PSAtMTpcbiAgICAgIGlmIChpc01vZGVsUGF0aChtZXRob2ROYW1lKSkge1xuICAgICAgICBwYXJhbXNUeXBlID0gW1xuICAgICAgICAgICRtZXRhbW9kZWwuZ2V0TW9kZWxQYXRoVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpXG4gICAgICAgIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlXTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSkgPT09ICdhcnJheSdcbiAgICAgICkge1xuICAgICAgICBpZiAoYXJncyAmJiBhcmdzWzFdICYmIGFyZ3NbMV0gPT09ICdyZXNldCcpIHtcbiAgICAgICAgICBwYXJhbXNUeXBlID0gW1snYW55J10sICdzdHJpbmcnXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNUeXBlID0gWydhbnknLCAnc3RyaW5nJ107XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zTnVtYmVyID0gWzIsIDJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zTnVtYmVyID0gWzEsIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc0xpbmsgJiYgbWV0aG9kTmFtZS5pbmRleE9mKCcuJykgPT09IC0xOlxuICAgICAgcGFyYW1zVHlwZSA9IFskbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcGFyYW1zVHlwZSA9IGdldFBhcmFtVHlwZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHBhcmFtc051bWJlciA9IGdldFBhcmFtTnVtYmVyKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIGNhc2Ugb2Ygb2JqZWN0XG4gIGlmICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykge1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cblxuICBpZiAobGVuZ3RoIDwgcGFyYW1zTnVtYmVyWzBdIHx8IHBhcmFtc051bWJlclsxXSA8IGxlbmd0aCkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKFxuICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgIG1ldGhvZE5hbWVcbiAgICApO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcGFyYW0gPSBhcmdzW2ldO1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoaSA8IHBhcmFtc051bWJlclswXSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXIoXG4gICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgbWV0aG9kTmFtZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShwYXJhbSwgcGFyYW1zVHlwZVtpXSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShcbiAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICAgIHBhcmFtc05hbWVbaV1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrT3V0cHV0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb25zIG9uIG91cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBvdXRwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja091dHB1dCA9IGZ1bmN0aW9uIGNoZWNrT3V0cHV0KHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbDtcbiAgdmFyIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJztcbiAgdmFyIG1ldGhvZFJlc3VsdCA9IG51bGw7XG4gIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcbiAgdmFyIHJldHVyblR5cGUgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHBhcmFtcy5tZXRob2RSZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbWV0aG9kUmVzdWx0ID0gcGFyYW1zLm1ldGhvZFJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICBtZXRob2RSZXN1bHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIHJldHVyblR5cGUgPSBnZXRSZXR1cm5UeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShtZXRob2RSZXN1bHQsIHJldHVyblR5cGUpKSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShcbiAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICBtZXRob2ROYW1lLFxuICAgICAgSlNPTi5zdHJpbmdpZnkocmV0dXJuVHlwZSksXG4gICAgICBBcnJheS5pc0FycmF5KG1ldGhvZFJlc3VsdCkgPyAnYXJyYXknIDogdHlwZW9mIG1ldGhvZFJlc3VsdFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHByb2Nlc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1zIHRvIHByb2Nlc3NcbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiB7QXJyYXl9IGRhdGEgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBhY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBUYXNrIHByb2Nlc3NpbmcuXG4gKi9cbmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uIHByb2Nlc3MocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICBwYXJhbXMuaWQgPSBwYXJhbXMuaWQgfHwgJyc7XG4gIHBhcmFtcy5jb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8ICcnO1xuICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG4gIHBhcmFtcy5kYXRhID0gcGFyYW1zLmRhdGEgfHwgW107XG4gIHBhcmFtcy5jb250ZXh0ID0gcGFyYW1zLmNvbnRleHQgfHwgbnVsbDtcblxuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuICB2YXIgYWN0aW9ucyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gZmFsc2U7XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgaXNFdmVudCA9IGZhbHNlO1xuICB2YXIgaXNNZXRob2QgPSBmYWxzZTtcbiAgdmFyIGJlaGF2aW9ycyA9IFtdO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgYWN0aW9uRnJvbU1lbW9yeSA9IG51bGw7XG5cbiAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldChwYXJhbXMuY29tcG9uZW50KTtcblxuICAvLyBjaGVjayBzdGF0ZVxuICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgJGxvZy5pbnZhbGlkVXNlT2ZDb21wb25lbnQocGFyYW1zLmNvbXBvbmVudCk7XG4gIH1cblxuICAvLyBjYXNlIG9mIGV2ZW50IHByb2Nlc3NpbmdcbiAgaWYgKHBhcmFtcy5pZCkge1xuICAgIGJlaGF2aW9ycyA9ICRkYi5fQmVoYXZpb3IuZmluZCh7XG4gICAgICBfaWQ6IHBhcmFtcy5pZFxuICAgIH0pO1xuXG4gICAgaWYgKGJlaGF2aW9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGJlaGF2aW9yID0gYmVoYXZpb3JzWzBdO1xuICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoYmVoYXZpb3IuY29tcG9uZW50KTtcblxuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihcbiAgICAgICAgICBiZWhhdmlvci5zdGF0ZSxcbiAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWVcbiAgICAgICAgKTtcbiAgICAgICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgaXNNZXRob2QgPSAkbWV0YW1vZGVsLmlzTWV0aG9kKGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuXG4gICAgICAgIGFjdGlvbkZyb21NZW1vcnkgPSAkYmVoYXZpb3IuZ2V0KHBhcmFtcy5pZCk7XG4gICAgICAgIGlmIChhY3Rpb25Gcm9tTWVtb3J5KSB7XG4gICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgdXNlQ29yZUFQSTogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGJlaGF2aW9yLmNvbnRleHQsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbkZyb21NZW1vcnlcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgIH1cblxuICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgIGlzTWV0aG9kID0gJG1ldGFtb2RlbC5pc01ldGhvZChwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG5cbiAgICAgIGFjdGlvbnMgPSBnZXRBY3Rpb25zKGNvbXBvbmVudCwgcGFyYW1zLnN0YXRlLCBpc0V2ZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBleHBvcnRzLmNoZWNrSW5wdXQoe1xuICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgbWV0aG9kTmFtZTogcGFyYW1zLnN0YXRlLFxuICAgICAgICBhcmdzOiBwYXJhbXMuZGF0YVxuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSBhY3Rpb24oXG4gICAgICAgICAgcGFyYW1zLmNvbnRleHQgfHwgY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICBhY3Rpb25zWzBdLFxuICAgICAgICAgIHBhcmFtcy5kYXRhLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgZXhwb3J0cy5jaGVja091dHB1dCh7XG4gICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgbWV0aG9kTmFtZTogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgIG1ldGhvZFJlc3VsdDogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFjdGlvbihcbiAgICAgICAgICAgIHBhcmFtcy5jb250ZXh0IHx8IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvbnNbaV0sXG4gICAgICAgICAgICBwYXJhbXMuZGF0YSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChjb21wb25lbnQgJiYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0xpbmsgfHwgaXNDb2xsZWN0aW9uKSkge1xuICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXX0=
