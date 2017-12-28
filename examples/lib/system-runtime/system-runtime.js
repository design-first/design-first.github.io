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
  version: '2.2.0',
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
      classInfo: 'property',
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
      core: {
        type: 'boolean',
        readOnly: false,
        mandatory: false,
        default: false
      },
      useCoreAPI: {
        type: 'boolean',
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
            name: 'handler',
            type: 'function'
          },
          {
            name: 'useCoreAPI',
            type: 'boolean',
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
        type: '_ClassInfo',
        readOnly: false,
        mandatory: false,
        default: {}
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
        'function off(state, behaviorId) {\n  var args = [],\n    i = 0,\n    length = arguments.length;\n\n  for (i = 0; i < length - 7; i++) {\n    args.push(arguments[i]);\n  }\n\n  if ($workflow.checkParams({\n    "component": this,\n    "methodName": "off",\n    "args": args\n  })) {\n\n    if (state || behaviorId) {\n      if ($metamodel.isValidState(state, this.constructor.name)) {\n        $behavior.remove({\n          "behaviorId": behaviorId,\n          "componentId": this.id(),\n          "state": state\n        });\n      } else {\n        this.require(\'logger\').warn("invoke \\\'off\\\' method of component \'" + this.id() + "\' with an invalid state \'" + state + "\'");\n      }\n    } else {\n      $behavior.remove({\n        "componentId": this.id()\n      });\n    }\n  }\n}',
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
    '1a5111d17a1800c': {
      _id: '1a5111d17a1800c',
      component: '_Database',
      state: 'collections',
      action:
        "function collections() {\n  var result = {},\n    collectionName = '';\n\n  for (collectionName in $db.store) {\n    if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('_') !== 0) {\n      result[collectionName] = $db[collectionName];\n    }\n  }\n  return result;\n}",
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
        "function install(url, async) {\n  var importedSystem = null,\n    system = {},\n    systemId = '',\n    callbackLoad = null,\n    xhr = null,\n    result = '',\n    channel = $component.get('channel');\n\n  if (typeof url === 'object') {\n    importedSystem = url;\n  } else {\n    if (url.indexOf('{') === 0) {\n      importedSystem = JSON.parse(url);\n    }\n  }\n\n  if (importedSystem) {\n    systemId = $db.importSystem(importedSystem);\n    if (systemId) {\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    }\n  } else {\n    if (typeof global !== 'undefined' && typeof window === 'undefined') {\n      if (url.indexOf('.json') !== -1) {\n        system = global.require(global.process.env.PWD + '/' + url);\n      } else {\n        system = global.require(url);\n      }\n      systemId = $db.importSystem(system);\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    } else {\n      xhr = new XMLHttpRequest();\n      callbackLoad = function callbackLoad(system, url) {\n        var sysId = $db.importSystem(system),\n          sys = $component.get(sysId),\n          channel = $component.get('channel');\n\n        if (typeof url === 'string') {\n          sys.location(url);\n        }\n        sys.state('installed');\n        channel.$systemInstalled(sysId);\n        sys.state('resolved');\n        channel.$systemResolved(sysId);\n\n        result = sysId;\n      };\n\n      if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status === 200 || xhr.status === 0) {\n              callbackLoad(JSON.parse(xhr.response), url);\n            }\n          }\n        };\n        xhr.send(null);\n      } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200 || xhr.status === 0) {\n          callbackLoad(JSON.parse(xhr.response), url);\n        }\n      }\n    }\n  }\n  return result;\n}",
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
        version: '2.2.0'
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
 * @returns {String} id of the behavior created in System Runtime database
 * @description Add a behavior that will be stored in System Runtime database
 */
exports.add = function add(id, state, action, useCoreAPI, core) {
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
    core: core
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
 * @description Sub class to override push and pop method of Array Class
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

    // classInfo
    if ($metamodel.inheritFrom(classId, '_Component')) {
      config.classInfo = classId + 'Info';
    }

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
 * @method addId
 * @param {Function} Class a class
 * @param {String} classId name of the class
 * @private
 * @description Add an id method to a class that will return its id
 */
function addId(Class, classId) {
  var body = function body() {
    return classId;
  };
  Class.id = new Function(
    '__body',
    'return function id (prop, val) { return __body.call(this, prop, val) };'
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
 * @description  * Add methods to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts / outputs are compliant with the model.
 */
function addMethods(model, Class, classId) {
  var methods = getMethods(model);

  methods.forEach(function method(methodName) {
    var paramsName = getParamNames(classId, methodName);
    var params = paramsName.join(',');
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
      paramsWithContext = paramsName.join('');

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
    var params = paramsName.join(',');

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
  var body = function body(state, handler, useCoreAPI, isCore) {
    var behaviorId = '';
    var currentState = '';

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
          if ($workflow.validParamNumbers(classId, state, handler)) {
            behaviorId = $behavior.add(
              this.id(),
              state,
              handler,
              useCoreAPI,
              isCore
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
    'return function on (state, handler, useCoreAPI, isCore) { return __body.call(this,state,handler,useCoreAPI,isCore) };'
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
  var body = function body(state, handler, useCoreAPI, isCore) {
    var behaviorId = '';
    var currentState = '';

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
          if ($workflow.validParamNumbers(classId, state, handler)) {
            behaviorId = $behavior.add(
              this.id(),
              state,
              handler,
              useCoreAPI,
              isCore
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
    'return function on (state, handler, useCoreAPI, isCore) { return __body.call(this, state, handler, useCoreAPI,isCore) };'
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
 * @method addClassInfoClass
 * @param {Object} Class Class
 * @private
 * @description Add the addClassInfo method on a class
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

  addId(Class, classId);

  addProperties(config.model, Class, classId);
  addMethods(config.model, Class, classId);
  addEvents(config.model, Class, classId);

  // add default properties/methods only if the component
  // inherit from _Component
  if ($metamodel.inheritFrom(classId, '_Component')) {
    addOn(Class, classId);
    addOnClass(Class, classId);
    addOffClass(Class, classId);
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
      schema = JSON.parse(JSON.stringify(exports.store._Schema[schemaId]));
      if (!schema._core) {
        dbDump.schemas[schemaId] = schema;
      }
    }
  }

  // models
  dbDump.models = {};
  if (exports._Model.count()) {
    for (modelId in exports.store._Model) {
      model = JSON.parse(JSON.stringify(exports.store._Model[modelId]));
      if (!model._core) {
        dbDump.models[modelId] = model;
      }
    }
  }

  // types
  dbDump.types = {};
  if (exports._Type.count()) {
    for (typeId in exports.store._Type) {
      type = JSON.parse(JSON.stringify(exports.store._Type[typeId]));
      if (!type.core) {
        dbDump.types[type.name] = type;
      }
    }
  }

  // behaviors
  dbDump.behaviors = {};
  for (behaviorId in exports.store._Behavior) {
    behavior = JSON.parse(JSON.stringify(exports.store._Behavior[behaviorId]));
    delete behavior.classInfo;

    if (!behavior.core) {
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
        delete collection[id].classInfo;

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
 * @method contains
 * @param {Object} source source object
 * @param {Object} target target object
 * @returns {Boolean} true if the source object contains the target object
 * @private
 * @description Test if an object contains another one
 */
function contains(source, target) {
  var result = true;
  var findInArray = false;
  var property = '';
  var i = 0;
  var length = 0;

  for (property in source) {
    if (typeof target[property] !== 'undefined') {
      if (source[property] instanceof RegExp) {
        if (
          Array.isArray(target[property]) &&
          !Array.isArray(source[property])
        ) {
          length = target[property].length;
          for (i = 0; i < length; i++) {
            if (
              target[property][i].toString().match(source[property]) !== null
            ) {
              findInArray = true;
              break;
            }
          }
          result = findInArray;
        } else {
          if (target[property].toString().match(source[property]) === null) {
            result = false;
            break;
          }
        }
      } else {
        if (
          Array.isArray(target[property]) &&
          !Array.isArray(source[property])
        ) {
          if (target[property].indexOf(source[property]) === -1) {
            result = false;
            break;
          }
        } else {
          if (target[property] !== source[property]) {
            result = false;
            break;
          }
        }
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
  var result = [];
  var resultId = {};
  var id = '';
  var object = {};

  query = query || null;

  if (query && Object.keys(query).length) {
    if (Array.isArray(query)) {
      query.forEach(
        function multiSearch(criteria) {
          for (id in exports.store[this.name]) {
            object = exports.store[this.name][id];
            if (contains(criteria, object)) {
              if (typeof resultId[id] === 'undefined') {
                result.push(object);
                resultId[id] = true;
              }
            }
          }
        }.bind(this)
      );
    } else {
      for (id in exports.store[this.name]) {
        object = exports.store[this.name][id];
        if (contains(query, object)) {
          result.push(object);
        }
      }
    }
  } else {
    for (id in exports.store[this.name]) {
      object = exports.store[this.name][id];
      result.push(object);
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
 * @description Remove a document from the colllection.
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

            if (contains(criteria, object)) {
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

        if (contains(query, object)) {
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
  getLogger().warn("missing property '" + propertyName + "'");
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
    "missing property '" +
      property +
      "' for the definition of '" +
      className +
      "'"
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
 * @param {String} collectionName the name of the colllection
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
 * @param {String} collectionName the name of the colllection
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
 * @param {String} collectionName the name of the colllection
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
    "try to add a behavior with an unkwown state '" +
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
 * @description invalid parameter number for an action add with on method
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
    "invalid number of parameters when adding an action on method '" +
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
  getLogger().warn("the schema '" + name + "' is not valid");
};

/**
 * @method invalidModel
 * @param {String} name name of the model
 * @description Try to add an invalid model
 */
exports.invalidModel = function invalidModel(name) {
  getLogger().warn("the model '" + name + "' is not valid");
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
          if (att.indexOf('_') !== 0) {
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
 * @param {JSON} importedSchema schema to add
 * @description Add a new schema
 */
exports.schema = function schema(importedSchema) {
  var id = null;
  var result = [];
  var schema = null;
  var name = '';
  var mergedSchema = {};
  var schemas = [];

  schema = JSON.parse(JSON.stringify(importedSchema));
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
 * @param {JSON} importedModel model to add
 * @description Add a new model
 */
exports.model = function model(importedModel) {
  var model = null;
  var id = null;
  var result = [];
  var inherit = '';
  var name = '';
  var mergedModel = {};
  var models = [];

  model = JSON.parse(JSON.stringify(importedModel));
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
      _description: {
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

    if (!hasType(schema[fieldName], 'undefined') || fieldName === '_core') {
      // case of _core
      if (fieldName !== '_core') {
        typeSchema = schema[fieldName].type;
      } else {
        typeSchema = 'boolean';
      }

      // cas of _id
      if (fieldName === '_id') {
        typeSchema = 'string';
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

// add require at global level
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  global.require = require;
}

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

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
    }

    if (isEvent) {
      setTimeout(
        action.action.bind.apply(
          action.action,
          [component].concat(injectedParams)
        ),
        0
      );
    } else {
      result = action.action.apply(component, injectedParams);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3NkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2prQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcjFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBjb250YWlucyBTeXN0ZW0gUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qIFB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbi8qKlxuICogU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAqIEBwcm9wZXJ0eSB7X1N5c3RlbX0gc3lzdGVtXG4gKi9cbmV4cG9ydHMuc3lzdGVtID0ge1xuICBuYW1lOiAnc3lzdGVtLXJ1bnRpbWUnLFxuICBtYXN0ZXI6IGZhbHNlLFxuICB2ZXJzaW9uOiAnMi4yLjAnLFxuICBkZXNjcmlwdGlvbjogJ1N5c3RlbSBSdW50aW1lJyxcbiAgc2NoZW1hczoge1xuICAgICcxYWMwNzE4NTY0MWZhOWYnOiB7XG4gICAgICBfbmFtZTogJ19CZWhhdmlvcicsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGNvcmU6ICdwcm9wZXJ0eScsXG4gICAgICBjb21wb25lbnQ6ICdwcm9wZXJ0eScsXG4gICAgICBhY3Rpb246ICdwcm9wZXJ0eScsXG4gICAgICBzdGF0ZTogJ3Byb3BlcnR5JyxcbiAgICAgIHVzZUNvcmVBUEk6ICdwcm9wZXJ0eScsXG4gICAgICBfaWQ6ICcxYWMwNzE4NTY0MWZhOWYnXG4gICAgfSxcbiAgICAnMTA0YWQxZjQ4NTE4Mzc2Jzoge1xuICAgICAgX2lkOiAnMTA0YWQxZjQ4NTE4Mzc2JyxcbiAgICAgIF9uYW1lOiAnX0NoYW5uZWwnLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBzZW5kOiAnZXZlbnQnLFxuICAgICAgJHN5c3RlbUluc3RhbGxlZDogJ2V2ZW50JyxcbiAgICAgICRzeXN0ZW1SZXNvbHZlZDogJ2V2ZW50JyxcbiAgICAgICRzeXN0ZW1TdGFydGVkOiAnZXZlbnQnLFxuICAgICAgJHN5c3RlbVN0b3BwZWQ6ICdldmVudCcsXG4gICAgICAkc3lzdGVtVW5pbnN0YWxsZWQ6ICdldmVudCdcbiAgICB9LFxuICAgICcxYzAwYjEzYTFiMWJjOTInOiB7XG4gICAgICBfbmFtZTogJ19DbGFzc0luZm8nLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBtb2RlbDogJ3Byb3BlcnR5JyxcbiAgICAgIHNjaGVtYTogJ3Byb3BlcnR5JyxcbiAgICAgIG1ldGhvZDogJ21ldGhvZCcsXG4gICAgICBtZXRob2RzOiAnbWV0aG9kJyxcbiAgICAgIHByb3BlcnR5OiAnbWV0aG9kJyxcbiAgICAgIHByb3BlcnRpZXM6ICdtZXRob2QnLFxuICAgICAgbGluazogJ21ldGhvZCcsXG4gICAgICBsaW5rczogJ21ldGhvZCcsXG4gICAgICBjb2xsZWN0aW9uczogJ21ldGhvZCcsXG4gICAgICBjb2xsZWN0aW9uOiAnbWV0aG9kJyxcbiAgICAgIGV2ZW50OiAnbWV0aG9kJyxcbiAgICAgIGV2ZW50czogJ21ldGhvZCcsXG4gICAgICBfaWQ6ICcxYzAwYjEzYTFiMWJjOTInXG4gICAgfSxcbiAgICAnMTExZGYxMWUyYjE5ZmRlJzoge1xuICAgICAgX2lkOiAnMTExZGYxMWUyYjE5ZmRlJyxcbiAgICAgIF9uYW1lOiAnX0NvbXBvbmVudCcsXG4gICAgICBfaW5oZXJpdDogW10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGNsYXNzSW5mbzogJ3Byb3BlcnR5JyxcbiAgICAgIG9uOiAnbWV0aG9kJyxcbiAgICAgIG9mZjogJ21ldGhvZCcsXG4gICAgICByZXF1aXJlOiAnbWV0aG9kJyxcbiAgICAgIGRlc3Ryb3k6ICdtZXRob2QnLFxuICAgICAgaW5pdDogJ21ldGhvZCcsXG4gICAgICBlcnJvcjogJ2V2ZW50J1xuICAgIH0sXG4gICAgJzE3MjM1MTZhMzAxMzJhYyc6IHtcbiAgICAgIF9uYW1lOiAnX0RhdGFiYXNlJyxcbiAgICAgIF9pbmhlcml0OiBbJ19Db21wb25lbnQnXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgY29sbGVjdGlvbnM6ICdtZXRob2QnLFxuICAgICAgaW5zZXJ0OiAnZXZlbnQnLFxuICAgICAgdXBkYXRlOiAnZXZlbnQnLFxuICAgICAgcmVtb3ZlOiAnZXZlbnQnLFxuICAgICAgX2lkOiAnMTcyMzUxNmEzMDEzMmFjJ1xuICAgIH0sXG4gICAgZjFhMTBkMTA2N2QxYjIzYToge1xuICAgICAgX2lkOiAnZjFhMTBkMTA2N2QxYjIzYScsXG4gICAgICBfbmFtZTogJ19Mb2cnLFxuICAgICAgX2luaGVyaXQ6IFsnX0NvbXBvbmVudCddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBhY3Rpb246ICdwcm9wZXJ0eScsXG4gICAgICBjb2xsZWN0aW9uOiAncHJvcGVydHknLFxuICAgICAgaWQ6ICdwcm9wZXJ0eScsXG4gICAgICBmaWVsZDogJ3Byb3BlcnR5JyxcbiAgICAgIHZhbHVlOiAncHJvcGVydHknLFxuICAgICAgb3JkZXI6ICdwcm9wZXJ0eSdcbiAgICB9LFxuICAgICcxMjY4ZjFkZGRkMWZlYTcnOiB7XG4gICAgICBfbmFtZTogJ19Mb2dnZXInLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBsZXZlbDogJ3Byb3BlcnR5JyxcbiAgICAgIGRlYnVnOiAnbWV0aG9kJyxcbiAgICAgIGluZm86ICdtZXRob2QnLFxuICAgICAgd2FybjogJ21ldGhvZCcsXG4gICAgICBlcnJvcjogJ21ldGhvZCcsXG4gICAgICBfaWQ6ICcxMjY4ZjFkZGRkMWZlYTcnXG4gICAgfSxcbiAgICAnMTRjYWExYzQ2NDE0ZWUxJzoge1xuICAgICAgX25hbWU6ICdfTWVzc2FnZScsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGV2ZW50OiAncHJvcGVydHknLFxuICAgICAgZnJvbTogJ3Byb3BlcnR5JyxcbiAgICAgIGRhdGE6ICdwcm9wZXJ0eScsXG4gICAgICBfaWQ6ICcxNGNhYTFjNDY0MTRlZTEnXG4gICAgfSxcbiAgICAnMTkzZjExNjZlYjE2NjA5Jzoge1xuICAgICAgX25hbWU6ICdfTWV0YW1vZGVsJyxcbiAgICAgIF9pbmhlcml0OiBbJ19Db21wb25lbnQnXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgc2NoZW1hOiAnbWV0aG9kJyxcbiAgICAgIG1vZGVsOiAnbWV0aG9kJyxcbiAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgY3JlYXRlOiAnbWV0aG9kJyxcbiAgICAgIF9pZDogJzE5M2YxMTY2ZWIxNjYwOSdcbiAgICB9LFxuICAgICcxNTc5MzFmN2EzMWI2MWQnOiB7XG4gICAgICBfaWQ6ICcxNTc5MzFmN2EzMWI2MWQnLFxuICAgICAgX25hbWU6ICdfT1NHaScsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGluc3RhbGw6ICdtZXRob2QnLFxuICAgICAgdW5pbnN0YWxsOiAnbWV0aG9kJyxcbiAgICAgIHN0YXJ0OiAnbWV0aG9kJyxcbiAgICAgIHN0b3A6ICdtZXRob2QnLFxuICAgICAgc3RhdHVzOiAnbWV0aG9kJyxcbiAgICAgIGJ1bmRsZTogJ21ldGhvZCdcbiAgICB9LFxuICAgICcxMmUyMTFkNGNkMTIwYTYnOiB7XG4gICAgICBfaWQ6ICcxMmUyMTFkNGNkMTIwYTYnLFxuICAgICAgX25hbWU6ICdfUnVudGltZScsXG4gICAgICBfaW5oZXJpdDogWydfT1NHaSddLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICB2ZXJzaW9uOiAncHJvcGVydHknLFxuICAgICAgc3lzdGVtOiAnbWV0aG9kJyxcbiAgICAgIG1lc3NhZ2U6ICdtZXRob2QnLFxuICAgICAgcmVhZHk6ICdldmVudCdcbiAgICB9LFxuICAgICcxNTg3MTFkNmYyMTVlNGInOiB7XG4gICAgICBfbmFtZTogJ19TdGF0ZScsXG4gICAgICBfaW5oZXJpdDogW10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIF9jbGFzczogZmFsc2UsXG4gICAgICBzdGF0ZTogJ3Byb3BlcnR5JyxcbiAgICAgIHZhbHVlOiAncHJvcGVydHknLFxuICAgICAgX2lkOiAnMTU4NzExZDZmMjE1ZTRiJ1xuICAgIH0sXG4gICAgJzFjYjc2MWZhNDUxMGRjYSc6IHtcbiAgICAgIF9pZDogJzFjYjc2MWZhNDUxMGRjYScsXG4gICAgICBfbmFtZTogJ19TeXN0ZW0nLFxuICAgICAgX2luaGVyaXQ6IFsnX1N5c3RlbU9TR2knXSxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgbmFtZTogJ3Byb3BlcnR5JyxcbiAgICAgIG1hc3RlcjogJ3Byb3BlcnR5JyxcbiAgICAgIHZlcnNpb246ICdwcm9wZXJ0eScsXG4gICAgICBkZXNjcmlwdGlvbjogJ3Byb3BlcnR5JyxcbiAgICAgIHNjaGVtYXM6ICdwcm9wZXJ0eScsXG4gICAgICBtb2RlbHM6ICdwcm9wZXJ0eScsXG4gICAgICBiZWhhdmlvcnM6ICdwcm9wZXJ0eScsXG4gICAgICB0eXBlczogJ3Byb3BlcnR5JyxcbiAgICAgIGNvbXBvbmVudHM6ICdwcm9wZXJ0eSdcbiAgICB9LFxuICAgICcxNDVmZTEwYzc1MTQyOTgnOiB7XG4gICAgICBfaWQ6ICcxNDVmZTEwYzc1MTQyOTgnLFxuICAgICAgX25hbWU6ICdfU3lzdGVtT1NHaScsXG4gICAgICBfaW5oZXJpdDogWydfQ29tcG9uZW50J10sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHN0YXRlOiAncHJvcGVydHknLFxuICAgICAgbG9jYXRpb246ICdwcm9wZXJ0eScsXG4gICAgICBzdGFydDogJ21ldGhvZCcsXG4gICAgICBzdG9wOiAnbWV0aG9kJ1xuICAgIH1cbiAgfSxcbiAgbW9kZWxzOiB7XG4gICAgJzE2Njk3MWZkOWQxMDdmZCc6IHtcbiAgICAgIF9uYW1lOiAnX0JlaGF2aW9yJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgY29yZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB1c2VDb3JlQVBJOiB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIF9pZDogJzE2Njk3MWZkOWQxMDdmZCdcbiAgICB9LFxuICAgICcxMzVjNzEwNzg4MTBhZjInOiB7XG4gICAgICBfaWQ6ICcxMzVjNzEwNzg4MTBhZjInLFxuICAgICAgX25hbWU6ICdfQ2hhbm5lbCcsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHNlbmQ6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxuICAgICAgICAgICAgdHlwZTogJ21lc3NhZ2UnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJHN5c3RlbUluc3RhbGxlZDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICRzeXN0ZW1SZXNvbHZlZDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICRzeXN0ZW1Vbmluc3RhbGxlZDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICRzeXN0ZW1TdGFydGVkOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgJHN5c3RlbVN0b3BwZWQ6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgICcxNTgzMjFkY2VkMTAxNGEnOiB7XG4gICAgICBfbmFtZTogJ19DbGFzc0luZm8nLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBtb2RlbDoge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0eToge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmVzdWx0OiAnYXJyYXknXG4gICAgICB9LFxuICAgICAgbGluazoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIGxpbmtzOiB7XG4gICAgICAgIHJlc3VsdDogJ2FycmF5J1xuICAgICAgfSxcbiAgICAgIG1ldGhvZDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVzdWx0OiAnYXJyYXknXG4gICAgICB9LFxuICAgICAgY29sbGVjdGlvbjoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIGNvbGxlY3Rpb25zOiB7XG4gICAgICAgIHJlc3VsdDogJ2FycmF5J1xuICAgICAgfSxcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZXN1bHQ6ICdvYmplY3QnXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIHJlc3VsdDogJ2FycmF5J1xuICAgICAgfSxcbiAgICAgIF9pZDogJzE1ODMyMWRjZWQxMDE0YScsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICB9XG4gICAgfSxcbiAgICAnMTIzNzUxY2I1OTFkZTI2Jzoge1xuICAgICAgX2lkOiAnMTIzNzUxY2I1OTFkZTI2JyxcbiAgICAgIF9uYW1lOiAnX0NvbXBvbmVudCcsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3VzZUNvcmVBUEknLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaXNDb3JlJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIG9mZjoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnc3RhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnYmVoYXZpb3JJZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICByZXF1aXJlOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IHtcbiAgICAgICAgcGFyYW1zOiBbXVxuICAgICAgfSxcbiAgICAgIGNsYXNzSW5mbzoge1xuICAgICAgICB0eXBlOiAnX0NsYXNzSW5mbycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBpbml0OiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb25mJyxcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2RhdGEnLFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yUGFyYW0nXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICAnMThhNTExNjlkNzExMmQ0Jzoge1xuICAgICAgX25hbWU6ICdfRGF0YWJhc2UnLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBjb2xsZWN0aW9uczoge1xuICAgICAgICByZXN1bHQ6ICdvYmplY3QnXG4gICAgICB9LFxuICAgICAgaW5zZXJ0OiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdldmVudCcsXG4gICAgICAgICAgICB0eXBlOiAnZGJJbnNlcnRFdmVudCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2V2ZW50JyxcbiAgICAgICAgICAgIHR5cGU6ICdkYlVwZGF0ZUV2ZW50J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHJlbW92ZToge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZXZlbnQnLFxuICAgICAgICAgICAgdHlwZTogJ2RiUmVtb3ZlRXZlbnQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgX2lkOiAnMThhNTExNjlkNzExMmQ0J1xuICAgIH0sXG4gICAgbzFlMWUwMWU2YjQxY2VjMzoge1xuICAgICAgX2lkOiAnbzFlMWUwMWU2YjQxY2VjMycsXG4gICAgICBfbmFtZTogJ19Mb2cnLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdkYkFjdGlvbicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogJ2luc2VydCdcbiAgICAgIH0sXG4gICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICBmaWVsZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgb3JkZXI6IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogMFxuICAgICAgfSxcbiAgICAgIF9jb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTZiOWQxYWMyMjE2ZmZlJzoge1xuICAgICAgX2lkOiAnMTZiOWQxYWMyMjE2ZmZlJyxcbiAgICAgIF9uYW1lOiAnX0xvZ2dlcicsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIGxldmVsOiB7XG4gICAgICAgIHR5cGU6ICdsb2cnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICd3YXJuJ1xuICAgICAgfSxcbiAgICAgIGRlYnVnOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHR5cGU6ICdhbnknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaW5mbzoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICAgICAgICB0eXBlOiAnYW55J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHdhcm46IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxuICAgICAgICAgICAgdHlwZTogJ2FueSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBlcnJvcjoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICAgICAgICB0eXBlOiAnYW55J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgJzFkOWI2MTM5NDExYWE5MSc6IHtcbiAgICAgIF9uYW1lOiAnX01lc3NhZ2UnLFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgZnJvbToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBfaWQ6ICcxZDliNjEzOTQxMWFhOTEnXG4gICAgfSxcbiAgICAnMTYyOGMxM2MyMjE1MmU2Jzoge1xuICAgICAgX25hbWU6ICdfTWV0YW1vZGVsJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzY2hlbWEnLFxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlc3VsdDogJ2FueSdcbiAgICAgIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbW9kZWwnLFxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlc3VsdDogJ2FueSdcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZXN1bHQ6ICdhbnknXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiB7XG4gICAgICAgIHBhcmFtczogW11cbiAgICAgIH0sXG4gICAgICBfaWQ6ICcxNjI4YzEzYzIyMTUyZTYnXG4gICAgfSxcbiAgICAnMTAwYjkxZWQyMjExYjE1Jzoge1xuICAgICAgX2lkOiAnMTAwYjkxZWQyMjExYjE1JyxcbiAgICAgIF9uYW1lOiAnX09TR2knLFxuICAgICAgaW5zdGFsbDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndXJsJyxcbiAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdhc3luYycsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnc3RyaW5nJ1xuICAgICAgfSxcbiAgICAgIHVuaW5zdGFsbDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiB7XG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgc3RvcDoge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHN0YXR1czoge1xuICAgICAgICByZXN1bHQ6ICdvYmplY3QnXG4gICAgICB9LFxuICAgICAgX2NvcmU6IHRydWUsXG4gICAgICBidW5kbGU6IHtcbiAgICAgICAgcmVzdWx0OiAnc3RyaW5nJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJzE0YzdjMTA1YjMxYTE2MCc6IHtcbiAgICAgIF9pZDogJzE0YzdjMTA1YjMxYTE2MCcsXG4gICAgICBfbmFtZTogJ19SdW50aW1lJyxcbiAgICAgIF9jb3JlOiB0cnVlLFxuICAgICAgdmVyc2lvbjoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJzAuMC4wJ1xuICAgICAgfSxcbiAgICAgIHN5c3RlbToge1xuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzdWx0OiAnb2JqZWN0J1xuICAgICAgfSxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21zZycsXG4gICAgICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICByZWFkeToge31cbiAgICB9LFxuICAgICcxNzdhYzEzNjg5MTYyOWYnOiB7XG4gICAgICBfbmFtZTogJ19TdGF0ZScsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9LFxuICAgICAgX2lkOiAnMTc3YWMxMzY4OTE2MjlmJ1xuICAgIH0sXG4gICAgJzE3MDUyMWI4ODYxNDM4Nyc6IHtcbiAgICAgIF9uYW1lOiAnX1N5c3RlbScsXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIG1hc3Rlcjoge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB2ZXJzaW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcwLjAuMSdcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIHNjaGVtYXM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBtb2RlbHM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBiZWhhdmlvcnM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICB0eXBlczoge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBfaWQ6ICcxNzA1MjFiODg2MTQzODcnXG4gICAgfSxcbiAgICAnMWIyODExYjA5MjE0M2Y1Jzoge1xuICAgICAgX2lkOiAnMWIyODExYjA5MjE0M2Y1JyxcbiAgICAgIF9uYW1lOiAnX1N5c3RlbU9TR2knLFxuICAgICAgc3RhcnQ6IHt9LFxuICAgICAgc3RvcDoge30sXG4gICAgICBfY29yZTogdHJ1ZSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBiZWhhdmlvcnM6IHtcbiAgICAnMTJlNDkxODU5YzEzOTE4Jzoge1xuICAgICAgX2lkOiAnMTJlNDkxODU5YzEzOTE4JyxcbiAgICAgIGNvbXBvbmVudDogJ19DaGFubmVsJyxcbiAgICAgIHN0YXRlOiAnJHN5c3RlbVN0YXJ0ZWQnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uICRzeXN0ZW1TdGFydGVkKGlkKSB7IFxcbiAgdmFyIHN5c3RlbXMgPSBudWxsO1xcbiAgICBcXG4gIGlmIChpZCAhPT0gJ2U4OWM2MTdiNmIxNWQyNCcpIHtcXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgICAgIFxcbiAgICAgIGlmICgkc3RhdGUuZ2V0KCdydW50aW1lJykgJiYgJHN0YXRlLmdldCgncnVudGltZScpLnN0YXRlID09PSAncmVhZHknKSB7ICAgIFxcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggKyAxID09PSAkZGIuX1N5c3RlbS5jb3VudCgpKSB7XFxuICAgICAgICAgICRjb21wb25lbnQuZ2V0KCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFlOTAyMWJkNGUxYmM2ZSc6IHtcbiAgICAgIF9pZDogJzFlOTAyMWJkNGUxYmM2ZScsXG4gICAgICBjb21wb25lbnQ6ICdfQ2hhbm5lbCcsXG4gICAgICBzdGF0ZTogJyRzeXN0ZW1JbnN0YWxsZWQnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uICRzeXN0ZW1JbnN0YWxsZWQoaWQpIHtcXG4gIHZhciBzeXN0ZW1zID0gbnVsbCxcXG4gICAgZGVwZW5kZW5jaWVzID0gW10sXFxuICAgIG1hc3RlciA9IFtdLFxcbiAgICBjYW5TdGFydCA9IHRydWU7XFxuXFxuICBpZiAoaWQgIT09ICdlODljNjE3YjZiMTVkMjQnKSB7XFxuICAgIC8vIGlmIGFsbCBzeXN0ZW1zIGFyZSBpbnN0YWxsZWRcXG4gICAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe30pO1xcblxcbiAgICBzeXN0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHN5c3RlbSkge1xcbiAgICAgIHZhciBzeXMgPSB0aGlzLnJlcXVpcmUoc3lzdGVtLl9pZCk7XFxuICAgICAgaWYgKHN5cyAmJiBzeXMuc3RhdGUgJiYgc3lzLnN0YXRlKCkgPT09ICdub25lJykge1xcbiAgICAgICAgY2FuU3RhcnQgPSBmYWxzZTtcXG4gICAgICB9XFxuICAgIH0uYmluZCh0aGlzKSk7XFxuXFxuICAgIC8vIHN0YXJ0IGFsbCB0aGUgc3lzdGVtc1xcbiAgICBpZiAoY2FuU3RhcnQpIHtcXG4gICAgICBkZXBlbmRlbmNpZXMgPSAkZGIuX1N5c3RlbS5maW5kKHtcXG4gICAgICAgICdtYXN0ZXInOiBmYWxzZVxcbiAgICAgIH0pO1xcblxcbiAgICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcXG4gICAgICAgIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoZGVwLl9pZCk7XFxuICAgICAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICAgICAgICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcpIHtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgICAgICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChkZXAuX2lkKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcblxcbiAgICAgIG1hc3RlciA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgICB9KTtcXG5cXG4gICAgICBtYXN0ZXIuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XFxuICAgICAgICB2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGRlcC5faWQpO1xcbiAgICAgICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHN5c3RlbSAmJiBzeXN0ZW0uc3RhdGUgJiYgc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcpIHtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICAgICAgICBzeXN0ZW0uc3RhcnQoKTtcXG4gICAgICAgICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChkZXAuX2lkKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcbiAgICB9XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxNTUxNDFlNDAzMTJjZDgnOiB7XG4gICAgICBfaWQ6ICcxNTUxNDFlNDAzMTJjZDgnLFxuICAgICAgY29tcG9uZW50OiAnX0NsYXNzSW5mbycsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICB9XFxuXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxZjY5NDFhMGMwMTJjMWYnOiB7XG4gICAgICBfaWQ6ICcxZjY5NDFhMGMwMTJjMWYnLFxuICAgICAgY29tcG9uZW50OiAnX0NsYXNzSW5mbycsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb25zJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBjb2xsZWN0aW9ucyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnY29sbGVjdGlvbicpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWVmNzExYjQxNzFjODQ5Jzoge1xuICAgICAgX2lkOiAnMWVmNzExYjQxNzFjODQ5JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdldmVudCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gZXZlbnQobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcblxcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdldmVudCcpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWJhZTUxYjZlZDFkMjVjJzoge1xuICAgICAgX2lkOiAnMWJhZTUxYjZlZDFkMjVjJyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdldmVudHMnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGV2ZW50cyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnZXZlbnQnKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzE5YWMyMTI1MjIxNTI4Yic6IHtcbiAgICAgIF9pZDogJzE5YWMyMTI1MjIxNTI4YicsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbGluaycsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gbGluayhuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuXFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ2xpbmsnKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzE3ZWQyMWRmYzAxYjhlOCc6IHtcbiAgICAgIF9pZDogJzE3ZWQyMWRmYzAxYjhlOCcsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbGlua3MnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIGxpbmtzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdsaW5rJykge1xcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICB9XFxuICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzExY2UzMThhNTYxYWM2MSc6IHtcbiAgICAgIF9pZDogJzExY2UzMThhNTYxYWM2MScsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAnbWV0aG9kJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBtZXRob2QobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdtZXRob2QnKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG4gIFxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTJmZjIxOTBhMDE4MDQ2Jzoge1xuICAgICAgX2lkOiAnMTJmZjIxOTBhMDE4MDQ2JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdtZXRob2RzJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBtZXRob2RzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdtZXRob2QnKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzEwMjhkMTY4MWUxZmQ1OCc6IHtcbiAgICAgIF9pZDogJzEwMjhkMTY4MWUxZmQ1OCcsXG4gICAgICBjb21wb25lbnQ6ICdfQ2xhc3NJbmZvJyxcbiAgICAgIHN0YXRlOiAncHJvcGVydGllcycsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gcHJvcGVydGllcyhuYW1lKSB7XFxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuXFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgaXRlbSA9IGtleXNbaV07XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAncHJvcGVydHknKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH0gcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMThlZWIxMGM1MzE5MzY4Jzoge1xuICAgICAgX2lkOiAnMThlZWIxMGM1MzE5MzY4JyxcbiAgICAgIGNvbXBvbmVudDogJ19DbGFzc0luZm8nLFxuICAgICAgc3RhdGU6ICdwcm9wZXJ0eScsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gcHJvcGVydHkobmFtZSkge1xcbiAgdmFyIHJlc3VsdCA9IHt9O1xcblxcbiAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdwcm9wZXJ0eScpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWJhNzIxMjAxMTE0YjZiJzoge1xuICAgICAgX2lkOiAnMWJhNzIxMjAxMTE0YjZiJyxcbiAgICAgIGNvbXBvbmVudDogJ19Db21wb25lbnQnLFxuICAgICAgc3RhdGU6ICdkZXN0cm95JyxcbiAgICAgIGFjdGlvbjogJ2Z1bmN0aW9uIGRlc3Ryb3koKSB7XFxuICAkY29tcG9uZW50LmRlc3Ryb3kodGhpcy5pZCgpKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICAnMTU0ODYxODZmNDFhNDhjJzoge1xuICAgICAgX2lkOiAnMTU0ODYxODZmNDFhNDhjJyxcbiAgICAgIGNvbXBvbmVudDogJ19Db21wb25lbnQnLFxuICAgICAgc3RhdGU6ICdvZmYnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICAnZnVuY3Rpb24gb2ZmKHN0YXRlLCBiZWhhdmlvcklkKSB7XFxuICB2YXIgYXJncyA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGggLSA3OyBpKyspIHtcXG4gICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XFxuICB9XFxuXFxuICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcXG4gICAgXCJjb21wb25lbnRcIjogdGhpcyxcXG4gICAgXCJtZXRob2ROYW1lXCI6IFwib2ZmXCIsXFxuICAgIFwiYXJnc1wiOiBhcmdzXFxuICB9KSkge1xcblxcbiAgICBpZiAoc3RhdGUgfHwgYmVoYXZpb3JJZCkge1xcbiAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSkge1xcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XFxuICAgICAgICAgIFwiYmVoYXZpb3JJZFwiOiBiZWhhdmlvcklkLFxcbiAgICAgICAgICBcImNvbXBvbmVudElkXCI6IHRoaXMuaWQoKSxcXG4gICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxcbiAgICAgICAgfSk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMucmVxdWlyZShcXCdsb2dnZXJcXCcpLndhcm4oXCJpbnZva2UgXFxcXFxcJ29mZlxcXFxcXCcgbWV0aG9kIG9mIGNvbXBvbmVudCBcXCdcIiArIHRoaXMuaWQoKSArIFwiXFwnIHdpdGggYW4gaW52YWxpZCBzdGF0ZSBcXCdcIiArIHN0YXRlICsgXCJcXCdcIik7XFxuICAgICAgfVxcbiAgICB9IGVsc2Uge1xcbiAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgXCJjb21wb25lbnRJZFwiOiB0aGlzLmlkKClcXG4gICAgICB9KTtcXG4gICAgfVxcbiAgfVxcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxZGEwYTE3ODc4MTA0YzMnOiB7XG4gICAgICBfaWQ6ICcxZGEwYTE3ODc4MTA0YzMnLFxuICAgICAgY29tcG9uZW50OiAnX0NvbXBvbmVudCcsXG4gICAgICBzdGF0ZTogJ3JlcXVpcmUnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gcmVxdWlyZShpZCkge1xcbiAgcmV0dXJuICRjb21wb25lbnQuZ2V0KGlkKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICAnMWE1MTExZDE3YTE4MDBjJzoge1xuICAgICAgX2lkOiAnMWE1MTExZDE3YTE4MDBjJyxcbiAgICAgIGNvbXBvbmVudDogJ19EYXRhYmFzZScsXG4gICAgICBzdGF0ZTogJ2NvbGxlY3Rpb25zJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBjb2xsZWN0aW9ucygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJztcXG5cXG4gIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gJGRiLnN0b3JlKSB7XFxuICAgIGlmICgkZGIuc3RvcmUuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpICYmIGNvbGxlY3Rpb25OYW1lLmluZGV4T2YoJ18nKSAhPT0gMCkge1xcbiAgICAgIHJlc3VsdFtjb2xsZWN0aW9uTmFtZV0gPSAkZGJbY29sbGVjdGlvbk5hbWVdO1xcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICAnMWQ5OTMxMDhmYTE4ZWYyJzoge1xuICAgICAgX2lkOiAnMWQ5OTMxMDhmYTE4ZWYyJyxcbiAgICAgIGNvbXBvbmVudDogJ19Mb2dnZXInLFxuICAgICAgc3RhdGU6ICdkZWJ1ZycsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gZGVidWcobWVzc2FnZSkge1xcbiAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICBjb25zb2xlLmxvZygncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgfVxcbn1cIixcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxYTM3YTE4OGUxMWZlNzMnOiB7XG4gICAgICBfaWQ6ICcxYTM3YTE4OGUxMWZlNzMnLFxuICAgICAgY29tcG9uZW50OiAnX0xvZ2dlcicsXG4gICAgICBzdGF0ZTogJ2Vycm9yJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XFxuICBjb25zb2xlLmVycm9yKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxufVwiLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFlZGQyMWUxMmExNjUzNCc6IHtcbiAgICAgIF9pZDogJzFlZGQyMWUxMmExNjUzNCcsXG4gICAgICBjb21wb25lbnQ6ICdfTG9nZ2VyJyxcbiAgICAgIHN0YXRlOiAnaW5mbycsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgfVxcbn1cIixcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxNDFmMjE0M2QzMTIyYTQnOiB7XG4gICAgICBfaWQ6ICcxNDFmMjE0M2QzMTIyYTQnLFxuICAgICAgY29tcG9uZW50OiAnX0xvZ2dlcicsXG4gICAgICBzdGF0ZTogJ2xldmVsJyxcbiAgICAgIGFjdGlvbjogJ2Z1bmN0aW9uIGxldmVsKHZhbCkge1xcbiAgJGxvZy5sZXZlbCh2YWwpO1xcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxOTI0MDFiYWIyMTMwNGUnOiB7XG4gICAgICBfaWQ6ICcxOTI0MDFiYWIyMTMwNGUnLFxuICAgICAgY29tcG9uZW50OiAnX0xvZ2dlcicsXG4gICAgICBzdGF0ZTogJ3dhcm4nLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xcbiAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2luZm8nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ3dhcm4nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gIH1cXG59XCIsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTFmYzcxNWUyZjFhMzFlJzoge1xuICAgICAgX2lkOiAnMTFmYzcxNWUyZjFhMzFlJyxcbiAgICAgIGNvbXBvbmVudDogJ19NZXRhbW9kZWwnLFxuICAgICAgc3RhdGU6ICdjcmVhdGUnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gY3JlYXRlKCkge1xcbiAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICAnMTIzMmYxZjEwNzE0MmNmJzoge1xuICAgICAgX2lkOiAnMTIzMmYxZjEwNzE0MmNmJyxcbiAgICAgIGNvbXBvbmVudDogJ19NZXRhbW9kZWwnLFxuICAgICAgc3RhdGU6ICdtb2RlbCcsXG4gICAgICBhY3Rpb246ICdmdW5jdGlvbiBtb2RlbChtb2RlbCkge1xcbiAgcmV0dXJuICRtZXRhbW9kZWwubW9kZWwobW9kZWwpO1xcbn0nLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIHVzZUNvcmVBUEk6IHRydWVcbiAgICB9LFxuICAgICcxMzY1NDEyZjY5MTUzZDInOiB7XG4gICAgICBfaWQ6ICcxMzY1NDEyZjY5MTUzZDInLFxuICAgICAgY29tcG9uZW50OiAnX01ldGFtb2RlbCcsXG4gICAgICBzdGF0ZTogJ3NjaGVtYScsXG4gICAgICBhY3Rpb246XG4gICAgICAgICdmdW5jdGlvbiBzY2hlbWEoc2NoZW1hKSB7XFxuICByZXR1cm4gJG1ldGFtb2RlbC5zY2hlbWEoc2NoZW1hKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICAnMTk0ZGIxNDdmZTE2MWEyJzoge1xuICAgICAgX2lkOiAnMTk0ZGIxNDdmZTE2MWEyJyxcbiAgICAgIGNvbXBvbmVudDogJ19NZXRhbW9kZWwnLFxuICAgICAgc3RhdGU6ICd0eXBlJyxcbiAgICAgIGFjdGlvbjogJ2Z1bmN0aW9uIHR5cGUodHlwZSkge1xcbiAgcmV0dXJuICRtZXRhbW9kZWwudHlwZSh0eXBlKTtcXG59JyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlXG4gICAgfSxcbiAgICAnMWVmOTUxZjE0MTFiODk1Jzoge1xuICAgICAgX2lkOiAnMWVmOTUxZjE0MTFiODk1JyxcbiAgICAgIGNvbXBvbmVudDogJ19PU0dpJyxcbiAgICAgIHN0YXRlOiAnaW5zdGFsbCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gaW5zdGFsbCh1cmwsIGFzeW5jKSB7XFxuICB2YXIgaW1wb3J0ZWRTeXN0ZW0gPSBudWxsLFxcbiAgICBzeXN0ZW0gPSB7fSxcXG4gICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgY2FsbGJhY2tMb2FkID0gbnVsbCxcXG4gICAgeGhyID0gbnVsbCxcXG4gICAgcmVzdWx0ID0gJycsXFxuICAgIGNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xcblxcbiAgaWYgKHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XFxuICAgIGltcG9ydGVkU3lzdGVtID0gdXJsO1xcbiAgfSBlbHNlIHtcXG4gICAgaWYgKHVybC5pbmRleE9mKCd7JykgPT09IDApIHtcXG4gICAgICBpbXBvcnRlZFN5c3RlbSA9IEpTT04ucGFyc2UodXJsKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgaWYgKGltcG9ydGVkU3lzdGVtKSB7XFxuICAgIHN5c3RlbUlkID0gJGRiLmltcG9ydFN5c3RlbShpbXBvcnRlZFN5c3RlbSk7XFxuICAgIGlmIChzeXN0ZW1JZCkge1xcbiAgICAgIHN5c3RlbSA9IHRoaXMucmVxdWlyZShzeXN0ZW1JZCk7XFxuXFxuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgICBzeXN0ZW0ubG9jYXRpb24odXJsKTtcXG4gICAgICB9XFxuICAgICAgc3lzdGVtLnN0YXRlKCdpbnN0YWxsZWQnKTtcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3lzdGVtSWQpO1xcbiAgICAgIHN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXN0ZW1JZCk7XFxuXFxuICAgICAgcmVzdWx0ID0gc3lzdGVtSWQ7XFxuICAgIH1cXG4gIH0gZWxzZSB7XFxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xcbiAgICAgIGlmICh1cmwuaW5kZXhPZignLmpzb24nKSAhPT0gLTEpIHtcXG4gICAgICAgIHN5c3RlbSA9IGdsb2JhbC5yZXF1aXJlKGdsb2JhbC5wcm9jZXNzLmVudi5QV0QgKyAnLycgKyB1cmwpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBzeXN0ZW0gPSBnbG9iYWwucmVxdWlyZSh1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW1JZCA9ICRkYi5pbXBvcnRTeXN0ZW0oc3lzdGVtKTtcXG4gICAgICBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoc3lzdGVtSWQpO1xcblxcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xcbiAgICAgICAgc3lzdGVtLmxvY2F0aW9uKHVybCk7XFxuICAgICAgfVxcbiAgICAgIHN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5c3RlbUlkKTtcXG4gICAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3lzdGVtSWQpO1xcblxcbiAgICAgIHJlc3VsdCA9IHN5c3RlbUlkO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xcbiAgICAgIGNhbGxiYWNrTG9hZCA9IGZ1bmN0aW9uIGNhbGxiYWNrTG9hZChzeXN0ZW0sIHVybCkge1xcbiAgICAgICAgdmFyIHN5c0lkID0gJGRiLmltcG9ydFN5c3RlbShzeXN0ZW0pLFxcbiAgICAgICAgICBzeXMgPSAkY29tcG9uZW50LmdldChzeXNJZCksXFxuICAgICAgICAgIGNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgICAgIHN5cy5sb2NhdGlvbih1cmwpO1xcbiAgICAgICAgfVxcbiAgICAgICAgc3lzLnN0YXRlKCdpbnN0YWxsZWQnKTtcXG4gICAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXNJZCk7XFxuICAgICAgICBzeXMuc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXNJZCk7XFxuXFxuICAgICAgICByZXN1bHQgPSBzeXNJZDtcXG4gICAgICB9O1xcblxcbiAgICAgIGlmIChhc3luYykge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDApIHtcXG4gICAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAwKSB7XFxuICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgIHVzZUNvcmVBUEk6IHRydWUsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMTRjMTUxN2I3MTFjYjc4Jzoge1xuICAgICAgX2lkOiAnMTRjMTUxN2I3MTFjYjc4JyxcbiAgICAgIGNvbXBvbmVudDogJ19PU0dpJyxcbiAgICAgIHN0YXRlOiAndW5pbnN0YWxsJyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiB1bmluc3RhbGwoaWQpIHtcXG4gIHZhciBzZWFyY2ggPSB7fSxcXG4gICAgc3lzdGVtID0gbnVsbCxcXG4gICAgYmVoYXZpb3JJZCA9ICcnLFxcbiAgICBjb2xsZWN0aW9uID0gJycsXFxuICAgIGNvbXBvbmVudElkID0gJycsXFxuICAgIGxlbmd0aCA9IDAsXFxuICAgIGkgPSAwLFxcbiAgICBjb3JlQ29tcG9uZW50cyA9IFsnYWRtaW4nLCAnY2hhbm5lbCcsICdkYicsICdsb2dnZXInLCAnbWV0YW1vZGVsJywgJ3J1bnRpbWUnXTtcXG5cXG4gIHNlYXJjaCA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAnX2lkJzogaWRcXG4gIH0pO1xcblxcbiAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgc3lzdGVtID0gc2VhcmNoWzBdO1xcbiAgICAvLyByZW1vdmUgYmVoYXZpb3JzXFxuICAgIGlmIChzeXN0ZW0uYmVoYXZpb3JzKSB7XFxuICAgICAgZm9yIChiZWhhdmlvcklkIGluIHN5c3RlbS5iZWhhdmlvcnMpIHtcXG4gICAgICAgICRkYi5fQmVoYXZpb3IucmVtb3ZlKHtcXG4gICAgICAgICAgJ19pZCc6IHN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3JJZF0uX2lkXFxuICAgICAgICB9KTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLy8gcmVtb3ZlIGNvbXBvbmVudHNcXG4gICAgaWYgKHN5c3RlbS5jb21wb25lbnRzKSB7XFxuICAgICAgZm9yIChjb2xsZWN0aW9uIGluIHN5c3RlbS5jb21wb25lbnRzKSB7XFxuICAgICAgICBmb3IgKGNvbXBvbmVudElkIGluIHN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25dKSB7XFxuICAgICAgICAgIGlmIChjb3JlQ29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudElkKSA9PT0gLTEpIHtcXG4gICAgICAgICAgICAkZGJbY29sbGVjdGlvbl0ucmVtb3ZlKHtcXG4gICAgICAgICAgICAgICdfaWQnOiBjb21wb25lbnRJZFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICBpZiAodGhpcy5yZXF1aXJlKGlkKSAmJiB0aGlzLnJlcXVpcmUoaWQpLnN0YXRlKSB7XFxuICAgIHRoaXMucmVxdWlyZShpZCkuc3RhdGUoJ3VuaW5zdGFsbGVkJyk7XFxuICAgIGNoYW5uZWwuJHN5c3RlbVVuaW5zdGFsbGVkKGlkKTtcXG4gIH1cXG59XCIsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzEwNWYyMTljNjgxMzY0Myc6IHtcbiAgICAgIF9pZDogJzEwNWYyMTljNjgxMzY0MycsXG4gICAgICBjb21wb25lbnQ6ICdfT1NHaScsXG4gICAgICBzdGF0ZTogJ3N0YXJ0JyxcbiAgICAgIGFjdGlvbjpcbiAgICAgICAgXCJmdW5jdGlvbiBzdGFydChpZCkge1xcbiAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShpZCksXFxuICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXG4gIGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ3Jlc29sdmVkJyB8fCBzeXN0ZW0uc3RhdGUoKSA9PT0gJ2luc3RhbGxlZCcpIHtcXG4gICAgc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xcbiAgICBpZiAoc3lzdGVtLnN0YXJ0KSB7XFxuICAgICAgc3lzdGVtLnN0YXJ0KCk7XFxuICAgIH1cXG4gICAgY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChpZCk7XFxuICAgIHN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogZmFsc2UsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICAnMWE4MWExZjAwZDE3MjY5Jzoge1xuICAgICAgX2lkOiAnMWE4MWExZjAwZDE3MjY5JyxcbiAgICAgIGNvbXBvbmVudDogJ19PU0dpJyxcbiAgICAgIHN0YXRlOiAnc3RvcCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gc3RvcChpZCkge1xcbiAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShpZCksXFxuICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXG4gIGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ2FjdGl2ZScpIHtcXG4gICAgc3lzdGVtLnN0YXRlKCdzdG9wcGluZycpO1xcbiAgICBpZiAoc3lzdGVtLnN0b3ApIHtcXG4gICAgICBzeXN0ZW0uc3RvcCgpO1xcbiAgICB9XFxuICAgIGNoYW5uZWwuJHN5c3RlbVN0b3BwZWQoaWQpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKGlkKTtcXG4gIH1cXG59XCIsXG4gICAgICB1c2VDb3JlQVBJOiBmYWxzZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxMTY4NTFiNjAyMTI4ZDEnOiB7XG4gICAgICBfaWQ6ICcxMTY4NTFiNjAyMTI4ZDEnLFxuICAgICAgY29tcG9uZW50OiAnX09TR2knLFxuICAgICAgc3RhdGU6ICdzdGF0dXMnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICBcImZ1bmN0aW9uIHN0YXR1cygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgc3lzdGVtID0gbnVsbCxcXG4gICAgbGVuZ3RoID0gMCxcXG4gICAgaSA9IDA7XFxuXFxuICBzeXN0ZW1zID0gJGRiLl9TeXN0ZW0uZmluZCh7fSk7XFxuXFxuICBsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgICByZXN1bHRbc3lzdGVtLm5hbWVdID0ge1xcbiAgICAgICdpZCc6IHN5c3RlbS5faWQsXFxuICAgICAgJ3N0YXRlJzogc3lzdGVtLnN0YXRlLFxcbiAgICAgICduYW1lJzogc3lzdGVtLm5hbWUsXFxuICAgICAgJ3ZlcnNpb24nOiBzeXN0ZW0udmVyc2lvbixcXG4gICAgICAnbG9jYXRpb24nOiBzeXN0ZW0ubG9jYXRpb24sXFxuICAgICAgJ21hc3Rlcic6IHN5c3RlbS5tYXN0ZXJcXG4gICAgfTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgICcxOWNmMzE3ZDcyMTczMzEnOiB7XG4gICAgICBfaWQ6ICcxOWNmMzE3ZDcyMTczMzEnLFxuICAgICAgY29tcG9uZW50OiAnX09TR2knLFxuICAgICAgc3RhdGU6ICdidW5kbGUnLFxuICAgICAgYWN0aW9uOlxuICAgICAgICAnZnVuY3Rpb24gYnVuZGxlKCkgeyBcXG5cXHR2YXIgcmVzdWx0ID0gJGRiLmV4cG9ydFN5c3RlbSgpO1xcblxcdHJldHVybiByZXN1bHQ7XFxufScsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzEzMDEwMTY3ZjMxM2Y4Nyc6IHtcbiAgICAgIF9pZDogJzEzMDEwMTY3ZjMxM2Y4NycsXG4gICAgICBjb21wb25lbnQ6ICdfUnVudGltZScsXG4gICAgICBzdGF0ZTogJ3N5c3RlbScsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gc3lzdGVtKHBhcmFtcykge1xcbiAgdmFyIFJ1bnRpbWVTeXN0ZW0gPSBudWxsLFxcbiAgICBzeXN0ZW0gPSB7fSxcXG4gICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGNvbmYgPSB7fTtcXG5cXG4gIGlmIChwYXJhbXMpIHtcXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgY29uZi5tYXN0ZXIgPSB0cnVlO1xcbiAgICAgIGNvbmYubmFtZSA9IHBhcmFtcztcXG4gICAgfSBlbHNlIHtcXG4gICAgICBjb25mID0gcGFyYW1zO1xcbiAgICAgIGNvbmYubWFzdGVyID0gdHJ1ZTtcXG4gICAgfVxcbiAgICBSdW50aW1lU3lzdGVtID0gdGhpcy5yZXF1aXJlKCdfU3lzdGVtJyk7XFxuICAgIHN5c3RlbSA9IG5ldyBSdW50aW1lU3lzdGVtKGNvbmYpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgfSBlbHNlIHtcXG4gICAgcmVzdWx0ID0gJGRiLl9TeXN0ZW0uZmluZCh7XFxuICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgfSk7XFxuICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XFxuICAgICAgc3lzdGVtSWQgPSByZXN1bHRbMF0uX2lkO1xcbiAgICAgIHN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5c3RlbUlkKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIHN5c3RlbTtcXG59XCIsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZVxuICAgIH0sXG4gICAgJzFjZmE0MTQ1ZjYxNGRhOCc6IHtcbiAgICAgIF9pZDogJzFjZmE0MTQ1ZjYxNGRhOCcsXG4gICAgICBjb21wb25lbnQ6ICdfUnVudGltZScsXG4gICAgICBzdGF0ZTogJ21lc3NhZ2UnLFxuICAgICAgYWN0aW9uOiAnZnVuY3Rpb24gbWVzc2FnZShtc2cpIHsgXFxuICAkZGIuX01lc3NhZ2UuaW5zZXJ0KG1zZyk7XFxufScsXG4gICAgICB1c2VDb3JlQVBJOiB0cnVlLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgJzFjYjlkMTAzZDQxZGQ5Nyc6IHtcbiAgICAgIF9pZDogJzFjYjlkMTAzZDQxZGQ5NycsXG4gICAgICBjb21wb25lbnQ6ICdlODljNjE3YjZiMTVkMjQnLFxuICAgICAgc3RhdGU6ICdzdGFydCcsXG4gICAgICBhY3Rpb246XG4gICAgICAgIFwiZnVuY3Rpb24gc3RhcnQoKSB7XFxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gRE9NQ29udGVudExvYWRlZChlKSB7XFxuICAgICAgdmFyIHN5c3RlbXMgPSBbXSxcXG4gICAgICAgIHN5c3RlbSA9IG51bGwsXFxuICAgICAgICBzY3JpcHRzID0gW10sXFxuICAgICAgICBzY3JpcHQgPSBudWxsLFxcbiAgICAgICAgbG9nTGV2ZWwgPSAnd2FybicsXFxuICAgICAgICBpID0gMCxcXG4gICAgICAgIGxlbmd0aCA9IDA7XFxuICAgIFxcbiAgICAgIHN5c3RlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zeXN0ZW1dJyk7XFxuICAgICAgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7XFxuICBcXG4gICAgICAvLyBsb2dnZXJcXG4gICAgICBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W2xvZ10nKTtcXG4gICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcXG4gICAgICAgIGxvZ0xldmVsID0gc2NyaXB0c1swXS5nZXRBdHRyaWJ1dGUoJ2xvZycpO1xcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbChsb2dMZXZlbCk7XFxuICAgICAgfVxcbiAgXFxuICAgICAgLy8gc3lzdGVtc1xcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgc3lzdGVtID0gc3lzdGVtc1tpXTtcXG4gIFxcbiAgICAgICAgaWYgKHN5c3RlbS5nZXRBdHRyaWJ1dGUoJ2FzeW5jJykgPT09ICdmYWxzZScpIHtcXG4gICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykuaW5zdGFsbChzeXN0ZW0uaHJlZiwgZmFsc2UpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykuaW5zdGFsbChzeXN0ZW0uaHJlZiwgdHJ1ZSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgXFxuICAgICAgLy8gcmVhZHkgZXZlbnRcXG4gICAgICBpZiAobGVuZ3RoID09PSAwKSB7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5yZWFkeSgpO1xcbiAgICAgIH1cXG4gIH0uYmluZCh0aGlzKSk7XFxuICB9XFxufVwiLFxuICAgICAgdXNlQ29yZUFQSTogdHJ1ZSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9XG4gIH0sXG4gIHR5cGVzOiB7XG4gICAgY3NzOiB7XG4gICAgICBfaWQ6ICdoMWQ4ODMxMWFjMDE5MjExJyxcbiAgICAgIG5hbWU6ICdjc3MnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICBfaWQ6ICdjMTdjYWQxYmMzZDE3NzUyJyxcbiAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAganNvbjoge1xuICAgICAgX2lkOiAnZTFkMjVhMTJlNjcxMjdlZCcsXG4gICAgICBuYW1lOiAnanNvbicsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIGRiSW5zZXJ0RXZlbnQ6IHtcbiAgICAgIF9pZDogJzE0OGVmMWUxOTgxMGU2ZCcsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgbmFtZTogJ2RiSW5zZXJ0RXZlbnQnLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgY29sbGVjdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBkb2N1bWVudDoge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkYlJlbW92ZUV2ZW50OiB7XG4gICAgICBfaWQ6ICcxOTUyZTFhYzQyMTNmNGEnLFxuICAgICAgbmFtZTogJ2RiUmVtb3ZlRXZlbnQnLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBjb3JlOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIGNvbGxlY3Rpb246IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGJVcGRhdGVFdmVudDoge1xuICAgICAgX2lkOiAnMWY1YzQxMzA5NzExNzUyJyxcbiAgICAgIGNvcmU6IHRydWUsXG4gICAgICBuYW1lOiAnZGJVcGRhdGVFdmVudCcsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGJBY3Rpb246IHtcbiAgICAgIF9pZDogJ2UxOTUwZTE2ZjI5MTRkYTknLFxuICAgICAgY29yZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkYkFjdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHZhbHVlOiBbJ2luc2VydCcsICd1cGRhdGUnLCAncmVtb3ZlJ11cbiAgICB9LFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIF9pZDogJ2QxYzBkMDEzMGM2MTYxOTknLFxuICAgICAgbmFtZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRPbmx5OiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgZXJyb3JQYXJhbToge1xuICAgICAgX2lkOiAnZTE5ODc2MWZjMGIxYWU4YScsXG4gICAgICBuYW1lOiAnZXJyb3JQYXJhbScsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBldmVudDoge1xuICAgICAgX2lkOiAnZzE2NjhkMWRlMmQxZmY2ZicsXG4gICAgICBuYW1lOiAnZXZlbnQnLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogWydwYXJhbWV0ZXInXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgaHRtbDoge1xuICAgICAgX2lkOiAneTE2MWMyMTMyMGIxMWFjYicsXG4gICAgICBuYW1lOiAnaHRtbCcsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIGphdmFzY3JpcHQ6IHtcbiAgICAgIF9pZDogJ3MxM2Q0YzFmZGY5MTY1MDQnLFxuICAgICAgbmFtZTogJ2phdmFzY3JpcHQnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBfaWQ6ICdwMTI0NjAxODAxZDFkYmZhJyxcbiAgICAgIG5hbWU6ICdsaW5rJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZE9ubHk6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHR5cGU6ICd7dHlwZX0nLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBsb2c6IHtcbiAgICAgIF9pZDogJ2QxZmQxNjFhNGE0MTQ5ZmMnLFxuICAgICAgbmFtZTogJ2xvZycsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHZhbHVlOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgX2lkOiAnbDEzYjA2MWFjNTcxMjcyZCcsXG4gICAgICBuYW1lOiAnbWVzc2FnZScsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBldmVudDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBmcm9tOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICBtZXRob2Q6IHtcbiAgICAgIF9pZDogJ3gxMjI3MjE4ZWVkMWYzZTknLFxuICAgICAgbmFtZTogJ21ldGhvZCcsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6IFsncGFyYW1ldGVyJ10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIG9zZ2lTdGF0ZXM6IHtcbiAgICAgIF9pZDogJ3ExZjBjYTEyMGZjMTNmYjMnLFxuICAgICAgbmFtZTogJ29zZ2lTdGF0ZXMnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB2YWx1ZTogW1xuICAgICAgICAnbm9uZScsXG4gICAgICAgICdpbnN0YWxsZWQnLFxuICAgICAgICAncmVzb2x2ZWQnLFxuICAgICAgICAnc3RhcnRpbmcnLFxuICAgICAgICAnYWN0aXZlJyxcbiAgICAgICAgJ3N0b3BwaW5nJyxcbiAgICAgICAgJ3VuaW5zdGFsbGVkJ1xuICAgICAgXSxcbiAgICAgIGNvcmU6IHRydWVcbiAgICB9LFxuICAgIHBhcmFtZXRlcjoge1xuICAgICAgX2lkOiAnZTFiMThlMTZjNmMxOTVhZCcsXG4gICAgICBuYW1lOiAncGFyYW1ldGVyJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdHlwZTogJ3t0eXBlfScsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH0sXG4gICAgcHJvcGVydHk6IHtcbiAgICAgIF9pZDogJ2ExNmEzYTFhZTA1MWE1NWQnLFxuICAgICAgbmFtZTogJ3Byb3BlcnR5JyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZE9ubHk6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHR5cGU6ICd7dHlwZX0nLFxuICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb3JlOiB0cnVlXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBfaWQ6ICdjMTM2ZmMxMjlhOTEyZjU0JyxcbiAgICAgIG5hbWU6ICd0ZXh0JyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgY29yZTogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIF9DaGFubmVsOiB7XG4gICAgICBjaGFubmVsOiB7XG4gICAgICAgIF9pZDogJ2NoYW5uZWwnXG4gICAgICB9XG4gICAgfSxcbiAgICBfRGF0YWJhc2U6IHtcbiAgICAgIGRiOiB7XG4gICAgICAgIF9pZDogJ2RiJ1xuICAgICAgfVxuICAgIH0sXG4gICAgX0xvZ2dlcjoge1xuICAgICAgbG9nZ2VyOiB7XG4gICAgICAgIF9pZDogJ2xvZ2dlcicsXG4gICAgICAgIGxldmVsOiAnd2FybidcbiAgICAgIH1cbiAgICB9LFxuICAgIF9NZXRhbW9kZWw6IHtcbiAgICAgIG1ldGFtb2RlbDoge1xuICAgICAgICBfaWQ6ICdtZXRhbW9kZWwnXG4gICAgICB9XG4gICAgfSxcbiAgICBfUnVudGltZToge1xuICAgICAgcnVudGltZToge1xuICAgICAgICBfaWQ6ICdydW50aW1lJyxcbiAgICAgICAgdmVyc2lvbjogJzIuMi4wJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2lkOiAnZTg5YzYxN2I2YjE1ZDI0J1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGJlaGF2aW9ycyBvZiBhbGwgY29tcG9uZW50cy5cbiAqIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBzdG9yZSA9IHt9O1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVuYyBhIHN0cmluZ2lmaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgdGhlIGJlaGF2aW9yIHdpbGwgYmUgdHJlYXRlZCBhcyBhIFN5c3RlbSBSdW50aW1lIGNvcmUgYmVoYXZpb3IuXG4gKiBJbiB0aGF0IGNhc2UsIHRoZSBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkIGluIGEgc3lzdGVtIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFN5c3RlbSBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGZ1bmN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgY3JlYXRlZCBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBmdW5jdGlvbiBmcm9tIGEgc3RyaW5nLlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb246XG4gKiAtIHdpbGwgYmUgYSBuYW1lZCBmdW5jdGlvbixcbiAqIC0gaGFzIHRoZSBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgYW5kXG4gKiAtIGNhbiBoYXZlIHNvbWUgY29yZSBtb2R1bGVzIGluamVjdGVkIGFzIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24obmFtZSwgZnVuYywgY29yZSwgdXNlQ29yZUFQSSkge1xuICB2YXIgYmVnaW5Cb2R5ID0gLTE7XG4gIHZhciBmdW5jUGFyYW1zID0gJyc7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHBhcmFtc0NsZWFuID0gW107XG4gIHZhciBmdW5jQm9keSA9ICcnO1xuICB2YXIgaGVhZGVyID0gJyc7XG4gIHZhciBhY3Rpb24gPSBudWxsO1xuICB2YXIgaXNBcnJvd0Z1bmN0aW9uID0gdHJ1ZTtcbiAgdmFyIGlzT25lTGluZSA9IGZhbHNlO1xuXG4gIGlmIChmdW5jLnRyaW0oKS5pbmRleE9mKCdmdW5jdGlvbicpID09PSAwKSB7XG4gICAgaXNBcnJvd0Z1bmN0aW9uID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNBcnJvd0Z1bmN0aW9uKSB7XG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCc9PicpO1xuXG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgICBoZWFkZXIgPSBoZWFkZXIucmVwbGFjZSgnPT4nLCAnJyk7XG5cbiAgICBpZiAoaGVhZGVyLmluZGV4T2YoJygnKSAhPT0gLTEpIHtcbiAgICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXJcbiAgICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgICAgLnJlcGxhY2UoJyknLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVuY1BhcmFtcyA9IGhlYWRlci50cmltKCk7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDIsIGZ1bmMubGVuZ3RoKS50cmltKCk7XG5cbiAgICBpZiAoZnVuY0JvZHkuaW5kZXhPZigneycpID09PSAwKSB7XG4gICAgICBmdW5jQm9keSA9IGZ1bmNCb2R5LnN1YnN0cmluZygxLCBmdW5jQm9keS5sYXN0SW5kZXhPZignfScpKS50cmltKCk7XG4gICAgfVxuXG4gICAgaWYgKGZ1bmNCb2R5LmluZGV4T2YoJ1xcbicpID09PSAtMSkge1xuICAgICAgaXNPbmVMaW5lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJvd0Z1bmN0aW9uICYmIGlzT25lTGluZSAmJiBmdW5jQm9keS5pbmRleE9mKCdyZXR1cm4gJykgPT09IC0xKSB7XG4gICAgICBmdW5jQm9keSA9ICdyZXR1cm4gJyArIGZ1bmNCb2R5O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuXG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlclxuICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgIC5yZXBsYWNlKCcpJywgJycpXG4gICAgICAudHJpbSgpO1xuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDEpO1xuICAgIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDAsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcbiAgfVxuXG4gIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgcGFyYW1zID0gW107XG4gIH1cbiAgaWYgKHVzZUNvcmVBUEkpIHtcbiAgICBwYXJhbXMucHVzaCgnJGNvbXBvbmVudCcpO1xuICAgIHBhcmFtcy5wdXNoKCckZGInKTtcbiAgICBwYXJhbXMucHVzaCgnJG1ldGFtb2RlbCcpO1xuICAgIHBhcmFtcy5wdXNoKCckd29ya2Zsb3cnKTtcbiAgICBwYXJhbXMucHVzaCgnJGJlaGF2aW9yJyk7XG4gICAgcGFyYW1zLnB1c2goJyRzdGF0ZScpO1xuICAgIHBhcmFtcy5wdXNoKCckbG9nJyk7XG4gIH1cblxuICBpZiAocGFyYW1zWzBdICE9PSAnJykge1xuICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX2JvZHknLFxuICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgbmFtZSArXG4gICAgICAgICcgKCcgK1xuICAgICAgICBwYXJhbXMuam9pbignLCcpICtcbiAgICAgICAgXCIpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbignXCIgK1xuICAgICAgICBwYXJhbXMuam9pbihcIicsJ1wiKSArXG4gICAgICAgIFwiJywgX19ib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCJcbiAgICApKGZ1bmNCb2R5KTtcbiAgfSBlbHNlIHtcbiAgICBhY3Rpb24gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnX19ib2R5JyxcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICAnICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihfX2JvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTsnXG4gICAgKShmdW5jQm9keSk7XG4gIH1cblxuICByZXR1cm4gYWN0aW9uO1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgYWRkXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIHRoZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFN5c3RlbSBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29yZSBpZiB0cnVlLCBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBpZCBvZiB0aGUgYmVoYXZpb3IgY3JlYXRlZCBpbiBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQoaWQsIHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGNvcmUpIHtcbiAgdmFyIGJlaGF2aW9ySWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgdmFyIHN0ckFjdGlvbiA9IGFjdGlvbi50b1N0cmluZygpO1xuXG4gIGlmICh0eXBlb2YgY29yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb3JlID0gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB1c2VDb3JlQVBJID09PSAndW5kZWZpbmVkJykge1xuICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgfVxuXG4gIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKHN0YXRlLCBzdHJBY3Rpb24sIGNvcmUsIHVzZUNvcmVBUEkpO1xuXG4gIHN0b3JlW2JlaGF2aW9ySWRdID0gYWN0aW9uO1xuXG4gICRkYi5fQmVoYXZpb3IuaW5zZXJ0KHtcbiAgICBfaWQ6IGJlaGF2aW9ySWQsXG4gICAgY29tcG9uZW50OiBpZCxcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgYWN0aW9uOiBzdHJBY3Rpb24sXG4gICAgdXNlQ29yZUFQSTogdXNlQ29yZUFQSSxcbiAgICBjb3JlOiBjb3JlXG4gIH0pO1xuXG4gIHJldHVybiBiZWhhdmlvcklkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICoge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3IgKG9wdGlvbmFsKVxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgcGFyYW1zLmJlaGF2aW9ySWQgPSBwYXJhbXMuYmVoYXZpb3JJZCB8fCAnJztcbiAgcGFyYW1zLmNvbXBvbmVudElkID0gcGFyYW1zLmNvbXBvbmVudElkIHx8ICcnO1xuICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG5cbiAgaWYgKHBhcmFtcy5jb21wb25lbnRJZCkge1xuICAgIGlmIChwYXJhbXMuYmVoYXZpb3JJZCkge1xuICAgICAgJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICBfaWQ6IHBhcmFtcy5iZWhhdmlvcklkLFxuICAgICAgICBjb21wb25lbnQ6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgc3RhdGU6IHBhcmFtcy5zdGF0ZVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgc3RvcmVbcGFyYW1zLmJlaGF2aW9ySWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zLnN0YXRlKSB7XG4gICAgICAgIHJlc3VsdCA9ICRkYi5fQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgICBzdGF0ZTogcGFyYW1zLnN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgIGNvbXBvbmVudDogcGFyYW1zLmNvbXBvbmVudElkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IGZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgZGVsZXRlIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgYWN0aW9ucyB0aGF0IGhhdmUgdG8gYmUgZXhlY3V0ZWQgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IGFuZCBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5nZXRBY3Rpb25zID0gZnVuY3Rpb24gZ2V0QWN0aW9ucyhpZCwgc3RhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgZGJSZXN1bHQgPSBbXTtcbiAgdmFyIGFjdGlvbiA9IG51bGw7XG5cbiAgZGJSZXN1bHQgPSAkZGIuX0JlaGF2aW9yLmZpbmQoe1xuICAgIGNvbXBvbmVudDogaWQsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pO1xuXG4gIGRiUmVzdWx0LmZvckVhY2goZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICBhY3Rpb24gPSBzdG9yZVtiZWhhdmlvci5faWRdO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWN0aW9uID0gY3JlYXRlRnVuY3Rpb24oXG4gICAgICAgIGJlaGF2aW9yLnN0YXRlLFxuICAgICAgICBiZWhhdmlvci5hY3Rpb24sXG4gICAgICAgIGJlaGF2aW9yLmNvcmUsXG4gICAgICAgIGJlaGF2aW9yLnVzZUNvcmVBUElcbiAgICAgICk7XG4gICAgICBzdG9yZVtiZWhhdmlvci5faWRdID0gYWN0aW9uO1xuICAgIH1cbiAgICByZXN1bHQucHVzaCh7XG4gICAgICB1c2VDb3JlQVBJOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5XG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7fTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEByZXR1cm5zIHtCZWhhdmlvcn0gdGhlIGJlaGF2aW9yXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgYmVoYXZpb3IgYnkgaXRzIGlkXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBjb21wb25lbnRcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGNvbXBvbmVudHMuXG4gKiBJdCBpcyB0aGUgZmFjdG9yeSBvZiBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBTeXN0ZW0gUnVudGltZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eSc7XG52YXIgTElOS19UWVBFID0gJ2xpbmsnO1xudmFyIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJztcbnZhciBNRVRIT0RfVFlQRSA9ICdtZXRob2QnO1xudmFyIEVWRU5UX1RZUEUgPSAnZXZlbnQnO1xudmFyIE5BTUUgPSAnX25hbWUnO1xudmFyIHN0b3JlID0ge307XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBjbGFzcyBfQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgcHVzaCBhbmQgcG9wIG1ldGhvZCBvZiBBcnJheSBDbGFzc1xuICovXG5mdW5jdGlvbiBfQXJyYXkoY29uZikge1xuICB2YXIgYXJyID0gW107XG4gIHZhciBhcnJEYiA9IFtdO1xuICB2YXIgdHlwZSA9ICcnO1xuICB2YXIgaWQgPSAnJztcbiAgdmFyIGNsYXNzSWQgPSAnJztcbiAgdmFyIHByb3BlcnR5TmFtZSA9ICcnO1xuICB2YXIgaXNSZWFkT25seSA9IGZhbHNlO1xuXG4gIGNvbmYgPSBjb25mIHx8IHt9O1xuICB0eXBlID0gY29uZi50eXBlIHx8ICcnO1xuICBpZCA9IGNvbmYuaWQgfHwgJyc7XG4gIHByb3BlcnR5TmFtZSA9IGNvbmYucHJvcGVydHlOYW1lIHx8ICcnO1xuICBhcnJEYiA9IGNvbmYuYXJyIHx8IFtdO1xuICBjbGFzc0lkID0gY29uZi5jbGFzc0lkIHx8ICcnO1xuXG4gIGlmICh0eXBlb2YgY29uZi5yZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpc1JlYWRPbmx5ID0gY29uZi5yZWFkT25seTtcbiAgfVxuXG4gIC8vIGluaXRcbiAgYXJyRGIuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAoJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKSkge1xuICAgICAgYXJyLnB1c2goJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyLnB1c2godmFsKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb3B5XG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBjb3B5IHRoZSBhcnJheVxuICAgKi9cbiAgZnVuY3Rpb24gX2NvcHkoKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICAgIGFyckRiLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKSkge1xuICAgICAgICBhcnJbaV0gPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJbaV0gPSB2YWw7XG4gICAgICB9XG4gICAgICBpID0gaSArIDE7XG4gICAgfSk7XG5cbiAgICBmb3IgKGogPSBpOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgIGRlbGV0ZSBhcnJbal07XG4gICAgfVxuICAgIGFyci5sZW5ndGggPSBhcnJEYi5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfYWRkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWwgdmFsdWUgdG8gYWRkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb24gdHlwZSBvZiBhY3Rpb25cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkZWxldGVDb3VudFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gYWRkIGFuIGl0ZW0gaW4gdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBfYWRkKHZhbCwgYWN0aW9uLCBzdGFydCwgZGVsZXRlQ291bnQpIHtcbiAgICB2YXIgaXNDbGFzcyA9IGZhbHNlO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgZGVsID0gW107XG5cbiAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgIGlzQ2xhc3MgPSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpO1xuXG4gICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsICYmXG4gICAgICAgICAgJG1ldGFtb2RlbC5pbmhlcml0RnJvbSh2YWwuY29uc3RydWN0b3IubmFtZSwgdHlwZS5yZXBsYWNlKCdAJywgJycpKVxuICAgICAgICApIHtcbiAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAncHVzaCc6XG4gICAgICAgICAgICAgIGFyckRiLnB1c2godmFsLmlkKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgIGFyckRiLnVuc2hpZnQodmFsLmlkKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgZGVsID0gYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKTtcblxuICAgICAgICAgICAgICBsZW5ndGggPSBkZWwubGVuZ3RoO1xuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbc3RvcmVbZGVsW2ldXSwgJ3JlbW92ZSddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGFyckRiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIGRhdGE6IFt2YWwsICdhZGQnXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsLmlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKGlkLCBjbGFzc0lkLCBwcm9wZXJ0eU5hbWUsIHZhbC5pZCgpLCB0eXBlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKGlkLCBjbGFzc0lkLCBwcm9wZXJ0eU5hbWUsIHZhbCwgdHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsICYmICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsLCB0eXBlKSkge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwdXNoJzpcbiAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgIGFyckRiLnVuc2hpZnQodmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NwbGljZSc6XG4gICAgICAgICAgICAgIGFyckRiLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBkYXRhOiBbdmFsLCAnYWRkJ11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJEYi5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVtb3ZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIHJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBfcmVtb3ZlKGFjdGlvbikge1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIHZhbCA9IG51bGw7XG4gICAgdmFyIGlzQ2xhc3MgPSBmYWxzZTtcblxuICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgaWYgKGFyckRiLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3BvcCc6XG4gICAgICAgICAgICB2YWwgPSBhcnJEYi5wb3AoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc2hpZnQnOlxuICAgICAgICAgICAgdmFsID0gYXJyRGIuc2hpZnQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpc0NsYXNzID0gJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKTtcblxuICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgIHJlc3VsdCA9IHN0b3JlW3ZhbF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgZGF0YTogW3Jlc3VsdCwgJ3JlbW92ZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBwdXNoXG4gICAqIEBwYXJhbSB7X0NvbXBvbmVudHxPYmplY3R9IHZhbFxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgcHVzaCBtZXRob2RcbiAgICovXG4gIGFyci5wdXNoID0gZnVuY3Rpb24gcHVzaCh2YWwpIHtcbiAgICB2YXIgcmVzdWx0ID0gX2FkZCh2YWwsICdwdXNoJyk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdW5zaGlmdFxuICAgKiBAcGFyYW0ge19Db21wb25lbnR8T2JqZWN0fSB2YWxcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHVuc2hpZnQgbWV0aG9kXG4gICAqL1xuICBhcnIudW5zaGlmdCA9IGZ1bmN0aW9uIHVuc2hpZnQodmFsKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9hZGQodmFsLCAndW5zaGlmdCcpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHB1c2hcbiAgICogQHBhcmFtIHtfQ29tcG9uZW50fE9iamVjdH0gYXJyXG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBjb25jYXQgbWV0aG9kXG4gICAqL1xuICBhcnIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KGFycikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2FkZChhcnJbaV0sICdwdXNoJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZi5hcnIgPSBhcnJEYjtcblxuICAgIHJlc3VsdCA9IG5ldyBfQXJyYXkoY29uZik7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcG9wXG4gICAqIEByZXR1cm5zIHtfQ29tcG9uZW50fE9iamVjdH0gdmFsdWVcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHBvcCBtZXRob2RcbiAgICovXG4gIGFyci5wb3AgPSBmdW5jdGlvbiBwb3AoKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9yZW1vdmUoJ3BvcCcpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNoaWZ0XG4gICAqIEByZXR1cm5zIHtfQ29tcG9uZW50fE9iamVjdH0gdmFsdWVcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNoaWZ0IG1ldGhvZFxuICAgKi9cbiAgYXJyLnNoaWZ0ID0gZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9yZW1vdmUoJ3NoaWZ0Jyk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc29ydFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdCB0aGUgc29ydCBmdW5jdGlvblxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgY3VycmVudCBfQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNvcnQgbWV0aG9kXG4gICAqL1xuICBhcnIuc29ydCA9IGZ1bmN0aW9uIHNvcnQoZnVuY3QpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgIGFyckRiLnNvcnQoZnVuY3QpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICRoZWxwZXJcbiAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBhcnI7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmV2ZXJzZVxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgcmV2ZXJzZWQgX0FycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSByZXZlcnNlIG1ldGhvZFxuICAgKi9cbiAgYXJyLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIGFyckRiLnJldmVyc2UoKTtcblxuICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAkaGVscGVyXG4gICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc3BsaWNlXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSBzcGxpY2VkIF9BcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc3BsaWNlIG1ldGhvZFxuICAgKi9cbiAgYXJyLnNwbGljZSA9IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHZhbCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGlzQ2xhc3MgPSBmYWxzZTtcbiAgICB2YXIgZGF0YSA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9hZGQodmFsLCAnc3BsaWNlJywgc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICRoZWxwZXJcbiAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGFyckRiXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXNDbGFzcyA9ICRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSk7XG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgZGF0YSA9IHN0b3JlW3Jlc3VsdFtpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IHJlc3VsdFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIGRhdGE6IFtkYXRhLCAncmVtb3ZlJ11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc2xpY2VcbiAgICogQHJldHVybnMge19BcnJheX0gdGhlIHNsaWNlZCBfQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNsaWNlIG1ldGhvZFxuICAgKi9cbiAgYXJyLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UoYmVnaW4sIGVuZCkge1xuICAgIHZhciByZXN1bHQgPSBhcnJEYi5zbGljZShiZWdpbiwgZW5kKTtcbiAgICBfY29weSgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gYXJyO1xufVxuXG5fQXJyYXkucHJvdG90eXBlID0gW107XG5cbi8qKlxuICogQG1ldGhvZCBnZXRQYXJhbU5hbWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBwYXJhbXMgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXS5wYXJhbXM7XG4gIGlmIChwYXJhbXMpIHtcbiAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIHByb3BlcnR5IG9mIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyhpZCkge1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHByb3BOYW1lcyA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbTkFNRV0pO1xuXG4gIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKFxuICAgICAgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IExJTktfVFlQRSB8fFxuICAgICAgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IFBST1BFUlRZX1RZUEUgfHxcbiAgICAgIHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBDT0xMRUNUSU9OX1RZUEVcbiAgICApIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgbmFtZTogcHJvcE5hbWVzW2ldLFxuICAgICAgICB0eXBlOiBtb2RlbFtwcm9wTmFtZXNbaV1dLnR5cGUsXG4gICAgICAgIHJlYWRPbmx5OiBtb2RlbFtwcm9wTmFtZXNbaV1dLnJlYWRPbmx5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0TWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIG1ldGhvZHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIG1ldGhvZCBvZiBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGhvZHMoaWQpIHtcbiAgdmFyIG1vZGVsID0gbnVsbDtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBwcm9wTmFtZXMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsW05BTUVdKTtcblxuICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgcHJvcGVydHkgc2NoZW1hIG9mIHRoZSBzdHJ1Y3R1cmUgdHlwZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHNjaGVtYSBvZiBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVQcm9wZXJ0aWVzKHByb3BlcnR5TmFtZSwgbW9kZWwpIHtcbiAgdmFyIG1vZGVsRGVmID0gbnVsbDtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgc3RydWN0dXJlID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgcHJvcE5hbWVzID0gW107XG5cbiAgbW9kZWxEZWYgPSAkbWV0YW1vZGVsLmdldE1vZGVsKG1vZGVsKTtcbiAgdHlwZSA9IG1vZGVsRGVmW3Byb3BlcnR5TmFtZV0udHlwZTtcbiAgc3RydWN0dXJlID0gJG1ldGFtb2RlbC5nZXRUeXBlKHR5cGUpO1xuXG4gIGlmIChzdHJ1Y3R1cmUuc2NoZW1hKSB7XG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc3RydWN0dXJlLnNjaGVtYSk7XG4gICAgcHJvcE5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgc3RydWN0dXJlLnNjaGVtYVtuYW1lXS5uYW1lID0gbmFtZTtcbiAgICAgIHJlc3VsdC5wdXNoKHN0cnVjdHVyZS5zY2hlbWFbbmFtZV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldEV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0FycmF5fSBhbGwgdGhlIGV2ZW50cyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgZXZlbnQgb2YgYSBjbGFzc1xuICovXG5mdW5jdGlvbiBnZXRFdmVudHMoaWQpIHtcbiAgdmFyIG1vZGVsID0gbnVsbDtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBwcm9wTmFtZXMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsW05BTUVdKTtcblxuICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gRVZFTlRfVFlQRSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcE5hbWVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSB2YWx1ZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHZhbHVlIG9mIGEgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIGRvYyA9ICRkYi5zdG9yZVttb2RlbF1baWRdO1xuICB2YXIgc3ViUGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGxlbmd0aCA9IHN1YlBhdGgubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmVzdWx0ID0gZG9jO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJQYXRoW2ldXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFNldCB0aGUgdmFsdWUgb2YgYSBzdHJ1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBwYXRoLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIGRvYyA9ICRkYi5zdG9yZVttb2RlbF1baWRdO1xuICB2YXIgc3ViUGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGxlbmd0aCA9IHN1YlBhdGgubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmVzdWx0ID0gZG9jO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICByZXN1bHQgPSByZXN1bHRbc3ViUGF0aFtpXV07XG4gIH1cbiAgcmVzdWx0W3N1YlBhdGhbaV1dID0gdmFsdWU7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBuZXcgY2xhc3MgZnJvbSBhIGNsYXNzIGRlZmluaXRpb25cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3MoY2xhc3NJZCkge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIHZhciBib2R5ID0ge307XG5cbiAgICBpZiAoY29uZmlnLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdPYmplY3QnKSB7XG4gICAgICAkbG9nLmludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMoY29uZmlnLCBjbGFzc0lkKTtcbiAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICEkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3QoXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgJG1ldGFtb2RlbC5nZXRNb2RlbChjbGFzc0lkKSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgICkge1xuICAgICAgJGxvZy5pbnZhbGlkUGFyYW1ldGVycyhjbGFzc0lkKTtcbiAgICB9XG5cbiAgICAkbWV0YW1vZGVsLnByZXBhcmVPYmplY3QoY29uZmlnLCAkbWV0YW1vZGVsLmdldE1vZGVsKGNsYXNzSWQpKTtcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLl9pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5faWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICB9XG5cbiAgICBzdG9yZVtjb25maWcuX2lkXSA9IHRoaXM7XG5cbiAgICAvLyBpZFxuICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5faWQ7XG4gICAgfTtcbiAgICB0aGlzLmlkID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ19fYm9keScsXG4gICAgICAncmV0dXJuIGZ1bmN0aW9uIGlkICgpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMpIH07J1xuICAgICkoYm9keSk7XG5cbiAgICAvLyBjbGFzc0luZm9cbiAgICBpZiAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbShjbGFzc0lkLCAnX0NvbXBvbmVudCcpKSB7XG4gICAgICBjb25maWcuY2xhc3NJbmZvID0gY2xhc3NJZCArICdJbmZvJztcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbGluayB0byBkYlxuICAgICRkYi5zdG9yZVtjbGFzc0lkXVtjb25maWcuX2lkXSA9IGNvbmZpZztcblxuICAgICRkYi5jcmVhdGVMb2coJ2luc2VydCcsIGNsYXNzSWQsIGNvbmZpZy5faWQsICcnLCBjb25maWcpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgJGhlbHBlclxuICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgZG9jdW1lbnQ6IGNvbmZpZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgdGhpcy5pbml0KGNvbmZpZyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gJyArIGNsYXNzSWQgKyAnIChjb25maWcpIHsgX19ib2R5LmNhbGwodGhpcyxjb25maWcpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkSWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhbiBpZCBtZXRob2QgdG8gYSBjbGFzcyB0aGF0IHdpbGwgcmV0dXJuIGl0cyBpZFxuICovXG5mdW5jdGlvbiBhZGRJZChDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgcmV0dXJuIGNsYXNzSWQ7XG4gIH07XG4gIENsYXNzLmlkID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX2JvZHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gaWQgKHByb3AsIHZhbCkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgcHJvcCwgdmFsKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIHByb3BlcnRpZXMgdG8gYSBjb21wb25lbnQuXG4gKiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICpcbiAqIEBleGFtcGxlXG4gKiBsYXVyZS5hZ2UoKTsgLy8gZ2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqIGxhdXJlLmFnZSgyMik7IC8vIHNldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKi9cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyhtb2RlbCk7XG5cbiAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BlcnR5KHByb3ApIHtcbiAgICB2YXIgYm9keSA9IHt9O1xuICAgIHZhciBwcm9wZXJ0eU5hbWUgPSAnJztcbiAgICB2YXIgcHJvcGVydHlUeXBlID0gJyc7XG4gICAgdmFyIHByb3BlcnR5UmVhZE9ubHkgPSAnJztcblxuICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wLnR5cGU7XG4gICAgcHJvcGVydHlSZWFkT25seSA9IHByb3AucmVhZE9ubHk7XG5cbiAgICBmdW5jdGlvbiBfaXNWYWxpZENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgIGNvbGwuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoXG4gICAgICAgICAgICAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkgJiZcbiAgICAgICAgICAgICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICB2YWwuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgdHlwZS5yZXBsYWNlKCdAJywgJycpXG4gICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSkpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0UmVhbENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICBjb2xsLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIGlmICgkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnOlxuICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbC5pZCAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXN1bHQucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgfHwgcHJvcGVydHlUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICAvLyBpbiBjYXNlIG9mIGFycmF5LCByZXR1cm4gYSBzdWIgYXJyYXlcbiAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHBvc2l0aW9uLCB2YWx1ZSkge1xuICAgICAgICB2YXIgc2VhcmNoID0gW107XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICB2YXIgcnVudGltZUFyciA9IG51bGw7XG4gICAgICAgIHZhciB2YWwgPSBudWxsO1xuICAgICAgICB2YXIgcmVhbFZhbCA9IG51bGw7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBfQXJyYXkoe1xuICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgcmVhZE9ubHk6IHByb3BlcnR5UmVhZE9ubHksXG4gICAgICAgICAgICAgIGNsYXNzSWQ6IGNsYXNzSWQsXG4gICAgICAgICAgICAgIHR5cGU6IHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhbnknIDogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICBhcnI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2UgdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIF9pc1ZhbGlkQ29sbGVjdGlvbihcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FueScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogdGhpcy5pZCgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSBfZ2V0UmVhbENvbGxlY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtwb3NpdGlvbiwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHJlYWxWYWw7XG5cbiAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb21wb25lbnRbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhcnJheScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWxWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAgICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICAgIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknXG4gICAgICAgICAgICAgICAgICA/ICdhcnJheSdcbiAgICAgICAgICAgICAgICAgIDogcHJvcGVydHlUeXBlWzBdLnJlcGxhY2UoJ0AnLCAnJylcbiAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYXJyYXknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgX2lkOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbHVlLmlkICE9PSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dID0gcmVhbFZhbDtcblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbdmFsdWUsICdhZGQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX2JvZHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgICAgJyAocG9zaXRpb24sIHZhbHVlKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07J1xuICAgICAgKShib2R5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkodmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShwcm9wZXJ0eVR5cGUpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBleHBvcnRzLmdldChjb21wb25lbnRbcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdqc29uJzpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgX0FycmF5KHtcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgY2xhc3NJZDogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgICAgYXJyOiAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShwcm9wZXJ0eU5hbWUsIGNsYXNzSWQpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoXG4gICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gY29tcG9uZW50W3Byb3BlcnR5TmFtZV07IC8vIFRPRE8gY2FzZSBvZiBvYmplY3RcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmRlc3Ryb3llZENvbXBvbmVudENhbGwocHJvcGVydHlOYW1lLCB0aGlzLmlkKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgX2lkOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIF9CZWhhdmlvclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc0lkID09PSAnX0JlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3ZhbHVlXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX2JvZHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgICAgJyAodmFsdWUpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsdmFsdWUpIH07J1xuICAgICAgKShib2R5KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkU3RydWN0dXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXJlbnQgcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgcHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgdGhhdCBjb2ludGFpbnMgbWV0aG9kcyB0byBhY2Nlc3MgdGhlIHN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgc3RydWN0dXJlIHByb3BlcnRpZXMgdG8gYSBjb21wb25lbnQuXG4gKiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICovXG5mdW5jdGlvbiBhZGRTdHJ1Y3R1cmUocGF0aCwgbmFtZSwgbW9kZWwsIGlkKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0U3RydWN0dXJlUHJvcGVydGllcyhuYW1lLCBtb2RlbCk7XG4gIHZhciBzcnVjdHVyZSA9IHt9O1xuXG4gIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgdmFyIGJvZHkgPSB7fTtcbiAgICB2YXIgcHJvcGVydHlOYW1lID0gJyc7XG4gICAgdmFyIHByb3BlcnR5VHlwZSA9ICcnO1xuICAgIHZhciBwcm9wZXJ0eVJlYWRPbmx5ID0gJyc7XG5cbiAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wLm5hbWU7XG4gICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgIHByb3BlcnR5UmVhZE9ubHkgPSBwcm9wLnJlYWRPbmx5O1xuXG4gICAgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICBib2R5ID0gZnVuY3Rpb24gYm9keShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHJ1bnRpbWVBcnIgPSBudWxsO1xuICAgICAgICB2YXIgdmFsID0gbnVsbDtcbiAgICAgICAgdmFyIHJlYWxWYWwgPSBudWxsO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuICAgICAgICB2YXIgcGFyZW50UGF0aCA9ICcnO1xuICAgICAgICB2YXIgZnVsbFBhdGggPSAnJztcblxuICAgICAgICBmdW5jdGlvbiBfaXNWYWxpZENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHBhcmVudFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBmdWxsUGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBfQXJyYXkoe1xuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICBjbGFzc0lkOiBtb2RlbCxcbiAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgIGFycjogZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2UgdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgaWYgKF9pc1ZhbGlkQ29sbGVjdGlvbihwb3NpdGlvbiwgJ2FueScpKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtwb3NpdGlvbiwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsICdhbnknKSkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbbW9kZWxdLmZpbmQoe1xuICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgYXJyID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFycltwb3NpdGlvbl0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCBhcnIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhcnJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbYXJyLCAnYWRkJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzcnVjdHVyZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICAgICcgKHBvc2l0aW9uLCB2YWx1ZSkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgcG9zaXRpb24sIHZhbHVlKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBbXTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gbnVsbDtcbiAgICAgICAgdmFyIHBhcmVudFBhdGggPSAnJztcbiAgICAgICAgdmFyIGZ1bGxQYXRoID0gJyc7XG5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBwYXJlbnRQYXRoID0gcGFyZW50UGF0aCArICcuJyArIG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50UGF0aCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZnVsbFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgcHJvcGVydHlOYW1lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW21vZGVsXVtpZF07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShwcm9wZXJ0eVR5cGUpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBleHBvcnRzLmdldChcbiAgICAgICAgICAgICAgICAgIGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnanNvbic6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNTdHJ1Y3R1cmUocHJvcGVydHlOYW1lLCBtb2RlbCk6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGFkZFN0cnVjdHVyZShcbiAgICAgICAgICAgICAgICAgIHBhcmVudFBhdGgsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHByb3AuZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKGZ1bGxQYXRoLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIG1vZGVsLCBmdWxsUGF0aCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgIHNlYXJjaCA9ICRkYlttb2RlbF0uZmluZCh7XG4gICAgICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShwcm9wZXJ0eVR5cGUpOlxuICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIF9CZWhhdmlvclxuICAgICAgICAgICAgICAgIGlmIChtb2RlbCA9PT0gJ19CZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KGlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFt2YWx1ZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc3J1Y3R1cmVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fYm9keScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAnICh2YWx1ZSkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcyx2YWx1ZSkgfTsnXG4gICAgICApKGJvZHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHNydWN0dXJlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkTWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiAgKiBBZGQgbWV0aG9kcyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyAvIG91dHB1dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkTWV0aG9kcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIG1ldGhvZHMgPSBnZXRNZXRob2RzKG1vZGVsKTtcblxuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gbWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcGFyYW1zTmFtZSA9IGdldFBhcmFtTmFtZXMoY2xhc3NJZCwgbWV0aG9kTmFtZSk7XG4gICAgdmFyIHBhcmFtcyA9IHBhcmFtc05hbWUuam9pbignLCcpO1xuICAgIHZhciBwYXJhbXNXaXRoQ29udGV4dCA9ICcnO1xuXG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiBib2R5KCkge1xuICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgIHJlc3VsdCA9ICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICBzdGF0ZTogbWV0aG9kTmFtZSxcbiAgICAgICAgZGF0YTogYXJndW1lbnRzXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdmFyIGJvZHlXaXRoQ29udGV4dCA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgIHZhciBkYXRhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgZGF0YS5zaGlmdCgpO1xuXG4gICAgICBpZiAoYXJndW1lbnRzWzBdKSB7XG4gICAgICAgIHJlc3VsdCA9ICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgc3RhdGU6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBjb250ZXh0OiBhcmd1bWVudHNbMF1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25Db250ZXh0KGNsYXNzSWQsIG1ldGhvZE5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBwYXJhbXNOYW1lLnVuc2hpZnQoJ2NvbnRleHQnKTtcbiAgICAgIHBhcmFtc1dpdGhDb250ZXh0ID0gcGFyYW1zTmFtZS5qb2luKCcnKTtcblxuICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19ib2R5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAnICgnICtcbiAgICAgICAgICBwYXJhbXMgK1xuICAgICAgICAgICcpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMsJyArXG4gICAgICAgICAgcGFyYW1zICtcbiAgICAgICAgICAnKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgICBpZiAobWV0aG9kTmFtZSAhPT0gJ25hbWUnKSB7XG4gICAgICAgIENsYXNzW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICdfX2JvZHknLFxuICAgICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAgICcgKCcgK1xuICAgICAgICAgICAgcGFyYW1zV2l0aENvbnRleHQgK1xuICAgICAgICAgICAgJykgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywnICtcbiAgICAgICAgICAgIHBhcmFtc1dpdGhDb250ZXh0ICtcbiAgICAgICAgICAgICcpIH07J1xuICAgICAgICApKGJvZHlXaXRoQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fYm9keScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArIG1ldGhvZE5hbWUgKyAnICgpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMpIH07J1xuICAgICAgKShib2R5KTtcbiAgICAgIGlmIChtZXRob2ROYW1lICE9PSAnbmFtZScpIHtcbiAgICAgICAgQ2xhc3NbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgJ19fYm9keScsXG4gICAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICAgICAgJyAoY29udGV4dCkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcywgY29udGV4dCkgfTsnXG4gICAgICAgICkoYm9keVdpdGhDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkRXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBldmVudHMgdG8gYSBjb21wb25lbnQuXG4gKiBUaGUgY2FsbCB0byB0aGVzZSBtZXRob2RzIHdpbGwgaW52b2tlIHRoZSB3b3JrZmxvdyBpbiBvcmRlciB0byBjaGVjayB0aGF0IGlucG91dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnRzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gZXZlbnQobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICB2YXIgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyk7XG5cbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgICB2YXIgc3lzdGVtcyA9IFtdO1xuICAgICAgdmFyIHN5c3RlbUlkID0gJ2U4OWM2MTdiNmIxNWQyNCc7XG4gICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGxlbmd0aCA9IC0xO1xuICAgICAgdmFyIG1lc3NhZ2UgPSB7fTtcblxuICAgICAgaWYgKGNsYXNzSWQgPT09ICdfQ2hhbm5lbCcpIHtcbiAgICAgICAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe1xuICAgICAgICAgIG1hc3RlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgc3lzdGVtSWQgPSBzeXN0ZW1zWzBdLl9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UuZnJvbSA9IHN5c3RlbUlkO1xuICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkYXRhLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlLmRhdGEgPSBkYXRhO1xuICAgICAgICBtZXNzYWdlLmV2ZW50ID0gbWV0aG9kTmFtZTtcblxuICAgICAgICAkZGIuX01lc3NhZ2UuaW5zZXJ0KG1lc3NhZ2UpO1xuXG4gICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgc3RhdGU6ICdzZW5kJyxcbiAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGV2ZW50OiBtZXNzYWdlLmV2ZW50LFxuICAgICAgICAgICAgICBmcm9tOiBtZXNzYWdlLmZyb20sXG4gICAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2UuZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgIHN0YXRlOiBtZXRob2ROYW1lLFxuICAgICAgICAgIGRhdGE6IGFyZ3VtZW50c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fYm9keScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgICAgJyAoJyArXG4gICAgICAgICAgcGFyYW1zICtcbiAgICAgICAgICAnKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCcgK1xuICAgICAgICAgIHBhcmFtcyArXG4gICAgICAgICAgJykgfTsnXG4gICAgICApKGJvZHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX2JvZHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgKyBtZXRob2ROYW1lICsgJyAoKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzKSB9OydcbiAgICAgICkoYm9keSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgb24gbWV0aG9kIHRvIGEgY29tcG9uZW50IHRvIGFkZCBiZWhhdmlvcnMgdG8gdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBhZGRPbihDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEksIGlzQ29yZSkge1xuICAgIHZhciBiZWhhdmlvcklkID0gJyc7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuXG4gICAgaWYgKFxuICAgICAgJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBtZXRob2ROYW1lOiAnb24nLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHNcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAkZGIuX0JlaGF2aW9yLmZpbmQoe1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgICB9KS5sZW5ndGggPj0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAkbG9nLmJlaGF2aW9yTm90VW5pcXVlKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoJHdvcmtmbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBoYW5kbGVyKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIHVzZUNvcmVBUEksXG4gICAgICAgICAgICAgIGlzQ29yZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldCh0aGlzLmlkKCkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICR3b3JrZmxvdy5hY3Rpb24oYmVoYXZpb3JJZCwgY3VycmVudFN0YXRlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiZWhhdmlvcklkO1xuICB9O1xuICBDbGFzcy5wcm90b3R5cGUub24gPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEksIGlzQ29yZSkgeyByZXR1cm4gX19ib2R5LmNhbGwodGhpcyxzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEksaXNDb3JlKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEksIGlzQ29yZSkge1xuICAgIHZhciBiZWhhdmlvcklkID0gJyc7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuXG4gICAgaWYgKFxuICAgICAgJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBtZXRob2ROYW1lOiAnb24nLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHNcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAkZGIuX0JlaGF2aW9yLmZpbmQoe1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgICB9KS5sZW5ndGggPj0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAkbG9nLmJlaGF2aW9yTm90VW5pcXVlKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoJHdvcmtmbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBoYW5kbGVyKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIHVzZUNvcmVBUEksXG4gICAgICAgICAgICAgIGlzQ29yZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldCh0aGlzLmlkKCkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICR3b3JrZmxvdy5hY3Rpb24oYmVoYXZpb3JJZCwgY3VycmVudFN0YXRlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiZWhhdmlvcklkO1xuICB9O1xuICBDbGFzcy5vbiA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19ib2R5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSxpc0NvcmUpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkT2ZmQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgb2ZmIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byByZW1vdmUgYmVoYXZpb3JzIGZyb20gdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keShzdGF0ZSwgYmVoYXZpb3JJZCkge1xuICAgIGlmIChcbiAgICAgICR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29mZicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50c1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgYmVoYXZpb3JJZDogYmVoYXZpb3JJZCxcbiAgICAgICAgICBjb21wb25lbnRJZDogY2xhc3NJZCxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9mZihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBDbGFzcy5vZmYgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBvZmYgKHN0YXRlLCBiZWhhdmlvcklkKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgYmVoYXZpb3JJZCkgfTsnXG4gICkoYm9keSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGREZXN0cm95Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkRGVzdHJveUNsYXNzKENsYXNzKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSgpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkKCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIC8vIGlmIG5vdCB2aXJ0dWFsIGNvbXBvbmVudFxuICAgIGlmICgkZGJbaWRdKSB7XG4gICAgICByZXN1bHQgPSAkZGJbaWRdLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG5cbiAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICBjb21wb25lbnRJZDogaWRcbiAgICB9KTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgY29tcG9uZW50SWQ6IHJlc3VsdFtpXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICBzdGF0ZTogJ2Rlc3Ryb3knXG4gICAgfSk7XG4gIH07XG4gIENsYXNzLmRlc3Ryb3kgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fYm9keScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBkZXN0cm95ICgpIHsgcmV0dXJuIF9fYm9keS5jYWxsKHRoaXMpIH07J1xuICApKGJvZHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkQ2xhc3NJbmZvQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgdGhlIGFkZENsYXNzSW5mbyBtZXRob2Qgb24gYSBjbGFzc1xuICovXG5mdW5jdGlvbiBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcykge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uIGJvZHkoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gIH07XG4gIENsYXNzLmNsYXNzSW5mbyA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19ib2R5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIGNsYXNzSW5mbyAoKSB7IHJldHVybiBfX2JvZHkuY2FsbCh0aGlzKSB9OydcbiAgKShib2R5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGZhY3RvcnlcbiAqIEBwYXJhbSB7SlNPTn0gY29uZmlnIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybnMge0NvbXBvbmVudH0gdGhlIGNyZWF0ZWQgY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uXG4gKi9cbmZ1bmN0aW9uIGZhY3RvcnkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICB2YXIgQ2xhc3MgPSB7fTtcbiAgdmFyIGNsYXNzSWQgPSAnJztcblxuICBpZiAodHlwZW9mIGNvbmZpZy5tb2RlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjbGFzc0lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NJZCA9IGNvbmZpZy5tb2RlbDtcbiAgfVxuXG4gIENsYXNzID0gY3JlYXRlQ2xhc3MoY2xhc3NJZCk7XG5cbiAgc3RvcmVbY2xhc3NJZF0gPSBDbGFzcztcblxuICBhZGRJZChDbGFzcywgY2xhc3NJZCk7XG5cbiAgYWRkUHJvcGVydGllcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkRXZlbnRzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuXG4gIC8vIGFkZCBkZWZhdWx0IHByb3BlcnRpZXMvbWV0aG9kcyBvbmx5IGlmIHRoZSBjb21wb25lbnRcbiAgLy8gaW5oZXJpdCBmcm9tIF9Db21wb25lbnRcbiAgaWYgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oY2xhc3NJZCwgJ19Db21wb25lbnQnKSkge1xuICAgIGFkZE9uKENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkRGVzdHJveUNsYXNzKENsYXNzKTtcbiAgICBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcyk7XG4gIH1cblxuICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIDxicj5cbiAqIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWUgPGJyPlxuICogQHJldHVybnMge0NvbXBvbmVudH1cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvblxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShjb25maWcpIHtcbiAgcmV0dXJuIGZhY3RvcnkoY29uZmlnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKiBAZGVzY3JpcHRpb24gRGVzdHJveSBhIGNvbXBvbmVudCBmcm9tIGl0cyBpZFxuICovXG5leHBvcnRzLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGlkKSB7XG4gIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF07XG4gIHZhciBjbGFzc0lkID0gJyc7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICRkYltjbGFzc0lkXS5yZW1vdmUoe1xuICAgICAgX2lkOiBpZFxuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xuICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgY29tcG9uZW50SWQ6IGlkXG4gICAgfSk7XG5cbiAgICAvLyBjYXNlIG9mIEJlaGF2aW9yXG4gICAgaWYgKGNsYXNzSWQgPT09ICdfQmVoYXZpb3InKSB7XG4gICAgICAkYmVoYXZpb3IucmVtb3ZlRnJvbU1lbW9yeShpZCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBjb21wb25lbnQgd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IGZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgZGVsZXRlIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UuXG4gKiBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSBpcyBhIG1pY3JvIE5vU1FMIERhdGFiYXNlIHRoYXQgY29udGFpbnM6XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kXG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuXG4gKlxuICogU3lzdGVtIFJ1bnRpbWUgRGF0YWJhc2UgaXMgY2xvc2VseSBsaW5rZWQgdG8gU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBTeXN0ZW0gUnVudGltZSBjb21wb25lbnRzIGJlY2F1c2U6XG4gKiAtIGFsbCBvcGVyYXRpb25zIGRvbmUgYnkgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLFxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmRcbiAqIC0gcmVtb3ZlIG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGRlc3Ryb3kgYSBjb21wb25lbnQuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgY29sbGVjdGlvbnMgPSBbXTtcbnZhciBpbnRlcm5hbERCID0gW1xuICAnX1J1bnRpbWUnLFxuICAnX1NjaGVtYScsXG4gICdfTW9kZWwnLFxuICAnX0dlbmVyYXRlZE1vZGVsJyxcbiAgJ19CZWhhdmlvcicsXG4gICdfU3RhdGUnLFxuICAnX1R5cGUnLFxuICAnX01ldGFtb2RlbCcsXG4gICdfRGF0YWJhc2UnLFxuICAnX1N5c3RlbScsXG4gICdfQ2xhc3NJbmZvJyxcbiAgJ19NZXNzYWdlJyxcbiAgJ19DaGFubmVsJyxcbiAgJ19Mb2dnZXInLFxuICAnX0xvZydcbl07XG52YXIgY29yZURiID0gW1xuICAnX0xvZycsXG4gICdfU2NoZW1hJyxcbiAgJ19Mb2dnZXInLFxuICAnX01vZGVsJyxcbiAgJ19HZW5lcmF0ZWRNb2RlbCcsXG4gICdfU3RhdGUnLFxuICAnX1R5cGUnXG5dO1xudmFyIGxvZ09yZGVyID0gMDtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBpbmNMb2dPcmRlclxuICogQGRlc2NyaXB0aW9uIEluY3JlbWVudCBMb2dcbiAqL1xuZnVuY3Rpb24gaW5jTG9nT3JkZXIoKSB7XG4gIHJldHVybiBsb2dPcmRlcisrO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybnMge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRHVtcCB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgdmFyIGRiRHVtcCA9IHt9O1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgdmFyIHR5cGVJZCA9ICcnO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgY29sbGVjdGlvbiA9IG51bGw7XG4gIHZhciBzY2hlbWFJZCA9ICcnO1xuICB2YXIgbW9kZWxJZCA9ICcnO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaWQgPSAnJztcblxuICAvLyBzY2hlbWFzXG4gIGRiRHVtcC5zY2hlbWFzID0ge307XG4gIGlmIChleHBvcnRzLl9TY2hlbWEuY291bnQoKSkge1xuICAgIGZvciAoc2NoZW1hSWQgaW4gZXhwb3J0cy5zdG9yZS5fU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmUuX1NjaGVtYVtzY2hlbWFJZF0pKTtcbiAgICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBtb2RlbHNcbiAgZGJEdW1wLm1vZGVscyA9IHt9O1xuICBpZiAoZXhwb3J0cy5fTW9kZWwuY291bnQoKSkge1xuICAgIGZvciAobW9kZWxJZCBpbiBleHBvcnRzLnN0b3JlLl9Nb2RlbCkge1xuICAgICAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmUuX01vZGVsW21vZGVsSWRdKSk7XG4gICAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAgIGRiRHVtcC5tb2RlbHNbbW9kZWxJZF0gPSBtb2RlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0eXBlc1xuICBkYkR1bXAudHlwZXMgPSB7fTtcbiAgaWYgKGV4cG9ydHMuX1R5cGUuY291bnQoKSkge1xuICAgIGZvciAodHlwZUlkIGluIGV4cG9ydHMuc3RvcmUuX1R5cGUpIHtcbiAgICAgIHR5cGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmUuX1R5cGVbdHlwZUlkXSkpO1xuICAgICAgaWYgKCF0eXBlLmNvcmUpIHtcbiAgICAgICAgZGJEdW1wLnR5cGVzW3R5cGUubmFtZV0gPSB0eXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGJlaGF2aW9yc1xuICBkYkR1bXAuYmVoYXZpb3JzID0ge307XG4gIGZvciAoYmVoYXZpb3JJZCBpbiBleHBvcnRzLnN0b3JlLl9CZWhhdmlvcikge1xuICAgIGJlaGF2aW9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9CZWhhdmlvcltiZWhhdmlvcklkXSkpO1xuICAgIGRlbGV0ZSBiZWhhdmlvci5jbGFzc0luZm87XG5cbiAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgIGRiRHVtcC5iZWhhdmlvcnNbYmVoYXZpb3JJZF0gPSBiZWhhdmlvcjtcbiAgICB9XG4gIH1cblxuICAvLyBjb21wb25lbnRzXG4gIGRiRHVtcC5jb21wb25lbnRzID0ge307XG4gIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICBpZiAoZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0uY291bnQoKSkge1xuICAgICAgY29sbGVjdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhwb3J0cy5zdG9yZVtjb2xsZWN0aW9uTmFtZV0pKTtcblxuICAgICAgZm9yIChpZCBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGRlbGV0ZSBjb2xsZWN0aW9uW2lkXS5jbGFzc0luZm87XG5cbiAgICAgICAgaWYgKGNvbGxlY3Rpb25baWRdLl9jb3JlKSB7XG4gICAgICAgICAgZGVsZXRlIGNvbGxlY3Rpb25baWRdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhjb2xsZWN0aW9uKS5sZW5ndGgpIHtcbiAgICAgICAgZGJEdW1wLmNvbXBvbmVudHNbY29sbGVjdGlvbk5hbWVdID0gY29sbGVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGJEdW1wO1xufVxuXG4vKipcbiAqIEBtZXRob2QgY29udGFpbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ugc291cmNlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCB0YXJnZXQgb2JqZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgc291cmNlIG9iamVjdCBjb250YWlucyB0aGUgdGFyZ2V0IG9iamVjdFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGFuIG9iamVjdCBjb250YWlucyBhbm90aGVyIG9uZVxuICovXG5mdW5jdGlvbiBjb250YWlucyhzb3VyY2UsIHRhcmdldCkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIGZpbmRJbkFycmF5ID0gZmFsc2U7XG4gIHZhciBwcm9wZXJ0eSA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkodGFyZ2V0W3Byb3BlcnR5XSkgJiZcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShzb3VyY2VbcHJvcGVydHldKVxuICAgICAgICApIHtcbiAgICAgICAgICBsZW5ndGggPSB0YXJnZXRbcHJvcGVydHldLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XVtpXS50b1N0cmluZygpLm1hdGNoKHNvdXJjZVtwcm9wZXJ0eV0pICE9PSBudWxsXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZmluZEluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0ID0gZmluZEluQXJyYXk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRhcmdldFtwcm9wZXJ0eV0udG9TdHJpbmcoKS5tYXRjaChzb3VyY2VbcHJvcGVydHldKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHRhcmdldFtwcm9wZXJ0eV0pICYmXG4gICAgICAgICAgIUFycmF5LmlzQXJyYXkoc291cmNlW3Byb3BlcnR5XSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRhcmdldFtwcm9wZXJ0eV0uaW5kZXhPZihzb3VyY2VbcHJvcGVydHldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0YXJnZXRbcHJvcGVydHldICE9PSBzb3VyY2VbcHJvcGVydHldKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaW1wU3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgU3lzdGVtIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBTeXN0ZW0gUnVudGltZSBzeXN0ZW1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW1wb3J0IHN5c3RlbSBpbnRvIHRoZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBpbXBTeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGNvbXBvbmVudElkID0gJyc7XG4gIHZhciB0eXBlTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBiZWhhdmlvcklkID0gJyc7XG4gIHZhciBzeXN0ZW1zID0gW107XG4gIHZhciBpZCA9IG51bGw7XG5cbiAgaWYgKGltcG9ydGVkU3lzdGVtKSB7XG4gICAgLy8gcmVtb3ZlIGRlcHJlY2F0ZWQgcHJvcGVydHlcbiAgICBkZWxldGUgaW1wb3J0ZWRTeXN0ZW0uc3Vic3lzdGVtO1xuXG4gICAgLy8gYWRkIHR5cGVzXG4gICAgZm9yICh0eXBlTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS50eXBlcykge1xuICAgICAgJG1ldGFtb2RlbC50eXBlKGltcG9ydGVkU3lzdGVtLnR5cGVzW3R5cGVOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHNjaGVtYXNcbiAgICBmb3IgKHNjaGVtYU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hcykge1xuICAgICAgJG1ldGFtb2RlbC5zY2hlbWEoaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hc1tzY2hlbWFOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIG1vZGVsc1xuICAgIGZvciAobW9kZWxOYW1lIGluIGltcG9ydGVkU3lzdGVtLm1vZGVscykge1xuICAgICAgJG1ldGFtb2RlbC5tb2RlbChpbXBvcnRlZFN5c3RlbS5tb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgfVxuXG4gICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgIC8vIGFkZCBiZWhhdmlvcnNcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICBleHBvcnRzLl9CZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoXG4gICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgaW5mbyBpZiBhbHJlYWR5IGEgbWFzdGVyIHN5c3RlbVxuICAgIHN5c3RlbXMgPSBleHBvcnRzLl9TeXN0ZW0uZmluZCh7XG4gICAgICBtYXN0ZXI6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgIGlmIChzeXN0ZW1zWzBdLl9pZCA9PT0gaW1wb3J0ZWRTeXN0ZW0uX2lkKSB7XG4gICAgICAgIGltcG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyKSB7XG4gICAgICAgICAgc3lzdGVtc1swXS5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluc2VydCB0aGUgc3lzdGVtIGluIERCXG4gICAgZXhwb3J0cy5fU3lzdGVtLmluc2VydChpbXBvcnRlZFN5c3RlbSk7XG5cbiAgICByZXN1bHQgPSBpbXBvcnRlZFN5c3RlbS5faWQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZXhwU3lzdGVtXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIHN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzeXN0ZW0gZnJvbSB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZXhwU3lzdGVtKCkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICB2YXIgc3lzdGVtcyA9IFtdO1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgZGJEdW1wID0gbnVsbDtcbiAgdmFyIG1hc3RlcnN5c3RlbSA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBleHBvcnRlZFN5c3RlbSA9IHt9O1xuXG4gIC8vIGdldCBpZCBvZiB0aGUgbWFzdGVyIHN5c3RlbVxuICBzeXN0ZW1zID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgIG1hc3RlcjogdHJ1ZVxuICB9KTtcblxuICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICBtYXN0ZXJzeXN0ZW0gPSBzeXN0ZW1zWzBdO1xuICAgIGlkID0gbWFzdGVyc3lzdGVtLl9pZDtcblxuICAgIC8vIHByb3BcbiAgICBleHBvcnRlZFN5c3RlbS5faWQgPSBpZDtcbiAgICBleHBvcnRlZFN5c3RlbS5uYW1lID0gbWFzdGVyc3lzdGVtLm5hbWU7XG4gICAgZXhwb3J0ZWRTeXN0ZW0uZGVzY3JpcHRpb24gPSBtYXN0ZXJzeXN0ZW0uZGVzY3JpcHRpb247XG4gICAgZXhwb3J0ZWRTeXN0ZW0udmVyc2lvbiA9IG1hc3RlcnN5c3RlbS52ZXJzaW9uO1xuICAgIGV4cG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG5cbiAgICAvLyBkdW1wXG4gICAgZGJEdW1wID0gZHVtcCgpO1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gZGJEdW1wKSB7XG4gICAgICBpZiAoZGJEdW1wLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICBleHBvcnRlZFN5c3RlbVtjb2xsZWN0aW9uTmFtZV0gPSBkYkR1bXBbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGV4cG9ydGVkU3lzdGVtKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAne30nO1xuICAgICRsb2cubWFzdGVyU3lzdGVtTm90Rm91bmQoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBleHBvcnRTdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgc3ViLXN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzdWItc3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGV4cFN1YnN5c3RlbShwYXJhbXMpIHtcbiAgdmFyIHN5c3RlbSA9IHt9O1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBkZWZhdWx0TmFtZSA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIC8vIGRlZmF1bHQgdmFsdWVzXG4gIHJlc3VsdCA9IGV4cG9ydHMuX1N5c3RlbS5maW5kKHtcbiAgICBtYXN0ZXI6IHRydWVcbiAgfSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgZGVmYXVsdE5hbWUgPSByZXN1bHRbMF0ubmFtZTtcbiAgfVxuXG4gIHN5c3RlbS5uYW1lID0gcGFyYW1zLm5hbWUgfHwgJ3N1Yl8nICsgZGVmYXVsdE5hbWU7XG4gIHN5c3RlbS52ZXJzaW9uID0gcGFyYW1zLnZlcnNpb24gfHwgJzAuMC4xJztcbiAgc3lzdGVtLmRlc2NyaXB0aW9uID0gcGFyYW1zLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gIC8vIHNjaGVtYXNcbiAgc3lzdGVtLnNjaGVtYXMgPSB7fTtcbiAgaWYgKHBhcmFtcy5zY2hlbWFzKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5fU2NoZW1hLmZpbmQocGFyYW1zLnNjaGVtYSk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2NoZW1hID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgc3lzdGVtLnNjaGVtYXNbc2NoZW1hLl9pZF0gPSBzY2hlbWE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZWxzXG4gIHN5c3RlbS5tb2RlbHMgPSB7fTtcbiAgaWYgKHBhcmFtcy5tb2RlbHMpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLl9Nb2RlbC5maW5kKHBhcmFtcy5tb2RlbHMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG1vZGVsID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgICBzeXN0ZW0ubW9kZWxzW21vZGVsLl9pZF0gPSBtb2RlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0eXBlc1xuICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgaWYgKHBhcmFtcy50eXBlcykge1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuX1R5cGUuZmluZChwYXJhbXMudHlwZXMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHR5cGUgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIXR5cGUuX2NvcmUpIHtcbiAgICAgICAgc3lzdGVtLnR5cGVzW3R5cGUuX2lkXSA9IHR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYmVoYXZpb3JzXG4gIHN5c3RlbS5iZWhhdmlvcnMgPSB7fTtcbiAgaWYgKHBhcmFtcy5iZWhhdmlvcnMpIHtcbiAgICBiZWhhdmlvciA9IGV4cG9ydHMuX0JlaGF2aW9yLmZpbmQocGFyYW1zLmJlaGF2aW9ycyk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYmVoYXZpb3IgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvci5faWRdID0gYmVoYXZpb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcG9uZW50c1xuICBzeXN0ZW0uY29tcG9uZW50cyA9IHt9O1xuICBpZiAocGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICBmb3IgKGNsYXNzTmFtZSBpbiBwYXJhbXMuY29tcG9uZW50cykge1xuICAgICAgaWYgKGV4cG9ydHNbY2xhc3NOYW1lXSkge1xuICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdID0ge307XG5cbiAgICAgICAgcmVzdWx0ID0gZXhwb3J0c1tjbGFzc05hbWVdLmZpbmQocGFyYW1zLmNvbXBvbmVudHNbY2xhc3NOYW1lXSk7XG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbXBvbmVudCA9IHJlc3VsdFtpXTtcbiAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdW2NvbXBvbmVudC5faWRdID0gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN5c3RlbSk7XG59XG5cbi8qIFB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbi8qKlxuICogQHByb3BlcnR5IHtKU09OfSBzdG9yZVxuICogQGRlc2NyaXB0aW9uIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHN0b3JlIHRoYXQgbGlzdHMgYWxsIHRoZSBjb2xsZWN0aW9uc1xuICovXG5leHBvcnRzLnN0b3JlID0ge307XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQGNsYXNzIERhdGFiYXNlQ29sbGVjdGlvblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBuZXcgY29sbGVjdGlvblxuICogQEBkZXNjcmlwdGlvbiBBIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRzIG1hbmFnZWQgYnkgU3lzdGVtIFJ1bnRpbWUuXG4gKiBJbnRlcm5hbCBjb2xsZWN0aW9ucyBtYW5hZ2UgY29yZSBvYmplY3RzIG9mIFN5c3RlbSBSdW50aW1lIChzY2hlbWEsIHR5cGUsIC4uLikuXG4gKiBQdWJsaWMgY29sbGVjdGlvbnMgbWFuYWdlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuXG4gKi9cbnZhciBEYXRhYmFzZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBEYXRhYmFzZUNvbGxlY3Rpb24obmFtZSkge1xuICBpZiAoJG1ldGFtb2RlbC5nZXRTY2hlbWEobmFtZSkgfHwgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgIGV4cG9ydHMuc3RvcmVbbmFtZV0gPSB7fTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGlmIChpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICBjb2xsZWN0aW9ucy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGZpbmRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeVxuICogQHJldHVybnMge0FycmF5fSBBcnJheSBvZiBkb2N1bWVudHMgdGhhdCBtYXAgdGhlIHF1ZXJ5XG4gKiBAZGVzY3JpcHRpb24gRmluZCBhIGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLlBlcnNvbi5maW5kKHsnbmFtZSc6ICdsYXVyZSd9KTtcbiAqICRkYi5QZXJzb24uZmluZCh7J25hbWUnOiAnbGF1cmUnLCAnYWdlJyA6IDI0fSk7XG4gKiAkZGIuUGVyc29uLmZpbmQoW3snbmFtZSc6ICdyZW5lJ30sIHsnbmFtZSc6ICdyb2JlcnQnfV0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kKHF1ZXJ5KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHJlc3VsdElkID0ge307XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgb2JqZWN0ID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICBxdWVyeS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiBtdWx0aVNlYXJjaChjcml0ZXJpYSkge1xuICAgICAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0SWRbaWRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0SWRbaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICBpZiAoY29udGFpbnMocXVlcnksIG9iamVjdCkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgcmVzdWx0LnB1c2gob2JqZWN0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluc2VydFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGRvY3VtZW50IGEgbmV3IG9iamVjdCB0byBhZGRcbiAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgb2YgaWQgY3JlYXRlZFxuICogQGRlc2NyaXB0aW9uIEluc2VydCBhbiBuZXcgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi5cbiAqIEJlZm9yZSBpbnNlcnRpbmcgdGhlIGRvY3VtZW50LCBTeXN0ZW0gUnVudGltZSBjaGVja3MgdGhhdCB0aGUgZG9jdW1lbnQgaXMgY29tcGxpYW50XG4gKiB3aXRoIGl0cyBjbGFzcyBkZWZpbml0aW9uLlxuICogVGhlbiwgYWZ0ZXIgaW5zZXJ0aW5nIGl0LCB3ZSBjcmVhdGUgdGhlIGNvbXBvbmVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLlBlcnNvbi5pbnNlcnQoe1xuICogICAgICAnbmFtZSc6ICdib2InLFxuICogICAgICAnZmlyc3ROYW1lJzogJ1NhaW50LUNsYXInLFxuICogICAgICAnYWdlJzogNDNcbiAqIH0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChkb2N1bWVudCkge1xuICB2YXIgZG9jID0gW107XG4gIHZhciBDb21wb25lbnQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZG9jdW1lbnQpKSB7XG4gICAgZG9jID0gZG9jdW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgZG9jLnB1c2goZG9jdW1lbnQpO1xuICB9XG5cbiAgZG9jLmZvckVhY2goXG4gICAgZnVuY3Rpb24gbXVsdGlJbnNlcnQob2JqKSB7XG4gICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgIHZhciBjaGFubmVscyA9IFtdO1xuICAgICAgdmFyIGNoYW5uZWwgPSBudWxsO1xuICAgICAgdmFyIHN5c3RlbXMgPSBbXTtcblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX1NjaGVtYSc6XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX0xvZ2dlcic6XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX01vZGVsJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfVHlwZSc6XG4gICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnX0dlbmVyYXRlZE1vZGVsJzpcbiAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3Qob2JqLCAkbWV0YW1vZGVsLmdldE1vZGVsKHRoaXMubmFtZSkpOlxuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLl9pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9iai5faWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkbWV0YW1vZGVsLnByZXBhcmVPYmplY3Qob2JqLCAkbWV0YW1vZGVsLmdldE1vZGVsKHRoaXMubmFtZSkpO1xuXG4gICAgICAgICAgZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW29iai5faWRdID0gb2JqO1xuXG4gICAgICAgICAgQ29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICBpZiAoQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG9iaik7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb21wb25lbnQuaWQoKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKCdpbnNlcnQnLCB0aGlzLm5hbWUsIG9iai5faWQsICcnLCBvYmopO1xuXG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBvYmpcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSAnX01lc3NhZ2UnKSB7XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICBjaGFubmVscyA9IGV4cG9ydHMuX0NoYW5uZWwuZmluZCh7fSk7XG4gICAgICAgICAgICAgIHZhciBsZW5ndGggPSBjaGFubmVscy5sZW5ndGg7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsID0gJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZShjaGFubmVsc1tpXS5faWQpO1xuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGNoYW5uZWxzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBvYmouZXZlbnQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBvYmouZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgJGxvZy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KG9iaiwgdGhpcy5uYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcylcbiAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgdXBkYXRlIHRvIG1ha2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiB7Qm9vbGVhbn0gdXBzZXJ0IHRydWUgaWYgd2UgY3JlYXRlIGEgZG9jdW1lbnQgd2hlbiBubyBkb2N1bWVudCBpcyBmb3VuZCBieSB0aGUgcXVlcnlcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IE51bWJlciBvZiBkb2N1bWVudHMgdXBkYXRlZFxuICogQGRlc2NyaXB0aW9uIFVwZGF0ZSBkb2N1bWVudHMgaW50byBhIGNvbGxlY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLkNhcnMudXBkYXRlKHsnY29kZSc6ICdBWkQtNzEnfSwgeydwcmljZSc6ICcxMDAwMCQnfSk7XG4gKiAkZGIuQ2Fycy51cGRhdGUoW3snY29kZSc6ICdBWkQtNzEnfSwgeydjb2RlJzogJ0FaRC02NSd9XSwgeydwcmljZSc6ICcxMDAwMCQnfSk7XG4gKiAkZGIuQ2Fycy51cGRhdGUoeydjb2RlJzogJ0FaRC03MSd9LCB7J3ByaWNlJzogJzEwMDAwJCd9LCB7J3Vwc2VydCc6IHRydWV9KTtcbiAqL1xuRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUocXVlcnksIHVwZGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZG9jcyA9IHRoaXMuZmluZChxdWVyeSk7XG4gIHZhciB1cGRhdGVkID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gZG9jcy5sZW5ndGg7XG4gIHZhciBhdHRyaWJ1dGVOYW1lID0gJyc7XG4gIHZhciBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldE1vZGVsKHRoaXMubmFtZSk7XG4gIHZhciB0eXBlID0gJyc7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy51cHNlcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucy51cHNlcnQgPSBvcHRpb25zLnVwc2VydCB8fCBmYWxzZTtcbiAgfVxuXG4gIGlmICh1cGRhdGUpIHtcbiAgICAvLyB1cHNlcnQgY2FzZVxuICAgIGlmIChsZW5ndGggPT09IDAgJiYgb3B0aW9ucy51cHNlcnQpIHtcbiAgICAgIGlmIChxdWVyeS5faWQpIHtcbiAgICAgICAgdXBkYXRlLl9pZCA9IHF1ZXJ5Ll9pZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5zZXJ0KHVwZGF0ZSk7XG4gICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBjYXNlIG9mIHVwZGF0ZSBvZiBfaWRcbiAgICAgIGlmICh0eXBlb2YgdXBkYXRlLl9pZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdXBkYXRlLl9pZCAhPT0gZG9jc1tpXS5faWQpIHtcbiAgICAgICAgJGxvZy51cGRhdGVVdWlkKFxuICAgICAgICAgIGRvY3NbaV0uX2lkLFxuICAgICAgICAgIHVwZGF0ZS5faWQsXG4gICAgICAgICAgdHlwZW9mICRjb21wb25lbnQuZ2V0KHVwZGF0ZS5faWQpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGF0dHJpYnV0ZU5hbWUgaW4gdXBkYXRlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jc1tpXVthdHRyaWJ1dGVOYW1lLnNwbGl0KCcuJylbMF1dICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubmFtZSAhPT0gJ19TY2hlbWEnICYmXG4gICAgICAgICAgICB0aGlzLm5hbWUgIT09ICdfTW9kZWwnICYmXG4gICAgICAgICAgICB0aGlzLm5hbWUgIT09ICdfR2VuZXJhdGVkTW9kZWwnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICB0eXBlID0gJyc7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAkbWV0YW1vZGVsLmdldE1vZGVsUGF0aFR5cGUodGhpcy5uYW1lLCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXS50eXBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh1cGRhdGVbYXR0cmlidXRlTmFtZV0sIHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG5cbiAgICAgICAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZyhcbiAgICAgICAgICAgICAgICAgICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1cGRhdGVbYXR0cmlidXRlTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW3VwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW3VwZGF0ZVthdHRyaWJ1dGVOYW1lXV1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdLFxuICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICBkb2NzW2ldLl9pZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUT0RPIG1vcmUgY2hlY2sgaW4gY2FzZSBvZiBzY2hlbWEgdXBkYXRlXG4gICAgICAgICAgICBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdID0gdXBkYXRlW2F0dHJpYnV0ZU5hbWVdO1xuXG4gICAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZyhcbiAgICAgICAgICAgICAgJ3VwZGF0ZScsXG4gICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICBpZDogZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICBmaWVsZDogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB1cGRhdGVbYXR0cmlidXRlTmFtZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdXBkYXRlZDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gcmVtb3ZlXG4gKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgZG9jdW1lbnRzIGlkIHJlbW92ZWRcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBkb2N1bWVudCBmcm9tIHRoZSBjb2xsbGVjdGlvbi5cbiAqIFdoZW4gYSBkb2N1bWVudCBpcyByZW1vdmVkLCB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLkNhcnMucmVtb3ZlKHsnY29kZSc6ICdBWkQtNzEnfSk7XG4gKiAkZGIuQ2Fycy5yZW1vdmUoW3snY29kZSc6ICdBWkQtNzEnfSwgeydjb2RlJzogJ0FaRC02NSd9XSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHF1ZXJ5KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGlkID0gJyc7XG4gIHZhciBjb21wb25lbnQgPSBudWxsO1xuICB2YXIgb2JqZWN0ID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICBxdWVyeS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiBtdWx0aVJlbW92ZShjcml0ZXJpYSkge1xuICAgICAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICBpZiAoY29udGFpbnMoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgIC5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgIGlmIChjb250YWlucyhxdWVyeSwgb2JqZWN0KSkge1xuICAgICAgICAgIGRlbGV0ZSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgIC5yZW1vdmUoe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKCdyZW1vdmUnLCB0aGlzLm5hbWUsIGlkLCAnJywgJycpO1xuXG4gICAgICBpZiAoY29yZURiLmluZGV4T2YodGhpcy5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAkaGVscGVyXG4gICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgLnJlbW92ZSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNvdW50XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ291bnQgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAqL1xuRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCkge1xuICB2YXIgcmVzdWx0ID0gMDtcbiAgdmFyIG9iamVjdElkID0gJyc7XG5cbiAgZm9yIChvYmplY3RJZCBpbiBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICByZXN1bHQrKztcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUxvZ1xuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvbiBDUlVEIGFjdGlvbiB0aGF0IGhhcHBlbm5lZFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb24gY29sbGVjdGlvbiBvZiB0aGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgZmllbGQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlIG9mIHRoZSBmaWVsZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgTG9nXG4gKi9cbmV4cG9ydHMuY3JlYXRlTG9nID0gZnVuY3Rpb24gY3JlYXRlTG9nKGFjdGlvbiwgY29sbGVjdGlvbiwgaWQsIGZpZWxkLCB2YWx1ZSkge1xuICB2YXIgbG9nSWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcblxuICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbiB8fCAnJztcbiAgaWQgPSBpZCB8fCAnJztcbiAgZmllbGQgPSBmaWVsZCB8fCAnJztcbiAgdmFsdWUgPSB2YWx1ZSB8fCAnJztcblxuICAvLyBjbGVhbiBsb2cgZXZlcnkgMTAwMCBsb2dzXG4gIGlmIChPYmplY3Qua2V5cyhleHBvcnRzLnN0b3JlLl9Mb2cpLmxlbmd0aCA+IDEwMDApIHtcbiAgICBleHBvcnRzLnN0b3JlLl9Mb2cgPSB7fTtcbiAgfVxuXG4gIGV4cG9ydHMuc3RvcmUuX0xvZ1tsb2dJZF0gPSB7XG4gICAgX2lkOiBsb2dJZCxcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgIGlkOiBpZCxcbiAgICBmaWVsZDogZmllbGQsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9yZGVyOiBpbmNMb2dPcmRlcigpXG4gIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBuZXcgRGF0YWJhc2VDb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY29sbGVjdGlvbiA9IGZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xuICBleHBvcnRzW25hbWVdID0gbmV3IERhdGFiYXNlQ29sbGVjdGlvbihuYW1lKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbXBvcnRTeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBTeXN0ZW0gUnVudGltZSBzeXN0ZW0gdG8gaW1wb3J0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIFN5c3RlbSBSdW50aW1lIHN5c3RlbVxuICogQGRlc2NyaXB0aW9uIEltcG9ydCBhIHN5c3RlbSBpbnRvIHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmltcG9ydFN5c3RlbSA9IGZ1bmN0aW9uIGltcG9ydFN5c3RlbShpbXBvcnRlZFN5c3RlbSkge1xuICByZXR1cm4gaW1wU3lzdGVtKGltcG9ydGVkU3lzdGVtKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBleHBvcnRTeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgc3lzdGVtXG4gKiBAZGVzY3JpcHRpb24gRXhwb3J0IGEgc3lzdGVtXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5leHBvcnRTeXN0ZW0oKTsgLy8gZXhwb3J0IGFsbCB0aGUgc3lzdGVtXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnc2NoZW1hcyc6eyduYW1lJzonUGVyc29uJ319KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsndHlwZXMnOnsnbmFtZSc6J2FkZHJlc3MnfX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnYmVoYXZpb3JzJzp7J2NvbXBvbmVudCc6J2xhdXJlJ319KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBiZWhhdmlvcnNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeydjb21wb25lbnRzJzp7J1BlcnNvbic6IHsnY291bnRyeSc6ICdGcmFuY2UnfX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzXG4gKiAkZGIuZXhwb3J0U3lzdGVtKHsnc2NoZW1hcyc6eyduYW1lJzonUGVyc29uJ30sJ2NvbXBvbmVudHMnOnsnUGVyc29uJzogeydjb3VudHJ5JzogJ0ZyYW5jZSd9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZXhwb3J0cy5leHBvcnRTeXN0ZW0gPSBmdW5jdGlvbiBleHBvcnRTeXN0ZW0ocGFyYW1zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBpZiAocGFyYW1zKSB7XG4gICAgcmVzdWx0ID0gZXhwU3Vic3lzdGVtKHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZXhwU3lzdGVtKCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIENsZWFyIHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuXG4gIC8vIHJlbW92ZSBjb2xsZWN0aW9uc1xuICBsZW5ndGggPSBjb2xsZWN0aW9ucy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbnNbaV07XG4gICAgZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0ucmVtb3ZlKCk7XG4gIH1cblxuICAvLyByZW1vdmUgaW50ZXJuYWwgY29sbGVjdGlvbnNcbiAgbGVuZ3RoID0gaW50ZXJuYWxEQi5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gaW50ZXJuYWxEQltpXTtcbiAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluaXRcbiAqIEBkZXNjcmlwdGlvbiBJbml0IHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICB2YXIgcnVudGltZVN5c3RlbUlkID0gJyc7XG4gIHZhciBydW50aW1lU3lzdGVtID0gbnVsbDtcblxuICBydW50aW1lU3lzdGVtID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgIF9pZDogJ2U4OWM2MTdiNmIxNWQyNCdcbiAgfSlbMF07XG5cbiAgLy8gY2xlYXIgYWxsIHRoZSBkYXRhIGluIG1lbW9yeVxuICBleHBvcnRzLmNsZWFyKCk7XG4gICRjb21wb25lbnQuY2xlYXIoKTtcbiAgJG1ldGFtb2RlbC5jbGVhcigpO1xuICAkc3RhdGUuY2xlYXIoKTtcbiAgJGJlaGF2aW9yLmNsZWFyKCk7XG5cbiAgLy8gaW5pdCBtZXRhbW9kZWxcbiAgJG1ldGFtb2RlbC5pbml0KCk7XG5cbiAgLy8gcmVpbXBvcnQgU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAgcnVudGltZVN5c3RlbUlkID0gZXhwb3J0cy5pbXBvcnRTeXN0ZW0ocnVudGltZVN5c3RlbSk7XG4gICRjb21wb25lbnQuZ2V0KHJ1bnRpbWVTeXN0ZW1JZCkuc3RhcnQoKTtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGhlbHBlclxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdXNlZCBieSBhbGwgdGhlIG1vZHVsZXNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydHkgKi9cblxudmFyIHJ1bnRpbWVSZWYgPSBudWxsO1xuXG4vKiBQdWJsaWMgbWV0aG9kICovXG5cbi8qKlxuICogQG1ldGhvZCBpc1J1bnRpbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIFN5c3RlbSBSdW50aW1lIGluc3RhbmNlIGV4aXN0c1xuICovXG5leHBvcnRzLmlzUnVudGltZSA9IGZ1bmN0aW9uIGlzUnVudGltZSgpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gIGlmICgkZGIuX1J1bnRpbWUgJiYgJGRiLl9SdW50aW1lLmZpbmQoKS5sZW5ndGgpIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSdW50aW1lXG4gKiBAcmV0dXJucyB7X1J1bnRpbWV9IFN5c3RlbSBSdW50aW1lIGluc3RhbmNlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBTeXN0ZW0gUnVudGltZSBpbnN0YW5jZVxuICovXG5leHBvcnRzLmdldFJ1bnRpbWUgPSBmdW5jdGlvbiBnZXRSdW50aW1lKCkge1xuICB2YXIgcnVudGltZUlkID0gJyc7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmICghcnVudGltZVJlZikge1xuICAgIHJ1bnRpbWVJZCA9ICRkYi5fUnVudGltZS5maW5kKClbMF0uX2lkO1xuICAgIHJ1bnRpbWVSZWYgPSAkY29tcG9uZW50LmdldChydW50aW1lSWQpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bnRpbWVSZWY7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybnMge1N0cmluZ30gYSB1dWlkXG4gKiBAZGVzY3JpcHRpb24gR2VuZXJhdGUgYSB1dWlkXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG4gIGZ1bmN0aW9uIGdlbigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJlZml4KCkge1xuICAgIHZhciB2YWxpZFByZWZpeCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gICAgcmV0dXJuIHZhbGlkUHJlZml4LmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFByZWZpeC5sZW5ndGgpKTtcbiAgfVxuXG4gIHJldHVybiBnZXRQcmVmaXgoKSArIGdlbigpICsgZ2VuKCkgKyBnZW4oKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBwb2x5ZmlsbFxuICogQGRlc2NyaXB0aW9uIEFkZCBQb2x5ZmlsbFxuICovXG5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gIC8vIGZpeGluZyBjb25zdHJ1Y3Rvci5uYW1lIHByb3BlcnR5IGluIElFXG4gIC8vIHRha2VuIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTE0MDcyMy9jb25zdHJ1Y3Rvci1uYW1lLWlzLXVuZGVmaW5lZC1pbi1pbnRlcm5ldC1leHBsb3JlclxuICBpZiAoXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09IHVuZGVmaW5lZCAmJlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICduYW1lJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgICAgIHZhciByZXN1bHRzID0gZnVuY05hbWVSZWdleC5leGVjKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSA/IHJlc3VsdHNbMV0udHJpbSgpIDogJyc7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHt9XG4gICAgfSk7XG4gIH1cbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxvZ1xuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdGhhdCB3cml0ZSBhIGxvZ1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBJRCA9ICdfaWQnO1xudmFyIE5BTUUgPSAnX25hbWUnO1xudmFyIGN1cnJlbnRMZXZlbCA9ICd3YXJuJztcbnZhciBsb2dnZXJSZWYgPSBudWxsO1xudmFyIGZha2VMb2dnZXJSZWYgPSB7XG4gIGN1cnJlbnRMZXZlbDogJ3dhcm4nLFxuICBsZXZlbDogZnVuY3Rpb24gZGVidWcobGV2ZWxOYW1lKSB7XG4gICAgaWYgKGxldmVsTmFtZSkge1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBsZXZlbE5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbDtcbiAgfSxcbiAgZGVidWc6IGZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdkZWJ1ZycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBpbmZvOiBmdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdpbmZvJyB8fCB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgY29uc29sZS5pbmZvKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICB3YXJuOiBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2luZm8nIHx8XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ3dhcm4nIHx8XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJ1xuICAgICkge1xuICAgICAgY29uc29sZS53YXJuKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHJldHVybiB7X0xvZ2dlcn0gX0xvZ2dlciBpbnN0YW5jZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIF9Mb2dnZXIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gZ2V0TG9nZ2VyKCkge1xuICB2YXIgbG9nZ2VySWQgPSAnJztcbiAgdmFyIGxvZ2dlcnMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCEkbWV0YW1vZGVsLmdldE1vZGVsKCdfTG9nZ2VyJykpIHtcbiAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICB9IGVsc2Uge1xuICAgIGxvZ2dlcnMgPSAkZGIuX0xvZ2dlci5maW5kKCk7XG4gICAgaWYgKGxvZ2dlcnMubGVuZ3RoKSB7XG4gICAgICBsb2dnZXJJZCA9IGxvZ2dlcnNbMF1bSURdO1xuXG4gICAgICBpZiAoJGNvbXBvbmVudC5nZXQobG9nZ2VySWQpKSB7XG4gICAgICAgIGxvZ2dlclJlZiA9ICRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKTtcbiAgICAgICAgcmVzdWx0ID0gbG9nZ2VyUmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgbGV2ZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBsZXZlbE5hbWUgbmFtZSBvZiB0aGUgbGV2ZWxcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIGxldmVsIG9mIHRoZSBsb2dcbiAqL1xuZXhwb3J0cy5sZXZlbCA9IGZ1bmN0aW9uIGxldmVsKGxldmVsTmFtZSkge1xuICBjdXJyZW50TGV2ZWwgPSBsZXZlbE5hbWU7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqIEBkZXNjcmlwdGlvbiBBIHByb3BlcnR5IG9mIGEgc2NoZW1hIGlzIHVua25vd25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHkgPSBmdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICBpZiAoc2NoZW1hW05BTUVdKSB7XG4gICAgbWVzc2FnZSA9XG4gICAgICBcInVua25vd24gcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mICdcIiArXG4gICAgICBzY2hlbWFbTkFNRV0gK1xuICAgICAgXCInXCI7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIGEgbW9kZWxcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4obWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZSA9IGZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGUoXG4gIHByb3BlcnR5TmFtZSxcbiAgdHlwZSxcbiAgcHJvcGVydHlcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICB0eXBlb2YgcHJvcGVydHkgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHZhbHVlIGZvciB0eXBlIGVudW1cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRW51bVZhbHVlID0gZnVuY3Rpb24gaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiJ1wiICsgdmFsdWUgKyBcIicgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIHR5cGUgZW51bSAnXCIgKyB0eXBlICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uc3RydWN0b3JOYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudCBjbGFzc1xuICogQGRlc2NyaXB0aW9uIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2xhc3NOYW1lID0gZnVuY3Rpb24gaW52YWxpZENsYXNzTmFtZShcbiAgY29tcG9uZW50SWQsXG4gIHR5cGUsXG4gIGNvbnN0cnVjdG9yTmFtZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGNvbXBvbmVudCAnXCIgK1xuICAgICAgY29tcG9uZW50SWQgK1xuICAgICAgXCInOiBleHBlY3RlZCAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIicgaW5zdGVhZCBvZiAnXCIgK1xuICAgICAgY29uc3RydWN0b3JOYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gTWlzc2luZyBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5ID0gZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5KHByb3BlcnR5TmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ0ltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtaXNzaW5nIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nXG4gKi9cbmV4cG9ydHMubWlzc2luZ0ltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gbWlzc2luZ0ltcGxlbWVudGF0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmcuXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlSW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVJbXAgPSBmdW5jdGlvbiBpbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLmVycm9yKFxuICAgIFwidGhlIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eSArXG4gICAgICBcIicgb2YgdGhlIG1vZGVsICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInIGlzIGludmFsaWRcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gTWlzc2luZyBhIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy5taXNzaW5nUHJvcGVydHlJbXAgPSBmdW5jdGlvbiBtaXNzaW5nUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHkgK1xuICAgICAgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5SW1wID0gZnVuY3Rpb24gdW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBzY2hlbWEpIHtcbiAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgXCJ0aGUgbW9kZWwgJ1wiICsgc2NoZW1hICsgXCInIGhhcyBhbiB1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGEgdHlwZSBkZWZpbml0aW9uXG4gKiBAZGVzY3JpcHRpb24gIFRyeSB0byBhZGQgYW4gaW52YWxpZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSB0eXBlICdcIiArIG5hbWUgKyBcIicgaXMgbm90IHZhbGlkXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgcHJvcGVydHkgbmFtZVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eU5hbWUgPSBmdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlOYW1lKFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBwcm9wZXJ0eU5hbWUsXG4gIHByb3BlcnR5VmFsdWUsXG4gIHR5cGVcbikge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgK1xuICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGlkICtcbiAgICAgICAgXCInXCIgK1xuICAgICAgICBjbGFzc0luZm8gK1xuICAgICAgICBcIjogZXhwZWN0ZWQgJ1wiICtcbiAgICAgICAgdHlwZS5yZXBsYWNlKCdAJywgJycpICtcbiAgICAgICAgXCInIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgICAgdHlwZW9mIHByb3BlcnR5VmFsdWUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSB0eXBlICdcIiArXG4gICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkICdzdHJpbmcnIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgICAgdHlwZW9mIHR5cGUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCByZWFkT25seVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBUcnlpbmcgdG8gc2V0IGEgcmVhZC1vbmx5IHByb3BlcnR5XG4gKi9cbmV4cG9ydHMucmVhZE9ubHlQcm9wZXJ0eSA9IGZ1bmN0aW9uIHJlYWRPbmx5UHJvcGVydHkoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHByb3BlcnR5TmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiY2FuIG5vdCBzZXQgcmVhZC1vbmx5IHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCIgK1xuICAgICAgY2xhc3NJbmZvXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZERvY3VtZW50T25EYkluc2VydFxuICogQHBhcmFtIHtTdHJpbmd9IGRvYyBhIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBkb2N1bWVudCBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0ID0gZnVuY3Rpb24gaW52YWxpZERvY3VtZW50T25EYkluc2VydChcbiAgZG9jLFxuICBjb2xsZWN0aW9uTmFtZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGRvY3VtZW50ICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShkb2MpLnJlcGxhY2UoLywvZywgJywgJykgK1xuICAgICAgXCInIG9uIGFuIGluc2VydCBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgK1xuICAgICAgY29sbGVjdGlvbk5hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiAgSW52YWxpZCBwcm9wZXJ0eSBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKFxuICBjb2xsZWN0aW9uTmFtZSxcbiAgaWQsXG4gIHByb3BlcnR5TmFtZSxcbiAgcHJvcGVydHlWYWx1ZSxcbiAgdHlwZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgd2hlbiB0cnlpbmcgdG8gdXBkYXRlIHRoZSBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvZiBkb2N1bWVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInIChjb2xsZWN0aW9uICdcIiArXG4gICAgICBjb2xsZWN0aW9uTmFtZSArXG4gICAgICBcIicpIHdpdGggdGhlIHZhbHVlICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShwcm9wZXJ0eVZhbHVlKSArXG4gICAgICBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFVua29udyBwcm9wZXJ0eSBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlID0gZnVuY3Rpb24gdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShcbiAgcHJvcGVydHlOYW1lLFxuICBjb2xsZWN0aW9uTmFtZSxcbiAgaWRcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidW5rbm93biBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICtcbiAgICAgIGNvbGxlY3Rpb25OYW1lICtcbiAgICAgIFwiJyB3aXRoIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQGRlc2NyaXB0aW9uIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzc1xuICovXG5leHBvcnRzLnVua25vd25NZXRob2QgPSBmdW5jdGlvbiB1bmtub3duTWV0aG9kKGNsYXNzSWQsIG1ldGhvZE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeSB0byBjYWxsIGFuIHVua25vd24gbWV0aG9kICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBmb3IgdGhlIGNsYXNzICdcIiArXG4gICAgICBjbGFzc0lkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENvbGxlY3Rpb25OYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGNyZWF0ZSBhbiBpbnZhbGlkIERhdGFiYXNlQ29sbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWRDb2xsZWN0aW9uTmFtZSA9IGZ1bmN0aW9uIGludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIG5hbWUgZm9yIGNyZWF0aW5nIHRoZSBjb2xsZWN0aW9uICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJzogdGhlcmUgaXMgbm8gc2NoZW1hICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpbiB0aGUgbWV0YW1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFR5cGUgZXhwZWN0ZWQgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgY3VycmVudCB0eXBlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIHJlc3VsdCBvZiBhIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRSZXN1bHRUeXBlID0gZnVuY3Rpb24gaW52YWxpZFJlc3VsdFR5cGUoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWUsXG4gIGV4cGVjdGVkVHlwZSxcbiAgdHlwZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGlmICh0eXBlKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgK1xuICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgICAgZXhwZWN0ZWRUeXBlLnJlcGxhY2UoJ0AnLCAnJykgK1xuICAgICAgICBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArXG4gICAgICAgIHR5cGUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgK1xuICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgICAgZXhwZWN0ZWRUeXBlLnJlcGxhY2UoJ0AnLCAnJykgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWYgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFVua25vd24gY2xhc3NcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ1bmtvd24gY2xhc3MgY29tcG9uZW50ICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInIGZvciBjb21wb25lbnQgJ1wiICtcbiAgICAgIGNvbXBvbmVudElkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgU3lzdGVtIFJ1bnRpbWUgd29ya2Zsb3cgaGFzIGJlZW4gcmVzdGFydGVkXG4gKi9cbmV4cG9ydHMud29ya2Zsb3dSZXN0YXJ0ZWQgPSBmdW5jdGlvbiB3b3JrZmxvd1Jlc3RhcnRlZCgpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybigncnVudGltZSBoYXMgYmVlbiByZXN0YXJ0ZWQnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbU51bWJlciA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlcihcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGNsYXNzSW5mb1xuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogQGRlc2NyaXB0aW9uICBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1UeXBlID0gZnVuY3Rpb24gaW52YWxpZFBhcmFtVHlwZShcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZSxcbiAgcGFyYW1OYW1lXG4pIHtcbiAgdmFyIGNsYXNzSW5mbyA9ICcnO1xuXG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBjbGFzc0luZm8gPSBcIiAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKVwiO1xuICB9XG4gIGlmIChwYXJhbU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgK1xuICAgICAgICBwYXJhbU5hbWUgK1xuICAgICAgICBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mb1xuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBhIHBhcmFtZXRlciB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciB0byBhIHN0YXRlXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3JOb3RVbmlxdWUgPSBmdW5jdGlvbiBiZWhhdmlvck5vdFVuaXF1ZShpZCwgc3RhdGVOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gYWRkIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgZm9yIHRoZSBzdGF0ZSAnXCIgK1xuICAgICAgc3RhdGVOYW1lICtcbiAgICAgIFwiJyBvbiBjbGFzcyAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT24gPSBmdW5jdGlvbiBpbnZhbGlkU3RhdGVPbihpZCwgc3RhdGVOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiB1bmt3b3duIHN0YXRlICdcIiArXG4gICAgICBzdGF0ZU5hbWUgK1xuICAgICAgXCInIG9uIGNsYXNzICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIFRoZSBjYWxsIHRvIGEgcmVtb3ZlIHN0YXRlIG9mIHRoZSBiZWhhdmlvciBtb2R1bGUgaXMgaW52YWxpZFxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9mZiA9IGZ1bmN0aW9uIGludmFsaWRTdGF0ZU9mZihpZCwgc3RhdGVOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gcmVtb3ZlIGEgYmVoYXZpb3IgZnJvbSBhbiB1bmt3b3duIHN0YXRlICdcIiArXG4gICAgICBzdGF0ZU5hbWUgK1xuICAgICAgXCInIG9uIGNsYXNzICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1hc3RlclN5c3RlbU5vdEZvdW5kXG4gKiBAZGVzY3JpcHRpb24gVGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kXG4gKi9cbmV4cG9ydHMubWFzdGVyU3lzdGVtTm90Rm91bmQgPSBmdW5jdGlvbiBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybignY2FuIG5vdCBleHBvcnQgdGhlIGRhdGFiYXNlIGJlY2F1c2Ugbm8gc3lzdGVtIHdhcyBkZWZpbmVkJyk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIGV4cGVjdGVjIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGUgPSBmdW5jdGlvbiBpbnZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgdHlwZSBmb3IgdmFsdWUgJ1wiICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArXG4gICAgICBcIic6IGV4cGVjdGVkICdcIiArXG4gICAgICB0eXBlTmFtZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWVcbiAqIEBkZXNjcmlwdGlvbiBVbmtub3duIHR5cGVcbiAqL1xuZXhwb3J0cy51bmtub3duVHlwZSA9IGZ1bmN0aW9uIHVua25vd25UeXBlKHZhbHVlKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ1bmtub3duIHR5cGUgZm9yIHZhbHVlICdcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjYW5Ob3RZZXRWYWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBBIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gYWxyZWF5IGNyZWF0ZWRcbiAqL1xuZXhwb3J0cy5jYW5Ob3RZZXRWYWxpZGF0ZSA9IGZ1bmN0aW9uIGNhbk5vdFlldFZhbGlkYXRlKGlkLCBjbGFzc05hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXG4gICAgXCJjYW4gbm90IHlldCB2YWxpZGF0ZSBpZiB0aGUgY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIicgaXMgYW4gaW5zdGFuY2Ugb2YgJ1wiICtcbiAgICAgIGNsYXNzTmFtZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRDaGFubmVsRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZVxuICogQGRlc2NyaXB0aW9uIEEgbWVzc2FnZSBzZW5kIGJ5IHRoZSBjaGFubmVsIGlzIGludmFsaWRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2hhbm5lbEV2ZW50ID0gZnVuY3Rpb24gaW52YWxpZENoYW5uZWxFdmVudChcbiAgbWVzc2FnZSxcbiAgZXZlbnROYW1lLFxuICB0eXBlXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgdHlwZSBmb3IgdGhlIG1lc3NhZ2UgJ1wiICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgdHlwZSArXG4gICAgICBcIicgZm9yIGV2ZW50ICdcIiArXG4gICAgICBldmVudE5hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGFuIGFjdGlvbiBhZGQgd2l0aCBvbiBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbiA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBtZXRob2ROYW1lXG4pIHtcbiAgdmFyIGNsYXNzSW5mbyA9ICcnO1xuXG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBjbGFzc0luZm8gPSBcIiAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKVwiO1xuICB9XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gYWRkaW5nIGFuIGFjdGlvbiBvbiBtZXRob2QgJ1wiICtcbiAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCIgK1xuICAgICAgY2xhc3NJbmZvXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdXBkYXRlVXVpZFxuICogQHBhcmFtIHtTdHJpbmd9IGN1cnJlbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmV3SWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtCb29sZWFufSBhbHJlYWR5VXNlZCBuZXdJZCBhbHJlYWR5IHVzZWRcbiAqIEBkZXNjcmlwdGlvbiBDaGFuZ2UgdGhlIGlkIG9mIGEgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMudXBkYXRlVXVpZCA9IGZ1bmN0aW9uIHVwZGF0ZVV1aWQoY3VycmVudElkLCBuZXdJZCwgYWxyZWFkeVVzZWQpIHtcbiAgaWYgKGFscmVhZHlVc2VkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgK1xuICAgICAgICBjdXJyZW50SWQgK1xuICAgICAgICBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArXG4gICAgICAgIG5ld0lkICtcbiAgICAgICAgXCInIHRoYXQgaXMgYWxyZWFkeSB1c2VkXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcInRyeSB0byB1cGRhdGUgYSBjb21wb25lbnQgb2YgaWQgJ1wiICtcbiAgICAgICAgY3VycmVudElkICtcbiAgICAgICAgXCInIHdpdGggdGhlIG5ldyBpZCAnXCIgK1xuICAgICAgICBuZXdJZCArXG4gICAgICAgIFwiJ1wiXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRVc2VPZkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICovXG5leHBvcnRzLmludmFsaWRVc2VPZkNvbXBvbmVudCA9IGZ1bmN0aW9uIGludmFsaWRVc2VPZkNvbXBvbmVudChpZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBhZGQgYW4gaW52YWxpZCBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hID0gZnVuY3Rpb24gaW52YWxpZFNjaGVtYShuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgc2NoZW1hICdcIiArIG5hbWUgKyBcIicgaXMgbm90IHZhbGlkXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gYWRkIGFuIGludmFsaWQgbW9kZWxcbiAqL1xuZXhwb3J0cy5pbnZhbGlkTW9kZWwgPSBmdW5jdGlvbiBpbnZhbGlkTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIG1vZGVsICdcIiArIG5hbWUgKyBcIicgaXMgbm90IHZhbGlkXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHBhcmFtZXRlcnMgc2V0IHdoZW4gY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzc1xuICovXG5leHBvcnRzLmludmFsaWRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gaW52YWxpZFBhcmFtZXRlcnMoY2xhc3NJZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgY29tcG9uZW50IG9mIGNsYXNzICdcIiArXG4gICAgICBjbGFzc0lkICtcbiAgICAgIFwiJyBhcmUgbm90IGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZGVzdHJveWVkQ29tcG9uZW50Q2FsbFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gZ2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGRlc3Ryb3llZCBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5kZXN0cm95ZWRDb21wb25lbnRDYWxsID0gZnVuY3Rpb24gZGVzdHJveWVkQ29tcG9uZW50Q2FsbChcbiAgcHJvcGVydHlOYW1lLFxuICBpZFxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnlpbmcgdG8gZ2V0IHRoZSBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvbiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0IGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHNjaGVtYSBuYW1lXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBwYXJhbWV0ZXIgdHlwZSAgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzXG4gKi9cbmV4cG9ydHMuaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uIGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMoXG4gIG9iamVjdCxcbiAgbmFtZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0aGUgY29uc3RydWN0b3IgcGFyYW1ldGVyICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShvYmplY3QpLnJlcGxhY2UoLywvZywgJywgJykgK1xuICAgICAgXCInIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIicgaXMgbm90IGFuIG9iamVjdFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93bk1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIGluZm9ybWF0aW9uIG9mIGFuIHVua293biBtb2RlbFxuICovXG5leHBvcnRzLnVua25vd25Nb2RlbCA9IGZ1bmN0aW9uIHVua25vd25Nb2RlbChjbGFzc0lkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgZ2V0IHRoZSBpbmZvcm1hdGlvbiBvZiBhbiB1bmtub3duIG1vZGVsICdcIiArIGNsYXNzSWQgKyBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEEgc2NoZW1hIGlzIG1pc3NpbmdcbiAqL1xuZXhwb3J0cy5taXNzaW5nU2NoZW1hID0gZnVuY3Rpb24gbWlzc2luZ1NjaGVtYShuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgc2NoZW1hICdcIiArIG5hbWUgKyBcIicgaXMgbWlzc2luZ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgd2hlcmUgdGhlIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICogQGRlc2NyaXB0aW9uIEEgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kXG4gKi9cbmV4cG9ydHMuY3ljbGljRGVwZW5kZW5jeSA9IGZ1bmN0aW9uIGN5Y2xpY0RlcGVuZGVuY3kobmFtZSkge1xuICBpZiAobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmVycm9yKFxuICAgICAgJ2EgY3ljbGljIGluaGVyaXRhbmNlIGRlcGVuZGVuY3kgd2l0aCDigJknICtcbiAgICAgICAgbmFtZSArXG4gICAgICAgIFwi4oCZIHNjaGVtYSBoYXMgYmVlbiBmb3VuZCwgcGxlYXNlIGNoZWNrIHRoZSAnX2luaGVyaXQnIHByb3BlcnRpZXMgb2YgeW91ciBzY2hlbWFzXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLmVycm9yKFxuICAgICAgXCJhIGN5Y2xpYyBpbmhlcml0YW5jZSBkZXBlbmRlbmN5IGhhcyBiZWVuIGZvdW5kLCBwbGVhc2UgY2hlY2sgdGhlICdfaW5oZXJpdCcgcHJvcGVydGllcyBvZiB5b3VyIHNjaGVtYXNcIlxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlTmFtZSBvZiB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZSBmb3IgYSB0eXBlIGVudW1cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRW51bVR5cGUgPSBmdW5jdGlvbiBpbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZSAhPT0gdHlwZW9mIHZhbHVlKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBlbnVtZXJhdGVkIHR5cGUgJ1wiICtcbiAgICAgICAgdHlwZU5hbWUgK1xuICAgICAgICBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgICAgdHlwZSArXG4gICAgICAgIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICtcbiAgICAgICAgdHlwZW9mIHZhbHVlICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIGVudW1lcmF0ZWQgdHlwZSAnXCIgKyB0eXBlTmFtZSArIFwiJ1wiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGxvYWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIExvYWQgc2NoZW1hXG4gKi9cbmV4cG9ydHMubG9hZFNjaGVtYSA9IGZ1bmN0aW9uIGxvYWRTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgc2NoZW1hICdcIiArIG5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbG9hZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIExvYWQgbW9kZWxcbiAqL1xuZXhwb3J0cy5sb2FkTW9kZWwgPSBmdW5jdGlvbiBsb2FkTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgbW9kZWwgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBsb2FkVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIExvYWQgdHlwZVxuICovXG5leHBvcnRzLmxvYWRUeXBlID0gZnVuY3Rpb24gbG9hZFR5cGUobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgdHlwZSAnXCIgKyBuYW1lICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNvbXBpbGVTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIENvbXBpbGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuY29tcGlsZVNjaGVtYSA9IGZ1bmN0aW9uIGNvbXBpbGVTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImNvbXBpbGUgc2NoZW1hICdcIiArIG5hbWUgKyBcIicuLi5cIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2VuZXJhdGVNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSBtb2RlbFxuICovXG5leHBvcnRzLmdlbmVyYXRlTW9kZWwgPSBmdW5jdGlvbiBnZW5lcmF0ZU1vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJnZW5lcmF0ZSBtb2RlbCAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja01vZGVsID0gZnVuY3Rpb24gY2hlY2tNb2RlbChuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiYW5hbHl6ZSBtb2RlbCAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmNyZWF0ZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVDb2xsZWN0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJjcmVhdGUgY29sbGVjdGlvbiAnXCIgKyBuYW1lICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBjbGFzc1xuICovXG5leHBvcnRzLmNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gY3JlYXRlQ2xhc3MobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImNyZWF0ZSBjbGFzcyAnXCIgKyBuYW1lICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25CZWdpblxuICogQGRlc2NyaXB0aW9uIEJlZ2lucyBtb2RlbCBjcmVhdGlvblxuICovXG5leHBvcnRzLm1vZGVsQ3JlYXRpb25CZWdpbiA9IGZ1bmN0aW9uIG1vZGVsQ3JlYXRpb25CZWdpbigpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoJ3N0YXJ0aW5nIG1vZGVsIGNyZWF0aW9uLi4uJyk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkVuZFxuICogQGRlc2NyaXB0aW9uIEVuZCBtb2RlbCBjcmVhdGlvblxuICovXG5leHBvcnRzLm1vZGVsQ3JlYXRpb25FbmQgPSBmdW5jdGlvbiBtb2RlbENyZWF0aW9uRW5kKCkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZygnbW9kZWwgY3JlYXRpb24gZW5kZWQnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBhY3Rpb25JbnZva2VFcnJvclxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNvbXBvbmVudCBjbGFzcyBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICogQGRlc2NyaXB0aW9uIEFuIGVycm9yIGhhcHBlbmVkIHdoZW4gaW52b2tpbmcgYSBiZWhhdmlvclxuICovXG5leHBvcnRzLmFjdGlvbkludm9rZUVycm9yID0gZnVuY3Rpb24gYWN0aW9uSW52b2tlRXJyb3IoXG4gIHN0YXRlLFxuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBtZXNzYWdlXG4pIHtcbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGdldExvZ2dlcigpLmVycm9yKFxuICAgICAgXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgc3RhdGUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGlkICtcbiAgICAgICAgXCInIChjbGFzcyAnXCIgK1xuICAgICAgICBjbGFzc05hbWUgK1xuICAgICAgICBcIicpOiBcIiArXG4gICAgICAgIG1lc3NhZ2VcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLmVycm9yKFxuICAgICAgXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgc3RhdGUgK1xuICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgIGlkICtcbiAgICAgICAgXCInOiBcIiArXG4gICAgICAgIG1lc3NhZ2VcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgbmFtZSBmb3IgdGhlIHByb3BlcnR5IG9mIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFNjaGVtYVByb3BlcnR5ID0gZnVuY3Rpb24gaW52YWxpZFNjaGVtYVByb3BlcnR5KG5hbWUsIHByb3BOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wTmFtZSArXG4gICAgICBcIicgZm9yIHNjaGVtYSAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIic6IG9ubHkgJ3Byb3BlcnR5JywgJ2xpbmsnLCAnY29sbGVjdGlvbicsICdtZXRob2QnIGFuZCAnZXZlbnQnIGFyZSBhbGxvd2VkLlwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5Rm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgZm9ybWF0IGZvciB0aGUgZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5Rm9ybWF0ID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5Rm9ybWF0KG9iaikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBmb3JtYXQgZm9yIGEgZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5JzogJ1wiICtcbiAgICAgIG9iaiArXG4gICAgICBcIicgaXMgbm90IGFuIG9iamVjdFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBpbnZhbGlkIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRTdGF0ZShtb2RlbCwgc3RhdGUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgc3RhdGUgJ1wiICsgc3RhdGUgKyBcIicgZm9yIHRoZSBtb2RlbCAnXCIgKyBtb2RlbCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93bkNvbnRleHRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQGRlc2NyaXB0aW9uIEludm9rZSBhIG1ldGhvZCBjbGFzcyB3aXRob3V0IGEgY29udGV4dFxuICovXG5leHBvcnRzLnVua25vd25Db250ZXh0ID0gZnVuY3Rpb24gdW5rbm93bkNvbnRleHQoY2xhc3NOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZva2UgdGhlIGJlaGF2aW9yICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBvbiB0aGUgY2xhc3MgJ1wiICtcbiAgICAgIGNsYXNzTmFtZSArXG4gICAgICBcIicgd2l0aG91dCBhIHZhbGlkIGNvbnRleHRcIlxuICApO1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQHJlcXVpcmVzIGhlbHBlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsLlxuICogU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZFxuICogY3JlYXRlcyB0aGUgY29tcG9uZW50IGNsYXNzZXMgYW5kIHJlbGF0ZWQgRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxudmFyIElEID0gJ19pZCc7XG52YXIgTkFNRSA9ICdfbmFtZSc7XG52YXIgREVTQ1JJUFRJT04gPSAnX2Rlc2NyaXB0aW9uJztcbnZhciBJTkhFUklUUyA9ICdfaW5oZXJpdCc7XG52YXIgQ0xBU1MgPSAnX2NsYXNzJztcbnZhciBDT1JFID0gJ19jb3JlJztcbnZhciBNRVRIT0RfVFlQRSA9ICdtZXRob2QnO1xudmFyIEVWRU5UX1RZUEUgPSAnZXZlbnQnO1xudmFyIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknO1xudmFyIExJTktfVFlQRSA9ICdsaW5rJztcbnZhciBDT0xMRUNUSU9OX1RZUEUgPSAnY29sbGVjdGlvbic7XG52YXIgaW50ZXJuYWxUeXBlcyA9IFsncHJvcGVydHknLCAnY29sbGVjdGlvbicsICdsaW5rJywgJ21ldGhvZCcsICdldmVudCddO1xudmFyIGRlZmF1bHRUeXBlcyA9IFtcbiAgJ2Jvb2xlYW4nLFxuICAnc3RyaW5nJyxcbiAgJ251bWJlcicsXG4gICdvYmplY3QnLFxuICAnZnVuY3Rpb24nLFxuICAnYXJyYXknLFxuICAnZGF0ZScsXG4gICdhbnknXG5dO1xudmFyIHN0b3JlID0ge1xuICBtZXRhZGVmOiB7fSxcbiAgaW5oZXJpdGFuY2U6IHt9LFxuICBpbmhlcml0YW5jZVRyZWU6IHt9LFxuICBzY2hlbWFzOiB7fSxcbiAgY29tcGlsZWRTY2hlbWFzOiB7fSxcbiAgbW9kZWxzOiB7fSxcbiAgZ2VuZXJhdGVkTW9kZWxzOiB7fSxcbiAgc3RhdGVzOiB7fSxcbiAgdHlwZToge31cbn07XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgZ2VuZXJhdGVNb2RlbHNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2VuZXJhdGUgdGhlIG1vZGVsc1xuICovXG5mdW5jdGlvbiBnZW5lcmF0ZU1vZGVscygpIHtcbiAgdmFyIGF0dCA9ICcnO1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hID0ge307XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG1vZGVsUGFyZW50ID0gbnVsbDtcbiAgdmFyIG1vZGVsRXh0ID0gbnVsbDtcbiAgdmFyIG1vZGVsRGVmID0gbnVsbDtcbiAgdmFyIG1vZGVsID0ge307XG4gIHZhciBtb2RlbHMgPSB7fTtcbiAgdmFyIG1lcmdlZE1vZGVsID0ge307XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIG5iQW5jZXN0b3JzID0gMDtcbiAgdmFyIHNvcnRJbmhlcml0VHJlZSA9IFtdO1xuXG4gIC8vIGRlZmF1bHQgdmFsdWVzXG4gIGZvciAoc2NoZW1hTmFtZSBpbiBzdG9yZS5jb21waWxlZFNjaGVtYXMpIHtcbiAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbc2NoZW1hTmFtZV07XG5cbiAgICAvLyBzZXQgbW9kZWwgaW50ZXJuYWwgcHJvcGVydGllc1xuICAgIG1vZGVsID0ge1xuICAgICAgX25hbWU6IHNjaGVtYS5fbmFtZVxuICAgIH07XG5cbiAgICAvLyBzZXQgX2NvcmVcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5fY29yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vZGVsLl9jb3JlID0gc2NoZW1hLl9jb3JlO1xuICAgIH1cblxuICAgIC8vIHNldCBpbmhlcml0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLl9pbmhlcml0KSkge1xuICAgICAgbW9kZWwuX2luaGVyaXQgPSBzY2hlbWEuX2luaGVyaXQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzXG4gICAgaWYgKHR5cGVvZiBzY2hlbWEuX2NsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbW9kZWwuX2NsYXNzID0gc2NoZW1hLl9jbGFzcztcbiAgICB9XG5cbiAgICAvLyBzZXQgZGVzY3JpcHRpb25cbiAgICBpZiAodHlwZW9mIHNjaGVtYS5fZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtb2RlbC5fZGVzY3JpcHRpb24gPSBzY2hlbWEuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIC8vICBzZXQgbW9kZWwgZGVmYXVsdCB2YWx1ZXNcbiAgICBmb3IgKGF0dCBpbiBzY2hlbWEpIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAncHJvcGVydHknOlxuICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhdHQsXG4gICAgICAgICAgICBsYWJlbDogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2xpbmsnOlxuICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICB0eXBlOiAnX0NvbXBvbmVudCcsXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdtZXRob2QnOlxuICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJhbScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVzdWx0OiAnYW55JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhdHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnZXZlbnQnOlxuICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJhbScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdjb2xsZWN0aW9uJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogWydfQ29tcG9uZW50J10sXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKGF0dC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFNjaGVtYVByb3BlcnR5KHNjaGVtYS5fbmFtZSwgYXR0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsLl9uYW1lXSA9IG1vZGVsO1xuICB9XG5cbiAgLy8gbW9kZWxzIHRvIG92ZXJyaWRlXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgbmFtZSA9IG1vZGVsW05BTUVdO1xuICAgIG1vZGVsRXh0ID0gc3RvcmUubW9kZWxzW25hbWVdO1xuICAgIGlmIChtb2RlbEV4dCkge1xuICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbEV4dCwgbW9kZWwpO1xuICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5oZXJpdGFuY2VcbiAgc29ydEluaGVyaXRUcmVlID0gc29ydEluaGVyaXRhbmNlVHJlZSgpO1xuXG4gIG5iQW5jZXN0b3JzID0gc29ydEluaGVyaXRUcmVlLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IG5iQW5jZXN0b3JzOyBpKyspIHtcbiAgICBtb2RlbE5hbWUgPSBzb3J0SW5oZXJpdFRyZWVbaV07XG4gICAgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcblxuICAgIGlmIChtb2RlbCkge1xuICAgICAgcGFyZW50cyA9IGV4cG9ydHMuZ2V0UGFyZW50cyhtb2RlbE5hbWUpO1xuICAgICAgcGFyZW50cy5yZXZlcnNlKCk7XG5cbiAgICAgIHZhciBtb2RlbFRvTWVyZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vZGVsKSk7XG5cbiAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIG5hbWUgPSBwYXJlbnRzW2pdO1xuICAgICAgICBtb2RlbFBhcmVudCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgICAgICAgaWYgKG1vZGVsUGFyZW50KSB7XG4gICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbFBhcmVudCwgbW9kZWwpO1xuICAgICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbGFzdCBpbmhlcml0XG4gICAgICAvLyBpcyB0aGUgb3ZlcnJpZGVuIG1vZGVsXG4gICAgICBtb2RlbEV4dCA9IHN0b3JlLm1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICAgaWYgKG1vZGVsRXh0KSB7XG4gICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxFeHQsIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdKTtcbiAgICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzYXZlXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgJGRiLl9HZW5lcmF0ZWRNb2RlbC5pbnNlcnQobW9kZWxEZWYpO1xuXG4gICAgaWYgKCFtb2RlbERlZi5fY29yZSkge1xuICAgICAgJGxvZy5nZW5lcmF0ZU1vZGVsKG1vZGVsTmFtZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBsb2FkSW5NZW1vcnlcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gTG9hZCBzY2hlbWFzIGFuZCB0eXBlcyBpbiBtZW1vcnlcbiAqL1xuZnVuY3Rpb24gbG9hZEluTWVtb3J5KCkge1xuICB2YXIgc2NoZW1hcyA9IFtdO1xuICB2YXIgdHlwZXMgPSBbXTtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBtb2RlbCA9IHt9O1xuICB2YXIgbW9kZWxzID0gW107XG4gIHZhciB0eXBlID0gbnVsbDtcbiAgdmFyIGlkID0gJyc7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBpbmhlcml0ID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgLy8gaW5pdCBzdG9yZVxuICBzdG9yZS5pbmhlcml0YW5jZSA9IHt9O1xuICBzdG9yZS5pbmhlcml0YW5jZVRyZWUgPSB7fTtcbiAgc3RvcmUuc2NoZW1hcyA9IHt9O1xuICBzdG9yZS5jb21waWxlZFNjaGVtYXMgPSB7fTtcbiAgc3RvcmUubW9kZWxzID0ge307XG4gIHN0b3JlLmdlbmVyYXRlZE1vZGVscyA9IHt9O1xuICBzdG9yZS5zdGF0ZXMgPSB7fTtcbiAgc3RvcmUudHlwZSA9IHt9O1xuXG4gIC8vIGxvYWQgc2NoZW1hc1xuICBzY2hlbWFzID0gJGRiLl9TY2hlbWEuZmluZCh7fSk7XG5cbiAgbGVuZ3RoID0gc2NoZW1hcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHNjaGVtYSA9IHNjaGVtYXNbaV07XG5cbiAgICBuYW1lID0gc2NoZW1hW05BTUVdO1xuICAgIGluaGVyaXQgPSBzY2hlbWFbSU5IRVJJVFNdO1xuXG4gICAgc3RvcmUuc2NoZW1hc1tuYW1lXSA9IHNjaGVtYTtcbiAgICBpZiAoaW5oZXJpdCkge1xuICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0gPSBpbmhlcml0O1xuICAgIH1cblxuICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAkbG9nLmxvYWRTY2hlbWEobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbG9hZCBtb2RlbHNcbiAgbW9kZWxzID0gJGRiLl9Nb2RlbC5maW5kKHt9KTtcblxuICBsZW5ndGggPSBtb2RlbHMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBtb2RlbCA9IG1vZGVsc1tpXTtcbiAgICBuYW1lID0gbW9kZWxbTkFNRV07XG5cbiAgICBzdG9yZS5tb2RlbHNbbmFtZV0gPSBtb2RlbDtcblxuICAgIGlmICghbW9kZWwuX2NvcmUpIHtcbiAgICAgICRsb2cubG9hZE1vZGVsKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvYWQgdHlwZXNcbiAgdHlwZXMgPSAkZGIuX1R5cGUuZmluZCh7fSk7XG5cbiAgbGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0eXBlID0gdHlwZXNbaV07XG4gICAgc3RvcmUudHlwZVt0eXBlLm5hbWVdID0gdHlwZTtcblxuICAgIGlmICghdHlwZS5jb3JlKSB7XG4gICAgICAkbG9nLmxvYWRUeXBlKHR5cGUubmFtZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVJbmhlcml0YW5jZVRyZWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIHRoZSBpbmhlcml0YW5jZSB0cmVlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluaGVyaXRhbmNlVHJlZSgpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIGMzbGluZXJpemF0aW9uID0gW107XG4gIHZhciBhbmNlc3RvcnMgPSBbXTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGFsbCB0aGUgYXJyYXlzIGFyZSBlbXB0eVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gIENoZWNrIGlmIHdlIGhhdmUgZmluaXNlaGQgdG8gbGluZXJpemVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc0VtcHR5KGVsdHMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbHRzW2ldLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWx0IGVsZW1lbnQgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFuIGVsdCBmcm9tIGFsbCB0aGUgYXJyYXlzXG4gICAqL1xuICBmdW5jdGlvbiBfcmVtb3ZlQ2FuZGlkYXRlKGVsdCwgZWx0cykge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgYXJyID0gW107XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA9PT0gMCkge1xuICAgICAgICBhcnIgPSBlbHRzW2ldO1xuICAgICAgICBhcnIucmV2ZXJzZSgpO1xuICAgICAgICBhcnIucG9wKCk7XG4gICAgICAgIGFyci5yZXZlcnNlKCk7XG4gICAgICAgIGVsdHNbaV0gPSBhcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzQ2FuZGlkYXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbHQgZWxlbWVudCB0byByZW1vdmVcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGEgZ29vZCBjYW5kaWRhdGUuXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayB0aGUgZWxlbWVudCBpcyBhIGdvb2QgY2FuZGlkYXRlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNDYW5kaWRhdGUoZWx0LCBlbHRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWx0c1tpXS5pbmRleE9mKGVsdCkgPiAwKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZmluZENhbmRpZGF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHJldHVybnMge0FycmF5fSBhcnJheSBjb250YWluaW5nIHRoZSBjYW5kaWRhdGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIEZpbmQgYSBjYW5kaWRhdGUgYW5kIHJldHVybiBpdC5cbiAgICovXG4gIGZ1bmN0aW9uIF9maW5kQ2FuZGlkYXRlKGVsdHMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX2lzQ2FuZGlkYXRlKGVsdHNbaV1bMF0sIGVsdHMpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsdHNbaV1bMF0pO1xuICAgICAgICBfcmVtb3ZlQ2FuZGlkYXRlKGVsdHNbaV1bMF0sIGVsdHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9tZXJnZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIGNhbmRpZGF0ZXMgcmV0dXJuZWQgYnkgdGhlIG1lcmdlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBNZXJnZSB0aGUgYXJyYXlzXG4gICAqL1xuICBmdW5jdGlvbiBfbWVyZ2UoZWx0cykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuXG4gICAgY2FuZGlkYXRlcyA9IF9maW5kQ2FuZGlkYXRlKGVsdHMpO1xuICAgIHdoaWxlIChjYW5kaWRhdGVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzID0gX2ZpbmRDYW5kaWRhdGUoZWx0cyk7XG4gICAgfVxuXG4gICAgaWYgKCFfaXNFbXB0eShlbHRzKSkge1xuICAgICAgJGxvZy5jeWNsaWNEZXBlbmRlbmN5KCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbGluZXJpemVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7QXJyYXl9IGxpc3Qgb2YgY2FuZGlkYXRlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gU3RhcnQgdGhlIGxpbmVyaWVhdGlvbiBmcm9tIGFuIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9saW5lcml6ZShuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBfY2hlY2tDeWNsaWNEZXBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hlY2tDeWNsaWNEZXAobmFtZSwgaXRlbSkge1xuICAgICAgdmFyIGlzQ3ljbGljRGViID0gZmFsc2U7XG5cbiAgICAgIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtpdGVtXSkgJiZcbiAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbaXRlbV0uaW5kZXhPZihuYW1lKSAhPT0gLTFcbiAgICAgICkge1xuICAgICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3kobmFtZSk7XG4gICAgICAgIGlzQ3ljbGljRGViID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0N5Y2xpY0RlYjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtuYW1lXSkpIHtcbiAgICAgIHBhcmVudHMgPSBzdG9yZS5pbmhlcml0YW5jZVtuYW1lXS5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLm1pc3NpbmdTY2hlbWEobmFtZSk7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX2NoZWNrQ3ljbGljRGVwKG5hbWUsIHBhcmVudHNbaV0pKSB7XG4gICAgICAgIHBhcmVudHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBbbmFtZV0uY29uY2F0KF9tZXJnZShwYXJlbnRzLm1hcChfbGluZXJpemUpLmNvbmNhdChbcGFyZW50c10pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgIGMzbGluZXJpemF0aW9uID0gX2xpbmVyaXplKG5hbWUpO1xuICAgIGFuY2VzdG9ycyA9IGMzbGluZXJpemF0aW9uLnJldmVyc2UoKTtcbiAgICBhbmNlc3RvcnMucG9wKCk7XG4gICAgaWYgKGFuY2VzdG9ycy5sZW5ndGgpIHtcbiAgICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXSA9IGFuY2VzdG9ycztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGV4dGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHRvIGV4dGVuZFxuICogQHJldHVybnMge0pTT059IG9iamVjdCBleHRlbmRlZCB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRXh0ZW5kIGEgc2NoZW1hIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudFxuICovXG5mdW5jdGlvbiBleHRlbmQobmFtZSkge1xuICB2YXIgc29uRXh0ZW5kID0ge307XG4gIHZhciBzb24gPSBzdG9yZS5zY2hlbWFzW25hbWVdO1xuICB2YXIgYW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW25hbWVdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgYW5jZXN0b3IgPSBudWxsO1xuICB2YXIgcHJvcCA9ICcnO1xuXG4gIGlmIChhbmNlc3RvcnMpIHtcbiAgICBsZW5ndGggPSBhbmNlc3RvcnMubGVuZ3RoO1xuICAgIGFuY2VzdG9ycy5yZXZlcnNlKCk7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYW5jZXN0b3IgPSBzdG9yZS5zY2hlbWFzW2FuY2VzdG9yc1tpXV07XG4gICAgZm9yIChwcm9wIGluIGFuY2VzdG9yKSB7XG4gICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgc29uRXh0ZW5kW3Byb3BdID0gYW5jZXN0b3JbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAocHJvcCBpbiBzb24pIHtcbiAgICBzb25FeHRlbmRbcHJvcF0gPSBzb25bcHJvcF07XG4gIH1cbiAgcmV0dXJuIHNvbkV4dGVuZDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIHNvcnRJbmhlcml0YW5jZVRyZWVcbiAqIEByZXR1cm5zIHtBcnJheX0gc29ydGVkIEluaGVyaXRhbmNlVHJlZSBzdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHNvcnRlZCBJbmhlcml0YW5jZVRyZWUgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIHNvcnRJbmhlcml0YW5jZVRyZWUoKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHRlbXAgPSB7fTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbmJBbmNlc3RvcnMgPSAwO1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmluaGVyaXRhbmNlVHJlZSkge1xuICAgIG5iQW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW21vZGVsTmFtZV0ubGVuZ3RoO1xuICAgIGlmICh0eXBlb2YgdGVtcFtuYkFuY2VzdG9yc10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0ZW1wW25iQW5jZXN0b3JzXSA9IFtdO1xuICAgIH1cbiAgICB0ZW1wW25iQW5jZXN0b3JzXS5wdXNoKG1vZGVsTmFtZSk7XG4gIH1cblxuICBrZXlzID0gT2JqZWN0LmtleXModGVtcCkuc29ydCgpO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB0ZW1wW2luZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICByZXN1bHQucHVzaChtb2RlbCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjb21waWxlU2NoZW1hc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgdGhlIG1vZGVsc1xuICovXG5mdW5jdGlvbiBjb21waWxlU2NoZW1hcygpIHtcbiAgdmFyIG5hbWUgPSAnJztcblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuc2NoZW1hcykge1xuICAgIGlmICghc3RvcmUuc2NoZW1hc1tuYW1lXS5fY29yZSkge1xuICAgICAgJGxvZy5jb21waWxlU2NoZW1hKG5hbWUpO1xuICAgIH1cblxuICAgIHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXSA9IGV4dGVuZChuYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tNb2RlbHNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhbGwgdGhlIG1vZGVscyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZWlyIHNjaGVtYXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tNb2RlbHMoKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBjbGFzc0RlZiA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSAnJztcblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgY2xhc3NEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgaWYgKGNsYXNzRGVmKSB7XG4gICAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgIGlmICghY2xhc3NEZWYuX2NvcmUpIHtcbiAgICAgICAgICAkbG9nLmNoZWNrTW9kZWwobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJbXAoY2xhc3NEZWYsIHNjaGVtYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLm1pc3NpbmdJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0YXRlc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBzdGF0ZXMgb2YgYSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHR5cGUgPSAnJztcbiAgdmFyIHN0YXRlcyA9IFtdO1xuICB2YXIgYXR0cmlidXRlID0gJyc7XG5cbiAgZm9yIChuYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgIHN0YXRlcyA9IFtdO1xuICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXTtcbiAgICBpZiAoc2NoZW1hKSB7XG4gICAgICBmb3IgKGF0dHJpYnV0ZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgdHlwZSA9IHNjaGVtYVthdHRyaWJ1dGVdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYXR0cmlidXRlLmluZGV4T2YoJ18nKSAhPT0gMCAmJlxuICAgICAgICAgIGludGVybmFsVHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3RhdGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzdG9yZS5zdGF0ZXNbbmFtZV0gPSBzdGF0ZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrSW1wXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzRGVmIHNjaGVtYSB0byB0ZXN0XG4gKiBAcGFyYW0ge0pTT059IGNsYXNzSW1wIHNjaGVtYSB0byB2YWxpZGF0ZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGl0cyBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gY2hlY2tJbXAoY2xhc3NEZWYsIGNsYXNzSW1wKSB7XG4gIHZhciBwcm9wZXJ0eSA9ICcnO1xuICB2YXIgdmFsdWUgPSBudWxsO1xuXG4gIGZvciAocHJvcGVydHkgaW4gY2xhc3NJbXApIHtcbiAgICBpZiAoXG4gICAgICBwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gREVTQ1JJUFRJT04gJiZcbiAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ09SRVxuICAgICkge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc0RlZltwcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhbHVlID0gY2xhc3NEZWZbcHJvcGVydHldO1xuICAgICAgICBpZiAoIWNoZWNrU2NoZW1hKHZhbHVlLCBjbGFzc0ltcFtwcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBpZiBhbGwgcHJvcGVydGllcyBhcmUgdGhlcmVcbiAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0RlZikge1xuICAgIGlmIChcbiAgICAgIHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBERVNDUklQVElPTiAmJlxuICAgICAgcHJvcGVydHkgIT09IElOSEVSSVRTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBDT1JFXG4gICAgKSB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzSW1wW3Byb3BlcnR5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrU2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtPYmplY3R9IHR5cGUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrU2NoZW1hKHZhbHVlLCB0eXBlKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIGlmIChoYXNUeXBlKHR5cGUsICdzdHJpbmcnKSAmJiBkZWZhdWx0VHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrQ3VzdG9tU2NoZW1hXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIGEgdmFsdWUgaGFzIGNvcnJlY3QgY3VzdG9tIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIGlmICghaGFzVHlwZSh0eXBlRGVmLCAndW5kZWZpbmVkJykpIHtcbiAgICBpZiAoIWhhc1R5cGUodmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKHR5cGVEZWYudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRTY2hlbWEodmFsdWVbaV0sIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkVHlwZSh2YWx1ZVtpXSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRTY2hlbWEodmFsdWUsIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBleHBvcnRzLmlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpbml0RGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW5pdCB0aGUgRGF0YWJhc2Ugc3R1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gaW5pdERiU3RydWN0dXJlKCkge1xuICAkZGIuY29sbGVjdGlvbignX0xvZ2dlcicpO1xuICAkZGIuY29sbGVjdGlvbignX1NjaGVtYScpO1xuICAkZGIuY29sbGVjdGlvbignX01vZGVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfR2VuZXJhdGVkTW9kZWwnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19DbGFzc0luZm8nKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19CZWhhdmlvcicpO1xuICAkZGIuY29sbGVjdGlvbignX1N0YXRlJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfVHlwZScpO1xuICAkZGIuY29sbGVjdGlvbignX01lc3NhZ2UnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19DaGFubmVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfTG9nJyk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVEYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgdGhlIERhdGFiYXNlIHN0cnVjdHVyZSAoaS5lLiBEYXRhYmFzZUNvbGxlY3Rpb24pXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURiU3RydWN0dXJlKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBtb2RlbERlZiA9IHt9O1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKFxuICAgICAgdHlwZW9mICRkYlttb2RlbERlZltOQU1FXV0gPT09ICd1bmRlZmluZWQnICYmXG4gICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlXG4gICAgKSB7XG4gICAgICAkZGIuY29sbGVjdGlvbihtb2RlbERlZltOQU1FXSk7XG5cbiAgICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICAgJGxvZy5jcmVhdGVDb2xsZWN0aW9uKG1vZGVsRGVmW05BTUVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhbGwgdGhlIGNsYXNzZXMgb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBtb2RlbERlZiA9IHt9O1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UpIHtcbiAgICAgICRjb21wb25lbnQuY3JlYXRlKHtcbiAgICAgICAgbW9kZWw6IG1vZGVsTmFtZVxuICAgICAgfSk7XG4gICAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAgICRsb2cuY3JlYXRlQ2xhc3MobW9kZWxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzSW5mb1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYWxsIHRoZSBDbGFzc0luZm8gb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzSW5mbygpIHtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxEZWYgPSB7fTtcbiAgdmFyIG5hbWUgPSAnJztcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIG5hbWUgPSBtb2RlbERlZltOQU1FXSArICdJbmZvJztcblxuICAgIGlmIChcbiAgICAgIG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UgJiZcbiAgICAgIGV4cG9ydHMuaW5oZXJpdEZyb20obW9kZWxEZWZbTkFNRV0sICdfQ29tcG9uZW50JylcbiAgICApIHtcbiAgICAgIGlmICghJGNvbXBvbmVudC5nZXQobmFtZSkpIHtcbiAgICAgICAgJGRiLl9DbGFzc0luZm8uaW5zZXJ0KHtcbiAgICAgICAgICBfaWQ6IG5hbWUsXG4gICAgICAgICAgc2NoZW1hOiBzdG9yZS5jb21waWxlZFNjaGVtYXNbbW9kZWxOYW1lXSxcbiAgICAgICAgICBtb2RlbDogbW9kZWxEZWZcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZGIuX0NsYXNzSW5mby51cGRhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgX2lkOiBuYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfaWQ6IG5hbWUsXG4gICAgICAgICAgICBzY2hlbWE6IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1ttb2RlbE5hbWVdLFxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsRGVmXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmVhbENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0UmVhbENsYXNzTmFtZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgnQCcsICcnKS50cmltKCk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZWFsVHlwZU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gcmVhbCBuYW1lXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmVhbCBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIHR5cGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmVhbFR5cGVOYW1lKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKCd7JywgJycpXG4gICAgLnJlcGxhY2UoJ30nLCAnJylcbiAgICAudHJpbSgpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNDdXN0b21UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgdmFsdWUgYSBjdXN0b20gdHlwZVxuICovXG5mdW5jdGlvbiBpc0N1c3RvbVR5cGUodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9XG4gICAgaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpICYmXG4gICAgZGVmYXVsdFR5cGVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJlxuICAgICFleHBvcnRzLmlzQ2xhc3NOYW1lKHZhbHVlKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNUeXBlUmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSByZWZlcmVuY2UgYSB0eXBlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZVJlZmVyZW5jZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZigneycpICE9PSAtMTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGlzTW9kZWxQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgdmFsdWUgYSBtb2RlbCBwYXRoXG4gKi9cbmZ1bmN0aW9uIGlzTW9kZWxQYXRoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmVhbFR5cGVcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHR5cGUgb2YgdGhlIHZhbHVlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmVhbCB0eXBlIG9mIGEgdmFsdWVcbiAqL1xuZnVuY3Rpb24gZ2V0UmVhbFR5cGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSAnJztcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5JztcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gJ2FueScpIHtcbiAgICB0eXBlID0gJ2FueSc7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldENsYXNzTmFtZVxuICogQHBhcmFtIHt0eXBlfSBvYmogb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKG9iaikge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgaWYgKG9iaiAmJiBvYmouY29uc3RydWN0b3IpIHtcbiAgICByZXN1bHQgPSBvYmouY29uc3RydWN0b3IubmFtZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBlbnVtVmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGVudW0gdmFsdWVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVudW1WYWx1ZSh2YWx1ZSwgZW51bVZhbHVlKSB7XG4gIHJldHVybiBlbnVtVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEBwYXJhbSB7dHlwZX0gdHlwZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdmFsdWUgaGFzIHR5cGUgJ3R5cGUnXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSB2YWx1ZSBoYXMgdGhlIHNwZWNpZmllZCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGhhc1R5cGUodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBkYXRlID0gbnVsbDtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXN1bHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgcmVzdWx0ID0gIWlzTmFOKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlIGluc3RhbmNlb2YgRGF0ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FueSc6XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlc3VsdCA9IHR5cGUgPT09IHR5cGVvZiB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaGFzIGZvciB0eXBlIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBoYXMgYSBzcGVjaWZpYyB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrVHlwZShuYW1lLCBpZCwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIHZhciBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdO1xuICB2YXIgYXR0cmlidXRlVHlwZSA9ICcnO1xuXG4gIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW05BTUVdKSB7XG4gICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG4gIH1cblxuICBpZiAoY29tcG9uZW50U2NoZW1hKSB7XG4gICAgYXR0cmlidXRlVHlwZSA9IGNvbXBvbmVudFNjaGVtYVtuYW1lLnNwbGl0KCcuJylbMF1dO1xuICAgIGlmIChhdHRyaWJ1dGVUeXBlID09PSB0eXBlKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBzb3VyY2Ugc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IHRhcmdldCBzY2hlbWFcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbWVyZ2UgYWxzbyBwcml2YXRlIHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9IG1lcmdlZCBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBNZXJnZSB0d28gc2NoZW1hc1xuICovXG5mdW5jdGlvbiBtZXJnZShzb3VyY2UsIHRhcmdldCwgYWxsKSB7XG4gIHZhciBwcm9wTmFtZSA9ICcnO1xuICB2YXIgcmVzdWx0ID0gdGFyZ2V0O1xuXG4gIGZvciAocHJvcE5hbWUgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICByZXN1bHRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIHNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFNjaGVtYSBzY2hlbWEgdG8gYWRkXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbmV3IHNjaGVtYVxuICovXG5leHBvcnRzLnNjaGVtYSA9IGZ1bmN0aW9uIHNjaGVtYShpbXBvcnRlZFNjaGVtYSkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgbWVyZ2VkU2NoZW1hID0ge307XG4gIHZhciBzY2hlbWFzID0gW107XG5cbiAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbXBvcnRlZFNjaGVtYSkpO1xuICBuYW1lID0gc2NoZW1hW05BTUVdO1xuXG4gIGlmICh0eXBlb2Ygc2NoZW1hW0lEXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzY2hlbWFbSURdID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzY2hlbWFbSU5IRVJJVFNdID09PSAndW5kZWZpbmVkJykge1xuICAgIHNjaGVtYVtJTkhFUklUU10gPSBbJ19Db21wb25lbnQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW1vdmVEdXBsaWNhdGVcbiAgICogQHBhcmFtIHtBcnJheX0gaW5oZXJpdHMgbGlzdCBvZiBwYXJlbnRzXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiByZW1vdmUgZHVwbGljYXRlIHBhcmVudHMgaW4gdGhlIGxpc3Qgb2YgcGFyZW50c1xuICAgKi9cbiAgZnVuY3Rpb24gX3JlbW92ZUR1cGxpY2F0ZShpbmhlcml0cykge1xuICAgIHZhciBmaWx0ZXJlZExpc3QgPSBbXTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuXG4gICAgaW5oZXJpdHMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgY2xlYW5OYW1lID0gbmFtZS50cmltKCk7XG4gICAgICBpZiAodHlwZW9mIGxpc3RbY2xlYW5OYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGlzdFtjbGVhbk5hbWVdID0gY2xlYW5OYW1lO1xuICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChjbGVhbk5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbiAgfVxuXG4gIHNjaGVtYVtJTkhFUklUU10gPSBfcmVtb3ZlRHVwbGljYXRlKHNjaGVtYVtJTkhFUklUU10pO1xuXG4gIC8vIGNoZWNrIGlmIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gIGlmIChleHBvcnRzLmlzVmFsaWRPYmplY3Qoc2NoZW1hLCBzdG9yZS5tZXRhZGVmLnNjaGVtYSwgZmFsc2UpKSB7XG4gICAgc2NoZW1hcyA9ICRkYi5fU2NoZW1hLmZpbmQoe1xuICAgICAgX25hbWU6IG5hbWVcbiAgICB9KTtcbiAgICBpZiAoc2NoZW1hcy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZFNjaGVtYSA9IG1lcmdlKHNjaGVtYSwgc2NoZW1hc1swXSk7XG4gICAgICAkZGIuX1NjaGVtYS51cGRhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBfbmFtZTogbmFtZVxuICAgICAgICB9LFxuICAgICAgICBtZXJnZWRTY2hlbWFcbiAgICAgICk7XG4gICAgICBpZCA9IHNjaGVtYXNbMF0uX2lkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAkZGIuX1NjaGVtYS5pbnNlcnQoc2NoZW1hKTtcbiAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRTY2hlbWEoc2NoZW1hW05BTUVdKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtb2RlbFxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZE1vZGVsIG1vZGVsIHRvIGFkZFxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG5ldyBtb2RlbFxuICovXG5leHBvcnRzLm1vZGVsID0gZnVuY3Rpb24gbW9kZWwoaW1wb3J0ZWRNb2RlbCkge1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpbmhlcml0ID0gJyc7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBtZXJnZWRNb2RlbCA9IHt9O1xuICB2YXIgbW9kZWxzID0gW107XG5cbiAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGltcG9ydGVkTW9kZWwpKTtcbiAgbmFtZSA9IG1vZGVsW05BTUVdO1xuXG4gIGlmICh0eXBlb2YgbW9kZWxbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgIG1vZGVsW0lEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgbW9kZWwgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICBpZiAoZXhwb3J0cy5pc1ZhbGlkT2JqZWN0KG1vZGVsLCBzdG9yZS5tZXRhZGVmLm1vZGVsLCBmYWxzZSkpIHtcbiAgICBtb2RlbHMgPSAkZGIuX01vZGVsLmZpbmQoe1xuICAgICAgX25hbWU6IG5hbWVcbiAgICB9KTtcbiAgICBpZiAobW9kZWxzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbCwgbW9kZWxzWzBdKTtcbiAgICAgICRkYi5fTW9kZWwudXBkYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgX25hbWU6IG5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2VkTW9kZWxcbiAgICAgICk7XG4gICAgICBpZCA9IG1vZGVsc1swXS5faWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICRkYi5fTW9kZWwuaW5zZXJ0KG1vZGVsKTtcbiAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRNb2RlbChtb2RlbFtOQU1FXSk7XG4gIH1cblxuICByZXR1cm4gaWQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdHlwZVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFR5cGUgdHlwZSB0byBhZGRcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBuZXcgdHlwZVxuICovXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbiB0eXBlKGltcG9ydGVkVHlwZSkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBuYW1lID0gaW1wb3J0ZWRUeXBlLm5hbWU7XG5cbiAgLy8gY2hlY2sgaWYgdHlwZSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gIGlmIChleHBvcnRzLmlzVmFsaWRPYmplY3QoaW1wb3J0ZWRUeXBlLCBzdG9yZS5tZXRhZGVmLnR5cGUpKSB7XG4gICAgcmVzdWx0ID0gJGRiLl9UeXBlLmluc2VydChpbXBvcnRlZFR5cGUpO1xuICAgIGlkID0gcmVzdWx0WzBdO1xuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluaXRcbiAqIEBkZXNjcmlwdGlvbiBJbml0IHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgZXhwb3J0cy5jbGVhcigpO1xuICBzdG9yZS5tZXRhZGVmID0ge1xuICAgIHNjaGVtYToge1xuICAgICAgX2lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBfbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX2luaGVyaXQ6IHtcbiAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogWydfQ29tcG9uZW50J11cbiAgICAgIH0sXG4gICAgICBfY2xhc3M6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2NvcmU6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgX2lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBfbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX2luaGVyaXQ6IHtcbiAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIF9jbGFzczoge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfY29yZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIF9pZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFsnYW55J10sXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb3JlOiB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIF9kZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaW5pdERiU3RydWN0dXJlKCk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgdGhlIGRhdGEgb2YgdGhlIG1ldGFtb2RlbCBmcm9tIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBzdG9yZSA9IHtcbiAgICBtZXRhZGVmOiB7fSxcbiAgICBpbmhlcml0YW5jZToge30sXG4gICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICBzY2hlbWFzOiB7fSxcbiAgICBjb21waWxlZFNjaGVtYXM6IHt9LFxuICAgIG1vZGVsczoge30sXG4gICAgZ2VuZXJhdGVkTW9kZWxzOiB7fSxcbiAgICBzdGF0ZXM6IHt9LFxuICAgIHR5cGU6IHt9XG4gIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICRsb2cubW9kZWxDcmVhdGlvbkJlZ2luKCk7XG4gIGxvYWRJbk1lbW9yeSgpO1xuICBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKTtcbiAgY29tcGlsZVNjaGVtYXMoKTtcbiAgZ2VuZXJhdGVNb2RlbHMoKTtcbiAgY2hlY2tNb2RlbHMoKTtcbiAgZ2V0U3RhdGVzKCk7XG4gIGNyZWF0ZURiU3RydWN0dXJlKCk7XG4gIGNyZWF0ZUNsYXNzKCk7XG4gIGNyZWF0ZUNsYXNzSW5mbygpO1xuICAkbG9nLm1vZGVsQ3JlYXRpb25FbmQoKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhbiBldmVudFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuaXNFdmVudCA9IGZ1bmN0aW9uIGlzRXZlbnQobmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgRVZFTlRfVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pc1Byb3BlcnR5ID0gZnVuY3Rpb24gaXNQcm9wZXJ0eShuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBQUk9QRVJUWV9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0xpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbGlua1xuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbGlua1xuICovXG5leHBvcnRzLmlzTGluayA9IGZ1bmN0aW9uIGlzTGluayhuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBMSU5LX1RZUEUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pc0NvbGxlY3Rpb24gPSBmdW5jdGlvbiBpc0NvbGxlY3Rpb24obmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgQ09MTEVDVElPTl9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc01ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbWV0aG9kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pc01ldGhvZCA9IGZ1bmN0aW9uIGlzTWV0aG9kKG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIE1FVEhPRF9UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1N0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgYSBzdHJ1Y3R1cmVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHN0cnVjdHVyZVxuICovXG5leHBvcnRzLmlzU3RydWN0dXJlID0gZnVuY3Rpb24gaXNTdHJ1Y3R1cmUobmFtZSwgaWQpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdO1xuICB2YXIgYXR0cmlidXRlVHlwZSA9ICcnO1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIGlmIChtb2RlbFtuYW1lXSkge1xuICAgIHR5cGUgPSBzdG9yZS50eXBlW21vZGVsW25hbWVdLnR5cGVdO1xuICB9XG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5zY2hlbWEpIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU3RhdGUgPSBmdW5jdGlvbiBpc1ZhbGlkU3RhdGUobmFtZSwgaWQpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2lkXTtcbiAgdmFyIHN0YXRlID0ge307XG5cbiAgaWYgKGlzTW9kZWxQYXRoKG5hbWUpKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkTW9kZWxQYXRoKGlkLCBuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY29tcG9uZW50U2NoZW1hICYmIGNvbXBvbmVudFNjaGVtYVtOQU1FXSkge1xuICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG4gICAgfVxuICAgIHN0YXRlID0gc3RvcmUuc3RhdGVzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICAgIHJlc3VsdCA9IHN0YXRlLmluZGV4T2YobmFtZSkgIT09IC0xO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZFR5cGUgPSBmdW5jdGlvbiBpc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDdXN0b21UeXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZURlZi52YWx1ZSkgJiYgdHlwZURlZi52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jaGVja0NsYXNzTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggYSBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gX2NoZWNrQ2xhc3NOYW1lKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgdHlwZVJlZiA9IGdldFJlYWxDbGFzc05hbWUodHlwZU5hbWUpO1xuICAgIHZhciBjb21wb25lbnQgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykpIHtcbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBnZXRDbGFzc05hbWUoY29tcG9uZW50KSAhPT0gdHlwZVJlZiAmJlxuICAgICAgICBKU09OLnN0cmluZ2lmeShjb21wb25lbnQpICE9PSAne30nXG4gICAgICApIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZS5yZXBsYWNlKCdAJywgJycpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZFR5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgcmVhbFR5cGUgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVOYW1lKTtcbiAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IF9jaGVja0NsYXNzTmFtZSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lKTpcbiAgICAgIHJlc3VsdCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlTmFtZSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVOYW1lXSkge1xuICAgICAgICAgICRsb2cuaW52YWxpZEVudW1UeXBlKHZhbHVlLCB0eXBlTmFtZSwgc3RvcmUudHlwZVt0eXBlTmFtZV0udHlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVOYW1lKTpcbiAgICAgIHJlc3VsdCA9IF9jaGVja0NsYXNzTmFtZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1NjaGVtYX0gc2NoZW1hIHNjaGVtYSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIGVudW1cbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZSBlbnVtLlxuICovXG5leHBvcnRzLmlzVmFsaWRFbnVtID0gZnVuY3Rpb24gaXNWYWxpZEVudW0odmFsdWUsIHNjaGVtYSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNJbnN0YW5jZU9mXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcHJpdmF0ZSBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBmb3IgY2xhc3MgbmFtZSBjbGFzc05hbWVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc0luc3RhbmNlT2YoY29tcG9uZW50LCBjbGFzc05hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuXG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICBpZiAoY29tcG9uZW50Q2xhc3NOYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9XG4gICAgcmVzdWx0ID0gY29tcG9uZW50Q2xhc3NOYW1lID09PSBjbGFzc05hbWU7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGV4cG9ydHMuaXNDbGFzc05hbWUoc2NoZW1hLnR5cGUpKSB7XG4gICAgcmVzdWx0ID1cbiAgICAgIF9pc0luc3RhbmNlT2YoJGNvbXBvbmVudC5nZXQodmFsdWUpLCBnZXRSZWFsQ2xhc3NOYW1lKHNjaGVtYS50eXBlKSkgJiZcbiAgICAgIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCBzY2hlbWEudHlwZSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IG9iamVjdFxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGEgc2NoZW1hXG4gKiBpdCBpcyBzdXBwb3NlZCB0byB2YWxpZGF0ZS5cbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU2NoZW1hID0gZnVuY3Rpb24gaXNWYWxpZFNjaGVtYShvYmplY3QsIHNjaGVtYSkge1xuICB2YXIgZmllbGROYW1lID0gJyc7XG4gIHZhciBmaWVsZCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgbWFuZGF0b3J5ID0gdHJ1ZTtcbiAgdmFyIHR5cGVTY2hlbWEgPSAnJztcbiAgdmFyIHR5cGVSZWYgPSAnJztcbiAgdmFyIHJlYWxUeXBlID0gJyc7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDbGFzc05hbWVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3NcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ2xhc3NOYW1lKCkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgZW51bVZhbHVlID0gW107XG5cbiAgICB0eXBlUmVmID0gZ2V0Q2xhc3NOYW1lKHR5cGVTY2hlbWEpO1xuICAgIHR5cGVSZWYgPSBvYmplY3RbdHlwZVJlZl07XG4gICAgdHlwZVJlZiA9IHR5cGVSZWYucmVwbGFjZSgnQCcsICcnKTsgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVJlZikpIHtcbiAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdKSB7XG4gICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgLy8gY2hlY2sgdmFsdWVcbiAgICAgICAgICBlbnVtVmFsdWUgPSBzdG9yZS50eXBlW3R5cGVSZWZdLnZhbHVlO1xuICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICBpc1ZhbGlkID0gQXJyYXkuaXNBcnJheShmaWVsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXhwb3J0cy5pc0NsYXNzTmFtZSh0eXBlUmVmKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgfHwgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpO1xuICAgICAgICAgIC8vIFRPRE8gbWF5YmUgaGF2ZSBhIG1vcmUgc3RyaWN0IHZhbGlkYXRpb24gdGhhbiBqdXN0IGEgdHlwZSBjaGVja2luZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVSZWYsIGZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZFR5cGVSZWZlcmVuY2VcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlcyB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VzIHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZVJlZmVyZW5jZSgpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGVudW1WYWx1ZSA9IFtdO1xuXG4gICAgdHlwZVJlZiA9IGdldFJlYWxUeXBlTmFtZSh0eXBlU2NoZW1hKTtcbiAgICB0eXBlUmVmID0gb2JqZWN0W3R5cGVSZWZdO1xuICAgIHR5cGVSZWYgPSB0eXBlUmVmLnJlcGxhY2UoJ0AnLCAnJyk7IC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVSZWYpKSB7XG4gICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXSkge1xuICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS50eXBlKTtcblxuICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgZW51bVZhbHVlID0gc3RvcmUudHlwZVt0eXBlUmVmXS52YWx1ZTtcbiAgICAgICAgICBpZiAoZW51bVZhbHVlKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW1WYWx1ZShmaWVsZCwgZW51bVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVSZWYgPT09ICdhcnJheScpIHtcbiAgICAgICAgaXNWYWxpZCA9IEFycmF5LmlzQXJyYXkoZmllbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVJlZikpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpIHx8IGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTtcbiAgICAgICAgICAvLyBUT0RPIG1heWJlIGhhdmUgYSBtb3JlIHN0cmljdCB2YWxpZGF0aW9uIHRoYW4ganVzdCBhIHR5cGUgY2hlY2tpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlUmVmLCBmaWVsZCk7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRUeXBlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlU2NoZW1hKTtcbiAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWhhc1R5cGUoZmllbGQsIHR5cGVTY2hlbWEpKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZVNjaGVtYVswXV0uc2NoZW1hKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkW2ldLCB0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0sIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvLyB0eXBlXG4gIGlmIChoYXNUeXBlKG9iamVjdCwgJ29iamVjdCcpKSB7XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICBpZiAoaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVNjaGVtYSk6XG4gICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDbGFzc05hbWUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc1R5cGVSZWZlcmVuY2UodHlwZVNjaGVtYSk6XG4gICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlUmVmZXJlbmNlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYW5kYXRvcnlcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICBpZiAoXG4gICAgICAgIG1hbmRhdG9yeSA9PT0gdHJ1ZSAmJlxuICAgICAgICAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgb2JqZWN0W2ZpZWxkTmFtZV0gIT09IHVuZGVmaW5lZClcbiAgICAgICkge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICRsb2cuaW52YWxpZFByb3BlcnR5Rm9ybWF0KG9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cmljdCB0cnVlIGlmIHZhbGlkYXRpb24gaXMgc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmIHRydWUgaWYgd2UgcmVtb3ZlIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgdGhlIGNvbnN0cnVjdG9yIG9mIGFuIG9iamVjdCBpcyBjb21wbGlhbnRcbiAqIHdpdGggdGhlIGRlZmluaXRpb24gb2YgdGhlIGNsYXNzLlxuICovXG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBmdW5jdGlvbiBpc1ZhbGlkT2JqZWN0KFxuICBvYmplY3QsXG4gIHNjaGVtYSxcbiAgc3RyaWN0LFxuICBjbGVhblJlZlxuKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJztcbiAgdmFyIGZpZWxkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBtYW5kYXRvcnkgPSB0cnVlO1xuICB2YXIgdHlwZVNjaGVtYSA9ICcnO1xuICB2YXIgdHlwZVJlZiA9ICcnO1xuICB2YXIgcmVhbFR5cGUgPSAnJztcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoaGFzVHlwZShzdHJpY3QsICd1bmRlZmluZWQnKSkge1xuICAgIHN0cmljdCA9IHRydWU7XG4gIH1cblxuICBpZiAoaGFzVHlwZShjbGVhblJlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgY2xlYW5SZWYgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkQ3VzdG9tVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBjdXN0b20gdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIGN1c3RvbSB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIHJlYWxUeXBlID0gJyc7XG5cbiAgICByZWFsVHlwZSA9IHN0b3JlLnR5cGVbdHlwZVNjaGVtYV07XG4gICAgaWYgKHJlYWxUeXBlKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS5zY2hlbWEsICd1bmRlZmluZWQnKTpcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgcmVhbFR5cGUuc2NoZW1hLCBzdHJpY3QsIGNsZWFuUmVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS52YWx1ZSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgIGlzVmFsaWQgPSBleHBvcnRzLmlzVmFsaWRFbnVtKGZpZWxkLCByZWFsVHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaXNWYWxpZCA9IGV4cG9ydHMuaXNWYWxpZFR5cGUoZmllbGQsIHJlYWxUeXBlLnR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRDbGFzc05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkIGEgZmllbGRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVTY2hlbWEgYSBzY2hlbWFcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3MgbmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3MgbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDbGFzc05hbWUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIGNvbXAgPSBudWxsO1xuICAgIHZhciBpc0NvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgdHlwZVJlZiA9IGdldFJlYWxDbGFzc05hbWUodHlwZVNjaGVtYSk7XG4gICAgaWYgKGZpZWxkICYmIGZpZWxkLmlkKSB7XG4gICAgICBjb21wID0gZmllbGQ7XG4gICAgICBpc0NvbXBvbmVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXAgPSAkY29tcG9uZW50LmdldChmaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNUeXBlKGNvbXAsICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKCFleHBvcnRzLmluaGVyaXRGcm9tKGNvbXAuY29uc3RydWN0b3IubmFtZSwgdHlwZVJlZikpIHtcbiAgICAgICAgLy8gaWYgKGdldENsYXNzTmFtZShjb21wKSAhPT0gdHlwZVJlZikgeyB1bmNvbW1lbnQgdGhpcyBsaW5lIGZvciBhIHN0cmljdCBtb2RlXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNDb21wb25lbnQgJiYgY2xlYW5SZWYpIHtcbiAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGNvbXAuaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgZm9yIGRlZmF1bHQgdmFsdWUgb2YgYW4gb2JqZWN0ICh7fSBvciBudWxsKVxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpICYmXG4gICAgICAgICAgZmllbGQgIT09IG51bGwgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoID4gMDpcbiAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJykgJiYgZmllbGQgIT09ICcnOlxuICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciBkYXRlID0gbnVsbDtcbiAgICB2YXIgdHlwZUFycmF5ID0gJyc7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ2FueSc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgdHlwZVNjaGVtYSwgc3RyaWN0LCBjbGVhblJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVTY2hlbWEgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShmaWVsZCk7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSAhaXNOYU4oZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBnZXRSZWFsVHlwZShmaWVsZCkgIT09IHR5cGVTY2hlbWEgJiZcbiAgICAgICAgICAgICAgICBnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhbnknXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICB0eXBlQXJyYXkgPSB0eXBlU2NoZW1hWzBdO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGRbaV0sIHR5cGVBcnJheSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWV4cG9ydHMuaXNDbGFzc05hbWUodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGdldFJlYWxUeXBlKGZpZWxkW2ldKSAhPT0gdHlwZUFycmF5ICYmXG4gICAgICAgICAgICAgICAgICB0eXBlQXJyYXkgIT09ICdhbnknXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVBcnJheSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZFtpXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAvLyBDYXNlIG9mIGFuIGltcG9ydCBvZiBhIHN5c3RlbVxuICAgICAgICAgICAgICAgICAgaWYgKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgIWV4cG9ydHMuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDbGFzc05hbWUoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVhbENsYXNzTmFtZSh0eXBlQXJyYXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSlcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkW2ldICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhZXhwb3J0cy5pbmhlcml0RnJvbShcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDbGFzc05hbWUoZmllbGRbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSksXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0gPSBmaWVsZFtpXS5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgJ2FycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICRsb2cudW5rbm93blR5cGUoZmllbGQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvLyBjaGVjayBpZiBvYmplY3RcbiAgaWYgKCFoYXNUeXBlKG9iamVjdCwgJ29iamVjdCcpKSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkVHlwZShvYmplY3QsICdvYmplY3QnKTtcbiAgfVxuXG4gIC8vIHR5cGVcbiAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgIGlmICghaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpIHx8IGZpZWxkTmFtZSA9PT0gJ19jb3JlJykge1xuICAgICAgLy8gY2FzZSBvZiBfY29yZVxuICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gJ19jb3JlJykge1xuICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTY2hlbWEgPSAnYm9vbGVhbic7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhcyBvZiBfaWRcbiAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdfaWQnKSB7XG4gICAgICAgIHR5cGVTY2hlbWEgPSAnc3RyaW5nJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZVNjaGVtYSk6XG4gICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVTY2hlbWEpOlxuICAgICAgICByZXN1bHQgPSBfaXNWYWxpZENsYXNzTmFtZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gbWFuZGF0b3J5XG4gIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgIGlmIChvYmplY3QgJiYgaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAobWFuZGF0b3J5ID09PSB0cnVlKSB7XG4gICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFByZXBhcmUgdGhlIG9iamVjdCBpbiBvcmRlciB0byBiZSBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogQG1ldGhvZCBwcmVwYXJlT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byBwcmVwYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKi9cbmV4cG9ydHMucHJlcGFyZU9iamVjdCA9IGZ1bmN0aW9uIHByZXBhcmVPYmplY3Qob2JqZWN0LCBzY2hlbWEpIHtcbiAgdmFyIGZpZWxkTmFtZSA9ICcnO1xuICB2YXIgZmllbGQgPSBudWxsO1xuICB2YXIgbWFuZGF0b3J5ID0gdHJ1ZTtcbiAgdmFyIGRlZmF1bHRWYWx1ZSA9ICcnO1xuXG4gIC8vIG1hbmRhdG9yeSAmIGRlZmF1bHQgdmFsdWVcbiAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdDtcbiAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAobWFuZGF0b3J5ID09PSBmYWxzZSAmJiAhaGFzVHlwZShkZWZhdWx0VmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5nZXRTY2hlbWEgPSBmdW5jdGlvbiBnZXRTY2hlbWEobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdKSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybnMge09iamVjdH0gdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgbW9kZWxcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbCA9IGZ1bmN0aW9uIGdldE1vZGVsKG5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSkge1xuICAgIHJlc3VsdCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEdldCBhIHR5cGVcbiAqL1xuZXhwb3J0cy5nZXRUeXBlID0gZnVuY3Rpb24gZ2V0VHlwZShuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmIChzdG9yZS50eXBlW25hbWVdICYmIHN0b3JlLnR5cGVbbmFtZV0pIHtcbiAgICByZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLnR5cGVbbmFtZV0pKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldE1vZGVsUGF0aFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGF0aCBvZiB0aGUgc3RydWN0dXJlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHlwZSBvZiBhIG1vZGVsIHBhdGhcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbFBhdGhUeXBlID0gZnVuY3Rpb24gZ2V0TW9kZWxQYXRoVHlwZShtb2RlbCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIHN1YnBhdGhzID0gW107XG4gIHZhciBzdWJwYXRoID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBzdHJ1Y3R1cmUgPSAnJztcblxuICBzdWJwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgbGVuZ3RoID0gc3VicGF0aHMubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHN1YnBhdGggPSBzdWJwYXRoc1tpXTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0gZXhwb3J0cy5nZXRNb2RlbChtb2RlbClbc3VicGF0aF0udHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZXN1bHQpKSB7XG4gICAgICAgIHN0cnVjdHVyZSA9IGV4cG9ydHMuZ2V0VHlwZShyZXN1bHQpO1xuICAgICAgICBpZiAoc3RydWN0dXJlLnNjaGVtYSkge1xuICAgICAgICAgIHJlc3VsdCA9IHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0udHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZShtb2RlbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFN0YXRlKG1vZGVsLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkTW9kZWxQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHBhdGggb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcGF0aCBpcyB2YWxpZCBmb3IgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBwYXRoIGlzIHZhbGlkIG1vZGVsIHBhdGhcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkTW9kZWxQYXRoID0gZnVuY3Rpb24gaXNWYWxpZE1vZGVsUGF0aChtb2RlbCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgc3VicGF0aHMgPSBbXTtcbiAgdmFyIHN1YnBhdGggPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHN0cnVjdHVyZSA9ICcnO1xuXG4gIHN1YnBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICBsZW5ndGggPSBzdWJwYXRocy5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc3VicGF0aCA9IHN1YnBhdGhzW2ldO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICB0eXBlID0gZXhwb3J0cy5nZXRNb2RlbChtb2RlbClbc3VicGF0aF0udHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlKSkge1xuICAgICAgICBzdHJ1Y3R1cmUgPSBleHBvcnRzLmdldFR5cGUodHlwZSk7XG4gICAgICAgIGlmIChzdHJ1Y3R1cmUuc2NoZW1hICYmIHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0pIHtcbiAgICAgICAgICB0eXBlID0gc3RydWN0dXJlLnNjaGVtYVtzdWJwYXRoXS50eXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgbWV0YWRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbFxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuZ2V0TWV0YURlZiA9IGZ1bmN0aW9uIGdldE1ldGFEZWYoKSB7XG4gIHZhciByZXN1bHQgPSBzdG9yZS5tZXRhZGVmLnNjaGVtYTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm5zIHtBcnJheX0gaWQgaWQgb2YgdGhlIHBhcmVudHNcbiAqIEBkZXNjcmlwdGlvbiBHZXQgcGFyZW50cyBvZiBhIHNjaGVtYSBpZiBhbnlcbiAqL1xuZXhwb3J0cy5nZXRQYXJlbnRzID0gZnVuY3Rpb24gZ2V0UGFyZW50cyhpZCkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKCFzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdKSB7XG4gICAgcmVzdWx0ID0gW107XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5zbGljZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqL1xuZXhwb3J0cy5pbmhlcml0RnJvbSA9IGZ1bmN0aW9uIGluaGVyaXRGcm9tKG5hbWUsIHBhcmVudE5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZWFyY2hQYXJlbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYW5jZXN0b3JOYW1lIG9mIHRoZSBwYXJlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICAgKi9cbiAgZnVuY3Rpb24gX3NlYXJjaFBhcmVudChjbGFzc05hbWUsIGFuY2VzdG9yTmFtZSkge1xuICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2U7XG4gICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKGNsYXNzTmFtZSk7XG4gICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAocGFyZW50cy5pbmRleE9mKGFuY2VzdG9yTmFtZSkgIT09IC0xKSB7XG4gICAgICAgIGlzQW5jZXN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXNBbmNlc3RvciA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgYW5jZXN0b3JOYW1lKTtcbiAgICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0FuY2VzdG9yO1xuICB9XG5cbiAgaWYgKG5hbWUgIT09IHBhcmVudE5hbWUpIHtcbiAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKG5hbWUpO1xuICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAocGFyZW50cy5pbmRleE9mKHBhcmVudE5hbWUpICE9PSAtMSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBwYXJlbnROYW1lKTtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmlzQ2xhc3NOYW1lID0gZnVuY3Rpb24gaXNDbGFzc05hbWUodmFsdWUpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKTtcblxuICBpZiAocmVzdWx0KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHN0b3JlLmdlbmVyYXRlZE1vZGVscykubGVuZ3RoID4gMCkge1xuICAgICAgbmFtZSA9IHZhbHVlLnJlcGxhY2UoJ0AnLCAnJyk7XG4gICAgICByZXN1bHQgPSB0eXBlb2Ygc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdICE9PSAndW5kZWZpbmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHN5c3RlbVxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBTeXN0ZW0gUnVudGltZS5cbiAqIEl0IGluaXRzIFN5c3RlbSBSdW50aW1lIG1ldGFtb2RlbCBhbmQgbG9hZHMgU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBhZGQgcmVxdWlyZSBhdCBnbG9iYWwgbGV2ZWxcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBnbG9iYWwucmVxdWlyZSA9IHJlcXVpcmU7XG59XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJHN5c3RlbSA9IHJlcXVpcmUoJy4uL2J1aWxkL3N5c3RlbS9zeXN0ZW0uanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuLyogUHJpdmF0ZSBQcm9wZXJ0eSAqL1xuXG52YXIgc3l0ZW1JZCA9ICcnO1xudmFyIHN5c3RlbSA9ICcnO1xudmFyIGNoYW5uZWwgPSBudWxsO1xuXG4vLyBwb2x5ZmlsbFxuJGhlbHBlci5wb2x5ZmlsbCgpO1xuXG4vLyBpbml0IE1ldGFtb2RlbFxuJG1ldGFtb2RlbC5pbml0KCk7XG5cbi8vIGluaXQgcnVudGltZSBmcm9tIGEgc3lzdGVtXG5zeXRlbUlkID0gJGRiLmltcG9ydFN5c3RlbSgkc3lzdGVtLnN5c3RlbSk7XG5cbnN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5dGVtSWQpO1xuY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XG5cbnN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XG5jaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3l0ZW1JZCk7XG5zeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XG5jaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXRlbUlkKTtcbnN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcbmNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoc3l0ZW1JZCk7XG5cbnN5c3RlbS5zdGFydCgpO1xuXG5zeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xuXG4vKiBQdWJsaWMgcHJvcGVydHkgKi9cblxuLyoqXG4gKiBAcHJvcGVydHkgcnVudGltZVxuICogQHR5cGUgX1J1bnRpbWVcbiAqIEBkZXNjcmlwdGlvbiBfUnVudGltZSBpbnN0YW5jZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9ICRjb21wb25lbnQuZ2V0KCdydW50aW1lJyk7XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHN0YXRlXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZWNvbXBvbmVudHNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgc3RvcmUgPSB7fTtcblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZCBvbiB3aGljaCBjaGFuZ2UgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnNldCA9IGZ1bmN0aW9uIHNldChpZCwgc3RhdGUsIHZhbHVlKSB7XG4gIHN0b3JlW2lkXSA9IHtcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG4gICRkYi5zdG9yZS5fU3RhdGVbaWRdID0ge1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldChpZCkge1xuICByZXR1cm4gc3RvcmVbaWRdO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFsbCB0aGUgc3RhdGVzIG9mIHRoZSBjb21wb25lbnRzIGZyb20gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSB3b3JrZmxvd1xuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBkYlxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIFN5c3RlbSBSdW50aW1lLlxuICogSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDpcbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LFxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmRcbiAqIC0gdGhlIG91dHB1dCBvZiBhbGwgYWN0aW9ucyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbC5cbiAqXG4gKiBJZiBhbiBlcnJvciBvY2N1cnMsIHRoZSB3b3JrZmxvdyB3aWxsIGNhbGwgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgYW5kIHJ1bnRpbWUuXG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBjbGFzcyBSdW50aW1lRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBvZiB0aGUgZXJyb3JcbiAqIEBkZXNjcmlwdGlvbiBUaGUgUnVudGltZUVycm9yIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFJ1bnRpbWVFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubmFtZSA9ICdSdW50aW1lRXJyb3InO1xufVxuUnVudGltZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuUnVudGltZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJ1bnRpbWVFcnJvcjtcblxuLyoqXG4gKiBAbWV0aG9kIGlzTW9kZWxQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgdmFsdWUgYSBtb2RlbCBwYXRoXG4gKi9cbmZ1bmN0aW9uIGlzTW9kZWxQYXRoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBuYW1lcyBvZiBhbGwgcGFyYW1ldGVycyBvZiB0aGUgbWV0aG9kIGZvciB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgbmFtZXMgb2YgdGhlIHBhcmFtZXRlciBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc01vZGVsUGF0aChtZXRob2ROYW1lKSkge1xuICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtBcnJheX0gbnVtYmVyIG9mIHBhcmFtZXRlcnMgbWluIGFuZCBtYXggZm9yIHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBudW1iZXIgb2YgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU51bWJlcihpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbDtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBtaW4gPSAwO1xuICB2YXIgbWF4ID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2YgcGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIG1pbiA9IG1pbiArIDE7XG4gICAgICAgIH1cbiAgICAgICAgbWF4ID0gbWF4ICsgMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWluKTtcbiAgICByZXN1bHQucHVzaChtYXgpO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIHNldERlZmF1bHRWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIGFyZ3VtZW50c1xuICogQHJldHVybnMge0FycmF5fSBhcmd1bWVudHMgd2l0aCBkZWZhdWx0IHZhbHVlc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBzZXREZWZhdWx0VmFsdWUoaWQsIG1ldGhvZE5hbWUsIGFyZ3MpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGw7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSBmYWxzZSAmJiB0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0uZGVmYXVsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmV0dXJuVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgdHlwZSByZXR1cm5lZCBieSB0aGUgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHlwZSByZXR1cm5lZCBieSBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRSZXR1cm5UeXBlKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciByZXN1bHRUeXBlID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgcmVzdWx0VHlwZSA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdLnJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAocmVzdWx0VHlwZSkge1xuICAgIHJlc3VsdCA9IHJlc3VsdFR5cGU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtVHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge0FycmF5fSB0aGUgdHlwZXMgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbVR5cGVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS50eXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tSZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBvdXRwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tSZXN1bHQocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsO1xuICB2YXIgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8ICcnO1xuICB2YXIgbWV0aG9kUmVzdWx0ID0gbnVsbDtcbiAgdmFyIHR5cGVvZk1ldGhvZFJlc3VsdCA9ICcnO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciByZXR1cm5UeXBlID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMubWV0aG9kUmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1ldGhvZFJlc3VsdCA9IHBhcmFtcy5tZXRob2RSZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kUmVzdWx0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICByZXR1cm5UeXBlID0gZ2V0UmV0dXJuVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gIGlmIChyZXR1cm5UeXBlICE9PSBudWxsKSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHJldHVyblR5cGUgPT09ICdhbnknOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcmV0dXJuVHlwZSA9PT0gJ2FycmF5JzpcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1ldGhvZFJlc3VsdCkpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKFxuICAgICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocmV0dXJuVHlwZSk6XG4gICAgICAgIGlmIChtZXRob2RSZXN1bHQuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICBpZiAobWV0aG9kUmVzdWx0LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHR5cGVvZk1ldGhvZFJlc3VsdCA9IG1ldGhvZFJlc3VsdC5uYW1lO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0eXBlb2ZNZXRob2RSZXN1bHQgPSBtZXRob2RSZXN1bHQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZk1ldGhvZFJlc3VsdCAhPT0gcmV0dXJuVHlwZS5yZXBsYWNlKCdAJywgJycpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgbWV0aG9kTmFtZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZSxcbiAgICAgICAgICAgICAgdHlwZW9mTWV0aG9kUmVzdWx0XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKFxuICAgICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgICBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlLFxuICAgICAgICAgICAgdHlwZW9mIG1ldGhvZFJlc3VsdFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZFJlc3VsdCAhPT0gcmV0dXJuVHlwZSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoXG4gICAgICAgICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgICAgICAgIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgbWV0aG9kTmFtZSxcbiAgICAgICAgICAgIHJldHVyblR5cGUsXG4gICAgICAgICAgICB0eXBlb2YgbWV0aG9kUmVzdWx0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBhIFN5c3RlbSBSdW50aW1lIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCB0cnVlIGlmIHRoZSBzdGF0ZSBpcyBhbiBldmVudFxuICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIHRoZSBhY3Rpb25zXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgYWN0aW9ucyBvZiB0aGUgc3BlY2lmaWVkIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoY29tcG9uZW50LCBuYW1lLCBpc0V2ZW50KSB7XG4gIHZhciBhY3Rpb24gPSAkYmVoYXZpb3IuZ2V0QWN0aW9ucyhjb21wb25lbnQuaWQoKSwgbmFtZSk7XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBwYXJlbnQgPSBudWxsO1xuXG4gIGlmICghYWN0aW9uLmxlbmd0aCB8fCBpc0V2ZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KFxuICAgICAgICBnZXRBY3Rpb25zKCRjb21wb25lbnQuZ2V0KGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKSwgbmFtZSwgaXNFdmVudClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudHMgPSAkbWV0YW1vZGVsLmdldFBhcmVudHMoY29tcG9uZW50Lm5hbWUpO1xuICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gJGNvbXBvbmVudC5nZXQocGFyZW50c1tpXSk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMocGFyZW50LCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGxvZy51bmtub3duQ29tcG9uZW50KHBhcmVudHNbaV0sIGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICBhY3Rpb24ucmV2ZXJzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNhbGxBY3Rpb25cbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCBpcyB0aGUgYWN0aW9uIGEgY2FsbGJhY2sgb2YgYW4gZXZlbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICogQGRlc2NyaXB0aW9uIENhbGwgYW4gYWN0aW9uIGFuZCBtYWtlIHNvbWUgRGVwZW5kZW5jeSBJbmplY3Rpb24gaWYgaXQgaXMgYSBjb3JlIGFjdGlvblxuICovXG5mdW5jdGlvbiBjYWxsQWN0aW9uKGNvbXBvbmVudCwgc3RhdGUsIGFjdGlvbiwgcGFyYW1zLCBpc0V2ZW50KSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgaW5qZWN0ZWRQYXJhbXMgPSBbXTtcbiAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgaWYgKFxuICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkgJiZcbiAgICAhJG1ldGFtb2RlbC5pc0xpbmsoc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkgJiZcbiAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSlcbiAgKSB7XG4gICAgcGFyYW1zID0gc2V0RGVmYXVsdFZhbHVlKGNvbXBvbmVudENsYXNzTmFtZSwgc3RhdGUsIHBhcmFtcyk7XG4gIH1cblxuICB0cnkge1xuICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKHBhcmFtc1tpXSk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24udXNlQ29yZUFQSSkge1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkY29tcG9uZW50KTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGRiKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJG1ldGFtb2RlbCk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKGV4cG9ydHMpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkYmVoYXZpb3IpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkc3RhdGUpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkbG9nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgYWN0aW9uLmFjdGlvbi5iaW5kLmFwcGx5KFxuICAgICAgICAgIGFjdGlvbi5hY3Rpb24sXG4gICAgICAgICAgW2NvbXBvbmVudF0uY29uY2F0KGluamVjdGVkUGFyYW1zKVxuICAgICAgICApLFxuICAgICAgICAwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgaW5qZWN0ZWRQYXJhbXMpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgUnVudGltZUVycm9yKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3IEZ1bmN0aW9uKCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdydW50aW1lOiBjYW4gbm90IGV4ZWN1dGUgbmV3IEZ1bmN0aW9uKCkgaW5zdHJ1Y3Rpb24gaW4gdGhlIGN1cnJlbnQgY29udGV4dC4nXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lcnJvcikge1xuICAgICAgICAgIGNvbXBvbmVudC5lcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICAgICAgICBzdGF0ZSArXG4gICAgICAgICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgICAgICAgY29tcG9uZW50LmlkKCkgK1xuICAgICAgICAgICAgICBcIidcIixcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRoZWxwZXIuZ2V0UnVudGltZSgpKSB7XG4gICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkuZXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgICAgICAgc3RhdGUgK1xuICAgICAgICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5pZCgpICtcbiAgICAgICAgICAgICAgXCInXCIsXG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICRsb2cuYWN0aW9uSW52b2tlRXJyb3IoXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgZS5tZXNzYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIHZhbGlkUGFyYW1OdW1iZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiBhcHBsaWVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gYWN0aW9uXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYWN0aW9uIGlzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyc1xuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGFjdGlvbiBoYXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0cy52YWxpZFBhcmFtTnVtYmVycyA9IGZ1bmN0aW9uIHZhbGlkUGFyYW1OdW1iZXJzKFxuICBjbGFzc05hbWUsXG4gIHN0YXRlLFxuICBhY3Rpb25cbikge1xuICB2YXIgZnVuYyA9ICcnO1xuICB2YXIgYmVnaW5Cb2R5ID0gLTE7XG4gIHZhciBoZWFkZXIgPSAnJztcbiAgdmFyIGZ1bmNQYXJhbXMgPSAnJztcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcGFyYW1OdW1iZXIgPSAwO1xuICB2YXIgbW9kZWxOdW1iZXJQYXJhbSA9IFtdO1xuICB2YXIgaXNQcm9wZXJ0eSA9IGZhbHNlO1xuICB2YXIgaXNMaW5rID0gZmFsc2U7XG4gIHZhciBpc0NvbGxlY3Rpb24gPSBmYWxzZTtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gIC8vIGNoZWNrIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAgZnVuYyA9IGFjdGlvbi50b1N0cmluZygpO1xuICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgaGVhZGVyID0gaGVhZGVyLnJlcGxhY2UoJz0+JywgJycpO1xuXG4gIGlmIChoZWFkZXIuaW5kZXhPZignKCcpICE9PSAtMSkge1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXJcbiAgICAgIC5zcGxpdCgnKCcpWzFdXG4gICAgICAucmVwbGFjZSgnKScsICcnKVxuICAgICAgLnRyaW0oKTtcbiAgfSBlbHNlIHtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnRyaW0oKTtcbiAgfVxuXG4gIHBhcmFtcyA9IGZ1bmNQYXJhbXMuc3BsaXQoJywnKTtcbiAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICBwYXJhbXMgPSBbXTtcbiAgfVxuICBwYXJhbU51bWJlciA9IHBhcmFtcy5sZW5ndGg7XG5cbiAgLy8gZ2V0IHRoZSBudW1iZXIgbWluIGFuZCBtYXggb2YgdmFsaWQgcGFyYW1ldGVyc1xuICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc05hbWUpO1xuICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzTmFtZSk7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0NvbGxlY3Rpb246XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gWzIsIDJdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWxQYXRoVHlwZShjbGFzc05hbWUsIHN0YXRlKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gWzIsIDJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaXNMaW5rOlxuICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gZ2V0UGFyYW1OdW1iZXIoY2xhc3NOYW1lLCBzdGF0ZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIGNvbXBhcmVcbiAgaWYgKFxuICAgIG1vZGVsTnVtYmVyUGFyYW1bMF0gPD0gcGFyYW1OdW1iZXIgJiZcbiAgICBwYXJhbU51bWJlciA8PSBtb2RlbE51bWJlclBhcmFtWzFdXG4gICkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb24gb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgY2FsbGluZyB0aGUgYWN0aW9uXG4gKi9cbmV4cG9ydHMuY2hlY2tQYXJhbXMgPSBmdW5jdGlvbiBjaGVja1BhcmFtcyhwYXJhbXMpIHtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGw7XG4gIHZhciBtZXRob2ROYW1lID0gcGFyYW1zLm1ldGhvZE5hbWUgfHwgJyc7XG4gIHZhciBhcmdzID0gcGFyYW1zLmFyZ3MgfHwgJyc7XG4gIHZhciBwYXJhbXNOYW1lID0gW107XG4gIHZhciBwYXJhbXNUeXBlID0gW107XG4gIHZhciBwYXJhbXNOdW1iZXIgPSBbXTtcbiAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuICB2YXIgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHBhcmFtID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuXG4gIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNDb2xsZWN0aW9uOlxuICAgICAgaWYgKGFyZ3MgJiYgYXJnc1sxXSAmJiBhcmdzWzFdID09PSAncmVzZXQnKSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXG4gICAgICAgICAgWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlWzBdXSxcbiAgICAgICAgICAnc3RyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtcbiAgICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZVswXSxcbiAgICAgICAgICAnc3RyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcGFyYW1zTnVtYmVyID0gWzIsIDJdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgaWYgKGlzTW9kZWxQYXRoKG1ldGhvZE5hbWUpKSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXG4gICAgICAgICAgJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSlcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVdO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsUGF0aFR5cGUoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKSA9PT0gJ2FycmF5J1xuICAgICAgKSB7XG4gICAgICAgIGlmIChhcmdzICYmIGFyZ3NbMV0gJiYgYXJnc1sxXSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAgIHBhcmFtc1R5cGUgPSBbWydhbnknXSwgJ3N0cmluZyddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1R5cGUgPSBbJ2FueScsICdzdHJpbmcnXTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMiwgMl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIGlzTGluazpcbiAgICAgIHBhcmFtc1R5cGUgPSBbJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVdO1xuICAgICAgcGFyYW1zTnVtYmVyID0gWzEsIDFdO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHBhcmFtc1R5cGUgPSBnZXRQYXJhbVR5cGVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICBwYXJhbXNOdW1iZXIgPSBnZXRQYXJhbU51bWJlcihjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICAvLyBjYXNlIG9mIG9iamVjdFxuICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZW5ndGggPSAxO1xuICB9XG5cbiAgaWYgKGxlbmd0aCA8IHBhcmFtc051bWJlclswXSB8fCBwYXJhbXNOdW1iZXJbMV0gPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihcbiAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICBtZXRob2ROYW1lXG4gICAgKTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHBhcmFtID0gYXJnc1tpXTtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGkgPCBwYXJhbXNOdW1iZXJbMF0pIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKFxuICAgICAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgICAgIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgIG1ldGhvZE5hbWVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoISRtZXRhbW9kZWwuaXNWYWxpZFR5cGUocGFyYW0sIHBhcmFtc1R5cGVbaV0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRQYXJhbVR5cGUoXG4gICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgbWV0aG9kTmFtZSxcbiAgICAgICAgICBwYXJhbXNOYW1lW2ldXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEBkZXNjcmlwdGlvbiBDYWxsIGFuIGFjdGlvbiB0aGF0IGNvbWVzIGZyb20gYW4gZXZlbnRcbiAqL1xuZXhwb3J0cy5hY3Rpb24gPSBmdW5jdGlvbiBhY3Rpb24oYmVoYXZpb3JJZCwgcGFyYW1zKSB7XG4gIHZhciBpc0V2ZW50ID0gZmFsc2U7XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgYmVoYXZpb3JzID0gW107XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBjb21wb25lbnQgPSBudWxsO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciBhY3Rpb25Gcm9tTWVtb3J5ID0gbnVsbDtcblxuICBiZWhhdmlvcnMgPSAkZGIuX0JlaGF2aW9yLmZpbmQoe1xuICAgIF9pZDogYmVoYXZpb3JJZFxuICB9KTtcblxuICBhY3Rpb25Gcm9tTWVtb3J5ID0gJGJlaGF2aW9yLmdldChiZWhhdmlvcklkKTtcblxuICBpZiAoYmVoYXZpb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgIGJlaGF2aW9yID0gYmVoYXZpb3JzWzBdO1xuXG4gICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoYmVoYXZpb3IuY29tcG9uZW50KTtcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgIH1cblxuICAgICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKFxuICAgICAgICBiZWhhdmlvci5zdGF0ZSxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lXG4gICAgICApO1xuXG4gICAgICBpZiAoaXNFdmVudCB8fCBpc1Byb3BlcnR5IHx8IGlzQ29sbGVjdGlvbiB8fCBpc0xpbmspIHtcbiAgICAgICAgY2FsbEFjdGlvbihcbiAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgYmVoYXZpb3Iuc3RhdGUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXNlQ29yZUFQSTogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uRnJvbU1lbW9yeVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbXMgdG8gY2hhbmdlIHRoZSBzdGF0ZVxuICoge1N0cmluZ30gY29tcG9uZW50IGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqIHtBcnJheX0gZGF0YSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIGFjdGlvblxuICogQGRlc2NyaXB0aW9uIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBXb3JrbG93OlxuICpcbiAqIDAuIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGRlc3Ryb3llZFxuICogMS4gQ2hlY2sgaWYgdGhlIHN0YXRlIGlzIGEgbWV0aG9kLCBhIHByb3BlcnR5IG9yIGFuIGV2ZW50XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFjdGlvbnMgZm9yIHRoZSBuZXcgc3RhdGVcbiAqIDMuIElmIHNvLCBnZXQgdGhlIGFjdGlvbihzKVxuICogNC4gQ2hlY2sgaWYgdGhlIGlucHV0cyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIDUuIENhbGwgdGhlIGFjdGlvbihzKVxuICogNi4gSWYgYSBtZXRob2QsIGNoZWNrIGlmIHRoZSBvdXRwdXQgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWRcbiAqIDguIFJldHVybiB0aGUgcmVzdWx0XG4gKi9cbmV4cG9ydHMuc3RhdGUgPSBmdW5jdGlvbiBzdGF0ZShwYXJhbXMpIHtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICBwYXJhbXMuY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCAnJztcbiAgcGFyYW1zLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICcnO1xuICBwYXJhbXMuZGF0YSA9IHBhcmFtcy5kYXRhIHx8IFtdO1xuICBwYXJhbXMuY29udGV4dCA9IHBhcmFtcy5jb250ZXh0IHx8IG51bGw7XG5cbiAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gIHZhciBjdXJyZW50U3RhdGUgPSAnJztcbiAgdmFyIGFjdGlvbnMgPSBbXTtcbiAgdmFyIGFjdGlvbiA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gZmFsc2U7XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgaXNFdmVudCA9IGZhbHNlO1xuXG4gIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG5cbiAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuc3RhdGUgPT09ICdkZXN0cm95Jykge1xuICAgICRsb2cuaW52YWxpZFVzZU9mQ29tcG9uZW50KHBhcmFtcy5jb21wb25lbnQpO1xuICB9XG5cbiAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG4gICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBhY3Rpb25zID0gZ2V0QWN0aW9ucyhjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgaXNFdmVudCk7XG4gIH1cblxuICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBleHBvcnRzLmNoZWNrUGFyYW1zKHtcbiAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgIG1ldGhvZE5hbWU6IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgYXJnczogcGFyYW1zLmRhdGFcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoIWlzRXZlbnQgJiYgIWlzUHJvcGVydHkgJiYgIWlzTGluayAmJiAhaXNDb2xsZWN0aW9uKSB7XG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbMF07XG4gICAgICAgIHJlc3VsdCA9IGNhbGxBY3Rpb24oXG4gICAgICAgICAgcGFyYW1zLmNvbnRleHQgfHwgY29tcG9uZW50LFxuICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgcGFyYW1zLmRhdGEsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICBjaGVja1Jlc3VsdCh7XG4gICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgbWV0aG9kTmFtZTogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgIG1ldGhvZFJlc3VsdDogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbaV07XG4gICAgICAgICAgY2FsbEFjdGlvbihcbiAgICAgICAgICAgIHBhcmFtcy5jb250ZXh0IHx8IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgIHBhcmFtcy5kYXRhLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUsIHBhcmFtcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY29tcG9uZW50ICYmIChpc0V2ZW50IHx8IGlzUHJvcGVydHkgfHwgaXNMaW5rIHx8IGlzQ29sbGVjdGlvbikpIHtcbiAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSwgcGFyYW1zLmRhdGEpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1ldGVyc1xuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSlcbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKiBAZGVzY3JpcHRpb24gU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lXG4gKi9cbmV4cG9ydHMuc3RvcCA9IGZ1bmN0aW9uIHN0b3AocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIHBhcmFtcy5lcnJvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwYXJhbXMuZXJyb3IgPSBmYWxzZTtcbiAgfVxuICBwYXJhbXMubWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlIHx8ICcnO1xuXG4gIGV4cG9ydHMuc3RhdGUgPSBmdW5jdGlvbiBzdGF0ZSgpIHt9O1xuXG4gIGlmIChwYXJhbXMuZXJyb3IpIHtcbiAgICBpZiAocGFyYW1zLm1lc3NhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICdydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSAnICsgcGFyYW1zLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICdydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSBvZiBhbiB1bmtub3duIGVycm9yJ1xuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtcy5tZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAncnVudGltZTogcnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgJyArIHBhcmFtcy5tZXNzYWdlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdydW50aW1lOiBydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQnKTtcbiAgICB9XG4gIH1cbn07XG4iXX0=
