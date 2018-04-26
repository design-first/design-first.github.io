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
	"version": "2.8.0",
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
				"version": "2.8.0"
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
 * @description This module manages the behaviors of all components.
 * A behavior is a mecanism that allow users to add actions that will be executed
 * when a specific state of a component will change.
 */

'use strict';

var $db = require('./db.js');
var $helper = require('./helper.js');

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

  if (params[0] === '') {
    params = [];
  }

  if (useCoreAPI) {
    params.push('$component');
    params.push('$db');
    params.push('$metamodel');
    params.push('$workflow');
    params.push('$behavior');
    params.push('$state');
    params.push('$log');
    params.push('$helper');
  }

  if ($helper.isOnNode()) {
    params.push('require');
  }

  if (params[0] !== '') {
    action = new Function(
      '__action',
      'return function ' +
        functionName +
        ' (' +
        params.join(', ') +
        ") { return new Function('" +
        params.join("', '") +
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
    action = store[behavior._id];
    if (typeof action === 'undefined') {
      action = createFunction(
        behavior.state,
        behavior.action,
        behavior.core,
        behavior.useCoreAPI
      );
      store[behavior._id] = action;
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

},{"./db.js":4,"./helper.js":5}],3:[function(require,module,exports){
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

/* Private properties */

var PROPERTY_TYPE = 'property';
var LINK_TYPE = 'link';
var COLLECTION_TYPE = 'collection';
var METHOD_TYPE = 'method';
var EVENT_TYPE = 'event';
var NAME = '_name';
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
          if (typeof val.id !== 'undefined') {
            $log.invalidPropertyName(id, classId, propertyName, val.id(), type);
          } else {
            $log.invalidPropertyName(id, classId, propertyName, val, type);
          }
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
    var result = null;

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

    result = arr;
    _copy();

    return result;
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
  schema = $metamodel.getSchema(model[NAME]);

  propNames = Object.keys(schema);

  length = propNames.length;
  for (i = 0; i < length; i++) {
    if (
      schema[propNames[i]] === LINK_TYPE ||
      schema[propNames[i]] === PROPERTY_TYPE ||
      schema[propNames[i]] === COLLECTION_TYPE
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
  schema = $metamodel.getSchema(model[NAME]);

  propNames = Object.keys(schema);

  length = propNames.length;
  for (i = 0; i < length; i++) {
    if (schema[propNames[i]] === METHOD_TYPE) {
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
  schema = $metamodel.getSchema(model[NAME]);

  propNames = Object.keys(schema);

  length = propNames.length;
  for (i = 0; i < length; i++) {
    if (schema[propNames[i]] === EVENT_TYPE) {
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

    if (typeof config._id === 'undefined') {
      config._id = $helper.generateId();
    }

    store[config._id] = this;

    // id
    proxy = function proxy() {
      return config._id;
    };
    this.id = new Function(
      '__proxy',
      'return function id () { return __proxy.apply(this) };'
    )(proxy);

    // create link to db
    $db.store[classId][config._id] = config;

    $db.createLog('insert', classId, config._id, '', config);

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
                  propertyType
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
                    propertyType
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
                      data: [arr, 'add']
                    });
                  }

                  // current element
                  $workflow.process({
                    component: id,
                    state: fullPath,
                    data: [arr, 'add']
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
          systemId = systems[0]._id;
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

},{"./behavior.js":2,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9,"./workflow.js":10}],4:[function(require,module,exports){
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
      if (!exports.store._Schema[schemaId]._core) {
        schema = JSON.parse(JSON.stringify(exports.store._Schema[schemaId]));
        dbDump.schemas[schemaId] = schema;
      }
    }
  }

  // models
  dbDump.models = {};
  if (exports._Model.count()) {
    for (modelId in exports.store._Model) {
      if (!exports.store._Model[modelId]._core) {
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
        if (collection[id]._core) {
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
    // remove deprecated property
    delete importedSystem.subsystem;

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
      if (systems[0]._id === importedSystem._id) {
        importedSystem.master = true;
      } else {
        if (importedSystem.master) {
          systems[0].master = false;
        }
      }
    }

    // insert the system in DB
    exports._System.insert(importedSystem);

    result = importedSystem._id;
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
    id = mastersystem._id;

    // prop
    exportedSystem._id = id;
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
      if (!schema._core) {
        system.schemas[schema._id] = schema;
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
      if (!model._core) {
        system.models[model._id] = model;
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
      if (!type._core) {
        system.types[type._id] = type;
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
        system.behaviors[behavior._id] = behavior;
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
          system.components[className][component._id] = component;
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
          if (typeof obj._id === 'undefined') {
            obj._id = $helper.generateId();
          }

          $metamodel.prepareObject(obj, $metamodel.getModel(this.name));

          exports.store[this.name][obj._id] = obj;

          Component = $component.get(this.name);
          if (Component) {
            component = new Component(obj);
            result.push(component.id());
          } else {
            exports.createLog('insert', this.name, obj._id, '', obj);

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
                channel = $helper.getRuntime().require(channels[i]._id);
                $workflow.process({
                  component: channels[i]._id,
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
      if (query._id) {
        update._id = query._id;
      }
      this.insert(update);
      updated = updated + 1;
    }

    for (i = 0; i < length; i++) {
      // case of update of _id
      if (typeof update._id !== 'undefined' && update._id !== docs[i]._id) {
        $log.updateUuid(
          docs[i]._id,
          update._id,
          typeof $component.get(update._id) !== 'undefined'
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
              if ($metamodel.getMetaDef()[attributeName]) {
                type = $metamodel.getMetaDef()[attributeName].type;
              }
            }
            if (type) {
              if ($metamodel.isValidType(update[attributeName], type)) {
                docs[i][attributeName] = update[attributeName];
                updated = updated + 1;

                exports.createLog(
                  'update',
                  this.name,
                  docs[i]._id,
                  attributeName,
                  update[attributeName]
                );

                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                  $helper
                    .getRuntime()
                    .require('db')
                    .update({
                      collection: this.name,
                      id: docs[i]._id,
                      field: attributeName,
                      value: update[attributeName]
                    });
                }
                if (type === 'array') {
                  $workflow.process({
                    component: docs[i]._id,
                    state: attributeName,
                    data: [update[attributeName], 'reset']
                  });
                } else {
                  $workflow.process({
                    component: docs[i]._id,
                    state: attributeName,
                    data: [update[attributeName]]
                  });
                }
              } else {
                $log.invalidPropertyTypeOnDbUpdate(
                  this.name,
                  docs[i]._id,
                  attributeName,
                  update[attributeName],
                  type
                );
              }
            } else {
              $log.unknownPropertyOnDbUpdate(
                this.name,
                attributeName,
                docs[i]._id
              );
            }
          } else {
            // TODO more check in case of schema update
            docs[i][attributeName] = update[attributeName];

            exports.createLog(
              'update',
              this.name,
              docs[i]._id,
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
                  id: docs[i]._id,
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
 * @param {String} collection collection of the
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

},{"./behavior.js":2,"./component.js":3,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9,"./workflow.js":10}],5:[function(require,module,exports){
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
 * @description This module contains all the functions used by all the modules
 */

'use strict';

var $db = require('./db.js');
var $component = require('./component.js');

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
    runtimeId = search[0]._id;
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

},{"./component.js":3,"./db.js":4}],6:[function(require,module,exports){
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
 * @description This module contains all the functions that write a log
 */

'use strict';

var $metamodel = require('./metamodel.js');
var $db = require('./db.js');
var $component = require('./component.js');

/* Private properties */

var ID = '_id';
var NAME = '_name';
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
      loggerId = loggers[0][ID];

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

  if (schema[NAME]) {
    message =
      "unknown property '" +
      propertyName +
      "' for the definition of '" +
      schema[NAME] +
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
    "invalid type for property '" +
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
    "invalid class name for component '" +
      componentId +
      "': expected '" +
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
  getLogger().warn("schema '" + name + "' is missing.");
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
      "invalid type for property '" +
        propertyName +
        "' on component '" +
        id +
        "'" +
        classInfo +
        ": expected '" +
        type +
        "' instead of '" +
        realType +
        "'"
    );
  } else {
    realType = type && type.constructor ? type.constructor.name : typeof type;

    getLogger().warn(
      "invalid type for property type '" +
        propertyName +
        "' on component '" +
        classInfo +
        ": expected 'string' instead of '" +
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
      "' on an insert operation on collection '" +
      collectionName +
      "'"
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
    "invalid type when trying to update the property '" +
      propertyName +
      "' of document '" +
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
      "' on an update operation on collection '" +
      collectionName +
      "' with component '" +
      id +
      "'"
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
    "try to call an unknown method '" +
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
    "invalid name for creating the collection '" +
      name +
      "': there is no schema '" +
      name +
      "' in the metamodel"
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
    "invalid type for the result of method '" +
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
 * @param {String} componentId if of the component
 * @description Unknown class
 */
exports.unknownComponent = function unknownComponent(className, componentId) {
  getLogger().warn(
    "unkown class component '" +
      className +
      "' for component '" +
      componentId +
      "'"
  );
};

/**
 * @method workflowRestarted
 * @description The System Runtime workflow has been restarted
 */
exports.workflowRestarted = function workflowRestarted() {
  getLogger().warn('runtime has been restarted');
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
    "invalid number of parameters when calling the method '" +
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
        "' when calling the method '" +
        methodName +
        "' on component '" +
        id +
        "'" +
        classInfo
    );
  } else {
    getLogger().warn(
      "invalid type for a parameter when calling the method '" +
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
    "try to add more than one behavior for the state '" +
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
    "try to add a behavior to an unkwown state '" +
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
    "try to remove a behavior from an unkwown state '" +
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
    "invalid type for property '" +
      name +
      "': expected '" +
      typeName +
      "' instead of '" +
      realType +
      "'"
  );
};

/**
 * @method invalidClassType
 * @param {Object} obj an object
 * @param {String} type expected class type
 * @description Invalid class type
 */
exports.invalidClassType = function invalidClassType(obj, type) {
  getLogger().warn(
    "invalid class name for the object '" +
      JSON.stringify(obj) +
      "': expected '" +
      type
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
    "invalid configuration found for '" +
      JSON.stringify(obj) +
      "': expected '" +
      type
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
    "invalid number of parameters when adding a behavior on method '" +
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
  getLogger().warn(
    "try get the information of an unknown model '" + classId + "'"
  );
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
      'a cyclic inheritance dependency with ’' +
        name +
        "’ schema has been found, please check the '_inherit' properties of your schemas"
    );
  } else {
    getLogger().error(
      "a cyclic inheritance dependency has been found, please check the '_inherit' properties of your schemas"
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
      "error when trying to call the method '" +
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
      "error when trying to call the method '" +
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
      "': only 'property', 'link', 'collection', 'method' and 'event' are allowed."
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
    "invoke the behavior '" +
      methodName +
      "' on the class '" +
      className +
      "' without a valid context"
  );
};

},{"./component.js":3,"./db.js":4,"./metamodel.js":7}],7:[function(require,module,exports){
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

/* Private properties */

var ID = '_id';
var NAME = '_name';
var DESCRIPTION = '_description';
var INHERITS = '_inherit';
var CLASS = '_class';
var CORE = '_core';
var METHOD_TYPE = 'method';
var EVENT_TYPE = 'event';
var PROPERTY_TYPE = 'property';
var LINK_TYPE = 'link';
var COLLECTION_TYPE = 'collection';
var internalTypes = ['property', 'collection', 'link', 'method', 'event'];
var internalNames = [
  '_id',
  '_name',
  '_inherit',
  '_description',
  '_class',
  '_core'
];
var defaultTypes = [
  'boolean',
  'string',
  'number',
  'object',
  'function',
  'array',
  'date',
  'any'
];
var store = {
  metadef: {},
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

  if (internalNames.indexOf(name) === -1) {
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
      _name: schema._name
    };

    // set _core
    if (typeof schema._core !== 'undefined') {
      model._core = schema._core;
    }

    // set inherit
    if (Array.isArray(schema._inherit)) {
      model._inherit = schema._inherit;
    }

    // set class
    if (typeof schema._class !== 'undefined') {
      model._class = schema._class;
    }

    // set description
    if (typeof schema._description !== 'undefined') {
      model._description = schema._description;
    }

    // check valid name
    for (att in schema) {
      if (!isInternalName(att) && att.indexOf('_') === 0) {
        $log.invalidSchemaPropertyName(schema._name, att);
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
            $log.invalidSchemaProperty(schema._name, att);
          }
          break;
      }
    }

    store.generatedModels[model._name] = model;
  }

  // models to override
  for (modelName in store.generatedModels) {
    model = store.generatedModels[modelName];
    name = model[NAME];
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

    if (!modelDef._core) {
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

    name = schema[NAME];
    inherit = schema[INHERITS];

    store.schemas[name] = schema;
    if (inherit) {
      store.inheritance[name] = inherit;
    }

    if (!schema._core) {
      $log.loadSchema(name);
    }
  }

  // load models
  models = $db._Model.find({});

  length = models.length;
  for (i = 0; i < length; i++) {
    model = models[i];
    name = model[NAME];

    store.models[name] = model;

    if (!model._core) {
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
    if (!store.schemas[name]._core) {
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
        if (!classDef._core) {
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
          internalTypes.indexOf(type) !== -1
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
      property !== ID &&
      property !== NAME &&
      property !== DESCRIPTION &&
      property !== INHERITS &&
      property !== CLASS &&
      property !== CORE
    ) {
      if (typeof classDef[property] !== 'undefined') {
        value = classDef[property];
        if (!checkSchema(value, classImp[property])) {
          $log.invalidTypeImp(property, classDef[NAME]);
        }
      } else {
        $log.missingPropertyImp(property, classDef[NAME]);
      }
    }
  }
  // check if all properties are there
  for (property in classDef) {
    if (
      property !== ID &&
      property !== NAME &&
      property !== DESCRIPTION &&
      property !== INHERITS &&
      property !== CLASS &&
      property !== CORE
    ) {
      if (typeof classImp[property] === 'undefined') {
        $log.unknownPropertyImp(property, classDef[NAME]);
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

  if (hasType(type, 'string') && defaultTypes.indexOf(type) !== -1) {
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
      typeof $db[modelDef[NAME]] === 'undefined' &&
      modelDef[CLASS] !== false
    ) {
      $db.collection(modelDef[NAME]);

      if (!modelDef._core) {
        $log.createCollection(modelDef[NAME]);
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
    if (modelDef[CLASS] !== false) {
      $component.create({
        model: modelName
      });
      if (!modelDef._core) {
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
    name = modelDef[NAME] + 'Info';

    if (
      modelDef[CLASS] !== false &&
      exports.inheritFrom(modelDef[NAME], '_Component')
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
    defaultTypes.indexOf(value) === -1 &&
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

  if (componentSchema && componentSchema[NAME]) {
    componentSchema = store.compiledSchemas[componentSchema[NAME]];
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
      schema[NAME] = name;
      schemaName = name;
    } else {
      schema = JSON.parse(JSON.stringify(name));
      schemaName = schema[NAME];
    }
  } else {
    schema = JSON.parse(JSON.stringify(schema));
    schema[NAME] = name;
    schemaName = schema[NAME];
  }

  if (typeof schema[ID] === 'undefined') {
    schema[ID] = $helper.generateId();
  }
  if (typeof schema[INHERITS] === 'undefined') {
    schema[INHERITS] = ['_Component'];
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

  schema[INHERITS] = _removeDuplicate(schema[INHERITS]);

  // check if schema is compliant with the meta meta model
  if (exports.isValidObject(schema, store.metadef.schema, false)) {
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
      id = schemas[0]._id;
    } else {
      result = $db._Schema.insert(schema);
      id = result[0];
    }
  } else {
    $log.invalidSchema(schema[NAME]);
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
    modelName = model[NAME];
  } else {
    model = JSON.parse(JSON.stringify(model));
    model[NAME] = name;
    model = compileConfiguration(model);
    modelName = model[NAME];
  }

  if (typeof model[ID] === 'undefined') {
    model[ID] = $helper.generateId();
  }

  // check if model is compliant with the meta meta model
  if (exports.isValidObject(model, store.metadef.model, false)) {
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
      id = models[0]._id;
    } else {
      result = $db._Model.insert(model);
      id = result[0];
    }
  } else {
    $log.invalidModel(model[NAME]);
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

  if (typeof typeDef[ID] === 'undefined') {
    typeDef[ID] = $helper.generateId();
  }

  // check if type is compliant with the meta meta model
  if (exports.isValidObject(typeDef, store.metadef.type)) {
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
  store.metadef = {
    schema: {
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
    },
    model: {
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
    },
    type: {
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
    }
  };
  initDbStructure();
};

/**
 * @method clear
 * @description Remove the data of the metamodel from the memory
 */
exports.clear = function clear() {
  store = {
    metadef: {},
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
  return checkType(name, id, EVENT_TYPE);
};

/**
 * @method isProperty
 * @param {String} name name of the property
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a property
 * @description Check if an attribute of the schema is a property
 */
exports.isProperty = function isProperty(name, id) {
  return checkType(name, id, PROPERTY_TYPE);
};

/**
 * @method isLink
 * @param {String} name name of the property
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a link
 * @description Check if an attribute of the schema is a link
 */
exports.isLink = function isLink(name, id) {
  return checkType(name, id, LINK_TYPE);
};

/**
 * @method isCollection
 * @param {String} name name of the collection
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a collection
 * @description Check if an attribute of the schema is a collection
 */
exports.isCollection = function isCollection(name, id) {
  return checkType(name, id, COLLECTION_TYPE);
};

/**
 * @method isMethod
 * @param {String} name name of the method
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a method
 * @description Check if an attribute of the schema is a method
 */
exports.isMethod = function isMethod(name, id) {
  return checkType(name, id, METHOD_TYPE);
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
    if (componentSchema && componentSchema[NAME]) {
      componentSchema = store.generatedModels[componentSchema[NAME]];
    }
    state = store.states[componentSchema[NAME]];

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
   * @method _checkClassName
   * @param {String} value
   * @param {String} typeName
   * @returns {Boolean} the object is compliant with the type
   * @private
   * @description Check if an object is compliant with a class
   */
  function _checkClassName(value, typeName) {
    var isValid = false;
    var typeRef = getRealClassName(typeName);
    var component = value;

    if (value !== '' && value !== null) {
      if (hasType(value, 'string')) {
        component = $component.get(value);
      }
      if (getClassName(component) === typeRef && component && component.id) {
        isValid = true;
      }
    } else {
      isValid = true;
    }

    if (!isValid) {
      $log.invalidClassType(value, typeName);
    }
    return isValid;
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
                isValid = _checkClassName(value[i], typeName[0]);
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
      result = _checkClassName(value, typeName);
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
        // if (getClassName(comp) !== typeRef) { uncomment this line for a strict mode
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
      fieldName === '_core' ||
      fieldName === '_id'
    ) {
      switch (true) {
        case fieldName === '_core':
          typeSchema = 'boolean';
          break;
        case fieldName === '_id':
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
 * @method getMetaDef
 * @returns {Object} the metadefinition of the metamodel
 * @description Get the definition of the metamodel
 */
exports.getMetaDef = function getMetaDef() {
  var result = store.metadef.schema;

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

},{"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./workflow.js":10}],8:[function(require,module,exports){
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

},{"../build/system/system.js":1,"./component.js":3,"./db.js":4,"./helper.js":5,"./metamodel.js":7}],9:[function(require,module,exports){
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

},{"./db.js":4}],10:[function(require,module,exports){
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
              "error when trying to call the method '" +
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
              "error when trying to call the method '" +
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

},{"./behavior.js":2,"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9}]},{},[8])(8)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN0cUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1b0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeDJGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHN5c3RlbVxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGNvbnRhaW5zIFN5c3RlbSBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKiBQdWJsaWMgcHJvcGVydGllcyAqL1xuXG5cbi8qKlxuICogU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAqIEBwcm9wZXJ0eSB7X1N5c3RlbX0gc3lzdGVtXG4gKi9cbmV4cG9ydHMuc3lzdGVtID0gXG57XG5cdFwibmFtZVwiOiBcInN5c3RlbS1ydW50aW1lXCIsXG5cdFwibWFzdGVyXCI6IGZhbHNlLFxuXHRcInZlcnNpb25cIjogXCIyLjguMFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiU3lzdGVtIFJ1bnRpbWVcIixcblx0XCJzY2hlbWFzXCI6IHtcblx0XHRcIjFhYzA3MTg1NjQxZmE5ZlwiOiB7XG5cdFx0XHRcIl9uYW1lXCI6IFwiX0JlaGF2aW9yXCIsXG5cdFx0XHRcIl9pbmhlcml0XCI6IFtcblx0XHRcdFx0XCJfQ29tcG9uZW50XCJcblx0XHRcdF0sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcImNvcmVcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJjb250ZXh0XCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiX2lkXCI6IFwiMWFjMDcxODU2NDFmYTlmXCJcblx0XHR9LFxuXHRcdFwiMTA0YWQxZjQ4NTE4Mzc2XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTA0YWQxZjQ4NTE4Mzc2XCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX0NoYW5uZWxcIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9Db21wb25lbnRcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwic2VuZFwiOiBcImV2ZW50XCIsXG5cdFx0XHRcIiRzeXN0ZW1JbnN0YWxsZWRcIjogXCJldmVudFwiLFxuXHRcdFx0XCIkc3lzdGVtUmVzb2x2ZWRcIjogXCJldmVudFwiLFxuXHRcdFx0XCIkc3lzdGVtU3RhcnRlZFwiOiBcImV2ZW50XCIsXG5cdFx0XHRcIiRzeXN0ZW1TdG9wcGVkXCI6IFwiZXZlbnRcIixcblx0XHRcdFwiJHN5c3RlbVVuaW5zdGFsbGVkXCI6IFwiZXZlbnRcIlxuXHRcdH0sXG5cdFx0XCIxYzAwYjEzYTFiMWJjOTJcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9DbGFzc0luZm9cIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9Db21wb25lbnRcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwibW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJzY2hlbWFcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJtZXRob2RcIjogXCJtZXRob2RcIixcblx0XHRcdFwibWV0aG9kc1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJwcm9wZXJ0eVwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcImxpbmtcIjogXCJtZXRob2RcIixcblx0XHRcdFwibGlua3NcIjogXCJtZXRob2RcIixcblx0XHRcdFwiY29sbGVjdGlvbnNcIjogXCJtZXRob2RcIixcblx0XHRcdFwiY29sbGVjdGlvblwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJldmVudFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJldmVudHNcIjogXCJtZXRob2RcIixcblx0XHRcdFwiX2lkXCI6IFwiMWMwMGIxM2ExYjFiYzkyXCJcblx0XHR9LFxuXHRcdFwiMTExZGYxMWUyYjE5ZmRlXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTExZGYxMWUyYjE5ZmRlXCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX0NvbXBvbmVudFwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NJbmZvXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcIm9uXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcIm9mZlwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJyZXF1aXJlXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcImRlc3Ryb3lcIjogXCJtZXRob2RcIixcblx0XHRcdFwiaW5pdFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJlcnJvclwiOiBcImV2ZW50XCJcblx0XHR9LFxuXHRcdFwiMTcyMzUxNmEzMDEzMmFjXCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfRGF0YWJhc2VcIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9Db21wb25lbnRcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwiY29sbGVjdGlvbnNcIjogXCJtZXRob2RcIixcblx0XHRcdFwiaW5zZXJ0XCI6IFwiZXZlbnRcIixcblx0XHRcdFwidXBkYXRlXCI6IFwiZXZlbnRcIixcblx0XHRcdFwicmVtb3ZlXCI6IFwiZXZlbnRcIixcblx0XHRcdFwiX2lkXCI6IFwiMTcyMzUxNmEzMDEzMmFjXCJcblx0XHR9LFxuXHRcdFwiZjFhMTBkMTA2N2QxYjIzYVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImYxYTEwZDEwNjdkMWIyM2FcIixcblx0XHRcdFwiX25hbWVcIjogXCJfTG9nXCIsXG5cdFx0XHRcIl9pbmhlcml0XCI6IFtcblx0XHRcdFx0XCJfQ29tcG9uZW50XCJcblx0XHRcdF0sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcImFjdGlvblwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImNvbGxlY3Rpb25cIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJpZFwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImZpZWxkXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwidmFsdWVcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJvcmRlclwiOiBcInByb3BlcnR5XCJcblx0XHR9LFxuXHRcdFwiMTI2OGYxZGRkZDFmZWE3XCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfTG9nZ2VyXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcImxldmVsXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiZGVidWdcIjogXCJtZXRob2RcIixcblx0XHRcdFwiaW5mb1wiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJ3YXJuXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcImVycm9yXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcIl9pZFwiOiBcIjEyNjhmMWRkZGQxZmVhN1wiXG5cdFx0fSxcblx0XHRcIjE0Y2FhMWM0NjQxNGVlMVwiOiB7XG5cdFx0XHRcIl9uYW1lXCI6IFwiX01lc3NhZ2VcIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9Db21wb25lbnRcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwiZXZlbnRcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJmcm9tXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiZGF0YVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcIl9pZFwiOiBcIjE0Y2FhMWM0NjQxNGVlMVwiXG5cdFx0fSxcblx0XHRcIjE5M2YxMTY2ZWIxNjYwOVwiOiB7XG5cdFx0XHRcIl9uYW1lXCI6IFwiX01ldGFtb2RlbFwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX0NvbXBvbmVudFwiXG5cdFx0XHRdLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJzY2hlbWFcIjogXCJtZXRob2RcIixcblx0XHRcdFwibW9kZWxcIjogXCJtZXRob2RcIixcblx0XHRcdFwidHlwZVwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJjcmVhdGVcIjogXCJtZXRob2RcIixcblx0XHRcdFwiX2lkXCI6IFwiMTkzZjExNjZlYjE2NjA5XCJcblx0XHR9LFxuXHRcdFwiMTU3OTMxZjdhMzFiNjFkXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTU3OTMxZjdhMzFiNjFkXCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX09TR2lcIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9Db21wb25lbnRcIlxuXHRcdFx0XSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwiaW5zdGFsbFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJ1bmluc3RhbGxcIjogXCJtZXRob2RcIixcblx0XHRcdFwic3RhcnRcIjogXCJtZXRob2RcIixcblx0XHRcdFwic3RvcFwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJzdGF0dXNcIjogXCJtZXRob2RcIixcblx0XHRcdFwiYnVuZGxlXCI6IFwibWV0aG9kXCJcblx0XHR9LFxuXHRcdFwiMTJlMjExZDRjZDEyMGE2XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTJlMjExZDRjZDEyMGE2XCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX1J1bnRpbWVcIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9PU0dpXCJcblx0XHRcdF0sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcInZlcnNpb25cIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJzeXN0ZW1cIjogXCJtZXRob2RcIixcblx0XHRcdFwibWVzc2FnZVwiOiBcIm1ldGhvZFwiLFxuXHRcdFx0XCJyZWFkeVwiOiBcImV2ZW50XCJcblx0XHR9LFxuXHRcdFwiMTU4NzExZDZmMjE1ZTRiXCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfU3RhdGVcIixcblx0XHRcdFwiX2luaGVyaXRcIjogW10sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcIl9jbGFzc1wiOiBmYWxzZSxcblx0XHRcdFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJ2YWx1ZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcIl9pZFwiOiBcIjE1ODcxMWQ2ZjIxNWU0YlwiXG5cdFx0fSxcblx0XHRcIjFjYjc2MWZhNDUxMGRjYVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFjYjc2MWZhNDUxMGRjYVwiLFxuXHRcdFx0XCJfbmFtZVwiOiBcIl9TeXN0ZW1cIixcblx0XHRcdFwiX2luaGVyaXRcIjogW1xuXHRcdFx0XHRcIl9TeXN0ZW1PU0dpXCJcblx0XHRcdF0sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJtYXN0ZXJcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJ2ZXJzaW9uXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJzY2hlbWFzXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwibW9kZWxzXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwiYmVoYXZpb3JzXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwidHlwZXNcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJjb21wb25lbnRzXCI6IFwicHJvcGVydHlcIlxuXHRcdH0sXG5cdFx0XCIxNDVmZTEwYzc1MTQyOThcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxNDVmZTEwYzc1MTQyOThcIixcblx0XHRcdFwiX25hbWVcIjogXCJfU3lzdGVtT1NHaVwiLFxuXHRcdFx0XCJfaW5oZXJpdFwiOiBbXG5cdFx0XHRcdFwiX0NvbXBvbmVudFwiXG5cdFx0XHRdLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwicHJvcGVydHlcIixcblx0XHRcdFwic3RhcnRcIjogXCJtZXRob2RcIixcblx0XHRcdFwic3RvcFwiOiBcIm1ldGhvZFwiXG5cdFx0fVxuXHR9LFxuXHRcIm1vZGVsc1wiOiB7XG5cdFx0XCIxNjY5NzFmZDlkMTA3ZmRcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9CZWhhdmlvclwiLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJjb250ZXh0XCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogbnVsbFxuXHRcdFx0fSxcblx0XHRcdFwiY29yZVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdFwidXNlQ29yZUFQSVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcImFueVwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0XCJjb21wb25lbnRcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcImFjdGlvblwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcImphdmFzY3JpcHRcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcInN0YXRlXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0XCJfaWRcIjogXCIxNjY5NzFmZDlkMTA3ZmRcIlxuXHRcdH0sXG5cdFx0XCIxMzVjNzEwNzg4MTBhZjJcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMzVjNzEwNzg4MTBhZjJcIixcblx0XHRcdFwiX25hbWVcIjogXCJfQ2hhbm5lbFwiLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJzZW5kXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIm1lc3NhZ2VcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiJHN5c3RlbUluc3RhbGxlZFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIiRzeXN0ZW1SZXNvbHZlZFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIiRzeXN0ZW1Vbmluc3RhbGxlZFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIiRzeXN0ZW1TdGFydGVkXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImlkXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiJHN5c3RlbVN0b3BwZWRcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaWRcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIjE1ODMyMWRjZWQxMDE0YVwiOiB7XG5cdFx0XHRcIl9uYW1lXCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJtb2RlbFwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IHRydWUsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB7fVxuXHRcdFx0fSxcblx0XHRcdFwicHJvcGVydHlcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibmFtZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicmVzdWx0XCI6IFwib2JqZWN0XCJcblx0XHRcdH0sXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiBcImFycmF5XCJcblx0XHRcdH0sXG5cdFx0XHRcImxpbmtcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibmFtZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicmVzdWx0XCI6IFwib2JqZWN0XCJcblx0XHRcdH0sXG5cdFx0XHRcImxpbmtzXCI6IHtcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJhcnJheVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJtZXRob2RcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibmFtZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicmVzdWx0XCI6IFwib2JqZWN0XCJcblx0XHRcdH0sXG5cdFx0XHRcIm1ldGhvZHNcIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiBcImFycmF5XCJcblx0XHRcdH0sXG5cdFx0XHRcImNvbGxlY3Rpb25cIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibmFtZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicmVzdWx0XCI6IFwib2JqZWN0XCJcblx0XHRcdH0sXG5cdFx0XHRcImNvbGxlY3Rpb25zXCI6IHtcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJhcnJheVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJldmVudFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJuYW1lXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJvYmplY3RcIlxuXHRcdFx0fSxcblx0XHRcdFwiZXZlbnRzXCI6IHtcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJhcnJheVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJfaWRcIjogXCIxNTgzMjFkY2VkMTAxNGFcIixcblx0XHRcdFwic2NoZW1hXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogdHJ1ZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHt9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIjEyMzc1MWNiNTkxZGUyNlwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjEyMzc1MWNiNTkxZGUyNlwiLFxuXHRcdFx0XCJfbmFtZVwiOiBcIl9Db21wb25lbnRcIixcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwib25cIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhdGVcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY3Rpb25cIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInVzZUNvcmVBUElcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImlzQ29yZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIm9mZlwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGF0ZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiYmVoYXZpb3JJZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwicmVxdWlyZVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcImRlc3Ryb3lcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXVxuXHRcdFx0fSxcblx0XHRcdFwiY2xhc3NJbmZvXCI6IHtcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJfQ2xhc3NJbmZvXCJcblx0XHRcdH0sXG5cdFx0XHRcImluaXRcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiY29uZlwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcImVycm9yXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImRhdGFcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImVycm9yUGFyYW1cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCIxOGE1MTE2OWQ3MTEyZDRcIjoge1xuXHRcdFx0XCJfbmFtZVwiOiBcIl9EYXRhYmFzZVwiLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJjb2xsZWN0aW9uc1wiOiB7XG5cdFx0XHRcdFwicmVzdWx0XCI6IFwib2JqZWN0XCJcblx0XHRcdH0sXG5cdFx0XHRcImluc2VydFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJldmVudFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiZGJJbnNlcnRFdmVudFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJ1cGRhdGVcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZXZlbnRcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcImRiVXBkYXRlRXZlbnRcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwicmVtb3ZlXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImV2ZW50XCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJkYlJlbW92ZUV2ZW50XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIl9pZFwiOiBcIjE4YTUxMTY5ZDcxMTJkNFwiXG5cdFx0fSxcblx0XHRcIm8xZTFlMDFlNmI0MWNlYzNcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJvMWUxZTAxZTZiNDFjZWMzXCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX0xvZ1wiLFxuXHRcdFx0XCJhY3Rpb25cIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJkYkFjdGlvblwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiaW5zZXJ0XCJcblx0XHRcdH0sXG5cdFx0XHRcImNvbGxlY3Rpb25cIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0XCJpZFwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcImZpZWxkXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0fSxcblx0XHRcdFwidmFsdWVcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0XCJvcmRlclwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcIm51bWJlclwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IDBcblx0XHRcdH0sXG5cdFx0XHRcIl9jb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTZiOWQxYWMyMjE2ZmZlXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTZiOWQxYWMyMjE2ZmZlXCIsXG5cdFx0XHRcIl9uYW1lXCI6IFwiX0xvZ2dlclwiLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJsZXZlbFwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcImxvZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwid2FyblwiXG5cdFx0XHR9LFxuXHRcdFx0XCJkZWJ1Z1wiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiaW5mb1wiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwid2FyblwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiZXJyb3JcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiMWQ5YjYxMzk0MTFhYTkxXCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfTWVzc2FnZVwiLFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJldmVudFwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0fSxcblx0XHRcdFwiZnJvbVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0fSxcblx0XHRcdFwiZGF0YVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcImFycmF5XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXVxuXHRcdFx0fSxcblx0XHRcdFwiX2lkXCI6IFwiMWQ5YjYxMzk0MTFhYTkxXCJcblx0XHR9LFxuXHRcdFwiMTYyOGMxM2MyMjE1MmU2XCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfTWV0YW1vZGVsXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcInNjaGVtYVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJuYW1lXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInNjaGVtYVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjoge30sXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJhbnlcIlxuXHRcdFx0fSxcblx0XHRcdFwibW9kZWxcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibmFtZVwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCIsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtb2RlbFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjoge30sXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0XCJyZXN1bHRcIjogXCJhbnlcIlxuXHRcdFx0fSxcblx0XHRcdFwidHlwZVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJuYW1lXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInR5cGVcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IHt9LFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicmVzdWx0XCI6IFwiYW55XCJcblx0XHRcdH0sXG5cdFx0XHRcImNyZWF0ZVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtdXG5cdFx0XHR9LFxuXHRcdFx0XCJfaWRcIjogXCIxNjI4YzEzYzIyMTUyZTZcIlxuXHRcdH0sXG5cdFx0XCIxMDBiOTFlZDIyMTFiMTVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMDBiOTFlZDIyMTFiMTVcIixcblx0XHRcdFwiX25hbWVcIjogXCJfT1NHaVwiLFxuXHRcdFx0XCJpbnN0YWxsXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInVybFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImFzeW5jXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJib29sZWFuXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInJlc3VsdFwiOiBcInN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJ1bmluc3RhbGxcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaWRcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJzdGFydFwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcInN0b3BcIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaWRcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJzdGF0dXNcIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiBcIm9iamVjdFwiXG5cdFx0XHR9LFxuXHRcdFx0XCJfY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJidW5kbGVcIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIjE0YzdjMTA1YjMxYTE2MFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE0YzdjMTA1YjMxYTE2MFwiLFxuXHRcdFx0XCJfbmFtZVwiOiBcIl9SdW50aW1lXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcInZlcnNpb25cIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiB0cnVlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIwLjAuMFwiXG5cdFx0XHR9LFxuXHRcdFx0XCJzeXN0ZW1cIjoge1xuXHRcdFx0XHRcInBhcmFtc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwicGFyYW1zXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInJlc3VsdFwiOiBcIm9iamVjdFwiXG5cdFx0XHR9LFxuXHRcdFx0XCJtZXNzYWdlXCI6IHtcblx0XHRcdFx0XCJwYXJhbXNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1zZ1wiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwibWVzc2FnZVwiLFxuXHRcdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwicmVhZHlcIjoge31cblx0XHR9LFxuXHRcdFwiMTc3YWMxMzY4OTE2MjlmXCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfU3RhdGVcIixcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwic3RhdGVcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcInZhbHVlXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogbnVsbFxuXHRcdFx0fSxcblx0XHRcdFwiX2lkXCI6IFwiMTc3YWMxMzY4OTE2MjlmXCJcblx0XHR9LFxuXHRcdFwiMTcwNTIxYjg4NjE0Mzg3XCI6IHtcblx0XHRcdFwiX25hbWVcIjogXCJfU3lzdGVtXCIsXG5cdFx0XHRcIl9jb3JlXCI6IHRydWUsXG5cdFx0XHRcIm5hbWVcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRcIm1hc3RlclwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdFwidmVyc2lvblwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiMC4wLjFcIlxuXHRcdFx0fSxcblx0XHRcdFwiZGVzY3JpcHRpb25cIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0XCJzY2hlbWFzXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFwicmVhZE9ubHlcIjogZmFsc2UsXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjoge31cblx0XHRcdH0sXG5cdFx0XHRcIm1vZGVsc1wiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHt9XG5cdFx0XHR9LFxuXHRcdFx0XCJiZWhhdmlvcnNcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB7fVxuXHRcdFx0fSxcblx0XHRcdFwidHlwZXNcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB7fVxuXHRcdFx0fSxcblx0XHRcdFwiY29tcG9uZW50c1wiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IGZhbHNlLFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHt9XG5cdFx0XHR9LFxuXHRcdFx0XCJfaWRcIjogXCIxNzA1MjFiODg2MTQzODdcIlxuXHRcdH0sXG5cdFx0XCIxYjI4MTFiMDkyMTQzZjVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxYjI4MTFiMDkyMTQzZjVcIixcblx0XHRcdFwiX25hbWVcIjogXCJfU3lzdGVtT1NHaVwiLFxuXHRcdFx0XCJzdGFydFwiOiB7fSxcblx0XHRcdFwic3RvcFwiOiB7fSxcblx0XHRcdFwiX2NvcmVcIjogdHJ1ZSxcblx0XHRcdFwic3RhdGVcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIm5vbmVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25cIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJyZWFkT25seVwiOiBmYWxzZSxcblx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2UsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRcImJlaGF2aW9yc1wiOiB7XG5cdFx0XCIxMmU0OTE4NTljMTM5MThcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMmU0OTE4NTljMTM5MThcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NoYW5uZWxcIixcblx0XHRcdFwic3RhdGVcIjogXCIkc3lzdGVtU3RhcnRlZFwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiAkc3lzdGVtU3RhcnRlZChpZCkgeyBcXG4gIHZhciBzeXN0ZW1zID0gbnVsbDtcXG4gICAgXFxuICBpZiAoaWQgIT09ICdlODljNjE3YjZiMTVkMjQnKSB7XFxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XFxuICAgICAgc3lzdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN5c3RlbV0nKTtcXG4gICAgICAgICBcXG4gICAgICBpZiAoJHN0YXRlLmdldCgncnVudGltZScpICYmICRzdGF0ZS5nZXQoJ3J1bnRpbWUnKS5zdGF0ZSA9PT0gJ3JlYWR5JykgeyAgICBcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoICsgMSA9PT0gJGRiLl9TeXN0ZW0uY291bnQoKSkge1xcbiAgICAgICAgICAkY29tcG9uZW50LmdldCgncnVudGltZScpLnJlYWR5KCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVwiLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWUsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxZTkwMjFiZDRlMWJjNmVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxZTkwMjFiZDRlMWJjNmVcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NoYW5uZWxcIixcblx0XHRcdFwic3RhdGVcIjogXCIkc3lzdGVtSW5zdGFsbGVkXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uICRzeXN0ZW1JbnN0YWxsZWQoaWQpIHtcXG4gIHZhciBzeXN0ZW1zID0gbnVsbCxcXG4gICAgZGVwZW5kZW5jaWVzID0gW10sXFxuICAgIG1hc3RlciA9IFtdLFxcbiAgICBjYW5TdGFydCA9IHRydWU7XFxuXFxuICBpZiAoaWQgIT09ICdlODljNjE3YjZiMTVkMjQnKSB7XFxuICAgIC8vIGlmIGFsbCBzeXN0ZW1zIGFyZSBpbnN0YWxsZWRcXG4gICAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe30pO1xcblxcbiAgICBzeXN0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHN5c3RlbSkge1xcbiAgICAgIHZhciBzeXMgPSB0aGlzLnJlcXVpcmUoc3lzdGVtLl9pZCk7XFxuICAgICAgaWYgKHN5cyAmJiBzeXMuc3RhdGUgJiYgc3lzLnN0YXRlKCkgPT09ICdub25lJykge1xcbiAgICAgICAgY2FuU3RhcnQgPSBmYWxzZTtcXG4gICAgICB9XFxuICAgIH0uYmluZCh0aGlzKSk7XFxuXFxuICAgIC8vIHN0YXJ0IGFsbCB0aGUgc3lzdGVtc1xcbiAgICBpZiAoY2FuU3RhcnQpIHtcXG4gICAgICBkZXBlbmRlbmNpZXMgPSAkZGIuX1N5c3RlbS5maW5kKHtcXG4gICAgICAgICdtYXN0ZXInOiBmYWxzZVxcbiAgICAgIH0pO1xcblxcbiAgICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcXG4gICAgICAgIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoZGVwLl9pZCk7XFxuICAgICAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICAgICAgICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcpIHtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgICAgICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChkZXAuX2lkKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcblxcbiAgICAgIG1hc3RlciA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgICB9KTtcXG5cXG4gICAgICBtYXN0ZXIuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XFxuICAgICAgICB2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGRlcC5faWQpO1xcbiAgICAgICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHN5c3RlbSAmJiBzeXN0ZW0uc3RhdGUgJiYgc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcpIHtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgICAgICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChkZXAuX2lkKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcbiAgICB9XFxuICB9XFxufVwiLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWUsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxNTUxNDFlNDAzMTJjZDhcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxNTUxNDFlNDAzMTJjZDhcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImNvbGxlY3Rpb25cIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ2NvbGxlY3Rpb24nKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMWY2OTQxYTBjMDEyYzFmXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWY2OTQxYTBjMDEyYzFmXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9DbGFzc0luZm9cIixcblx0XHRcdFwic3RhdGVcIjogXCJjb2xsZWN0aW9uc1wiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjb2xsZWN0aW9ucyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnY29sbGVjdGlvbicpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxZWY3MTFiNDE3MWM4NDlcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxZWY3MTFiNDE3MWM4NDlcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImV2ZW50XCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGV2ZW50KG5hbWUpIHtcXG4gIHZhciByZXN1bHQgPSB7fTtcXG5cXG4gIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnZXZlbnQnKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMWJhZTUxYjZlZDFkMjVjXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWJhZTUxYjZlZDFkMjVjXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9DbGFzc0luZm9cIixcblx0XHRcdFwic3RhdGVcIjogXCJldmVudHNcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXZlbnRzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdldmVudCcpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxOWFjMjEyNTIyMTUyOGJcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxOWFjMjEyNTIyMTUyOGJcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NsYXNzSW5mb1wiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImxpbmtcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGluayhuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuXFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ2xpbmsnKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTdlZDIxZGZjMDFiOGU4XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTdlZDIxZGZjMDFiOGU4XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9DbGFzc0luZm9cIixcblx0XHRcdFwic3RhdGVcIjogXCJsaW5rc1wiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsaW5rcyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnbGluaycpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfSByZXR1cm4gcmVzdWx0O1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjExY2UzMThhNTYxYWM2MVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjExY2UzMThhNTYxYWM2MVwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ2xhc3NJbmZvXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwibWV0aG9kXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1ldGhvZChuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ21ldGhvZCcpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcbiAgXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjEyZmYyMTkwYTAxODA0NlwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjEyZmYyMTkwYTAxODA0NlwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ2xhc3NJbmZvXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwibWV0aG9kc1wiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXRob2RzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdtZXRob2QnKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTAyOGQxNjgxZTFmZDU4XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTAyOGQxNjgxZTFmZDU4XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9DbGFzc0luZm9cIixcblx0XHRcdFwic3RhdGVcIjogXCJwcm9wZXJ0aWVzXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIHByb3BlcnRpZXMobmFtZSkge1xcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcblxcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ3Byb3BlcnR5Jykge1xcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICB9XFxuICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMThlZWIxMGM1MzE5MzY4XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMThlZWIxMGM1MzE5MzY4XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9DbGFzc0luZm9cIixcblx0XHRcdFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0eShuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuXFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ3Byb3BlcnR5Jykge1xcbiAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjFiYTcyMTIwMTExNGI2YlwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFiYTcyMTIwMTExNGI2YlwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfQ29tcG9uZW50XCIsXG5cdFx0XHRcInN0YXRlXCI6IFwiZGVzdHJveVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBkZXN0cm95KCkge1xcbiAgJGNvbXBvbmVudC5kZXN0cm95KHRoaXMuaWQoKSk7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxNTQ4NjE4NmY0MWE0OGNcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxNTQ4NjE4NmY0MWE0OGNcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NvbXBvbmVudFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcIm9mZlwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBvZmYoc3RhdGUsIGJlaGF2aW9ySWQpIHtcXG4gIHZhciBhcmdzID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBudW1JbmplY3RlZFBhcmFtcyA9IDgsXFxuICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XFxuXFxuICBpZiAoJGhlbHBlci5pc09uTm9kZSgpKSB7XFxuICAgIG51bUluamVjdGVkUGFyYW1zID0gbnVtSW5qZWN0ZWRQYXJhbXMgKzE7XFxuICB9XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gbnVtSW5qZWN0ZWRQYXJhbXM7IGkrKykge1xcbiAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcXG4gIH1cXG5cXG4gIGlmICgkd29ya2Zsb3cuY2hlY2tJbnB1dCh7XFxuICAgIFxcXCJjb21wb25lbnRcXFwiOiB0aGlzLFxcbiAgICBcXFwibWV0aG9kTmFtZVxcXCI6IFxcXCJvZmZcXFwiLFxcbiAgICBcXFwiYXJnc1xcXCI6IGFyZ3NcXG4gIH0pKSB7XFxuXFxuICAgIGlmIChzdGF0ZSB8fCBiZWhhdmlvcklkKSB7XFxuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKSB7XFxuICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcXG4gICAgICAgICAgXFxcImJlaGF2aW9ySWRcXFwiOiBiZWhhdmlvcklkLFxcbiAgICAgICAgICBcXFwiY29tcG9uZW50SWRcXFwiOiB0aGlzLmlkKCksXFxuICAgICAgICAgIFxcXCJzdGF0ZVxcXCI6IHN0YXRlXFxuICAgICAgICB9KTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS53YXJuKFxcXCJpbnZva2UgXFxcXCdvZmZcXFxcJyBtZXRob2Qgb2YgY29tcG9uZW50ICdcXFwiICsgdGhpcy5pZCgpICsgXFxcIicgd2l0aCBhbiBpbnZhbGlkIHN0YXRlICdcXFwiICsgc3RhdGUgKyBcXFwiJ1xcXCIpO1xcbiAgICAgIH1cXG4gICAgfSBlbHNlIHtcXG4gICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcXG4gICAgICAgIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKVxcbiAgICAgIH0pO1xcbiAgICB9XFxuICB9XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxZGEwYTE3ODc4MTA0YzNcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxZGEwYTE3ODc4MTA0YzNcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0NvbXBvbmVudFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInJlcXVpcmVcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcmVxdWlyZShpZCkge1xcbiAgcmV0dXJuICRjb21wb25lbnQuZ2V0KGlkKTtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZSxcblx0XHRcdFwidXNlQ29yZUFQSVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcImQxNTI2MzFjMzU4MTNmMmVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJkMTUyNjMxYzM1ODEzZjJlXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9Db21wb25lbnRcIixcblx0XHRcdFwic3RhdGVcIjogXCJjbGFzc0luZm9cIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY2xhc3NJbmZvKCkgeyBcXG5cXHRjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XFxuXFx0bGV0IHJlc3VsdDtcXG5cXHRcXG5cXHRpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XFxuXFx0ICByZXN1bHQgPSB0aGlzLnJlcXVpcmUoY2xhc3NOYW1lICsgJ0luZm8nKTtcXG5cXHR9XFxuXFx0XFxuXFx0cmV0dXJuIHJlc3VsdDtcXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogZmFsc2UsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxYTUxMTFkMTdhMTgwMGNcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxYTUxMTFkMTdhMTgwMGNcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0RhdGFiYXNlXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwiY29sbGVjdGlvbnNcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY29sbGVjdGlvbnMoKSB7XFxuICB2YXIgcmVzdWx0ID0ge30sXFxuICAgIGNvbGxlY3Rpb25OYW1lID0gJyc7XFxuXFxuICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluICRkYi5zdG9yZSkge1xcbiAgICBpZiAoJGRiLnN0b3JlLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSkge1xcbiAgICAgIHJlc3VsdFtjb2xsZWN0aW9uTmFtZV0gPSAkZGJbY29sbGVjdGlvbk5hbWVdO1xcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMWQ5OTMxMDhmYTE4ZWYyXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWQ5OTMxMDhmYTE4ZWYyXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9Mb2dnZXJcIixcblx0XHRcdFwic3RhdGVcIjogXCJkZWJ1Z1wiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUubG9nKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxuICB9XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMWEzN2ExODhlMTFmZTczXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWEzN2ExODhlMTFmZTczXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9Mb2dnZXJcIixcblx0XHRcdFwic3RhdGVcIjogXCJlcnJvclwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XFxuICBjb25zb2xlLmVycm9yKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMWVkZDIxZTEyYTE2NTM0XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWVkZDIxZTEyYTE2NTM0XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9Mb2dnZXJcIixcblx0XHRcdFwic3RhdGVcIjogXCJpbmZvXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xcbiAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2luZm8nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICBjb25zb2xlLmluZm8oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gIH1cXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxNDFmMjE0M2QzMTIyYTRcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxNDFmMjE0M2QzMTIyYTRcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX0xvZ2dlclwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImxldmVsXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIGxldmVsKHZhbCkge1xcbiAgJGxvZy5sZXZlbCh2YWwpO1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTkyNDAxYmFiMjEzMDRlXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTkyNDAxYmFiMjEzMDRlXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9Mb2dnZXJcIixcblx0XHRcdFwic3RhdGVcIjogXCJ3YXJuXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xcbiAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2luZm8nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ3dhcm4nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gIH1cXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxMWZjNzE1ZTJmMWEzMWVcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMWZjNzE1ZTJmMWEzMWVcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX01ldGFtb2RlbFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcImNyZWF0ZVwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjcmVhdGUoKSB7XFxuICAkbWV0YW1vZGVsLmNyZWF0ZSgpO1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTIzMmYxZjEwNzE0MmNmXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTIzMmYxZjEwNzE0MmNmXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9NZXRhbW9kZWxcIixcblx0XHRcdFwic3RhdGVcIjogXCJtb2RlbFwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtb2RlbChuYW1lLCBtb2RlbCkge1xcbiAgcmV0dXJuICRtZXRhbW9kZWwubW9kZWwobmFtZSwgbW9kZWwpO1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTM2NTQxMmY2OTE1M2QyXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTM2NTQxMmY2OTE1M2QyXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9NZXRhbW9kZWxcIixcblx0XHRcdFwic3RhdGVcIjogXCJzY2hlbWFcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc2NoZW1hKG5hbWUsIHNjaGVtYSkge1xcbiAgcmV0dXJuICRtZXRhbW9kZWwuc2NoZW1hKG5hbWUsIHNjaGVtYSk7XFxufVwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxOTRkYjE0N2ZlMTYxYTJcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxOTRkYjE0N2ZlMTYxYTJcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX01ldGFtb2RlbFwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInR5cGVcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gdHlwZShuYW1lLCB0eXBlKSB7XFxuICByZXR1cm4gJG1ldGFtb2RlbC50eXBlKG5hbWUsIHR5cGUpO1xcbn1cIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMWVmOTUxZjE0MTFiODk1XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWVmOTUxZjE0MTFiODk1XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9PU0dpXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwiaW5zdGFsbFwiLFxuXHRcdFx0XCJhY3Rpb25cIjogXCJmdW5jdGlvbiBpbnN0YWxsKHVybCwgYXN5bmMpIHtcXG4gIHZhciBpbXBvcnRlZFN5c3RlbSA9IG51bGwsXFxuICAgIHN5c3RlbSA9IHt9LFxcbiAgICBzeXN0ZW1JZCA9ICcnLFxcbiAgICBjYWxsYmFja0xvYWQgPSBudWxsLFxcbiAgICB4aHIgPSBudWxsLFxcbiAgICByZXN1bHQgPSAnJyxcXG4gICAgY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XFxuXFxuICBpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcXG4gICAgaW1wb3J0ZWRTeXN0ZW0gPSB1cmw7XFxuICB9IGVsc2Uge1xcbiAgICBpZiAodXJsLmluZGV4T2YoJ3snKSA9PT0gMCkge1xcbiAgICAgIGltcG9ydGVkU3lzdGVtID0gSlNPTi5wYXJzZSh1cmwpO1xcbiAgICB9XFxuICB9XFxuXFxuICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHtcXG4gICAgc3lzdGVtSWQgPSAkZGIuaW1wb3J0U3lzdGVtKGltcG9ydGVkU3lzdGVtKTtcXG4gICAgaWYgKHN5c3RlbUlkKSB7XFxuICAgICAgc3lzdGVtID0gdGhpcy5yZXF1aXJlKHN5c3RlbUlkKTtcXG5cXG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcXG4gICAgICAgIHN5c3RlbS5sb2NhdGlvbih1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW0uc3RhdGUoJ2luc3RhbGxlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXN0ZW1JZCk7XFxuICAgICAgc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5c3RlbUlkKTtcXG5cXG4gICAgICByZXN1bHQgPSBzeXN0ZW1JZDtcXG4gICAgfVxcbiAgfSBlbHNlIHtcXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XFxuICAgICAgaWYgKHVybC5pbmRleE9mKCcuanNvbicpICE9PSAtMSkge1xcbiAgICAgICAgc3lzdGVtID0gcmVxdWlyZShnbG9iYWwucHJvY2Vzcy5lbnYuUFdEICsgJy8nICsgdXJsKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgc3lzdGVtID0gcmVxdWlyZSh1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW1JZCA9ICRkYi5pbXBvcnRTeXN0ZW0oc3lzdGVtKTtcXG4gICAgICBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoc3lzdGVtSWQpO1xcblxcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xcbiAgICAgICAgc3lzdGVtLmxvY2F0aW9uKHVybCk7XFxuICAgICAgfVxcbiAgICAgIHN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5c3RlbUlkKTtcXG4gICAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3lzdGVtSWQpO1xcblxcbiAgICAgIHJlc3VsdCA9IHN5c3RlbUlkO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xcbiAgICAgIGNhbGxiYWNrTG9hZCA9IGZ1bmN0aW9uIGNhbGxiYWNrTG9hZChzeXN0ZW0sIHVybCkge1xcbiAgICAgICAgdmFyIHN5c0lkID0gJGRiLmltcG9ydFN5c3RlbShzeXN0ZW0pLFxcbiAgICAgICAgICBzeXMgPSAkY29tcG9uZW50LmdldChzeXNJZCksXFxuICAgICAgICAgIGNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgICAgIHN5cy5sb2NhdGlvbih1cmwpO1xcbiAgICAgICAgfVxcbiAgICAgICAgc3lzLnN0YXRlKCdpbnN0YWxsZWQnKTtcXG4gICAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXNJZCk7XFxuICAgICAgICBzeXMuc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXNJZCk7XFxuXFxuICAgICAgICByZXN1bHQgPSBzeXNJZDtcXG4gICAgICB9O1xcblxcbiAgICAgIGlmIChhc3luYykge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDApIHtcXG4gICAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAwKSB7XFxuICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcblx0XHRcdFwidXNlQ29yZUFQSVwiOiB0cnVlLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTRjMTUxN2I3MTFjYjc4XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTRjMTUxN2I3MTFjYjc4XCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9PU0dpXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwidW5pbnN0YWxsXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIHVuaW5zdGFsbChpZCkge1xcbiAgdmFyIHNlYXJjaCA9IHt9LFxcbiAgICBzeXN0ZW0gPSBudWxsLFxcbiAgICBiZWhhdmlvcklkID0gJycsXFxuICAgIGNvbGxlY3Rpb24gPSAnJyxcXG4gICAgY29tcG9uZW50SWQgPSAnJyxcXG4gICAgbGVuZ3RoID0gMCxcXG4gICAgaSA9IDAsXFxuICAgIGNvcmVDb21wb25lbnRzID0gWydhZG1pbicsICdjaGFubmVsJywgJ2RiJywgJ2xvZ2dlcicsICdtZXRhbW9kZWwnLCAncnVudGltZSddO1xcblxcbiAgc2VhcmNoID0gJGRiLl9TeXN0ZW0uZmluZCh7XFxuICAgICdfaWQnOiBpZFxcbiAgfSk7XFxuXFxuICBpZiAoc2VhcmNoLmxlbmd0aCkge1xcbiAgICBzeXN0ZW0gPSBzZWFyY2hbMF07XFxuICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcXG4gICAgaWYgKHN5c3RlbS5iZWhhdmlvcnMpIHtcXG4gICAgICBmb3IgKGJlaGF2aW9ySWQgaW4gc3lzdGVtLmJlaGF2aW9ycykge1xcbiAgICAgICAgJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICAnX2lkJzogc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvcklkXS5faWRcXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAvLyByZW1vdmUgY29tcG9uZW50c1xcbiAgICBpZiAoc3lzdGVtLmNvbXBvbmVudHMpIHtcXG4gICAgICBmb3IgKGNvbGxlY3Rpb24gaW4gc3lzdGVtLmNvbXBvbmVudHMpIHtcXG4gICAgICAgIGZvciAoY29tcG9uZW50SWQgaW4gc3lzdGVtLmNvbXBvbmVudHNbY29sbGVjdGlvbl0pIHtcXG4gICAgICAgICAgaWYgKGNvcmVDb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50SWQpID09PSAtMSkge1xcbiAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS5yZW1vdmUoe1xcbiAgICAgICAgICAgICAgJ19pZCc6IGNvbXBvbmVudElkXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIGlmICh0aGlzLnJlcXVpcmUoaWQpICYmIHRoaXMucmVxdWlyZShpZCkuc3RhdGUpIHtcXG4gICAgdGhpcy5yZXF1aXJlKGlkKS5zdGF0ZSgndW5pbnN0YWxsZWQnKTtcXG4gICAgdGhpcy5yZXF1aXJlKCdjaGFubmVsJykuJHN5c3RlbVVuaW5zdGFsbGVkKGlkKTtcXG4gIH1cXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogdHJ1ZSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjEwNWYyMTljNjgxMzY0M1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjEwNWYyMTljNjgxMzY0M1wiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfT1NHaVwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcInN0YXJ0XCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN0YXJ0KGlkKSB7XFxuICB2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGlkKSxcXG4gICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcbiAgaWYgKHN5c3RlbS5zdGF0ZSgpID09PSAncmVzb2x2ZWQnIHx8IHN5c3RlbS5zdGF0ZSgpID09PSAnaW5zdGFsbGVkJykge1xcbiAgICBzeXN0ZW0uc3RhdGUoJ3N0YXJ0aW5nJyk7XFxuICAgIGlmIChzeXN0ZW0uc3RhcnQpIHtcXG4gICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgfVxcbiAgICBjaGFubmVsLiRzeXN0ZW1TdGFydGVkKGlkKTtcXG4gICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gIH1cXG59XCIsXG5cdFx0XHRcInVzZUNvcmVBUElcIjogZmFsc2UsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxYTgxYTFmMDBkMTcyNjlcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxYTgxYTFmMDBkMTcyNjlcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX09TR2lcIixcblx0XHRcdFwic3RhdGVcIjogXCJzdG9wXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN0b3AoaWQpIHtcXG4gIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoaWQpLFxcbiAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdhY3RpdmUnKSB7XFxuICAgIHN5c3RlbS5zdGF0ZSgnc3RvcHBpbmcnKTtcXG4gICAgaWYgKHN5c3RlbS5zdG9wKSB7XFxuICAgICAgc3lzdGVtLnN0b3AoKTtcXG4gICAgfVxcbiAgICBjaGFubmVsLiRzeXN0ZW1TdG9wcGVkKGlkKTtcXG4gICAgc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xcbiAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChpZCk7XFxuICB9XFxufVwiLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiMTE2ODUxYjYwMjEyOGQxXCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMTE2ODUxYjYwMjEyOGQxXCIsXG5cdFx0XHRcImNvbXBvbmVudFwiOiBcIl9PU0dpXCIsXG5cdFx0XHRcInN0YXRlXCI6IFwic3RhdHVzXCIsXG5cdFx0XHRcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN0YXR1cygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgc3lzdGVtID0gbnVsbCxcXG4gICAgbGVuZ3RoID0gMCxcXG4gICAgaSA9IDA7XFxuXFxuICBzeXN0ZW1zID0gJGRiLl9TeXN0ZW0uZmluZCh7fSk7XFxuXFxuICBsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgICByZXN1bHRbc3lzdGVtLm5hbWVdID0ge1xcbiAgICAgICdpZCc6IHN5c3RlbS5faWQsXFxuICAgICAgJ3N0YXRlJzogc3lzdGVtLnN0YXRlLFxcbiAgICAgICduYW1lJzogc3lzdGVtLm5hbWUsXFxuICAgICAgJ3ZlcnNpb24nOiBzeXN0ZW0udmVyc2lvbixcXG4gICAgICAnbG9jYXRpb24nOiBzeXN0ZW0ubG9jYXRpb24sXFxuICAgICAgJ21hc3Rlcic6IHN5c3RlbS5tYXN0ZXJcXG4gICAgfTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWUsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxOWNmMzE3ZDcyMTczMzFcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxOWNmMzE3ZDcyMTczMzFcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX09TR2lcIixcblx0XHRcdFwic3RhdGVcIjogXCJidW5kbGVcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gYnVuZGxlKCkgeyBcXG5cXHR2YXIgcmVzdWx0ID0gJGRiLmV4cG9ydFN5c3RlbSgpO1xcblxcdHJldHVybiByZXN1bHQ7XFxufVwiLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWUsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxMzAxMDE2N2YzMTNmODdcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxMzAxMDE2N2YzMTNmODdcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiX1J1bnRpbWVcIixcblx0XHRcdFwic3RhdGVcIjogXCJzeXN0ZW1cIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKHBhcmFtcykge1xcbiAgdmFyIFJ1bnRpbWVTeXN0ZW0gPSBudWxsLFxcbiAgICBzeXN0ZW0gPSB7fSxcXG4gICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGNvbmYgPSB7fTtcXG5cXG4gIGlmIChwYXJhbXMpIHtcXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgY29uZi5tYXN0ZXIgPSB0cnVlO1xcbiAgICAgIGNvbmYubmFtZSA9IHBhcmFtcztcXG4gICAgfSBlbHNlIHtcXG4gICAgICBjb25mID0gcGFyYW1zO1xcbiAgICAgIGNvbmYubWFzdGVyID0gdHJ1ZTtcXG4gICAgfVxcbiAgICBSdW50aW1lU3lzdGVtID0gdGhpcy5yZXF1aXJlKCdfU3lzdGVtJyk7XFxuICAgIHN5c3RlbSA9IG5ldyBSdW50aW1lU3lzdGVtKGNvbmYpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgfSBlbHNlIHtcXG4gICAgcmVzdWx0ID0gJGRiLl9TeXN0ZW0uZmluZCh7XFxuICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgfSk7XFxuICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XFxuICAgICAgc3lzdGVtSWQgPSByZXN1bHRbMF0uX2lkO1xcbiAgICAgIHN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5c3RlbUlkKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIHN5c3RlbTtcXG59XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZSxcblx0XHRcdFwidXNlQ29yZUFQSVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIjFjZmE0MTQ1ZjYxNGRhOFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjFjZmE0MTQ1ZjYxNGRhOFwiLFxuXHRcdFx0XCJjb21wb25lbnRcIjogXCJfUnVudGltZVwiLFxuXHRcdFx0XCJzdGF0ZVwiOiBcIm1lc3NhZ2VcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWVzc2FnZShtc2cpIHsgXFxuICAkZGIuX01lc3NhZ2UuaW5zZXJ0KG1zZyk7XFxufVwiLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWUsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCIxY2I5ZDEwM2Q0MWRkOTdcIjoge1xuXHRcdFx0XCJfaWRcIjogXCIxY2I5ZDEwM2Q0MWRkOTdcIixcblx0XHRcdFwiY29tcG9uZW50XCI6IFwiZTg5YzYxN2I2YjE1ZDI0XCIsXG5cdFx0XHRcInN0YXRlXCI6IFwic3RhcnRcIixcblx0XHRcdFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3RhcnQoKSB7XFxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gRE9NQ29udGVudExvYWRlZChlKSB7XFxuICAgICAgdmFyIHN5c3RlbXMgPSBbXSxcXG4gICAgICAgIHN5c3RlbSA9IG51bGwsXFxuICAgICAgICBzY3JpcHRzID0gW10sXFxuICAgICAgICBzY3JpcHQgPSBudWxsLFxcbiAgICAgICAgbG9nTGV2ZWwgPSAnd2FybicsXFxuICAgICAgICBpID0gMCxcXG4gICAgICAgIGxlbmd0aCA9IDA7XFxuICAgIFxcbiAgICAgIHN5c3RlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zeXN0ZW1dJyk7XFxuICAgICAgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7XFxuICBcXG4gICAgICAvLyBsb2dnZXJcXG4gICAgICBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W2xvZ10nKTtcXG4gICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcXG4gICAgICAgIGxvZ0xldmVsID0gc2NyaXB0c1swXS5nZXRBdHRyaWJ1dGUoJ2xvZycpO1xcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbChsb2dMZXZlbCk7XFxuICAgICAgfVxcbiAgXFxuICAgICAgLy8gc3lzdGVtc1xcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgc3lzdGVtID0gc3lzdGVtc1tpXTtcXG4gIFxcbiAgICAgICAgaWYgKHN5c3RlbS5nZXRBdHRyaWJ1dGUoJ2FzeW5jJykgPT09ICdmYWxzZScpIHtcXG4gICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykuaW5zdGFsbChzeXN0ZW0uaHJlZiwgZmFsc2UpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykuaW5zdGFsbChzeXN0ZW0uaHJlZiwgdHJ1ZSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgXFxuICAgICAgLy8gcmVhZHkgZXZlbnRcXG4gICAgICBpZiAobGVuZ3RoID09PSAwKSB7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5yZWFkeSgpO1xcbiAgICAgIH1cXG4gIH0uYmluZCh0aGlzKSk7XFxuICB9XFxufVwiLFxuXHRcdFx0XCJ1c2VDb3JlQVBJXCI6IHRydWUsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH1cblx0fSxcblx0XCJ0eXBlc1wiOiB7XG5cdFx0XCJjc3NcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJoMWQ4ODMxMWFjMDE5MjExXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjc3NcIixcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiZGF0ZVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImMxN2NhZDFiYzNkMTc3NTJcIixcblx0XHRcdFwibmFtZVwiOiBcImRhdGVcIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwianNvblwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImUxZDI1YTEyZTY3MTI3ZWRcIixcblx0XHRcdFwibmFtZVwiOiBcImpzb25cIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiZGJJbnNlcnRFdmVudFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE0OGVmMWUxOTgxMGU2ZFwiLFxuXHRcdFx0XCJjb3JlXCI6IHRydWUsXG5cdFx0XHRcIm5hbWVcIjogXCJkYkluc2VydEV2ZW50XCIsXG5cdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFwic2NoZW1hXCI6IHtcblx0XHRcdFx0XCJjb2xsZWN0aW9uXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZG9jdW1lbnRcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IHt9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiZGJSZW1vdmVFdmVudFwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcIjE5NTJlMWFjNDIxM2Y0YVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZGJSZW1vdmVFdmVudFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZSxcblx0XHRcdFwic2NoZW1hXCI6IHtcblx0XHRcdFx0XCJjb2xsZWN0aW9uXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiaWRcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJkYlVwZGF0ZUV2ZW50XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiMWY1YzQxMzA5NzExNzUyXCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZSxcblx0XHRcdFwibmFtZVwiOiBcImRiVXBkYXRlRXZlbnRcIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcImNvbGxlY3Rpb25cIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJpZFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImZpZWxkXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwidmFsdWVcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImFueVwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWUsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJkYkFjdGlvblwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImUxOTUwZTE2ZjI5MTRkYTlcIixcblx0XHRcdFwiY29yZVwiOiB0cnVlLFxuXHRcdFx0XCJuYW1lXCI6IFwiZGJBY3Rpb25cIixcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJ2YWx1ZVwiOiBbXG5cdFx0XHRcdFwiaW5zZXJ0XCIsXG5cdFx0XHRcdFwidXBkYXRlXCIsXG5cdFx0XHRcdFwicmVtb3ZlXCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdFwiY29sbGVjdGlvblwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImQxYzBkMDEzMGM2MTYxOTlcIixcblx0XHRcdFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcInR5cGVcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwicmVhZE9ubHlcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJib29sZWFuXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImRlZmF1bHRcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImFycmF5XCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImxhYmVsXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiZXJyb3JQYXJhbVwiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImUxOTg3NjFmYzBiMWFlOGFcIixcblx0XHRcdFwibmFtZVwiOiBcImVycm9yUGFyYW1cIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJlcnJvclwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiZXZlbnRcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJnMTY2OGQxZGUyZDFmZjZmXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJldmVudFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcInNjaGVtYVwiOiB7XG5cdFx0XHRcdFwicGFyYW1zXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogW1xuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcImh0bWxcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJ5MTYxYzIxMzIwYjExYWNiXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJodG1sXCIsXG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcImphdmFzY3JpcHRcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJzMTNkNGMxZmRmOTE2NTA0XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJqYXZhc2NyaXB0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcImxpbmtcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJwMTI0NjAxODAxZDFkYmZhXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsaW5rXCIsXG5cdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFwic2NoZW1hXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwicmVhZE9ubHlcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcImJvb2xlYW5cIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJib29sZWFuXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImRlZmF1bHRcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInt0eXBlfVwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJsYWJlbFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcImxvZ1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcImQxZmQxNjFhNGE0MTQ5ZmNcIixcblx0XHRcdFwibmFtZVwiOiBcImxvZ1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcInZhbHVlXCI6IFtcblx0XHRcdFx0XCJkZWJ1Z1wiLFxuXHRcdFx0XHRcImluZm9cIixcblx0XHRcdFx0XCJ3YXJuXCIsXG5cdFx0XHRcdFwiZXJyb3JcIlxuXHRcdFx0XSxcblx0XHRcdFwiY29yZVwiOiB0cnVlXG5cdFx0fSxcblx0XHRcIm1lc3NhZ2VcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJsMTNiMDYxYWM1NzEyNzJkXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG5cdFx0XHRcInR5cGVcIjogXCJvYmplY3RcIixcblx0XHRcdFwic2NoZW1hXCI6IHtcblx0XHRcdFx0XCJldmVudFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImZyb21cIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZGF0YVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYXJyYXlcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJtZXRob2RcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJ4MTIyNzIxOGVlZDFmM2U5XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJtZXRob2RcIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcInJlc3VsdFwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYW55XCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJwYXJhbXNcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBbXG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlclwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwib3NnaVN0YXRlc1wiOiB7XG5cdFx0XHRcIl9pZFwiOiBcInExZjBjYTEyMGZjMTNmYjNcIixcblx0XHRcdFwibmFtZVwiOiBcIm9zZ2lTdGF0ZXNcIixcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJ2YWx1ZVwiOiBbXG5cdFx0XHRcdFwibm9uZVwiLFxuXHRcdFx0XHRcImluc3RhbGxlZFwiLFxuXHRcdFx0XHRcInJlc29sdmVkXCIsXG5cdFx0XHRcdFwic3RhcnRpbmdcIixcblx0XHRcdFx0XCJhY3RpdmVcIixcblx0XHRcdFx0XCJzdG9wcGluZ1wiLFxuXHRcdFx0XHRcInVuaW5zdGFsbGVkXCJcblx0XHRcdF0sXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJwYXJhbWV0ZXJcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJlMWIxOGUxNmM2YzE5NWFkXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJwYXJhbWV0ZXJcIixcblx0XHRcdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcdFx0XCJzY2hlbWFcIjoge1xuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIm5hbWVcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ0eXBlXCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJhbnlcIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibWFuZGF0b3J5XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJib29sZWFuXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogZmFsc2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJ7dHlwZX1cIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XCJjb3JlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwicHJvcGVydHlcIjoge1xuXHRcdFx0XCJfaWRcIjogXCJhMTZhM2ExYWUwNTFhNTVkXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcInNjaGVtYVwiOiB7XG5cdFx0XHRcdFwidHlwZVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcInJlYWRPbmx5XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJib29sZWFuXCIsXG5cdFx0XHRcdFx0XCJtYW5kYXRvcnlcIjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJ7dHlwZX1cIixcblx0XHRcdFx0XHRcIm1hbmRhdG9yeVwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibGFiZWxcIjoge1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWFuZGF0b3J5XCI6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH0sXG5cdFx0XCJ0ZXh0XCI6IHtcblx0XHRcdFwiX2lkXCI6IFwiYzEzNmZjMTI5YTkxMmY1NFwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidGV4dFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcImNvcmVcIjogdHJ1ZVxuXHRcdH1cblx0fSxcblx0XCJjb21wb25lbnRzXCI6IHtcblx0XHRcIl9DaGFubmVsXCI6IHtcblx0XHRcdFwiY2hhbm5lbFwiOiB7XG5cdFx0XHRcdFwiX2lkXCI6IFwiY2hhbm5lbFwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIl9EYXRhYmFzZVwiOiB7XG5cdFx0XHRcImRiXCI6IHtcblx0XHRcdFx0XCJfaWRcIjogXCJkYlwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIl9Mb2dnZXJcIjoge1xuXHRcdFx0XCJsb2dnZXJcIjoge1xuXHRcdFx0XHRcIl9pZFwiOiBcImxvZ2dlclwiLFxuXHRcdFx0XHRcImxldmVsXCI6IFwid2FyblwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIl9NZXRhbW9kZWxcIjoge1xuXHRcdFx0XCJtZXRhbW9kZWxcIjoge1xuXHRcdFx0XHRcIl9pZFwiOiBcIm1ldGFtb2RlbFwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIl9SdW50aW1lXCI6IHtcblx0XHRcdFwicnVudGltZVwiOiB7XG5cdFx0XHRcdFwiX2lkXCI6IFwicnVudGltZVwiLFxuXHRcdFx0XHRcInZlcnNpb25cIjogXCIyLjguMFwiXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRcIl9pZFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiXG59XG47XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuXG4gKiBBIGJlaGF2aW9yIGlzIGEgbWVjYW5pc20gdGhhdCBhbGxvdyB1c2VycyB0byBhZGQgYWN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWRcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgc3RvcmUgPSB7fTtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVGdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgZGVmYXVsdCBuYW1lIG9mIHRoZSBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bmMgYSBzdHJpbmdpZmllZCBmdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIHRoZSBiZWhhdmlvciB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBTeXN0ZW0gUnVudGltZSBjb3JlIGJlaGF2aW9yLlxuICogSW4gdGhhdCBjYXNlLCB0aGUgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZCBpbiBhIHN5c3RlbSAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBTeXN0ZW0gUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBmdW5jdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGhlIGNyZWF0ZWQgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgZnVuY3Rpb24gZnJvbSBhIHN0cmluZy5cbiAqIFRoZSBjcmVhdGVkIGZ1bmN0aW9uOlxuICogLSB3aWxsIGJlIGEgbmFtZWQgZnVuY3Rpb24sXG4gKiAtIGhhcyB0aGUgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IGFuZFxuICogLSBjYW4gaGF2ZSBzb21lIGNvcmUgbW9kdWxlcyBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uKG5hbWUsIGZ1bmMsIGNvcmUsIHVzZUNvcmVBUEkpIHtcbiAgdmFyIGJlZ2luQm9keSA9IC0xO1xuICB2YXIgZnVuY1BhcmFtcyA9ICcnO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciBwYXJhbXNDbGVhbiA9IFtdO1xuICB2YXIgZnVuY0JvZHkgPSAnJztcbiAgdmFyIGhlYWRlciA9ICcnO1xuICB2YXIgYWN0aW9uID0gbnVsbDtcbiAgdmFyIGlzQXJyb3dGdW5jdGlvbiA9IHRydWU7XG4gIHZhciBpc09uZUxpbmUgPSBmYWxzZTtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IG5hbWU7XG5cbiAgaWYgKGZ1bmN0aW9uTmFtZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgZnVuY3Rpb25OYW1lID0gbmFtZS5zcGxpdCgnLicpW25hbWUuc3BsaXQoJy4nKS5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGlmIChmdW5jLnRyaW0oKS5pbmRleE9mKCdmdW5jdGlvbicpID09PSAwKSB7XG4gICAgaXNBcnJvd0Z1bmN0aW9uID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNBcnJvd0Z1bmN0aW9uKSB7XG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCc9PicpO1xuXG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgICBoZWFkZXIgPSBoZWFkZXIucmVwbGFjZSgnPT4nLCAnJyk7XG5cbiAgICBpZiAoaGVhZGVyLmluZGV4T2YoJygnKSAhPT0gLTEpIHtcbiAgICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXJcbiAgICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgICAgLnJlcGxhY2UoJyknLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVuY1BhcmFtcyA9IGhlYWRlci50cmltKCk7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDIsIGZ1bmMubGVuZ3RoKS50cmltKCk7XG5cbiAgICBpZiAoZnVuY0JvZHkuaW5kZXhPZigneycpID09PSAwKSB7XG4gICAgICBmdW5jQm9keSA9IGZ1bmNCb2R5LnN1YnN0cmluZygxLCBmdW5jQm9keS5sYXN0SW5kZXhPZignfScpKS50cmltKCk7XG4gICAgfVxuXG4gICAgaWYgKGZ1bmNCb2R5LmluZGV4T2YoJ1xcbicpID09PSAtMSkge1xuICAgICAgaXNPbmVMaW5lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJvd0Z1bmN0aW9uICYmIGlzT25lTGluZSAmJiBmdW5jQm9keS5pbmRleE9mKCdyZXR1cm4gJykgPT09IC0xKSB7XG4gICAgICBmdW5jQm9keSA9ICdyZXR1cm4gJyArIGZ1bmNCb2R5O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuXG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlclxuICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgIC5yZXBsYWNlKCcpJywgJycpXG4gICAgICAudHJpbSgpO1xuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDEpO1xuICAgIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDAsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcbiAgfVxuXG4gIC8vIGtsdWRnZSBmb3IgQmFiZWxcbiAgZnVuY0JvZHkgPSBmdW5jQm9keS5yZXBsYWNlKC9fdGhpcy9nLCAndGhpcycpO1xuXG4gIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgcGFyYW1zID0gW107XG4gIH1cblxuICBpZiAodXNlQ29yZUFQSSkge1xuICAgIHBhcmFtcy5wdXNoKCckY29tcG9uZW50Jyk7XG4gICAgcGFyYW1zLnB1c2goJyRkYicpO1xuICAgIHBhcmFtcy5wdXNoKCckbWV0YW1vZGVsJyk7XG4gICAgcGFyYW1zLnB1c2goJyR3b3JrZmxvdycpO1xuICAgIHBhcmFtcy5wdXNoKCckYmVoYXZpb3InKTtcbiAgICBwYXJhbXMucHVzaCgnJHN0YXRlJyk7XG4gICAgcGFyYW1zLnB1c2goJyRsb2cnKTtcbiAgICBwYXJhbXMucHVzaCgnJGhlbHBlcicpO1xuICB9XG5cbiAgaWYgKCRoZWxwZXIuaXNPbk5vZGUoKSkge1xuICAgIHBhcmFtcy5wdXNoKCdyZXF1aXJlJyk7XG4gIH1cblxuICBpZiAocGFyYW1zWzBdICE9PSAnJykge1xuICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX2FjdGlvbicsXG4gICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICBmdW5jdGlvbk5hbWUgK1xuICAgICAgICAnICgnICtcbiAgICAgICAgcGFyYW1zLmpvaW4oJywgJykgK1xuICAgICAgICBcIikgeyByZXR1cm4gbmV3IEZ1bmN0aW9uKCdcIiArXG4gICAgICAgIHBhcmFtcy5qb2luKFwiJywgJ1wiKSArXG4gICAgICAgIFwiJywgX19hY3Rpb24pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIlxuICAgICkoZnVuY0JvZHkpO1xuICB9IGVsc2Uge1xuICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX2FjdGlvbicsXG4gICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICBmdW5jdGlvbk5hbWUgK1xuICAgICAgICAnICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihfX2FjdGlvbikuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICApKGZ1bmNCb2R5KTtcbiAgfVxuXG4gIHJldHVybiBhY3Rpb247XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgU3lzdGVtIFJ1bnRpbWUgY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IG5ldyBjb250ZXh0IG9mIHRoZSBiZWhhdmlvclxuICogQHJldHVybnMge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2VcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBiZWhhdmlvciB0aGF0IHdpbGwgYmUgc3RvcmVkIGluIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuYWRkID0gZnVuY3Rpb24gYWRkKGlkLCBzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBjb3JlLCBjb250ZXh0KSB7XG4gIHZhciBiZWhhdmlvcklkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIHZhciBzdHJBY3Rpb24gPSBhY3Rpb24udG9TdHJpbmcoKTtcblxuICBpZiAodHlwZW9mIGNvcmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29yZSA9IGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgdXNlQ29yZUFQSSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1c2VDb3JlQVBJID0gZmFsc2U7XG4gIH1cblxuICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihzdGF0ZSwgc3RyQWN0aW9uLCBjb3JlLCB1c2VDb3JlQVBJKTtcblxuICBzdG9yZVtiZWhhdmlvcklkXSA9IGFjdGlvbjtcblxuICAkZGIuX0JlaGF2aW9yLmluc2VydCh7XG4gICAgX2lkOiBiZWhhdmlvcklkLFxuICAgIGNvbXBvbmVudDogaWQsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogc3RyQWN0aW9uLFxuICAgIHVzZUNvcmVBUEk6IHVzZUNvcmVBUEksXG4gICAgY29yZTogY29yZSxcbiAgICBjb250ZXh0OiBjb250ZXh0XG4gIH0pO1xuXG4gIHJldHVybiBiZWhhdmlvcklkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICoge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3IgKG9wdGlvbmFsKVxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgcGFyYW1zLmJlaGF2aW9ySWQgPSBwYXJhbXMuYmVoYXZpb3JJZCB8fCAnJztcbiAgcGFyYW1zLmNvbXBvbmVudElkID0gcGFyYW1zLmNvbXBvbmVudElkIHx8ICcnO1xuICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG5cbiAgaWYgKHBhcmFtcy5jb21wb25lbnRJZCkge1xuICAgIGlmIChwYXJhbXMuYmVoYXZpb3JJZCkge1xuICAgICAgJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICBfaWQ6IHBhcmFtcy5iZWhhdmlvcklkLFxuICAgICAgICBjb21wb25lbnQ6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgc3RhdGU6IHBhcmFtcy5zdGF0ZVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgc3RvcmVbcGFyYW1zLmJlaGF2aW9ySWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zLnN0YXRlKSB7XG4gICAgICAgIHJlc3VsdCA9ICRkYi5fQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgICBzdGF0ZTogcGFyYW1zLnN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgIGNvbXBvbmVudDogcGFyYW1zLmNvbXBvbmVudElkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IGZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgZGVsZXRlIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgYWN0aW9ucyB0aGF0IGhhdmUgdG8gYmUgZXhlY3V0ZWQgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IGFuZCBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5nZXRBY3Rpb25zID0gZnVuY3Rpb24gZ2V0QWN0aW9ucyhpZCwgc3RhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgZGJSZXN1bHQgPSBbXTtcbiAgdmFyIGFjdGlvbiA9IG51bGw7XG5cbiAgZGJSZXN1bHQgPSAkZGIuX0JlaGF2aW9yLmZpbmQoe1xuICAgIGNvbXBvbmVudDogaWQsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pO1xuXG4gIGRiUmVzdWx0LmZvckVhY2goZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICBhY3Rpb24gPSBzdG9yZVtiZWhhdmlvci5faWRdO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWN0aW9uID0gY3JlYXRlRnVuY3Rpb24oXG4gICAgICAgIGJlaGF2aW9yLnN0YXRlLFxuICAgICAgICBiZWhhdmlvci5hY3Rpb24sXG4gICAgICAgIGJlaGF2aW9yLmNvcmUsXG4gICAgICAgIGJlaGF2aW9yLnVzZUNvcmVBUElcbiAgICAgICk7XG4gICAgICBzdG9yZVtiZWhhdmlvci5faWRdID0gYWN0aW9uO1xuICAgIH1cbiAgICByZXN1bHQucHVzaCh7XG4gICAgICB1c2VDb3JlQVBJOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgY29udGV4dDogYmVoYXZpb3IuY29udGV4dCxcbiAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgc3RvcmVkIGluIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcmV0dXJucyB7QmVoYXZpb3J9IHRoZSBiZWhhdmlvclxuICogQGRlc2NyaXB0aW9uIEdldCBhIGJlaGF2aW9yIGJ5IGl0cyBpZFxuICovXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldChpZCkge1xuICByZXR1cm4gc3RvcmVbaWRdO1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAcmVxdWlyZXMgbG9nXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLlxuICogSXQgaXMgdGhlIGZhY3Rvcnkgb2YgYWxsIHRoZSBjb21wb25lbnRzIHRoYXQgYXJlIGNyZWF0ZWQgYnkgU3lzdGVtIFJ1bnRpbWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZS5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxudmFyIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknO1xudmFyIExJTktfVFlQRSA9ICdsaW5rJztcbnZhciBDT0xMRUNUSU9OX1RZUEUgPSAnY29sbGVjdGlvbic7XG52YXIgTUVUSE9EX1RZUEUgPSAnbWV0aG9kJztcbnZhciBFVkVOVF9UWVBFID0gJ2V2ZW50JztcbnZhciBOQU1FID0gJ19uYW1lJztcbnZhciBzdG9yZSA9IHt9O1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAY2xhc3MgX0FycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gY29uZlxuICoge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICoge1N0cmluZ30gdHlwZSB0eXBlIG9mIHRoZSBhcnJheVxuICoge0FycmF5fSBhcnIgYXJyYXlcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gU3ViIGNsYXNzIHRvIG92ZXJyaWRlIG1hbnkgbWV0aG9kcyBvZiBBcnJheSBDbGFzc1xuICovXG5mdW5jdGlvbiBfQXJyYXkoY29uZikge1xuICB2YXIgYXJyID0gW107XG4gIHZhciBhcnJEYiA9IFtdO1xuICB2YXIgdHlwZSA9ICcnO1xuICB2YXIgaWQgPSAnJztcbiAgdmFyIGNsYXNzSWQgPSAnJztcbiAgdmFyIHByb3BlcnR5TmFtZSA9ICcnO1xuICB2YXIgaXNSZWFkT25seSA9IGZhbHNlO1xuICB2YXIgaXNDbGFzc05hbWUgPSBmYWxzZTtcblxuICBjb25mID0gY29uZiB8fCB7fTtcbiAgdHlwZSA9IGNvbmYudHlwZSB8fCAnJztcbiAgaWQgPSBjb25mLmlkIHx8ICcnO1xuICBwcm9wZXJ0eU5hbWUgPSBjb25mLnByb3BlcnR5TmFtZSB8fCAnJztcbiAgYXJyRGIgPSBjb25mLmFyciB8fCBbXTtcbiAgY2xhc3NJZCA9IGNvbmYuY2xhc3NJZCB8fCAnJztcblxuICBpZiAodHlwZW9mIGNvbmYucmVhZE9ubHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXNSZWFkT25seSA9IGNvbmYucmVhZE9ubHk7XG4gIH1cblxuICBpc0NsYXNzTmFtZSA9ICRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSk7XG5cbiAgLy8gaW5pdFxuICBhcnJEYi5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc0NsYXNzTmFtZSkge1xuICAgICAgYXJyLnB1c2goJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyLnB1c2godmFsKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb3B5XG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBjb3B5IHRoZSBhcnJheVxuICAgKi9cbiAgZnVuY3Rpb24gX2NvcHkoKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICAgIGFyckRiLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAoaXNDbGFzc05hbWUpIHtcbiAgICAgICAgYXJyW2ldID0gJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyW2ldID0gdmFsO1xuICAgICAgfVxuICAgICAgaSA9IGkgKyAxO1xuICAgIH0pO1xuXG4gICAgZm9yIChqID0gaTsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICBkZWxldGUgYXJyW2pdO1xuICAgIH1cbiAgICBhcnIubGVuZ3RoID0gYXJyRGIubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2FkZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsIHZhbHVlIHRvIGFkZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uIHR5cGUgb2YgYWN0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsZXRlQ291bnRcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIGFkZCBhbiBpdGVtIGluIHRoZSBhcnJheVxuICAgKi9cbiAgZnVuY3Rpb24gX2FkZCh2YWwsIGFjdGlvbiwgc3RhcnQsIGRlbGV0ZUNvdW50KSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciBkZWwgPSBbXTtcblxuICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgaWYgKGlzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICh2YWwgJiYgJG1ldGFtb2RlbC5pbmhlcml0RnJvbSh2YWwuY29uc3RydWN0b3IubmFtZSwgdHlwZSkpIHtcbiAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAncHVzaCc6XG4gICAgICAgICAgICAgIGFyckRiLnB1c2godmFsLmlkKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgIGFyckRiLnVuc2hpZnQodmFsLmlkKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgZGVsID0gYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKTtcblxuICAgICAgICAgICAgICBsZW5ndGggPSBkZWwubGVuZ3RoO1xuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFtzdG9yZVtkZWxbaV1dLCAncmVtb3ZlJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBkYXRhOiBbdmFsLCAnYWRkJ11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbC5pZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwuaWQoKSwgdHlwZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAncHVzaCc6XG4gICAgICAgICAgICAgIGFyckRiLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICBhcnJEYi51bnNoaWZ0KHZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdzcGxpY2UnOlxuICAgICAgICAgICAgICBhcnJEYi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBkYXRhOiBbdmFsLCAnYWRkJ11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJEYi5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVtb3ZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIHJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBfcmVtb3ZlKGFjdGlvbikge1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIHZhbCA9IG51bGw7XG5cbiAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgIGlmIChhcnJEYi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwb3AnOlxuICAgICAgICAgICAgdmFsID0gYXJyRGIucG9wKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NoaWZ0JzpcbiAgICAgICAgICAgIHZhbCA9IGFyckRiLnNoaWZ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgcmVzdWx0ID0gc3RvcmVbdmFsXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIGRhdGE6IFtyZXN1bHQsICdyZW1vdmUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCBjbGFzc0lkLCBwcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcHVzaFxuICAgKiBAcGFyYW0ge19Db21wb25lbnR8T2JqZWN0fSB2YWxcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHB1c2ggbWV0aG9kXG4gICAqL1xuICBhcnIucHVzaCA9IGZ1bmN0aW9uIHB1c2godmFsKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9hZGQodmFsLCAncHVzaCcpO1xuXG4gICAgYXJyW2Fyci5sZW5ndGhdID0gdmFsO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBwb3BcbiAgICogQHJldHVybnMge19Db21wb25lbnR8T2JqZWN0fSB2YWx1ZVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgcG9wIG1ldGhvZFxuICAgKi9cbiAgYXJyLnBvcCA9IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3JlbW92ZSgncG9wJyk7XG4gICAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICBkZWxldGUgYXJyW2xlbmd0aF07XG4gICAgICBhcnIubGVuZ3RoID0gbGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNoaWZ0XG4gICAqIEByZXR1cm5zIHtfQ29tcG9uZW50fE9iamVjdH0gdmFsdWVcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNoaWZ0IG1ldGhvZFxuICAgKi9cbiAgYXJyLnNoaWZ0ID0gZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9yZW1vdmUoJ3NoaWZ0Jyk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdW5zaGlmdFxuICAgKiBAcGFyYW0ge19Db21wb25lbnR8T2JqZWN0fSB2YWxcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHVuc2hpZnQgbWV0aG9kXG4gICAqL1xuICBhcnIudW5zaGlmdCA9IGZ1bmN0aW9uIHVuc2hpZnQodmFsKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9hZGQodmFsLCAndW5zaGlmdCcpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHB1c2hcbiAgICogQHBhcmFtIHtfQ29tcG9uZW50fE9iamVjdH0gYXJyXG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBjb25jYXQgbWV0aG9kXG4gICAqL1xuICBhcnIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KGFycikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2FkZChhcnJbaV0sICdwdXNoJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZi5hcnIgPSBhcnJEYjtcblxuICAgIHJlc3VsdCA9IG5ldyBfQXJyYXkoY29uZik7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc29ydFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdCB0aGUgc29ydCBmdW5jdGlvblxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgY3VycmVudCBfQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNvcnQgbWV0aG9kXG4gICAqL1xuICBhcnIuc29ydCA9IGZ1bmN0aW9uIHNvcnQoZnVuY3QpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgIGFyckRiLnNvcnQoZnVuY3QpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICRoZWxwZXJcbiAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBhcnI7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmV2ZXJzZVxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgcmV2ZXJzZWQgX0FycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSByZXZlcnNlIG1ldGhvZFxuICAgKi9cbiAgYXJyLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIGFyckRiLnJldmVyc2UoKTtcblxuICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAkaGVscGVyXG4gICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc3BsaWNlXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSBzcGxpY2VkIF9BcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc3BsaWNlIG1ldGhvZFxuICAgKi9cbiAgYXJyLnNwbGljZSA9IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHZhbCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGRhdGEgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBfYWRkKHZhbCwgJ3NwbGljZScsIHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGFyckRiLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAkaGVscGVyXG4gICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpc0NsYXNzTmFtZSkge1xuICAgICAgICAgIGRhdGEgPSBzdG9yZVtyZXN1bHRbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSByZXN1bHRbaV07XG4gICAgICAgIH1cblxuICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIGRhdGE6IFtkYXRhLCAncmVtb3ZlJ11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc2xpY2VcbiAgICogQHJldHVybnMge19BcnJheX0gdGhlIHNsaWNlZCBfQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNsaWNlIG1ldGhvZFxuICAgKi9cbiAgYXJyLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UoYmVnaW4sIGVuZCkge1xuICAgIHZhciByZXN1bHQgPSBhcnJEYi5zbGljZShiZWdpbiwgZW5kKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gYXJyO1xufVxuXG5fQXJyYXkucHJvdG90eXBlID0gW107XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQYXJhbU5hbWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBwYXJhbXMgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXS5wYXJhbXM7XG4gIGlmIChwYXJhbXMpIHtcbiAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIHByb3BlcnR5IG9mIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyhpZCkge1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHByb3BOYW1lcyA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbTkFNRV0pO1xuXG4gIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKFxuICAgICAgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IExJTktfVFlQRSB8fFxuICAgICAgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IFBST1BFUlRZX1RZUEUgfHxcbiAgICAgIHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBDT0xMRUNUSU9OX1RZUEVcbiAgICApIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgbmFtZTogcHJvcE5hbWVzW2ldLFxuICAgICAgICB0eXBlOiBtb2RlbFtwcm9wTmFtZXNbaV1dLnR5cGUsXG4gICAgICAgIHJlYWRPbmx5OiBtb2RlbFtwcm9wTmFtZXNbaV1dLnJlYWRPbmx5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0TWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIG1ldGhvZHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIG1ldGhvZCBvZiBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGhvZHMoaWQpIHtcbiAgdmFyIG1vZGVsID0gbnVsbDtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBwcm9wTmFtZXMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsW05BTUVdKTtcblxuICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHBhdGggb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIHByb3BlcnR5IHNjaGVtYSBvZiB0aGUgc3RydWN0dXJlIHR5cGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBzY2hlbWEgb2YgYSBzdHJ1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RydWN0dXJlUHJvcGVydGllcyhwYXRoLCBtb2RlbCkge1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBzdHJ1Y3R1cmUgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBwcm9wTmFtZXMgPSBbXTtcblxuICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKG1vZGVsLCBwYXRoKTtcbiAgc3RydWN0dXJlID0gJG1ldGFtb2RlbC5nZXRUeXBlKHR5cGUpO1xuXG4gIGlmIChzdHJ1Y3R1cmUgJiYgc3RydWN0dXJlLnNjaGVtYSkge1xuICAgIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHN0cnVjdHVyZS5zY2hlbWEpO1xuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0cnVjdHVyZS5zY2hlbWFbbmFtZV0ubmFtZSA9IG5hbWU7XG4gICAgICByZXN1bHQucHVzaChzdHJ1Y3R1cmUuc2NoZW1hW25hbWVdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBldmVudHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIGV2ZW50IG9mIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0RXZlbnRzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgcHJvcE5hbWVzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpO1xuICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IEVWRU5UX1RZUEUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSB2YWx1ZSBvZiBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgdmFyIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciBsZW5ndGggPSBzdWJQYXRoLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgYXJyID0gJyc7XG4gIHZhciBpbmRleCA9IC0xO1xuXG4gIHJlc3VsdCA9IGRvYztcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3ViUGF0aFtpXS5pbmRleE9mKCdbJykgIT09IC0xKSB7XG4gICAgICBhcnIgPSBzdWJQYXRoW2ldLnNwbGl0KCdbJylbMF07XG4gICAgICBpbmRleCA9IHN1YlBhdGhbaV0uc3BsaXQoJ1snKVsxXS5yZXBsYWNlKCddJywgJycpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0W2Fycl1baW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJQYXRoW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIHRvIHNldFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIHZhbHVlIG9mIGEgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgdmFyIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciBsZW5ndGggPSBzdWJQYXRoLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgYXJyID0gJyc7XG4gIHZhciBpbmRleCA9IC0xO1xuXG4gIHJlc3VsdCA9IGRvYztcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgaWYgKHN1YlBhdGhbaV0uaW5kZXhPZignWycpICE9PSAtMSkge1xuICAgICAgYXJyID0gc3ViUGF0aFtpXS5zcGxpdCgnWycpWzBdO1xuICAgICAgaW5kZXggPSBzdWJQYXRoW2ldLnNwbGl0KCdbJylbMV0ucmVwbGFjZSgnXScsICcnKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdFthcnJdW2luZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0W3N1YlBhdGhbaV1dO1xuICAgIH1cbiAgfVxuICByZXN1bHRbc3ViUGF0aFtpXV0gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBjbGFzcyBmcm9tIGEgY2xhc3MgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhjbGFzc0lkKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICB2YXIgcHJveHkgPSB7fTtcblxuICAgIGlmIChjb25maWcuY29uc3RydWN0b3IubmFtZSAhPT0gJ09iamVjdCcpIHtcbiAgICAgICRsb2cuaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycyhjb25maWcsIGNsYXNzSWQpO1xuICAgICAgY29uZmlnID0ge307XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgISRtZXRhbW9kZWwuaXNWYWxpZE9iamVjdChcbiAgICAgICAgY29uZmlnLFxuICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsKGNsYXNzSWQpLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgKSB7XG4gICAgICAkbG9nLmludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpO1xuICAgIH1cblxuICAgICRtZXRhbW9kZWwucHJlcGFyZU9iamVjdChjb25maWcsICRtZXRhbW9kZWwuZ2V0TW9kZWwoY2xhc3NJZCkpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgIH1cblxuICAgIHN0b3JlW2NvbmZpZy5faWRdID0gdGhpcztcblxuICAgIC8vIGlkXG4gICAgcHJveHkgPSBmdW5jdGlvbiBwcm94eSgpIHtcbiAgICAgIHJldHVybiBjb25maWcuX2lkO1xuICAgIH07XG4gICAgdGhpcy5pZCA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX3Byb3h5JyxcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24gaWQgKCkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzKSB9OydcbiAgICApKHByb3h5KTtcblxuICAgIC8vIGNyZWF0ZSBsaW5rIHRvIGRiXG4gICAgJGRiLnN0b3JlW2NsYXNzSWRdW2NvbmZpZy5faWRdID0gY29uZmlnO1xuXG4gICAgJGRiLmNyZWF0ZUxvZygnaW5zZXJ0JywgY2xhc3NJZCwgY29uZmlnLl9pZCwgJycsIGNvbmZpZyk7XG5cbiAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAkaGVscGVyXG4gICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICBkb2N1bWVudDogY29uZmlnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICB0aGlzLmluaXQoY29uZmlnKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICBjbGFzc0lkICtcbiAgICAgICcgKGNvbmZpZykgeyBfX3Byb3h5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTsnXG4gICkocHJveHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkSWRDbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGFuIGlkIG1ldGhvZCB0byBhIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gaXRzIGlkXG4gKi9cbmZ1bmN0aW9uIGFkZElkQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgcmV0dXJuIGNsYXNzSWQ7XG4gIH07XG4gIENsYXNzLmlkID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIGlkICgpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcykgfTsnXG4gICkocHJveHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkUHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudC5cbiAqIEFsbCB0aGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgYWNjZXNzZWQgYnkgYSBtZXRob2Qgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICogU29tZSBjaGVja3MgY2FuIGJlIGRvbmUgaW4gb3JkZXIgdG8gc2VlIGlmIHRoZSBzZXQgb2YgcHJvcGVydGllcyBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKlxuICogQGV4YW1wbGVcbiAqIGxhdXJlLmFnZSgpOyAvLyBnZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICogbGF1cmUuYWdlKDIyKTsgLy8gc2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqL1xuZnVuY3Rpb24gYWRkUHJvcGVydGllcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKG1vZGVsKTtcblxuICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gcHJvcGVydHkocHJvcCkge1xuICAgIHZhciBwcm94eSA9IHt9O1xuICAgIHZhciBwcm9wZXJ0eU5hbWUgPSAnJztcbiAgICB2YXIgcHJvcGVydHlUeXBlID0gJyc7XG4gICAgdmFyIHByb3BlcnR5UmVhZE9ubHkgPSAnJztcblxuICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wLnR5cGU7XG4gICAgcHJvcGVydHlSZWFkT25seSA9IHByb3AucmVhZE9ubHk7XG5cbiAgICBmdW5jdGlvbiBfaXNWYWxpZENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgIGNvbGwuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoXG4gICAgICAgICAgICAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkgJiZcbiAgICAgICAgICAgICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlKSAmJlxuICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFJlYWxDb2xsZWN0aW9uKGNvbGwsIHR5cGUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKSkge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWwuaWQgIT09ICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobnVsbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpIHx8IHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KHBvc2l0aW9uLCB2YWx1ZSkge1xuICAgICAgICB2YXIgc2VhcmNoID0gW107XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICB2YXIgcnVudGltZUFyciA9IG51bGw7XG4gICAgICAgIHZhciB2YWwgPSBudWxsO1xuICAgICAgICB2YXIgcmVhbFZhbCA9IG51bGw7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBfQXJyYXkoe1xuICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgcmVhZE9ubHk6IHByb3BlcnR5UmVhZE9ubHksXG4gICAgICAgICAgICAgIGNsYXNzSWQ6IGNsYXNzSWQsXG4gICAgICAgICAgICAgIHR5cGU6IHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhbnknIDogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICBhcnI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2UgdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIF9pc1ZhbGlkQ29sbGVjdGlvbihcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FueScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogdGhpcy5pZCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSBfZ2V0UmVhbENvbGxlY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW3Bvc2l0aW9uLCAncmVzZXQnXVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gcmVhbFZhbDtcblxuICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdW3Bvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhcnJheScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICAgICAgICAgICAgICAgID8gJ2FycmF5J1xuICAgICAgICAgICAgICAgICAgICAgIDogcHJvcGVydHlUeXBlWzBdID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShwcm9wZXJ0eU5hbWUsIG1vZGVsKTpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gYWRkU3RydWN0dXJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUgKyAnWycgKyBwb3NpdGlvbiArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWxWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAgICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICAgIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhcnJheScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHtcbiAgICAgICAgICAgICAgICBfaWQ6IHRoaXMuaWQoKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsdWUuaWQgIT09ICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKVxuICAgICAgICAgICAgICAgICAgICA/IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgICA6ICdhbnknID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dID0gcmVhbFZhbDtcblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFt2YWx1ZSwgJ2FkZCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBDbGFzcy5wcm90b3R5cGVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgICAgJyAocG9zaXRpb24sIHZhbHVlKSB7IHJldHVybiBfX3Byb3h5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTsnXG4gICAgICApKHByb3h5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJveHkgPSBmdW5jdGlvbiBwcm94eSh2YWx1ZSkge1xuICAgICAgICB2YXIgc2VhcmNoID0gW107XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjb21wb25lbnQgPSAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHByb3BlcnR5VHlwZSk6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGV4cG9ydHMuZ2V0KGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbmV3IERhdGUoY29tcG9uZW50W3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2pzb24nOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBjb21wb25lbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9wZXJ0eVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgX0FycmF5KHtcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgY2xhc3NJZDogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgICAgYXJyOiAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShwcm9wZXJ0eU5hbWUsIGNsYXNzSWQpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoXG4gICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gY29tcG9uZW50W3Byb3BlcnR5TmFtZV07IC8vIFRPRE8gY2FzZSBvZiBvYmplY3RcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmRlc3Ryb3llZENvbXBvbmVudENhbGwocHJvcGVydHlOYW1lLCB0aGlzLmlkKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgX2lkOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIF9CZWhhdmlvclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc0lkID09PSAnX0JlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbdmFsdWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBDbGFzcy5wcm90b3R5cGVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgICAgJyAodmFsdWUpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICkocHJveHkpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRTdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHBhcmVudCBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBwcm9wZXJ0eSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCB0aGF0IGNvaW50YWlucyBtZXRob2RzIHRvIGFjY2VzcyB0aGUgc3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBzdHJ1Y3R1cmUgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudC5cbiAqIEFsbCB0aGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgYWNjZXNzZWQgYnkgYSBtZXRob2Qgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICogU29tZSBjaGVja3MgY2FuIGJlIGRvbmUgaW4gb3JkZXIgdG8gc2VlIGlmIHRoZSBzZXQgb2YgcHJvcGVydGllcyBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKi9cbmZ1bmN0aW9uIGFkZFN0cnVjdHVyZShwYXRoLCBuYW1lLCBtb2RlbCwgaWQpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBnZXRTdHJ1Y3R1cmVQcm9wZXJ0aWVzKFxuICAgIHBhdGggPyBwYXRoICsgJy4nICsgbmFtZSA6IG5hbWUsXG4gICAgbW9kZWxcbiAgKTtcbiAgdmFyIHNydWN0dXJlID0gdW5kZWZpbmVkO1xuXG4gIGlmIChnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIHBhdGggPyBwYXRoICsgJy4nICsgbmFtZSA6IG5hbWUpKSB7XG4gICAgc3J1Y3R1cmUgPSB7fTtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gcHJvcGVydHkocHJvcCkge1xuICAgICAgdmFyIHByb3h5ID0ge307XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gJyc7XG4gICAgICB2YXIgcHJvcGVydHlUeXBlID0gJyc7XG4gICAgICB2YXIgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wLm5hbWU7XG4gICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wLnR5cGU7XG4gICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKSB8fCBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICAgIHByb3h5ID0gZnVuY3Rpb24gcHJveHkocG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICAgIHZhciBydW50aW1lQXJyID0gbnVsbDtcbiAgICAgICAgICB2YXIgdmFsID0gbnVsbDtcbiAgICAgICAgICB2YXIgcmVhbFZhbCA9IG51bGw7XG4gICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgIHZhciBsZW5ndGggPSAwO1xuICAgICAgICAgIHZhciBwYXJlbnRQYXRoID0gJyc7XG4gICAgICAgICAgdmFyIGZ1bGxQYXRoID0gJyc7XG5cbiAgICAgICAgICBmdW5jdGlvbiBfaXNWYWxpZENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbGwuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICBwYXJlbnRQYXRoID0gcGF0aCArICcuJyArIG5hbWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudFBhdGggPSBuYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdWxsUGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBfQXJyYXkoe1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICAgIGNsYXNzSWQ6IG1vZGVsLFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKSA/IHByb3BlcnR5VHlwZVswXSA6ICdhbnknLFxuICAgICAgICAgICAgICAgIGFycjogZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWVBcnI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgX2lzVmFsaWRDb2xsZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpID8gcHJvcGVydHlUeXBlWzBdIDogJ2FueSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYlttb2RlbF0uZmluZCh7XG4gICAgICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChmdWxsUGF0aC5pbmRleE9mKCdbJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmdWxsUGF0aC5yZXBsYWNlKC9cXFsoXFxkKSpcXF0vZywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW3Bvc2l0aW9uLCAncmVzZXQnXVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbcG9zaXRpb24sICdyZXNldCddXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpID8gcHJvcGVydHlUeXBlWzBdIDogJ2FueSdcbiAgICAgICAgICAgICAgICAgICAgICApOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZXhwb3J0cy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0cnVjdHVyZVZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxQYXRoICsgJ1snICsgcG9zaXRpb24gKyAnXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2FueScgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTdHJ1Y3R1cmVWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsUGF0aCArICdbJyArIHBvc2l0aW9uICsgJ10nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdhbnknID09PSAnanNvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsUGF0aCArICdbJyArIHBvc2l0aW9uICsgJ10nXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNTdHJ1Y3R1cmUoZnVsbFBhdGgsIG1vZGVsKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGFkZFN0cnVjdHVyZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lICsgJ1snICsgcG9zaXRpb24gKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZ2V0U3RydWN0dXJlVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFBhdGggKyAnWycgKyBwb3NpdGlvbiArICddJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgJiYgcHJvcC5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuZGVzdHJveWVkQ29tcG9uZW50Q2FsbChcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsUGF0aFtwb3NpdGlvbl0gKyAnWycgKyBwb3NpdGlvbiArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICdudW1iZXInXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKFxuICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgPyBwcm9wZXJ0eVR5cGVbMF0gOiAnYW55J1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpID8gcHJvcGVydHlUeXBlWzBdIDogJ2FueSdcbiAgICAgICAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgPyBwcm9wZXJ0eVR5cGVbMF0gOiAnYW55J1xuICAgICAgICAgICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgICAgICAgYXJyW3Bvc2l0aW9uXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICA6ICdhbnknID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgYXJyW3Bvc2l0aW9uXSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgYXJyW3Bvc2l0aW9uXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCBhcnIpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhcnJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gYWxsIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGlmIChmdWxsUGF0aC5pbmRleE9mKCdbJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmdWxsUGF0aC5yZXBsYWNlKC9cXFsoXFxkKSpcXF0vZywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFthcnIsICdhZGQnXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW2FyciwgJ2FkZCddXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKSA/IHByb3BlcnR5VHlwZVswXSA6ICdhbnknXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzcnVjdHVyZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAgICcgKHBvc2l0aW9uLCB2YWx1ZSkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICAgICAgICApKHByb3h5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3h5ID0gZnVuY3Rpb24gcHJveHkodmFsdWUpIHtcbiAgICAgICAgICB2YXIgc2VhcmNoID0gW107XG4gICAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuICAgICAgICAgIHZhciBwYXJlbnRQYXRoID0gJyc7XG4gICAgICAgICAgdmFyIGZ1bGxQYXRoID0gJyc7XG5cbiAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcGFyZW50UGF0aCA9IHBhdGggKyAnLicgKyBuYW1lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgcHJvcGVydHlOYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9ICRkYi5zdG9yZVttb2RlbF1baWRdO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBleHBvcnRzLmdldChcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnanNvbic6XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9wZXJ0eVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNTdHJ1Y3R1cmUoZnVsbFBhdGgsIG1vZGVsKTpcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvcC5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKGZ1bGxQYXRoLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgbW9kZWwsIGZ1bGxQYXRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHByb3BlcnR5VHlwZSk6XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5pc1J1bnRpbWUoKSAmJlxuICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSBvZiBfQmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgIGlmIChtb2RlbCA9PT0gJ19CZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBhbGwgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgIGlmIChmdWxsUGF0aC5pbmRleE9mKCdbJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmdWxsUGF0aC5yZXBsYWNlKC9cXFsoXFxkKSpcXF0vZywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFt2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbdmFsdWVdXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNydWN0dXJlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICAgICAgJyAodmFsdWUpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICAgKShwcm94eSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3J1Y3R1cmU7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBtZXRob2RzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIC8gb3V0cHV0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICovXG5mdW5jdGlvbiBhZGRNZXRob2RzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgbWV0aG9kcyA9IGdldE1ldGhvZHMobW9kZWwpO1xuXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiBtZXRob2QobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICB2YXIgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsICcpO1xuICAgIHZhciBwYXJhbXNXaXRoQ29udGV4dCA9ICcnO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgc3RhdGU6IG1ldGhvZE5hbWUsXG4gICAgICAgIGRhdGE6IGFyZ3VtZW50c1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHZhciBwcm94eVdpdGhDb250ZXh0ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgIHZhciBkYXRhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgZGF0YS5zaGlmdCgpO1xuXG4gICAgICBpZiAoYXJndW1lbnRzWzBdKSB7XG4gICAgICAgIHJlc3VsdCA9ICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogbWV0aG9kTmFtZSxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGNvbnRleHQ6IGFyZ3VtZW50c1swXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bkNvbnRleHQoY2xhc3NJZCwgbWV0aG9kTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtc05hbWUudW5zaGlmdCgnY29udGV4dCcpO1xuICAgICAgcGFyYW1zV2l0aENvbnRleHQgPSBwYXJhbXNOYW1lLmpvaW4oJywgJyk7XG5cbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICAgICcgKCcgK1xuICAgICAgICAgIHBhcmFtcyArXG4gICAgICAgICAgJykgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICAgICAgKShwcm94eSk7XG4gICAgICBpZiAobWV0aG9kTmFtZSAhPT0gJ25hbWUnKSB7XG4gICAgICAgIENsYXNzW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgICAgICAnICgnICtcbiAgICAgICAgICAgIHBhcmFtc1dpdGhDb250ZXh0ICtcbiAgICAgICAgICAgICcpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICAgKShwcm94eVdpdGhDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19wcm94eScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArIG1ldGhvZE5hbWUgKyAnICgpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcykgfTsnXG4gICAgICApKHByb3h5KTtcbiAgICAgIGlmIChtZXRob2ROYW1lICE9PSAnbmFtZScpIHtcbiAgICAgICAgQ2xhc3NbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAgICcgKGNvbnRleHQpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICAgKShwcm94eVdpdGhDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkRXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBldmVudHMgdG8gYSBjb21wb25lbnQuXG4gKiBUaGUgY2FsbCB0byB0aGVzZSBtZXRob2RzIHdpbGwgaW52b2tlIHRoZSB3b3JrZmxvdyBpbiBvcmRlciB0byBjaGVjayB0aGF0IGlucG91dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnRzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gZXZlbnQobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICB2YXIgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsICcpO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICB2YXIgc3lzdGVtcyA9IFtdO1xuICAgICAgdmFyIHN5c3RlbUlkID0gJ2U4OWM2MTdiNmIxNWQyNCc7XG4gICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGxlbmd0aCA9IC0xO1xuICAgICAgdmFyIG1lc3NhZ2UgPSB7fTtcblxuICAgICAgaWYgKGNsYXNzSWQgPT09ICdfQ2hhbm5lbCcpIHtcbiAgICAgICAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe1xuICAgICAgICAgIG1hc3RlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgc3lzdGVtSWQgPSBzeXN0ZW1zWzBdLl9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UuZnJvbSA9IHN5c3RlbUlkO1xuICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkYXRhLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlLmRhdGEgPSBkYXRhO1xuICAgICAgICBtZXNzYWdlLmV2ZW50ID0gbWV0aG9kTmFtZTtcblxuICAgICAgICAkZGIuX01lc3NhZ2UuaW5zZXJ0KG1lc3NhZ2UpO1xuXG4gICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogJ3NlbmQnLFxuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZXZlbnQ6IG1lc3NhZ2UuZXZlbnQsXG4gICAgICAgICAgICAgIGZyb206IG1lc3NhZ2UuZnJvbSxcbiAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR3b3JrZmxvdy5wcm9jZXNzKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogbWV0aG9kTmFtZSxcbiAgICAgICAgICBkYXRhOiBhcmd1bWVudHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAnICgnICtcbiAgICAgICAgICBwYXJhbXMgK1xuICAgICAgICAgICcpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgICAgICkocHJveHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICsgbWV0aG9kTmFtZSArICcgKCkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzKSB9OydcbiAgICAgICkocHJveHkpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG9uIG1ldGhvZCB0byBhIGNvbXBvbmVudCB0byBhZGQgYmVoYXZpb3JzIHRvIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gYWRkT24oQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7XG4gICAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgICB2YXIgY3VycmVudFN0YXRlID0gJyc7XG4gICAgdmFyIGNvbnRleHQgPSBudWxsO1xuXG4gICAgLy8gY2FzZSBvZiBjb250ZXh0XG4gICAgaWYgKFxuICAgICAgdXNlQ29yZUFQSSAmJlxuICAgICAgdXNlQ29yZUFQSS5jb25zdHJ1Y3RvciAmJlxuICAgICAgdXNlQ29yZUFQSS5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnQm9vbGVhbidcbiAgICApIHtcbiAgICAgIGNvbnRleHQgPSB1c2VDb3JlQVBJO1xuICAgICAgdXNlQ29yZUFQSSA9IGZhbHNlO1xuICAgICAgaXNDb3JlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAkd29ya2Zsb3cuY2hlY2tJbnB1dCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29uJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzXG4gICAgICB9KVxuICAgICkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgfSkubGVuZ3RoID49IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja0lucHV0TnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgdXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgaXNDb3JlLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgIGlkOiBiZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGN1cnJlbnRTdGF0ZS52YWx1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiZWhhdmlvcklkO1xuICB9O1xuICBDbGFzcy5wcm90b3R5cGUub24gPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGlzQ29yZSkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICApKHByb3h5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eShzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSAnJztcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XG5cbiAgICAvLyBjYXNlIG9mIGNvbnRleHRcbiAgICBpZiAoXG4gICAgICB1c2VDb3JlQVBJICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdCb29sZWFuJ1xuICAgICkge1xuICAgICAgY29udGV4dCA9IHVzZUNvcmVBUEk7XG4gICAgICB1c2VDb3JlQVBJID0gZmFsc2U7XG4gICAgICBpc0NvcmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAkd29ya2Zsb3cuY2hlY2tJbnB1dCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29uJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzXG4gICAgICB9KVxuICAgICkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgfSkubGVuZ3RoID49IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja0lucHV0TnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgdXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgaXNDb3JlLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgIGlkOiBiZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGN1cnJlbnRTdGF0ZS52YWx1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiZWhhdmlvcklkO1xuICB9O1xuICBDbGFzcy5vbiA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19wcm94eScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7IHJldHVybiBfX3Byb3h5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTsnXG4gICkocHJveHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkT2ZmQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgb2ZmIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byByZW1vdmUgYmVoYXZpb3JzIGZyb20gdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KHN0YXRlLCBiZWhhdmlvcklkKSB7XG4gICAgaWYgKFxuICAgICAgJHdvcmtmbG93LmNoZWNrSW5wdXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIG1ldGhvZE5hbWU6ICdvZmYnLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHNcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgIGJlaGF2aW9ySWQ6IGJlaGF2aW9ySWQsXG4gICAgICAgICAgY29tcG9uZW50SWQ6IGNsYXNzSWQsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPZmYoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgQ2xhc3Mub2ZmID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIG9mZiAoc3RhdGUsIGJlaGF2aW9ySWQpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGREZXN0cm95Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkRGVzdHJveUNsYXNzKENsYXNzKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge1xuICAgIHZhciBpZCA9IHRoaXMuaWQoKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgLy8gaWYgbm90IHZpcnR1YWwgY29tcG9uZW50XG4gICAgaWYgKCRkYltpZF0pIHtcbiAgICAgIHJlc3VsdCA9ICRkYltpZF0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIHN0b3JlW2lkXTtcblxuICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgIGNvbXBvbmVudElkOiBpZFxuICAgIH0pO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICBjb21wb25lbnRJZDogcmVzdWx0W2ldXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgc3RhdGU6ICdkZXN0cm95J1xuICAgIH0pO1xuICB9O1xuICBDbGFzcy5kZXN0cm95ID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3kgKCkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRSZXF1aXJlQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBSZXF1aXJlIGEgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGFkZFJlcXVpcmVDbGFzcyhDbGFzcykge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eShpZCkge1xuICAgIHJldHVybiBleHBvcnRzLmdldChpZCk7XG4gIH07XG4gIENsYXNzLnJlcXVpcmUgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gcmVxdWlyZSAoaWQpIHsgcmV0dXJuIF9fcHJveHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRJbml0Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJbml0IGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkSW5pdENsYXNzKENsYXNzKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge307XG4gIENsYXNzLmluaXQgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gaW5pdCAoY29uZikgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICApKHByb3h5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZENsYXNzSW5mb0NsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIHRoZSBDbGFzc0luZm8gbWV0aG9kIG9uIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3NJbmZvQ2xhc3MoQ2xhc3MpIHtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gIH07XG4gIENsYXNzLmNsYXNzSW5mbyA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19wcm94eScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBjbGFzc0luZm8gKCkgeyByZXR1cm4gX19wcm94eS5hcHBseSh0aGlzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBmYWN0b3J5XG4gKiBAcGFyYW0ge0pTT059IGNvbmZpZyBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtDb21wb25lbnR9IHRoZSBjcmVhdGVkIGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvblxuICovXG5mdW5jdGlvbiBmYWN0b3J5KGNvbmZpZykge1xuICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgdmFyIENsYXNzID0ge307XG4gIHZhciBjbGFzc0lkID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBjb25maWcubW9kZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY2xhc3NJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzSWQgPSBjb25maWcubW9kZWw7XG4gIH1cblxuICBDbGFzcyA9IGNyZWF0ZUNsYXNzKGNsYXNzSWQpO1xuXG4gIHN0b3JlW2NsYXNzSWRdID0gQ2xhc3M7XG5cbiAgYWRkSWRDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG5cbiAgYWRkUHJvcGVydGllcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkRXZlbnRzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuXG4gIC8vIGFkZCBkZWZhdWx0IHByb3BlcnRpZXMvbWV0aG9kcyBvbmx5IGlmIHRoZSBjb21wb25lbnRcbiAgLy8gaW5oZXJpdCBmcm9tIF9Db21wb25lbnRcbiAgaWYgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oY2xhc3NJZCwgJ19Db21wb25lbnQnKSkge1xuICAgIGFkZE9uKENsYXNzLCBjbGFzc0lkKTtcblxuICAgIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRSZXF1aXJlQ2xhc3MoQ2xhc3MpO1xuICAgIGFkZEluaXRDbGFzcyhDbGFzcyk7XG4gICAgYWRkRGVzdHJveUNsYXNzKENsYXNzKTtcbiAgICBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcyk7XG4gIH1cblxuICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIDxicj5cbiAqIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWUgPGJyPlxuICogQHJldHVybnMge0NvbXBvbmVudH1cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvblxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShjb25maWcpIHtcbiAgcmV0dXJuIGZhY3RvcnkoY29uZmlnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKiBAZGVzY3JpcHRpb24gRGVzdHJveSBhIGNvbXBvbmVudCBmcm9tIGl0cyBpZFxuICovXG5leHBvcnRzLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGlkKSB7XG4gIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF07XG4gIHZhciBjbGFzc0lkID0gJyc7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICRkYltjbGFzc0lkXS5yZW1vdmUoe1xuICAgICAgX2lkOiBpZFxuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xuICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgY29tcG9uZW50SWQ6IGlkXG4gICAgfSk7XG5cbiAgICAvLyBjYXNlIG9mIEJlaGF2aW9yXG4gICAgaWYgKGNsYXNzSWQgPT09ICdfQmVoYXZpb3InKSB7XG4gICAgICAkYmVoYXZpb3IucmVtb3ZlRnJvbU1lbW9yeShpZCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBjb21wb25lbnQgd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IGZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgZGVsZXRlIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UuXG4gKiBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSBpcyBhIG1pY3JvIE5vU1FMIERhdGFiYXNlIHRoYXQgY29udGFpbnM6XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kXG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuXG4gKlxuICogU3lzdGVtIFJ1bnRpbWUgRGF0YWJhc2UgaXMgY2xvc2VseSBsaW5rZWQgdG8gU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBTeXN0ZW0gUnVudGltZSBjb21wb25lbnRzIGJlY2F1c2U6XG4gKiAtIGFsbCBvcGVyYXRpb25zIGRvbmUgYnkgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLFxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmRcbiAqIC0gcmVtb3ZlIG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGRlc3Ryb3kgYSBjb21wb25lbnQuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgY29sbGVjdGlvbnMgPSBbXTtcbnZhciBpbnRlcm5hbERCID0gW1xuICAnX1J1bnRpbWUnLFxuICAnX1NjaGVtYScsXG4gICdfTW9kZWwnLFxuICAnX0dlbmVyYXRlZE1vZGVsJyxcbiAgJ19CZWhhdmlvcicsXG4gICdfU3RhdGUnLFxuICAnX1R5cGUnLFxuICAnX01ldGFtb2RlbCcsXG4gICdfRGF0YWJhc2UnLFxuICAnX1N5c3RlbScsXG4gICdfQ2xhc3NJbmZvJyxcbiAgJ19NZXNzYWdlJyxcbiAgJ19DaGFubmVsJyxcbiAgJ19Mb2dnZXInLFxuICAnX0xvZydcbl07XG52YXIgY29yZURiID0gW1xuICAnX0xvZycsXG4gICdfU2NoZW1hJyxcbiAgJ19Mb2dnZXInLFxuICAnX01vZGVsJyxcbiAgJ19HZW5lcmF0ZWRNb2RlbCcsXG4gICdfU3RhdGUnLFxuICAnX1R5cGUnXG5dO1xudmFyIGxvZ09yZGVyID0gMDtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBpbmNMb2dPcmRlclxuICogQGRlc2NyaXB0aW9uIEluY3JlbWVudCBMb2dcbiAqL1xuZnVuY3Rpb24gaW5jTG9nT3JkZXIoKSB7XG4gIHJldHVybiBsb2dPcmRlcisrO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybnMge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRHVtcCB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgdmFyIGRiRHVtcCA9IHt9O1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgdmFyIHR5cGVJZCA9ICcnO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgY29sbGVjdGlvbiA9IG51bGw7XG4gIHZhciBzY2hlbWFJZCA9ICcnO1xuICB2YXIgbW9kZWxJZCA9ICcnO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaWQgPSAnJztcblxuICAvLyBzY2hlbWFzXG4gIGRiRHVtcC5zY2hlbWFzID0ge307XG4gIGlmIChleHBvcnRzLl9TY2hlbWEuY291bnQoKSkge1xuICAgIGZvciAoc2NoZW1hSWQgaW4gZXhwb3J0cy5zdG9yZS5fU2NoZW1hKSB7XG4gICAgICBpZiAoIWV4cG9ydHMuc3RvcmUuX1NjaGVtYVtzY2hlbWFJZF0uX2NvcmUpIHtcbiAgICAgICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9TY2hlbWFbc2NoZW1hSWRdKSk7XG4gICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBtb2RlbHNcbiAgZGJEdW1wLm1vZGVscyA9IHt9O1xuICBpZiAoZXhwb3J0cy5fTW9kZWwuY291bnQoKSkge1xuICAgIGZvciAobW9kZWxJZCBpbiBleHBvcnRzLnN0b3JlLl9Nb2RlbCkge1xuICAgICAgaWYgKCFleHBvcnRzLnN0b3JlLl9Nb2RlbFttb2RlbElkXS5fY29yZSkge1xuICAgICAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhwb3J0cy5zdG9yZS5fTW9kZWxbbW9kZWxJZF0pKTtcbiAgICAgICAgZGJEdW1wLm1vZGVsc1ttb2RlbElkXSA9IG1vZGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGVzXG4gIGRiRHVtcC50eXBlcyA9IHt9O1xuICBpZiAoZXhwb3J0cy5fVHlwZS5jb3VudCgpKSB7XG4gICAgZm9yICh0eXBlSWQgaW4gZXhwb3J0cy5zdG9yZS5fVHlwZSkge1xuICAgICAgaWYgKCFleHBvcnRzLnN0b3JlLl9UeXBlW3R5cGVJZF0uY29yZSkge1xuICAgICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9UeXBlW3R5cGVJZF0pKTtcbiAgICAgICAgZGJEdW1wLnR5cGVzW3R5cGUubmFtZV0gPSB0eXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGJlaGF2aW9yc1xuICBkYkR1bXAuYmVoYXZpb3JzID0ge307XG4gIGZvciAoYmVoYXZpb3JJZCBpbiBleHBvcnRzLnN0b3JlLl9CZWhhdmlvcikge1xuICAgIGlmICghZXhwb3J0cy5zdG9yZS5fQmVoYXZpb3JbYmVoYXZpb3JJZF0uY29yZSkge1xuICAgICAgYmVoYXZpb3IgPSBKU09OLnBhcnNlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9CZWhhdmlvcltiZWhhdmlvcklkXSlcbiAgICAgICk7XG4gICAgICBkYkR1bXAuYmVoYXZpb3JzW2JlaGF2aW9ySWRdID0gYmVoYXZpb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcG9uZW50c1xuICBkYkR1bXAuY29tcG9uZW50cyA9IHt9O1xuICBsZW5ndGggPSBjb2xsZWN0aW9ucy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbnNbaV07XG4gICAgaWYgKGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmNvdW50KCkpIHtcbiAgICAgIGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmVbY29sbGVjdGlvbk5hbWVdKSk7XG5cbiAgICAgIGZvciAoaWQgaW4gY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoY29sbGVjdGlvbltpZF0uX2NvcmUpIHtcbiAgICAgICAgICBkZWxldGUgY29sbGVjdGlvbltpZF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLmxlbmd0aCkge1xuICAgICAgICBkYkR1bXAuY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0gPSBjb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYkR1bXA7XG59XG5cbi8qKlxuICogQGNsYXNzIF9BcnJheVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgc29ydCBtZXRob2Qgb2YgQXJyYXkgQ2xhc3NcbiAqL1xuZnVuY3Rpb24gX0FycmF5KCkge1xuICB2YXIgYXJyID0gW107XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc29ydFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gcGFyYW0gdGhlIHNvcnQgZnVuY3Rpb24gb3IgdGhlIHNvcnQgcXVlcnlcbiAgICogQHJldHVybnMge0FycmF5fSB0aGUgc29ydGVkIGFycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzb3J0IG1ldGhvZFxuICAgKi9cbiAgYXJyLnNvcnQgPSBmdW5jdGlvbiBzb3J0KHBhcmFtKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgdmFyIGZpZWxkID0gJyc7XG4gICAgdmFyIGFyckNvcHkgPSBbXTtcblxuICAgIC8vIGNvcHlcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgIGFyckNvcHkucHVzaCh2YWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIGFyckNvcHkuc29ydChwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkID0gT2JqZWN0LmtleXMocGFyYW0pWzBdO1xuICAgICAgYXJyQ29weS5zb3J0KGZ1bmN0aW9uKGRvY0EsIGRvY0IpIHtcbiAgICAgICAgaWYgKGRvY0FbZmllbGRdIDwgZG9jQltmaWVsZF0pIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1bZmllbGRdID09PSAxID8gLTEgOiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2NBW2ZpZWxkXSA+IGRvY0JbZmllbGRdKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmFtW2ZpZWxkXSA9PT0gMSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJDb3B5O1xuICB9O1xuXG4gIHJldHVybiBhcnI7XG59XG5cbl9BcnJheS5wcm90b3R5cGUgPSBbXTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRXaXRoU2VsZWN0b3JzXG4gKiBAcGFyYW0ge09iamVjdH0gZmllbGQgZmllbGQgb24gd2hpY2ggbWFkZSB0aGUgc2VhcmNoXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgcXVlcnkgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnQgZG9jdW1lbnQgb2JqZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgIHVzZWQgZm9yIHRoZSBzZWFyY2ggaXMgdmFsaWQgd2l0aCB0aGUgZG9jdW1lbnRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiB0aGUgcXVlcnkgdXNlZCBmb3IgdGhlIHNlYXJjaCBpcyB2YWxpZCB3aXRoIHRoZSBkb2N1bWVudFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkV2l0aFNlbGVjdG9ycyhmaWVsZCwgcXVlcnksIGRvY3VtZW50KSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgc2VsZWN0b3IgPSAnJztcblxuICBzZWFyY2g6IGZvciAoc2VsZWN0b3IgaW4gcXVlcnkpIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZXEnOlxuICAgICAgICBpZiAocXVlcnlbc2VsZWN0b3JdIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXS50b1N0cmluZygpLm1hdGNoKHF1ZXJ5W3NlbGVjdG9yXSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdICE9PSBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZ3QnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdIDw9IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZ3RlJzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA8IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbHQnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdID49IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbHRlJzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA+IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbmUnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdID09PSBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJGluJzpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocXVlcnlbc2VsZWN0b3JdKSAmJlxuICAgICAgICAgIHF1ZXJ5W3NlbGVjdG9yXS5pbmRleE9mKGRvY3VtZW50W2ZpZWxkXSkgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbmluJzpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocXVlcnlbc2VsZWN0b3JdKSAmJlxuICAgICAgICAgIHF1ZXJ5W3NlbGVjdG9yXS5pbmRleE9mKGRvY3VtZW50W2ZpZWxkXSkgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFxuICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5IHF1ZXJ5IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IGRvY3VtZW50IG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHF1ZXJ5IG9mIHNlYXJjaCBpcyB2YWxpZCB3aXRoIHRoZSBkb2N1bWVudFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIHRoZSBxdWVyeSBvZiBzZWFyY2ggaXMgdmFsaWQgd2l0aCB0aGUgZG9jdW1lbnRcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZChxdWVyeSwgZG9jdW1lbnQpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBmaW5kSW5BcnJheSA9IGZhbHNlO1xuICB2YXIgZmllbGQgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcblxuICBzZWFyY2g6IGZvciAoZmllbGQgaW4gcXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50W2ZpZWxkXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAvLyByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgICAgY2FzZSBxdWVyeVtmaWVsZF0gaW5zdGFuY2VvZiBSZWdFeHA6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9jdW1lbnRbZmllbGRdKSAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBkb2N1bWVudFtmaWVsZF0ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF1baV0udG9TdHJpbmcoKS5tYXRjaChxdWVyeVtmaWVsZF0pICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmluZEluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gZmluZEluQXJyYXk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0udG9TdHJpbmcoKS5tYXRjaChxdWVyeVtmaWVsZF0pID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIHF1ZXJ5IHNlbGVjdG9yc1xuICAgICAgICBjYXNlIHF1ZXJ5W2ZpZWxkXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pOlxuICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRXaXRoU2VsZWN0b3JzKGZpZWxkLCBxdWVyeVtmaWVsZF0sIGRvY3VtZW50KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBtdWx0aXBsZSBxdWVyeVxuICAgICAgICBjYXNlIEFycmF5LmlzQXJyYXkoZG9jdW1lbnRbZmllbGRdKSAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pOlxuICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0uaW5kZXhPZihxdWVyeVtmaWVsZF0pID09PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIHNpbXBsZSBxdWVyeVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gIT09IHF1ZXJ5W2ZpZWxkXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaW1wU3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgU3lzdGVtIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBTeXN0ZW0gUnVudGltZSBzeXN0ZW1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW1wb3J0IHN5c3RlbSBpbnRvIHRoZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBpbXBTeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGNvbXBvbmVudElkID0gJyc7XG4gIHZhciB0eXBlTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBiZWhhdmlvcklkID0gJyc7XG4gIHZhciBzeXN0ZW1zID0gW107XG4gIHZhciBpZCA9IG51bGw7XG5cbiAgaWYgKGltcG9ydGVkU3lzdGVtKSB7XG4gICAgLy8gcmVtb3ZlIGRlcHJlY2F0ZWQgcHJvcGVydHlcbiAgICBkZWxldGUgaW1wb3J0ZWRTeXN0ZW0uc3Vic3lzdGVtO1xuXG4gICAgLy8gYWRkIHR5cGVzXG4gICAgZm9yICh0eXBlTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS50eXBlcykge1xuICAgICAgJG1ldGFtb2RlbC50eXBlKGltcG9ydGVkU3lzdGVtLnR5cGVzW3R5cGVOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHNjaGVtYXNcbiAgICBmb3IgKHNjaGVtYU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hcykge1xuICAgICAgJG1ldGFtb2RlbC5zY2hlbWEoaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hc1tzY2hlbWFOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIG1vZGVsc1xuICAgIGZvciAobW9kZWxOYW1lIGluIGltcG9ydGVkU3lzdGVtLm1vZGVscykge1xuICAgICAgJG1ldGFtb2RlbC5tb2RlbChpbXBvcnRlZFN5c3RlbS5tb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgfVxuXG4gICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgIC8vIGFkZCBiZWhhdmlvcnNcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICBleHBvcnRzLl9CZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoXG4gICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgaW5mbyBpZiBhbHJlYWR5IGEgbWFzdGVyIHN5c3RlbVxuICAgIHN5c3RlbXMgPSBleHBvcnRzLl9TeXN0ZW0uZmluZCh7XG4gICAgICBtYXN0ZXI6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgIGlmIChzeXN0ZW1zWzBdLl9pZCA9PT0gaW1wb3J0ZWRTeXN0ZW0uX2lkKSB7XG4gICAgICAgIGltcG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyKSB7XG4gICAgICAgICAgc3lzdGVtc1swXS5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluc2VydCB0aGUgc3lzdGVtIGluIERCXG4gICAgZXhwb3J0cy5fU3lzdGVtLmluc2VydChpbXBvcnRlZFN5c3RlbSk7XG5cbiAgICByZXN1bHQgPSBpbXBvcnRlZFN5c3RlbS5faWQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZXhwU3lzdGVtXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIHN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzeXN0ZW0gZnJvbSB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZXhwU3lzdGVtKCkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICB2YXIgc3lzdGVtcyA9IFtdO1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgZGJEdW1wID0gbnVsbDtcbiAgdmFyIG1hc3RlcnN5c3RlbSA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBleHBvcnRlZFN5c3RlbSA9IHt9O1xuXG4gIC8vIGdldCBpZCBvZiB0aGUgbWFzdGVyIHN5c3RlbVxuICBzeXN0ZW1zID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgIG1hc3RlcjogdHJ1ZVxuICB9KTtcblxuICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICBtYXN0ZXJzeXN0ZW0gPSBzeXN0ZW1zWzBdO1xuICAgIGlkID0gbWFzdGVyc3lzdGVtLl9pZDtcblxuICAgIC8vIHByb3BcbiAgICBleHBvcnRlZFN5c3RlbS5faWQgPSBpZDtcbiAgICBleHBvcnRlZFN5c3RlbS5uYW1lID0gbWFzdGVyc3lzdGVtLm5hbWU7XG4gICAgZXhwb3J0ZWRTeXN0ZW0uZGVzY3JpcHRpb24gPSBtYXN0ZXJzeXN0ZW0uZGVzY3JpcHRpb247XG4gICAgZXhwb3J0ZWRTeXN0ZW0udmVyc2lvbiA9IG1hc3RlcnN5c3RlbS52ZXJzaW9uO1xuICAgIGV4cG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG5cbiAgICAvLyBkdW1wXG4gICAgZGJEdW1wID0gZHVtcCgpO1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gZGJEdW1wKSB7XG4gICAgICBpZiAoZGJEdW1wLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICBleHBvcnRlZFN5c3RlbVtjb2xsZWN0aW9uTmFtZV0gPSBkYkR1bXBbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGV4cG9ydGVkU3lzdGVtKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAne30nO1xuICAgICRsb2cubWFzdGVyU3lzdGVtTm90Rm91bmQoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBleHBvcnRTdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgc3ViLXN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzdWItc3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGV4cFN1YnN5c3RlbShwYXJhbXMpIHtcbiAgdmFyIHN5c3RlbSA9IHt9O1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBkZWZhdWx0TmFtZSA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIC8vIGRlZmF1bHQgdmFsdWVzXG4gIHJlc3VsdCA9IGV4cG9ydHMuX1N5c3RlbS5maW5kKHtcbiAgICBtYXN0ZXI6IHRydWVcbiAgfSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgZGVmYXVsdE5hbWUgPSByZXN1bHRbMF0ubmFtZTtcbiAgfVxuXG4gIHN5c3RlbS5uYW1lID0gcGFyYW1zLm5hbWUgfHwgJ3N1Yl8nICsgZGVmYXVsdE5hbWU7XG4gIHN5c3RlbS52ZXJzaW9uID0gcGFyYW1zLnZlcnNpb24gfHwgJzAuMC4xJztcbiAgc3lzdGVtLmRlc2NyaXB0aW9uID0gcGFyYW1zLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gIC8vIHNjaGVtYXNcbiAgc3lzdGVtLnNjaGVtYXMgPSB7fTtcbiAgaWYgKHBhcmFtcy5zY2hlbWFzKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5fU2NoZW1hLmZpbmQocGFyYW1zLnNjaGVtYSk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2NoZW1hID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgc3lzdGVtLnNjaGVtYXNbc2NoZW1hLl9pZF0gPSBzY2hlbWE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZWxzXG4gIHN5c3RlbS5tb2RlbHMgPSB7fTtcbiAgaWYgKHBhcmFtcy5tb2RlbHMpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLl9Nb2RlbC5maW5kKHBhcmFtcy5tb2RlbHMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG1vZGVsID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgICBzeXN0ZW0ubW9kZWxzW21vZGVsLl9pZF0gPSBtb2RlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0eXBlc1xuICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgaWYgKHBhcmFtcy50eXBlcykge1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuX1R5cGUuZmluZChwYXJhbXMudHlwZXMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHR5cGUgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIXR5cGUuX2NvcmUpIHtcbiAgICAgICAgc3lzdGVtLnR5cGVzW3R5cGUuX2lkXSA9IHR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYmVoYXZpb3JzXG4gIHN5c3RlbS5iZWhhdmlvcnMgPSB7fTtcbiAgaWYgKHBhcmFtcy5iZWhhdmlvcnMpIHtcbiAgICBiZWhhdmlvciA9IGV4cG9ydHMuX0JlaGF2aW9yLmZpbmQocGFyYW1zLmJlaGF2aW9ycyk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYmVoYXZpb3IgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvci5faWRdID0gYmVoYXZpb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcG9uZW50c1xuICBzeXN0ZW0uY29tcG9uZW50cyA9IHt9O1xuICBpZiAocGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICBmb3IgKGNsYXNzTmFtZSBpbiBwYXJhbXMuY29tcG9uZW50cykge1xuICAgICAgaWYgKGV4cG9ydHNbY2xhc3NOYW1lXSkge1xuICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdID0ge307XG5cbiAgICAgICAgcmVzdWx0ID0gZXhwb3J0c1tjbGFzc05hbWVdLmZpbmQocGFyYW1zLmNvbXBvbmVudHNbY2xhc3NOYW1lXSk7XG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbXBvbmVudCA9IHJlc3VsdFtpXTtcbiAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdW2NvbXBvbmVudC5faWRdID0gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN5c3RlbSk7XG59XG5cbi8qIFB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbi8qKlxuICogQHByb3BlcnR5IHtKU09OfSBzdG9yZVxuICogQGRlc2NyaXB0aW9uIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHN0b3JlIHRoYXQgbGlzdHMgYWxsIHRoZSBjb2xsZWN0aW9uc1xuICovXG5leHBvcnRzLnN0b3JlID0ge307XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQGNsYXNzIERhdGFiYXNlQ29sbGVjdGlvblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBuZXcgY29sbGVjdGlvblxuICogQEBkZXNjcmlwdGlvbiBBIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRzIG1hbmFnZWQgYnkgU3lzdGVtIFJ1bnRpbWUuXG4gKiBJbnRlcm5hbCBjb2xsZWN0aW9ucyBtYW5hZ2UgY29yZSBvYmplY3RzIG9mIFN5c3RlbSBSdW50aW1lIChzY2hlbWEsIHR5cGUsIC4uLikuXG4gKiBQdWJsaWMgY29sbGVjdGlvbnMgbWFuYWdlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuXG4gKi9cbnZhciBEYXRhYmFzZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBEYXRhYmFzZUNvbGxlY3Rpb24obmFtZSkge1xuICBpZiAoJG1ldGFtb2RlbC5nZXRTY2hlbWEobmFtZSkgfHwgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgIGV4cG9ydHMuc3RvcmVbbmFtZV0gPSB7fTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGlmIChpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICBjb2xsZWN0aW9ucy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGZpbmRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeVxuICogQHJldHVybnMge0FycmF5fSBBcnJheSBvZiBkb2N1bWVudHMgdGhhdCBtYXAgdGhlIHF1ZXJ5XG4gKiBAZGVzY3JpcHRpb24gRmluZCBhIGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLlBlcnNvbi5maW5kKHsnbmFtZSc6ICdsYXVyZSd9KTtcbiAqICRkYi5QZXJzb24uZmluZCh7J25hbWUnOiAnbGF1cmUnLCAnYWdlJyA6IDI0fSk7XG4gKiAkZGIuUGVyc29uLmZpbmQoW3snbmFtZSc6ICdyZW5lJ30sIHsnbmFtZSc6ICdyb2JlcnQnfV0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kKHF1ZXJ5KSB7XG4gIHZhciByZXN1bHQgPSBuZXcgX0FycmF5KCk7XG4gIHZhciByZXN1bHRJZCA9IHt9O1xuICB2YXIgaWQgPSAnJztcbiAgdmFyIGRvY3VtZW50ID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICBxdWVyeS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiBtdWx0aVNlYXJjaChjcml0ZXJpYSkge1xuICAgICAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBkb2N1bWVudCA9IGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChjcml0ZXJpYSwgZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0SWRbaWRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICByZXN1bHRJZFtpZF0gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgIGRvY3VtZW50ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgaWYgKGlzVmFsaWQocXVlcnksIGRvY3VtZW50KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgZG9jdW1lbnQgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW5zZXJ0XG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gZG9jdW1lbnQgYSBuZXcgb2JqZWN0IHRvIGFkZFxuICogQHJldHVybnMge0FycmF5fSBhcnJheSBvZiBpZCBjcmVhdGVkXG4gKiBAZGVzY3JpcHRpb24gSW5zZXJ0IGFuIG5ldyBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICogQmVmb3JlIGluc2VydGluZyB0aGUgZG9jdW1lbnQsIFN5c3RlbSBSdW50aW1lIGNoZWNrcyB0aGF0IHRoZSBkb2N1bWVudCBpcyBjb21wbGlhbnRcbiAqIHdpdGggaXRzIGNsYXNzIGRlZmluaXRpb24uXG4gKiBUaGVuLCBhZnRlciBpbnNlcnRpbmcgaXQsIHdlIGNyZWF0ZSB0aGUgY29tcG9uZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiAkZGIuUGVyc29uLmluc2VydCh7XG4gKiAgICAgICduYW1lJzogJ2JvYicsXG4gKiAgICAgICdmaXJzdE5hbWUnOiAnU2FpbnQtQ2xhcicsXG4gKiAgICAgICdhZ2UnOiA0M1xuICogfSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KGRvY3VtZW50KSB7XG4gIHZhciBkb2MgPSBbXTtcbiAgdmFyIENvbXBvbmVudCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShkb2N1bWVudCkpIHtcbiAgICBkb2MgPSBkb2N1bWVudDtcbiAgfSBlbHNlIHtcbiAgICBkb2MucHVzaChkb2N1bWVudCk7XG4gIH1cblxuICBkb2MuZm9yRWFjaChcbiAgICBmdW5jdGlvbiBtdWx0aUluc2VydChvYmopIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgdmFyIGNoYW5uZWxzID0gW107XG4gICAgICB2YXIgY2hhbm5lbCA9IG51bGw7XG4gICAgICB2YXIgc3lzdGVtcyA9IFtdO1xuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfU2NoZW1hJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfTG9nZ2VyJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfTW9kZWwnOlxuICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ19UeXBlJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfR2VuZXJhdGVkTW9kZWwnOlxuICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNWYWxpZE9iamVjdChvYmosICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKSk6XG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmouX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2JqLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRtZXRhbW9kZWwucHJlcGFyZU9iamVjdChvYmosICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKSk7XG5cbiAgICAgICAgICBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1bb2JqLl9pZF0gPSBvYmo7XG5cbiAgICAgICAgICBDb21wb25lbnQgPSAkY29tcG9uZW50LmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQob2JqKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudC5pZCgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ2luc2VydCcsIHRoaXMubmFtZSwgb2JqLl9pZCwgJycsIG9iaik7XG5cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG9ialxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09ICdfTWVzc2FnZScpIHtcbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgIGNoYW5uZWxzID0gZXhwb3J0cy5fQ2hhbm5lbC5maW5kKHt9KTtcbiAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGNoYW5uZWxzLmxlbmd0aDtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKGNoYW5uZWxzW2ldLl9pZCk7XG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBjaGFubmVsc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogb2JqLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgZGF0YTogb2JqLmRhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICRsb2cuaW52YWxpZERvY3VtZW50T25EYkluc2VydChvYmosIHRoaXMubmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIHVwZGF0ZSB0byBtYWtlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICoge0Jvb2xlYW59IHVwc2VydCB0cnVlIGlmIHdlIGNyZWF0ZSBhIGRvY3VtZW50IHdoZW4gbm8gZG9jdW1lbnQgaXMgZm91bmQgYnkgdGhlIHF1ZXJ5XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBOdW1iZXIgb2YgZG9jdW1lbnRzIHVwZGF0ZWRcbiAqIEBkZXNjcmlwdGlvbiBVcGRhdGUgZG9jdW1lbnRzIGludG8gYSBjb2xsZWN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5DYXJzLnVwZGF0ZSh7J2NvZGUnOiAnQVpELTcxJ30sIHsncHJpY2UnOiAnMTAwMDAkJ30pO1xuICogJGRiLkNhcnMudXBkYXRlKFt7J2NvZGUnOiAnQVpELTcxJ30sIHsnY29kZSc6ICdBWkQtNjUnfV0sIHsncHJpY2UnOiAnMTAwMDAkJ30pO1xuICogJGRiLkNhcnMudXBkYXRlKHsnY29kZSc6ICdBWkQtNzEnfSwgeydwcmljZSc6ICcxMDAwMCQnfSwgeyd1cHNlcnQnOiB0cnVlfSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHF1ZXJ5LCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIGRvY3MgPSB0aGlzLmZpbmQocXVlcnkpO1xuICB2YXIgdXBkYXRlZCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IGRvY3MubGVuZ3RoO1xuICB2YXIgYXR0cmlidXRlTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpO1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAodHlwZW9mIG9wdGlvbnMudXBzZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMudXBzZXJ0ID0gb3B0aW9ucy51cHNlcnQgfHwgZmFsc2U7XG4gIH1cblxuICBpZiAodXBkYXRlKSB7XG4gICAgLy8gdXBzZXJ0IGNhc2VcbiAgICBpZiAobGVuZ3RoID09PSAwICYmIG9wdGlvbnMudXBzZXJ0KSB7XG4gICAgICBpZiAocXVlcnkuX2lkKSB7XG4gICAgICAgIHVwZGF0ZS5faWQgPSBxdWVyeS5faWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmluc2VydCh1cGRhdGUpO1xuICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLy8gY2FzZSBvZiB1cGRhdGUgb2YgX2lkXG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZS5faWQgIT09ICd1bmRlZmluZWQnICYmIHVwZGF0ZS5faWQgIT09IGRvY3NbaV0uX2lkKSB7XG4gICAgICAgICRsb2cudXBkYXRlVXVpZChcbiAgICAgICAgICBkb2NzW2ldLl9pZCxcbiAgICAgICAgICB1cGRhdGUuX2lkLFxuICAgICAgICAgIHR5cGVvZiAkY29tcG9uZW50LmdldCh1cGRhdGUuX2lkKSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChhdHRyaWJ1dGVOYW1lIGluIHVwZGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3NbaV1bYXR0cmlidXRlTmFtZS5zcGxpdCgnLicpWzBdXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm5hbWUgIT09ICdfU2NoZW1hJyAmJlxuICAgICAgICAgICAgdGhpcy5uYW1lICE9PSAnX01vZGVsJyAmJlxuICAgICAgICAgICAgdGhpcy5uYW1lICE9PSAnX0dlbmVyYXRlZE1vZGVsJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgICAgdHlwZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKHRoaXMubmFtZSwgYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHNjaGVtYVthdHRyaWJ1dGVOYW1lXS50eXBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coXG4gICAgICAgICAgICAgICAgICAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnByb2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW3VwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cucHJvY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUoXG4gICAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICB1cGRhdGVbYXR0cmlidXRlTmFtZV0sXG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgIGRvY3NbaV0uX2lkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE8gbW9yZSBjaGVjayBpbiBjYXNlIG9mIHNjaGVtYSB1cGRhdGVcbiAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG5cbiAgICAgICAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKFxuICAgICAgICAgICAgICAndXBkYXRlJyxcbiAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGlkOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1cGRhdGVkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byByZW1vdmVcbiAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiBkb2N1bWVudHMgaWQgcmVtb3ZlZFxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGRvY3VtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gKiBXaGVuIGEgZG9jdW1lbnQgaXMgcmVtb3ZlZCwgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5DYXJzLnJlbW92ZSh7J2NvZGUnOiAnQVpELTcxJ30pO1xuICogJGRiLkNhcnMucmVtb3ZlKFt7J2NvZGUnOiAnQVpELTcxJ30sIHsnY29kZSc6ICdBWkQtNjUnfV0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShxdWVyeSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIG9iamVjdCA9IHt9O1xuXG4gIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgcXVlcnkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gbXVsdGlSZW1vdmUoY3JpdGVyaWEpIHtcbiAgICAgICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgb2JqZWN0ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgaWYgKGlzVmFsaWQoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgIC5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZygncmVtb3ZlJywgdGhpcy5uYW1lLCBpZCwgJycsICcnKTtcblxuICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICBkZWxldGUgZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgIGlmIChjb3JlRGIuaW5kZXhPZih0aGlzLm5hbWUpID09PSAtMSkge1xuICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICRoZWxwZXJcbiAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAucmVtb3ZlKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY291bnRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDb3VudCB0aGUgbnVtYmVyIG9mIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvblxuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHZhciByZXN1bHQgPSAwO1xuICB2YXIgb2JqZWN0SWQgPSAnJztcblxuICBmb3IgKG9iamVjdElkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgIHJlc3VsdCsrO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlTG9nXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uIENSVUQgYWN0aW9uIHRoYXQgaGFwcGVubmVkXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbiBjb2xsZWN0aW9uIG9mIHRoZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBmaWVsZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWUgb2YgdGhlIGZpZWxkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBMb2dcbiAqL1xuZXhwb3J0cy5jcmVhdGVMb2cgPSBmdW5jdGlvbiBjcmVhdGVMb2coYWN0aW9uLCBjb2xsZWN0aW9uLCBpZCwgZmllbGQsIHZhbHVlKSB7XG4gIHZhciBsb2dJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuXG4gIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uIHx8ICcnO1xuICBpZCA9IGlkIHx8ICcnO1xuICBmaWVsZCA9IGZpZWxkIHx8ICcnO1xuICB2YWx1ZSA9IHZhbHVlIHx8ICcnO1xuXG4gIC8vIGNsZWFuIGxvZyBldmVyeSAxMDAwIGxvZ3NcbiAgaWYgKE9iamVjdC5rZXlzKGV4cG9ydHMuc3RvcmUuX0xvZykubGVuZ3RoID4gMTAwMCkge1xuICAgIGV4cG9ydHMuc3RvcmUuX0xvZyA9IHt9O1xuICB9XG5cbiAgZXhwb3J0cy5zdG9yZS5fTG9nW2xvZ0lkXSA9IHtcbiAgICBfaWQ6IGxvZ0lkLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgaWQ6IGlkLFxuICAgIGZpZWxkOiBmaWVsZCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgb3JkZXI6IGluY0xvZ09yZGVyKClcbiAgfTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBEYXRhYmFzZUNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jb2xsZWN0aW9uID0gZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XG4gIGV4cG9ydHNbbmFtZV0gPSBuZXcgRGF0YWJhc2VDb2xsZWN0aW9uKG5hbWUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGltcG9ydFN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIFN5c3RlbSBSdW50aW1lIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBpZCBvZiB0aGUgaW1wb3J0ZWQgU3lzdGVtIFJ1bnRpbWUgc3lzdGVtXG4gKiBAZGVzY3JpcHRpb24gSW1wb3J0IGEgc3lzdGVtIGludG8gdGhlIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuaW1wb3J0U3lzdGVtID0gZnVuY3Rpb24gaW1wb3J0U3lzdGVtKGltcG9ydGVkU3lzdGVtKSB7XG4gIHJldHVybiBpbXBTeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGV4cG9ydFN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybnMge1N0cmluZ30gYSBzdHJpbmdpZmllZCBzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzeXN0ZW1cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLmV4cG9ydFN5c3RlbSgpOyAvLyBleHBvcnQgYWxsIHRoZSBzeXN0ZW1cbiAqICRkYi5leHBvcnRTeXN0ZW0oeydzY2hlbWFzJzp7J25hbWUnOidQZXJzb24nfX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHNjaGVtYXNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeyd0eXBlcyc6eyduYW1lJzonYWRkcmVzcyd9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeydiZWhhdmlvcnMnOnsnY29tcG9uZW50JzonbGF1cmUnfX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGJlaGF2aW9yc1xuICogJGRiLmV4cG9ydFN5c3RlbSh7J2NvbXBvbmVudHMnOnsnUGVyc29uJzogeydjb3VudHJ5JzogJ0ZyYW5jZSd9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeydzY2hlbWFzJzp7J25hbWUnOidQZXJzb24nfSwnY29tcG9uZW50cyc6eydQZXJzb24nOiB7J2NvdW50cnknOiAnRnJhbmNlJ319fSk7IC8vIGNvbWJpbmUgZmlsdGVyc1xuICovXG5leHBvcnRzLmV4cG9ydFN5c3RlbSA9IGZ1bmN0aW9uIGV4cG9ydFN5c3RlbShwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGlmIChwYXJhbXMpIHtcbiAgICByZXN1bHQgPSBleHBTdWJzeXN0ZW0ocGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBleHBTeXN0ZW0oKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gQ2xlYXIgdGhlIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNvbGxlY3Rpb25OYW1lID0gJyc7XG5cbiAgLy8gcmVtb3ZlIGNvbGxlY3Rpb25zXG4gIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBjb2xsZWN0aW9uc1xuICBsZW5ndGggPSBpbnRlcm5hbERCLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29sbGVjdGlvbk5hbWUgPSBpbnRlcm5hbERCW2ldO1xuICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLnJlbW92ZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW5pdFxuICogQGRlc2NyaXB0aW9uIEluaXQgdGhlIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBydW50aW1lU3lzdGVtSWQgPSAnJztcbiAgdmFyIHJ1bnRpbWVTeXN0ZW0gPSBudWxsO1xuXG4gIHJ1bnRpbWVTeXN0ZW0gPSBleHBvcnRzLl9TeXN0ZW0uZmluZCh7XG4gICAgX2lkOiAnZTg5YzYxN2I2YjE1ZDI0J1xuICB9KVswXTtcblxuICAvLyBjbGVhciBhbGwgdGhlIGRhdGEgaW4gbWVtb3J5XG4gIGV4cG9ydHMuY2xlYXIoKTtcbiAgJGNvbXBvbmVudC5jbGVhcigpO1xuICAkbWV0YW1vZGVsLmNsZWFyKCk7XG4gICRzdGF0ZS5jbGVhcigpO1xuICAkYmVoYXZpb3IuY2xlYXIoKTtcblxuICAvLyBpbml0IG1ldGFtb2RlbFxuICAkbWV0YW1vZGVsLmluaXQoKTtcblxuICAvLyByZWltcG9ydCBTeXN0ZW0gUnVudGltZSBjb3JlIHN5c3RlbVxuICBydW50aW1lU3lzdGVtSWQgPSBleHBvcnRzLmltcG9ydFN5c3RlbShydW50aW1lU3lzdGVtKTtcbiAgJGNvbXBvbmVudC5nZXQocnVudGltZVN5c3RlbUlkKS5zdGFydCgpO1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgaGVscGVyXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0eSAqL1xuXG52YXIgcnVudGltZVJlZiA9IG51bGw7XG52YXIgcmVxdWlyZVJlZiA9IG51bGw7XG5cbi8qIFB1YmxpYyBtZXRob2QgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGlzUnVudGltZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYSBTeXN0ZW0gUnVudGltZSBpbnN0YW5jZSBleGlzdFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RzXG4gKi9cbmV4cG9ydHMuaXNSdW50aW1lID0gZnVuY3Rpb24gaXNSdW50aW1lKCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgaWYgKCRkYi5fUnVudGltZSAmJiAkZGIuX1J1bnRpbWUuZmluZCgpLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFJ1bnRpbWVcbiAqIEByZXR1cm5zIHtfUnVudGltZX0gU3lzdGVtIFJ1bnRpbWUgaW5zdGFuY2VcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIFN5c3RlbSBSdW50aW1lIGluc3RhbmNlXG4gKi9cbmV4cG9ydHMuZ2V0UnVudGltZSA9IGZ1bmN0aW9uIGdldFJ1bnRpbWUoKSB7XG4gIHZhciBydW50aW1lSWQgPSAnJztcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBzZWFyY2ggPSAkZGIuX1J1bnRpbWUuZmluZCgpO1xuXG4gIGlmICghcnVudGltZVJlZiAmJiBzZWFyY2hbMF0pIHtcbiAgICBydW50aW1lSWQgPSBzZWFyY2hbMF0uX2lkO1xuICAgIHJ1bnRpbWVSZWYgPSAkY29tcG9uZW50LmdldChydW50aW1lSWQpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bnRpbWVSZWY7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNPbk5vZGVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaXMgcnVubmluZyBvbiBub2RlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBTeXN0ZW0gUnVudGltZSBpcyBydW5uaW5nIG9uIG5vZGVcbiAqL1xuZXhwb3J0cy5pc09uTm9kZSA9IGZ1bmN0aW9uIGlzT25Ob2RlKCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmVxdWlyZVxuICogQHJldHVybnMge09iamVjdH0gdGhlIHJlcXVpcmUgb2JqZWN0XG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZXF1aXJlIG9iamVjdFxuICovXG5leHBvcnRzLmdldFJlcXVpcmUgPSBmdW5jdGlvbiBnZXRSZXF1aXJlKCkge1xuICBpZiAoIXJlcXVpcmVSZWYpIHtcbiAgICAvLyBrbHVkZ2UgZm9yIHdlYnBhY2tcbiAgICByZXF1aXJlUmVmID0gZXZhbCgncmVxdWlyZScpO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVpcmVSZWY7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybnMge1N0cmluZ30gYSB1dWlkXG4gKiBAZGVzY3JpcHRpb24gR2VuZXJhdGUgYSB1dWlkXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG4gIGZ1bmN0aW9uIGdlbigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJlZml4KCkge1xuICAgIHZhciB2YWxpZFByZWZpeCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gICAgcmV0dXJuIHZhbGlkUHJlZml4LmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFByZWZpeC5sZW5ndGgpKTtcbiAgfVxuXG4gIHJldHVybiBnZXRQcmVmaXgoKSArIGdlbigpICsgZ2VuKCkgKyBnZW4oKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBwb2x5ZmlsbFxuICogQGRlc2NyaXB0aW9uIEFkZCBQb2x5ZmlsbFxuICovXG5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gIC8vIGZpeGluZyBjb25zdHJ1Y3Rvci5uYW1lIHByb3BlcnR5IGluIElFXG4gIC8vIHRha2VuIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTE0MDcyMy9jb25zdHJ1Y3Rvci1uYW1lLWlzLXVuZGVmaW5lZC1pbi1pbnRlcm5ldC1leHBsb3JlclxuICBpZiAoXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09IHVuZGVmaW5lZCAmJlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICduYW1lJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgICAgIHZhciByZXN1bHRzID0gZnVuY05hbWVSZWdleC5leGVjKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSA/IHJlc3VsdHNbMV0udHJpbSgpIDogJyc7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHt9XG4gICAgfSk7XG4gIH1cbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxvZ1xuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdGhhdCB3cml0ZSBhIGxvZ1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBJRCA9ICdfaWQnO1xudmFyIE5BTUUgPSAnX25hbWUnO1xudmFyIGN1cnJlbnRMZXZlbCA9ICd3YXJuJztcbnZhciBsb2dnZXJSZWYgPSBudWxsO1xudmFyIGZha2VMb2dnZXJSZWYgPSB7XG4gIGN1cnJlbnRMZXZlbDogJ3dhcm4nLFxuICBsZXZlbDogZnVuY3Rpb24gZGVidWcobGV2ZWxOYW1lKSB7XG4gICAgaWYgKGxldmVsTmFtZSkge1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBsZXZlbE5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbDtcbiAgfSxcbiAgZGVidWc6IGZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdkZWJ1ZycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBpbmZvOiBmdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdpbmZvJyB8fCB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgY29uc29sZS5pbmZvKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICB3YXJuOiBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2luZm8nIHx8XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ3dhcm4nIHx8XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJ1xuICAgICkge1xuICAgICAgY29uc29sZS53YXJuKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHJldHVybiB7X0xvZ2dlcn0gX0xvZ2dlciBpbnN0YW5jZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIF9Mb2dnZXIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gZ2V0TG9nZ2VyKCkge1xuICB2YXIgbG9nZ2VySWQgPSAnJztcbiAgdmFyIGxvZ2dlcnMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCEkbWV0YW1vZGVsLmdldE1vZGVsKCdfTG9nZ2VyJykpIHtcbiAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICB9IGVsc2Uge1xuICAgIGxvZ2dlcnMgPSAkZGIuX0xvZ2dlci5maW5kKCk7XG4gICAgaWYgKGxvZ2dlcnMubGVuZ3RoKSB7XG4gICAgICBsb2dnZXJJZCA9IGxvZ2dlcnNbMF1bSURdO1xuXG4gICAgICBpZiAoJGNvbXBvbmVudC5nZXQobG9nZ2VySWQpKSB7XG4gICAgICAgIGxvZ2dlclJlZiA9ICRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKTtcbiAgICAgICAgcmVzdWx0ID0gbG9nZ2VyUmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgbGV2ZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBsZXZlbE5hbWUgbmFtZSBvZiB0aGUgbGV2ZWxcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIGxldmVsIG9mIHRoZSBsb2dcbiAqL1xuZXhwb3J0cy5sZXZlbCA9IGZ1bmN0aW9uIGxldmVsKGxldmVsTmFtZSkge1xuICBjdXJyZW50TGV2ZWwgPSBsZXZlbE5hbWU7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqIEBkZXNjcmlwdGlvbiBBIHByb3BlcnR5IG9mIGEgc2NoZW1hIGlzIHVua25vd25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHkgPSBmdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICBpZiAoc2NoZW1hW05BTUVdKSB7XG4gICAgbWVzc2FnZSA9XG4gICAgICBcInVua25vd24gcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mICdcIiArXG4gICAgICBzY2hlbWFbTkFNRV0gK1xuICAgICAgXCInXCI7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIGEgbW9kZWxcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4obWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZSA9IGZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGUoXG4gIHByb3BlcnR5TmFtZSxcbiAgdHlwZSxcbiAgcHJvcGVydHlcbikge1xuICB2YXIgcmVhbFR5cGUgPVxuICAgIHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbnN0cnVjdG9yXG4gICAgICA/IHByb3BlcnR5LmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgIDogdHlwZW9mIHByb3BlcnR5O1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICByZWFsVHlwZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdmFsdWUgZm9yIHR5cGUgZW51bVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVmFsdWUgPSBmdW5jdGlvbiBpbnZhbGlkRW51bVZhbHVlKHZhbHVlLCB0eXBlKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCInXCIgKyB2YWx1ZSArIFwiJyBpcyBhbiBpbnZhbGlkIHZhbHVlIGZvciB0aGUgdHlwZSBlbnVtICdcIiArIHR5cGUgKyBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBjbGFzcyBuYW1lIGZvciBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRDbGFzc05hbWUgPSBmdW5jdGlvbiBpbnZhbGlkQ2xhc3NOYW1lKFxuICBjb21wb25lbnRJZCxcbiAgdHlwZSxcbiAgY29uc3RydWN0b3JOYW1lXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgY2xhc3MgbmFtZSBmb3IgY29tcG9uZW50ICdcIiArXG4gICAgICBjb21wb25lbnRJZCArXG4gICAgICBcIic6IGV4cGVjdGVkICdcIiArXG4gICAgICB0eXBlICtcbiAgICAgIFwiJyBpbnN0ZWFkIG9mICdcIiArXG4gICAgICBjb25zdHJ1Y3Rvck5hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBNaXNzaW5nIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5taXNzaW5nUHJvcGVydHkgPSBmdW5jdGlvbiBtaXNzaW5nUHJvcGVydHkocHJvcGVydHlOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgYSBzY2hlbWEgb3IgYSBtb2RlbFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ0ltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtaXNzaW5nIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nXG4gKi9cbmV4cG9ydHMubWlzc2luZ0ltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gbWlzc2luZ0ltcGxlbWVudGF0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmcuXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlSW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVJbXAgPSBmdW5jdGlvbiBpbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLmVycm9yKFxuICAgIFwidGhlIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eSArXG4gICAgICBcIicgb2YgdGhlIG1vZGVsICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInIGlzIGludmFsaWRcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gTWlzc2luZyBhIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy5taXNzaW5nUHJvcGVydHlJbXAgPSBmdW5jdGlvbiBtaXNzaW5nUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBpbiB0aGUgbW9kZWwgJ1wiICsgY2xhc3NOYW1lICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gVW5rb3duIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlJbXAgPSBmdW5jdGlvbiB1bmtub3duUHJvcGVydHlJbXAocHJvcGVydHksIHNjaGVtYSkge1xuICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICBcInRoZSBtb2RlbCAnXCIgKyBzY2hlbWEgKyBcIicgaGFzIGFuIHVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlRGVmaW5pdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgYSB0eXBlIGRlZmluaXRpb25cbiAqIEBkZXNjcmlwdGlvbiAgVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBpbnZhbGlkVHlwZURlZmluaXRpb24obmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHR5cGUgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgdmFsaWRcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBwcm9wZXJ0eSBuYW1lXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5TmFtZSA9IGZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eU5hbWUoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHByb3BlcnR5TmFtZSxcbiAgcHJvcGVydHlWYWx1ZSxcbiAgdHlwZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcbiAgdmFyIHJlYWxUeXBlID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVhbFR5cGUgPVxuICAgICAgcHJvcGVydHlWYWx1ZSAmJiBwcm9wZXJ0eVZhbHVlLmNvbnN0cnVjdG9yXG4gICAgICAgID8gcHJvcGVydHlWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgIDogdHlwZW9mIHByb3BlcnR5VmFsdWU7XG5cbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArXG4gICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mbyArXG4gICAgICAgIFwiOiBleHBlY3RlZCAnXCIgK1xuICAgICAgICB0eXBlICtcbiAgICAgICAgXCInIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgICAgcmVhbFR5cGUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmVhbFR5cGUgPSB0eXBlICYmIHR5cGUuY29uc3RydWN0b3IgPyB0eXBlLmNvbnN0cnVjdG9yLm5hbWUgOiB0eXBlb2YgdHlwZTtcblxuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgdHlwZSAnXCIgK1xuICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGNsYXNzSW5mbyArXG4gICAgICAgIFwiOiBleHBlY3RlZCAnc3RyaW5nJyBpbnN0ZWFkIG9mICdcIiArXG4gICAgICAgIHJlYWxUeXBlICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVhZE9ubHlQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gVHJ5aW5nIHRvIHNldCBhIHJlYWQtb25seSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLnJlYWRPbmx5UHJvcGVydHkgPSBmdW5jdGlvbiByZWFkT25seVByb3BlcnR5KFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBwcm9wZXJ0eU5hbWVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImNhbiBub3Qgc2V0IHJlYWQtb25seSBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGNsYXNzSW5mb1xuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBkb2N1bWVudCBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0ID0gZnVuY3Rpb24gaW52YWxpZERvY3VtZW50T25EYkluc2VydChcbiAgZG9jLFxuICBjb2xsZWN0aW9uTmFtZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGRvY3VtZW50ICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShkb2MpLnJlcGxhY2UoLywvZywgJywgJykgK1xuICAgICAgXCInIG9uIGFuIGluc2VydCBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgK1xuICAgICAgY29sbGVjdGlvbk5hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uICBJbnZhbGlkIHByb3BlcnR5IG9uIGEgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvblxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUoXG4gIGNvbGxlY3Rpb25OYW1lLFxuICBpZCxcbiAgcHJvcGVydHlOYW1lLFxuICBwcm9wZXJ0eVZhbHVlLFxuICB0eXBlXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgdHlwZSB3aGVuIHRyeWluZyB0byB1cGRhdGUgdGhlIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgXCInIG9mIGRvY3VtZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIicgKGNvbGxlY3Rpb24gJ1wiICtcbiAgICAgIGNvbGxlY3Rpb25OYW1lICtcbiAgICAgIFwiJykgd2l0aCB0aGUgdmFsdWUgJ1wiICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHByb3BlcnR5VmFsdWUpICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBVbmtvbncgcHJvcGVydHkgb24gYSBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZSA9IGZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGUoXG4gIHByb3BlcnR5TmFtZSxcbiAgY29sbGVjdGlvbk5hbWUsXG4gIGlkXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInVua25vd24gcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgb24gYW4gdXBkYXRlIG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uICdcIiArXG4gICAgICBjb2xsZWN0aW9uTmFtZSArXG4gICAgICBcIicgd2l0aCBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBkZXNjcmlwdGlvbiBDYWxsIGFuIHVua25vd24gbWV0aG9kIG9mIGEgY2xhc3NcbiAqL1xuZXhwb3J0cy51bmtub3duTWV0aG9kID0gZnVuY3Rpb24gdW5rbm93bk1ldGhvZChjbGFzc0lkLCBtZXRob2ROYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gY2FsbCBhbiB1bmtub3duIG1ldGhvZCAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgZm9yIHRoZSBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NJZCArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBEYXRhYmFzZUNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUgPSBmdW5jdGlvbiBpbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBuYW1lIGZvciBjcmVhdGluZyB0aGUgY29sbGVjdGlvbiAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIic6IHRoZXJlIGlzIG5vIHNjaGVtYSAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIicgaW4gdGhlIG1ldGFtb2RlbFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFJlc3VsdFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwZWN0ZWRUeXBlIGV4cGVjdGVkIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGN1cnJlbnQgdHlwZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZSByZXN1bHQgb2YgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUmVzdWx0VHlwZSA9IGZ1bmN0aW9uIGludmFsaWRSZXN1bHRUeXBlKFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBtZXRob2ROYW1lLFxuICBleHBlY3RlZFR5cGUsXG4gIHR5cGVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIiArXG4gICAgICBjbGFzc0luZm8gK1xuICAgICAgXCI6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgIGV4cGVjdGVkVHlwZSArXG4gICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICB0eXBlICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBVbmtub3duIGNsYXNzXG4gKi9cbmV4cG9ydHMudW5rbm93bkNvbXBvbmVudCA9IGZ1bmN0aW9uIHVua25vd25Db21wb25lbnQoY2xhc3NOYW1lLCBjb21wb25lbnRJZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidW5rb3duIGNsYXNzIGNvbXBvbmVudCAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJyBmb3IgY29tcG9uZW50ICdcIiArXG4gICAgICBjb21wb25lbnRJZCArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHdvcmtmbG93UmVzdGFydGVkXG4gKiBAZGVzY3JpcHRpb24gVGhlIFN5c3RlbSBSdW50aW1lIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZFxuICovXG5leHBvcnRzLndvcmtmbG93UmVzdGFydGVkID0gZnVuY3Rpb24gd29ya2Zsb3dSZXN0YXJ0ZWQoKSB7XG4gIGdldExvZ2dlcigpLndhcm4oJ3J1bnRpbWUgaGFzIGJlZW4gcmVzdGFydGVkJyk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1OdW1iZXIgPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXIoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIiArXG4gICAgICBjbGFzc0luZm9cbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAqIEBkZXNjcmlwdGlvbiAgSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtVHlwZSA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbVR5cGUoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWUsXG4gIHBhcmFtTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBpZiAocGFyYW1OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBwYXJhbWV0ZXIgJ1wiICtcbiAgICAgICAgcGFyYW1OYW1lICtcbiAgICAgICAgXCInIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGlkICtcbiAgICAgICAgXCInXCIgK1xuICAgICAgICBjbGFzc0luZm9cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgYSBwYXJhbWV0ZXIgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mb1xuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBiZWhhdmlvck5vdFVuaXF1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZVxuICovXG5leHBvcnRzLmJlaGF2aW9yTm90VW5pcXVlID0gZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIGFkZCBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIGZvciB0aGUgc3RhdGUgJ1wiICtcbiAgICAgIHN0YXRlTmFtZSArXG4gICAgICBcIicgb24gY2xhc3MgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBDYW4gbm90IGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gaW52YWxpZCBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9uID0gZnVuY3Rpb24gaW52YWxpZFN0YXRlT24oaWQsIHN0YXRlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIGFkZCBhIGJlaGF2aW9yIHRvIGFuIHVua3dvd24gc3RhdGUgJ1wiICtcbiAgICAgIHN0YXRlTmFtZSArXG4gICAgICBcIicgb24gY2xhc3MgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT2ZmXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gVGhlIGNhbGwgdG8gYSByZW1vdmUgc3RhdGUgb2YgdGhlIGJlaGF2aW9yIG1vZHVsZSBpcyBpbnZhbGlkXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT2ZmID0gZnVuY3Rpb24gaW52YWxpZFN0YXRlT2ZmKGlkLCBzdGF0ZU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeSB0byByZW1vdmUgYSBiZWhhdmlvciBmcm9tIGFuIHVua3dvd24gc3RhdGUgJ1wiICtcbiAgICAgIHN0YXRlTmFtZSArXG4gICAgICBcIicgb24gY2xhc3MgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgbWFzdGVyIHN5c3RlbSBpcyBub3QgZm91bmRcbiAqL1xuZXhwb3J0cy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCA9IGZ1bmN0aW9uIG1hc3RlclN5c3RlbU5vdEZvdW5kKCkge1xuICBnZXRMb2dnZXIoKS53YXJuKCdjYW4gbm90IGV4cG9ydCB0aGUgZGF0YWJhc2UgYmVjYXVzZSBubyBzeXN0ZW0gd2FzIGRlZmluZWQnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgZXhwZWN0ZWQgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZSA9IGZ1bmN0aW9uIGludmFsaWRUeXBlKG5hbWUsIHZhbHVlLCB0eXBlTmFtZSkge1xuICB2YXIgcmVhbFR5cGUgPVxuICAgIG5hbWUgJiYgdmFsdWUuY29uc3RydWN0b3IgPyB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIDogdHlwZW9mIHZhbHVlO1xuXG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgJ1wiICtcbiAgICAgIHR5cGVOYW1lICtcbiAgICAgIFwiJyBpbnN0ZWFkIG9mICdcIiArXG4gICAgICByZWFsVHlwZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc1R5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogYW4gb2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCBjbGFzcyB0eXBlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBjbGFzcyB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZENsYXNzVHlwZSA9IGZ1bmN0aW9uIGludmFsaWRDbGFzc1R5cGUob2JqLCB0eXBlKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGNsYXNzIG5hbWUgZm9yIHRoZSBvYmplY3QgJ1wiICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KG9iaikgK1xuICAgICAgXCInOiBleHBlY3RlZCAnXCIgK1xuICAgICAgdHlwZVxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRDb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIGFuIG9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZSBmb3IgdGhlIGNvbmZpZ3VyYXRpb25cbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uIGludmFsaWRDb25maWd1cmF0aW9uKG9iaiwgdHlwZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBjb25maWd1cmF0aW9uIGZvdW5kIGZvciAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkob2JqKSArXG4gICAgICBcIic6IGV4cGVjdGVkICdcIiArXG4gICAgICB0eXBlXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB2YWx1ZVxuICogQGRlc2NyaXB0aW9uIFVua25vd24gdHlwZVxuICovXG5leHBvcnRzLnVua25vd25UeXBlID0gZnVuY3Rpb24gdW5rbm93blR5cGUodmFsdWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInVua25vd24gdHlwZSBmb3IgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25QYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBzdWJwYXRoXG4gKiBAZGVzY3JpcHRpb24gVW5rbm93biBzdWJwYXRoIGluIGEgcGF0aFxuICovXG5leHBvcnRzLnVua25vd25QYXRoID0gZnVuY3Rpb24gdW5rbm93blBhdGgocGF0aCwgc3VicGF0aCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIHBhdGggJ1wiICsgcGF0aCArIFwiJyBoYXMgYW4gdW5rb3duIHN1YnBhdGggJ1wiICsgc3VicGF0aCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gQSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGFscmVheSBjcmVhdGVkXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBmdW5jdGlvbiBjYW5Ob3RZZXRWYWxpZGF0ZShpZCwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFxuICAgIFwiY2FuIG5vdCB5ZXQgdmFsaWRhdGUgaWYgdGhlIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInIGlzIGFuIGluc3RhbmNlIG9mICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ2hhbm5lbEV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGZ1bmN0aW9uIGludmFsaWRDaGFubmVsRXZlbnQoXG4gIG1lc3NhZ2UsXG4gIGV2ZW50TmFtZSxcbiAgdHlwZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBtZXNzYWdlICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArXG4gICAgICBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInIGZvciBldmVudCAnXCIgK1xuICAgICAgZXZlbnROYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIGJlaGF2aW9yIGFkZCB3aXRoICdvbicgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24gPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGFkZGluZyBhIGJlaGF2aW9yIG9uIG1ldGhvZCAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIiArXG4gICAgICBjbGFzc0luZm9cbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1cGRhdGVVdWlkXG4gKiBAcGFyYW0ge1N0cmluZ30gY3VycmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuZXdJZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFscmVhZHlVc2VkIG5ld0lkIGFscmVhZHkgdXNlZFxuICogQGRlc2NyaXB0aW9uIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51cGRhdGVVdWlkID0gZnVuY3Rpb24gdXBkYXRlVXVpZChjdXJyZW50SWQsIG5ld0lkLCBhbHJlYWR5VXNlZCkge1xuICBpZiAoYWxyZWFkeVVzZWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJ0cnkgdG8gdXBkYXRlIGEgY29tcG9uZW50IG9mIGlkICdcIiArXG4gICAgICAgIGN1cnJlbnRJZCArXG4gICAgICAgIFwiJyB3aXRoIHRoZSBuZXcgaWQgJ1wiICtcbiAgICAgICAgbmV3SWQgK1xuICAgICAgICBcIicgdGhhdCBpcyBhbHJlYWR5IHVzZWRcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgK1xuICAgICAgICBjdXJyZW50SWQgK1xuICAgICAgICBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArXG4gICAgICAgIG5ld0lkICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFVzZU9mQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50IHRoYXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gKi9cbmV4cG9ydHMuaW52YWxpZFVzZU9mQ29tcG9uZW50ID0gZnVuY3Rpb24gaW52YWxpZFVzZU9mQ29tcG9uZW50KGlkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRTY2hlbWEgPSBmdW5jdGlvbiBpbnZhbGlkU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBzY2hlbWEgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInIGlzIG5vdCB2YWxpZCwgaXQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBtZXRhbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gYWRkIGFuIGludmFsaWQgbW9kZWxcbiAqL1xuZXhwb3J0cy5pbnZhbGlkTW9kZWwgPSBmdW5jdGlvbiBpbnZhbGlkTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIG1vZGVsICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpcyBub3QgdmFsaWQsIGl0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgbWV0YW1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBwYXJhbWV0ZXJzIHNldCB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVycyA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NJZCArXG4gICAgICBcIicgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGRlc3Ryb3llZENvbXBvbmVudENhbGxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGdldCB0aGUgcHJvcGVydHkgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZGVzdHJveWVkQ29tcG9uZW50Q2FsbCA9IGZ1bmN0aW9uIGRlc3Ryb3llZENvbXBvbmVudENhbGwoXG4gIHByb3BlcnR5TmFtZSxcbiAgaWRcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5aW5nIHRvIGdldCB0aGUgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgb24gdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iamVjdCBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBzY2hlbWEgbmFtZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgcGFyYW1ldGVyIHR5cGUgIHdoZW4gY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzc1xuICovXG5leHBvcnRzLmludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzKFxuICBvYmplY3QsXG4gIG5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIGNvbnN0cnVjdG9yIHBhcmFtZXRlciAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkob2JqZWN0KS5yZXBsYWNlKC8sL2csICcsICcpICtcbiAgICAgIFwiJyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInIGlzIG5vdCBhbiBvYmplY3RcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Nb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBpbmZvcm1hdGlvbiBvZiBhbiB1bmtvd24gbW9kZWxcbiAqL1xuZXhwb3J0cy51bmtub3duTW9kZWwgPSBmdW5jdGlvbiB1bmtub3duTW9kZWwoY2xhc3NJZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IGdldCB0aGUgaW5mb3JtYXRpb24gb2YgYW4gdW5rbm93biBtb2RlbCAnXCIgKyBjbGFzc0lkICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBBIHNjaGVtYSBpcyBtaXNzaW5nXG4gKi9cbmV4cG9ydHMubWlzc2luZ1NjaGVtYSA9IGZ1bmN0aW9uIG1pc3NpbmdTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmdcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHdoZXJlIHRoZSBjeWNsaWMgZGVwZW5kZW5jeSB3YXMgZm91bmRcbiAqIEBkZXNjcmlwdGlvbiBBIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICovXG5leHBvcnRzLmN5Y2xpY0RlcGVuZGVuY3kgPSBmdW5jdGlvbiBjeWNsaWNEZXBlbmRlbmN5KG5hbWUpIHtcbiAgaWYgKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgICdhIGN5Y2xpYyBpbmhlcml0YW5jZSBkZXBlbmRlbmN5IHdpdGgg4oCZJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICBcIuKAmSBzY2hlbWEgaGFzIGJlZW4gZm91bmQsIHBsZWFzZSBjaGVjayB0aGUgJ19pbmhlcml0JyBwcm9wZXJ0aWVzIG9mIHlvdXIgc2NoZW1hc1wiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgIFwiYSBjeWNsaWMgaW5oZXJpdGFuY2UgZGVwZW5kZW5jeSBoYXMgYmVlbiBmb3VuZCwgcGxlYXNlIGNoZWNrIHRoZSAnX2luaGVyaXQnIHByb3BlcnRpZXMgb2YgeW91ciBzY2hlbWFzXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZEVudW1UeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZU5hbWUgb2YgdGhlIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGUgZm9yIGEgdHlwZSBlbnVtXG4gKi9cbmV4cG9ydHMuaW52YWxpZEVudW1UeXBlID0gZnVuY3Rpb24gaW52YWxpZEVudW1UeXBlKHZhbHVlLCB0eXBlTmFtZSwgdHlwZSkge1xuICB2YXIgcmVhbFR5cGUgPSAnJztcblxuICBpZiAodHlwZW9mIHR5cGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGUgIT09IHR5cGVvZiB2YWx1ZSkge1xuICAgIHJlYWxUeXBlID1cbiAgICAgIHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yID8gdmFsdWUuY29uc3RydWN0b3IubmFtZSA6IHR5cGVvZiB2YWx1ZTtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSB0eXBlICdcIiArXG4gICAgICAgIHR5cGVOYW1lICtcbiAgICAgICAgXCInOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICAgIHR5cGUgK1xuICAgICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICAgIHJlYWxUeXBlICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSB0eXBlICdcIiArIHR5cGVOYW1lICsgXCInXCIpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbG9hZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gTG9hZCBzY2hlbWFcbiAqL1xuZXhwb3J0cy5sb2FkU2NoZW1hID0gZnVuY3Rpb24gbG9hZFNjaGVtYShuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwibG9hZCBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBsb2FkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gTG9hZCBtb2RlbFxuICovXG5leHBvcnRzLmxvYWRNb2RlbCA9IGZ1bmN0aW9uIGxvYWRNb2RlbChuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwibG9hZCBtb2RlbCAnXCIgKyBuYW1lICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGxvYWRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gTG9hZCB0eXBlXG4gKi9cbmV4cG9ydHMubG9hZFR5cGUgPSBmdW5jdGlvbiBsb2FkVHlwZShuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwibG9hZCB0eXBlICdcIiArIG5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQ29tcGlsZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5jb21waWxlU2NoZW1hID0gZnVuY3Rpb24gY29tcGlsZVNjaGVtYShuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiY29tcGlsZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlIG1vZGVsXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVNb2RlbCA9IGZ1bmN0aW9uIGdlbmVyYXRlTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImdlbmVyYXRpbmcgbW9kZWwgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja01vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIENoZWNrIG1vZGVsXG4gKi9cbmV4cG9ydHMuY2hlY2tNb2RlbCA9IGZ1bmN0aW9uIGNoZWNrTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImFuYWx5emluZyBtb2RlbCAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmNyZWF0ZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVDb2xsZWN0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCInXCIgKyBuYW1lICsgXCInIGRhdGFiYXNlIGNvbGxlY3Rpb24gY3JlYXRlZFwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgY2xhc3NcbiAqL1xuZXhwb3J0cy5jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCInXCIgKyBuYW1lICsgXCInIGNsYXNzIGNyZWF0ZWRcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkJlZ2luXG4gKiBAZGVzY3JpcHRpb24gQmVnaW5zIG1vZGVsIGNyZWF0aW9uXG4gKi9cbmV4cG9ydHMubW9kZWxDcmVhdGlvbkJlZ2luID0gZnVuY3Rpb24gbW9kZWxDcmVhdGlvbkJlZ2luKCkge1xuICBnZXRMb2dnZXIoKS5kZWJ1Zygnc3RhcnRpbmcgbW9kZWwgY3JlYXRpb24uLi4nKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtb2RlbENyZWF0aW9uRW5kXG4gKiBAZGVzY3JpcHRpb24gRW5kIG1vZGVsIGNyZWF0aW9uXG4gKi9cbmV4cG9ydHMubW9kZWxDcmVhdGlvbkVuZCA9IGZ1bmN0aW9uIG1vZGVsQ3JlYXRpb25FbmQoKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKCdtb2RlbCBjcmVhdGlvbiBlbmRlZCcpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGFjdGlvbkludm9rZUVycm9yXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY29tcG9uZW50IGNsYXNzIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gKiBAZGVzY3JpcHRpb24gQW4gZXJyb3IgaGFwcGVuZWQgd2hlbiBpbnZva2luZyBhIGJlaGF2aW9yXG4gKi9cbmV4cG9ydHMuYWN0aW9uSW52b2tlRXJyb3IgPSBmdW5jdGlvbiBhY3Rpb25JbnZva2VFcnJvcihcbiAgc3RhdGUsXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1lc3NhZ2Vcbikge1xuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgICBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICBzdGF0ZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIicgKGNsYXNzICdcIiArXG4gICAgICAgIGNsYXNzTmFtZSArXG4gICAgICAgIFwiJyk6IFwiICtcbiAgICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgICBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICBzdGF0ZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIic6IFwiICtcbiAgICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgbmFtZSBmb3IgdGhlIHByb3BlcnR5IG9mIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFNjaGVtYVByb3BlcnR5TmFtZSA9IGZ1bmN0aW9uIGludmFsaWRTY2hlbWFQcm9wZXJ0eU5hbWUoXG4gIG5hbWUsXG4gIHByb3BOYW1lXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgbmFtZSAnXCIgK1xuICAgICAgcHJvcE5hbWUgK1xuICAgICAgXCInIGZvciBzY2hlbWEgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInOiBhIHByb3BlcnR5IG5hbWUgY2FuIG5vdCBiZWdpbiB3aXRoICdfJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgbmFtZSBmb3IgdGhlIHByb3BlcnR5IG9mIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFNjaGVtYVByb3BlcnR5ID0gZnVuY3Rpb24gaW52YWxpZFNjaGVtYVByb3BlcnR5KG5hbWUsIHByb3BOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wTmFtZSArXG4gICAgICBcIicgZm9yIHNjaGVtYSAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIic6IG9ubHkgJ3Byb3BlcnR5JywgJ2xpbmsnLCAnY29sbGVjdGlvbicsICdtZXRob2QnIGFuZCAnZXZlbnQnIGFyZSBhbGxvd2VkLlwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5Rm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgZm9ybWF0IGZvciB0aGUgZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5Rm9ybWF0ID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5Rm9ybWF0KG9iaikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBmb3JtYXQgZm9yIGEgZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5OiAnXCIgK1xuICAgICAgb2JqICtcbiAgICAgIFwiJyBpcyBub3QgYW4gb2JqZWN0XCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIGludmFsaWQgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlID0gZnVuY3Rpb24gaW52YWxpZFN0YXRlKG1vZGVsLCBzdGF0ZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBzdGF0ZSAnXCIgKyBzdGF0ZSArIFwiJyBmb3IgdGhlIG1vZGVsICdcIiArIG1vZGVsICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duQ29udGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAZGVzY3JpcHRpb24gSW52b2tlIGEgbWV0aG9kIGNsYXNzIHdpdGhvdXQgYSBjb250ZXh0XG4gKi9cbmV4cG9ydHMudW5rbm93bkNvbnRleHQgPSBmdW5jdGlvbiB1bmtub3duQ29udGV4dChjbGFzc05hbWUsIG1ldGhvZE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludm9rZSB0aGUgYmVoYXZpb3IgJ1wiICtcbiAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgXCInIG9uIHRoZSBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJyB3aXRob3V0IGEgdmFsaWQgY29udGV4dFwiXG4gICk7XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIHdvcmtmbG93XG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwuXG4gKiBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwgbG9hZHMgc2NoZW1hcyBhbmQgdHlwZXMsIGFuYWx5emVzIHRoZW0gYW5kXG4gKiBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBEYXRhYmFzZUNvbGxlY3Rpb25zLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgSUQgPSAnX2lkJztcbnZhciBOQU1FID0gJ19uYW1lJztcbnZhciBERVNDUklQVElPTiA9ICdfZGVzY3JpcHRpb24nO1xudmFyIElOSEVSSVRTID0gJ19pbmhlcml0JztcbnZhciBDTEFTUyA9ICdfY2xhc3MnO1xudmFyIENPUkUgPSAnX2NvcmUnO1xudmFyIE1FVEhPRF9UWVBFID0gJ21ldGhvZCc7XG52YXIgRVZFTlRfVFlQRSA9ICdldmVudCc7XG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eSc7XG52YXIgTElOS19UWVBFID0gJ2xpbmsnO1xudmFyIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJztcbnZhciBpbnRlcm5hbFR5cGVzID0gWydwcm9wZXJ0eScsICdjb2xsZWN0aW9uJywgJ2xpbmsnLCAnbWV0aG9kJywgJ2V2ZW50J107XG52YXIgaW50ZXJuYWxOYW1lcyA9IFtcbiAgJ19pZCcsXG4gICdfbmFtZScsXG4gICdfaW5oZXJpdCcsXG4gICdfZGVzY3JpcHRpb24nLFxuICAnX2NsYXNzJyxcbiAgJ19jb3JlJ1xuXTtcbnZhciBkZWZhdWx0VHlwZXMgPSBbXG4gICdib29sZWFuJyxcbiAgJ3N0cmluZycsXG4gICdudW1iZXInLFxuICAnb2JqZWN0JyxcbiAgJ2Z1bmN0aW9uJyxcbiAgJ2FycmF5JyxcbiAgJ2RhdGUnLFxuICAnYW55J1xuXTtcbnZhciBzdG9yZSA9IHtcbiAgbWV0YWRlZjoge30sXG4gIGluaGVyaXRhbmNlOiB7fSxcbiAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgc2NoZW1hczoge30sXG4gIGNvbXBpbGVkU2NoZW1hczoge30sXG4gIG1vZGVsczoge30sXG4gIGdlbmVyYXRlZE1vZGVsczoge30sXG4gIHN0YXRlczoge30sXG4gIHR5cGU6IHt9XG59O1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGlzSW50ZXJuYWxOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBpcyBuYW1lIGFuIGludGVybmFsIG5hbWVcbiAqL1xuZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWUobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICBpZiAoaW50ZXJuYWxOYW1lcy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSB0aGUgbW9kZWxzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTW9kZWxzKCkge1xuICB2YXIgYXR0ID0gJyc7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBzY2hlbWFOYW1lID0gJyc7XG4gIHZhciBzY2hlbWEgPSB7fTtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxQYXJlbnQgPSBudWxsO1xuICB2YXIgbW9kZWxFeHQgPSBudWxsO1xuICB2YXIgbW9kZWxEZWYgPSBudWxsO1xuICB2YXIgbW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IHt9O1xuICB2YXIgbWVyZ2VkTW9kZWwgPSB7fTtcbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgbmJBbmNlc3RvcnMgPSAwO1xuICB2YXIgc29ydEluaGVyaXRUcmVlID0gW107XG5cbiAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgZm9yIChzY2hlbWFOYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tzY2hlbWFOYW1lXTtcblxuICAgIC8vIHNldCBtb2RlbCBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgbW9kZWwgPSB7XG4gICAgICBfbmFtZTogc2NoZW1hLl9uYW1lXG4gICAgfTtcblxuICAgIC8vIHNldCBfY29yZVxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9jb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbW9kZWwuX2NvcmUgPSBzY2hlbWEuX2NvcmU7XG4gICAgfVxuXG4gICAgLy8gc2V0IGluaGVyaXRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEuX2luaGVyaXQpKSB7XG4gICAgICBtb2RlbC5faW5oZXJpdCA9IHNjaGVtYS5faW5oZXJpdDtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3NcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5fY2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtb2RlbC5fY2xhc3MgPSBzY2hlbWEuX2NsYXNzO1xuICAgIH1cblxuICAgIC8vIHNldCBkZXNjcmlwdGlvblxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vZGVsLl9kZXNjcmlwdGlvbiA9IHNjaGVtYS5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgdmFsaWQgbmFtZVxuICAgIGZvciAoYXR0IGluIHNjaGVtYSkge1xuICAgICAgaWYgKCFpc0ludGVybmFsTmFtZShhdHQpICYmIGF0dC5pbmRleE9mKCdfJykgPT09IDApIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lKHNjaGVtYS5fbmFtZSwgYXR0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAgc2V0IG1vZGVsIGRlZmF1bHQgdmFsdWVzXG4gICAgZm9yIChhdHQgaW4gc2NoZW1hKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ3Byb3BlcnR5JzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdsaW5rJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogJ19Db21wb25lbnQnLFxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dCxcbiAgICAgICAgICAgIGxhYmVsOiBhdHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnbWV0aG9kJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYW0xJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJhbTInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFtMycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZXN1bHQ6ICdhbnknLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdldmVudCc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFtMScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYW0yJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJhbTMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdjb2xsZWN0aW9uJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogWydfQ29tcG9uZW50J10sXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZShhdHQpKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRTY2hlbWFQcm9wZXJ0eShzY2hlbWEuX25hbWUsIGF0dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbC5fbmFtZV0gPSBtb2RlbDtcbiAgfVxuXG4gIC8vIG1vZGVscyB0byBvdmVycmlkZVxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcbiAgICBtb2RlbEV4dCA9IHN0b3JlLm1vZGVsc1tuYW1lXTtcbiAgICBpZiAobW9kZWxFeHQpIHtcbiAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxFeHQsIG1vZGVsKTtcbiAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluaGVyaXRhbmNlXG4gIHNvcnRJbmhlcml0VHJlZSA9IHNvcnRJbmhlcml0YW5jZVRyZWUoKTtcblxuICBuYkFuY2VzdG9ycyA9IHNvcnRJbmhlcml0VHJlZS5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBuYkFuY2VzdG9yczsgaSsrKSB7XG4gICAgbW9kZWxOYW1lID0gc29ydEluaGVyaXRUcmVlW2ldO1xuICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG5cbiAgICBpZiAobW9kZWwpIHtcbiAgICAgIHBhcmVudHMgPSBleHBvcnRzLmdldFBhcmVudHMobW9kZWxOYW1lKTtcbiAgICAgIHBhcmVudHMucmV2ZXJzZSgpO1xuXG4gICAgICB2YXIgbW9kZWxUb01lcmdlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtb2RlbCkpO1xuXG4gICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICBuYW1lID0gcGFyZW50c1tqXTtcbiAgICAgICAgbW9kZWxQYXJlbnQgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgICAgIGlmIChtb2RlbFBhcmVudCkge1xuICAgICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxQYXJlbnQsIG1vZGVsKTtcbiAgICAgICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGxhc3QgaW5oZXJpdFxuICAgICAgLy8gaXMgdGhlIG92ZXJyaWRlbiBtb2RlbFxuICAgICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgIGlmIChtb2RlbEV4dCkge1xuICAgICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsRXh0LCBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gc2F2ZVxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICRkYi5fR2VuZXJhdGVkTW9kZWwuaW5zZXJ0KG1vZGVsRGVmKTtcblxuICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICRsb2cuZ2VuZXJhdGVNb2RlbChtb2RlbE5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgbG9hZEluTWVtb3J5XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIExvYWQgc2NoZW1hcyBhbmQgdHlwZXMgaW4gbWVtb3J5XG4gKi9cbmZ1bmN0aW9uIGxvYWRJbk1lbW9yeSgpIHtcbiAgdmFyIHNjaGVtYXMgPSBbXTtcbiAgdmFyIHR5cGVzID0gW107XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgbW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IFtdO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgaW5oZXJpdCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIC8vIGluaXQgc3RvcmVcbiAgc3RvcmUuaW5oZXJpdGFuY2UgPSB7fTtcbiAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlID0ge307XG4gIHN0b3JlLnNjaGVtYXMgPSB7fTtcbiAgc3RvcmUuY29tcGlsZWRTY2hlbWFzID0ge307XG4gIHN0b3JlLm1vZGVscyA9IHt9O1xuICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMgPSB7fTtcbiAgc3RvcmUuc3RhdGVzID0ge307XG4gIHN0b3JlLnR5cGUgPSB7fTtcblxuICAvLyBsb2FkIHNjaGVtYXNcbiAgc2NoZW1hcyA9ICRkYi5fU2NoZW1hLmZpbmQoe30pO1xuXG4gIGxlbmd0aCA9IHNjaGVtYXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBzY2hlbWEgPSBzY2hlbWFzW2ldO1xuXG4gICAgbmFtZSA9IHNjaGVtYVtOQU1FXTtcbiAgICBpbmhlcml0ID0gc2NoZW1hW0lOSEVSSVRTXTtcblxuICAgIHN0b3JlLnNjaGVtYXNbbmFtZV0gPSBzY2hlbWE7XG4gICAgaWYgKGluaGVyaXQpIHtcbiAgICAgIHN0b3JlLmluaGVyaXRhbmNlW25hbWVdID0gaW5oZXJpdDtcbiAgICB9XG5cbiAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgJGxvZy5sb2FkU2NoZW1hKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvYWQgbW9kZWxzXG4gIG1vZGVscyA9ICRkYi5fTW9kZWwuZmluZCh7fSk7XG5cbiAgbGVuZ3RoID0gbW9kZWxzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbW9kZWwgPSBtb2RlbHNbaV07XG4gICAgbmFtZSA9IG1vZGVsW05BTUVdO1xuXG4gICAgc3RvcmUubW9kZWxzW25hbWVdID0gbW9kZWw7XG5cbiAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAkbG9nLmxvYWRNb2RlbChuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBsb2FkIHR5cGVzXG4gIHR5cGVzID0gJGRiLl9UeXBlLmZpbmQoe30pO1xuXG4gIGxlbmd0aCA9IHR5cGVzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdHlwZSA9IHR5cGVzW2ldO1xuICAgIHN0b3JlLnR5cGVbdHlwZS5uYW1lXSA9IHR5cGU7XG5cbiAgICBpZiAoIXR5cGUuY29yZSkge1xuICAgICAgJGxvZy5sb2FkVHlwZSh0eXBlLm5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlSW5oZXJpdGFuY2VUcmVlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSB0aGUgaW5oZXJpdGFuY2UgdHJlZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBjM2xpbmVyaXphdGlvbiA9IFtdO1xuICB2YXIgYW5jZXN0b3JzID0gW107XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBhbGwgdGhlIGFycmF5cyBhcmUgZW1wdHlcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uICBDaGVjayBpZiB3ZSBoYXZlIGZpbmlzZWhkIHRvIGxpbmVyaXplXG4gICAqL1xuICBmdW5jdGlvbiBfaXNFbXB0eShlbHRzKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWx0c1tpXS5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVsdCBlbGVtZW50IHRvIHJlbW92ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbiBlbHQgZnJvbSBhbGwgdGhlIGFycmF5c1xuICAgKi9cbiAgZnVuY3Rpb24gX3JlbW92ZUNhbmRpZGF0ZShlbHQsIGVsdHMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWx0c1tpXS5pbmRleE9mKGVsdCkgPT09IDApIHtcbiAgICAgICAgYXJyID0gZWx0c1tpXTtcbiAgICAgICAgYXJyLnJldmVyc2UoKTtcbiAgICAgICAgYXJyLnBvcCgpO1xuICAgICAgICBhcnIucmV2ZXJzZSgpO1xuICAgICAgICBlbHRzW2ldID0gYXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc0NhbmRpZGF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWx0IGVsZW1lbnQgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBhIGdvb2QgY2FuZGlkYXRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgdGhlIGVsZW1lbnQgaXMgYSBnb29kIGNhbmRpZGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzQ2FuZGlkYXRlKGVsdCwgZWx0cykge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGVsdHNbaV0uaW5kZXhPZihlbHQpID4gMCkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2ZpbmRDYW5kaWRhdGVcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgY29udGFpbmluZyB0aGUgY2FuZGlkYXRlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBGaW5kIGEgY2FuZGlkYXRlIGFuZCByZXR1cm4gaXQuXG4gICAqL1xuICBmdW5jdGlvbiBfZmluZENhbmRpZGF0ZShlbHRzKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKF9pc0NhbmRpZGF0ZShlbHRzW2ldWzBdLCBlbHRzKSkge1xuICAgICAgICByZXN1bHQucHVzaChlbHRzW2ldWzBdKTtcbiAgICAgICAgX3JlbW92ZUNhbmRpZGF0ZShlbHRzW2ldWzBdLCBlbHRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbWVyZ2VcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiBjYW5kaWRhdGVzIHJldHVybmVkIGJ5IHRoZSBtZXJnZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gTWVyZ2UgdGhlIGFycmF5c1xuICAgKi9cbiAgZnVuY3Rpb24gX21lcmdlKGVsdHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGNhbmRpZGF0ZXMgPSBbXTtcblxuICAgIGNhbmRpZGF0ZXMgPSBfZmluZENhbmRpZGF0ZShlbHRzKTtcbiAgICB3aGlsZSAoY2FuZGlkYXRlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcyA9IF9maW5kQ2FuZGlkYXRlKGVsdHMpO1xuICAgIH1cblxuICAgIGlmICghX2lzRW1wdHkoZWx0cykpIHtcbiAgICAgICRsb2cuY3ljbGljRGVwZW5kZW5jeSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2xpbmVyaXplXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGVsZW1lbnRcbiAgICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIGNhbmRpZGF0ZXNcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIFN0YXJ0IHRoZSBsaW5lcmllYXRpb24gZnJvbSBhbiBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBfbGluZXJpemUobmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgX2NoZWNrQ3ljbGljRGVwXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3lcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NoZWNrQ3ljbGljRGVwKG5hbWUsIGl0ZW0pIHtcbiAgICAgIHZhciBpc0N5Y2xpY0RlYiA9IGZhbHNlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc3RvcmUuaW5oZXJpdGFuY2VbaXRlbV0pICYmXG4gICAgICAgIHN0b3JlLmluaGVyaXRhbmNlW2l0ZW1dLmluZGV4T2YobmFtZSkgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgJGxvZy5jeWNsaWNEZXBlbmRlbmN5KG5hbWUpO1xuICAgICAgICBpc0N5Y2xpY0RlYiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNDeWNsaWNEZWI7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0pKSB7XG4gICAgICBwYXJlbnRzID0gc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0uc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGxvZy5taXNzaW5nU2NoZW1hKG5hbWUpO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKF9jaGVja0N5Y2xpY0RlcChuYW1lLCBwYXJlbnRzW2ldKSkge1xuICAgICAgICBwYXJlbnRzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gW25hbWVdLmNvbmNhdChfbWVyZ2UocGFyZW50cy5tYXAoX2xpbmVyaXplKS5jb25jYXQoW3BhcmVudHNdKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuaW5oZXJpdGFuY2UpIHtcbiAgICBjM2xpbmVyaXphdGlvbiA9IF9saW5lcml6ZShuYW1lKTtcbiAgICBhbmNlc3RvcnMgPSBjM2xpbmVyaXphdGlvbi5yZXZlcnNlKCk7XG4gICAgYW5jZXN0b3JzLnBvcCgpO1xuICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoKSB7XG4gICAgICBzdG9yZS5pbmhlcml0YW5jZVRyZWVbbmFtZV0gPSBhbmNlc3RvcnM7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBleHRlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYSB0byBleHRlbmRcbiAqIEByZXR1cm5zIHtKU09OfSBvYmplY3QgZXh0ZW5kZWQgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEV4dGVuZCBhIHNjaGVtYSB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKG5hbWUpIHtcbiAgdmFyIHNvbkV4dGVuZCA9IHt9O1xuICB2YXIgc29uID0gc3RvcmUuc2NoZW1hc1tuYW1lXTtcbiAgdmFyIGFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGFuY2VzdG9yID0gbnVsbDtcbiAgdmFyIHByb3AgPSAnJztcblxuICBpZiAoYW5jZXN0b3JzKSB7XG4gICAgbGVuZ3RoID0gYW5jZXN0b3JzLmxlbmd0aDtcbiAgICBhbmNlc3RvcnMucmV2ZXJzZSgpO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFuY2VzdG9yID0gc3RvcmUuc2NoZW1hc1thbmNlc3RvcnNbaV1dO1xuICAgIGZvciAocHJvcCBpbiBhbmNlc3Rvcikge1xuICAgICAgaWYgKHByb3AuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgIHNvbkV4dGVuZFtwcm9wXSA9IGFuY2VzdG9yW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmb3IgKHByb3AgaW4gc29uKSB7XG4gICAgc29uRXh0ZW5kW3Byb3BdID0gc29uW3Byb3BdO1xuICB9XG4gIHJldHVybiBzb25FeHRlbmQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBzb3J0SW5oZXJpdGFuY2VUcmVlXG4gKiBAcmV0dXJucyB7QXJyYXl9IHNvcnRlZCBJbmhlcml0YW5jZVRyZWUgc3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBzb3J0ZWQgSW5oZXJpdGFuY2VUcmVlIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBzb3J0SW5oZXJpdGFuY2VUcmVlKCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciB0ZW1wID0ge307XG4gIHZhciBrZXlzID0gW107XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG5iQW5jZXN0b3JzID0gMDtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZVRyZWUpIHtcbiAgICBuYkFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVttb2RlbE5hbWVdLmxlbmd0aDtcbiAgICBpZiAodHlwZW9mIHRlbXBbbmJBbmNlc3RvcnNdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGVtcFtuYkFuY2VzdG9yc10gPSBbXTtcbiAgICB9XG4gICAgdGVtcFtuYkFuY2VzdG9yc10ucHVzaChtb2RlbE5hbWUpO1xuICB9XG5cbiAga2V5cyA9IE9iamVjdC5rZXlzKHRlbXApLnNvcnQoKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdGVtcFtpbmRleF0uZm9yRWFjaChmdW5jdGlvbihtb2RlbCkge1xuICAgICAgcmVzdWx0LnB1c2gobW9kZWwpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYXNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIHRoZSBtb2RlbHNcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVNjaGVtYXMoKSB7XG4gIHZhciBuYW1lID0gJyc7XG5cbiAgZm9yIChuYW1lIGluIHN0b3JlLnNjaGVtYXMpIHtcbiAgICBpZiAoIXN0b3JlLnNjaGVtYXNbbmFtZV0uX2NvcmUpIHtcbiAgICAgICRsb2cuY29tcGlsZVNjaGVtYShuYW1lKTtcbiAgICB9XG5cbiAgICBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV0gPSBleHRlbmQobmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrTW9kZWxzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgYWxsIHRoZSBtb2RlbHMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGVpciBzY2hlbWFzXG4gKi9cbmZ1bmN0aW9uIGNoZWNrTW9kZWxzKCkge1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgY2xhc3NEZWYgPSBudWxsO1xuICB2YXIgc2NoZW1hID0gJyc7XG5cbiAgZm9yIChuYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIGNsYXNzRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICAgIGlmIChjbGFzc0RlZikge1xuICAgICAgc2NoZW1hID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICAgICAgaWYgKHNjaGVtYSkge1xuICAgICAgICBpZiAoIWNsYXNzRGVmLl9jb3JlKSB7XG4gICAgICAgICAgJGxvZy5jaGVja01vZGVsKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrSW1wKGNsYXNzRGVmLCBzY2hlbWEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5taXNzaW5nSW1wbGVtZW50YXRpb24obmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTdGF0ZXNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgc3RhdGVzIG9mIGEgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGdldFN0YXRlcygpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciB0eXBlID0gJyc7XG4gIHZhciBzdGF0ZXMgPSBbXTtcbiAgdmFyIGF0dHJpYnV0ZSA9ICcnO1xuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5jb21waWxlZFNjaGVtYXMpIHtcbiAgICBzdGF0ZXMgPSBbXTtcbiAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgaWYgKHNjaGVtYSkge1xuICAgICAgZm9yIChhdHRyaWJ1dGUgaW4gc2NoZW1hKSB7XG4gICAgICAgIHR5cGUgPSBzY2hlbWFbYXR0cmlidXRlXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGF0dHJpYnV0ZS5pbmRleE9mKCdfJykgIT09IDAgJiZcbiAgICAgICAgICBpbnRlcm5hbFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc3RvcmUuc3RhdGVzW25hbWVdID0gc3RhdGVzO1xuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja0ltcFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0RlZiBzY2hlbWEgdG8gdGVzdFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0ltcCBzY2hlbWEgdG8gdmFsaWRhdGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBpdHMgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGNoZWNrSW1wKGNsYXNzRGVmLCBjbGFzc0ltcCkge1xuICB2YXIgcHJvcGVydHkgPSAnJztcbiAgdmFyIHZhbHVlID0gbnVsbDtcblxuICBmb3IgKHByb3BlcnR5IGluIGNsYXNzSW1wKSB7XG4gICAgaWYgKFxuICAgICAgcHJvcGVydHkgIT09IElEICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgcHJvcGVydHkgIT09IERFU0NSSVBUSU9OICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBDTEFTUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENPUkVcbiAgICApIHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NEZWZbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YWx1ZSA9IGNsYXNzRGVmW3Byb3BlcnR5XTtcbiAgICAgICAgaWYgKCFjaGVja1NjaGVtYSh2YWx1ZSwgY2xhc3NJbXBbcHJvcGVydHldKSkge1xuICAgICAgICAgICRsb2cuaW52YWxpZFR5cGVJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgaWYgYWxsIHByb3BlcnRpZXMgYXJlIHRoZXJlXG4gIGZvciAocHJvcGVydHkgaW4gY2xhc3NEZWYpIHtcbiAgICBpZiAoXG4gICAgICBwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gREVTQ1JJUFRJT04gJiZcbiAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ09SRVxuICAgICkge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc0ltcFtwcm9wZXJ0eV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICRsb2cudW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltOQU1FXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja1NjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlIHR5cGUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgYSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICovXG5mdW5jdGlvbiBjaGVja1NjaGVtYSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICBpZiAoaGFzVHlwZSh0eXBlLCAnc3RyaW5nJykgJiYgZGVmYXVsdFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgdHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja0N1c3RvbVNjaGVtYVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhIHZhbHVlIGhhcyBjb3JyZWN0IGN1c3RvbSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlTmFtZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIHR5cGVEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoIWhhc1R5cGUodHlwZURlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgaWYgKCFoYXNUeXBlKHZhbHVlLCAndW5kZWZpbmVkJykpIHtcbiAgICAgIGlmICh0eXBlRGVmLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWhhc1R5cGUodHlwZURlZi5zY2hlbWEsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkU2NoZW1hKHZhbHVlW2ldLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuaXNWYWxpZFR5cGUodmFsdWVbaV0sIHR5cGVEZWYudHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkU2NoZW1hKHZhbHVlLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaW5pdERiU3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEluaXQgdGhlIERhdGFiYXNlIHN0dWN0dXJlXG4gKi9cbmZ1bmN0aW9uIGluaXREYlN0cnVjdHVyZSgpIHtcbiAgJGRiLmNvbGxlY3Rpb24oJ19Mb2dnZXInKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19TY2hlbWEnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19Nb2RlbCcpO1xuICAkZGIuY29sbGVjdGlvbignX0dlbmVyYXRlZE1vZGVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfQ2xhc3NJbmZvJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfQmVoYXZpb3InKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19TdGF0ZScpO1xuICAkZGIuY29sbGVjdGlvbignX1R5cGUnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19NZXNzYWdlJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfQ2hhbm5lbCcpO1xuICAkZGIuY29sbGVjdGlvbignX0xvZycpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlRGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIHRoZSBEYXRhYmFzZSBzdHJ1Y3R1cmUgKGkuZS4gRGF0YWJhc2VDb2xsZWN0aW9uKVxuICovXG5mdW5jdGlvbiBjcmVhdGVEYlN0cnVjdHVyZSgpIHtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxEZWYgPSB7fTtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiAkZGJbbW9kZWxEZWZbTkFNRV1dID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZVxuICAgICkge1xuICAgICAgJGRiLmNvbGxlY3Rpb24obW9kZWxEZWZbTkFNRV0pO1xuXG4gICAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAgICRsb2cuY3JlYXRlQ29sbGVjdGlvbihtb2RlbERlZltOQU1FXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYWxsIHRoZSBjbGFzc2VzIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcygpIHtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxEZWYgPSB7fTtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmIChtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAkY29tcG9uZW50LmNyZWF0ZSh7XG4gICAgICAgIG1vZGVsOiBtb2RlbE5hbWVcbiAgICAgIH0pO1xuICAgICAgaWYgKCFtb2RlbERlZi5fY29yZSkge1xuICAgICAgICAkbG9nLmNyZWF0ZUNsYXNzKG1vZGVsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc0luZm9cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGFsbCB0aGUgQ2xhc3NJbmZvIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzc0luZm8oKSB7XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG1vZGVsRGVmID0ge307XG4gIHZhciBuYW1lID0gJyc7XG5cbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBuYW1lID0gbW9kZWxEZWZbTkFNRV0gKyAnSW5mbyc7XG5cbiAgICBpZiAoXG4gICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlICYmXG4gICAgICBleHBvcnRzLmluaGVyaXRGcm9tKG1vZGVsRGVmW05BTUVdLCAnX0NvbXBvbmVudCcpXG4gICAgKSB7XG4gICAgICBpZiAoISRjb21wb25lbnQuZ2V0KG5hbWUpKSB7XG4gICAgICAgICRkYi5fQ2xhc3NJbmZvLmluc2VydCh7XG4gICAgICAgICAgX2lkOiBuYW1lLFxuICAgICAgICAgIHNjaGVtYTogc3RvcmUuY29tcGlsZWRTY2hlbWFzW21vZGVsTmFtZV0sXG4gICAgICAgICAgbW9kZWw6IG1vZGVsRGVmXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGRiLl9DbGFzc0luZm8udXBkYXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9pZDogbmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgX2lkOiBuYW1lLFxuICAgICAgICAgICAgc2NoZW1hOiBzdG9yZS5jb21waWxlZFNjaGVtYXNbbW9kZWxOYW1lXSxcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbERlZlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFJlYWxDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gcmVhbCBuYW1lXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmVhbCBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGdldFJlYWxDbGFzc05hbWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFJlYWxUeXBlTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgdHlwZVxuICovXG5mdW5jdGlvbiBnZXRSZWFsVHlwZU5hbWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2UoJ3snLCAnJylcbiAgICAucmVwbGFjZSgnfScsICcnKVxuICAgIC50cmltKCk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc0N1c3RvbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIGN1c3RvbSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzQ3VzdG9tVHlwZSh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID1cbiAgICBoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykgJiZcbiAgICBkZWZhdWx0VHlwZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmXG4gICAgIWV4cG9ydHMuaXNDbGFzc05hbWUodmFsdWUpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc1R5cGVSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIHJlZmVyZW5jZSBhIHR5cGUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gaXNUeXBlUmVmZXJlbmNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCd7JykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNNb2RlbFBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIG1vZGVsIHBhdGhcbiAqL1xuZnVuY3Rpb24gaXNNb2RlbFBhdGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTE7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZWFsVHlwZVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gdHlwZSBvZiB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIHR5cGUgb2YgYSB2YWx1ZVxuICovXG5mdW5jdGlvbiBnZXRSZWFsVHlwZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknO1xuICB9IGVsc2Uge1xuICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSAnYW55Jykge1xuICAgIHR5cGUgPSAnYW55JztcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0Q2xhc3NOYW1lXG4gKiBAcGFyYW0ge3R5cGV9IG9iaiBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdFxuICovXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUob2JqKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBpZiAob2JqICYmIG9iai5jb25zdHJ1Y3Rvcikge1xuICAgIHJlc3VsdCA9IG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGVudW1WYWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgdmFsaWQgZW51bSB2YWx1ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bVZhbHVlKHZhbHVlLCBlbnVtVmFsdWUpIHtcbiAgcmV0dXJuIGVudW1WYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG59XG5cbi8qKlxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHBhcmFtIHt0eXBlfSB0eXBlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpcyB2YWx1ZSBoYXMgdHlwZSAndHlwZSdcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHZhbHVlIGhhcyB0aGUgc3BlY2lmaWVkIHR5cGVcbiAqL1xuZnVuY3Rpb24gaGFzVHlwZSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIGRhdGUgPSBudWxsO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICByZXN1bHQgPSAhaXNOYU4oZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW55JzpcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0ID0gdHlwZSA9PT0gdHlwZW9mIHZhbHVlO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBoYXMgZm9yIHR5cGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGhhcyBhIHNwZWNpZmljIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tUeXBlKG5hbWUsIGlkLCB0eXBlKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgdmFyIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tpZF07XG4gIHZhciBhdHRyaWJ1dGVUeXBlID0gJyc7XG5cbiAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbTkFNRV0pIHtcbiAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbY29tcG9uZW50U2NoZW1hW05BTUVdXTtcbiAgfVxuXG4gIGlmIChjb21wb25lbnRTY2hlbWEpIHtcbiAgICBhdHRyaWJ1dGVUeXBlID0gY29tcG9uZW50U2NoZW1hW25hbWUuc3BsaXQoJy4nKVswXV07XG4gICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIHNvdXJjZSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgdGFyZ2V0IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBtZXJnZSBhbHNvIHByaXZhdGUgcHJvcGVydGllc1xuICogQHJldHVybnMge09iamVjdH0gbWVyZ2VkIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIE1lcmdlIHR3byBzY2hlbWFzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHNvdXJjZSwgdGFyZ2V0LCBhbGwpIHtcbiAgdmFyIHByb3BOYW1lID0gJyc7XG4gIHZhciByZXN1bHQgPSB0YXJnZXQ7XG5cbiAgZm9yIChwcm9wTmFtZSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgIHJlc3VsdFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaW5pdENvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG9iamVjdCB0byBjb25maWd1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIG9iamVjdCB0byBjb25maWd1cmVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNNZXRob2QgaXMgYSBtZXRob2RcbiAqIEByZXR1cm5zIHtPYmplY3R9IGEgY29uZmlndXJhdGlvblxuICogQGRlc2NyaXB0aW9uIEluaXQgYSBjb25maWd1cmF0aW9uIGRlcGVuZGluZyBvZiB0aGUgY29udGV4dFxuICovXG5mdW5jdGlvbiBpbml0Q29uZmlndXJhdGlvbihuYW1lLCB0eXBlLCBpc01ldGhvZCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIHR5cGVEZWYgPSBbXTtcbiAgdmFyIHNjaGVtYURlZiA9IFtdO1xuICB2YXIgZGVmYXVsdFZhbHVlID0gJyc7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBuYW1lID09PSAnPT4nOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZSA9PT0gJ2Jvb2xlYW4nOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlID09PSAnc3RyaW5nJzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUgPT09ICdudW1iZXInOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUgPT09ICdvYmplY3QnOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDoge31cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZSA9PT0gJ2FycmF5JzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlID09PSAnZGF0ZSc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJzE5NzAtMDEtMDFUMDA6MDA6MDAuMDAwWidcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJzE5NzAtMDEtMDFUMDA6MDA6MDAuMDAwWidcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUgPT09ICdhbnknOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvLyBsaW5rIC8gY3VzdG9tIHR5cGVcbiAgICBjYXNlIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJzpcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHt9O1xuXG4gICAgICAvLyBjYXNlIG9mIGVudW1lcmF0aW9uXG4gICAgICB0eXBlRGVmID0gJGRiLl9UeXBlLmZpbmQoe1xuICAgICAgICBuYW1lOiB0eXBlXG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlRGVmLmxlbmd0aCkge1xuICAgICAgICBpZiAodHlwZURlZlswXS52YWx1ZSkge1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHR5cGVEZWZbMF0udmFsdWVbMF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2FzZSBvZiBsaW5rXG4gICAgICBzY2hlbWFEZWYgPSAkZGIuX1NjaGVtYS5maW5kKHtcbiAgICAgICAgX25hbWU6IHR5cGVcbiAgICAgIH0pO1xuICAgICAgaWYgKHNjaGVtYURlZi5sZW5ndGgpIHtcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogZGVmYXVsdFZhbHVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBkZWZhdWx0VmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdib29sZWFuJzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBbJ2Jvb2xlYW4nXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogWydib29sZWFuJ10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdzdHJpbmcnOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdudW1iZXInOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnbnVtYmVyJ10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6IFsnbnVtYmVyJ10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdvYmplY3QnOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnb2JqZWN0J10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6IFsnb2JqZWN0J10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdkYXRlJzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBbJ2RhdGUnXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogWydkYXRlJ10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdhbnknOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnYW55J10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6IFsnYW55J10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheSc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNvbXBpbGVDb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge0pTT059IG1vZGVsIGRlZmluaXRpb24gb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBjb21waWxlZCBtb2RlbFxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIGZ1bGwgbW9kZWwgZGVmaW5pdGlvbiBmcm9tIGEgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUNvbmZpZ3VyYXRpb24obW9kZWwpIHtcbiAgdmFyIHByb3BOYW1lID0gJyc7XG4gIHZhciBwYXJhbVByb3BOYW1lID0gJyc7XG4gIHZhciBjb25maWd1cmF0aW9uID0gJyc7XG4gIHZhciBtZXRob2RDb25mID0ge307XG5cbiAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vZGVsKSk7XG5cbiAgZm9yIChwcm9wTmFtZSBpbiBtb2RlbCkge1xuICAgIGlmIChtb2RlbC5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgLy8gcHJvcGVydHkgdHlwZVxuICAgICAgICBjYXNlIHR5cGVvZiBtb2RlbFtwcm9wTmFtZV0gPT09ICdzdHJpbmcnOlxuICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXSA9IGluaXRDb25maWd1cmF0aW9uKHByb3BOYW1lLCBtb2RlbFtwcm9wTmFtZV0sIGZhbHNlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBwcm9wZXJ0eSBjb25maWd1cmF0aW9uXG4gICAgICAgIGNhc2UgdHlwZW9mIG1vZGVsW3Byb3BOYW1lXSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICB0eXBlb2YgbW9kZWxbcHJvcE5hbWVdWyc9PiddID09PSAndW5kZWZpbmVkJzpcbiAgICAgICAgICBtb2RlbFtwcm9wTmFtZV0gPSBtZXJnZShcbiAgICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXSxcbiAgICAgICAgICAgIGluaXRDb25maWd1cmF0aW9uKHByb3BOYW1lLCBtb2RlbFtwcm9wTmFtZV0udHlwZSB8fCAnYW55JywgZmFsc2UpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBtZXRob2QgLyBldmVudFxuICAgICAgICBjYXNlIHR5cGVvZiBtb2RlbFtwcm9wTmFtZV0gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgdHlwZW9mIG1vZGVsW3Byb3BOYW1lXVsnPT4nXSAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgbWV0aG9kQ29uZiA9IHtcbiAgICAgICAgICAgIHBhcmFtczogW10sXG4gICAgICAgICAgICByZXN1bHQ6ICdhbnknXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZvciAocGFyYW1Qcm9wTmFtZSBpbiBtb2RlbFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICAgIC8vIHBhcmFtZXRlciB0eXBlXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmFtUHJvcE5hbWUgPT09ICc9PicpIHtcbiAgICAgICAgICAgICAgICBtZXRob2RDb25mLnJlc3VsdCA9IG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXRob2RDb25mLnBhcmFtcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgaW5pdENvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtUHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBhcmFtZXRlciBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgbWV0aG9kQ29uZi5wYXJhbXMucHVzaChcbiAgICAgICAgICAgICAgICBtZXJnZShtb2RlbFtwcm9wTmFtZV1bcGFyYW1Qcm9wTmFtZV0pLFxuICAgICAgICAgICAgICAgIGluaXRDb25maWd1cmF0aW9uKFxuICAgICAgICAgICAgICAgICAgcGFyYW1Qcm9wTmFtZSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXS50eXBlIHx8ICdhbnknLFxuICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbW9kZWxbcHJvcE5hbWVdID0gbWV0aG9kQ29uZjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGVsO1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2Qgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gc2NoZW1hIGRlZmluaXRpb24gb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG5ldyBzY2hlbWEgdG8gdGhlIG1ldGFtb2RlbFxuICovXG5leHBvcnRzLnNjaGVtYSA9IGZ1bmN0aW9uIHNjaGVtYShuYW1lLCBzY2hlbWEpIHtcbiAgdmFyIGlkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgc2NoZW1hTmFtZSA9ICcnO1xuICB2YXIgbWVyZ2VkU2NoZW1hID0ge307XG4gIHZhciBzY2hlbWFzID0gW107XG5cbiAgaWYgKHR5cGVvZiBzY2hlbWEgPT09ICd1bmRlZmluZWQnIHx8IE9iamVjdC5rZXlzKHNjaGVtYSkubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgc2NoZW1hID0ge307XG4gICAgICBzY2hlbWFbTkFNRV0gPSBuYW1lO1xuICAgICAgc2NoZW1hTmFtZSA9IG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmFtZSkpO1xuICAgICAgc2NoZW1hTmFtZSA9IHNjaGVtYVtOQU1FXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzY2hlbWEpKTtcbiAgICBzY2hlbWFbTkFNRV0gPSBuYW1lO1xuICAgIHNjaGVtYU5hbWUgPSBzY2hlbWFbTkFNRV07XG4gIH1cblxuICBpZiAodHlwZW9mIHNjaGVtYVtJRF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2NoZW1hW0lEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9XG4gIGlmICh0eXBlb2Ygc2NoZW1hW0lOSEVSSVRTXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzY2hlbWFbSU5IRVJJVFNdID0gWydfQ29tcG9uZW50J107XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVtb3ZlRHVwbGljYXRlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGluaGVyaXRzIGxpc3Qgb2YgcGFyZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlIGR1cGxpY2F0ZSBwYXJlbnRzIGluIHRoZSBsaXN0IG9mIHBhcmVudHNcbiAgICovXG4gIGZ1bmN0aW9uIF9yZW1vdmVEdXBsaWNhdGUoaW5oZXJpdHMpIHtcbiAgICB2YXIgZmlsdGVyZWRMaXN0ID0gW107XG4gICAgdmFyIGxpc3QgPSB7fTtcblxuICAgIGluaGVyaXRzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGNsZWFuTmFtZSA9IG5hbWUudHJpbSgpO1xuICAgICAgaWYgKHR5cGVvZiBsaXN0W2NsZWFuTmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxpc3RbY2xlYW5OYW1lXSA9IGNsZWFuTmFtZTtcbiAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goY2xlYW5OYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZExpc3Q7XG4gIH1cblxuICBzY2hlbWFbSU5IRVJJVFNdID0gX3JlbW92ZUR1cGxpY2F0ZShzY2hlbWFbSU5IRVJJVFNdKTtcblxuICAvLyBjaGVjayBpZiBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICBpZiAoZXhwb3J0cy5pc1ZhbGlkT2JqZWN0KHNjaGVtYSwgc3RvcmUubWV0YWRlZi5zY2hlbWEsIGZhbHNlKSkge1xuICAgIHNjaGVtYXMgPSAkZGIuX1NjaGVtYS5maW5kKHtcbiAgICAgIF9uYW1lOiBzY2hlbWFOYW1lXG4gICAgfSk7XG4gICAgaWYgKHNjaGVtYXMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRTY2hlbWEgPSBtZXJnZShzY2hlbWEsIHNjaGVtYXNbMF0pO1xuICAgICAgJGRiLl9TY2hlbWEudXBkYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgX25hbWU6IHNjaGVtYU5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2VkU2NoZW1hXG4gICAgICApO1xuICAgICAgaWQgPSBzY2hlbWFzWzBdLl9pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gJGRiLl9TY2hlbWEuaW5zZXJ0KHNjaGVtYSk7XG4gICAgICBpZCA9IHJlc3VsdFswXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy5pbnZhbGlkU2NoZW1hKHNjaGVtYVtOQU1FXSk7XG4gIH1cblxuICByZXR1cm4gaWQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge0pTT059IG1vZGVsIGRlZmluaXRpb24gb2YgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbmV3IG1vZGVsIHRvIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5tb2RlbCA9IGZ1bmN0aW9uIG1vZGVsKG5hbWUsIG1vZGVsKSB7XG4gIHZhciBpZCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGluaGVyaXQgPSAnJztcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbWVyZ2VkTW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IFtdO1xuXG4gIGlmICh0eXBlb2YgbW9kZWwgPT09ICd1bmRlZmluZWQnIHx8IE9iamVjdC5rZXlzKG1vZGVsKS5sZW5ndGggPT09IDApIHtcbiAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmFtZSkpO1xuICAgIG1vZGVsTmFtZSA9IG1vZGVsW05BTUVdO1xuICB9IGVsc2Uge1xuICAgIG1vZGVsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtb2RlbCkpO1xuICAgIG1vZGVsW05BTUVdID0gbmFtZTtcbiAgICBtb2RlbCA9IGNvbXBpbGVDb25maWd1cmF0aW9uKG1vZGVsKTtcbiAgICBtb2RlbE5hbWUgPSBtb2RlbFtOQU1FXTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbW9kZWxbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgIG1vZGVsW0lEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgbW9kZWwgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICBpZiAoZXhwb3J0cy5pc1ZhbGlkT2JqZWN0KG1vZGVsLCBzdG9yZS5tZXRhZGVmLm1vZGVsLCBmYWxzZSkpIHtcbiAgICBtb2RlbHMgPSAkZGIuX01vZGVsLmZpbmQoe1xuICAgICAgX25hbWU6IG1vZGVsTmFtZVxuICAgIH0pO1xuICAgIGlmIChtb2RlbHMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsLCBtb2RlbHNbMF0pO1xuICAgICAgJGRiLl9Nb2RlbC51cGRhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBfbmFtZTogbW9kZWxOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlZE1vZGVsXG4gICAgICApO1xuICAgICAgaWQgPSBtb2RlbHNbMF0uX2lkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAkZGIuX01vZGVsLmluc2VydChtb2RlbCk7XG4gICAgICBpZCA9IHJlc3VsdFswXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy5pbnZhbGlkTW9kZWwobW9kZWxbTkFNRV0pO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gdHlwZSB0eXBlIHRvIGFkZFxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG5ldyB0eXBlXG4gKi9cbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uIHR5cGUobmFtZSwgdHlwZSkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciB0eXBlTmFtZSA9ICcnO1xuICB2YXIgdHlwZURlZiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgdHlwZURlZiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmFtZSkpO1xuICAgIHR5cGVOYW1lID0gdHlwZURlZi5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0eXBlKSk7XG4gICAgICB0eXBlRGVmLnZhbHVlID0gdHlwZTtcbiAgICAgIHR5cGVEZWYubmFtZSA9IG5hbWU7XG4gICAgICB0eXBlRGVmLnR5cGUgPSB0eXBlb2YgdHlwZVswXSB8fCAnYW55JztcbiAgICAgIHR5cGVOYW1lID0gdHlwZURlZi5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0eXBlKSk7XG4gICAgICB0eXBlRGVmLnNjaGVtYSA9IGNvbXBpbGVDb25maWd1cmF0aW9uKHR5cGUpO1xuICAgICAgdHlwZURlZi5uYW1lID0gbmFtZTtcbiAgICAgIHR5cGVEZWYudHlwZSA9ICdvYmplY3QnO1xuICAgICAgdHlwZU5hbWUgPSB0eXBlRGVmLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlRGVmW0lEXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlRGVmW0lEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgdHlwZSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gIGlmIChleHBvcnRzLmlzVmFsaWRPYmplY3QodHlwZURlZiwgc3RvcmUubWV0YWRlZi50eXBlKSkge1xuICAgIHJlc3VsdCA9ICRkYi5fVHlwZS5pbnNlcnQodHlwZURlZik7XG4gICAgaWQgPSByZXN1bHRbMF07XG4gIH0gZWxzZSB7XG4gICAgJGxvZy5pbnZhbGlkVHlwZURlZmluaXRpb24odHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluaXRcbiAqIEBkZXNjcmlwdGlvbiBJbml0IHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgZXhwb3J0cy5jbGVhcigpO1xuICBzdG9yZS5tZXRhZGVmID0ge1xuICAgIHNjaGVtYToge1xuICAgICAgX2lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBfbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX2luaGVyaXQ6IHtcbiAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogWydfQ29tcG9uZW50J11cbiAgICAgIH0sXG4gICAgICBfY2xhc3M6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2NvcmU6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgX2lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBfbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX2luaGVyaXQ6IHtcbiAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIF9jbGFzczoge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfY29yZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIF9pZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogWydhbnknXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGluaXREYlN0cnVjdHVyZSgpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7XG4gICAgbWV0YWRlZjoge30sXG4gICAgaW5oZXJpdGFuY2U6IHt9LFxuICAgIGluaGVyaXRhbmNlVHJlZToge30sXG4gICAgc2NoZW1hczoge30sXG4gICAgY29tcGlsZWRTY2hlbWFzOiB7fSxcbiAgICBtb2RlbHM6IHt9LFxuICAgIGdlbmVyYXRlZE1vZGVsczoge30sXG4gICAgc3RhdGVzOiB7fSxcbiAgICB0eXBlOiB7fVxuICB9O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKCkge1xuICAkbG9nLm1vZGVsQ3JlYXRpb25CZWdpbigpO1xuICBsb2FkSW5NZW1vcnkoKTtcbiAgY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCk7XG4gIGNvbXBpbGVTY2hlbWFzKCk7XG4gIGdlbmVyYXRlTW9kZWxzKCk7XG4gIGNoZWNrTW9kZWxzKCk7XG4gIGdldFN0YXRlcygpO1xuICBjcmVhdGVEYlN0cnVjdHVyZSgpO1xuICBjcmVhdGVDbGFzcygpO1xuICBjcmVhdGVDbGFzc0luZm8oKTtcbiAgJGxvZy5tb2RlbENyZWF0aW9uRW5kKCk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYW4gZXZlbnRcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhbiBldmVudFxuICovXG5leHBvcnRzLmlzRXZlbnQgPSBmdW5jdGlvbiBpc0V2ZW50KG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIEVWRU5UX1RZUEUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzUHJvcGVydHkobmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgUFJPUEVSVFlfVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNMaW5rXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGxpbmtcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGxpbmtcbiAqL1xuZXhwb3J0cy5pc0xpbmsgPSBmdW5jdGlvbiBpc0xpbmsobmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgTElOS19UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaXNDb2xsZWN0aW9uID0gZnVuY3Rpb24gaXNDb2xsZWN0aW9uKG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIENPTExFQ1RJT05fVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNNZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIG1ldGhvZFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaXNNZXRob2QgPSBmdW5jdGlvbiBpc01ldGhvZChuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBNRVRIT0RfVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNTdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHBhdGggb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWxOYW1lIG1vZGVsIG5hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHN0cnVjdHVyZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgc3RydWN0dXJlXG4gKi9cbmV4cG9ydHMuaXNTdHJ1Y3R1cmUgPSBmdW5jdGlvbiBpc1N0cnVjdHVyZShwYXRoLCBtb2RlbE5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgc3RydWN0dXJlID0gbnVsbDtcbiAgdmFyIHR5cGUgPSAnJztcblxuICB0eXBlID0gZXhwb3J0cy5nZXRNb2RlbFBhdGhUeXBlKG1vZGVsTmFtZSwgcGF0aCk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoc3RydWN0dXJlKSkge1xuICAgIHN0cnVjdHVyZSA9IGV4cG9ydHMuZ2V0VHlwZSh0eXBlWzBdKTtcbiAgfSBlbHNlIHtcbiAgICBzdHJ1Y3R1cmUgPSBleHBvcnRzLmdldFR5cGUodHlwZSk7XG4gIH1cblxuICBpZiAoc3RydWN0dXJlICYmIHN0cnVjdHVyZS5zY2hlbWEpIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU3RhdGUgPSBmdW5jdGlvbiBpc1ZhbGlkU3RhdGUobmFtZSwgaWQpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2lkXTtcbiAgdmFyIHN0YXRlID0ge307XG5cbiAgaWYgKGlzTW9kZWxQYXRoKG5hbWUpKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkTW9kZWxQYXRoKGlkLCBuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY29tcG9uZW50U2NoZW1hICYmIGNvbXBvbmVudFNjaGVtYVtOQU1FXSkge1xuICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG4gICAgfVxuICAgIHN0YXRlID0gc3RvcmUuc3RhdGVzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICAgIHJlc3VsdCA9IHN0YXRlLmluZGV4T2YobmFtZSkgIT09IC0xO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZFR5cGUgPSBmdW5jdGlvbiBpc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDdXN0b21UeXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZURlZi52YWx1ZSkgJiYgdHlwZURlZi52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jaGVja0NsYXNzTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggYSBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gX2NoZWNrQ2xhc3NOYW1lKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciBpc1ZhbGlkID0gZmFsc2U7XG4gICAgdmFyIHR5cGVSZWYgPSBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVOYW1lKTtcbiAgICB2YXIgY29tcG9uZW50ID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAoaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpKSB7XG4gICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChnZXRDbGFzc05hbWUoY29tcG9uZW50KSA9PT0gdHlwZVJlZiAmJiBjb21wb25lbnQgJiYgY29tcG9uZW50LmlkKSB7XG4gICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICRsb2cuaW52YWxpZENsYXNzVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciByZWFsVHlwZSA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIHJlYWxUeXBlID0gZ2V0UmVhbFR5cGUodHlwZU5hbWUpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZU5hbWVbMF0pOlxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZU5hbWVbMF0pOlxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBfY2hlY2tDbGFzc05hbWUodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZSk6XG4gICAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlTmFtZV0pIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUsIHN0b3JlLnR5cGVbdHlwZU5hbWVdLnR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cuaW52YWxpZEVudW1UeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSBfaXNWYWxpZEN1c3RvbVR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlTmFtZSk6XG4gICAgICByZXN1bHQgPSBfY2hlY2tDbGFzc05hbWUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtTY2hlbWF9IHNjaGVtYSBzY2hlbWEgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBlbnVtXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUgZW51bS5cbiAqL1xuZXhwb3J0cy5pc1ZhbGlkRW51bSA9IGZ1bmN0aW9uIGlzVmFsaWRFbnVtKHZhbHVlLCBzY2hlbWEpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzSW5zdGFuY2VPZlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHByaXZhdGUgQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgZm9yIGNsYXNzIG5hbWUgY2xhc3NOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBfaXNJbnN0YW5jZU9mKGNvbXBvbmVudCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcblxuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKGNvbXBvbmVudENsYXNzTmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfVxuICAgIHJlc3VsdCA9IGNvbXBvbmVudENsYXNzTmFtZSA9PT0gY2xhc3NOYW1lO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChleHBvcnRzLmlzQ2xhc3NOYW1lKHNjaGVtYS50eXBlKSkge1xuICAgIHJlc3VsdCA9XG4gICAgICBfaXNJbnN0YW5jZU9mKCRjb21wb25lbnQuZ2V0KHZhbHVlKSwgZ2V0UmVhbENsYXNzTmFtZShzY2hlbWEudHlwZSkpICYmXG4gICAgICBzY2hlbWEudmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHNjaGVtYS50eXBlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgc2NoZW1hLnR5cGUpICYmIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBvYmplY3RcbiAqIEBwYXJhbSB7SlNPTn0gc2NoZW1hXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBhIHNjaGVtYVxuICogaXQgaXMgc3VwcG9zZWQgdG8gdmFsaWRhdGUuXG4gKi9cbmV4cG9ydHMuaXNWYWxpZFNjaGVtYSA9IGZ1bmN0aW9uIGlzVmFsaWRTY2hlbWEob2JqZWN0LCBzY2hlbWEpIHtcbiAgdmFyIGZpZWxkTmFtZSA9ICcnO1xuICB2YXIgZmllbGQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIG1hbmRhdG9yeSA9IHRydWU7XG4gIHZhciB0eXBlU2NoZW1hID0gJyc7XG4gIHZhciB0eXBlUmVmID0gJyc7XG4gIHZhciByZWFsVHlwZSA9ICcnO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkQ2xhc3NOYW1lXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIGNsYXNzXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZENsYXNzTmFtZSgpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGVudW1WYWx1ZSA9IFtdO1xuXG4gICAgdHlwZVJlZiA9IGdldENsYXNzTmFtZSh0eXBlU2NoZW1hKTtcbiAgICB0eXBlUmVmID0gb2JqZWN0W3R5cGVSZWZdO1xuICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVJlZikpIHtcbiAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdKSB7XG4gICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgLy8gY2hlY2sgdmFsdWVcbiAgICAgICAgICBlbnVtVmFsdWUgPSBzdG9yZS50eXBlW3R5cGVSZWZdLnZhbHVlO1xuICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICBpc1ZhbGlkID0gQXJyYXkuaXNBcnJheShmaWVsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlUmVmKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgfHwgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpO1xuICAgICAgICAgIC8vIFRPRE8gbWF5YmUgaGF2ZSBhIG1vcmUgc3RyaWN0IHZhbGlkYXRpb24gdGhhbiBqdXN0IGEgdHlwZSBjaGVja2luZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVSZWYsIGZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZFR5cGVSZWZlcmVuY2VcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlcyB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VzIHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZVJlZmVyZW5jZSgpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGVudW1WYWx1ZSA9IFtdO1xuXG4gICAgdHlwZVJlZiA9IGdldFJlYWxUeXBlTmFtZSh0eXBlU2NoZW1hKTtcbiAgICB0eXBlUmVmID0gb2JqZWN0W3R5cGVSZWZdO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHR5cGVvZiB0eXBlUmVmID09PSAnc3RyaW5nJzpcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlUmVmKSkge1xuICAgICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdKSB7XG4gICAgICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0udHlwZSk7XG5cbiAgICAgICAgICAgICAgLy8gY2hlY2sgdmFsdWVcbiAgICAgICAgICAgICAgZW51bVZhbHVlID0gc3RvcmUudHlwZVt0eXBlUmVmXS52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudW1WYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVSZWYgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBBcnJheS5pc0FycmF5KGZpZWxkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVJlZikpIHtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSB8fCBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgIC8vIFRPRE8gbWF5YmUgaGF2ZSBhIG1vcmUgc3RyaWN0IHZhbGlkYXRpb24gdGhhbiBqdXN0IGEgdHlwZSBjaGVja2luZ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBBcnJheS5pc0FycmF5KHR5cGVSZWYpOlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVJlZiwgZmllbGQpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKCkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIHJlYWxUeXBlID0gZ2V0UmVhbFR5cGUodHlwZVNjaGVtYSk7XG4gICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkpIHtcbiAgICAgICAgICBsZW5ndGggPSBmaWVsZC5sZW5ndGg7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKFxuICAgICAgICAgICAgICAgIGZpZWxkW2ldLFxuICAgICAgICAgICAgICAgIHN0b3JlLnR5cGVbdHlwZVNjaGVtYVswXV0uc2NoZW1hXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWhhc1R5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYVswXSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvLyB0eXBlXG4gIGlmIChoYXNUeXBlKG9iamVjdCwgJ29iamVjdCcpKSB7XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICBpZiAoaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVNjaGVtYSk6XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIF9pc1ZhbGlkQ2xhc3NOYW1lKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgaXNUeXBlUmVmZXJlbmNlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBfaXNWYWxpZFR5cGVSZWZlcmVuY2UoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgX2lzVmFsaWRUeXBlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYW5kYXRvcnlcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICBpZiAoXG4gICAgICAgIG1hbmRhdG9yeSA9PT0gdHJ1ZSAmJlxuICAgICAgICAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgb2JqZWN0W2ZpZWxkTmFtZV0gIT09IHVuZGVmaW5lZClcbiAgICAgICkge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICRsb2cuaW52YWxpZFByb3BlcnR5Rm9ybWF0KG9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cmljdCB0cnVlIGlmIHZhbGlkYXRpb24gaXMgc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmIHRydWUgaWYgd2UgcmVtb3ZlIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgdGhlIGNvbnN0cnVjdG9yIG9mIGFuIG9iamVjdCBpcyBjb21wbGlhbnRcbiAqIHdpdGggdGhlIGRlZmluaXRpb24gb2YgdGhlIGNsYXNzLlxuICovXG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBmdW5jdGlvbiBpc1ZhbGlkT2JqZWN0KFxuICBvYmplY3QsXG4gIHNjaGVtYSxcbiAgc3RyaWN0LFxuICBjbGVhblJlZlxuKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJztcbiAgdmFyIGZpZWxkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBtYW5kYXRvcnkgPSB0cnVlO1xuICB2YXIgdHlwZVNjaGVtYSA9ICcnO1xuICB2YXIgdHlwZVJlZiA9ICcnO1xuICB2YXIgcmVhbFR5cGUgPSAnJztcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoaGFzVHlwZShzdHJpY3QsICd1bmRlZmluZWQnKSkge1xuICAgIHN0cmljdCA9IHRydWU7XG4gIH1cblxuICBpZiAoaGFzVHlwZShjbGVhblJlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgY2xlYW5SZWYgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkQ3VzdG9tVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBjdXN0b20gdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIGN1c3RvbSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIHJlYWxUeXBlID0gJyc7XG5cbiAgICByZWFsVHlwZSA9IHN0b3JlLnR5cGVbdHlwZVNjaGVtYV07XG4gICAgaWYgKHJlYWxUeXBlKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS5zY2hlbWEsICd1bmRlZmluZWQnKTpcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgcmVhbFR5cGUuc2NoZW1hLCBzdHJpY3QsIGNsZWFuUmVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS52YWx1ZSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgIGlzVmFsaWQgPSBleHBvcnRzLmlzVmFsaWRFbnVtKGZpZWxkLCByZWFsVHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaXNWYWxpZCA9IGV4cG9ydHMuaXNWYWxpZFR5cGUoZmllbGQsIHJlYWxUeXBlLnR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDbGFzc05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkIGEgZmllbGRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVTY2hlbWEgYSBzY2hlbWFcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3MgbmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3MgbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDbGFzc05hbWUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGNvbXAgPSBudWxsO1xuICAgIHZhciBpc0NvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgdHlwZVJlZiA9IGdldFJlYWxDbGFzc05hbWUodHlwZVNjaGVtYSk7XG4gICAgaWYgKGZpZWxkICYmIGZpZWxkLmlkKSB7XG4gICAgICBjb21wID0gZmllbGQ7XG4gICAgICBpc0NvbXBvbmVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXAgPSAkY29tcG9uZW50LmdldChmaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNUeXBlKGNvbXAsICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKCFleHBvcnRzLmluaGVyaXRGcm9tKGNvbXAuY29uc3RydWN0b3IubmFtZSwgdHlwZVJlZikpIHtcbiAgICAgICAgLy8gaWYgKGdldENsYXNzTmFtZShjb21wKSAhPT0gdHlwZVJlZikgeyB1bmNvbW1lbnQgdGhpcyBsaW5lIGZvciBhIHN0cmljdCBtb2RlXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZE5hbWUsIGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc0NvbXBvbmVudCAmJiBjbGVhblJlZikge1xuICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gY29tcC5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBmb3IgZGVmYXVsdCB2YWx1ZSBvZiBhbiBvYmplY3QgKHt9IG9yIG51bGwpXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgJiZcbiAgICAgICAgICBmaWVsZCAhPT0gbnVsbCAmJlxuICAgICAgICAgIE9iamVjdC5rZXlzKGZpZWxkKS5sZW5ndGggPiAwOlxuICAgICAgICBjYXNlIGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKSAmJiBmaWVsZCAhPT0gJyc6XG4gICAgICAgICAgJGxvZy5jYW5Ob3RZZXRWYWxpZGF0ZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRUeXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBhIGZpZWxkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlU2NoZW1hIGEgc2NoZW1hXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGRhdGUgPSBudWxsO1xuICAgIHZhciB0eXBlQXJyYXkgPSAnJztcblxuICAgIHJlYWxUeXBlID0gZ2V0UmVhbFR5cGUodHlwZVNjaGVtYSk7XG4gICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgY2FzZSAnYW55JzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCB0eXBlU2NoZW1hLCBzdHJpY3QsIGNsZWFuUmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlU2NoZW1hID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGZpZWxkKTtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9ICFpc05hTihkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gdHlwZVNjaGVtYSAmJlxuICAgICAgICAgICAgICAgIGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gJ2FueSdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICAgIHR5cGVBcnJheSA9IHR5cGVTY2hlbWFbMF07XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZFtpXSwgdHlwZUFycmF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZ2V0UmVhbFR5cGUoZmllbGRbaV0pICE9PSB0eXBlQXJyYXkgJiZcbiAgICAgICAgICAgICAgICAgIHR5cGVBcnJheSAhPT0gJ2FueSdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVBcnJheSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZFtpXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAvLyBDYXNlIG9mIGFuIGltcG9ydCBvZiBhIHN5c3RlbVxuICAgICAgICAgICAgICAgICAgaWYgKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgIWV4cG9ydHMuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDbGFzc05hbWUoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVhbENsYXNzTmFtZSh0eXBlQXJyYXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSlcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkW2ldICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhZXhwb3J0cy5pbmhlcml0RnJvbShcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDbGFzc05hbWUoZmllbGRbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSksXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0gPSBmaWVsZFtpXS5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZE5hbWUsIGZpZWxkLCAnYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy51bmtub3duVHlwZShmaWVsZCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIG9iamVjdFxuICBpZiAoIWhhc1R5cGUob2JqZWN0LCAnb2JqZWN0JykpIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAkbG9nLmludmFsaWRDb25maWd1cmF0aW9uKG9iamVjdCwgJ29iamVjdCcpO1xuICB9XG5cbiAgLy8gdHlwZVxuICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgaWYgKFxuICAgICAgIWhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSB8fFxuICAgICAgZmllbGROYW1lID09PSAnX2NvcmUnIHx8XG4gICAgICBmaWVsZE5hbWUgPT09ICdfaWQnXG4gICAgKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBmaWVsZE5hbWUgPT09ICdfY29yZSc6XG4gICAgICAgICAgdHlwZVNjaGVtYSA9ICdib29sZWFuJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZE5hbWUgPT09ICdfaWQnOlxuICAgICAgICAgIHR5cGVTY2hlbWEgPSAnc3RyaW5nJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZVNjaGVtYSk6XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIF9pc1ZhbGlkQ2xhc3NOYW1lKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gbWFuZGF0b3J5XG4gIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgIGlmIChvYmplY3QgJiYgaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAobWFuZGF0b3J5ID09PSB0cnVlKSB7XG4gICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFByZXBhcmUgdGhlIG9iamVjdCBpbiBvcmRlciB0byBiZSBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogQG1ldGhvZCBwcmVwYXJlT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byBwcmVwYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKi9cbmV4cG9ydHMucHJlcGFyZU9iamVjdCA9IGZ1bmN0aW9uIHByZXBhcmVPYmplY3Qob2JqZWN0LCBzY2hlbWEpIHtcbiAgdmFyIGZpZWxkTmFtZSA9ICcnO1xuICB2YXIgZmllbGQgPSBudWxsO1xuICB2YXIgbWFuZGF0b3J5ID0gdHJ1ZTtcbiAgdmFyIGRlZmF1bHRWYWx1ZSA9ICcnO1xuXG4gIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2NoZW1hKSk7XG5cbiAgLy8gbWFuZGF0b3J5ICYgZGVmYXVsdCB2YWx1ZVxuICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICBkZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0O1xuICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgIGlmIChtYW5kYXRvcnkgPT09IGZhbHNlICYmICFoYXNUeXBlKGRlZmF1bHRWYWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybnMge09iamVjdH0gdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEdldCBhIHNjaGVtYVxuICovXG5leHBvcnRzLmdldFNjaGVtYSA9IGZ1bmN0aW9uIGdldFNjaGVtYShuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmIChzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV0pIHtcbiAgICByZXN1bHQgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBtb2RlbFxuICovXG5leHBvcnRzLmdldE1vZGVsID0gZnVuY3Rpb24gZ2V0TW9kZWwobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdKSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHR5cGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgdHlwZVxuICovXG5leHBvcnRzLmdldFR5cGUgPSBmdW5jdGlvbiBnZXRUeXBlKG5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKHN0b3JlLnR5cGVbbmFtZV0gJiYgc3RvcmUudHlwZVtuYW1lXSkge1xuICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUudHlwZVtuYW1lXSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TW9kZWxQYXRoVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXRoIG9mIHRoZSBzdHJ1Y3R1cmVcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSB0eXBlIG9mIGEgbW9kZWwgcGF0aFxuICovXG5leHBvcnRzLmdldE1vZGVsUGF0aFR5cGUgPSBmdW5jdGlvbiBnZXRNb2RlbFBhdGhUeXBlKG1vZGVsLCBwYXRoKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgc3VicGF0aHMgPSBbXTtcbiAgdmFyIHN1YnBhdGggPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHN0cnVjdHVyZSA9ICcnO1xuXG4gIHN1YnBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICBsZW5ndGggPSBzdWJwYXRocy5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc3VicGF0aCA9IHN1YnBhdGhzW2ldO1xuICAgIHN1YnBhdGggPSBzdWJwYXRoLnNwbGl0KCdbJylbMF07XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IGV4cG9ydHMuZ2V0TW9kZWwobW9kZWwpW3N1YnBhdGhdLnR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDdXN0b21UeXBlKHJlc3VsdCkpIHtcbiAgICAgICAgc3RydWN0dXJlID0gZXhwb3J0cy5nZXRUeXBlKHJlc3VsdCk7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgY2FzZSB0eXBlb2Ygc3RydWN0dXJlLnNjaGVtYSAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICBpZiAoIXN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0pIHtcbiAgICAgICAgICAgICAgJGxvZy51bmtub3duUGF0aChwYXRoLCBzdWJwYXRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0udHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgdHlwZW9mIHN0cnVjdHVyZS50eXBlICE9PSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IHN0cnVjdHVyZS50eXBlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFN0YXRlKG1vZGVsLCBwYXRoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZE1vZGVsUGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXRoIG9mIHRoZSBtb2RlbFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHBhdGggaXMgdmFsaWQgZm9yIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgcGF0aCBpcyB2YWxpZCBtb2RlbCBwYXRoXG4gKi9cbmV4cG9ydHMuaXNWYWxpZE1vZGVsUGF0aCA9IGZ1bmN0aW9uIGlzVmFsaWRNb2RlbFBhdGgobW9kZWwsIHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciB0eXBlID0gbnVsbDtcbiAgdmFyIHN1YnBhdGhzID0gW107XG4gIHZhciBzdWJwYXRoID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBzdHJ1Y3R1cmUgPSAnJztcblxuICBzdWJwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgbGVuZ3RoID0gc3VicGF0aHMubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHN1YnBhdGggPSBzdWJwYXRoc1tpXTtcbiAgICBzdWJwYXRoID0gc3VicGF0aC5zcGxpdCgnWycpWzBdO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICB0eXBlID0gZXhwb3J0cy5nZXRNb2RlbChtb2RlbClbc3VicGF0aF0udHlwZTtcbiAgICAgIGlmICghdHlwZSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICB0eXBlID0gdHlwZVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlKSkge1xuICAgICAgICBzdHJ1Y3R1cmUgPSBleHBvcnRzLmdldFR5cGUodHlwZSk7XG4gICAgICAgIGlmIChzdHJ1Y3R1cmUuc2NoZW1hICYmIHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0pIHtcbiAgICAgICAgICB0eXBlID0gc3RydWN0dXJlLnNjaGVtYVtzdWJwYXRoXS50eXBlO1xuICAgICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TWV0YURlZlxuICogQHJldHVybnMge09iamVjdH0gdGhlIG1ldGFkZWZpbml0aW9uIG9mIHRoZSBtZXRhbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIGRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbFxuICovXG5leHBvcnRzLmdldE1ldGFEZWYgPSBmdW5jdGlvbiBnZXRNZXRhRGVmKCkge1xuICB2YXIgcmVzdWx0ID0gc3RvcmUubWV0YWRlZi5zY2hlbWE7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJucyB7QXJyYXl9IGlkIGlkIG9mIHRoZSBwYXJlbnRzXG4gKiBAZGVzY3JpcHRpb24gR2V0IHBhcmVudHMgb2YgYSBzY2hlbWEgaWYgYW55XG4gKi9cbmV4cG9ydHMuZ2V0UGFyZW50cyA9IGZ1bmN0aW9uIGdldFBhcmVudHMoaWQpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICghc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXSkge1xuICAgIHJlc3VsdCA9IFtdO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0uc2xpY2UoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW5oZXJpdEZyb21cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBuYW1lIG9mIHRoZSBwYXJlbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gKi9cbmV4cG9ydHMuaW5oZXJpdEZyb20gPSBmdW5jdGlvbiBpbmhlcml0RnJvbShuYW1lLCBwYXJlbnROYW1lKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcblxuICAvKipcbiAgICogQG1ldGhvZCBfc2VhcmNoUGFyZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFuY2VzdG9yTmFtZSBvZiB0aGUgcGFyZW50XG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAgICovXG4gIGZ1bmN0aW9uIF9zZWFyY2hQYXJlbnQoY2xhc3NOYW1lLCBhbmNlc3Rvck5hbWUpIHtcbiAgICB2YXIgaXNBbmNlc3RvciA9IGZhbHNlO1xuICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgcGFyZW50cyA9IGV4cG9ydHMuZ2V0UGFyZW50cyhjbGFzc05hbWUpO1xuICAgIGlmIChwYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKHBhcmVudHMuaW5kZXhPZihhbmNlc3Rvck5hbWUpICE9PSAtMSkge1xuICAgICAgICBpc0FuY2VzdG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlzQW5jZXN0b3IgPSBfc2VhcmNoUGFyZW50KHBhcmVudHNbaV0sIGFuY2VzdG9yTmFtZSk7XG4gICAgICAgICAgaWYgKGlzQW5jZXN0b3IpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNBbmNlc3RvcjtcbiAgfVxuXG4gIGlmIChuYW1lICE9PSBwYXJlbnROYW1lKSB7XG4gICAgcGFyZW50cyA9IGV4cG9ydHMuZ2V0UGFyZW50cyhuYW1lKTtcbiAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKHBhcmVudHMuaW5kZXhPZihwYXJlbnROYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdCA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgcGFyZW50TmFtZSk7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBuYW1lIGlzIGEgY2xhc3MgbmFtZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0cy5pc0NsYXNzTmFtZSA9IGZ1bmN0aW9uIGlzQ2xhc3NOYW1lKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJyk7XG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3VsdCA9IHR5cGVvZiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbdmFsdWVdICE9PSAndW5kZWZpbmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHN5c3RlbVxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBTeXN0ZW0gUnVudGltZS5cbiAqIEl0IGluaXRzIFN5c3RlbSBSdW50aW1lIG1ldGFtb2RlbCBhbmQgbG9hZHMgU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRzeXN0ZW0gPSByZXF1aXJlKCcuLi9idWlsZC9zeXN0ZW0vc3lzdGVtLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJztcbnZhciBzeXN0ZW0gPSAnJztcbnZhciBjaGFubmVsID0gbnVsbDtcblxuLy8gcG9seWZpbGxcbiRoZWxwZXIucG9seWZpbGwoKTtcblxuLy8gaW5pdCBNZXRhbW9kZWxcbiRtZXRhbW9kZWwuaW5pdCgpO1xuXG4vLyBpbml0IHJ1bnRpbWUgZnJvbSBhIHN5c3RlbVxuc3l0ZW1JZCA9ICRkYi5pbXBvcnRTeXN0ZW0oJHN5c3RlbS5zeXN0ZW0pO1xuXG5zeXN0ZW0gPSAkY29tcG9uZW50LmdldChzeXRlbUlkKTtcbmNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xuXG5zeXN0ZW0uc3RhdGUoJ2luc3RhbGxlZCcpO1xuY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5dGVtSWQpO1xuc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xuY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3l0ZW1JZCk7XG5zeXN0ZW0uc3RhdGUoJ3N0YXJ0aW5nJyk7XG5jaGFubmVsLiRzeXN0ZW1TdGFydGVkKHN5dGVtSWQpO1xuXG5zeXN0ZW0uc3RhcnQoKTtcblxuc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcblxuLyogUHVibGljIHByb3BlcnR5ICovXG5cbi8qKlxuICogQHByb3BlcnR5IHJ1bnRpbWVcbiAqIEB0eXBlIF9SdW50aW1lXG4gKiBAZGVzY3JpcHRpb24gX1J1bnRpbWUgaW5zdGFuY2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAkY29tcG9uZW50LmdldCgncnVudGltZScpO1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBzdGF0ZVxuICogQHJlcXVpcmVzIGRiXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGVjb21wb25lbnRzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxudmFyIHN0b3JlID0ge307XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWQgb24gd2hpY2ggY2hhbmdlIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIFNldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5zZXQgPSBmdW5jdGlvbiBzZXQoaWQsIHN0YXRlLCB2YWx1ZSkge1xuICBzdG9yZVtpZF0gPSB7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xuICAkZGIuc3RvcmUuX1N0YXRlW2lkXSA9IHtcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybnMge1N0cmluZ30gc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgcmV0dXJuIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBzdG9yZSA9IHt9O1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEByZXF1aXJlcyBiZWhhdmlvclxuICogQHJlcXVpcmVzIHN0YXRlXG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAcmVxdWlyZXMgbG9nXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSB3b3JrZmxvdyBvZiBTeXN0ZW0gUnVudGltZS5cbiAqIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgY2hhbmdlIG9mIHN0YXR1cyBvZiBhIGNvbXBvbmVudCBpcyB2YWxpZCB0byBiZSBleGVjdXRlZC4gQnkgdmFsaWQsIGl0IG1lYW5zIHRoYXQ6XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCxcbiAqIC0gdGhlIGlucHV0IChpLmUuIHBhcmFtZXRlcnMpIG9mIGFsbCBhY3Rpb25zIGZvciB0aGUgc3RhdGUgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwgYW5kXG4gKiAtIHRoZSBvdXRwdXQgb2YgYWxsIGFjdGlvbnMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwuXG4gKlxuICogSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgd29ya2Zsb3cgd2lsbCBjYWxsIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBydW50aW1lLlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAY2xhc3MgUnVudGltZUVycm9yXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugb2YgdGhlIGVycm9yXG4gKiBAZGVzY3JpcHRpb24gVGhlIFJ1bnRpbWVFcnJvciBjbGFzc1xuICovXG5mdW5jdGlvbiBSdW50aW1lRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLm5hbWUgPSAnUnVudGltZUVycm9yJztcbn1cblJ1bnRpbWVFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblJ1bnRpbWVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSdW50aW1lRXJyb3I7XG5cbi8qKlxuICogQG1ldGhvZCBpc01vZGVsUGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIGEgbW9kZWwgcGF0aFxuICovXG5mdW5jdGlvbiBpc01vZGVsUGF0aCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignLicpICE9PSAtMTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge0FycmF5fSB0aGUgbmFtZXMgb2YgYWxsIHBhcmFtZXRlcnMgb2YgdGhlIG1ldGhvZCBmb3IgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIG5hbWVzIG9mIHRoZSBwYXJhbWV0ZXIgb2YgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbDtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICB9XG5cbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNNb2RlbFBhdGgobWV0aG9kTmFtZSkpIHtcbiAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7QXJyYXl9IG51bWJlciBvZiBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IGZvciB0aGUgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OdW1iZXIoaWQsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGw7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbWluID0gMDtcbiAgdmFyIG1heCA9IDA7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICB9XG5cbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgcGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBtaW4gPSBtaW4gKyAxO1xuICAgICAgICB9XG4gICAgICAgIG1heCA9IG1heCArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1pbik7XG4gICAgcmVzdWx0LnB1c2gobWF4KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAobWV0aG9kTmFtZS5pbmRleE9mKCdbJykgPT09IC0xICYmIG1ldGhvZE5hbWUuaW5kZXhPZignLicpID09PSAtMSkge1xuICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIHNldERlZmF1bHRWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIGFyZ3VtZW50c1xuICogQHJldHVybnMge0FycmF5fSBhcmd1bWVudHMgd2l0aCBkZWZhdWx0IHZhbHVlc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBzZXREZWZhdWx0VmFsdWUoaWQsIG1ldGhvZE5hbWUsIGFyZ3MpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGw7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSBmYWxzZSAmJiB0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0uZGVmYXVsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1ldGhvZE5hbWUuaW5kZXhPZignWycpID09PSAtMSkge1xuICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXJncztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFJldHVyblR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIHR5cGUgcmV0dXJuZWQgYnkgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHR5cGUgcmV0dXJuZWQgYnkgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZ2V0UmV0dXJuVHlwZShpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgcmVzdWx0VHlwZSA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgIHJlc3VsdFR5cGUgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXS5yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICB9XG5cbiAgaWYgKHJlc3VsdFR5cGUpIHtcbiAgICByZXN1bHQgPSByZXN1bHRUeXBlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQYXJhbVR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtBcnJheX0gdGhlIHR5cGVzIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1UeXBlcyhpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbDtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICB9XG5cbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0udHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChtZXRob2ROYW1lLmluZGV4T2YoJ1snKSA9PT0gLTEgJiYgbWV0aG9kTmFtZS5pbmRleE9mKCcuJykgPT09IC0xKSB7XG4gICAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBhIFN5c3RlbSBSdW50aW1lIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCB0cnVlIGlmIHRoZSBzdGF0ZSBpcyBhbiBldmVudFxuICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIHRoZSBhY3Rpb25zXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgYWN0aW9ucyBvZiB0aGUgc3BlY2lmaWVkIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoY29tcG9uZW50LCBuYW1lLCBpc0V2ZW50KSB7XG4gIHZhciBhY3Rpb24gPSAkYmVoYXZpb3IuZ2V0QWN0aW9ucyhjb21wb25lbnQuaWQoKSwgbmFtZSk7XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBwYXJlbnQgPSBudWxsO1xuXG4gIGlmICghYWN0aW9uLmxlbmd0aCB8fCBpc0V2ZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KFxuICAgICAgICBnZXRBY3Rpb25zKCRjb21wb25lbnQuZ2V0KGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKSwgbmFtZSwgaXNFdmVudClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudHMgPSAkbWV0YW1vZGVsLmdldFBhcmVudHMoY29tcG9uZW50Lm5hbWUpO1xuICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gJGNvbXBvbmVudC5nZXQocGFyZW50c1tpXSk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMocGFyZW50LCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGxvZy51bmtub3duQ29tcG9uZW50KHBhcmVudHNbaV0sIGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICBhY3Rpb24ucmV2ZXJzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFjdGlvblxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBpc0V2ZW50IGlzIHRoZSBhY3Rpb24gYSBjYWxsYmFjayBvZiBhbiBldmVudFxuICogQHJldHVybnMge0Jvb2xlYW59IHJlc3VsdCBvZiB0aGUgYWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gRXhlY3V0ZSBhbiBhY3Rpb24gYW5kIG1ha2Ugc29tZSBEZXBlbmRlbmN5IEluamVjdGlvbiBpZiBpdCBpcyBhIGNvcmUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGFjdGlvbihjb21wb25lbnQsIHN0YXRlLCBhY3Rpb24sIHBhcmFtcywgaXNFdmVudCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIGluamVjdGVkUGFyYW1zID0gW107XG4gIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcblxuICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIGlmIChcbiAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpICYmXG4gICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpICYmXG4gICAgISRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpXG4gICkge1xuICAgIHBhcmFtcyA9IHNldERlZmF1bHRWYWx1ZShjb21wb25lbnRDbGFzc05hbWUsIHN0YXRlLCBwYXJhbXMpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChwYXJhbXNbaV0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udXNlQ29yZUFQSSkge1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkY29tcG9uZW50KTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGRiKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJG1ldGFtb2RlbCk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKGV4cG9ydHMpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkYmVoYXZpb3IpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkc3RhdGUpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkbG9nKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGhlbHBlcik7XG4gICAgfVxuXG4gICAgaWYgKCRoZWxwZXIuaXNPbk5vZGUoKSkge1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkaGVscGVyLmdldFJlcXVpcmUoKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgIGlmIChhY3Rpb24uY29udGV4dCkge1xuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgIGFjdGlvbi5hY3Rpb24uYmluZC5hcHBseShcbiAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24sXG4gICAgICAgICAgICBbYWN0aW9uLmNvbnRleHRdLmNvbmNhdChpbmplY3RlZFBhcmFtcylcbiAgICAgICAgICApLFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgYWN0aW9uLmFjdGlvbi5iaW5kLmFwcGx5KFxuICAgICAgICAgICAgYWN0aW9uLmFjdGlvbixcbiAgICAgICAgICAgIFtjb21wb25lbnRdLmNvbmNhdChpbmplY3RlZFBhcmFtcylcbiAgICAgICAgICApLFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGFjdGlvbi5jb250ZXh0KSB7XG4gICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoYWN0aW9uLmNvbnRleHQsIGluamVjdGVkUGFyYW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBpbmplY3RlZFBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBSdW50aW1lRXJyb3IpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXcgRnVuY3Rpb24oKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ3J1bnRpbWU6IGNhbiBub3QgZXhlY3V0ZSBuZXcgRnVuY3Rpb24oKSBpbnN0cnVjdGlvbiBpbiB0aGUgY3VycmVudCBjb250ZXh0LidcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVycm9yKSB7XG4gICAgICAgICAgY29tcG9uZW50LmVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgICAgICAgIHN0YXRlICtcbiAgICAgICAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICAgICAgICBjb21wb25lbnQuaWQoKSArXG4gICAgICAgICAgICAgIFwiJ1wiLFxuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJGhlbHBlci5nZXRSdW50aW1lKCkpIHtcbiAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5lcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICAgICAgICBzdGF0ZSArXG4gICAgICAgICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgICAgICAgY29tcG9uZW50LmlkKCkgK1xuICAgICAgICAgICAgICBcIidcIixcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJGxvZy5hY3Rpb25JbnZva2VFcnJvcihcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBlLm1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tJbnB1dE51bWJlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIGFwcGxpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBhY3Rpb25cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhY3Rpb24gaXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYWN0aW9uIGhhcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlclxuICovXG5leHBvcnRzLmNoZWNrSW5wdXROdW1iZXJzID0gZnVuY3Rpb24gY2hlY2tJbnB1dE51bWJlcnMoXG4gIGNsYXNzTmFtZSxcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSB7XG4gIHZhciBmdW5jID0gJyc7XG4gIHZhciBiZWdpbkJvZHkgPSAtMTtcbiAgdmFyIGhlYWRlciA9ICcnO1xuICB2YXIgZnVuY1BhcmFtcyA9ICcnO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciBwYXJhbU51bWJlciA9IDA7XG4gIHZhciBtb2RlbE51bWJlclBhcmFtID0gW107XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgLy8gY2hlY2sgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICBmdW5jID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuICBoZWFkZXIgPSBoZWFkZXIucmVwbGFjZSgnPT4nLCAnJyk7XG5cbiAgaWYgKGhlYWRlci5pbmRleE9mKCcoJykgIT09IC0xKSB7XG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlclxuICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgIC5yZXBsYWNlKCcpJywgJycpXG4gICAgICAudHJpbSgpO1xuICB9IGVsc2Uge1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXIudHJpbSgpO1xuICB9XG5cbiAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICBpZiAocGFyYW1zWzBdID09PSAnJykge1xuICAgIHBhcmFtcyA9IFtdO1xuICB9XG4gIHBhcmFtTnVtYmVyID0gcGFyYW1zLmxlbmd0aDtcblxuICAvLyBnZXQgdGhlIG51bWJlciBtaW4gYW5kIG1heCBvZiB2YWxpZCBwYXJhbWV0ZXJzXG4gIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzTmFtZSk7XG4gIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc05hbWUpO1xuICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NOYW1lKTtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQ29sbGVjdGlvbjpcbiAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMiwgMl07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKGNsYXNzTmFtZSwgc3RhdGUpID09PSAnYXJyYXknKSB7XG4gICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMiwgMl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gWzEsIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc0xpbms6XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gWzEsIDFdO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBnZXRQYXJhbU51bWJlcihjbGFzc05hbWUsIHN0YXRlKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gY29tcGFyZVxuICBpZiAoXG4gICAgbW9kZWxOdW1iZXJQYXJhbVswXSA8PSBwYXJhbU51bWJlciAmJlxuICAgIHBhcmFtTnVtYmVyIDw9IG1vZGVsTnVtYmVyUGFyYW1bMV1cbiAgKSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tJbnB1dFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvblxuICovXG5leHBvcnRzLmNoZWNrSW5wdXQgPSBmdW5jdGlvbiBjaGVja0lucHV0KHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbDtcbiAgdmFyIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJztcbiAgdmFyIGFyZ3MgPSBwYXJhbXMuYXJncyB8fCAnJztcbiAgdmFyIHBhcmFtc05hbWUgPSBbXTtcbiAgdmFyIHBhcmFtc1R5cGUgPSBbXTtcbiAgdmFyIHBhcmFtc051bWJlciA9IFtdO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciBsZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcGFyYW0gPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIGlzUHJvcGVydHkgPSBmYWxzZTtcbiAgdmFyIGlzTGluayA9IGZhbHNlO1xuICB2YXIgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0NvbGxlY3Rpb24gJiYgbWV0aG9kTmFtZS5pbmRleE9mKCcuJykgPT09IC0xOlxuICAgICAgaWYgKGFyZ3MgJiYgYXJnc1sxXSAmJiBhcmdzWzFdID09PSAncmVzZXQnKSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXG4gICAgICAgICAgWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlWzBdXSxcbiAgICAgICAgICAnc3RyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtcbiAgICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZVswXSxcbiAgICAgICAgICAnc3RyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcGFyYW1zTnVtYmVyID0gWzIsIDJdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc1Byb3BlcnR5ICYmIG1ldGhvZE5hbWUuaW5kZXhPZignLicpID09PSAtMTpcbiAgICAgIGlmIChpc01vZGVsUGF0aChtZXRob2ROYW1lKSkge1xuICAgICAgICBwYXJhbXNUeXBlID0gW1xuICAgICAgICAgICRtZXRhbW9kZWwuZ2V0TW9kZWxQYXRoVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpXG4gICAgICAgIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlXTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSkgPT09ICdhcnJheSdcbiAgICAgICkge1xuICAgICAgICBpZiAoYXJncyAmJiBhcmdzWzFdICYmIGFyZ3NbMV0gPT09ICdyZXNldCcpIHtcbiAgICAgICAgICBwYXJhbXNUeXBlID0gW1snYW55J10sICdzdHJpbmcnXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNUeXBlID0gWydhbnknLCAnc3RyaW5nJ107XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zTnVtYmVyID0gWzIsIDJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zTnVtYmVyID0gWzEsIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc0xpbmsgJiYgbWV0aG9kTmFtZS5pbmRleE9mKCcuJykgPT09IC0xOlxuICAgICAgcGFyYW1zVHlwZSA9IFskbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcGFyYW1zVHlwZSA9IGdldFBhcmFtVHlwZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHBhcmFtc051bWJlciA9IGdldFBhcmFtTnVtYmVyKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIGNhc2Ugb2Ygb2JqZWN0XG4gIGlmICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykge1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cblxuICBpZiAobGVuZ3RoIDwgcGFyYW1zTnVtYmVyWzBdIHx8IHBhcmFtc051bWJlclsxXSA8IGxlbmd0aCkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKFxuICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgIG1ldGhvZE5hbWVcbiAgICApO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcGFyYW0gPSBhcmdzW2ldO1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoaSA8IHBhcmFtc051bWJlclswXSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXIoXG4gICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgbWV0aG9kTmFtZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShwYXJhbSwgcGFyYW1zVHlwZVtpXSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShcbiAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICAgIHBhcmFtc05hbWVbaV1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrT3V0cHV0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb25zIG9uIG91cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBvdXRwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja091dHB1dCA9IGZ1bmN0aW9uIGNoZWNrT3V0cHV0KHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbDtcbiAgdmFyIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJztcbiAgdmFyIG1ldGhvZFJlc3VsdCA9IG51bGw7XG4gIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcbiAgdmFyIHJldHVyblR5cGUgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHBhcmFtcy5tZXRob2RSZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbWV0aG9kUmVzdWx0ID0gcGFyYW1zLm1ldGhvZFJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICBtZXRob2RSZXN1bHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIHJldHVyblR5cGUgPSBnZXRSZXR1cm5UeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShtZXRob2RSZXN1bHQsIHJldHVyblR5cGUpKSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShcbiAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICBtZXRob2ROYW1lLFxuICAgICAgSlNPTi5zdHJpbmdpZnkocmV0dXJuVHlwZSksXG4gICAgICBBcnJheS5pc0FycmF5KG1ldGhvZFJlc3VsdCkgPyAnYXJyYXknIDogdHlwZW9mIG1ldGhvZFJlc3VsdFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHByb2Nlc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1zIHRvIHByb2Nlc3NcbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiB7QXJyYXl9IGRhdGEgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBhY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBUYXNrIHByb2Nlc3NpbmcuXG4gKi9cbmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uIHByb2Nlc3MocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICBwYXJhbXMuaWQgPSBwYXJhbXMuaWQgfHwgJyc7XG4gIHBhcmFtcy5jb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8ICcnO1xuICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG4gIHBhcmFtcy5kYXRhID0gcGFyYW1zLmRhdGEgfHwgW107XG4gIHBhcmFtcy5jb250ZXh0ID0gcGFyYW1zLmNvbnRleHQgfHwgbnVsbDtcblxuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuICB2YXIgYWN0aW9ucyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gZmFsc2U7XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgaXNFdmVudCA9IGZhbHNlO1xuICB2YXIgaXNNZXRob2QgPSBmYWxzZTtcbiAgdmFyIGJlaGF2aW9ycyA9IFtdO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgYWN0aW9uRnJvbU1lbW9yeSA9IG51bGw7XG5cbiAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldChwYXJhbXMuY29tcG9uZW50KTtcblxuICAvLyBjaGVjayBzdGF0ZVxuICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgJGxvZy5pbnZhbGlkVXNlT2ZDb21wb25lbnQocGFyYW1zLmNvbXBvbmVudCk7XG4gIH1cblxuICAvLyBjYXNlIG9mIGV2ZW50IHByb2Nlc3NpbmdcbiAgaWYgKHBhcmFtcy5pZCkge1xuICAgIGJlaGF2aW9ycyA9ICRkYi5fQmVoYXZpb3IuZmluZCh7XG4gICAgICBfaWQ6IHBhcmFtcy5pZFxuICAgIH0pO1xuXG4gICAgaWYgKGJlaGF2aW9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGJlaGF2aW9yID0gYmVoYXZpb3JzWzBdO1xuICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoYmVoYXZpb3IuY29tcG9uZW50KTtcblxuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihcbiAgICAgICAgICBiZWhhdmlvci5zdGF0ZSxcbiAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWVcbiAgICAgICAgKTtcbiAgICAgICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgaXNNZXRob2QgPSAkbWV0YW1vZGVsLmlzTWV0aG9kKGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuXG4gICAgICAgIGFjdGlvbkZyb21NZW1vcnkgPSAkYmVoYXZpb3IuZ2V0KHBhcmFtcy5pZCk7XG4gICAgICAgIGlmIChhY3Rpb25Gcm9tTWVtb3J5KSB7XG4gICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgdXNlQ29yZUFQSTogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGJlaGF2aW9yLmNvbnRleHQsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbkZyb21NZW1vcnlcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgIH1cblxuICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgIGlzTWV0aG9kID0gJG1ldGFtb2RlbC5pc01ldGhvZChwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG5cbiAgICAgIGFjdGlvbnMgPSBnZXRBY3Rpb25zKGNvbXBvbmVudCwgcGFyYW1zLnN0YXRlLCBpc0V2ZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBleHBvcnRzLmNoZWNrSW5wdXQoe1xuICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgbWV0aG9kTmFtZTogcGFyYW1zLnN0YXRlLFxuICAgICAgICBhcmdzOiBwYXJhbXMuZGF0YVxuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSBhY3Rpb24oXG4gICAgICAgICAgcGFyYW1zLmNvbnRleHQgfHwgY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICBhY3Rpb25zWzBdLFxuICAgICAgICAgIHBhcmFtcy5kYXRhLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgZXhwb3J0cy5jaGVja091dHB1dCh7XG4gICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgbWV0aG9kTmFtZTogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgIG1ldGhvZFJlc3VsdDogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFjdGlvbihcbiAgICAgICAgICAgIHBhcmFtcy5jb250ZXh0IHx8IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvbnNbaV0sXG4gICAgICAgICAgICBwYXJhbXMuZGF0YSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChjb21wb25lbnQgJiYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0xpbmsgfHwgaXNDb2xsZWN0aW9uKSkge1xuICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXX0=
