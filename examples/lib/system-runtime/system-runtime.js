(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.runtime = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
exports.system = {
  name: 'system-runtime',
  master: false,
  version: '2.5.0',
  description: 'System Runtime',
  schemas: {
    '1ac07185641fa9f': {
      _name: '_Behavior',
      _inherit: ['_Component'],
      _core: true,
      core: 'property',
      component: 'property',
      action: 'property',
      state: 'property',
      useCoreAPI: 'property',
      context: 'property',
      _id: '1ac07185641fa9f'
    },
    '104ad1f48518376': {
      _id: '104ad1f48518376',
      _name: '_Channel',
      _inherit: ['_Component'],
      _core: true,
      send: 'event',
      $systemInstalled: 'event',
      $systemResolved: 'event',
      $systemStarted: 'event',
      $systemStopped: 'event',
      $systemUninstalled: 'event'
    },
    '1c00b13a1b1bc92': {
      _name: '_ClassInfo',
      _inherit: ['_Component'],
      _core: true,
      model: 'property',
      schema: 'property',
      method: 'method',
      methods: 'method',
      property: 'method',
      properties: 'method',
      link: 'method',
      links: 'method',
      collections: 'method',
      collection: 'method',
      event: 'method',
      events: 'method',
      _id: '1c00b13a1b1bc92'
    },
    '111df11e2b19fde': {
      _id: '111df11e2b19fde',
      _name: '_Component',
      _inherit: [],
      _core: true,
      classInfo: 'method',
      on: 'method',
      off: 'method',
      require: 'method',
      destroy: 'method',
      init: 'method',
      error: 'event'
    },
    '1723516a30132ac': {
      _name: '_Database',
      _inherit: ['_Component'],
      _core: true,
      collections: 'method',
      insert: 'event',
      update: 'event',
      remove: 'event',
      _id: '1723516a30132ac'
    },
    f1a10d1067d1b23a: {
      _id: 'f1a10d1067d1b23a',
      _name: '_Log',
      _inherit: ['_Component'],
      _core: true,
      action: 'property',
      collection: 'property',
      id: 'property',
      field: 'property',
      value: 'property',
      order: 'property'
    },
    '1268f1dddd1fea7': {
      _name: '_Logger',
      _core: true,
      level: 'property',
      debug: 'method',
      info: 'method',
      warn: 'method',
      error: 'method',
      _id: '1268f1dddd1fea7'
    },
    '14caa1c46414ee1': {
      _name: '_Message',
      _inherit: ['_Component'],
      _core: true,
      event: 'property',
      from: 'property',
      data: 'property',
      _id: '14caa1c46414ee1'
    },
    '193f1166eb16609': {
      _name: '_Metamodel',
      _inherit: ['_Component'],
      _core: true,
      schema: 'method',
      model: 'method',
      type: 'method',
      create: 'method',
      _id: '193f1166eb16609'
    },
    '157931f7a31b61d': {
      _id: '157931f7a31b61d',
      _name: '_OSGi',
      _inherit: ['_Component'],
      _core: true,
      install: 'method',
      uninstall: 'method',
      start: 'method',
      stop: 'method',
      status: 'method',
      bundle: 'method'
    },
    '12e211d4cd120a6': {
      _id: '12e211d4cd120a6',
      _name: '_Runtime',
      _inherit: ['_OSGi'],
      _core: true,
      version: 'property',
      system: 'method',
      message: 'method',
      ready: 'event'
    },
    '158711d6f215e4b': {
      _name: '_State',
      _inherit: [],
      _core: true,
      _class: false,
      state: 'property',
      value: 'property',
      _id: '158711d6f215e4b'
    },
    '1cb761fa4510dca': {
      _id: '1cb761fa4510dca',
      _name: '_System',
      _inherit: ['_SystemOSGi'],
      _core: true,
      name: 'property',
      master: 'property',
      version: 'property',
      description: 'property',
      schemas: 'property',
      models: 'property',
      behaviors: 'property',
      types: 'property',
      components: 'property'
    },
    '145fe10c7514298': {
      _id: '145fe10c7514298',
      _name: '_SystemOSGi',
      _inherit: ['_Component'],
      _core: true,
      state: 'property',
      location: 'property',
      start: 'method',
      stop: 'method'
    }
  },
  models: {
    '166971fd9d107fd': {
      _name: '_Behavior',
      _core: true,
      context: {
        type: 'any',
        readOnly: false,
        mandatory: false,
        default: null
      },
      core: {
        type: 'boolean',
        readOnly: false,
        mandatory: false,
        default: false
      },
      useCoreAPI: {
        type: 'any',
        readOnly: false,
        mandatory: false,
        default: false
      },
      component: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: ''
      },
      action: {
        type: 'javascript',
        readOnly: false,
        mandatory: true,
        default: ''
      },
      state: { type: 'string', readOnly: false, mandatory: true, default: '' },
      _id: '166971fd9d107fd'
    },
    '135c71078810af2': {
      _id: '135c71078810af2',
      _name: '_Channel',
      _core: true,
      send: { params: [{ name: 'message', type: 'message' }] },
      $systemInstalled: {
        params: [{ name: 'id', type: 'string', mandatory: true, default: '' }]
      },
      $systemResolved: {
        params: [{ name: 'id', type: 'string', mandatory: true, default: '' }]
      },
      $systemUninstalled: {
        params: [{ name: 'id', type: 'string', mandatory: true, default: '' }]
      },
      $systemStarted: {
        params: [{ name: 'id', type: 'string', mandatory: true, default: '' }]
      },
      $systemStopped: {
        params: [{ name: 'id', type: 'string', mandatory: true, default: '' }]
      }
    },
    '158321dced1014a': {
      _name: '_ClassInfo',
      _core: true,
      model: { type: 'object', readOnly: true, mandatory: true, default: {} },
      property: {
        params: [{ name: 'name', type: 'string' }],
        result: 'object'
      },
      properties: { result: 'array' },
      link: { params: [{ name: 'name', type: 'string' }], result: 'object' },
      links: { result: 'array' },
      method: { params: [{ name: 'name', type: 'string' }], result: 'object' },
      methods: { result: 'array' },
      collection: {
        params: [{ name: 'name', type: 'string' }],
        result: 'object'
      },
      collections: { result: 'array' },
      event: { params: [{ name: 'name', type: 'string' }], result: 'object' },
      events: { result: 'array' },
      _id: '158321dced1014a',
      schema: { type: 'object', readOnly: true, mandatory: true, default: {} }
    },
    '123751cb591de26': {
      _id: '123751cb591de26',
      _name: '_Component',
      _core: true,
      on: {
        params: [
          { name: 'state', type: 'string' },
          { name: 'action', type: 'function' },
          { name: 'useCoreAPI', type: 'any', mandatory: false, default: false },
          { name: 'isCore', type: 'boolean', mandatory: false, default: false }
        ]
      },
      off: {
        params: [
          { name: 'state', type: 'string', mandatory: false },
          { name: 'behaviorId', type: 'string', mandatory: false }
        ]
      },
      require: { params: [{ name: 'id', type: 'string' }] },
      destroy: { params: [] },
      classInfo: { result: '_ClassInfo' },
      init: { params: [{ name: 'conf', type: 'object' }] },
      error: { params: [{ name: 'data', type: 'errorParam' }] }
    },
    '18a51169d7112d4': {
      _name: '_Database',
      _core: true,
      collections: { result: 'object' },
      insert: { params: [{ name: 'event', type: 'dbInsertEvent' }] },
      update: { params: [{ name: 'event', type: 'dbUpdateEvent' }] },
      remove: { params: [{ name: 'event', type: 'dbRemoveEvent' }] },
      _id: '18a51169d7112d4'
    },
    o1e1e01e6b41cec3: {
      _id: 'o1e1e01e6b41cec3',
      _name: '_Log',
      action: {
        type: 'dbAction',
        readOnly: false,
        mandatory: false,
        default: 'insert'
      },
      collection: {
        type: 'string',
        readOnly: false,
        mandatory: false,
        default: ''
      },
      id: { type: 'string', readOnly: false, mandatory: false, default: '' },
      field: { type: 'string', readOnly: false, mandatory: false, default: '' },
      value: { type: 'any', readOnly: false, mandatory: false, default: '' },
      order: { type: 'number', readOnly: false, mandatory: false, default: 0 },
      _core: true
    },
    '16b9d1ac2216ffe': {
      _id: '16b9d1ac2216ffe',
      _name: '_Logger',
      _core: true,
      level: {
        type: 'log',
        readOnly: false,
        mandatory: false,
        default: 'warn'
      },
      debug: { params: [{ name: 'message', type: 'any' }] },
      info: { params: [{ name: 'message', type: 'any' }] },
      warn: { params: [{ name: 'message', type: 'any' }] },
      error: { params: [{ name: 'message', type: 'any' }] }
    },
    '1d9b6139411aa91': {
      _name: '_Message',
      _core: true,
      event: { type: 'string', readOnly: false, mandatory: true, default: '' },
      from: { type: 'string', readOnly: false, mandatory: true, default: '' },
      data: { type: 'array', readOnly: false, mandatory: true, default: [] },
      _id: '1d9b6139411aa91'
    },
    '1628c13c22152e6': {
      _name: '_Metamodel',
      _core: true,
      schema: { params: [{ name: 'schema', type: 'object' }], result: 'any' },
      model: { params: [{ name: 'model', type: 'object' }], result: 'any' },
      type: { params: [{ name: 'type', type: 'object' }], result: 'any' },
      create: { params: [] },
      _id: '1628c13c22152e6'
    },
    '100b91ed2211b15': {
      _id: '100b91ed2211b15',
      _name: '_OSGi',
      install: {
        params: [
          { name: 'url', type: 'any', mandatory: true, default: '' },
          { name: 'async', type: 'boolean', mandatory: false, default: true }
        ],
        result: 'string'
      },
      uninstall: {
        params: [{ name: 'id', type: 'string', mandatory: true, default: '' }]
      },
      start: {
        params: [{ name: 'id', type: 'string', mandatory: true, default: '' }]
      },
      stop: {
        params: [{ name: 'id', type: 'string', mandatory: true, default: '' }]
      },
      status: { result: 'object' },
      _core: true,
      bundle: { result: 'string' }
    },
    '14c7c105b31a160': {
      _id: '14c7c105b31a160',
      _name: '_Runtime',
      _core: true,
      version: {
        type: 'string',
        readOnly: true,
        mandatory: true,
        default: '0.0.0'
      },
      system: {
        params: [{ name: 'params', type: 'any', mandatory: false }],
        result: 'object'
      },
      message: { params: [{ name: 'msg', type: 'message', mandatory: true }] },
      ready: {}
    },
    '177ac136891629f': {
      _name: '_State',
      _core: true,
      state: { type: 'string', readOnly: false, mandatory: true, default: '' },
      value: { type: 'any', readOnly: false, mandatory: false, default: null },
      _id: '177ac136891629f'
    },
    '170521b88614387': {
      _name: '_System',
      _core: true,
      name: { type: 'string', readOnly: false, mandatory: true, default: '' },
      master: {
        type: 'boolean',
        readOnly: false,
        mandatory: false,
        default: false
      },
      version: {
        type: 'string',
        readOnly: false,
        mandatory: false,
        default: '0.0.1'
      },
      description: {
        type: 'string',
        readOnly: false,
        mandatory: false,
        default: ''
      },
      schemas: {
        type: 'object',
        readOnly: false,
        mandatory: false,
        default: {}
      },
      models: {
        type: 'object',
        readOnly: false,
        mandatory: false,
        default: {}
      },
      behaviors: {
        type: 'object',
        readOnly: false,
        mandatory: false,
        default: {}
      },
      types: { type: 'object', readOnly: false, mandatory: false, default: {} },
      components: {
        type: 'object',
        readOnly: false,
        mandatory: false,
        default: {}
      },
      _id: '170521b88614387'
    },
    '1b2811b092143f5': {
      _id: '1b2811b092143f5',
      _name: '_SystemOSGi',
      start: {},
      stop: {},
      _core: true,
      state: {
        type: 'string',
        readOnly: false,
        mandatory: false,
        default: 'none'
      },
      location: {
        type: 'string',
        readOnly: false,
        mandatory: false,
        default: ''
      }
    }
  },
  behaviors: {
    '12e491859c13918': {
      _id: '12e491859c13918',
      component: '_Channel',
      state: '$systemStarted',
      action:
        "function $systemStarted(id) { \n  var systems = null;\n    \n  if (id !== 'e89c617b6b15d24') {\n    if (typeof document !== 'undefined') {\n      systems = document.querySelectorAll('link[rel=system]');\n         \n      if ($state.get('runtime') && $state.get('runtime').state === 'ready') {    \n      } else {\n        if (systems.length + 1 === $db._System.count()) {\n          $component.get('runtime').ready();\n        }\n      }\n    }\n  }\n}",
      useCoreAPI: true,
      core: true
    },
    '1e9021bd4e1bc6e': {
      _id: '1e9021bd4e1bc6e',
      component: '_Channel',
      state: '$systemInstalled',
      action:
        "function $systemInstalled(id) {\n  var systems = null,\n    dependencies = [],\n    master = [],\n    canStart = true;\n\n  if (id !== 'e89c617b6b15d24') {\n    // if all systems are installed\n    systems = $db._System.find({});\n\n    systems.forEach(function (system) {\n      var sys = this.require(system._id);\n      if (sys && sys.state && sys.state() === 'none') {\n        canStart = false;\n      }\n    }.bind(this));\n\n    // start all the systems\n    if (canStart) {\n      dependencies = $db._System.find({\n        'master': false\n      });\n\n      dependencies.forEach(function (dep) {\n        var system = this.require(dep._id);\n        channel = this.require('channel');\n\n        if (system.state() === 'resolved') {\n          system.state('starting');\n          system.start();\n          channel.$systemStarted(dep._id);\n          system.state('active');\n        }\n      }.bind(this));\n\n      master = $db._System.find({\n        'master': true\n      });\n\n      master.forEach(function (dep) {\n        var system = this.require(dep._id);\n        channel = this.require('channel');\n\n        if (system && system.state && system.state() === 'resolved') {\n          system.state('starting');\n          system.start();\n          channel.$systemStarted(dep._id);\n          system.state('active');\n        }\n      }.bind(this));\n    }\n  }\n}",
      useCoreAPI: true,
      core: true
    },
    '155141e40312cd8': {
      _id: '155141e40312cd8',
      component: '_ClassInfo',
      state: 'collection',
      action:
        "function collection(name) {\n  var result = {};\n  if (this.schema()[name] === 'collection') {\n    result = this.model()[name];\n  }\n\n  return result;\n}",
      core: true
    },
    '1f6941a0c012c1f': {
      _id: '1f6941a0c012c1f',
      component: '_ClassInfo',
      state: 'collections',
      action:
        "function collections(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'collection') {\n      result.push(item);\n    }\n  }\n\n  return result;\n}",
      core: true
    },
    '1ef711b4171c849': {
      _id: '1ef711b4171c849',
      component: '_ClassInfo',
      state: 'event',
      action:
        "function event(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'event') {\n    result = this.model()[name];\n  }\n\n  return result;\n}",
      core: true
    },
    '1bae51b6ed1d25c': {
      _id: '1bae51b6ed1d25c',
      component: '_ClassInfo',
      state: 'events',
      action:
        "function events(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'event') {\n      result.push(item);\n    }\n  }\n  return result;\n}",
      core: true
    },
    '19ac2125221528b': {
      _id: '19ac2125221528b',
      component: '_ClassInfo',
      state: 'link',
      action:
        "function link(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'link') {\n    result = this.model()[name];\n  }\n  return result;\n}",
      core: true
    },
    '17ed21dfc01b8e8': {
      _id: '17ed21dfc01b8e8',
      component: '_ClassInfo',
      state: 'links',
      action:
        "function links(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'link') {\n      result.push(item);\n    }\n  } return result;\n}",
      core: true
    },
    '11ce318a561ac61': {
      _id: '11ce318a561ac61',
      component: '_ClassInfo',
      state: 'method',
      action:
        "function method(name) {\n  var result = {};\n  if (this.schema()[name] === 'method') {\n    result = this.model()[name];\n  }\n  \n  return result;\n}",
      core: true
    },
    '12ff2190a018046': {
      _id: '12ff2190a018046',
      component: '_ClassInfo',
      state: 'methods',
      action:
        "function methods(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'method') {\n      result.push(item);\n    }\n  }\n\n  return result;\n}",
      core: true
    },
    '1028d1681e1fd58': {
      _id: '1028d1681e1fd58',
      component: '_ClassInfo',
      state: 'properties',
      action:
        "function properties(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'property') {\n      result.push(item);\n    }\n  } return result;\n}",
      core: true
    },
    '18eeb10c5319368': {
      _id: '18eeb10c5319368',
      component: '_ClassInfo',
      state: 'property',
      action:
        "function property(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'property') {\n    result = this.model()[name];\n  }\n  return result;\n}",
      core: true
    },
    '1ba721201114b6b': {
      _id: '1ba721201114b6b',
      component: '_Component',
      state: 'destroy',
      action: 'function destroy() {\n  $component.destroy(this.id());\n}',
      core: true,
      useCoreAPI: true
    },
    '15486186f41a48c': {
      _id: '15486186f41a48c',
      component: '_Component',
      state: 'off',
      action:
        'function off(state, behaviorId) {\n  var args = [],\n    i = 0,\n    numInjectedParams = 8,\n    length = arguments.length;\n\n  if ($helper.isOnNode()) {\n    numInjectedParams = numInjectedParams +1;\n  }\n\n  for (i = 0; i < length - numInjectedParams; i++) {\n    args.push(arguments[i]);\n  }\n\n  if ($workflow.checkParams({\n    "component": this,\n    "methodName": "off",\n    "args": args\n  })) {\n\n    if (state || behaviorId) {\n      if ($metamodel.isValidState(state, this.constructor.name)) {\n        $behavior.remove({\n          "behaviorId": behaviorId,\n          "componentId": this.id(),\n          "state": state\n        });\n      } else {\n        this.require(\'logger\').warn("invoke \\\'off\\\' method of component \'" + this.id() + "\' with an invalid state \'" + state + "\'");\n      }\n    } else {\n      $behavior.remove({\n        "componentId": this.id()\n      });\n    }\n  }\n}',
      core: true,
      useCoreAPI: true
    },
    '1da0a17878104c3': {
      _id: '1da0a17878104c3',
      component: '_Component',
      state: 'require',
      action: 'function require(id) {\n  return $component.get(id);\n}',
      core: true,
      useCoreAPI: true
    },
    d152631c35813f2e: {
      _id: 'd152631c35813f2e',
      component: '_Component',
      state: 'classInfo',
      action:
        "function classInfo() { \n\tconst className = this.constructor.name;\n\tlet result;\n\t\n\tif (className !== 'Function') {\n\t  result = this.require(className + 'Info');\n\t}\n\t\n\treturn result;\n}",
      useCoreAPI: false,
      core: true
    },
    '1a5111d17a1800c': {
      _id: '1a5111d17a1800c',
      component: '_Database',
      state: 'collections',
      action:
        "function collections() {\n  var result = {},\n    collectionName = '';\n\n  for (collectionName in $db.store) {\n    if ($db.store.hasOwnProperty(collectionName)) {\n      result[collectionName] = $db[collectionName];\n    }\n  }\n  return result;\n}",
      core: true,
      useCoreAPI: true
    },
    '1d993108fa18ef2': {
      _id: '1d993108fa18ef2',
      component: '_Logger',
      state: 'debug',
      action:
        "function debug(message) {\n  if (this.level() === 'debug') {\n    console.log('runtime: ' + message);\n  }\n}",
      core: true
    },
    '1a37a188e11fe73': {
      _id: '1a37a188e11fe73',
      component: '_Logger',
      state: 'error',
      action:
        "function error(message) {\n  console.error('runtime: ' + message);\n}",
      core: true
    },
    '1edd21e12a16534': {
      _id: '1edd21e12a16534',
      component: '_Logger',
      state: 'info',
      action:
        "function info(message) {\n  if (this.level() === 'info' || this.level() === 'debug') {\n    console.info('runtime: ' + message);\n  }\n}",
      core: true
    },
    '141f2143d3122a4': {
      _id: '141f2143d3122a4',
      component: '_Logger',
      state: 'level',
      action: 'function level(val) {\n  $log.level(val);\n}',
      core: true,
      useCoreAPI: true
    },
    '192401bab21304e': {
      _id: '192401bab21304e',
      component: '_Logger',
      state: 'warn',
      action:
        "function warn(message) {\n  if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {\n    console.warn('runtime: ' + message);\n  }\n}",
      core: true
    },
    '11fc715e2f1a31e': {
      _id: '11fc715e2f1a31e',
      component: '_Metamodel',
      state: 'create',
      action: 'function create() {\n  $metamodel.create();\n}',
      core: true,
      useCoreAPI: true
    },
    '1232f1f107142cf': {
      _id: '1232f1f107142cf',
      component: '_Metamodel',
      state: 'model',
      action: 'function model(model) {\n  return $metamodel.model(model);\n}',
      core: true,
      useCoreAPI: true
    },
    '1365412f69153d2': {
      _id: '1365412f69153d2',
      component: '_Metamodel',
      state: 'schema',
      action:
        'function schema(schema) {\n  return $metamodel.schema(schema);\n}',
      core: true,
      useCoreAPI: true
    },
    '194db147fe161a2': {
      _id: '194db147fe161a2',
      component: '_Metamodel',
      state: 'type',
      action: 'function type(type) {\n  return $metamodel.type(type);\n}',
      core: true,
      useCoreAPI: true
    },
    '1ef951f1411b895': {
      _id: '1ef951f1411b895',
      component: '_OSGi',
      state: 'install',
      action:
        "function install(url, async) {\n  var importedSystem = null,\n    system = {},\n    systemId = '',\n    callbackLoad = null,\n    xhr = null,\n    result = '',\n    channel = $component.get('channel');\n\n  if (typeof url === 'object') {\n    importedSystem = url;\n  } else {\n    if (url.indexOf('{') === 0) {\n      importedSystem = JSON.parse(url);\n    }\n  }\n\n  if (importedSystem) {\n    systemId = $db.importSystem(importedSystem);\n    if (systemId) {\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    }\n  } else {\n    if (typeof global !== 'undefined' && typeof window === 'undefined') {\n      if (url.indexOf('.json') !== -1) {\n        system = require(global.process.env.PWD + '/' + url);\n      } else {\n        system = require(url);\n      }\n      systemId = $db.importSystem(system);\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    } else {\n      xhr = new XMLHttpRequest();\n      callbackLoad = function callbackLoad(system, url) {\n        var sysId = $db.importSystem(system),\n          sys = $component.get(sysId),\n          channel = $component.get('channel');\n\n        if (typeof url === 'string') {\n          sys.location(url);\n        }\n        sys.state('installed');\n        channel.$systemInstalled(sysId);\n        sys.state('resolved');\n        channel.$systemResolved(sysId);\n\n        result = sysId;\n      };\n\n      if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status === 200 || xhr.status === 0) {\n              callbackLoad(JSON.parse(xhr.response), url);\n            }\n          }\n        };\n        xhr.send(null);\n      } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200 || xhr.status === 0) {\n          callbackLoad(JSON.parse(xhr.response), url);\n        }\n      }\n    }\n  }\n  return result;\n}",
      useCoreAPI: true,
      core: true
    },
    '14c1517b711cb78': {
      _id: '14c1517b711cb78',
      component: '_OSGi',
      state: 'uninstall',
      action:
        "function uninstall(id) {\n  var search = {},\n    system = null,\n    behaviorId = '',\n    collection = '',\n    componentId = '',\n    length = 0,\n    i = 0,\n    coreComponents = ['admin', 'channel', 'db', 'logger', 'metamodel', 'runtime'];\n\n  search = $db._System.find({\n    '_id': id\n  });\n\n  if (search.length) {\n    system = search[0];\n    // remove behaviors\n    if (system.behaviors) {\n      for (behaviorId in system.behaviors) {\n        $db._Behavior.remove({\n          '_id': system.behaviors[behaviorId]._id\n        });\n      }\n    }\n    // remove components\n    if (system.components) {\n      for (collection in system.components) {\n        for (componentId in system.components[collection]) {\n          if (coreComponents.indexOf(componentId) === -1) {\n            $db[collection].remove({\n              '_id': componentId\n            });\n          }\n        }\n      }\n    }\n  }\n  if (this.require(id) && this.require(id).state) {\n    this.require(id).state('uninstalled');\n    this.require('channel').$systemUninstalled(id);\n  }\n}",
      useCoreAPI: true,
      core: true
    },
    '105f219c6813643': {
      _id: '105f219c6813643',
      component: '_OSGi',
      state: 'start',
      action:
        "function start(id) {\n  var system = this.require(id),\n    channel = this.require('channel');\n\n  if (system.state() === 'resolved' || system.state() === 'installed') {\n    system.state('starting');\n    if (system.start) {\n      system.start();\n    }\n    channel.$systemStarted(id);\n    system.state('active');\n  }\n}",
      useCoreAPI: false,
      core: true
    },
    '1a81a1f00d17269': {
      _id: '1a81a1f00d17269',
      component: '_OSGi',
      state: 'stop',
      action:
        "function stop(id) {\n  var system = this.require(id),\n    channel = this.require('channel');\n\n  if (system.state() === 'active') {\n    system.state('stopping');\n    if (system.stop) {\n      system.stop();\n    }\n    channel.$systemStopped(id);\n    system.state('resolved');\n    channel.$systemResolved(id);\n  }\n}",
      useCoreAPI: false,
      core: true
    },
    '116851b602128d1': {
      _id: '116851b602128d1',
      component: '_OSGi',
      state: 'status',
      action:
        "function status() {\n  var result = {},\n    system = null,\n    length = 0,\n    i = 0;\n\n  systems = $db._System.find({});\n\n  length = systems.length;\n  for (i = 0; i < length; i++) {\n    system = systems[i];\n    result[system.name] = {\n      'id': system._id,\n      'state': system.state,\n      'name': system.name,\n      'version': system.version,\n      'location': system.location,\n      'master': system.master\n    };\n  }\n\n  return result;\n}",
      useCoreAPI: true,
      core: true
    },
    '19cf317d7217331': {
      _id: '19cf317d7217331',
      component: '_OSGi',
      state: 'bundle',
      action:
        'function bundle() { \n\tvar result = $db.exportSystem();\n\treturn result;\n}',
      useCoreAPI: true,
      core: true
    },
    '13010167f313f87': {
      _id: '13010167f313f87',
      component: '_Runtime',
      state: 'system',
      action:
        "function system(params) {\n  var RuntimeSystem = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n\n  if (params) {\n    if (typeof params === 'string') {\n      conf.master = true;\n      conf.name = params;\n    } else {\n      conf = params;\n      conf.master = true;\n    }\n    RuntimeSystem = this.require('_System');\n    system = new RuntimeSystem(conf);\n    system.state('active');\n  } else {\n    result = $db._System.find({\n      'master': true\n    });\n    if (result.length) {\n      systemId = result[0]._id;\n      system = $component.get(systemId);\n    }\n  }\n  return system;\n}",
      core: true,
      useCoreAPI: true
    },
    '1cfa4145f614da8': {
      _id: '1cfa4145f614da8',
      component: '_Runtime',
      state: 'message',
      action: 'function message(msg) { \n  $db._Message.insert(msg);\n}',
      useCoreAPI: true,
      core: true
    },
    '1cb9d103d41dd97': {
      _id: '1cb9d103d41dd97',
      component: 'e89c617b6b15d24',
      state: 'start',
      action:
        "function start() {\n  if (typeof document !== 'undefined') {\n    document.addEventListener('DOMContentLoaded', function DOMContentLoaded(e) {\n      var systems = [],\n        system = null,\n        scripts = [],\n        script = null,\n        logLevel = 'warn',\n        i = 0,\n        length = 0;\n    \n      systems = document.querySelectorAll('link[rel=system]');\n      length = systems.length;\n  \n      // logger\n      scripts = document.querySelectorAll('script[log]');\n      if (scripts.length) {\n        logLevel = scripts[0].getAttribute('log');\n        this.require('logger').level(logLevel);\n      }\n  \n      // systems\n      for (i = 0; i < length; i++) {\n        system = systems[i];\n  \n        if (system.getAttribute('async') === 'false') {\n          this.require('runtime').install(system.href, false);\n        } else {\n          this.require('runtime').install(system.href, true);\n        }\n      }\n  \n      // ready event\n      if (length === 0) {\n        this.require('runtime').ready();\n      }\n  }.bind(this));\n  }\n}",
      useCoreAPI: true,
      core: true
    }
  },
  types: {
    css: { _id: 'h1d88311ac019211', name: 'css', type: 'string', core: true },
    date: { _id: 'c17cad1bc3d17752', name: 'date', type: 'object', core: true },
    json: { _id: 'e1d25a12e67127ed', name: 'json', type: 'object', core: true },
    dbInsertEvent: {
      _id: '148ef1e19810e6d',
      core: true,
      name: 'dbInsertEvent',
      type: 'object',
      schema: {
        collection: { type: 'string', mandatory: true, default: '' },
        document: { type: 'object', mandatory: true, default: {} }
      }
    },
    dbRemoveEvent: {
      _id: '1952e1ac4213f4a',
      name: 'dbRemoveEvent',
      type: 'object',
      core: true,
      schema: {
        collection: { type: 'string', mandatory: true, default: '' },
        id: { type: 'string', mandatory: true, default: '' }
      }
    },
    dbUpdateEvent: {
      _id: '1f5c41309711752',
      core: true,
      name: 'dbUpdateEvent',
      type: 'object',
      schema: {
        collection: { type: 'string', mandatory: true, default: '' },
        id: { type: 'string', mandatory: true, default: '' },
        field: { type: 'string', mandatory: true, default: '' },
        value: { type: 'any', mandatory: true, default: null }
      }
    },
    dbAction: {
      _id: 'e1950e16f2914da9',
      core: true,
      name: 'dbAction',
      type: 'string',
      value: ['insert', 'update', 'remove']
    },
    collection: {
      _id: 'd1c0d0130c616199',
      name: 'collection',
      type: 'object',
      schema: {
        type: { type: ['string'], mandatory: true },
        readOnly: { type: 'boolean', mandatory: true },
        mandatory: { type: 'boolean', mandatory: true },
        default: { type: 'object', mandatory: true },
        description: { type: 'string', mandatory: false },
        label: { type: 'string', mandatory: false }
      },
      core: true
    },
    errorParam: {
      _id: 'e198761fc0b1ae8a',
      name: 'errorParam',
      type: 'object',
      schema: {
        message: { type: 'string', mandatory: true },
        error: { type: 'object', mandatory: true }
      },
      core: true
    },
    event: {
      _id: 'g1668d1de2d1ff6f',
      name: 'event',
      type: 'object',
      schema: {
        params: { type: ['parameter'], mandatory: false },
        description: { type: 'string', mandatory: false }
      },
      core: true
    },
    html: { _id: 'y161c21320b11acb', name: 'html', type: 'string', core: true },
    javascript: {
      _id: 's13d4c1fdf916504',
      name: 'javascript',
      type: 'string',
      core: true
    },
    link: {
      _id: 'p124601801d1dbfa',
      name: 'link',
      type: 'object',
      schema: {
        type: { type: 'string', mandatory: true },
        readOnly: { type: 'boolean', mandatory: true },
        mandatory: { type: 'boolean', mandatory: true },
        default: { type: '{type}', mandatory: true },
        description: { type: 'string', mandatory: false },
        label: { type: 'string', mandatory: false }
      },
      core: true
    },
    log: {
      _id: 'd1fd161a4a4149fc',
      name: 'log',
      type: 'string',
      value: ['debug', 'info', 'warn', 'error'],
      core: true
    },
    message: {
      _id: 'l13b061ac571272d',
      name: 'message',
      type: 'object',
      schema: {
        event: { type: 'string', mandatory: true },
        from: { type: 'string', mandatory: false },
        data: { type: 'object', mandatory: true }
      },
      core: true
    },
    method: {
      _id: 'x1227218eed1f3e9',
      name: 'method',
      type: 'object',
      schema: {
        result: { type: 'string', mandatory: false },
        params: { type: ['parameter'], mandatory: false },
        description: { type: 'string', mandatory: false }
      },
      core: true
    },
    osgiStates: {
      _id: 'q1f0ca120fc13fb3',
      name: 'osgiStates',
      type: 'string',
      value: [
        'none',
        'installed',
        'resolved',
        'starting',
        'active',
        'stopping',
        'uninstalled'
      ],
      core: true
    },
    parameter: {
      _id: 'e1b18e16c6c195ad',
      name: 'parameter',
      type: 'object',
      schema: {
        description: { type: 'string', mandatory: false },
        name: { type: 'string', mandatory: true },
        type: { type: 'string', mandatory: true },
        mandatory: { type: 'boolean', mandatory: false },
        default: { type: '{type}', mandatory: false }
      },
      core: true
    },
    property: {
      _id: 'a16a3a1ae051a55d',
      name: 'property',
      type: 'object',
      schema: {
        type: { type: 'string', mandatory: true },
        readOnly: { type: 'boolean', mandatory: true },
        mandatory: { type: 'boolean', mandatory: true },
        default: { type: '{type}', mandatory: true },
        description: { type: 'string', mandatory: false },
        label: { type: 'string', mandatory: false }
      },
      core: true
    },
    text: { _id: 'c136fc129a912f54', name: 'text', type: 'string', core: true }
  },
  components: {
    _Channel: { channel: { _id: 'channel' } },
    _Database: { db: { _id: 'db' } },
    _Logger: { logger: { _id: 'logger', level: 'warn' } },
    _Metamodel: { metamodel: { _id: 'metamodel' } },
    _Runtime: { runtime: { _id: 'runtime', version: '2.5.0' } }
  },
  _id: 'e89c617b6b15d24'
};

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
      '__body',
      'return function ' +
        name +
        ' (' +
        params.join(',') +
        ") { return new Function('" +
        params.join("','") +
        "', __body).apply(this, arguments) };"
    )(funcBody);
  } else {
    action = new Function(
      '__body',
      'return function ' +
        name +
        ' () { return new Function(__body).apply(this, arguments) };'
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

  conf = conf || {};
  type = conf.type || '';
  id = conf.id || '';
  propertyName = conf.propertyName || '';
  arrDb = conf.arr || [];
  classId = conf.classId || '';

  if (typeof conf.readOnly !== 'undefined') {
    isReadOnly = conf.readOnly;
  }

  // init
  arrDb.forEach(function(val) {
    if ($metamodel.isClassName(type)) {
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
      if ($metamodel.isClassName(type)) {
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
    var isClass = false;
    var i = 0;
    var length = 0;
    var del = [];

    if (!isReadOnly) {
      isClass = $metamodel.isClassName(type);

      if (isClass) {
        if (
          val &&
          $metamodel.inheritFrom(val.constructor.name, type.replace('@', ''))
        ) {
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
                $workflow.state({
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

          $workflow.state({
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

          $workflow.state({
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
    var isClass = false;

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

        isClass = $metamodel.isClassName(type);

        if (isClass) {
          result = store[val];
        } else {
          result = val;
        }

        $workflow.state({
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
   * @method pop
   * @returns {_Component|Object} value
   * @description Override pop method
   */
  arr.pop = function pop() {
    var result = _remove('pop');
    _copy();

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
    var isClass = false;
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
        isClass = $metamodel.isClassName(type);
        if (isClass) {
          data = store[result[i]];
        } else {
          data = result[i];
        }

        $workflow.state({
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
 * @param {String} name of the property
 * @param {String} name of the model
 * @returns {Array} list of property schema of the structure type
 * @private
 * @description Get the schema of a structure
 */
function getStructureProperties(propertyName, model) {
  var modelDef = null;
  var type = null;
  var structure = null;
  var result = [];
  var propNames = [];

  modelDef = $metamodel.getModel(model);
  type = modelDef[propertyName].type;
  structure = $metamodel.getType(type);

  if (structure.schema) {
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

  result = doc;

  for (i = 0; i < length; i++) {
    result = result[subPath[i]];
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

  result = doc;

  for (i = 0; i < length - 1; i++) {
    result = result[subPath[i]];
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
  var body = function body(config) {
    config = config || {};
    var body = {};

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
    body = function body() {
      return config._id;
    };
    this.id = new Function(
      '__body',
      'return function id () { return __body.call(this) };'
    )(body);

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
    '__body',
    'return function ' + classId + ' (config) { __body.call(this,config) };'
  )(body);
}

/**
 * @method addIdClass
 * @param {Function} Class a class
 * @param {String} classId name of the class
 * @private
 * @description Add an id method to a class that will return its id
 */
function addIdClass(Class, classId) {
  var body = function body() {
    return classId;
  };
  Class.id = new Function(
    '__body',
    'return function id () { return __body.call(this) };'
  )(body);
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
    var body = {};
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
            ($metamodel.inheritFrom(
              val.constructor.name,
              type.replace('@', '')
            ) &&
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
      body = function body(position, value) {
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

                  $workflow.state({
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
                  if (
                    $metamodel.isClassName(
                      propertyType === 'array' ? 'array' : propertyType[0]
                    )
                  ) {
                    realVal = $helper.getRuntime().require(val);
                  } else {
                    realVal = val;
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
                propertyType === 'array'
                  ? 'array'
                  : propertyType[0].replace('@', '')
              ) &&
                $metamodel.isClassName(
                  propertyType === 'array' ? 'array' : propertyType[0]
                ))
            ) {
              search = $db[classId].find({
                _id: this.id()
              });
              if (search.length) {
                if (
                  $metamodel.isClassName(
                    propertyType === 'array' ? 'array' : propertyType[0]
                  )
                ) {
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
                } else {
                  realVal = value;
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

                $workflow.state({
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
        '__body',
        'return function ' +
          propertyName +
          ' (position, value) { return __body.call(this, position, value) };'
      )(body);
    } else {
      body = function body(value) {
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
                propertyValue = JSON.parse(
                  JSON.stringify(component[propertyName])
                );
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

                $workflow.state({
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
        '__body',
        'return function ' +
          propertyName +
          ' (value) { return __body.call(this,value) };'
      )(body);
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
  var properties = getStructureProperties(name, model);
  var sructure = {};

  properties.forEach(function property(prop) {
    var body = {};
    var propertyName = '';
    var propertyType = '';
    var propertyReadOnly = '';

    propertyName = prop.name;
    propertyType = prop.type;
    propertyReadOnly = prop.readOnly;

    if (propertyType === 'array') {
      // in case of array, return a sub array
      body = function body(position, value) {
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

          return true;
        }

        if (path) {
          parentPath = parentPath + '.' + name;
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
              type: 'any',
              arr: getStructureValue(model, id, fullPath)
            });

            return runtimeArr;
          } else {
            if (Array.isArray(position)) {
              // we replace the collection
              if (_isValidCollection(position, 'any')) {
                search = $db[model].find({
                  _id: id
                });
                if (search.length) {
                  setStructureValue(model, id, fullPath, position);

                  $workflow.state({
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
                val = getStructureValue(model, id, fullPath)[position];
                return val;
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
            if ($metamodel.isValidType(value, 'any')) {
              search = $db[model].find({
                _id: id
              });
              if (search.length) {
                var arr = getStructureValue(model, id, fullPath);
                if (typeof arr === 'undefined') {
                  arr = [];
                }
                arr[position] = value;
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

                $workflow.state({
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
                propertyType
              );
            }
          }
        }
      };

      sructure[propertyName] = new Function(
        '__body',
        'return function ' +
          propertyName +
          ' (position, value) { return __body.call(this, position, value) };'
      )(body);
    } else {
      body = function body(value) {
        var search = [];
        var component = null;
        var propertyValue = null;
        var parentPath = '';
        var fullPath = '';

        if (path) {
          parentPath = parentPath + '.' + name;
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
                propertyValue = JSON.parse(
                  JSON.stringify(getStructureValue(model, id, fullPath))
                );
                break;
              case $metamodel.isStructure(propertyName, model):
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
                    setStructureValue(model, id, fullPath, value.toISOString());
                    break;
                  default:
                    setStructureValue(model, id, fullPath, value);
                    break;
                }

                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
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

                $workflow.state({
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
        '__body',
        'return function ' +
          propertyName +
          ' (value) { return __body.call(this,value) };'
      )(body);
    }
  });

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

    var body = function body() {
      var result = null;

      result = $workflow.state({
        component: this.id(),
        state: methodName,
        data: arguments
      });

      return result;
    };

    var bodyWithContext = function body() {
      var result = null;
      var data = Array.prototype.slice.call(arguments);

      data.shift();

      if (arguments[0]) {
        result = $workflow.state({
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
        '__body',
        'return function ' +
          methodName +
          ' (' +
          params +
          ') { return __body.call(this,' +
          params +
          ') };'
      )(body);
      if (methodName !== 'name') {
        Class[methodName] = new Function(
          '__body',
          'return function ' +
            methodName +
            ' (' +
            paramsWithContext +
            ') { return __body.call(this,' +
            paramsWithContext +
            ') };'
        )(bodyWithContext);
      }
    } else {
      Class.prototype[methodName] = new Function(
        '__body',
        'return function ' + methodName + ' () { return __body.call(this) };'
      )(body);
      if (methodName !== 'name') {
        Class[methodName] = new Function(
          '__body',
          'return function ' +
            methodName +
            ' (context) { return __body.call(this, context) };'
        )(bodyWithContext);
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

    var body = function body() {
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

        $workflow.state({
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
        $workflow.state({
          component: this.id(),
          state: methodName,
          data: arguments
        });
      }
    };
    if (params) {
      Class.prototype[methodName] = new Function(
        '__body',
        'return function ' +
          methodName +
          ' (' +
          params +
          ') { return __body.call(this,' +
          params +
          ') };'
      )(body);
    } else {
      Class.prototype[methodName] = new Function(
        '__body',
        'return function ' + methodName + ' () { return __body.call(this) };'
      )(body);
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
  var body = function body(state, action, useCoreAPI, isCore) {
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
      $workflow.checkParams({
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
          if ($workflow.validParamNumbers(classId, state, action)) {
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
              $workflow.action(behaviorId, currentState.value);
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
    '__body',
    'return function on (state, action, useCoreAPI, isCore) { return __body.call(this, state, action, useCoreAPI, isCore) };'
  )(body);
}

/**
 * @method addOnClass
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add a on method to a class component to add behaviors to the class
 */
function addOnClass(Class, classId) {
  var body = function body(state, action, useCoreAPI, isCore) {
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
      $workflow.checkParams({
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
          if ($workflow.validParamNumbers(classId, state, action)) {
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
              $workflow.action(behaviorId, currentState.value);
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
    '__body',
    'return function on (state, action, useCoreAPI, isCore) { return __body.call(this, state, action, useCoreAPI, isCore) };'
  )(body);
}

/**
 * @method addOffClass
 * @param {Object} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add a off method to a class component to remove behaviors from the class
 */
function addOffClass(Class, classId) {
  var body = function body(state, behaviorId) {
    if (
      $workflow.checkParams({
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
    '__body',
    'return function off (state, behaviorId) { return __body.call(this, state, behaviorId) };'
  )(body);
}

/**
 * @method addDestroyClass
 * @param {Object} Class Class
 * @private
 * @description Add a destroy method to a class component to detroy the class and all the components of the same class
 */
function addDestroyClass(Class) {
  var body = function body() {
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

    $workflow.state({
      component: id,
      state: 'destroy'
    });
  };
  Class.destroy = new Function(
    '__body',
    'return function destroy () { return __body.call(this) };'
  )(body);
}

/**
 * @method addRequireClass
 * @param {Object} Class Class
 * @private
 * @description Require a component
 */
function addRequireClass(Class) {
  var body = function body(id) {
    return exports.get(id);
  };
  Class.require = new Function(
    '__body',
    'return function require (id) { return __body.call(this, id) };'
  )(body);
}

/**
 * @method addInitClass
 * @param {Object} Class Class
 * @private
 * @description Init a class
 */
function addInitClass(Class) {
  var body = function body() {};
  Class.init = new Function(
    '__body',
    'return function init (conf) { return __body.call(this, conf) };'
  )(body);
}

/**
 * @method addClassInfoClass
 * @param {Object} Class Class
 * @private
 * @description Add the ClassInfo method on a class
 */
function addClassInfoClass(Class) {
  var body = function body() {
    return exports.get(this.id() + 'Info');
  };
  Class.classInfo = new Function(
    '__body',
    'return function classInfo () { return __body.call(this) };'
  )(body);
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
                $workflow.state({
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
                  $workflow.state({
                    component: docs[i]._id,
                    state: attributeName,
                    data: [update[attributeName], 'reset']
                  });
                } else {
                  $workflow.state({
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

  if (!runtimeRef) {
    runtimeId = $db._Runtime.find()[0]._id;
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
  getLogger().warn(
    "invalid type for property '" +
      propertyName +
      "': expected type '" +
      type +
      "' instead of type '" +
      typeof property +
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

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }

  if (typeof type === 'string') {
    getLogger().warn(
      "invalid type for property '" +
        propertyName +
        "' on component '" +
        id +
        "'" +
        classInfo +
        ": expected '" +
        type.replace('@', '') +
        "' instead of '" +
        typeof propertyValue +
        "'"
    );
  } else {
    getLogger().warn(
      "invalid type for property type '" +
        propertyName +
        "' on component '" +
        classInfo +
        ": expected 'string' instead of '" +
        typeof type +
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

  if (type) {
    getLogger().warn(
      "invalid type for the result of method '" +
        methodName +
        "' on component '" +
        id +
        "'" +
        classInfo +
        ": expected type '" +
        expectedType.replace('@', '') +
        "' instead of type '" +
        type +
        "'"
    );
  } else {
    getLogger().warn(
      "invalid type for the result of method '" +
        methodName +
        "' on component '" +
        id +
        "'" +
        classInfo +
        ": expected type '" +
        expectedType.replace('@', '') +
        "'"
    );
  }
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
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 * @description Invalid type
 */
exports.invalidType = function invalidType(value, typeName) {
  getLogger().warn(
    "invalid type for value '" +
      JSON.stringify(value) +
      "': expected '" +
      typeName +
      "'"
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
  if (typeof type !== 'undefined' && type !== typeof value) {
    getLogger().warn(
      "invalid type for enumerated type '" +
        typeName +
        "': expected type '" +
        type +
        "' instead of type '" +
        typeof value +
        "'"
    );
  } else {
    getLogger().warn("invalid type for enumerated type '" + typeName + "'");
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
  getLogger().debug("generate model '" + name + "'...");
};

/**
 * @method checkModel
 * @param {String} name name of the model
 * @description Check model
 */
exports.checkModel = function checkModel(name) {
  getLogger().debug("analyze model '" + name + "'...");
};

/**
 * @method createCollection
 * @param {String} name name of the collection
 * @description Create collection
 */
exports.createCollection = function createCollection(name) {
  getLogger().debug("create collection '" + name + "'");
};

/**
 * @method createClass
 * @param {String} name name of the class
 * @description Create class
 */
exports.createClass = function createClass(name) {
  getLogger().debug("create class '" + name + "'");
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
    "invalid format for a definition of a property': '" +
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
                name: 'param',
                type: 'any',
                mandatory: false
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
                name: 'param',
                type: 'any',
                mandatory: false
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
  return value.replace('@', '').trim();
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

/* Public methods */

/**
 * @method schema
 * @param {JSON} schema schema
 * @description Add a new schema to the metamodel
 */
exports.schema = function schema(schema) {
  var id = null;
  var result = [];
  var name = '';
  var mergedSchema = {};
  var schemas = [];

  schema = JSON.parse(JSON.stringify(schema));
  name = schema[NAME];

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
      _name: name
    });
    if (schemas.length) {
      mergedSchema = merge(schema, schemas[0]);
      $db._Schema.update(
        {
          _name: name
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
 * @param {JSON} model model
 * @description Add a new model to the metamodel
 */
exports.model = function model(model) {
  var id = null;
  var result = [];
  var inherit = '';
  var name = '';
  var mergedModel = {};
  var models = [];

  model = JSON.parse(JSON.stringify(model));
  name = model[NAME];

  if (typeof model[ID] === 'undefined') {
    model[ID] = $helper.generateId();
  }

  // check if model is compliant with the meta meta model
  if (exports.isValidObject(model, store.metadef.model, false)) {
    models = $db._Model.find({
      _name: name
    });
    if (models.length) {
      mergedModel = merge(model, models[0]);
      $db._Model.update(
        {
          _name: name
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
 * @param {JSON} importedType type to add
 * @description Add a new type
 */
exports.type = function type(importedType) {
  var id = null;
  var result = [];
  var name = importedType.name;

  // check if type is compliant with the meta meta model
  if (exports.isValidObject(importedType, store.metadef.type)) {
    result = $db._Type.insert(importedType);
    id = result[0];
  } else {
    $log.invalidTypeDefinition(name);
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
        mandatory: false
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
 * @param {String} name name of the propertys
 * @param {String} id component id
 * @returns {Boolean} true if the property is a structure
 * @description Check if an attribute of the schema is a structure
 */
exports.isStructure = function isStructure(name, id) {
  var result = false;
  var model = store.generatedModels[id];
  var attributeType = '';
  var type = '';

  if (model[name]) {
    type = store.type[model[name].type];
  }

  if (type && type.schema) {
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
    var isValid = true;
    var typeRef = getRealClassName(typeName);
    var component = value;

    if (value !== '' && value !== null) {
      if (hasType(value, 'string')) {
        component = $component.get(value);
      }
      if (
        getClassName(component) !== typeRef &&
        JSON.stringify(component) !== '{}'
      ) {
        isValid = false;
        $log.invalidType(value, typeName.replace('@', ''));
      }
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
    typeRef = typeRef.replace('@', ''); // backward compatibility
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
    typeRef = typeRef.replace('@', ''); // backward compatibility
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
        length = field.length;
        for (i = 0; i < length; i++) {
          if (isCustomType(typeSchema[0])) {
            isValid = isValidSchema(field[i], store.type[typeSchema[0]].schema);
          } else {
            if (!hasType(field[i], typeSchema[0])) {
              $log.invalidPropertyType(field[i], typeSchema[0], field[i]);
              isValid = false;
              break;
            }
          }
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
          result = _isValidClassName();
          break;
        case isTypeReference(typeSchema):
          result = _isValidTypeReference();
          break;
        default:
          result = _isValidType();
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
        $log.invalidType(field, typeRef);
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
                  $log.invalidPropertyType(field[i], typeArray, field[i]);
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
          $log.invalidType(field, 'array');
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
    $log.invalidType(object, 'object');
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
        result = _isValidCustomType(field, typeSchema);
        break;
      case exports.isClassName(typeSchema):
        result = _isValidClassName(field, typeSchema);
        break;
      default:
        result = _isValidType(field, typeSchema);
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
    if (i === 0) {
      result = exports.getModel(model)[subpath].type;
    } else {
      if (isCustomType(result)) {
        structure = exports.getType(result);
        if (structure.schema) {
          result = structure.schema[subpath].type;
        } else {
          $log.invalidState(model, path);
        }
      } else {
        $log.invalidState(model, path);
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
    if (i === 0) {
      type = exports.getModel(model)[subpath].type;
    } else {
      if (isCustomType(type)) {
        structure = exports.getType(type);
        if (structure.schema && structure.schema[subpath]) {
          type = structure.schema[subpath].type;
        } else {
          result = false;
        }
      } else {
        result = false;
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
  var name = '';
  var result = hasType(value, 'string');

  if (result) {
    if (Object.keys(store.generatedModels).length > 0) {
      name = value.replace('@', '');
      result = typeof store.generatedModels[name] !== 'undefined';
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
    $log.unknownMethod(id, methodName);
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
    $log.unknownMethod(id, methodName);
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
    $log.unknownMethod(id, methodName);
  }
  return result;
}

/**
 * @method checkResult
 * @param {Object} params
 * @returns {Boolean} true if conditions on ouput are compliant with the metamodel
 * @private
 * @description Check if conditions on output are compliant with the metamodel
 */
function checkResult(params) {
  params = params || {};

  var component = params.component || null;
  var methodName = params.methodName || '';
  var methodResult = null;
  var typeofMethodResult = '';
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

  if (returnType !== null) {
    switch (true) {
      case returnType === 'any':
        break;
      case returnType === 'array':
        if (!Array.isArray(methodResult)) {
          result = false;
          $log.invalidResultType(
            component.id(),
            component.constructor.name,
            methodName,
            returnType,
            null
          );
        }
        break;
      case $metamodel.isClassName(returnType):
        if (methodResult.constructor) {
          if (methodResult.constructor.name === 'Function') {
            typeofMethodResult = methodResult.name;
          } else {
            typeofMethodResult = methodResult.constructor.name;
          }
          if (typeofMethodResult !== returnType.replace('@', '')) {
            result = false;
            $log.invalidResultType(
              component.id(),
              component.constructor.name,
              methodName,
              returnType,
              typeofMethodResult
            );
          }
        } else {
          result = false;
          $log.invalidResultType(
            component.id(),
            component.constructor.name,
            methodName,
            returnType,
            typeof methodResult
          );
        }
        break;
      default:
        if (typeof methodResult !== returnType) {
          result = false;
          $log.invalidResultType(
            component.id(),
            component.constructor.name,
            methodName,
            returnType,
            typeof methodResult
          );
        }
        break;
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
 * @method callAction
 * @param {Component} component
 * @param {String} state name of the state
 * @param {Object} action action
 * @param {Array} params parameters of the action
 * @param {Boolean} isEvent is the action a callback of an event
 * @returns {Boolean} result of the action
 * @description Call an action and make some Dependency Injection if it is a core action
 */
function callAction(component, state, action, params, isEvent) {
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
 * @method validParamNumbers
 * @param {String} className name the class
 * @param {String} state state on which the action applied
 * @param {Function} action action
 * @returns {Boolean} true if the action is the valid number of parameters
 * @description Check if an action has the valid number of parameter
 */
exports.validParamNumbers = function validParamNumbers(
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
 * @method checkParams
 * @param {Object} params
 * @returns {Boolean} true if condition on input are compliant with the model
 * @description Check if conditions on input are compliant with the model before calling the action
 */
exports.checkParams = function checkParams(params) {
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
    case isCollection:
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
    case isProperty:
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
    case isLink:
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
 * @method action
 * @param {String} behaviorId id of the behavior
 * @param {Array} params parameters
 * @description Call an action that comes from an event
 */
exports.action = function action(behaviorId, params) {
  var isEvent = false;
  var isProperty = false;
  var isLink = false;
  var isCollection = false;
  var behaviors = [];
  var behavior = null;
  var component = null;
  var componentClassName = '';
  var actionFromMemory = null;

  behaviors = $db._Behavior.find({
    _id: behaviorId
  });

  actionFromMemory = $behavior.get(behaviorId);

  if (behaviors.length === 1) {
    behavior = behaviors[0];

    component = $component.get(behavior.component);
    if (component) {
      if (component.constructor.name === 'Function') {
        componentClassName = component.name;
      } else {
        componentClassName = component.constructor.name;
      }

      isEvent = $metamodel.isEvent(behavior.state, componentClassName);
      isProperty = $metamodel.isProperty(behavior.state, componentClassName);
      isLink = $metamodel.isLink(behavior.state, componentClassName);
      isCollection = $metamodel.isCollection(
        behavior.state,
        componentClassName
      );

      if (isEvent || isProperty || isCollection || isLink) {
        callAction(
          component,
          behavior.state,
          {
            useCoreAPI: behavior.useCoreAPI,
            context: behavior.context,
            action: actionFromMemory
          },
          params,
          true
        );
      }
    }
  }
};

/**
 * @method state
 * @param {Object} params params to change the state
 * {String} component id of the component
 * {String} state state of the component
 * {Array} data parameters to send to the action
 * @description Change the state of a component.
 * Worklow:
 *
 * 0. Check if the component has not been destroyed
 * 1. Check if the state is a method, a property or an event
 * 2. Search if there is a behavior with actions for the new state
 * 3. If so, get the action(s)
 * 4. Check if the inputs are compliants with the metamodel
 * 5. Call the action(s)
 * 6. If a method, check if the output are compliants with the metamodel
 * 7. If all is ok, the state of the component is updated
 * 8. Return the result
 */
exports.state = function state(params) {
  params = params || {};
  params.component = params.component || '';
  params.state = params.state || '';
  params.data = params.data || [];
  params.context = params.context || null;

  var component = null;
  var currentState = '';
  var actions = [];
  var action = null;
  var result = null;
  var i = 0;
  var length = 0;
  var componentClassName = false;
  var isProperty = false;
  var isLink = false;
  var isCollection = false;
  var isEvent = false;

  currentState = $state.get(params.component);

  if (currentState && currentState.state === 'destroy') {
    $log.invalidUseOfComponent(params.component);
  }

  component = $component.get(params.component);
  if (component) {
    if (component.constructor.name === 'Function') {
      componentClassName = component.name;
    } else {
      componentClassName = component.constructor.name;
    }
    isEvent = $metamodel.isEvent(params.state, componentClassName);
    isProperty = $metamodel.isProperty(params.state, componentClassName);
    isLink = $metamodel.isLink(params.state, componentClassName);
    isCollection = $metamodel.isCollection(params.state, componentClassName);
    actions = getActions(component, params.state, isEvent);
  }

  if (actions.length) {
    if (
      exports.checkParams({
        component: component,
        methodName: params.state,
        args: params.data
      })
    ) {
      if (!isEvent && !isProperty && !isLink && !isCollection) {
        action = actions[0];
        result = callAction(
          params.context || component,
          params.state,
          action,
          params.data,
          false
        );

        checkResult({
          component: component,
          methodName: params.state,
          methodResult: result
        });
      } else {
        length = actions.length;
        for (i = 0; i < length; i++) {
          action = actions[i];
          callAction(
            params.context || component,
            params.state,
            action,
            params.data,
            true
          );
        }

        $state.set(component.id(), params.state, params.data);
      }
    }
    return result;
  } else {
    if (component && (isEvent || isProperty || isLink || isCollection)) {
      $state.set(component.id(), params.state, params.data);
    }
  }
};

/**
 * @method stop
 * @param {Object} params parameters
 * {Boolean} error true if the stop of the workflow is due to an error (default false)
 * {String} message error message to log (default '')
 * @description Stop the workflow engine
 */
exports.stop = function stop(params) {
  params = params || {};

  if (typeof params.error === 'undefined') {
    params.error = false;
  }
  params.message = params.message || '';

  exports.state = function state() {};

  if (params.error) {
    if (params.message) {
      throw new RuntimeError(
        'runtime has been stopped because ' + params.message
      );
    } else {
      throw new RuntimeError(
        'runtime has been stopped because of an unknown error'
      );
    }
  } else {
    if (params.message) {
      console.error(
        'runtime: runtime has been stopped because ' + params.message
      );
    } else {
      console.error('runtime: runtime has been stopped');
    }
  }
};

},{"./behavior.js":2,"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9}]},{},[8])(8)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaCtEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3YzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgc3lzdGVtXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgY29udGFpbnMgU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKiBQdWJsaWMgcHJvcGVydGllcyAqL1xuXG4vKipcbiAqIFN5c3RlbSBSdW50aW1lIGNvcmUgc3lzdGVtXG4gKiBAcHJvcGVydHkge19TeXN0ZW19IHN5c3RlbVxuICovXG5leHBvcnRzLnN5c3RlbSA9IHtcbiAgbmFtZTogJ3N5c3RlbS1ydW50aW1lJyxcbiAgbWFzdGVyOiBmYWxzZSxcbiAgdmVyc2lvbjogJzIuNS4wJyxcbiAgZGVzY3JpcHRpb246ICdTeXN0ZW0gUnVudGltZScsXG4gIHNjaGVtYXM6IHtcbiAgICAnMWFjMDcxODU2NDFmYTlmJzoge1xuICAgICAgX25hbWU6ICdfQmVoYXZpb3InLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBjb3JlOiAncHJvcGVydHknLFxuICAgICAgY29tcG9uZW50OiAncHJvcGVydHknLFxuICAgICAgYWN0aW9uOiAncHJvcGVydHknLFxuICAgICAgc3RhdGU6ICdwcm9wZXJ0eScsXG4gICAgICB1c2VDb3JlQVBJOiAncHJvcGVydHknLFxuICAgICAgY29udGV4dDogJ3Byb3BlcnR5JyxcbiAgICAgIF9pZDogJzFhYzA3MTg1NjQxZmE5ZidcbiAgICB9LFxuICAgICcxMDRhZDFmNDg1MTgzNzYnOiB7XG4gICAgICBfaWQ6ICcxMDRhZDFmNDg1MTgzNzYnLFxuICAgICAgX25hbWU6ICdfQ2hhbm5lbCcsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHNlbmQ6ICdldmVudCcsXG4gICAgICAkc3lzdGVtSW5zdGFsbGVkOiAnZXZlbnQnLFxuICAgICAgJHN5c3RlbVJlc29sdmVkOiAnZXZlbnQnLFxuICAgICAgJHN5c3RlbVN0YXJ0ZWQ6ICdldmVudCcsXG4gICAgICAkc3lzdGVtU3RvcHBlZDogJ2V2ZW50JyxcbiAgICAgICRzeXN0ZW1Vbmluc3RhbGxlZDogJ2V2ZW50J1xuICAgIH0sXG4gICAgJzFjMDBiMTNhMWIxYmM5Mic6IHtcbiAgICAgIF9uYW1lOiAnX0NsYXNzSW5mbycsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIG1vZGVsOiAncHJvcGVydHknLFxuICAgICAgc2NoZW1hOiAncHJvcGVydHknLFxuICAgICAgbWV0aG9kOiAnbWV0aG9kJyxcbiAgICAgIG1ldGhvZHM6ICdtZXRob2QnLFxuICAgICAgcHJvcGVydHk6ICdtZXRob2QnLFxuICAgICAgcHJvcGVydGllczogJ21ldGhvZCcsXG4gICAgICBsaW5rOiAnbWV0aG9kJyxcbiAgICAgIGxpbmtzOiAnbWV0aG9kJyxcbiAgICAgIGNvbGxlY3Rpb25zOiAnbWV0aG9kJyxcbiAgICAgIGNvbGxlY3Rpb246ICdtZXRob2QnLFxuICAgICAgZXZlbnQ6ICdtZXRob2QnLFxuICAgICAgZXZlbnRzOiAnbWV0aG9kJyxcbiAgICAgIF9pZDogJzFjMDBiMTNhMWIxYmM5MidcbiAgICB9LFxuICAgICcxMTFkZjExZTJiMTlmZGUnOiB7XG4gICAgICBfaWQ6ICcxMTFkZjExZTJiMTlmZGUnLFxuICAgICAgX25hbWU6ICdfQ29tcG9uZW50JyxcbiAgICAgIF9pbmhlcml0OiBbXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgY2xhc3NJbmZvOiAnbWV0aG9kJyxcbiAgICAgIG9uOiAnbWV0aG9kJyxcbiAgICAgIG9mZjogJ21ldGhvZCcsXG4gICAgICByZXF1aXJlOiAnbWV0aG9kJyxcbiAgICAgIGRlc3Ryb3k6ICdtZXRob2QnLFxuICAgICAgaW5pdDogJ21ldGhvZCcsXG4gICAgICBlcnJvcjogJ2V2ZW50J1xuICAgIH0sXG4gICAgJzE3MjM1MTZhMzAxMzJhYyc6IHtcbiAgICAgIF9uYW1lOiAnX0RhdGFiYXNlJyxcbiAgICAgIF9pbmhlcml0OiBbJ19Db21wb25lbnQnXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgY29sbGVjdGlvbnM6ICdtZXRob2QnLFxuICAgICAgaW5zZXJ0OiAnZXZlbnQnLFxuICAgICAgdXBkYXRlOiAnZXZlbnQnLFxuICAgICAgcmVtb3ZlOiAnZXZlbnQnLFxuICAgICAgX2lkOiAnMTcyMzUxNmEzMDEzMmFjJ1xuICAgIH0sXG4gICAgZjFhMTBkMTA2N2QxYjIzYToge1xuICAgICAgX2lkOiAnZjFhMTBkMTA2N2QxYjIzYScsXG4gICAgICBfbmFtZTogJ19Mb2cnLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBhY3Rpb246ICdwcm9wZXJ0eScsXG4gICAgICBjb2xsZWN0aW9uOiAncHJvcGVydHknLFxuICAgICAgaWQ6ICdwcm9wZXJ0eScsXG4gICAgICBmaWVsZDogJ3Byb3BlcnR5JyxcbiAgICAgIHZhbHVlOiAncHJvcGVydHknLFxuICAgICAgb3JkZXI6ICdwcm9wZXJ0eSdcbiAgICB9LFxuICAgICcxMjY4ZjFkZGRkMWZlYTcnOiB7XG4gICAgICBfbmFtZTogJ19Mb2dnZXInLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBsZXZlbDogJ3Byb3BlcnR5JyxcbiAgICAgIGRlYnVnOiAnbWV0aG9kJyxcbiAgICAgIGluZm86ICdtZXRob2QnLFxuICAgICAgd2FybjogJ21ldGhvZCcsXG4gICAgICBlcnJvcjogJ21ldGhvZCcsXG4gICAgICBfaWQ6ICcxMjY4ZjFkZGRkMWZlYTcnXG4gICAgfSxcbiAgICAnMTRjYWExYzQ2NDE0ZWUxJzoge1xuICAgICAgX25hbWU6ICdfTWVzc2FnZScsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGV2ZW50OiAncHJvcGVydHknLFxuICAgICAgZnJvbTogJ3Byb3BlcnR5JyxcbiAgICAgIGRhdGE6ICdwcm9wZXJ0eScsXG4gICAgICBfaWQ6ICcxNGNhYTFjNDY0MTRlZTEnXG4gICAgfSxcbiAgICAnMTkzZjExNjZlYjE2NjA5Jzoge1xuICAgICAgX25hbWU6ICdfTWV0YW1vZGVsJyxcbiAgICAgIF9pbmhlcml0OiBbJ19Db21wb25lbnQnXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgc2NoZW1hOiAnbWV0aG9kJyxcbiAgICAgIG1vZGVsOiAnbWV0aG9kJyxcbiAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgY3JlYXRlOiAnbWV0aG9kJyxcbiAgICAgIF9pZDogJzE5M2YxMTY2ZWIxNjYwOSdcbiAgICB9LFxuICAgICcxNTc5MzFmN2EzMWI2MWQnOiB7XG4gICAgICBfaWQ6ICcxNTc5MzFmN2EzMWI2MWQnLFxuICAgICAgX25hbWU6ICdfT1NHaScsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGluc3RhbGw6ICdtZXRob2QnLFxuICAgICAgdW5pbnN0YWxsOiAnbWV0aG9kJyxcbiAgICAgIHN0YXJ0OiAnbWV0aG9kJyxcbiAgICAgIHN0b3A6ICdtZXRob2QnLFxuICAgICAgc3RhdHVzOiAnbWV0aG9kJyxcbiAgICAgIGJ1bmRsZTogJ21ldGhvZCdcbiAgICB9LFxuICAgICcxMmUyMTFkNGNkMTIwYTYnOiB7XG4gICAgICBfaWQ6ICcxMmUyMTFkNGNkMTIwYTYnLFxuICAgICAgX25hbWU6ICdfUnVudGltZScsXG4gICAgICBfaW5oZXJpdDogWydfT1NHaSddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICB2ZXJzaW9uOiAncHJvcGVydHknLFxuICAgICAgc3lzdGVtOiAnbWV0aG9kJyxcbiAgICAgIG1lc3NhZ2U6ICdtZXRob2QnLFxuICAgICAgcmVhZHk6ICdldmVudCdcbiAgICB9LFxuICAgICcxNTg3MTFkNmYyMTVlNGInOiB7XG4gICAgICBfbmFtZTogJ19TdGF0ZScsXG4gICAgICBfaW5oZXJpdDogW10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIF9jbGFzczogZmFsc2UsXG4gICAgICBzdGF0ZTogJ3Byb3BlcnR5JyxcbiAgICAgIHZhbHVlOiAncHJvcGVydHknLFxuICAgICAgX2lkOiAnMTU4NzExZDZmMjE1ZTRiJ1xuICAgIH0sXG4gICAgJzFjYjc2MWZhNDUxMGRjYSc6IHtcbiAgICAgIF9pZDogJzFjYjc2MWZhNDUxMGRjYScsXG4gICAgICBfbmFtZTogJ19TeXN0ZW0nLFxuICAgICAgX2luaGVyaXQ6IFsnX1N5c3RlbU9TR2knXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgbmFtZTogJ3Byb3BlcnR5JyxcbiAgICAgIG1hc3RlcjogJ3Byb3BlcnR5JyxcbiAgICAgIHZlcnNpb246ICdwcm9wZXJ0eScsXG4gICAgICBkZXNjcmlwdGlvbjogJ3Byb3BlcnR5JyxcbiAgICAgIHNjaGVtYXM6ICdwcm9wZXJ0eScsXG4gICAgICBtb2RlbHM6ICdwcm9wZXJ0eScsXG4gICAgICBiZWhhdmlvcnM6ICdwcm9wZXJ0eScsXG4gICAgICB0eXBlczogJ3Byb3BlcnR5JyxcbiAgICAgIGNvbXBvbmVudHM6ICdwcm9wZXJ0eSdcbiAgICB9LFxuICAgICcxNDVmZTEwYzc1MTQyOTgnOiB7XG4gICAgICBfaWQ6ICcxNDVmZTEwYzc1MTQyOTgnLFxuICAgICAgX25hbWU6ICdfU3lzdGVtT1NHaScsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHN0YXRlOiAncHJvcGVydHknLFxuICAgICAgbG9jYXRpb246ICdwcm9wZXJ0eScsXG4gICAgICBzdGFydDogJ21ldGhvZCcsXG4gICAgICBzdG9wOiAnbWV0aG9kJ1xuICAgIH1cbiAgfSxcbiAgbW9kZWxzOiB7XG4gICAgJzE2Njk3MWZkOWQxMDdmZCc6IHtcbiAgICAgIF9uYW1lOiAnX0JlaGF2aW9yJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgY29udGV4dDoge1xuICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9LFxuICAgICAgY29yZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB1c2VDb3JlQVBJOiB7XG4gICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY29tcG9uZW50OiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgdHlwZTogJ2phdmFzY3JpcHQnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICBzdGF0ZTogeyB0eXBlOiAnc3RyaW5nJywgcmVhZE9ubHk6IGZhbHNlLCBtYW5kYXRvcnk6IHRydWUsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICBfaWQ6ICcxNjY5NzFmZDlkMTA3ZmQnXG4gICAgfSxcbiAgICAnMTM1YzcxMDc4ODEwYWYyJzoge1xuICAgICAgX2lkOiAnMTM1YzcxMDc4ODEwYWYyJyxcbiAgICAgIF9uYW1lOiAnX0NoYW5uZWwnLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBzZW5kOiB7IHBhcmFtczogW3sgbmFtZTogJ21lc3NhZ2UnLCB0eXBlOiAnbWVzc2FnZScgfV0gfSxcbiAgICAgICRzeXN0ZW1JbnN0YWxsZWQ6IHtcbiAgICAgICAgcGFyYW1zOiBbeyBuYW1lOiAnaWQnLCB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiAnJyB9XVxuICAgICAgfSxcbiAgICAgICRzeXN0ZW1SZXNvbHZlZDoge1xuICAgICAgICBwYXJhbXM6IFt7IG5hbWU6ICdpZCcsIHR5cGU6ICdzdHJpbmcnLCBtYW5kYXRvcnk6IHRydWUsIGRlZmF1bHQ6ICcnIH1dXG4gICAgICB9LFxuICAgICAgJHN5c3RlbVVuaW5zdGFsbGVkOiB7XG4gICAgICAgIHBhcmFtczogW3sgbmFtZTogJ2lkJywgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogdHJ1ZSwgZGVmYXVsdDogJycgfV1cbiAgICAgIH0sXG4gICAgICAkc3lzdGVtU3RhcnRlZDoge1xuICAgICAgICBwYXJhbXM6IFt7IG5hbWU6ICdpZCcsIHR5cGU6ICdzdHJpbmcnLCBtYW5kYXRvcnk6IHRydWUsIGRlZmF1bHQ6ICcnIH1dXG4gICAgICB9LFxuICAgICAgJHN5c3RlbVN0b3BwZWQ6IHtcbiAgICAgICAgcGFyYW1zOiBbeyBuYW1lOiAnaWQnLCB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiAnJyB9XVxuICAgICAgfVxuICAgIH0sXG4gICAgJzE1ODMyMWRjZWQxMDE0YSc6IHtcbiAgICAgIF9uYW1lOiAnX0NsYXNzSW5mbycsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIG1vZGVsOiB7IHR5cGU6ICdvYmplY3QnLCByZWFkT25seTogdHJ1ZSwgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiB7fSB9LFxuICAgICAgcHJvcGVydHk6IHtcbiAgICAgICAgcGFyYW1zOiBbeyBuYW1lOiAnbmFtZScsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICAgICAgICByZXN1bHQ6ICdvYmplY3QnXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczogeyByZXN1bHQ6ICdhcnJheScgfSxcbiAgICAgIGxpbms6IHsgcGFyYW1zOiBbeyBuYW1lOiAnbmFtZScsIHR5cGU6ICdzdHJpbmcnIH1dLCByZXN1bHQ6ICdvYmplY3QnIH0sXG4gICAgICBsaW5rczogeyByZXN1bHQ6ICdhcnJheScgfSxcbiAgICAgIG1ldGhvZDogeyBwYXJhbXM6IFt7IG5hbWU6ICduYW1lJywgdHlwZTogJ3N0cmluZycgfV0sIHJlc3VsdDogJ29iamVjdCcgfSxcbiAgICAgIG1ldGhvZHM6IHsgcmVzdWx0OiAnYXJyYXknIH0sXG4gICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgIHBhcmFtczogW3sgbmFtZTogJ25hbWUnLCB0eXBlOiAnc3RyaW5nJyB9XSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIGNvbGxlY3Rpb25zOiB7IHJlc3VsdDogJ2FycmF5JyB9LFxuICAgICAgZXZlbnQ6IHsgcGFyYW1zOiBbeyBuYW1lOiAnbmFtZScsIHR5cGU6ICdzdHJpbmcnIH1dLCByZXN1bHQ6ICdvYmplY3QnIH0sXG4gICAgICBldmVudHM6IHsgcmVzdWx0OiAnYXJyYXknIH0sXG4gICAgICBfaWQ6ICcxNTgzMjFkY2VkMTAxNGEnLFxuICAgICAgc2NoZW1hOiB7IHR5cGU6ICdvYmplY3QnLCByZWFkT25seTogdHJ1ZSwgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiB7fSB9XG4gICAgfSxcbiAgICAnMTIzNzUxY2I1OTFkZTI2Jzoge1xuICAgICAgX2lkOiAnMTIzNzUxY2I1OTFkZTI2JyxcbiAgICAgIF9uYW1lOiAnX0NvbXBvbmVudCcsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHsgbmFtZTogJ3N0YXRlJywgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICB7IG5hbWU6ICdhY3Rpb24nLCB0eXBlOiAnZnVuY3Rpb24nIH0sXG4gICAgICAgICAgeyBuYW1lOiAndXNlQ29yZUFQSScsIHR5cGU6ICdhbnknLCBtYW5kYXRvcnk6IGZhbHNlLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ2lzQ29yZScsIHR5cGU6ICdib29sZWFuJywgbWFuZGF0b3J5OiBmYWxzZSwgZGVmYXVsdDogZmFsc2UgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgb2ZmOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHsgbmFtZTogJ3N0YXRlJywgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6ICdiZWhhdmlvcklkJywgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgcmVxdWlyZTogeyBwYXJhbXM6IFt7IG5hbWU6ICdpZCcsIHR5cGU6ICdzdHJpbmcnIH1dIH0sXG4gICAgICBkZXN0cm95OiB7IHBhcmFtczogW10gfSxcbiAgICAgIGNsYXNzSW5mbzogeyByZXN1bHQ6ICdfQ2xhc3NJbmZvJyB9LFxuICAgICAgaW5pdDogeyBwYXJhbXM6IFt7IG5hbWU6ICdjb25mJywgdHlwZTogJ29iamVjdCcgfV0gfSxcbiAgICAgIGVycm9yOiB7IHBhcmFtczogW3sgbmFtZTogJ2RhdGEnLCB0eXBlOiAnZXJyb3JQYXJhbScgfV0gfVxuICAgIH0sXG4gICAgJzE4YTUxMTY5ZDcxMTJkNCc6IHtcbiAgICAgIF9uYW1lOiAnX0RhdGFiYXNlJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgY29sbGVjdGlvbnM6IHsgcmVzdWx0OiAnb2JqZWN0JyB9LFxuICAgICAgaW5zZXJ0OiB7IHBhcmFtczogW3sgbmFtZTogJ2V2ZW50JywgdHlwZTogJ2RiSW5zZXJ0RXZlbnQnIH1dIH0sXG4gICAgICB1cGRhdGU6IHsgcGFyYW1zOiBbeyBuYW1lOiAnZXZlbnQnLCB0eXBlOiAnZGJVcGRhdGVFdmVudCcgfV0gfSxcbiAgICAgIHJlbW92ZTogeyBwYXJhbXM6IFt7IG5hbWU6ICdldmVudCcsIHR5cGU6ICdkYlJlbW92ZUV2ZW50JyB9XSB9LFxuICAgICAgX2lkOiAnMThhNTExNjlkNzExMmQ0J1xuICAgIH0sXG4gICAgbzFlMWUwMWU2YjQxY2VjMzoge1xuICAgICAgX2lkOiAnbzFlMWUwMWU2YjQxY2VjMycsXG4gICAgICBfbmFtZTogJ19Mb2cnLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdkYkFjdGlvbicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogJ2luc2VydCdcbiAgICAgIH0sXG4gICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgaWQ6IHsgdHlwZTogJ3N0cmluZycsIHJlYWRPbmx5OiBmYWxzZSwgbWFuZGF0b3J5OiBmYWxzZSwgZGVmYXVsdDogJycgfSxcbiAgICAgIGZpZWxkOiB7IHR5cGU6ICdzdHJpbmcnLCByZWFkT25seTogZmFsc2UsIG1hbmRhdG9yeTogZmFsc2UsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICB2YWx1ZTogeyB0eXBlOiAnYW55JywgcmVhZE9ubHk6IGZhbHNlLCBtYW5kYXRvcnk6IGZhbHNlLCBkZWZhdWx0OiAnJyB9LFxuICAgICAgb3JkZXI6IHsgdHlwZTogJ251bWJlcicsIHJlYWRPbmx5OiBmYWxzZSwgbWFuZGF0b3J5OiBmYWxzZSwgZGVmYXVsdDogMCB9LFxuICAgICAgX2NvcmU6IHRydWVcbiAgICB9LFxuICAgICcxNmI5ZDFhYzIyMTZmZmUnOiB7XG4gICAgICBfaWQ6ICcxNmI5ZDFhYzIyMTZmZmUnLFxuICAgICAgX25hbWU6ICdfTG9nZ2VyJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgbGV2ZWw6IHtcbiAgICAgICAgdHlwZTogJ2xvZycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogJ3dhcm4nXG4gICAgICB9LFxuICAgICAgZGVidWc6IHsgcGFyYW1zOiBbeyBuYW1lOiAnbWVzc2FnZScsIHR5cGU6ICdhbnknIH1dIH0sXG4gICAgICBpbmZvOiB7IHBhcmFtczogW3sgbmFtZTogJ21lc3NhZ2UnLCB0eXBlOiAnYW55JyB9XSB9LFxuICAgICAgd2FybjogeyBwYXJhbXM6IFt7IG5hbWU6ICdtZXNzYWdlJywgdHlwZTogJ2FueScgfV0gfSxcbiAgICAgIGVycm9yOiB7IHBhcmFtczogW3sgbmFtZTogJ21lc3NhZ2UnLCB0eXBlOiAnYW55JyB9XSB9XG4gICAgfSxcbiAgICAnMWQ5YjYxMzk0MTFhYTkxJzoge1xuICAgICAgX25hbWU6ICdfTWVzc2FnZScsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGV2ZW50OiB7IHR5cGU6ICdzdHJpbmcnLCByZWFkT25seTogZmFsc2UsIG1hbmRhdG9yeTogdHJ1ZSwgZGVmYXVsdDogJycgfSxcbiAgICAgIGZyb206IHsgdHlwZTogJ3N0cmluZycsIHJlYWRPbmx5OiBmYWxzZSwgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiAnJyB9LFxuICAgICAgZGF0YTogeyB0eXBlOiAnYXJyYXknLCByZWFkT25seTogZmFsc2UsIG1hbmRhdG9yeTogdHJ1ZSwgZGVmYXVsdDogW10gfSxcbiAgICAgIF9pZDogJzFkOWI2MTM5NDExYWE5MSdcbiAgICB9LFxuICAgICcxNjI4YzEzYzIyMTUyZTYnOiB7XG4gICAgICBfbmFtZTogJ19NZXRhbW9kZWwnLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBzY2hlbWE6IHsgcGFyYW1zOiBbeyBuYW1lOiAnc2NoZW1hJywgdHlwZTogJ29iamVjdCcgfV0sIHJlc3VsdDogJ2FueScgfSxcbiAgICAgIG1vZGVsOiB7IHBhcmFtczogW3sgbmFtZTogJ21vZGVsJywgdHlwZTogJ29iamVjdCcgfV0sIHJlc3VsdDogJ2FueScgfSxcbiAgICAgIHR5cGU6IHsgcGFyYW1zOiBbeyBuYW1lOiAndHlwZScsIHR5cGU6ICdvYmplY3QnIH1dLCByZXN1bHQ6ICdhbnknIH0sXG4gICAgICBjcmVhdGU6IHsgcGFyYW1zOiBbXSB9LFxuICAgICAgX2lkOiAnMTYyOGMxM2MyMjE1MmU2J1xuICAgIH0sXG4gICAgJzEwMGI5MWVkMjIxMWIxNSc6IHtcbiAgICAgIF9pZDogJzEwMGI5MWVkMjIxMWIxNScsXG4gICAgICBfbmFtZTogJ19PU0dpJyxcbiAgICAgIGluc3RhbGw6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgeyBuYW1lOiAndXJsJywgdHlwZTogJ2FueScsIG1hbmRhdG9yeTogdHJ1ZSwgZGVmYXVsdDogJycgfSxcbiAgICAgICAgICB7IG5hbWU6ICdhc3luYycsIHR5cGU6ICdib29sZWFuJywgbWFuZGF0b3J5OiBmYWxzZSwgZGVmYXVsdDogdHJ1ZSB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlc3VsdDogJ3N0cmluZydcbiAgICAgIH0sXG4gICAgICB1bmluc3RhbGw6IHtcbiAgICAgICAgcGFyYW1zOiBbeyBuYW1lOiAnaWQnLCB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiAnJyB9XVxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiB7XG4gICAgICAgIHBhcmFtczogW3sgbmFtZTogJ2lkJywgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogdHJ1ZSwgZGVmYXVsdDogJycgfV1cbiAgICAgIH0sXG4gICAgICBzdG9wOiB7XG4gICAgICAgIHBhcmFtczogW3sgbmFtZTogJ2lkJywgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogdHJ1ZSwgZGVmYXVsdDogJycgfV1cbiAgICAgIH0sXG4gICAgICBzdGF0dXM6IHsgcmVzdWx0OiAnb2JqZWN0JyB9LFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBidW5kbGU6IHsgcmVzdWx0OiAnc3RyaW5nJyB9XG4gICAgfSxcbiAgICAnMTRjN2MxMDViMzFhMTYwJzoge1xuICAgICAgX2lkOiAnMTRjN2MxMDViMzFhMTYwJyxcbiAgICAgIF9uYW1lOiAnX1J1bnRpbWUnLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICB2ZXJzaW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAnMC4wLjAnXG4gICAgICB9LFxuICAgICAgc3lzdGVtOiB7XG4gICAgICAgIHBhcmFtczogW3sgbmFtZTogJ3BhcmFtcycsIHR5cGU6ICdhbnknLCBtYW5kYXRvcnk6IGZhbHNlIH1dLFxuICAgICAgICByZXN1bHQ6ICdvYmplY3QnXG4gICAgICB9LFxuICAgICAgbWVzc2FnZTogeyBwYXJhbXM6IFt7IG5hbWU6ICdtc2cnLCB0eXBlOiAnbWVzc2FnZScsIG1hbmRhdG9yeTogdHJ1ZSB9XSB9LFxuICAgICAgcmVhZHk6IHt9XG4gICAgfSxcbiAgICAnMTc3YWMxMzY4OTE2MjlmJzoge1xuICAgICAgX25hbWU6ICdfU3RhdGUnLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBzdGF0ZTogeyB0eXBlOiAnc3RyaW5nJywgcmVhZE9ubHk6IGZhbHNlLCBtYW5kYXRvcnk6IHRydWUsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICB2YWx1ZTogeyB0eXBlOiAnYW55JywgcmVhZE9ubHk6IGZhbHNlLCBtYW5kYXRvcnk6IGZhbHNlLCBkZWZhdWx0OiBudWxsIH0sXG4gICAgICBfaWQ6ICcxNzdhYzEzNjg5MTYyOWYnXG4gICAgfSxcbiAgICAnMTcwNTIxYjg4NjE0Mzg3Jzoge1xuICAgICAgX25hbWU6ICdfU3lzdGVtJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgbmFtZTogeyB0eXBlOiAnc3RyaW5nJywgcmVhZE9ubHk6IGZhbHNlLCBtYW5kYXRvcnk6IHRydWUsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICBtYXN0ZXI6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgdmVyc2lvbjoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiAnMC4wLjEnXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICBzY2hlbWFzOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICB9LFxuICAgICAgbW9kZWxzOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICB9LFxuICAgICAgYmVoYXZpb3JzOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICB9LFxuICAgICAgdHlwZXM6IHsgdHlwZTogJ29iamVjdCcsIHJlYWRPbmx5OiBmYWxzZSwgbWFuZGF0b3J5OiBmYWxzZSwgZGVmYXVsdDoge30gfSxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBfaWQ6ICcxNzA1MjFiODg2MTQzODcnXG4gICAgfSxcbiAgICAnMWIyODExYjA5MjE0M2Y1Jzoge1xuICAgICAgX2lkOiAnMWIyODExYjA5MjE0M2Y1JyxcbiAgICAgIF9uYW1lOiAnX1N5c3RlbU9TR2knLFxuICAgICAgc3RhcnQ6IHt9LFxuICAgICAgc3RvcDoge30sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBiZWhhdmlvcnM6IHtcbiAgICAnMTJlNDkxODU5YzEzOTE4Jzoge1xuICAgICAgX2lkOiAnMTJlNDkxODU5YzEzOTE4JyxcbiAgICAgIGNvbXBvbmVudDogJ19DaGFubmVsJyxcbiAgICAgIHN0YXRlOiAnJHN5c3RlbVN0YXJ0ZWQnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uICRzeXN0ZW1TdGFydGVkKGlkKSB7IFxcbiAgdmFyIHN5c3RlbXMgPSBudWxsO1xcbiAgICBcXG4gIGlmIChpZCAhPT0gJ2U4OWM2MTdiNmIxNWQyNCcpIHtcXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgICAgIFxcbiAgICAgIGlmICgkc3RhdGUuZ2V0KCdydW50aW1lJykgJiYgJHN0YXRlLmdldCgncnVudGltZScpLnN0YXRlID09PSAncmVhZHknKSB7ICAgIFxcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggKyAxID09PSAkZGIuX1N5c3RlbS5jb3VudCgpKSB7XFxuICAgICAgICAgICRjb21wb25lbnQuZ2V0KCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFlOTAyMWJkNGUxYmM2ZSc6IHtcbiAgICAgIF9pZDogJzFlOTAyMWJkNGUxYmM2ZScsXG4gICAgICBjb21wb25lbnQ6ICdfQ2hhbm5lbCcsXG4gICAgICBzdGF0ZTogJyRzeXN0ZW1JbnN0YWxsZWQnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uICRzeXN0ZW1JbnN0YWxsZWQoaWQpIHtcXG4gIHZhciBzeXN0ZW1zID0gbnVsbCxcXG4gICAgZGVwZW5kZW5jaWVzID0gW10sXFxuICAgIG1hc3RlciA9IFtdLFxcbiAgICBjYW5TdGFydCA9IHRydWU7XFxuXFxuICBpZiAoaWQgIT09ICdlODljNjE3YjZiMTVkMjQnKSB7XFxuICAgIC8vIGlmIGFsbCBzeXN0ZW1zIGFyZSBpbnN0YWxsZWRcXG4gICAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe30pO1xcblxcbiAgICBzeXN0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHN5c3RlbSkge1xcbiAgICAgIHZhciBzeXMgPSB0aGlzLnJlcXVpcmUoc3lzdGVtLl9pZCk7XFxuICAgICAgaWYgKHN5cyAmJiBzeXMuc3RhdGUgJiYgc3lzLnN0YXRlKCkgPT09ICdub25lJykge1xcbiAgICAgICAgY2FuU3RhcnQgPSBmYWxzZTtcXG4gICAgICB9XFxuICAgIH0uYmluZCh0aGlzKSk7XFxuXFxuICAgIC8vIHN0YXJ0IGFsbCB0aGUgc3lzdGVtc1xcbiAgICBpZiAoY2FuU3RhcnQpIHtcXG4gICAgICBkZXBlbmRlbmNpZXMgPSAkZGIuX1N5c3RlbS5maW5kKHtcXG4gICAgICAgICdtYXN0ZXInOiBmYWxzZVxcbiAgICAgIH0pO1xcblxcbiAgICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcXG4gICAgICAgIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoZGVwLl9pZCk7XFxuICAgICAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICAgICAgICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcpIHtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgICAgICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChkZXAuX2lkKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcblxcbiAgICAgIG1hc3RlciA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgICB9KTtcXG5cXG4gICAgICBtYXN0ZXIuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XFxuICAgICAgICB2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGRlcC5faWQpO1xcbiAgICAgICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHN5c3RlbSAmJiBzeXN0ZW0uc3RhdGUgJiYgc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcpIHtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgICAgICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChkZXAuX2lkKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxNTUxNDFlNDAzMTJjZDgnOiB7XG4gICAgICBfaWQ6ICcxNTUxNDFlNDAzMTJjZDgnLFxuICAgICAgY29tcG9uZW50OiAnX0NsYXNzSW5mbycsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICB9XFxuXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxZjY5NDFhMGMwMTJjMWYnOiB7XG4gICAgICBfaWQ6ICcxZjY5NDFhMGMwMTJjMWYnLFxuICAgICAgY29tcG9uZW50OiAnX0NsYXNzSW5mbycsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb25zJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBjb2xsZWN0aW9ucyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnY29sbGVjdGlvbicpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWVmNzExYjQxNzFjODQ5Jzoge1xuICAgICAgX2lkOiAnMWVmNzExYjQxNzFjODQ5JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdldmVudCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gZXZlbnQobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcblxcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdldmVudCcpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWJhZTUxYjZlZDFkMjVjJzoge1xuICAgICAgX2lkOiAnMWJhZTUxYjZlZDFkMjVjJyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdldmVudHMnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGV2ZW50cyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnZXZlbnQnKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzE5YWMyMTI1MjIxNTI4Yic6IHtcbiAgICAgIF9pZDogJzE5YWMyMTI1MjIxNTI4YicsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbGluaycsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gbGluayhuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuXFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ2xpbmsnKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzE3ZWQyMWRmYzAxYjhlOCc6IHtcbiAgICAgIF9pZDogJzE3ZWQyMWRmYzAxYjhlOCcsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbGlua3MnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGxpbmtzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdsaW5rJykge1xcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICB9XFxuICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzExY2UzMThhNTYxYWM2MSc6IHtcbiAgICAgIF9pZDogJzExY2UzMThhNTYxYWM2MScsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbWV0aG9kJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBtZXRob2QobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdtZXRob2QnKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG4gIFxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTJmZjIxOTBhMDE4MDQ2Jzoge1xuICAgICAgX2lkOiAnMTJmZjIxOTBhMDE4MDQ2JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdtZXRob2RzJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBtZXRob2RzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdtZXRob2QnKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzEwMjhkMTY4MWUxZmQ1OCc6IHtcbiAgICAgIF9pZDogJzEwMjhkMTY4MWUxZmQ1OCcsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAncHJvcGVydGllcycsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gcHJvcGVydGllcyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAncHJvcGVydHknKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH0gcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMThlZWIxMGM1MzE5MzY4Jzoge1xuICAgICAgX2lkOiAnMThlZWIxMGM1MzE5MzY4JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdwcm9wZXJ0eScsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gcHJvcGVydHkobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcblxcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdwcm9wZXJ0eScpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWJhNzIxMjAxMTE0YjZiJzoge1xuICAgICAgX2lkOiAnMWJhNzIxMjAxMTE0YjZiJyxcbiAgICAgIGNvbXBvbmVudDogJ19Db21wb25lbnQnLFxuICAgICAgc3RhdGU6ICdkZXN0cm95JyxcbiAgICAgIGFjdGlvbjogJ2Z1bmN0aW9uIGRlc3Ryb3koKSB7XFxuICAkY29tcG9uZW50LmRlc3Ryb3kodGhpcy5pZCgpKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICAnMTU0ODYxODZmNDFhNDhjJzoge1xuICAgICAgX2lkOiAnMTU0ODYxODZmNDFhNDhjJyxcbiAgICAgIGNvbXBvbmVudDogJ19Db21wb25lbnQnLFxuICAgICAgc3RhdGU6ICdvZmYnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICAnZnVuY3Rpb24gb2ZmKHN0YXRlLCBiZWhhdmlvcklkKSB7XFxuICB2YXIgYXJncyA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbnVtSW5qZWN0ZWRQYXJhbXMgPSA4LFxcbiAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xcblxcbiAgaWYgKCRoZWxwZXIuaXNPbk5vZGUoKSkge1xcbiAgICBudW1JbmplY3RlZFBhcmFtcyA9IG51bUluamVjdGVkUGFyYW1zICsxO1xcbiAgfVxcblxcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIG51bUluamVjdGVkUGFyYW1zOyBpKyspIHtcXG4gICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XFxuICB9XFxuXFxuICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcXG4gICAgXCJjb21wb25lbnRcIjogdGhpcyxcXG4gICAgXCJtZXRob2ROYW1lXCI6IFwib2ZmXCIsXFxuICAgIFwiYXJnc1wiOiBhcmdzXFxuICB9KSkge1xcblxcbiAgICBpZiAoc3RhdGUgfHwgYmVoYXZpb3JJZCkge1xcbiAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSkge1xcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XFxuICAgICAgICAgIFwiYmVoYXZpb3JJZFwiOiBiZWhhdmlvcklkLFxcbiAgICAgICAgICBcImNvbXBvbmVudElkXCI6IHRoaXMuaWQoKSxcXG4gICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxcbiAgICAgICAgfSk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMucmVxdWlyZShcXCdsb2dnZXJcXCcpLndhcm4oXCJpbnZva2UgXFxcXFxcJ29mZlxcXFxcXCcgbWV0aG9kIG9mIGNvbXBvbmVudCBcXCdcIiArIHRoaXMuaWQoKSArIFwiXFwnIHdpdGggYW4gaW52YWxpZCBzdGF0ZSBcXCdcIiArIHN0YXRlICsgXCJcXCdcIik7XFxuICAgICAgfVxcbiAgICB9IGVsc2Uge1xcbiAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgXCJjb21wb25lbnRJZFwiOiB0aGlzLmlkKClcXG4gICAgICB9KTtcXG4gICAgfVxcbiAgfVxcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxZGEwYTE3ODc4MTA0YzMnOiB7XG4gICAgICBfaWQ6ICcxZGEwYTE3ODc4MTA0YzMnLFxuICAgICAgY29tcG9uZW50OiAnX0NvbXBvbmVudCcsXG4gICAgICBzdGF0ZTogJ3JlcXVpcmUnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gcmVxdWlyZShpZCkge1xcbiAgcmV0dXJuICRjb21wb25lbnQuZ2V0KGlkKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICBkMTUyNjMxYzM1ODEzZjJlOiB7XG4gICAgICBfaWQ6ICdkMTUyNjMxYzM1ODEzZjJlJyxcbiAgICAgIGNvbXBvbmVudDogJ19Db21wb25lbnQnLFxuICAgICAgc3RhdGU6ICdjbGFzc0luZm8nLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGNsYXNzSW5mbygpIHsgXFxuXFx0Y29uc3QgY2xhc3NOYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xcblxcdGxldCByZXN1bHQ7XFxuXFx0XFxuXFx0aWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xcblxcdCAgcmVzdWx0ID0gdGhpcy5yZXF1aXJlKGNsYXNzTmFtZSArICdJbmZvJyk7XFxuXFx0fVxcblxcdFxcblxcdHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogZmFsc2UsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWE1MTExZDE3YTE4MDBjJzoge1xuICAgICAgX2lkOiAnMWE1MTExZDE3YTE4MDBjJyxcbiAgICAgIGNvbXBvbmVudDogJ19EYXRhYmFzZScsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb25zJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBjb2xsZWN0aW9ucygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJztcXG5cXG4gIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gJGRiLnN0b3JlKSB7XFxuICAgIGlmICgkZGIuc3RvcmUuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpKSB7XFxuICAgICAgcmVzdWx0W2NvbGxlY3Rpb25OYW1lXSA9ICRkYltjb2xsZWN0aW9uTmFtZV07XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxZDk5MzEwOGZhMThlZjInOiB7XG4gICAgICBfaWQ6ICcxZDk5MzEwOGZhMThlZjInLFxuICAgICAgY29tcG9uZW50OiAnX0xvZ2dlcicsXG4gICAgICBzdGF0ZTogJ2RlYnVnJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUubG9nKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxuICB9XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFhMzdhMTg4ZTExZmU3Myc6IHtcbiAgICAgIF9pZDogJzFhMzdhMTg4ZTExZmU3MycsXG4gICAgICBjb21wb25lbnQ6ICdfTG9nZ2VyJyxcbiAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcXG4gIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWVkZDIxZTEyYTE2NTM0Jzoge1xuICAgICAgX2lkOiAnMWVkZDIxZTEyYTE2NTM0JyxcbiAgICAgIGNvbXBvbmVudDogJ19Mb2dnZXInLFxuICAgICAgc3RhdGU6ICdpbmZvJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHtcXG4gIGlmICh0aGlzLmxldmVsKCkgPT09ICdpbmZvJyB8fCB0aGlzLmxldmVsKCkgPT09ICdkZWJ1ZycpIHtcXG4gICAgY29uc29sZS5pbmZvKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxuICB9XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzE0MWYyMTQzZDMxMjJhNCc6IHtcbiAgICAgIF9pZDogJzE0MWYyMTQzZDMxMjJhNCcsXG4gICAgICBjb21wb25lbnQ6ICdfTG9nZ2VyJyxcbiAgICAgIHN0YXRlOiAnbGV2ZWwnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gbGV2ZWwodmFsKSB7XFxuICAkbG9nLmxldmVsKHZhbCk7XFxufScsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZVxuICAgIH0sXG4gICAgJzE5MjQwMWJhYjIxMzA0ZSc6IHtcbiAgICAgIF9pZDogJzE5MjQwMWJhYjIxMzA0ZScsXG4gICAgICBjb21wb25lbnQ6ICdfTG9nZ2VyJyxcbiAgICAgIHN0YXRlOiAnd2FybicsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnd2FybicgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgfVxcbn1cIixcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxMWZjNzE1ZTJmMWEzMWUnOiB7XG4gICAgICBfaWQ6ICcxMWZjNzE1ZTJmMWEzMWUnLFxuICAgICAgY29tcG9uZW50OiAnX01ldGFtb2RlbCcsXG4gICAgICBzdGF0ZTogJ2NyZWF0ZScsXG4gICAgICBhY3Rpb246ICdmdW5jdGlvbiBjcmVhdGUoKSB7XFxuICAkbWV0YW1vZGVsLmNyZWF0ZSgpO1xcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxMjMyZjFmMTA3MTQyY2YnOiB7XG4gICAgICBfaWQ6ICcxMjMyZjFmMTA3MTQyY2YnLFxuICAgICAgY29tcG9uZW50OiAnX01ldGFtb2RlbCcsXG4gICAgICBzdGF0ZTogJ21vZGVsJyxcbiAgICAgIGFjdGlvbjogJ2Z1bmN0aW9uIG1vZGVsKG1vZGVsKSB7XFxuICByZXR1cm4gJG1ldGFtb2RlbC5tb2RlbChtb2RlbCk7XFxufScsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZVxuICAgIH0sXG4gICAgJzEzNjU0MTJmNjkxNTNkMic6IHtcbiAgICAgIF9pZDogJzEzNjU0MTJmNjkxNTNkMicsXG4gICAgICBjb21wb25lbnQ6ICdfTWV0YW1vZGVsJyxcbiAgICAgIHN0YXRlOiAnc2NoZW1hJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgJ2Z1bmN0aW9uIHNjaGVtYShzY2hlbWEpIHtcXG4gIHJldHVybiAkbWV0YW1vZGVsLnNjaGVtYShzY2hlbWEpO1xcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxOTRkYjE0N2ZlMTYxYTInOiB7XG4gICAgICBfaWQ6ICcxOTRkYjE0N2ZlMTYxYTInLFxuICAgICAgY29tcG9uZW50OiAnX01ldGFtb2RlbCcsXG4gICAgICBzdGF0ZTogJ3R5cGUnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gdHlwZSh0eXBlKSB7XFxuICByZXR1cm4gJG1ldGFtb2RlbC50eXBlKHR5cGUpO1xcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxZWY5NTFmMTQxMWI4OTUnOiB7XG4gICAgICBfaWQ6ICcxZWY5NTFmMTQxMWI4OTUnLFxuICAgICAgY29tcG9uZW50OiAnX09TR2knLFxuICAgICAgc3RhdGU6ICdpbnN0YWxsJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBpbnN0YWxsKHVybCwgYXN5bmMpIHtcXG4gIHZhciBpbXBvcnRlZFN5c3RlbSA9IG51bGwsXFxuICAgIHN5c3RlbSA9IHt9LFxcbiAgICBzeXN0ZW1JZCA9ICcnLFxcbiAgICBjYWxsYmFja0xvYWQgPSBudWxsLFxcbiAgICB4aHIgPSBudWxsLFxcbiAgICByZXN1bHQgPSAnJyxcXG4gICAgY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XFxuXFxuICBpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcXG4gICAgaW1wb3J0ZWRTeXN0ZW0gPSB1cmw7XFxuICB9IGVsc2Uge1xcbiAgICBpZiAodXJsLmluZGV4T2YoJ3snKSA9PT0gMCkge1xcbiAgICAgIGltcG9ydGVkU3lzdGVtID0gSlNPTi5wYXJzZSh1cmwpO1xcbiAgICB9XFxuICB9XFxuXFxuICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHtcXG4gICAgc3lzdGVtSWQgPSAkZGIuaW1wb3J0U3lzdGVtKGltcG9ydGVkU3lzdGVtKTtcXG4gICAgaWYgKHN5c3RlbUlkKSB7XFxuICAgICAgc3lzdGVtID0gdGhpcy5yZXF1aXJlKHN5c3RlbUlkKTtcXG5cXG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcXG4gICAgICAgIHN5c3RlbS5sb2NhdGlvbih1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW0uc3RhdGUoJ2luc3RhbGxlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXN0ZW1JZCk7XFxuICAgICAgc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5c3RlbUlkKTtcXG5cXG4gICAgICByZXN1bHQgPSBzeXN0ZW1JZDtcXG4gICAgfVxcbiAgfSBlbHNlIHtcXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XFxuICAgICAgaWYgKHVybC5pbmRleE9mKCcuanNvbicpICE9PSAtMSkge1xcbiAgICAgICAgc3lzdGVtID0gcmVxdWlyZShnbG9iYWwucHJvY2Vzcy5lbnYuUFdEICsgJy8nICsgdXJsKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgc3lzdGVtID0gcmVxdWlyZSh1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW1JZCA9ICRkYi5pbXBvcnRTeXN0ZW0oc3lzdGVtKTtcXG4gICAgICBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoc3lzdGVtSWQpO1xcblxcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xcbiAgICAgICAgc3lzdGVtLmxvY2F0aW9uKHVybCk7XFxuICAgICAgfVxcbiAgICAgIHN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5c3RlbUlkKTtcXG4gICAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3lzdGVtSWQpO1xcblxcbiAgICAgIHJlc3VsdCA9IHN5c3RlbUlkO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xcbiAgICAgIGNhbGxiYWNrTG9hZCA9IGZ1bmN0aW9uIGNhbGxiYWNrTG9hZChzeXN0ZW0sIHVybCkge1xcbiAgICAgICAgdmFyIHN5c0lkID0gJGRiLmltcG9ydFN5c3RlbShzeXN0ZW0pLFxcbiAgICAgICAgICBzeXMgPSAkY29tcG9uZW50LmdldChzeXNJZCksXFxuICAgICAgICAgIGNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgICAgIHN5cy5sb2NhdGlvbih1cmwpO1xcbiAgICAgICAgfVxcbiAgICAgICAgc3lzLnN0YXRlKCdpbnN0YWxsZWQnKTtcXG4gICAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXNJZCk7XFxuICAgICAgICBzeXMuc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXNJZCk7XFxuXFxuICAgICAgICByZXN1bHQgPSBzeXNJZDtcXG4gICAgICB9O1xcblxcbiAgICAgIGlmIChhc3luYykge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDApIHtcXG4gICAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAwKSB7XFxuICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgIHVzZUNvcmVBUEk6IHRydWUsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTRjMTUxN2I3MTFjYjc4Jzoge1xuICAgICAgX2lkOiAnMTRjMTUxN2I3MTFjYjc4JyxcbiAgICAgIGNvbXBvbmVudDogJ19PU0dpJyxcbiAgICAgIHN0YXRlOiAndW5pbnN0YWxsJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiB1bmluc3RhbGwoaWQpIHtcXG4gIHZhciBzZWFyY2ggPSB7fSxcXG4gICAgc3lzdGVtID0gbnVsbCxcXG4gICAgYmVoYXZpb3JJZCA9ICcnLFxcbiAgICBjb2xsZWN0aW9uID0gJycsXFxuICAgIGNvbXBvbmVudElkID0gJycsXFxuICAgIGxlbmd0aCA9IDAsXFxuICAgIGkgPSAwLFxcbiAgICBjb3JlQ29tcG9uZW50cyA9IFsnYWRtaW4nLCAnY2hhbm5lbCcsICdkYicsICdsb2dnZXInLCAnbWV0YW1vZGVsJywgJ3J1bnRpbWUnXTtcXG5cXG4gIHNlYXJjaCA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAnX2lkJzogaWRcXG4gIH0pO1xcblxcbiAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgc3lzdGVtID0gc2VhcmNoWzBdO1xcbiAgICAvLyByZW1vdmUgYmVoYXZpb3JzXFxuICAgIGlmIChzeXN0ZW0uYmVoYXZpb3JzKSB7XFxuICAgICAgZm9yIChiZWhhdmlvcklkIGluIHN5c3RlbS5iZWhhdmlvcnMpIHtcXG4gICAgICAgICRkYi5fQmVoYXZpb3IucmVtb3ZlKHtcXG4gICAgICAgICAgJ19pZCc6IHN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3JJZF0uX2lkXFxuICAgICAgICB9KTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLy8gcmVtb3ZlIGNvbXBvbmVudHNcXG4gICAgaWYgKHN5c3RlbS5jb21wb25lbnRzKSB7XFxuICAgICAgZm9yIChjb2xsZWN0aW9uIGluIHN5c3RlbS5jb21wb25lbnRzKSB7XFxuICAgICAgICBmb3IgKGNvbXBvbmVudElkIGluIHN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25dKSB7XFxuICAgICAgICAgIGlmIChjb3JlQ29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudElkKSA9PT0gLTEpIHtcXG4gICAgICAgICAgICAkZGJbY29sbGVjdGlvbl0ucmVtb3ZlKHtcXG4gICAgICAgICAgICAgICdfaWQnOiBjb21wb25lbnRJZFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICBpZiAodGhpcy5yZXF1aXJlKGlkKSAmJiB0aGlzLnJlcXVpcmUoaWQpLnN0YXRlKSB7XFxuICAgIHRoaXMucmVxdWlyZShpZCkuc3RhdGUoJ3VuaW5zdGFsbGVkJyk7XFxuICAgIHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpLiRzeXN0ZW1Vbmluc3RhbGxlZChpZCk7XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxMDVmMjE5YzY4MTM2NDMnOiB7XG4gICAgICBfaWQ6ICcxMDVmMjE5YzY4MTM2NDMnLFxuICAgICAgY29tcG9uZW50OiAnX09TR2knLFxuICAgICAgc3RhdGU6ICdzdGFydCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gc3RhcnQoaWQpIHtcXG4gIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoaWQpLFxcbiAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcgfHwgc3lzdGVtLnN0YXRlKCkgPT09ICdpbnN0YWxsZWQnKSB7XFxuICAgIHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gICAgaWYgKHN5c3RlbS5zdGFydCkge1xcbiAgICAgIHN5c3RlbS5zdGFydCgpO1xcbiAgICB9XFxuICAgIGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoaWQpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgfVxcbn1cIixcbiAgICAgIHVzZUNvcmVBUEk6IGZhbHNlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFhODFhMWYwMGQxNzI2OSc6IHtcbiAgICAgIF9pZDogJzFhODFhMWYwMGQxNzI2OScsXG4gICAgICBjb21wb25lbnQ6ICdfT1NHaScsXG4gICAgICBzdGF0ZTogJ3N0b3AnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIHN0b3AoaWQpIHtcXG4gIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoaWQpLFxcbiAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdhY3RpdmUnKSB7XFxuICAgIHN5c3RlbS5zdGF0ZSgnc3RvcHBpbmcnKTtcXG4gICAgaWYgKHN5c3RlbS5zdG9wKSB7XFxuICAgICAgc3lzdGVtLnN0b3AoKTtcXG4gICAgfVxcbiAgICBjaGFubmVsLiRzeXN0ZW1TdG9wcGVkKGlkKTtcXG4gICAgc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xcbiAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChpZCk7XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogZmFsc2UsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTE2ODUxYjYwMjEyOGQxJzoge1xuICAgICAgX2lkOiAnMTE2ODUxYjYwMjEyOGQxJyxcbiAgICAgIGNvbXBvbmVudDogJ19PU0dpJyxcbiAgICAgIHN0YXRlOiAnc3RhdHVzJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBzdGF0dXMoKSB7XFxuICB2YXIgcmVzdWx0ID0ge30sXFxuICAgIHN5c3RlbSA9IG51bGwsXFxuICAgIGxlbmd0aCA9IDAsXFxuICAgIGkgPSAwO1xcblxcbiAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe30pO1xcblxcbiAgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7XFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgc3lzdGVtID0gc3lzdGVtc1tpXTtcXG4gICAgcmVzdWx0W3N5c3RlbS5uYW1lXSA9IHtcXG4gICAgICAnaWQnOiBzeXN0ZW0uX2lkLFxcbiAgICAgICdzdGF0ZSc6IHN5c3RlbS5zdGF0ZSxcXG4gICAgICAnbmFtZSc6IHN5c3RlbS5uYW1lLFxcbiAgICAgICd2ZXJzaW9uJzogc3lzdGVtLnZlcnNpb24sXFxuICAgICAgJ2xvY2F0aW9uJzogc3lzdGVtLmxvY2F0aW9uLFxcbiAgICAgICdtYXN0ZXInOiBzeXN0ZW0ubWFzdGVyXFxuICAgIH07XFxuICB9XFxuXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgIHVzZUNvcmVBUEk6IHRydWUsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTljZjMxN2Q3MjE3MzMxJzoge1xuICAgICAgX2lkOiAnMTljZjMxN2Q3MjE3MzMxJyxcbiAgICAgIGNvbXBvbmVudDogJ19PU0dpJyxcbiAgICAgIHN0YXRlOiAnYnVuZGxlJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgJ2Z1bmN0aW9uIGJ1bmRsZSgpIHsgXFxuXFx0dmFyIHJlc3VsdCA9ICRkYi5leHBvcnRTeXN0ZW0oKTtcXG5cXHRyZXR1cm4gcmVzdWx0O1xcbn0nLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxMzAxMDE2N2YzMTNmODcnOiB7XG4gICAgICBfaWQ6ICcxMzAxMDE2N2YzMTNmODcnLFxuICAgICAgY29tcG9uZW50OiAnX1J1bnRpbWUnLFxuICAgICAgc3RhdGU6ICdzeXN0ZW0nLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIHN5c3RlbShwYXJhbXMpIHtcXG4gIHZhciBSdW50aW1lU3lzdGVtID0gbnVsbCxcXG4gICAgc3lzdGVtID0ge30sXFxuICAgIHN5c3RlbUlkID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBjb25mID0ge307XFxuXFxuICBpZiAocGFyYW1zKSB7XFxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnc3RyaW5nJykge1xcbiAgICAgIGNvbmYubWFzdGVyID0gdHJ1ZTtcXG4gICAgICBjb25mLm5hbWUgPSBwYXJhbXM7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgY29uZiA9IHBhcmFtcztcXG4gICAgICBjb25mLm1hc3RlciA9IHRydWU7XFxuICAgIH1cXG4gICAgUnVudGltZVN5c3RlbSA9IHRoaXMucmVxdWlyZSgnX1N5c3RlbScpO1xcbiAgICBzeXN0ZW0gPSBuZXcgUnVudGltZVN5c3RlbShjb25mKTtcXG4gICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gIH0gZWxzZSB7XFxuICAgIHJlc3VsdCA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAgICdtYXN0ZXInOiB0cnVlXFxuICAgIH0pO1xcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xcbiAgICAgIHN5c3RlbUlkID0gcmVzdWx0WzBdLl9pZDtcXG4gICAgICBzeXN0ZW0gPSAkY29tcG9uZW50LmdldChzeXN0ZW1JZCk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiBzeXN0ZW07XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxY2ZhNDE0NWY2MTRkYTgnOiB7XG4gICAgICBfaWQ6ICcxY2ZhNDE0NWY2MTRkYTgnLFxuICAgICAgY29tcG9uZW50OiAnX1J1bnRpbWUnLFxuICAgICAgc3RhdGU6ICdtZXNzYWdlJyxcbiAgICAgIGFjdGlvbjogJ2Z1bmN0aW9uIG1lc3NhZ2UobXNnKSB7IFxcbiAgJGRiLl9NZXNzYWdlLmluc2VydChtc2cpO1xcbn0nLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxY2I5ZDEwM2Q0MWRkOTcnOiB7XG4gICAgICBfaWQ6ICcxY2I5ZDEwM2Q0MWRkOTcnLFxuICAgICAgY29tcG9uZW50OiAnZTg5YzYxN2I2YjE1ZDI0JyxcbiAgICAgIHN0YXRlOiAnc3RhcnQnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIHN0YXJ0KCkge1xcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIERPTUNvbnRlbnRMb2FkZWQoZSkge1xcbiAgICAgIHZhciBzeXN0ZW1zID0gW10sXFxuICAgICAgICBzeXN0ZW0gPSBudWxsLFxcbiAgICAgICAgc2NyaXB0cyA9IFtdLFxcbiAgICAgICAgc2NyaXB0ID0gbnVsbCxcXG4gICAgICAgIGxvZ0xldmVsID0gJ3dhcm4nLFxcbiAgICAgICAgaSA9IDAsXFxuICAgICAgICBsZW5ndGggPSAwO1xcbiAgICBcXG4gICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgIGxlbmd0aCA9IHN5c3RlbXMubGVuZ3RoO1xcbiAgXFxuICAgICAgLy8gbG9nZ2VyXFxuICAgICAgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtsb2ddJyk7XFxuICAgICAgaWYgKHNjcmlwdHMubGVuZ3RoKSB7XFxuICAgICAgICBsb2dMZXZlbCA9IHNjcmlwdHNbMF0uZ2V0QXR0cmlidXRlKCdsb2cnKTtcXG4gICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwobG9nTGV2ZWwpO1xcbiAgICAgIH1cXG4gIFxcbiAgICAgIC8vIHN5c3RlbXNcXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIHN5c3RlbSA9IHN5c3RlbXNbaV07XFxuICBcXG4gICAgICAgIGlmIChzeXN0ZW0uZ2V0QXR0cmlidXRlKCdhc3luYycpID09PSAnZmFsc2UnKSB7XFxuICAgICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLmluc3RhbGwoc3lzdGVtLmhyZWYsIGZhbHNlKTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLmluc3RhbGwoc3lzdGVtLmhyZWYsIHRydWUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gIFxcbiAgICAgIC8vIHJlYWR5IGV2ZW50XFxuICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICB9XFxuICB9LmJpbmQodGhpcykpO1xcbiAgfVxcbn1cIixcbiAgICAgIHVzZUNvcmVBUEk6IHRydWUsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfVxuICB9LFxuICB0eXBlczoge1xuICAgIGNzczogeyBfaWQ6ICdoMWQ4ODMxMWFjMDE5MjExJywgbmFtZTogJ2NzcycsIHR5cGU6ICdzdHJpbmcnLCBjb3JlOiB0cnVlIH0sXG4gICAgZGF0ZTogeyBfaWQ6ICdjMTdjYWQxYmMzZDE3NzUyJywgbmFtZTogJ2RhdGUnLCB0eXBlOiAnb2JqZWN0JywgY29yZTogdHJ1ZSB9LFxuICAgIGpzb246IHsgX2lkOiAnZTFkMjVhMTJlNjcxMjdlZCcsIG5hbWU6ICdqc29uJywgdHlwZTogJ29iamVjdCcsIGNvcmU6IHRydWUgfSxcbiAgICBkYkluc2VydEV2ZW50OiB7XG4gICAgICBfaWQ6ICcxNDhlZjFlMTk4MTBlNmQnLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkYkluc2VydEV2ZW50JyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIGNvbGxlY3Rpb246IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogdHJ1ZSwgZGVmYXVsdDogJycgfSxcbiAgICAgICAgZG9jdW1lbnQ6IHsgdHlwZTogJ29iamVjdCcsIG1hbmRhdG9yeTogdHJ1ZSwgZGVmYXVsdDoge30gfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGJSZW1vdmVFdmVudDoge1xuICAgICAgX2lkOiAnMTk1MmUxYWM0MjEzZjRhJyxcbiAgICAgIG5hbWU6ICdkYlJlbW92ZUV2ZW50JyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBjb2xsZWN0aW9uOiB7IHR5cGU6ICdzdHJpbmcnLCBtYW5kYXRvcnk6IHRydWUsIGRlZmF1bHQ6ICcnIH0sXG4gICAgICAgIGlkOiB7IHR5cGU6ICdzdHJpbmcnLCBtYW5kYXRvcnk6IHRydWUsIGRlZmF1bHQ6ICcnIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRiVXBkYXRlRXZlbnQ6IHtcbiAgICAgIF9pZDogJzFmNWM0MTMwOTcxMTc1MicsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgbmFtZTogJ2RiVXBkYXRlRXZlbnQnLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgY29sbGVjdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiAnJyB9LFxuICAgICAgICBpZDogeyB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiAnJyB9LFxuICAgICAgICBmaWVsZDogeyB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiAnJyB9LFxuICAgICAgICB2YWx1ZTogeyB0eXBlOiAnYW55JywgbWFuZGF0b3J5OiB0cnVlLCBkZWZhdWx0OiBudWxsIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRiQWN0aW9uOiB7XG4gICAgICBfaWQ6ICdlMTk1MGUxNmYyOTE0ZGE5JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICBuYW1lOiAnZGJBY3Rpb24nLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB2YWx1ZTogWydpbnNlcnQnLCAndXBkYXRlJywgJ3JlbW92ZSddXG4gICAgfSxcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBfaWQ6ICdkMWMwZDAxMzBjNjE2MTk5JyxcbiAgICAgIG5hbWU6ICdjb2xsZWN0aW9uJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IHsgdHlwZTogWydzdHJpbmcnXSwgbWFuZGF0b3J5OiB0cnVlIH0sXG4gICAgICAgIHJlYWRPbmx5OiB7IHR5cGU6ICdib29sZWFuJywgbWFuZGF0b3J5OiB0cnVlIH0sXG4gICAgICAgIG1hbmRhdG9yeTogeyB0eXBlOiAnYm9vbGVhbicsIG1hbmRhdG9yeTogdHJ1ZSB9LFxuICAgICAgICBkZWZhdWx0OiB7IHR5cGU6ICdvYmplY3QnLCBtYW5kYXRvcnk6IHRydWUgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgICAgbGFiZWw6IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIGVycm9yUGFyYW06IHtcbiAgICAgIF9pZDogJ2UxOTg3NjFmYzBiMWFlOGEnLFxuICAgICAgbmFtZTogJ2Vycm9yUGFyYW0nLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlIH0sXG4gICAgICAgIGVycm9yOiB7IHR5cGU6ICdvYmplY3QnLCBtYW5kYXRvcnk6IHRydWUgfVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIGV2ZW50OiB7XG4gICAgICBfaWQ6ICdnMTY2OGQxZGUyZDFmZjZmJyxcbiAgICAgIG5hbWU6ICdldmVudCcsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBwYXJhbXM6IHsgdHlwZTogWydwYXJhbWV0ZXInXSwgbWFuZGF0b3J5OiBmYWxzZSB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiBmYWxzZSB9XG4gICAgICB9LFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgaHRtbDogeyBfaWQ6ICd5MTYxYzIxMzIwYjExYWNiJywgbmFtZTogJ2h0bWwnLCB0eXBlOiAnc3RyaW5nJywgY29yZTogdHJ1ZSB9LFxuICAgIGphdmFzY3JpcHQ6IHtcbiAgICAgIF9pZDogJ3MxM2Q0YzFmZGY5MTY1MDQnLFxuICAgICAgbmFtZTogJ2phdmFzY3JpcHQnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBfaWQ6ICdwMTI0NjAxODAxZDFkYmZhJyxcbiAgICAgIG5hbWU6ICdsaW5rJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogdHJ1ZSB9LFxuICAgICAgICByZWFkT25seTogeyB0eXBlOiAnYm9vbGVhbicsIG1hbmRhdG9yeTogdHJ1ZSB9LFxuICAgICAgICBtYW5kYXRvcnk6IHsgdHlwZTogJ2Jvb2xlYW4nLCBtYW5kYXRvcnk6IHRydWUgfSxcbiAgICAgICAgZGVmYXVsdDogeyB0eXBlOiAne3R5cGV9JywgbWFuZGF0b3J5OiB0cnVlIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6ICdzdHJpbmcnLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICAgIGxhYmVsOiB7IHR5cGU6ICdzdHJpbmcnLCBtYW5kYXRvcnk6IGZhbHNlIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBsb2c6IHtcbiAgICAgIF9pZDogJ2QxZmQxNjFhNGE0MTQ5ZmMnLFxuICAgICAgbmFtZTogJ2xvZycsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHZhbHVlOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgX2lkOiAnbDEzYjA2MWFjNTcxMjcyZCcsXG4gICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBldmVudDogeyB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlIH0sXG4gICAgICAgIGZyb206IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgICAgZGF0YTogeyB0eXBlOiAnb2JqZWN0JywgbWFuZGF0b3J5OiB0cnVlIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBtZXRob2Q6IHtcbiAgICAgIF9pZDogJ3gxMjI3MjE4ZWVkMWYzZTknLFxuICAgICAgbmFtZTogJ21ldGhvZCcsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICByZXN1bHQ6IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgICAgcGFyYW1zOiB7IHR5cGU6IFsncGFyYW1ldGVyJ10sIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIG9zZ2lTdGF0ZXM6IHtcbiAgICAgIF9pZDogJ3ExZjBjYTEyMGZjMTNmYjMnLFxuICAgICAgbmFtZTogJ29zZ2lTdGF0ZXMnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB2YWx1ZTogW1xuICAgICAgICAnbm9uZScsXG4gICAgICAgICdpbnN0YWxsZWQnLFxuICAgICAgICAncmVzb2x2ZWQnLFxuICAgICAgICAnc3RhcnRpbmcnLFxuICAgICAgICAnYWN0aXZlJyxcbiAgICAgICAgJ3N0b3BwaW5nJyxcbiAgICAgICAgJ3VuaW5zdGFsbGVkJ1xuICAgICAgXSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIHBhcmFtZXRlcjoge1xuICAgICAgX2lkOiAnZTFiMThlMTZjNmMxOTVhZCcsXG4gICAgICBuYW1lOiAncGFyYW1ldGVyJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6ICdzdHJpbmcnLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICAgIG5hbWU6IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogdHJ1ZSB9LFxuICAgICAgICB0eXBlOiB7IHR5cGU6ICdzdHJpbmcnLCBtYW5kYXRvcnk6IHRydWUgfSxcbiAgICAgICAgbWFuZGF0b3J5OiB7IHR5cGU6ICdib29sZWFuJywgbWFuZGF0b3J5OiBmYWxzZSB9LFxuICAgICAgICBkZWZhdWx0OiB7IHR5cGU6ICd7dHlwZX0nLCBtYW5kYXRvcnk6IGZhbHNlIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBwcm9wZXJ0eToge1xuICAgICAgX2lkOiAnYTE2YTNhMWFlMDUxYTU1ZCcsXG4gICAgICBuYW1lOiAncHJvcGVydHknLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZTogeyB0eXBlOiAnc3RyaW5nJywgbWFuZGF0b3J5OiB0cnVlIH0sXG4gICAgICAgIHJlYWRPbmx5OiB7IHR5cGU6ICdib29sZWFuJywgbWFuZGF0b3J5OiB0cnVlIH0sXG4gICAgICAgIG1hbmRhdG9yeTogeyB0eXBlOiAnYm9vbGVhbicsIG1hbmRhdG9yeTogdHJ1ZSB9LFxuICAgICAgICBkZWZhdWx0OiB7IHR5cGU6ICd7dHlwZX0nLCBtYW5kYXRvcnk6IHRydWUgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgICAgbGFiZWw6IHsgdHlwZTogJ3N0cmluZycsIG1hbmRhdG9yeTogZmFsc2UgfVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIHRleHQ6IHsgX2lkOiAnYzEzNmZjMTI5YTkxMmY1NCcsIG5hbWU6ICd0ZXh0JywgdHlwZTogJ3N0cmluZycsIGNvcmU6IHRydWUgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgX0NoYW5uZWw6IHsgY2hhbm5lbDogeyBfaWQ6ICdjaGFubmVsJyB9IH0sXG4gICAgX0RhdGFiYXNlOiB7IGRiOiB7IF9pZDogJ2RiJyB9IH0sXG4gICAgX0xvZ2dlcjogeyBsb2dnZXI6IHsgX2lkOiAnbG9nZ2VyJywgbGV2ZWw6ICd3YXJuJyB9IH0sXG4gICAgX01ldGFtb2RlbDogeyBtZXRhbW9kZWw6IHsgX2lkOiAnbWV0YW1vZGVsJyB9IH0sXG4gICAgX1J1bnRpbWU6IHsgcnVudGltZTogeyBfaWQ6ICdydW50aW1lJywgdmVyc2lvbjogJzIuNS4wJyB9IH1cbiAgfSxcbiAgX2lkOiAnZTg5YzYxN2I2YjE1ZDI0J1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGJlaGF2aW9ycyBvZiBhbGwgY29tcG9uZW50cy5cbiAqIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBzdG9yZSA9IHt9O1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVuYyBhIHN0cmluZ2lmaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgdGhlIGJlaGF2aW9yIHdpbGwgYmUgdHJlYXRlZCBhcyBhIFN5c3RlbSBSdW50aW1lIGNvcmUgYmVoYXZpb3IuXG4gKiBJbiB0aGF0IGNhc2UsIHRoZSBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkIGluIGEgc3lzdGVtIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFN5c3RlbSBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGZ1bmN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgY3JlYXRlZCBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBmdW5jdGlvbiBmcm9tIGEgc3RyaW5nLlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb246XG4gKiAtIHdpbGwgYmUgYSBuYW1lZCBmdW5jdGlvbixcbiAqIC0gaGFzIHRoZSBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgYW5kXG4gKiAtIGNhbiBoYXZlIHNvbWUgY29yZSBtb2R1bGVzIGluamVjdGVkIGFzIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24obmFtZSwgZnVuYywgY29yZSwgdXNlQ29yZUFQSSkge1xuICB2YXIgYmVnaW5Cb2R5ID0gLTE7XG4gIHZhciBmdW5jUGFyYW1zID0gJyc7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHBhcmFtc0NsZWFuID0gW107XG4gIHZhciBmdW5jQm9keSA9ICcnO1xuICB2YXIgaGVhZGVyID0gJyc7XG4gIHZhciBhY3Rpb24gPSBudWxsO1xuICB2YXIgaXNBcnJvd0Z1bmN0aW9uID0gdHJ1ZTtcbiAgdmFyIGlzT25lTGluZSA9IGZhbHNlO1xuXG4gIGlmIChmdW5jLnRyaW0oKS5pbmRleE9mKCdmdW5jdGlvbicpID09PSAwKSB7XG4gICAgaXNBcnJvd0Z1bmN0aW9uID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNBcnJvd0Z1bmN0aW9uKSB7XG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCc9PicpO1xuXG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgICBoZWFkZXIgPSBoZWFkZXIucmVwbGFjZSgnPT4nLCAnJyk7XG5cbiAgICBpZiAoaGVhZGVyLmluZGV4T2YoJygnKSAhPT0gLTEpIHtcbiAgICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXJcbiAgICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgICAgLnJlcGxhY2UoJyknLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVuY1BhcmFtcyA9IGhlYWRlci50cmltKCk7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDIsIGZ1bmMubGVuZ3RoKS50cmltKCk7XG5cbiAgICBpZiAoZnVuY0JvZHkuaW5kZXhPZigneycpID09PSAwKSB7XG4gICAgICBmdW5jQm9keSA9IGZ1bmNCb2R5LnN1YnN0cmluZygxLCBmdW5jQm9keS5sYXN0SW5kZXhPZignfScpKS50cmltKCk7XG4gICAgfVxuXG4gICAgaWYgKGZ1bmNCb2R5LmluZGV4T2YoJ1xcbicpID09PSAtMSkge1xuICAgICAgaXNPbmVMaW5lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJvd0Z1bmN0aW9uICYmIGlzT25lTGluZSAmJiBmdW5jQm9keS5pbmRleE9mKCdyZXR1cm4gJykgPT09IC0xKSB7XG4gICAgICBmdW5jQm9keSA9ICdyZXR1cm4gJyArIGZ1bmNCb2R5O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuXG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlclxuICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgIC5yZXBsYWNlKCcpJywgJycpXG4gICAgICAudHJpbSgpO1xuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDEpO1xuICAgIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDAsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcbiAgfVxuXG4gIC8vIGtsdWRnZSBmb3IgQmFiZWxcbiAgZnVuY0JvZHkgPSBmdW5jQm9keS5yZXBsYWNlKC9fdGhpcy9nLCAndGhpcycpO1xuXG4gIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgcGFyYW1zID0gW107XG4gIH1cblxuICBpZiAodXNlQ29yZUFQSSkge1xuICAgIHBhcmFtcy5wdXNoKCckY29tcG9uZW50Jyk7XG4gICAgcGFyYW1zLnB1c2goJyRkYicpO1xuICAgIHBhcmFtcy5wdXNoKCckbWV0YW1vZGVsJyk7XG4gICAgcGFyYW1zLnB1c2goJyR3b3JrZmxvdycpO1xuICAgIHBhcmFtcy5wdXNoKCckYmVoYXZpb3InKTtcbiAgICBwYXJhbXMucHVzaCgnJHN0YXRlJyk7XG4gICAgcGFyYW1zLnB1c2goJyRsb2cnKTtcbiAgICBwYXJhbXMucHVzaCgnJGhlbHBlcicpO1xuICB9XG5cbiAgaWYgKCRoZWxwZXIuaXNPbk5vZGUoKSkge1xuICAgIHBhcmFtcy5wdXNoKCdyZXF1aXJlJyk7XG4gIH1cblxuICBpZiAocGFyYW1zWzBdICE9PSAnJykge1xuICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX2JvZHknLFxuICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgbmFtZSArXG4gICAgICAgICcgKCcgK1xuICAgICAgICBwYXJhbXMuam9pbignLCcpICtcbiAgICAgICAgXCIpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbignXCIgK1xuICAgICAgICBwYXJhbXMuam9pbihcIicsJ1wiKSArXG4gICAgICAgIFwiJywgX19ib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCJcbiAgICApKGZ1bmNCb2R5KTtcbiAgfSBlbHNlIHtcbiAgICBhY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnX19ib2R5JyxcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICAnICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihfX2JvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTsnXG4gICAgKShmdW5jQm9keSk7XG4gIH1cblxuICByZXR1cm4gYWN0aW9uO1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgYWRkXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIHRoZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFN5c3RlbSBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29yZSBpZiB0cnVlLCBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCBuZXcgY29udGV4dCBvZiB0aGUgYmVoYXZpb3JcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGlkIG9mIHRoZSBiZWhhdmlvciBjcmVhdGVkIGluIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgYmVoYXZpb3IgdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmFkZCA9IGZ1bmN0aW9uIGFkZChpZCwgc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgY29yZSwgY29udGV4dCkge1xuICB2YXIgYmVoYXZpb3JJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB2YXIgc3RyQWN0aW9uID0gYWN0aW9uLnRvU3RyaW5nKCk7XG5cbiAgaWYgKHR5cGVvZiBjb3JlID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvcmUgPSBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHVzZUNvcmVBUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdXNlQ29yZUFQSSA9IGZhbHNlO1xuICB9XG5cbiAgYWN0aW9uID0gY3JlYXRlRnVuY3Rpb24oc3RhdGUsIHN0ckFjdGlvbiwgY29yZSwgdXNlQ29yZUFQSSk7XG5cbiAgc3RvcmVbYmVoYXZpb3JJZF0gPSBhY3Rpb247XG5cbiAgJGRiLl9CZWhhdmlvci5pbnNlcnQoe1xuICAgIF9pZDogYmVoYXZpb3JJZCxcbiAgICBjb21wb25lbnQ6IGlkLFxuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBhY3Rpb246IHN0ckFjdGlvbixcbiAgICB1c2VDb3JlQVBJOiB1c2VDb3JlQVBJLFxuICAgIGNvcmU6IGNvcmUsXG4gICAgY29udGV4dDogY29udGV4dFxuICB9KTtcblxuICByZXR1cm4gYmVoYXZpb3JJZDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yIChvcHRpb25hbClcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBvciByZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgZm9yIGEgc3BlY2lmaWMgc3RhdGVcbiAqIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocGFyYW1zKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gIHBhcmFtcy5iZWhhdmlvcklkID0gcGFyYW1zLmJlaGF2aW9ySWQgfHwgJyc7XG4gIHBhcmFtcy5jb21wb25lbnRJZCA9IHBhcmFtcy5jb21wb25lbnRJZCB8fCAnJztcbiAgcGFyYW1zLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICcnO1xuXG4gIGlmIChwYXJhbXMuY29tcG9uZW50SWQpIHtcbiAgICBpZiAocGFyYW1zLmJlaGF2aW9ySWQpIHtcbiAgICAgICRkYi5fQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgX2lkOiBwYXJhbXMuYmVoYXZpb3JJZCxcbiAgICAgICAgY29tcG9uZW50OiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgIHN0YXRlOiBwYXJhbXMuc3RhdGVcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIHN0b3JlW3BhcmFtcy5iZWhhdmlvcklkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtcy5zdGF0ZSkge1xuICAgICAgICByZXN1bHQgPSAkZGIuX0JlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgICAgc3RhdGU6IHBhcmFtcy5zdGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9ICRkYi5fQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHBhcmFtcy5jb21wb25lbnRJZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLnJlbW92ZUZyb21NZW1vcnkgPSBmdW5jdGlvbiByZW1vdmVGcm9tTWVtb3J5KGlkKSB7XG4gIGRlbGV0ZSBzdG9yZVtpZF07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIGFjdGlvbnMgdGhhdCBoYXZlIHRvIGJlIGV4ZWN1dGVkIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCBhbmQgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBhY3Rpb25zIG9mIGEgYmVoYXZpb3IgZm9yIGEgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoaWQsIHN0YXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGRiUmVzdWx0ID0gW107XG4gIHZhciBhY3Rpb24gPSBudWxsO1xuXG4gIGRiUmVzdWx0ID0gJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICBjb21wb25lbnQ6IGlkLFxuICAgIHN0YXRlOiBzdGF0ZVxuICB9KTtcblxuICBkYlJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uKGJlaGF2aW9yKSB7XG4gICAgYWN0aW9uID0gc3RvcmVbYmVoYXZpb3IuX2lkXTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKFxuICAgICAgICBiZWhhdmlvci5zdGF0ZSxcbiAgICAgICAgYmVoYXZpb3IuYWN0aW9uLFxuICAgICAgICBiZWhhdmlvci5jb3JlLFxuICAgICAgICBiZWhhdmlvci51c2VDb3JlQVBJXG4gICAgICApO1xuICAgICAgc3RvcmVbYmVoYXZpb3IuX2lkXSA9IGFjdGlvbjtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goe1xuICAgICAgdXNlQ29yZUFQSTogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgIGNvbnRleHQ6IGJlaGF2aW9yLmNvbnRleHQsXG4gICAgICBhY3Rpb246IGFjdGlvblxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIHN0b3JlZCBpbiBtZW1vcnlcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBzdG9yZSA9IHt9O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHJldHVybnMge0JlaGF2aW9yfSB0aGUgYmVoYXZpb3JcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBiZWhhdmlvciBieSBpdHMgaWRcbiAqL1xuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgcmV0dXJuIHN0b3JlW2lkXTtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIHdvcmtmbG93XG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBiZWhhdmlvclxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY29tcG9uZW50cy5cbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IFN5c3RlbSBSdW50aW1lLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBQUk9QRVJUWV9UWVBFID0gJ3Byb3BlcnR5JztcbnZhciBMSU5LX1RZUEUgPSAnbGluayc7XG52YXIgQ09MTEVDVElPTl9UWVBFID0gJ2NvbGxlY3Rpb24nO1xudmFyIE1FVEhPRF9UWVBFID0gJ21ldGhvZCc7XG52YXIgRVZFTlRfVFlQRSA9ICdldmVudCc7XG52YXIgTkFNRSA9ICdfbmFtZSc7XG52YXIgc3RvcmUgPSB7fTtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQGNsYXNzIF9BcnJheVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZcbiAqIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIHtTdHJpbmd9IHR5cGUgdHlwZSBvZiB0aGUgYXJyYXlcbiAqIHtBcnJheX0gYXJyIGFycmF5XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFN1YiBjbGFzcyB0byBvdmVycmlkZSBtYW55IG1ldGhvZHMgb2YgQXJyYXkgQ2xhc3NcbiAqL1xuZnVuY3Rpb24gX0FycmF5KGNvbmYpIHtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgYXJyRGIgPSBbXTtcbiAgdmFyIHR5cGUgPSAnJztcbiAgdmFyIGlkID0gJyc7XG4gIHZhciBjbGFzc0lkID0gJyc7XG4gIHZhciBwcm9wZXJ0eU5hbWUgPSAnJztcbiAgdmFyIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICBjb25mID0gY29uZiB8fCB7fTtcbiAgdHlwZSA9IGNvbmYudHlwZSB8fCAnJztcbiAgaWQgPSBjb25mLmlkIHx8ICcnO1xuICBwcm9wZXJ0eU5hbWUgPSBjb25mLnByb3BlcnR5TmFtZSB8fCAnJztcbiAgYXJyRGIgPSBjb25mLmFyciB8fCBbXTtcbiAgY2xhc3NJZCA9IGNvbmYuY2xhc3NJZCB8fCAnJztcblxuICBpZiAodHlwZW9mIGNvbmYucmVhZE9ubHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXNSZWFkT25seSA9IGNvbmYucmVhZE9ubHk7XG4gIH1cblxuICAvLyBpbml0XG4gIGFyckRiLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKCRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSkpIHtcbiAgICAgIGFyci5wdXNoKCRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUodmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyci5wdXNoKHZhbCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQG1ldGhvZCBfY29weVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gY29weSB0aGUgYXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIF9jb3B5KCkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgICBhcnJEYi5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSkpIHtcbiAgICAgICAgYXJyW2ldID0gJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyW2ldID0gdmFsO1xuICAgICAgfVxuICAgICAgaSA9IGkgKyAxO1xuICAgIH0pO1xuXG4gICAgZm9yIChqID0gaTsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICBkZWxldGUgYXJyW2pdO1xuICAgIH1cbiAgICBhcnIubGVuZ3RoID0gYXJyRGIubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2FkZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsIHZhbHVlIHRvIGFkZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uIHR5cGUgb2YgYWN0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsZXRlQ291bnRcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIGFkZCBhbiBpdGVtIGluIHRoZSBhcnJheVxuICAgKi9cbiAgZnVuY3Rpb24gX2FkZCh2YWwsIGFjdGlvbiwgc3RhcnQsIGRlbGV0ZUNvdW50KSB7XG4gICAgdmFyIGlzQ2xhc3MgPSBmYWxzZTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGRlbCA9IFtdO1xuXG4gICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICBpc0NsYXNzID0gJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKTtcblxuICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbCAmJlxuICAgICAgICAgICRtZXRhbW9kZWwuaW5oZXJpdEZyb20odmFsLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGUucmVwbGFjZSgnQCcsICcnKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3B1c2gnOlxuICAgICAgICAgICAgICBhcnJEYi5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICBhcnJEYi51bnNoaWZ0KHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NwbGljZSc6XG4gICAgICAgICAgICAgIGRlbCA9IGFyckRiLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHZhbCk7XG5cbiAgICAgICAgICAgICAgbGVuZ3RoID0gZGVsLmxlbmd0aDtcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3N0b3JlW2RlbFtpXV0sICdyZW1vdmUnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBkYXRhOiBbdmFsLCAnYWRkJ11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbC5pZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwuaWQoKSwgdHlwZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAncHVzaCc6XG4gICAgICAgICAgICAgIGFyckRiLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICBhcnJEYi51bnNoaWZ0KHZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdzcGxpY2UnOlxuICAgICAgICAgICAgICBhcnJEYi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgZGF0YTogW3ZhbCwgJ2FkZCddXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKGlkLCBjbGFzc0lkLCBwcm9wZXJ0eU5hbWUsIHZhbCwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCBjbGFzc0lkLCBwcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyRGIubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbW92ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiByZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBhcnJheVxuICAgKi9cbiAgZnVuY3Rpb24gX3JlbW92ZShhY3Rpb24pIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciB2YWwgPSBudWxsO1xuICAgIHZhciBpc0NsYXNzID0gZmFsc2U7XG5cbiAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgIGlmIChhcnJEYi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwb3AnOlxuICAgICAgICAgICAgdmFsID0gYXJyRGIucG9wKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NoaWZ0JzpcbiAgICAgICAgICAgIHZhbCA9IGFyckRiLnNoaWZ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNDbGFzcyA9ICRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSk7XG5cbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICByZXN1bHQgPSBzdG9yZVt2YWxdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIGRhdGE6IFtyZXN1bHQsICdyZW1vdmUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCBjbGFzc0lkLCBwcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcHVzaFxuICAgKiBAcGFyYW0ge19Db21wb25lbnR8T2JqZWN0fSB2YWxcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHB1c2ggbWV0aG9kXG4gICAqL1xuICBhcnIucHVzaCA9IGZ1bmN0aW9uIHB1c2godmFsKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9hZGQodmFsLCAncHVzaCcpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVuc2hpZnRcbiAgICogQHBhcmFtIHtfQ29tcG9uZW50fE9iamVjdH0gdmFsXG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSB1bnNoaWZ0IG1ldGhvZFxuICAgKi9cbiAgYXJyLnVuc2hpZnQgPSBmdW5jdGlvbiB1bnNoaWZ0KHZhbCkge1xuICAgIHZhciByZXN1bHQgPSBfYWRkKHZhbCwgJ3Vuc2hpZnQnKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBwdXNoXG4gICAqIEBwYXJhbSB7X0NvbXBvbmVudHxPYmplY3R9IGFyclxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgY29uY2F0IG1ldGhvZFxuICAgKi9cbiAgYXJyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdChhcnIpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9hZGQoYXJyW2ldLCAncHVzaCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmYuYXJyID0gYXJyRGI7XG5cbiAgICByZXN1bHQgPSBuZXcgX0FycmF5KGNvbmYpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHBvcFxuICAgKiBAcmV0dXJucyB7X0NvbXBvbmVudHxPYmplY3R9IHZhbHVlXG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBwb3AgbWV0aG9kXG4gICAqL1xuICBhcnIucG9wID0gZnVuY3Rpb24gcG9wKCkge1xuICAgIHZhciByZXN1bHQgPSBfcmVtb3ZlKCdwb3AnKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBzaGlmdFxuICAgKiBAcmV0dXJucyB7X0NvbXBvbmVudHxPYmplY3R9IHZhbHVlXG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzaGlmdCBtZXRob2RcbiAgICovXG4gIGFyci5zaGlmdCA9IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgIHZhciByZXN1bHQgPSBfcmVtb3ZlKCdzaGlmdCcpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNvcnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3QgdGhlIHNvcnQgZnVuY3Rpb25cbiAgICogQHJldHVybnMge19BcnJheX0gdGhlIGN1cnJlbnQgX0FycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzb3J0IG1ldGhvZFxuICAgKi9cbiAgYXJyLnNvcnQgPSBmdW5jdGlvbiBzb3J0KGZ1bmN0KSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICBhcnJEYi5zb3J0KGZ1bmN0KTtcblxuICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAkaGVscGVyXG4gICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gYXJyO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJldmVyc2VcbiAgICogQHJldHVybnMge19BcnJheX0gdGhlIHJldmVyc2VkIF9BcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgcmV2ZXJzZSBtZXRob2RcbiAgICovXG4gIGFyci5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICBhcnJEYi5yZXZlcnNlKCk7XG5cbiAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgJGhlbHBlclxuICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgdmFsdWU6IGFyckRiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNwbGljZVxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgc3BsaWNlZCBfQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNwbGljZSBtZXRob2RcbiAgICovXG4gIGFyci5zcGxpY2UgPSBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB2YWwpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciBpc0NsYXNzID0gZmFsc2U7XG4gICAgdmFyIGRhdGEgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBfYWRkKHZhbCwgJ3NwbGljZScsIHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGFyckRiLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAkaGVscGVyXG4gICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlzQ2xhc3MgPSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpO1xuICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgIGRhdGEgPSBzdG9yZVtyZXN1bHRbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSByZXN1bHRbaV07XG4gICAgICAgIH1cblxuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICBkYXRhOiBbZGF0YSwgJ3JlbW92ZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNsaWNlXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSBzbGljZWQgX0FycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzbGljZSBtZXRob2RcbiAgICovXG4gIGFyci5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgcmVzdWx0ID0gYXJyRGIuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuX0FycmF5LnByb3RvdHlwZSA9IFtdO1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIG5hbWVzIG9mIG1ldGhvZCBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgcGFyYW1zID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV0ucGFyYW1zO1xuICBpZiAocGFyYW1zKSB7XG4gICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBwcm9wZXJ0eSBvZiBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoaWQpIHtcbiAgdmFyIG1vZGVsID0gbnVsbDtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBwcm9wTmFtZXMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsW05BTUVdKTtcblxuICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChcbiAgICAgIHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBMSU5LX1RZUEUgfHxcbiAgICAgIHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBQUk9QRVJUWV9UWVBFIHx8XG4gICAgICBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gQ09MTEVDVElPTl9UWVBFXG4gICAgKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIG5hbWU6IHByb3BOYW1lc1tpXSxcbiAgICAgICAgdHlwZTogbW9kZWxbcHJvcE5hbWVzW2ldXS50eXBlLFxuICAgICAgICByZWFkT25seTogbW9kZWxbcHJvcE5hbWVzW2ldXS5yZWFkT25seVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldE1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBtZXRob2RzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBtZXRob2Qgb2YgYSBjbGFzc1xuICovXG5mdW5jdGlvbiBnZXRNZXRob2RzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgcHJvcE5hbWVzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpO1xuICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IE1FVEhPRF9UWVBFKSB7XG4gICAgICByZXN1bHQucHVzaChwcm9wTmFtZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTdHJ1Y3R1cmVQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIHByb3BlcnR5IHNjaGVtYSBvZiB0aGUgc3RydWN0dXJlIHR5cGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBzY2hlbWEgb2YgYSBzdHJ1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RydWN0dXJlUHJvcGVydGllcyhwcm9wZXJ0eU5hbWUsIG1vZGVsKSB7XG4gIHZhciBtb2RlbERlZiA9IG51bGw7XG4gIHZhciB0eXBlID0gbnVsbDtcbiAgdmFyIHN0cnVjdHVyZSA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHByb3BOYW1lcyA9IFtdO1xuXG4gIG1vZGVsRGVmID0gJG1ldGFtb2RlbC5nZXRNb2RlbChtb2RlbCk7XG4gIHR5cGUgPSBtb2RlbERlZltwcm9wZXJ0eU5hbWVdLnR5cGU7XG4gIHN0cnVjdHVyZSA9ICRtZXRhbW9kZWwuZ2V0VHlwZSh0eXBlKTtcblxuICBpZiAoc3RydWN0dXJlLnNjaGVtYSkge1xuICAgIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHN0cnVjdHVyZS5zY2hlbWEpO1xuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0cnVjdHVyZS5zY2hlbWFbbmFtZV0ubmFtZSA9IG5hbWU7XG4gICAgICByZXN1bHQucHVzaChzdHJ1Y3R1cmUuc2NoZW1hW25hbWVdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBldmVudHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIGV2ZW50IG9mIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0RXZlbnRzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgcHJvcE5hbWVzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpO1xuICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IEVWRU5UX1RZUEUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSB2YWx1ZSBvZiBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgdmFyIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciBsZW5ndGggPSBzdWJQYXRoLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJlc3VsdCA9IGRvYztcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgPSByZXN1bHRbc3ViUGF0aFtpXV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIHRvIHNldFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIHZhbHVlIG9mIGEgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgdmFyIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciBsZW5ndGggPSBzdWJQYXRoLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJlc3VsdCA9IGRvYztcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0W3N1YlBhdGhbaV1dO1xuICB9XG4gIHJlc3VsdFtzdWJQYXRoW2ldXSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgbmV3IGNsYXNzIGZyb20gYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKGNsYXNzSWQpIHtcbiAgdmFyIGJvZHkgPSBmdW5jdGlvbiBib2R5KGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICB2YXIgYm9keSA9IHt9O1xuXG4gICAgaWYgKGNvbmZpZy5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnT2JqZWN0Jykge1xuICAgICAgJGxvZy5pbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzKGNvbmZpZywgY2xhc3NJZCk7XG4gICAgICBjb25maWcgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KFxuICAgICAgICBjb25maWcsXG4gICAgICAgICRtZXRhbW9kZWwuZ2V0TW9kZWwoY2xhc3NJZCksXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICApIHtcbiAgICAgICRsb2cuaW52YWxpZFBhcmFtZXRlcnMoY2xhc3NJZCk7XG4gICAgfVxuXG4gICAgJG1ldGFtb2RlbC5wcmVwYXJlT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXRNb2RlbChjbGFzc0lkKSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcuX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfVxuXG4gICAgc3RvcmVbY29uZmlnLl9pZF0gPSB0aGlzO1xuXG4gICAgLy8gaWRcbiAgICBib2R5ID0gZnVuY3Rpb24gYm9keSgpIHtcbiAgICAgIHJldHVybiBjb25maWcuX2lkO1xuICAgIH07XG4gICAgdGhpcy5pZCA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX2JvZHknLFxuICAgICAgJ3JldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzKSB9OydcbiAgICApKGJvZHkpO1xuXG4gICAgLy8gY3JlYXRlIGxpbmsgdG8gZGJcbiAgICAkZGIuc3RvcmVbY2xhc3NJZF1bY29uZmlnLl9pZF0gPSBjb25maWc7XG5cbiAgICAkZGIuY3JlYXRlTG9nKCdpbnNlcnQnLCBjbGFzc0lkLCBjb25maWcuX2lkLCAnJywgY29uZmlnKTtcblxuICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICRoZWxwZXJcbiAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgIGRvY3VtZW50OiBjb25maWdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcblxuICAgIGlmICh0aGlzLmluaXQpIHtcbiAgICAgIHRoaXMuaW5pdChjb25maWcpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbihcbiAgICAnX19ib2R5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uICcgKyBjbGFzc0lkICsgJyAoY29uZmlnKSB7IF9fYm9keS5jYWxsKHRoaXMsY29uZmlnKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZElkQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhbiBpZCBtZXRob2QgdG8gYSBjbGFzcyB0aGF0IHdpbGwgcmV0dXJuIGl0cyBpZFxuICovXG5mdW5jdGlvbiBhZGRJZENsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSgpIHtcbiAgICByZXR1cm4gY2xhc3NJZDtcbiAgfTtcbiAgQ2xhc3MuaWQgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIHByb3BlcnRpZXMgdG8gYSBjb21wb25lbnQuXG4gKiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICpcbiAqIEBleGFtcGxlXG4gKiBsYXVyZS5hZ2UoKTsgLy8gZ2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqIGxhdXJlLmFnZSgyMik7IC8vIHNldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKi9cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyhtb2RlbCk7XG5cbiAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BlcnR5KHByb3ApIHtcbiAgICB2YXIgYm9keSA9IHt9O1xuICAgIHZhciBwcm9wZXJ0eU5hbWUgPSAnJztcbiAgICB2YXIgcHJvcGVydHlUeXBlID0gJyc7XG4gICAgdmFyIHByb3BlcnR5UmVhZE9ubHkgPSAnJztcblxuICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wLnR5cGU7XG4gICAgcHJvcGVydHlSZWFkT25seSA9IHByb3AucmVhZE9ubHk7XG5cbiAgICBmdW5jdGlvbiBfaXNWYWxpZENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgIGNvbGwuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoXG4gICAgICAgICAgICAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkgJiZcbiAgICAgICAgICAgICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICB2YWwuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgdHlwZS5yZXBsYWNlKCdAJywgJycpXG4gICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSkpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0UmVhbENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICBjb2xsLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIGlmICgkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnOlxuICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbC5pZCAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXN1bHQucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgfHwgcHJvcGVydHlUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICAvLyBpbiBjYXNlIG9mIGFycmF5LCByZXR1cm4gYSBzdWIgYXJyYXlcbiAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHBvc2l0aW9uLCB2YWx1ZSkge1xuICAgICAgICB2YXIgc2VhcmNoID0gW107XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICB2YXIgcnVudGltZUFyciA9IG51bGw7XG4gICAgICAgIHZhciB2YWwgPSBudWxsO1xuICAgICAgICB2YXIgcmVhbFZhbCA9IG51bGw7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBfQXJyYXkoe1xuICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgcmVhZE9ubHk6IHByb3BlcnR5UmVhZE9ubHksXG4gICAgICAgICAgICAgIGNsYXNzSWQ6IGNsYXNzSWQsXG4gICAgICAgICAgICAgIHR5cGU6IHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhbnknIDogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICBhcnI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2UgdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIF9pc1ZhbGlkQ29sbGVjdGlvbihcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FueScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogdGhpcy5pZCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSBfZ2V0UmVhbENvbGxlY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtwb3NpdGlvbiwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHJlYWxWYWw7XG5cbiAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb21wb25lbnRbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhcnJheScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWxWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAgICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICAgIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknXG4gICAgICAgICAgICAgICAgICA/ICdhcnJheSdcbiAgICAgICAgICAgICAgICAgIDogcHJvcGVydHlUeXBlWzBdLnJlcGxhY2UoJ0AnLCAnJylcbiAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYXJyYXknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgX2lkOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbHVlLmlkICE9PSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dID0gcmVhbFZhbDtcblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbdmFsdWUsICdhZGQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX2JvZHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgICAgJyAocG9zaXRpb24sIHZhbHVlKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07J1xuICAgICAgKShib2R5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkodmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShwcm9wZXJ0eVR5cGUpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBleHBvcnRzLmdldChjb21wb25lbnRbcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdqc29uJzpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgX0FycmF5KHtcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgY2xhc3NJZDogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgICAgYXJyOiAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShwcm9wZXJ0eU5hbWUsIGNsYXNzSWQpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoXG4gICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gY29tcG9uZW50W3Byb3BlcnR5TmFtZV07IC8vIFRPRE8gY2FzZSBvZiBvYmplY3RcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmRlc3Ryb3llZENvbXBvbmVudENhbGwocHJvcGVydHlOYW1lLCB0aGlzLmlkKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgX2lkOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIF9CZWhhdmlvclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc0lkID09PSAnX0JlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3ZhbHVlXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX2JvZHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgICAgJyAodmFsdWUpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsdmFsdWUpIH07J1xuICAgICAgKShib2R5KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkU3RydWN0dXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXJlbnQgcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgcHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgdGhhdCBjb2ludGFpbnMgbWV0aG9kcyB0byBhY2Nlc3MgdGhlIHN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgc3RydWN0dXJlIHByb3BlcnRpZXMgdG8gYSBjb21wb25lbnQuXG4gKiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICovXG5mdW5jdGlvbiBhZGRTdHJ1Y3R1cmUocGF0aCwgbmFtZSwgbW9kZWwsIGlkKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0U3RydWN0dXJlUHJvcGVydGllcyhuYW1lLCBtb2RlbCk7XG4gIHZhciBzcnVjdHVyZSA9IHt9O1xuXG4gIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgdmFyIGJvZHkgPSB7fTtcbiAgICB2YXIgcHJvcGVydHlOYW1lID0gJyc7XG4gICAgdmFyIHByb3BlcnR5VHlwZSA9ICcnO1xuICAgIHZhciBwcm9wZXJ0eVJlYWRPbmx5ID0gJyc7XG5cbiAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wLm5hbWU7XG4gICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgIHByb3BlcnR5UmVhZE9ubHkgPSBwcm9wLnJlYWRPbmx5O1xuXG4gICAgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICBib2R5ID0gZnVuY3Rpb24gYm9keShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHJ1bnRpbWVBcnIgPSBudWxsO1xuICAgICAgICB2YXIgdmFsID0gbnVsbDtcbiAgICAgICAgdmFyIHJlYWxWYWwgPSBudWxsO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuICAgICAgICB2YXIgcGFyZW50UGF0aCA9ICcnO1xuICAgICAgICB2YXIgZnVsbFBhdGggPSAnJztcblxuICAgICAgICBmdW5jdGlvbiBfaXNWYWxpZENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHBhcmVudFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBmdWxsUGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBfQXJyYXkoe1xuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICBjbGFzc0lkOiBtb2RlbCxcbiAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgIGFycjogZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2UgdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgaWYgKF9pc1ZhbGlkQ29sbGVjdGlvbihwb3NpdGlvbiwgJ2FueScpKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtwb3NpdGlvbiwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsICdhbnknKSkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbbW9kZWxdLmZpbmQoe1xuICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgYXJyID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFycltwb3NpdGlvbl0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCBhcnIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhcnJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbYXJyLCAnYWRkJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzcnVjdHVyZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICAgICcgKHBvc2l0aW9uLCB2YWx1ZSkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgcG9zaXRpb24sIHZhbHVlKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBbXTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gbnVsbDtcbiAgICAgICAgdmFyIHBhcmVudFBhdGggPSAnJztcbiAgICAgICAgdmFyIGZ1bGxQYXRoID0gJyc7XG5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBwYXJlbnRQYXRoID0gcGFyZW50UGF0aCArICcuJyArIG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50UGF0aCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZnVsbFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgcHJvcGVydHlOYW1lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW21vZGVsXVtpZF07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShwcm9wZXJ0eVR5cGUpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBleHBvcnRzLmdldChcbiAgICAgICAgICAgICAgICAgIGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnanNvbic6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNTdHJ1Y3R1cmUocHJvcGVydHlOYW1lLCBtb2RlbCk6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGFkZFN0cnVjdHVyZShcbiAgICAgICAgICAgICAgICAgIHBhcmVudFBhdGgsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHByb3AuZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKGZ1bGxQYXRoLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIG1vZGVsLCBmdWxsUGF0aCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgIHNlYXJjaCA9ICRkYlttb2RlbF0uZmluZCh7XG4gICAgICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShwcm9wZXJ0eVR5cGUpOlxuICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIF9CZWhhdmlvclxuICAgICAgICAgICAgICAgIGlmIChtb2RlbCA9PT0gJ19CZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KGlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFt2YWx1ZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc3J1Y3R1cmVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fYm9keScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAnICh2YWx1ZSkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcyx2YWx1ZSkgfTsnXG4gICAgICApKGJvZHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHNydWN0dXJlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkTWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgbWV0aG9kcyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyAvIG91dHB1dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkTWV0aG9kcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIG1ldGhvZHMgPSBnZXRNZXRob2RzKG1vZGVsKTtcblxuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gbWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcGFyYW1zTmFtZSA9IGdldFBhcmFtTmFtZXMoY2xhc3NJZCwgbWV0aG9kTmFtZSk7XG4gICAgdmFyIHBhcmFtcyA9IHBhcmFtc05hbWUuam9pbignLCAnKTtcbiAgICB2YXIgcGFyYW1zV2l0aENvbnRleHQgPSAnJztcblxuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICByZXN1bHQgPSAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgc3RhdGU6IG1ldGhvZE5hbWUsXG4gICAgICAgIGRhdGE6IGFyZ3VtZW50c1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHZhciBib2R5V2l0aENvbnRleHQgPSBmdW5jdGlvbiBib2R5KCkge1xuICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICB2YXIgZGF0YSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgIGRhdGEuc2hpZnQoKTtcblxuICAgICAgaWYgKGFyZ3VtZW50c1swXSkge1xuICAgICAgICByZXN1bHQgPSAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgIHN0YXRlOiBtZXRob2ROYW1lLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgY29udGV4dDogYXJndW1lbnRzWzBdXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duQ29udGV4dChjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgcGFyYW1zTmFtZS51bnNoaWZ0KCdjb250ZXh0Jyk7XG4gICAgICBwYXJhbXNXaXRoQ29udGV4dCA9IHBhcmFtc05hbWUuam9pbignLCAnKTtcblxuICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAnICgnICtcbiAgICAgICAgICBwYXJhbXMgK1xuICAgICAgICAgICcpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsJyArXG4gICAgICAgICAgcGFyYW1zICtcbiAgICAgICAgICAnKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgICBpZiAobWV0aG9kTmFtZSAhPT0gJ25hbWUnKSB7XG4gICAgICAgIENsYXNzW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICdfX2JvZHknLFxuICAgICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAgICcgKCcgK1xuICAgICAgICAgICAgcGFyYW1zV2l0aENvbnRleHQgK1xuICAgICAgICAgICAgJykgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywnICtcbiAgICAgICAgICAgIHBhcmFtc1dpdGhDb250ZXh0ICtcbiAgICAgICAgICAgICcpIH07J1xuICAgICAgICApKGJvZHlXaXRoQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fYm9keScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArIG1ldGhvZE5hbWUgKyAnICgpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMpIH07J1xuICAgICAgKShib2R5KTtcbiAgICAgIGlmIChtZXRob2ROYW1lICE9PSAnbmFtZScpIHtcbiAgICAgICAgQ2xhc3NbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgJ19fYm9keScsXG4gICAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICAgICAgJyAoY29udGV4dCkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgY29udGV4dCkgfTsnXG4gICAgICAgICkoYm9keVdpdGhDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkRXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBldmVudHMgdG8gYSBjb21wb25lbnQuXG4gKiBUaGUgY2FsbCB0byB0aGVzZSBtZXRob2RzIHdpbGwgaW52b2tlIHRoZSB3b3JrZmxvdyBpbiBvcmRlciB0byBjaGVjayB0aGF0IGlucG91dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnRzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gZXZlbnQobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICB2YXIgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsICcpO1xuXG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiBib2R5KCkge1xuICAgICAgdmFyIHN5c3RlbXMgPSBbXTtcbiAgICAgIHZhciBzeXN0ZW1JZCA9ICdlODljNjE3YjZiMTVkMjQnO1xuICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHZhciBsZW5ndGggPSAtMTtcbiAgICAgIHZhciBtZXNzYWdlID0ge307XG5cbiAgICAgIGlmIChjbGFzc0lkID09PSAnX0NoYW5uZWwnKSB7XG4gICAgICAgIHN5c3RlbXMgPSAkZGIuX1N5c3RlbS5maW5kKHtcbiAgICAgICAgICBtYXN0ZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHN5c3RlbUlkID0gc3lzdGVtc1swXS5faWQ7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlLmZyb20gPSBzeXN0ZW1JZDtcbiAgICAgICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGF0YS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZS5kYXRhID0gZGF0YTtcbiAgICAgICAgbWVzc2FnZS5ldmVudCA9IG1ldGhvZE5hbWU7XG5cbiAgICAgICAgJGRiLl9NZXNzYWdlLmluc2VydChtZXNzYWdlKTtcblxuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgIHN0YXRlOiAnc2VuZCcsXG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBldmVudDogbWVzc2FnZS5ldmVudCxcbiAgICAgICAgICAgICAgZnJvbTogbWVzc2FnZS5mcm9tLFxuICAgICAgICAgICAgICBkYXRhOiBtZXNzYWdlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogbWV0aG9kTmFtZSxcbiAgICAgICAgICBkYXRhOiBhcmd1bWVudHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX2JvZHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICAgICcgKCcgK1xuICAgICAgICAgIHBhcmFtcyArXG4gICAgICAgICAgJykgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywnICtcbiAgICAgICAgICBwYXJhbXMgK1xuICAgICAgICAgICcpIH07J1xuICAgICAgKShib2R5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICsgbWV0aG9kTmFtZSArICcgKCkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcykgfTsnXG4gICAgICApKGJvZHkpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG9uIG1ldGhvZCB0byBhIGNvbXBvbmVudCB0byBhZGQgYmVoYXZpb3JzIHRvIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gYWRkT24oQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIGJvZHkgPSBmdW5jdGlvbiBib2R5KHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGlzQ29yZSkge1xuICAgIHZhciBiZWhhdmlvcklkID0gJyc7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuICAgIHZhciBjb250ZXh0ID0gbnVsbDtcblxuICAgIC8vIGNhc2Ugb2YgY29udGV4dFxuICAgIGlmIChcbiAgICAgIHVzZUNvcmVBUEkgJiZcbiAgICAgIHVzZUNvcmVBUEkuY29uc3RydWN0b3IgJiZcbiAgICAgIHVzZUNvcmVBUEkuY29uc3RydWN0b3IubmFtZSAhPT0gJ0Jvb2xlYW4nXG4gICAgKSB7XG4gICAgICBjb250ZXh0ID0gdXNlQ29yZUFQSTtcbiAgICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgICAgIGlzQ29yZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBtZXRob2ROYW1lOiAnb24nLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHNcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAkZGIuX0JlaGF2aW9yLmZpbmQoe1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgICB9KS5sZW5ndGggPj0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAkbG9nLmJlaGF2aW9yTm90VW5pcXVlKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoJHdvcmtmbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBhY3Rpb24pKSB7XG4gICAgICAgICAgICBiZWhhdmlvcklkID0gJGJlaGF2aW9yLmFkZChcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgICB1c2VDb3JlQVBJLFxuICAgICAgICAgICAgICBpc0NvcmUsXG4gICAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQodGhpcy5pZCgpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAkd29ya2Zsb3cuYWN0aW9uKGJlaGF2aW9ySWQsIGN1cnJlbnRTdGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24oXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFN0YXRlT24oY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVoYXZpb3JJZDtcbiAgfTtcbiAgQ2xhc3MucHJvdG90eXBlLm9uID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGlzQ29yZSkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgaXNDb3JlKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7XG4gICAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgICB2YXIgY3VycmVudFN0YXRlID0gJyc7XG4gICAgdmFyIGNvbnRleHQgPSBudWxsO1xuXG4gICAgLy8gY2FzZSBvZiBjb250ZXh0XG4gICAgaWYgKFxuICAgICAgdXNlQ29yZUFQSSAmJlxuICAgICAgdXNlQ29yZUFQSS5jb25zdHJ1Y3RvciAmJlxuICAgICAgdXNlQ29yZUFQSS5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnQm9vbGVhbidcbiAgICApIHtcbiAgICAgIGNvbnRleHQgPSB1c2VDb3JlQVBJO1xuICAgICAgdXNlQ29yZUFQSSA9IGZhbHNlO1xuICAgICAgaXNDb3JlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBtZXRob2ROYW1lOiAnb24nLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHNcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAkZGIuX0JlaGF2aW9yLmZpbmQoe1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgICB9KS5sZW5ndGggPj0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAkbG9nLmJlaGF2aW9yTm90VW5pcXVlKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoJHdvcmtmbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBhY3Rpb24pKSB7XG4gICAgICAgICAgICBiZWhhdmlvcklkID0gJGJlaGF2aW9yLmFkZChcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgICB1c2VDb3JlQVBJLFxuICAgICAgICAgICAgICBpc0NvcmUsXG4gICAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQodGhpcy5pZCgpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAkd29ya2Zsb3cuYWN0aW9uKGJlaGF2aW9ySWQsIGN1cnJlbnRTdGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24oXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFN0YXRlT24oY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVoYXZpb3JJZDtcbiAgfTtcbiAgQ2xhc3Mub24gPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkT2ZmQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgb2ZmIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byByZW1vdmUgYmVoYXZpb3JzIGZyb20gdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keShzdGF0ZSwgYmVoYXZpb3JJZCkge1xuICAgIGlmIChcbiAgICAgICR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29mZicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50c1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgYmVoYXZpb3JJZDogYmVoYXZpb3JJZCxcbiAgICAgICAgICBjb21wb25lbnRJZDogY2xhc3NJZCxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9mZihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBDbGFzcy5vZmYgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBvZmYgKHN0YXRlLCBiZWhhdmlvcklkKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgYmVoYXZpb3JJZCkgfTsnXG4gICkoYm9keSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGREZXN0cm95Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkRGVzdHJveUNsYXNzKENsYXNzKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSgpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkKCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIC8vIGlmIG5vdCB2aXJ0dWFsIGNvbXBvbmVudFxuICAgIGlmICgkZGJbaWRdKSB7XG4gICAgICByZXN1bHQgPSAkZGJbaWRdLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG5cbiAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICBjb21wb25lbnRJZDogaWRcbiAgICB9KTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgY29tcG9uZW50SWQ6IHJlc3VsdFtpXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICBzdGF0ZTogJ2Rlc3Ryb3knXG4gICAgfSk7XG4gIH07XG4gIENsYXNzLmRlc3Ryb3kgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBkZXN0cm95ICgpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkUmVxdWlyZUNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gUmVxdWlyZSBhIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBhZGRSZXF1aXJlQ2xhc3MoQ2xhc3MpIHtcbiAgdmFyIGJvZHkgPSBmdW5jdGlvbiBib2R5KGlkKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZ2V0KGlkKTtcbiAgfTtcbiAgQ2xhc3MucmVxdWlyZSA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19ib2R5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIHJlcXVpcmUgKGlkKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCBpZCkgfTsnXG4gICkoYm9keSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRJbml0Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJbml0IGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkSW5pdENsYXNzKENsYXNzKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSgpIHt9O1xuICBDbGFzcy5pbml0ID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gaW5pdCAoY29uZikgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgY29uZikgfTsnXG4gICkoYm9keSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRDbGFzc0luZm9DbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCB0aGUgQ2xhc3NJbmZvIG1ldGhvZCBvbiBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzSW5mb0NsYXNzKENsYXNzKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5nZXQodGhpcy5pZCgpICsgJ0luZm8nKTtcbiAgfTtcbiAgQ2xhc3MuY2xhc3NJbmZvID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gY2xhc3NJbmZvICgpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZmFjdG9yeVxuICogQHBhcmFtIHtKU09OfSBjb25maWcgY29uZmlndXJhdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Q29tcG9uZW50fSB0aGUgY3JlYXRlZCBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb25cbiAqL1xuZnVuY3Rpb24gZmFjdG9yeShjb25maWcpIHtcbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gIHZhciBDbGFzcyA9IHt9O1xuICB2YXIgY2xhc3NJZCA9ICcnO1xuXG4gIGlmICh0eXBlb2YgY29uZmlnLm1vZGVsID09PSAndW5kZWZpbmVkJykge1xuICAgIGNsYXNzSWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0lkID0gY29uZmlnLm1vZGVsO1xuICB9XG5cbiAgQ2xhc3MgPSBjcmVhdGVDbGFzcyhjbGFzc0lkKTtcblxuICBzdG9yZVtjbGFzc0lkXSA9IENsYXNzO1xuXG4gIGFkZElkQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuXG4gIGFkZFByb3BlcnRpZXMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG4gIGFkZE1ldGhvZHMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG4gIGFkZEV2ZW50cyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcblxuICAvLyBhZGQgZGVmYXVsdCBwcm9wZXJ0aWVzL21ldGhvZHMgb25seSBpZiB0aGUgY29tcG9uZW50XG4gIC8vIGluaGVyaXQgZnJvbSBfQ29tcG9uZW50XG4gIGlmICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKGNsYXNzSWQsICdfQ29tcG9uZW50JykpIHtcbiAgICBhZGRPbihDbGFzcywgY2xhc3NJZCk7XG5cbiAgICBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkUmVxdWlyZUNsYXNzKENsYXNzKTtcbiAgICBhZGRJbml0Q2xhc3MoQ2xhc3MpO1xuICAgIGFkZERlc3Ryb3lDbGFzcyhDbGFzcyk7XG4gICAgYWRkQ2xhc3NJbmZvQ2xhc3MoQ2xhc3MpO1xuICB9XG5cbiAgT2JqZWN0LmZyZWV6ZShDbGFzcyk7XG5cbiAgcmV0dXJuIENsYXNzO1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybnMge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgY29tcG9uZW50IGJ5IGl0cyBpZFxuICovXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldChpZCkge1xuICByZXR1cm4gc3RvcmVbaWRdO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyA8YnI+XG4gKiB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lIDxicj5cbiAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoY29uZmlnKSB7XG4gIHJldHVybiBmYWN0b3J5KGNvbmZpZyk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZGVzdHJveVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnQgdG8gZGVzdHJveVxuICogQGRlc2NyaXB0aW9uIERlc3Ryb3kgYSBjb21wb25lbnQgZnJvbSBpdHMgaWRcbiAqL1xuZXhwb3J0cy5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShpZCkge1xuICB2YXIgY29tcG9uZW50ID0gc3RvcmVbaWRdO1xuICB2YXIgY2xhc3NJZCA9ICcnO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBkZWxldGUgc3RvcmVbaWRdO1xuICAgIGNsYXNzSWQgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAkZGJbY2xhc3NJZF0ucmVtb3ZlKHtcbiAgICAgIF9pZDogaWRcbiAgICB9KTtcblxuICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgIGNvbXBvbmVudElkOiBpZFxuICAgIH0pO1xuXG4gICAgLy8gY2FzZSBvZiBCZWhhdmlvclxuICAgIGlmIChjbGFzc0lkID09PSAnX0JlaGF2aW9yJykge1xuICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgY29tcG9uZW50IHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLnJlbW92ZUZyb21NZW1vcnkgPSBmdW5jdGlvbiByZW1vdmVGcm9tTWVtb3J5KGlkKSB7XG4gIGRlbGV0ZSBzdG9yZVtpZF07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYWxsIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBzdG9yZSA9IHt9O1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgZGJcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEByZXF1aXJlcyBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBiZWhhdmlvclxuICogQHJlcXVpcmVzIHN0YXRlXG4gKiBAcmVxdWlyZXMgd29ya2Zsb3dcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlLlxuICogU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOlxuICogLSBjb2xsZWN0aW9ucyB0byBzdG9yZSBkb2N1bWVudHMgKHNjaGVtYXMsIHR5cGVzLCBjb21wb25lbnRzLCAuLi4pIGFuZFxuICogLSBBUElzIHRvIGltcG9ydCBvciBleHBvcnQgZG9jdW1lbnRzLlxuICpcbiAqIFN5c3RlbSBSdW50aW1lIERhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIFN5c3RlbSBSdW50aW1lIG1ldGFtb2RlbCBhbmQgU3lzdGVtIFJ1bnRpbWUgY29tcG9uZW50cyBiZWNhdXNlOlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCxcbiAqIC0gaW5zZXJ0IG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBjb21wb25lbnQgYW5kXG4gKiAtIHJlbW92ZSBvcGVyYXRpb24gYXV0b21hdGljYWxseSBkZXN0cm95IGEgY29tcG9uZW50LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxudmFyIGNvbGxlY3Rpb25zID0gW107XG52YXIgaW50ZXJuYWxEQiA9IFtcbiAgJ19SdW50aW1lJyxcbiAgJ19TY2hlbWEnLFxuICAnX01vZGVsJyxcbiAgJ19HZW5lcmF0ZWRNb2RlbCcsXG4gICdfQmVoYXZpb3InLFxuICAnX1N0YXRlJyxcbiAgJ19UeXBlJyxcbiAgJ19NZXRhbW9kZWwnLFxuICAnX0RhdGFiYXNlJyxcbiAgJ19TeXN0ZW0nLFxuICAnX0NsYXNzSW5mbycsXG4gICdfTWVzc2FnZScsXG4gICdfQ2hhbm5lbCcsXG4gICdfTG9nZ2VyJyxcbiAgJ19Mb2cnXG5dO1xudmFyIGNvcmVEYiA9IFtcbiAgJ19Mb2cnLFxuICAnX1NjaGVtYScsXG4gICdfTG9nZ2VyJyxcbiAgJ19Nb2RlbCcsXG4gICdfR2VuZXJhdGVkTW9kZWwnLFxuICAnX1N0YXRlJyxcbiAgJ19UeXBlJ1xuXTtcbnZhciBsb2dPcmRlciA9IDA7XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgaW5jTG9nT3JkZXJcbiAqIEBkZXNjcmlwdGlvbiBJbmNyZW1lbnQgTG9nXG4gKi9cbmZ1bmN0aW9uIGluY0xvZ09yZGVyKCkge1xuICByZXR1cm4gbG9nT3JkZXIrKztcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGR1bXBcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkdW1wIG9mIHRoZSBkYXRhYmFzZS4gVGhlIGR1bXAgaXMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnM6IDxicj5cbiAqIHtPYmplY3R9IHNjaGVtYXMgdGhlIHNjaGVtYXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IHR5cGVzIHRoZSB0eXBlcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gYmVoYXZpb3JzIHRoZSBiZWhhdmlvcnMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGNvbXBvbmVudHMgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIER1bXAgdGhlIGRhdGFiYXNlXG4gKi9cbmZ1bmN0aW9uIGR1bXAoKSB7XG4gIHZhciBkYkR1bXAgPSB7fTtcbiAgdmFyIGNvbGxlY3Rpb25OYW1lID0gJyc7XG4gIHZhciBiZWhhdmlvcklkID0gJyc7XG4gIHZhciB0eXBlSWQgPSAnJztcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIG1vZGVsID0gbnVsbDtcbiAgdmFyIGNvbGxlY3Rpb24gPSBudWxsO1xuICB2YXIgc2NoZW1hSWQgPSAnJztcbiAgdmFyIG1vZGVsSWQgPSAnJztcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGlkID0gJyc7XG5cbiAgLy8gc2NoZW1hc1xuICBkYkR1bXAuc2NoZW1hcyA9IHt9O1xuICBpZiAoZXhwb3J0cy5fU2NoZW1hLmNvdW50KCkpIHtcbiAgICBmb3IgKHNjaGVtYUlkIGluIGV4cG9ydHMuc3RvcmUuX1NjaGVtYSkge1xuICAgICAgaWYgKCFleHBvcnRzLnN0b3JlLl9TY2hlbWFbc2NoZW1hSWRdLl9jb3JlKSB7XG4gICAgICAgIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhwb3J0cy5zdG9yZS5fU2NoZW1hW3NjaGVtYUlkXSkpO1xuICAgICAgICBkYkR1bXAuc2NoZW1hc1tzY2hlbWFJZF0gPSBzY2hlbWE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZWxzXG4gIGRiRHVtcC5tb2RlbHMgPSB7fTtcbiAgaWYgKGV4cG9ydHMuX01vZGVsLmNvdW50KCkpIHtcbiAgICBmb3IgKG1vZGVsSWQgaW4gZXhwb3J0cy5zdG9yZS5fTW9kZWwpIHtcbiAgICAgIGlmICghZXhwb3J0cy5zdG9yZS5fTW9kZWxbbW9kZWxJZF0uX2NvcmUpIHtcbiAgICAgICAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmUuX01vZGVsW21vZGVsSWRdKSk7XG4gICAgICAgIGRiRHVtcC5tb2RlbHNbbW9kZWxJZF0gPSBtb2RlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0eXBlc1xuICBkYkR1bXAudHlwZXMgPSB7fTtcbiAgaWYgKGV4cG9ydHMuX1R5cGUuY291bnQoKSkge1xuICAgIGZvciAodHlwZUlkIGluIGV4cG9ydHMuc3RvcmUuX1R5cGUpIHtcbiAgICAgIGlmICghZXhwb3J0cy5zdG9yZS5fVHlwZVt0eXBlSWRdLmNvcmUpIHtcbiAgICAgICAgdHlwZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhwb3J0cy5zdG9yZS5fVHlwZVt0eXBlSWRdKSk7XG4gICAgICAgIGRiRHVtcC50eXBlc1t0eXBlLm5hbWVdID0gdHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBiZWhhdmlvcnNcbiAgZGJEdW1wLmJlaGF2aW9ycyA9IHt9O1xuICBmb3IgKGJlaGF2aW9ySWQgaW4gZXhwb3J0cy5zdG9yZS5fQmVoYXZpb3IpIHtcbiAgICBpZiAoIWV4cG9ydHMuc3RvcmUuX0JlaGF2aW9yW2JlaGF2aW9ySWRdLmNvcmUpIHtcbiAgICAgIGJlaGF2aW9yID0gSlNPTi5wYXJzZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZXhwb3J0cy5zdG9yZS5fQmVoYXZpb3JbYmVoYXZpb3JJZF0pXG4gICAgICApO1xuICAgICAgZGJEdW1wLmJlaGF2aW9yc1tiZWhhdmlvcklkXSA9IGJlaGF2aW9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbXBvbmVudHNcbiAgZGJEdW1wLmNvbXBvbmVudHMgPSB7fTtcbiAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgIGlmIChleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5jb3VudCgpKSB7XG4gICAgICBjb2xsZWN0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlW2NvbGxlY3Rpb25OYW1lXSkpO1xuXG4gICAgICBmb3IgKGlkIGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb25baWRdLl9jb3JlKSB7XG4gICAgICAgICAgZGVsZXRlIGNvbGxlY3Rpb25baWRdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhjb2xsZWN0aW9uKS5sZW5ndGgpIHtcbiAgICAgICAgZGJEdW1wLmNvbXBvbmVudHNbY29sbGVjdGlvbk5hbWVdID0gY29sbGVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGJEdW1wO1xufVxuXG4vKipcbiAqIEBjbGFzcyBfQXJyYXlcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gU3ViIGNsYXNzIHRvIG92ZXJyaWRlIHNvcnQgbWV0aG9kIG9mIEFycmF5IENsYXNzXG4gKi9cbmZ1bmN0aW9uIF9BcnJheSgpIHtcbiAgdmFyIGFyciA9IFtdO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNvcnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IHBhcmFtIHRoZSBzb3J0IGZ1bmN0aW9uIG9yIHRoZSBzb3J0IHF1ZXJ5XG4gICAqIEByZXR1cm5zIHtBcnJheX0gdGhlIHNvcnRlZCBhcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc29ydCBtZXRob2RcbiAgICovXG4gIGFyci5zb3J0ID0gZnVuY3Rpb24gc29ydChwYXJhbSkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIHZhciBmaWVsZCA9ICcnO1xuICAgIHZhciBhcnJDb3B5ID0gW107XG5cbiAgICAvLyBjb3B5XG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgICBhcnJDb3B5LnB1c2godmFsKTtcbiAgICB9KTtcblxuICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBhcnJDb3B5LnNvcnQocGFyYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZCA9IE9iamVjdC5rZXlzKHBhcmFtKVswXTtcbiAgICAgIGFyckNvcHkuc29ydChmdW5jdGlvbihkb2NBLCBkb2NCKSB7XG4gICAgICAgIGlmIChkb2NBW2ZpZWxkXSA8IGRvY0JbZmllbGRdKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmFtW2ZpZWxkXSA9PT0gMSA/IC0xIDogMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9jQVtmaWVsZF0gPiBkb2NCW2ZpZWxkXSkge1xuICAgICAgICAgIHJldHVybiBwYXJhbVtmaWVsZF0gPT09IDEgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyQ29weTtcbiAgfTtcblxuICByZXR1cm4gYXJyO1xufVxuXG5fQXJyYXkucHJvdG90eXBlID0gW107XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkV2l0aFNlbGVjdG9yc1xuICogQHBhcmFtIHtPYmplY3R9IGZpZWxkIGZpZWxkIG9uIHdoaWNoIG1hZGUgdGhlIHNlYXJjaFxuICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5IHF1ZXJ5IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IGRvY3VtZW50IG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHF1ZXJ5ICB1c2VkIGZvciB0aGUgc2VhcmNoIGlzIHZhbGlkIHdpdGggdGhlIGRvY3VtZW50XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgdGhlIHF1ZXJ5IHVzZWQgZm9yIHRoZSBzZWFyY2ggaXMgdmFsaWQgd2l0aCB0aGUgZG9jdW1lbnRcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFdpdGhTZWxlY3RvcnMoZmllbGQsIHF1ZXJ5LCBkb2N1bWVudCkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIHNlbGVjdG9yID0gJyc7XG5cbiAgc2VhcmNoOiBmb3IgKHNlbGVjdG9yIGluIHF1ZXJ5KSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJGVxJzpcbiAgICAgICAgaWYgKHF1ZXJ5W3NlbGVjdG9yXSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0udG9TdHJpbmcoKS5tYXRjaChxdWVyeVtzZWxlY3Rvcl0pID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSAhPT0gcXVlcnlbc2VsZWN0b3JdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJGd0JzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA8PSBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJGd0ZSc6XG4gICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gPCBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJGx0JzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA+PSBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJGx0ZSc6XG4gICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gPiBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJG5lJzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA9PT0gcXVlcnlbc2VsZWN0b3JdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZWxlY3RvciA9PT0gJyRpbic6XG4gICAgICAgIGlmIChcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHF1ZXJ5W3NlbGVjdG9yXSkgJiZcbiAgICAgICAgICBxdWVyeVtzZWxlY3Rvcl0uaW5kZXhPZihkb2N1bWVudFtmaWVsZF0pID09PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJG5pbic6XG4gICAgICAgIGlmIChcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHF1ZXJ5W3NlbGVjdG9yXSkgJiZcbiAgICAgICAgICBxdWVyeVtzZWxlY3Rvcl0uaW5kZXhPZihkb2N1bWVudFtmaWVsZF0pICE9PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeSBxdWVyeSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2N1bWVudCBkb2N1bWVudCBvYmplY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBvZiBzZWFyY2ggaXMgdmFsaWQgd2l0aCB0aGUgZG9jdW1lbnRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiB0aGUgcXVlcnkgb2Ygc2VhcmNoIGlzIHZhbGlkIHdpdGggdGhlIGRvY3VtZW50XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWQocXVlcnksIGRvY3VtZW50KSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgZmluZEluQXJyYXkgPSBmYWxzZTtcbiAgdmFyIGZpZWxkID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgc2VhcmNoOiBmb3IgKGZpZWxkIGluIHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudFtmaWVsZF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgLy8gcmVndWxhciBleHByZXNzaW9uXG4gICAgICAgIGNhc2UgcXVlcnlbZmllbGRdIGluc3RhbmNlb2YgUmVnRXhwOlxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRvY3VtZW50W2ZpZWxkXSkgJiYgIUFycmF5LmlzQXJyYXkocXVlcnlbZmllbGRdKSkge1xuICAgICAgICAgICAgbGVuZ3RoID0gZG9jdW1lbnRbZmllbGRdLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdW2ldLnRvU3RyaW5nKCkubWF0Y2gocXVlcnlbZmllbGRdKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZpbmRJbkFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IGZpbmRJbkFycmF5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdLnRvU3RyaW5nKCkubWF0Y2gocXVlcnlbZmllbGRdKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBxdWVyeSBzZWxlY3RvcnNcbiAgICAgICAgY2FzZSBxdWVyeVtmaWVsZF0gaW5zdGFuY2VvZiBPYmplY3QgJiYgIUFycmF5LmlzQXJyYXkocXVlcnlbZmllbGRdKTpcbiAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkV2l0aFNlbGVjdG9ycyhmaWVsZCwgcXVlcnlbZmllbGRdLCBkb2N1bWVudCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gbXVsdGlwbGUgcXVlcnlcbiAgICAgICAgY2FzZSBBcnJheS5pc0FycmF5KGRvY3VtZW50W2ZpZWxkXSkgJiYgIUFycmF5LmlzQXJyYXkocXVlcnlbZmllbGRdKTpcbiAgICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdLmluZGV4T2YocXVlcnlbZmllbGRdKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBzaW1wbGUgcXVlcnlcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdICE9PSBxdWVyeVtmaWVsZF0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGltcFN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIFN5c3RlbSBSdW50aW1lIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBpZCBvZiB0aGUgaW1wb3J0ZWQgU3lzdGVtIFJ1bnRpbWUgc3lzdGVtXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEltcG9ydCBzeXN0ZW0gaW50byB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gaW1wU3lzdGVtKGltcG9ydGVkU3lzdGVtKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGNvbGxlY3Rpb25OYW1lID0gJyc7XG4gIHZhciBjb21wb25lbnRJZCA9ICcnO1xuICB2YXIgdHlwZU5hbWUgPSAnJztcbiAgdmFyIHNjaGVtYU5hbWUgPSAnJztcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICB2YXIgc3lzdGVtcyA9IFtdO1xuICB2YXIgaWQgPSBudWxsO1xuXG4gIGlmIChpbXBvcnRlZFN5c3RlbSkge1xuICAgIC8vIHJlbW92ZSBkZXByZWNhdGVkIHByb3BlcnR5XG4gICAgZGVsZXRlIGltcG9ydGVkU3lzdGVtLnN1YnN5c3RlbTtcblxuICAgIC8vIGFkZCB0eXBlc1xuICAgIGZvciAodHlwZU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0udHlwZXMpIHtcbiAgICAgICRtZXRhbW9kZWwudHlwZShpbXBvcnRlZFN5c3RlbS50eXBlc1t0eXBlTmFtZV0pO1xuICAgIH1cblxuICAgIC8vIGFkZCBzY2hlbWFzXG4gICAgZm9yIChzY2hlbWFOYW1lIGluIGltcG9ydGVkU3lzdGVtLnNjaGVtYXMpIHtcbiAgICAgICRtZXRhbW9kZWwuc2NoZW1hKGltcG9ydGVkU3lzdGVtLnNjaGVtYXNbc2NoZW1hTmFtZV0pO1xuICAgIH1cblxuICAgIC8vIGFkZCBtb2RlbHNcbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS5tb2RlbHMpIHtcbiAgICAgICRtZXRhbW9kZWwubW9kZWwoaW1wb3J0ZWRTeXN0ZW0ubW9kZWxzW21vZGVsTmFtZV0pO1xuICAgIH1cblxuICAgICRtZXRhbW9kZWwuY3JlYXRlKCk7XG5cbiAgICAvLyBhZGQgYmVoYXZpb3JzXG4gICAgZm9yIChiZWhhdmlvcklkIGluIGltcG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgZXhwb3J0cy5fQmVoYXZpb3IuaW5zZXJ0KGltcG9ydGVkU3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvcklkXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGNvbXBvbmVudHNcbiAgICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluIGltcG9ydGVkU3lzdGVtLmNvbXBvbmVudHMpIHtcbiAgICAgIGZvciAoY29tcG9uZW50SWQgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0pIHtcbiAgICAgICAgZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0uaW5zZXJ0KFxuICAgICAgICAgIGltcG9ydGVkU3lzdGVtLmNvbXBvbmVudHNbY29sbGVjdGlvbk5hbWVdW2NvbXBvbmVudElkXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0IGluZm8gaWYgYWxyZWFkeSBhIG1hc3RlciBzeXN0ZW1cbiAgICBzeXN0ZW1zID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgICAgbWFzdGVyOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICBpZiAoc3lzdGVtc1swXS5faWQgPT09IGltcG9ydGVkU3lzdGVtLl9pZCkge1xuICAgICAgICBpbXBvcnRlZFN5c3RlbS5tYXN0ZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGltcG9ydGVkU3lzdGVtLm1hc3Rlcikge1xuICAgICAgICAgIHN5c3RlbXNbMF0ubWFzdGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnNlcnQgdGhlIHN5c3RlbSBpbiBEQlxuICAgIGV4cG9ydHMuX1N5c3RlbS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0pO1xuXG4gICAgcmVzdWx0ID0gaW1wb3J0ZWRTeXN0ZW0uX2lkO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGV4cFN5c3RlbVxuICogQHJldHVybnMge1N0cmluZ30gYSBzdHJpbmdpZmllZCBzeXN0ZW1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRXhwb3J0IGEgc3lzdGVtIGZyb20gdGhlIGRhdGFiYXNlXG4gKi9cbmZ1bmN0aW9uIGV4cFN5c3RlbSgpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgdmFyIHN5c3RlbXMgPSBbXTtcbiAgdmFyIGlkID0gbnVsbDtcbiAgdmFyIGRiRHVtcCA9IG51bGw7XG4gIHZhciBtYXN0ZXJzeXN0ZW0gPSBudWxsO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgZXhwb3J0ZWRTeXN0ZW0gPSB7fTtcblxuICAvLyBnZXQgaWQgb2YgdGhlIG1hc3RlciBzeXN0ZW1cbiAgc3lzdGVtcyA9IGV4cG9ydHMuX1N5c3RlbS5maW5kKHtcbiAgICBtYXN0ZXI6IHRydWVcbiAgfSk7XG5cbiAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgbWFzdGVyc3lzdGVtID0gc3lzdGVtc1swXTtcbiAgICBpZCA9IG1hc3RlcnN5c3RlbS5faWQ7XG5cbiAgICAvLyBwcm9wXG4gICAgZXhwb3J0ZWRTeXN0ZW0uX2lkID0gaWQ7XG4gICAgZXhwb3J0ZWRTeXN0ZW0ubmFtZSA9IG1hc3RlcnN5c3RlbS5uYW1lO1xuICAgIGV4cG9ydGVkU3lzdGVtLmRlc2NyaXB0aW9uID0gbWFzdGVyc3lzdGVtLmRlc2NyaXB0aW9uO1xuICAgIGV4cG9ydGVkU3lzdGVtLnZlcnNpb24gPSBtYXN0ZXJzeXN0ZW0udmVyc2lvbjtcbiAgICBleHBvcnRlZFN5c3RlbS5tYXN0ZXIgPSB0cnVlO1xuXG4gICAgLy8gZHVtcFxuICAgIGRiRHVtcCA9IGR1bXAoKTtcbiAgICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluIGRiRHVtcCkge1xuICAgICAgaWYgKGRiRHVtcC5oYXNPd25Qcm9wZXJ0eShjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgZXhwb3J0ZWRTeXN0ZW1bY29sbGVjdGlvbk5hbWVdID0gZGJEdW1wW2NvbGxlY3Rpb25OYW1lXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShleHBvcnRlZFN5c3RlbSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gJ3t9JztcbiAgICAkbG9nLm1hc3RlclN5c3RlbU5vdEZvdW5kKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZXhwb3J0U3Vic3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIHN1Yi1zeXN0ZW1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRXhwb3J0IGEgc3ViLXN5c3RlbVxuICovXG5mdW5jdGlvbiBleHBTdWJzeXN0ZW0ocGFyYW1zKSB7XG4gIHZhciBzeXN0ZW0gPSB7fTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgZGVmYXVsdE5hbWUgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciB0eXBlID0gbnVsbDtcbiAgdmFyIG1vZGVsID0gbnVsbDtcbiAgdmFyIGJlaGF2aW9yID0gbnVsbDtcbiAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gIHZhciBjbGFzc05hbWUgPSAnJztcblxuICAvLyBkZWZhdWx0IHZhbHVlc1xuICByZXN1bHQgPSBleHBvcnRzLl9TeXN0ZW0uZmluZCh7XG4gICAgbWFzdGVyOiB0cnVlXG4gIH0pO1xuICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgIGRlZmF1bHROYW1lID0gcmVzdWx0WzBdLm5hbWU7XG4gIH1cblxuICBzeXN0ZW0ubmFtZSA9IHBhcmFtcy5uYW1lIHx8ICdzdWJfJyArIGRlZmF1bHROYW1lO1xuICBzeXN0ZW0udmVyc2lvbiA9IHBhcmFtcy52ZXJzaW9uIHx8ICcwLjAuMSc7XG4gIHN5c3RlbS5kZXNjcmlwdGlvbiA9IHBhcmFtcy5kZXNjcmlwdGlvbiB8fCAnJztcblxuICAvLyBzY2hlbWFzXG4gIHN5c3RlbS5zY2hlbWFzID0ge307XG4gIGlmIChwYXJhbXMuc2NoZW1hcykge1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuX1NjaGVtYS5maW5kKHBhcmFtcy5zY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNjaGVtYSA9IHJlc3VsdFtpXTtcbiAgICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAgIHN5c3RlbS5zY2hlbWFzW3NjaGVtYS5faWRdID0gc2NoZW1hO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGVsc1xuICBzeXN0ZW0ubW9kZWxzID0ge307XG4gIGlmIChwYXJhbXMubW9kZWxzKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5fTW9kZWwuZmluZChwYXJhbXMubW9kZWxzKTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBtb2RlbCA9IHJlc3VsdFtpXTtcbiAgICAgIGlmICghbW9kZWwuX2NvcmUpIHtcbiAgICAgICAgc3lzdGVtLm1vZGVsc1ttb2RlbC5faWRdID0gbW9kZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZXNcbiAgc3lzdGVtLnR5cGVzID0ge307XG4gIGlmIChwYXJhbXMudHlwZXMpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLl9UeXBlLmZpbmQocGFyYW1zLnR5cGVzKTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0eXBlID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCF0eXBlLl9jb3JlKSB7XG4gICAgICAgIHN5c3RlbS50eXBlc1t0eXBlLl9pZF0gPSB0eXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGJlaGF2aW9yc1xuICBzeXN0ZW0uYmVoYXZpb3JzID0ge307XG4gIGlmIChwYXJhbXMuYmVoYXZpb3JzKSB7XG4gICAgYmVoYXZpb3IgPSBleHBvcnRzLl9CZWhhdmlvci5maW5kKHBhcmFtcy5iZWhhdmlvcnMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJlaGF2aW9yID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFiZWhhdmlvci5jb3JlKSB7XG4gICAgICAgIHN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3IuX2lkXSA9IGJlaGF2aW9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGNvbXBvbmVudHNcbiAgc3lzdGVtLmNvbXBvbmVudHMgPSB7fTtcbiAgaWYgKHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgZm9yIChjbGFzc05hbWUgaW4gcGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChleHBvcnRzW2NsYXNzTmFtZV0pIHtcbiAgICAgICAgc3lzdGVtLmNvbXBvbmVudHNbY2xhc3NOYW1lXSA9IHt9O1xuXG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHNbY2xhc3NOYW1lXS5maW5kKHBhcmFtcy5jb21wb25lbnRzW2NsYXNzTmFtZV0pO1xuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb21wb25lbnQgPSByZXN1bHRbaV07XG4gICAgICAgICAgc3lzdGVtLmNvbXBvbmVudHNbY2xhc3NOYW1lXVtjb21wb25lbnQuX2lkXSA9IGNvbXBvbmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShzeXN0ZW0pO1xufVxuXG4vKiBQdWJsaWMgcHJvcGVydGllcyAqL1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7SlNPTn0gc3RvcmVcbiAqIEBkZXNjcmlwdGlvbiBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSBzdG9yZSB0aGF0IGxpc3RzIGFsbCB0aGUgY29sbGVjdGlvbnNcbiAqL1xuZXhwb3J0cy5zdG9yZSA9IHt9O1xuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBjbGFzcyBEYXRhYmFzZUNvbGxlY3Rpb25cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbmV3IGNvbGxlY3Rpb25cbiAqIEBAZGVzY3JpcHRpb24gQSBjb2xsZWN0aW9uIG9mIGRvY3VtZW50cyBtYW5hZ2VkIGJ5IFN5c3RlbSBSdW50aW1lLlxuICogSW50ZXJuYWwgY29sbGVjdGlvbnMgbWFuYWdlIGNvcmUgb2JqZWN0cyBvZiBTeXN0ZW0gUnVudGltZSAoc2NoZW1hLCB0eXBlLCAuLi4pLlxuICogUHVibGljIGNvbGxlY3Rpb25zIG1hbmFnZSBjb21wb25lbnRzIG9mIHRoZSBzYW1lIGNsYXNzLlxuICovXG52YXIgRGF0YWJhc2VDb2xsZWN0aW9uID0gZnVuY3Rpb24gRGF0YWJhc2VDb2xsZWN0aW9uKG5hbWUpIHtcbiAgaWYgKCRtZXRhbW9kZWwuZ2V0U2NoZW1hKG5hbWUpIHx8IGludGVybmFsREIuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICBleHBvcnRzLnN0b3JlW25hbWVdID0ge307XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBpZiAoaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgY29sbGVjdGlvbnMucHVzaChuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBmaW5kXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnlcbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgb2YgZG9jdW1lbnRzIHRoYXQgbWFwIHRoZSBxdWVyeVxuICogQGRlc2NyaXB0aW9uIEZpbmQgYSBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5QZXJzb24uZmluZCh7J25hbWUnOiAnbGF1cmUnfSk7XG4gKiAkZGIuUGVyc29uLmZpbmQoeyduYW1lJzogJ2xhdXJlJywgJ2FnZScgOiAyNH0pO1xuICogJGRiLlBlcnNvbi5maW5kKFt7J25hbWUnOiAncmVuZSd9LCB7J25hbWUnOiAncm9iZXJ0J31dKTtcbiAqL1xuRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gZmluZChxdWVyeSkge1xuICB2YXIgcmVzdWx0ID0gbmV3IF9BcnJheSgpO1xuICB2YXIgcmVzdWx0SWQgPSB7fTtcbiAgdmFyIGlkID0gJyc7XG4gIHZhciBkb2N1bWVudCA9IHt9O1xuXG4gIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgcXVlcnkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gbXVsdGlTZWFyY2goY3JpdGVyaWEpIHtcbiAgICAgICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgZG9jdW1lbnQgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQoY3JpdGVyaWEsIGRvY3VtZW50KSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdElkW2lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0SWRbaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICBkb2N1bWVudCA9IGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgIGlmIChpc1ZhbGlkKHF1ZXJ5LCBkb2N1bWVudCkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChkb2N1bWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChpZCBpbiBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgIGRvY3VtZW50ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluc2VydFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGRvY3VtZW50IGEgbmV3IG9iamVjdCB0byBhZGRcbiAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgb2YgaWQgY3JlYXRlZFxuICogQGRlc2NyaXB0aW9uIEluc2VydCBhbiBuZXcgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi5cbiAqIEJlZm9yZSBpbnNlcnRpbmcgdGhlIGRvY3VtZW50LCBTeXN0ZW0gUnVudGltZSBjaGVja3MgdGhhdCB0aGUgZG9jdW1lbnQgaXMgY29tcGxpYW50XG4gKiB3aXRoIGl0cyBjbGFzcyBkZWZpbml0aW9uLlxuICogVGhlbiwgYWZ0ZXIgaW5zZXJ0aW5nIGl0LCB3ZSBjcmVhdGUgdGhlIGNvbXBvbmVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLlBlcnNvbi5pbnNlcnQoe1xuICogICAgICAnbmFtZSc6ICdib2InLFxuICogICAgICAnZmlyc3ROYW1lJzogJ1NhaW50LUNsYXInLFxuICogICAgICAnYWdlJzogNDNcbiAqIH0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChkb2N1bWVudCkge1xuICB2YXIgZG9jID0gW107XG4gIHZhciBDb21wb25lbnQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZG9jdW1lbnQpKSB7XG4gICAgZG9jID0gZG9jdW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgZG9jLnB1c2goZG9jdW1lbnQpO1xuICB9XG5cbiAgZG9jLmZvckVhY2goXG4gICAgZnVuY3Rpb24gbXVsdGlJbnNlcnQob2JqKSB7XG4gICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgIHZhciBjaGFubmVscyA9IFtdO1xuICAgICAgdmFyIGNoYW5uZWwgPSBudWxsO1xuICAgICAgdmFyIHN5c3RlbXMgPSBbXTtcblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX1NjaGVtYSc6XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX0xvZ2dlcic6XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX01vZGVsJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfVHlwZSc6XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX0dlbmVyYXRlZE1vZGVsJzpcbiAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3Qob2JqLCAkbWV0YW1vZGVsLmdldE1vZGVsKHRoaXMubmFtZSkpOlxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLl9pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9iai5faWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkbWV0YW1vZGVsLnByZXBhcmVPYmplY3Qob2JqLCAkbWV0YW1vZGVsLmdldE1vZGVsKHRoaXMubmFtZSkpO1xuXG4gICAgICAgICAgZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW29iai5faWRdID0gb2JqO1xuXG4gICAgICAgICAgQ29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICBpZiAoQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG9iaik7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb21wb25lbnQuaWQoKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKCdpbnNlcnQnLCB0aGlzLm5hbWUsIG9iai5faWQsICcnLCBvYmopO1xuXG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBvYmpcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSAnX01lc3NhZ2UnKSB7XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICBjaGFubmVscyA9IGV4cG9ydHMuX0NoYW5uZWwuZmluZCh7fSk7XG4gICAgICAgICAgICAgIHZhciBsZW5ndGggPSBjaGFubmVscy5sZW5ndGg7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsID0gJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZShjaGFubmVsc1tpXS5faWQpO1xuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGNoYW5uZWxzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBvYmouZXZlbnQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBvYmouZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgJGxvZy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KG9iaiwgdGhpcy5uYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcylcbiAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgdXBkYXRlIHRvIG1ha2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiB7Qm9vbGVhbn0gdXBzZXJ0IHRydWUgaWYgd2UgY3JlYXRlIGEgZG9jdW1lbnQgd2hlbiBubyBkb2N1bWVudCBpcyBmb3VuZCBieSB0aGUgcXVlcnlcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IE51bWJlciBvZiBkb2N1bWVudHMgdXBkYXRlZFxuICogQGRlc2NyaXB0aW9uIFVwZGF0ZSBkb2N1bWVudHMgaW50byBhIGNvbGxlY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLkNhcnMudXBkYXRlKHsnY29kZSc6ICdBWkQtNzEnfSwgeydwcmljZSc6ICcxMDAwMCQnfSk7XG4gKiAkZGIuQ2Fycy51cGRhdGUoW3snY29kZSc6ICdBWkQtNzEnfSwgeydjb2RlJzogJ0FaRC02NSd9XSwgeydwcmljZSc6ICcxMDAwMCQnfSk7XG4gKiAkZGIuQ2Fycy51cGRhdGUoeydjb2RlJzogJ0FaRC03MSd9LCB7J3ByaWNlJzogJzEwMDAwJCd9LCB7J3Vwc2VydCc6IHRydWV9KTtcbiAqL1xuRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUocXVlcnksIHVwZGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZG9jcyA9IHRoaXMuZmluZChxdWVyeSk7XG4gIHZhciB1cGRhdGVkID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gZG9jcy5sZW5ndGg7XG4gIHZhciBhdHRyaWJ1dGVOYW1lID0gJyc7XG4gIHZhciBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldE1vZGVsKHRoaXMubmFtZSk7XG4gIHZhciB0eXBlID0gJyc7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy51cHNlcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucy51cHNlcnQgPSBvcHRpb25zLnVwc2VydCB8fCBmYWxzZTtcbiAgfVxuXG4gIGlmICh1cGRhdGUpIHtcbiAgICAvLyB1cHNlcnQgY2FzZVxuICAgIGlmIChsZW5ndGggPT09IDAgJiYgb3B0aW9ucy51cHNlcnQpIHtcbiAgICAgIGlmIChxdWVyeS5faWQpIHtcbiAgICAgICAgdXBkYXRlLl9pZCA9IHF1ZXJ5Ll9pZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5zZXJ0KHVwZGF0ZSk7XG4gICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBjYXNlIG9mIHVwZGF0ZSBvZiBfaWRcbiAgICAgIGlmICh0eXBlb2YgdXBkYXRlLl9pZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdXBkYXRlLl9pZCAhPT0gZG9jc1tpXS5faWQpIHtcbiAgICAgICAgJGxvZy51cGRhdGVVdWlkKFxuICAgICAgICAgIGRvY3NbaV0uX2lkLFxuICAgICAgICAgIHVwZGF0ZS5faWQsXG4gICAgICAgICAgdHlwZW9mICRjb21wb25lbnQuZ2V0KHVwZGF0ZS5faWQpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGF0dHJpYnV0ZU5hbWUgaW4gdXBkYXRlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jc1tpXVthdHRyaWJ1dGVOYW1lLnNwbGl0KCcuJylbMF1dICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubmFtZSAhPT0gJ19TY2hlbWEnICYmXG4gICAgICAgICAgICB0aGlzLm5hbWUgIT09ICdfTW9kZWwnICYmXG4gICAgICAgICAgICB0aGlzLm5hbWUgIT09ICdfR2VuZXJhdGVkTW9kZWwnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICB0eXBlID0gJyc7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAkbWV0YW1vZGVsLmdldE1vZGVsUGF0aFR5cGUodGhpcy5uYW1lLCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXS50eXBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh1cGRhdGVbYXR0cmlidXRlTmFtZV0sIHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG5cbiAgICAgICAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZyhcbiAgICAgICAgICAgICAgICAgICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1cGRhdGVbYXR0cmlidXRlTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW3VwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW3VwZGF0ZVthdHRyaWJ1dGVOYW1lXV1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdLFxuICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICBkb2NzW2ldLl9pZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUT0RPIG1vcmUgY2hlY2sgaW4gY2FzZSBvZiBzY2hlbWEgdXBkYXRlXG4gICAgICAgICAgICBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdID0gdXBkYXRlW2F0dHJpYnV0ZU5hbWVdO1xuXG4gICAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZyhcbiAgICAgICAgICAgICAgJ3VwZGF0ZScsXG4gICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICBpZDogZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICBmaWVsZDogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB1cGRhdGVbYXR0cmlidXRlTmFtZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdXBkYXRlZDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gcmVtb3ZlXG4gKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgZG9jdW1lbnRzIGlkIHJlbW92ZWRcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBkb2N1bWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICogV2hlbiBhIGRvY3VtZW50IGlzIHJlbW92ZWQsIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAkZGIuQ2Fycy5yZW1vdmUoeydjb2RlJzogJ0FaRC03MSd9KTtcbiAqICRkYi5DYXJzLnJlbW92ZShbeydjb2RlJzogJ0FaRC03MSd9LCB7J2NvZGUnOiAnQVpELTY1J31dKTtcbiAqL1xuRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocXVlcnkpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaWQgPSAnJztcbiAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gIHZhciBvYmplY3QgPSB7fTtcblxuICBxdWVyeSA9IHF1ZXJ5IHx8IG51bGw7XG5cbiAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgIHF1ZXJ5LmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIG11bHRpUmVtb3ZlKGNyaXRlcmlhKSB7XG4gICAgICAgICAgZm9yIChpZCBpbiBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIG9iamVjdCA9IGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKCdyZW1vdmUnLCB0aGlzLm5hbWUsIGlkLCAnJywgJycpO1xuXG4gICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpZCBpbiBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgb2JqZWN0ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICBpZiAoaXNWYWxpZChxdWVyeSwgb2JqZWN0KSkge1xuICAgICAgICAgIGRlbGV0ZSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgIC5yZW1vdmUoe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKCdyZW1vdmUnLCB0aGlzLm5hbWUsIGlkLCAnJywgJycpO1xuXG4gICAgICBpZiAoY29yZURiLmluZGV4T2YodGhpcy5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAkaGVscGVyXG4gICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgLnJlbW92ZSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNvdW50XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ291bnQgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAqL1xuRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgcmVzdWx0ID0gMDtcbiAgdmFyIG9iamVjdElkID0gJyc7XG5cbiAgZm9yIChvYmplY3RJZCBpbiBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICByZXN1bHQrKztcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUxvZ1xuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvbiBDUlVEIGFjdGlvbiB0aGF0IGhhcHBlbm5lZFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb24gY29sbGVjdGlvbiBvZiB0aGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgZmllbGQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlIG9mIHRoZSBmaWVsZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgTG9nXG4gKi9cbmV4cG9ydHMuY3JlYXRlTG9nID0gZnVuY3Rpb24gY3JlYXRlTG9nKGFjdGlvbiwgY29sbGVjdGlvbiwgaWQsIGZpZWxkLCB2YWx1ZSkge1xuICB2YXIgbG9nSWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcblxuICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbiB8fCAnJztcbiAgaWQgPSBpZCB8fCAnJztcbiAgZmllbGQgPSBmaWVsZCB8fCAnJztcbiAgdmFsdWUgPSB2YWx1ZSB8fCAnJztcblxuICAvLyBjbGVhbiBsb2cgZXZlcnkgMTAwMCBsb2dzXG4gIGlmIChPYmplY3Qua2V5cyhleHBvcnRzLnN0b3JlLl9Mb2cpLmxlbmd0aCA+IDEwMDApIHtcbiAgICBleHBvcnRzLnN0b3JlLl9Mb2cgPSB7fTtcbiAgfVxuXG4gIGV4cG9ydHMuc3RvcmUuX0xvZ1tsb2dJZF0gPSB7XG4gICAgX2lkOiBsb2dJZCxcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgIGlkOiBpZCxcbiAgICBmaWVsZDogZmllbGQsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9yZGVyOiBpbmNMb2dPcmRlcigpXG4gIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBuZXcgRGF0YWJhc2VDb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY29sbGVjdGlvbiA9IGZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xuICBleHBvcnRzW25hbWVdID0gbmV3IERhdGFiYXNlQ29sbGVjdGlvbihuYW1lKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbXBvcnRTeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBTeXN0ZW0gUnVudGltZSBzeXN0ZW0gdG8gaW1wb3J0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIFN5c3RlbSBSdW50aW1lIHN5c3RlbVxuICogQGRlc2NyaXB0aW9uIEltcG9ydCBhIHN5c3RlbSBpbnRvIHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmltcG9ydFN5c3RlbSA9IGZ1bmN0aW9uIGltcG9ydFN5c3RlbShpbXBvcnRlZFN5c3RlbSkge1xuICByZXR1cm4gaW1wU3lzdGVtKGltcG9ydGVkU3lzdGVtKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBleHBvcnRTeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgc3lzdGVtXG4gKiBAZGVzY3JpcHRpb24gRXhwb3J0IGEgc3lzdGVtXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5leHBvcnRTeXN0ZW0oKTsgLy8gZXhwb3J0IGFsbCB0aGUgc3lzdGVtXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnc2NoZW1hcyc6eyduYW1lJzonUGVyc29uJ319KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsndHlwZXMnOnsnbmFtZSc6J2FkZHJlc3MnfX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnYmVoYXZpb3JzJzp7J2NvbXBvbmVudCc6J2xhdXJlJ319KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBiZWhhdmlvcnNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeydjb21wb25lbnRzJzp7J1BlcnNvbic6IHsnY291bnRyeSc6ICdGcmFuY2UnfX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnc2NoZW1hcyc6eyduYW1lJzonUGVyc29uJ30sJ2NvbXBvbmVudHMnOnsnUGVyc29uJzogeydjb3VudHJ5JzogJ0ZyYW5jZSd9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZXhwb3J0cy5leHBvcnRTeXN0ZW0gPSBmdW5jdGlvbiBleHBvcnRTeXN0ZW0ocGFyYW1zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBpZiAocGFyYW1zKSB7XG4gICAgcmVzdWx0ID0gZXhwU3Vic3lzdGVtKHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZXhwU3lzdGVtKCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIENsZWFyIHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuXG4gIC8vIHJlbW92ZSBjb2xsZWN0aW9uc1xuICBsZW5ndGggPSBjb2xsZWN0aW9ucy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbnNbaV07XG4gICAgZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0ucmVtb3ZlKCk7XG4gIH1cblxuICAvLyByZW1vdmUgaW50ZXJuYWwgY29sbGVjdGlvbnNcbiAgbGVuZ3RoID0gaW50ZXJuYWxEQi5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gaW50ZXJuYWxEQltpXTtcbiAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluaXRcbiAqIEBkZXNjcmlwdGlvbiBJbml0IHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICB2YXIgcnVudGltZVN5c3RlbUlkID0gJyc7XG4gIHZhciBydW50aW1lU3lzdGVtID0gbnVsbDtcblxuICBydW50aW1lU3lzdGVtID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgIF9pZDogJ2U4OWM2MTdiNmIxNWQyNCdcbiAgfSlbMF07XG5cbiAgLy8gY2xlYXIgYWxsIHRoZSBkYXRhIGluIG1lbW9yeVxuICBleHBvcnRzLmNsZWFyKCk7XG4gICRjb21wb25lbnQuY2xlYXIoKTtcbiAgJG1ldGFtb2RlbC5jbGVhcigpO1xuICAkc3RhdGUuY2xlYXIoKTtcbiAgJGJlaGF2aW9yLmNsZWFyKCk7XG5cbiAgLy8gaW5pdCBtZXRhbW9kZWxcbiAgJG1ldGFtb2RlbC5pbml0KCk7XG5cbiAgLy8gcmVpbXBvcnQgU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAgcnVudGltZVN5c3RlbUlkID0gZXhwb3J0cy5pbXBvcnRTeXN0ZW0ocnVudGltZVN5c3RlbSk7XG4gICRjb21wb25lbnQuZ2V0KHJ1bnRpbWVTeXN0ZW1JZCkuc3RhcnQoKTtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGhlbHBlclxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdXNlZCBieSBhbGwgdGhlIG1vZHVsZXNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydHkgKi9cblxudmFyIHJ1bnRpbWVSZWYgPSBudWxsO1xudmFyIHJlcXVpcmVSZWYgPSBudWxsO1xuXG4vKiBQdWJsaWMgbWV0aG9kICovXG5cbi8qKlxuICogQG1ldGhvZCBpc1J1bnRpbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIFN5c3RlbSBSdW50aW1lIGluc3RhbmNlIGV4aXN0c1xuICovXG5leHBvcnRzLmlzUnVudGltZSA9IGZ1bmN0aW9uIGlzUnVudGltZSgpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gIGlmICgkZGIuX1J1bnRpbWUgJiYgJGRiLl9SdW50aW1lLmZpbmQoKS5sZW5ndGgpIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSdW50aW1lXG4gKiBAcmV0dXJucyB7X1J1bnRpbWV9IFN5c3RlbSBSdW50aW1lIGluc3RhbmNlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBTeXN0ZW0gUnVudGltZSBpbnN0YW5jZVxuICovXG5leHBvcnRzLmdldFJ1bnRpbWUgPSBmdW5jdGlvbiBnZXRSdW50aW1lKCkge1xuICB2YXIgcnVudGltZUlkID0gJyc7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmICghcnVudGltZVJlZikge1xuICAgIHJ1bnRpbWVJZCA9ICRkYi5fUnVudGltZS5maW5kKClbMF0uX2lkO1xuICAgIHJ1bnRpbWVSZWYgPSAkY29tcG9uZW50LmdldChydW50aW1lSWQpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bnRpbWVSZWY7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNPbk5vZGVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaXMgcnVubmluZyBvbiBub2RlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBTeXN0ZW0gUnVudGltZSBpcyBydW5uaW5nIG9uIG5vZGVcbiAqL1xuZXhwb3J0cy5pc09uTm9kZSA9IGZ1bmN0aW9uIGlzT25Ob2RlKCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmVxdWlyZVxuICogQHJldHVybnMge09iamVjdH0gdGhlIHJlcXVpcmUgb2JqZWN0XG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZXF1aXJlIG9iamVjdFxuICovXG5leHBvcnRzLmdldFJlcXVpcmUgPSBmdW5jdGlvbiBnZXRSZXF1aXJlKCkge1xuICBpZiAoIXJlcXVpcmVSZWYpIHtcbiAgICAvLyBrbHVkZ2UgZm9yIHdlYnBhY2tcbiAgICByZXF1aXJlUmVmID0gZXZhbCgncmVxdWlyZScpO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVpcmVSZWY7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybnMge1N0cmluZ30gYSB1dWlkXG4gKiBAZGVzY3JpcHRpb24gR2VuZXJhdGUgYSB1dWlkXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG4gIGZ1bmN0aW9uIGdlbigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJlZml4KCkge1xuICAgIHZhciB2YWxpZFByZWZpeCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gICAgcmV0dXJuIHZhbGlkUHJlZml4LmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFByZWZpeC5sZW5ndGgpKTtcbiAgfVxuXG4gIHJldHVybiBnZXRQcmVmaXgoKSArIGdlbigpICsgZ2VuKCkgKyBnZW4oKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBwb2x5ZmlsbFxuICogQGRlc2NyaXB0aW9uIEFkZCBQb2x5ZmlsbFxuICovXG5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gIC8vIGZpeGluZyBjb25zdHJ1Y3Rvci5uYW1lIHByb3BlcnR5IGluIElFXG4gIC8vIHRha2VuIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTE0MDcyMy9jb25zdHJ1Y3Rvci1uYW1lLWlzLXVuZGVmaW5lZC1pbi1pbnRlcm5ldC1leHBsb3JlclxuICBpZiAoXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09IHVuZGVmaW5lZCAmJlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICduYW1lJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgICAgIHZhciByZXN1bHRzID0gZnVuY05hbWVSZWdleC5leGVjKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSA/IHJlc3VsdHNbMV0udHJpbSgpIDogJyc7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHt9XG4gICAgfSk7XG4gIH1cbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxvZ1xuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdGhhdCB3cml0ZSBhIGxvZ1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBJRCA9ICdfaWQnO1xudmFyIE5BTUUgPSAnX25hbWUnO1xudmFyIGN1cnJlbnRMZXZlbCA9ICd3YXJuJztcbnZhciBsb2dnZXJSZWYgPSBudWxsO1xudmFyIGZha2VMb2dnZXJSZWYgPSB7XG4gIGN1cnJlbnRMZXZlbDogJ3dhcm4nLFxuICBsZXZlbDogZnVuY3Rpb24gZGVidWcobGV2ZWxOYW1lKSB7XG4gICAgaWYgKGxldmVsTmFtZSkge1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBsZXZlbE5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbDtcbiAgfSxcbiAgZGVidWc6IGZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdkZWJ1ZycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBpbmZvOiBmdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdpbmZvJyB8fCB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgY29uc29sZS5pbmZvKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICB3YXJuOiBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2luZm8nIHx8XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ3dhcm4nIHx8XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJ1xuICAgICkge1xuICAgICAgY29uc29sZS53YXJuKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHJldHVybiB7X0xvZ2dlcn0gX0xvZ2dlciBpbnN0YW5jZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIF9Mb2dnZXIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gZ2V0TG9nZ2VyKCkge1xuICB2YXIgbG9nZ2VySWQgPSAnJztcbiAgdmFyIGxvZ2dlcnMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCEkbWV0YW1vZGVsLmdldE1vZGVsKCdfTG9nZ2VyJykpIHtcbiAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICB9IGVsc2Uge1xuICAgIGxvZ2dlcnMgPSAkZGIuX0xvZ2dlci5maW5kKCk7XG4gICAgaWYgKGxvZ2dlcnMubGVuZ3RoKSB7XG4gICAgICBsb2dnZXJJZCA9IGxvZ2dlcnNbMF1bSURdO1xuXG4gICAgICBpZiAoJGNvbXBvbmVudC5nZXQobG9nZ2VySWQpKSB7XG4gICAgICAgIGxvZ2dlclJlZiA9ICRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKTtcbiAgICAgICAgcmVzdWx0ID0gbG9nZ2VyUmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgbGV2ZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBsZXZlbE5hbWUgbmFtZSBvZiB0aGUgbGV2ZWxcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIGxldmVsIG9mIHRoZSBsb2dcbiAqL1xuZXhwb3J0cy5sZXZlbCA9IGZ1bmN0aW9uIGxldmVsKGxldmVsTmFtZSkge1xuICBjdXJyZW50TGV2ZWwgPSBsZXZlbE5hbWU7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqIEBkZXNjcmlwdGlvbiBBIHByb3BlcnR5IG9mIGEgc2NoZW1hIGlzIHVua25vd25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHkgPSBmdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICBpZiAoc2NoZW1hW05BTUVdKSB7XG4gICAgbWVzc2FnZSA9XG4gICAgICBcInVua25vd24gcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mICdcIiArXG4gICAgICBzY2hlbWFbTkFNRV0gK1xuICAgICAgXCInXCI7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIGEgbW9kZWxcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4obWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZSA9IGZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGUoXG4gIHByb3BlcnR5TmFtZSxcbiAgdHlwZSxcbiAgcHJvcGVydHlcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICB0eXBlb2YgcHJvcGVydHkgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHZhbHVlIGZvciB0eXBlIGVudW1cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRW51bVZhbHVlID0gZnVuY3Rpb24gaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiJ1wiICsgdmFsdWUgKyBcIicgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIHR5cGUgZW51bSAnXCIgKyB0eXBlICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uc3RydWN0b3JOYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudCBjbGFzc1xuICogQGRlc2NyaXB0aW9uIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2xhc3NOYW1lID0gZnVuY3Rpb24gaW52YWxpZENsYXNzTmFtZShcbiAgY29tcG9uZW50SWQsXG4gIHR5cGUsXG4gIGNvbnN0cnVjdG9yTmFtZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGNvbXBvbmVudCAnXCIgK1xuICAgICAgY29tcG9uZW50SWQgK1xuICAgICAgXCInOiBleHBlY3RlZCAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIicgaW5zdGVhZCBvZiAnXCIgK1xuICAgICAgY29uc3RydWN0b3JOYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gTWlzc2luZyBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5ID0gZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5KHByb3BlcnR5TmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIGEgc2NoZW1hIG9yIGEgbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdJbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWlzc2luZyBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBBIGNsYXNzIGRlZmluaXRpb24gaXMgbWlzc2luZ1xuICovXG5leHBvcnRzLm1pc3NpbmdJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIG1pc3NpbmdJbXBsZW1lbnRhdGlvbihuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpcyBtaXNzaW5nLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLmludmFsaWRUeXBlSW1wID0gZnVuY3Rpb24gaW52YWxpZFR5cGVJbXAocHJvcGVydHksIGNsYXNzTmFtZSkge1xuICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICBcInRoZSBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHkgK1xuICAgICAgXCInIG9mIHRoZSBtb2RlbCAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJyBpcyBpbnZhbGlkXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICogQGRlc2NyaXB0aW9uIE1pc3NpbmcgYSBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5SW1wID0gZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgaW4gdGhlIG1vZGVsICdcIiArIGNsYXNzTmFtZSArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5SW1wID0gZnVuY3Rpb24gdW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBzY2hlbWEpIHtcbiAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgXCJ0aGUgbW9kZWwgJ1wiICsgc2NoZW1hICsgXCInIGhhcyBhbiB1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGEgdHlwZSBkZWZpbml0aW9uXG4gKiBAZGVzY3JpcHRpb24gIFRyeSB0byBhZGQgYW4gaW52YWxpZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSB0eXBlICdcIiArIG5hbWUgKyBcIicgaXMgbm90IHZhbGlkXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgcHJvcGVydHkgbmFtZVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eU5hbWUgPSBmdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlOYW1lKFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBwcm9wZXJ0eU5hbWUsXG4gIHByb3BlcnR5VmFsdWUsXG4gIHR5cGVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgK1xuICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGlkICtcbiAgICAgICAgXCInXCIgK1xuICAgICAgICBjbGFzc0luZm8gK1xuICAgICAgICBcIjogZXhwZWN0ZWQgJ1wiICtcbiAgICAgICAgdHlwZS5yZXBsYWNlKCdAJywgJycpICtcbiAgICAgICAgXCInIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgICAgdHlwZW9mIHByb3BlcnR5VmFsdWUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSB0eXBlICdcIiArXG4gICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkICdzdHJpbmcnIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgICAgdHlwZW9mIHR5cGUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCByZWFkT25seVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBUcnlpbmcgdG8gc2V0IGEgcmVhZC1vbmx5IHByb3BlcnR5XG4gKi9cbmV4cG9ydHMucmVhZE9ubHlQcm9wZXJ0eSA9IGZ1bmN0aW9uIHJlYWRPbmx5UHJvcGVydHkoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHByb3BlcnR5TmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiY2FuIG5vdCBzZXQgcmVhZC1vbmx5IHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCIgK1xuICAgICAgY2xhc3NJbmZvXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZERvY3VtZW50T25EYkluc2VydFxuICogQHBhcmFtIHtTdHJpbmd9IGRvYyBhIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgaW5zZXJ0IG9wZXJhdGlvblxuICovXG5leHBvcnRzLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQgPSBmdW5jdGlvbiBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KFxuICBkb2MsXG4gIGNvbGxlY3Rpb25OYW1lXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgZG9jdW1lbnQgJ1wiICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRvYykucmVwbGFjZSgvLC9nLCAnLCAnKSArXG4gICAgICBcIicgb24gYW4gaW5zZXJ0IG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uICdcIiArXG4gICAgICBjb2xsZWN0aW9uTmFtZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gIEludmFsaWQgcHJvcGVydHkgb24gYSBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZShcbiAgY29sbGVjdGlvbk5hbWUsXG4gIGlkLFxuICBwcm9wZXJ0eU5hbWUsXG4gIHByb3BlcnR5VmFsdWUsXG4gIHR5cGVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCB0eXBlIHdoZW4gdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgb2YgZG9jdW1lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJyAoY29sbGVjdGlvbiAnXCIgK1xuICAgICAgY29sbGVjdGlvbk5hbWUgK1xuICAgICAgXCInKSB3aXRoIHRoZSB2YWx1ZSAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkocHJvcGVydHlWYWx1ZSkgK1xuICAgICAgXCInOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICB0eXBlICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFVua29udyBwcm9wZXJ0eSBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlID0gZnVuY3Rpb24gdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShcbiAgcHJvcGVydHlOYW1lLFxuICBjb2xsZWN0aW9uTmFtZSxcbiAgaWRcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidW5rbm93biBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICtcbiAgICAgIGNvbGxlY3Rpb25OYW1lICtcbiAgICAgIFwiJyB3aXRoIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQGRlc2NyaXB0aW9uIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzc1xuICovXG5leHBvcnRzLnVua25vd25NZXRob2QgPSBmdW5jdGlvbiB1bmtub3duTWV0aG9kKGNsYXNzSWQsIG1ldGhvZE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeSB0byBjYWxsIGFuIHVua25vd24gbWV0aG9kICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBmb3IgdGhlIGNsYXNzICdcIiArXG4gICAgICBjbGFzc0lkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENvbGxlY3Rpb25OYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGNyZWF0ZSBhbiBpbnZhbGlkIERhdGFiYXNlQ29sbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWRDb2xsZWN0aW9uTmFtZSA9IGZ1bmN0aW9uIGludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIG5hbWUgZm9yIGNyZWF0aW5nIHRoZSBjb2xsZWN0aW9uICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJzogdGhlcmUgaXMgbm8gc2NoZW1hICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpbiB0aGUgbWV0YW1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFR5cGUgZXhwZWN0ZWQgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgY3VycmVudCB0eXBlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIHJlc3VsdCBvZiBhIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRSZXN1bHRUeXBlID0gZnVuY3Rpb24gaW52YWxpZFJlc3VsdFR5cGUoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWUsXG4gIGV4cGVjdGVkVHlwZSxcbiAgdHlwZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGlmICh0eXBlKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgK1xuICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgICAgZXhwZWN0ZWRUeXBlLnJlcGxhY2UoJ0AnLCAnJykgK1xuICAgICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICAgIHR5cGUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgK1xuICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgICAgZXhwZWN0ZWRUeXBlLnJlcGxhY2UoJ0AnLCAnJykgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWYgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFVua25vd24gY2xhc3NcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ1bmtvd24gY2xhc3MgY29tcG9uZW50ICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInIGZvciBjb21wb25lbnQgJ1wiICtcbiAgICAgIGNvbXBvbmVudElkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgU3lzdGVtIFJ1bnRpbWUgd29ya2Zsb3cgaGFzIGJlZW4gcmVzdGFydGVkXG4gKi9cbmV4cG9ydHMud29ya2Zsb3dSZXN0YXJ0ZWQgPSBmdW5jdGlvbiB3b3JrZmxvd1Jlc3RhcnRlZCgpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybigncnVudGltZSBoYXMgYmVlbiByZXN0YXJ0ZWQnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbU51bWJlciA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlcihcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGNsYXNzSW5mb1xuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogQGRlc2NyaXB0aW9uICBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1UeXBlID0gZnVuY3Rpb24gaW52YWxpZFBhcmFtVHlwZShcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZSxcbiAgcGFyYW1OYW1lXG4pIHtcbiAgdmFyIGNsYXNzSW5mbyA9ICcnO1xuXG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBjbGFzc0luZm8gPSBcIiAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKVwiO1xuICB9XG4gIGlmIChwYXJhbU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgK1xuICAgICAgICBwYXJhbU5hbWUgK1xuICAgICAgICBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mb1xuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBhIHBhcmFtZXRlciB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciB0byBhIHN0YXRlXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3JOb3RVbmlxdWUgPSBmdW5jdGlvbiBiZWhhdmlvck5vdFVuaXF1ZShpZCwgc3RhdGVOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gYWRkIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgZm9yIHRoZSBzdGF0ZSAnXCIgK1xuICAgICAgc3RhdGVOYW1lICtcbiAgICAgIFwiJyBvbiBjbGFzcyAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT24gPSBmdW5jdGlvbiBpbnZhbGlkU3RhdGVPbihpZCwgc3RhdGVOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gYWRkIGEgYmVoYXZpb3IgdG8gYW4gdW5rd293biBzdGF0ZSAnXCIgK1xuICAgICAgc3RhdGVOYW1lICtcbiAgICAgIFwiJyBvbiBjbGFzcyAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPZmZcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU3RhdGVPZmYgPSBmdW5jdGlvbiBpbnZhbGlkU3RhdGVPZmYoaWQsIHN0YXRlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIHJlbW92ZSBhIGJlaGF2aW9yIGZyb20gYW4gdW5rd293biBzdGF0ZSAnXCIgK1xuICAgICAgc3RhdGVOYW1lICtcbiAgICAgIFwiJyBvbiBjbGFzcyAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICogQGRlc2NyaXB0aW9uIFRoZSBtYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZFxuICovXG5leHBvcnRzLm1hc3RlclN5c3RlbU5vdEZvdW5kID0gZnVuY3Rpb24gbWFzdGVyU3lzdGVtTm90Rm91bmQoKSB7XG4gIGdldExvZ2dlcigpLndhcm4oJ2NhbiBub3QgZXhwb3J0IHRoZSBkYXRhYmFzZSBiZWNhdXNlIG5vIHN5c3RlbSB3YXMgZGVmaW5lZCcpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlYyB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlID0gZnVuY3Rpb24gaW52YWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHZhbHVlICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgK1xuICAgICAgXCInOiBleHBlY3RlZCAnXCIgK1xuICAgICAgdHlwZU5hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKiBAZGVzY3JpcHRpb24gVW5rbm93biB0eXBlXG4gKi9cbmV4cG9ydHMudW5rbm93blR5cGUgPSBmdW5jdGlvbiB1bmtub3duVHlwZSh2YWx1ZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidW5rbm93biB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gQSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGFscmVheSBjcmVhdGVkXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBmdW5jdGlvbiBjYW5Ob3RZZXRWYWxpZGF0ZShpZCwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFxuICAgIFwiY2FuIG5vdCB5ZXQgdmFsaWRhdGUgaWYgdGhlIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInIGlzIGFuIGluc3RhbmNlIG9mICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ2hhbm5lbEV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGZ1bmN0aW9uIGludmFsaWRDaGFubmVsRXZlbnQoXG4gIG1lc3NhZ2UsXG4gIGV2ZW50TmFtZSxcbiAgdHlwZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBtZXNzYWdlICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArXG4gICAgICBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInIGZvciBldmVudCAnXCIgK1xuICAgICAgZXZlbnROYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIGJlaGF2aW9yIGFkZCB3aXRoICdvbicgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24gPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGFkZGluZyBhIGJlaGF2aW9yIG9uIG1ldGhvZCAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIiArXG4gICAgICBjbGFzc0luZm9cbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1cGRhdGVVdWlkXG4gKiBAcGFyYW0ge1N0cmluZ30gY3VycmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuZXdJZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFscmVhZHlVc2VkIG5ld0lkIGFscmVhZHkgdXNlZFxuICogQGRlc2NyaXB0aW9uIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51cGRhdGVVdWlkID0gZnVuY3Rpb24gdXBkYXRlVXVpZChjdXJyZW50SWQsIG5ld0lkLCBhbHJlYWR5VXNlZCkge1xuICBpZiAoYWxyZWFkeVVzZWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJ0cnkgdG8gdXBkYXRlIGEgY29tcG9uZW50IG9mIGlkICdcIiArXG4gICAgICAgIGN1cnJlbnRJZCArXG4gICAgICAgIFwiJyB3aXRoIHRoZSBuZXcgaWQgJ1wiICtcbiAgICAgICAgbmV3SWQgK1xuICAgICAgICBcIicgdGhhdCBpcyBhbHJlYWR5IHVzZWRcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgK1xuICAgICAgICBjdXJyZW50SWQgK1xuICAgICAgICBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArXG4gICAgICAgIG5ld0lkICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFVzZU9mQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50IHRoYXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gKi9cbmV4cG9ydHMuaW52YWxpZFVzZU9mQ29tcG9uZW50ID0gZnVuY3Rpb24gaW52YWxpZFVzZU9mQ29tcG9uZW50KGlkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRTY2hlbWEgPSBmdW5jdGlvbiBpbnZhbGlkU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBzY2hlbWEgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInIGlzIG5vdCB2YWxpZCwgaXQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBtZXRhbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gYWRkIGFuIGludmFsaWQgbW9kZWxcbiAqL1xuZXhwb3J0cy5pbnZhbGlkTW9kZWwgPSBmdW5jdGlvbiBpbnZhbGlkTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIG1vZGVsICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpcyBub3QgdmFsaWQsIGl0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgbWV0YW1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBwYXJhbWV0ZXJzIHNldCB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVycyA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NJZCArXG4gICAgICBcIicgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGRlc3Ryb3llZENvbXBvbmVudENhbGxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGdldCB0aGUgcHJvcGVydHkgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZGVzdHJveWVkQ29tcG9uZW50Q2FsbCA9IGZ1bmN0aW9uIGRlc3Ryb3llZENvbXBvbmVudENhbGwoXG4gIHByb3BlcnR5TmFtZSxcbiAgaWRcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5aW5nIHRvIGdldCB0aGUgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgb24gdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iamVjdCBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBzY2hlbWEgbmFtZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgcGFyYW1ldGVyIHR5cGUgIHdoZW4gY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzc1xuICovXG5leHBvcnRzLmludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzKFxuICBvYmplY3QsXG4gIG5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIGNvbnN0cnVjdG9yIHBhcmFtZXRlciAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkob2JqZWN0KS5yZXBsYWNlKC8sL2csICcsICcpICtcbiAgICAgIFwiJyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInIGlzIG5vdCBhbiBvYmplY3RcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Nb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBpbmZvcm1hdGlvbiBvZiBhbiB1bmtvd24gbW9kZWxcbiAqL1xuZXhwb3J0cy51bmtub3duTW9kZWwgPSBmdW5jdGlvbiB1bmtub3duTW9kZWwoY2xhc3NJZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IGdldCB0aGUgaW5mb3JtYXRpb24gb2YgYW4gdW5rbm93biBtb2RlbCAnXCIgKyBjbGFzc0lkICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBBIHNjaGVtYSBpcyBtaXNzaW5nXG4gKi9cbmV4cG9ydHMubWlzc2luZ1NjaGVtYSA9IGZ1bmN0aW9uIG1pc3NpbmdTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmdcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHdoZXJlIHRoZSBjeWNsaWMgZGVwZW5kZW5jeSB3YXMgZm91bmRcbiAqIEBkZXNjcmlwdGlvbiBBIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICovXG5leHBvcnRzLmN5Y2xpY0RlcGVuZGVuY3kgPSBmdW5jdGlvbiBjeWNsaWNEZXBlbmRlbmN5KG5hbWUpIHtcbiAgaWYgKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgICdhIGN5Y2xpYyBpbmhlcml0YW5jZSBkZXBlbmRlbmN5IHdpdGgg4oCZJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICBcIuKAmSBzY2hlbWEgaGFzIGJlZW4gZm91bmQsIHBsZWFzZSBjaGVjayB0aGUgJ19pbmhlcml0JyBwcm9wZXJ0aWVzIG9mIHlvdXIgc2NoZW1hc1wiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgIFwiYSBjeWNsaWMgaW5oZXJpdGFuY2UgZGVwZW5kZW5jeSBoYXMgYmVlbiBmb3VuZCwgcGxlYXNlIGNoZWNrIHRoZSAnX2luaGVyaXQnIHByb3BlcnRpZXMgb2YgeW91ciBzY2hlbWFzXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZEVudW1UeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZU5hbWUgb2YgdGhlIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGUgZm9yIGEgdHlwZSBlbnVtXG4gKi9cbmV4cG9ydHMuaW52YWxpZEVudW1UeXBlID0gZnVuY3Rpb24gaW52YWxpZEVudW1UeXBlKHZhbHVlLCB0eXBlTmFtZSwgdHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGUgIT09IHR5cGVvZiB2YWx1ZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgZW51bWVyYXRlZCB0eXBlICdcIiArXG4gICAgICAgIHR5cGVOYW1lICtcbiAgICAgICAgXCInOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICAgIHR5cGUgK1xuICAgICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICAgIHR5cGVvZiB2YWx1ZSArXG4gICAgICAgIFwiJ1wiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBlbnVtZXJhdGVkIHR5cGUgJ1wiICsgdHlwZU5hbWUgKyBcIidcIik7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBsb2FkU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBMb2FkIHNjaGVtYVxuICovXG5leHBvcnRzLmxvYWRTY2hlbWEgPSBmdW5jdGlvbiBsb2FkU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJsb2FkIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGxvYWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBMb2FkIG1vZGVsXG4gKi9cbmV4cG9ydHMubG9hZE1vZGVsID0gZnVuY3Rpb24gbG9hZE1vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJsb2FkIG1vZGVsICdcIiArIG5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbG9hZFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBMb2FkIHR5cGVcbiAqL1xuZXhwb3J0cy5sb2FkVHlwZSA9IGZ1bmN0aW9uIGxvYWRUeXBlKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJsb2FkIHR5cGUgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjb21waWxlU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBDb21waWxlIHNjaGVtYVxuICovXG5leHBvcnRzLmNvbXBpbGVTY2hlbWEgPSBmdW5jdGlvbiBjb21waWxlU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJjb21waWxlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdlbmVyYXRlTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gR2VuZXJhdGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZU1vZGVsID0gZnVuY3Rpb24gZ2VuZXJhdGVNb2RlbChuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiZ2VuZXJhdGUgbW9kZWwgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja01vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIENoZWNrIG1vZGVsXG4gKi9cbmV4cG9ydHMuY2hlY2tNb2RlbCA9IGZ1bmN0aW9uIGNoZWNrTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImFuYWx5emUgbW9kZWwgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jcmVhdGVDb2xsZWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlQ29sbGVjdGlvbihuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiY3JlYXRlIGNvbGxlY3Rpb24gJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgY2xhc3NcbiAqL1xuZXhwb3J0cy5jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJjcmVhdGUgY2xhc3MgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtb2RlbENyZWF0aW9uQmVnaW5cbiAqIEBkZXNjcmlwdGlvbiBCZWdpbnMgbW9kZWwgY3JlYXRpb25cbiAqL1xuZXhwb3J0cy5tb2RlbENyZWF0aW9uQmVnaW4gPSBmdW5jdGlvbiBtb2RlbENyZWF0aW9uQmVnaW4oKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKCdzdGFydGluZyBtb2RlbCBjcmVhdGlvbi4uLicpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25FbmRcbiAqIEBkZXNjcmlwdGlvbiBFbmQgbW9kZWwgY3JlYXRpb25cbiAqL1xuZXhwb3J0cy5tb2RlbENyZWF0aW9uRW5kID0gZnVuY3Rpb24gbW9kZWxDcmVhdGlvbkVuZCgpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoJ21vZGVsIGNyZWF0aW9uIGVuZGVkJyk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgYWN0aW9uSW52b2tlRXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjb21wb25lbnQgY2xhc3MgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqIEBkZXNjcmlwdGlvbiBBbiBlcnJvciBoYXBwZW5lZCB3aGVuIGludm9raW5nIGEgYmVoYXZpb3JcbiAqL1xuZXhwb3J0cy5hY3Rpb25JbnZva2VFcnJvciA9IGZ1bmN0aW9uIGFjdGlvbkludm9rZUVycm9yKFxuICBzdGF0ZSxcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWVzc2FnZVxuKSB7XG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgIFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgIHN0YXRlICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJyAoY2xhc3MgJ1wiICtcbiAgICAgICAgY2xhc3NOYW1lICtcbiAgICAgICAgXCInKTogXCIgK1xuICAgICAgICBtZXNzYWdlXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgIFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgIHN0YXRlICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJzogXCIgK1xuICAgICAgICBtZXNzYWdlXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBuYW1lIGZvciB0aGUgcHJvcGVydHkgb2YgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gaW52YWxpZFNjaGVtYVByb3BlcnR5TmFtZShcbiAgbmFtZSxcbiAgcHJvcE5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBuYW1lICdcIiArXG4gICAgICBwcm9wTmFtZSArXG4gICAgICBcIicgZm9yIHNjaGVtYSAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIic6IGEgcHJvcGVydHkgbmFtZSBjYW4gbm90IGJlZ2luIHdpdGggJ18nXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBuYW1lIGZvciB0aGUgcHJvcGVydHkgb2YgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hUHJvcGVydHkgPSBmdW5jdGlvbiBpbnZhbGlkU2NoZW1hUHJvcGVydHkobmFtZSwgcHJvcE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BOYW1lICtcbiAgICAgIFwiJyBmb3Igc2NoZW1hICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJzogb25seSAncHJvcGVydHknLCAnbGluaycsICdjb2xsZWN0aW9uJywgJ21ldGhvZCcgYW5kICdldmVudCcgYXJlIGFsbG93ZWQuXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlGb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmogZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBmb3JtYXQgZm9yIHRoZSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlGb3JtYXQgPSBmdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGZvcm1hdCBmb3IgYSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHknOiAnXCIgK1xuICAgICAgb2JqICtcbiAgICAgIFwiJyBpcyBub3QgYW4gb2JqZWN0XCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIGludmFsaWQgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlID0gZnVuY3Rpb24gaW52YWxpZFN0YXRlKG1vZGVsLCBzdGF0ZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBzdGF0ZSAnXCIgKyBzdGF0ZSArIFwiJyBmb3IgdGhlIG1vZGVsICdcIiArIG1vZGVsICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duQ29udGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAZGVzY3JpcHRpb24gSW52b2tlIGEgbWV0aG9kIGNsYXNzIHdpdGhvdXQgYSBjb250ZXh0XG4gKi9cbmV4cG9ydHMudW5rbm93bkNvbnRleHQgPSBmdW5jdGlvbiB1bmtub3duQ29udGV4dChjbGFzc05hbWUsIG1ldGhvZE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludm9rZSB0aGUgYmVoYXZpb3IgJ1wiICtcbiAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgXCInIG9uIHRoZSBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJyB3aXRob3V0IGEgdmFsaWQgY29udGV4dFwiXG4gICk7XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIHdvcmtmbG93XG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwuXG4gKiBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwgbG9hZHMgc2NoZW1hcyBhbmQgdHlwZXMsIGFuYWx5emVzIHRoZW0gYW5kXG4gKiBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBEYXRhYmFzZUNvbGxlY3Rpb25zLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgSUQgPSAnX2lkJztcbnZhciBOQU1FID0gJ19uYW1lJztcbnZhciBERVNDUklQVElPTiA9ICdfZGVzY3JpcHRpb24nO1xudmFyIElOSEVSSVRTID0gJ19pbmhlcml0JztcbnZhciBDTEFTUyA9ICdfY2xhc3MnO1xudmFyIENPUkUgPSAnX2NvcmUnO1xudmFyIE1FVEhPRF9UWVBFID0gJ21ldGhvZCc7XG52YXIgRVZFTlRfVFlQRSA9ICdldmVudCc7XG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eSc7XG52YXIgTElOS19UWVBFID0gJ2xpbmsnO1xudmFyIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJztcbnZhciBpbnRlcm5hbFR5cGVzID0gWydwcm9wZXJ0eScsICdjb2xsZWN0aW9uJywgJ2xpbmsnLCAnbWV0aG9kJywgJ2V2ZW50J107XG52YXIgaW50ZXJuYWxOYW1lcyA9IFtcbiAgJ19pZCcsXG4gICdfbmFtZScsXG4gICdfaW5oZXJpdCcsXG4gICdfZGVzY3JpcHRpb24nLFxuICAnX2NsYXNzJyxcbiAgJ19jb3JlJ1xuXTtcbnZhciBkZWZhdWx0VHlwZXMgPSBbXG4gICdib29sZWFuJyxcbiAgJ3N0cmluZycsXG4gICdudW1iZXInLFxuICAnb2JqZWN0JyxcbiAgJ2Z1bmN0aW9uJyxcbiAgJ2FycmF5JyxcbiAgJ2RhdGUnLFxuICAnYW55J1xuXTtcbnZhciBzdG9yZSA9IHtcbiAgbWV0YWRlZjoge30sXG4gIGluaGVyaXRhbmNlOiB7fSxcbiAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgc2NoZW1hczoge30sXG4gIGNvbXBpbGVkU2NoZW1hczoge30sXG4gIG1vZGVsczoge30sXG4gIGdlbmVyYXRlZE1vZGVsczoge30sXG4gIHN0YXRlczoge30sXG4gIHR5cGU6IHt9XG59O1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGlzSW50ZXJuYWxOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBpcyBuYW1lIGFuIGludGVybmFsIG5hbWVcbiAqL1xuZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWUobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICBpZiAoaW50ZXJuYWxOYW1lcy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSB0aGUgbW9kZWxzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTW9kZWxzKCkge1xuICB2YXIgYXR0ID0gJyc7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBzY2hlbWFOYW1lID0gJyc7XG4gIHZhciBzY2hlbWEgPSB7fTtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxQYXJlbnQgPSBudWxsO1xuICB2YXIgbW9kZWxFeHQgPSBudWxsO1xuICB2YXIgbW9kZWxEZWYgPSBudWxsO1xuICB2YXIgbW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IHt9O1xuICB2YXIgbWVyZ2VkTW9kZWwgPSB7fTtcbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgbmJBbmNlc3RvcnMgPSAwO1xuICB2YXIgc29ydEluaGVyaXRUcmVlID0gW107XG5cbiAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgZm9yIChzY2hlbWFOYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tzY2hlbWFOYW1lXTtcblxuICAgIC8vIHNldCBtb2RlbCBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgbW9kZWwgPSB7XG4gICAgICBfbmFtZTogc2NoZW1hLl9uYW1lXG4gICAgfTtcblxuICAgIC8vIHNldCBfY29yZVxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9jb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbW9kZWwuX2NvcmUgPSBzY2hlbWEuX2NvcmU7XG4gICAgfVxuXG4gICAgLy8gc2V0IGluaGVyaXRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEuX2luaGVyaXQpKSB7XG4gICAgICBtb2RlbC5faW5oZXJpdCA9IHNjaGVtYS5faW5oZXJpdDtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3NcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5fY2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtb2RlbC5fY2xhc3MgPSBzY2hlbWEuX2NsYXNzO1xuICAgIH1cblxuICAgIC8vIHNldCBkZXNjcmlwdGlvblxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vZGVsLl9kZXNjcmlwdGlvbiA9IHNjaGVtYS5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgdmFsaWQgbmFtZVxuICAgIGZvciAoYXR0IGluIHNjaGVtYSkge1xuICAgICAgaWYgKCFpc0ludGVybmFsTmFtZShhdHQpICYmIGF0dC5pbmRleE9mKCdfJykgPT09IDApIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lKHNjaGVtYS5fbmFtZSwgYXR0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAgc2V0IG1vZGVsIGRlZmF1bHQgdmFsdWVzXG4gICAgZm9yIChhdHQgaW4gc2NoZW1hKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ3Byb3BlcnR5JzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdsaW5rJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogJ19Db21wb25lbnQnLFxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dCxcbiAgICAgICAgICAgIGxhYmVsOiBhdHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnbWV0aG9kJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYW0nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2FueScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2V2ZW50JzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYW0nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhdHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnY29sbGVjdGlvbic6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFsnX0NvbXBvbmVudCddLFxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dCxcbiAgICAgICAgICAgIGxhYmVsOiBhdHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghaXNJbnRlcm5hbE5hbWUoYXR0KSkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hUHJvcGVydHkoc2NoZW1hLl9uYW1lLCBhdHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWwuX25hbWVdID0gbW9kZWw7XG4gIH1cblxuICAvLyBtb2RlbHMgdG8gb3ZlcnJpZGVcbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBuYW1lID0gbW9kZWxbTkFNRV07XG4gICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbmFtZV07XG4gICAgaWYgKG1vZGVsRXh0KSB7XG4gICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsRXh0LCBtb2RlbCk7XG4gICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICB9XG4gIH1cblxuICAvLyBpbmhlcml0YW5jZVxuICBzb3J0SW5oZXJpdFRyZWUgPSBzb3J0SW5oZXJpdGFuY2VUcmVlKCk7XG5cbiAgbmJBbmNlc3RvcnMgPSBzb3J0SW5oZXJpdFRyZWUubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbmJBbmNlc3RvcnM7IGkrKykge1xuICAgIG1vZGVsTmFtZSA9IHNvcnRJbmhlcml0VHJlZVtpXTtcbiAgICBtb2RlbCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuXG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKG1vZGVsTmFtZSk7XG4gICAgICBwYXJlbnRzLnJldmVyc2UoKTtcblxuICAgICAgdmFyIG1vZGVsVG9NZXJnZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobW9kZWwpKTtcblxuICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbmFtZSA9IHBhcmVudHNbal07XG4gICAgICAgIG1vZGVsUGFyZW50ID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICAgICAgICBpZiAobW9kZWxQYXJlbnQpIHtcbiAgICAgICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsUGFyZW50LCBtb2RlbCk7XG4gICAgICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBsYXN0IGluaGVyaXRcbiAgICAgIC8vIGlzIHRoZSBvdmVycmlkZW4gbW9kZWxcbiAgICAgIG1vZGVsRXh0ID0gc3RvcmUubW9kZWxzW21vZGVsTmFtZV07XG4gICAgICBpZiAobW9kZWxFeHQpIHtcbiAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbEV4dCwgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV0pO1xuICAgICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNhdmVcbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAkZGIuX0dlbmVyYXRlZE1vZGVsLmluc2VydChtb2RlbERlZik7XG5cbiAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAkbG9nLmdlbmVyYXRlTW9kZWwobW9kZWxOYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGxvYWRJbk1lbW9yeVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBMb2FkIHNjaGVtYXMgYW5kIHR5cGVzIGluIG1lbW9yeVxuICovXG5mdW5jdGlvbiBsb2FkSW5NZW1vcnkoKSB7XG4gIHZhciBzY2hlbWFzID0gW107XG4gIHZhciB0eXBlcyA9IFtdO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIG1vZGVsID0ge307XG4gIHZhciBtb2RlbHMgPSBbXTtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgaWQgPSAnJztcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIGluaGVyaXQgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcblxuICAvLyBpbml0IHN0b3JlXG4gIHN0b3JlLmluaGVyaXRhbmNlID0ge307XG4gIHN0b3JlLmluaGVyaXRhbmNlVHJlZSA9IHt9O1xuICBzdG9yZS5zY2hlbWFzID0ge307XG4gIHN0b3JlLmNvbXBpbGVkU2NoZW1hcyA9IHt9O1xuICBzdG9yZS5tb2RlbHMgPSB7fTtcbiAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzID0ge307XG4gIHN0b3JlLnN0YXRlcyA9IHt9O1xuICBzdG9yZS50eXBlID0ge307XG5cbiAgLy8gbG9hZCBzY2hlbWFzXG4gIHNjaGVtYXMgPSAkZGIuX1NjaGVtYS5maW5kKHt9KTtcblxuICBsZW5ndGggPSBzY2hlbWFzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc2NoZW1hID0gc2NoZW1hc1tpXTtcblxuICAgIG5hbWUgPSBzY2hlbWFbTkFNRV07XG4gICAgaW5oZXJpdCA9IHNjaGVtYVtJTkhFUklUU107XG5cbiAgICBzdG9yZS5zY2hlbWFzW25hbWVdID0gc2NoZW1hO1xuICAgIGlmIChpbmhlcml0KSB7XG4gICAgICBzdG9yZS5pbmhlcml0YW5jZVtuYW1lXSA9IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICRsb2cubG9hZFNjaGVtYShuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBsb2FkIG1vZGVsc1xuICBtb2RlbHMgPSAkZGIuX01vZGVsLmZpbmQoe30pO1xuXG4gIGxlbmd0aCA9IG1vZGVscy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIG1vZGVsID0gbW9kZWxzW2ldO1xuICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcblxuICAgIHN0b3JlLm1vZGVsc1tuYW1lXSA9IG1vZGVsO1xuXG4gICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgJGxvZy5sb2FkTW9kZWwobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbG9hZCB0eXBlc1xuICB0eXBlcyA9ICRkYi5fVHlwZS5maW5kKHt9KTtcblxuICBsZW5ndGggPSB0eXBlcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHR5cGUgPSB0eXBlc1tpXTtcbiAgICBzdG9yZS50eXBlW3R5cGUubmFtZV0gPSB0eXBlO1xuXG4gICAgaWYgKCF0eXBlLmNvcmUpIHtcbiAgICAgICRsb2cubG9hZFR5cGUodHlwZS5uYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUluaGVyaXRhbmNlVHJlZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgdGhlIGluaGVyaXRhbmNlIHRyZWVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCkge1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgYzNsaW5lcml6YXRpb24gPSBbXTtcbiAgdmFyIGFuY2VzdG9ycyA9IFtdO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYWxsIHRoZSBhcnJheXMgYXJlIGVtcHR5XG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiAgQ2hlY2sgaWYgd2UgaGF2ZSBmaW5pc2VoZCB0byBsaW5lcml6ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzRW1wdHkoZWx0cykge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGVsdHNbaV0ubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbHQgZWxlbWVudCB0byByZW1vdmVcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYW4gZWx0IGZyb20gYWxsIHRoZSBhcnJheXNcbiAgICovXG4gIGZ1bmN0aW9uIF9yZW1vdmVDYW5kaWRhdGUoZWx0LCBlbHRzKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciBhcnIgPSBbXTtcblxuICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGVsdHNbaV0uaW5kZXhPZihlbHQpID09PSAwKSB7XG4gICAgICAgIGFyciA9IGVsdHNbaV07XG4gICAgICAgIGFyci5yZXZlcnNlKCk7XG4gICAgICAgIGFyci5wb3AoKTtcbiAgICAgICAgYXJyLnJldmVyc2UoKTtcbiAgICAgICAgZWx0c1tpXSA9IGFycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNDYW5kaWRhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVsdCBlbGVtZW50IHRvIHJlbW92ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgYSBnb29kIGNhbmRpZGF0ZS5cbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIHRoZSBlbGVtZW50IGlzIGEgZ29vZCBjYW5kaWRhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc0NhbmRpZGF0ZShlbHQsIGVsdHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA+IDApIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9maW5kQ2FuZGlkYXRlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IGNvbnRhaW5pbmcgdGhlIGNhbmRpZGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gRmluZCBhIGNhbmRpZGF0ZSBhbmQgcmV0dXJuIGl0LlxuICAgKi9cbiAgZnVuY3Rpb24gX2ZpbmRDYW5kaWRhdGUoZWx0cykge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChfaXNDYW5kaWRhdGUoZWx0c1tpXVswXSwgZWx0cykpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZWx0c1tpXVswXSk7XG4gICAgICAgIF9yZW1vdmVDYW5kaWRhdGUoZWx0c1tpXVswXSwgZWx0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX21lcmdlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgY2FuZGlkYXRlcyByZXR1cm5lZCBieSB0aGUgbWVyZ2VcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIE1lcmdlIHRoZSBhcnJheXNcbiAgICovXG4gIGZ1bmN0aW9uIF9tZXJnZShlbHRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBjYW5kaWRhdGVzID0gW107XG5cbiAgICBjYW5kaWRhdGVzID0gX2ZpbmRDYW5kaWRhdGUoZWx0cyk7XG4gICAgd2hpbGUgKGNhbmRpZGF0ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChjYW5kaWRhdGVzKTtcbiAgICAgIGNhbmRpZGF0ZXMgPSBfZmluZENhbmRpZGF0ZShlbHRzKTtcbiAgICB9XG5cbiAgICBpZiAoIV9pc0VtcHR5KGVsdHMpKSB7XG4gICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3koKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9saW5lcml6ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBlbGVtZW50XG4gICAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiBjYW5kaWRhdGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBTdGFydCB0aGUgbGluZXJpZWF0aW9uIGZyb20gYW4gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gX2xpbmVyaXplKG5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIF9jaGVja0N5Y2xpY0RlcFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jaGVja0N5Y2xpY0RlcChuYW1lLCBpdGVtKSB7XG4gICAgICB2YXIgaXNDeWNsaWNEZWIgPSBmYWxzZTtcblxuICAgICAgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KHN0b3JlLmluaGVyaXRhbmNlW2l0ZW1dKSAmJlxuICAgICAgICBzdG9yZS5pbmhlcml0YW5jZVtpdGVtXS5pbmRleE9mKG5hbWUpICE9PSAtMVxuICAgICAgKSB7XG4gICAgICAgICRsb2cuY3ljbGljRGVwZW5kZW5jeShuYW1lKTtcbiAgICAgICAgaXNDeWNsaWNEZWIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzQ3ljbGljRGViO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0b3JlLmluaGVyaXRhbmNlW25hbWVdKSkge1xuICAgICAgcGFyZW50cyA9IHN0b3JlLmluaGVyaXRhbmNlW25hbWVdLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2cubWlzc2luZ1NjaGVtYShuYW1lKTtcbiAgICB9XG5cbiAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChfY2hlY2tDeWNsaWNEZXAobmFtZSwgcGFyZW50c1tpXSkpIHtcbiAgICAgICAgcGFyZW50cyA9IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IFtuYW1lXS5jb25jYXQoX21lcmdlKHBhcmVudHMubWFwKF9saW5lcml6ZSkuY29uY2F0KFtwYXJlbnRzXSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZm9yIChuYW1lIGluIHN0b3JlLmluaGVyaXRhbmNlKSB7XG4gICAgYzNsaW5lcml6YXRpb24gPSBfbGluZXJpemUobmFtZSk7XG4gICAgYW5jZXN0b3JzID0gYzNsaW5lcml6YXRpb24ucmV2ZXJzZSgpO1xuICAgIGFuY2VzdG9ycy5wb3AoKTtcbiAgICBpZiAoYW5jZXN0b3JzLmxlbmd0aCkge1xuICAgICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlW25hbWVdID0gYW5jZXN0b3JzO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgZXh0ZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgdG8gZXh0ZW5kXG4gKiBAcmV0dXJucyB7SlNPTn0gb2JqZWN0IGV4dGVuZGVkIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHRlbmQgYSBzY2hlbWEgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChuYW1lKSB7XG4gIHZhciBzb25FeHRlbmQgPSB7fTtcbiAgdmFyIHNvbiA9IHN0b3JlLnNjaGVtYXNbbmFtZV07XG4gIHZhciBhbmNlc3RvcnMgPSBzdG9yZS5pbmhlcml0YW5jZVRyZWVbbmFtZV07XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBhbmNlc3RvciA9IG51bGw7XG4gIHZhciBwcm9wID0gJyc7XG5cbiAgaWYgKGFuY2VzdG9ycykge1xuICAgIGxlbmd0aCA9IGFuY2VzdG9ycy5sZW5ndGg7XG4gICAgYW5jZXN0b3JzLnJldmVyc2UoKTtcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhbmNlc3RvciA9IHN0b3JlLnNjaGVtYXNbYW5jZXN0b3JzW2ldXTtcbiAgICBmb3IgKHByb3AgaW4gYW5jZXN0b3IpIHtcbiAgICAgIGlmIChwcm9wLmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgICBzb25FeHRlbmRbcHJvcF0gPSBhbmNlc3Rvcltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9yIChwcm9wIGluIHNvbikge1xuICAgIHNvbkV4dGVuZFtwcm9wXSA9IHNvbltwcm9wXTtcbiAgfVxuICByZXR1cm4gc29uRXh0ZW5kO1xufVxuXG4vKipcbiAqIEBtZXRob2Qgc29ydEluaGVyaXRhbmNlVHJlZVxuICogQHJldHVybnMge0FycmF5fSBzb3J0ZWQgSW5oZXJpdGFuY2VUcmVlIHN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgc29ydGVkIEluaGVyaXRhbmNlVHJlZSBzdHJ1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gc29ydEluaGVyaXRhbmNlVHJlZSgpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgdGVtcCA9IHt9O1xuICB2YXIga2V5cyA9IFtdO1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBuYkFuY2VzdG9ycyA9IDA7XG5cbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuaW5oZXJpdGFuY2VUcmVlKSB7XG4gICAgbmJBbmNlc3RvcnMgPSBzdG9yZS5pbmhlcml0YW5jZVRyZWVbbW9kZWxOYW1lXS5sZW5ndGg7XG4gICAgaWYgKHR5cGVvZiB0ZW1wW25iQW5jZXN0b3JzXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRlbXBbbmJBbmNlc3RvcnNdID0gW107XG4gICAgfVxuICAgIHRlbXBbbmJBbmNlc3RvcnNdLnB1c2gobW9kZWxOYW1lKTtcbiAgfVxuXG4gIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wKS5zb3J0KCk7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgIHRlbXBbaW5kZXhdLmZvckVhY2goZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgIHJlc3VsdC5wdXNoKG1vZGVsKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNvbXBpbGVTY2hlbWFzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCB0aGUgbW9kZWxzXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVTY2hlbWFzKCkge1xuICB2YXIgbmFtZSA9ICcnO1xuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5zY2hlbWFzKSB7XG4gICAgaWYgKCFzdG9yZS5zY2hlbWFzW25hbWVdLl9jb3JlKSB7XG4gICAgICAkbG9nLmNvbXBpbGVTY2hlbWEobmFtZSk7XG4gICAgfVxuXG4gICAgc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdID0gZXh0ZW5kKG5hbWUpO1xuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja01vZGVsc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGFsbCB0aGUgbW9kZWxzIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlaXIgc2NoZW1hc1xuICovXG5mdW5jdGlvbiBjaGVja01vZGVscygpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIGNsYXNzRGVmID0gbnVsbDtcbiAgdmFyIHNjaGVtYSA9ICcnO1xuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBjbGFzc0RlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgICBpZiAoY2xhc3NEZWYpIHtcbiAgICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXTtcbiAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgaWYgKCFjbGFzc0RlZi5fY29yZSkge1xuICAgICAgICAgICRsb2cuY2hlY2tNb2RlbChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja0ltcChjbGFzc0RlZiwgc2NoZW1hKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cubWlzc2luZ0ltcGxlbWVudGF0aW9uKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0U3RhdGVzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIHN0YXRlcyBvZiBhIHNjaGVtYVxuICovXG5mdW5jdGlvbiBnZXRTdGF0ZXMoKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgdHlwZSA9ICcnO1xuICB2YXIgc3RhdGVzID0gW107XG4gIHZhciBhdHRyaWJ1dGUgPSAnJztcblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuY29tcGlsZWRTY2hlbWFzKSB7XG4gICAgc3RhdGVzID0gW107XG4gICAgc2NoZW1hID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICAgIGlmIChzY2hlbWEpIHtcbiAgICAgIGZvciAoYXR0cmlidXRlIGluIHNjaGVtYSkge1xuICAgICAgICB0eXBlID0gc2NoZW1hW2F0dHJpYnV0ZV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhdHRyaWJ1dGUuaW5kZXhPZignXycpICE9PSAwICYmXG4gICAgICAgICAgaW50ZXJuYWxUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHN0b3JlLnN0YXRlc1tuYW1lXSA9IHN0YXRlcztcbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tJbXBcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NEZWYgc2NoZW1hIHRvIHRlc3RcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NJbXAgc2NoZW1hIHRvIHZhbGlkYXRlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggaXRzIHNjaGVtYVxuICovXG5mdW5jdGlvbiBjaGVja0ltcChjbGFzc0RlZiwgY2xhc3NJbXApIHtcbiAgdmFyIHByb3BlcnR5ID0gJyc7XG4gIHZhciB2YWx1ZSA9IG51bGw7XG5cbiAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0ltcCkge1xuICAgIGlmIChcbiAgICAgIHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBERVNDUklQVElPTiAmJlxuICAgICAgcHJvcGVydHkgIT09IElOSEVSSVRTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBDT1JFXG4gICAgKSB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzRGVmW3Byb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFsdWUgPSBjbGFzc0RlZltwcm9wZXJ0eV07XG4gICAgICAgIGlmICghY2hlY2tTY2hlbWEodmFsdWUsIGNsYXNzSW1wW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRUeXBlSW1wKHByb3BlcnR5LCBjbGFzc0RlZltOQU1FXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltOQU1FXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNoZWNrIGlmIGFsbCBwcm9wZXJ0aWVzIGFyZSB0aGVyZVxuICBmb3IgKHByb3BlcnR5IGluIGNsYXNzRGVmKSB7XG4gICAgaWYgKFxuICAgICAgcHJvcGVydHkgIT09IElEICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgcHJvcGVydHkgIT09IERFU0NSSVBUSU9OICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBDTEFTUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENPUkVcbiAgICApIHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NJbXBbcHJvcGVydHldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tTY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGEgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tTY2hlbWEodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgaWYgKGhhc1R5cGUodHlwZSwgJ3N0cmluZycpICYmIGRlZmF1bHRUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsIHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tDdXN0b21TY2hlbWFcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIHR5cGUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgYSB2YWx1ZSBoYXMgY29ycmVjdCBjdXN0b20gdHlwZVxuICovXG5mdW5jdGlvbiBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciB0eXBlRGVmID0gc3RvcmUudHlwZVt0eXBlTmFtZV07XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgaWYgKCFoYXNUeXBlKHR5cGVEZWYsICd1bmRlZmluZWQnKSkge1xuICAgIGlmICghaGFzVHlwZSh2YWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAodHlwZURlZi50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuaXNWYWxpZFNjaGVtYSh2YWx1ZVtpXSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRUeXBlKHZhbHVlW2ldLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc1R5cGUodHlwZURlZi5zY2hlbWEsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuaXNWYWxpZFNjaGVtYSh2YWx1ZSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVEZWYudHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGluaXREYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJbml0IHRoZSBEYXRhYmFzZSBzdHVjdHVyZVxuICovXG5mdW5jdGlvbiBpbml0RGJTdHJ1Y3R1cmUoKSB7XG4gICRkYi5jb2xsZWN0aW9uKCdfTG9nZ2VyJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfU2NoZW1hJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfTW9kZWwnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19HZW5lcmF0ZWRNb2RlbCcpO1xuICAkZGIuY29sbGVjdGlvbignX0NsYXNzSW5mbycpO1xuICAkZGIuY29sbGVjdGlvbignX0JlaGF2aW9yJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfU3RhdGUnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19UeXBlJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfTWVzc2FnZScpO1xuICAkZGIuY29sbGVjdGlvbignX0NoYW5uZWwnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19Mb2cnKTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZURiU3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSB0aGUgRGF0YWJhc2Ugc3RydWN0dXJlIChpLmUuIERhdGFiYXNlQ29sbGVjdGlvbilcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGJTdHJ1Y3R1cmUoKSB7XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG1vZGVsRGVmID0ge307XG5cbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgJGRiW21vZGVsRGVmW05BTUVdXSA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2VcbiAgICApIHtcbiAgICAgICRkYi5jb2xsZWN0aW9uKG1vZGVsRGVmW05BTUVdKTtcblxuICAgICAgaWYgKCFtb2RlbERlZi5fY29yZSkge1xuICAgICAgICAkbG9nLmNyZWF0ZUNvbGxlY3Rpb24obW9kZWxEZWZbTkFNRV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGFsbCB0aGUgY2xhc3NlcyBvZiB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3MoKSB7XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG1vZGVsRGVmID0ge307XG5cbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBpZiAobW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSkge1xuICAgICAgJGNvbXBvbmVudC5jcmVhdGUoe1xuICAgICAgICBtb2RlbDogbW9kZWxOYW1lXG4gICAgICB9KTtcbiAgICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICAgJGxvZy5jcmVhdGVDbGFzcyhtb2RlbE5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NJbmZvXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhbGwgdGhlIENsYXNzSW5mbyBvZiB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3NJbmZvKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBtb2RlbERlZiA9IHt9O1xuICB2YXIgbmFtZSA9ICcnO1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgbmFtZSA9IG1vZGVsRGVmW05BTUVdICsgJ0luZm8nO1xuXG4gICAgaWYgKFxuICAgICAgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSAmJlxuICAgICAgZXhwb3J0cy5pbmhlcml0RnJvbShtb2RlbERlZltOQU1FXSwgJ19Db21wb25lbnQnKVxuICAgICkge1xuICAgICAgaWYgKCEkY29tcG9uZW50LmdldChuYW1lKSkge1xuICAgICAgICAkZGIuX0NsYXNzSW5mby5pbnNlcnQoe1xuICAgICAgICAgIF9pZDogbmFtZSxcbiAgICAgICAgICBzY2hlbWE6IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1ttb2RlbE5hbWVdLFxuICAgICAgICAgIG1vZGVsOiBtb2RlbERlZlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkYi5fQ2xhc3NJbmZvLnVwZGF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfaWQ6IG5hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9pZDogbmFtZSxcbiAgICAgICAgICAgIHNjaGVtYTogc3RvcmUuY29tcGlsZWRTY2hlbWFzW21vZGVsTmFtZV0sXG4gICAgICAgICAgICBtb2RlbDogbW9kZWxEZWZcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZWFsQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHJlYWwgbmFtZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHJlYWwgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCBjbGFzc1xuICovXG5mdW5jdGlvbiBnZXRSZWFsQ2xhc3NOYW1lKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKCdAJywgJycpLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFJlYWxUeXBlTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgdHlwZVxuICovXG5mdW5jdGlvbiBnZXRSZWFsVHlwZU5hbWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2UoJ3snLCAnJylcbiAgICAucmVwbGFjZSgnfScsICcnKVxuICAgIC50cmltKCk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc0N1c3RvbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIGN1c3RvbSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzQ3VzdG9tVHlwZSh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID1cbiAgICBoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykgJiZcbiAgICBkZWZhdWx0VHlwZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmXG4gICAgIWV4cG9ydHMuaXNDbGFzc05hbWUodmFsdWUpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc1R5cGVSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIHJlZmVyZW5jZSBhIHR5cGUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gaXNUeXBlUmVmZXJlbmNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCd7JykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNNb2RlbFBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIG1vZGVsIHBhdGhcbiAqL1xuZnVuY3Rpb24gaXNNb2RlbFBhdGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTE7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZWFsVHlwZVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gdHlwZSBvZiB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIHR5cGUgb2YgYSB2YWx1ZVxuICovXG5mdW5jdGlvbiBnZXRSZWFsVHlwZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknO1xuICB9IGVsc2Uge1xuICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSAnYW55Jykge1xuICAgIHR5cGUgPSAnYW55JztcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0Q2xhc3NOYW1lXG4gKiBAcGFyYW0ge3R5cGV9IG9iaiBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdFxuICovXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUob2JqKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBpZiAob2JqICYmIG9iai5jb25zdHJ1Y3Rvcikge1xuICAgIHJlc3VsdCA9IG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGVudW1WYWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgdmFsaWQgZW51bSB2YWx1ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bVZhbHVlKHZhbHVlLCBlbnVtVmFsdWUpIHtcbiAgcmV0dXJuIGVudW1WYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG59XG5cbi8qKlxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHBhcmFtIHt0eXBlfSB0eXBlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpcyB2YWx1ZSBoYXMgdHlwZSAndHlwZSdcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHZhbHVlIGhhcyB0aGUgc3BlY2lmaWVkIHR5cGVcbiAqL1xuZnVuY3Rpb24gaGFzVHlwZSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIGRhdGUgPSBudWxsO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICByZXN1bHQgPSAhaXNOYU4oZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW55JzpcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0ID0gdHlwZSA9PT0gdHlwZW9mIHZhbHVlO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBoYXMgZm9yIHR5cGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGhhcyBhIHNwZWNpZmljIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tUeXBlKG5hbWUsIGlkLCB0eXBlKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgdmFyIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tpZF07XG4gIHZhciBhdHRyaWJ1dGVUeXBlID0gJyc7XG5cbiAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbTkFNRV0pIHtcbiAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbY29tcG9uZW50U2NoZW1hW05BTUVdXTtcbiAgfVxuXG4gIGlmIChjb21wb25lbnRTY2hlbWEpIHtcbiAgICBhdHRyaWJ1dGVUeXBlID0gY29tcG9uZW50U2NoZW1hW25hbWUuc3BsaXQoJy4nKVswXV07XG4gICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIHNvdXJjZSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgdGFyZ2V0IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBtZXJnZSBhbHNvIHByaXZhdGUgcHJvcGVydGllc1xuICogQHJldHVybnMge09iamVjdH0gbWVyZ2VkIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIE1lcmdlIHR3byBzY2hlbWFzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHNvdXJjZSwgdGFyZ2V0LCBhbGwpIHtcbiAgdmFyIHByb3BOYW1lID0gJyc7XG4gIHZhciByZXN1bHQgPSB0YXJnZXQ7XG5cbiAgZm9yIChwcm9wTmFtZSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgIHJlc3VsdFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2Qgc2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IHNjaGVtYSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBuZXcgc2NoZW1hIHRvIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5zY2hlbWEgPSBmdW5jdGlvbiBzY2hlbWEoc2NoZW1hKSB7XG4gIHZhciBpZCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG1lcmdlZFNjaGVtYSA9IHt9O1xuICB2YXIgc2NoZW1hcyA9IFtdO1xuXG4gIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2NoZW1hKSk7XG4gIG5hbWUgPSBzY2hlbWFbTkFNRV07XG5cbiAgaWYgKHR5cGVvZiBzY2hlbWFbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgIHNjaGVtYVtJRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgfVxuICBpZiAodHlwZW9mIHNjaGVtYVtJTkhFUklUU10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2NoZW1hW0lOSEVSSVRTXSA9IFsnX0NvbXBvbmVudCddO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbW92ZUR1cGxpY2F0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBpbmhlcml0cyBsaXN0IG9mIHBhcmVudHNcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIHJlbW92ZSBkdXBsaWNhdGUgcGFyZW50cyBpbiB0aGUgbGlzdCBvZiBwYXJlbnRzXG4gICAqL1xuICBmdW5jdGlvbiBfcmVtb3ZlRHVwbGljYXRlKGluaGVyaXRzKSB7XG4gICAgdmFyIGZpbHRlcmVkTGlzdCA9IFtdO1xuICAgIHZhciBsaXN0ID0ge307XG5cbiAgICBpbmhlcml0cy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBjbGVhbk5hbWUgPSBuYW1lLnRyaW0oKTtcbiAgICAgIGlmICh0eXBlb2YgbGlzdFtjbGVhbk5hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsaXN0W2NsZWFuTmFtZV0gPSBjbGVhbk5hbWU7XG4gICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGNsZWFuTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRMaXN0O1xuICB9XG5cbiAgc2NoZW1hW0lOSEVSSVRTXSA9IF9yZW1vdmVEdXBsaWNhdGUoc2NoZW1hW0lOSEVSSVRTXSk7XG5cbiAgLy8gY2hlY2sgaWYgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhIG1ldGEgbW9kZWxcbiAgaWYgKGV4cG9ydHMuaXNWYWxpZE9iamVjdChzY2hlbWEsIHN0b3JlLm1ldGFkZWYuc2NoZW1hLCBmYWxzZSkpIHtcbiAgICBzY2hlbWFzID0gJGRiLl9TY2hlbWEuZmluZCh7XG4gICAgICBfbmFtZTogbmFtZVxuICAgIH0pO1xuICAgIGlmIChzY2hlbWFzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkU2NoZW1hID0gbWVyZ2Uoc2NoZW1hLCBzY2hlbWFzWzBdKTtcbiAgICAgICRkYi5fU2NoZW1hLnVwZGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIF9uYW1lOiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlZFNjaGVtYVxuICAgICAgKTtcbiAgICAgIGlkID0gc2NoZW1hc1swXS5faWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICRkYi5fU2NoZW1hLmluc2VydChzY2hlbWEpO1xuICAgICAgaWQgPSByZXN1bHRbMF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZFNjaGVtYShzY2hlbWFbTkFNRV0pO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1vZGVsXG4gKiBAcGFyYW0ge0pTT059IG1vZGVsIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbmV3IG1vZGVsIHRvIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5tb2RlbCA9IGZ1bmN0aW9uIG1vZGVsKG1vZGVsKSB7XG4gIHZhciBpZCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGluaGVyaXQgPSAnJztcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIG1lcmdlZE1vZGVsID0ge307XG4gIHZhciBtb2RlbHMgPSBbXTtcblxuICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobW9kZWwpKTtcbiAgbmFtZSA9IG1vZGVsW05BTUVdO1xuXG4gIGlmICh0eXBlb2YgbW9kZWxbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgIG1vZGVsW0lEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgbW9kZWwgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICBpZiAoZXhwb3J0cy5pc1ZhbGlkT2JqZWN0KG1vZGVsLCBzdG9yZS5tZXRhZGVmLm1vZGVsLCBmYWxzZSkpIHtcbiAgICBtb2RlbHMgPSAkZGIuX01vZGVsLmZpbmQoe1xuICAgICAgX25hbWU6IG5hbWVcbiAgICB9KTtcbiAgICBpZiAobW9kZWxzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbCwgbW9kZWxzWzBdKTtcbiAgICAgICRkYi5fTW9kZWwudXBkYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgX25hbWU6IG5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2VkTW9kZWxcbiAgICAgICk7XG4gICAgICBpZCA9IG1vZGVsc1swXS5faWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICRkYi5fTW9kZWwuaW5zZXJ0KG1vZGVsKTtcbiAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRNb2RlbChtb2RlbFtOQU1FXSk7XG4gIH1cblxuICByZXR1cm4gaWQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdHlwZVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFR5cGUgdHlwZSB0byBhZGRcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBuZXcgdHlwZVxuICovXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbiB0eXBlKGltcG9ydGVkVHlwZSkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBuYW1lID0gaW1wb3J0ZWRUeXBlLm5hbWU7XG5cbiAgLy8gY2hlY2sgaWYgdHlwZSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gIGlmIChleHBvcnRzLmlzVmFsaWRPYmplY3QoaW1wb3J0ZWRUeXBlLCBzdG9yZS5tZXRhZGVmLnR5cGUpKSB7XG4gICAgcmVzdWx0ID0gJGRiLl9UeXBlLmluc2VydChpbXBvcnRlZFR5cGUpO1xuICAgIGlkID0gcmVzdWx0WzBdO1xuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluaXRcbiAqIEBkZXNjcmlwdGlvbiBJbml0IHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgZXhwb3J0cy5jbGVhcigpO1xuICBzdG9yZS5tZXRhZGVmID0ge1xuICAgIHNjaGVtYToge1xuICAgICAgX2lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBfbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX2luaGVyaXQ6IHtcbiAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogWydfQ29tcG9uZW50J11cbiAgICAgIH0sXG4gICAgICBfY2xhc3M6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2NvcmU6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgX2lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBfbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX2luaGVyaXQ6IHtcbiAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIF9jbGFzczoge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfY29yZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIF9pZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFsnYW55J10sXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb3JlOiB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpbml0RGJTdHJ1Y3R1cmUoKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSB0aGUgZGF0YSBvZiB0aGUgbWV0YW1vZGVsIGZyb20gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge1xuICAgIG1ldGFkZWY6IHt9LFxuICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICBpbmhlcml0YW5jZVRyZWU6IHt9LFxuICAgIHNjaGVtYXM6IHt9LFxuICAgIGNvbXBpbGVkU2NoZW1hczoge30sXG4gICAgbW9kZWxzOiB7fSxcbiAgICBnZW5lcmF0ZWRNb2RlbHM6IHt9LFxuICAgIHN0YXRlczoge30sXG4gICAgdHlwZToge31cbiAgfTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgdGhlIG1ldGFtb2RlbFxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgJGxvZy5tb2RlbENyZWF0aW9uQmVnaW4oKTtcbiAgbG9hZEluTWVtb3J5KCk7XG4gIGNyZWF0ZUluaGVyaXRhbmNlVHJlZSgpO1xuICBjb21waWxlU2NoZW1hcygpO1xuICBnZW5lcmF0ZU1vZGVscygpO1xuICBjaGVja01vZGVscygpO1xuICBnZXRTdGF0ZXMoKTtcbiAgY3JlYXRlRGJTdHJ1Y3R1cmUoKTtcbiAgY3JlYXRlQ2xhc3MoKTtcbiAgY3JlYXRlQ2xhc3NJbmZvKCk7XG4gICRsb2cubW9kZWxDcmVhdGlvbkVuZCgpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYW4gZXZlbnRcbiAqL1xuZXhwb3J0cy5pc0V2ZW50ID0gZnVuY3Rpb24gaXNFdmVudChuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBFVkVOVF9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmlzUHJvcGVydHkgPSBmdW5jdGlvbiBpc1Byb3BlcnR5KG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIFBST1BFUlRZX1RZUEUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzTGlua1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBsaW5rXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBsaW5rXG4gKi9cbmV4cG9ydHMuaXNMaW5rID0gZnVuY3Rpb24gaXNMaW5rKG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIExJTktfVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmlzQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIGlzQ29sbGVjdGlvbihuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBDT0xMRUNUSU9OX1RZUEUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBtZXRob2RcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIG1ldGhvZFxuICovXG5leHBvcnRzLmlzTWV0aG9kID0gZnVuY3Rpb24gaXNNZXRob2QobmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgTUVUSE9EX1RZUEUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzU3RydWN0dXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHN0cnVjdHVyZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgc3RydWN0dXJlXG4gKi9cbmV4cG9ydHMuaXNTdHJ1Y3R1cmUgPSBmdW5jdGlvbiBpc1N0cnVjdHVyZShuYW1lLCBpZCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIHZhciBtb2RlbCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tpZF07XG4gIHZhciBhdHRyaWJ1dGVUeXBlID0gJyc7XG4gIHZhciB0eXBlID0gJyc7XG5cbiAgaWYgKG1vZGVsW25hbWVdKSB7XG4gICAgdHlwZSA9IHN0b3JlLnR5cGVbbW9kZWxbbmFtZV0udHlwZV07XG4gIH1cblxuICBpZiAodHlwZSAmJiB0eXBlLnNjaGVtYSkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmlzVmFsaWRTdGF0ZSA9IGZ1bmN0aW9uIGlzVmFsaWRTdGF0ZShuYW1lLCBpZCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIHZhciBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdO1xuICB2YXIgc3RhdGUgPSB7fTtcblxuICBpZiAoaXNNb2RlbFBhdGgobmFtZSkpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRNb2RlbFBhdGgoaWQsIG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW05BTUVdKSB7XG4gICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbY29tcG9uZW50U2NoZW1hW05BTUVdXTtcbiAgICB9XG4gICAgc3RhdGUgPSBzdG9yZS5zdGF0ZXNbY29tcG9uZW50U2NoZW1hW05BTUVdXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgcmVzdWx0ID0gc3RhdGUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGVcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkVHlwZSA9IGZ1bmN0aW9uIGlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZEN1c3RvbVR5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDdXN0b21UeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciB0eXBlRGVmID0gc3RvcmUudHlwZVt0eXBlTmFtZV07XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlRGVmLnZhbHVlKSAmJiB0eXBlRGVmLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NoZWNrQ2xhc3NOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCBhIGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBfY2hlY2tDbGFzc05hbWUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciB0eXBlUmVmID0gZ2V0UmVhbENsYXNzTmFtZSh0eXBlTmFtZSk7XG4gICAgdmFyIGNvbXBvbmVudCA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKSkge1xuICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGdldENsYXNzTmFtZShjb21wb25lbnQpICE9PSB0eXBlUmVmICYmXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudCkgIT09ICd7fSdcbiAgICAgICkge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lLnJlcGxhY2UoJ0AnLCAnJykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciByZWFsVHlwZSA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIHJlYWxUeXBlID0gZ2V0UmVhbFR5cGUodHlwZU5hbWUpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZU5hbWVbMF0pOlxuICAgICAgICAgICAgICBpc1ZhbGlkID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZU5hbWVbMF0pOlxuICAgICAgICAgICAgICBpc1ZhbGlkID0gX2NoZWNrQ2xhc3NOYW1lKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZU5hbWUpOlxuICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZU5hbWVdKSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lLCBzdG9yZS50eXBlW3R5cGVOYW1lXS50eXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDdXN0b21UeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZU5hbWUpOlxuICAgICAgcmVzdWx0ID0gX2NoZWNrQ2xhc3NOYW1lKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWUgdmFsdWUgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U2NoZW1hfSBzY2hlbWEgc2NoZW1hIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlIGVudW0uXG4gKi9cbmV4cG9ydHMuaXNWYWxpZEVudW0gPSBmdW5jdGlvbiBpc1ZhbGlkRW51bSh2YWx1ZSwgc2NoZW1hKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc0luc3RhbmNlT2ZcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEBwcml2YXRlIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIGZvciBjbGFzcyBuYW1lIGNsYXNzTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzSW5zdGFuY2VPZihjb21wb25lbnQsIGNsYXNzTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG5cbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmIChjb21wb25lbnRDbGFzc05hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH1cbiAgICByZXN1bHQgPSBjb21wb25lbnRDbGFzc05hbWUgPT09IGNsYXNzTmFtZTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoZXhwb3J0cy5pc0NsYXNzTmFtZShzY2hlbWEudHlwZSkpIHtcbiAgICByZXN1bHQgPVxuICAgICAgX2lzSW5zdGFuY2VPZigkY29tcG9uZW50LmdldCh2YWx1ZSksIGdldFJlYWxDbGFzc05hbWUoc2NoZW1hLnR5cGUpKSAmJlxuICAgICAgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEudHlwZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsIHNjaGVtYS50eXBlKSAmJiBzY2hlbWEudmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHNjaGVtYS5uYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gb2JqZWN0XG4gKiBAcGFyYW0ge0pTT059IHNjaGVtYVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggYSBzY2hlbWFcbiAqIGl0IGlzIHN1cHBvc2VkIHRvIHZhbGlkYXRlLlxuICovXG5leHBvcnRzLmlzVmFsaWRTY2hlbWEgPSBmdW5jdGlvbiBpc1ZhbGlkU2NoZW1hKG9iamVjdCwgc2NoZW1hKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJztcbiAgdmFyIGZpZWxkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBtYW5kYXRvcnkgPSB0cnVlO1xuICB2YXIgdHlwZVNjaGVtYSA9ICcnO1xuICB2YXIgdHlwZVJlZiA9ICcnO1xuICB2YXIgcmVhbFR5cGUgPSAnJztcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZENsYXNzTmFtZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBjbGFzc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3MgbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDbGFzc05hbWUoKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciBlbnVtVmFsdWUgPSBbXTtcblxuICAgIHR5cGVSZWYgPSBnZXRDbGFzc05hbWUodHlwZVNjaGVtYSk7XG4gICAgdHlwZVJlZiA9IG9iamVjdFt0eXBlUmVmXTtcbiAgICB0eXBlUmVmID0gdHlwZVJlZi5yZXBsYWNlKCdAJywgJycpOyAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlUmVmKSkge1xuICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0pIHtcbiAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0udHlwZSk7XG5cbiAgICAgICAgICAvLyBjaGVjayB2YWx1ZVxuICAgICAgICAgIGVudW1WYWx1ZSA9IHN0b3JlLnR5cGVbdHlwZVJlZl0udmFsdWU7XG4gICAgICAgICAgaWYgKGVudW1WYWx1ZSkge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRFbnVtVmFsdWUoZmllbGQsIGVudW1WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlUmVmID09PSAnYXJyYXknKSB7XG4gICAgICAgIGlzVmFsaWQgPSBBcnJheS5pc0FycmF5KGZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVSZWYpKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSB8fCBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJyk7XG4gICAgICAgICAgLy8gVE9ETyBtYXliZSBoYXZlIGEgbW9yZSBzdHJpY3QgdmFsaWRhdGlvbiB0aGFuIGp1c3QgYSB0eXBlIGNoZWNraW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVJlZiwgZmllbGQpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVJlZmVyZW5jZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VzIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZXMgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlUmVmZXJlbmNlKCkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgZW51bVZhbHVlID0gW107XG5cbiAgICB0eXBlUmVmID0gZ2V0UmVhbFR5cGVOYW1lKHR5cGVTY2hlbWEpO1xuICAgIHR5cGVSZWYgPSBvYmplY3RbdHlwZVJlZl07XG4gICAgdHlwZVJlZiA9IHR5cGVSZWYucmVwbGFjZSgnQCcsICcnKTsgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVJlZikpIHtcbiAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdKSB7XG4gICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgLy8gY2hlY2sgdmFsdWVcbiAgICAgICAgICBlbnVtVmFsdWUgPSBzdG9yZS50eXBlW3R5cGVSZWZdLnZhbHVlO1xuICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICBpc1ZhbGlkID0gQXJyYXkuaXNBcnJheShmaWVsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlUmVmKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgfHwgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpO1xuICAgICAgICAgIC8vIFRPRE8gbWF5YmUgaGF2ZSBhIG1vcmUgc3RyaWN0IHZhbGlkYXRpb24gdGhhbiBqdXN0IGEgdHlwZSBjaGVja2luZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVSZWYsIGZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZFR5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSgpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGlmIChpc0N1c3RvbVR5cGUocmVhbFR5cGUpKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZFtpXSwgc3RvcmUudHlwZVt0eXBlU2NoZW1hWzBdXS5zY2hlbWEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc1R5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8vIHR5cGVcbiAgaWYgKGhhc1R5cGUob2JqZWN0LCAnb2JqZWN0JykpIHtcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgIGZpZWxkID0gb2JqZWN0W2ZpZWxkTmFtZV07XG5cbiAgICAgIGlmIChoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZENsYXNzTmFtZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzVHlwZVJlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGVSZWZlcmVuY2UoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgIGlmIChcbiAgICAgICAgbWFuZGF0b3J5ID09PSB0cnVlICYmXG4gICAgICAgIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykgJiZcbiAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgKSB7XG4gICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0IHRydWUgaWYgdmFsaWRhdGlvbiBpcyBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWYgdHJ1ZSBpZiB3ZSByZW1vdmUgdGhlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpcyB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0IGlzIGNvbXBsaWFudFxuICogd2l0aCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgY2xhc3MuXG4gKi9cbmV4cG9ydHMuaXNWYWxpZE9iamVjdCA9IGZ1bmN0aW9uIGlzVmFsaWRPYmplY3QoXG4gIG9iamVjdCxcbiAgc2NoZW1hLFxuICBzdHJpY3QsXG4gIGNsZWFuUmVmXG4pIHtcbiAgdmFyIGZpZWxkTmFtZSA9ICcnO1xuICB2YXIgZmllbGQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIG1hbmRhdG9yeSA9IHRydWU7XG4gIHZhciB0eXBlU2NoZW1hID0gJyc7XG4gIHZhciB0eXBlUmVmID0gJyc7XG4gIHZhciByZWFsVHlwZSA9ICcnO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIGlmIChoYXNUeXBlKHN0cmljdCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgc3RyaWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChoYXNUeXBlKGNsZWFuUmVmLCAndW5kZWZpbmVkJykpIHtcbiAgICBjbGVhblJlZiA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDdXN0b21UeXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBhIGZpZWxkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlU2NoZW1hIGEgc2NoZW1hXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIGN1c3RvbSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgY3VzdG9tIHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgcmVhbFR5cGUgPSAnJztcblxuICAgIHJlYWxUeXBlID0gc3RvcmUudHlwZVt0eXBlU2NoZW1hXTtcbiAgICBpZiAocmVhbFR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnNjaGVtYSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCByZWFsVHlwZS5zY2hlbWEsIHN0cmljdCwgY2xlYW5SZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnZhbHVlLCAndW5kZWZpbmVkJyk6XG4gICAgICAgICAgaXNWYWxpZCA9IGV4cG9ydHMuaXNWYWxpZEVudW0oZmllbGQsIHJlYWxUeXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpc1ZhbGlkID0gZXhwb3J0cy5pc1ZhbGlkVHlwZShmaWVsZCwgcmVhbFR5cGUudHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZENsYXNzTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZENsYXNzTmFtZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgY29tcCA9IG51bGw7XG4gICAgdmFyIGlzQ29tcG9uZW50ID0gZmFsc2U7XG5cbiAgICB0eXBlUmVmID0gZ2V0UmVhbENsYXNzTmFtZSh0eXBlU2NoZW1hKTtcbiAgICBpZiAoZmllbGQgJiYgZmllbGQuaWQpIHtcbiAgICAgIGNvbXAgPSBmaWVsZDtcbiAgICAgIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcCA9ICRjb21wb25lbnQuZ2V0KGZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1R5cGUoY29tcCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAoIWV4cG9ydHMuaW5oZXJpdEZyb20oY29tcC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlUmVmKSkge1xuICAgICAgICAvLyBpZiAoZ2V0Q2xhc3NOYW1lKGNvbXApICE9PSB0eXBlUmVmKSB7IHVuY29tbWVudCB0aGlzIGxpbmUgZm9yIGEgc3RyaWN0IG1vZGVcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc0NvbXBvbmVudCAmJiBjbGVhblJlZikge1xuICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gY29tcC5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBmb3IgZGVmYXVsdCB2YWx1ZSBvZiBhbiBvYmplY3QgKHt9IG9yIG51bGwpXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgJiZcbiAgICAgICAgICBmaWVsZCAhPT0gbnVsbCAmJlxuICAgICAgICAgIE9iamVjdC5rZXlzKGZpZWxkKS5sZW5ndGggPiAwOlxuICAgICAgICBjYXNlIGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKSAmJiBmaWVsZCAhPT0gJyc6XG4gICAgICAgICAgJGxvZy5jYW5Ob3RZZXRWYWxpZGF0ZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRUeXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBhIGZpZWxkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlU2NoZW1hIGEgc2NoZW1hXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGRhdGUgPSBudWxsO1xuICAgIHZhciB0eXBlQXJyYXkgPSAnJztcblxuICAgIHJlYWxUeXBlID0gZ2V0UmVhbFR5cGUodHlwZVNjaGVtYSk7XG4gICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgY2FzZSAnYW55JzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCB0eXBlU2NoZW1hLCBzdHJpY3QsIGNsZWFuUmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlU2NoZW1hID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGZpZWxkKTtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9ICFpc05hTihkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gdHlwZVNjaGVtYSAmJlxuICAgICAgICAgICAgICAgIGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gJ2FueSdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICAgIHR5cGVBcnJheSA9IHR5cGVTY2hlbWFbMF07XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZFtpXSwgdHlwZUFycmF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZ2V0UmVhbFR5cGUoZmllbGRbaV0pICE9PSB0eXBlQXJyYXkgJiZcbiAgICAgICAgICAgICAgICAgIHR5cGVBcnJheSAhPT0gJ2FueSdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZUFycmF5LCBmaWVsZFtpXSk7XG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkW2ldKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIENhc2Ugb2YgYW4gaW1wb3J0IG9mIGEgc3lzdGVtXG4gICAgICAgICAgICAgICAgICBpZiAoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAhZXhwb3J0cy5pbmhlcml0RnJvbShcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENsYXNzTmFtZSgkY29tcG9uZW50LmdldChmaWVsZFtpXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVhbENsYXNzTmFtZSh0eXBlQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSksXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDbGFzc05hbWUoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRbaV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGxvZy5jYW5Ob3RZZXRWYWxpZGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVhbENsYXNzTmFtZSh0eXBlQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFleHBvcnRzLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICAgICAgICAgIGdldENsYXNzTmFtZShmaWVsZFtpXSksXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0UmVhbENsYXNzTmFtZSh0eXBlQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDbGFzc05hbWUoZmllbGRbaV0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5SZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZFtpXSA9IGZpZWxkW2ldLmlkKCk7IC8vIHN0b3JlIHRoZSBpZCBpbnN0ZWFkIHRoZSBmdWxsIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAkbG9nLmludmFsaWRUeXBlKGZpZWxkLCAnYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy51bmtub3duVHlwZShmaWVsZCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIG9iamVjdFxuICBpZiAoIWhhc1R5cGUob2JqZWN0LCAnb2JqZWN0JykpIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAkbG9nLmludmFsaWRUeXBlKG9iamVjdCwgJ29iamVjdCcpO1xuICB9XG5cbiAgLy8gdHlwZVxuICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgaWYgKFxuICAgICAgIWhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSB8fFxuICAgICAgZmllbGROYW1lID09PSAnX2NvcmUnIHx8XG4gICAgICBmaWVsZE5hbWUgPT09ICdfaWQnXG4gICAgKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBmaWVsZE5hbWUgPT09ICdfY29yZSc6XG4gICAgICAgICAgdHlwZVNjaGVtYSA9ICdib29sZWFuJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZE5hbWUgPT09ICdfaWQnOlxuICAgICAgICAgIHR5cGVTY2hlbWEgPSAnc3RyaW5nJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZVNjaGVtYSk6XG4gICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVTY2hlbWEpOlxuICAgICAgICByZXN1bHQgPSBfaXNWYWxpZENsYXNzTmFtZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gbWFuZGF0b3J5XG4gIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgIGlmIChvYmplY3QgJiYgaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAobWFuZGF0b3J5ID09PSB0cnVlKSB7XG4gICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFByZXBhcmUgdGhlIG9iamVjdCBpbiBvcmRlciB0byBiZSBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogQG1ldGhvZCBwcmVwYXJlT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byBwcmVwYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKi9cbmV4cG9ydHMucHJlcGFyZU9iamVjdCA9IGZ1bmN0aW9uIHByZXBhcmVPYmplY3Qob2JqZWN0LCBzY2hlbWEpIHtcbiAgdmFyIGZpZWxkTmFtZSA9ICcnO1xuICB2YXIgZmllbGQgPSBudWxsO1xuICB2YXIgbWFuZGF0b3J5ID0gdHJ1ZTtcbiAgdmFyIGRlZmF1bHRWYWx1ZSA9ICcnO1xuXG4gIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2NoZW1hKSk7XG5cbiAgLy8gbWFuZGF0b3J5ICYgZGVmYXVsdCB2YWx1ZVxuICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICBkZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0O1xuICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgIGlmIChtYW5kYXRvcnkgPT09IGZhbHNlICYmICFoYXNUeXBlKGRlZmF1bHRWYWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybnMge09iamVjdH0gdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEdldCBhIHNjaGVtYVxuICovXG5leHBvcnRzLmdldFNjaGVtYSA9IGZ1bmN0aW9uIGdldFNjaGVtYShuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmIChzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV0pIHtcbiAgICByZXN1bHQgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBtb2RlbFxuICovXG5leHBvcnRzLmdldE1vZGVsID0gZnVuY3Rpb24gZ2V0TW9kZWwobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdKSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHR5cGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgdHlwZVxuICovXG5leHBvcnRzLmdldFR5cGUgPSBmdW5jdGlvbiBnZXRUeXBlKG5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKHN0b3JlLnR5cGVbbmFtZV0gJiYgc3RvcmUudHlwZVtuYW1lXSkge1xuICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUudHlwZVtuYW1lXSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TW9kZWxQYXRoVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXRoIG9mIHRoZSBzdHJ1Y3R1cmVcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSB0eXBlIG9mIGEgbW9kZWwgcGF0aFxuICovXG5leHBvcnRzLmdldE1vZGVsUGF0aFR5cGUgPSBmdW5jdGlvbiBnZXRNb2RlbFBhdGhUeXBlKG1vZGVsLCBwYXRoKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgc3VicGF0aHMgPSBbXTtcbiAgdmFyIHN1YnBhdGggPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHN0cnVjdHVyZSA9ICcnO1xuXG4gIHN1YnBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICBsZW5ndGggPSBzdWJwYXRocy5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc3VicGF0aCA9IHN1YnBhdGhzW2ldO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICByZXN1bHQgPSBleHBvcnRzLmdldE1vZGVsKG1vZGVsKVtzdWJwYXRoXS50eXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNDdXN0b21UeXBlKHJlc3VsdCkpIHtcbiAgICAgICAgc3RydWN0dXJlID0gZXhwb3J0cy5nZXRUeXBlKHJlc3VsdCk7XG4gICAgICAgIGlmIChzdHJ1Y3R1cmUuc2NoZW1hKSB7XG4gICAgICAgICAgcmVzdWx0ID0gc3RydWN0dXJlLnNjaGVtYVtzdWJwYXRoXS50eXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cuaW52YWxpZFN0YXRlKG1vZGVsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGUobW9kZWwsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRNb2RlbFBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGF0aCBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwYXRoIGlzIHZhbGlkIGZvciB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHBhdGggaXMgdmFsaWQgbW9kZWwgcGF0aFxuICovXG5leHBvcnRzLmlzVmFsaWRNb2RlbFBhdGggPSBmdW5jdGlvbiBpc1ZhbGlkTW9kZWxQYXRoKG1vZGVsLCBwYXRoKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBzdWJwYXRocyA9IFtdO1xuICB2YXIgc3VicGF0aCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgc3RydWN0dXJlID0gJyc7XG5cbiAgc3VicGF0aHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIGxlbmd0aCA9IHN1YnBhdGhzLmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBzdWJwYXRoID0gc3VicGF0aHNbaV07XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHR5cGUgPSBleHBvcnRzLmdldE1vZGVsKG1vZGVsKVtzdWJwYXRoXS50eXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGUpKSB7XG4gICAgICAgIHN0cnVjdHVyZSA9IGV4cG9ydHMuZ2V0VHlwZSh0eXBlKTtcbiAgICAgICAgaWYgKHN0cnVjdHVyZS5zY2hlbWEgJiYgc3RydWN0dXJlLnNjaGVtYVtzdWJwYXRoXSkge1xuICAgICAgICAgIHR5cGUgPSBzdHJ1Y3R1cmUuc2NoZW1hW3N1YnBhdGhdLnR5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldE1ldGFEZWZcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBtZXRhZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBkZWZpbml0aW9uIG9mIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5nZXRNZXRhRGVmID0gZnVuY3Rpb24gZ2V0TWV0YURlZigpIHtcbiAgdmFyIHJlc3VsdCA9IHN0b3JlLm1ldGFkZWYuc2NoZW1hO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybnMge0FycmF5fSBpZCBpZCBvZiB0aGUgcGFyZW50c1xuICogQGRlc2NyaXB0aW9uIEdldCBwYXJlbnRzIG9mIGEgc2NoZW1hIGlmIGFueVxuICovXG5leHBvcnRzLmdldFBhcmVudHMgPSBmdW5jdGlvbiBnZXRQYXJlbnRzKGlkKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAoIXN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0pIHtcbiAgICByZXN1bHQgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdLnNsaWNlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluaGVyaXRGcm9tXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWUgbmFtZSBvZiB0aGUgcGFyZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICovXG5leHBvcnRzLmluaGVyaXRGcm9tID0gZnVuY3Rpb24gaW5oZXJpdEZyb20obmFtZSwgcGFyZW50TmFtZSkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3NlYXJjaFBhcmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhbmNlc3Rvck5hbWUgb2YgdGhlIHBhcmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gICAqL1xuICBmdW5jdGlvbiBfc2VhcmNoUGFyZW50KGNsYXNzTmFtZSwgYW5jZXN0b3JOYW1lKSB7XG4gICAgdmFyIGlzQW5jZXN0b3IgPSBmYWxzZTtcbiAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIHBhcmVudHMgPSBleHBvcnRzLmdldFBhcmVudHMoY2xhc3NOYW1lKTtcbiAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGlmIChwYXJlbnRzLmluZGV4T2YoYW5jZXN0b3JOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgaXNBbmNlc3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpc0FuY2VzdG9yID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBhbmNlc3Rvck5hbWUpO1xuICAgICAgICAgIGlmIChpc0FuY2VzdG9yKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzQW5jZXN0b3I7XG4gIH1cblxuICBpZiAobmFtZSAhPT0gcGFyZW50TmFtZSkge1xuICAgIHBhcmVudHMgPSBleHBvcnRzLmdldFBhcmVudHMobmFtZSk7XG4gICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGlmIChwYXJlbnRzLmluZGV4T2YocGFyZW50TmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHQgPSBfc2VhcmNoUGFyZW50KHBhcmVudHNbaV0sIHBhcmVudE5hbWUpO1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0NsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgdmFsdWUgYSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaXNDbGFzc05hbWUgPSBmdW5jdGlvbiBpc0NsYXNzTmFtZSh2YWx1ZSkge1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpO1xuXG4gIGlmIChyZXN1bHQpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICBuYW1lID0gdmFsdWUucmVwbGFjZSgnQCcsICcnKTtcbiAgICAgIHJlc3VsdCA9IHR5cGVvZiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV0gIT09ICd1bmRlZmluZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgc3lzdGVtXG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIFN5c3RlbSBSdW50aW1lLlxuICogSXQgaW5pdHMgU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBsb2FkcyBTeXN0ZW0gUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJHN5c3RlbSA9IHJlcXVpcmUoJy4uL2J1aWxkL3N5c3RlbS9zeXN0ZW0uanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuLyogUHJpdmF0ZSBQcm9wZXJ0eSAqL1xuXG52YXIgc3l0ZW1JZCA9ICcnO1xudmFyIHN5c3RlbSA9ICcnO1xudmFyIGNoYW5uZWwgPSBudWxsO1xuXG4vLyBwb2x5ZmlsbFxuJGhlbHBlci5wb2x5ZmlsbCgpO1xuXG4vLyBpbml0IE1ldGFtb2RlbFxuJG1ldGFtb2RlbC5pbml0KCk7XG5cbi8vIGluaXQgcnVudGltZSBmcm9tIGEgc3lzdGVtXG5zeXRlbUlkID0gJGRiLmltcG9ydFN5c3RlbSgkc3lzdGVtLnN5c3RlbSk7XG5cbnN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5dGVtSWQpO1xuY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XG5cbnN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XG5jaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3l0ZW1JZCk7XG5zeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XG5jaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXRlbUlkKTtcbnN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcbmNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoc3l0ZW1JZCk7XG5cbnN5c3RlbS5zdGFydCgpO1xuXG5zeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xuXG4vKiBQdWJsaWMgcHJvcGVydHkgKi9cblxuLyoqXG4gKiBAcHJvcGVydHkgcnVudGltZVxuICogQHR5cGUgX1J1bnRpbWVcbiAqIEBkZXNjcmlwdGlvbiBfUnVudGltZSBpbnN0YW5jZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9ICRjb21wb25lbnQuZ2V0KCdydW50aW1lJyk7XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHN0YXRlXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZWNvbXBvbmVudHNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgc3RvcmUgPSB7fTtcblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZCBvbiB3aGljaCBjaGFuZ2UgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnNldCA9IGZ1bmN0aW9uIHNldChpZCwgc3RhdGUsIHZhbHVlKSB7XG4gIHN0b3JlW2lkXSA9IHtcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG4gICRkYi5zdG9yZS5fU3RhdGVbaWRdID0ge1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldChpZCkge1xuICByZXR1cm4gc3RvcmVbaWRdO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFsbCB0aGUgc3RhdGVzIG9mIHRoZSBjb21wb25lbnRzIGZyb20gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSB3b3JrZmxvd1xuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBkYlxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIFN5c3RlbSBSdW50aW1lLlxuICogSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDpcbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LFxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmRcbiAqIC0gdGhlIG91dHB1dCBvZiBhbGwgYWN0aW9ucyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbC5cbiAqXG4gKiBJZiBhbiBlcnJvciBvY2N1cnMsIHRoZSB3b3JrZmxvdyB3aWxsIGNhbGwgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgYW5kIHJ1bnRpbWUuXG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBjbGFzcyBSdW50aW1lRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBvZiB0aGUgZXJyb3JcbiAqIEBkZXNjcmlwdGlvbiBUaGUgUnVudGltZUVycm9yIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFJ1bnRpbWVFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubmFtZSA9ICdSdW50aW1lRXJyb3InO1xufVxuUnVudGltZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuUnVudGltZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJ1bnRpbWVFcnJvcjtcblxuLyoqXG4gKiBAbWV0aG9kIGlzTW9kZWxQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgdmFsdWUgYSBtb2RlbCBwYXRoXG4gKi9cbmZ1bmN0aW9uIGlzTW9kZWxQYXRoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBuYW1lcyBvZiBhbGwgcGFyYW1ldGVycyBvZiB0aGUgbWV0aG9kIGZvciB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgbmFtZXMgb2YgdGhlIHBhcmFtZXRlciBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc01vZGVsUGF0aChtZXRob2ROYW1lKSkge1xuICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtBcnJheX0gbnVtYmVyIG9mIHBhcmFtZXRlcnMgbWluIGFuZCBtYXggZm9yIHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBudW1iZXIgb2YgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU51bWJlcihpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbDtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBtaW4gPSAwO1xuICB2YXIgbWF4ID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2YgcGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIG1pbiA9IG1pbiArIDE7XG4gICAgICAgIH1cbiAgICAgICAgbWF4ID0gbWF4ICsgMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWluKTtcbiAgICByZXN1bHQucHVzaChtYXgpO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIHNldERlZmF1bHRWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIGFyZ3VtZW50c1xuICogQHJldHVybnMge0FycmF5fSBhcmd1bWVudHMgd2l0aCBkZWZhdWx0IHZhbHVlc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBzZXREZWZhdWx0VmFsdWUoaWQsIG1ldGhvZE5hbWUsIGFyZ3MpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGw7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSBmYWxzZSAmJiB0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0uZGVmYXVsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmV0dXJuVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgdHlwZSByZXR1cm5lZCBieSB0aGUgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHlwZSByZXR1cm5lZCBieSBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRSZXR1cm5UeXBlKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciByZXN1bHRUeXBlID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgcmVzdWx0VHlwZSA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdLnJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAocmVzdWx0VHlwZSkge1xuICAgIHJlc3VsdCA9IHJlc3VsdFR5cGU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtVHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge0FycmF5fSB0aGUgdHlwZXMgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbVR5cGVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS50eXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tSZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBvdXRwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tSZXN1bHQocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsO1xuICB2YXIgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8ICcnO1xuICB2YXIgbWV0aG9kUmVzdWx0ID0gbnVsbDtcbiAgdmFyIHR5cGVvZk1ldGhvZFJlc3VsdCA9ICcnO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciByZXR1cm5UeXBlID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMubWV0aG9kUmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1ldGhvZFJlc3VsdCA9IHBhcmFtcy5tZXRob2RSZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kUmVzdWx0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICByZXR1cm5UeXBlID0gZ2V0UmV0dXJuVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gIGlmIChyZXR1cm5UeXBlICE9PSBudWxsKSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHJldHVyblR5cGUgPT09ICdhbnknOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcmV0dXJuVHlwZSA9PT0gJ2FycmF5JzpcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1ldGhvZFJlc3VsdCkpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKFxuICAgICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocmV0dXJuVHlwZSk6XG4gICAgICAgIGlmIChtZXRob2RSZXN1bHQuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICBpZiAobWV0aG9kUmVzdWx0LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHR5cGVvZk1ldGhvZFJlc3VsdCA9IG1ldGhvZFJlc3VsdC5uYW1lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0eXBlb2ZNZXRob2RSZXN1bHQgPSBtZXRob2RSZXN1bHQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZk1ldGhvZFJlc3VsdCAhPT0gcmV0dXJuVHlwZS5yZXBsYWNlKCdAJywgJycpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgbWV0aG9kTmFtZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZSxcbiAgICAgICAgICAgICAgdHlwZW9mTWV0aG9kUmVzdWx0XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKFxuICAgICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlLFxuICAgICAgICAgICAgdHlwZW9mIG1ldGhvZFJlc3VsdFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZFJlc3VsdCAhPT0gcmV0dXJuVHlwZSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoXG4gICAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICAgIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgbWV0aG9kTmFtZSxcbiAgICAgICAgICAgIHJldHVyblR5cGUsXG4gICAgICAgICAgICB0eXBlb2YgbWV0aG9kUmVzdWx0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBhIFN5c3RlbSBSdW50aW1lIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCB0cnVlIGlmIHRoZSBzdGF0ZSBpcyBhbiBldmVudFxuICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIHRoZSBhY3Rpb25zXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgYWN0aW9ucyBvZiB0aGUgc3BlY2lmaWVkIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoY29tcG9uZW50LCBuYW1lLCBpc0V2ZW50KSB7XG4gIHZhciBhY3Rpb24gPSAkYmVoYXZpb3IuZ2V0QWN0aW9ucyhjb21wb25lbnQuaWQoKSwgbmFtZSk7XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBwYXJlbnQgPSBudWxsO1xuXG4gIGlmICghYWN0aW9uLmxlbmd0aCB8fCBpc0V2ZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KFxuICAgICAgICBnZXRBY3Rpb25zKCRjb21wb25lbnQuZ2V0KGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKSwgbmFtZSwgaXNFdmVudClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudHMgPSAkbWV0YW1vZGVsLmdldFBhcmVudHMoY29tcG9uZW50Lm5hbWUpO1xuICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gJGNvbXBvbmVudC5nZXQocGFyZW50c1tpXSk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMocGFyZW50LCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGxvZy51bmtub3duQ29tcG9uZW50KHBhcmVudHNbaV0sIGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICBhY3Rpb24ucmV2ZXJzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNhbGxBY3Rpb25cbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCBpcyB0aGUgYWN0aW9uIGEgY2FsbGJhY2sgb2YgYW4gZXZlbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICogQGRlc2NyaXB0aW9uIENhbGwgYW4gYWN0aW9uIGFuZCBtYWtlIHNvbWUgRGVwZW5kZW5jeSBJbmplY3Rpb24gaWYgaXQgaXMgYSBjb3JlIGFjdGlvblxuICovXG5mdW5jdGlvbiBjYWxsQWN0aW9uKGNvbXBvbmVudCwgc3RhdGUsIGFjdGlvbiwgcGFyYW1zLCBpc0V2ZW50KSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgaW5qZWN0ZWRQYXJhbXMgPSBbXTtcbiAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgaWYgKFxuICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkgJiZcbiAgICAhJG1ldGFtb2RlbC5pc0xpbmsoc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkgJiZcbiAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSlcbiAgKSB7XG4gICAgcGFyYW1zID0gc2V0RGVmYXVsdFZhbHVlKGNvbXBvbmVudENsYXNzTmFtZSwgc3RhdGUsIHBhcmFtcyk7XG4gIH1cblxuICB0cnkge1xuICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKHBhcmFtc1tpXSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi51c2VDb3JlQVBJKSB7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRjb21wb25lbnQpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkZGIpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkbWV0YW1vZGVsKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goZXhwb3J0cyk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRiZWhhdmlvcik7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRzdGF0ZSk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRsb2cpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkaGVscGVyKTtcbiAgICB9XG5cbiAgICBpZiAoJGhlbHBlci5pc09uTm9kZSgpKSB7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRoZWxwZXIuZ2V0UmVxdWlyZSgpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgaWYgKGFjdGlvbi5jb250ZXh0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgYWN0aW9uLmFjdGlvbi5iaW5kLmFwcGx5KFxuICAgICAgICAgICAgYWN0aW9uLmFjdGlvbixcbiAgICAgICAgICAgIFthY3Rpb24uY29udGV4dF0uY29uY2F0KGluamVjdGVkUGFyYW1zKVxuICAgICAgICAgICksXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICBhY3Rpb24uYWN0aW9uLmJpbmQuYXBwbHkoXG4gICAgICAgICAgICBhY3Rpb24uYWN0aW9uLFxuICAgICAgICAgICAgW2NvbXBvbmVudF0uY29uY2F0KGluamVjdGVkUGFyYW1zKVxuICAgICAgICAgICksXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYWN0aW9uLmNvbnRleHQpIHtcbiAgICAgICAgcmVzdWx0ID0gYWN0aW9uLmFjdGlvbi5hcHBseShhY3Rpb24uY29udGV4dCwgaW5qZWN0ZWRQYXJhbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gYWN0aW9uLmFjdGlvbi5hcHBseShjb21wb25lbnQsIGluamVjdGVkUGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFJ1bnRpbWVFcnJvcikge1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5ldyBGdW5jdGlvbigpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAncnVudGltZTogY2FuIG5vdCBleGVjdXRlIG5ldyBGdW5jdGlvbigpIGluc3RydWN0aW9uIGluIHRoZSBjdXJyZW50IGNvbnRleHQuJ1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZXJyb3IpIHtcbiAgICAgICAgICBjb21wb25lbnQuZXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgICAgICAgc3RhdGUgK1xuICAgICAgICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5pZCgpICtcbiAgICAgICAgICAgICAgXCInXCIsXG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkaGVscGVyLmdldFJ1bnRpbWUoKSkge1xuICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLmVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgICAgICAgIHN0YXRlICtcbiAgICAgICAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICAgICAgICBjb21wb25lbnQuaWQoKSArXG4gICAgICAgICAgICAgIFwiJ1wiLFxuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAkbG9nLmFjdGlvbkludm9rZUVycm9yKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgICAgIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgIGUubWVzc2FnZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCB2YWxpZFBhcmFtTnVtYmVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gYXBwbGllZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGFjdGlvbiBpcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhY3Rpb24gaGFzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyXG4gKi9cbmV4cG9ydHMudmFsaWRQYXJhbU51bWJlcnMgPSBmdW5jdGlvbiB2YWxpZFBhcmFtTnVtYmVycyhcbiAgY2xhc3NOYW1lLFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pIHtcbiAgdmFyIGZ1bmMgPSAnJztcbiAgdmFyIGJlZ2luQm9keSA9IC0xO1xuICB2YXIgaGVhZGVyID0gJyc7XG4gIHZhciBmdW5jUGFyYW1zID0gJyc7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHBhcmFtTnVtYmVyID0gMDtcbiAgdmFyIG1vZGVsTnVtYmVyUGFyYW0gPSBbXTtcbiAgdmFyIGlzUHJvcGVydHkgPSBmYWxzZTtcbiAgdmFyIGlzTGluayA9IGZhbHNlO1xuICB2YXIgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAvLyBjaGVjayBudW1iZXIgb2YgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uXG4gIGZ1bmMgPSBhY3Rpb24udG9TdHJpbmcoKTtcbiAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCd7Jyk7XG4gIGhlYWRlciA9IGZ1bmMuc3Vic3RyaW5nKDAsIGJlZ2luQm9keSk7XG4gIGhlYWRlciA9IGhlYWRlci5yZXBsYWNlKCc9PicsICcnKTtcblxuICBpZiAoaGVhZGVyLmluZGV4T2YoJygnKSAhPT0gLTEpIHtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyXG4gICAgICAuc3BsaXQoJygnKVsxXVxuICAgICAgLnJlcGxhY2UoJyknLCAnJylcbiAgICAgIC50cmltKCk7XG4gIH0gZWxzZSB7XG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlci50cmltKCk7XG4gIH1cblxuICBwYXJhbXMgPSBmdW5jUGFyYW1zLnNwbGl0KCcsJyk7XG4gIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgcGFyYW1zID0gW107XG4gIH1cbiAgcGFyYW1OdW1iZXIgPSBwYXJhbXMubGVuZ3RoO1xuXG4gIC8vIGdldCB0aGUgbnVtYmVyIG1pbiBhbmQgbWF4IG9mIHZhbGlkIHBhcmFtZXRlcnNcbiAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsoc3RhdGUsIGNsYXNzTmFtZSk7XG4gIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjbGFzc05hbWUpO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNDb2xsZWN0aW9uOlxuICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsyLCAyXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaXNQcm9wZXJ0eTpcbiAgICAgIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsUGF0aFR5cGUoY2xhc3NOYW1lLCBzdGF0ZSkgPT09ICdhcnJheScpIHtcbiAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsyLCAyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMSwgMV07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIGlzTGluazpcbiAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMSwgMV07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IGdldFBhcmFtTnVtYmVyKGNsYXNzTmFtZSwgc3RhdGUpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICAvLyBjb21wYXJlXG4gIGlmIChcbiAgICBtb2RlbE51bWJlclBhcmFtWzBdIDw9IHBhcmFtTnVtYmVyICYmXG4gICAgcGFyYW1OdW1iZXIgPD0gbW9kZWxOdW1iZXJQYXJhbVsxXVxuICApIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja1BhcmFtc1xuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvblxuICovXG5leHBvcnRzLmNoZWNrUGFyYW1zID0gZnVuY3Rpb24gY2hlY2tQYXJhbXMocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsO1xuICB2YXIgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8ICcnO1xuICB2YXIgYXJncyA9IHBhcmFtcy5hcmdzIHx8ICcnO1xuICB2YXIgcGFyYW1zTmFtZSA9IFtdO1xuICB2YXIgcGFyYW1zVHlwZSA9IFtdO1xuICB2YXIgcGFyYW1zTnVtYmVyID0gW107XG4gIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcbiAgdmFyIGxlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBwYXJhbSA9IG51bGw7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgaXNQcm9wZXJ0eSA9IGZhbHNlO1xuICB2YXIgaXNMaW5rID0gZmFsc2U7XG4gIHZhciBpc0NvbGxlY3Rpb24gPSBmYWxzZTtcblxuICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkobWV0aG9kTmFtZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsobWV0aG9kTmFtZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24obWV0aG9kTmFtZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgcGFyYW1zTmFtZSA9IGdldFBhcmFtTmFtZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQ29sbGVjdGlvbjpcbiAgICAgIGlmIChhcmdzICYmIGFyZ3NbMV0gJiYgYXJnc1sxXSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICBwYXJhbXNUeXBlID0gW1xuICAgICAgICAgIFskbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZVswXV0sXG4gICAgICAgICAgJ3N0cmluZydcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXG4gICAgICAgICAgJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVbMF0sXG4gICAgICAgICAgJ3N0cmluZydcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIHBhcmFtc051bWJlciA9IFsyLCAyXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaXNQcm9wZXJ0eTpcbiAgICAgIGlmIChpc01vZGVsUGF0aChtZXRob2ROYW1lKSkge1xuICAgICAgICBwYXJhbXNUeXBlID0gW1xuICAgICAgICAgICRtZXRhbW9kZWwuZ2V0TW9kZWxQYXRoVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpXG4gICAgICAgIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlXTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSkgPT09ICdhcnJheSdcbiAgICAgICkge1xuICAgICAgICBpZiAoYXJncyAmJiBhcmdzWzFdICYmIGFyZ3NbMV0gPT09ICdyZXNldCcpIHtcbiAgICAgICAgICBwYXJhbXNUeXBlID0gW1snYW55J10sICdzdHJpbmcnXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNUeXBlID0gWydhbnknLCAnc3RyaW5nJ107XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zTnVtYmVyID0gWzIsIDJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zTnVtYmVyID0gWzEsIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc0xpbms6XG4gICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlXTtcbiAgICAgIHBhcmFtc051bWJlciA9IFsxLCAxXTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwYXJhbXNUeXBlID0gZ2V0UGFyYW1UeXBlcyhjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcGFyYW1zTnVtYmVyID0gZ2V0UGFyYW1OdW1iZXIoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gY2FzZSBvZiBvYmplY3RcbiAgaWYgKHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGVuZ3RoID0gMTtcbiAgfVxuXG4gIGlmIChsZW5ndGggPCBwYXJhbXNOdW1iZXJbMF0gfHwgcGFyYW1zTnVtYmVyWzFdIDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXIoXG4gICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgbWV0aG9kTmFtZVxuICAgICk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBwYXJhbSA9IGFyZ3NbaV07XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChpIDwgcGFyYW1zTnVtYmVyWzBdKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihcbiAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBtZXRob2ROYW1lXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHBhcmFtLCBwYXJhbXNUeXBlW2ldKSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1UeXBlKFxuICAgICAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgICAgIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgcGFyYW1zTmFtZVtpXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAZGVzY3JpcHRpb24gQ2FsbCBhbiBhY3Rpb24gdGhhdCBjb21lcyBmcm9tIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuYWN0aW9uID0gZnVuY3Rpb24gYWN0aW9uKGJlaGF2aW9ySWQsIHBhcmFtcykge1xuICB2YXIgaXNFdmVudCA9IGZhbHNlO1xuICB2YXIgaXNQcm9wZXJ0eSA9IGZhbHNlO1xuICB2YXIgaXNMaW5rID0gZmFsc2U7XG4gIHZhciBpc0NvbGxlY3Rpb24gPSBmYWxzZTtcbiAgdmFyIGJlaGF2aW9ycyA9IFtdO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuICB2YXIgYWN0aW9uRnJvbU1lbW9yeSA9IG51bGw7XG5cbiAgYmVoYXZpb3JzID0gJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICBfaWQ6IGJlaGF2aW9ySWRcbiAgfSk7XG5cbiAgYWN0aW9uRnJvbU1lbW9yeSA9ICRiZWhhdmlvci5nZXQoYmVoYXZpb3JJZCk7XG5cbiAgaWYgKGJlaGF2aW9ycy5sZW5ndGggPT09IDEpIHtcbiAgICBiZWhhdmlvciA9IGJlaGF2aW9yc1swXTtcblxuICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGJlaGF2aW9yLmNvbXBvbmVudCk7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlzRXZlbnQgPSAkbWV0YW1vZGVsLmlzRXZlbnQoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihcbiAgICAgICAgYmVoYXZpb3Iuc3RhdGUsXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZVxuICAgICAgKTtcblxuICAgICAgaWYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0NvbGxlY3Rpb24gfHwgaXNMaW5rKSB7XG4gICAgICAgIGNhbGxBY3Rpb24oXG4gICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgIGJlaGF2aW9yLnN0YXRlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVzZUNvcmVBUEk6IGJlaGF2aW9yLnVzZUNvcmVBUEksXG4gICAgICAgICAgICBjb250ZXh0OiBiZWhhdmlvci5jb250ZXh0LFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25Gcm9tTWVtb3J5XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlXG4gKiB7U3RyaW5nfSBjb21wb25lbnQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIFdvcmtsb3c6XG4gKlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkXG4gKiAxLiBDaGVjayBpZiB0aGUgc3RhdGUgaXMgYSBtZXRob2QsIGEgcHJvcGVydHkgb3IgYW4gZXZlbnRcbiAqIDIuIFNlYXJjaCBpZiB0aGVyZSBpcyBhIGJlaGF2aW9yIHdpdGggYWN0aW9ucyBmb3IgdGhlIG5ldyBzdGF0ZVxuICogMy4gSWYgc28sIGdldCB0aGUgYWN0aW9uKHMpXG4gKiA0LiBDaGVjayBpZiB0aGUgaW5wdXRzIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1ldGFtb2RlbFxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpXG4gKiA2LiBJZiBhIG1ldGhvZCwgY2hlY2sgaWYgdGhlIG91dHB1dCBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIDcuIElmIGFsbCBpcyBvaywgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZFxuICogOC4gUmV0dXJuIHRoZSByZXN1bHRcbiAqL1xuZXhwb3J0cy5zdGF0ZSA9IGZ1bmN0aW9uIHN0YXRlKHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gIHBhcmFtcy5jb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8ICcnO1xuICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG4gIHBhcmFtcy5kYXRhID0gcGFyYW1zLmRhdGEgfHwgW107XG4gIHBhcmFtcy5jb250ZXh0ID0gcGFyYW1zLmNvbnRleHQgfHwgbnVsbDtcblxuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuICB2YXIgYWN0aW9ucyA9IFtdO1xuICB2YXIgYWN0aW9uID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSBmYWxzZTtcbiAgdmFyIGlzUHJvcGVydHkgPSBmYWxzZTtcbiAgdmFyIGlzTGluayA9IGZhbHNlO1xuICB2YXIgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG4gIHZhciBpc0V2ZW50ID0gZmFsc2U7XG5cbiAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldChwYXJhbXMuY29tcG9uZW50KTtcblxuICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgJGxvZy5pbnZhbGlkVXNlT2ZDb21wb25lbnQocGFyYW1zLmNvbXBvbmVudCk7XG4gIH1cblxuICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChwYXJhbXMuY29tcG9uZW50KTtcbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24ocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIGFjdGlvbnMgPSBnZXRBY3Rpb25zKGNvbXBvbmVudCwgcGFyYW1zLnN0YXRlLCBpc0V2ZW50KTtcbiAgfVxuXG4gIGlmIChhY3Rpb25zLmxlbmd0aCkge1xuICAgIGlmIChcbiAgICAgIGV4cG9ydHMuY2hlY2tQYXJhbXMoe1xuICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgbWV0aG9kTmFtZTogcGFyYW1zLnN0YXRlLFxuICAgICAgICBhcmdzOiBwYXJhbXMuZGF0YVxuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGlmICghaXNFdmVudCAmJiAhaXNQcm9wZXJ0eSAmJiAhaXNMaW5rICYmICFpc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uID0gYWN0aW9uc1swXTtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEFjdGlvbihcbiAgICAgICAgICBwYXJhbXMuY29udGV4dCB8fCBjb21wb25lbnQsXG4gICAgICAgICAgcGFyYW1zLnN0YXRlLFxuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBwYXJhbXMuZGF0YSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIGNoZWNrUmVzdWx0KHtcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICBtZXRob2ROYW1lOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgbWV0aG9kUmVzdWx0OiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW5ndGggPSBhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWN0aW9uID0gYWN0aW9uc1tpXTtcbiAgICAgICAgICBjYWxsQWN0aW9uKFxuICAgICAgICAgICAgcGFyYW1zLmNvbnRleHQgfHwgY29tcG9uZW50LFxuICAgICAgICAgICAgcGFyYW1zLnN0YXRlLFxuICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgcGFyYW1zLmRhdGEsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSwgcGFyYW1zLmRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIGlmIChjb21wb25lbnQgJiYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0xpbmsgfHwgaXNDb2xsZWN0aW9uKSkge1xuICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2Qgc3RvcFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiB7Qm9vbGVhbn0gZXJyb3IgdHJ1ZSBpZiB0aGUgc3RvcCBvZiB0aGUgd29ya2Zsb3cgaXMgZHVlIHRvIGFuIGVycm9yIChkZWZhdWx0IGZhbHNlKVxuICoge1N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlIHRvIGxvZyAoZGVmYXVsdCAnJylcbiAqIEBkZXNjcmlwdGlvbiBTdG9wIHRoZSB3b3JrZmxvdyBlbmdpbmVcbiAqL1xuZXhwb3J0cy5zdG9wID0gZnVuY3Rpb24gc3RvcChwYXJhbXMpIHtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmVycm9yID09PSAndW5kZWZpbmVkJykge1xuICAgIHBhcmFtcy5lcnJvciA9IGZhbHNlO1xuICB9XG4gIHBhcmFtcy5tZXNzYWdlID0gcGFyYW1zLm1lc3NhZ2UgfHwgJyc7XG5cbiAgZXhwb3J0cy5zdGF0ZSA9IGZ1bmN0aW9uIHN0YXRlKCkge307XG5cbiAgaWYgKHBhcmFtcy5lcnJvcikge1xuICAgIGlmIChwYXJhbXMubWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgICAgJ3J1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlICcgKyBwYXJhbXMubWVzc2FnZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgICAgJ3J1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIG9mIGFuIHVua25vd24gZXJyb3InXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW1zLm1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdydW50aW1lOiBydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSAnICsgcGFyYW1zLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6IHJ1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCcpO1xuICAgIH1cbiAgfVxufTtcbiJdfQ==
