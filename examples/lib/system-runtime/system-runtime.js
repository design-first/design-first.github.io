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
      state: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: ''
      },
      _id: '166971fd9d107fd'
    },
    '135c71078810af2': {
      _id: '135c71078810af2',
      _name: '_Channel',
      _core: true,
      send: {
        params: [
          {
            name: 'message',
            type: 'message'
          }
        ]
      },
      $systemInstalled: {
        params: [
          {
            name: 'id',
            type: 'string',
            mandatory: true,
            default: ''
          }
        ]
      },
      $systemResolved: {
        params: [
          {
            name: 'id',
            type: 'string',
            mandatory: true,
            default: ''
          }
        ]
      },
      $systemUninstalled: {
        params: [
          {
            name: 'id',
            type: 'string',
            mandatory: true,
            default: ''
          }
        ]
      },
      $systemStarted: {
        params: [
          {
            name: 'id',
            type: 'string',
            mandatory: true,
            default: ''
          }
        ]
      },
      $systemStopped: {
        params: [
          {
            name: 'id',
            type: 'string',
            mandatory: true,
            default: ''
          }
        ]
      }
    },
    '158321dced1014a': {
      _name: '_ClassInfo',
      _core: true,
      model: {
        type: 'object',
        readOnly: true,
        mandatory: true,
        default: {}
      },
      property: {
        params: [
          {
            name: 'name',
            type: 'string'
          }
        ],
        result: 'object'
      },
      properties: {
        result: 'array'
      },
      link: {
        params: [
          {
            name: 'name',
            type: 'string'
          }
        ],
        result: 'object'
      },
      links: {
        result: 'array'
      },
      method: {
        params: [
          {
            name: 'name',
            type: 'string'
          }
        ],
        result: 'object'
      },
      methods: {
        result: 'array'
      },
      collection: {
        params: [
          {
            name: 'name',
            type: 'string'
          }
        ],
        result: 'object'
      },
      collections: {
        result: 'array'
      },
      event: {
        params: [
          {
            name: 'name',
            type: 'string'
          }
        ],
        result: 'object'
      },
      events: {
        result: 'array'
      },
      _id: '158321dced1014a',
      schema: {
        type: 'object',
        readOnly: true,
        mandatory: true,
        default: {}
      }
    },
    '123751cb591de26': {
      _id: '123751cb591de26',
      _name: '_Component',
      _core: true,
      on: {
        params: [
          {
            name: 'state',
            type: 'string'
          },
          {
            name: 'action',
            type: 'function'
          },
          {
            name: 'useCoreAPI',
            type: 'any',
            mandatory: false,
            default: false
          },
          {
            name: 'isCore',
            type: 'boolean',
            mandatory: false,
            default: false
          }
        ]
      },
      off: {
        params: [
          {
            name: 'state',
            type: 'string',
            mandatory: false
          },
          {
            name: 'behaviorId',
            type: 'string',
            mandatory: false
          }
        ]
      },
      require: {
        params: [
          {
            name: 'id',
            type: 'string'
          }
        ]
      },
      destroy: {
        params: []
      },
      classInfo: {
        result: '_ClassInfo'
      },
      init: {
        params: [
          {
            name: 'conf',
            type: 'object'
          }
        ]
      },
      error: {
        params: [
          {
            name: 'data',
            type: 'errorParam'
          }
        ]
      }
    },
    '18a51169d7112d4': {
      _name: '_Database',
      _core: true,
      collections: {
        result: 'object'
      },
      insert: {
        params: [
          {
            name: 'event',
            type: 'dbInsertEvent'
          }
        ]
      },
      update: {
        params: [
          {
            name: 'event',
            type: 'dbUpdateEvent'
          }
        ]
      },
      remove: {
        params: [
          {
            name: 'event',
            type: 'dbRemoveEvent'
          }
        ]
      },
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
      id: {
        type: 'string',
        readOnly: false,
        mandatory: false,
        default: ''
      },
      field: {
        type: 'string',
        readOnly: false,
        mandatory: false,
        default: ''
      },
      value: {
        type: 'any',
        readOnly: false,
        mandatory: false,
        default: ''
      },
      order: {
        type: 'number',
        readOnly: false,
        mandatory: false,
        default: 0
      },
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
      debug: {
        params: [
          {
            name: 'message',
            type: 'any'
          }
        ]
      },
      info: {
        params: [
          {
            name: 'message',
            type: 'any'
          }
        ]
      },
      warn: {
        params: [
          {
            name: 'message',
            type: 'any'
          }
        ]
      },
      error: {
        params: [
          {
            name: 'message',
            type: 'any'
          }
        ]
      }
    },
    '1d9b6139411aa91': {
      _name: '_Message',
      _core: true,
      event: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: ''
      },
      from: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: ''
      },
      data: {
        type: 'array',
        readOnly: false,
        mandatory: true,
        default: []
      },
      _id: '1d9b6139411aa91'
    },
    '1628c13c22152e6': {
      _name: '_Metamodel',
      _core: true,
      schema: {
        params: [
          {
            name: 'schema',
            type: 'object'
          }
        ],
        result: 'any'
      },
      model: {
        params: [
          {
            name: 'model',
            type: 'object'
          }
        ],
        result: 'any'
      },
      type: {
        params: [
          {
            name: 'type',
            type: 'object'
          }
        ],
        result: 'any'
      },
      create: {
        params: []
      },
      _id: '1628c13c22152e6'
    },
    '100b91ed2211b15': {
      _id: '100b91ed2211b15',
      _name: '_OSGi',
      install: {
        params: [
          {
            name: 'url',
            type: 'any',
            mandatory: true,
            default: ''
          },
          {
            name: 'async',
            type: 'boolean',
            mandatory: false,
            default: true
          }
        ],
        result: 'string'
      },
      uninstall: {
        params: [
          {
            name: 'id',
            type: 'string',
            mandatory: true,
            default: ''
          }
        ]
      },
      start: {
        params: [
          {
            name: 'id',
            type: 'string',
            mandatory: true,
            default: ''
          }
        ]
      },
      stop: {
        params: [
          {
            name: 'id',
            type: 'string',
            mandatory: true,
            default: ''
          }
        ]
      },
      status: {
        result: 'object'
      },
      _core: true,
      bundle: {
        result: 'string'
      }
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
        params: [
          {
            name: 'params',
            type: 'any',
            mandatory: false
          }
        ],
        result: 'object'
      },
      message: {
        params: [
          {
            name: 'msg',
            type: 'message',
            mandatory: true
          }
        ]
      },
      ready: {}
    },
    '177ac136891629f': {
      _name: '_State',
      _core: true,
      state: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: ''
      },
      value: {
        type: 'any',
        readOnly: false,
        mandatory: false,
        default: null
      },
      _id: '177ac136891629f'
    },
    '170521b88614387': {
      _name: '_System',
      _core: true,
      name: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: ''
      },
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
      types: {
        type: 'object',
        readOnly: false,
        mandatory: false,
        default: {}
      },
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
        "function uninstall(id) {\n  var search = {},\n    system = null,\n    behaviorId = '',\n    collection = '',\n    componentId = '',\n    length = 0,\n    i = 0,\n    coreComponents = ['admin', 'channel', 'db', 'logger', 'metamodel', 'runtime'];\n\n  search = $db._System.find({\n    '_id': id\n  });\n\n  if (search.length) {\n    system = search[0];\n    // remove behaviors\n    if (system.behaviors) {\n      for (behaviorId in system.behaviors) {\n        $db._Behavior.remove({\n          '_id': system.behaviors[behaviorId]._id\n        });\n      }\n    }\n    // remove components\n    if (system.components) {\n      for (collection in system.components) {\n        for (componentId in system.components[collection]) {\n          if (coreComponents.indexOf(componentId) === -1) {\n            $db[collection].remove({\n              '_id': componentId\n            });\n          }\n        }\n      }\n    }\n  }\n  if (this.require(id) && this.require(id).state) {\n    this.require(id).state('uninstalled');\n    channel.$systemUninstalled(id);\n  }\n}",
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
    css: {
      _id: 'h1d88311ac019211',
      name: 'css',
      type: 'string',
      core: true
    },
    date: {
      _id: 'c17cad1bc3d17752',
      name: 'date',
      type: 'object',
      core: true
    },
    json: {
      _id: 'e1d25a12e67127ed',
      name: 'json',
      type: 'object',
      core: true
    },
    dbInsertEvent: {
      _id: '148ef1e19810e6d',
      core: true,
      name: 'dbInsertEvent',
      type: 'object',
      schema: {
        collection: {
          type: 'string',
          mandatory: true,
          default: ''
        },
        document: {
          type: 'object',
          mandatory: true,
          default: {}
        }
      }
    },
    dbRemoveEvent: {
      _id: '1952e1ac4213f4a',
      name: 'dbRemoveEvent',
      type: 'object',
      core: true,
      schema: {
        collection: {
          type: 'string',
          mandatory: true,
          default: ''
        },
        id: {
          type: 'string',
          mandatory: true,
          default: ''
        }
      }
    },
    dbUpdateEvent: {
      _id: '1f5c41309711752',
      core: true,
      name: 'dbUpdateEvent',
      type: 'object',
      schema: {
        collection: {
          type: 'string',
          mandatory: true,
          default: ''
        },
        id: {
          type: 'string',
          mandatory: true,
          default: ''
        },
        field: {
          type: 'string',
          mandatory: true,
          default: ''
        },
        value: {
          type: 'any',
          mandatory: true,
          default: null
        }
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
        type: {
          type: ['string'],
          mandatory: true
        },
        readOnly: {
          type: 'boolean',
          mandatory: true
        },
        mandatory: {
          type: 'boolean',
          mandatory: true
        },
        default: {
          type: 'object',
          mandatory: true
        },
        description: {
          type: 'string',
          mandatory: false
        },
        label: {
          type: 'string',
          mandatory: false
        }
      },
      core: true
    },
    errorParam: {
      _id: 'e198761fc0b1ae8a',
      name: 'errorParam',
      type: 'object',
      schema: {
        message: {
          type: 'string',
          mandatory: true
        },
        error: {
          type: 'object',
          mandatory: true
        }
      },
      core: true
    },
    event: {
      _id: 'g1668d1de2d1ff6f',
      name: 'event',
      type: 'object',
      schema: {
        params: {
          type: ['parameter'],
          mandatory: false
        },
        description: {
          type: 'string',
          mandatory: false
        }
      },
      core: true
    },
    html: {
      _id: 'y161c21320b11acb',
      name: 'html',
      type: 'string',
      core: true
    },
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
        type: {
          type: 'string',
          mandatory: true
        },
        readOnly: {
          type: 'boolean',
          mandatory: true
        },
        mandatory: {
          type: 'boolean',
          mandatory: true
        },
        default: {
          type: '{type}',
          mandatory: true
        },
        description: {
          type: 'string',
          mandatory: false
        },
        label: {
          type: 'string',
          mandatory: false
        }
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
        event: {
          type: 'string',
          mandatory: true
        },
        from: {
          type: 'string',
          mandatory: false
        },
        data: {
          type: 'object',
          mandatory: true
        }
      },
      core: true
    },
    method: {
      _id: 'x1227218eed1f3e9',
      name: 'method',
      type: 'object',
      schema: {
        result: {
          type: 'string',
          mandatory: false
        },
        params: {
          type: ['parameter'],
          mandatory: false
        },
        description: {
          type: 'string',
          mandatory: false
        }
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
        description: {
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
        mandatory: {
          type: 'boolean',
          mandatory: false
        },
        default: {
          type: '{type}',
          mandatory: false
        }
      },
      core: true
    },
    property: {
      _id: 'a16a3a1ae051a55d',
      name: 'property',
      type: 'object',
      schema: {
        type: {
          type: 'string',
          mandatory: true
        },
        readOnly: {
          type: 'boolean',
          mandatory: true
        },
        mandatory: {
          type: 'boolean',
          mandatory: true
        },
        default: {
          type: '{type}',
          mandatory: true
        },
        description: {
          type: 'string',
          mandatory: false
        },
        label: {
          type: 'string',
          mandatory: false
        }
      },
      core: true
    },
    text: {
      _id: 'c136fc129a912f54',
      name: 'text',
      type: 'string',
      core: true
    }
  },
  components: {
    _Channel: {
      channel: {
        _id: 'channel'
      }
    },
    _Database: {
      db: {
        _id: 'db'
      }
    },
    _Logger: {
      logger: {
        _id: 'logger',
        level: 'warn'
      }
    },
    _Metamodel: {
      metamodel: {
        _id: 'metamodel'
      }
    },
    _Runtime: {
      runtime: {
        _id: 'runtime',
        version: '2.5.0'
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOTdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2grREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN0cUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2M0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHN5c3RlbVxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGNvbnRhaW5zIFN5c3RlbSBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyogUHVibGljIHByb3BlcnRpZXMgKi9cblxuLyoqXG4gKiBTeXN0ZW0gUnVudGltZSBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtfU3lzdGVtfSBzeXN0ZW1cbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSB7XG4gIG5hbWU6ICdzeXN0ZW0tcnVudGltZScsXG4gIG1hc3RlcjogZmFsc2UsXG4gIHZlcnNpb246ICcyLjUuMCcsXG4gIGRlc2NyaXB0aW9uOiAnU3lzdGVtIFJ1bnRpbWUnLFxuICBzY2hlbWFzOiB7XG4gICAgJzFhYzA3MTg1NjQxZmE5Zic6IHtcbiAgICAgIF9uYW1lOiAnX0JlaGF2aW9yJyxcbiAgICAgIF9pbmhlcml0OiBbJ19Db21wb25lbnQnXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgY29yZTogJ3Byb3BlcnR5JyxcbiAgICAgIGNvbXBvbmVudDogJ3Byb3BlcnR5JyxcbiAgICAgIGFjdGlvbjogJ3Byb3BlcnR5JyxcbiAgICAgIHN0YXRlOiAncHJvcGVydHknLFxuICAgICAgdXNlQ29yZUFQSTogJ3Byb3BlcnR5JyxcbiAgICAgIGNvbnRleHQ6ICdwcm9wZXJ0eScsXG4gICAgICBfaWQ6ICcxYWMwNzE4NTY0MWZhOWYnXG4gICAgfSxcbiAgICAnMTA0YWQxZjQ4NTE4Mzc2Jzoge1xuICAgICAgX2lkOiAnMTA0YWQxZjQ4NTE4Mzc2JyxcbiAgICAgIF9uYW1lOiAnX0NoYW5uZWwnLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBzZW5kOiAnZXZlbnQnLFxuICAgICAgJHN5c3RlbUluc3RhbGxlZDogJ2V2ZW50JyxcbiAgICAgICRzeXN0ZW1SZXNvbHZlZDogJ2V2ZW50JyxcbiAgICAgICRzeXN0ZW1TdGFydGVkOiAnZXZlbnQnLFxuICAgICAgJHN5c3RlbVN0b3BwZWQ6ICdldmVudCcsXG4gICAgICAkc3lzdGVtVW5pbnN0YWxsZWQ6ICdldmVudCdcbiAgICB9LFxuICAgICcxYzAwYjEzYTFiMWJjOTInOiB7XG4gICAgICBfbmFtZTogJ19DbGFzc0luZm8nLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBtb2RlbDogJ3Byb3BlcnR5JyxcbiAgICAgIHNjaGVtYTogJ3Byb3BlcnR5JyxcbiAgICAgIG1ldGhvZDogJ21ldGhvZCcsXG4gICAgICBtZXRob2RzOiAnbWV0aG9kJyxcbiAgICAgIHByb3BlcnR5OiAnbWV0aG9kJyxcbiAgICAgIHByb3BlcnRpZXM6ICdtZXRob2QnLFxuICAgICAgbGluazogJ21ldGhvZCcsXG4gICAgICBsaW5rczogJ21ldGhvZCcsXG4gICAgICBjb2xsZWN0aW9uczogJ21ldGhvZCcsXG4gICAgICBjb2xsZWN0aW9uOiAnbWV0aG9kJyxcbiAgICAgIGV2ZW50OiAnbWV0aG9kJyxcbiAgICAgIGV2ZW50czogJ21ldGhvZCcsXG4gICAgICBfaWQ6ICcxYzAwYjEzYTFiMWJjOTInXG4gICAgfSxcbiAgICAnMTExZGYxMWUyYjE5ZmRlJzoge1xuICAgICAgX2lkOiAnMTExZGYxMWUyYjE5ZmRlJyxcbiAgICAgIF9uYW1lOiAnX0NvbXBvbmVudCcsXG4gICAgICBfaW5oZXJpdDogW10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGNsYXNzSW5mbzogJ21ldGhvZCcsXG4gICAgICBvbjogJ21ldGhvZCcsXG4gICAgICBvZmY6ICdtZXRob2QnLFxuICAgICAgcmVxdWlyZTogJ21ldGhvZCcsXG4gICAgICBkZXN0cm95OiAnbWV0aG9kJyxcbiAgICAgIGluaXQ6ICdtZXRob2QnLFxuICAgICAgZXJyb3I6ICdldmVudCdcbiAgICB9LFxuICAgICcxNzIzNTE2YTMwMTMyYWMnOiB7XG4gICAgICBfbmFtZTogJ19EYXRhYmFzZScsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGNvbGxlY3Rpb25zOiAnbWV0aG9kJyxcbiAgICAgIGluc2VydDogJ2V2ZW50JyxcbiAgICAgIHVwZGF0ZTogJ2V2ZW50JyxcbiAgICAgIHJlbW92ZTogJ2V2ZW50JyxcbiAgICAgIF9pZDogJzE3MjM1MTZhMzAxMzJhYydcbiAgICB9LFxuICAgIGYxYTEwZDEwNjdkMWIyM2E6IHtcbiAgICAgIF9pZDogJ2YxYTEwZDEwNjdkMWIyM2EnLFxuICAgICAgX25hbWU6ICdfTG9nJyxcbiAgICAgIF9pbmhlcml0OiBbJ19Db21wb25lbnQnXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgYWN0aW9uOiAncHJvcGVydHknLFxuICAgICAgY29sbGVjdGlvbjogJ3Byb3BlcnR5JyxcbiAgICAgIGlkOiAncHJvcGVydHknLFxuICAgICAgZmllbGQ6ICdwcm9wZXJ0eScsXG4gICAgICB2YWx1ZTogJ3Byb3BlcnR5JyxcbiAgICAgIG9yZGVyOiAncHJvcGVydHknXG4gICAgfSxcbiAgICAnMTI2OGYxZGRkZDFmZWE3Jzoge1xuICAgICAgX25hbWU6ICdfTG9nZ2VyJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgbGV2ZWw6ICdwcm9wZXJ0eScsXG4gICAgICBkZWJ1ZzogJ21ldGhvZCcsXG4gICAgICBpbmZvOiAnbWV0aG9kJyxcbiAgICAgIHdhcm46ICdtZXRob2QnLFxuICAgICAgZXJyb3I6ICdtZXRob2QnLFxuICAgICAgX2lkOiAnMTI2OGYxZGRkZDFmZWE3J1xuICAgIH0sXG4gICAgJzE0Y2FhMWM0NjQxNGVlMSc6IHtcbiAgICAgIF9uYW1lOiAnX01lc3NhZ2UnLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBldmVudDogJ3Byb3BlcnR5JyxcbiAgICAgIGZyb206ICdwcm9wZXJ0eScsXG4gICAgICBkYXRhOiAncHJvcGVydHknLFxuICAgICAgX2lkOiAnMTRjYWExYzQ2NDE0ZWUxJ1xuICAgIH0sXG4gICAgJzE5M2YxMTY2ZWIxNjYwOSc6IHtcbiAgICAgIF9uYW1lOiAnX01ldGFtb2RlbCcsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHNjaGVtYTogJ21ldGhvZCcsXG4gICAgICBtb2RlbDogJ21ldGhvZCcsXG4gICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgIGNyZWF0ZTogJ21ldGhvZCcsXG4gICAgICBfaWQ6ICcxOTNmMTE2NmViMTY2MDknXG4gICAgfSxcbiAgICAnMTU3OTMxZjdhMzFiNjFkJzoge1xuICAgICAgX2lkOiAnMTU3OTMxZjdhMzFiNjFkJyxcbiAgICAgIF9uYW1lOiAnX09TR2knLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBpbnN0YWxsOiAnbWV0aG9kJyxcbiAgICAgIHVuaW5zdGFsbDogJ21ldGhvZCcsXG4gICAgICBzdGFydDogJ21ldGhvZCcsXG4gICAgICBzdG9wOiAnbWV0aG9kJyxcbiAgICAgIHN0YXR1czogJ21ldGhvZCcsXG4gICAgICBidW5kbGU6ICdtZXRob2QnXG4gICAgfSxcbiAgICAnMTJlMjExZDRjZDEyMGE2Jzoge1xuICAgICAgX2lkOiAnMTJlMjExZDRjZDEyMGE2JyxcbiAgICAgIF9uYW1lOiAnX1J1bnRpbWUnLFxuICAgICAgX2luaGVyaXQ6IFsnX09TR2knXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgdmVyc2lvbjogJ3Byb3BlcnR5JyxcbiAgICAgIHN5c3RlbTogJ21ldGhvZCcsXG4gICAgICBtZXNzYWdlOiAnbWV0aG9kJyxcbiAgICAgIHJlYWR5OiAnZXZlbnQnXG4gICAgfSxcbiAgICAnMTU4NzExZDZmMjE1ZTRiJzoge1xuICAgICAgX25hbWU6ICdfU3RhdGUnLFxuICAgICAgX2luaGVyaXQ6IFtdLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBfY2xhc3M6IGZhbHNlLFxuICAgICAgc3RhdGU6ICdwcm9wZXJ0eScsXG4gICAgICB2YWx1ZTogJ3Byb3BlcnR5JyxcbiAgICAgIF9pZDogJzE1ODcxMWQ2ZjIxNWU0YidcbiAgICB9LFxuICAgICcxY2I3NjFmYTQ1MTBkY2EnOiB7XG4gICAgICBfaWQ6ICcxY2I3NjFmYTQ1MTBkY2EnLFxuICAgICAgX25hbWU6ICdfU3lzdGVtJyxcbiAgICAgIF9pbmhlcml0OiBbJ19TeXN0ZW1PU0dpJ10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eScsXG4gICAgICBtYXN0ZXI6ICdwcm9wZXJ0eScsXG4gICAgICB2ZXJzaW9uOiAncHJvcGVydHknLFxuICAgICAgZGVzY3JpcHRpb246ICdwcm9wZXJ0eScsXG4gICAgICBzY2hlbWFzOiAncHJvcGVydHknLFxuICAgICAgbW9kZWxzOiAncHJvcGVydHknLFxuICAgICAgYmVoYXZpb3JzOiAncHJvcGVydHknLFxuICAgICAgdHlwZXM6ICdwcm9wZXJ0eScsXG4gICAgICBjb21wb25lbnRzOiAncHJvcGVydHknXG4gICAgfSxcbiAgICAnMTQ1ZmUxMGM3NTE0Mjk4Jzoge1xuICAgICAgX2lkOiAnMTQ1ZmUxMGM3NTE0Mjk4JyxcbiAgICAgIF9uYW1lOiAnX1N5c3RlbU9TR2knLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBzdGF0ZTogJ3Byb3BlcnR5JyxcbiAgICAgIGxvY2F0aW9uOiAncHJvcGVydHknLFxuICAgICAgc3RhcnQ6ICdtZXRob2QnLFxuICAgICAgc3RvcDogJ21ldGhvZCdcbiAgICB9XG4gIH0sXG4gIG1vZGVsczoge1xuICAgICcxNjY5NzFmZDlkMTA3ZmQnOiB7XG4gICAgICBfbmFtZTogJ19CZWhhdmlvcicsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfSxcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgdXNlQ29yZUFQSToge1xuICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIF9pZDogJzE2Njk3MWZkOWQxMDdmZCdcbiAgICB9LFxuICAgICcxMzVjNzEwNzg4MTBhZjInOiB7XG4gICAgICBfaWQ6ICcxMzVjNzEwNzg4MTBhZjInLFxuICAgICAgX25hbWU6ICdfQ2hhbm5lbCcsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHNlbmQ6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxuICAgICAgICAgICAgdHlwZTogJ21lc3NhZ2UnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJHN5c3RlbUluc3RhbGxlZDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICRzeXN0ZW1SZXNvbHZlZDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICRzeXN0ZW1Vbmluc3RhbGxlZDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICRzeXN0ZW1TdGFydGVkOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJHN5c3RlbVN0b3BwZWQ6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgICcxNTgzMjFkY2VkMTAxNGEnOiB7XG4gICAgICBfbmFtZTogJ19DbGFzc0luZm8nLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBtb2RlbDoge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0eToge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmVzdWx0OiAnYXJyYXknXG4gICAgICB9LFxuICAgICAgbGluazoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIGxpbmtzOiB7XG4gICAgICAgIHJlc3VsdDogJ2FycmF5J1xuICAgICAgfSxcbiAgICAgIG1ldGhvZDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVzdWx0OiAnYXJyYXknXG4gICAgICB9LFxuICAgICAgY29sbGVjdGlvbjoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIGNvbGxlY3Rpb25zOiB7XG4gICAgICAgIHJlc3VsdDogJ2FycmF5J1xuICAgICAgfSxcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZXN1bHQ6ICdvYmplY3QnXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIHJlc3VsdDogJ2FycmF5J1xuICAgICAgfSxcbiAgICAgIF9pZDogJzE1ODMyMWRjZWQxMDE0YScsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICB9XG4gICAgfSxcbiAgICAnMTIzNzUxY2I1OTFkZTI2Jzoge1xuICAgICAgX2lkOiAnMTIzNzUxY2I1OTFkZTI2JyxcbiAgICAgIF9uYW1lOiAnX0NvbXBvbmVudCcsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2FjdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnZnVuY3Rpb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndXNlQ29yZUFQSScsXG4gICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lzQ29yZScsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBvZmY6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3N0YXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2JlaGF2aW9ySWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgcmVxdWlyZToge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiB7XG4gICAgICAgIHBhcmFtczogW11cbiAgICAgIH0sXG4gICAgICBjbGFzc0luZm86IHtcbiAgICAgICAgcmVzdWx0OiAnX0NsYXNzSW5mbydcbiAgICAgIH0sXG4gICAgICBpbml0OiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb25mJyxcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2RhdGEnLFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yUGFyYW0nXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICAnMThhNTExNjlkNzExMmQ0Jzoge1xuICAgICAgX25hbWU6ICdfRGF0YWJhc2UnLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBjb2xsZWN0aW9uczoge1xuICAgICAgICByZXN1bHQ6ICdvYmplY3QnXG4gICAgICB9LFxuICAgICAgaW5zZXJ0OiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdldmVudCcsXG4gICAgICAgICAgICB0eXBlOiAnZGJJbnNlcnRFdmVudCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2V2ZW50JyxcbiAgICAgICAgICAgIHR5cGU6ICdkYlVwZGF0ZUV2ZW50J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHJlbW92ZToge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZXZlbnQnLFxuICAgICAgICAgICAgdHlwZTogJ2RiUmVtb3ZlRXZlbnQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgX2lkOiAnMThhNTExNjlkNzExMmQ0J1xuICAgIH0sXG4gICAgbzFlMWUwMWU2YjQxY2VjMzoge1xuICAgICAgX2lkOiAnbzFlMWUwMWU2YjQxY2VjMycsXG4gICAgICBfbmFtZTogJ19Mb2cnLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdkYkFjdGlvbicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogJ2luc2VydCdcbiAgICAgIH0sXG4gICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICBmaWVsZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgb3JkZXI6IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogMFxuICAgICAgfSxcbiAgICAgIF9jb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTZiOWQxYWMyMjE2ZmZlJzoge1xuICAgICAgX2lkOiAnMTZiOWQxYWMyMjE2ZmZlJyxcbiAgICAgIF9uYW1lOiAnX0xvZ2dlcicsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGxldmVsOiB7XG4gICAgICAgIHR5cGU6ICdsb2cnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICd3YXJuJ1xuICAgICAgfSxcbiAgICAgIGRlYnVnOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHR5cGU6ICdhbnknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaW5mbzoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICAgICAgICB0eXBlOiAnYW55J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHdhcm46IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxuICAgICAgICAgICAgdHlwZTogJ2FueSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBlcnJvcjoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICAgICAgICB0eXBlOiAnYW55J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgJzFkOWI2MTM5NDExYWE5MSc6IHtcbiAgICAgIF9uYW1lOiAnX01lc3NhZ2UnLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgZnJvbToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBfaWQ6ICcxZDliNjEzOTQxMWFhOTEnXG4gICAgfSxcbiAgICAnMTYyOGMxM2MyMjE1MmU2Jzoge1xuICAgICAgX25hbWU6ICdfTWV0YW1vZGVsJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzY2hlbWEnLFxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlc3VsdDogJ2FueSdcbiAgICAgIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbW9kZWwnLFxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlc3VsdDogJ2FueSdcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZXN1bHQ6ICdhbnknXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHBhcmFtczogW11cbiAgICAgIH0sXG4gICAgICBfaWQ6ICcxNjI4YzEzYzIyMTUyZTYnXG4gICAgfSxcbiAgICAnMTAwYjkxZWQyMjExYjE1Jzoge1xuICAgICAgX2lkOiAnMTAwYjkxZWQyMjExYjE1JyxcbiAgICAgIF9uYW1lOiAnX09TR2knLFxuICAgICAgaW5zdGFsbDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndXJsJyxcbiAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdhc3luYycsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnc3RyaW5nJ1xuICAgICAgfSxcbiAgICAgIHVuaW5zdGFsbDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgc3RvcDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHN0YXR1czoge1xuICAgICAgICByZXN1bHQ6ICdvYmplY3QnXG4gICAgICB9LFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBidW5kbGU6IHtcbiAgICAgICAgcmVzdWx0OiAnc3RyaW5nJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJzE0YzdjMTA1YjMxYTE2MCc6IHtcbiAgICAgIF9pZDogJzE0YzdjMTA1YjMxYTE2MCcsXG4gICAgICBfbmFtZTogJ19SdW50aW1lJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgdmVyc2lvbjoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJzAuMC4wJ1xuICAgICAgfSxcbiAgICAgIHN5c3RlbToge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21zZycsXG4gICAgICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICByZWFkeToge31cbiAgICB9LFxuICAgICcxNzdhYzEzNjg5MTYyOWYnOiB7XG4gICAgICBfbmFtZTogJ19TdGF0ZScsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9LFxuICAgICAgX2lkOiAnMTc3YWMxMzY4OTE2MjlmJ1xuICAgIH0sXG4gICAgJzE3MDUyMWI4ODYxNDM4Nyc6IHtcbiAgICAgIF9uYW1lOiAnX1N5c3RlbScsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIG1hc3Rlcjoge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB2ZXJzaW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcwLjAuMSdcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIHNjaGVtYXM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBtb2RlbHM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBiZWhhdmlvcnM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICB0eXBlczoge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBfaWQ6ICcxNzA1MjFiODg2MTQzODcnXG4gICAgfSxcbiAgICAnMWIyODExYjA5MjE0M2Y1Jzoge1xuICAgICAgX2lkOiAnMWIyODExYjA5MjE0M2Y1JyxcbiAgICAgIF9uYW1lOiAnX1N5c3RlbU9TR2knLFxuICAgICAgc3RhcnQ6IHt9LFxuICAgICAgc3RvcDoge30sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBiZWhhdmlvcnM6IHtcbiAgICAnMTJlNDkxODU5YzEzOTE4Jzoge1xuICAgICAgX2lkOiAnMTJlNDkxODU5YzEzOTE4JyxcbiAgICAgIGNvbXBvbmVudDogJ19DaGFubmVsJyxcbiAgICAgIHN0YXRlOiAnJHN5c3RlbVN0YXJ0ZWQnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uICRzeXN0ZW1TdGFydGVkKGlkKSB7IFxcbiAgdmFyIHN5c3RlbXMgPSBudWxsO1xcbiAgICBcXG4gIGlmIChpZCAhPT0gJ2U4OWM2MTdiNmIxNWQyNCcpIHtcXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgICAgIFxcbiAgICAgIGlmICgkc3RhdGUuZ2V0KCdydW50aW1lJykgJiYgJHN0YXRlLmdldCgncnVudGltZScpLnN0YXRlID09PSAncmVhZHknKSB7ICAgIFxcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggKyAxID09PSAkZGIuX1N5c3RlbS5jb3VudCgpKSB7XFxuICAgICAgICAgICRjb21wb25lbnQuZ2V0KCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFlOTAyMWJkNGUxYmM2ZSc6IHtcbiAgICAgIF9pZDogJzFlOTAyMWJkNGUxYmM2ZScsXG4gICAgICBjb21wb25lbnQ6ICdfQ2hhbm5lbCcsXG4gICAgICBzdGF0ZTogJyRzeXN0ZW1JbnN0YWxsZWQnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uICRzeXN0ZW1JbnN0YWxsZWQoaWQpIHtcXG4gIHZhciBzeXN0ZW1zID0gbnVsbCxcXG4gICAgZGVwZW5kZW5jaWVzID0gW10sXFxuICAgIG1hc3RlciA9IFtdLFxcbiAgICBjYW5TdGFydCA9IHRydWU7XFxuXFxuICBpZiAoaWQgIT09ICdlODljNjE3YjZiMTVkMjQnKSB7XFxuICAgIC8vIGlmIGFsbCBzeXN0ZW1zIGFyZSBpbnN0YWxsZWRcXG4gICAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe30pO1xcblxcbiAgICBzeXN0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHN5c3RlbSkge1xcbiAgICAgIHZhciBzeXMgPSB0aGlzLnJlcXVpcmUoc3lzdGVtLl9pZCk7XFxuICAgICAgaWYgKHN5cyAmJiBzeXMuc3RhdGUgJiYgc3lzLnN0YXRlKCkgPT09ICdub25lJykge1xcbiAgICAgICAgY2FuU3RhcnQgPSBmYWxzZTtcXG4gICAgICB9XFxuICAgIH0uYmluZCh0aGlzKSk7XFxuXFxuICAgIC8vIHN0YXJ0IGFsbCB0aGUgc3lzdGVtc1xcbiAgICBpZiAoY2FuU3RhcnQpIHtcXG4gICAgICBkZXBlbmRlbmNpZXMgPSAkZGIuX1N5c3RlbS5maW5kKHtcXG4gICAgICAgICdtYXN0ZXInOiBmYWxzZVxcbiAgICAgIH0pO1xcblxcbiAgICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcXG4gICAgICAgIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoZGVwLl9pZCk7XFxuICAgICAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICAgICAgICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcpIHtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgICAgICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChkZXAuX2lkKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcblxcbiAgICAgIG1hc3RlciA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgICB9KTtcXG5cXG4gICAgICBtYXN0ZXIuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XFxuICAgICAgICB2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGRlcC5faWQpO1xcbiAgICAgICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHN5c3RlbSAmJiBzeXN0ZW0uc3RhdGUgJiYgc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcpIHtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgICAgICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChkZXAuX2lkKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxNTUxNDFlNDAzMTJjZDgnOiB7XG4gICAgICBfaWQ6ICcxNTUxNDFlNDAzMTJjZDgnLFxuICAgICAgY29tcG9uZW50OiAnX0NsYXNzSW5mbycsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICB9XFxuXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxZjY5NDFhMGMwMTJjMWYnOiB7XG4gICAgICBfaWQ6ICcxZjY5NDFhMGMwMTJjMWYnLFxuICAgICAgY29tcG9uZW50OiAnX0NsYXNzSW5mbycsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb25zJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBjb2xsZWN0aW9ucyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnY29sbGVjdGlvbicpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWVmNzExYjQxNzFjODQ5Jzoge1xuICAgICAgX2lkOiAnMWVmNzExYjQxNzFjODQ5JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdldmVudCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gZXZlbnQobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcblxcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdldmVudCcpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWJhZTUxYjZlZDFkMjVjJzoge1xuICAgICAgX2lkOiAnMWJhZTUxYjZlZDFkMjVjJyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdldmVudHMnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGV2ZW50cyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnZXZlbnQnKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzE5YWMyMTI1MjIxNTI4Yic6IHtcbiAgICAgIF9pZDogJzE5YWMyMTI1MjIxNTI4YicsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbGluaycsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gbGluayhuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuXFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ2xpbmsnKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzE3ZWQyMWRmYzAxYjhlOCc6IHtcbiAgICAgIF9pZDogJzE3ZWQyMWRmYzAxYjhlOCcsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbGlua3MnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGxpbmtzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdsaW5rJykge1xcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICB9XFxuICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzExY2UzMThhNTYxYWM2MSc6IHtcbiAgICAgIF9pZDogJzExY2UzMThhNTYxYWM2MScsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbWV0aG9kJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBtZXRob2QobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdtZXRob2QnKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG4gIFxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTJmZjIxOTBhMDE4MDQ2Jzoge1xuICAgICAgX2lkOiAnMTJmZjIxOTBhMDE4MDQ2JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdtZXRob2RzJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBtZXRob2RzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdtZXRob2QnKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzEwMjhkMTY4MWUxZmQ1OCc6IHtcbiAgICAgIF9pZDogJzEwMjhkMTY4MWUxZmQ1OCcsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAncHJvcGVydGllcycsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gcHJvcGVydGllcyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAncHJvcGVydHknKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH0gcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMThlZWIxMGM1MzE5MzY4Jzoge1xuICAgICAgX2lkOiAnMThlZWIxMGM1MzE5MzY4JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdwcm9wZXJ0eScsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gcHJvcGVydHkobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcblxcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdwcm9wZXJ0eScpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWJhNzIxMjAxMTE0YjZiJzoge1xuICAgICAgX2lkOiAnMWJhNzIxMjAxMTE0YjZiJyxcbiAgICAgIGNvbXBvbmVudDogJ19Db21wb25lbnQnLFxuICAgICAgc3RhdGU6ICdkZXN0cm95JyxcbiAgICAgIGFjdGlvbjogJ2Z1bmN0aW9uIGRlc3Ryb3koKSB7XFxuICAkY29tcG9uZW50LmRlc3Ryb3kodGhpcy5pZCgpKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICAnMTU0ODYxODZmNDFhNDhjJzoge1xuICAgICAgX2lkOiAnMTU0ODYxODZmNDFhNDhjJyxcbiAgICAgIGNvbXBvbmVudDogJ19Db21wb25lbnQnLFxuICAgICAgc3RhdGU6ICdvZmYnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICAnZnVuY3Rpb24gb2ZmKHN0YXRlLCBiZWhhdmlvcklkKSB7XFxuICB2YXIgYXJncyA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbnVtSW5qZWN0ZWRQYXJhbXMgPSA4LFxcbiAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xcblxcbiAgaWYgKCRoZWxwZXIuaXNPbk5vZGUoKSkge1xcbiAgICBudW1JbmplY3RlZFBhcmFtcyA9IG51bUluamVjdGVkUGFyYW1zICsxO1xcbiAgfVxcblxcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIG51bUluamVjdGVkUGFyYW1zOyBpKyspIHtcXG4gICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XFxuICB9XFxuXFxuICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcXG4gICAgXCJjb21wb25lbnRcIjogdGhpcyxcXG4gICAgXCJtZXRob2ROYW1lXCI6IFwib2ZmXCIsXFxuICAgIFwiYXJnc1wiOiBhcmdzXFxuICB9KSkge1xcblxcbiAgICBpZiAoc3RhdGUgfHwgYmVoYXZpb3JJZCkge1xcbiAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSkge1xcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XFxuICAgICAgICAgIFwiYmVoYXZpb3JJZFwiOiBiZWhhdmlvcklkLFxcbiAgICAgICAgICBcImNvbXBvbmVudElkXCI6IHRoaXMuaWQoKSxcXG4gICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxcbiAgICAgICAgfSk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMucmVxdWlyZShcXCdsb2dnZXJcXCcpLndhcm4oXCJpbnZva2UgXFxcXFxcJ29mZlxcXFxcXCcgbWV0aG9kIG9mIGNvbXBvbmVudCBcXCdcIiArIHRoaXMuaWQoKSArIFwiXFwnIHdpdGggYW4gaW52YWxpZCBzdGF0ZSBcXCdcIiArIHN0YXRlICsgXCJcXCdcIik7XFxuICAgICAgfVxcbiAgICB9IGVsc2Uge1xcbiAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgXCJjb21wb25lbnRJZFwiOiB0aGlzLmlkKClcXG4gICAgICB9KTtcXG4gICAgfVxcbiAgfVxcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxZGEwYTE3ODc4MTA0YzMnOiB7XG4gICAgICBfaWQ6ICcxZGEwYTE3ODc4MTA0YzMnLFxuICAgICAgY29tcG9uZW50OiAnX0NvbXBvbmVudCcsXG4gICAgICBzdGF0ZTogJ3JlcXVpcmUnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gcmVxdWlyZShpZCkge1xcbiAgcmV0dXJuICRjb21wb25lbnQuZ2V0KGlkKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICBkMTUyNjMxYzM1ODEzZjJlOiB7XG4gICAgICBfaWQ6ICdkMTUyNjMxYzM1ODEzZjJlJyxcbiAgICAgIGNvbXBvbmVudDogJ19Db21wb25lbnQnLFxuICAgICAgc3RhdGU6ICdjbGFzc0luZm8nLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGNsYXNzSW5mbygpIHsgXFxuXFx0Y29uc3QgY2xhc3NOYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xcblxcdGxldCByZXN1bHQ7XFxuXFx0XFxuXFx0aWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xcblxcdCAgcmVzdWx0ID0gdGhpcy5yZXF1aXJlKGNsYXNzTmFtZSArICdJbmZvJyk7XFxuXFx0fVxcblxcdFxcblxcdHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogZmFsc2UsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWE1MTExZDE3YTE4MDBjJzoge1xuICAgICAgX2lkOiAnMWE1MTExZDE3YTE4MDBjJyxcbiAgICAgIGNvbXBvbmVudDogJ19EYXRhYmFzZScsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb25zJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBjb2xsZWN0aW9ucygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJztcXG5cXG4gIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gJGRiLnN0b3JlKSB7XFxuICAgIGlmICgkZGIuc3RvcmUuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpKSB7XFxuICAgICAgcmVzdWx0W2NvbGxlY3Rpb25OYW1lXSA9ICRkYltjb2xsZWN0aW9uTmFtZV07XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxZDk5MzEwOGZhMThlZjInOiB7XG4gICAgICBfaWQ6ICcxZDk5MzEwOGZhMThlZjInLFxuICAgICAgY29tcG9uZW50OiAnX0xvZ2dlcicsXG4gICAgICBzdGF0ZTogJ2RlYnVnJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUubG9nKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxuICB9XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFhMzdhMTg4ZTExZmU3Myc6IHtcbiAgICAgIF9pZDogJzFhMzdhMTg4ZTExZmU3MycsXG4gICAgICBjb21wb25lbnQ6ICdfTG9nZ2VyJyxcbiAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcXG4gIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWVkZDIxZTEyYTE2NTM0Jzoge1xuICAgICAgX2lkOiAnMWVkZDIxZTEyYTE2NTM0JyxcbiAgICAgIGNvbXBvbmVudDogJ19Mb2dnZXInLFxuICAgICAgc3RhdGU6ICdpbmZvJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHtcXG4gIGlmICh0aGlzLmxldmVsKCkgPT09ICdpbmZvJyB8fCB0aGlzLmxldmVsKCkgPT09ICdkZWJ1ZycpIHtcXG4gICAgY29uc29sZS5pbmZvKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxuICB9XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzE0MWYyMTQzZDMxMjJhNCc6IHtcbiAgICAgIF9pZDogJzE0MWYyMTQzZDMxMjJhNCcsXG4gICAgICBjb21wb25lbnQ6ICdfTG9nZ2VyJyxcbiAgICAgIHN0YXRlOiAnbGV2ZWwnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gbGV2ZWwodmFsKSB7XFxuICAkbG9nLmxldmVsKHZhbCk7XFxufScsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZVxuICAgIH0sXG4gICAgJzE5MjQwMWJhYjIxMzA0ZSc6IHtcbiAgICAgIF9pZDogJzE5MjQwMWJhYjIxMzA0ZScsXG4gICAgICBjb21wb25lbnQ6ICdfTG9nZ2VyJyxcbiAgICAgIHN0YXRlOiAnd2FybicsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnd2FybicgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgfVxcbn1cIixcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxMWZjNzE1ZTJmMWEzMWUnOiB7XG4gICAgICBfaWQ6ICcxMWZjNzE1ZTJmMWEzMWUnLFxuICAgICAgY29tcG9uZW50OiAnX01ldGFtb2RlbCcsXG4gICAgICBzdGF0ZTogJ2NyZWF0ZScsXG4gICAgICBhY3Rpb246ICdmdW5jdGlvbiBjcmVhdGUoKSB7XFxuICAkbWV0YW1vZGVsLmNyZWF0ZSgpO1xcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxMjMyZjFmMTA3MTQyY2YnOiB7XG4gICAgICBfaWQ6ICcxMjMyZjFmMTA3MTQyY2YnLFxuICAgICAgY29tcG9uZW50OiAnX01ldGFtb2RlbCcsXG4gICAgICBzdGF0ZTogJ21vZGVsJyxcbiAgICAgIGFjdGlvbjogJ2Z1bmN0aW9uIG1vZGVsKG1vZGVsKSB7XFxuICByZXR1cm4gJG1ldGFtb2RlbC5tb2RlbChtb2RlbCk7XFxufScsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZVxuICAgIH0sXG4gICAgJzEzNjU0MTJmNjkxNTNkMic6IHtcbiAgICAgIF9pZDogJzEzNjU0MTJmNjkxNTNkMicsXG4gICAgICBjb21wb25lbnQ6ICdfTWV0YW1vZGVsJyxcbiAgICAgIHN0YXRlOiAnc2NoZW1hJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgJ2Z1bmN0aW9uIHNjaGVtYShzY2hlbWEpIHtcXG4gIHJldHVybiAkbWV0YW1vZGVsLnNjaGVtYShzY2hlbWEpO1xcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxOTRkYjE0N2ZlMTYxYTInOiB7XG4gICAgICBfaWQ6ICcxOTRkYjE0N2ZlMTYxYTInLFxuICAgICAgY29tcG9uZW50OiAnX01ldGFtb2RlbCcsXG4gICAgICBzdGF0ZTogJ3R5cGUnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gdHlwZSh0eXBlKSB7XFxuICByZXR1cm4gJG1ldGFtb2RlbC50eXBlKHR5cGUpO1xcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxZWY5NTFmMTQxMWI4OTUnOiB7XG4gICAgICBfaWQ6ICcxZWY5NTFmMTQxMWI4OTUnLFxuICAgICAgY29tcG9uZW50OiAnX09TR2knLFxuICAgICAgc3RhdGU6ICdpbnN0YWxsJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBpbnN0YWxsKHVybCwgYXN5bmMpIHtcXG4gIHZhciBpbXBvcnRlZFN5c3RlbSA9IG51bGwsXFxuICAgIHN5c3RlbSA9IHt9LFxcbiAgICBzeXN0ZW1JZCA9ICcnLFxcbiAgICBjYWxsYmFja0xvYWQgPSBudWxsLFxcbiAgICB4aHIgPSBudWxsLFxcbiAgICByZXN1bHQgPSAnJyxcXG4gICAgY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XFxuXFxuICBpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcXG4gICAgaW1wb3J0ZWRTeXN0ZW0gPSB1cmw7XFxuICB9IGVsc2Uge1xcbiAgICBpZiAodXJsLmluZGV4T2YoJ3snKSA9PT0gMCkge1xcbiAgICAgIGltcG9ydGVkU3lzdGVtID0gSlNPTi5wYXJzZSh1cmwpO1xcbiAgICB9XFxuICB9XFxuXFxuICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHtcXG4gICAgc3lzdGVtSWQgPSAkZGIuaW1wb3J0U3lzdGVtKGltcG9ydGVkU3lzdGVtKTtcXG4gICAgaWYgKHN5c3RlbUlkKSB7XFxuICAgICAgc3lzdGVtID0gdGhpcy5yZXF1aXJlKHN5c3RlbUlkKTtcXG5cXG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcXG4gICAgICAgIHN5c3RlbS5sb2NhdGlvbih1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW0uc3RhdGUoJ2luc3RhbGxlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXN0ZW1JZCk7XFxuICAgICAgc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5c3RlbUlkKTtcXG5cXG4gICAgICByZXN1bHQgPSBzeXN0ZW1JZDtcXG4gICAgfVxcbiAgfSBlbHNlIHtcXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XFxuICAgICAgaWYgKHVybC5pbmRleE9mKCcuanNvbicpICE9PSAtMSkge1xcbiAgICAgICAgc3lzdGVtID0gcmVxdWlyZShnbG9iYWwucHJvY2Vzcy5lbnYuUFdEICsgJy8nICsgdXJsKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgc3lzdGVtID0gcmVxdWlyZSh1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW1JZCA9ICRkYi5pbXBvcnRTeXN0ZW0oc3lzdGVtKTtcXG4gICAgICBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoc3lzdGVtSWQpO1xcblxcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xcbiAgICAgICAgc3lzdGVtLmxvY2F0aW9uKHVybCk7XFxuICAgICAgfVxcbiAgICAgIHN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5c3RlbUlkKTtcXG4gICAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3lzdGVtSWQpO1xcblxcbiAgICAgIHJlc3VsdCA9IHN5c3RlbUlkO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xcbiAgICAgIGNhbGxiYWNrTG9hZCA9IGZ1bmN0aW9uIGNhbGxiYWNrTG9hZChzeXN0ZW0sIHVybCkge1xcbiAgICAgICAgdmFyIHN5c0lkID0gJGRiLmltcG9ydFN5c3RlbShzeXN0ZW0pLFxcbiAgICAgICAgICBzeXMgPSAkY29tcG9uZW50LmdldChzeXNJZCksXFxuICAgICAgICAgIGNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgICAgIHN5cy5sb2NhdGlvbih1cmwpO1xcbiAgICAgICAgfVxcbiAgICAgICAgc3lzLnN0YXRlKCdpbnN0YWxsZWQnKTtcXG4gICAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXNJZCk7XFxuICAgICAgICBzeXMuc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXNJZCk7XFxuXFxuICAgICAgICByZXN1bHQgPSBzeXNJZDtcXG4gICAgICB9O1xcblxcbiAgICAgIGlmIChhc3luYykge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDApIHtcXG4gICAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAwKSB7XFxuICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgIHVzZUNvcmVBUEk6IHRydWUsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTRjMTUxN2I3MTFjYjc4Jzoge1xuICAgICAgX2lkOiAnMTRjMTUxN2I3MTFjYjc4JyxcbiAgICAgIGNvbXBvbmVudDogJ19PU0dpJyxcbiAgICAgIHN0YXRlOiAndW5pbnN0YWxsJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiB1bmluc3RhbGwoaWQpIHtcXG4gIHZhciBzZWFyY2ggPSB7fSxcXG4gICAgc3lzdGVtID0gbnVsbCxcXG4gICAgYmVoYXZpb3JJZCA9ICcnLFxcbiAgICBjb2xsZWN0aW9uID0gJycsXFxuICAgIGNvbXBvbmVudElkID0gJycsXFxuICAgIGxlbmd0aCA9IDAsXFxuICAgIGkgPSAwLFxcbiAgICBjb3JlQ29tcG9uZW50cyA9IFsnYWRtaW4nLCAnY2hhbm5lbCcsICdkYicsICdsb2dnZXInLCAnbWV0YW1vZGVsJywgJ3J1bnRpbWUnXTtcXG5cXG4gIHNlYXJjaCA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAnX2lkJzogaWRcXG4gIH0pO1xcblxcbiAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgc3lzdGVtID0gc2VhcmNoWzBdO1xcbiAgICAvLyByZW1vdmUgYmVoYXZpb3JzXFxuICAgIGlmIChzeXN0ZW0uYmVoYXZpb3JzKSB7XFxuICAgICAgZm9yIChiZWhhdmlvcklkIGluIHN5c3RlbS5iZWhhdmlvcnMpIHtcXG4gICAgICAgICRkYi5fQmVoYXZpb3IucmVtb3ZlKHtcXG4gICAgICAgICAgJ19pZCc6IHN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3JJZF0uX2lkXFxuICAgICAgICB9KTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLy8gcmVtb3ZlIGNvbXBvbmVudHNcXG4gICAgaWYgKHN5c3RlbS5jb21wb25lbnRzKSB7XFxuICAgICAgZm9yIChjb2xsZWN0aW9uIGluIHN5c3RlbS5jb21wb25lbnRzKSB7XFxuICAgICAgICBmb3IgKGNvbXBvbmVudElkIGluIHN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25dKSB7XFxuICAgICAgICAgIGlmIChjb3JlQ29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudElkKSA9PT0gLTEpIHtcXG4gICAgICAgICAgICAkZGJbY29sbGVjdGlvbl0ucmVtb3ZlKHtcXG4gICAgICAgICAgICAgICdfaWQnOiBjb21wb25lbnRJZFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICBpZiAodGhpcy5yZXF1aXJlKGlkKSAmJiB0aGlzLnJlcXVpcmUoaWQpLnN0YXRlKSB7XFxuICAgIHRoaXMucmVxdWlyZShpZCkuc3RhdGUoJ3VuaW5zdGFsbGVkJyk7XFxuICAgIGNoYW5uZWwuJHN5c3RlbVVuaW5zdGFsbGVkKGlkKTtcXG4gIH1cXG59XCIsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzEwNWYyMTljNjgxMzY0Myc6IHtcbiAgICAgIF9pZDogJzEwNWYyMTljNjgxMzY0MycsXG4gICAgICBjb21wb25lbnQ6ICdfT1NHaScsXG4gICAgICBzdGF0ZTogJ3N0YXJ0JyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBzdGFydChpZCkge1xcbiAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShpZCksXFxuICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXG4gIGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ3Jlc29sdmVkJyB8fCBzeXN0ZW0uc3RhdGUoKSA9PT0gJ2luc3RhbGxlZCcpIHtcXG4gICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICBpZiAoc3lzdGVtLnN0YXJ0KSB7XFxuICAgICAgc3lzdGVtLnN0YXJ0KCk7XFxuICAgIH1cXG4gICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChpZCk7XFxuICAgIHN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogZmFsc2UsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWE4MWExZjAwZDE3MjY5Jzoge1xuICAgICAgX2lkOiAnMWE4MWExZjAwZDE3MjY5JyxcbiAgICAgIGNvbXBvbmVudDogJ19PU0dpJyxcbiAgICAgIHN0YXRlOiAnc3RvcCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gc3RvcChpZCkge1xcbiAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShpZCksXFxuICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXG4gIGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ2FjdGl2ZScpIHtcXG4gICAgc3lzdGVtLnN0YXRlKCdzdG9wcGluZycpO1xcbiAgICBpZiAoc3lzdGVtLnN0b3ApIHtcXG4gICAgICBzeXN0ZW0uc3RvcCgpO1xcbiAgICB9XFxuICAgIGNoYW5uZWwuJHN5c3RlbVN0b3BwZWQoaWQpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKGlkKTtcXG4gIH1cXG59XCIsXG4gICAgICB1c2VDb3JlQVBJOiBmYWxzZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxMTY4NTFiNjAyMTI4ZDEnOiB7XG4gICAgICBfaWQ6ICcxMTY4NTFiNjAyMTI4ZDEnLFxuICAgICAgY29tcG9uZW50OiAnX09TR2knLFxuICAgICAgc3RhdGU6ICdzdGF0dXMnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIHN0YXR1cygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgc3lzdGVtID0gbnVsbCxcXG4gICAgbGVuZ3RoID0gMCxcXG4gICAgaSA9IDA7XFxuXFxuICBzeXN0ZW1zID0gJGRiLl9TeXN0ZW0uZmluZCh7fSk7XFxuXFxuICBsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgICByZXN1bHRbc3lzdGVtLm5hbWVdID0ge1xcbiAgICAgICdpZCc6IHN5c3RlbS5faWQsXFxuICAgICAgJ3N0YXRlJzogc3lzdGVtLnN0YXRlLFxcbiAgICAgICduYW1lJzogc3lzdGVtLm5hbWUsXFxuICAgICAgJ3ZlcnNpb24nOiBzeXN0ZW0udmVyc2lvbixcXG4gICAgICAnbG9jYXRpb24nOiBzeXN0ZW0ubG9jYXRpb24sXFxuICAgICAgJ21hc3Rlcic6IHN5c3RlbS5tYXN0ZXJcXG4gICAgfTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxOWNmMzE3ZDcyMTczMzEnOiB7XG4gICAgICBfaWQ6ICcxOWNmMzE3ZDcyMTczMzEnLFxuICAgICAgY29tcG9uZW50OiAnX09TR2knLFxuICAgICAgc3RhdGU6ICdidW5kbGUnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICAnZnVuY3Rpb24gYnVuZGxlKCkgeyBcXG5cXHR2YXIgcmVzdWx0ID0gJGRiLmV4cG9ydFN5c3RlbSgpO1xcblxcdHJldHVybiByZXN1bHQ7XFxufScsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzEzMDEwMTY3ZjMxM2Y4Nyc6IHtcbiAgICAgIF9pZDogJzEzMDEwMTY3ZjMxM2Y4NycsXG4gICAgICBjb21wb25lbnQ6ICdfUnVudGltZScsXG4gICAgICBzdGF0ZTogJ3N5c3RlbScsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gc3lzdGVtKHBhcmFtcykge1xcbiAgdmFyIFJ1bnRpbWVTeXN0ZW0gPSBudWxsLFxcbiAgICBzeXN0ZW0gPSB7fSxcXG4gICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGNvbmYgPSB7fTtcXG5cXG4gIGlmIChwYXJhbXMpIHtcXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgY29uZi5tYXN0ZXIgPSB0cnVlO1xcbiAgICAgIGNvbmYubmFtZSA9IHBhcmFtcztcXG4gICAgfSBlbHNlIHtcXG4gICAgICBjb25mID0gcGFyYW1zO1xcbiAgICAgIGNvbmYubWFzdGVyID0gdHJ1ZTtcXG4gICAgfVxcbiAgICBSdW50aW1lU3lzdGVtID0gdGhpcy5yZXF1aXJlKCdfU3lzdGVtJyk7XFxuICAgIHN5c3RlbSA9IG5ldyBSdW50aW1lU3lzdGVtKGNvbmYpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgfSBlbHNlIHtcXG4gICAgcmVzdWx0ID0gJGRiLl9TeXN0ZW0uZmluZCh7XFxuICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgfSk7XFxuICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XFxuICAgICAgc3lzdGVtSWQgPSByZXN1bHRbMF0uX2lkO1xcbiAgICAgIHN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5c3RlbUlkKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIHN5c3RlbTtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZVxuICAgIH0sXG4gICAgJzFjZmE0MTQ1ZjYxNGRhOCc6IHtcbiAgICAgIF9pZDogJzFjZmE0MTQ1ZjYxNGRhOCcsXG4gICAgICBjb21wb25lbnQ6ICdfUnVudGltZScsXG4gICAgICBzdGF0ZTogJ21lc3NhZ2UnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gbWVzc2FnZShtc2cpIHsgXFxuICAkZGIuX01lc3NhZ2UuaW5zZXJ0KG1zZyk7XFxufScsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFjYjlkMTAzZDQxZGQ5Nyc6IHtcbiAgICAgIF9pZDogJzFjYjlkMTAzZDQxZGQ5NycsXG4gICAgICBjb21wb25lbnQ6ICdlODljNjE3YjZiMTVkMjQnLFxuICAgICAgc3RhdGU6ICdzdGFydCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gc3RhcnQoKSB7XFxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gRE9NQ29udGVudExvYWRlZChlKSB7XFxuICAgICAgdmFyIHN5c3RlbXMgPSBbXSxcXG4gICAgICAgIHN5c3RlbSA9IG51bGwsXFxuICAgICAgICBzY3JpcHRzID0gW10sXFxuICAgICAgICBzY3JpcHQgPSBudWxsLFxcbiAgICAgICAgbG9nTGV2ZWwgPSAnd2FybicsXFxuICAgICAgICBpID0gMCxcXG4gICAgICAgIGxlbmd0aCA9IDA7XFxuICAgIFxcbiAgICAgIHN5c3RlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zeXN0ZW1dJyk7XFxuICAgICAgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7XFxuICBcXG4gICAgICAvLyBsb2dnZXJcXG4gICAgICBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W2xvZ10nKTtcXG4gICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcXG4gICAgICAgIGxvZ0xldmVsID0gc2NyaXB0c1swXS5nZXRBdHRyaWJ1dGUoJ2xvZycpO1xcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbChsb2dMZXZlbCk7XFxuICAgICAgfVxcbiAgXFxuICAgICAgLy8gc3lzdGVtc1xcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgc3lzdGVtID0gc3lzdGVtc1tpXTtcXG4gIFxcbiAgICAgICAgaWYgKHN5c3RlbS5nZXRBdHRyaWJ1dGUoJ2FzeW5jJykgPT09ICdmYWxzZScpIHtcXG4gICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykuaW5zdGFsbChzeXN0ZW0uaHJlZiwgZmFsc2UpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykuaW5zdGFsbChzeXN0ZW0uaHJlZiwgdHJ1ZSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgXFxuICAgICAgLy8gcmVhZHkgZXZlbnRcXG4gICAgICBpZiAobGVuZ3RoID09PSAwKSB7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5yZWFkeSgpO1xcbiAgICAgIH1cXG4gIH0uYmluZCh0aGlzKSk7XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9XG4gIH0sXG4gIHR5cGVzOiB7XG4gICAgY3NzOiB7XG4gICAgICBfaWQ6ICdoMWQ4ODMxMWFjMDE5MjExJyxcbiAgICAgIG5hbWU6ICdjc3MnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICBfaWQ6ICdjMTdjYWQxYmMzZDE3NzUyJyxcbiAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAganNvbjoge1xuICAgICAgX2lkOiAnZTFkMjVhMTJlNjcxMjdlZCcsXG4gICAgICBuYW1lOiAnanNvbicsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIGRiSW5zZXJ0RXZlbnQ6IHtcbiAgICAgIF9pZDogJzE0OGVmMWUxOTgxMGU2ZCcsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgbmFtZTogJ2RiSW5zZXJ0RXZlbnQnLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgY29sbGVjdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBkb2N1bWVudDoge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkYlJlbW92ZUV2ZW50OiB7XG4gICAgICBfaWQ6ICcxOTUyZTFhYzQyMTNmNGEnLFxuICAgICAgbmFtZTogJ2RiUmVtb3ZlRXZlbnQnLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIGNvbGxlY3Rpb246IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGJVcGRhdGVFdmVudDoge1xuICAgICAgX2lkOiAnMWY1YzQxMzA5NzExNzUyJyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICBuYW1lOiAnZGJVcGRhdGVFdmVudCcsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGJBY3Rpb246IHtcbiAgICAgIF9pZDogJ2UxOTUwZTE2ZjI5MTRkYTknLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkYkFjdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHZhbHVlOiBbJ2luc2VydCcsICd1cGRhdGUnLCAncmVtb3ZlJ11cbiAgICB9LFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIF9pZDogJ2QxYzBkMDEzMGM2MTYxOTknLFxuICAgICAgbmFtZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRPbmx5OiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgZXJyb3JQYXJhbToge1xuICAgICAgX2lkOiAnZTE5ODc2MWZjMGIxYWU4YScsXG4gICAgICBuYW1lOiAnZXJyb3JQYXJhbScsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBldmVudDoge1xuICAgICAgX2lkOiAnZzE2NjhkMWRlMmQxZmY2ZicsXG4gICAgICBuYW1lOiAnZXZlbnQnLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogWydwYXJhbWV0ZXInXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgaHRtbDoge1xuICAgICAgX2lkOiAneTE2MWMyMTMyMGIxMWFjYicsXG4gICAgICBuYW1lOiAnaHRtbCcsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIGphdmFzY3JpcHQ6IHtcbiAgICAgIF9pZDogJ3MxM2Q0YzFmZGY5MTY1MDQnLFxuICAgICAgbmFtZTogJ2phdmFzY3JpcHQnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBfaWQ6ICdwMTI0NjAxODAxZDFkYmZhJyxcbiAgICAgIG5hbWU6ICdsaW5rJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZE9ubHk6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHR5cGU6ICd7dHlwZX0nLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBsb2c6IHtcbiAgICAgIF9pZDogJ2QxZmQxNjFhNGE0MTQ5ZmMnLFxuICAgICAgbmFtZTogJ2xvZycsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHZhbHVlOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgX2lkOiAnbDEzYjA2MWFjNTcxMjcyZCcsXG4gICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBldmVudDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBmcm9tOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBtZXRob2Q6IHtcbiAgICAgIF9pZDogJ3gxMjI3MjE4ZWVkMWYzZTknLFxuICAgICAgbmFtZTogJ21ldGhvZCcsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6IFsncGFyYW1ldGVyJ10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIG9zZ2lTdGF0ZXM6IHtcbiAgICAgIF9pZDogJ3ExZjBjYTEyMGZjMTNmYjMnLFxuICAgICAgbmFtZTogJ29zZ2lTdGF0ZXMnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB2YWx1ZTogW1xuICAgICAgICAnbm9uZScsXG4gICAgICAgICdpbnN0YWxsZWQnLFxuICAgICAgICAncmVzb2x2ZWQnLFxuICAgICAgICAnc3RhcnRpbmcnLFxuICAgICAgICAnYWN0aXZlJyxcbiAgICAgICAgJ3N0b3BwaW5nJyxcbiAgICAgICAgJ3VuaW5zdGFsbGVkJ1xuICAgICAgXSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIHBhcmFtZXRlcjoge1xuICAgICAgX2lkOiAnZTFiMThlMTZjNmMxOTVhZCcsXG4gICAgICBuYW1lOiAncGFyYW1ldGVyJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHR5cGU6ICd7dHlwZX0nLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIHByb3BlcnR5OiB7XG4gICAgICBfaWQ6ICdhMTZhM2ExYWUwNTFhNTVkJyxcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eScsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRPbmx5OiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0eXBlOiAne3R5cGV9JyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgX2lkOiAnYzEzNmZjMTI5YTkxMmY1NCcsXG4gICAgICBuYW1lOiAndGV4dCcsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBfQ2hhbm5lbDoge1xuICAgICAgY2hhbm5lbDoge1xuICAgICAgICBfaWQ6ICdjaGFubmVsJ1xuICAgICAgfVxuICAgIH0sXG4gICAgX0RhdGFiYXNlOiB7XG4gICAgICBkYjoge1xuICAgICAgICBfaWQ6ICdkYidcbiAgICAgIH1cbiAgICB9LFxuICAgIF9Mb2dnZXI6IHtcbiAgICAgIGxvZ2dlcjoge1xuICAgICAgICBfaWQ6ICdsb2dnZXInLFxuICAgICAgICBsZXZlbDogJ3dhcm4nXG4gICAgICB9XG4gICAgfSxcbiAgICBfTWV0YW1vZGVsOiB7XG4gICAgICBtZXRhbW9kZWw6IHtcbiAgICAgICAgX2lkOiAnbWV0YW1vZGVsJ1xuICAgICAgfVxuICAgIH0sXG4gICAgX1J1bnRpbWU6IHtcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgX2lkOiAncnVudGltZScsXG4gICAgICAgIHZlcnNpb246ICcyLjUuMCdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9pZDogJ2U4OWM2MTdiNmIxNWQyNCdcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuXG4gKiBBIGJlaGF2aW9yIGlzIGEgbWVjYW5pc20gdGhhdCBhbGxvdyB1c2VycyB0byBhZGQgYWN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWRcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgc3RvcmUgPSB7fTtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVGdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgZGVmYXVsdCBuYW1lIG9mIHRoZSBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bmMgYSBzdHJpbmdpZmllZCBmdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIHRoZSBiZWhhdmlvciB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBTeXN0ZW0gUnVudGltZSBjb3JlIGJlaGF2aW9yLlxuICogSW4gdGhhdCBjYXNlLCB0aGUgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZCBpbiBhIHN5c3RlbSAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBTeXN0ZW0gUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBmdW5jdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGhlIGNyZWF0ZWQgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgZnVuY3Rpb24gZnJvbSBhIHN0cmluZy5cbiAqIFRoZSBjcmVhdGVkIGZ1bmN0aW9uOlxuICogLSB3aWxsIGJlIGEgbmFtZWQgZnVuY3Rpb24sXG4gKiAtIGhhcyB0aGUgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IGFuZFxuICogLSBjYW4gaGF2ZSBzb21lIGNvcmUgbW9kdWxlcyBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uKG5hbWUsIGZ1bmMsIGNvcmUsIHVzZUNvcmVBUEkpIHtcbiAgdmFyIGJlZ2luQm9keSA9IC0xO1xuICB2YXIgZnVuY1BhcmFtcyA9ICcnO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciBwYXJhbXNDbGVhbiA9IFtdO1xuICB2YXIgZnVuY0JvZHkgPSAnJztcbiAgdmFyIGhlYWRlciA9ICcnO1xuICB2YXIgYWN0aW9uID0gbnVsbDtcbiAgdmFyIGlzQXJyb3dGdW5jdGlvbiA9IHRydWU7XG4gIHZhciBpc09uZUxpbmUgPSBmYWxzZTtcblxuICBpZiAoZnVuYy50cmltKCkuaW5kZXhPZignZnVuY3Rpb24nKSA9PT0gMCkge1xuICAgIGlzQXJyb3dGdW5jdGlvbiA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzQXJyb3dGdW5jdGlvbikge1xuICAgIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZignPT4nKTtcblxuICAgIGhlYWRlciA9IGZ1bmMuc3Vic3RyaW5nKDAsIGJlZ2luQm9keSk7XG4gICAgaGVhZGVyID0gaGVhZGVyLnJlcGxhY2UoJz0+JywgJycpO1xuXG4gICAgaWYgKGhlYWRlci5pbmRleE9mKCcoJykgIT09IC0xKSB7XG4gICAgICBmdW5jUGFyYW1zID0gaGVhZGVyXG4gICAgICAgIC5zcGxpdCgnKCcpWzFdXG4gICAgICAgIC5yZXBsYWNlKCcpJywgJycpXG4gICAgICAgIC50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXIudHJpbSgpO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IGZ1bmNQYXJhbXMuc3BsaXQoJywnKTtcbiAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSkge1xuICAgICAgcGFyYW1zQ2xlYW4ucHVzaChwYXJhbS50cmltKCkpO1xuICAgIH0pO1xuXG4gICAgZnVuY0JvZHkgPSBmdW5jLnN1YnN0cmluZyhiZWdpbkJvZHkgKyAyLCBmdW5jLmxlbmd0aCkudHJpbSgpO1xuXG4gICAgaWYgKGZ1bmNCb2R5LmluZGV4T2YoJ3snKSA9PT0gMCkge1xuICAgICAgZnVuY0JvZHkgPSBmdW5jQm9keS5zdWJzdHJpbmcoMSwgZnVuY0JvZHkubGFzdEluZGV4T2YoJ30nKSkudHJpbSgpO1xuICAgIH1cblxuICAgIGlmIChmdW5jQm9keS5pbmRleE9mKCdcXG4nKSA9PT0gLTEpIHtcbiAgICAgIGlzT25lTGluZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyb3dGdW5jdGlvbiAmJiBpc09uZUxpbmUgJiYgZnVuY0JvZHkuaW5kZXhPZigncmV0dXJuICcpID09PSAtMSkge1xuICAgICAgZnVuY0JvZHkgPSAncmV0dXJuICcgKyBmdW5jQm9keTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCd7Jyk7XG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcblxuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXJcbiAgICAgIC5zcGxpdCgnKCcpWzFdXG4gICAgICAucmVwbGFjZSgnKScsICcnKVxuICAgICAgLnRyaW0oKTtcblxuICAgIHBhcmFtcyA9IGZ1bmNQYXJhbXMuc3BsaXQoJywnKTtcbiAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSkge1xuICAgICAgcGFyYW1zQ2xlYW4ucHVzaChwYXJhbS50cmltKCkpO1xuICAgIH0pO1xuXG4gICAgZnVuY0JvZHkgPSBmdW5jLnN1YnN0cmluZyhiZWdpbkJvZHkgKyAxKTtcbiAgICBmdW5jQm9keSA9IGZ1bmNCb2R5LnN1YnN0cmluZygwLCBmdW5jQm9keS5sYXN0SW5kZXhPZignfScpKS50cmltKCk7XG4gIH1cblxuICAvLyBrbHVkZ2UgZm9yIEJhYmVsXG4gIGZ1bmNCb2R5ID0gZnVuY0JvZHkucmVwbGFjZSgvX3RoaXMvZywgJ3RoaXMnKTtcblxuICBpZiAocGFyYW1zWzBdID09PSAnJykge1xuICAgIHBhcmFtcyA9IFtdO1xuICB9XG5cbiAgaWYgKHVzZUNvcmVBUEkpIHtcbiAgICBwYXJhbXMucHVzaCgnJGNvbXBvbmVudCcpO1xuICAgIHBhcmFtcy5wdXNoKCckZGInKTtcbiAgICBwYXJhbXMucHVzaCgnJG1ldGFtb2RlbCcpO1xuICAgIHBhcmFtcy5wdXNoKCckd29ya2Zsb3cnKTtcbiAgICBwYXJhbXMucHVzaCgnJGJlaGF2aW9yJyk7XG4gICAgcGFyYW1zLnB1c2goJyRzdGF0ZScpO1xuICAgIHBhcmFtcy5wdXNoKCckbG9nJyk7XG4gICAgcGFyYW1zLnB1c2goJyRoZWxwZXInKTtcbiAgfVxuXG4gIGlmICgkaGVscGVyLmlzT25Ob2RlKCkpIHtcbiAgICBwYXJhbXMucHVzaCgncmVxdWlyZScpO1xuICB9XG5cbiAgaWYgKHBhcmFtc1swXSAhPT0gJycpIHtcbiAgICBhY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnX19ib2R5JyxcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICAnICgnICtcbiAgICAgICAgcGFyYW1zLmpvaW4oJywnKSArXG4gICAgICAgIFwiKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oJ1wiICtcbiAgICAgICAgcGFyYW1zLmpvaW4oXCInLCdcIikgK1xuICAgICAgICBcIicsIF9fYm9keSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9O1wiXG4gICAgKShmdW5jQm9keSk7XG4gIH0gZWxzZSB7XG4gICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ19fYm9keScsXG4gICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICBuYW1lICtcbiAgICAgICAgJyAoKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oX19ib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICAgICkoZnVuY0JvZHkpO1xuICB9XG5cbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIHRoZSBhY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIGEgc3BlY2lmaWMgc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBTeXN0ZW0gUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZFxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgbmV3IGNvbnRleHQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBpZCBvZiB0aGUgYmVoYXZpb3IgY3JlYXRlZCBpbiBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQoaWQsIHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGNvcmUsIGNvbnRleHQpIHtcbiAgdmFyIGJlaGF2aW9ySWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgdmFyIHN0ckFjdGlvbiA9IGFjdGlvbi50b1N0cmluZygpO1xuXG4gIGlmICh0eXBlb2YgY29yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb3JlID0gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB1c2VDb3JlQVBJID09PSAndW5kZWZpbmVkJykge1xuICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgfVxuXG4gIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKHN0YXRlLCBzdHJBY3Rpb24sIGNvcmUsIHVzZUNvcmVBUEkpO1xuXG4gIHN0b3JlW2JlaGF2aW9ySWRdID0gYWN0aW9uO1xuXG4gICRkYi5fQmVoYXZpb3IuaW5zZXJ0KHtcbiAgICBfaWQ6IGJlaGF2aW9ySWQsXG4gICAgY29tcG9uZW50OiBpZCxcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgYWN0aW9uOiBzdHJBY3Rpb24sXG4gICAgdXNlQ29yZUFQSTogdXNlQ29yZUFQSSxcbiAgICBjb3JlOiBjb3JlLFxuICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgfSk7XG5cbiAgcmV0dXJuIGJlaGF2aW9ySWQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgb3IgcmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIGZvciBhIHNwZWNpZmljIHN0YXRlXG4gKiBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHBhcmFtcykge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICBwYXJhbXMuYmVoYXZpb3JJZCA9IHBhcmFtcy5iZWhhdmlvcklkIHx8ICcnO1xuICBwYXJhbXMuY29tcG9uZW50SWQgPSBwYXJhbXMuY29tcG9uZW50SWQgfHwgJyc7XG4gIHBhcmFtcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCAnJztcblxuICBpZiAocGFyYW1zLmNvbXBvbmVudElkKSB7XG4gICAgaWYgKHBhcmFtcy5iZWhhdmlvcklkKSB7XG4gICAgICAkZGIuX0JlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgIF9pZDogcGFyYW1zLmJlaGF2aW9ySWQsXG4gICAgICAgIGNvbXBvbmVudDogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICBzdGF0ZTogcGFyYW1zLnN0YXRlXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBzdG9yZVtwYXJhbXMuYmVoYXZpb3JJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMuc3RhdGUpIHtcbiAgICAgICAgcmVzdWx0ID0gJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgIGNvbXBvbmVudDogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICAgIHN0YXRlOiBwYXJhbXMuc3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAkZGIuX0JlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiBwYXJhbXMuY29tcG9uZW50SWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgICAgICBkZWxldGUgc3RvcmVbaWRdO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5yZW1vdmVGcm9tTWVtb3J5ID0gZnVuY3Rpb24gcmVtb3ZlRnJvbU1lbW9yeShpZCkge1xuICBkZWxldGUgc3RvcmVbaWRdO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgYWN0aW9ucyBvZiBhIGJlaGF2aW9yIGZvciBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKGlkLCBzdGF0ZSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBkYlJlc3VsdCA9IFtdO1xuICB2YXIgYWN0aW9uID0gbnVsbDtcblxuICBkYlJlc3VsdCA9ICRkYi5fQmVoYXZpb3IuZmluZCh7XG4gICAgY29tcG9uZW50OiBpZCxcbiAgICBzdGF0ZTogc3RhdGVcbiAgfSk7XG5cbiAgZGJSZXN1bHQuZm9yRWFjaChmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIGFjdGlvbiA9IHN0b3JlW2JlaGF2aW9yLl9pZF07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihcbiAgICAgICAgYmVoYXZpb3Iuc3RhdGUsXG4gICAgICAgIGJlaGF2aW9yLmFjdGlvbixcbiAgICAgICAgYmVoYXZpb3IuY29yZSxcbiAgICAgICAgYmVoYXZpb3IudXNlQ29yZUFQSVxuICAgICAgKTtcbiAgICAgIHN0b3JlW2JlaGF2aW9yLl9pZF0gPSBhY3Rpb247XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgIHVzZUNvcmVBUEk6IGJlaGF2aW9yLnVzZUNvcmVBUEksXG4gICAgICBjb250ZXh0OiBiZWhhdmlvci5jb250ZXh0LFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5XG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7fTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEByZXR1cm5zIHtCZWhhdmlvcn0gdGhlIGJlaGF2aW9yXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgYmVoYXZpb3IgYnkgaXRzIGlkXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBjb21wb25lbnRcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGNvbXBvbmVudHMuXG4gKiBJdCBpcyB0aGUgZmFjdG9yeSBvZiBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBTeXN0ZW0gUnVudGltZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eSc7XG52YXIgTElOS19UWVBFID0gJ2xpbmsnO1xudmFyIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJztcbnZhciBNRVRIT0RfVFlQRSA9ICdtZXRob2QnO1xudmFyIEVWRU5UX1RZUEUgPSAnZXZlbnQnO1xudmFyIE5BTUUgPSAnX25hbWUnO1xudmFyIHN0b3JlID0ge307XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBjbGFzcyBfQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgbWFueSBtZXRob2RzIG9mIEFycmF5IENsYXNzXG4gKi9cbmZ1bmN0aW9uIF9BcnJheShjb25mKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIGFyckRiID0gW107XG4gIHZhciB0eXBlID0gJyc7XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgY2xhc3NJZCA9ICcnO1xuICB2YXIgcHJvcGVydHlOYW1lID0gJyc7XG4gIHZhciBpc1JlYWRPbmx5ID0gZmFsc2U7XG5cbiAgY29uZiA9IGNvbmYgfHwge307XG4gIHR5cGUgPSBjb25mLnR5cGUgfHwgJyc7XG4gIGlkID0gY29uZi5pZCB8fCAnJztcbiAgcHJvcGVydHlOYW1lID0gY29uZi5wcm9wZXJ0eU5hbWUgfHwgJyc7XG4gIGFyckRiID0gY29uZi5hcnIgfHwgW107XG4gIGNsYXNzSWQgPSBjb25mLmNsYXNzSWQgfHwgJyc7XG5cbiAgaWYgKHR5cGVvZiBjb25mLnJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlzUmVhZE9ubHkgPSBjb25mLnJlYWRPbmx5O1xuICB9XG5cbiAgLy8gaW5pdFxuICBhcnJEYi5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmICgkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpKSB7XG4gICAgICBhcnIucHVzaCgkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnIucHVzaCh2YWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvcHlcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIGNvcHkgdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBfY29weSgpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gICAgYXJyRGIuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmICgkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpKSB7XG4gICAgICAgIGFycltpXSA9ICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUodmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycltpXSA9IHZhbDtcbiAgICAgIH1cbiAgICAgIGkgPSBpICsgMTtcbiAgICB9KTtcblxuICAgIGZvciAoaiA9IGk7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgZGVsZXRlIGFycltqXTtcbiAgICB9XG4gICAgYXJyLmxlbmd0aCA9IGFyckRiLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9hZGRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbCB2YWx1ZSB0byBhZGRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvbiB0eXBlIG9mIGFjdGlvblxuICAgKiBAcGFyYW0ge051bWJlcn0gc3RhcnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRlbGV0ZUNvdW50XG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBhZGQgYW4gaXRlbSBpbiB0aGUgYXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIF9hZGQodmFsLCBhY3Rpb24sIHN0YXJ0LCBkZWxldGVDb3VudCkge1xuICAgIHZhciBpc0NsYXNzID0gZmFsc2U7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciBkZWwgPSBbXTtcblxuICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgaXNDbGFzcyA9ICRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSk7XG5cbiAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWwgJiZcbiAgICAgICAgICAkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlLnJlcGxhY2UoJ0AnLCAnJykpXG4gICAgICAgICkge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwdXNoJzpcbiAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgYXJyRGIudW5zaGlmdCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdzcGxpY2UnOlxuICAgICAgICAgICAgICBkZWwgPSBhcnJEYi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB2YWwpO1xuXG4gICAgICAgICAgICAgIGxlbmd0aCA9IGRlbC5sZW5ndGg7XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFtzdG9yZVtkZWxbaV1dLCAncmVtb3ZlJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgZGF0YTogW3ZhbCwgJ2FkZCddXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwuaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLmlkKCksIHR5cGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLCB0eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWwgJiYgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWwsIHR5cGUpKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3B1c2gnOlxuICAgICAgICAgICAgICBhcnJEYi5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgYXJyRGIudW5zaGlmdCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGFyckRiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIGRhdGE6IFt2YWwsICdhZGQnXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyckRiLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW1vdmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgYXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIF9yZW1vdmUoYWN0aW9uKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgdmFsID0gbnVsbDtcbiAgICB2YXIgaXNDbGFzcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICBpZiAoYXJyRGIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAncG9wJzpcbiAgICAgICAgICAgIHZhbCA9IGFyckRiLnBvcCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdzaGlmdCc6XG4gICAgICAgICAgICB2YWwgPSBhcnJEYi5zaGlmdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGFyckRiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzQ2xhc3MgPSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpO1xuXG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgcmVzdWx0ID0gc3RvcmVbdmFsXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICBkYXRhOiBbcmVzdWx0LCAncmVtb3ZlJ11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHB1c2hcbiAgICogQHBhcmFtIHtfQ29tcG9uZW50fE9iamVjdH0gdmFsXG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBwdXNoIG1ldGhvZFxuICAgKi9cbiAgYXJyLnB1c2ggPSBmdW5jdGlvbiBwdXNoKHZhbCkge1xuICAgIHZhciByZXN1bHQgPSBfYWRkKHZhbCwgJ3B1c2gnKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCB1bnNoaWZ0XG4gICAqIEBwYXJhbSB7X0NvbXBvbmVudHxPYmplY3R9IHZhbFxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgdW5zaGlmdCBtZXRob2RcbiAgICovXG4gIGFyci51bnNoaWZ0ID0gZnVuY3Rpb24gdW5zaGlmdCh2YWwpIHtcbiAgICB2YXIgcmVzdWx0ID0gX2FkZCh2YWwsICd1bnNoaWZ0Jyk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcHVzaFxuICAgKiBAcGFyYW0ge19Db21wb25lbnR8T2JqZWN0fSBhcnJcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIGNvbmNhdCBtZXRob2RcbiAgICovXG4gIGFyci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQoYXJyKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBfYWRkKGFycltpXSwgJ3B1c2gnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25mLmFyciA9IGFyckRiO1xuXG4gICAgcmVzdWx0ID0gbmV3IF9BcnJheShjb25mKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBwb3BcbiAgICogQHJldHVybnMge19Db21wb25lbnR8T2JqZWN0fSB2YWx1ZVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgcG9wIG1ldGhvZFxuICAgKi9cbiAgYXJyLnBvcCA9IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3JlbW92ZSgncG9wJyk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc2hpZnRcbiAgICogQHJldHVybnMge19Db21wb25lbnR8T2JqZWN0fSB2YWx1ZVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc2hpZnQgbWV0aG9kXG4gICAqL1xuICBhcnIuc2hpZnQgPSBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3JlbW92ZSgnc2hpZnQnKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBzb3J0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0IHRoZSBzb3J0IGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSBjdXJyZW50IF9BcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc29ydCBtZXRob2RcbiAgICovXG4gIGFyci5zb3J0ID0gZnVuY3Rpb24gc29ydChmdW5jdCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgYXJyRGIuc29ydChmdW5jdCk7XG5cbiAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgJGhlbHBlclxuICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgdmFsdWU6IGFyckRiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IGFycjtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCByZXZlcnNlXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSByZXZlcnNlZCBfQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHJldmVyc2UgbWV0aG9kXG4gICAqL1xuICBhcnIucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgYXJyRGIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICRoZWxwZXJcbiAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBzcGxpY2VcbiAgICogQHJldHVybnMge19BcnJheX0gdGhlIHNwbGljZWQgX0FycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzcGxpY2UgbWV0aG9kXG4gICAqL1xuICBhcnIuc3BsaWNlID0gZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgaXNDbGFzcyA9IGZhbHNlO1xuICAgIHZhciBkYXRhID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgX2FkZCh2YWwsICdzcGxpY2UnLCBzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhcnJEYi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgJGhlbHBlclxuICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpc0NsYXNzID0gJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKTtcbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICBkYXRhID0gc3RvcmVbcmVzdWx0W2ldXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gcmVzdWx0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgZGF0YTogW2RhdGEsICdyZW1vdmUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBzbGljZVxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgc2xpY2VkIF9BcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc2xpY2UgbWV0aG9kXG4gICAqL1xuICBhcnIuc2xpY2UgPSBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKSB7XG4gICAgdmFyIHJlc3VsdCA9IGFyckRiLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBhcnI7XG59XG5cbl9BcnJheS5wcm90b3R5cGUgPSBbXTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIG5hbWVzIG9mIG1ldGhvZCBwYXJhbWV0ZXJzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIHBhcmFtcyA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdLnBhcmFtcztcbiAgaWYgKHBhcmFtcykge1xuICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgcHJvcGVydHkgb2YgYSBjbGFzc1xuICovXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgcHJvcE5hbWVzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpO1xuICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoXG4gICAgICBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTElOS19UWVBFIHx8XG4gICAgICBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gUFJPUEVSVFlfVFlQRSB8fFxuICAgICAgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IENPTExFQ1RJT05fVFlQRVxuICAgICkge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBuYW1lOiBwcm9wTmFtZXNbaV0sXG4gICAgICAgIHR5cGU6IG1vZGVsW3Byb3BOYW1lc1tpXV0udHlwZSxcbiAgICAgICAgcmVhZE9ubHk6IG1vZGVsW3Byb3BOYW1lc1tpXV0ucmVhZE9ubHlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgbWV0aG9kcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgbWV0aG9kIG9mIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0TWV0aG9kcyhpZCkge1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHByb3BOYW1lcyA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbTkFNRV0pO1xuXG4gIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBNRVRIT0RfVFlQRSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcE5hbWVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlUHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiBwcm9wZXJ0eSBzY2hlbWEgb2YgdGhlIHN0cnVjdHVyZSB0eXBlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgc2NoZW1hIG9mIGEgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVByb3BlcnRpZXMocHJvcGVydHlOYW1lLCBtb2RlbCkge1xuICB2YXIgbW9kZWxEZWYgPSBudWxsO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBzdHJ1Y3R1cmUgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBwcm9wTmFtZXMgPSBbXTtcblxuICBtb2RlbERlZiA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwobW9kZWwpO1xuICB0eXBlID0gbW9kZWxEZWZbcHJvcGVydHlOYW1lXS50eXBlO1xuICBzdHJ1Y3R1cmUgPSAkbWV0YW1vZGVsLmdldFR5cGUodHlwZSk7XG5cbiAgaWYgKHN0cnVjdHVyZS5zY2hlbWEpIHtcbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzdHJ1Y3R1cmUuc2NoZW1hKTtcbiAgICBwcm9wTmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBzdHJ1Y3R1cmUuc2NoZW1hW25hbWVdLm5hbWUgPSBuYW1lO1xuICAgICAgcmVzdWx0LnB1c2goc3RydWN0dXJlLnNjaGVtYVtuYW1lXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0RXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgZXZlbnRzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBldmVudCBvZiBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGdldEV2ZW50cyhpZCkge1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHByb3BOYW1lcyA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbTkFNRV0pO1xuXG4gIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBFVkVOVF9UWVBFKSB7XG4gICAgICByZXN1bHQucHVzaChwcm9wTmFtZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTdHJ1Y3R1cmVWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybnMge09iamVjdH0gdGhlIHZhbHVlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdmFsdWUgb2YgYSBzdHJ1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBwYXRoKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgZG9jID0gJGRiLnN0b3JlW21vZGVsXVtpZF07XG4gIHZhciBzdWJQYXRoID0gcGF0aC5zcGxpdCgnLicpO1xuICB2YXIgbGVuZ3RoID0gc3ViUGF0aC5sZW5ndGg7XG4gIHZhciBpID0gMDtcblxuICByZXN1bHQgPSBkb2M7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0W3N1YlBhdGhbaV1dO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTdHJ1Y3R1cmVWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSB0byBzZXRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gU2V0IHRoZSB2YWx1ZSBvZiBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIHBhdGgsIHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgZG9jID0gJGRiLnN0b3JlW21vZGVsXVtpZF07XG4gIHZhciBzdWJQYXRoID0gcGF0aC5zcGxpdCgnLicpO1xuICB2YXIgbGVuZ3RoID0gc3ViUGF0aC5sZW5ndGg7XG4gIHZhciBpID0gMDtcblxuICByZXN1bHQgPSBkb2M7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJQYXRoW2ldXTtcbiAgfVxuICByZXN1bHRbc3ViUGF0aFtpXV0gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBjbGFzcyBmcm9tIGEgY2xhc3MgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhjbGFzc0lkKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keShjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgdmFyIGJvZHkgPSB7fTtcblxuICAgIGlmIChjb25maWcuY29uc3RydWN0b3IubmFtZSAhPT0gJ09iamVjdCcpIHtcbiAgICAgICRsb2cuaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycyhjb25maWcsIGNsYXNzSWQpO1xuICAgICAgY29uZmlnID0ge307XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgISRtZXRhbW9kZWwuaXNWYWxpZE9iamVjdChcbiAgICAgICAgY29uZmlnLFxuICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsKGNsYXNzSWQpLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgKSB7XG4gICAgICAkbG9nLmludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpO1xuICAgIH1cblxuICAgICRtZXRhbW9kZWwucHJlcGFyZU9iamVjdChjb25maWcsICRtZXRhbW9kZWwuZ2V0TW9kZWwoY2xhc3NJZCkpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgIH1cblxuICAgIHN0b3JlW2NvbmZpZy5faWRdID0gdGhpcztcblxuICAgIC8vIGlkXG4gICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgICByZXR1cm4gY29uZmlnLl9pZDtcbiAgICB9O1xuICAgIHRoaXMuaWQgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnX19ib2R5JyxcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24gaWQgKCkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcykgfTsnXG4gICAgKShib2R5KTtcblxuICAgIC8vIGNyZWF0ZSBsaW5rIHRvIGRiXG4gICAgJGRiLnN0b3JlW2NsYXNzSWRdW2NvbmZpZy5faWRdID0gY29uZmlnO1xuXG4gICAgJGRiLmNyZWF0ZUxvZygnaW5zZXJ0JywgY2xhc3NJZCwgY29uZmlnLl9pZCwgJycsIGNvbmZpZyk7XG5cbiAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAkaGVscGVyXG4gICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICBkb2N1bWVudDogY29uZmlnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICB0aGlzLmluaXQoY29uZmlnKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiAnICsgY2xhc3NJZCArICcgKGNvbmZpZykgeyBfX2JvZHkuY2FsbCh0aGlzLGNvbmZpZykgfTsnXG4gICkoYm9keSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRJZENsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBhIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYW4gaWQgbWV0aG9kIHRvIGEgY2xhc3MgdGhhdCB3aWxsIHJldHVybiBpdHMgaWRcbiAqL1xuZnVuY3Rpb24gYWRkSWRDbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgcmV0dXJuIGNsYXNzSWQ7XG4gIH07XG4gIENsYXNzLmlkID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gaWQgKCkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcykgfTsnXG4gICkoYm9keSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LlxuICogQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqXG4gKiBAZXhhbXBsZVxuICogbGF1cmUuYWdlKCk7IC8vIGdldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBsYXVyZS5hZ2UoMjIpOyAvLyBzZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICovXG5mdW5jdGlvbiBhZGRQcm9wZXJ0aWVzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXMobW9kZWwpO1xuXG4gIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgdmFyIGJvZHkgPSB7fTtcbiAgICB2YXIgcHJvcGVydHlOYW1lID0gJyc7XG4gICAgdmFyIHByb3BlcnR5VHlwZSA9ICcnO1xuICAgIHZhciBwcm9wZXJ0eVJlYWRPbmx5ID0gJyc7XG5cbiAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wLm5hbWU7XG4gICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgIHByb3BlcnR5UmVhZE9ubHkgPSBwcm9wLnJlYWRPbmx5O1xuXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRDb2xsZWN0aW9uKGNvbGwsIHR5cGUpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgICBjb2xsLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWwsIHR5cGUpICYmXG4gICAgICAgICAgICAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbShcbiAgICAgICAgICAgICAgdmFsLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHR5cGUucmVwbGFjZSgnQCcsICcnKVxuICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFJlYWxDb2xsZWN0aW9uKGNvbGwsIHR5cGUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKSkge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWwuaWQgIT09ICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobnVsbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpIHx8IHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICBib2R5ID0gZnVuY3Rpb24gYm9keShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHJ1bnRpbWVBcnIgPSBudWxsO1xuICAgICAgICB2YXIgdmFsID0gbnVsbDtcbiAgICAgICAgdmFyIHJlYWxWYWwgPSBudWxsO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJ1bnRpbWVBcnIgPSBuZXcgX0FycmF5KHtcbiAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICBjbGFzc0lkOiBjbGFzc0lkLFxuICAgICAgICAgICAgICB0eXBlOiBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXSxcbiAgICAgICAgICAgICAgYXJyOiAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWVBcnI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBfaXNWYWxpZENvbGxlY3Rpb24oXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhbnknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgICBfaWQ6IHRoaXMuaWQoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgICAgICByZWFsVmFsID0gX2dldFJlYWxDb2xsZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FueScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbcG9zaXRpb24sICdyZXNldCddXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSByZWFsVmFsO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29tcG9uZW50W3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHZhbCA9ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dO1xuICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYXJyYXknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiByZWFsVmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICdudW1iZXInXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUoXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FueScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgICAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbShcbiAgICAgICAgICAgICAgICB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICAgICAgICAgICAgPyAnYXJyYXknXG4gICAgICAgICAgICAgICAgICA6IHByb3BlcnR5VHlwZVswXS5yZXBsYWNlKCdAJywgJycpXG4gICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1xuICAgICAgICAgICAgICAgIF9pZDogdGhpcy5pZCgpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhcnJheScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWx1ZS5pZCAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdW3Bvc2l0aW9uXSA9IHJlYWxWYWw7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb21wb25lbnRbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3ZhbHVlLCAnYWRkJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICAgICcgKHBvc2l0aW9uLCB2YWx1ZSkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgcG9zaXRpb24sIHZhbHVlKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBbXTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbXBvbmVudCA9ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZXhwb3J0cy5nZXQoY29tcG9uZW50W3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgRGF0ZShjb21wb25lbnRbcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnanNvbic6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjb21wb25lbnRbcHJvcGVydHlOYW1lXSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JzpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbmV3IF9BcnJheSh7XG4gICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICByZWFkT25seTogcHJvcGVydHlSZWFkT25seSxcbiAgICAgICAgICAgICAgICAgIGNsYXNzSWQ6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICAgIGFycjogJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNTdHJ1Y3R1cmUocHJvcGVydHlOYW1lLCBjbGFzc0lkKTpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gYWRkU3RydWN0dXJlKFxuICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuaWQoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdOyAvLyBUT0RPIGNhc2Ugb2Ygb2JqZWN0XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKHByb3BlcnR5TmFtZSwgdGhpcy5pZCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZSkpIHtcbiAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1xuICAgICAgICAgICAgICAgIF9pZDogdGhpcy5pZCgpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHByb3BlcnR5VHlwZSk6XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZS5pZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2FzZSBvZiBfQmVoYXZpb3JcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NJZCA9PT0gJ19CZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFt2YWx1ZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICAgICcgKHZhbHVlKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLHZhbHVlKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZFN0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGFyZW50IHBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHByb3BlcnR5IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IHRoYXQgY29pbnRhaW5zIG1ldGhvZHMgdG8gYWNjZXNzIHRoZSBzdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIHN0cnVjdHVyZSBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LlxuICogQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkU3RydWN0dXJlKHBhdGgsIG5hbWUsIG1vZGVsLCBpZCkge1xuICB2YXIgcHJvcGVydGllcyA9IGdldFN0cnVjdHVyZVByb3BlcnRpZXMobmFtZSwgbW9kZWwpO1xuICB2YXIgc3J1Y3R1cmUgPSB7fTtcblxuICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gcHJvcGVydHkocHJvcCkge1xuICAgIHZhciBib2R5ID0ge307XG4gICAgdmFyIHByb3BlcnR5TmFtZSA9ICcnO1xuICAgIHZhciBwcm9wZXJ0eVR5cGUgPSAnJztcbiAgICB2YXIgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgcHJvcGVydHlOYW1lID0gcHJvcC5uYW1lO1xuICAgIHByb3BlcnR5VHlwZSA9IHByb3AudHlwZTtcbiAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIC8vIGluIGNhc2Ugb2YgYXJyYXksIHJldHVybiBhIHN1YiBhcnJheVxuICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkocG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBbXTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHZhciBydW50aW1lQXJyID0gbnVsbDtcbiAgICAgICAgdmFyIHZhbCA9IG51bGw7XG4gICAgICAgIHZhciByZWFsVmFsID0gbnVsbDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICAgICAgdmFyIHBhcmVudFBhdGggPSAnJztcbiAgICAgICAgdmFyIGZ1bGxQYXRoID0gJyc7XG5cbiAgICAgICAgZnVuY3Rpb24gX2lzVmFsaWRDb2xsZWN0aW9uKGNvbGwsIHR5cGUpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgIGNvbGwuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWwsIHR5cGUpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBwYXJlbnRQYXRoID0gcGFyZW50UGF0aCArICcuJyArIG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50UGF0aCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZnVsbFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgcHJvcGVydHlOYW1lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJ1bnRpbWVBcnIgPSBuZXcgX0FycmF5KHtcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICByZWFkT25seTogcHJvcGVydHlSZWFkT25seSxcbiAgICAgICAgICAgICAgY2xhc3NJZDogbW9kZWwsXG4gICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICBhcnI6IGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWVBcnI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIGlmIChfaXNWYWxpZENvbGxlY3Rpb24ocG9zaXRpb24sICdhbnknKSkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYlttb2RlbF0uZmluZCh7XG4gICAgICAgICAgICAgICAgICBfaWQ6IGlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgsIHBvc2l0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbcG9zaXRpb24sICdyZXNldCddXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClbcG9zaXRpb25dO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICdudW1iZXInXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCAnYW55JykpIHtcbiAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICBfaWQ6IGlkXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcnJbcG9zaXRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgYXJyKTtcblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXJyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW2FyciwgJ2FkZCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc3J1Y3R1cmVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fYm9keScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAnIChwb3NpdGlvbiwgdmFsdWUpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsIHBvc2l0aW9uLCB2YWx1ZSkgfTsnXG4gICAgICApKGJvZHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2R5ID0gZnVuY3Rpb24gYm9keSh2YWx1ZSkge1xuICAgICAgICB2YXIgc2VhcmNoID0gW107XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IG51bGw7XG4gICAgICAgIHZhciBwYXJlbnRQYXRoID0gJyc7XG4gICAgICAgIHZhciBmdWxsUGF0aCA9ICcnO1xuXG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgcGFyZW50UGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBuYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudFBhdGggPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGZ1bGxQYXRoID0gcGFyZW50UGF0aCArICcuJyArIHByb3BlcnR5TmFtZTtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbXBvbmVudCA9ICRkYi5zdG9yZVttb2RlbF1baWRdO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZXhwb3J0cy5nZXQoXG4gICAgICAgICAgICAgICAgICBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2pzb24nOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzU3RydWN0dXJlKHByb3BlcnR5TmFtZSwgbW9kZWwpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoXG4gICAgICAgICAgICAgICAgICBwYXJlbnRQYXRoLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwcm9wLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuZGVzdHJveWVkQ29tcG9uZW50Q2FsbChmdWxsUGF0aCwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCBtb2RlbCwgZnVsbFBhdGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbbW9kZWxdLmZpbmQoe1xuICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUudG9JU09TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2FzZSBvZiBfQmVoYXZpb3JcbiAgICAgICAgICAgICAgICBpZiAobW9kZWwgPT09ICdfQmVoYXZpb3InKSB7XG4gICAgICAgICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlRnJvbU1lbW9yeShpZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbdmFsdWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNydWN0dXJlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX2JvZHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgICAgJyAodmFsdWUpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsdmFsdWUpIH07J1xuICAgICAgKShib2R5KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzcnVjdHVyZTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIG1ldGhvZHMgdG8gYSBjb21wb25lbnQuXG4gKiBUaGUgY2FsbCB0byB0aGVzZSBtZXRob2RzIHdpbGwgaW52b2tlIHRoZSB3b3JrZmxvdyBpbiBvcmRlciB0byBjaGVjayB0aGF0IGlucG91dHMgLyBvdXRwdXRzIGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKi9cbmZ1bmN0aW9uIGFkZE1ldGhvZHMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBtZXRob2RzID0gZ2V0TWV0aG9kcyhtb2RlbCk7XG5cbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIG1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgdmFyIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNsYXNzSWQsIG1ldGhvZE5hbWUpO1xuICAgIHZhciBwYXJhbXMgPSBwYXJhbXNOYW1lLmpvaW4oJywgJyk7XG4gICAgdmFyIHBhcmFtc1dpdGhDb250ZXh0ID0gJyc7XG5cbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgIHN0YXRlOiBtZXRob2ROYW1lLFxuICAgICAgICBkYXRhOiBhcmd1bWVudHNcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB2YXIgYm9keVdpdGhDb250ZXh0ID0gZnVuY3Rpb24gYm9keSgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgdmFyIGRhdGEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICBkYXRhLnNoaWZ0KCk7XG5cbiAgICAgIGlmIChhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogbWV0aG9kTmFtZSxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGNvbnRleHQ6IGFyZ3VtZW50c1swXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bkNvbnRleHQoY2xhc3NJZCwgbWV0aG9kTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtc05hbWUudW5zaGlmdCgnY29udGV4dCcpO1xuICAgICAgcGFyYW1zV2l0aENvbnRleHQgPSBwYXJhbXNOYW1lLmpvaW4oJywgJyk7XG5cbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fYm9keScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgICAgJyAoJyArXG4gICAgICAgICAgcGFyYW1zICtcbiAgICAgICAgICAnKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCcgK1xuICAgICAgICAgIHBhcmFtcyArXG4gICAgICAgICAgJykgfTsnXG4gICAgICApKGJvZHkpO1xuICAgICAgaWYgKG1ldGhvZE5hbWUgIT09ICduYW1lJykge1xuICAgICAgICBDbGFzc1ttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgICAgICAnICgnICtcbiAgICAgICAgICAgIHBhcmFtc1dpdGhDb250ZXh0ICtcbiAgICAgICAgICAgICcpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsJyArXG4gICAgICAgICAgICBwYXJhbXNXaXRoQ29udGV4dCArXG4gICAgICAgICAgICAnKSB9OydcbiAgICAgICAgKShib2R5V2l0aENvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX2JvZHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgKyBtZXRob2ROYW1lICsgJyAoKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgICBpZiAobWV0aG9kTmFtZSAhPT0gJ25hbWUnKSB7XG4gICAgICAgIENsYXNzW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICdfX2JvZHknLFxuICAgICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAgICcgKGNvbnRleHQpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsIGNvbnRleHQpIH07J1xuICAgICAgICApKGJvZHlXaXRoQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZEV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnRzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50cyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIGV2ZW50cyA9IGdldEV2ZW50cyhtb2RlbCk7XG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIGV2ZW50KG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcGFyYW1zTmFtZSA9IGdldFBhcmFtTmFtZXMoY2xhc3NJZCwgbWV0aG9kTmFtZSk7XG4gICAgdmFyIHBhcmFtcyA9IHBhcmFtc05hbWUuam9pbignLCAnKTtcblxuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSgpIHtcbiAgICAgIHZhciBzeXN0ZW1zID0gW107XG4gICAgICB2YXIgc3lzdGVtSWQgPSAnZTg5YzYxN2I2YjE1ZDI0JztcbiAgICAgIHZhciBkYXRhID0gW107XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIgbGVuZ3RoID0gLTE7XG4gICAgICB2YXIgbWVzc2FnZSA9IHt9O1xuXG4gICAgICBpZiAoY2xhc3NJZCA9PT0gJ19DaGFubmVsJykge1xuICAgICAgICBzeXN0ZW1zID0gJGRiLl9TeXN0ZW0uZmluZCh7XG4gICAgICAgICAgbWFzdGVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICBzeXN0ZW1JZCA9IHN5c3RlbXNbMF0uX2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZS5mcm9tID0gc3lzdGVtSWQ7XG4gICAgICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRhdGEucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2UuZGF0YSA9IGRhdGE7XG4gICAgICAgIG1lc3NhZ2UuZXZlbnQgPSBtZXRob2ROYW1lO1xuXG4gICAgICAgICRkYi5fTWVzc2FnZS5pbnNlcnQobWVzc2FnZSk7XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICBzdGF0ZTogJ3NlbmQnLFxuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZXZlbnQ6IG1lc3NhZ2UuZXZlbnQsXG4gICAgICAgICAgICAgIGZyb206IG1lc3NhZ2UuZnJvbSxcbiAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgc3RhdGU6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgZGF0YTogYXJndW1lbnRzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAnICgnICtcbiAgICAgICAgICBwYXJhbXMgK1xuICAgICAgICAgICcpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsJyArXG4gICAgICAgICAgcGFyYW1zICtcbiAgICAgICAgICAnKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fYm9keScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArIG1ldGhvZE5hbWUgKyAnICgpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMpIH07J1xuICAgICAgKShib2R5KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkT25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGFkZE9uKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keShzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSAnJztcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XG5cbiAgICAvLyBjYXNlIG9mIGNvbnRleHRcbiAgICBpZiAoXG4gICAgICB1c2VDb3JlQVBJICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdCb29sZWFuJ1xuICAgICkge1xuICAgICAgY29udGV4dCA9IHVzZUNvcmVBUEk7XG4gICAgICB1c2VDb3JlQVBJID0gZmFsc2U7XG4gICAgICBpc0NvcmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29uJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzXG4gICAgICB9KVxuICAgICkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgfSkubGVuZ3RoID49IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrZmxvdy52YWxpZFBhcmFtTnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgdXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgaXNDb3JlLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LmFjdGlvbihiZWhhdmlvcklkLCBjdXJyZW50U3RhdGUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gIH07XG4gIENsYXNzLnByb3RvdHlwZS5vbiA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19ib2R5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsIHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGlzQ29yZSkgfTsnXG4gICkoYm9keSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRPbkNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgb24gbWV0aG9kIHRvIGEgY2xhc3MgY29tcG9uZW50IHRvIGFkZCBiZWhhdmlvcnMgdG8gdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIGJvZHkgPSBmdW5jdGlvbiBib2R5KHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGlzQ29yZSkge1xuICAgIHZhciBiZWhhdmlvcklkID0gJyc7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuICAgIHZhciBjb250ZXh0ID0gbnVsbDtcblxuICAgIC8vIGNhc2Ugb2YgY29udGV4dFxuICAgIGlmIChcbiAgICAgIHVzZUNvcmVBUEkgJiZcbiAgICAgIHVzZUNvcmVBUEkuY29uc3RydWN0b3IgJiZcbiAgICAgIHVzZUNvcmVBUEkuY29uc3RydWN0b3IubmFtZSAhPT0gJ0Jvb2xlYW4nXG4gICAgKSB7XG4gICAgICBjb250ZXh0ID0gdXNlQ29yZUFQSTtcbiAgICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgICAgIGlzQ29yZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgICR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29uJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzXG4gICAgICB9KVxuICAgICkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgfSkubGVuZ3RoID49IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrZmxvdy52YWxpZFBhcmFtTnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgdXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgaXNDb3JlLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LmFjdGlvbihiZWhhdmlvcklkLCBjdXJyZW50U3RhdGUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gIH07XG4gIENsYXNzLm9uID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGlzQ29yZSkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgaXNDb3JlKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9mZkNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG9mZiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gcmVtb3ZlIGJlaGF2aW9ycyBmcm9tIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoc3RhdGUsIGJlaGF2aW9ySWQpIHtcbiAgICBpZiAoXG4gICAgICAkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIG1ldGhvZE5hbWU6ICdvZmYnLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHNcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgIGJlaGF2aW9ySWQ6IGJlaGF2aW9ySWQsXG4gICAgICAgICAgY29tcG9uZW50SWQ6IGNsYXNzSWQsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPZmYoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgQ2xhc3Mub2ZmID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gb2ZmIChzdGF0ZSwgYmVoYXZpb3JJZCkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgc3RhdGUsIGJlaGF2aW9ySWQpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkRGVzdHJveUNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgZGVzdHJveSBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gZGV0cm95IHRoZSBjbGFzcyBhbmQgYWxsIHRoZSBjb21wb25lbnRzIG9mIHRoZSBzYW1lIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZERlc3Ryb3lDbGFzcyhDbGFzcykge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgdmFyIGlkID0gdGhpcy5pZCgpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAvLyBpZiBub3QgdmlydHVhbCBjb21wb25lbnRcbiAgICBpZiAoJGRiW2lkXSkge1xuICAgICAgcmVzdWx0ID0gJGRiW2lkXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBkZWxldGUgc3RvcmVbaWRdO1xuXG4gICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xuICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgY29tcG9uZW50SWQ6IGlkXG4gICAgfSk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xuICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgIGNvbXBvbmVudElkOiByZXN1bHRbaV1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgc3RhdGU6ICdkZXN0cm95J1xuICAgIH0pO1xuICB9O1xuICBDbGFzcy5kZXN0cm95ID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gZGVzdHJveSAoKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZFJlcXVpcmVDbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFJlcXVpcmUgYSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gYWRkUmVxdWlyZUNsYXNzKENsYXNzKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keShpZCkge1xuICAgIHJldHVybiBleHBvcnRzLmdldChpZCk7XG4gIH07XG4gIENsYXNzLnJlcXVpcmUgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiByZXF1aXJlIChpZCkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgaWQpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkSW5pdENsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW5pdCBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZEluaXRDbGFzcyhDbGFzcykge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7fTtcbiAgQ2xhc3MuaW5pdCA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19ib2R5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIGluaXQgKGNvbmYpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsIGNvbmYpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkQ2xhc3NJbmZvQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgdGhlIENsYXNzSW5mbyBtZXRob2Qgb24gYSBjbGFzc1xuICovXG5mdW5jdGlvbiBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcykge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gIH07XG4gIENsYXNzLmNsYXNzSW5mbyA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19ib2R5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIGNsYXNzSW5mbyAoKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGZhY3RvcnlcbiAqIEBwYXJhbSB7SlNPTn0gY29uZmlnIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybnMge0NvbXBvbmVudH0gdGhlIGNyZWF0ZWQgY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uXG4gKi9cbmZ1bmN0aW9uIGZhY3RvcnkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICB2YXIgQ2xhc3MgPSB7fTtcbiAgdmFyIGNsYXNzSWQgPSAnJztcblxuICBpZiAodHlwZW9mIGNvbmZpZy5tb2RlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjbGFzc0lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NJZCA9IGNvbmZpZy5tb2RlbDtcbiAgfVxuXG4gIENsYXNzID0gY3JlYXRlQ2xhc3MoY2xhc3NJZCk7XG5cbiAgc3RvcmVbY2xhc3NJZF0gPSBDbGFzcztcblxuICBhZGRJZENsYXNzKENsYXNzLCBjbGFzc0lkKTtcblxuICBhZGRQcm9wZXJ0aWVzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuICBhZGRNZXRob2RzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuICBhZGRFdmVudHMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG5cbiAgLy8gYWRkIGRlZmF1bHQgcHJvcGVydGllcy9tZXRob2RzIG9ubHkgaWYgdGhlIGNvbXBvbmVudFxuICAvLyBpbmhlcml0IGZyb20gX0NvbXBvbmVudFxuICBpZiAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbShjbGFzc0lkLCAnX0NvbXBvbmVudCcpKSB7XG4gICAgYWRkT24oQ2xhc3MsIGNsYXNzSWQpO1xuXG4gICAgYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkT2ZmQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgIGFkZFJlcXVpcmVDbGFzcyhDbGFzcyk7XG4gICAgYWRkSW5pdENsYXNzKENsYXNzKTtcbiAgICBhZGREZXN0cm95Q2xhc3MoQ2xhc3MpO1xuICAgIGFkZENsYXNzSW5mb0NsYXNzKENsYXNzKTtcbiAgfVxuXG4gIE9iamVjdC5mcmVlemUoQ2xhc3MpO1xuXG4gIHJldHVybiBDbGFzcztcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIEdldCBhIGNvbXBvbmVudCBieSBpdHMgaWRcbiAqL1xuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgcmV0dXJuIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgPGJyPlxuICoge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZSA8YnI+XG4gKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGNvbmZpZykge1xuICByZXR1cm4gZmFjdG9yeShjb25maWcpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50IHRvIGRlc3Ryb3lcbiAqIEBkZXNjcmlwdGlvbiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkXG4gKi9cbmV4cG9ydHMuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koaWQpIHtcbiAgdmFyIGNvbXBvbmVudCA9IHN0b3JlW2lkXTtcbiAgdmFyIGNsYXNzSWQgPSAnJztcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICBjbGFzc0lkID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgJGRiW2NsYXNzSWRdLnJlbW92ZSh7XG4gICAgICBfaWQ6IGlkXG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICBjb21wb25lbnRJZDogaWRcbiAgICB9KTtcblxuICAgIC8vIGNhc2Ugb2YgQmVoYXZpb3JcbiAgICBpZiAoY2xhc3NJZCA9PT0gJ19CZWhhdmlvcicpIHtcbiAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KGlkKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGNvbXBvbmVudCB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5yZW1vdmVGcm9tTWVtb3J5ID0gZnVuY3Rpb24gcmVtb3ZlRnJvbU1lbW9yeShpZCkge1xuICBkZWxldGUgc3RvcmVbaWRdO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFsbCB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7fTtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAcmVxdWlyZXMgbG9nXG4gKiBAcmVxdWlyZXMgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBzdGF0ZVxuICogQHJlcXVpcmVzIHdvcmtmbG93XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZS5cbiAqIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIGlzIGEgbWljcm8gTm9TUUwgRGF0YWJhc2UgdGhhdCBjb250YWluczpcbiAqIC0gY29sbGVjdGlvbnMgdG8gc3RvcmUgZG9jdW1lbnRzIChzY2hlbWFzLCB0eXBlcywgY29tcG9uZW50cywgLi4uKSBhbmRcbiAqIC0gQVBJcyB0byBpbXBvcnQgb3IgZXhwb3J0IGRvY3VtZW50cy5cbiAqXG4gKiBTeXN0ZW0gUnVudGltZSBEYXRhYmFzZSBpcyBjbG9zZWx5IGxpbmtlZCB0byBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwgYW5kIFN5c3RlbSBSdW50aW1lIGNvbXBvbmVudHMgYmVjYXVzZTpcbiAqIC0gYWxsIG9wZXJhdGlvbnMgZG9uZSBieSBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSBtdXN0IGJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgYmVpbmcgZmluaXNoZWQsXG4gKiAtIGluc2VydCBvcGVyYXRpb24gYXV0b21hdGljYWxseSBjcmVhdGVzIGEgY29tcG9uZW50IGFuZFxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZS5qcycpO1xudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBjb2xsZWN0aW9ucyA9IFtdO1xudmFyIGludGVybmFsREIgPSBbXG4gICdfUnVudGltZScsXG4gICdfU2NoZW1hJyxcbiAgJ19Nb2RlbCcsXG4gICdfR2VuZXJhdGVkTW9kZWwnLFxuICAnX0JlaGF2aW9yJyxcbiAgJ19TdGF0ZScsXG4gICdfVHlwZScsXG4gICdfTWV0YW1vZGVsJyxcbiAgJ19EYXRhYmFzZScsXG4gICdfU3lzdGVtJyxcbiAgJ19DbGFzc0luZm8nLFxuICAnX01lc3NhZ2UnLFxuICAnX0NoYW5uZWwnLFxuICAnX0xvZ2dlcicsXG4gICdfTG9nJ1xuXTtcbnZhciBjb3JlRGIgPSBbXG4gICdfTG9nJyxcbiAgJ19TY2hlbWEnLFxuICAnX0xvZ2dlcicsXG4gICdfTW9kZWwnLFxuICAnX0dlbmVyYXRlZE1vZGVsJyxcbiAgJ19TdGF0ZScsXG4gICdfVHlwZSdcbl07XG52YXIgbG9nT3JkZXIgPSAwO1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGluY0xvZ09yZGVyXG4gKiBAZGVzY3JpcHRpb24gSW5jcmVtZW50IExvZ1xuICovXG5mdW5jdGlvbiBpbmNMb2dPcmRlcigpIHtcbiAgcmV0dXJuIGxvZ09yZGVyKys7XG59XG5cbi8qKlxuICogQG1ldGhvZCBkdW1wXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZHVtcCBvZiB0aGUgZGF0YWJhc2UuIFRoZSBkdW1wIGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiB7T2JqZWN0fSBzY2hlbWFzIHRoZSBzY2hlbWFzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSB0eXBlcyB0aGUgdHlwZXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGJlaGF2aW9ycyB0aGUgYmVoYXZpb3JzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBjb21wb25lbnRzIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBkYXRhYmFzZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBEdW1wIHRoZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBkdW1wKCkge1xuICB2YXIgZGJEdW1wID0ge307XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICB2YXIgdHlwZUlkID0gJyc7XG4gIHZhciB0eXBlID0gbnVsbDtcbiAgdmFyIGJlaGF2aW9yID0gbnVsbDtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBjb2xsZWN0aW9uID0gbnVsbDtcbiAgdmFyIHNjaGVtYUlkID0gJyc7XG4gIHZhciBtb2RlbElkID0gJyc7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBpZCA9ICcnO1xuXG4gIC8vIHNjaGVtYXNcbiAgZGJEdW1wLnNjaGVtYXMgPSB7fTtcbiAgaWYgKGV4cG9ydHMuX1NjaGVtYS5jb3VudCgpKSB7XG4gICAgZm9yIChzY2hlbWFJZCBpbiBleHBvcnRzLnN0b3JlLl9TY2hlbWEpIHtcbiAgICAgIGlmICghZXhwb3J0cy5zdG9yZS5fU2NoZW1hW3NjaGVtYUlkXS5fY29yZSkge1xuICAgICAgICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmUuX1NjaGVtYVtzY2hlbWFJZF0pKTtcbiAgICAgICAgZGJEdW1wLnNjaGVtYXNbc2NoZW1hSWRdID0gc2NoZW1hO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGVsc1xuICBkYkR1bXAubW9kZWxzID0ge307XG4gIGlmIChleHBvcnRzLl9Nb2RlbC5jb3VudCgpKSB7XG4gICAgZm9yIChtb2RlbElkIGluIGV4cG9ydHMuc3RvcmUuX01vZGVsKSB7XG4gICAgICBpZiAoIWV4cG9ydHMuc3RvcmUuX01vZGVsW21vZGVsSWRdLl9jb3JlKSB7XG4gICAgICAgIG1vZGVsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9Nb2RlbFttb2RlbElkXSkpO1xuICAgICAgICBkYkR1bXAubW9kZWxzW21vZGVsSWRdID0gbW9kZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZXNcbiAgZGJEdW1wLnR5cGVzID0ge307XG4gIGlmIChleHBvcnRzLl9UeXBlLmNvdW50KCkpIHtcbiAgICBmb3IgKHR5cGVJZCBpbiBleHBvcnRzLnN0b3JlLl9UeXBlKSB7XG4gICAgICBpZiAoIWV4cG9ydHMuc3RvcmUuX1R5cGVbdHlwZUlkXS5jb3JlKSB7XG4gICAgICAgIHR5cGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmUuX1R5cGVbdHlwZUlkXSkpO1xuICAgICAgICBkYkR1bXAudHlwZXNbdHlwZS5uYW1lXSA9IHR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYmVoYXZpb3JzXG4gIGRiRHVtcC5iZWhhdmlvcnMgPSB7fTtcbiAgZm9yIChiZWhhdmlvcklkIGluIGV4cG9ydHMuc3RvcmUuX0JlaGF2aW9yKSB7XG4gICAgaWYgKCFleHBvcnRzLnN0b3JlLl9CZWhhdmlvcltiZWhhdmlvcklkXS5jb3JlKSB7XG4gICAgICBiZWhhdmlvciA9IEpTT04ucGFyc2UoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmUuX0JlaGF2aW9yW2JlaGF2aW9ySWRdKVxuICAgICAgKTtcbiAgICAgIGRiRHVtcC5iZWhhdmlvcnNbYmVoYXZpb3JJZF0gPSBiZWhhdmlvcjtcbiAgICB9XG4gIH1cblxuICAvLyBjb21wb25lbnRzXG4gIGRiRHVtcC5jb21wb25lbnRzID0ge307XG4gIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICBpZiAoZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0uY291bnQoKSkge1xuICAgICAgY29sbGVjdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhwb3J0cy5zdG9yZVtjb2xsZWN0aW9uTmFtZV0pKTtcblxuICAgICAgZm9yIChpZCBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmIChjb2xsZWN0aW9uW2lkXS5fY29yZSkge1xuICAgICAgICAgIGRlbGV0ZSBjb2xsZWN0aW9uW2lkXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoY29sbGVjdGlvbikubGVuZ3RoKSB7XG4gICAgICAgIGRiRHVtcC5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSA9IGNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRiRHVtcDtcbn1cblxuLyoqXG4gKiBAY2xhc3MgX0FycmF5XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFN1YiBjbGFzcyB0byBvdmVycmlkZSBzb3J0IG1ldGhvZCBvZiBBcnJheSBDbGFzc1xuICovXG5mdW5jdGlvbiBfQXJyYXkoKSB7XG4gIHZhciBhcnIgPSBbXTtcblxuICAvKipcbiAgICogQG1ldGhvZCBzb3J0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBwYXJhbSB0aGUgc29ydCBmdW5jdGlvbiBvciB0aGUgc29ydCBxdWVyeVxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBzb3J0ZWQgYXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNvcnQgbWV0aG9kXG4gICAqL1xuICBhcnIuc29ydCA9IGZ1bmN0aW9uIHNvcnQocGFyYW0pIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICB2YXIgZmllbGQgPSAnJztcbiAgICB2YXIgYXJyQ29weSA9IFtdO1xuXG4gICAgLy8gY29weVxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgYXJyQ29weS5wdXNoKHZhbCk7XG4gICAgfSk7XG5cbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgYXJyQ29weS5zb3J0KHBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBPYmplY3Qua2V5cyhwYXJhbSlbMF07XG4gICAgICBhcnJDb3B5LnNvcnQoZnVuY3Rpb24oZG9jQSwgZG9jQikge1xuICAgICAgICBpZiAoZG9jQVtmaWVsZF0gPCBkb2NCW2ZpZWxkXSkge1xuICAgICAgICAgIHJldHVybiBwYXJhbVtmaWVsZF0gPT09IDEgPyAtMSA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY0FbZmllbGRdID4gZG9jQltmaWVsZF0pIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1bZmllbGRdID09PSAxID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyckNvcHk7XG4gIH07XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuX0FycmF5LnByb3RvdHlwZSA9IFtdO1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFdpdGhTZWxlY3RvcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCBmaWVsZCBvbiB3aGljaCBtYWRlIHRoZSBzZWFyY2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeSBxdWVyeSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2N1bWVudCBkb2N1bWVudCBvYmplY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSAgdXNlZCBmb3IgdGhlIHNlYXJjaCBpcyB2YWxpZCB3aXRoIHRoZSBkb2N1bWVudFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIHRoZSBxdWVyeSB1c2VkIGZvciB0aGUgc2VhcmNoIGlzIHZhbGlkIHdpdGggdGhlIGRvY3VtZW50XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRXaXRoU2VsZWN0b3JzKGZpZWxkLCBxdWVyeSwgZG9jdW1lbnQpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBzZWxlY3RvciA9ICcnO1xuXG4gIHNlYXJjaDogZm9yIChzZWxlY3RvciBpbiBxdWVyeSkge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBzZWxlY3RvciA9PT0gJyRlcSc6XG4gICAgICAgIGlmIChxdWVyeVtzZWxlY3Rvcl0gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdLnRvU3RyaW5nKCkubWF0Y2gocXVlcnlbc2VsZWN0b3JdKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gIT09IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZWxlY3RvciA9PT0gJyRndCc6XG4gICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gPD0gcXVlcnlbc2VsZWN0b3JdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZWxlY3RvciA9PT0gJyRndGUnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdIDwgcXVlcnlbc2VsZWN0b3JdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZWxlY3RvciA9PT0gJyRsdCc6XG4gICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gPj0gcXVlcnlbc2VsZWN0b3JdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZWxlY3RvciA9PT0gJyRsdGUnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdID4gcXVlcnlbc2VsZWN0b3JdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZWxlY3RvciA9PT0gJyRuZSc6XG4gICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gPT09IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckaW4nOlxuICAgICAgICBpZiAoXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShxdWVyeVtzZWxlY3Rvcl0pICYmXG4gICAgICAgICAgcXVlcnlbc2VsZWN0b3JdLmluZGV4T2YoZG9jdW1lbnRbZmllbGRdKSA9PT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZWxlY3RvciA9PT0gJyRuaW4nOlxuICAgICAgICBpZiAoXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShxdWVyeVtzZWxlY3Rvcl0pICYmXG4gICAgICAgICAgcXVlcnlbc2VsZWN0b3JdLmluZGV4T2YoZG9jdW1lbnRbZmllbGRdKSAhPT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgcXVlcnkgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnQgZG9jdW1lbnQgb2JqZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgb2Ygc2VhcmNoIGlzIHZhbGlkIHdpdGggdGhlIGRvY3VtZW50XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgdGhlIHF1ZXJ5IG9mIHNlYXJjaCBpcyB2YWxpZCB3aXRoIHRoZSBkb2N1bWVudFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkKHF1ZXJ5LCBkb2N1bWVudCkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIGZpbmRJbkFycmF5ID0gZmFsc2U7XG4gIHZhciBmaWVsZCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIHNlYXJjaDogZm9yIChmaWVsZCBpbiBxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnRbZmllbGRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIC8vIHJlZ3VsYXIgZXhwcmVzc2lvblxuICAgICAgICBjYXNlIHF1ZXJ5W2ZpZWxkXSBpbnN0YW5jZW9mIFJlZ0V4cDpcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkb2N1bWVudFtmaWVsZF0pICYmICFBcnJheS5pc0FycmF5KHF1ZXJ5W2ZpZWxkXSkpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGRvY3VtZW50W2ZpZWxkXS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXVtpXS50b1N0cmluZygpLm1hdGNoKHF1ZXJ5W2ZpZWxkXSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmaW5kSW5BcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBmaW5kSW5BcnJheTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXS50b1N0cmluZygpLm1hdGNoKHF1ZXJ5W2ZpZWxkXSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gcXVlcnkgc2VsZWN0b3JzXG4gICAgICAgIGNhc2UgcXVlcnlbZmllbGRdIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHF1ZXJ5W2ZpZWxkXSk6XG4gICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFdpdGhTZWxlY3RvcnMoZmllbGQsIHF1ZXJ5W2ZpZWxkXSwgZG9jdW1lbnQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIG11bHRpcGxlIHF1ZXJ5XG4gICAgICAgIGNhc2UgQXJyYXkuaXNBcnJheShkb2N1bWVudFtmaWVsZF0pICYmICFBcnJheS5pc0FycmF5KHF1ZXJ5W2ZpZWxkXSk6XG4gICAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXS5pbmRleE9mKHF1ZXJ5W2ZpZWxkXSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gc2ltcGxlIHF1ZXJ5XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSAhPT0gcXVlcnlbZmllbGRdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpbXBTeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBTeXN0ZW0gUnVudGltZSBzeXN0ZW0gdG8gaW1wb3J0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIFN5c3RlbSBSdW50aW1lIHN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJbXBvcnQgc3lzdGVtIGludG8gdGhlIGRhdGFiYXNlXG4gKi9cbmZ1bmN0aW9uIGltcFN5c3RlbShpbXBvcnRlZFN5c3RlbSkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuICB2YXIgY29tcG9uZW50SWQgPSAnJztcbiAgdmFyIHR5cGVOYW1lID0gJyc7XG4gIHZhciBzY2hlbWFOYW1lID0gJyc7XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgdmFyIHN5c3RlbXMgPSBbXTtcbiAgdmFyIGlkID0gbnVsbDtcblxuICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgICAvLyByZW1vdmUgZGVwcmVjYXRlZCBwcm9wZXJ0eVxuICAgIGRlbGV0ZSBpbXBvcnRlZFN5c3RlbS5zdWJzeXN0ZW07XG5cbiAgICAvLyBhZGQgdHlwZXNcbiAgICBmb3IgKHR5cGVOYW1lIGluIGltcG9ydGVkU3lzdGVtLnR5cGVzKSB7XG4gICAgICAkbWV0YW1vZGVsLnR5cGUoaW1wb3J0ZWRTeXN0ZW0udHlwZXNbdHlwZU5hbWVdKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgc2NoZW1hc1xuICAgIGZvciAoc2NoZW1hTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS5zY2hlbWFzKSB7XG4gICAgICAkbWV0YW1vZGVsLnNjaGVtYShpbXBvcnRlZFN5c3RlbS5zY2hlbWFzW3NjaGVtYU5hbWVdKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbW9kZWxzXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0ubW9kZWxzKSB7XG4gICAgICAkbWV0YW1vZGVsLm1vZGVsKGltcG9ydGVkU3lzdGVtLm1vZGVsc1ttb2RlbE5hbWVdKTtcbiAgICB9XG5cbiAgICAkbWV0YW1vZGVsLmNyZWF0ZSgpO1xuXG4gICAgLy8gYWRkIGJlaGF2aW9yc1xuICAgIGZvciAoYmVoYXZpb3JJZCBpbiBpbXBvcnRlZFN5c3RlbS5iZWhhdmlvcnMpIHtcbiAgICAgIGV4cG9ydHMuX0JlaGF2aW9yLmluc2VydChpbXBvcnRlZFN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3JJZF0pO1xuICAgIH1cblxuICAgIC8vIGFkZCBjb21wb25lbnRzXG4gICAgZm9yIChjb2xsZWN0aW9uTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzKSB7XG4gICAgICBmb3IgKGNvbXBvbmVudElkIGluIGltcG9ydGVkU3lzdGVtLmNvbXBvbmVudHNbY29sbGVjdGlvbk5hbWVdKSB7XG4gICAgICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmluc2VydChcbiAgICAgICAgICBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXVtjb21wb25lbnRJZF1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXNldCBpbmZvIGlmIGFscmVhZHkgYSBtYXN0ZXIgc3lzdGVtXG4gICAgc3lzdGVtcyA9IGV4cG9ydHMuX1N5c3RlbS5maW5kKHtcbiAgICAgIG1hc3RlcjogdHJ1ZVxuICAgIH0pO1xuICAgIGlmIChzeXN0ZW1zLmxlbmd0aCkge1xuICAgICAgaWYgKHN5c3RlbXNbMF0uX2lkID09PSBpbXBvcnRlZFN5c3RlbS5faWQpIHtcbiAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpbXBvcnRlZFN5c3RlbS5tYXN0ZXIpIHtcbiAgICAgICAgICBzeXN0ZW1zWzBdLm1hc3RlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0IHRoZSBzeXN0ZW0gaW4gREJcbiAgICBleHBvcnRzLl9TeXN0ZW0uaW5zZXJ0KGltcG9ydGVkU3lzdGVtKTtcblxuICAgIHJlc3VsdCA9IGltcG9ydGVkU3lzdGVtLl9pZDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBleHBTeXN0ZW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgc3lzdGVtXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEV4cG9ydCBhIHN5c3RlbSBmcm9tIHRoZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBleHBTeXN0ZW0oKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGNvbGxlY3Rpb25OYW1lID0gJyc7XG4gIHZhciBiZWhhdmlvcklkID0gJyc7XG4gIHZhciBzeXN0ZW1zID0gW107XG4gIHZhciBpZCA9IG51bGw7XG4gIHZhciBkYkR1bXAgPSBudWxsO1xuICB2YXIgbWFzdGVyc3lzdGVtID0gbnVsbDtcbiAgdmFyIGJlaGF2aW9yID0gbnVsbDtcbiAgdmFyIGV4cG9ydGVkU3lzdGVtID0ge307XG5cbiAgLy8gZ2V0IGlkIG9mIHRoZSBtYXN0ZXIgc3lzdGVtXG4gIHN5c3RlbXMgPSBleHBvcnRzLl9TeXN0ZW0uZmluZCh7XG4gICAgbWFzdGVyOiB0cnVlXG4gIH0pO1xuXG4gIGlmIChzeXN0ZW1zLmxlbmd0aCkge1xuICAgIG1hc3RlcnN5c3RlbSA9IHN5c3RlbXNbMF07XG4gICAgaWQgPSBtYXN0ZXJzeXN0ZW0uX2lkO1xuXG4gICAgLy8gcHJvcFxuICAgIGV4cG9ydGVkU3lzdGVtLl9pZCA9IGlkO1xuICAgIGV4cG9ydGVkU3lzdGVtLm5hbWUgPSBtYXN0ZXJzeXN0ZW0ubmFtZTtcbiAgICBleHBvcnRlZFN5c3RlbS5kZXNjcmlwdGlvbiA9IG1hc3RlcnN5c3RlbS5kZXNjcmlwdGlvbjtcbiAgICBleHBvcnRlZFN5c3RlbS52ZXJzaW9uID0gbWFzdGVyc3lzdGVtLnZlcnNpb247XG4gICAgZXhwb3J0ZWRTeXN0ZW0ubWFzdGVyID0gdHJ1ZTtcblxuICAgIC8vIGR1bXBcbiAgICBkYkR1bXAgPSBkdW1wKCk7XG4gICAgZm9yIChjb2xsZWN0aW9uTmFtZSBpbiBkYkR1bXApIHtcbiAgICAgIGlmIChkYkR1bXAuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpKSB7XG4gICAgICAgIGV4cG9ydGVkU3lzdGVtW2NvbGxlY3Rpb25OYW1lXSA9IGRiRHVtcFtjb2xsZWN0aW9uTmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZXhwb3J0ZWRTeXN0ZW0pO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICd7fSc7XG4gICAgJGxvZy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGV4cG9ydFN1YnN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybnMge1N0cmluZ30gYSBzdHJpbmdpZmllZCBzdWItc3lzdGVtXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEV4cG9ydCBhIHN1Yi1zeXN0ZW1cbiAqL1xuZnVuY3Rpb24gZXhwU3Vic3lzdGVtKHBhcmFtcykge1xuICB2YXIgc3lzdGVtID0ge307XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGRlZmF1bHROYW1lID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBjb21wb25lbnQgPSBudWxsO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgcmVzdWx0ID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgIG1hc3RlcjogdHJ1ZVxuICB9KTtcbiAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICBkZWZhdWx0TmFtZSA9IHJlc3VsdFswXS5uYW1lO1xuICB9XG5cbiAgc3lzdGVtLm5hbWUgPSBwYXJhbXMubmFtZSB8fCAnc3ViXycgKyBkZWZhdWx0TmFtZTtcbiAgc3lzdGVtLnZlcnNpb24gPSBwYXJhbXMudmVyc2lvbiB8fCAnMC4wLjEnO1xuICBzeXN0ZW0uZGVzY3JpcHRpb24gPSBwYXJhbXMuZGVzY3JpcHRpb24gfHwgJyc7XG5cbiAgLy8gc2NoZW1hc1xuICBzeXN0ZW0uc2NoZW1hcyA9IHt9O1xuICBpZiAocGFyYW1zLnNjaGVtYXMpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLl9TY2hlbWEuZmluZChwYXJhbXMuc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzY2hlbWEgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICBzeXN0ZW0uc2NoZW1hc1tzY2hlbWEuX2lkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBtb2RlbHNcbiAgc3lzdGVtLm1vZGVscyA9IHt9O1xuICBpZiAocGFyYW1zLm1vZGVscykge1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuX01vZGVsLmZpbmQocGFyYW1zLm1vZGVscyk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbW9kZWwgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAgIHN5c3RlbS5tb2RlbHNbbW9kZWwuX2lkXSA9IG1vZGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGVzXG4gIHN5c3RlbS50eXBlcyA9IHt9O1xuICBpZiAocGFyYW1zLnR5cGVzKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5fVHlwZS5maW5kKHBhcmFtcy50eXBlcyk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdHlwZSA9IHJlc3VsdFtpXTtcbiAgICAgIGlmICghdHlwZS5fY29yZSkge1xuICAgICAgICBzeXN0ZW0udHlwZXNbdHlwZS5faWRdID0gdHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBiZWhhdmlvcnNcbiAgc3lzdGVtLmJlaGF2aW9ycyA9IHt9O1xuICBpZiAocGFyYW1zLmJlaGF2aW9ycykge1xuICAgIGJlaGF2aW9yID0gZXhwb3J0cy5fQmVoYXZpb3IuZmluZChwYXJhbXMuYmVoYXZpb3JzKTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBiZWhhdmlvciA9IHJlc3VsdFtpXTtcbiAgICAgIGlmICghYmVoYXZpb3IuY29yZSkge1xuICAgICAgICBzeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9yLl9pZF0gPSBiZWhhdmlvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjb21wb25lbnRzXG4gIHN5c3RlbS5jb21wb25lbnRzID0ge307XG4gIGlmIChwYXJhbXMuY29tcG9uZW50cykge1xuICAgIGZvciAoY2xhc3NOYW1lIGluIHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgICBpZiAoZXhwb3J0c1tjbGFzc05hbWVdKSB7XG4gICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV0gPSB7fTtcblxuICAgICAgICByZXN1bHQgPSBleHBvcnRzW2NsYXNzTmFtZV0uZmluZChwYXJhbXMuY29tcG9uZW50c1tjbGFzc05hbWVdKTtcbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gcmVzdWx0W2ldO1xuICAgICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV1bY29tcG9uZW50Ll9pZF0gPSBjb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3lzdGVtKTtcbn1cblxuLyogUHVibGljIHByb3BlcnRpZXMgKi9cblxuLyoqXG4gKiBAcHJvcGVydHkge0pTT059IHN0b3JlXG4gKiBAZGVzY3JpcHRpb24gU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2Ugc3RvcmUgdGhhdCBsaXN0cyBhbGwgdGhlIGNvbGxlY3Rpb25zXG4gKi9cbmV4cG9ydHMuc3RvcmUgPSB7fTtcblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAY2xhc3MgRGF0YWJhc2VDb2xsZWN0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG5ldyBjb2xsZWN0aW9uXG4gKiBAQGRlc2NyaXB0aW9uIEEgY29sbGVjdGlvbiBvZiBkb2N1bWVudHMgbWFuYWdlZCBieSBTeXN0ZW0gUnVudGltZS5cbiAqIEludGVybmFsIGNvbGxlY3Rpb25zIG1hbmFnZSBjb3JlIG9iamVjdHMgb2YgU3lzdGVtIFJ1bnRpbWUgKHNjaGVtYSwgdHlwZSwgLi4uKS5cbiAqIFB1YmxpYyBjb2xsZWN0aW9ucyBtYW5hZ2UgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy5cbiAqL1xudmFyIERhdGFiYXNlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIERhdGFiYXNlQ29sbGVjdGlvbihuYW1lKSB7XG4gIGlmICgkbWV0YW1vZGVsLmdldFNjaGVtYShuYW1lKSB8fCBpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgZXhwb3J0cy5zdG9yZVtuYW1lXSA9IHt9O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgaWYgKGludGVybmFsREIuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgIGNvbGxlY3Rpb25zLnB1c2gobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZmluZFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5XG4gKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5IG9mIGRvY3VtZW50cyB0aGF0IG1hcCB0aGUgcXVlcnlcbiAqIEBkZXNjcmlwdGlvbiBGaW5kIGEgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAkZGIuUGVyc29uLmZpbmQoeyduYW1lJzogJ2xhdXJlJ30pO1xuICogJGRiLlBlcnNvbi5maW5kKHsnbmFtZSc6ICdsYXVyZScsICdhZ2UnIDogMjR9KTtcbiAqICRkYi5QZXJzb24uZmluZChbeyduYW1lJzogJ3JlbmUnfSwgeyduYW1lJzogJ3JvYmVydCd9XSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIGZpbmQocXVlcnkpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBfQXJyYXkoKTtcbiAgdmFyIHJlc3VsdElkID0ge307XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgZG9jdW1lbnQgPSB7fTtcblxuICBxdWVyeSA9IHF1ZXJ5IHx8IG51bGw7XG5cbiAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgIHF1ZXJ5LmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIG11bHRpU2VhcmNoKGNyaXRlcmlhKSB7XG4gICAgICAgICAgZm9yIChpZCBpbiBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIGRvY3VtZW50ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGNyaXRlcmlhLCBkb2N1bWVudCkpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRJZFtpZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdElkW2lkXSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpZCBpbiBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgZG9jdW1lbnQgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICBpZiAoaXNWYWxpZChxdWVyeSwgZG9jdW1lbnQpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICBkb2N1bWVudCA9IGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICByZXN1bHQucHVzaChkb2N1bWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnNlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBkb2N1bWVudCBhIG5ldyBvYmplY3QgdG8gYWRkXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IG9mIGlkIGNyZWF0ZWRcbiAqIEBkZXNjcmlwdGlvbiBJbnNlcnQgYW4gbmV3IGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb24uXG4gKiBCZWZvcmUgaW5zZXJ0aW5nIHRoZSBkb2N1bWVudCwgU3lzdGVtIFJ1bnRpbWUgY2hlY2tzIHRoYXQgdGhlIGRvY3VtZW50IGlzIGNvbXBsaWFudFxuICogd2l0aCBpdHMgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIFRoZW4sIGFmdGVyIGluc2VydGluZyBpdCwgd2UgY3JlYXRlIHRoZSBjb21wb25lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5QZXJzb24uaW5zZXJ0KHtcbiAqICAgICAgJ25hbWUnOiAnYm9iJyxcbiAqICAgICAgJ2ZpcnN0TmFtZSc6ICdTYWludC1DbGFyJyxcbiAqICAgICAgJ2FnZSc6IDQzXG4gKiB9KTtcbiAqL1xuRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoZG9jdW1lbnQpIHtcbiAgdmFyIGRvYyA9IFtdO1xuICB2YXIgQ29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGRvY3VtZW50KSkge1xuICAgIGRvYyA9IGRvY3VtZW50O1xuICB9IGVsc2Uge1xuICAgIGRvYy5wdXNoKGRvY3VtZW50KTtcbiAgfVxuXG4gIGRvYy5mb3JFYWNoKFxuICAgIGZ1bmN0aW9uIG11bHRpSW5zZXJ0KG9iaikge1xuICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICB2YXIgY2hhbm5lbHMgPSBbXTtcbiAgICAgIHZhciBjaGFubmVsID0gbnVsbDtcbiAgICAgIHZhciBzeXN0ZW1zID0gW107XG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ19TY2hlbWEnOlxuICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ19Mb2dnZXInOlxuICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ19Nb2RlbCc6XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX1R5cGUnOlxuICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ19HZW5lcmF0ZWRNb2RlbCc6XG4gICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KG9iaiwgJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpKTpcbiAgICAgICAgICBpZiAodHlwZW9mIG9iai5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmouX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJG1ldGFtb2RlbC5wcmVwYXJlT2JqZWN0KG9iaiwgJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpKTtcblxuICAgICAgICAgIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtvYmouX2lkXSA9IG9iajtcblxuICAgICAgICAgIENvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChvYmopO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29tcG9uZW50LmlkKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZygnaW5zZXJ0JywgdGhpcy5uYW1lLCBvYmouX2lkLCAnJywgb2JqKTtcblxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudDogb2JqXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMubmFtZSA9PT0gJ19NZXNzYWdlJykge1xuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgY2hhbm5lbHMgPSBleHBvcnRzLl9DaGFubmVsLmZpbmQoe30pO1xuICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gY2hhbm5lbHMubGVuZ3RoO1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbCA9ICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoY2hhbm5lbHNbaV0uX2lkKTtcbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBjaGFubmVsc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogb2JqLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgZGF0YTogb2JqLmRhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICRsb2cuaW52YWxpZERvY3VtZW50T25EYkluc2VydChvYmosIHRoaXMubmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIHVwZGF0ZSB0byBtYWtlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICoge0Jvb2xlYW59IHVwc2VydCB0cnVlIGlmIHdlIGNyZWF0ZSBhIGRvY3VtZW50IHdoZW4gbm8gZG9jdW1lbnQgaXMgZm91bmQgYnkgdGhlIHF1ZXJ5XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBOdW1iZXIgb2YgZG9jdW1lbnRzIHVwZGF0ZWRcbiAqIEBkZXNjcmlwdGlvbiBVcGRhdGUgZG9jdW1lbnRzIGludG8gYSBjb2xsZWN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5DYXJzLnVwZGF0ZSh7J2NvZGUnOiAnQVpELTcxJ30sIHsncHJpY2UnOiAnMTAwMDAkJ30pO1xuICogJGRiLkNhcnMudXBkYXRlKFt7J2NvZGUnOiAnQVpELTcxJ30sIHsnY29kZSc6ICdBWkQtNjUnfV0sIHsncHJpY2UnOiAnMTAwMDAkJ30pO1xuICogJGRiLkNhcnMudXBkYXRlKHsnY29kZSc6ICdBWkQtNzEnfSwgeydwcmljZSc6ICcxMDAwMCQnfSwgeyd1cHNlcnQnOiB0cnVlfSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHF1ZXJ5LCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIGRvY3MgPSB0aGlzLmZpbmQocXVlcnkpO1xuICB2YXIgdXBkYXRlZCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IGRvY3MubGVuZ3RoO1xuICB2YXIgYXR0cmlidXRlTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpO1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAodHlwZW9mIG9wdGlvbnMudXBzZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMudXBzZXJ0ID0gb3B0aW9ucy51cHNlcnQgfHwgZmFsc2U7XG4gIH1cblxuICBpZiAodXBkYXRlKSB7XG4gICAgLy8gdXBzZXJ0IGNhc2VcbiAgICBpZiAobGVuZ3RoID09PSAwICYmIG9wdGlvbnMudXBzZXJ0KSB7XG4gICAgICBpZiAocXVlcnkuX2lkKSB7XG4gICAgICAgIHVwZGF0ZS5faWQgPSBxdWVyeS5faWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmluc2VydCh1cGRhdGUpO1xuICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLy8gY2FzZSBvZiB1cGRhdGUgb2YgX2lkXG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZS5faWQgIT09ICd1bmRlZmluZWQnICYmIHVwZGF0ZS5faWQgIT09IGRvY3NbaV0uX2lkKSB7XG4gICAgICAgICRsb2cudXBkYXRlVXVpZChcbiAgICAgICAgICBkb2NzW2ldLl9pZCxcbiAgICAgICAgICB1cGRhdGUuX2lkLFxuICAgICAgICAgIHR5cGVvZiAkY29tcG9uZW50LmdldCh1cGRhdGUuX2lkKSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChhdHRyaWJ1dGVOYW1lIGluIHVwZGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3NbaV1bYXR0cmlidXRlTmFtZS5zcGxpdCgnLicpWzBdXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLm5hbWUgIT09ICdfU2NoZW1hJyAmJlxuICAgICAgICAgICAgdGhpcy5uYW1lICE9PSAnX01vZGVsJyAmJlxuICAgICAgICAgICAgdGhpcy5uYW1lICE9PSAnX0dlbmVyYXRlZE1vZGVsJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgICAgdHlwZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKHRoaXMubmFtZSwgYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHNjaGVtYVthdHRyaWJ1dGVOYW1lXS50eXBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coXG4gICAgICAgICAgICAgICAgICAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFt1cGRhdGVbYXR0cmlidXRlTmFtZV0sICdyZXNldCddXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFt1cGRhdGVbYXR0cmlidXRlTmFtZV1dXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZShcbiAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSxcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGUoXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgZG9jc1tpXS5faWRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVE9ETyBtb3JlIGNoZWNrIGluIGNhc2Ugb2Ygc2NoZW1hIHVwZGF0ZVxuICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcblxuICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coXG4gICAgICAgICAgICAgICd1cGRhdGUnLFxuICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgIGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICB1cGRhdGVbYXR0cmlidXRlTmFtZV1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHVwZGF0ZWQgPSB1cGRhdGVkICsgMTtcbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgaWQ6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgZmllbGQ6IGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZWQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnkgcXVlcnkgdG8gZmluZCB0aGUgZG9jdW1lbnRzIHRvIHJlbW92ZVxuICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIGRvY3VtZW50cyBpZCByZW1vdmVkXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgZG9jdW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAqIFdoZW4gYSBkb2N1bWVudCBpcyByZW1vdmVkLCB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLkNhcnMucmVtb3ZlKHsnY29kZSc6ICdBWkQtNzEnfSk7XG4gKiAkZGIuQ2Fycy5yZW1vdmUoW3snY29kZSc6ICdBWkQtNzEnfSwgeydjb2RlJzogJ0FaRC02NSd9XSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHF1ZXJ5KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGlkID0gJyc7XG4gIHZhciBjb21wb25lbnQgPSBudWxsO1xuICB2YXIgb2JqZWN0ID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICBxdWVyeS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiBtdWx0aVJlbW92ZShjcml0ZXJpYSkge1xuICAgICAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICBpZiAoaXNWYWxpZChjcml0ZXJpYSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICBkZWxldGUgZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZygncmVtb3ZlJywgdGhpcy5uYW1lLCBpZCwgJycsICcnKTtcblxuICAgICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgIG9iamVjdCA9IGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgaWYgKGlzVmFsaWQocXVlcnksIG9iamVjdCkpIHtcbiAgICAgICAgICBkZWxldGUgZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKCdyZW1vdmUnLCB0aGlzLm5hbWUsIGlkLCAnJywgJycpO1xuXG4gICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChpZCBpbiBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgIGRlbGV0ZSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICBleHBvcnRzLmNyZWF0ZUxvZygncmVtb3ZlJywgdGhpcy5uYW1lLCBpZCwgJycsICcnKTtcblxuICAgICAgaWYgKGNvcmVEYi5pbmRleE9mKHRoaXMubmFtZSkgPT09IC0xKSB7XG4gICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgJGhlbHBlclxuICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgIC5yZW1vdmUoe1xuICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjb3VudFxuICogQHJldHVybnMge051bWJlcn0gbnVtYmVyIG9mIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIENvdW50IHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uXG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCgpIHtcbiAgdmFyIHJlc3VsdCA9IDA7XG4gIHZhciBvYmplY3RJZCA9ICcnO1xuXG4gIGZvciAob2JqZWN0SWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgcmVzdWx0Kys7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVMb2dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb24gQ1JVRCBhY3Rpb24gdGhhdCBoYXBwZW5uZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uIGNvbGxlY3Rpb24gb2YgdGhlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkIGZpZWxkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB2YWx1ZSBvZiB0aGUgZmllbGQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIExvZ1xuICovXG5leHBvcnRzLmNyZWF0ZUxvZyA9IGZ1bmN0aW9uIGNyZWF0ZUxvZyhhY3Rpb24sIGNvbGxlY3Rpb24sIGlkLCBmaWVsZCwgdmFsdWUpIHtcbiAgdmFyIGxvZ0lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG5cbiAgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24gfHwgJyc7XG4gIGlkID0gaWQgfHwgJyc7XG4gIGZpZWxkID0gZmllbGQgfHwgJyc7XG4gIHZhbHVlID0gdmFsdWUgfHwgJyc7XG5cbiAgLy8gY2xlYW4gbG9nIGV2ZXJ5IDEwMDAgbG9nc1xuICBpZiAoT2JqZWN0LmtleXMoZXhwb3J0cy5zdG9yZS5fTG9nKS5sZW5ndGggPiAxMDAwKSB7XG4gICAgZXhwb3J0cy5zdG9yZS5fTG9nID0ge307XG4gIH1cblxuICBleHBvcnRzLnN0b3JlLl9Mb2dbbG9nSWRdID0ge1xuICAgIF9pZDogbG9nSWQsXG4gICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcbiAgICBpZDogaWQsXG4gICAgZmllbGQ6IGZpZWxkLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvcmRlcjogaW5jTG9nT3JkZXIoKVxuICB9O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgbmV3IERhdGFiYXNlQ29sbGVjdGlvblxuICovXG5leHBvcnRzLmNvbGxlY3Rpb24gPSBmdW5jdGlvbiBjb2xsZWN0aW9uKG5hbWUpIHtcbiAgZXhwb3J0c1tuYW1lXSA9IG5ldyBEYXRhYmFzZUNvbGxlY3Rpb24obmFtZSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW1wb3J0U3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgU3lzdGVtIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBTeXN0ZW0gUnVudGltZSBzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvbiBJbXBvcnQgYSBzeXN0ZW0gaW50byB0aGUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5pbXBvcnRTeXN0ZW0gPSBmdW5jdGlvbiBpbXBvcnRTeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgcmV0dXJuIGltcFN5c3RlbShpbXBvcnRlZFN5c3RlbSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZXhwb3J0U3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIHN5c3RlbVxuICogQGRlc2NyaXB0aW9uIEV4cG9ydCBhIHN5c3RlbVxuICpcbiAqIEBleGFtcGxlXG4gKiAkZGIuZXhwb3J0U3lzdGVtKCk7IC8vIGV4cG9ydCBhbGwgdGhlIHN5c3RlbVxuICogJGRiLmV4cG9ydFN5c3RlbSh7J3NjaGVtYXMnOnsnbmFtZSc6J1BlcnNvbid9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gc2NoZW1hc1xuICogJGRiLmV4cG9ydFN5c3RlbSh7J3R5cGVzJzp7J25hbWUnOidhZGRyZXNzJ319KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiB0eXBlc1xuICogJGRiLmV4cG9ydFN5c3RlbSh7J2JlaGF2aW9ycyc6eydjb21wb25lbnQnOidsYXVyZSd9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnY29tcG9uZW50cyc6eydQZXJzb24nOiB7J2NvdW50cnknOiAnRnJhbmNlJ319fSk7IC8vIGZpbHRlciBleHBvcnQgb24gY29tcG9uZW50c1xuICogJGRiLmV4cG9ydFN5c3RlbSh7J3NjaGVtYXMnOnsnbmFtZSc6J1BlcnNvbid9LCdjb21wb25lbnRzJzp7J1BlcnNvbic6IHsnY291bnRyeSc6ICdGcmFuY2UnfX19KTsgLy8gY29tYmluZSBmaWx0ZXJzXG4gKi9cbmV4cG9ydHMuZXhwb3J0U3lzdGVtID0gZnVuY3Rpb24gZXhwb3J0U3lzdGVtKHBhcmFtcykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgaWYgKHBhcmFtcykge1xuICAgIHJlc3VsdCA9IGV4cFN1YnN5c3RlbShwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGV4cFN5c3RlbSgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBkZXNjcmlwdGlvbiBDbGVhciB0aGUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcblxuICAvLyByZW1vdmUgY29sbGVjdGlvbnNcbiAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLnJlbW92ZSgpO1xuICB9XG5cbiAgLy8gcmVtb3ZlIGludGVybmFsIGNvbGxlY3Rpb25zXG4gIGxlbmd0aCA9IGludGVybmFsREIubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb2xsZWN0aW9uTmFtZSA9IGludGVybmFsREJbaV07XG4gICAgZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0ucmVtb3ZlKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbml0XG4gKiBAZGVzY3JpcHRpb24gSW5pdCB0aGUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIHJ1bnRpbWVTeXN0ZW1JZCA9ICcnO1xuICB2YXIgcnVudGltZVN5c3RlbSA9IG51bGw7XG5cbiAgcnVudGltZVN5c3RlbSA9IGV4cG9ydHMuX1N5c3RlbS5maW5kKHtcbiAgICBfaWQ6ICdlODljNjE3YjZiMTVkMjQnXG4gIH0pWzBdO1xuXG4gIC8vIGNsZWFyIGFsbCB0aGUgZGF0YSBpbiBtZW1vcnlcbiAgZXhwb3J0cy5jbGVhcigpO1xuICAkY29tcG9uZW50LmNsZWFyKCk7XG4gICRtZXRhbW9kZWwuY2xlYXIoKTtcbiAgJHN0YXRlLmNsZWFyKCk7XG4gICRiZWhhdmlvci5jbGVhcigpO1xuXG4gIC8vIGluaXQgbWV0YW1vZGVsXG4gICRtZXRhbW9kZWwuaW5pdCgpO1xuXG4gIC8vIHJlaW1wb3J0IFN5c3RlbSBSdW50aW1lIGNvcmUgc3lzdGVtXG4gIHJ1bnRpbWVTeXN0ZW1JZCA9IGV4cG9ydHMuaW1wb3J0U3lzdGVtKHJ1bnRpbWVTeXN0ZW0pO1xuICAkY29tcG9uZW50LmdldChydW50aW1lU3lzdGVtSWQpLnN0YXJ0KCk7XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBoZWxwZXJcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIHRoZSBtb2R1bGVzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnR5ICovXG5cbnZhciBydW50aW1lUmVmID0gbnVsbDtcbnZhciByZXF1aXJlUmVmID0gbnVsbDtcblxuLyogUHVibGljIG1ldGhvZCAqL1xuXG4vKipcbiAqIEBtZXRob2QgaXNSdW50aW1lXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIFN5c3RlbSBSdW50aW1lIGluc3RhbmNlIGV4aXN0XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBTeXN0ZW0gUnVudGltZSBpbnN0YW5jZSBleGlzdHNcbiAqL1xuZXhwb3J0cy5pc1J1bnRpbWUgPSBmdW5jdGlvbiBpc1J1bnRpbWUoKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICBpZiAoJGRiLl9SdW50aW1lICYmICRkYi5fUnVudGltZS5maW5kKCkubGVuZ3RoKSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0UnVudGltZVxuICogQHJldHVybnMge19SdW50aW1lfSBTeXN0ZW0gUnVudGltZSBpbnN0YW5jZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgU3lzdGVtIFJ1bnRpbWUgaW5zdGFuY2VcbiAqL1xuZXhwb3J0cy5nZXRSdW50aW1lID0gZnVuY3Rpb24gZ2V0UnVudGltZSgpIHtcbiAgdmFyIHJ1bnRpbWVJZCA9ICcnO1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoIXJ1bnRpbWVSZWYpIHtcbiAgICBydW50aW1lSWQgPSAkZGIuX1J1bnRpbWUuZmluZCgpWzBdLl9pZDtcbiAgICBydW50aW1lUmVmID0gJGNvbXBvbmVudC5nZXQocnVudGltZUlkKTtcbiAgfVxuXG4gIHJldHVybiBydW50aW1lUmVmO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzT25Ob2RlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIFN5c3RlbSBSdW50aW1lIGlzIHJ1bm5pbmcgb24gbm9kZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaXMgcnVubmluZyBvbiBub2RlXG4gKi9cbmV4cG9ydHMuaXNPbk5vZGUgPSBmdW5jdGlvbiBpc09uTm9kZSgpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFJlcXVpcmVcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSByZXF1aXJlIG9iamVjdFxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmVxdWlyZSBvYmplY3RcbiAqL1xuZXhwb3J0cy5nZXRSZXF1aXJlID0gZnVuY3Rpb24gZ2V0UmVxdWlyZSgpIHtcbiAgaWYgKCFyZXF1aXJlUmVmKSB7XG4gICAgLy8ga2x1ZGdlIGZvciB3ZWJwYWNrXG4gICAgcmVxdWlyZVJlZiA9IGV2YWwoJ3JlcXVpcmUnKTtcbiAgfVxuXG4gIHJldHVybiByZXF1aXJlUmVmO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgdXVpZFxuICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlIGEgdXVpZFxuICovXG5leHBvcnRzLmdlbmVyYXRlSWQgPSBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuICBmdW5jdGlvbiBnZW4oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApLnRvU3RyaW5nKDE2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByZWZpeCgpIHtcbiAgICB2YXIgdmFsaWRQcmVmaXggPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICAgIHJldHVybiB2YWxpZFByZWZpeC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRQcmVmaXgubGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4gZ2V0UHJlZml4KCkgKyBnZW4oKSArIGdlbigpICsgZ2VuKCk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcG9seWZpbGxcbiAqIEBkZXNjcmlwdGlvbiBBZGQgUG9seWZpbGxcbiAqL1xuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAvLyBmaXhpbmcgY29uc3RydWN0b3IubmFtZSBwcm9wZXJ0eSBpbiBJRVxuICAvLyB0YWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjUxNDA3MjMvY29uc3RydWN0b3ItbmFtZS1pcy11bmRlZmluZWQtaW4taW50ZXJuZXQtZXhwbG9yZXJcbiAgaWYgKFxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSB1bmRlZmluZWQgJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnbmFtZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB2YXIgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvblxccyhbXihdezEsfSlcXCgvO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IGZ1bmNOYW1lUmVnZXguZXhlYyh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEgPyByZXN1bHRzWzFdLnRyaW0oKSA6ICcnO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7fVxuICAgIH0pO1xuICB9XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsb2dcbiAqIEByZXF1aXJlcyBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2dcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgSUQgPSAnX2lkJztcbnZhciBOQU1FID0gJ19uYW1lJztcbnZhciBjdXJyZW50TGV2ZWwgPSAnd2Fybic7XG52YXIgbG9nZ2VyUmVmID0gbnVsbDtcbnZhciBmYWtlTG9nZ2VyUmVmID0ge1xuICBjdXJyZW50TGV2ZWw6ICd3YXJuJyxcbiAgbGV2ZWw6IGZ1bmN0aW9uIGRlYnVnKGxldmVsTmFtZSkge1xuICAgIGlmIChsZXZlbE5hbWUpIHtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gbGV2ZWxOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWw7XG4gIH0sXG4gIGRlYnVnOiBmdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsID09PSAnZGVidWcnKSB7XG4gICAgICBjb25zb2xlLmxvZygncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgaW5mbzogZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsID09PSAnaW5mbycgfHwgdGhpcy5jdXJyZW50TGV2ZWwgPT09ICdkZWJ1ZycpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgd2FybjogZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPT09ICdpbmZvJyB8fFxuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPT09ICd3YXJuJyB8fFxuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPT09ICdkZWJ1ZydcbiAgICApIHtcbiAgICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmVycm9yKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRMb2dnZXJcbiAqIEByZXR1cm4ge19Mb2dnZXJ9IF9Mb2dnZXIgaW5zdGFuY2VcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBfTG9nZ2VyIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGdldExvZ2dlcigpIHtcbiAgdmFyIGxvZ2dlcklkID0gJyc7XG4gIHZhciBsb2dnZXJzID0gW107XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmICghJG1ldGFtb2RlbC5nZXRNb2RlbCgnX0xvZ2dlcicpKSB7XG4gICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgfSBlbHNlIHtcbiAgICBsb2dnZXJzID0gJGRiLl9Mb2dnZXIuZmluZCgpO1xuICAgIGlmIChsb2dnZXJzLmxlbmd0aCkge1xuICAgICAgbG9nZ2VySWQgPSBsb2dnZXJzWzBdW0lEXTtcblxuICAgICAgaWYgKCRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKSkge1xuICAgICAgICBsb2dnZXJSZWYgPSAkY29tcG9uZW50LmdldChsb2dnZXJJZCk7XG4gICAgICAgIHJlc3VsdCA9IGxvZ2dlclJlZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGZha2VMb2dnZXJSZWY7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGZha2VMb2dnZXJSZWY7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGxldmVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbGV2ZWxOYW1lIG5hbWUgb2YgdGhlIGxldmVsXG4gKiBAZGVzY3JpcHRpb24gU2V0IHRoZSBsZXZlbCBvZiB0aGUgbG9nXG4gKi9cbmV4cG9ydHMubGV2ZWwgPSBmdW5jdGlvbiBsZXZlbChsZXZlbE5hbWUpIHtcbiAgY3VycmVudExldmVsID0gbGV2ZWxOYW1lO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgdGhlIHNjaGVtYSBkZWZpbml0aW9uXG4gKiBAZGVzY3JpcHRpb24gQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5ID0gZnVuY3Rpb24gdW5rbm93blByb3BlcnR5KHByb3BlcnR5TmFtZSwgc2NoZW1hKSB7XG4gIHZhciBtZXNzYWdlID0gJyc7XG5cbiAgaWYgKHNjaGVtYVtOQU1FXSkge1xuICAgIG1lc3NhZ2UgPVxuICAgICAgXCJ1bmtub3duIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiAnXCIgK1xuICAgICAgc2NoZW1hW05BTUVdICtcbiAgICAgIFwiJ1wiO1xuICB9IGVsc2Uge1xuICAgIG1lc3NhZ2UgPSBcInVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGZvciBhIG1vZGVsXCI7XG4gIH1cblxuICBnZXRMb2dnZXIoKS53YXJuKG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcGVyb3BldHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGUgPSBmdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlKFxuICBwcm9wZXJ0eU5hbWUsXG4gIHR5cGUsXG4gIHByb3BlcnR5XG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInIGluc3RlYWQgb2YgdHlwZSAnXCIgK1xuICAgICAgdHlwZW9mIHByb3BlcnR5ICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB2YWx1ZSBmb3IgdHlwZSBlbnVtXG4gKi9cbmV4cG9ydHMuaW52YWxpZEVudW1WYWx1ZSA9IGZ1bmN0aW9uIGludmFsaWRFbnVtVmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcIidcIiArIHZhbHVlICsgXCInIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSB0eXBlIGVudW0gJ1wiICsgdHlwZSArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cnVjdG9yTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGEgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZENsYXNzTmFtZSA9IGZ1bmN0aW9uIGludmFsaWRDbGFzc05hbWUoXG4gIGNvbXBvbmVudElkLFxuICB0eXBlLFxuICBjb25zdHJ1Y3Rvck5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBjbGFzcyBuYW1lIGZvciBjb21wb25lbnQgJ1wiICtcbiAgICAgIGNvbXBvbmVudElkICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgIGNvbnN0cnVjdG9yTmFtZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIE1pc3NpbmcgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eSA9IGZ1bmN0aW9uIG1pc3NpbmdQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGZvciBhIHNjaGVtYSBvciBhIG1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1pc3Npbmcgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmdcbiAqL1xuZXhwb3J0cy5taXNzaW5nSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiBtaXNzaW5nSW1wbGVtZW50YXRpb24obmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwic2NoZW1hICdcIiArIG5hbWUgKyBcIicgaXMgbWlzc2luZy5cIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eSBvZiBhIGNsYXNzIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZUltcCA9IGZ1bmN0aW9uIGludmFsaWRUeXBlSW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgXCJ0aGUgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5ICtcbiAgICAgIFwiJyBvZiB0aGUgbW9kZWwgJ1wiICtcbiAgICAgIGNsYXNzTmFtZSArXG4gICAgICBcIicgaXMgaW52YWxpZFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eUltcCA9IGZ1bmN0aW9uIG1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGluIHRoZSBtb2RlbCAnXCIgKyBjbGFzc05hbWUgKyBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgYSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBVbmtvd24gcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eUltcCA9IGZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgc2NoZW1hKSB7XG4gIGdldExvZ2dlcigpLmVycm9yKFxuICAgIFwidGhlIG1vZGVsICdcIiArIHNjaGVtYSArIFwiJyBoYXMgYW4gdW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFR5cGVEZWZpbml0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBhIHR5cGUgZGVmaW5pdGlvblxuICogQGRlc2NyaXB0aW9uICBUcnkgdG8gYWRkIGFuIGludmFsaWQgdHlwZVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIGludmFsaWRUeXBlRGVmaW5pdGlvbihuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgdHlwZSAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCB2YWxpZFwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHByb3BlcnR5IG5hbWVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5TmFtZShcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgcHJvcGVydHlOYW1lLFxuICBwcm9wZXJ0eVZhbHVlLFxuICB0eXBlXG4pIHtcbiAgdmFyIGNsYXNzSW5mbyA9ICcnO1xuXG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBjbGFzc0luZm8gPSBcIiAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKVwiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICtcbiAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkICdcIiArXG4gICAgICAgIHR5cGUucmVwbGFjZSgnQCcsICcnKSArXG4gICAgICAgIFwiJyBpbnN0ZWFkIG9mICdcIiArXG4gICAgICAgIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgdHlwZSAnXCIgK1xuICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGNsYXNzSW5mbyArXG4gICAgICAgIFwiOiBleHBlY3RlZCAnc3RyaW5nJyBpbnN0ZWFkIG9mICdcIiArXG4gICAgICAgIHR5cGVvZiB0eXBlICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVhZE9ubHlQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gVHJ5aW5nIHRvIHNldCBhIHJlYWQtb25seSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLnJlYWRPbmx5UHJvcGVydHkgPSBmdW5jdGlvbiByZWFkT25seVByb3BlcnR5KFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBwcm9wZXJ0eU5hbWVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImNhbiBub3Qgc2V0IHJlYWQtb25seSBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGNsYXNzSW5mb1xuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBkb2N1bWVudCBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0ID0gZnVuY3Rpb24gaW52YWxpZERvY3VtZW50T25EYkluc2VydChcbiAgZG9jLFxuICBjb2xsZWN0aW9uTmFtZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGRvY3VtZW50ICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShkb2MpLnJlcGxhY2UoLywvZywgJywgJykgK1xuICAgICAgXCInIG9uIGFuIGluc2VydCBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgK1xuICAgICAgY29sbGVjdGlvbk5hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uICBJbnZhbGlkIHByb3BlcnR5IG9uIGEgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvblxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUoXG4gIGNvbGxlY3Rpb25OYW1lLFxuICBpZCxcbiAgcHJvcGVydHlOYW1lLFxuICBwcm9wZXJ0eVZhbHVlLFxuICB0eXBlXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgdHlwZSB3aGVuIHRyeWluZyB0byB1cGRhdGUgdGhlIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgXCInIG9mIGRvY3VtZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIicgKGNvbGxlY3Rpb24gJ1wiICtcbiAgICAgIGNvbGxlY3Rpb25OYW1lICtcbiAgICAgIFwiJykgd2l0aCB0aGUgdmFsdWUgJ1wiICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHByb3BlcnR5VmFsdWUpICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBVbmtvbncgcHJvcGVydHkgb24gYSBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZSA9IGZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGUoXG4gIHByb3BlcnR5TmFtZSxcbiAgY29sbGVjdGlvbk5hbWUsXG4gIGlkXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInVua25vd24gcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgb24gYW4gdXBkYXRlIG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uICdcIiArXG4gICAgICBjb2xsZWN0aW9uTmFtZSArXG4gICAgICBcIicgd2l0aCBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBkZXNjcmlwdGlvbiBDYWxsIGFuIHVua25vd24gbWV0aG9kIG9mIGEgY2xhc3NcbiAqL1xuZXhwb3J0cy51bmtub3duTWV0aG9kID0gZnVuY3Rpb24gdW5rbm93bk1ldGhvZChjbGFzc0lkLCBtZXRob2ROYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gY2FsbCBhbiB1bmtub3duIG1ldGhvZCAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgZm9yIHRoZSBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NJZCArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBEYXRhYmFzZUNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUgPSBmdW5jdGlvbiBpbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBuYW1lIGZvciBjcmVhdGluZyB0aGUgY29sbGVjdGlvbiAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIic6IHRoZXJlIGlzIG5vIHNjaGVtYSAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIicgaW4gdGhlIG1ldGFtb2RlbFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFJlc3VsdFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwZWN0ZWRUeXBlIGV4cGVjdGVkIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGN1cnJlbnQgdHlwZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZSByZXN1bHQgb2YgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUmVzdWx0VHlwZSA9IGZ1bmN0aW9uIGludmFsaWRSZXN1bHRUeXBlKFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBtZXRob2ROYW1lLFxuICBleHBlY3RlZFR5cGUsXG4gIHR5cGVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBpZiAodHlwZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgdGhlIHJlc3VsdCBvZiBtZXRob2QgJ1wiICtcbiAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mbyArXG4gICAgICAgIFwiOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICAgIGV4cGVjdGVkVHlwZS5yZXBsYWNlKCdAJywgJycpICtcbiAgICAgICAgXCInIGluc3RlYWQgb2YgdHlwZSAnXCIgK1xuICAgICAgICB0eXBlICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgdGhlIHJlc3VsdCBvZiBtZXRob2QgJ1wiICtcbiAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mbyArXG4gICAgICAgIFwiOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICAgIGV4cGVjdGVkVHlwZS5yZXBsYWNlKCdAJywgJycpICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBVbmtub3duIGNsYXNzXG4gKi9cbmV4cG9ydHMudW5rbm93bkNvbXBvbmVudCA9IGZ1bmN0aW9uIHVua25vd25Db21wb25lbnQoY2xhc3NOYW1lLCBjb21wb25lbnRJZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidW5rb3duIGNsYXNzIGNvbXBvbmVudCAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJyBmb3IgY29tcG9uZW50ICdcIiArXG4gICAgICBjb21wb25lbnRJZCArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHdvcmtmbG93UmVzdGFydGVkXG4gKiBAZGVzY3JpcHRpb24gVGhlIFN5c3RlbSBSdW50aW1lIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZFxuICovXG5leHBvcnRzLndvcmtmbG93UmVzdGFydGVkID0gZnVuY3Rpb24gd29ya2Zsb3dSZXN0YXJ0ZWQoKSB7XG4gIGdldExvZ2dlcigpLndhcm4oJ3J1bnRpbWUgaGFzIGJlZW4gcmVzdGFydGVkJyk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1OdW1iZXIgPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXIoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIiArXG4gICAgICBjbGFzc0luZm9cbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAqIEBkZXNjcmlwdGlvbiAgSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtVHlwZSA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbVR5cGUoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWUsXG4gIHBhcmFtTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBpZiAocGFyYW1OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBwYXJhbWV0ZXIgJ1wiICtcbiAgICAgICAgcGFyYW1OYW1lICtcbiAgICAgICAgXCInIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGlkICtcbiAgICAgICAgXCInXCIgK1xuICAgICAgICBjbGFzc0luZm9cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgYSBwYXJhbWV0ZXIgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mb1xuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBiZWhhdmlvck5vdFVuaXF1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZVxuICovXG5leHBvcnRzLmJlaGF2aW9yTm90VW5pcXVlID0gZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIGFkZCBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIGZvciB0aGUgc3RhdGUgJ1wiICtcbiAgICAgIHN0YXRlTmFtZSArXG4gICAgICBcIicgb24gY2xhc3MgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBDYW4gbm90IGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gaW52YWxpZCBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9uID0gZnVuY3Rpb24gaW52YWxpZFN0YXRlT24oaWQsIHN0YXRlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIGFkZCBhIGJlaGF2aW9yIHRvIGFuIHVua3dvd24gc3RhdGUgJ1wiICtcbiAgICAgIHN0YXRlTmFtZSArXG4gICAgICBcIicgb24gY2xhc3MgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT2ZmXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gVGhlIGNhbGwgdG8gYSByZW1vdmUgc3RhdGUgb2YgdGhlIGJlaGF2aW9yIG1vZHVsZSBpcyBpbnZhbGlkXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT2ZmID0gZnVuY3Rpb24gaW52YWxpZFN0YXRlT2ZmKGlkLCBzdGF0ZU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeSB0byByZW1vdmUgYSBiZWhhdmlvciBmcm9tIGFuIHVua3dvd24gc3RhdGUgJ1wiICtcbiAgICAgIHN0YXRlTmFtZSArXG4gICAgICBcIicgb24gY2xhc3MgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgbWFzdGVyIHN5c3RlbSBpcyBub3QgZm91bmRcbiAqL1xuZXhwb3J0cy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCA9IGZ1bmN0aW9uIG1hc3RlclN5c3RlbU5vdEZvdW5kKCkge1xuICBnZXRMb2dnZXIoKS53YXJuKCdjYW4gbm90IGV4cG9ydCB0aGUgZGF0YWJhc2UgYmVjYXVzZSBubyBzeXN0ZW0gd2FzIGRlZmluZWQnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgZXhwZWN0ZWMgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZSA9IGZ1bmN0aW9uIGludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCB0eXBlIGZvciB2YWx1ZSAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgJ1wiICtcbiAgICAgIHR5cGVOYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB2YWx1ZVxuICogQGRlc2NyaXB0aW9uIFVua25vd24gdHlwZVxuICovXG5leHBvcnRzLnVua25vd25UeXBlID0gZnVuY3Rpb24gdW5rbm93blR5cGUodmFsdWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInVua25vd24gdHlwZSBmb3IgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNhbk5vdFlldFZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQGRlc2NyaXB0aW9uIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZFxuICovXG5leHBvcnRzLmNhbk5vdFlldFZhbGlkYXRlID0gZnVuY3Rpb24gY2FuTm90WWV0VmFsaWRhdGUoaWQsIGNsYXNzTmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcbiAgICBcImNhbiBub3QgeWV0IHZhbGlkYXRlIGlmIHRoZSBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJyBpcyBhbiBpbnN0YW5jZSBvZiAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENoYW5uZWxFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBzZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlXG4gKiBAZGVzY3JpcHRpb24gQSBtZXNzYWdlIHNlbmQgYnkgdGhlIGNoYW5uZWwgaXMgaW52YWxpZFxuICovXG5leHBvcnRzLmludmFsaWRDaGFubmVsRXZlbnQgPSBmdW5jdGlvbiBpbnZhbGlkQ2hhbm5lbEV2ZW50KFxuICBtZXNzYWdlLFxuICBldmVudE5hbWUsXG4gIHR5cGVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCB0eXBlIGZvciB0aGUgbWVzc2FnZSAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkgK1xuICAgICAgXCInOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICB0eXBlICtcbiAgICAgIFwiJyBmb3IgZXZlbnQgJ1wiICtcbiAgICAgIGV2ZW50TmFtZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBiZWhhdmlvciBhZGQgd2l0aCAnb24nIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uID0gZnVuY3Rpb24gaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24oXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgd2hlbiBhZGRpbmcgYSBiZWhhdmlvciBvbiBtZXRob2QgJ1wiICtcbiAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCIgK1xuICAgICAgY2xhc3NJbmZvXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdXBkYXRlVXVpZFxuICogQHBhcmFtIHtTdHJpbmd9IGN1cnJlbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmV3SWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtCb29sZWFufSBhbHJlYWR5VXNlZCBuZXdJZCBhbHJlYWR5IHVzZWRcbiAqIEBkZXNjcmlwdGlvbiBDaGFuZ2UgdGhlIGlkIG9mIGEgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMudXBkYXRlVXVpZCA9IGZ1bmN0aW9uIHVwZGF0ZVV1aWQoY3VycmVudElkLCBuZXdJZCwgYWxyZWFkeVVzZWQpIHtcbiAgaWYgKGFscmVhZHlVc2VkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgK1xuICAgICAgICBjdXJyZW50SWQgK1xuICAgICAgICBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArXG4gICAgICAgIG5ld0lkICtcbiAgICAgICAgXCInIHRoYXQgaXMgYWxyZWFkeSB1c2VkXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcInRyeSB0byB1cGRhdGUgYSBjb21wb25lbnQgb2YgaWQgJ1wiICtcbiAgICAgICAgY3VycmVudElkICtcbiAgICAgICAgXCInIHdpdGggdGhlIG5ldyBpZCAnXCIgK1xuICAgICAgICBuZXdJZCArXG4gICAgICAgIFwiJ1wiXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRVc2VPZkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICovXG5leHBvcnRzLmludmFsaWRVc2VPZkNvbXBvbmVudCA9IGZ1bmN0aW9uIGludmFsaWRVc2VPZkNvbXBvbmVudChpZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBhZGQgYW4gaW52YWxpZCBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hID0gZnVuY3Rpb24gaW52YWxpZFNjaGVtYShuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0aGUgc2NoZW1hICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpcyBub3QgdmFsaWQsIGl0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgbWV0YW1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIG1vZGVsXG4gKi9cbmV4cG9ydHMuaW52YWxpZE1vZGVsID0gZnVuY3Rpb24gaW52YWxpZE1vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBtb2RlbCAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIicgaXMgbm90IHZhbGlkLCBpdCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIG1ldGFtb2RlbFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgcGFyYW1ldGVycyBzZXQgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtZXRlcnMgPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1ldGVycyhjbGFzc0lkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0aGUgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICtcbiAgICAgIGNsYXNzSWQgK1xuICAgICAgXCInIGFyZSBub3QgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBkZXN0cm95ZWRDb21wb25lbnRDYWxsXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBnZXQgdGhlIHByb3BlcnR5IG9mIGEgZGVzdHJveWVkIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmRlc3Ryb3llZENvbXBvbmVudENhbGwgPSBmdW5jdGlvbiBkZXN0cm95ZWRDb21wb25lbnRDYWxsKFxuICBwcm9wZXJ0eU5hbWUsXG4gIGlkXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeWluZyB0byBnZXQgdGhlIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgXCInIG9uIHRoZSBkZXN0cm95ZWQgY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmplY3QgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgc2NoZW1hIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHBhcmFtZXRlciB0eXBlICB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycyhcbiAgb2JqZWN0LFxuICBuYW1lXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgJ1wiICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KG9iamVjdCkucmVwbGFjZSgvLC9nLCAnLCAnKSArXG4gICAgICBcIicgZm9yIGNyZWF0aW5nIGEgY29tcG9uZW50IG9mIGNsYXNzICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpcyBub3QgYW4gb2JqZWN0XCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgaW5mb3JtYXRpb24gb2YgYW4gdW5rb3duIG1vZGVsXG4gKi9cbmV4cG9ydHMudW5rbm93bk1vZGVsID0gZnVuY3Rpb24gdW5rbm93bk1vZGVsKGNsYXNzSWQpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeSBnZXQgdGhlIGluZm9ybWF0aW9uIG9mIGFuIHVua25vd24gbW9kZWwgJ1wiICsgY2xhc3NJZCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQSBzY2hlbWEgaXMgbWlzc2luZ1xuICovXG5leHBvcnRzLm1pc3NpbmdTY2hlbWEgPSBmdW5jdGlvbiBtaXNzaW5nU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpcyBtaXNzaW5nXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYSB3aGVyZSB0aGUgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kXG4gKiBAZGVzY3JpcHRpb24gQSBjeWNsaWMgZGVwZW5kZW5jeSB3YXMgZm91bmRcbiAqL1xuZXhwb3J0cy5jeWNsaWNEZXBlbmRlbmN5ID0gZnVuY3Rpb24gY3ljbGljRGVwZW5kZW5jeShuYW1lKSB7XG4gIGlmIChuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgICAnYSBjeWNsaWMgaW5oZXJpdGFuY2UgZGVwZW5kZW5jeSB3aXRoIOKAmScgK1xuICAgICAgICBuYW1lICtcbiAgICAgICAgXCLigJkgc2NoZW1hIGhhcyBiZWVuIGZvdW5kLCBwbGVhc2UgY2hlY2sgdGhlICdfaW5oZXJpdCcgcHJvcGVydGllcyBvZiB5b3VyIHNjaGVtYXNcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgICBcImEgY3ljbGljIGluaGVyaXRhbmNlIGRlcGVuZGVuY3kgaGFzIGJlZW4gZm91bmQsIHBsZWFzZSBjaGVjayB0aGUgJ19pbmhlcml0JyBwcm9wZXJ0aWVzIG9mIHlvdXIgc2NoZW1hc1wiXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVOYW1lIG9mIHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIGZvciBhIHR5cGUgZW51bVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVHlwZSA9IGZ1bmN0aW9uIGludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlICE9PSB0eXBlb2YgdmFsdWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJpbnZhbGlkIHR5cGUgZm9yIGVudW1lcmF0ZWQgdHlwZSAnXCIgK1xuICAgICAgICB0eXBlTmFtZSArXG4gICAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgICB0eXBlICtcbiAgICAgICAgXCInIGluc3RlYWQgb2YgdHlwZSAnXCIgK1xuICAgICAgICB0eXBlb2YgdmFsdWUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgZW51bWVyYXRlZCB0eXBlICdcIiArIHR5cGVOYW1lICsgXCInXCIpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbG9hZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gTG9hZCBzY2hlbWFcbiAqL1xuZXhwb3J0cy5sb2FkU2NoZW1hID0gZnVuY3Rpb24gbG9hZFNjaGVtYShuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwibG9hZCBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBsb2FkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gTG9hZCBtb2RlbFxuICovXG5leHBvcnRzLmxvYWRNb2RlbCA9IGZ1bmN0aW9uIGxvYWRNb2RlbChuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwibG9hZCBtb2RlbCAnXCIgKyBuYW1lICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGxvYWRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAZGVzY3JpcHRpb24gTG9hZCB0eXBlXG4gKi9cbmV4cG9ydHMubG9hZFR5cGUgPSBmdW5jdGlvbiBsb2FkVHlwZShuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwibG9hZCB0eXBlICdcIiArIG5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQ29tcGlsZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5jb21waWxlU2NoZW1hID0gZnVuY3Rpb24gY29tcGlsZVNjaGVtYShuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiY29tcGlsZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlIG1vZGVsXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVNb2RlbCA9IGZ1bmN0aW9uIGdlbmVyYXRlTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImdlbmVyYXRlIG1vZGVsICdcIiArIG5hbWUgKyBcIicuLi5cIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBtb2RlbFxuICovXG5leHBvcnRzLmNoZWNrTW9kZWwgPSBmdW5jdGlvbiBjaGVja01vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJhbmFseXplIG1vZGVsICdcIiArIG5hbWUgKyBcIicuLi5cIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY3JlYXRlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUNvbGxlY3Rpb24obmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImNyZWF0ZSBjb2xsZWN0aW9uICdcIiArIG5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGNsYXNzXG4gKi9cbmV4cG9ydHMuY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiBjcmVhdGVDbGFzcyhuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiY3JlYXRlIGNsYXNzICdcIiArIG5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkJlZ2luXG4gKiBAZGVzY3JpcHRpb24gQmVnaW5zIG1vZGVsIGNyZWF0aW9uXG4gKi9cbmV4cG9ydHMubW9kZWxDcmVhdGlvbkJlZ2luID0gZnVuY3Rpb24gbW9kZWxDcmVhdGlvbkJlZ2luKCkge1xuICBnZXRMb2dnZXIoKS5kZWJ1Zygnc3RhcnRpbmcgbW9kZWwgY3JlYXRpb24uLi4nKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtb2RlbENyZWF0aW9uRW5kXG4gKiBAZGVzY3JpcHRpb24gRW5kIG1vZGVsIGNyZWF0aW9uXG4gKi9cbmV4cG9ydHMubW9kZWxDcmVhdGlvbkVuZCA9IGZ1bmN0aW9uIG1vZGVsQ3JlYXRpb25FbmQoKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKCdtb2RlbCBjcmVhdGlvbiBlbmRlZCcpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGFjdGlvbkludm9rZUVycm9yXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY29tcG9uZW50IGNsYXNzIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gKiBAZGVzY3JpcHRpb24gQW4gZXJyb3IgaGFwcGVuZWQgd2hlbiBpbnZva2luZyBhIGJlaGF2aW9yXG4gKi9cbmV4cG9ydHMuYWN0aW9uSW52b2tlRXJyb3IgPSBmdW5jdGlvbiBhY3Rpb25JbnZva2VFcnJvcihcbiAgc3RhdGUsXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1lc3NhZ2Vcbikge1xuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgICBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICBzdGF0ZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIicgKGNsYXNzICdcIiArXG4gICAgICAgIGNsYXNzTmFtZSArXG4gICAgICAgIFwiJyk6IFwiICtcbiAgICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgICBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICBzdGF0ZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIic6IFwiICtcbiAgICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgbmFtZSBmb3IgdGhlIHByb3BlcnR5IG9mIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFNjaGVtYVByb3BlcnR5TmFtZSA9IGZ1bmN0aW9uIGludmFsaWRTY2hlbWFQcm9wZXJ0eU5hbWUoXG4gIG5hbWUsXG4gIHByb3BOYW1lXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgbmFtZSAnXCIgK1xuICAgICAgcHJvcE5hbWUgK1xuICAgICAgXCInIGZvciBzY2hlbWEgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInOiBhIHByb3BlcnR5IG5hbWUgY2FuIG5vdCBiZWdpbiB3aXRoICdfJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgbmFtZSBmb3IgdGhlIHByb3BlcnR5IG9mIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFNjaGVtYVByb3BlcnR5ID0gZnVuY3Rpb24gaW52YWxpZFNjaGVtYVByb3BlcnR5KG5hbWUsIHByb3BOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wTmFtZSArXG4gICAgICBcIicgZm9yIHNjaGVtYSAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIic6IG9ubHkgJ3Byb3BlcnR5JywgJ2xpbmsnLCAnY29sbGVjdGlvbicsICdtZXRob2QnIGFuZCAnZXZlbnQnIGFyZSBhbGxvd2VkLlwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5Rm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgZm9ybWF0IGZvciB0aGUgZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5Rm9ybWF0ID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5Rm9ybWF0KG9iaikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBmb3JtYXQgZm9yIGEgZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5JzogJ1wiICtcbiAgICAgIG9iaiArXG4gICAgICBcIicgaXMgbm90IGFuIG9iamVjdFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBpbnZhbGlkIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRTdGF0ZShtb2RlbCwgc3RhdGUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgc3RhdGUgJ1wiICsgc3RhdGUgKyBcIicgZm9yIHRoZSBtb2RlbCAnXCIgKyBtb2RlbCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93bkNvbnRleHRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQGRlc2NyaXB0aW9uIEludm9rZSBhIG1ldGhvZCBjbGFzcyB3aXRob3V0IGEgY29udGV4dFxuICovXG5leHBvcnRzLnVua25vd25Db250ZXh0ID0gZnVuY3Rpb24gdW5rbm93bkNvbnRleHQoY2xhc3NOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZva2UgdGhlIGJlaGF2aW9yICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBvbiB0aGUgY2xhc3MgJ1wiICtcbiAgICAgIGNsYXNzTmFtZSArXG4gICAgICBcIicgd2l0aG91dCBhIHZhbGlkIGNvbnRleHRcIlxuICApO1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQHJlcXVpcmVzIGhlbHBlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsLlxuICogU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZFxuICogY3JlYXRlcyB0aGUgY29tcG9uZW50IGNsYXNzZXMgYW5kIHJlbGF0ZWQgRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxudmFyIElEID0gJ19pZCc7XG52YXIgTkFNRSA9ICdfbmFtZSc7XG52YXIgREVTQ1JJUFRJT04gPSAnX2Rlc2NyaXB0aW9uJztcbnZhciBJTkhFUklUUyA9ICdfaW5oZXJpdCc7XG52YXIgQ0xBU1MgPSAnX2NsYXNzJztcbnZhciBDT1JFID0gJ19jb3JlJztcbnZhciBNRVRIT0RfVFlQRSA9ICdtZXRob2QnO1xudmFyIEVWRU5UX1RZUEUgPSAnZXZlbnQnO1xudmFyIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknO1xudmFyIExJTktfVFlQRSA9ICdsaW5rJztcbnZhciBDT0xMRUNUSU9OX1RZUEUgPSAnY29sbGVjdGlvbic7XG52YXIgaW50ZXJuYWxUeXBlcyA9IFsncHJvcGVydHknLCAnY29sbGVjdGlvbicsICdsaW5rJywgJ21ldGhvZCcsICdldmVudCddO1xudmFyIGludGVybmFsTmFtZXMgPSBbXG4gICdfaWQnLFxuICAnX25hbWUnLFxuICAnX2luaGVyaXQnLFxuICAnX2Rlc2NyaXB0aW9uJyxcbiAgJ19jbGFzcycsXG4gICdfY29yZSdcbl07XG52YXIgZGVmYXVsdFR5cGVzID0gW1xuICAnYm9vbGVhbicsXG4gICdzdHJpbmcnLFxuICAnbnVtYmVyJyxcbiAgJ29iamVjdCcsXG4gICdmdW5jdGlvbicsXG4gICdhcnJheScsXG4gICdkYXRlJyxcbiAgJ2FueSdcbl07XG52YXIgc3RvcmUgPSB7XG4gIG1ldGFkZWY6IHt9LFxuICBpbmhlcml0YW5jZToge30sXG4gIGluaGVyaXRhbmNlVHJlZToge30sXG4gIHNjaGVtYXM6IHt9LFxuICBjb21waWxlZFNjaGVtYXM6IHt9LFxuICBtb2RlbHM6IHt9LFxuICBnZW5lcmF0ZWRNb2RlbHM6IHt9LFxuICBzdGF0ZXM6IHt9LFxuICB0eXBlOiB7fVxufTtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBpc0ludGVybmFsTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gaXMgbmFtZSBhbiBpbnRlcm5hbCBuYW1lXG4gKi9cbmZ1bmN0aW9uIGlzSW50ZXJuYWxOYW1lKG5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgaWYgKGludGVybmFsTmFtZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2VuZXJhdGVNb2RlbHNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2VuZXJhdGUgdGhlIG1vZGVsc1xuICovXG5mdW5jdGlvbiBnZW5lcmF0ZU1vZGVscygpIHtcbiAgdmFyIGF0dCA9ICcnO1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hID0ge307XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG1vZGVsUGFyZW50ID0gbnVsbDtcbiAgdmFyIG1vZGVsRXh0ID0gbnVsbDtcbiAgdmFyIG1vZGVsRGVmID0gbnVsbDtcbiAgdmFyIG1vZGVsID0ge307XG4gIHZhciBtb2RlbHMgPSB7fTtcbiAgdmFyIG1lcmdlZE1vZGVsID0ge307XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIG5iQW5jZXN0b3JzID0gMDtcbiAgdmFyIHNvcnRJbmhlcml0VHJlZSA9IFtdO1xuXG4gIC8vIGRlZmF1bHQgdmFsdWVzXG4gIGZvciAoc2NoZW1hTmFtZSBpbiBzdG9yZS5jb21waWxlZFNjaGVtYXMpIHtcbiAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbc2NoZW1hTmFtZV07XG5cbiAgICAvLyBzZXQgbW9kZWwgaW50ZXJuYWwgcHJvcGVydGllc1xuICAgIG1vZGVsID0ge1xuICAgICAgX25hbWU6IHNjaGVtYS5fbmFtZVxuICAgIH07XG5cbiAgICAvLyBzZXQgX2NvcmVcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5fY29yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vZGVsLl9jb3JlID0gc2NoZW1hLl9jb3JlO1xuICAgIH1cblxuICAgIC8vIHNldCBpbmhlcml0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLl9pbmhlcml0KSkge1xuICAgICAgbW9kZWwuX2luaGVyaXQgPSBzY2hlbWEuX2luaGVyaXQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzXG4gICAgaWYgKHR5cGVvZiBzY2hlbWEuX2NsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbW9kZWwuX2NsYXNzID0gc2NoZW1hLl9jbGFzcztcbiAgICB9XG5cbiAgICAvLyBzZXQgZGVzY3JpcHRpb25cbiAgICBpZiAodHlwZW9mIHNjaGVtYS5fZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtb2RlbC5fZGVzY3JpcHRpb24gPSBzY2hlbWEuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIHZhbGlkIG5hbWVcbiAgICBmb3IgKGF0dCBpbiBzY2hlbWEpIHtcbiAgICAgIGlmICghaXNJbnRlcm5hbE5hbWUoYXR0KSAmJiBhdHQuaW5kZXhPZignXycpID09PSAwKSB7XG4gICAgICAgICRsb2cuaW52YWxpZFNjaGVtYVByb3BlcnR5TmFtZShzY2hlbWEuX25hbWUsIGF0dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gIHNldCBtb2RlbCBkZWZhdWx0IHZhbHVlc1xuICAgIGZvciAoYXR0IGluIHNjaGVtYSkge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdwcm9wZXJ0eSc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dCxcbiAgICAgICAgICAgIGxhYmVsOiBhdHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnbGluayc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdfQ29tcG9uZW50JyxcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhdHQsXG4gICAgICAgICAgICBsYWJlbDogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ21ldGhvZCc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFtJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZXN1bHQ6ICdhbnknLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdldmVudCc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFtJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2NvbGxlY3Rpb24nOlxuICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICB0eXBlOiBbJ19Db21wb25lbnQnXSxcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhdHQsXG4gICAgICAgICAgICBsYWJlbDogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWlzSW50ZXJuYWxOYW1lKGF0dCkpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFNjaGVtYVByb3BlcnR5KHNjaGVtYS5fbmFtZSwgYXR0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsLl9uYW1lXSA9IG1vZGVsO1xuICB9XG5cbiAgLy8gbW9kZWxzIHRvIG92ZXJyaWRlXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgbmFtZSA9IG1vZGVsW05BTUVdO1xuICAgIG1vZGVsRXh0ID0gc3RvcmUubW9kZWxzW25hbWVdO1xuICAgIGlmIChtb2RlbEV4dCkge1xuICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbEV4dCwgbW9kZWwpO1xuICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5oZXJpdGFuY2VcbiAgc29ydEluaGVyaXRUcmVlID0gc29ydEluaGVyaXRhbmNlVHJlZSgpO1xuXG4gIG5iQW5jZXN0b3JzID0gc29ydEluaGVyaXRUcmVlLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IG5iQW5jZXN0b3JzOyBpKyspIHtcbiAgICBtb2RlbE5hbWUgPSBzb3J0SW5oZXJpdFRyZWVbaV07XG4gICAgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcblxuICAgIGlmIChtb2RlbCkge1xuICAgICAgcGFyZW50cyA9IGV4cG9ydHMuZ2V0UGFyZW50cyhtb2RlbE5hbWUpO1xuICAgICAgcGFyZW50cy5yZXZlcnNlKCk7XG5cbiAgICAgIHZhciBtb2RlbFRvTWVyZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vZGVsKSk7XG5cbiAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIG5hbWUgPSBwYXJlbnRzW2pdO1xuICAgICAgICBtb2RlbFBhcmVudCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgICAgICAgaWYgKG1vZGVsUGFyZW50KSB7XG4gICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbFBhcmVudCwgbW9kZWwpO1xuICAgICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbGFzdCBpbmhlcml0XG4gICAgICAvLyBpcyB0aGUgb3ZlcnJpZGVuIG1vZGVsXG4gICAgICBtb2RlbEV4dCA9IHN0b3JlLm1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICAgaWYgKG1vZGVsRXh0KSB7XG4gICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxFeHQsIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdKTtcbiAgICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzYXZlXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgJGRiLl9HZW5lcmF0ZWRNb2RlbC5pbnNlcnQobW9kZWxEZWYpO1xuXG4gICAgaWYgKCFtb2RlbERlZi5fY29yZSkge1xuICAgICAgJGxvZy5nZW5lcmF0ZU1vZGVsKG1vZGVsTmFtZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBsb2FkSW5NZW1vcnlcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gTG9hZCBzY2hlbWFzIGFuZCB0eXBlcyBpbiBtZW1vcnlcbiAqL1xuZnVuY3Rpb24gbG9hZEluTWVtb3J5KCkge1xuICB2YXIgc2NoZW1hcyA9IFtdO1xuICB2YXIgdHlwZXMgPSBbXTtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBtb2RlbCA9IHt9O1xuICB2YXIgbW9kZWxzID0gW107XG4gIHZhciB0eXBlID0gbnVsbDtcbiAgdmFyIGlkID0gJyc7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBpbmhlcml0ID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgLy8gaW5pdCBzdG9yZVxuICBzdG9yZS5pbmhlcml0YW5jZSA9IHt9O1xuICBzdG9yZS5pbmhlcml0YW5jZVRyZWUgPSB7fTtcbiAgc3RvcmUuc2NoZW1hcyA9IHt9O1xuICBzdG9yZS5jb21waWxlZFNjaGVtYXMgPSB7fTtcbiAgc3RvcmUubW9kZWxzID0ge307XG4gIHN0b3JlLmdlbmVyYXRlZE1vZGVscyA9IHt9O1xuICBzdG9yZS5zdGF0ZXMgPSB7fTtcbiAgc3RvcmUudHlwZSA9IHt9O1xuXG4gIC8vIGxvYWQgc2NoZW1hc1xuICBzY2hlbWFzID0gJGRiLl9TY2hlbWEuZmluZCh7fSk7XG5cbiAgbGVuZ3RoID0gc2NoZW1hcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHNjaGVtYSA9IHNjaGVtYXNbaV07XG5cbiAgICBuYW1lID0gc2NoZW1hW05BTUVdO1xuICAgIGluaGVyaXQgPSBzY2hlbWFbSU5IRVJJVFNdO1xuXG4gICAgc3RvcmUuc2NoZW1hc1tuYW1lXSA9IHNjaGVtYTtcbiAgICBpZiAoaW5oZXJpdCkge1xuICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0gPSBpbmhlcml0O1xuICAgIH1cblxuICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAkbG9nLmxvYWRTY2hlbWEobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbG9hZCBtb2RlbHNcbiAgbW9kZWxzID0gJGRiLl9Nb2RlbC5maW5kKHt9KTtcblxuICBsZW5ndGggPSBtb2RlbHMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBtb2RlbCA9IG1vZGVsc1tpXTtcbiAgICBuYW1lID0gbW9kZWxbTkFNRV07XG5cbiAgICBzdG9yZS5tb2RlbHNbbmFtZV0gPSBtb2RlbDtcblxuICAgIGlmICghbW9kZWwuX2NvcmUpIHtcbiAgICAgICRsb2cubG9hZE1vZGVsKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvYWQgdHlwZXNcbiAgdHlwZXMgPSAkZGIuX1R5cGUuZmluZCh7fSk7XG5cbiAgbGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0eXBlID0gdHlwZXNbaV07XG4gICAgc3RvcmUudHlwZVt0eXBlLm5hbWVdID0gdHlwZTtcblxuICAgIGlmICghdHlwZS5jb3JlKSB7XG4gICAgICAkbG9nLmxvYWRUeXBlKHR5cGUubmFtZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVJbmhlcml0YW5jZVRyZWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIHRoZSBpbmhlcml0YW5jZSB0cmVlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluaGVyaXRhbmNlVHJlZSgpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIGMzbGluZXJpemF0aW9uID0gW107XG4gIHZhciBhbmNlc3RvcnMgPSBbXTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGFsbCB0aGUgYXJyYXlzIGFyZSBlbXB0eVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gIENoZWNrIGlmIHdlIGhhdmUgZmluaXNlaGQgdG8gbGluZXJpemVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc0VtcHR5KGVsdHMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbHRzW2ldLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWx0IGVsZW1lbnQgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFuIGVsdCBmcm9tIGFsbCB0aGUgYXJyYXlzXG4gICAqL1xuICBmdW5jdGlvbiBfcmVtb3ZlQ2FuZGlkYXRlKGVsdCwgZWx0cykge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgYXJyID0gW107XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA9PT0gMCkge1xuICAgICAgICBhcnIgPSBlbHRzW2ldO1xuICAgICAgICBhcnIucmV2ZXJzZSgpO1xuICAgICAgICBhcnIucG9wKCk7XG4gICAgICAgIGFyci5yZXZlcnNlKCk7XG4gICAgICAgIGVsdHNbaV0gPSBhcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzQ2FuZGlkYXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbHQgZWxlbWVudCB0byByZW1vdmVcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGEgZ29vZCBjYW5kaWRhdGUuXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayB0aGUgZWxlbWVudCBpcyBhIGdvb2QgY2FuZGlkYXRlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNDYW5kaWRhdGUoZWx0LCBlbHRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWx0c1tpXS5pbmRleE9mKGVsdCkgPiAwKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZmluZENhbmRpZGF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHJldHVybnMge0FycmF5fSBhcnJheSBjb250YWluaW5nIHRoZSBjYW5kaWRhdGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIEZpbmQgYSBjYW5kaWRhdGUgYW5kIHJldHVybiBpdC5cbiAgICovXG4gIGZ1bmN0aW9uIF9maW5kQ2FuZGlkYXRlKGVsdHMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX2lzQ2FuZGlkYXRlKGVsdHNbaV1bMF0sIGVsdHMpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsdHNbaV1bMF0pO1xuICAgICAgICBfcmVtb3ZlQ2FuZGlkYXRlKGVsdHNbaV1bMF0sIGVsdHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9tZXJnZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIGNhbmRpZGF0ZXMgcmV0dXJuZWQgYnkgdGhlIG1lcmdlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBNZXJnZSB0aGUgYXJyYXlzXG4gICAqL1xuICBmdW5jdGlvbiBfbWVyZ2UoZWx0cykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuXG4gICAgY2FuZGlkYXRlcyA9IF9maW5kQ2FuZGlkYXRlKGVsdHMpO1xuICAgIHdoaWxlIChjYW5kaWRhdGVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzID0gX2ZpbmRDYW5kaWRhdGUoZWx0cyk7XG4gICAgfVxuXG4gICAgaWYgKCFfaXNFbXB0eShlbHRzKSkge1xuICAgICAgJGxvZy5jeWNsaWNEZXBlbmRlbmN5KCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbGluZXJpemVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgY2FuZGlkYXRlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gU3RhcnQgdGhlIGxpbmVyaWVhdGlvbiBmcm9tIGFuIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9saW5lcml6ZShuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBfY2hlY2tDeWNsaWNEZXBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hlY2tDeWNsaWNEZXAobmFtZSwgaXRlbSkge1xuICAgICAgdmFyIGlzQ3ljbGljRGViID0gZmFsc2U7XG5cbiAgICAgIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtpdGVtXSkgJiZcbiAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbaXRlbV0uaW5kZXhPZihuYW1lKSAhPT0gLTFcbiAgICAgICkge1xuICAgICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3kobmFtZSk7XG4gICAgICAgIGlzQ3ljbGljRGViID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0N5Y2xpY0RlYjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtuYW1lXSkpIHtcbiAgICAgIHBhcmVudHMgPSBzdG9yZS5pbmhlcml0YW5jZVtuYW1lXS5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLm1pc3NpbmdTY2hlbWEobmFtZSk7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX2NoZWNrQ3ljbGljRGVwKG5hbWUsIHBhcmVudHNbaV0pKSB7XG4gICAgICAgIHBhcmVudHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBbbmFtZV0uY29uY2F0KF9tZXJnZShwYXJlbnRzLm1hcChfbGluZXJpemUpLmNvbmNhdChbcGFyZW50c10pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgIGMzbGluZXJpemF0aW9uID0gX2xpbmVyaXplKG5hbWUpO1xuICAgIGFuY2VzdG9ycyA9IGMzbGluZXJpemF0aW9uLnJldmVyc2UoKTtcbiAgICBhbmNlc3RvcnMucG9wKCk7XG4gICAgaWYgKGFuY2VzdG9ycy5sZW5ndGgpIHtcbiAgICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXSA9IGFuY2VzdG9ycztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGV4dGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHRvIGV4dGVuZFxuICogQHJldHVybnMge0pTT059IG9iamVjdCBleHRlbmRlZCB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRXh0ZW5kIGEgc2NoZW1hIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudFxuICovXG5mdW5jdGlvbiBleHRlbmQobmFtZSkge1xuICB2YXIgc29uRXh0ZW5kID0ge307XG4gIHZhciBzb24gPSBzdG9yZS5zY2hlbWFzW25hbWVdO1xuICB2YXIgYW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW25hbWVdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgYW5jZXN0b3IgPSBudWxsO1xuICB2YXIgcHJvcCA9ICcnO1xuXG4gIGlmIChhbmNlc3RvcnMpIHtcbiAgICBsZW5ndGggPSBhbmNlc3RvcnMubGVuZ3RoO1xuICAgIGFuY2VzdG9ycy5yZXZlcnNlKCk7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYW5jZXN0b3IgPSBzdG9yZS5zY2hlbWFzW2FuY2VzdG9yc1tpXV07XG4gICAgZm9yIChwcm9wIGluIGFuY2VzdG9yKSB7XG4gICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgc29uRXh0ZW5kW3Byb3BdID0gYW5jZXN0b3JbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAocHJvcCBpbiBzb24pIHtcbiAgICBzb25FeHRlbmRbcHJvcF0gPSBzb25bcHJvcF07XG4gIH1cbiAgcmV0dXJuIHNvbkV4dGVuZDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIHNvcnRJbmhlcml0YW5jZVRyZWVcbiAqIEByZXR1cm5zIHtBcnJheX0gc29ydGVkIEluaGVyaXRhbmNlVHJlZSBzdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHNvcnRlZCBJbmhlcml0YW5jZVRyZWUgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIHNvcnRJbmhlcml0YW5jZVRyZWUoKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHRlbXAgPSB7fTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbmJBbmNlc3RvcnMgPSAwO1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmluaGVyaXRhbmNlVHJlZSkge1xuICAgIG5iQW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW21vZGVsTmFtZV0ubGVuZ3RoO1xuICAgIGlmICh0eXBlb2YgdGVtcFtuYkFuY2VzdG9yc10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0ZW1wW25iQW5jZXN0b3JzXSA9IFtdO1xuICAgIH1cbiAgICB0ZW1wW25iQW5jZXN0b3JzXS5wdXNoKG1vZGVsTmFtZSk7XG4gIH1cblxuICBrZXlzID0gT2JqZWN0LmtleXModGVtcCkuc29ydCgpO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB0ZW1wW2luZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICByZXN1bHQucHVzaChtb2RlbCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjb21waWxlU2NoZW1hc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgdGhlIG1vZGVsc1xuICovXG5mdW5jdGlvbiBjb21waWxlU2NoZW1hcygpIHtcbiAgdmFyIG5hbWUgPSAnJztcblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuc2NoZW1hcykge1xuICAgIGlmICghc3RvcmUuc2NoZW1hc1tuYW1lXS5fY29yZSkge1xuICAgICAgJGxvZy5jb21waWxlU2NoZW1hKG5hbWUpO1xuICAgIH1cblxuICAgIHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXSA9IGV4dGVuZChuYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tNb2RlbHNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhbGwgdGhlIG1vZGVscyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZWlyIHNjaGVtYXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tNb2RlbHMoKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBjbGFzc0RlZiA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSAnJztcblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgY2xhc3NEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgaWYgKGNsYXNzRGVmKSB7XG4gICAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgIGlmICghY2xhc3NEZWYuX2NvcmUpIHtcbiAgICAgICAgICAkbG9nLmNoZWNrTW9kZWwobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJbXAoY2xhc3NEZWYsIHNjaGVtYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLm1pc3NpbmdJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0YXRlc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBzdGF0ZXMgb2YgYSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHR5cGUgPSAnJztcbiAgdmFyIHN0YXRlcyA9IFtdO1xuICB2YXIgYXR0cmlidXRlID0gJyc7XG5cbiAgZm9yIChuYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgIHN0YXRlcyA9IFtdO1xuICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXTtcbiAgICBpZiAoc2NoZW1hKSB7XG4gICAgICBmb3IgKGF0dHJpYnV0ZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgdHlwZSA9IHNjaGVtYVthdHRyaWJ1dGVdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYXR0cmlidXRlLmluZGV4T2YoJ18nKSAhPT0gMCAmJlxuICAgICAgICAgIGludGVybmFsVHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3RhdGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzdG9yZS5zdGF0ZXNbbmFtZV0gPSBzdGF0ZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrSW1wXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzRGVmIHNjaGVtYSB0byB0ZXN0XG4gKiBAcGFyYW0ge0pTT059IGNsYXNzSW1wIHNjaGVtYSB0byB2YWxpZGF0ZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGl0cyBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gY2hlY2tJbXAoY2xhc3NEZWYsIGNsYXNzSW1wKSB7XG4gIHZhciBwcm9wZXJ0eSA9ICcnO1xuICB2YXIgdmFsdWUgPSBudWxsO1xuXG4gIGZvciAocHJvcGVydHkgaW4gY2xhc3NJbXApIHtcbiAgICBpZiAoXG4gICAgICBwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gREVTQ1JJUFRJT04gJiZcbiAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ09SRVxuICAgICkge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc0RlZltwcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhbHVlID0gY2xhc3NEZWZbcHJvcGVydHldO1xuICAgICAgICBpZiAoIWNoZWNrU2NoZW1hKHZhbHVlLCBjbGFzc0ltcFtwcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBpZiBhbGwgcHJvcGVydGllcyBhcmUgdGhlcmVcbiAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0RlZikge1xuICAgIGlmIChcbiAgICAgIHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBERVNDUklQVElPTiAmJlxuICAgICAgcHJvcGVydHkgIT09IElOSEVSSVRTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBDT1JFXG4gICAgKSB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzSW1wW3Byb3BlcnR5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrU2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtPYmplY3R9IHR5cGUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrU2NoZW1hKHZhbHVlLCB0eXBlKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIGlmIChoYXNUeXBlKHR5cGUsICdzdHJpbmcnKSAmJiBkZWZhdWx0VHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrQ3VzdG9tU2NoZW1hXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGEgdmFsdWUgaGFzIGNvcnJlY3QgY3VzdG9tIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIGlmICghaGFzVHlwZSh0eXBlRGVmLCAndW5kZWZpbmVkJykpIHtcbiAgICBpZiAoIWhhc1R5cGUodmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKHR5cGVEZWYudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRTY2hlbWEodmFsdWVbaV0sIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkVHlwZSh2YWx1ZVtpXSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRTY2hlbWEodmFsdWUsIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpbml0RGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW5pdCB0aGUgRGF0YWJhc2Ugc3R1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gaW5pdERiU3RydWN0dXJlKCkge1xuICAkZGIuY29sbGVjdGlvbignX0xvZ2dlcicpO1xuICAkZGIuY29sbGVjdGlvbignX1NjaGVtYScpO1xuICAkZGIuY29sbGVjdGlvbignX01vZGVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfR2VuZXJhdGVkTW9kZWwnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19DbGFzc0luZm8nKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19CZWhhdmlvcicpO1xuICAkZGIuY29sbGVjdGlvbignX1N0YXRlJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfVHlwZScpO1xuICAkZGIuY29sbGVjdGlvbignX01lc3NhZ2UnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19DaGFubmVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfTG9nJyk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVEYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgdGhlIERhdGFiYXNlIHN0cnVjdHVyZSAoaS5lLiBEYXRhYmFzZUNvbGxlY3Rpb24pXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURiU3RydWN0dXJlKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBtb2RlbERlZiA9IHt9O1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKFxuICAgICAgdHlwZW9mICRkYlttb2RlbERlZltOQU1FXV0gPT09ICd1bmRlZmluZWQnICYmXG4gICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlXG4gICAgKSB7XG4gICAgICAkZGIuY29sbGVjdGlvbihtb2RlbERlZltOQU1FXSk7XG5cbiAgICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICAgJGxvZy5jcmVhdGVDb2xsZWN0aW9uKG1vZGVsRGVmW05BTUVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhbGwgdGhlIGNsYXNzZXMgb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBtb2RlbERlZiA9IHt9O1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UpIHtcbiAgICAgICRjb21wb25lbnQuY3JlYXRlKHtcbiAgICAgICAgbW9kZWw6IG1vZGVsTmFtZVxuICAgICAgfSk7XG4gICAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAgICRsb2cuY3JlYXRlQ2xhc3MobW9kZWxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzSW5mb1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYWxsIHRoZSBDbGFzc0luZm8gb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzSW5mbygpIHtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxEZWYgPSB7fTtcbiAgdmFyIG5hbWUgPSAnJztcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIG5hbWUgPSBtb2RlbERlZltOQU1FXSArICdJbmZvJztcblxuICAgIGlmIChcbiAgICAgIG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UgJiZcbiAgICAgIGV4cG9ydHMuaW5oZXJpdEZyb20obW9kZWxEZWZbTkFNRV0sICdfQ29tcG9uZW50JylcbiAgICApIHtcbiAgICAgIGlmICghJGNvbXBvbmVudC5nZXQobmFtZSkpIHtcbiAgICAgICAgJGRiLl9DbGFzc0luZm8uaW5zZXJ0KHtcbiAgICAgICAgICBfaWQ6IG5hbWUsXG4gICAgICAgICAgc2NoZW1hOiBzdG9yZS5jb21waWxlZFNjaGVtYXNbbW9kZWxOYW1lXSxcbiAgICAgICAgICBtb2RlbDogbW9kZWxEZWZcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZGIuX0NsYXNzSW5mby51cGRhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgX2lkOiBuYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfaWQ6IG5hbWUsXG4gICAgICAgICAgICBzY2hlbWE6IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1ttb2RlbE5hbWVdLFxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsRGVmXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmVhbENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0UmVhbENsYXNzTmFtZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgnQCcsICcnKS50cmltKCk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZWFsVHlwZU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gcmVhbCBuYW1lXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmVhbCBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIHR5cGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmVhbFR5cGVOYW1lKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKCd7JywgJycpXG4gICAgLnJlcGxhY2UoJ30nLCAnJylcbiAgICAudHJpbSgpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNDdXN0b21UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgdmFsdWUgYSBjdXN0b20gdHlwZVxuICovXG5mdW5jdGlvbiBpc0N1c3RvbVR5cGUodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9XG4gICAgaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpICYmXG4gICAgZGVmYXVsdFR5cGVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJlxuICAgICFleHBvcnRzLmlzQ2xhc3NOYW1lKHZhbHVlKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNUeXBlUmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSByZWZlcmVuY2UgYSB0eXBlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZVJlZmVyZW5jZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZigneycpICE9PSAtMTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGlzTW9kZWxQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgdmFsdWUgYSBtb2RlbCBwYXRoXG4gKi9cbmZ1bmN0aW9uIGlzTW9kZWxQYXRoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmVhbFR5cGVcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHR5cGUgb2YgdGhlIHZhbHVlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmVhbCB0eXBlIG9mIGEgdmFsdWVcbiAqL1xuZnVuY3Rpb24gZ2V0UmVhbFR5cGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSAnJztcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5JztcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gJ2FueScpIHtcbiAgICB0eXBlID0gJ2FueSc7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldENsYXNzTmFtZVxuICogQHBhcmFtIHt0eXBlfSBvYmogb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKG9iaikge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgaWYgKG9iaiAmJiBvYmouY29uc3RydWN0b3IpIHtcbiAgICByZXN1bHQgPSBvYmouY29uc3RydWN0b3IubmFtZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBlbnVtVmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGVudW0gdmFsdWVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVudW1WYWx1ZSh2YWx1ZSwgZW51bVZhbHVlKSB7XG4gIHJldHVybiBlbnVtVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEBwYXJhbSB7dHlwZX0gdHlwZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdmFsdWUgaGFzIHR5cGUgJ3R5cGUnXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSB2YWx1ZSBoYXMgdGhlIHNwZWNpZmllZCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGhhc1R5cGUodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBkYXRlID0gbnVsbDtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXN1bHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgcmVzdWx0ID0gIWlzTmFOKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlIGluc3RhbmNlb2YgRGF0ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FueSc6XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlc3VsdCA9IHR5cGUgPT09IHR5cGVvZiB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaGFzIGZvciB0eXBlIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBoYXMgYSBzcGVjaWZpYyB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrVHlwZShuYW1lLCBpZCwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIHZhciBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdO1xuICB2YXIgYXR0cmlidXRlVHlwZSA9ICcnO1xuXG4gIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW05BTUVdKSB7XG4gICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG4gIH1cblxuICBpZiAoY29tcG9uZW50U2NoZW1hKSB7XG4gICAgYXR0cmlidXRlVHlwZSA9IGNvbXBvbmVudFNjaGVtYVtuYW1lLnNwbGl0KCcuJylbMF1dO1xuICAgIGlmIChhdHRyaWJ1dGVUeXBlID09PSB0eXBlKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBzb3VyY2Ugc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IHRhcmdldCBzY2hlbWFcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbWVyZ2UgYWxzbyBwcml2YXRlIHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9IG1lcmdlZCBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBNZXJnZSB0d28gc2NoZW1hc1xuICovXG5mdW5jdGlvbiBtZXJnZShzb3VyY2UsIHRhcmdldCwgYWxsKSB7XG4gIHZhciBwcm9wTmFtZSA9ICcnO1xuICB2YXIgcmVzdWx0ID0gdGFyZ2V0O1xuXG4gIGZvciAocHJvcE5hbWUgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICByZXN1bHRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIHNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBzY2hlbWEgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbmV3IHNjaGVtYSB0byB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuc2NoZW1hID0gZnVuY3Rpb24gc2NoZW1hKHNjaGVtYSkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBtZXJnZWRTY2hlbWEgPSB7fTtcbiAgdmFyIHNjaGVtYXMgPSBbXTtcblxuICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNjaGVtYSkpO1xuICBuYW1lID0gc2NoZW1hW05BTUVdO1xuXG4gIGlmICh0eXBlb2Ygc2NoZW1hW0lEXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzY2hlbWFbSURdID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzY2hlbWFbSU5IRVJJVFNdID09PSAndW5kZWZpbmVkJykge1xuICAgIHNjaGVtYVtJTkhFUklUU10gPSBbJ19Db21wb25lbnQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW1vdmVEdXBsaWNhdGVcbiAgICogQHBhcmFtIHtBcnJheX0gaW5oZXJpdHMgbGlzdCBvZiBwYXJlbnRzXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiByZW1vdmUgZHVwbGljYXRlIHBhcmVudHMgaW4gdGhlIGxpc3Qgb2YgcGFyZW50c1xuICAgKi9cbiAgZnVuY3Rpb24gX3JlbW92ZUR1cGxpY2F0ZShpbmhlcml0cykge1xuICAgIHZhciBmaWx0ZXJlZExpc3QgPSBbXTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuXG4gICAgaW5oZXJpdHMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgY2xlYW5OYW1lID0gbmFtZS50cmltKCk7XG4gICAgICBpZiAodHlwZW9mIGxpc3RbY2xlYW5OYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGlzdFtjbGVhbk5hbWVdID0gY2xlYW5OYW1lO1xuICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChjbGVhbk5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbiAgfVxuXG4gIHNjaGVtYVtJTkhFUklUU10gPSBfcmVtb3ZlRHVwbGljYXRlKHNjaGVtYVtJTkhFUklUU10pO1xuXG4gIC8vIGNoZWNrIGlmIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gIGlmIChleHBvcnRzLmlzVmFsaWRPYmplY3Qoc2NoZW1hLCBzdG9yZS5tZXRhZGVmLnNjaGVtYSwgZmFsc2UpKSB7XG4gICAgc2NoZW1hcyA9ICRkYi5fU2NoZW1hLmZpbmQoe1xuICAgICAgX25hbWU6IG5hbWVcbiAgICB9KTtcbiAgICBpZiAoc2NoZW1hcy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZFNjaGVtYSA9IG1lcmdlKHNjaGVtYSwgc2NoZW1hc1swXSk7XG4gICAgICAkZGIuX1NjaGVtYS51cGRhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBfbmFtZTogbmFtZVxuICAgICAgICB9LFxuICAgICAgICBtZXJnZWRTY2hlbWFcbiAgICAgICk7XG4gICAgICBpZCA9IHNjaGVtYXNbMF0uX2lkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAkZGIuX1NjaGVtYS5pbnNlcnQoc2NoZW1hKTtcbiAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRTY2hlbWEoc2NoZW1hW05BTUVdKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtb2RlbFxuICogQHBhcmFtIHtKU09OfSBtb2RlbCBtb2RlbFxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG5ldyBtb2RlbCB0byB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMubW9kZWwgPSBmdW5jdGlvbiBtb2RlbChtb2RlbCkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpbmhlcml0ID0gJyc7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBtZXJnZWRNb2RlbCA9IHt9O1xuICB2YXIgbW9kZWxzID0gW107XG5cbiAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vZGVsKSk7XG4gIG5hbWUgPSBtb2RlbFtOQU1FXTtcblxuICBpZiAodHlwZW9mIG1vZGVsW0lEXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2RlbFtJRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIG1vZGVsIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhIG1ldGEgbW9kZWxcbiAgaWYgKGV4cG9ydHMuaXNWYWxpZE9iamVjdChtb2RlbCwgc3RvcmUubWV0YWRlZi5tb2RlbCwgZmFsc2UpKSB7XG4gICAgbW9kZWxzID0gJGRiLl9Nb2RlbC5maW5kKHtcbiAgICAgIF9uYW1lOiBuYW1lXG4gICAgfSk7XG4gICAgaWYgKG1vZGVscy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWwsIG1vZGVsc1swXSk7XG4gICAgICAkZGIuX01vZGVsLnVwZGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIF9uYW1lOiBuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlZE1vZGVsXG4gICAgICApO1xuICAgICAgaWQgPSBtb2RlbHNbMF0uX2lkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAkZGIuX01vZGVsLmluc2VydChtb2RlbCk7XG4gICAgICBpZCA9IHJlc3VsdFswXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy5pbnZhbGlkTW9kZWwobW9kZWxbTkFNRV0pO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRUeXBlIHR5cGUgdG8gYWRkXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbmV3IHR5cGVcbiAqL1xuZXhwb3J0cy50eXBlID0gZnVuY3Rpb24gdHlwZShpbXBvcnRlZFR5cGUpIHtcbiAgdmFyIGlkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbmFtZSA9IGltcG9ydGVkVHlwZS5uYW1lO1xuXG4gIC8vIGNoZWNrIGlmIHR5cGUgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICBpZiAoZXhwb3J0cy5pc1ZhbGlkT2JqZWN0KGltcG9ydGVkVHlwZSwgc3RvcmUubWV0YWRlZi50eXBlKSkge1xuICAgIHJlc3VsdCA9ICRkYi5fVHlwZS5pbnNlcnQoaW1wb3J0ZWRUeXBlKTtcbiAgICBpZCA9IHJlc3VsdFswXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRUeXBlRGVmaW5pdGlvbihuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbml0XG4gKiBAZGVzY3JpcHRpb24gSW5pdCB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGV4cG9ydHMuY2xlYXIoKTtcbiAgc3RvcmUubWV0YWRlZiA9IHtcbiAgICBzY2hlbWE6IHtcbiAgICAgIF9pZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX25hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIF9pbmhlcml0OiB7XG4gICAgICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IFsnX0NvbXBvbmVudCddXG4gICAgICB9LFxuICAgICAgX2NsYXNzOiB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIF9jb3JlOiB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIF9kZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIF9pZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX25hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIF9pbmhlcml0OiB7XG4gICAgICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfY2xhc3M6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2NvcmU6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICBfaWQ6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBbJ2FueSddLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY29yZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaW5pdERiU3RydWN0dXJlKCk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgdGhlIGRhdGEgb2YgdGhlIG1ldGFtb2RlbCBmcm9tIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBzdG9yZSA9IHtcbiAgICBtZXRhZGVmOiB7fSxcbiAgICBpbmhlcml0YW5jZToge30sXG4gICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICBzY2hlbWFzOiB7fSxcbiAgICBjb21waWxlZFNjaGVtYXM6IHt9LFxuICAgIG1vZGVsczoge30sXG4gICAgZ2VuZXJhdGVkTW9kZWxzOiB7fSxcbiAgICBzdGF0ZXM6IHt9LFxuICAgIHR5cGU6IHt9XG4gIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICRsb2cubW9kZWxDcmVhdGlvbkJlZ2luKCk7XG4gIGxvYWRJbk1lbW9yeSgpO1xuICBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKTtcbiAgY29tcGlsZVNjaGVtYXMoKTtcbiAgZ2VuZXJhdGVNb2RlbHMoKTtcbiAgY2hlY2tNb2RlbHMoKTtcbiAgZ2V0U3RhdGVzKCk7XG4gIGNyZWF0ZURiU3RydWN0dXJlKCk7XG4gIGNyZWF0ZUNsYXNzKCk7XG4gIGNyZWF0ZUNsYXNzSW5mbygpO1xuICAkbG9nLm1vZGVsQ3JlYXRpb25FbmQoKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhbiBldmVudFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuaXNFdmVudCA9IGZ1bmN0aW9uIGlzRXZlbnQobmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgRVZFTlRfVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pc1Byb3BlcnR5ID0gZnVuY3Rpb24gaXNQcm9wZXJ0eShuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBQUk9QRVJUWV9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0xpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbGlua1xuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbGlua1xuICovXG5leHBvcnRzLmlzTGluayA9IGZ1bmN0aW9uIGlzTGluayhuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBMSU5LX1RZUEUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pc0NvbGxlY3Rpb24gPSBmdW5jdGlvbiBpc0NvbGxlY3Rpb24obmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgQ09MTEVDVElPTl9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc01ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbWV0aG9kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pc01ldGhvZCA9IGZ1bmN0aW9uIGlzTWV0aG9kKG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIE1FVEhPRF9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1N0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgYSBzdHJ1Y3R1cmVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHN0cnVjdHVyZVxuICovXG5leHBvcnRzLmlzU3RydWN0dXJlID0gZnVuY3Rpb24gaXNTdHJ1Y3R1cmUobmFtZSwgaWQpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdO1xuICB2YXIgYXR0cmlidXRlVHlwZSA9ICcnO1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIGlmIChtb2RlbFtuYW1lXSkge1xuICAgIHR5cGUgPSBzdG9yZS50eXBlW21vZGVsW25hbWVdLnR5cGVdO1xuICB9XG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5zY2hlbWEpIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU3RhdGUgPSBmdW5jdGlvbiBpc1ZhbGlkU3RhdGUobmFtZSwgaWQpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2lkXTtcbiAgdmFyIHN0YXRlID0ge307XG5cbiAgaWYgKGlzTW9kZWxQYXRoKG5hbWUpKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkTW9kZWxQYXRoKGlkLCBuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY29tcG9uZW50U2NoZW1hICYmIGNvbXBvbmVudFNjaGVtYVtOQU1FXSkge1xuICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG4gICAgfVxuICAgIHN0YXRlID0gc3RvcmUuc3RhdGVzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICAgIHJlc3VsdCA9IHN0YXRlLmluZGV4T2YobmFtZSkgIT09IC0xO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZFR5cGUgPSBmdW5jdGlvbiBpc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDdXN0b21UeXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZURlZi52YWx1ZSkgJiYgdHlwZURlZi52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jaGVja0NsYXNzTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggYSBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gX2NoZWNrQ2xhc3NOYW1lKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgdHlwZVJlZiA9IGdldFJlYWxDbGFzc05hbWUodHlwZU5hbWUpO1xuICAgIHZhciBjb21wb25lbnQgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykpIHtcbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBnZXRDbGFzc05hbWUoY29tcG9uZW50KSAhPT0gdHlwZVJlZiAmJlxuICAgICAgICBKU09OLnN0cmluZ2lmeShjb21wb25lbnQpICE9PSAne30nXG4gICAgICApIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZS5yZXBsYWNlKCdAJywgJycpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZFR5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgcmVhbFR5cGUgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVOYW1lKTtcbiAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IF9jaGVja0NsYXNzTmFtZSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lKTpcbiAgICAgIHJlc3VsdCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlTmFtZSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVOYW1lXSkge1xuICAgICAgICAgICRsb2cuaW52YWxpZEVudW1UeXBlKHZhbHVlLCB0eXBlTmFtZSwgc3RvcmUudHlwZVt0eXBlTmFtZV0udHlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVOYW1lKTpcbiAgICAgIHJlc3VsdCA9IF9jaGVja0NsYXNzTmFtZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1NjaGVtYX0gc2NoZW1hIHNjaGVtYSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIGVudW1cbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZSBlbnVtLlxuICovXG5leHBvcnRzLmlzVmFsaWRFbnVtID0gZnVuY3Rpb24gaXNWYWxpZEVudW0odmFsdWUsIHNjaGVtYSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNJbnN0YW5jZU9mXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcHJpdmF0ZSBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBmb3IgY2xhc3MgbmFtZSBjbGFzc05hbWVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc0luc3RhbmNlT2YoY29tcG9uZW50LCBjbGFzc05hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuXG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICBpZiAoY29tcG9uZW50Q2xhc3NOYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9XG4gICAgcmVzdWx0ID0gY29tcG9uZW50Q2xhc3NOYW1lID09PSBjbGFzc05hbWU7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGV4cG9ydHMuaXNDbGFzc05hbWUoc2NoZW1hLnR5cGUpKSB7XG4gICAgcmVzdWx0ID1cbiAgICAgIF9pc0luc3RhbmNlT2YoJGNvbXBvbmVudC5nZXQodmFsdWUpLCBnZXRSZWFsQ2xhc3NOYW1lKHNjaGVtYS50eXBlKSkgJiZcbiAgICAgIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCBzY2hlbWEudHlwZSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IG9iamVjdFxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGEgc2NoZW1hXG4gKiBpdCBpcyBzdXBwb3NlZCB0byB2YWxpZGF0ZS5cbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU2NoZW1hID0gZnVuY3Rpb24gaXNWYWxpZFNjaGVtYShvYmplY3QsIHNjaGVtYSkge1xuICB2YXIgZmllbGROYW1lID0gJyc7XG4gIHZhciBmaWVsZCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgbWFuZGF0b3J5ID0gdHJ1ZTtcbiAgdmFyIHR5cGVTY2hlbWEgPSAnJztcbiAgdmFyIHR5cGVSZWYgPSAnJztcbiAgdmFyIHJlYWxUeXBlID0gJyc7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDbGFzc05hbWVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3NcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ2xhc3NOYW1lKCkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgZW51bVZhbHVlID0gW107XG5cbiAgICB0eXBlUmVmID0gZ2V0Q2xhc3NOYW1lKHR5cGVTY2hlbWEpO1xuICAgIHR5cGVSZWYgPSBvYmplY3RbdHlwZVJlZl07XG4gICAgdHlwZVJlZiA9IHR5cGVSZWYucmVwbGFjZSgnQCcsICcnKTsgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVJlZikpIHtcbiAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdKSB7XG4gICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgLy8gY2hlY2sgdmFsdWVcbiAgICAgICAgICBlbnVtVmFsdWUgPSBzdG9yZS50eXBlW3R5cGVSZWZdLnZhbHVlO1xuICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICBpc1ZhbGlkID0gQXJyYXkuaXNBcnJheShmaWVsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlUmVmKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgfHwgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpO1xuICAgICAgICAgIC8vIFRPRE8gbWF5YmUgaGF2ZSBhIG1vcmUgc3RyaWN0IHZhbGlkYXRpb24gdGhhbiBqdXN0IGEgdHlwZSBjaGVja2luZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVSZWYsIGZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZFR5cGVSZWZlcmVuY2VcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlcyB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VzIHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZVJlZmVyZW5jZSgpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGVudW1WYWx1ZSA9IFtdO1xuXG4gICAgdHlwZVJlZiA9IGdldFJlYWxUeXBlTmFtZSh0eXBlU2NoZW1hKTtcbiAgICB0eXBlUmVmID0gb2JqZWN0W3R5cGVSZWZdO1xuICAgIHR5cGVSZWYgPSB0eXBlUmVmLnJlcGxhY2UoJ0AnLCAnJyk7IC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVSZWYpKSB7XG4gICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXSkge1xuICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS50eXBlKTtcblxuICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgZW51bVZhbHVlID0gc3RvcmUudHlwZVt0eXBlUmVmXS52YWx1ZTtcbiAgICAgICAgICBpZiAoZW51bVZhbHVlKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW1WYWx1ZShmaWVsZCwgZW51bVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVSZWYgPT09ICdhcnJheScpIHtcbiAgICAgICAgaXNWYWxpZCA9IEFycmF5LmlzQXJyYXkoZmllbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVJlZikpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpIHx8IGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTtcbiAgICAgICAgICAvLyBUT0RPIG1heWJlIGhhdmUgYSBtb3JlIHN0cmljdCB2YWxpZGF0aW9uIHRoYW4ganVzdCBhIHR5cGUgY2hlY2tpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlUmVmLCBmaWVsZCk7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRUeXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlU2NoZW1hKTtcbiAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWhhc1R5cGUoZmllbGQsIHR5cGVTY2hlbWEpKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZVNjaGVtYVswXV0uc2NoZW1hKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkW2ldLCB0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0sIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvLyB0eXBlXG4gIGlmIChoYXNUeXBlKG9iamVjdCwgJ29iamVjdCcpKSB7XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICBpZiAoaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVNjaGVtYSk6XG4gICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDbGFzc05hbWUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc1R5cGVSZWZlcmVuY2UodHlwZVNjaGVtYSk6XG4gICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlUmVmZXJlbmNlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYW5kYXRvcnlcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICBpZiAoXG4gICAgICAgIG1hbmRhdG9yeSA9PT0gdHJ1ZSAmJlxuICAgICAgICAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgb2JqZWN0W2ZpZWxkTmFtZV0gIT09IHVuZGVmaW5lZClcbiAgICAgICkge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICRsb2cuaW52YWxpZFByb3BlcnR5Rm9ybWF0KG9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cmljdCB0cnVlIGlmIHZhbGlkYXRpb24gaXMgc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmIHRydWUgaWYgd2UgcmVtb3ZlIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgdGhlIGNvbnN0cnVjdG9yIG9mIGFuIG9iamVjdCBpcyBjb21wbGlhbnRcbiAqIHdpdGggdGhlIGRlZmluaXRpb24gb2YgdGhlIGNsYXNzLlxuICovXG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBmdW5jdGlvbiBpc1ZhbGlkT2JqZWN0KFxuICBvYmplY3QsXG4gIHNjaGVtYSxcbiAgc3RyaWN0LFxuICBjbGVhblJlZlxuKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJztcbiAgdmFyIGZpZWxkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBtYW5kYXRvcnkgPSB0cnVlO1xuICB2YXIgdHlwZVNjaGVtYSA9ICcnO1xuICB2YXIgdHlwZVJlZiA9ICcnO1xuICB2YXIgcmVhbFR5cGUgPSAnJztcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoaGFzVHlwZShzdHJpY3QsICd1bmRlZmluZWQnKSkge1xuICAgIHN0cmljdCA9IHRydWU7XG4gIH1cblxuICBpZiAoaGFzVHlwZShjbGVhblJlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgY2xlYW5SZWYgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkQ3VzdG9tVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBjdXN0b20gdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIGN1c3RvbSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIHJlYWxUeXBlID0gJyc7XG5cbiAgICByZWFsVHlwZSA9IHN0b3JlLnR5cGVbdHlwZVNjaGVtYV07XG4gICAgaWYgKHJlYWxUeXBlKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS5zY2hlbWEsICd1bmRlZmluZWQnKTpcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgcmVhbFR5cGUuc2NoZW1hLCBzdHJpY3QsIGNsZWFuUmVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS52YWx1ZSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgIGlzVmFsaWQgPSBleHBvcnRzLmlzVmFsaWRFbnVtKGZpZWxkLCByZWFsVHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaXNWYWxpZCA9IGV4cG9ydHMuaXNWYWxpZFR5cGUoZmllbGQsIHJlYWxUeXBlLnR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDbGFzc05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkIGEgZmllbGRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVTY2hlbWEgYSBzY2hlbWFcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3MgbmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3MgbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDbGFzc05hbWUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGNvbXAgPSBudWxsO1xuICAgIHZhciBpc0NvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgdHlwZVJlZiA9IGdldFJlYWxDbGFzc05hbWUodHlwZVNjaGVtYSk7XG4gICAgaWYgKGZpZWxkICYmIGZpZWxkLmlkKSB7XG4gICAgICBjb21wID0gZmllbGQ7XG4gICAgICBpc0NvbXBvbmVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXAgPSAkY29tcG9uZW50LmdldChmaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNUeXBlKGNvbXAsICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKCFleHBvcnRzLmluaGVyaXRGcm9tKGNvbXAuY29uc3RydWN0b3IubmFtZSwgdHlwZVJlZikpIHtcbiAgICAgICAgLy8gaWYgKGdldENsYXNzTmFtZShjb21wKSAhPT0gdHlwZVJlZikgeyB1bmNvbW1lbnQgdGhpcyBsaW5lIGZvciBhIHN0cmljdCBtb2RlXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNDb21wb25lbnQgJiYgY2xlYW5SZWYpIHtcbiAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGNvbXAuaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgZm9yIGRlZmF1bHQgdmFsdWUgb2YgYW4gb2JqZWN0ICh7fSBvciBudWxsKVxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpICYmXG4gICAgICAgICAgZmllbGQgIT09IG51bGwgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoID4gMDpcbiAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJykgJiYgZmllbGQgIT09ICcnOlxuICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciBkYXRlID0gbnVsbDtcbiAgICB2YXIgdHlwZUFycmF5ID0gJyc7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ2FueSc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgdHlwZVNjaGVtYSwgc3RyaWN0LCBjbGVhblJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVTY2hlbWEgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShmaWVsZCk7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSAhaXNOYU4oZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBnZXRSZWFsVHlwZShmaWVsZCkgIT09IHR5cGVTY2hlbWEgJiZcbiAgICAgICAgICAgICAgICBnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhbnknXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICB0eXBlQXJyYXkgPSB0eXBlU2NoZW1hWzBdO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGRbaV0sIHR5cGVBcnJheSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWV4cG9ydHMuaXNDbGFzc05hbWUodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGdldFJlYWxUeXBlKGZpZWxkW2ldKSAhPT0gdHlwZUFycmF5ICYmXG4gICAgICAgICAgICAgICAgICB0eXBlQXJyYXkgIT09ICdhbnknXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVBcnJheSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZFtpXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAvLyBDYXNlIG9mIGFuIGltcG9ydCBvZiBhIHN5c3RlbVxuICAgICAgICAgICAgICAgICAgaWYgKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgIWV4cG9ydHMuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDbGFzc05hbWUoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVhbENsYXNzTmFtZSh0eXBlQXJyYXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSlcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkW2ldICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhZXhwb3J0cy5pbmhlcml0RnJvbShcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDbGFzc05hbWUoZmllbGRbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSksXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0gPSBmaWVsZFtpXS5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgJ2FycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICRsb2cudW5rbm93blR5cGUoZmllbGQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvLyBjaGVjayBpZiBvYmplY3RcbiAgaWYgKCFoYXNUeXBlKG9iamVjdCwgJ29iamVjdCcpKSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkVHlwZShvYmplY3QsICdvYmplY3QnKTtcbiAgfVxuXG4gIC8vIHR5cGVcbiAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgIGlmIChcbiAgICAgICFoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykgfHxcbiAgICAgIGZpZWxkTmFtZSA9PT0gJ19jb3JlJyB8fFxuICAgICAgZmllbGROYW1lID09PSAnX2lkJ1xuICAgICkge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZmllbGROYW1lID09PSAnX2NvcmUnOlxuICAgICAgICAgIHR5cGVTY2hlbWEgPSAnYm9vbGVhbic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGROYW1lID09PSAnX2lkJzpcbiAgICAgICAgICB0eXBlU2NoZW1hID0gJ3N0cmluZyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVTY2hlbWEpOlxuICAgICAgICByZXN1bHQgPSBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDbGFzc05hbWUoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hbmRhdG9yeVxuICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICBpZiAob2JqZWN0ICYmIGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSkge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBvYmplY3QgaW4gb3JkZXIgdG8gYmUgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIEBtZXRob2QgcHJlcGFyZU9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gcHJlcGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICovXG5leHBvcnRzLnByZXBhcmVPYmplY3QgPSBmdW5jdGlvbiBwcmVwYXJlT2JqZWN0KG9iamVjdCwgc2NoZW1hKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJztcbiAgdmFyIGZpZWxkID0gbnVsbDtcbiAgdmFyIG1hbmRhdG9yeSA9IHRydWU7XG4gIHZhciBkZWZhdWx0VmFsdWUgPSAnJztcblxuICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNjaGVtYSkpO1xuXG4gIC8vIG1hbmRhdG9yeSAmIGRlZmF1bHQgdmFsdWVcbiAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdDtcbiAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAobWFuZGF0b3J5ID09PSBmYWxzZSAmJiAhaGFzVHlwZShkZWZhdWx0VmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5nZXRTY2hlbWEgPSBmdW5jdGlvbiBnZXRTY2hlbWEobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdKSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybnMge09iamVjdH0gdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgbW9kZWxcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbCA9IGZ1bmN0aW9uIGdldE1vZGVsKG5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSkge1xuICAgIHJlc3VsdCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEdldCBhIHR5cGVcbiAqL1xuZXhwb3J0cy5nZXRUeXBlID0gZnVuY3Rpb24gZ2V0VHlwZShuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmIChzdG9yZS50eXBlW25hbWVdICYmIHN0b3JlLnR5cGVbbmFtZV0pIHtcbiAgICByZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLnR5cGVbbmFtZV0pKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldE1vZGVsUGF0aFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGF0aCBvZiB0aGUgc3RydWN0dXJlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHlwZSBvZiBhIG1vZGVsIHBhdGhcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbFBhdGhUeXBlID0gZnVuY3Rpb24gZ2V0TW9kZWxQYXRoVHlwZShtb2RlbCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIHN1YnBhdGhzID0gW107XG4gIHZhciBzdWJwYXRoID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBzdHJ1Y3R1cmUgPSAnJztcblxuICBzdWJwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgbGVuZ3RoID0gc3VicGF0aHMubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHN1YnBhdGggPSBzdWJwYXRoc1tpXTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0gZXhwb3J0cy5nZXRNb2RlbChtb2RlbClbc3VicGF0aF0udHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZXN1bHQpKSB7XG4gICAgICAgIHN0cnVjdHVyZSA9IGV4cG9ydHMuZ2V0VHlwZShyZXN1bHQpO1xuICAgICAgICBpZiAoc3RydWN0dXJlLnNjaGVtYSkge1xuICAgICAgICAgIHJlc3VsdCA9IHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0udHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZShtb2RlbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFN0YXRlKG1vZGVsLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkTW9kZWxQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHBhdGggb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcGF0aCBpcyB2YWxpZCBmb3IgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBwYXRoIGlzIHZhbGlkIG1vZGVsIHBhdGhcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkTW9kZWxQYXRoID0gZnVuY3Rpb24gaXNWYWxpZE1vZGVsUGF0aChtb2RlbCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgc3VicGF0aHMgPSBbXTtcbiAgdmFyIHN1YnBhdGggPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHN0cnVjdHVyZSA9ICcnO1xuXG4gIHN1YnBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICBsZW5ndGggPSBzdWJwYXRocy5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc3VicGF0aCA9IHN1YnBhdGhzW2ldO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICB0eXBlID0gZXhwb3J0cy5nZXRNb2RlbChtb2RlbClbc3VicGF0aF0udHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlKSkge1xuICAgICAgICBzdHJ1Y3R1cmUgPSBleHBvcnRzLmdldFR5cGUodHlwZSk7XG4gICAgICAgIGlmIChzdHJ1Y3R1cmUuc2NoZW1hICYmIHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0pIHtcbiAgICAgICAgICB0eXBlID0gc3RydWN0dXJlLnNjaGVtYVtzdWJwYXRoXS50eXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgbWV0YWRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbFxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuZ2V0TWV0YURlZiA9IGZ1bmN0aW9uIGdldE1ldGFEZWYoKSB7XG4gIHZhciByZXN1bHQgPSBzdG9yZS5tZXRhZGVmLnNjaGVtYTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm5zIHtBcnJheX0gaWQgaWQgb2YgdGhlIHBhcmVudHNcbiAqIEBkZXNjcmlwdGlvbiBHZXQgcGFyZW50cyBvZiBhIHNjaGVtYSBpZiBhbnlcbiAqL1xuZXhwb3J0cy5nZXRQYXJlbnRzID0gZnVuY3Rpb24gZ2V0UGFyZW50cyhpZCkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKCFzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdKSB7XG4gICAgcmVzdWx0ID0gW107XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5zbGljZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqL1xuZXhwb3J0cy5pbmhlcml0RnJvbSA9IGZ1bmN0aW9uIGluaGVyaXRGcm9tKG5hbWUsIHBhcmVudE5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZWFyY2hQYXJlbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYW5jZXN0b3JOYW1lIG9mIHRoZSBwYXJlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICAgKi9cbiAgZnVuY3Rpb24gX3NlYXJjaFBhcmVudChjbGFzc05hbWUsIGFuY2VzdG9yTmFtZSkge1xuICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2U7XG4gICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKGNsYXNzTmFtZSk7XG4gICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAocGFyZW50cy5pbmRleE9mKGFuY2VzdG9yTmFtZSkgIT09IC0xKSB7XG4gICAgICAgIGlzQW5jZXN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXNBbmNlc3RvciA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgYW5jZXN0b3JOYW1lKTtcbiAgICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0FuY2VzdG9yO1xuICB9XG5cbiAgaWYgKG5hbWUgIT09IHBhcmVudE5hbWUpIHtcbiAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKG5hbWUpO1xuICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAocGFyZW50cy5pbmRleE9mKHBhcmVudE5hbWUpICE9PSAtMSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBwYXJlbnROYW1lKTtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmlzQ2xhc3NOYW1lID0gZnVuY3Rpb24gaXNDbGFzc05hbWUodmFsdWUpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKTtcblxuICBpZiAocmVzdWx0KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHN0b3JlLmdlbmVyYXRlZE1vZGVscykubGVuZ3RoID4gMCkge1xuICAgICAgbmFtZSA9IHZhbHVlLnJlcGxhY2UoJ0AnLCAnJyk7XG4gICAgICByZXN1bHQgPSB0eXBlb2Ygc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdICE9PSAndW5kZWZpbmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHN5c3RlbVxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBTeXN0ZW0gUnVudGltZS5cbiAqIEl0IGluaXRzIFN5c3RlbSBSdW50aW1lIG1ldGFtb2RlbCBhbmQgbG9hZHMgU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRzeXN0ZW0gPSByZXF1aXJlKCcuLi9idWlsZC9zeXN0ZW0vc3lzdGVtLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJztcbnZhciBzeXN0ZW0gPSAnJztcbnZhciBjaGFubmVsID0gbnVsbDtcblxuLy8gcG9seWZpbGxcbiRoZWxwZXIucG9seWZpbGwoKTtcblxuLy8gaW5pdCBNZXRhbW9kZWxcbiRtZXRhbW9kZWwuaW5pdCgpO1xuXG4vLyBpbml0IHJ1bnRpbWUgZnJvbSBhIHN5c3RlbVxuc3l0ZW1JZCA9ICRkYi5pbXBvcnRTeXN0ZW0oJHN5c3RlbS5zeXN0ZW0pO1xuXG5zeXN0ZW0gPSAkY29tcG9uZW50LmdldChzeXRlbUlkKTtcbmNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xuXG5zeXN0ZW0uc3RhdGUoJ2luc3RhbGxlZCcpO1xuY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5dGVtSWQpO1xuc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xuY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3l0ZW1JZCk7XG5zeXN0ZW0uc3RhdGUoJ3N0YXJ0aW5nJyk7XG5jaGFubmVsLiRzeXN0ZW1TdGFydGVkKHN5dGVtSWQpO1xuXG5zeXN0ZW0uc3RhcnQoKTtcblxuc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcblxuLyogUHVibGljIHByb3BlcnR5ICovXG5cbi8qKlxuICogQHByb3BlcnR5IHJ1bnRpbWVcbiAqIEB0eXBlIF9SdW50aW1lXG4gKiBAZGVzY3JpcHRpb24gX1J1bnRpbWUgaW5zdGFuY2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAkY29tcG9uZW50LmdldCgncnVudGltZScpO1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBzdGF0ZVxuICogQHJlcXVpcmVzIGRiXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGVjb21wb25lbnRzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxudmFyIHN0b3JlID0ge307XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWQgb24gd2hpY2ggY2hhbmdlIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIFNldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5zZXQgPSBmdW5jdGlvbiBzZXQoaWQsIHN0YXRlLCB2YWx1ZSkge1xuICBzdG9yZVtpZF0gPSB7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xuICAkZGIuc3RvcmUuX1N0YXRlW2lkXSA9IHtcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybnMge1N0cmluZ30gc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgcmV0dXJuIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBzdG9yZSA9IHt9O1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEByZXF1aXJlcyBiZWhhdmlvclxuICogQHJlcXVpcmVzIHN0YXRlXG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAcmVxdWlyZXMgbG9nXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSB3b3JrZmxvdyBvZiBTeXN0ZW0gUnVudGltZS5cbiAqIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgY2hhbmdlIG9mIHN0YXR1cyBvZiBhIGNvbXBvbmVudCBpcyB2YWxpZCB0byBiZSBleGVjdXRlZC4gQnkgdmFsaWQsIGl0IG1lYW5zIHRoYXQ6XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCxcbiAqIC0gdGhlIGlucHV0IChpLmUuIHBhcmFtZXRlcnMpIG9mIGFsbCBhY3Rpb25zIGZvciB0aGUgc3RhdGUgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwgYW5kXG4gKiAtIHRoZSBvdXRwdXQgb2YgYWxsIGFjdGlvbnMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwuXG4gKlxuICogSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgd29ya2Zsb3cgd2lsbCBjYWxsIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBydW50aW1lLlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAY2xhc3MgUnVudGltZUVycm9yXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugb2YgdGhlIGVycm9yXG4gKiBAZGVzY3JpcHRpb24gVGhlIFJ1bnRpbWVFcnJvciBjbGFzc1xuICovXG5mdW5jdGlvbiBSdW50aW1lRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLm5hbWUgPSAnUnVudGltZUVycm9yJztcbn1cblJ1bnRpbWVFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblJ1bnRpbWVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSdW50aW1lRXJyb3I7XG5cbi8qKlxuICogQG1ldGhvZCBpc01vZGVsUGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIGEgbW9kZWwgcGF0aFxuICovXG5mdW5jdGlvbiBpc01vZGVsUGF0aCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignLicpICE9PSAtMTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge0FycmF5fSB0aGUgbmFtZXMgb2YgYWxsIHBhcmFtZXRlcnMgb2YgdGhlIG1ldGhvZCBmb3IgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIG5hbWVzIG9mIHRoZSBwYXJhbWV0ZXIgb2YgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbDtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICB9XG5cbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNNb2RlbFBhdGgobWV0aG9kTmFtZSkpIHtcbiAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7QXJyYXl9IG51bWJlciBvZiBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IGZvciB0aGUgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OdW1iZXIoaWQsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGw7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbWluID0gMDtcbiAgdmFyIG1heCA9IDA7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICB9XG5cbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgcGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBtaW4gPSBtaW4gKyAxO1xuICAgICAgICB9XG4gICAgICAgIG1heCA9IG1heCArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1pbik7XG4gICAgcmVzdWx0LnB1c2gobWF4KTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBzZXREZWZhdWx0VmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtBcnJheX0gYXJncyBhcmd1bWVudHNcbiAqIEByZXR1cm5zIHtBcnJheX0gYXJndW1lbnRzIHdpdGggZGVmYXVsdCB2YWx1ZXNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gU2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBub24gbWFuZGF0b3J5IHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdFZhbHVlKGlkLCBtZXRob2ROYW1lLCBhcmdzKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gZmFsc2UgJiYgdHlwZW9mIGFyZ3NbaV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLmRlZmF1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFJldHVyblR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIHR5cGUgcmV0dXJuZWQgYnkgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHR5cGUgcmV0dXJuZWQgYnkgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZ2V0UmV0dXJuVHlwZShpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgcmVzdWx0VHlwZSA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgIHJlc3VsdFR5cGUgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXS5yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICB9XG5cbiAgaWYgKHJlc3VsdFR5cGUpIHtcbiAgICByZXN1bHQgPSByZXN1bHRUeXBlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQYXJhbVR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtBcnJheX0gdGhlIHR5cGVzIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1UeXBlcyhpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbDtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICB9XG5cbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0udHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrUmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb25zIG9uIG91cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gb3V0cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbDtcbiAgdmFyIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJztcbiAgdmFyIG1ldGhvZFJlc3VsdCA9IG51bGw7XG4gIHZhciB0eXBlb2ZNZXRob2RSZXN1bHQgPSAnJztcbiAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuICB2YXIgcmV0dXJuVHlwZSA9IG51bGw7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgcGFyYW1zLm1ldGhvZFJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtZXRob2RSZXN1bHQgPSBwYXJhbXMubWV0aG9kUmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIG1ldGhvZFJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgcmV0dXJuVHlwZSA9IGdldFJldHVyblR5cGUoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcblxuICBpZiAocmV0dXJuVHlwZSAhPT0gbnVsbCkge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSByZXR1cm5UeXBlID09PSAnYW55JzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHJldHVyblR5cGUgPT09ICdhcnJheSc6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXRob2RSZXN1bHQpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShcbiAgICAgICAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICAgICAgcmV0dXJuVHlwZSxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHJldHVyblR5cGUpOlxuICAgICAgICBpZiAobWV0aG9kUmVzdWx0LmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZFJlc3VsdC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0eXBlb2ZNZXRob2RSZXN1bHQgPSBtZXRob2RSZXN1bHQubmFtZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHlwZW9mTWV0aG9kUmVzdWx0ID0gbWV0aG9kUmVzdWx0LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2ZNZXRob2RSZXN1bHQgIT09IHJldHVyblR5cGUucmVwbGFjZSgnQCcsICcnKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKFxuICAgICAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgIHJldHVyblR5cGUsXG4gICAgICAgICAgICAgIHR5cGVvZk1ldGhvZFJlc3VsdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShcbiAgICAgICAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICAgICAgcmV0dXJuVHlwZSxcbiAgICAgICAgICAgIHR5cGVvZiBtZXRob2RSZXN1bHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2RSZXN1bHQgIT09IHJldHVyblR5cGUpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKFxuICAgICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlLFxuICAgICAgICAgICAgdHlwZW9mIG1ldGhvZFJlc3VsdFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQgYSBTeXN0ZW0gUnVudGltZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgdHJ1ZSBpZiB0aGUgc3RhdGUgaXMgYW4gZXZlbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiB0aGUgYWN0aW9uc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIGFjdGlvbnMgb2YgdGhlIHNwZWNpZmllZCBzdGF0ZVxuICovXG5mdW5jdGlvbiBnZXRBY3Rpb25zKGNvbXBvbmVudCwgbmFtZSwgaXNFdmVudCkge1xuICB2YXIgYWN0aW9uID0gJGJlaGF2aW9yLmdldEFjdGlvbnMoY29tcG9uZW50LmlkKCksIG5hbWUpO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcGFyZW50ID0gbnVsbDtcblxuICBpZiAoIWFjdGlvbi5sZW5ndGggfHwgaXNFdmVudCkge1xuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChcbiAgICAgICAgZ2V0QWN0aW9ucygkY29tcG9uZW50LmdldChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSksIG5hbWUsIGlzRXZlbnQpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRzID0gJG1ldGFtb2RlbC5nZXRQYXJlbnRzKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmVudHNbaV0pO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKHBhcmVudCwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cudW5rbm93bkNvbXBvbmVudChwYXJlbnRzW2ldLCBjb21wb25lbnQubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgYWN0aW9uLnJldmVyc2UoKTtcbiAgfVxuXG4gIHJldHVybiBhY3Rpb247XG59XG5cbi8qKlxuICogQG1ldGhvZCBjYWxsQWN0aW9uXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgaXMgdGhlIGFjdGlvbiBhIGNhbGxiYWNrIG9mIGFuIGV2ZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gcmVzdWx0IG9mIHRoZSBhY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDYWxsIGFuIGFjdGlvbiBhbmQgbWFrZSBzb21lIERlcGVuZGVuY3kgSW5qZWN0aW9uIGlmIGl0IGlzIGEgY29yZSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gY2FsbEFjdGlvbihjb21wb25lbnQsIHN0YXRlLCBhY3Rpb24sIHBhcmFtcywgaXNFdmVudCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIGluamVjdGVkUGFyYW1zID0gW107XG4gIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcblxuICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIGlmIChcbiAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpICYmXG4gICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpICYmXG4gICAgISRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpXG4gICkge1xuICAgIHBhcmFtcyA9IHNldERlZmF1bHRWYWx1ZShjb21wb25lbnRDbGFzc05hbWUsIHN0YXRlLCBwYXJhbXMpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChwYXJhbXNbaV0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udXNlQ29yZUFQSSkge1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkY29tcG9uZW50KTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGRiKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJG1ldGFtb2RlbCk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKGV4cG9ydHMpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkYmVoYXZpb3IpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkc3RhdGUpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkbG9nKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGhlbHBlcik7XG4gICAgfVxuXG4gICAgaWYgKCRoZWxwZXIuaXNPbk5vZGUoKSkge1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkaGVscGVyLmdldFJlcXVpcmUoKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgIGlmIChhY3Rpb24uY29udGV4dCkge1xuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgIGFjdGlvbi5hY3Rpb24uYmluZC5hcHBseShcbiAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24sXG4gICAgICAgICAgICBbYWN0aW9uLmNvbnRleHRdLmNvbmNhdChpbmplY3RlZFBhcmFtcylcbiAgICAgICAgICApLFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgYWN0aW9uLmFjdGlvbi5iaW5kLmFwcGx5KFxuICAgICAgICAgICAgYWN0aW9uLmFjdGlvbixcbiAgICAgICAgICAgIFtjb21wb25lbnRdLmNvbmNhdChpbmplY3RlZFBhcmFtcylcbiAgICAgICAgICApLFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGFjdGlvbi5jb250ZXh0KSB7XG4gICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoYWN0aW9uLmNvbnRleHQsIGluamVjdGVkUGFyYW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBpbmplY3RlZFBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBSdW50aW1lRXJyb3IpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXcgRnVuY3Rpb24oKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ3J1bnRpbWU6IGNhbiBub3QgZXhlY3V0ZSBuZXcgRnVuY3Rpb24oKSBpbnN0cnVjdGlvbiBpbiB0aGUgY3VycmVudCBjb250ZXh0LidcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVycm9yKSB7XG4gICAgICAgICAgY29tcG9uZW50LmVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgICAgICAgIHN0YXRlICtcbiAgICAgICAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICAgICAgICBjb21wb25lbnQuaWQoKSArXG4gICAgICAgICAgICAgIFwiJ1wiLFxuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJGhlbHBlci5nZXRSdW50aW1lKCkpIHtcbiAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5lcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICAgICAgICBzdGF0ZSArXG4gICAgICAgICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgICAgICAgY29tcG9uZW50LmlkKCkgK1xuICAgICAgICAgICAgICBcIidcIixcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJGxvZy5hY3Rpb25JbnZva2VFcnJvcihcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBlLm1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgdmFsaWRQYXJhbU51bWJlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIGFwcGxpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBhY3Rpb25cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhY3Rpb24gaXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYWN0aW9uIGhhcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlclxuICovXG5leHBvcnRzLnZhbGlkUGFyYW1OdW1iZXJzID0gZnVuY3Rpb24gdmFsaWRQYXJhbU51bWJlcnMoXG4gIGNsYXNzTmFtZSxcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSB7XG4gIHZhciBmdW5jID0gJyc7XG4gIHZhciBiZWdpbkJvZHkgPSAtMTtcbiAgdmFyIGhlYWRlciA9ICcnO1xuICB2YXIgZnVuY1BhcmFtcyA9ICcnO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciBwYXJhbU51bWJlciA9IDA7XG4gIHZhciBtb2RlbE51bWJlclBhcmFtID0gW107XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgLy8gY2hlY2sgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICBmdW5jID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuICBoZWFkZXIgPSBoZWFkZXIucmVwbGFjZSgnPT4nLCAnJyk7XG5cbiAgaWYgKGhlYWRlci5pbmRleE9mKCcoJykgIT09IC0xKSB7XG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlclxuICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgIC5yZXBsYWNlKCcpJywgJycpXG4gICAgICAudHJpbSgpO1xuICB9IGVsc2Uge1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXIudHJpbSgpO1xuICB9XG5cbiAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICBpZiAocGFyYW1zWzBdID09PSAnJykge1xuICAgIHBhcmFtcyA9IFtdO1xuICB9XG4gIHBhcmFtTnVtYmVyID0gcGFyYW1zLmxlbmd0aDtcblxuICAvLyBnZXQgdGhlIG51bWJlciBtaW4gYW5kIG1heCBvZiB2YWxpZCBwYXJhbWV0ZXJzXG4gIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzTmFtZSk7XG4gIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc05hbWUpO1xuICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NOYW1lKTtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzQ29sbGVjdGlvbjpcbiAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMiwgMl07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKGNsYXNzTmFtZSwgc3RhdGUpID09PSAnYXJyYXknKSB7XG4gICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMiwgMl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gWzEsIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc0xpbms6XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gWzEsIDFdO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBnZXRQYXJhbU51bWJlcihjbGFzc05hbWUsIHN0YXRlKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gY29tcGFyZVxuICBpZiAoXG4gICAgbW9kZWxOdW1iZXJQYXJhbVswXSA8PSBwYXJhbU51bWJlciAmJlxuICAgIHBhcmFtTnVtYmVyIDw9IG1vZGVsTnVtYmVyUGFyYW1bMV1cbiAgKSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbiBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBjYWxsaW5nIHRoZSBhY3Rpb25cbiAqL1xuZXhwb3J0cy5jaGVja1BhcmFtcyA9IGZ1bmN0aW9uIGNoZWNrUGFyYW1zKHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbDtcbiAgdmFyIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJztcbiAgdmFyIGFyZ3MgPSBwYXJhbXMuYXJncyB8fCAnJztcbiAgdmFyIHBhcmFtc05hbWUgPSBbXTtcbiAgdmFyIHBhcmFtc1R5cGUgPSBbXTtcbiAgdmFyIHBhcmFtc051bWJlciA9IFtdO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciBsZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcGFyYW0gPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIGlzUHJvcGVydHkgPSBmYWxzZTtcbiAgdmFyIGlzTGluayA9IGZhbHNlO1xuICB2YXIgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0NvbGxlY3Rpb246XG4gICAgICBpZiAoYXJncyAmJiBhcmdzWzFdICYmIGFyZ3NbMV0gPT09ICdyZXNldCcpIHtcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtcbiAgICAgICAgICBbJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVbMF1dLFxuICAgICAgICAgICdzdHJpbmcnXG4gICAgICAgIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNUeXBlID0gW1xuICAgICAgICAgICRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlWzBdLFxuICAgICAgICAgICdzdHJpbmcnXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICBwYXJhbXNOdW1iZXIgPSBbMiwgMl07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICBpZiAoaXNNb2RlbFBhdGgobWV0aG9kTmFtZSkpIHtcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtcbiAgICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsUGF0aFR5cGUoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKVxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zVHlwZSA9IFskbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICRtZXRhbW9kZWwuZ2V0TW9kZWxQYXRoVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpID09PSAnYXJyYXknXG4gICAgICApIHtcbiAgICAgICAgaWYgKGFyZ3MgJiYgYXJnc1sxXSAmJiBhcmdzWzFdID09PSAncmVzZXQnKSB7XG4gICAgICAgICAgcGFyYW1zVHlwZSA9IFtbJ2FueSddLCAnc3RyaW5nJ107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zVHlwZSA9IFsnYW55JywgJ3N0cmluZyddO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtc051bWJlciA9IFsyLCAyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc051bWJlciA9IFsxLCAxXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaXNMaW5rOlxuICAgICAgcGFyYW1zVHlwZSA9IFskbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcGFyYW1zVHlwZSA9IGdldFBhcmFtVHlwZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHBhcmFtc051bWJlciA9IGdldFBhcmFtTnVtYmVyKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIGNhc2Ugb2Ygb2JqZWN0XG4gIGlmICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykge1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cblxuICBpZiAobGVuZ3RoIDwgcGFyYW1zTnVtYmVyWzBdIHx8IHBhcmFtc051bWJlclsxXSA8IGxlbmd0aCkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKFxuICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgIG1ldGhvZE5hbWVcbiAgICApO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcGFyYW0gPSBhcmdzW2ldO1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoaSA8IHBhcmFtc051bWJlclswXSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXIoXG4gICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgbWV0aG9kTmFtZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShwYXJhbSwgcGFyYW1zVHlwZVtpXSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShcbiAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICAgIHBhcmFtc05hbWVbaV1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGFjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQGRlc2NyaXB0aW9uIENhbGwgYW4gYWN0aW9uIHRoYXQgY29tZXMgZnJvbSBhbiBldmVudFxuICovXG5leHBvcnRzLmFjdGlvbiA9IGZ1bmN0aW9uIGFjdGlvbihiZWhhdmlvcklkLCBwYXJhbXMpIHtcbiAgdmFyIGlzRXZlbnQgPSBmYWxzZTtcbiAgdmFyIGlzUHJvcGVydHkgPSBmYWxzZTtcbiAgdmFyIGlzTGluayA9IGZhbHNlO1xuICB2YXIgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG4gIHZhciBiZWhhdmlvcnMgPSBbXTtcbiAgdmFyIGJlaGF2aW9yID0gbnVsbDtcbiAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcbiAgdmFyIGFjdGlvbkZyb21NZW1vcnkgPSBudWxsO1xuXG4gIGJlaGF2aW9ycyA9ICRkYi5fQmVoYXZpb3IuZmluZCh7XG4gICAgX2lkOiBiZWhhdmlvcklkXG4gIH0pO1xuXG4gIGFjdGlvbkZyb21NZW1vcnkgPSAkYmVoYXZpb3IuZ2V0KGJlaGF2aW9ySWQpO1xuXG4gIGlmIChiZWhhdmlvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgYmVoYXZpb3IgPSBiZWhhdmlvcnNbMF07XG5cbiAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChiZWhhdmlvci5jb21wb25lbnQpO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgfVxuXG4gICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oXG4gICAgICAgIGJlaGF2aW9yLnN0YXRlLFxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWVcbiAgICAgICk7XG5cbiAgICAgIGlmIChpc0V2ZW50IHx8IGlzUHJvcGVydHkgfHwgaXNDb2xsZWN0aW9uIHx8IGlzTGluaykge1xuICAgICAgICBjYWxsQWN0aW9uKFxuICAgICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgICBiZWhhdmlvci5zdGF0ZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1c2VDb3JlQVBJOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgICAgICAgY29udGV4dDogYmVoYXZpb3IuY29udGV4dCxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uRnJvbU1lbW9yeVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbXMgdG8gY2hhbmdlIHRoZSBzdGF0ZVxuICoge1N0cmluZ30gY29tcG9uZW50IGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqIHtBcnJheX0gZGF0YSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIGFjdGlvblxuICogQGRlc2NyaXB0aW9uIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBXb3JrbG93OlxuICpcbiAqIDAuIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGRlc3Ryb3llZFxuICogMS4gQ2hlY2sgaWYgdGhlIHN0YXRlIGlzIGEgbWV0aG9kLCBhIHByb3BlcnR5IG9yIGFuIGV2ZW50XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFjdGlvbnMgZm9yIHRoZSBuZXcgc3RhdGVcbiAqIDMuIElmIHNvLCBnZXQgdGhlIGFjdGlvbihzKVxuICogNC4gQ2hlY2sgaWYgdGhlIGlucHV0cyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIDUuIENhbGwgdGhlIGFjdGlvbihzKVxuICogNi4gSWYgYSBtZXRob2QsIGNoZWNrIGlmIHRoZSBvdXRwdXQgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWRcbiAqIDguIFJldHVybiB0aGUgcmVzdWx0XG4gKi9cbmV4cG9ydHMuc3RhdGUgPSBmdW5jdGlvbiBzdGF0ZShwYXJhbXMpIHtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICBwYXJhbXMuY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCAnJztcbiAgcGFyYW1zLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICcnO1xuICBwYXJhbXMuZGF0YSA9IHBhcmFtcy5kYXRhIHx8IFtdO1xuICBwYXJhbXMuY29udGV4dCA9IHBhcmFtcy5jb250ZXh0IHx8IG51bGw7XG5cbiAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gIHZhciBjdXJyZW50U3RhdGUgPSAnJztcbiAgdmFyIGFjdGlvbnMgPSBbXTtcbiAgdmFyIGFjdGlvbiA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gZmFsc2U7XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgaXNFdmVudCA9IGZhbHNlO1xuXG4gIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG5cbiAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuc3RhdGUgPT09ICdkZXN0cm95Jykge1xuICAgICRsb2cuaW52YWxpZFVzZU9mQ29tcG9uZW50KHBhcmFtcy5jb21wb25lbnQpO1xuICB9XG5cbiAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG4gICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBhY3Rpb25zID0gZ2V0QWN0aW9ucyhjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgaXNFdmVudCk7XG4gIH1cblxuICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBleHBvcnRzLmNoZWNrUGFyYW1zKHtcbiAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgIG1ldGhvZE5hbWU6IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgYXJnczogcGFyYW1zLmRhdGFcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoIWlzRXZlbnQgJiYgIWlzUHJvcGVydHkgJiYgIWlzTGluayAmJiAhaXNDb2xsZWN0aW9uKSB7XG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbMF07XG4gICAgICAgIHJlc3VsdCA9IGNhbGxBY3Rpb24oXG4gICAgICAgICAgcGFyYW1zLmNvbnRleHQgfHwgY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgcGFyYW1zLmRhdGEsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICBjaGVja1Jlc3VsdCh7XG4gICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgbWV0aG9kTmFtZTogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgIG1ldGhvZFJlc3VsdDogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbaV07XG4gICAgICAgICAgY2FsbEFjdGlvbihcbiAgICAgICAgICAgIHBhcmFtcy5jb250ZXh0IHx8IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgIHBhcmFtcy5kYXRhLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUsIHBhcmFtcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY29tcG9uZW50ICYmIChpc0V2ZW50IHx8IGlzUHJvcGVydHkgfHwgaXNMaW5rIHx8IGlzQ29sbGVjdGlvbikpIHtcbiAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSwgcGFyYW1zLmRhdGEpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1ldGVyc1xuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSlcbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKiBAZGVzY3JpcHRpb24gU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lXG4gKi9cbmV4cG9ydHMuc3RvcCA9IGZ1bmN0aW9uIHN0b3AocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIHBhcmFtcy5lcnJvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwYXJhbXMuZXJyb3IgPSBmYWxzZTtcbiAgfVxuICBwYXJhbXMubWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlIHx8ICcnO1xuXG4gIGV4cG9ydHMuc3RhdGUgPSBmdW5jdGlvbiBzdGF0ZSgpIHt9O1xuXG4gIGlmIChwYXJhbXMuZXJyb3IpIHtcbiAgICBpZiAocGFyYW1zLm1lc3NhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICdydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSAnICsgcGFyYW1zLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICdydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSBvZiBhbiB1bmtub3duIGVycm9yJ1xuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtcy5tZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAncnVudGltZTogcnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgJyArIHBhcmFtcy5tZXNzYWdlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdydW50aW1lOiBydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQnKTtcbiAgICB9XG4gIH1cbn07XG4iXX0=
