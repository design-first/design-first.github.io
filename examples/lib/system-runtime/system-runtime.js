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
exports.system = 
{"name":"system-runtime","master":false,"version":"2.7.0","description":"System Runtime","schemas":{"1ac07185641fa9f":{"_name":"_Behavior","_inherit":["_Component"],"_core":true,"core":"property","component":"property","action":"property","state":"property","useCoreAPI":"property","context":"property","_id":"1ac07185641fa9f"},"104ad1f48518376":{"_id":"104ad1f48518376","_name":"_Channel","_inherit":["_Component"],"_core":true,"send":"event","$systemInstalled":"event","$systemResolved":"event","$systemStarted":"event","$systemStopped":"event","$systemUninstalled":"event"},"1c00b13a1b1bc92":{"_name":"_ClassInfo","_inherit":["_Component"],"_core":true,"model":"property","schema":"property","method":"method","methods":"method","property":"method","properties":"method","link":"method","links":"method","collections":"method","collection":"method","event":"method","events":"method","_id":"1c00b13a1b1bc92"},"111df11e2b19fde":{"_id":"111df11e2b19fde","_name":"_Component","_inherit":[],"_core":true,"classInfo":"method","on":"method","off":"method","require":"method","destroy":"method","init":"method","error":"event"},"1723516a30132ac":{"_name":"_Database","_inherit":["_Component"],"_core":true,"collections":"method","insert":"event","update":"event","remove":"event","_id":"1723516a30132ac"},"f1a10d1067d1b23a":{"_id":"f1a10d1067d1b23a","_name":"_Log","_inherit":["_Component"],"_core":true,"action":"property","collection":"property","id":"property","field":"property","value":"property","order":"property"},"1268f1dddd1fea7":{"_name":"_Logger","_core":true,"level":"property","debug":"method","info":"method","warn":"method","error":"method","_id":"1268f1dddd1fea7"},"14caa1c46414ee1":{"_name":"_Message","_inherit":["_Component"],"_core":true,"event":"property","from":"property","data":"property","_id":"14caa1c46414ee1"},"193f1166eb16609":{"_name":"_Metamodel","_inherit":["_Component"],"_core":true,"schema":"method","model":"method","type":"method","create":"method","_id":"193f1166eb16609"},"157931f7a31b61d":{"_id":"157931f7a31b61d","_name":"_OSGi","_inherit":["_Component"],"_core":true,"install":"method","uninstall":"method","start":"method","stop":"method","status":"method","bundle":"method"},"12e211d4cd120a6":{"_id":"12e211d4cd120a6","_name":"_Runtime","_inherit":["_OSGi"],"_core":true,"version":"property","system":"method","message":"method","ready":"event"},"158711d6f215e4b":{"_name":"_State","_inherit":[],"_core":true,"_class":false,"state":"property","value":"property","_id":"158711d6f215e4b"},"1cb761fa4510dca":{"_id":"1cb761fa4510dca","_name":"_System","_inherit":["_SystemOSGi"],"_core":true,"name":"property","master":"property","version":"property","description":"property","schemas":"property","models":"property","behaviors":"property","types":"property","components":"property"},"145fe10c7514298":{"_id":"145fe10c7514298","_name":"_SystemOSGi","_inherit":["_Component"],"_core":true,"state":"property","location":"property","start":"method","stop":"method"}},"models":{"166971fd9d107fd":{"_name":"_Behavior","_core":true,"context":{"type":"any","readOnly":false,"mandatory":false,"default":null},"core":{"type":"boolean","readOnly":false,"mandatory":false,"default":false},"useCoreAPI":{"type":"any","readOnly":false,"mandatory":false,"default":false},"component":{"type":"string","readOnly":false,"mandatory":true,"default":""},"action":{"type":"javascript","readOnly":false,"mandatory":true,"default":""},"state":{"type":"string","readOnly":false,"mandatory":true,"default":""},"_id":"166971fd9d107fd"},"135c71078810af2":{"_id":"135c71078810af2","_name":"_Channel","_core":true,"send":{"params":[{"name":"message","type":"message"}]},"$systemInstalled":{"params":[{"name":"id","type":"string","mandatory":true,"default":""}]},"$systemResolved":{"params":[{"name":"id","type":"string","mandatory":true,"default":""}]},"$systemUninstalled":{"params":[{"name":"id","type":"string","mandatory":true,"default":""}]},"$systemStarted":{"params":[{"name":"id","type":"string","mandatory":true,"default":""}]},"$systemStopped":{"params":[{"name":"id","type":"string","mandatory":true,"default":""}]}},"158321dced1014a":{"_name":"_ClassInfo","_core":true,"model":{"type":"object","readOnly":true,"mandatory":true,"default":{}},"property":{"params":[{"name":"name","type":"string"}],"result":"object"},"properties":{"result":"array"},"link":{"params":[{"name":"name","type":"string"}],"result":"object"},"links":{"result":"array"},"method":{"params":[{"name":"name","type":"string"}],"result":"object"},"methods":{"result":"array"},"collection":{"params":[{"name":"name","type":"string"}],"result":"object"},"collections":{"result":"array"},"event":{"params":[{"name":"name","type":"string"}],"result":"object"},"events":{"result":"array"},"_id":"158321dced1014a","schema":{"type":"object","readOnly":true,"mandatory":true,"default":{}}},"123751cb591de26":{"_id":"123751cb591de26","_name":"_Component","_core":true,"on":{"params":[{"name":"state","type":"string"},{"name":"action","type":"function"},{"name":"useCoreAPI","type":"any","mandatory":false,"default":false},{"name":"isCore","type":"boolean","mandatory":false,"default":false}]},"off":{"params":[{"name":"state","type":"string","mandatory":false},{"name":"behaviorId","type":"string","mandatory":false}]},"require":{"params":[{"name":"id","type":"string"}]},"destroy":{"params":[]},"classInfo":{"result":"_ClassInfo"},"init":{"params":[{"name":"conf","type":"object"}]},"error":{"params":[{"name":"data","type":"errorParam"}]}},"18a51169d7112d4":{"_name":"_Database","_core":true,"collections":{"result":"object"},"insert":{"params":[{"name":"event","type":"dbInsertEvent"}]},"update":{"params":[{"name":"event","type":"dbUpdateEvent"}]},"remove":{"params":[{"name":"event","type":"dbRemoveEvent"}]},"_id":"18a51169d7112d4"},"o1e1e01e6b41cec3":{"_id":"o1e1e01e6b41cec3","_name":"_Log","action":{"type":"dbAction","readOnly":false,"mandatory":false,"default":"insert"},"collection":{"type":"string","readOnly":false,"mandatory":false,"default":""},"id":{"type":"string","readOnly":false,"mandatory":false,"default":""},"field":{"type":"string","readOnly":false,"mandatory":false,"default":""},"value":{"type":"any","readOnly":false,"mandatory":false,"default":""},"order":{"type":"number","readOnly":false,"mandatory":false,"default":0},"_core":true},"16b9d1ac2216ffe":{"_id":"16b9d1ac2216ffe","_name":"_Logger","_core":true,"level":{"type":"log","readOnly":false,"mandatory":false,"default":"warn"},"debug":{"params":[{"name":"message","type":"any"}]},"info":{"params":[{"name":"message","type":"any"}]},"warn":{"params":[{"name":"message","type":"any"}]},"error":{"params":[{"name":"message","type":"any"}]}},"1d9b6139411aa91":{"_name":"_Message","_core":true,"event":{"type":"string","readOnly":false,"mandatory":true,"default":""},"from":{"type":"string","readOnly":false,"mandatory":true,"default":""},"data":{"type":"array","readOnly":false,"mandatory":true,"default":[]},"_id":"1d9b6139411aa91"},"1628c13c22152e6":{"_name":"_Metamodel","_core":true,"schema":{"params":[{"name":"name","type":"any","default":"","mandatory":false},{"name":"schema","type":"object","default":{},"mandatory":false}],"result":"any"},"model":{"params":[{"name":"name","type":"any","default":"","mandatory":false},{"name":"model","type":"object","default":{},"mandatory":false}],"result":"any"},"type":{"params":[{"name":"name","type":"any","default":"","mandatory":false},{"name":"type","type":"object","default":{},"mandatory":false}],"result":"any"},"create":{"params":[]},"_id":"1628c13c22152e6"},"100b91ed2211b15":{"_id":"100b91ed2211b15","_name":"_OSGi","install":{"params":[{"name":"url","type":"any","mandatory":true,"default":""},{"name":"async","type":"boolean","mandatory":false,"default":true}],"result":"string"},"uninstall":{"params":[{"name":"id","type":"string","mandatory":true,"default":""}]},"start":{"params":[{"name":"id","type":"string","mandatory":true,"default":""}]},"stop":{"params":[{"name":"id","type":"string","mandatory":true,"default":""}]},"status":{"result":"object"},"_core":true,"bundle":{"result":"string"}},"14c7c105b31a160":{"_id":"14c7c105b31a160","_name":"_Runtime","_core":true,"version":{"type":"string","readOnly":true,"mandatory":true,"default":"0.0.0"},"system":{"params":[{"name":"params","type":"any","mandatory":false}],"result":"object"},"message":{"params":[{"name":"msg","type":"message","mandatory":true}]},"ready":{}},"177ac136891629f":{"_name":"_State","_core":true,"state":{"type":"string","readOnly":false,"mandatory":true,"default":""},"value":{"type":"any","readOnly":false,"mandatory":false,"default":null},"_id":"177ac136891629f"},"170521b88614387":{"_name":"_System","_core":true,"name":{"type":"string","readOnly":false,"mandatory":true,"default":""},"master":{"type":"boolean","readOnly":false,"mandatory":false,"default":false},"version":{"type":"string","readOnly":false,"mandatory":false,"default":"0.0.1"},"description":{"type":"string","readOnly":false,"mandatory":false,"default":""},"schemas":{"type":"object","readOnly":false,"mandatory":false,"default":{}},"models":{"type":"object","readOnly":false,"mandatory":false,"default":{}},"behaviors":{"type":"object","readOnly":false,"mandatory":false,"default":{}},"types":{"type":"object","readOnly":false,"mandatory":false,"default":{}},"components":{"type":"object","readOnly":false,"mandatory":false,"default":{}},"_id":"170521b88614387"},"1b2811b092143f5":{"_id":"1b2811b092143f5","_name":"_SystemOSGi","start":{},"stop":{},"_core":true,"state":{"type":"string","readOnly":false,"mandatory":false,"default":"none"},"location":{"type":"string","readOnly":false,"mandatory":false,"default":""}}},"behaviors":{"12e491859c13918":{"_id":"12e491859c13918","component":"_Channel","state":"$systemStarted","action":"function $systemStarted(id) { \n  var systems = null;\n    \n  if (id !== 'e89c617b6b15d24') {\n    if (typeof document !== 'undefined') {\n      systems = document.querySelectorAll('link[rel=system]');\n         \n      if ($state.get('runtime') && $state.get('runtime').state === 'ready') {    \n      } else {\n        if (systems.length + 1 === $db._System.count()) {\n          $component.get('runtime').ready();\n        }\n      }\n    }\n  }\n}","useCoreAPI":true,"core":true},"1e9021bd4e1bc6e":{"_id":"1e9021bd4e1bc6e","component":"_Channel","state":"$systemInstalled","action":"function $systemInstalled(id) {\n  var systems = null,\n    dependencies = [],\n    master = [],\n    canStart = true;\n\n  if (id !== 'e89c617b6b15d24') {\n    // if all systems are installed\n    systems = $db._System.find({});\n\n    systems.forEach(function (system) {\n      var sys = this.require(system._id);\n      if (sys && sys.state && sys.state() === 'none') {\n        canStart = false;\n      }\n    }.bind(this));\n\n    // start all the systems\n    if (canStart) {\n      dependencies = $db._System.find({\n        'master': false\n      });\n\n      dependencies.forEach(function (dep) {\n        var system = this.require(dep._id);\n        channel = this.require('channel');\n\n        if (system.state() === 'resolved') {\n          system.state('starting');\n          system.start();\n          channel.$systemStarted(dep._id);\n          system.state('active');\n        }\n      }.bind(this));\n\n      master = $db._System.find({\n        'master': true\n      });\n\n      master.forEach(function (dep) {\n        var system = this.require(dep._id);\n        channel = this.require('channel');\n\n        if (system && system.state && system.state() === 'resolved') {\n          system.state('starting');\n          system.start();\n          channel.$systemStarted(dep._id);\n          system.state('active');\n        }\n      }.bind(this));\n    }\n  }\n}","useCoreAPI":true,"core":true},"155141e40312cd8":{"_id":"155141e40312cd8","component":"_ClassInfo","state":"collection","action":"function collection(name) {\n  var result = {};\n  if (this.schema()[name] === 'collection') {\n    result = this.model()[name];\n  }\n\n  return result;\n}","core":true},"1f6941a0c012c1f":{"_id":"1f6941a0c012c1f","component":"_ClassInfo","state":"collections","action":"function collections(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'collection') {\n      result.push(item);\n    }\n  }\n\n  return result;\n}","core":true},"1ef711b4171c849":{"_id":"1ef711b4171c849","component":"_ClassInfo","state":"event","action":"function event(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'event') {\n    result = this.model()[name];\n  }\n\n  return result;\n}","core":true},"1bae51b6ed1d25c":{"_id":"1bae51b6ed1d25c","component":"_ClassInfo","state":"events","action":"function events(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'event') {\n      result.push(item);\n    }\n  }\n  return result;\n}","core":true},"19ac2125221528b":{"_id":"19ac2125221528b","component":"_ClassInfo","state":"link","action":"function link(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'link') {\n    result = this.model()[name];\n  }\n  return result;\n}","core":true},"17ed21dfc01b8e8":{"_id":"17ed21dfc01b8e8","component":"_ClassInfo","state":"links","action":"function links(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'link') {\n      result.push(item);\n    }\n  } return result;\n}","core":true},"11ce318a561ac61":{"_id":"11ce318a561ac61","component":"_ClassInfo","state":"method","action":"function method(name) {\n  var result = {};\n  if (this.schema()[name] === 'method') {\n    result = this.model()[name];\n  }\n  \n  return result;\n}","core":true},"12ff2190a018046":{"_id":"12ff2190a018046","component":"_ClassInfo","state":"methods","action":"function methods(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'method') {\n      result.push(item);\n    }\n  }\n\n  return result;\n}","core":true},"1028d1681e1fd58":{"_id":"1028d1681e1fd58","component":"_ClassInfo","state":"properties","action":"function properties(name) {\n  var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = keys.length;\n\n  for (i = 0; i < length; i++) {\n    item = keys[i];\n    if (this.schema()[item] === 'property') {\n      result.push(item);\n    }\n  } return result;\n}","core":true},"18eeb10c5319368":{"_id":"18eeb10c5319368","component":"_ClassInfo","state":"property","action":"function property(name) {\n  var result = {};\n\n  if (this.schema()[name] === 'property') {\n    result = this.model()[name];\n  }\n  return result;\n}","core":true},"1ba721201114b6b":{"_id":"1ba721201114b6b","component":"_Component","state":"destroy","action":"function destroy() {\n  $component.destroy(this.id());\n}","core":true,"useCoreAPI":true},"15486186f41a48c":{"_id":"15486186f41a48c","component":"_Component","state":"off","action":"function off(state, behaviorId) {\n  var args = [],\n    i = 0,\n    numInjectedParams = 8,\n    length = arguments.length;\n\n  if ($helper.isOnNode()) {\n    numInjectedParams = numInjectedParams +1;\n  }\n\n  for (i = 0; i < length - numInjectedParams; i++) {\n    args.push(arguments[i]);\n  }\n\n  if ($workflow.checkParams({\n    \"component\": this,\n    \"methodName\": \"off\",\n    \"args\": args\n  })) {\n\n    if (state || behaviorId) {\n      if ($metamodel.isValidState(state, this.constructor.name)) {\n        $behavior.remove({\n          \"behaviorId\": behaviorId,\n          \"componentId\": this.id(),\n          \"state\": state\n        });\n      } else {\n        this.require('logger').warn(\"invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\");\n      }\n    } else {\n      $behavior.remove({\n        \"componentId\": this.id()\n      });\n    }\n  }\n}","core":true,"useCoreAPI":true},"1da0a17878104c3":{"_id":"1da0a17878104c3","component":"_Component","state":"require","action":"function require(id) {\n  return $component.get(id);\n}","core":true,"useCoreAPI":true},"d152631c35813f2e":{"_id":"d152631c35813f2e","component":"_Component","state":"classInfo","action":"function classInfo() { \n\tconst className = this.constructor.name;\n\tlet result;\n\t\n\tif (className !== 'Function') {\n\t  result = this.require(className + 'Info');\n\t}\n\t\n\treturn result;\n}","useCoreAPI":false,"core":true},"1a5111d17a1800c":{"_id":"1a5111d17a1800c","component":"_Database","state":"collections","action":"function collections() {\n  var result = {},\n    collectionName = '';\n\n  for (collectionName in $db.store) {\n    if ($db.store.hasOwnProperty(collectionName)) {\n      result[collectionName] = $db[collectionName];\n    }\n  }\n  return result;\n}","core":true,"useCoreAPI":true},"1d993108fa18ef2":{"_id":"1d993108fa18ef2","component":"_Logger","state":"debug","action":"function debug(message) {\n  if (this.level() === 'debug') {\n    console.log('runtime: ' + message);\n  }\n}","core":true},"1a37a188e11fe73":{"_id":"1a37a188e11fe73","component":"_Logger","state":"error","action":"function error(message) {\n  console.error('runtime: ' + message);\n}","core":true},"1edd21e12a16534":{"_id":"1edd21e12a16534","component":"_Logger","state":"info","action":"function info(message) {\n  if (this.level() === 'info' || this.level() === 'debug') {\n    console.info('runtime: ' + message);\n  }\n}","core":true},"141f2143d3122a4":{"_id":"141f2143d3122a4","component":"_Logger","state":"level","action":"function level(val) {\n  $log.level(val);\n}","core":true,"useCoreAPI":true},"192401bab21304e":{"_id":"192401bab21304e","component":"_Logger","state":"warn","action":"function warn(message) {\n  if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {\n    console.warn('runtime: ' + message);\n  }\n}","core":true},"11fc715e2f1a31e":{"_id":"11fc715e2f1a31e","component":"_Metamodel","state":"create","action":"function create() {\n  $metamodel.create();\n}","core":true,"useCoreAPI":true},"1232f1f107142cf":{"_id":"1232f1f107142cf","component":"_Metamodel","state":"model","action":"function model(name, model) {\n  return $metamodel.model(name, model);\n}","core":true,"useCoreAPI":true},"1365412f69153d2":{"_id":"1365412f69153d2","component":"_Metamodel","state":"schema","action":"function schema(name, schema) {\n  return $metamodel.schema(name, schema);\n}","core":true,"useCoreAPI":true},"194db147fe161a2":{"_id":"194db147fe161a2","component":"_Metamodel","state":"type","action":"function type(name, type) {\n  return $metamodel.type(name, type);\n}","core":true,"useCoreAPI":true},"1ef951f1411b895":{"_id":"1ef951f1411b895","component":"_OSGi","state":"install","action":"function install(url, async) {\n  var importedSystem = null,\n    system = {},\n    systemId = '',\n    callbackLoad = null,\n    xhr = null,\n    result = '',\n    channel = $component.get('channel');\n\n  if (typeof url === 'object') {\n    importedSystem = url;\n  } else {\n    if (url.indexOf('{') === 0) {\n      importedSystem = JSON.parse(url);\n    }\n  }\n\n  if (importedSystem) {\n    systemId = $db.importSystem(importedSystem);\n    if (systemId) {\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    }\n  } else {\n    if (typeof global !== 'undefined' && typeof window === 'undefined') {\n      if (url.indexOf('.json') !== -1) {\n        system = require(global.process.env.PWD + '/' + url);\n      } else {\n        system = require(url);\n      }\n      systemId = $db.importSystem(system);\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    } else {\n      xhr = new XMLHttpRequest();\n      callbackLoad = function callbackLoad(system, url) {\n        var sysId = $db.importSystem(system),\n          sys = $component.get(sysId),\n          channel = $component.get('channel');\n\n        if (typeof url === 'string') {\n          sys.location(url);\n        }\n        sys.state('installed');\n        channel.$systemInstalled(sysId);\n        sys.state('resolved');\n        channel.$systemResolved(sysId);\n\n        result = sysId;\n      };\n\n      if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status === 200 || xhr.status === 0) {\n              callbackLoad(JSON.parse(xhr.response), url);\n            }\n          }\n        };\n        xhr.send(null);\n      } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200 || xhr.status === 0) {\n          callbackLoad(JSON.parse(xhr.response), url);\n        }\n      }\n    }\n  }\n  return result;\n}","useCoreAPI":true,"core":true},"14c1517b711cb78":{"_id":"14c1517b711cb78","component":"_OSGi","state":"uninstall","action":"function uninstall(id) {\n  var search = {},\n    system = null,\n    behaviorId = '',\n    collection = '',\n    componentId = '',\n    length = 0,\n    i = 0,\n    coreComponents = ['admin', 'channel', 'db', 'logger', 'metamodel', 'runtime'];\n\n  search = $db._System.find({\n    '_id': id\n  });\n\n  if (search.length) {\n    system = search[0];\n    // remove behaviors\n    if (system.behaviors) {\n      for (behaviorId in system.behaviors) {\n        $db._Behavior.remove({\n          '_id': system.behaviors[behaviorId]._id\n        });\n      }\n    }\n    // remove components\n    if (system.components) {\n      for (collection in system.components) {\n        for (componentId in system.components[collection]) {\n          if (coreComponents.indexOf(componentId) === -1) {\n            $db[collection].remove({\n              '_id': componentId\n            });\n          }\n        }\n      }\n    }\n  }\n  if (this.require(id) && this.require(id).state) {\n    this.require(id).state('uninstalled');\n    this.require('channel').$systemUninstalled(id);\n  }\n}","useCoreAPI":true,"core":true},"105f219c6813643":{"_id":"105f219c6813643","component":"_OSGi","state":"start","action":"function start(id) {\n  var system = this.require(id),\n    channel = this.require('channel');\n\n  if (system.state() === 'resolved' || system.state() === 'installed') {\n    system.state('starting');\n    if (system.start) {\n      system.start();\n    }\n    channel.$systemStarted(id);\n    system.state('active');\n  }\n}","useCoreAPI":false,"core":true},"1a81a1f00d17269":{"_id":"1a81a1f00d17269","component":"_OSGi","state":"stop","action":"function stop(id) {\n  var system = this.require(id),\n    channel = this.require('channel');\n\n  if (system.state() === 'active') {\n    system.state('stopping');\n    if (system.stop) {\n      system.stop();\n    }\n    channel.$systemStopped(id);\n    system.state('resolved');\n    channel.$systemResolved(id);\n  }\n}","useCoreAPI":false,"core":true},"116851b602128d1":{"_id":"116851b602128d1","component":"_OSGi","state":"status","action":"function status() {\n  var result = {},\n    system = null,\n    length = 0,\n    i = 0;\n\n  systems = $db._System.find({});\n\n  length = systems.length;\n  for (i = 0; i < length; i++) {\n    system = systems[i];\n    result[system.name] = {\n      'id': system._id,\n      'state': system.state,\n      'name': system.name,\n      'version': system.version,\n      'location': system.location,\n      'master': system.master\n    };\n  }\n\n  return result;\n}","useCoreAPI":true,"core":true},"19cf317d7217331":{"_id":"19cf317d7217331","component":"_OSGi","state":"bundle","action":"function bundle() { \n\tvar result = $db.exportSystem();\n\treturn result;\n}","useCoreAPI":true,"core":true},"13010167f313f87":{"_id":"13010167f313f87","component":"_Runtime","state":"system","action":"function system(params) {\n  var RuntimeSystem = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n\n  if (params) {\n    if (typeof params === 'string') {\n      conf.master = true;\n      conf.name = params;\n    } else {\n      conf = params;\n      conf.master = true;\n    }\n    RuntimeSystem = this.require('_System');\n    system = new RuntimeSystem(conf);\n    system.state('active');\n  } else {\n    result = $db._System.find({\n      'master': true\n    });\n    if (result.length) {\n      systemId = result[0]._id;\n      system = $component.get(systemId);\n    }\n  }\n  return system;\n}","core":true,"useCoreAPI":true},"1cfa4145f614da8":{"_id":"1cfa4145f614da8","component":"_Runtime","state":"message","action":"function message(msg) { \n  $db._Message.insert(msg);\n}","useCoreAPI":true,"core":true},"1cb9d103d41dd97":{"_id":"1cb9d103d41dd97","component":"e89c617b6b15d24","state":"start","action":"function start() {\n  if (typeof document !== 'undefined') {\n    document.addEventListener('DOMContentLoaded', function DOMContentLoaded(e) {\n      var systems = [],\n        system = null,\n        scripts = [],\n        script = null,\n        logLevel = 'warn',\n        i = 0,\n        length = 0;\n    \n      systems = document.querySelectorAll('link[rel=system]');\n      length = systems.length;\n  \n      // logger\n      scripts = document.querySelectorAll('script[log]');\n      if (scripts.length) {\n        logLevel = scripts[0].getAttribute('log');\n        this.require('logger').level(logLevel);\n      }\n  \n      // systems\n      for (i = 0; i < length; i++) {\n        system = systems[i];\n  \n        if (system.getAttribute('async') === 'false') {\n          this.require('runtime').install(system.href, false);\n        } else {\n          this.require('runtime').install(system.href, true);\n        }\n      }\n  \n      // ready event\n      if (length === 0) {\n        this.require('runtime').ready();\n      }\n  }.bind(this));\n  }\n}","useCoreAPI":true,"core":true}},"types":{"css":{"_id":"h1d88311ac019211","name":"css","type":"string","core":true},"date":{"_id":"c17cad1bc3d17752","name":"date","type":"object","core":true},"json":{"_id":"e1d25a12e67127ed","name":"json","type":"object","core":true},"dbInsertEvent":{"_id":"148ef1e19810e6d","core":true,"name":"dbInsertEvent","type":"object","schema":{"collection":{"type":"string","mandatory":true,"default":""},"document":{"type":"object","mandatory":true,"default":{}}}},"dbRemoveEvent":{"_id":"1952e1ac4213f4a","name":"dbRemoveEvent","type":"object","core":true,"schema":{"collection":{"type":"string","mandatory":true,"default":""},"id":{"type":"string","mandatory":true,"default":""}}},"dbUpdateEvent":{"_id":"1f5c41309711752","core":true,"name":"dbUpdateEvent","type":"object","schema":{"collection":{"type":"string","mandatory":true,"default":""},"id":{"type":"string","mandatory":true,"default":""},"field":{"type":"string","mandatory":true,"default":""},"value":{"type":"any","mandatory":true,"default":null}}},"dbAction":{"_id":"e1950e16f2914da9","core":true,"name":"dbAction","type":"string","value":["insert","update","remove"]},"collection":{"_id":"d1c0d0130c616199","name":"collection","type":"object","schema":{"type":{"type":["string"],"mandatory":true},"readOnly":{"type":"boolean","mandatory":true},"mandatory":{"type":"boolean","mandatory":true},"default":{"type":"array","mandatory":true},"description":{"type":"string","mandatory":false},"label":{"type":"string","mandatory":false}},"core":true},"errorParam":{"_id":"e198761fc0b1ae8a","name":"errorParam","type":"object","schema":{"message":{"type":"string","mandatory":true},"error":{"type":"object","mandatory":true}},"core":true},"event":{"_id":"g1668d1de2d1ff6f","name":"event","type":"object","schema":{"params":{"type":["parameter"],"mandatory":false},"description":{"type":"string","mandatory":false}},"core":true},"html":{"_id":"y161c21320b11acb","name":"html","type":"string","core":true},"javascript":{"_id":"s13d4c1fdf916504","name":"javascript","type":"string","core":true},"link":{"_id":"p124601801d1dbfa","name":"link","type":"object","schema":{"type":{"type":"string","mandatory":true},"readOnly":{"type":"boolean","mandatory":true},"mandatory":{"type":"boolean","mandatory":true},"default":{"type":"{type}","mandatory":true},"description":{"type":"string","mandatory":false},"label":{"type":"string","mandatory":false}},"core":true},"log":{"_id":"d1fd161a4a4149fc","name":"log","type":"string","value":["debug","info","warn","error"],"core":true},"message":{"_id":"l13b061ac571272d","name":"message","type":"object","schema":{"event":{"type":"string","mandatory":true},"from":{"type":"string","mandatory":false},"data":{"type":"array","mandatory":true}},"core":true},"method":{"_id":"x1227218eed1f3e9","name":"method","type":"object","schema":{"result":{"type":"any","mandatory":false},"params":{"type":["parameter"],"mandatory":false},"description":{"type":"string","mandatory":false}},"core":true},"osgiStates":{"_id":"q1f0ca120fc13fb3","name":"osgiStates","type":"string","value":["none","installed","resolved","starting","active","stopping","uninstalled"],"core":true},"parameter":{"_id":"e1b18e16c6c195ad","name":"parameter","type":"object","schema":{"description":{"type":"string","mandatory":false},"name":{"type":"string","mandatory":true},"type":{"type":"any","mandatory":true},"mandatory":{"type":"boolean","mandatory":false},"default":{"type":"{type}","mandatory":false}},"core":true},"property":{"_id":"a16a3a1ae051a55d","name":"property","type":"object","schema":{"type":{"type":"string","mandatory":true},"readOnly":{"type":"boolean","mandatory":true},"mandatory":{"type":"boolean","mandatory":true},"default":{"type":"{type}","mandatory":true},"description":{"type":"string","mandatory":false},"label":{"type":"string","mandatory":false}},"core":true},"text":{"_id":"c136fc129a912f54","name":"text","type":"string","core":true}},"components":{"_Channel":{"channel":{"_id":"channel"}},"_Database":{"db":{"_id":"db"}},"_Logger":{"logger":{"_id":"logger","level":"warn"}},"_Metamodel":{"metamodel":{"_id":"metamodel"}},"_Runtime":{"runtime":{"_id":"runtime","version":"2.7.0"}}},"_id":"e89c617b6b15d24"}
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
      '__proxy',
      'return function ' +
        name +
        ' (' +
        params.join(',') +
        ") { return new Function('" +
        params.join("','") +
        "', __proxy).apply(this, arguments) };"
    )(funcBody);
  } else {
    action = new Function(
      '__proxy',
      'return function ' +
        name +
        ' () { return new Function(__proxy).apply(this, arguments) };'
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
      'return function id () { return __proxy.call(this) };'
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
    'return function ' + classId + ' (config) { __proxy.call(this,config) };'
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
    'return function id () { return __proxy.call(this) };'
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
        '__proxy',
        'return function ' +
          propertyName +
          ' (position, value) { return __proxy.call(this, position, value) };'
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
        '__proxy',
        'return function ' +
          propertyName +
          ' (value) { return __proxy.call(this,value) };'
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
  var properties = getStructureProperties(name, model);
  var sructure = {};

  properties.forEach(function property(prop) {
    var proxy = {};
    var propertyName = '';
    var propertyType = '';
    var propertyReadOnly = '';

    propertyName = prop.name;
    propertyType = prop.type;
    propertyReadOnly = prop.readOnly;

    if (propertyType === 'array') {
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
        '__proxy',
        'return function ' +
          propertyName +
          ' (position, value) { return __proxy.call(this, position, value) };'
      )(proxy);
    } else {
      proxy = function proxy(value) {
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
        '__proxy',
        'return function ' +
          propertyName +
          ' (value) { return __proxy.call(this,value) };'
      )(proxy);
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

    var proxy = function proxy() {
      var result = null;

      result = $workflow.state({
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
        '__proxy',
        'return function ' +
          methodName +
          ' (' +
          params +
          ') { return __proxy.call(this,' +
          params +
          ') };'
      )(proxy);
      if (methodName !== 'name') {
        Class[methodName] = new Function(
          '__proxy',
          'return function ' +
            methodName +
            ' (' +
            paramsWithContext +
            ') { return __proxy.call(this,' +
            paramsWithContext +
            ') };'
        )(proxyWithContext);
      }
    } else {
      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' + methodName + ' () { return __proxy.call(this) };'
      )(proxy);
      if (methodName !== 'name') {
        Class[methodName] = new Function(
          '__proxy',
          'return function ' +
            methodName +
            ' (context) { return __proxy.call(this, context) };'
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
        '__proxy',
        'return function ' +
          methodName +
          ' (' +
          params +
          ') { return __proxy.call(this,' +
          params +
          ') };'
      )(proxy);
    } else {
      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' + methodName + ' () { return __proxy.call(this) };'
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
              $workflow.behavior(behaviorId, currentState.value);
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
    'return function on (state, action, useCoreAPI, isCore) { return __proxy.call(this, state, action, useCoreAPI, isCore) };'
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
              $workflow.behavior(behaviorId, currentState.value);
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
    'return function on (state, action, useCoreAPI, isCore) { return __proxy.call(this, state, action, useCoreAPI, isCore) };'
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
    '__proxy',
    'return function off (state, behaviorId) { return __proxy.call(this, state, behaviorId) };'
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

    $workflow.state({
      component: id,
      state: 'destroy'
    });
  };
  Class.destroy = new Function(
    '__proxy',
    'return function destroy () { return __proxy.call(this) };'
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
    'return function require (id) { return __proxy.call(this, id) };'
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
    'return function init (conf) { return __proxy.call(this, conf) };'
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
    'return function classInfo () { return __proxy.call(this) };'
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
      "invalid type for enumerated type '" +
        typeName +
        "': expected type '" +
        type +
        "' instead of type '" +
        realType +
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
          default: ''
        };
      } else {
        result = {
          type: 'date',
          readOnly: false,
          mandatory: false,
          default: ''
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
      if (getClassName(component) !== typeRef && component.id) {
        isValid = false;
        $log.invalidClassType(value, typeName);
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
 * @method behavior
 * @param {String} behaviorId id of the behavior
 * @param {Array} params parameters
 * @description Execute a behavior (only events)
 */
exports.behavior = function behavior(behaviorId, params) {
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
        action(
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
  var result = undefined;
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
        result = action(
          params.context || component,
          params.state,
          actions[0],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6OURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdHFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzMwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHN5c3RlbVxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIGNvbnRhaW5zIFN5c3RlbSBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKiBQdWJsaWMgcHJvcGVydGllcyAqL1xuXG5cbi8qKlxuICogU3lzdGVtIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAqIEBwcm9wZXJ0eSB7X1N5c3RlbX0gc3lzdGVtXG4gKi9cbmV4cG9ydHMuc3lzdGVtID0gXG57XCJuYW1lXCI6XCJzeXN0ZW0tcnVudGltZVwiLFwibWFzdGVyXCI6ZmFsc2UsXCJ2ZXJzaW9uXCI6XCIyLjcuMFwiLFwiZGVzY3JpcHRpb25cIjpcIlN5c3RlbSBSdW50aW1lXCIsXCJzY2hlbWFzXCI6e1wiMWFjMDcxODU2NDFmYTlmXCI6e1wiX25hbWVcIjpcIl9CZWhhdmlvclwiLFwiX2luaGVyaXRcIjpbXCJfQ29tcG9uZW50XCJdLFwiX2NvcmVcIjp0cnVlLFwiY29yZVwiOlwicHJvcGVydHlcIixcImNvbXBvbmVudFwiOlwicHJvcGVydHlcIixcImFjdGlvblwiOlwicHJvcGVydHlcIixcInN0YXRlXCI6XCJwcm9wZXJ0eVwiLFwidXNlQ29yZUFQSVwiOlwicHJvcGVydHlcIixcImNvbnRleHRcIjpcInByb3BlcnR5XCIsXCJfaWRcIjpcIjFhYzA3MTg1NjQxZmE5ZlwifSxcIjEwNGFkMWY0ODUxODM3NlwiOntcIl9pZFwiOlwiMTA0YWQxZjQ4NTE4Mzc2XCIsXCJfbmFtZVwiOlwiX0NoYW5uZWxcIixcIl9pbmhlcml0XCI6W1wiX0NvbXBvbmVudFwiXSxcIl9jb3JlXCI6dHJ1ZSxcInNlbmRcIjpcImV2ZW50XCIsXCIkc3lzdGVtSW5zdGFsbGVkXCI6XCJldmVudFwiLFwiJHN5c3RlbVJlc29sdmVkXCI6XCJldmVudFwiLFwiJHN5c3RlbVN0YXJ0ZWRcIjpcImV2ZW50XCIsXCIkc3lzdGVtU3RvcHBlZFwiOlwiZXZlbnRcIixcIiRzeXN0ZW1Vbmluc3RhbGxlZFwiOlwiZXZlbnRcIn0sXCIxYzAwYjEzYTFiMWJjOTJcIjp7XCJfbmFtZVwiOlwiX0NsYXNzSW5mb1wiLFwiX2luaGVyaXRcIjpbXCJfQ29tcG9uZW50XCJdLFwiX2NvcmVcIjp0cnVlLFwibW9kZWxcIjpcInByb3BlcnR5XCIsXCJzY2hlbWFcIjpcInByb3BlcnR5XCIsXCJtZXRob2RcIjpcIm1ldGhvZFwiLFwibWV0aG9kc1wiOlwibWV0aG9kXCIsXCJwcm9wZXJ0eVwiOlwibWV0aG9kXCIsXCJwcm9wZXJ0aWVzXCI6XCJtZXRob2RcIixcImxpbmtcIjpcIm1ldGhvZFwiLFwibGlua3NcIjpcIm1ldGhvZFwiLFwiY29sbGVjdGlvbnNcIjpcIm1ldGhvZFwiLFwiY29sbGVjdGlvblwiOlwibWV0aG9kXCIsXCJldmVudFwiOlwibWV0aG9kXCIsXCJldmVudHNcIjpcIm1ldGhvZFwiLFwiX2lkXCI6XCIxYzAwYjEzYTFiMWJjOTJcIn0sXCIxMTFkZjExZTJiMTlmZGVcIjp7XCJfaWRcIjpcIjExMWRmMTFlMmIxOWZkZVwiLFwiX25hbWVcIjpcIl9Db21wb25lbnRcIixcIl9pbmhlcml0XCI6W10sXCJfY29yZVwiOnRydWUsXCJjbGFzc0luZm9cIjpcIm1ldGhvZFwiLFwib25cIjpcIm1ldGhvZFwiLFwib2ZmXCI6XCJtZXRob2RcIixcInJlcXVpcmVcIjpcIm1ldGhvZFwiLFwiZGVzdHJveVwiOlwibWV0aG9kXCIsXCJpbml0XCI6XCJtZXRob2RcIixcImVycm9yXCI6XCJldmVudFwifSxcIjE3MjM1MTZhMzAxMzJhY1wiOntcIl9uYW1lXCI6XCJfRGF0YWJhc2VcIixcIl9pbmhlcml0XCI6W1wiX0NvbXBvbmVudFwiXSxcIl9jb3JlXCI6dHJ1ZSxcImNvbGxlY3Rpb25zXCI6XCJtZXRob2RcIixcImluc2VydFwiOlwiZXZlbnRcIixcInVwZGF0ZVwiOlwiZXZlbnRcIixcInJlbW92ZVwiOlwiZXZlbnRcIixcIl9pZFwiOlwiMTcyMzUxNmEzMDEzMmFjXCJ9LFwiZjFhMTBkMTA2N2QxYjIzYVwiOntcIl9pZFwiOlwiZjFhMTBkMTA2N2QxYjIzYVwiLFwiX25hbWVcIjpcIl9Mb2dcIixcIl9pbmhlcml0XCI6W1wiX0NvbXBvbmVudFwiXSxcIl9jb3JlXCI6dHJ1ZSxcImFjdGlvblwiOlwicHJvcGVydHlcIixcImNvbGxlY3Rpb25cIjpcInByb3BlcnR5XCIsXCJpZFwiOlwicHJvcGVydHlcIixcImZpZWxkXCI6XCJwcm9wZXJ0eVwiLFwidmFsdWVcIjpcInByb3BlcnR5XCIsXCJvcmRlclwiOlwicHJvcGVydHlcIn0sXCIxMjY4ZjFkZGRkMWZlYTdcIjp7XCJfbmFtZVwiOlwiX0xvZ2dlclwiLFwiX2NvcmVcIjp0cnVlLFwibGV2ZWxcIjpcInByb3BlcnR5XCIsXCJkZWJ1Z1wiOlwibWV0aG9kXCIsXCJpbmZvXCI6XCJtZXRob2RcIixcIndhcm5cIjpcIm1ldGhvZFwiLFwiZXJyb3JcIjpcIm1ldGhvZFwiLFwiX2lkXCI6XCIxMjY4ZjFkZGRkMWZlYTdcIn0sXCIxNGNhYTFjNDY0MTRlZTFcIjp7XCJfbmFtZVwiOlwiX01lc3NhZ2VcIixcIl9pbmhlcml0XCI6W1wiX0NvbXBvbmVudFwiXSxcIl9jb3JlXCI6dHJ1ZSxcImV2ZW50XCI6XCJwcm9wZXJ0eVwiLFwiZnJvbVwiOlwicHJvcGVydHlcIixcImRhdGFcIjpcInByb3BlcnR5XCIsXCJfaWRcIjpcIjE0Y2FhMWM0NjQxNGVlMVwifSxcIjE5M2YxMTY2ZWIxNjYwOVwiOntcIl9uYW1lXCI6XCJfTWV0YW1vZGVsXCIsXCJfaW5oZXJpdFwiOltcIl9Db21wb25lbnRcIl0sXCJfY29yZVwiOnRydWUsXCJzY2hlbWFcIjpcIm1ldGhvZFwiLFwibW9kZWxcIjpcIm1ldGhvZFwiLFwidHlwZVwiOlwibWV0aG9kXCIsXCJjcmVhdGVcIjpcIm1ldGhvZFwiLFwiX2lkXCI6XCIxOTNmMTE2NmViMTY2MDlcIn0sXCIxNTc5MzFmN2EzMWI2MWRcIjp7XCJfaWRcIjpcIjE1NzkzMWY3YTMxYjYxZFwiLFwiX25hbWVcIjpcIl9PU0dpXCIsXCJfaW5oZXJpdFwiOltcIl9Db21wb25lbnRcIl0sXCJfY29yZVwiOnRydWUsXCJpbnN0YWxsXCI6XCJtZXRob2RcIixcInVuaW5zdGFsbFwiOlwibWV0aG9kXCIsXCJzdGFydFwiOlwibWV0aG9kXCIsXCJzdG9wXCI6XCJtZXRob2RcIixcInN0YXR1c1wiOlwibWV0aG9kXCIsXCJidW5kbGVcIjpcIm1ldGhvZFwifSxcIjEyZTIxMWQ0Y2QxMjBhNlwiOntcIl9pZFwiOlwiMTJlMjExZDRjZDEyMGE2XCIsXCJfbmFtZVwiOlwiX1J1bnRpbWVcIixcIl9pbmhlcml0XCI6W1wiX09TR2lcIl0sXCJfY29yZVwiOnRydWUsXCJ2ZXJzaW9uXCI6XCJwcm9wZXJ0eVwiLFwic3lzdGVtXCI6XCJtZXRob2RcIixcIm1lc3NhZ2VcIjpcIm1ldGhvZFwiLFwicmVhZHlcIjpcImV2ZW50XCJ9LFwiMTU4NzExZDZmMjE1ZTRiXCI6e1wiX25hbWVcIjpcIl9TdGF0ZVwiLFwiX2luaGVyaXRcIjpbXSxcIl9jb3JlXCI6dHJ1ZSxcIl9jbGFzc1wiOmZhbHNlLFwic3RhdGVcIjpcInByb3BlcnR5XCIsXCJ2YWx1ZVwiOlwicHJvcGVydHlcIixcIl9pZFwiOlwiMTU4NzExZDZmMjE1ZTRiXCJ9LFwiMWNiNzYxZmE0NTEwZGNhXCI6e1wiX2lkXCI6XCIxY2I3NjFmYTQ1MTBkY2FcIixcIl9uYW1lXCI6XCJfU3lzdGVtXCIsXCJfaW5oZXJpdFwiOltcIl9TeXN0ZW1PU0dpXCJdLFwiX2NvcmVcIjp0cnVlLFwibmFtZVwiOlwicHJvcGVydHlcIixcIm1hc3RlclwiOlwicHJvcGVydHlcIixcInZlcnNpb25cIjpcInByb3BlcnR5XCIsXCJkZXNjcmlwdGlvblwiOlwicHJvcGVydHlcIixcInNjaGVtYXNcIjpcInByb3BlcnR5XCIsXCJtb2RlbHNcIjpcInByb3BlcnR5XCIsXCJiZWhhdmlvcnNcIjpcInByb3BlcnR5XCIsXCJ0eXBlc1wiOlwicHJvcGVydHlcIixcImNvbXBvbmVudHNcIjpcInByb3BlcnR5XCJ9LFwiMTQ1ZmUxMGM3NTE0Mjk4XCI6e1wiX2lkXCI6XCIxNDVmZTEwYzc1MTQyOThcIixcIl9uYW1lXCI6XCJfU3lzdGVtT1NHaVwiLFwiX2luaGVyaXRcIjpbXCJfQ29tcG9uZW50XCJdLFwiX2NvcmVcIjp0cnVlLFwic3RhdGVcIjpcInByb3BlcnR5XCIsXCJsb2NhdGlvblwiOlwicHJvcGVydHlcIixcInN0YXJ0XCI6XCJtZXRob2RcIixcInN0b3BcIjpcIm1ldGhvZFwifX0sXCJtb2RlbHNcIjp7XCIxNjY5NzFmZDlkMTA3ZmRcIjp7XCJfbmFtZVwiOlwiX0JlaGF2aW9yXCIsXCJfY29yZVwiOnRydWUsXCJjb250ZXh0XCI6e1widHlwZVwiOlwiYW55XCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6bnVsbH0sXCJjb3JlXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwicmVhZE9ubHlcIjpmYWxzZSxcIm1hbmRhdG9yeVwiOmZhbHNlLFwiZGVmYXVsdFwiOmZhbHNlfSxcInVzZUNvcmVBUElcIjp7XCJ0eXBlXCI6XCJhbnlcIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjpmYWxzZSxcImRlZmF1bHRcIjpmYWxzZX0sXCJjb21wb25lbnRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjp0cnVlLFwiZGVmYXVsdFwiOlwiXCJ9LFwiYWN0aW9uXCI6e1widHlwZVwiOlwiamF2YXNjcmlwdFwiLFwicmVhZE9ubHlcIjpmYWxzZSxcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCJcIn0sXCJzdGF0ZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwicmVhZE9ubHlcIjpmYWxzZSxcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCJcIn0sXCJfaWRcIjpcIjE2Njk3MWZkOWQxMDdmZFwifSxcIjEzNWM3MTA3ODgxMGFmMlwiOntcIl9pZFwiOlwiMTM1YzcxMDc4ODEwYWYyXCIsXCJfbmFtZVwiOlwiX0NoYW5uZWxcIixcIl9jb3JlXCI6dHJ1ZSxcInNlbmRcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwibWVzc2FnZVwiLFwidHlwZVwiOlwibWVzc2FnZVwifV19LFwiJHN5c3RlbUluc3RhbGxlZFwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJpZFwiLFwidHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjp0cnVlLFwiZGVmYXVsdFwiOlwiXCJ9XX0sXCIkc3lzdGVtUmVzb2x2ZWRcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwiaWRcIixcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6dHJ1ZSxcImRlZmF1bHRcIjpcIlwifV19LFwiJHN5c3RlbVVuaW5zdGFsbGVkXCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcImlkXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIixcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCJcIn1dfSxcIiRzeXN0ZW1TdGFydGVkXCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcImlkXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIixcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCJcIn1dfSxcIiRzeXN0ZW1TdG9wcGVkXCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcImlkXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIixcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCJcIn1dfX0sXCIxNTgzMjFkY2VkMTAxNGFcIjp7XCJfbmFtZVwiOlwiX0NsYXNzSW5mb1wiLFwiX2NvcmVcIjp0cnVlLFwibW9kZWxcIjp7XCJ0eXBlXCI6XCJvYmplY3RcIixcInJlYWRPbmx5XCI6dHJ1ZSxcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6e319LFwicHJvcGVydHlcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwibmFtZVwiLFwidHlwZVwiOlwic3RyaW5nXCJ9XSxcInJlc3VsdFwiOlwib2JqZWN0XCJ9LFwicHJvcGVydGllc1wiOntcInJlc3VsdFwiOlwiYXJyYXlcIn0sXCJsaW5rXCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcIm5hbWVcIixcInR5cGVcIjpcInN0cmluZ1wifV0sXCJyZXN1bHRcIjpcIm9iamVjdFwifSxcImxpbmtzXCI6e1wicmVzdWx0XCI6XCJhcnJheVwifSxcIm1ldGhvZFwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJuYW1lXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn1dLFwicmVzdWx0XCI6XCJvYmplY3RcIn0sXCJtZXRob2RzXCI6e1wicmVzdWx0XCI6XCJhcnJheVwifSxcImNvbGxlY3Rpb25cIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwibmFtZVwiLFwidHlwZVwiOlwic3RyaW5nXCJ9XSxcInJlc3VsdFwiOlwib2JqZWN0XCJ9LFwiY29sbGVjdGlvbnNcIjp7XCJyZXN1bHRcIjpcImFycmF5XCJ9LFwiZXZlbnRcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwibmFtZVwiLFwidHlwZVwiOlwic3RyaW5nXCJ9XSxcInJlc3VsdFwiOlwib2JqZWN0XCJ9LFwiZXZlbnRzXCI6e1wicmVzdWx0XCI6XCJhcnJheVwifSxcIl9pZFwiOlwiMTU4MzIxZGNlZDEwMTRhXCIsXCJzY2hlbWFcIjp7XCJ0eXBlXCI6XCJvYmplY3RcIixcInJlYWRPbmx5XCI6dHJ1ZSxcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6e319fSxcIjEyMzc1MWNiNTkxZGUyNlwiOntcIl9pZFwiOlwiMTIzNzUxY2I1OTFkZTI2XCIsXCJfbmFtZVwiOlwiX0NvbXBvbmVudFwiLFwiX2NvcmVcIjp0cnVlLFwib25cIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwic3RhdGVcIixcInR5cGVcIjpcInN0cmluZ1wifSx7XCJuYW1lXCI6XCJhY3Rpb25cIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcIm5hbWVcIjpcInVzZUNvcmVBUElcIixcInR5cGVcIjpcImFueVwiLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6ZmFsc2V9LHtcIm5hbWVcIjpcImlzQ29yZVwiLFwidHlwZVwiOlwiYm9vbGVhblwiLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6ZmFsc2V9XX0sXCJvZmZcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwic3RhdGVcIixcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6ZmFsc2V9LHtcIm5hbWVcIjpcImJlaGF2aW9ySWRcIixcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6ZmFsc2V9XX0sXCJyZXF1aXJlXCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcImlkXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn1dfSxcImRlc3Ryb3lcIjp7XCJwYXJhbXNcIjpbXX0sXCJjbGFzc0luZm9cIjp7XCJyZXN1bHRcIjpcIl9DbGFzc0luZm9cIn0sXCJpbml0XCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcImNvbmZcIixcInR5cGVcIjpcIm9iamVjdFwifV19LFwiZXJyb3JcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwiZGF0YVwiLFwidHlwZVwiOlwiZXJyb3JQYXJhbVwifV19fSxcIjE4YTUxMTY5ZDcxMTJkNFwiOntcIl9uYW1lXCI6XCJfRGF0YWJhc2VcIixcIl9jb3JlXCI6dHJ1ZSxcImNvbGxlY3Rpb25zXCI6e1wicmVzdWx0XCI6XCJvYmplY3RcIn0sXCJpbnNlcnRcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwiZXZlbnRcIixcInR5cGVcIjpcImRiSW5zZXJ0RXZlbnRcIn1dfSxcInVwZGF0ZVwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJldmVudFwiLFwidHlwZVwiOlwiZGJVcGRhdGVFdmVudFwifV19LFwicmVtb3ZlXCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcImV2ZW50XCIsXCJ0eXBlXCI6XCJkYlJlbW92ZUV2ZW50XCJ9XX0sXCJfaWRcIjpcIjE4YTUxMTY5ZDcxMTJkNFwifSxcIm8xZTFlMDFlNmI0MWNlYzNcIjp7XCJfaWRcIjpcIm8xZTFlMDFlNmI0MWNlYzNcIixcIl9uYW1lXCI6XCJfTG9nXCIsXCJhY3Rpb25cIjp7XCJ0eXBlXCI6XCJkYkFjdGlvblwiLFwicmVhZE9ubHlcIjpmYWxzZSxcIm1hbmRhdG9yeVwiOmZhbHNlLFwiZGVmYXVsdFwiOlwiaW5zZXJ0XCJ9LFwiY29sbGVjdGlvblwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwicmVhZE9ubHlcIjpmYWxzZSxcIm1hbmRhdG9yeVwiOmZhbHNlLFwiZGVmYXVsdFwiOlwiXCJ9LFwiaWRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjpmYWxzZSxcImRlZmF1bHRcIjpcIlwifSxcImZpZWxkXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6XCJcIn0sXCJ2YWx1ZVwiOntcInR5cGVcIjpcImFueVwiLFwicmVhZE9ubHlcIjpmYWxzZSxcIm1hbmRhdG9yeVwiOmZhbHNlLFwiZGVmYXVsdFwiOlwiXCJ9LFwib3JkZXJcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjpmYWxzZSxcImRlZmF1bHRcIjowfSxcIl9jb3JlXCI6dHJ1ZX0sXCIxNmI5ZDFhYzIyMTZmZmVcIjp7XCJfaWRcIjpcIjE2YjlkMWFjMjIxNmZmZVwiLFwiX25hbWVcIjpcIl9Mb2dnZXJcIixcIl9jb3JlXCI6dHJ1ZSxcImxldmVsXCI6e1widHlwZVwiOlwibG9nXCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6XCJ3YXJuXCJ9LFwiZGVidWdcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwibWVzc2FnZVwiLFwidHlwZVwiOlwiYW55XCJ9XX0sXCJpbmZvXCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcIm1lc3NhZ2VcIixcInR5cGVcIjpcImFueVwifV19LFwid2FyblwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJtZXNzYWdlXCIsXCJ0eXBlXCI6XCJhbnlcIn1dfSxcImVycm9yXCI6e1wicGFyYW1zXCI6W3tcIm5hbWVcIjpcIm1lc3NhZ2VcIixcInR5cGVcIjpcImFueVwifV19fSxcIjFkOWI2MTM5NDExYWE5MVwiOntcIl9uYW1lXCI6XCJfTWVzc2FnZVwiLFwiX2NvcmVcIjp0cnVlLFwiZXZlbnRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjp0cnVlLFwiZGVmYXVsdFwiOlwiXCJ9LFwiZnJvbVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwicmVhZE9ubHlcIjpmYWxzZSxcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCJcIn0sXCJkYXRhXCI6e1widHlwZVwiOlwiYXJyYXlcIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjp0cnVlLFwiZGVmYXVsdFwiOltdfSxcIl9pZFwiOlwiMWQ5YjYxMzk0MTFhYTkxXCJ9LFwiMTYyOGMxM2MyMjE1MmU2XCI6e1wiX25hbWVcIjpcIl9NZXRhbW9kZWxcIixcIl9jb3JlXCI6dHJ1ZSxcInNjaGVtYVwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJuYW1lXCIsXCJ0eXBlXCI6XCJhbnlcIixcImRlZmF1bHRcIjpcIlwiLFwibWFuZGF0b3J5XCI6ZmFsc2V9LHtcIm5hbWVcIjpcInNjaGVtYVwiLFwidHlwZVwiOlwib2JqZWN0XCIsXCJkZWZhdWx0XCI6e30sXCJtYW5kYXRvcnlcIjpmYWxzZX1dLFwicmVzdWx0XCI6XCJhbnlcIn0sXCJtb2RlbFwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJuYW1lXCIsXCJ0eXBlXCI6XCJhbnlcIixcImRlZmF1bHRcIjpcIlwiLFwibWFuZGF0b3J5XCI6ZmFsc2V9LHtcIm5hbWVcIjpcIm1vZGVsXCIsXCJ0eXBlXCI6XCJvYmplY3RcIixcImRlZmF1bHRcIjp7fSxcIm1hbmRhdG9yeVwiOmZhbHNlfV0sXCJyZXN1bHRcIjpcImFueVwifSxcInR5cGVcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwibmFtZVwiLFwidHlwZVwiOlwiYW55XCIsXCJkZWZhdWx0XCI6XCJcIixcIm1hbmRhdG9yeVwiOmZhbHNlfSx7XCJuYW1lXCI6XCJ0eXBlXCIsXCJ0eXBlXCI6XCJvYmplY3RcIixcImRlZmF1bHRcIjp7fSxcIm1hbmRhdG9yeVwiOmZhbHNlfV0sXCJyZXN1bHRcIjpcImFueVwifSxcImNyZWF0ZVwiOntcInBhcmFtc1wiOltdfSxcIl9pZFwiOlwiMTYyOGMxM2MyMjE1MmU2XCJ9LFwiMTAwYjkxZWQyMjExYjE1XCI6e1wiX2lkXCI6XCIxMDBiOTFlZDIyMTFiMTVcIixcIl9uYW1lXCI6XCJfT1NHaVwiLFwiaW5zdGFsbFwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJ1cmxcIixcInR5cGVcIjpcImFueVwiLFwibWFuZGF0b3J5XCI6dHJ1ZSxcImRlZmF1bHRcIjpcIlwifSx7XCJuYW1lXCI6XCJhc3luY1wiLFwidHlwZVwiOlwiYm9vbGVhblwiLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6dHJ1ZX1dLFwicmVzdWx0XCI6XCJzdHJpbmdcIn0sXCJ1bmluc3RhbGxcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwiaWRcIixcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6dHJ1ZSxcImRlZmF1bHRcIjpcIlwifV19LFwic3RhcnRcIjp7XCJwYXJhbXNcIjpbe1wibmFtZVwiOlwiaWRcIixcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6dHJ1ZSxcImRlZmF1bHRcIjpcIlwifV19LFwic3RvcFwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJpZFwiLFwidHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjp0cnVlLFwiZGVmYXVsdFwiOlwiXCJ9XX0sXCJzdGF0dXNcIjp7XCJyZXN1bHRcIjpcIm9iamVjdFwifSxcIl9jb3JlXCI6dHJ1ZSxcImJ1bmRsZVwiOntcInJlc3VsdFwiOlwic3RyaW5nXCJ9fSxcIjE0YzdjMTA1YjMxYTE2MFwiOntcIl9pZFwiOlwiMTRjN2MxMDViMzFhMTYwXCIsXCJfbmFtZVwiOlwiX1J1bnRpbWVcIixcIl9jb3JlXCI6dHJ1ZSxcInZlcnNpb25cIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInJlYWRPbmx5XCI6dHJ1ZSxcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCIwLjAuMFwifSxcInN5c3RlbVwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJwYXJhbXNcIixcInR5cGVcIjpcImFueVwiLFwibWFuZGF0b3J5XCI6ZmFsc2V9XSxcInJlc3VsdFwiOlwib2JqZWN0XCJ9LFwibWVzc2FnZVwiOntcInBhcmFtc1wiOlt7XCJuYW1lXCI6XCJtc2dcIixcInR5cGVcIjpcIm1lc3NhZ2VcIixcIm1hbmRhdG9yeVwiOnRydWV9XX0sXCJyZWFkeVwiOnt9fSxcIjE3N2FjMTM2ODkxNjI5ZlwiOntcIl9uYW1lXCI6XCJfU3RhdGVcIixcIl9jb3JlXCI6dHJ1ZSxcInN0YXRlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6dHJ1ZSxcImRlZmF1bHRcIjpcIlwifSxcInZhbHVlXCI6e1widHlwZVwiOlwiYW55XCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6bnVsbH0sXCJfaWRcIjpcIjE3N2FjMTM2ODkxNjI5ZlwifSxcIjE3MDUyMWI4ODYxNDM4N1wiOntcIl9uYW1lXCI6XCJfU3lzdGVtXCIsXCJfY29yZVwiOnRydWUsXCJuYW1lXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6dHJ1ZSxcImRlZmF1bHRcIjpcIlwifSxcIm1hc3RlclwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjpmYWxzZSxcImRlZmF1bHRcIjpmYWxzZX0sXCJ2ZXJzaW9uXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6XCIwLjAuMVwifSxcImRlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6XCJcIn0sXCJzY2hlbWFzXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6e319LFwibW9kZWxzXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6e319LFwiYmVoYXZpb3JzXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6e319LFwidHlwZXNcIjp7XCJ0eXBlXCI6XCJvYmplY3RcIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjpmYWxzZSxcImRlZmF1bHRcIjp7fX0sXCJjb21wb25lbnRzXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJyZWFkT25seVwiOmZhbHNlLFwibWFuZGF0b3J5XCI6ZmFsc2UsXCJkZWZhdWx0XCI6e319LFwiX2lkXCI6XCIxNzA1MjFiODg2MTQzODdcIn0sXCIxYjI4MTFiMDkyMTQzZjVcIjp7XCJfaWRcIjpcIjFiMjgxMWIwOTIxNDNmNVwiLFwiX25hbWVcIjpcIl9TeXN0ZW1PU0dpXCIsXCJzdGFydFwiOnt9LFwic3RvcFwiOnt9LFwiX2NvcmVcIjp0cnVlLFwic3RhdGVcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInJlYWRPbmx5XCI6ZmFsc2UsXCJtYW5kYXRvcnlcIjpmYWxzZSxcImRlZmF1bHRcIjpcIm5vbmVcIn0sXCJsb2NhdGlvblwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwicmVhZE9ubHlcIjpmYWxzZSxcIm1hbmRhdG9yeVwiOmZhbHNlLFwiZGVmYXVsdFwiOlwiXCJ9fX0sXCJiZWhhdmlvcnNcIjp7XCIxMmU0OTE4NTljMTM5MThcIjp7XCJfaWRcIjpcIjEyZTQ5MTg1OWMxMzkxOFwiLFwiY29tcG9uZW50XCI6XCJfQ2hhbm5lbFwiLFwic3RhdGVcIjpcIiRzeXN0ZW1TdGFydGVkXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uICRzeXN0ZW1TdGFydGVkKGlkKSB7IFxcbiAgdmFyIHN5c3RlbXMgPSBudWxsO1xcbiAgICBcXG4gIGlmIChpZCAhPT0gJ2U4OWM2MTdiNmIxNWQyNCcpIHtcXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgICAgIFxcbiAgICAgIGlmICgkc3RhdGUuZ2V0KCdydW50aW1lJykgJiYgJHN0YXRlLmdldCgncnVudGltZScpLnN0YXRlID09PSAncmVhZHknKSB7ICAgIFxcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggKyAxID09PSAkZGIuX1N5c3RlbS5jb3VudCgpKSB7XFxuICAgICAgICAgICRjb21wb25lbnQuZ2V0KCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCIsXCJ1c2VDb3JlQVBJXCI6dHJ1ZSxcImNvcmVcIjp0cnVlfSxcIjFlOTAyMWJkNGUxYmM2ZVwiOntcIl9pZFwiOlwiMWU5MDIxYmQ0ZTFiYzZlXCIsXCJjb21wb25lbnRcIjpcIl9DaGFubmVsXCIsXCJzdGF0ZVwiOlwiJHN5c3RlbUluc3RhbGxlZFwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiAkc3lzdGVtSW5zdGFsbGVkKGlkKSB7XFxuICB2YXIgc3lzdGVtcyA9IG51bGwsXFxuICAgIGRlcGVuZGVuY2llcyA9IFtdLFxcbiAgICBtYXN0ZXIgPSBbXSxcXG4gICAgY2FuU3RhcnQgPSB0cnVlO1xcblxcbiAgaWYgKGlkICE9PSAnZTg5YzYxN2I2YjE1ZDI0Jykge1xcbiAgICAvLyBpZiBhbGwgc3lzdGVtcyBhcmUgaW5zdGFsbGVkXFxuICAgIHN5c3RlbXMgPSAkZGIuX1N5c3RlbS5maW5kKHt9KTtcXG5cXG4gICAgc3lzdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzeXN0ZW0pIHtcXG4gICAgICB2YXIgc3lzID0gdGhpcy5yZXF1aXJlKHN5c3RlbS5faWQpO1xcbiAgICAgIGlmIChzeXMgJiYgc3lzLnN0YXRlICYmIHN5cy5zdGF0ZSgpID09PSAnbm9uZScpIHtcXG4gICAgICAgIGNhblN0YXJ0ID0gZmFsc2U7XFxuICAgICAgfVxcbiAgICB9LmJpbmQodGhpcykpO1xcblxcbiAgICAvLyBzdGFydCBhbGwgdGhlIHN5c3RlbXNcXG4gICAgaWYgKGNhblN0YXJ0KSB7XFxuICAgICAgZGVwZW5kZW5jaWVzID0gJGRiLl9TeXN0ZW0uZmluZCh7XFxuICAgICAgICAnbWFzdGVyJzogZmFsc2VcXG4gICAgICB9KTtcXG5cXG4gICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XFxuICAgICAgICB2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGRlcC5faWQpO1xcbiAgICAgICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcbiAgICAgICAgaWYgKHN5c3RlbS5zdGF0ZSgpID09PSAncmVzb2x2ZWQnKSB7XFxuICAgICAgICAgIHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXJ0KCk7XFxuICAgICAgICAgIGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoZGVwLl9pZCk7XFxuICAgICAgICAgIHN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XFxuICAgICAgICB9XFxuICAgICAgfS5iaW5kKHRoaXMpKTtcXG5cXG4gICAgICBtYXN0ZXIgPSAkZGIuX1N5c3RlbS5maW5kKHtcXG4gICAgICAgICdtYXN0ZXInOiB0cnVlXFxuICAgICAgfSk7XFxuXFxuICAgICAgbWFzdGVyLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xcbiAgICAgICAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShkZXAuX2lkKTtcXG4gICAgICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXG4gICAgICAgIGlmIChzeXN0ZW0gJiYgc3lzdGVtLnN0YXRlICYmIHN5c3RlbS5zdGF0ZSgpID09PSAncmVzb2x2ZWQnKSB7XFxuICAgICAgICAgIHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gICAgICAgICAgc3lzdGVtLnN0YXJ0KCk7XFxuICAgICAgICAgIGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoZGVwLl9pZCk7XFxuICAgICAgICAgIHN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XFxuICAgICAgICB9XFxuICAgICAgfS5iaW5kKHRoaXMpKTtcXG4gICAgfVxcbiAgfVxcbn1cIixcInVzZUNvcmVBUElcIjp0cnVlLFwiY29yZVwiOnRydWV9LFwiMTU1MTQxZTQwMzEyY2Q4XCI6e1wiX2lkXCI6XCIxNTUxNDFlNDAzMTJjZDhcIixcImNvbXBvbmVudFwiOlwiX0NsYXNzSW5mb1wiLFwic3RhdGVcIjpcImNvbGxlY3Rpb25cIixcImFjdGlvblwiOlwiZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ2NvbGxlY3Rpb24nKSB7XFxuICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFwiY29yZVwiOnRydWV9LFwiMWY2OTQxYTBjMDEyYzFmXCI6e1wiX2lkXCI6XCIxZjY5NDFhMGMwMTJjMWZcIixcImNvbXBvbmVudFwiOlwiX0NsYXNzSW5mb1wiLFwic3RhdGVcIjpcImNvbGxlY3Rpb25zXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIGNvbGxlY3Rpb25zKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICB9XFxuICB9XFxuXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcImNvcmVcIjp0cnVlfSxcIjFlZjcxMWI0MTcxYzg0OVwiOntcIl9pZFwiOlwiMWVmNzExYjQxNzFjODQ5XCIsXCJjb21wb25lbnRcIjpcIl9DbGFzc0luZm9cIixcInN0YXRlXCI6XCJldmVudFwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBldmVudChuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuXFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ2V2ZW50Jykge1xcbiAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICB9XFxuXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcImNvcmVcIjp0cnVlfSxcIjFiYWU1MWI2ZWQxZDI1Y1wiOntcIl9pZFwiOlwiMWJhZTUxYjZlZDFkMjVjXCIsXCJjb21wb25lbnRcIjpcIl9DbGFzc0luZm9cIixcInN0YXRlXCI6XCJldmVudHNcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gZXZlbnRzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdldmVudCcpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXCJjb3JlXCI6dHJ1ZX0sXCIxOWFjMjEyNTIyMTUyOGJcIjp7XCJfaWRcIjpcIjE5YWMyMTI1MjIxNTI4YlwiLFwiY29tcG9uZW50XCI6XCJfQ2xhc3NJbmZvXCIsXCJzdGF0ZVwiOlwibGlua1wiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBsaW5rKG5hbWUpIHtcXG4gIHZhciByZXN1bHQgPSB7fTtcXG5cXG4gIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnbGluaycpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXCJjb3JlXCI6dHJ1ZX0sXCIxN2VkMjFkZmMwMWI4ZThcIjp7XCJfaWRcIjpcIjE3ZWQyMWRmYzAxYjhlOFwiLFwiY29tcG9uZW50XCI6XCJfQ2xhc3NJbmZvXCIsXCJzdGF0ZVwiOlwibGlua3NcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gbGlua3MobmFtZSkge1xcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcblxcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ2xpbmsnKSB7XFxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgIH1cXG4gIH0gcmV0dXJuIHJlc3VsdDtcXG59XCIsXCJjb3JlXCI6dHJ1ZX0sXCIxMWNlMzE4YTU2MWFjNjFcIjp7XCJfaWRcIjpcIjExY2UzMThhNTYxYWM2MVwiLFwiY29tcG9uZW50XCI6XCJfQ2xhc3NJbmZvXCIsXCJzdGF0ZVwiOlwibWV0aG9kXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIG1ldGhvZChuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ21ldGhvZCcpIHtcXG4gICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgfVxcbiAgXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcImNvcmVcIjp0cnVlfSxcIjEyZmYyMTkwYTAxODA0NlwiOntcIl9pZFwiOlwiMTJmZjIxOTBhMDE4MDQ2XCIsXCJjb21wb25lbnRcIjpcIl9DbGFzc0luZm9cIixcInN0YXRlXCI6XCJtZXRob2RzXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIG1ldGhvZHMobmFtZSkge1xcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcblxcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ21ldGhvZCcpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXCJjb3JlXCI6dHJ1ZX0sXCIxMDI4ZDE2ODFlMWZkNThcIjp7XCJfaWRcIjpcIjEwMjhkMTY4MWUxZmQ1OFwiLFwiY29tcG9uZW50XCI6XCJfQ2xhc3NJbmZvXCIsXCJzdGF0ZVwiOlwicHJvcGVydGllc1wiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBwcm9wZXJ0aWVzKG5hbWUpIHtcXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG5cXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdwcm9wZXJ0eScpIHtcXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgfVxcbiAgfSByZXR1cm4gcmVzdWx0O1xcbn1cIixcImNvcmVcIjp0cnVlfSxcIjE4ZWViMTBjNTMxOTM2OFwiOntcIl9pZFwiOlwiMThlZWIxMGM1MzE5MzY4XCIsXCJjb21wb25lbnRcIjpcIl9DbGFzc0luZm9cIixcInN0YXRlXCI6XCJwcm9wZXJ0eVwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBwcm9wZXJ0eShuYW1lKSB7XFxuICB2YXIgcmVzdWx0ID0ge307XFxuXFxuICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ3Byb3BlcnR5Jykge1xcbiAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcImNvcmVcIjp0cnVlfSxcIjFiYTcyMTIwMTExNGI2YlwiOntcIl9pZFwiOlwiMWJhNzIxMjAxMTE0YjZiXCIsXCJjb21wb25lbnRcIjpcIl9Db21wb25lbnRcIixcInN0YXRlXCI6XCJkZXN0cm95XCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIGRlc3Ryb3koKSB7XFxuICAkY29tcG9uZW50LmRlc3Ryb3kodGhpcy5pZCgpKTtcXG59XCIsXCJjb3JlXCI6dHJ1ZSxcInVzZUNvcmVBUElcIjp0cnVlfSxcIjE1NDg2MTg2ZjQxYTQ4Y1wiOntcIl9pZFwiOlwiMTU0ODYxODZmNDFhNDhjXCIsXCJjb21wb25lbnRcIjpcIl9Db21wb25lbnRcIixcInN0YXRlXCI6XCJvZmZcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gb2ZmKHN0YXRlLCBiZWhhdmlvcklkKSB7XFxuICB2YXIgYXJncyA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbnVtSW5qZWN0ZWRQYXJhbXMgPSA4LFxcbiAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xcblxcbiAgaWYgKCRoZWxwZXIuaXNPbk5vZGUoKSkge1xcbiAgICBudW1JbmplY3RlZFBhcmFtcyA9IG51bUluamVjdGVkUGFyYW1zICsxO1xcbiAgfVxcblxcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIG51bUluamVjdGVkUGFyYW1zOyBpKyspIHtcXG4gICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XFxuICB9XFxuXFxuICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcXG4gICAgXFxcImNvbXBvbmVudFxcXCI6IHRoaXMsXFxuICAgIFxcXCJtZXRob2ROYW1lXFxcIjogXFxcIm9mZlxcXCIsXFxuICAgIFxcXCJhcmdzXFxcIjogYXJnc1xcbiAgfSkpIHtcXG5cXG4gICAgaWYgKHN0YXRlIHx8IGJlaGF2aW9ySWQpIHtcXG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIHRoaXMuY29uc3RydWN0b3IubmFtZSkpIHtcXG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICBcXFwiYmVoYXZpb3JJZFxcXCI6IGJlaGF2aW9ySWQsXFxuICAgICAgICAgIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKSxcXG4gICAgICAgICAgXFxcInN0YXRlXFxcIjogc3RhdGVcXG4gICAgICAgIH0pO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLndhcm4oXFxcImludm9rZSBcXFxcJ29mZlxcXFwnIG1ldGhvZCBvZiBjb21wb25lbnQgJ1xcXCIgKyB0aGlzLmlkKCkgKyBcXFwiJyB3aXRoIGFuIGludmFsaWQgc3RhdGUgJ1xcXCIgKyBzdGF0ZSArIFxcXCInXFxcIik7XFxuICAgICAgfVxcbiAgICB9IGVsc2Uge1xcbiAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgXFxcImNvbXBvbmVudElkXFxcIjogdGhpcy5pZCgpXFxuICAgICAgfSk7XFxuICAgIH1cXG4gIH1cXG59XCIsXCJjb3JlXCI6dHJ1ZSxcInVzZUNvcmVBUElcIjp0cnVlfSxcIjFkYTBhMTc4NzgxMDRjM1wiOntcIl9pZFwiOlwiMWRhMGExNzg3ODEwNGMzXCIsXCJjb21wb25lbnRcIjpcIl9Db21wb25lbnRcIixcInN0YXRlXCI6XCJyZXF1aXJlXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIHJlcXVpcmUoaWQpIHtcXG4gIHJldHVybiAkY29tcG9uZW50LmdldChpZCk7XFxufVwiLFwiY29yZVwiOnRydWUsXCJ1c2VDb3JlQVBJXCI6dHJ1ZX0sXCJkMTUyNjMxYzM1ODEzZjJlXCI6e1wiX2lkXCI6XCJkMTUyNjMxYzM1ODEzZjJlXCIsXCJjb21wb25lbnRcIjpcIl9Db21wb25lbnRcIixcInN0YXRlXCI6XCJjbGFzc0luZm9cIixcImFjdGlvblwiOlwiZnVuY3Rpb24gY2xhc3NJbmZvKCkgeyBcXG5cXHRjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XFxuXFx0bGV0IHJlc3VsdDtcXG5cXHRcXG5cXHRpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XFxuXFx0ICByZXN1bHQgPSB0aGlzLnJlcXVpcmUoY2xhc3NOYW1lICsgJ0luZm8nKTtcXG5cXHR9XFxuXFx0XFxuXFx0cmV0dXJuIHJlc3VsdDtcXG59XCIsXCJ1c2VDb3JlQVBJXCI6ZmFsc2UsXCJjb3JlXCI6dHJ1ZX0sXCIxYTUxMTFkMTdhMTgwMGNcIjp7XCJfaWRcIjpcIjFhNTExMWQxN2ExODAwY1wiLFwiY29tcG9uZW50XCI6XCJfRGF0YWJhc2VcIixcInN0YXRlXCI6XCJjb2xsZWN0aW9uc1wiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBjb2xsZWN0aW9ucygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJztcXG5cXG4gIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gJGRiLnN0b3JlKSB7XFxuICAgIGlmICgkZGIuc3RvcmUuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpKSB7XFxuICAgICAgcmVzdWx0W2NvbGxlY3Rpb25OYW1lXSA9ICRkYltjb2xsZWN0aW9uTmFtZV07XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFwiY29yZVwiOnRydWUsXCJ1c2VDb3JlQVBJXCI6dHJ1ZX0sXCIxZDk5MzEwOGZhMThlZjJcIjp7XCJfaWRcIjpcIjFkOTkzMTA4ZmExOGVmMlwiLFwiY29tcG9uZW50XCI6XCJfTG9nZ2VyXCIsXCJzdGF0ZVwiOlwiZGVidWdcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gZGVidWcobWVzc2FnZSkge1xcbiAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICBjb25zb2xlLmxvZygncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgfVxcbn1cIixcImNvcmVcIjp0cnVlfSxcIjFhMzdhMTg4ZTExZmU3M1wiOntcIl9pZFwiOlwiMWEzN2ExODhlMTFmZTczXCIsXCJjb21wb25lbnRcIjpcIl9Mb2dnZXJcIixcInN0YXRlXCI6XCJlcnJvclwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XFxuICBjb25zb2xlLmVycm9yKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxufVwiLFwiY29yZVwiOnRydWV9LFwiMWVkZDIxZTEyYTE2NTM0XCI6e1wiX2lkXCI6XCIxZWRkMjFlMTJhMTY1MzRcIixcImNvbXBvbmVudFwiOlwiX0xvZ2dlclwiLFwic3RhdGVcIjpcImluZm9cIixcImFjdGlvblwiOlwiZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7XFxuICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgfVxcbn1cIixcImNvcmVcIjp0cnVlfSxcIjE0MWYyMTQzZDMxMjJhNFwiOntcIl9pZFwiOlwiMTQxZjIxNDNkMzEyMmE0XCIsXCJjb21wb25lbnRcIjpcIl9Mb2dnZXJcIixcInN0YXRlXCI6XCJsZXZlbFwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBsZXZlbCh2YWwpIHtcXG4gICRsb2cubGV2ZWwodmFsKTtcXG59XCIsXCJjb3JlXCI6dHJ1ZSxcInVzZUNvcmVBUElcIjp0cnVlfSxcIjE5MjQwMWJhYjIxMzA0ZVwiOntcIl9pZFwiOlwiMTkyNDAxYmFiMjEzMDRlXCIsXCJjb21wb25lbnRcIjpcIl9Mb2dnZXJcIixcInN0YXRlXCI6XCJ3YXJuXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xcbiAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2luZm8nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ3dhcm4nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gIH1cXG59XCIsXCJjb3JlXCI6dHJ1ZX0sXCIxMWZjNzE1ZTJmMWEzMWVcIjp7XCJfaWRcIjpcIjExZmM3MTVlMmYxYTMxZVwiLFwiY29tcG9uZW50XCI6XCJfTWV0YW1vZGVsXCIsXCJzdGF0ZVwiOlwiY3JlYXRlXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIGNyZWF0ZSgpIHtcXG4gICRtZXRhbW9kZWwuY3JlYXRlKCk7XFxufVwiLFwiY29yZVwiOnRydWUsXCJ1c2VDb3JlQVBJXCI6dHJ1ZX0sXCIxMjMyZjFmMTA3MTQyY2ZcIjp7XCJfaWRcIjpcIjEyMzJmMWYxMDcxNDJjZlwiLFwiY29tcG9uZW50XCI6XCJfTWV0YW1vZGVsXCIsXCJzdGF0ZVwiOlwibW9kZWxcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gbW9kZWwobmFtZSwgbW9kZWwpIHtcXG4gIHJldHVybiAkbWV0YW1vZGVsLm1vZGVsKG5hbWUsIG1vZGVsKTtcXG59XCIsXCJjb3JlXCI6dHJ1ZSxcInVzZUNvcmVBUElcIjp0cnVlfSxcIjEzNjU0MTJmNjkxNTNkMlwiOntcIl9pZFwiOlwiMTM2NTQxMmY2OTE1M2QyXCIsXCJjb21wb25lbnRcIjpcIl9NZXRhbW9kZWxcIixcInN0YXRlXCI6XCJzY2hlbWFcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gc2NoZW1hKG5hbWUsIHNjaGVtYSkge1xcbiAgcmV0dXJuICRtZXRhbW9kZWwuc2NoZW1hKG5hbWUsIHNjaGVtYSk7XFxufVwiLFwiY29yZVwiOnRydWUsXCJ1c2VDb3JlQVBJXCI6dHJ1ZX0sXCIxOTRkYjE0N2ZlMTYxYTJcIjp7XCJfaWRcIjpcIjE5NGRiMTQ3ZmUxNjFhMlwiLFwiY29tcG9uZW50XCI6XCJfTWV0YW1vZGVsXCIsXCJzdGF0ZVwiOlwidHlwZVwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiB0eXBlKG5hbWUsIHR5cGUpIHtcXG4gIHJldHVybiAkbWV0YW1vZGVsLnR5cGUobmFtZSwgdHlwZSk7XFxufVwiLFwiY29yZVwiOnRydWUsXCJ1c2VDb3JlQVBJXCI6dHJ1ZX0sXCIxZWY5NTFmMTQxMWI4OTVcIjp7XCJfaWRcIjpcIjFlZjk1MWYxNDExYjg5NVwiLFwiY29tcG9uZW50XCI6XCJfT1NHaVwiLFwic3RhdGVcIjpcImluc3RhbGxcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gaW5zdGFsbCh1cmwsIGFzeW5jKSB7XFxuICB2YXIgaW1wb3J0ZWRTeXN0ZW0gPSBudWxsLFxcbiAgICBzeXN0ZW0gPSB7fSxcXG4gICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgY2FsbGJhY2tMb2FkID0gbnVsbCxcXG4gICAgeGhyID0gbnVsbCxcXG4gICAgcmVzdWx0ID0gJycsXFxuICAgIGNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xcblxcbiAgaWYgKHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XFxuICAgIGltcG9ydGVkU3lzdGVtID0gdXJsO1xcbiAgfSBlbHNlIHtcXG4gICAgaWYgKHVybC5pbmRleE9mKCd7JykgPT09IDApIHtcXG4gICAgICBpbXBvcnRlZFN5c3RlbSA9IEpTT04ucGFyc2UodXJsKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgaWYgKGltcG9ydGVkU3lzdGVtKSB7XFxuICAgIHN5c3RlbUlkID0gJGRiLmltcG9ydFN5c3RlbShpbXBvcnRlZFN5c3RlbSk7XFxuICAgIGlmIChzeXN0ZW1JZCkge1xcbiAgICAgIHN5c3RlbSA9IHRoaXMucmVxdWlyZShzeXN0ZW1JZCk7XFxuXFxuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgICBzeXN0ZW0ubG9jYXRpb24odXJsKTtcXG4gICAgICB9XFxuICAgICAgc3lzdGVtLnN0YXRlKCdpbnN0YWxsZWQnKTtcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3lzdGVtSWQpO1xcbiAgICAgIHN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXN0ZW1JZCk7XFxuXFxuICAgICAgcmVzdWx0ID0gc3lzdGVtSWQ7XFxuICAgIH1cXG4gIH0gZWxzZSB7XFxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xcbiAgICAgIGlmICh1cmwuaW5kZXhPZignLmpzb24nKSAhPT0gLTEpIHtcXG4gICAgICAgIHN5c3RlbSA9IHJlcXVpcmUoZ2xvYmFsLnByb2Nlc3MuZW52LlBXRCArICcvJyArIHVybCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHN5c3RlbSA9IHJlcXVpcmUodXJsKTtcXG4gICAgICB9XFxuICAgICAgc3lzdGVtSWQgPSAkZGIuaW1wb3J0U3lzdGVtKHN5c3RlbSk7XFxuICAgICAgc3lzdGVtID0gdGhpcy5yZXF1aXJlKHN5c3RlbUlkKTtcXG5cXG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcXG4gICAgICAgIHN5c3RlbS5sb2NhdGlvbih1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW0uc3RhdGUoJ2luc3RhbGxlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXN0ZW1JZCk7XFxuICAgICAgc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5c3RlbUlkKTtcXG5cXG4gICAgICByZXN1bHQgPSBzeXN0ZW1JZDtcXG4gICAgfSBlbHNlIHtcXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcXG4gICAgICBjYWxsYmFja0xvYWQgPSBmdW5jdGlvbiBjYWxsYmFja0xvYWQoc3lzdGVtLCB1cmwpIHtcXG4gICAgICAgIHZhciBzeXNJZCA9ICRkYi5pbXBvcnRTeXN0ZW0oc3lzdGVtKSxcXG4gICAgICAgICAgc3lzID0gJGNvbXBvbmVudC5nZXQoc3lzSWQpLFxcbiAgICAgICAgICBjaGFubmVsID0gJGNvbXBvbmVudC5nZXQoJ2NoYW5uZWwnKTtcXG5cXG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xcbiAgICAgICAgICBzeXMubG9jYXRpb24odXJsKTtcXG4gICAgICAgIH1cXG4gICAgICAgIHN5cy5zdGF0ZSgnaW5zdGFsbGVkJyk7XFxuICAgICAgICBjaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3lzSWQpO1xcbiAgICAgICAgc3lzLnN0YXRlKCdyZXNvbHZlZCcpO1xcbiAgICAgICAgY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3lzSWQpO1xcblxcbiAgICAgICAgcmVzdWx0ID0gc3lzSWQ7XFxuICAgICAgfTtcXG5cXG4gICAgICBpZiAoYXN5bmMpIHtcXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XFxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAwKSB7XFxuICAgICAgICAgICAgICBjYWxsYmFja0xvYWQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpLCB1cmwpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCBmYWxzZSk7XFxuICAgICAgICB4aHIuc2VuZChudWxsKTtcXG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgfHwgeGhyLnN0YXR1cyA9PT0gMCkge1xcbiAgICAgICAgICBjYWxsYmFja0xvYWQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpLCB1cmwpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXCJ1c2VDb3JlQVBJXCI6dHJ1ZSxcImNvcmVcIjp0cnVlfSxcIjE0YzE1MTdiNzExY2I3OFwiOntcIl9pZFwiOlwiMTRjMTUxN2I3MTFjYjc4XCIsXCJjb21wb25lbnRcIjpcIl9PU0dpXCIsXCJzdGF0ZVwiOlwidW5pbnN0YWxsXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIHVuaW5zdGFsbChpZCkge1xcbiAgdmFyIHNlYXJjaCA9IHt9LFxcbiAgICBzeXN0ZW0gPSBudWxsLFxcbiAgICBiZWhhdmlvcklkID0gJycsXFxuICAgIGNvbGxlY3Rpb24gPSAnJyxcXG4gICAgY29tcG9uZW50SWQgPSAnJyxcXG4gICAgbGVuZ3RoID0gMCxcXG4gICAgaSA9IDAsXFxuICAgIGNvcmVDb21wb25lbnRzID0gWydhZG1pbicsICdjaGFubmVsJywgJ2RiJywgJ2xvZ2dlcicsICdtZXRhbW9kZWwnLCAncnVudGltZSddO1xcblxcbiAgc2VhcmNoID0gJGRiLl9TeXN0ZW0uZmluZCh7XFxuICAgICdfaWQnOiBpZFxcbiAgfSk7XFxuXFxuICBpZiAoc2VhcmNoLmxlbmd0aCkge1xcbiAgICBzeXN0ZW0gPSBzZWFyY2hbMF07XFxuICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcXG4gICAgaWYgKHN5c3RlbS5iZWhhdmlvcnMpIHtcXG4gICAgICBmb3IgKGJlaGF2aW9ySWQgaW4gc3lzdGVtLmJlaGF2aW9ycykge1xcbiAgICAgICAgJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICAnX2lkJzogc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvcklkXS5faWRcXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAvLyByZW1vdmUgY29tcG9uZW50c1xcbiAgICBpZiAoc3lzdGVtLmNvbXBvbmVudHMpIHtcXG4gICAgICBmb3IgKGNvbGxlY3Rpb24gaW4gc3lzdGVtLmNvbXBvbmVudHMpIHtcXG4gICAgICAgIGZvciAoY29tcG9uZW50SWQgaW4gc3lzdGVtLmNvbXBvbmVudHNbY29sbGVjdGlvbl0pIHtcXG4gICAgICAgICAgaWYgKGNvcmVDb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50SWQpID09PSAtMSkge1xcbiAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS5yZW1vdmUoe1xcbiAgICAgICAgICAgICAgJ19pZCc6IGNvbXBvbmVudElkXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIGlmICh0aGlzLnJlcXVpcmUoaWQpICYmIHRoaXMucmVxdWlyZShpZCkuc3RhdGUpIHtcXG4gICAgdGhpcy5yZXF1aXJlKGlkKS5zdGF0ZSgndW5pbnN0YWxsZWQnKTtcXG4gICAgdGhpcy5yZXF1aXJlKCdjaGFubmVsJykuJHN5c3RlbVVuaW5zdGFsbGVkKGlkKTtcXG4gIH1cXG59XCIsXCJ1c2VDb3JlQVBJXCI6dHJ1ZSxcImNvcmVcIjp0cnVlfSxcIjEwNWYyMTljNjgxMzY0M1wiOntcIl9pZFwiOlwiMTA1ZjIxOWM2ODEzNjQzXCIsXCJjb21wb25lbnRcIjpcIl9PU0dpXCIsXCJzdGF0ZVwiOlwic3RhcnRcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gc3RhcnQoaWQpIHtcXG4gIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoaWQpLFxcbiAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuXFxuICBpZiAoc3lzdGVtLnN0YXRlKCkgPT09ICdyZXNvbHZlZCcgfHwgc3lzdGVtLnN0YXRlKCkgPT09ICdpbnN0YWxsZWQnKSB7XFxuICAgIHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gICAgaWYgKHN5c3RlbS5zdGFydCkge1xcbiAgICAgIHN5c3RlbS5zdGFydCgpO1xcbiAgICB9XFxuICAgIGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoaWQpO1xcbiAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgfVxcbn1cIixcInVzZUNvcmVBUElcIjpmYWxzZSxcImNvcmVcIjp0cnVlfSxcIjFhODFhMWYwMGQxNzI2OVwiOntcIl9pZFwiOlwiMWE4MWExZjAwZDE3MjY5XCIsXCJjb21wb25lbnRcIjpcIl9PU0dpXCIsXCJzdGF0ZVwiOlwic3RvcFwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBzdG9wKGlkKSB7XFxuICB2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGlkKSxcXG4gICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcbiAgaWYgKHN5c3RlbS5zdGF0ZSgpID09PSAnYWN0aXZlJykge1xcbiAgICBzeXN0ZW0uc3RhdGUoJ3N0b3BwaW5nJyk7XFxuICAgIGlmIChzeXN0ZW0uc3RvcCkge1xcbiAgICAgIHN5c3RlbS5zdG9wKCk7XFxuICAgIH1cXG4gICAgY2hhbm5lbC4kc3lzdGVtU3RvcHBlZChpZCk7XFxuICAgIHN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gICAgY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoaWQpO1xcbiAgfVxcbn1cIixcInVzZUNvcmVBUElcIjpmYWxzZSxcImNvcmVcIjp0cnVlfSxcIjExNjg1MWI2MDIxMjhkMVwiOntcIl9pZFwiOlwiMTE2ODUxYjYwMjEyOGQxXCIsXCJjb21wb25lbnRcIjpcIl9PU0dpXCIsXCJzdGF0ZVwiOlwic3RhdHVzXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIHN0YXR1cygpIHtcXG4gIHZhciByZXN1bHQgPSB7fSxcXG4gICAgc3lzdGVtID0gbnVsbCxcXG4gICAgbGVuZ3RoID0gMCxcXG4gICAgaSA9IDA7XFxuXFxuICBzeXN0ZW1zID0gJGRiLl9TeXN0ZW0uZmluZCh7fSk7XFxuXFxuICBsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgICByZXN1bHRbc3lzdGVtLm5hbWVdID0ge1xcbiAgICAgICdpZCc6IHN5c3RlbS5faWQsXFxuICAgICAgJ3N0YXRlJzogc3lzdGVtLnN0YXRlLFxcbiAgICAgICduYW1lJzogc3lzdGVtLm5hbWUsXFxuICAgICAgJ3ZlcnNpb24nOiBzeXN0ZW0udmVyc2lvbixcXG4gICAgICAnbG9jYXRpb24nOiBzeXN0ZW0ubG9jYXRpb24sXFxuICAgICAgJ21hc3Rlcic6IHN5c3RlbS5tYXN0ZXJcXG4gICAgfTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFwidXNlQ29yZUFQSVwiOnRydWUsXCJjb3JlXCI6dHJ1ZX0sXCIxOWNmMzE3ZDcyMTczMzFcIjp7XCJfaWRcIjpcIjE5Y2YzMTdkNzIxNzMzMVwiLFwiY29tcG9uZW50XCI6XCJfT1NHaVwiLFwic3RhdGVcIjpcImJ1bmRsZVwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBidW5kbGUoKSB7IFxcblxcdHZhciByZXN1bHQgPSAkZGIuZXhwb3J0U3lzdGVtKCk7XFxuXFx0cmV0dXJuIHJlc3VsdDtcXG59XCIsXCJ1c2VDb3JlQVBJXCI6dHJ1ZSxcImNvcmVcIjp0cnVlfSxcIjEzMDEwMTY3ZjMxM2Y4N1wiOntcIl9pZFwiOlwiMTMwMTAxNjdmMzEzZjg3XCIsXCJjb21wb25lbnRcIjpcIl9SdW50aW1lXCIsXCJzdGF0ZVwiOlwic3lzdGVtXCIsXCJhY3Rpb25cIjpcImZ1bmN0aW9uIHN5c3RlbShwYXJhbXMpIHtcXG4gIHZhciBSdW50aW1lU3lzdGVtID0gbnVsbCxcXG4gICAgc3lzdGVtID0ge30sXFxuICAgIHN5c3RlbUlkID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBjb25mID0ge307XFxuXFxuICBpZiAocGFyYW1zKSB7XFxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnc3RyaW5nJykge1xcbiAgICAgIGNvbmYubWFzdGVyID0gdHJ1ZTtcXG4gICAgICBjb25mLm5hbWUgPSBwYXJhbXM7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgY29uZiA9IHBhcmFtcztcXG4gICAgICBjb25mLm1hc3RlciA9IHRydWU7XFxuICAgIH1cXG4gICAgUnVudGltZVN5c3RlbSA9IHRoaXMucmVxdWlyZSgnX1N5c3RlbScpO1xcbiAgICBzeXN0ZW0gPSBuZXcgUnVudGltZVN5c3RlbShjb25mKTtcXG4gICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gIH0gZWxzZSB7XFxuICAgIHJlc3VsdCA9ICRkYi5fU3lzdGVtLmZpbmQoe1xcbiAgICAgICdtYXN0ZXInOiB0cnVlXFxuICAgIH0pO1xcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xcbiAgICAgIHN5c3RlbUlkID0gcmVzdWx0WzBdLl9pZDtcXG4gICAgICBzeXN0ZW0gPSAkY29tcG9uZW50LmdldChzeXN0ZW1JZCk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiBzeXN0ZW07XFxufVwiLFwiY29yZVwiOnRydWUsXCJ1c2VDb3JlQVBJXCI6dHJ1ZX0sXCIxY2ZhNDE0NWY2MTRkYThcIjp7XCJfaWRcIjpcIjFjZmE0MTQ1ZjYxNGRhOFwiLFwiY29tcG9uZW50XCI6XCJfUnVudGltZVwiLFwic3RhdGVcIjpcIm1lc3NhZ2VcIixcImFjdGlvblwiOlwiZnVuY3Rpb24gbWVzc2FnZShtc2cpIHsgXFxuICAkZGIuX01lc3NhZ2UuaW5zZXJ0KG1zZyk7XFxufVwiLFwidXNlQ29yZUFQSVwiOnRydWUsXCJjb3JlXCI6dHJ1ZX0sXCIxY2I5ZDEwM2Q0MWRkOTdcIjp7XCJfaWRcIjpcIjFjYjlkMTAzZDQxZGQ5N1wiLFwiY29tcG9uZW50XCI6XCJlODljNjE3YjZiMTVkMjRcIixcInN0YXRlXCI6XCJzdGFydFwiLFwiYWN0aW9uXCI6XCJmdW5jdGlvbiBzdGFydCgpIHtcXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiBET01Db250ZW50TG9hZGVkKGUpIHtcXG4gICAgICB2YXIgc3lzdGVtcyA9IFtdLFxcbiAgICAgICAgc3lzdGVtID0gbnVsbCxcXG4gICAgICAgIHNjcmlwdHMgPSBbXSxcXG4gICAgICAgIHNjcmlwdCA9IG51bGwsXFxuICAgICAgICBsb2dMZXZlbCA9ICd3YXJuJyxcXG4gICAgICAgIGkgPSAwLFxcbiAgICAgICAgbGVuZ3RoID0gMDtcXG4gICAgXFxuICAgICAgc3lzdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN5c3RlbV0nKTtcXG4gICAgICBsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG4gIFxcbiAgICAgIC8vIGxvZ2dlclxcbiAgICAgIHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbbG9nXScpO1xcbiAgICAgIGlmIChzY3JpcHRzLmxlbmd0aCkge1xcbiAgICAgICAgbG9nTGV2ZWwgPSBzY3JpcHRzWzBdLmdldEF0dHJpYnV0ZSgnbG9nJyk7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKGxvZ0xldmVsKTtcXG4gICAgICB9XFxuICBcXG4gICAgICAvLyBzeXN0ZW1zXFxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgXFxuICAgICAgICBpZiAoc3lzdGVtLmdldEF0dHJpYnV0ZSgnYXN5bmMnKSA9PT0gJ2ZhbHNlJykge1xcbiAgICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5pbnN0YWxsKHN5c3RlbS5ocmVmLCBmYWxzZSk7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5pbnN0YWxsKHN5c3RlbS5ocmVmLCB0cnVlKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICBcXG4gICAgICAvLyByZWFkeSBldmVudFxcbiAgICAgIGlmIChsZW5ndGggPT09IDApIHtcXG4gICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLnJlYWR5KCk7XFxuICAgICAgfVxcbiAgfS5iaW5kKHRoaXMpKTtcXG4gIH1cXG59XCIsXCJ1c2VDb3JlQVBJXCI6dHJ1ZSxcImNvcmVcIjp0cnVlfX0sXCJ0eXBlc1wiOntcImNzc1wiOntcIl9pZFwiOlwiaDFkODgzMTFhYzAxOTIxMVwiLFwibmFtZVwiOlwiY3NzXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIixcImNvcmVcIjp0cnVlfSxcImRhdGVcIjp7XCJfaWRcIjpcImMxN2NhZDFiYzNkMTc3NTJcIixcIm5hbWVcIjpcImRhdGVcIixcInR5cGVcIjpcIm9iamVjdFwiLFwiY29yZVwiOnRydWV9LFwianNvblwiOntcIl9pZFwiOlwiZTFkMjVhMTJlNjcxMjdlZFwiLFwibmFtZVwiOlwianNvblwiLFwidHlwZVwiOlwib2JqZWN0XCIsXCJjb3JlXCI6dHJ1ZX0sXCJkYkluc2VydEV2ZW50XCI6e1wiX2lkXCI6XCIxNDhlZjFlMTk4MTBlNmRcIixcImNvcmVcIjp0cnVlLFwibmFtZVwiOlwiZGJJbnNlcnRFdmVudFwiLFwidHlwZVwiOlwib2JqZWN0XCIsXCJzY2hlbWFcIjp7XCJjb2xsZWN0aW9uXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjp0cnVlLFwiZGVmYXVsdFwiOlwiXCJ9LFwiZG9jdW1lbnRcIjp7XCJ0eXBlXCI6XCJvYmplY3RcIixcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6e319fX0sXCJkYlJlbW92ZUV2ZW50XCI6e1wiX2lkXCI6XCIxOTUyZTFhYzQyMTNmNGFcIixcIm5hbWVcIjpcImRiUmVtb3ZlRXZlbnRcIixcInR5cGVcIjpcIm9iamVjdFwiLFwiY29yZVwiOnRydWUsXCJzY2hlbWFcIjp7XCJjb2xsZWN0aW9uXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjp0cnVlLFwiZGVmYXVsdFwiOlwiXCJ9LFwiaWRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCJcIn19fSxcImRiVXBkYXRlRXZlbnRcIjp7XCJfaWRcIjpcIjFmNWM0MTMwOTcxMTc1MlwiLFwiY29yZVwiOnRydWUsXCJuYW1lXCI6XCJkYlVwZGF0ZUV2ZW50XCIsXCJ0eXBlXCI6XCJvYmplY3RcIixcInNjaGVtYVwiOntcImNvbGxlY3Rpb25cIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6XCJcIn0sXCJpZFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6dHJ1ZSxcImRlZmF1bHRcIjpcIlwifSxcImZpZWxkXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjp0cnVlLFwiZGVmYXVsdFwiOlwiXCJ9LFwidmFsdWVcIjp7XCJ0eXBlXCI6XCJhbnlcIixcIm1hbmRhdG9yeVwiOnRydWUsXCJkZWZhdWx0XCI6bnVsbH19fSxcImRiQWN0aW9uXCI6e1wiX2lkXCI6XCJlMTk1MGUxNmYyOTE0ZGE5XCIsXCJjb3JlXCI6dHJ1ZSxcIm5hbWVcIjpcImRiQWN0aW9uXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIixcInZhbHVlXCI6W1wiaW5zZXJ0XCIsXCJ1cGRhdGVcIixcInJlbW92ZVwiXX0sXCJjb2xsZWN0aW9uXCI6e1wiX2lkXCI6XCJkMWMwZDAxMzBjNjE2MTk5XCIsXCJuYW1lXCI6XCJjb2xsZWN0aW9uXCIsXCJ0eXBlXCI6XCJvYmplY3RcIixcInNjaGVtYVwiOntcInR5cGVcIjp7XCJ0eXBlXCI6W1wic3RyaW5nXCJdLFwibWFuZGF0b3J5XCI6dHJ1ZX0sXCJyZWFkT25seVwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcIm1hbmRhdG9yeVwiOnRydWV9LFwibWFuZGF0b3J5XCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwibWFuZGF0b3J5XCI6dHJ1ZX0sXCJkZWZhdWx0XCI6e1widHlwZVwiOlwiYXJyYXlcIixcIm1hbmRhdG9yeVwiOnRydWV9LFwiZGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcIm1hbmRhdG9yeVwiOmZhbHNlfSxcImxhYmVsXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjpmYWxzZX19LFwiY29yZVwiOnRydWV9LFwiZXJyb3JQYXJhbVwiOntcIl9pZFwiOlwiZTE5ODc2MWZjMGIxYWU4YVwiLFwibmFtZVwiOlwiZXJyb3JQYXJhbVwiLFwidHlwZVwiOlwib2JqZWN0XCIsXCJzY2hlbWFcIjp7XCJtZXNzYWdlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjp0cnVlfSxcImVycm9yXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJtYW5kYXRvcnlcIjp0cnVlfX0sXCJjb3JlXCI6dHJ1ZX0sXCJldmVudFwiOntcIl9pZFwiOlwiZzE2NjhkMWRlMmQxZmY2ZlwiLFwibmFtZVwiOlwiZXZlbnRcIixcInR5cGVcIjpcIm9iamVjdFwiLFwic2NoZW1hXCI6e1wicGFyYW1zXCI6e1widHlwZVwiOltcInBhcmFtZXRlclwiXSxcIm1hbmRhdG9yeVwiOmZhbHNlfSxcImRlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjpmYWxzZX19LFwiY29yZVwiOnRydWV9LFwiaHRtbFwiOntcIl9pZFwiOlwieTE2MWMyMTMyMGIxMWFjYlwiLFwibmFtZVwiOlwiaHRtbFwiLFwidHlwZVwiOlwic3RyaW5nXCIsXCJjb3JlXCI6dHJ1ZX0sXCJqYXZhc2NyaXB0XCI6e1wiX2lkXCI6XCJzMTNkNGMxZmRmOTE2NTA0XCIsXCJuYW1lXCI6XCJqYXZhc2NyaXB0XCIsXCJ0eXBlXCI6XCJzdHJpbmdcIixcImNvcmVcIjp0cnVlfSxcImxpbmtcIjp7XCJfaWRcIjpcInAxMjQ2MDE4MDFkMWRiZmFcIixcIm5hbWVcIjpcImxpbmtcIixcInR5cGVcIjpcIm9iamVjdFwiLFwic2NoZW1hXCI6e1widHlwZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6dHJ1ZX0sXCJyZWFkT25seVwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcIm1hbmRhdG9yeVwiOnRydWV9LFwibWFuZGF0b3J5XCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwibWFuZGF0b3J5XCI6dHJ1ZX0sXCJkZWZhdWx0XCI6e1widHlwZVwiOlwie3R5cGV9XCIsXCJtYW5kYXRvcnlcIjp0cnVlfSxcImRlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjpmYWxzZX0sXCJsYWJlbFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6ZmFsc2V9fSxcImNvcmVcIjp0cnVlfSxcImxvZ1wiOntcIl9pZFwiOlwiZDFmZDE2MWE0YTQxNDlmY1wiLFwibmFtZVwiOlwibG9nXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIixcInZhbHVlXCI6W1wiZGVidWdcIixcImluZm9cIixcIndhcm5cIixcImVycm9yXCJdLFwiY29yZVwiOnRydWV9LFwibWVzc2FnZVwiOntcIl9pZFwiOlwibDEzYjA2MWFjNTcxMjcyZFwiLFwibmFtZVwiOlwibWVzc2FnZVwiLFwidHlwZVwiOlwib2JqZWN0XCIsXCJzY2hlbWFcIjp7XCJldmVudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwibWFuZGF0b3J5XCI6dHJ1ZX0sXCJmcm9tXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjpmYWxzZX0sXCJkYXRhXCI6e1widHlwZVwiOlwiYXJyYXlcIixcIm1hbmRhdG9yeVwiOnRydWV9fSxcImNvcmVcIjp0cnVlfSxcIm1ldGhvZFwiOntcIl9pZFwiOlwieDEyMjcyMThlZWQxZjNlOVwiLFwibmFtZVwiOlwibWV0aG9kXCIsXCJ0eXBlXCI6XCJvYmplY3RcIixcInNjaGVtYVwiOntcInJlc3VsdFwiOntcInR5cGVcIjpcImFueVwiLFwibWFuZGF0b3J5XCI6ZmFsc2V9LFwicGFyYW1zXCI6e1widHlwZVwiOltcInBhcmFtZXRlclwiXSxcIm1hbmRhdG9yeVwiOmZhbHNlfSxcImRlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjpmYWxzZX19LFwiY29yZVwiOnRydWV9LFwib3NnaVN0YXRlc1wiOntcIl9pZFwiOlwicTFmMGNhMTIwZmMxM2ZiM1wiLFwibmFtZVwiOlwib3NnaVN0YXRlc1wiLFwidHlwZVwiOlwic3RyaW5nXCIsXCJ2YWx1ZVwiOltcIm5vbmVcIixcImluc3RhbGxlZFwiLFwicmVzb2x2ZWRcIixcInN0YXJ0aW5nXCIsXCJhY3RpdmVcIixcInN0b3BwaW5nXCIsXCJ1bmluc3RhbGxlZFwiXSxcImNvcmVcIjp0cnVlfSxcInBhcmFtZXRlclwiOntcIl9pZFwiOlwiZTFiMThlMTZjNmMxOTVhZFwiLFwibmFtZVwiOlwicGFyYW1ldGVyXCIsXCJ0eXBlXCI6XCJvYmplY3RcIixcInNjaGVtYVwiOntcImRlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjpmYWxzZX0sXCJuYW1lXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjp0cnVlfSxcInR5cGVcIjp7XCJ0eXBlXCI6XCJhbnlcIixcIm1hbmRhdG9yeVwiOnRydWV9LFwibWFuZGF0b3J5XCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwibWFuZGF0b3J5XCI6ZmFsc2V9LFwiZGVmYXVsdFwiOntcInR5cGVcIjpcInt0eXBlfVwiLFwibWFuZGF0b3J5XCI6ZmFsc2V9fSxcImNvcmVcIjp0cnVlfSxcInByb3BlcnR5XCI6e1wiX2lkXCI6XCJhMTZhM2ExYWUwNTFhNTVkXCIsXCJuYW1lXCI6XCJwcm9wZXJ0eVwiLFwidHlwZVwiOlwib2JqZWN0XCIsXCJzY2hlbWFcIjp7XCJ0eXBlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjp0cnVlfSxcInJlYWRPbmx5XCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwibWFuZGF0b3J5XCI6dHJ1ZX0sXCJtYW5kYXRvcnlcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJtYW5kYXRvcnlcIjp0cnVlfSxcImRlZmF1bHRcIjp7XCJ0eXBlXCI6XCJ7dHlwZX1cIixcIm1hbmRhdG9yeVwiOnRydWV9LFwiZGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcIm1hbmRhdG9yeVwiOmZhbHNlfSxcImxhYmVsXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJtYW5kYXRvcnlcIjpmYWxzZX19LFwiY29yZVwiOnRydWV9LFwidGV4dFwiOntcIl9pZFwiOlwiYzEzNmZjMTI5YTkxMmY1NFwiLFwibmFtZVwiOlwidGV4dFwiLFwidHlwZVwiOlwic3RyaW5nXCIsXCJjb3JlXCI6dHJ1ZX19LFwiY29tcG9uZW50c1wiOntcIl9DaGFubmVsXCI6e1wiY2hhbm5lbFwiOntcIl9pZFwiOlwiY2hhbm5lbFwifX0sXCJfRGF0YWJhc2VcIjp7XCJkYlwiOntcIl9pZFwiOlwiZGJcIn19LFwiX0xvZ2dlclwiOntcImxvZ2dlclwiOntcIl9pZFwiOlwibG9nZ2VyXCIsXCJsZXZlbFwiOlwid2FyblwifX0sXCJfTWV0YW1vZGVsXCI6e1wibWV0YW1vZGVsXCI6e1wiX2lkXCI6XCJtZXRhbW9kZWxcIn19LFwiX1J1bnRpbWVcIjp7XCJydW50aW1lXCI6e1wiX2lkXCI6XCJydW50aW1lXCIsXCJ2ZXJzaW9uXCI6XCIyLjcuMFwifX19LFwiX2lkXCI6XCJlODljNjE3YjZiMTVkMjRcIn1cbjtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGJlaGF2aW9ycyBvZiBhbGwgY29tcG9uZW50cy5cbiAqIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cbnZhciBzdG9yZSA9IHt9O1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVuYyBhIHN0cmluZ2lmaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgdGhlIGJlaGF2aW9yIHdpbGwgYmUgdHJlYXRlZCBhcyBhIFN5c3RlbSBSdW50aW1lIGNvcmUgYmVoYXZpb3IuXG4gKiBJbiB0aGF0IGNhc2UsIHRoZSBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkIGluIGEgc3lzdGVtIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFN5c3RlbSBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGZ1bmN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgY3JlYXRlZCBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBmdW5jdGlvbiBmcm9tIGEgc3RyaW5nLlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb246XG4gKiAtIHdpbGwgYmUgYSBuYW1lZCBmdW5jdGlvbixcbiAqIC0gaGFzIHRoZSBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgYW5kXG4gKiAtIGNhbiBoYXZlIHNvbWUgY29yZSBtb2R1bGVzIGluamVjdGVkIGFzIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24obmFtZSwgZnVuYywgY29yZSwgdXNlQ29yZUFQSSkge1xuICB2YXIgYmVnaW5Cb2R5ID0gLTE7XG4gIHZhciBmdW5jUGFyYW1zID0gJyc7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHBhcmFtc0NsZWFuID0gW107XG4gIHZhciBmdW5jQm9keSA9ICcnO1xuICB2YXIgaGVhZGVyID0gJyc7XG4gIHZhciBhY3Rpb24gPSBudWxsO1xuICB2YXIgaXNBcnJvd0Z1bmN0aW9uID0gdHJ1ZTtcbiAgdmFyIGlzT25lTGluZSA9IGZhbHNlO1xuXG4gIGlmIChmdW5jLnRyaW0oKS5pbmRleE9mKCdmdW5jdGlvbicpID09PSAwKSB7XG4gICAgaXNBcnJvd0Z1bmN0aW9uID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNBcnJvd0Z1bmN0aW9uKSB7XG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCc9PicpO1xuXG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgICBoZWFkZXIgPSBoZWFkZXIucmVwbGFjZSgnPT4nLCAnJyk7XG5cbiAgICBpZiAoaGVhZGVyLmluZGV4T2YoJygnKSAhPT0gLTEpIHtcbiAgICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXJcbiAgICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgICAgLnJlcGxhY2UoJyknLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVuY1BhcmFtcyA9IGhlYWRlci50cmltKCk7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDIsIGZ1bmMubGVuZ3RoKS50cmltKCk7XG5cbiAgICBpZiAoZnVuY0JvZHkuaW5kZXhPZigneycpID09PSAwKSB7XG4gICAgICBmdW5jQm9keSA9IGZ1bmNCb2R5LnN1YnN0cmluZygxLCBmdW5jQm9keS5sYXN0SW5kZXhPZignfScpKS50cmltKCk7XG4gICAgfVxuXG4gICAgaWYgKGZ1bmNCb2R5LmluZGV4T2YoJ1xcbicpID09PSAtMSkge1xuICAgICAgaXNPbmVMaW5lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJvd0Z1bmN0aW9uICYmIGlzT25lTGluZSAmJiBmdW5jQm9keS5pbmRleE9mKCdyZXR1cm4gJykgPT09IC0xKSB7XG4gICAgICBmdW5jQm9keSA9ICdyZXR1cm4gJyArIGZ1bmNCb2R5O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuXG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlclxuICAgICAgLnNwbGl0KCcoJylbMV1cbiAgICAgIC5yZXBsYWNlKCcpJywgJycpXG4gICAgICAudHJpbSgpO1xuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDEpO1xuICAgIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDAsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcbiAgfVxuXG4gIC8vIGtsdWRnZSBmb3IgQmFiZWxcbiAgZnVuY0JvZHkgPSBmdW5jQm9keS5yZXBsYWNlKC9fdGhpcy9nLCAndGhpcycpO1xuXG4gIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgcGFyYW1zID0gW107XG4gIH1cblxuICBpZiAodXNlQ29yZUFQSSkge1xuICAgIHBhcmFtcy5wdXNoKCckY29tcG9uZW50Jyk7XG4gICAgcGFyYW1zLnB1c2goJyRkYicpO1xuICAgIHBhcmFtcy5wdXNoKCckbWV0YW1vZGVsJyk7XG4gICAgcGFyYW1zLnB1c2goJyR3b3JrZmxvdycpO1xuICAgIHBhcmFtcy5wdXNoKCckYmVoYXZpb3InKTtcbiAgICBwYXJhbXMucHVzaCgnJHN0YXRlJyk7XG4gICAgcGFyYW1zLnB1c2goJyRsb2cnKTtcbiAgICBwYXJhbXMucHVzaCgnJGhlbHBlcicpO1xuICB9XG5cbiAgaWYgKCRoZWxwZXIuaXNPbk5vZGUoKSkge1xuICAgIHBhcmFtcy5wdXNoKCdyZXF1aXJlJyk7XG4gIH1cblxuICBpZiAocGFyYW1zWzBdICE9PSAnJykge1xuICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX3Byb3h5JyxcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICAnICgnICtcbiAgICAgICAgcGFyYW1zLmpvaW4oJywnKSArXG4gICAgICAgIFwiKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oJ1wiICtcbiAgICAgICAgcGFyYW1zLmpvaW4oXCInLCdcIikgK1xuICAgICAgICBcIicsIF9fcHJveHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIlxuICAgICkoZnVuY0JvZHkpO1xuICB9IGVsc2Uge1xuICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdfX3Byb3h5JyxcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICAnICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihfX3Byb3h5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07J1xuICAgICkoZnVuY0JvZHkpO1xuICB9XG5cbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIHRoZSBhY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIGEgc3BlY2lmaWMgc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBTeXN0ZW0gUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZFxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgbmV3IGNvbnRleHQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBpZCBvZiB0aGUgYmVoYXZpb3IgY3JlYXRlZCBpbiBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQoaWQsIHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGNvcmUsIGNvbnRleHQpIHtcbiAgdmFyIGJlaGF2aW9ySWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgdmFyIHN0ckFjdGlvbiA9IGFjdGlvbi50b1N0cmluZygpO1xuXG4gIGlmICh0eXBlb2YgY29yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb3JlID0gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB1c2VDb3JlQVBJID09PSAndW5kZWZpbmVkJykge1xuICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgfVxuXG4gIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKHN0YXRlLCBzdHJBY3Rpb24sIGNvcmUsIHVzZUNvcmVBUEkpO1xuXG4gIHN0b3JlW2JlaGF2aW9ySWRdID0gYWN0aW9uO1xuXG4gICRkYi5fQmVoYXZpb3IuaW5zZXJ0KHtcbiAgICBfaWQ6IGJlaGF2aW9ySWQsXG4gICAgY29tcG9uZW50OiBpZCxcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgYWN0aW9uOiBzdHJBY3Rpb24sXG4gICAgdXNlQ29yZUFQSTogdXNlQ29yZUFQSSxcbiAgICBjb3JlOiBjb3JlLFxuICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgfSk7XG5cbiAgcmV0dXJuIGJlaGF2aW9ySWQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgb3IgcmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIGZvciBhIHNwZWNpZmljIHN0YXRlXG4gKiBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHBhcmFtcykge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICBwYXJhbXMuYmVoYXZpb3JJZCA9IHBhcmFtcy5iZWhhdmlvcklkIHx8ICcnO1xuICBwYXJhbXMuY29tcG9uZW50SWQgPSBwYXJhbXMuY29tcG9uZW50SWQgfHwgJyc7XG4gIHBhcmFtcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCAnJztcblxuICBpZiAocGFyYW1zLmNvbXBvbmVudElkKSB7XG4gICAgaWYgKHBhcmFtcy5iZWhhdmlvcklkKSB7XG4gICAgICAkZGIuX0JlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgIF9pZDogcGFyYW1zLmJlaGF2aW9ySWQsXG4gICAgICAgIGNvbXBvbmVudDogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICBzdGF0ZTogcGFyYW1zLnN0YXRlXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBzdG9yZVtwYXJhbXMuYmVoYXZpb3JJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMuc3RhdGUpIHtcbiAgICAgICAgcmVzdWx0ID0gJGRiLl9CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgIGNvbXBvbmVudDogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICAgIHN0YXRlOiBwYXJhbXMuc3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAkZGIuX0JlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiBwYXJhbXMuY29tcG9uZW50SWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgICAgICBkZWxldGUgc3RvcmVbaWRdO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnlcbiAqL1xuZXhwb3J0cy5yZW1vdmVGcm9tTWVtb3J5ID0gZnVuY3Rpb24gcmVtb3ZlRnJvbU1lbW9yeShpZCkge1xuICBkZWxldGUgc3RvcmVbaWRdO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgYWN0aW9ucyBvZiBhIGJlaGF2aW9yIGZvciBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKGlkLCBzdGF0ZSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBkYlJlc3VsdCA9IFtdO1xuICB2YXIgYWN0aW9uID0gbnVsbDtcblxuICBkYlJlc3VsdCA9ICRkYi5fQmVoYXZpb3IuZmluZCh7XG4gICAgY29tcG9uZW50OiBpZCxcbiAgICBzdGF0ZTogc3RhdGVcbiAgfSk7XG5cbiAgZGJSZXN1bHQuZm9yRWFjaChmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIGFjdGlvbiA9IHN0b3JlW2JlaGF2aW9yLl9pZF07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihcbiAgICAgICAgYmVoYXZpb3Iuc3RhdGUsXG4gICAgICAgIGJlaGF2aW9yLmFjdGlvbixcbiAgICAgICAgYmVoYXZpb3IuY29yZSxcbiAgICAgICAgYmVoYXZpb3IudXNlQ29yZUFQSVxuICAgICAgKTtcbiAgICAgIHN0b3JlW2JlaGF2aW9yLl9pZF0gPSBhY3Rpb247XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgIHVzZUNvcmVBUEk6IGJlaGF2aW9yLnVzZUNvcmVBUEksXG4gICAgICBjb250ZXh0OiBiZWhhdmlvci5jb250ZXh0LFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5XG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7fTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEByZXR1cm5zIHtCZWhhdmlvcn0gdGhlIGJlaGF2aW9yXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgYmVoYXZpb3IgYnkgaXRzIGlkXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBjb21wb25lbnRcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGNvbXBvbmVudHMuXG4gKiBJdCBpcyB0aGUgZmFjdG9yeSBvZiBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBTeXN0ZW0gUnVudGltZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eSc7XG52YXIgTElOS19UWVBFID0gJ2xpbmsnO1xudmFyIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJztcbnZhciBNRVRIT0RfVFlQRSA9ICdtZXRob2QnO1xudmFyIEVWRU5UX1RZUEUgPSAnZXZlbnQnO1xudmFyIE5BTUUgPSAnX25hbWUnO1xudmFyIHN0b3JlID0ge307XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBjbGFzcyBfQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgbWFueSBtZXRob2RzIG9mIEFycmF5IENsYXNzXG4gKi9cbmZ1bmN0aW9uIF9BcnJheShjb25mKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIGFyckRiID0gW107XG4gIHZhciB0eXBlID0gJyc7XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgY2xhc3NJZCA9ICcnO1xuICB2YXIgcHJvcGVydHlOYW1lID0gJyc7XG4gIHZhciBpc1JlYWRPbmx5ID0gZmFsc2U7XG4gIHZhciBpc0NsYXNzTmFtZSA9IGZhbHNlO1xuXG4gIGNvbmYgPSBjb25mIHx8IHt9O1xuICB0eXBlID0gY29uZi50eXBlIHx8ICcnO1xuICBpZCA9IGNvbmYuaWQgfHwgJyc7XG4gIHByb3BlcnR5TmFtZSA9IGNvbmYucHJvcGVydHlOYW1lIHx8ICcnO1xuICBhcnJEYiA9IGNvbmYuYXJyIHx8IFtdO1xuICBjbGFzc0lkID0gY29uZi5jbGFzc0lkIHx8ICcnO1xuXG4gIGlmICh0eXBlb2YgY29uZi5yZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpc1JlYWRPbmx5ID0gY29uZi5yZWFkT25seTtcbiAgfVxuXG4gIGlzQ2xhc3NOYW1lID0gJG1ldGFtb2RlbC5pc0NsYXNzTmFtZSh0eXBlKTtcblxuICAvLyBpbml0XG4gIGFyckRiLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzQ2xhc3NOYW1lKSB7XG4gICAgICBhcnIucHVzaCgkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnIucHVzaCh2YWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvcHlcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIGNvcHkgdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBfY29weSgpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gICAgYXJyRGIuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmIChpc0NsYXNzTmFtZSkge1xuICAgICAgICBhcnJbaV0gPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJbaV0gPSB2YWw7XG4gICAgICB9XG4gICAgICBpID0gaSArIDE7XG4gICAgfSk7XG5cbiAgICBmb3IgKGogPSBpOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgIGRlbGV0ZSBhcnJbal07XG4gICAgfVxuICAgIGFyci5sZW5ndGggPSBhcnJEYi5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfYWRkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWwgdmFsdWUgdG8gYWRkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb24gdHlwZSBvZiBhY3Rpb25cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkZWxldGVDb3VudFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gYWRkIGFuIGl0ZW0gaW4gdGhlIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiBfYWRkKHZhbCwgYWN0aW9uLCBzdGFydCwgZGVsZXRlQ291bnQpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGRlbCA9IFtdO1xuXG4gICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICBpZiAoaXNDbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlKSkge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwdXNoJzpcbiAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgYXJyRGIudW5zaGlmdCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdzcGxpY2UnOlxuICAgICAgICAgICAgICBkZWwgPSBhcnJEYi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB2YWwpO1xuXG4gICAgICAgICAgICAgIGxlbmd0aCA9IGRlbC5sZW5ndGg7XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFtzdG9yZVtkZWxbaV1dLCAncmVtb3ZlJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgZGF0YTogW3ZhbCwgJ2FkZCddXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwuaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLmlkKCksIHR5cGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLCB0eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWwgJiYgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWwsIHR5cGUpKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3B1c2gnOlxuICAgICAgICAgICAgICBhcnJEYi5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgYXJyRGIudW5zaGlmdCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGFyckRiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIGRhdGE6IFt2YWwsICdhZGQnXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyckRiLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW1vdmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgYXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIF9yZW1vdmUoYWN0aW9uKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgdmFsID0gbnVsbDtcblxuICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgaWYgKGFyckRiLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3BvcCc6XG4gICAgICAgICAgICB2YWwgPSBhcnJEYi5wb3AoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc2hpZnQnOlxuICAgICAgICAgICAgdmFsID0gYXJyRGIuc2hpZnQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIGZpZWxkOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNDbGFzc05hbWUpIHtcbiAgICAgICAgICByZXN1bHQgPSBzdG9yZVt2YWxdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIGRhdGE6IFtyZXN1bHQsICdyZW1vdmUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCBjbGFzc0lkLCBwcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcHVzaFxuICAgKiBAcGFyYW0ge19Db21wb25lbnR8T2JqZWN0fSB2YWxcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHB1c2ggbWV0aG9kXG4gICAqL1xuICBhcnIucHVzaCA9IGZ1bmN0aW9uIHB1c2godmFsKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9hZGQodmFsLCAncHVzaCcpO1xuXG4gICAgYXJyW2Fyci5sZW5ndGhdID0gdmFsO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBwb3BcbiAgICogQHJldHVybnMge19Db21wb25lbnR8T2JqZWN0fSB2YWx1ZVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgcG9wIG1ldGhvZFxuICAgKi9cbiAgYXJyLnBvcCA9IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3JlbW92ZSgncG9wJyk7XG4gICAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICBkZWxldGUgYXJyW2xlbmd0aF07XG4gICAgICBhcnIubGVuZ3RoID0gbGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNoaWZ0XG4gICAqIEByZXR1cm5zIHtfQ29tcG9uZW50fE9iamVjdH0gdmFsdWVcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNoaWZ0IG1ldGhvZFxuICAgKi9cbiAgYXJyLnNoaWZ0ID0gZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9yZW1vdmUoJ3NoaWZ0Jyk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdW5zaGlmdFxuICAgKiBAcGFyYW0ge19Db21wb25lbnR8T2JqZWN0fSB2YWxcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHVuc2hpZnQgbWV0aG9kXG4gICAqL1xuICBhcnIudW5zaGlmdCA9IGZ1bmN0aW9uIHVuc2hpZnQodmFsKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9hZGQodmFsLCAndW5zaGlmdCcpO1xuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHB1c2hcbiAgICogQHBhcmFtIHtfQ29tcG9uZW50fE9iamVjdH0gYXJyXG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBjb25jYXQgbWV0aG9kXG4gICAqL1xuICBhcnIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KGFycikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2FkZChhcnJbaV0sICdwdXNoJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZi5hcnIgPSBhcnJEYjtcblxuICAgIHJlc3VsdCA9IG5ldyBfQXJyYXkoY29uZik7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc29ydFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdCB0aGUgc29ydCBmdW5jdGlvblxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgY3VycmVudCBfQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIE92ZXJyaWRlIHNvcnQgbWV0aG9kXG4gICAqL1xuICBhcnIuc29ydCA9IGZ1bmN0aW9uIHNvcnQoZnVuY3QpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgIGFyckRiLnNvcnQoZnVuY3QpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICRoZWxwZXJcbiAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBhcnI7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmV2ZXJzZVxuICAgKiBAcmV0dXJucyB7X0FycmF5fSB0aGUgcmV2ZXJzZWQgX0FycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSByZXZlcnNlIG1ldGhvZFxuICAgKi9cbiAgYXJyLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIGFyckRiLnJldmVyc2UoKTtcblxuICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAkaGVscGVyXG4gICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICB2YWx1ZTogYXJyRGJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc3BsaWNlXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSBzcGxpY2VkIF9BcnJheVxuICAgKiBAZGVzY3JpcHRpb24gT3ZlcnJpZGUgc3BsaWNlIG1ldGhvZFxuICAgKi9cbiAgYXJyLnNwbGljZSA9IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHZhbCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGRhdGEgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBfYWRkKHZhbCwgJ3NwbGljZScsIHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGFyckRiLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAkaGVscGVyXG4gICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZmllbGQ6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBhcnJEYlxuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpc0NsYXNzTmFtZSkge1xuICAgICAgICAgIGRhdGEgPSBzdG9yZVtyZXN1bHRbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSByZXN1bHRbaV07XG4gICAgICAgIH1cblxuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICBkYXRhOiBbZGF0YSwgJ3JlbW92ZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9jb3B5KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNsaWNlXG4gICAqIEByZXR1cm5zIHtfQXJyYXl9IHRoZSBzbGljZWQgX0FycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzbGljZSBtZXRob2RcbiAgICovXG4gIGFyci5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgcmVzdWx0ID0gYXJyRGIuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgX2NvcHkoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuX0FycmF5LnByb3RvdHlwZSA9IFtdO1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIG5hbWVzIG9mIG1ldGhvZCBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgcGFyYW1zID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV0ucGFyYW1zO1xuICBpZiAocGFyYW1zKSB7XG4gICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBwcm9wZXJ0eSBvZiBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoaWQpIHtcbiAgdmFyIG1vZGVsID0gbnVsbDtcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciBwcm9wTmFtZXMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsW05BTUVdKTtcblxuICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChcbiAgICAgIHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBMSU5LX1RZUEUgfHxcbiAgICAgIHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBQUk9QRVJUWV9UWVBFIHx8XG4gICAgICBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gQ09MTEVDVElPTl9UWVBFXG4gICAgKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIG5hbWU6IHByb3BOYW1lc1tpXSxcbiAgICAgICAgdHlwZTogbW9kZWxbcHJvcE5hbWVzW2ldXS50eXBlLFxuICAgICAgICByZWFkT25seTogbW9kZWxbcHJvcE5hbWVzW2ldXS5yZWFkT25seVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldE1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBtZXRob2RzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYWxsIHRoZSBtZXRob2Qgb2YgYSBjbGFzc1xuICovXG5mdW5jdGlvbiBnZXRNZXRob2RzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgcHJvcE5hbWVzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpO1xuICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IE1FVEhPRF9UWVBFKSB7XG4gICAgICByZXN1bHQucHVzaChwcm9wTmFtZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTdHJ1Y3R1cmVQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIHByb3BlcnR5IHNjaGVtYSBvZiB0aGUgc3RydWN0dXJlIHR5cGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBzY2hlbWEgb2YgYSBzdHJ1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RydWN0dXJlUHJvcGVydGllcyhwcm9wZXJ0eU5hbWUsIG1vZGVsKSB7XG4gIHZhciBtb2RlbERlZiA9IG51bGw7XG4gIHZhciB0eXBlID0gbnVsbDtcbiAgdmFyIHN0cnVjdHVyZSA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHByb3BOYW1lcyA9IFtdO1xuXG4gIG1vZGVsRGVmID0gJG1ldGFtb2RlbC5nZXRNb2RlbChtb2RlbCk7XG4gIHR5cGUgPSBtb2RlbERlZltwcm9wZXJ0eU5hbWVdLnR5cGU7XG4gIHN0cnVjdHVyZSA9ICRtZXRhbW9kZWwuZ2V0VHlwZSh0eXBlKTtcblxuICBpZiAoc3RydWN0dXJlLnNjaGVtYSkge1xuICAgIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHN0cnVjdHVyZS5zY2hlbWEpO1xuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0cnVjdHVyZS5zY2hlbWFbbmFtZV0ubmFtZSA9IG5hbWU7XG4gICAgICByZXN1bHQucHVzaChzdHJ1Y3R1cmUuc2NoZW1hW25hbWVdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm5zIHtBcnJheX0gYWxsIHRoZSBldmVudHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBhbGwgdGhlIGV2ZW50IG9mIGEgY2xhc3NcbiAqL1xuZnVuY3Rpb24gZ2V0RXZlbnRzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgcHJvcE5hbWVzID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpO1xuICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IEVWRU5UX1RZUEUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSB2YWx1ZSBvZiBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgdmFyIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciBsZW5ndGggPSBzdWJQYXRoLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJlc3VsdCA9IGRvYztcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgPSByZXN1bHRbc3ViUGF0aFtpXV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIHRvIHNldFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIHZhbHVlIG9mIGEgc3RydWN0dXJlXG4gKi9cbmZ1bmN0aW9uIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgdmFyIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciBsZW5ndGggPSBzdWJQYXRoLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJlc3VsdCA9IGRvYztcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0W3N1YlBhdGhbaV1dO1xuICB9XG4gIHJlc3VsdFtzdWJQYXRoW2ldXSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgbmV3IGNsYXNzIGZyb20gYSBjbGFzcyBkZWZpbml0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKGNsYXNzSWQpIHtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIHZhciBwcm94eSA9IHt9O1xuXG4gICAgaWYgKGNvbmZpZy5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnT2JqZWN0Jykge1xuICAgICAgJGxvZy5pbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzKGNvbmZpZywgY2xhc3NJZCk7XG4gICAgICBjb25maWcgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KFxuICAgICAgICBjb25maWcsXG4gICAgICAgICRtZXRhbW9kZWwuZ2V0TW9kZWwoY2xhc3NJZCksXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICApIHtcbiAgICAgICRsb2cuaW52YWxpZFBhcmFtZXRlcnMoY2xhc3NJZCk7XG4gICAgfVxuXG4gICAgJG1ldGFtb2RlbC5wcmVwYXJlT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXRNb2RlbChjbGFzc0lkKSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcuX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfVxuXG4gICAgc3RvcmVbY29uZmlnLl9pZF0gPSB0aGlzO1xuXG4gICAgLy8gaWRcbiAgICBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5faWQ7XG4gICAgfTtcbiAgICB0aGlzLmlkID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ19fcHJveHknLFxuICAgICAgJ3JldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBfX3Byb3h5LmNhbGwodGhpcykgfTsnXG4gICAgKShwcm94eSk7XG5cbiAgICAvLyBjcmVhdGUgbGluayB0byBkYlxuICAgICRkYi5zdG9yZVtjbGFzc0lkXVtjb25maWcuX2lkXSA9IGNvbmZpZztcblxuICAgICRkYi5jcmVhdGVMb2coJ2luc2VydCcsIGNsYXNzSWQsIGNvbmZpZy5faWQsICcnLCBjb25maWcpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgJGhlbHBlclxuICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgZG9jdW1lbnQ6IGNvbmZpZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgdGhpcy5pbml0KGNvbmZpZyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uICcgKyBjbGFzc0lkICsgJyAoY29uZmlnKSB7IF9fcHJveHkuY2FsbCh0aGlzLGNvbmZpZykgfTsnXG4gICkocHJveHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkSWRDbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGFuIGlkIG1ldGhvZCB0byBhIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gaXRzIGlkXG4gKi9cbmZ1bmN0aW9uIGFkZElkQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgcmV0dXJuIGNsYXNzSWQ7XG4gIH07XG4gIENsYXNzLmlkID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIGlkICgpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LlxuICogQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqXG4gKiBAZXhhbXBsZVxuICogbGF1cmUuYWdlKCk7IC8vIGdldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBsYXVyZS5hZ2UoMjIpOyAvLyBzZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICovXG5mdW5jdGlvbiBhZGRQcm9wZXJ0aWVzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXMobW9kZWwpO1xuXG4gIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgdmFyIHByb3h5ID0ge307XG4gICAgdmFyIHByb3BlcnR5TmFtZSA9ICcnO1xuICAgIHZhciBwcm9wZXJ0eVR5cGUgPSAnJztcbiAgICB2YXIgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgcHJvcGVydHlOYW1lID0gcHJvcC5uYW1lO1xuICAgIHByb3BlcnR5VHlwZSA9IHByb3AudHlwZTtcbiAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkQ29sbGVjdGlvbihjb2xsLCB0eXBlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsLCB0eXBlKSAmJlxuICAgICAgICAgICAgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20odmFsLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGUpICYmXG4gICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUodHlwZSkpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0UmVhbENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICBjb2xsLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIGlmICgkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHR5cGUpKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnOlxuICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbC5pZCAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXN1bHQucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkgfHwgcHJvcGVydHlUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICAvLyBpbiBjYXNlIG9mIGFycmF5LCByZXR1cm4gYSBzdWIgYXJyYXlcbiAgICAgIHByb3h5ID0gZnVuY3Rpb24gcHJveHkocG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBbXTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHZhciBydW50aW1lQXJyID0gbnVsbDtcbiAgICAgICAgdmFyIHZhbCA9IG51bGw7XG4gICAgICAgIHZhciByZWFsVmFsID0gbnVsbDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBydW50aW1lQXJyID0gbmV3IF9BcnJheSh7XG4gICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICByZWFkT25seTogcHJvcGVydHlSZWFkT25seSxcbiAgICAgICAgICAgICAgY2xhc3NJZDogY2xhc3NJZCxcbiAgICAgICAgICAgICAgdHlwZTogcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FueScgOiBwcm9wZXJ0eVR5cGVbMF0sXG4gICAgICAgICAgICAgIGFycjogJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBydW50aW1lQXJyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgLy8gd2UgcmVwbGFjZSB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgX2lzVmFsaWRDb2xsZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYW55JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgX2lkOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IF9nZXRSZWFsQ29sbGVjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhbnknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW3Bvc2l0aW9uLCAncmVzZXQnXVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gcmVhbFZhbDtcblxuICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdW3Bvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9ICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUodmFsKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWw7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVhbFZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShcbiAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhbnknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICAgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgdmFsdWUuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScgPyAnYXJyYXknIDogcHJvcGVydHlUeXBlWzBdXG4gICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlID09PSAnYXJyYXknID8gJ2FycmF5JyA6IHByb3BlcnR5VHlwZVswXVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1xuICAgICAgICAgICAgICAgIF9pZDogdGhpcy5pZCgpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9PT0gJ2FycmF5JyA/ICdhcnJheScgOiBwcm9wZXJ0eVR5cGVbMF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWx1ZS5pZCAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdW3Bvc2l0aW9uXSA9IHJlYWxWYWw7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb21wb25lbnRbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3ZhbHVlLCAnYWRkJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19wcm94eScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAnIChwb3NpdGlvbiwgdmFsdWUpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07J1xuICAgICAgKShwcm94eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3h5ID0gZnVuY3Rpb24gcHJveHkodmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc0NsYXNzTmFtZShwcm9wZXJ0eVR5cGUpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBleHBvcnRzLmdldChjb21wb25lbnRbcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdqc29uJzpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgX0FycmF5KHtcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgY2xhc3NJZDogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgICAgYXJyOiAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShwcm9wZXJ0eU5hbWUsIGNsYXNzSWQpOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoXG4gICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gY29tcG9uZW50W3Byb3BlcnR5TmFtZV07IC8vIFRPRE8gY2FzZSBvZiBvYmplY3RcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmRlc3Ryb3llZENvbXBvbmVudENhbGwocHJvcGVydHlOYW1lLCB0aGlzLmlkKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgX2lkOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNDbGFzc05hbWUocHJvcGVydHlUeXBlKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIF9CZWhhdmlvclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc0lkID09PSAnX0JlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3ZhbHVlXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICtcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgICAgICcgKHZhbHVlKSB7IHJldHVybiBfX3Byb3h5LmNhbGwodGhpcyx2YWx1ZSkgfTsnXG4gICAgICApKHByb3h5KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkU3RydWN0dXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXJlbnQgcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgcHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgdGhhdCBjb2ludGFpbnMgbWV0aG9kcyB0byBhY2Nlc3MgdGhlIHN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgc3RydWN0dXJlIHByb3BlcnRpZXMgdG8gYSBjb21wb25lbnQuXG4gKiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICovXG5mdW5jdGlvbiBhZGRTdHJ1Y3R1cmUocGF0aCwgbmFtZSwgbW9kZWwsIGlkKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0U3RydWN0dXJlUHJvcGVydGllcyhuYW1lLCBtb2RlbCk7XG4gIHZhciBzcnVjdHVyZSA9IHt9O1xuXG4gIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgdmFyIHByb3h5ID0ge307XG4gICAgdmFyIHByb3BlcnR5TmFtZSA9ICcnO1xuICAgIHZhciBwcm9wZXJ0eVR5cGUgPSAnJztcbiAgICB2YXIgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgcHJvcGVydHlOYW1lID0gcHJvcC5uYW1lO1xuICAgIHByb3BlcnR5VHlwZSA9IHByb3AudHlwZTtcbiAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIC8vIGluIGNhc2Ugb2YgYXJyYXksIHJldHVybiBhIHN1YiBhcnJheVxuICAgICAgcHJveHkgPSBmdW5jdGlvbiBwcm94eShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHJ1bnRpbWVBcnIgPSBudWxsO1xuICAgICAgICB2YXIgdmFsID0gbnVsbDtcbiAgICAgICAgdmFyIHJlYWxWYWwgPSBudWxsO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuICAgICAgICB2YXIgcGFyZW50UGF0aCA9ICcnO1xuICAgICAgICB2YXIgZnVsbFBhdGggPSAnJztcblxuICAgICAgICBmdW5jdGlvbiBfaXNWYWxpZENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHBhcmVudFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBmdWxsUGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBfQXJyYXkoe1xuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgIHJlYWRPbmx5OiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICBjbGFzc0lkOiBtb2RlbCxcbiAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgIGFycjogZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2UgdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgaWYgKF9pc1ZhbGlkQ29sbGVjdGlvbihwb3NpdGlvbiwgJ2FueScpKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtwb3NpdGlvbiwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsICdhbnknKSkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbbW9kZWxdLmZpbmQoe1xuICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgYXJyID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFycltwb3NpdGlvbl0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCBhcnIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhcnJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaWQsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbYXJyLCAnYWRkJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzcnVjdHVyZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19wcm94eScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAnIChwb3NpdGlvbiwgdmFsdWUpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07J1xuICAgICAgKShwcm94eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3h5ID0gZnVuY3Rpb24gcHJveHkodmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuICAgICAgICB2YXIgcGFyZW50UGF0aCA9ICcnO1xuICAgICAgICB2YXIgZnVsbFBhdGggPSAnJztcblxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHBhcmVudFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBmdWxsUGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjb21wb25lbnQgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHByb3BlcnR5VHlwZSk6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGV4cG9ydHMuZ2V0KFxuICAgICAgICAgICAgICAgICAgZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgIGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdqc29uJzpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShwcm9wZXJ0eU5hbWUsIG1vZGVsKTpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gYWRkU3RydWN0dXJlKFxuICAgICAgICAgICAgICAgICAgcGFyZW50UGF0aCxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvcC5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmRlc3Ryb3llZENvbXBvbmVudENhbGwoZnVsbFBhdGgsIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgbW9kZWwsIGZ1bGxQYXRoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZSkpIHtcbiAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW21vZGVsXS5maW5kKHtcbiAgICAgICAgICAgICAgICBfaWQ6IGlkXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzQ2xhc3NOYW1lKHByb3BlcnR5VHlwZSk6XG4gICAgICAgICAgICAgICAgICAgIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgsIHZhbHVlLmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgsIHZhbHVlLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNhc2Ugb2YgX0JlaGF2aW9yXG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsID09PSAnX0JlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW3ZhbHVlXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzcnVjdHVyZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19wcm94eScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgICAnICh2YWx1ZSkgeyByZXR1cm4gX19wcm94eS5jYWxsKHRoaXMsdmFsdWUpIH07J1xuICAgICAgKShwcm94eSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3J1Y3R1cmU7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBtZXRob2RzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIC8gb3V0cHV0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICovXG5mdW5jdGlvbiBhZGRNZXRob2RzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgbWV0aG9kcyA9IGdldE1ldGhvZHMobW9kZWwpO1xuXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiBtZXRob2QobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICB2YXIgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsICcpO1xuICAgIHZhciBwYXJhbXNXaXRoQ29udGV4dCA9ICcnO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgIHN0YXRlOiBtZXRob2ROYW1lLFxuICAgICAgICBkYXRhOiBhcmd1bWVudHNcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB2YXIgcHJveHlXaXRoQ29udGV4dCA9IGZ1bmN0aW9uIHByb3h5KCkge1xuICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICB2YXIgZGF0YSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgIGRhdGEuc2hpZnQoKTtcblxuICAgICAgaWYgKGFyZ3VtZW50c1swXSkge1xuICAgICAgICByZXN1bHQgPSAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgIHN0YXRlOiBtZXRob2ROYW1lLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgY29udGV4dDogYXJndW1lbnRzWzBdXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duQ29udGV4dChjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgcGFyYW1zTmFtZS51bnNoaWZ0KCdjb250ZXh0Jyk7XG4gICAgICBwYXJhbXNXaXRoQ29udGV4dCA9IHBhcmFtc05hbWUuam9pbignLCAnKTtcblxuICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnX19wcm94eScsXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgICAgJyAoJyArXG4gICAgICAgICAgcGFyYW1zICtcbiAgICAgICAgICAnKSB7IHJldHVybiBfX3Byb3h5LmNhbGwodGhpcywnICtcbiAgICAgICAgICBwYXJhbXMgK1xuICAgICAgICAgICcpIH07J1xuICAgICAgKShwcm94eSk7XG4gICAgICBpZiAobWV0aG9kTmFtZSAhPT0gJ25hbWUnKSB7XG4gICAgICAgIENsYXNzW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgICAgICAnICgnICtcbiAgICAgICAgICAgIHBhcmFtc1dpdGhDb250ZXh0ICtcbiAgICAgICAgICAgICcpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzLCcgK1xuICAgICAgICAgICAgcGFyYW1zV2l0aENvbnRleHQgK1xuICAgICAgICAgICAgJykgfTsnXG4gICAgICAgICkocHJveHlXaXRoQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgKyBtZXRob2ROYW1lICsgJyAoKSB7IHJldHVybiBfX3Byb3h5LmNhbGwodGhpcykgfTsnXG4gICAgICApKHByb3h5KTtcbiAgICAgIGlmIChtZXRob2ROYW1lICE9PSAnbmFtZScpIHtcbiAgICAgICAgQ2xhc3NbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArXG4gICAgICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgICAgICcgKGNvbnRleHQpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzLCBjb250ZXh0KSB9OydcbiAgICAgICAgKShwcm94eVdpdGhDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkRXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBldmVudHMgdG8gYSBjb21wb25lbnQuXG4gKiBUaGUgY2FsbCB0byB0aGVzZSBtZXRob2RzIHdpbGwgaW52b2tlIHRoZSB3b3JrZmxvdyBpbiBvcmRlciB0byBjaGVjayB0aGF0IGlucG91dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnRzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gZXZlbnQobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKTtcbiAgICB2YXIgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsICcpO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICB2YXIgc3lzdGVtcyA9IFtdO1xuICAgICAgdmFyIHN5c3RlbUlkID0gJ2U4OWM2MTdiNmIxNWQyNCc7XG4gICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGxlbmd0aCA9IC0xO1xuICAgICAgdmFyIG1lc3NhZ2UgPSB7fTtcblxuICAgICAgaWYgKGNsYXNzSWQgPT09ICdfQ2hhbm5lbCcpIHtcbiAgICAgICAgc3lzdGVtcyA9ICRkYi5fU3lzdGVtLmZpbmQoe1xuICAgICAgICAgIG1hc3RlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgc3lzdGVtSWQgPSBzeXN0ZW1zWzBdLl9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UuZnJvbSA9IHN5c3RlbUlkO1xuICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkYXRhLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlLmRhdGEgPSBkYXRhO1xuICAgICAgICBtZXNzYWdlLmV2ZW50ID0gbWV0aG9kTmFtZTtcblxuICAgICAgICAkZGIuX01lc3NhZ2UuaW5zZXJ0KG1lc3NhZ2UpO1xuXG4gICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLmlkKCksXG4gICAgICAgICAgc3RhdGU6ICdzZW5kJyxcbiAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGV2ZW50OiBtZXNzYWdlLmV2ZW50LFxuICAgICAgICAgICAgICBmcm9tOiBtZXNzYWdlLmZyb20sXG4gICAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2UuZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgIHN0YXRlOiBtZXRob2ROYW1lLFxuICAgICAgICAgIGRhdGE6IGFyZ3VtZW50c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ19fcHJveHknLFxuICAgICAgICAncmV0dXJuIGZ1bmN0aW9uICcgK1xuICAgICAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgICAgICcgKCcgK1xuICAgICAgICAgIHBhcmFtcyArXG4gICAgICAgICAgJykgeyByZXR1cm4gX19wcm94eS5jYWxsKHRoaXMsJyArXG4gICAgICAgICAgcGFyYW1zICtcbiAgICAgICAgICAnKSB9OydcbiAgICAgICkocHJveHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdfX3Byb3h5JyxcbiAgICAgICAgJ3JldHVybiBmdW5jdGlvbiAnICsgbWV0aG9kTmFtZSArICcgKCkgeyByZXR1cm4gX19wcm94eS5jYWxsKHRoaXMpIH07J1xuICAgICAgKShwcm94eSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgb24gbWV0aG9kIHRvIGEgY29tcG9uZW50IHRvIGFkZCBiZWhhdmlvcnMgdG8gdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBhZGRPbihDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eShzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSAnJztcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XG5cbiAgICAvLyBjYXNlIG9mIGNvbnRleHRcbiAgICBpZiAoXG4gICAgICB1c2VDb3JlQVBJICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdCb29sZWFuJ1xuICAgICkge1xuICAgICAgY29udGV4dCA9IHVzZUNvcmVBUEk7XG4gICAgICB1c2VDb3JlQVBJID0gZmFsc2U7XG4gICAgICBpc0NvcmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29uJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzXG4gICAgICB9KVxuICAgICkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgJGRiLl9CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pZCgpLFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgfSkubGVuZ3RoID49IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrZmxvdy52YWxpZFBhcmFtTnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQoXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgdXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgaXNDb3JlLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LmJlaGF2aW9yKGJlaGF2aW9ySWQsIGN1cnJlbnRTdGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24oXG4gICAgICAgICAgICAgIHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFN0YXRlT24oY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVoYXZpb3JJZDtcbiAgfTtcbiAgQ2xhc3MucHJvdG90eXBlLm9uID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzLCBzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIH07J1xuICApKHByb3h5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eShzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSAnJztcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XG5cbiAgICAvLyBjYXNlIG9mIGNvbnRleHRcbiAgICBpZiAoXG4gICAgICB1c2VDb3JlQVBJICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yICYmXG4gICAgICB1c2VDb3JlQVBJLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdCb29sZWFuJ1xuICAgICkge1xuICAgICAgY29udGV4dCA9IHVzZUNvcmVBUEk7XG4gICAgICB1c2VDb3JlQVBJID0gZmFsc2U7XG4gICAgICBpc0NvcmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIG1ldGhvZE5hbWU6ICdvbicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50c1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzRXZlbnQoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0xpbmsoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICRkYi5fQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICAgIH0pLmxlbmd0aCA+PSAxXG4gICAgICAgICkge1xuICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgkd29ya2Zsb3cudmFsaWRQYXJhbU51bWJlcnMoY2xhc3NJZCwgc3RhdGUsIGFjdGlvbikpIHtcbiAgICAgICAgICAgIGJlaGF2aW9ySWQgPSAkYmVoYXZpb3IuYWRkKFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgICAgIHVzZUNvcmVBUEksXG4gICAgICAgICAgICAgIGlzQ29yZSxcbiAgICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldCh0aGlzLmlkKCkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICR3b3JrZmxvdy5iZWhhdmlvcihiZWhhdmlvcklkLCBjdXJyZW50U3RhdGUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKFxuICAgICAgICAgICAgICB0aGlzLmlkKCksXG4gICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gIH07XG4gIENsYXNzLm9uID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzLCBzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBpc0NvcmUpIH07J1xuICApKHByb3h5KTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGFkZE9mZkNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG9mZiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gcmVtb3ZlIGJlaGF2aW9ycyBmcm9tIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eShzdGF0ZSwgYmVoYXZpb3JJZCkge1xuICAgIGlmIChcbiAgICAgICR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbWV0aG9kTmFtZTogJ29mZicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50c1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgYmVoYXZpb3JJZDogYmVoYXZpb3JJZCxcbiAgICAgICAgICBjb21wb25lbnRJZDogY2xhc3NJZCxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9mZihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBDbGFzcy5vZmYgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gb2ZmIChzdGF0ZSwgYmVoYXZpb3JJZCkgeyByZXR1cm4gX19wcm94eS5jYWxsKHRoaXMsIHN0YXRlLCBiZWhhdmlvcklkKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGREZXN0cm95Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYWRkRGVzdHJveUNsYXNzKENsYXNzKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge1xuICAgIHZhciBpZCA9IHRoaXMuaWQoKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuXG4gICAgLy8gaWYgbm90IHZpcnR1YWwgY29tcG9uZW50XG4gICAgaWYgKCRkYltpZF0pIHtcbiAgICAgIHJlc3VsdCA9ICRkYltpZF0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIHN0b3JlW2lkXTtcblxuICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgIGNvbXBvbmVudElkOiBpZFxuICAgIH0pO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICBjb21wb25lbnRJZDogcmVzdWx0W2ldXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgY29tcG9uZW50OiBpZCxcbiAgICAgIHN0YXRlOiAnZGVzdHJveSdcbiAgICB9KTtcbiAgfTtcbiAgQ2xhc3MuZGVzdHJveSA9IG5ldyBGdW5jdGlvbihcbiAgICAnX19wcm94eScsXG4gICAgJ3JldHVybiBmdW5jdGlvbiBkZXN0cm95ICgpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRSZXF1aXJlQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBSZXF1aXJlIGEgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGFkZFJlcXVpcmVDbGFzcyhDbGFzcykge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eShpZCkge1xuICAgIHJldHVybiBleHBvcnRzLmdldChpZCk7XG4gIH07XG4gIENsYXNzLnJlcXVpcmUgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gcmVxdWlyZSAoaWQpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzLCBpZCkgfTsnXG4gICkocHJveHkpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgYWRkSW5pdENsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW5pdCBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZEluaXRDbGFzcyhDbGFzcykge1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiBwcm94eSgpIHt9O1xuICBDbGFzcy5pbml0ID0gbmV3IEZ1bmN0aW9uKFxuICAgICdfX3Byb3h5JyxcbiAgICAncmV0dXJuIGZ1bmN0aW9uIGluaXQgKGNvbmYpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzLCBjb25mKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBhZGRDbGFzc0luZm9DbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEFkZCB0aGUgQ2xhc3NJbmZvIG1ldGhvZCBvbiBhIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzSW5mb0NsYXNzKENsYXNzKSB7XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge1xuICAgIHJldHVybiBleHBvcnRzLmdldCh0aGlzLmlkKCkgKyAnSW5mbycpO1xuICB9O1xuICBDbGFzcy5jbGFzc0luZm8gPSBuZXcgRnVuY3Rpb24oXG4gICAgJ19fcHJveHknLFxuICAgICdyZXR1cm4gZnVuY3Rpb24gY2xhc3NJbmZvICgpIHsgcmV0dXJuIF9fcHJveHkuY2FsbCh0aGlzKSB9OydcbiAgKShwcm94eSk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBmYWN0b3J5XG4gKiBAcGFyYW0ge0pTT059IGNvbmZpZyBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtDb21wb25lbnR9IHRoZSBjcmVhdGVkIGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvblxuICovXG5mdW5jdGlvbiBmYWN0b3J5KGNvbmZpZykge1xuICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgdmFyIENsYXNzID0ge307XG4gIHZhciBjbGFzc0lkID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBjb25maWcubW9kZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY2xhc3NJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzSWQgPSBjb25maWcubW9kZWw7XG4gIH1cblxuICBDbGFzcyA9IGNyZWF0ZUNsYXNzKGNsYXNzSWQpO1xuXG4gIHN0b3JlW2NsYXNzSWRdID0gQ2xhc3M7XG5cbiAgYWRkSWRDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG5cbiAgYWRkUHJvcGVydGllcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkRXZlbnRzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuXG4gIC8vIGFkZCBkZWZhdWx0IHByb3BlcnRpZXMvbWV0aG9kcyBvbmx5IGlmIHRoZSBjb21wb25lbnRcbiAgLy8gaW5oZXJpdCBmcm9tIF9Db21wb25lbnRcbiAgaWYgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oY2xhc3NJZCwgJ19Db21wb25lbnQnKSkge1xuICAgIGFkZE9uKENsYXNzLCBjbGFzc0lkKTtcblxuICAgIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRSZXF1aXJlQ2xhc3MoQ2xhc3MpO1xuICAgIGFkZEluaXRDbGFzcyhDbGFzcyk7XG4gICAgYWRkRGVzdHJveUNsYXNzKENsYXNzKTtcbiAgICBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcyk7XG4gIH1cblxuICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIDxicj5cbiAqIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWUgPGJyPlxuICogQHJldHVybnMge0NvbXBvbmVudH1cbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvblxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShjb25maWcpIHtcbiAgcmV0dXJuIGZhY3RvcnkoY29uZmlnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKiBAZGVzY3JpcHRpb24gRGVzdHJveSBhIGNvbXBvbmVudCBmcm9tIGl0cyBpZFxuICovXG5leHBvcnRzLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGlkKSB7XG4gIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF07XG4gIHZhciBjbGFzc0lkID0gJyc7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICRkYltjbGFzc0lkXS5yZW1vdmUoe1xuICAgICAgX2lkOiBpZFxuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xuICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgY29tcG9uZW50SWQ6IGlkXG4gICAgfSk7XG5cbiAgICAvLyBjYXNlIG9mIEJlaGF2aW9yXG4gICAgaWYgKGNsYXNzSWQgPT09ICdfQmVoYXZpb3InKSB7XG4gICAgICAkYmVoYXZpb3IucmVtb3ZlRnJvbU1lbW9yeShpZCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBjb21wb25lbnQgd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IGZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgZGVsZXRlIHN0b3JlW2lkXTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjbGVhclxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBkYlxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGhlbHBlclxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEByZXF1aXJlcyB3b3JrZmxvd1xuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UuXG4gKiBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSBpcyBhIG1pY3JvIE5vU1FMIERhdGFiYXNlIHRoYXQgY29udGFpbnM6XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kXG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuXG4gKlxuICogU3lzdGVtIFJ1bnRpbWUgRGF0YWJhc2UgaXMgY2xvc2VseSBsaW5rZWQgdG8gU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBTeXN0ZW0gUnVudGltZSBjb21wb25lbnRzIGJlY2F1c2U6XG4gKiAtIGFsbCBvcGVyYXRpb25zIGRvbmUgYnkgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLFxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmRcbiAqIC0gcmVtb3ZlIG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGRlc3Ryb3kgYSBjb21wb25lbnQuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgY29sbGVjdGlvbnMgPSBbXTtcbnZhciBpbnRlcm5hbERCID0gW1xuICAnX1J1bnRpbWUnLFxuICAnX1NjaGVtYScsXG4gICdfTW9kZWwnLFxuICAnX0dlbmVyYXRlZE1vZGVsJyxcbiAgJ19CZWhhdmlvcicsXG4gICdfU3RhdGUnLFxuICAnX1R5cGUnLFxuICAnX01ldGFtb2RlbCcsXG4gICdfRGF0YWJhc2UnLFxuICAnX1N5c3RlbScsXG4gICdfQ2xhc3NJbmZvJyxcbiAgJ19NZXNzYWdlJyxcbiAgJ19DaGFubmVsJyxcbiAgJ19Mb2dnZXInLFxuICAnX0xvZydcbl07XG52YXIgY29yZURiID0gW1xuICAnX0xvZycsXG4gICdfU2NoZW1hJyxcbiAgJ19Mb2dnZXInLFxuICAnX01vZGVsJyxcbiAgJ19HZW5lcmF0ZWRNb2RlbCcsXG4gICdfU3RhdGUnLFxuICAnX1R5cGUnXG5dO1xudmFyIGxvZ09yZGVyID0gMDtcblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBpbmNMb2dPcmRlclxuICogQGRlc2NyaXB0aW9uIEluY3JlbWVudCBMb2dcbiAqL1xuZnVuY3Rpb24gaW5jTG9nT3JkZXIoKSB7XG4gIHJldHVybiBsb2dPcmRlcisrO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybnMge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gRHVtcCB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgdmFyIGRiRHVtcCA9IHt9O1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGJlaGF2aW9ySWQgPSAnJztcbiAgdmFyIHR5cGVJZCA9ICcnO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgY29sbGVjdGlvbiA9IG51bGw7XG4gIHZhciBzY2hlbWFJZCA9ICcnO1xuICB2YXIgbW9kZWxJZCA9ICcnO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaWQgPSAnJztcblxuICAvLyBzY2hlbWFzXG4gIGRiRHVtcC5zY2hlbWFzID0ge307XG4gIGlmIChleHBvcnRzLl9TY2hlbWEuY291bnQoKSkge1xuICAgIGZvciAoc2NoZW1hSWQgaW4gZXhwb3J0cy5zdG9yZS5fU2NoZW1hKSB7XG4gICAgICBpZiAoIWV4cG9ydHMuc3RvcmUuX1NjaGVtYVtzY2hlbWFJZF0uX2NvcmUpIHtcbiAgICAgICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9TY2hlbWFbc2NoZW1hSWRdKSk7XG4gICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBtb2RlbHNcbiAgZGJEdW1wLm1vZGVscyA9IHt9O1xuICBpZiAoZXhwb3J0cy5fTW9kZWwuY291bnQoKSkge1xuICAgIGZvciAobW9kZWxJZCBpbiBleHBvcnRzLnN0b3JlLl9Nb2RlbCkge1xuICAgICAgaWYgKCFleHBvcnRzLnN0b3JlLl9Nb2RlbFttb2RlbElkXS5fY29yZSkge1xuICAgICAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhwb3J0cy5zdG9yZS5fTW9kZWxbbW9kZWxJZF0pKTtcbiAgICAgICAgZGJEdW1wLm1vZGVsc1ttb2RlbElkXSA9IG1vZGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGVzXG4gIGRiRHVtcC50eXBlcyA9IHt9O1xuICBpZiAoZXhwb3J0cy5fVHlwZS5jb3VudCgpKSB7XG4gICAgZm9yICh0eXBlSWQgaW4gZXhwb3J0cy5zdG9yZS5fVHlwZSkge1xuICAgICAgaWYgKCFleHBvcnRzLnN0b3JlLl9UeXBlW3R5cGVJZF0uY29yZSkge1xuICAgICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9UeXBlW3R5cGVJZF0pKTtcbiAgICAgICAgZGJEdW1wLnR5cGVzW3R5cGUubmFtZV0gPSB0eXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGJlaGF2aW9yc1xuICBkYkR1bXAuYmVoYXZpb3JzID0ge307XG4gIGZvciAoYmVoYXZpb3JJZCBpbiBleHBvcnRzLnN0b3JlLl9CZWhhdmlvcikge1xuICAgIGlmICghZXhwb3J0cy5zdG9yZS5fQmVoYXZpb3JbYmVoYXZpb3JJZF0uY29yZSkge1xuICAgICAgYmVoYXZpb3IgPSBKU09OLnBhcnNlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeShleHBvcnRzLnN0b3JlLl9CZWhhdmlvcltiZWhhdmlvcklkXSlcbiAgICAgICk7XG4gICAgICBkYkR1bXAuYmVoYXZpb3JzW2JlaGF2aW9ySWRdID0gYmVoYXZpb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcG9uZW50c1xuICBkYkR1bXAuY29tcG9uZW50cyA9IHt9O1xuICBsZW5ndGggPSBjb2xsZWN0aW9ucy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbnNbaV07XG4gICAgaWYgKGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmNvdW50KCkpIHtcbiAgICAgIGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cG9ydHMuc3RvcmVbY29sbGVjdGlvbk5hbWVdKSk7XG5cbiAgICAgIGZvciAoaWQgaW4gY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoY29sbGVjdGlvbltpZF0uX2NvcmUpIHtcbiAgICAgICAgICBkZWxldGUgY29sbGVjdGlvbltpZF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLmxlbmd0aCkge1xuICAgICAgICBkYkR1bXAuY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0gPSBjb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYkR1bXA7XG59XG5cbi8qKlxuICogQGNsYXNzIF9BcnJheVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgc29ydCBtZXRob2Qgb2YgQXJyYXkgQ2xhc3NcbiAqL1xuZnVuY3Rpb24gX0FycmF5KCkge1xuICB2YXIgYXJyID0gW107XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc29ydFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gcGFyYW0gdGhlIHNvcnQgZnVuY3Rpb24gb3IgdGhlIHNvcnQgcXVlcnlcbiAgICogQHJldHVybnMge0FycmF5fSB0aGUgc29ydGVkIGFycmF5XG4gICAqIEBkZXNjcmlwdGlvbiBPdmVycmlkZSBzb3J0IG1ldGhvZFxuICAgKi9cbiAgYXJyLnNvcnQgPSBmdW5jdGlvbiBzb3J0KHBhcmFtKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgdmFyIGZpZWxkID0gJyc7XG4gICAgdmFyIGFyckNvcHkgPSBbXTtcblxuICAgIC8vIGNvcHlcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgIGFyckNvcHkucHVzaCh2YWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIGFyckNvcHkuc29ydChwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkID0gT2JqZWN0LmtleXMocGFyYW0pWzBdO1xuICAgICAgYXJyQ29weS5zb3J0KGZ1bmN0aW9uKGRvY0EsIGRvY0IpIHtcbiAgICAgICAgaWYgKGRvY0FbZmllbGRdIDwgZG9jQltmaWVsZF0pIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1bZmllbGRdID09PSAxID8gLTEgOiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2NBW2ZpZWxkXSA+IGRvY0JbZmllbGRdKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmFtW2ZpZWxkXSA9PT0gMSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJDb3B5O1xuICB9O1xuXG4gIHJldHVybiBhcnI7XG59XG5cbl9BcnJheS5wcm90b3R5cGUgPSBbXTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRXaXRoU2VsZWN0b3JzXG4gKiBAcGFyYW0ge09iamVjdH0gZmllbGQgZmllbGQgb24gd2hpY2ggbWFkZSB0aGUgc2VhcmNoXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgcXVlcnkgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnQgZG9jdW1lbnQgb2JqZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgIHVzZWQgZm9yIHRoZSBzZWFyY2ggaXMgdmFsaWQgd2l0aCB0aGUgZG9jdW1lbnRcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiB0aGUgcXVlcnkgdXNlZCBmb3IgdGhlIHNlYXJjaCBpcyB2YWxpZCB3aXRoIHRoZSBkb2N1bWVudFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkV2l0aFNlbGVjdG9ycyhmaWVsZCwgcXVlcnksIGRvY3VtZW50KSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgc2VsZWN0b3IgPSAnJztcblxuICBzZWFyY2g6IGZvciAoc2VsZWN0b3IgaW4gcXVlcnkpIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZXEnOlxuICAgICAgICBpZiAocXVlcnlbc2VsZWN0b3JdIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXS50b1N0cmluZygpLm1hdGNoKHF1ZXJ5W3NlbGVjdG9yXSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdICE9PSBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWsgc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZ3QnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdIDw9IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckZ3RlJzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA8IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbHQnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdID49IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbHRlJzpcbiAgICAgICAgaWYgKGRvY3VtZW50W2ZpZWxkXSA+IHF1ZXJ5W3NlbGVjdG9yXSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbmUnOlxuICAgICAgICBpZiAoZG9jdW1lbnRbZmllbGRdID09PSBxdWVyeVtzZWxlY3Rvcl0pIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNlbGVjdG9yID09PSAnJGluJzpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocXVlcnlbc2VsZWN0b3JdKSAmJlxuICAgICAgICAgIHF1ZXJ5W3NlbGVjdG9yXS5pbmRleE9mKGRvY3VtZW50W2ZpZWxkXSkgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2VsZWN0b3IgPT09ICckbmluJzpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocXVlcnlbc2VsZWN0b3JdKSAmJlxuICAgICAgICAgIHF1ZXJ5W3NlbGVjdG9yXS5pbmRleE9mKGRvY3VtZW50W2ZpZWxkXSkgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFxuICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5IHF1ZXJ5IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IGRvY3VtZW50IG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHF1ZXJ5IG9mIHNlYXJjaCBpcyB2YWxpZCB3aXRoIHRoZSBkb2N1bWVudFxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBUZXN0IGlmIHRoZSBxdWVyeSBvZiBzZWFyY2ggaXMgdmFsaWQgd2l0aCB0aGUgZG9jdW1lbnRcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZChxdWVyeSwgZG9jdW1lbnQpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBmaW5kSW5BcnJheSA9IGZhbHNlO1xuICB2YXIgZmllbGQgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcblxuICBzZWFyY2g6IGZvciAoZmllbGQgaW4gcXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50W2ZpZWxkXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAvLyByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgICAgY2FzZSBxdWVyeVtmaWVsZF0gaW5zdGFuY2VvZiBSZWdFeHA6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9jdW1lbnRbZmllbGRdKSAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBkb2N1bWVudFtmaWVsZF0ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF1baV0udG9TdHJpbmcoKS5tYXRjaChxdWVyeVtmaWVsZF0pICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmluZEluQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrIHNlYXJjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gZmluZEluQXJyYXk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0udG9TdHJpbmcoKS5tYXRjaChxdWVyeVtmaWVsZF0pID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIHF1ZXJ5IHNlbGVjdG9yc1xuICAgICAgICBjYXNlIHF1ZXJ5W2ZpZWxkXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pOlxuICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRXaXRoU2VsZWN0b3JzKGZpZWxkLCBxdWVyeVtmaWVsZF0sIGRvY3VtZW50KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBtdWx0aXBsZSBxdWVyeVxuICAgICAgICBjYXNlIEFycmF5LmlzQXJyYXkoZG9jdW1lbnRbZmllbGRdKSAmJiAhQXJyYXkuaXNBcnJheShxdWVyeVtmaWVsZF0pOlxuICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0uaW5kZXhPZihxdWVyeVtmaWVsZF0pID09PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIHNpbXBsZSBxdWVyeVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmIChkb2N1bWVudFtmaWVsZF0gIT09IHF1ZXJ5W2ZpZWxkXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhayBzZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaW1wU3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgU3lzdGVtIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBTeXN0ZW0gUnVudGltZSBzeXN0ZW1cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gSW1wb3J0IHN5c3RlbSBpbnRvIHRoZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBpbXBTeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY29sbGVjdGlvbk5hbWUgPSAnJztcbiAgdmFyIGNvbXBvbmVudElkID0gJyc7XG4gIHZhciB0eXBlTmFtZSA9ICcnO1xuICB2YXIgc2NoZW1hTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxOYW1lID0gJyc7XG4gIHZhciBiZWhhdmlvcklkID0gJyc7XG4gIHZhciBzeXN0ZW1zID0gW107XG4gIHZhciBpZCA9IG51bGw7XG5cbiAgaWYgKGltcG9ydGVkU3lzdGVtKSB7XG4gICAgLy8gcmVtb3ZlIGRlcHJlY2F0ZWQgcHJvcGVydHlcbiAgICBkZWxldGUgaW1wb3J0ZWRTeXN0ZW0uc3Vic3lzdGVtO1xuXG4gICAgLy8gYWRkIHR5cGVzXG4gICAgZm9yICh0eXBlTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS50eXBlcykge1xuICAgICAgJG1ldGFtb2RlbC50eXBlKGltcG9ydGVkU3lzdGVtLnR5cGVzW3R5cGVOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHNjaGVtYXNcbiAgICBmb3IgKHNjaGVtYU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hcykge1xuICAgICAgJG1ldGFtb2RlbC5zY2hlbWEoaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hc1tzY2hlbWFOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIG1vZGVsc1xuICAgIGZvciAobW9kZWxOYW1lIGluIGltcG9ydGVkU3lzdGVtLm1vZGVscykge1xuICAgICAgJG1ldGFtb2RlbC5tb2RlbChpbXBvcnRlZFN5c3RlbS5tb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgfVxuXG4gICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgIC8vIGFkZCBiZWhhdmlvcnNcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICBleHBvcnRzLl9CZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoXG4gICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgaW5mbyBpZiBhbHJlYWR5IGEgbWFzdGVyIHN5c3RlbVxuICAgIHN5c3RlbXMgPSBleHBvcnRzLl9TeXN0ZW0uZmluZCh7XG4gICAgICBtYXN0ZXI6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgIGlmIChzeXN0ZW1zWzBdLl9pZCA9PT0gaW1wb3J0ZWRTeXN0ZW0uX2lkKSB7XG4gICAgICAgIGltcG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyKSB7XG4gICAgICAgICAgc3lzdGVtc1swXS5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluc2VydCB0aGUgc3lzdGVtIGluIERCXG4gICAgZXhwb3J0cy5fU3lzdGVtLmluc2VydChpbXBvcnRlZFN5c3RlbSk7XG5cbiAgICByZXN1bHQgPSBpbXBvcnRlZFN5c3RlbS5faWQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZXhwU3lzdGVtXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIHN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzeXN0ZW0gZnJvbSB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZXhwU3lzdGVtKCkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuICB2YXIgYmVoYXZpb3JJZCA9ICcnO1xuICB2YXIgc3lzdGVtcyA9IFtdO1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgZGJEdW1wID0gbnVsbDtcbiAgdmFyIG1hc3RlcnN5c3RlbSA9IG51bGw7XG4gIHZhciBiZWhhdmlvciA9IG51bGw7XG4gIHZhciBleHBvcnRlZFN5c3RlbSA9IHt9O1xuXG4gIC8vIGdldCBpZCBvZiB0aGUgbWFzdGVyIHN5c3RlbVxuICBzeXN0ZW1zID0gZXhwb3J0cy5fU3lzdGVtLmZpbmQoe1xuICAgIG1hc3RlcjogdHJ1ZVxuICB9KTtcblxuICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICBtYXN0ZXJzeXN0ZW0gPSBzeXN0ZW1zWzBdO1xuICAgIGlkID0gbWFzdGVyc3lzdGVtLl9pZDtcblxuICAgIC8vIHByb3BcbiAgICBleHBvcnRlZFN5c3RlbS5faWQgPSBpZDtcbiAgICBleHBvcnRlZFN5c3RlbS5uYW1lID0gbWFzdGVyc3lzdGVtLm5hbWU7XG4gICAgZXhwb3J0ZWRTeXN0ZW0uZGVzY3JpcHRpb24gPSBtYXN0ZXJzeXN0ZW0uZGVzY3JpcHRpb247XG4gICAgZXhwb3J0ZWRTeXN0ZW0udmVyc2lvbiA9IG1hc3RlcnN5c3RlbS52ZXJzaW9uO1xuICAgIGV4cG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG5cbiAgICAvLyBkdW1wXG4gICAgZGJEdW1wID0gZHVtcCgpO1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gZGJEdW1wKSB7XG4gICAgICBpZiAoZGJEdW1wLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICBleHBvcnRlZFN5c3RlbVtjb2xsZWN0aW9uTmFtZV0gPSBkYkR1bXBbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGV4cG9ydGVkU3lzdGVtKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAne30nO1xuICAgICRsb2cubWFzdGVyU3lzdGVtTm90Rm91bmQoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBleHBvcnRTdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgc3ViLXN5c3RlbVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzdWItc3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGV4cFN1YnN5c3RlbShwYXJhbXMpIHtcbiAgdmFyIHN5c3RlbSA9IHt9O1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBkZWZhdWx0TmFtZSA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgc2NoZW1hID0gbnVsbDtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgbW9kZWwgPSBudWxsO1xuICB2YXIgYmVoYXZpb3IgPSBudWxsO1xuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIC8vIGRlZmF1bHQgdmFsdWVzXG4gIHJlc3VsdCA9IGV4cG9ydHMuX1N5c3RlbS5maW5kKHtcbiAgICBtYXN0ZXI6IHRydWVcbiAgfSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgZGVmYXVsdE5hbWUgPSByZXN1bHRbMF0ubmFtZTtcbiAgfVxuXG4gIHN5c3RlbS5uYW1lID0gcGFyYW1zLm5hbWUgfHwgJ3N1Yl8nICsgZGVmYXVsdE5hbWU7XG4gIHN5c3RlbS52ZXJzaW9uID0gcGFyYW1zLnZlcnNpb24gfHwgJzAuMC4xJztcbiAgc3lzdGVtLmRlc2NyaXB0aW9uID0gcGFyYW1zLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gIC8vIHNjaGVtYXNcbiAgc3lzdGVtLnNjaGVtYXMgPSB7fTtcbiAgaWYgKHBhcmFtcy5zY2hlbWFzKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5fU2NoZW1hLmZpbmQocGFyYW1zLnNjaGVtYSk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2NoZW1hID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgc3lzdGVtLnNjaGVtYXNbc2NoZW1hLl9pZF0gPSBzY2hlbWE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZWxzXG4gIHN5c3RlbS5tb2RlbHMgPSB7fTtcbiAgaWYgKHBhcmFtcy5tb2RlbHMpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLl9Nb2RlbC5maW5kKHBhcmFtcy5tb2RlbHMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG1vZGVsID0gcmVzdWx0W2ldO1xuICAgICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgICBzeXN0ZW0ubW9kZWxzW21vZGVsLl9pZF0gPSBtb2RlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0eXBlc1xuICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgaWYgKHBhcmFtcy50eXBlcykge1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuX1R5cGUuZmluZChwYXJhbXMudHlwZXMpO1xuXG4gICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHR5cGUgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIXR5cGUuX2NvcmUpIHtcbiAgICAgICAgc3lzdGVtLnR5cGVzW3R5cGUuX2lkXSA9IHR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYmVoYXZpb3JzXG4gIHN5c3RlbS5iZWhhdmlvcnMgPSB7fTtcbiAgaWYgKHBhcmFtcy5iZWhhdmlvcnMpIHtcbiAgICBiZWhhdmlvciA9IGV4cG9ydHMuX0JlaGF2aW9yLmZpbmQocGFyYW1zLmJlaGF2aW9ycyk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYmVoYXZpb3IgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvci5faWRdID0gYmVoYXZpb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcG9uZW50c1xuICBzeXN0ZW0uY29tcG9uZW50cyA9IHt9O1xuICBpZiAocGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICBmb3IgKGNsYXNzTmFtZSBpbiBwYXJhbXMuY29tcG9uZW50cykge1xuICAgICAgaWYgKGV4cG9ydHNbY2xhc3NOYW1lXSkge1xuICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdID0ge307XG5cbiAgICAgICAgcmVzdWx0ID0gZXhwb3J0c1tjbGFzc05hbWVdLmZpbmQocGFyYW1zLmNvbXBvbmVudHNbY2xhc3NOYW1lXSk7XG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbXBvbmVudCA9IHJlc3VsdFtpXTtcbiAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdW2NvbXBvbmVudC5faWRdID0gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN5c3RlbSk7XG59XG5cbi8qIFB1YmxpYyBwcm9wZXJ0aWVzICovXG5cbi8qKlxuICogQHByb3BlcnR5IHtKU09OfSBzdG9yZVxuICogQGRlc2NyaXB0aW9uIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHN0b3JlIHRoYXQgbGlzdHMgYWxsIHRoZSBjb2xsZWN0aW9uc1xuICovXG5leHBvcnRzLnN0b3JlID0ge307XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQGNsYXNzIERhdGFiYXNlQ29sbGVjdGlvblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBuZXcgY29sbGVjdGlvblxuICogQEBkZXNjcmlwdGlvbiBBIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRzIG1hbmFnZWQgYnkgU3lzdGVtIFJ1bnRpbWUuXG4gKiBJbnRlcm5hbCBjb2xsZWN0aW9ucyBtYW5hZ2UgY29yZSBvYmplY3RzIG9mIFN5c3RlbSBSdW50aW1lIChzY2hlbWEsIHR5cGUsIC4uLikuXG4gKiBQdWJsaWMgY29sbGVjdGlvbnMgbWFuYWdlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuXG4gKi9cbnZhciBEYXRhYmFzZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBEYXRhYmFzZUNvbGxlY3Rpb24obmFtZSkge1xuICBpZiAoJG1ldGFtb2RlbC5nZXRTY2hlbWEobmFtZSkgfHwgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgIGV4cG9ydHMuc3RvcmVbbmFtZV0gPSB7fTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGlmIChpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICBjb2xsZWN0aW9ucy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGZpbmRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeVxuICogQHJldHVybnMge0FycmF5fSBBcnJheSBvZiBkb2N1bWVudHMgdGhhdCBtYXAgdGhlIHF1ZXJ5XG4gKiBAZGVzY3JpcHRpb24gRmluZCBhIGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLlBlcnNvbi5maW5kKHsnbmFtZSc6ICdsYXVyZSd9KTtcbiAqICRkYi5QZXJzb24uZmluZCh7J25hbWUnOiAnbGF1cmUnLCAnYWdlJyA6IDI0fSk7XG4gKiAkZGIuUGVyc29uLmZpbmQoW3snbmFtZSc6ICdyZW5lJ30sIHsnbmFtZSc6ICdyb2JlcnQnfV0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kKHF1ZXJ5KSB7XG4gIHZhciByZXN1bHQgPSBuZXcgX0FycmF5KCk7XG4gIHZhciByZXN1bHRJZCA9IHt9O1xuICB2YXIgaWQgPSAnJztcbiAgdmFyIGRvY3VtZW50ID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICBxdWVyeS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiBtdWx0aVNlYXJjaChjcml0ZXJpYSkge1xuICAgICAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBkb2N1bWVudCA9IGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChjcml0ZXJpYSwgZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0SWRbaWRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICByZXN1bHRJZFtpZF0gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgIGRvY3VtZW50ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgaWYgKGlzVmFsaWQocXVlcnksIGRvY3VtZW50KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgZG9jdW1lbnQgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgcmVzdWx0LnB1c2goZG9jdW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW5zZXJ0XG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gZG9jdW1lbnQgYSBuZXcgb2JqZWN0IHRvIGFkZFxuICogQHJldHVybnMge0FycmF5fSBhcnJheSBvZiBpZCBjcmVhdGVkXG4gKiBAZGVzY3JpcHRpb24gSW5zZXJ0IGFuIG5ldyBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICogQmVmb3JlIGluc2VydGluZyB0aGUgZG9jdW1lbnQsIFN5c3RlbSBSdW50aW1lIGNoZWNrcyB0aGF0IHRoZSBkb2N1bWVudCBpcyBjb21wbGlhbnRcbiAqIHdpdGggaXRzIGNsYXNzIGRlZmluaXRpb24uXG4gKiBUaGVuLCBhZnRlciBpbnNlcnRpbmcgaXQsIHdlIGNyZWF0ZSB0aGUgY29tcG9uZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiAkZGIuUGVyc29uLmluc2VydCh7XG4gKiAgICAgICduYW1lJzogJ2JvYicsXG4gKiAgICAgICdmaXJzdE5hbWUnOiAnU2FpbnQtQ2xhcicsXG4gKiAgICAgICdhZ2UnOiA0M1xuICogfSk7XG4gKi9cbkRhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KGRvY3VtZW50KSB7XG4gIHZhciBkb2MgPSBbXTtcbiAgdmFyIENvbXBvbmVudCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShkb2N1bWVudCkpIHtcbiAgICBkb2MgPSBkb2N1bWVudDtcbiAgfSBlbHNlIHtcbiAgICBkb2MucHVzaChkb2N1bWVudCk7XG4gIH1cblxuICBkb2MuZm9yRWFjaChcbiAgICBmdW5jdGlvbiBtdWx0aUluc2VydChvYmopIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgdmFyIGNoYW5uZWxzID0gW107XG4gICAgICB2YXIgY2hhbm5lbCA9IG51bGw7XG4gICAgICB2YXIgc3lzdGVtcyA9IFtdO1xuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfU2NoZW1hJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfTG9nZ2VyJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfTW9kZWwnOlxuICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ19UeXBlJzpcbiAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdfR2VuZXJhdGVkTW9kZWwnOlxuICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNWYWxpZE9iamVjdChvYmosICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKSk6XG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmouX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2JqLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRtZXRhbW9kZWwucHJlcGFyZU9iamVjdChvYmosICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKSk7XG5cbiAgICAgICAgICBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1bb2JqLl9pZF0gPSBvYmo7XG5cbiAgICAgICAgICBDb21wb25lbnQgPSAkY29tcG9uZW50LmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQob2JqKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudC5pZCgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ2luc2VydCcsIHRoaXMubmFtZSwgb2JqLl9pZCwgJycsIG9iaik7XG5cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgICAucmVxdWlyZSgnZGInKVxuICAgICAgICAgICAgICAgIC5pbnNlcnQoe1xuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG9ialxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09ICdfTWVzc2FnZScpIHtcbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgIGNoYW5uZWxzID0gZXhwb3J0cy5fQ2hhbm5lbC5maW5kKHt9KTtcbiAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGNoYW5uZWxzLmxlbmd0aDtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKGNoYW5uZWxzW2ldLl9pZCk7XG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogY2hhbm5lbHNbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IG9iai5ldmVudCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IG9iai5kYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAkbG9nLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQob2JqLCB0aGlzLm5hbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKVxuICApO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnkgcXVlcnkgdG8gZmluZCB0aGUgZG9jdW1lbnRzIHRvIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZSB1cGRhdGUgdG8gbWFrZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIHtCb29sZWFufSB1cHNlcnQgdHJ1ZSBpZiB3ZSBjcmVhdGUgYSBkb2N1bWVudCB3aGVuIG5vIGRvY3VtZW50IGlzIGZvdW5kIGJ5IHRoZSBxdWVyeVxuICogQHJldHVybnMge051bWJlcn0gTnVtYmVyIG9mIGRvY3VtZW50cyB1cGRhdGVkXG4gKiBAZGVzY3JpcHRpb24gVXBkYXRlIGRvY3VtZW50cyBpbnRvIGEgY29sbGVjdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAkZGIuQ2Fycy51cGRhdGUoeydjb2RlJzogJ0FaRC03MSd9LCB7J3ByaWNlJzogJzEwMDAwJCd9KTtcbiAqICRkYi5DYXJzLnVwZGF0ZShbeydjb2RlJzogJ0FaRC03MSd9LCB7J2NvZGUnOiAnQVpELTY1J31dLCB7J3ByaWNlJzogJzEwMDAwJCd9KTtcbiAqICRkYi5DYXJzLnVwZGF0ZSh7J2NvZGUnOiAnQVpELTcxJ30sIHsncHJpY2UnOiAnMTAwMDAkJ30sIHsndXBzZXJ0JzogdHJ1ZX0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShxdWVyeSwgdXBkYXRlLCBvcHRpb25zKSB7XG4gIHZhciBkb2NzID0gdGhpcy5maW5kKHF1ZXJ5KTtcbiAgdmFyIHVwZGF0ZWQgPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSBkb2NzLmxlbmd0aDtcbiAgdmFyIGF0dHJpYnV0ZU5hbWUgPSAnJztcbiAgdmFyIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKTtcbiAgdmFyIHR5cGUgPSAnJztcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLnVwc2VydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zLnVwc2VydCA9IG9wdGlvbnMudXBzZXJ0IHx8IGZhbHNlO1xuICB9XG5cbiAgaWYgKHVwZGF0ZSkge1xuICAgIC8vIHVwc2VydCBjYXNlXG4gICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBvcHRpb25zLnVwc2VydCkge1xuICAgICAgaWYgKHF1ZXJ5Ll9pZCkge1xuICAgICAgICB1cGRhdGUuX2lkID0gcXVlcnkuX2lkO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnNlcnQodXBkYXRlKTtcbiAgICAgIHVwZGF0ZWQgPSB1cGRhdGVkICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGNhc2Ugb2YgdXBkYXRlIG9mIF9pZFxuICAgICAgaWYgKHR5cGVvZiB1cGRhdGUuX2lkICE9PSAndW5kZWZpbmVkJyAmJiB1cGRhdGUuX2lkICE9PSBkb2NzW2ldLl9pZCkge1xuICAgICAgICAkbG9nLnVwZGF0ZVV1aWQoXG4gICAgICAgICAgZG9jc1tpXS5faWQsXG4gICAgICAgICAgdXBkYXRlLl9pZCxcbiAgICAgICAgICB0eXBlb2YgJGNvbXBvbmVudC5nZXQodXBkYXRlLl9pZCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoYXR0cmlidXRlTmFtZSBpbiB1cGRhdGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2NzW2ldW2F0dHJpYnV0ZU5hbWUuc3BsaXQoJy4nKVswXV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5uYW1lICE9PSAnX1NjaGVtYScgJiZcbiAgICAgICAgICAgIHRoaXMubmFtZSAhPT0gJ19Nb2RlbCcgJiZcbiAgICAgICAgICAgIHRoaXMubmFtZSAhPT0gJ19HZW5lcmF0ZWRNb2RlbCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICAgIHR5cGUgPSAnJztcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICRtZXRhbW9kZWwuZ2V0TW9kZWxQYXRoVHlwZSh0aGlzLm5hbWUsIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBzY2hlbWFbYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuZ2V0TWV0YURlZigpW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICRtZXRhbW9kZWwuZ2V0TWV0YURlZigpW2F0dHJpYnV0ZU5hbWVdLnR5cGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdID0gdXBkYXRlW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB1cGRhdGVkICsgMTtcblxuICAgICAgICAgICAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKFxuICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScsXG4gICAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICB1cGRhdGVbYXR0cmlidXRlTmFtZV1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlKCdkYicpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbdXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCAncmVzZXQnXVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUoXG4gICAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICB1cGRhdGVbYXR0cmlidXRlTmFtZV0sXG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgIGRvY3NbaV0uX2lkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE8gbW9yZSBjaGVjayBpbiBjYXNlIG9mIHNjaGVtYSB1cGRhdGVcbiAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG5cbiAgICAgICAgICAgIGV4cG9ydHMuY3JlYXRlTG9nKFxuICAgICAgICAgICAgICAndXBkYXRlJyxcbiAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICRoZWxwZXJcbiAgICAgICAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGlkOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1cGRhdGVkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byByZW1vdmVcbiAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiBkb2N1bWVudHMgaWQgcmVtb3ZlZFxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGRvY3VtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gKiBXaGVuIGEgZG9jdW1lbnQgaXMgcmVtb3ZlZCwgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqICRkYi5DYXJzLnJlbW92ZSh7J2NvZGUnOiAnQVpELTcxJ30pO1xuICogJGRiLkNhcnMucmVtb3ZlKFt7J2NvZGUnOiAnQVpELTcxJ30sIHsnY29kZSc6ICdBWkQtNjUnfV0pO1xuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShxdWVyeSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIG9iamVjdCA9IHt9O1xuXG4gIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgcXVlcnkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gbXVsdGlSZW1vdmUoY3JpdGVyaWEpIHtcbiAgICAgICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgb2JqZWN0ID0gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgaWYgKGlzVmFsaWQoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlclxuICAgICAgICAgICAgICAgICAgLmdldFJ1bnRpbWUoKVxuICAgICAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgICAgIC5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGlkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICBvYmplY3QgPSBleHBvcnRzLnN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgZGVsZXRlIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICBleHBvcnRzLmNyZWF0ZUxvZygncmVtb3ZlJywgdGhpcy5uYW1lLCBpZCwgJycsICcnKTtcblxuICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAkaGVscGVyXG4gICAgICAgICAgICAgIC5nZXRSdW50aW1lKClcbiAgICAgICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAgICAgLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoaWQgaW4gZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICBkZWxldGUgZXhwb3J0cy5zdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgZXhwb3J0cy5jcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgIGlmIChjb3JlRGIuaW5kZXhPZih0aGlzLm5hbWUpID09PSAtMSkge1xuICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICRoZWxwZXJcbiAgICAgICAgICAuZ2V0UnVudGltZSgpXG4gICAgICAgICAgLnJlcXVpcmUoJ2RiJylcbiAgICAgICAgICAucmVtb3ZlKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY291bnRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBDb3VudCB0aGUgbnVtYmVyIG9mIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvblxuICovXG5EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gIHZhciByZXN1bHQgPSAwO1xuICB2YXIgb2JqZWN0SWQgPSAnJztcblxuICBmb3IgKG9iamVjdElkIGluIGV4cG9ydHMuc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgIHJlc3VsdCsrO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlTG9nXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uIENSVUQgYWN0aW9uIHRoYXQgaGFwcGVubmVkXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbiBjb2xsZWN0aW9uIG9mIHRoZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBmaWVsZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWUgb2YgdGhlIGZpZWxkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBMb2dcbiAqL1xuZXhwb3J0cy5jcmVhdGVMb2cgPSBmdW5jdGlvbiBjcmVhdGVMb2coYWN0aW9uLCBjb2xsZWN0aW9uLCBpZCwgZmllbGQsIHZhbHVlKSB7XG4gIHZhciBsb2dJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuXG4gIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uIHx8ICcnO1xuICBpZCA9IGlkIHx8ICcnO1xuICBmaWVsZCA9IGZpZWxkIHx8ICcnO1xuICB2YWx1ZSA9IHZhbHVlIHx8ICcnO1xuXG4gIC8vIGNsZWFuIGxvZyBldmVyeSAxMDAwIGxvZ3NcbiAgaWYgKE9iamVjdC5rZXlzKGV4cG9ydHMuc3RvcmUuX0xvZykubGVuZ3RoID4gMTAwMCkge1xuICAgIGV4cG9ydHMuc3RvcmUuX0xvZyA9IHt9O1xuICB9XG5cbiAgZXhwb3J0cy5zdG9yZS5fTG9nW2xvZ0lkXSA9IHtcbiAgICBfaWQ6IGxvZ0lkLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgaWQ6IGlkLFxuICAgIGZpZWxkOiBmaWVsZCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgb3JkZXI6IGluY0xvZ09yZGVyKClcbiAgfTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBEYXRhYmFzZUNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jb2xsZWN0aW9uID0gZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XG4gIGV4cG9ydHNbbmFtZV0gPSBuZXcgRGF0YWJhc2VDb2xsZWN0aW9uKG5hbWUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGltcG9ydFN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIFN5c3RlbSBSdW50aW1lIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBpZCBvZiB0aGUgaW1wb3J0ZWQgU3lzdGVtIFJ1bnRpbWUgc3lzdGVtXG4gKiBAZGVzY3JpcHRpb24gSW1wb3J0IGEgc3lzdGVtIGludG8gdGhlIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuaW1wb3J0U3lzdGVtID0gZnVuY3Rpb24gaW1wb3J0U3lzdGVtKGltcG9ydGVkU3lzdGVtKSB7XG4gIHJldHVybiBpbXBTeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGV4cG9ydFN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybnMge1N0cmluZ30gYSBzdHJpbmdpZmllZCBzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgYSBzeXN0ZW1cbiAqXG4gKiBAZXhhbXBsZVxuICogJGRiLmV4cG9ydFN5c3RlbSgpOyAvLyBleHBvcnQgYWxsIHRoZSBzeXN0ZW1cbiAqICRkYi5leHBvcnRTeXN0ZW0oeydzY2hlbWFzJzp7J25hbWUnOidQZXJzb24nfX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHNjaGVtYXNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeyd0eXBlcyc6eyduYW1lJzonYWRkcmVzcyd9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeydiZWhhdmlvcnMnOnsnY29tcG9uZW50JzonbGF1cmUnfX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGJlaGF2aW9yc1xuICogJGRiLmV4cG9ydFN5c3RlbSh7J2NvbXBvbmVudHMnOnsnUGVyc29uJzogeydjb3VudHJ5JzogJ0ZyYW5jZSd9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHNcbiAqICRkYi5leHBvcnRTeXN0ZW0oeydzY2hlbWFzJzp7J25hbWUnOidQZXJzb24nfSwnY29tcG9uZW50cyc6eydQZXJzb24nOiB7J2NvdW50cnknOiAnRnJhbmNlJ319fSk7IC8vIGNvbWJpbmUgZmlsdGVyc1xuICovXG5leHBvcnRzLmV4cG9ydFN5c3RlbSA9IGZ1bmN0aW9uIGV4cG9ydFN5c3RlbShwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGlmIChwYXJhbXMpIHtcbiAgICByZXN1bHQgPSBleHBTdWJzeXN0ZW0ocGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBleHBTeXN0ZW0oKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gQ2xlYXIgdGhlIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNvbGxlY3Rpb25OYW1lID0gJyc7XG5cbiAgLy8gcmVtb3ZlIGNvbGxlY3Rpb25zXG4gIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBjb2xsZWN0aW9uc1xuICBsZW5ndGggPSBpbnRlcm5hbERCLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29sbGVjdGlvbk5hbWUgPSBpbnRlcm5hbERCW2ldO1xuICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLnJlbW92ZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW5pdFxuICogQGRlc2NyaXB0aW9uIEluaXQgdGhlIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBydW50aW1lU3lzdGVtSWQgPSAnJztcbiAgdmFyIHJ1bnRpbWVTeXN0ZW0gPSBudWxsO1xuXG4gIHJ1bnRpbWVTeXN0ZW0gPSBleHBvcnRzLl9TeXN0ZW0uZmluZCh7XG4gICAgX2lkOiAnZTg5YzYxN2I2YjE1ZDI0J1xuICB9KVswXTtcblxuICAvLyBjbGVhciBhbGwgdGhlIGRhdGEgaW4gbWVtb3J5XG4gIGV4cG9ydHMuY2xlYXIoKTtcbiAgJGNvbXBvbmVudC5jbGVhcigpO1xuICAkbWV0YW1vZGVsLmNsZWFyKCk7XG4gICRzdGF0ZS5jbGVhcigpO1xuICAkYmVoYXZpb3IuY2xlYXIoKTtcblxuICAvLyBpbml0IG1ldGFtb2RlbFxuICAkbWV0YW1vZGVsLmluaXQoKTtcblxuICAvLyByZWltcG9ydCBTeXN0ZW0gUnVudGltZSBjb3JlIHN5c3RlbVxuICBydW50aW1lU3lzdGVtSWQgPSBleHBvcnRzLmltcG9ydFN5c3RlbShydW50aW1lU3lzdGVtKTtcbiAgJGNvbXBvbmVudC5nZXQocnVudGltZVN5c3RlbUlkKS5zdGFydCgpO1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgaGVscGVyXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuLyogUHJpdmF0ZSBwcm9wZXJ0eSAqL1xuXG52YXIgcnVudGltZVJlZiA9IG51bGw7XG52YXIgcmVxdWlyZVJlZiA9IG51bGw7XG5cbi8qIFB1YmxpYyBtZXRob2QgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGlzUnVudGltZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYSBTeXN0ZW0gUnVudGltZSBpbnN0YW5jZSBleGlzdFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgU3lzdGVtIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RzXG4gKi9cbmV4cG9ydHMuaXNSdW50aW1lID0gZnVuY3Rpb24gaXNSdW50aW1lKCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgaWYgKCRkYi5fUnVudGltZSAmJiAkZGIuX1J1bnRpbWUuZmluZCgpLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFJ1bnRpbWVcbiAqIEByZXR1cm5zIHtfUnVudGltZX0gU3lzdGVtIFJ1bnRpbWUgaW5zdGFuY2VcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIFN5c3RlbSBSdW50aW1lIGluc3RhbmNlXG4gKi9cbmV4cG9ydHMuZ2V0UnVudGltZSA9IGZ1bmN0aW9uIGdldFJ1bnRpbWUoKSB7XG4gIHZhciBydW50aW1lSWQgPSAnJztcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCFydW50aW1lUmVmKSB7XG4gICAgcnVudGltZUlkID0gJGRiLl9SdW50aW1lLmZpbmQoKVswXS5faWQ7XG4gICAgcnVudGltZVJlZiA9ICRjb21wb25lbnQuZ2V0KHJ1bnRpbWVJZCk7XG4gIH1cblxuICByZXR1cm4gcnVudGltZVJlZjtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc09uTm9kZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYSBTeXN0ZW0gUnVudGltZSBpcyBydW5uaW5nIG9uIG5vZGVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIFN5c3RlbSBSdW50aW1lIGlzIHJ1bm5pbmcgb24gbm9kZVxuICovXG5leHBvcnRzLmlzT25Ob2RlID0gZnVuY3Rpb24gaXNPbk5vZGUoKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZXF1aXJlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgcmVxdWlyZSBvYmplY3RcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHJlcXVpcmUgb2JqZWN0XG4gKi9cbmV4cG9ydHMuZ2V0UmVxdWlyZSA9IGZ1bmN0aW9uIGdldFJlcXVpcmUoKSB7XG4gIGlmICghcmVxdWlyZVJlZikge1xuICAgIC8vIGtsdWRnZSBmb3Igd2VicGFja1xuICAgIHJlcXVpcmVSZWYgPSBldmFsKCdyZXF1aXJlJyk7XG4gIH1cblxuICByZXR1cm4gcmVxdWlyZVJlZjtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZW5lcmF0ZUlkXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBhIHV1aWRcbiAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSBhIHV1aWRcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcbiAgZnVuY3Rpb24gZ2VuKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKS50b1N0cmluZygxNik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcmVmaXgoKSB7XG4gICAgdmFyIHZhbGlkUHJlZml4ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JztcbiAgICByZXR1cm4gdmFsaWRQcmVmaXguY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkUHJlZml4Lmxlbmd0aCkpO1xuICB9XG5cbiAgcmV0dXJuIGdldFByZWZpeCgpICsgZ2VuKCkgKyBnZW4oKSArIGdlbigpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHBvbHlmaWxsXG4gKiBAZGVzY3JpcHRpb24gQWRkIFBvbHlmaWxsXG4gKi9cbmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgLy8gZml4aW5nIGNvbnN0cnVjdG9yLm5hbWUgcHJvcGVydHkgaW4gSUVcbiAgLy8gdGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI1MTQwNzIzL2NvbnN0cnVjdG9yLW5hbWUtaXMtdW5kZWZpbmVkLWluLWludGVybmV0LWV4cGxvcmVyXG4gIGlmIChcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUubmFtZSA9PT0gdW5kZWZpbmVkICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5ICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ25hbWUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb25cXHMoW14oXXsxLH0pXFwoLztcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBmdW5jTmFtZVJlZ2V4LmV4ZWModGhpcy50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxID8gcmVzdWx0c1sxXS50cmltKCkgOiAnJztcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge31cbiAgICB9KTtcbiAgfVxufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbG9nXG4gKiBAcmVxdWlyZXMgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEByZXF1aXJlcyBjb21wb25lbnRcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxudmFyIElEID0gJ19pZCc7XG52YXIgTkFNRSA9ICdfbmFtZSc7XG52YXIgY3VycmVudExldmVsID0gJ3dhcm4nO1xudmFyIGxvZ2dlclJlZiA9IG51bGw7XG52YXIgZmFrZUxvZ2dlclJlZiA9IHtcbiAgY3VycmVudExldmVsOiAnd2FybicsXG4gIGxldmVsOiBmdW5jdGlvbiBkZWJ1ZyhsZXZlbE5hbWUpIHtcbiAgICBpZiAobGV2ZWxOYW1lKSB7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGxldmVsTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsO1xuICB9LFxuICBkZWJ1ZzogZnVuY3Rpb24gZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgY29uc29sZS5sb2coJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICB9XG4gIH0sXG4gIGluZm86IGZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2luZm8nIHx8IHRoaXMuY3VycmVudExldmVsID09PSAnZGVidWcnKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICB9XG4gIH0sXG4gIHdhcm46IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY3VycmVudExldmVsID09PSAnaW5mbycgfHxcbiAgICAgIHRoaXMuY3VycmVudExldmVsID09PSAnd2FybicgfHxcbiAgICAgIHRoaXMuY3VycmVudExldmVsID09PSAnZGVidWcnXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICB9XG4gIH0sXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc29sZS5lcnJvcigncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TG9nZ2VyXG4gKiBAcmV0dXJuIHtfTG9nZ2VyfSBfTG9nZ2VyIGluc3RhbmNlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgX0xvZ2dlciBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBnZXRMb2dnZXIoKSB7XG4gIHZhciBsb2dnZXJJZCA9ICcnO1xuICB2YXIgbG9nZ2VycyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoISRtZXRhbW9kZWwuZ2V0TW9kZWwoJ19Mb2dnZXInKSkge1xuICAgIHJlc3VsdCA9IGZha2VMb2dnZXJSZWY7XG4gIH0gZWxzZSB7XG4gICAgbG9nZ2VycyA9ICRkYi5fTG9nZ2VyLmZpbmQoKTtcbiAgICBpZiAobG9nZ2Vycy5sZW5ndGgpIHtcbiAgICAgIGxvZ2dlcklkID0gbG9nZ2Vyc1swXVtJRF07XG5cbiAgICAgIGlmICgkY29tcG9uZW50LmdldChsb2dnZXJJZCkpIHtcbiAgICAgICAgbG9nZ2VyUmVmID0gJGNvbXBvbmVudC5nZXQobG9nZ2VySWQpO1xuICAgICAgICByZXN1bHQgPSBsb2dnZXJSZWY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cbi8qKlxuICogQG1ldGhvZCBsZXZlbFxuICogQHBhcmFtIHtTdHJpbmd9IGxldmVsTmFtZSBuYW1lIG9mIHRoZSBsZXZlbFxuICogQGRlc2NyaXB0aW9uIFNldCB0aGUgbGV2ZWwgb2YgdGhlIGxvZ1xuICovXG5leHBvcnRzLmxldmVsID0gZnVuY3Rpb24gbGV2ZWwobGV2ZWxOYW1lKSB7XG4gIGN1cnJlbnRMZXZlbCA9IGxldmVsTmFtZTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICogQGRlc2NyaXB0aW9uIEEgcHJvcGVydHkgb2YgYSBzY2hlbWEgaXMgdW5rbm93blxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eSA9IGZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHNjaGVtYSkge1xuICB2YXIgbWVzc2FnZSA9ICcnO1xuXG4gIGlmIChzY2hlbWFbTkFNRV0pIHtcbiAgICBtZXNzYWdlID1cbiAgICAgIFwidW5rbm93biBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICtcbiAgICAgIHNjaGVtYVtOQU1FXSArXG4gICAgICBcIidcIjtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlID0gXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgYSBtb2RlbFwiO1xuICB9XG5cbiAgZ2V0TG9nZ2VyKCkud2FybihtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHBlcm9wZXR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSB0aGUgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5VHlwZShcbiAgcHJvcGVydHlOYW1lLFxuICB0eXBlLFxuICBwcm9wZXJ0eVxuKSB7XG4gIHZhciByZWFsVHlwZSA9XG4gICAgcHJvcGVydHkgJiYgcHJvcGVydHkuY29uc3RydWN0b3JcbiAgICAgID8gcHJvcGVydHkuY29uc3RydWN0b3IubmFtZVxuICAgICAgOiB0eXBlb2YgcHJvcGVydHk7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgXCInOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICB0eXBlICtcbiAgICAgIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICtcbiAgICAgIHJlYWxUeXBlICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB2YWx1ZSBmb3IgdHlwZSBlbnVtXG4gKi9cbmV4cG9ydHMuaW52YWxpZEVudW1WYWx1ZSA9IGZ1bmN0aW9uIGludmFsaWRFbnVtVmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcIidcIiArIHZhbHVlICsgXCInIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSB0eXBlIGVudW0gJ1wiICsgdHlwZSArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cnVjdG9yTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGEgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZENsYXNzTmFtZSA9IGZ1bmN0aW9uIGludmFsaWRDbGFzc05hbWUoXG4gIGNvbXBvbmVudElkLFxuICB0eXBlLFxuICBjb25zdHJ1Y3Rvck5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBjbGFzcyBuYW1lIGZvciBjb21wb25lbnQgJ1wiICtcbiAgICAgIGNvbXBvbmVudElkICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgIGNvbnN0cnVjdG9yTmFtZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQGRlc2NyaXB0aW9uIE1pc3NpbmcgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eSA9IGZ1bmN0aW9uIG1pc3NpbmdQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGZvciBhIHNjaGVtYSBvciBhIG1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1pc3Npbmcgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmdcbiAqL1xuZXhwb3J0cy5taXNzaW5nSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiBtaXNzaW5nSW1wbGVtZW50YXRpb24obmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwic2NoZW1hICdcIiArIG5hbWUgKyBcIicgaXMgbWlzc2luZy5cIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eSBvZiBhIGNsYXNzIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZUltcCA9IGZ1bmN0aW9uIGludmFsaWRUeXBlSW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZXJyb3IoXG4gICAgXCJ0aGUgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5ICtcbiAgICAgIFwiJyBvZiB0aGUgbW9kZWwgJ1wiICtcbiAgICAgIGNsYXNzTmFtZSArXG4gICAgICBcIicgaXMgaW52YWxpZFwiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eUltcCA9IGZ1bmN0aW9uIG1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGluIHRoZSBtb2RlbCAnXCIgKyBjbGFzc05hbWUgKyBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgYSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBVbmtvd24gcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eUltcCA9IGZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgc2NoZW1hKSB7XG4gIGdldExvZ2dlcigpLmVycm9yKFxuICAgIFwidGhlIG1vZGVsICdcIiArIHNjaGVtYSArIFwiJyBoYXMgYW4gdW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFR5cGVEZWZpbml0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBhIHR5cGUgZGVmaW5pdGlvblxuICogQGRlc2NyaXB0aW9uICBUcnkgdG8gYWRkIGFuIGludmFsaWQgdHlwZVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIGludmFsaWRUeXBlRGVmaW5pdGlvbihuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgdHlwZSAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCB2YWxpZFwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHByb3BlcnR5IG5hbWVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5TmFtZShcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgcHJvcGVydHlOYW1lLFxuICBwcm9wZXJ0eVZhbHVlLFxuICB0eXBlXG4pIHtcbiAgdmFyIGNsYXNzSW5mbyA9ICcnO1xuICB2YXIgcmVhbFR5cGUgPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZWFsVHlwZSA9XG4gICAgICBwcm9wZXJ0eVZhbHVlICYmIHByb3BlcnR5VmFsdWUuY29uc3RydWN0b3JcbiAgICAgICAgPyBwcm9wZXJ0eVZhbHVlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgOiB0eXBlb2YgcHJvcGVydHlWYWx1ZTtcblxuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICtcbiAgICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkICdcIiArXG4gICAgICAgIHR5cGUgK1xuICAgICAgICBcIicgaW5zdGVhZCBvZiAnXCIgK1xuICAgICAgICByZWFsVHlwZSArXG4gICAgICAgIFwiJ1wiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZWFsVHlwZSA9IHR5cGUgJiYgdHlwZS5jb25zdHJ1Y3RvciA/IHR5cGUuY29uc3RydWN0b3IubmFtZSA6IHR5cGVvZiB0eXBlO1xuXG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSB0eXBlICdcIiArXG4gICAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvICtcbiAgICAgICAgXCI6IGV4cGVjdGVkICdzdHJpbmcnIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgICAgcmVhbFR5cGUgK1xuICAgICAgICBcIidcIlxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCByZWFkT25seVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBUcnlpbmcgdG8gc2V0IGEgcmVhZC1vbmx5IHByb3BlcnR5XG4gKi9cbmV4cG9ydHMucmVhZE9ubHlQcm9wZXJ0eSA9IGZ1bmN0aW9uIHJlYWRPbmx5UHJvcGVydHkoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHByb3BlcnR5TmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiY2FuIG5vdCBzZXQgcmVhZC1vbmx5IHByb3BlcnR5ICdcIiArXG4gICAgICBwcm9wZXJ0eU5hbWUgK1xuICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCIgK1xuICAgICAgY2xhc3NJbmZvXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZERvY3VtZW50T25EYkluc2VydFxuICogQHBhcmFtIHtTdHJpbmd9IGRvYyBhIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgU3lzdGVtIFJ1bnRpbWUgZGF0YWJhc2UgaW5zZXJ0IG9wZXJhdGlvblxuICovXG5leHBvcnRzLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQgPSBmdW5jdGlvbiBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KFxuICBkb2MsXG4gIGNvbGxlY3Rpb25OYW1lXG4pIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgZG9jdW1lbnQgJ1wiICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRvYykucmVwbGFjZSgvLC9nLCAnLCAnKSArXG4gICAgICBcIicgb24gYW4gaW5zZXJ0IG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uICdcIiArXG4gICAgICBjb2xsZWN0aW9uTmFtZSArXG4gICAgICBcIidcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gIEludmFsaWQgcHJvcGVydHkgb24gYSBTeXN0ZW0gUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZShcbiAgY29sbGVjdGlvbk5hbWUsXG4gIGlkLFxuICBwcm9wZXJ0eU5hbWUsXG4gIHByb3BlcnR5VmFsdWUsXG4gIHR5cGVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCB0eXBlIHdoZW4gdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgb2YgZG9jdW1lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJyAoY29sbGVjdGlvbiAnXCIgK1xuICAgICAgY29sbGVjdGlvbk5hbWUgK1xuICAgICAgXCInKSB3aXRoIHRoZSB2YWx1ZSAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkocHJvcGVydHlWYWx1ZSkgK1xuICAgICAgXCInOiBleHBlY3RlZCB0eXBlICdcIiArXG4gICAgICB0eXBlICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFVua29udyBwcm9wZXJ0eSBvbiBhIFN5c3RlbSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlID0gZnVuY3Rpb24gdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShcbiAgcHJvcGVydHlOYW1lLFxuICBjb2xsZWN0aW9uTmFtZSxcbiAgaWRcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidW5rbm93biBwcm9wZXJ0eSAnXCIgK1xuICAgICAgcHJvcGVydHlOYW1lICtcbiAgICAgIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICtcbiAgICAgIGNvbGxlY3Rpb25OYW1lICtcbiAgICAgIFwiJyB3aXRoIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQGRlc2NyaXB0aW9uIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzc1xuICovXG5leHBvcnRzLnVua25vd25NZXRob2QgPSBmdW5jdGlvbiB1bmtub3duTWV0aG9kKGNsYXNzSWQsIG1ldGhvZE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRyeSB0byBjYWxsIGFuIHVua25vd24gbWV0aG9kICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBmb3IgdGhlIGNsYXNzICdcIiArXG4gICAgICBjbGFzc0lkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENvbGxlY3Rpb25OYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGNyZWF0ZSBhbiBpbnZhbGlkIERhdGFiYXNlQ29sbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWRDb2xsZWN0aW9uTmFtZSA9IGZ1bmN0aW9uIGludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIG5hbWUgZm9yIGNyZWF0aW5nIHRoZSBjb2xsZWN0aW9uICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJzogdGhlcmUgaXMgbm8gc2NoZW1hICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpbiB0aGUgbWV0YW1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFR5cGUgZXhwZWN0ZWQgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgY3VycmVudCB0eXBlXG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCB0eXBlIHJlc3VsdCBvZiBhIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRSZXN1bHRUeXBlID0gZnVuY3Rpb24gaW52YWxpZFJlc3VsdFR5cGUoXG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIG1ldGhvZE5hbWUsXG4gIGV4cGVjdGVkVHlwZSxcbiAgdHlwZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSByZXN1bHQgb2YgbWV0aG9kICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGNsYXNzSW5mbyArXG4gICAgICBcIjogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgZXhwZWN0ZWRUeXBlICtcbiAgICAgIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWYgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFVua25vd24gY2xhc3NcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ1bmtvd24gY2xhc3MgY29tcG9uZW50ICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInIGZvciBjb21wb25lbnQgJ1wiICtcbiAgICAgIGNvbXBvbmVudElkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgU3lzdGVtIFJ1bnRpbWUgd29ya2Zsb3cgaGFzIGJlZW4gcmVzdGFydGVkXG4gKi9cbmV4cG9ydHMud29ya2Zsb3dSZXN0YXJ0ZWQgPSBmdW5jdGlvbiB3b3JrZmxvd1Jlc3RhcnRlZCgpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybigncnVudGltZSBoYXMgYmVlbiByZXN0YXJ0ZWQnKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbU51bWJlciA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlcihcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArXG4gICAgICBtZXRob2ROYW1lICtcbiAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGNsYXNzSW5mb1xuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogQGRlc2NyaXB0aW9uICBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1UeXBlID0gZnVuY3Rpb24gaW52YWxpZFBhcmFtVHlwZShcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZSxcbiAgcGFyYW1OYW1lXG4pIHtcbiAgdmFyIGNsYXNzSW5mbyA9ICcnO1xuXG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBjbGFzc0luZm8gPSBcIiAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKVwiO1xuICB9XG4gIGlmIChwYXJhbU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXG4gICAgICBcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgK1xuICAgICAgICBwYXJhbU5hbWUgK1xuICAgICAgICBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgaWQgK1xuICAgICAgICBcIidcIiArXG4gICAgICAgIGNsYXNzSW5mb1xuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwiaW52YWxpZCB0eXBlIGZvciBhIHBhcmFtZXRlciB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICBtZXRob2ROYW1lICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJ1wiICtcbiAgICAgICAgY2xhc3NJbmZvXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciB0byBhIHN0YXRlXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3JOb3RVbmlxdWUgPSBmdW5jdGlvbiBiZWhhdmlvck5vdFVuaXF1ZShpZCwgc3RhdGVOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gYWRkIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgZm9yIHRoZSBzdGF0ZSAnXCIgK1xuICAgICAgc3RhdGVOYW1lICtcbiAgICAgIFwiJyBvbiBjbGFzcyAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQGRlc2NyaXB0aW9uIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT24gPSBmdW5jdGlvbiBpbnZhbGlkU3RhdGVPbihpZCwgc3RhdGVOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gYWRkIGEgYmVoYXZpb3IgdG8gYW4gdW5rd293biBzdGF0ZSAnXCIgK1xuICAgICAgc3RhdGVOYW1lICtcbiAgICAgIFwiJyBvbiBjbGFzcyAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPZmZcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU3RhdGVPZmYgPSBmdW5jdGlvbiBpbnZhbGlkU3RhdGVPZmYoaWQsIHN0YXRlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IHRvIHJlbW92ZSBhIGJlaGF2aW9yIGZyb20gYW4gdW5rd293biBzdGF0ZSAnXCIgK1xuICAgICAgc3RhdGVOYW1lICtcbiAgICAgIFwiJyBvbiBjbGFzcyAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICogQGRlc2NyaXB0aW9uIFRoZSBtYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZFxuICovXG5leHBvcnRzLm1hc3RlclN5c3RlbU5vdEZvdW5kID0gZnVuY3Rpb24gbWFzdGVyU3lzdGVtTm90Rm91bmQoKSB7XG4gIGdldExvZ2dlcigpLndhcm4oJ2NhbiBub3QgZXhwb3J0IHRoZSBkYXRhYmFzZSBiZWNhdXNlIG5vIHN5c3RlbSB3YXMgZGVmaW5lZCcpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgdHlwZVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlID0gZnVuY3Rpb24gaW52YWxpZFR5cGUobmFtZSwgdmFsdWUsIHR5cGVOYW1lKSB7XG4gIHZhciByZWFsVHlwZSA9XG4gICAgbmFtZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA/IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgOiB0eXBlb2YgdmFsdWU7XG5cbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInOiBleHBlY3RlZCAnXCIgK1xuICAgICAgdHlwZU5hbWUgK1xuICAgICAgXCInIGluc3RlYWQgb2YgJ1wiICtcbiAgICAgIHJlYWxUeXBlICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENsYXNzVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIGNsYXNzIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIGNsYXNzIHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2xhc3NUeXBlID0gZnVuY3Rpb24gaW52YWxpZENsYXNzVHlwZShvYmosIHR5cGUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgY2xhc3MgbmFtZSBmb3IgdGhlIG9iamVjdCAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkob2JqKSArXG4gICAgICBcIic6IGV4cGVjdGVkICdcIiArXG4gICAgICB0eXBlXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogYW4gb2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGZvciB0aGUgY29uZmlndXJhdGlvblxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmludmFsaWRDb25maWd1cmF0aW9uID0gZnVuY3Rpb24gaW52YWxpZENvbmZpZ3VyYXRpb24ob2JqLCB0eXBlKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGNvbmZpZ3VyYXRpb24gZm91bmQgZm9yICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShvYmopICtcbiAgICAgIFwiJzogZXhwZWN0ZWQgJ1wiICtcbiAgICAgIHR5cGVcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKiBAZGVzY3JpcHRpb24gVW5rbm93biB0eXBlXG4gKi9cbmV4cG9ydHMudW5rbm93blR5cGUgPSBmdW5jdGlvbiB1bmtub3duVHlwZSh2YWx1ZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidW5rbm93biB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gQSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGFscmVheSBjcmVhdGVkXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBmdW5jdGlvbiBjYW5Ob3RZZXRWYWxpZGF0ZShpZCwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFxuICAgIFwiY2FuIG5vdCB5ZXQgdmFsaWRhdGUgaWYgdGhlIGNvbXBvbmVudCAnXCIgK1xuICAgICAgaWQgK1xuICAgICAgXCInIGlzIGFuIGluc3RhbmNlIG9mICdcIiArXG4gICAgICBjbGFzc05hbWUgK1xuICAgICAgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkQ2hhbm5lbEV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGZ1bmN0aW9uIGludmFsaWRDaGFubmVsRXZlbnQoXG4gIG1lc3NhZ2UsXG4gIGV2ZW50TmFtZSxcbiAgdHlwZVxuKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBtZXNzYWdlICdcIiArXG4gICAgICBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArXG4gICAgICBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICtcbiAgICAgIHR5cGUgK1xuICAgICAgXCInIGZvciBldmVudCAnXCIgK1xuICAgICAgZXZlbnROYW1lICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIGJlaGF2aW9yIGFkZCB3aXRoICdvbicgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24gPSBmdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWV0aG9kTmFtZVxuKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGFkZGluZyBhIGJlaGF2aW9yIG9uIG1ldGhvZCAnXCIgK1xuICAgICAgbWV0aG9kTmFtZSArXG4gICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICBpZCArXG4gICAgICBcIidcIiArXG4gICAgICBjbGFzc0luZm9cbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1cGRhdGVVdWlkXG4gKiBAcGFyYW0ge1N0cmluZ30gY3VycmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuZXdJZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFscmVhZHlVc2VkIG5ld0lkIGFscmVhZHkgdXNlZFxuICogQGRlc2NyaXB0aW9uIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51cGRhdGVVdWlkID0gZnVuY3Rpb24gdXBkYXRlVXVpZChjdXJyZW50SWQsIG5ld0lkLCBhbHJlYWR5VXNlZCkge1xuICBpZiAoYWxyZWFkeVVzZWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJ0cnkgdG8gdXBkYXRlIGEgY29tcG9uZW50IG9mIGlkICdcIiArXG4gICAgICAgIGN1cnJlbnRJZCArXG4gICAgICAgIFwiJyB3aXRoIHRoZSBuZXcgaWQgJ1wiICtcbiAgICAgICAgbmV3SWQgK1xuICAgICAgICBcIicgdGhhdCBpcyBhbHJlYWR5IHVzZWRcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICAgIFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgK1xuICAgICAgICBjdXJyZW50SWQgK1xuICAgICAgICBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArXG4gICAgICAgIG5ld0lkICtcbiAgICAgICAgXCInXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFVzZU9mQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQGRlc2NyaXB0aW9uIFRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50IHRoYXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gKi9cbmV4cG9ydHMuaW52YWxpZFVzZU9mQ29tcG9uZW50ID0gZnVuY3Rpb24gaW52YWxpZFVzZU9mQ29tcG9uZW50KGlkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJ0cnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRTY2hlbWEgPSBmdW5jdGlvbiBpbnZhbGlkU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBzY2hlbWEgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInIGlzIG5vdCB2YWxpZCwgaXQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBtZXRhbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBUcnkgdG8gYWRkIGFuIGludmFsaWQgbW9kZWxcbiAqL1xuZXhwb3J0cy5pbnZhbGlkTW9kZWwgPSBmdW5jdGlvbiBpbnZhbGlkTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIG1vZGVsICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBpcyBub3QgdmFsaWQsIGl0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgbWV0YW1vZGVsXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBwYXJhbWV0ZXJzIHNldCB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVycyA9IGZ1bmN0aW9uIGludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcInRoZSBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NJZCArXG4gICAgICBcIicgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGRlc3Ryb3llZENvbXBvbmVudENhbGxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gVHJ5IHRvIGdldCB0aGUgcHJvcGVydHkgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZGVzdHJveWVkQ29tcG9uZW50Q2FsbCA9IGZ1bmN0aW9uIGRlc3Ryb3llZENvbXBvbmVudENhbGwoXG4gIHByb3BlcnR5TmFtZSxcbiAgaWRcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5aW5nIHRvIGdldCB0aGUgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BlcnR5TmFtZSArXG4gICAgICBcIicgb24gdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICtcbiAgICAgIGlkICtcbiAgICAgIFwiJ1wiXG4gICk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iamVjdCBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBzY2hlbWEgbmFtZVxuICogQGRlc2NyaXB0aW9uIEludmFsaWQgcGFyYW1ldGVyIHR5cGUgIHdoZW4gY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzc1xuICovXG5leHBvcnRzLmludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzKFxuICBvYmplY3QsXG4gIG5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidGhlIGNvbnN0cnVjdG9yIHBhcmFtZXRlciAnXCIgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkob2JqZWN0KS5yZXBsYWNlKC8sL2csICcsICcpICtcbiAgICAgIFwiJyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICtcbiAgICAgIG5hbWUgK1xuICAgICAgXCInIGlzIG5vdCBhbiBvYmplY3RcIlxuICApO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHVua25vd25Nb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBpbmZvcm1hdGlvbiBvZiBhbiB1bmtvd24gbW9kZWxcbiAqL1xuZXhwb3J0cy51bmtub3duTW9kZWwgPSBmdW5jdGlvbiB1bmtub3duTW9kZWwoY2xhc3NJZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwidHJ5IGdldCB0aGUgaW5mb3JtYXRpb24gb2YgYW4gdW5rbm93biBtb2RlbCAnXCIgKyBjbGFzc0lkICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBBIHNjaGVtYSBpcyBtaXNzaW5nXG4gKi9cbmV4cG9ydHMubWlzc2luZ1NjaGVtYSA9IGZ1bmN0aW9uIG1pc3NpbmdTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmdcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHdoZXJlIHRoZSBjeWNsaWMgZGVwZW5kZW5jeSB3YXMgZm91bmRcbiAqIEBkZXNjcmlwdGlvbiBBIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICovXG5leHBvcnRzLmN5Y2xpY0RlcGVuZGVuY3kgPSBmdW5jdGlvbiBjeWNsaWNEZXBlbmRlbmN5KG5hbWUpIHtcbiAgaWYgKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgICdhIGN5Y2xpYyBpbmhlcml0YW5jZSBkZXBlbmRlbmN5IHdpdGgg4oCZJyArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICBcIuKAmSBzY2hlbWEgaGFzIGJlZW4gZm91bmQsIHBsZWFzZSBjaGVjayB0aGUgJ19pbmhlcml0JyBwcm9wZXJ0aWVzIG9mIHlvdXIgc2NoZW1hc1wiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgIFwiYSBjeWNsaWMgaW5oZXJpdGFuY2UgZGVwZW5kZW5jeSBoYXMgYmVlbiBmb3VuZCwgcGxlYXNlIGNoZWNrIHRoZSAnX2luaGVyaXQnIHByb3BlcnRpZXMgb2YgeW91ciBzY2hlbWFzXCJcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaW52YWxpZEVudW1UeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZU5hbWUgb2YgdGhlIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHR5cGUgZm9yIGEgdHlwZSBlbnVtXG4gKi9cbmV4cG9ydHMuaW52YWxpZEVudW1UeXBlID0gZnVuY3Rpb24gaW52YWxpZEVudW1UeXBlKHZhbHVlLCB0eXBlTmFtZSwgdHlwZSkge1xuICB2YXIgcmVhbFR5cGUgPSAnJztcblxuICBpZiAodHlwZW9mIHR5cGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGUgIT09IHR5cGVvZiB2YWx1ZSkge1xuICAgIHJlYWxUeXBlID1cbiAgICAgIHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yID8gdmFsdWUuY29uc3RydWN0b3IubmFtZSA6IHR5cGVvZiB2YWx1ZTtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFxuICAgICAgXCJpbnZhbGlkIHR5cGUgZm9yIGVudW1lcmF0ZWQgdHlwZSAnXCIgK1xuICAgICAgICB0eXBlTmFtZSArXG4gICAgICAgIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgK1xuICAgICAgICB0eXBlICtcbiAgICAgICAgXCInIGluc3RlYWQgb2YgdHlwZSAnXCIgK1xuICAgICAgICByZWFsVHlwZSArXG4gICAgICAgIFwiJ1wiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBlbnVtZXJhdGVkIHR5cGUgJ1wiICsgdHlwZU5hbWUgKyBcIidcIik7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBsb2FkU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBMb2FkIHNjaGVtYVxuICovXG5leHBvcnRzLmxvYWRTY2hlbWEgPSBmdW5jdGlvbiBsb2FkU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJsb2FkIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGxvYWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBkZXNjcmlwdGlvbiBMb2FkIG1vZGVsXG4gKi9cbmV4cG9ydHMubG9hZE1vZGVsID0gZnVuY3Rpb24gbG9hZE1vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJsb2FkIG1vZGVsICdcIiArIG5hbWUgKyBcIidcIik7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbG9hZFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBMb2FkIHR5cGVcbiAqL1xuZXhwb3J0cy5sb2FkVHlwZSA9IGZ1bmN0aW9uIGxvYWRUeXBlKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJsb2FkIHR5cGUgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjb21waWxlU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBDb21waWxlIHNjaGVtYVxuICovXG5leHBvcnRzLmNvbXBpbGVTY2hlbWEgPSBmdW5jdGlvbiBjb21waWxlU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJjb21waWxlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdlbmVyYXRlTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gR2VuZXJhdGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZU1vZGVsID0gZnVuY3Rpb24gZ2VuZXJhdGVNb2RlbChuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiZ2VuZXJhdGUgbW9kZWwgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja01vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIENoZWNrIG1vZGVsXG4gKi9cbmV4cG9ydHMuY2hlY2tNb2RlbCA9IGZ1bmN0aW9uIGNoZWNrTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImFuYWx5emUgbW9kZWwgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jcmVhdGVDb2xsZWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlQ29sbGVjdGlvbihuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiY3JlYXRlIGNvbGxlY3Rpb24gJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgY2xhc3NcbiAqL1xuZXhwb3J0cy5jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJjcmVhdGUgY2xhc3MgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBtb2RlbENyZWF0aW9uQmVnaW5cbiAqIEBkZXNjcmlwdGlvbiBCZWdpbnMgbW9kZWwgY3JlYXRpb25cbiAqL1xuZXhwb3J0cy5tb2RlbENyZWF0aW9uQmVnaW4gPSBmdW5jdGlvbiBtb2RlbENyZWF0aW9uQmVnaW4oKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKCdzdGFydGluZyBtb2RlbCBjcmVhdGlvbi4uLicpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25FbmRcbiAqIEBkZXNjcmlwdGlvbiBFbmQgbW9kZWwgY3JlYXRpb25cbiAqL1xuZXhwb3J0cy5tb2RlbENyZWF0aW9uRW5kID0gZnVuY3Rpb24gbW9kZWxDcmVhdGlvbkVuZCgpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoJ21vZGVsIGNyZWF0aW9uIGVuZGVkJyk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgYWN0aW9uSW52b2tlRXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjb21wb25lbnQgY2xhc3MgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqIEBkZXNjcmlwdGlvbiBBbiBlcnJvciBoYXBwZW5lZCB3aGVuIGludm9raW5nIGEgYmVoYXZpb3JcbiAqL1xuZXhwb3J0cy5hY3Rpb25JbnZva2VFcnJvciA9IGZ1bmN0aW9uIGFjdGlvbkludm9rZUVycm9yKFxuICBzdGF0ZSxcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgbWVzc2FnZVxuKSB7XG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgIFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgIHN0YXRlICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJyAoY2xhc3MgJ1wiICtcbiAgICAgICAgY2xhc3NOYW1lICtcbiAgICAgICAgXCInKTogXCIgK1xuICAgICAgICBtZXNzYWdlXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcbiAgICAgIFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArXG4gICAgICAgIHN0YXRlICtcbiAgICAgICAgXCInIG9uIGNvbXBvbmVudCAnXCIgK1xuICAgICAgICBpZCArXG4gICAgICAgIFwiJzogXCIgK1xuICAgICAgICBtZXNzYWdlXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBuYW1lIGZvciB0aGUgcHJvcGVydHkgb2YgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gaW52YWxpZFNjaGVtYVByb3BlcnR5TmFtZShcbiAgbmFtZSxcbiAgcHJvcE5hbWVcbikge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBuYW1lICdcIiArXG4gICAgICBwcm9wTmFtZSArXG4gICAgICBcIicgZm9yIHNjaGVtYSAnXCIgK1xuICAgICAgbmFtZSArXG4gICAgICBcIic6IGEgcHJvcGVydHkgbmFtZSBjYW4gbm90IGJlZ2luIHdpdGggJ18nXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBuYW1lIGZvciB0aGUgcHJvcGVydHkgb2YgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hUHJvcGVydHkgPSBmdW5jdGlvbiBpbnZhbGlkU2NoZW1hUHJvcGVydHkobmFtZSwgcHJvcE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludmFsaWQgcHJvcGVydHkgJ1wiICtcbiAgICAgIHByb3BOYW1lICtcbiAgICAgIFwiJyBmb3Igc2NoZW1hICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJzogb25seSAncHJvcGVydHknLCAnbGluaycsICdjb2xsZWN0aW9uJywgJ21ldGhvZCcgYW5kICdldmVudCcgYXJlIGFsbG93ZWQuXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlGb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmogZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKiBAZGVzY3JpcHRpb24gSW52YWxpZCBmb3JtYXQgZm9yIHRoZSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlGb3JtYXQgPSBmdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXG4gICAgXCJpbnZhbGlkIGZvcm1hdCBmb3IgYSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHknOiAnXCIgK1xuICAgICAgb2JqICtcbiAgICAgIFwiJyBpcyBub3QgYW4gb2JqZWN0XCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIGludmFsaWQgc3RhdGVcbiAqIEBkZXNjcmlwdGlvbiBJbnZhbGlkIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlID0gZnVuY3Rpb24gaW52YWxpZFN0YXRlKG1vZGVsLCBzdGF0ZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFxuICAgIFwiaW52YWxpZCBzdGF0ZSAnXCIgKyBzdGF0ZSArIFwiJyBmb3IgdGhlIG1vZGVsICdcIiArIG1vZGVsICsgXCInXCJcbiAgKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCB1bmtub3duQ29udGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAZGVzY3JpcHRpb24gSW52b2tlIGEgbWV0aG9kIGNsYXNzIHdpdGhvdXQgYSBjb250ZXh0XG4gKi9cbmV4cG9ydHMudW5rbm93bkNvbnRleHQgPSBmdW5jdGlvbiB1bmtub3duQ29udGV4dChjbGFzc05hbWUsIG1ldGhvZE5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcbiAgICBcImludm9rZSB0aGUgYmVoYXZpb3IgJ1wiICtcbiAgICAgIG1ldGhvZE5hbWUgK1xuICAgICAgXCInIG9uIHRoZSBjbGFzcyAnXCIgK1xuICAgICAgY2xhc3NOYW1lICtcbiAgICAgIFwiJyB3aXRob3V0IGEgdmFsaWQgY29udGV4dFwiXG4gICk7XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBtZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBkYlxuICogQHJlcXVpcmVzIGxvZ1xuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIHdvcmtmbG93XG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgbWFuYWdlcyBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwuXG4gKiBTeXN0ZW0gUnVudGltZSBtZXRhbW9kZWwgbG9hZHMgc2NoZW1hcyBhbmQgdHlwZXMsIGFuYWx5emVzIHRoZW0gYW5kXG4gKiBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBEYXRhYmFzZUNvbGxlY3Rpb25zLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgSUQgPSAnX2lkJztcbnZhciBOQU1FID0gJ19uYW1lJztcbnZhciBERVNDUklQVElPTiA9ICdfZGVzY3JpcHRpb24nO1xudmFyIElOSEVSSVRTID0gJ19pbmhlcml0JztcbnZhciBDTEFTUyA9ICdfY2xhc3MnO1xudmFyIENPUkUgPSAnX2NvcmUnO1xudmFyIE1FVEhPRF9UWVBFID0gJ21ldGhvZCc7XG52YXIgRVZFTlRfVFlQRSA9ICdldmVudCc7XG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eSc7XG52YXIgTElOS19UWVBFID0gJ2xpbmsnO1xudmFyIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJztcbnZhciBpbnRlcm5hbFR5cGVzID0gWydwcm9wZXJ0eScsICdjb2xsZWN0aW9uJywgJ2xpbmsnLCAnbWV0aG9kJywgJ2V2ZW50J107XG52YXIgaW50ZXJuYWxOYW1lcyA9IFtcbiAgJ19pZCcsXG4gICdfbmFtZScsXG4gICdfaW5oZXJpdCcsXG4gICdfZGVzY3JpcHRpb24nLFxuICAnX2NsYXNzJyxcbiAgJ19jb3JlJ1xuXTtcbnZhciBkZWZhdWx0VHlwZXMgPSBbXG4gICdib29sZWFuJyxcbiAgJ3N0cmluZycsXG4gICdudW1iZXInLFxuICAnb2JqZWN0JyxcbiAgJ2Z1bmN0aW9uJyxcbiAgJ2FycmF5JyxcbiAgJ2RhdGUnLFxuICAnYW55J1xuXTtcbnZhciBzdG9yZSA9IHtcbiAgbWV0YWRlZjoge30sXG4gIGluaGVyaXRhbmNlOiB7fSxcbiAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgc2NoZW1hczoge30sXG4gIGNvbXBpbGVkU2NoZW1hczoge30sXG4gIG1vZGVsczoge30sXG4gIGdlbmVyYXRlZE1vZGVsczoge30sXG4gIHN0YXRlczoge30sXG4gIHR5cGU6IHt9XG59O1xuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIGlzSW50ZXJuYWxOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBpcyBuYW1lIGFuIGludGVybmFsIG5hbWVcbiAqL1xuZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWUobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICBpZiAoaW50ZXJuYWxOYW1lcy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZW5lcmF0ZSB0aGUgbW9kZWxzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTW9kZWxzKCkge1xuICB2YXIgYXR0ID0gJyc7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBzY2hlbWFOYW1lID0gJyc7XG4gIHZhciBzY2hlbWEgPSB7fTtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxQYXJlbnQgPSBudWxsO1xuICB2YXIgbW9kZWxFeHQgPSBudWxsO1xuICB2YXIgbW9kZWxEZWYgPSBudWxsO1xuICB2YXIgbW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IHt9O1xuICB2YXIgbWVyZ2VkTW9kZWwgPSB7fTtcbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgbmJBbmNlc3RvcnMgPSAwO1xuICB2YXIgc29ydEluaGVyaXRUcmVlID0gW107XG5cbiAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgZm9yIChzY2hlbWFOYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tzY2hlbWFOYW1lXTtcblxuICAgIC8vIHNldCBtb2RlbCBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgbW9kZWwgPSB7XG4gICAgICBfbmFtZTogc2NoZW1hLl9uYW1lXG4gICAgfTtcblxuICAgIC8vIHNldCBfY29yZVxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9jb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbW9kZWwuX2NvcmUgPSBzY2hlbWEuX2NvcmU7XG4gICAgfVxuXG4gICAgLy8gc2V0IGluaGVyaXRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEuX2luaGVyaXQpKSB7XG4gICAgICBtb2RlbC5faW5oZXJpdCA9IHNjaGVtYS5faW5oZXJpdDtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3NcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5fY2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtb2RlbC5fY2xhc3MgPSBzY2hlbWEuX2NsYXNzO1xuICAgIH1cblxuICAgIC8vIHNldCBkZXNjcmlwdGlvblxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vZGVsLl9kZXNjcmlwdGlvbiA9IHNjaGVtYS5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgdmFsaWQgbmFtZVxuICAgIGZvciAoYXR0IGluIHNjaGVtYSkge1xuICAgICAgaWYgKCFpc0ludGVybmFsTmFtZShhdHQpICYmIGF0dC5pbmRleE9mKCdfJykgPT09IDApIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hUHJvcGVydHlOYW1lKHNjaGVtYS5fbmFtZSwgYXR0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAgc2V0IG1vZGVsIGRlZmF1bHQgdmFsdWVzXG4gICAgZm9yIChhdHQgaW4gc2NoZW1hKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ3Byb3BlcnR5JzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdsaW5rJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogJ19Db21wb25lbnQnLFxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dCxcbiAgICAgICAgICAgIGxhYmVsOiBhdHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnbWV0aG9kJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYW0xJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJhbTInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFtMycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZXN1bHQ6ICdhbnknLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdldmVudCc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFtMScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FueScsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYW0yJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYW55JyxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXJhbTMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdjb2xsZWN0aW9uJzpcbiAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgdHlwZTogWydfQ29tcG9uZW50J10sXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYXR0LFxuICAgICAgICAgICAgbGFiZWw6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZShhdHQpKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRTY2hlbWFQcm9wZXJ0eShzY2hlbWEuX25hbWUsIGF0dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbC5fbmFtZV0gPSBtb2RlbDtcbiAgfVxuXG4gIC8vIG1vZGVscyB0byBvdmVycmlkZVxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcbiAgICBtb2RlbEV4dCA9IHN0b3JlLm1vZGVsc1tuYW1lXTtcbiAgICBpZiAobW9kZWxFeHQpIHtcbiAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxFeHQsIG1vZGVsKTtcbiAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluaGVyaXRhbmNlXG4gIHNvcnRJbmhlcml0VHJlZSA9IHNvcnRJbmhlcml0YW5jZVRyZWUoKTtcblxuICBuYkFuY2VzdG9ycyA9IHNvcnRJbmhlcml0VHJlZS5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBuYkFuY2VzdG9yczsgaSsrKSB7XG4gICAgbW9kZWxOYW1lID0gc29ydEluaGVyaXRUcmVlW2ldO1xuICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG5cbiAgICBpZiAobW9kZWwpIHtcbiAgICAgIHBhcmVudHMgPSBleHBvcnRzLmdldFBhcmVudHMobW9kZWxOYW1lKTtcbiAgICAgIHBhcmVudHMucmV2ZXJzZSgpO1xuXG4gICAgICB2YXIgbW9kZWxUb01lcmdlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtb2RlbCkpO1xuXG4gICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICBuYW1lID0gcGFyZW50c1tqXTtcbiAgICAgICAgbW9kZWxQYXJlbnQgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgICAgIGlmIChtb2RlbFBhcmVudCkge1xuICAgICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxQYXJlbnQsIG1vZGVsKTtcbiAgICAgICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGxhc3QgaW5oZXJpdFxuICAgICAgLy8gaXMgdGhlIG92ZXJyaWRlbiBtb2RlbFxuICAgICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgIGlmIChtb2RlbEV4dCkge1xuICAgICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsRXh0LCBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gc2F2ZVxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICRkYi5fR2VuZXJhdGVkTW9kZWwuaW5zZXJ0KG1vZGVsRGVmKTtcblxuICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICRsb2cuZ2VuZXJhdGVNb2RlbChtb2RlbE5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgbG9hZEluTWVtb3J5XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIExvYWQgc2NoZW1hcyBhbmQgdHlwZXMgaW4gbWVtb3J5XG4gKi9cbmZ1bmN0aW9uIGxvYWRJbk1lbW9yeSgpIHtcbiAgdmFyIHNjaGVtYXMgPSBbXTtcbiAgdmFyIHR5cGVzID0gW107XG4gIHZhciBzY2hlbWEgPSBudWxsO1xuICB2YXIgbW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IFtdO1xuICB2YXIgdHlwZSA9IG51bGw7XG4gIHZhciBpZCA9ICcnO1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgaW5oZXJpdCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIC8vIGluaXQgc3RvcmVcbiAgc3RvcmUuaW5oZXJpdGFuY2UgPSB7fTtcbiAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlID0ge307XG4gIHN0b3JlLnNjaGVtYXMgPSB7fTtcbiAgc3RvcmUuY29tcGlsZWRTY2hlbWFzID0ge307XG4gIHN0b3JlLm1vZGVscyA9IHt9O1xuICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMgPSB7fTtcbiAgc3RvcmUuc3RhdGVzID0ge307XG4gIHN0b3JlLnR5cGUgPSB7fTtcblxuICAvLyBsb2FkIHNjaGVtYXNcbiAgc2NoZW1hcyA9ICRkYi5fU2NoZW1hLmZpbmQoe30pO1xuXG4gIGxlbmd0aCA9IHNjaGVtYXMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBzY2hlbWEgPSBzY2hlbWFzW2ldO1xuXG4gICAgbmFtZSA9IHNjaGVtYVtOQU1FXTtcbiAgICBpbmhlcml0ID0gc2NoZW1hW0lOSEVSSVRTXTtcblxuICAgIHN0b3JlLnNjaGVtYXNbbmFtZV0gPSBzY2hlbWE7XG4gICAgaWYgKGluaGVyaXQpIHtcbiAgICAgIHN0b3JlLmluaGVyaXRhbmNlW25hbWVdID0gaW5oZXJpdDtcbiAgICB9XG5cbiAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgJGxvZy5sb2FkU2NoZW1hKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvYWQgbW9kZWxzXG4gIG1vZGVscyA9ICRkYi5fTW9kZWwuZmluZCh7fSk7XG5cbiAgbGVuZ3RoID0gbW9kZWxzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbW9kZWwgPSBtb2RlbHNbaV07XG4gICAgbmFtZSA9IG1vZGVsW05BTUVdO1xuXG4gICAgc3RvcmUubW9kZWxzW25hbWVdID0gbW9kZWw7XG5cbiAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAkbG9nLmxvYWRNb2RlbChuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBsb2FkIHR5cGVzXG4gIHR5cGVzID0gJGRiLl9UeXBlLmZpbmQoe30pO1xuXG4gIGxlbmd0aCA9IHR5cGVzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdHlwZSA9IHR5cGVzW2ldO1xuICAgIHN0b3JlLnR5cGVbdHlwZS5uYW1lXSA9IHR5cGU7XG5cbiAgICBpZiAoIXR5cGUuY29yZSkge1xuICAgICAgJGxvZy5sb2FkVHlwZSh0eXBlLm5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlSW5oZXJpdGFuY2VUcmVlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSB0aGUgaW5oZXJpdGFuY2UgdHJlZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciBjM2xpbmVyaXphdGlvbiA9IFtdO1xuICB2YXIgYW5jZXN0b3JzID0gW107XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBhbGwgdGhlIGFycmF5cyBhcmUgZW1wdHlcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uICBDaGVjayBpZiB3ZSBoYXZlIGZpbmlzZWhkIHRvIGxpbmVyaXplXG4gICAqL1xuICBmdW5jdGlvbiBfaXNFbXB0eShlbHRzKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWx0c1tpXS5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVsdCBlbGVtZW50IHRvIHJlbW92ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbiBlbHQgZnJvbSBhbGwgdGhlIGFycmF5c1xuICAgKi9cbiAgZnVuY3Rpb24gX3JlbW92ZUNhbmRpZGF0ZShlbHQsIGVsdHMpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWx0c1tpXS5pbmRleE9mKGVsdCkgPT09IDApIHtcbiAgICAgICAgYXJyID0gZWx0c1tpXTtcbiAgICAgICAgYXJyLnJldmVyc2UoKTtcbiAgICAgICAgYXJyLnBvcCgpO1xuICAgICAgICBhcnIucmV2ZXJzZSgpO1xuICAgICAgICBlbHRzW2ldID0gYXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc0NhbmRpZGF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWx0IGVsZW1lbnQgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBhIGdvb2QgY2FuZGlkYXRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgdGhlIGVsZW1lbnQgaXMgYSBnb29kIGNhbmRpZGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzQ2FuZGlkYXRlKGVsdCwgZWx0cykge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGVsdHNbaV0uaW5kZXhPZihlbHQpID4gMCkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2ZpbmRDYW5kaWRhdGVcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgY29udGFpbmluZyB0aGUgY2FuZGlkYXRlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBGaW5kIGEgY2FuZGlkYXRlIGFuZCByZXR1cm4gaXQuXG4gICAqL1xuICBmdW5jdGlvbiBfZmluZENhbmRpZGF0ZShlbHRzKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKF9pc0NhbmRpZGF0ZShlbHRzW2ldWzBdLCBlbHRzKSkge1xuICAgICAgICByZXN1bHQucHVzaChlbHRzW2ldWzBdKTtcbiAgICAgICAgX3JlbW92ZUNhbmRpZGF0ZShlbHRzW2ldWzBdLCBlbHRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbWVyZ2VcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiBjYW5kaWRhdGVzIHJldHVybmVkIGJ5IHRoZSBtZXJnZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gTWVyZ2UgdGhlIGFycmF5c1xuICAgKi9cbiAgZnVuY3Rpb24gX21lcmdlKGVsdHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGNhbmRpZGF0ZXMgPSBbXTtcblxuICAgIGNhbmRpZGF0ZXMgPSBfZmluZENhbmRpZGF0ZShlbHRzKTtcbiAgICB3aGlsZSAoY2FuZGlkYXRlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcyA9IF9maW5kQ2FuZGlkYXRlKGVsdHMpO1xuICAgIH1cblxuICAgIGlmICghX2lzRW1wdHkoZWx0cykpIHtcbiAgICAgICRsb2cuY3ljbGljRGVwZW5kZW5jeSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2xpbmVyaXplXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGVsZW1lbnRcbiAgICogQHJldHVybnMge0FycmF5fSBsaXN0IG9mIGNhbmRpZGF0ZXNcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIFN0YXJ0IHRoZSBsaW5lcmllYXRpb24gZnJvbSBhbiBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBfbGluZXJpemUobmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgX2NoZWNrQ3ljbGljRGVwXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3lcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NoZWNrQ3ljbGljRGVwKG5hbWUsIGl0ZW0pIHtcbiAgICAgIHZhciBpc0N5Y2xpY0RlYiA9IGZhbHNlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc3RvcmUuaW5oZXJpdGFuY2VbaXRlbV0pICYmXG4gICAgICAgIHN0b3JlLmluaGVyaXRhbmNlW2l0ZW1dLmluZGV4T2YobmFtZSkgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgJGxvZy5jeWNsaWNEZXBlbmRlbmN5KG5hbWUpO1xuICAgICAgICBpc0N5Y2xpY0RlYiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNDeWNsaWNEZWI7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0pKSB7XG4gICAgICBwYXJlbnRzID0gc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0uc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGxvZy5taXNzaW5nU2NoZW1hKG5hbWUpO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKF9jaGVja0N5Y2xpY0RlcChuYW1lLCBwYXJlbnRzW2ldKSkge1xuICAgICAgICBwYXJlbnRzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gW25hbWVdLmNvbmNhdChfbWVyZ2UocGFyZW50cy5tYXAoX2xpbmVyaXplKS5jb25jYXQoW3BhcmVudHNdKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmb3IgKG5hbWUgaW4gc3RvcmUuaW5oZXJpdGFuY2UpIHtcbiAgICBjM2xpbmVyaXphdGlvbiA9IF9saW5lcml6ZShuYW1lKTtcbiAgICBhbmNlc3RvcnMgPSBjM2xpbmVyaXphdGlvbi5yZXZlcnNlKCk7XG4gICAgYW5jZXN0b3JzLnBvcCgpO1xuICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoKSB7XG4gICAgICBzdG9yZS5pbmhlcml0YW5jZVRyZWVbbmFtZV0gPSBhbmNlc3RvcnM7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBleHRlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYSB0byBleHRlbmRcbiAqIEByZXR1cm5zIHtKU09OfSBvYmplY3QgZXh0ZW5kZWQgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEV4dGVuZCBhIHNjaGVtYSB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKG5hbWUpIHtcbiAgdmFyIHNvbkV4dGVuZCA9IHt9O1xuICB2YXIgc29uID0gc3RvcmUuc2NoZW1hc1tuYW1lXTtcbiAgdmFyIGFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIGFuY2VzdG9yID0gbnVsbDtcbiAgdmFyIHByb3AgPSAnJztcblxuICBpZiAoYW5jZXN0b3JzKSB7XG4gICAgbGVuZ3RoID0gYW5jZXN0b3JzLmxlbmd0aDtcbiAgICBhbmNlc3RvcnMucmV2ZXJzZSgpO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFuY2VzdG9yID0gc3RvcmUuc2NoZW1hc1thbmNlc3RvcnNbaV1dO1xuICAgIGZvciAocHJvcCBpbiBhbmNlc3Rvcikge1xuICAgICAgaWYgKHByb3AuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgIHNvbkV4dGVuZFtwcm9wXSA9IGFuY2VzdG9yW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmb3IgKHByb3AgaW4gc29uKSB7XG4gICAgc29uRXh0ZW5kW3Byb3BdID0gc29uW3Byb3BdO1xuICB9XG4gIHJldHVybiBzb25FeHRlbmQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBzb3J0SW5oZXJpdGFuY2VUcmVlXG4gKiBAcmV0dXJucyB7QXJyYXl9IHNvcnRlZCBJbmhlcml0YW5jZVRyZWUgc3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCBzb3J0ZWQgSW5oZXJpdGFuY2VUcmVlIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBzb3J0SW5oZXJpdGFuY2VUcmVlKCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciB0ZW1wID0ge307XG4gIHZhciBrZXlzID0gW107XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG5iQW5jZXN0b3JzID0gMDtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZVRyZWUpIHtcbiAgICBuYkFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVttb2RlbE5hbWVdLmxlbmd0aDtcbiAgICBpZiAodHlwZW9mIHRlbXBbbmJBbmNlc3RvcnNdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGVtcFtuYkFuY2VzdG9yc10gPSBbXTtcbiAgICB9XG4gICAgdGVtcFtuYkFuY2VzdG9yc10ucHVzaChtb2RlbE5hbWUpO1xuICB9XG5cbiAga2V5cyA9IE9iamVjdC5rZXlzKHRlbXApLnNvcnQoKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdGVtcFtpbmRleF0uZm9yRWFjaChmdW5jdGlvbihtb2RlbCkge1xuICAgICAgcmVzdWx0LnB1c2gobW9kZWwpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYXNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQWRkIHRoZSBtb2RlbHNcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVNjaGVtYXMoKSB7XG4gIHZhciBuYW1lID0gJyc7XG5cbiAgZm9yIChuYW1lIGluIHN0b3JlLnNjaGVtYXMpIHtcbiAgICBpZiAoIXN0b3JlLnNjaGVtYXNbbmFtZV0uX2NvcmUpIHtcbiAgICAgICRsb2cuY29tcGlsZVNjaGVtYShuYW1lKTtcbiAgICB9XG5cbiAgICBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV0gPSBleHRlbmQobmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrTW9kZWxzXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgYWxsIHRoZSBtb2RlbHMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGVpciBzY2hlbWFzXG4gKi9cbmZ1bmN0aW9uIGNoZWNrTW9kZWxzKCkge1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgY2xhc3NEZWYgPSBudWxsO1xuICB2YXIgc2NoZW1hID0gJyc7XG5cbiAgZm9yIChuYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIGNsYXNzRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICAgIGlmIChjbGFzc0RlZikge1xuICAgICAgc2NoZW1hID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICAgICAgaWYgKHNjaGVtYSkge1xuICAgICAgICBpZiAoIWNsYXNzRGVmLl9jb3JlKSB7XG4gICAgICAgICAgJGxvZy5jaGVja01vZGVsKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrSW1wKGNsYXNzRGVmLCBzY2hlbWEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5taXNzaW5nSW1wbGVtZW50YXRpb24obmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTdGF0ZXNcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgc3RhdGVzIG9mIGEgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGdldFN0YXRlcygpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIHNjaGVtYSA9IG51bGw7XG4gIHZhciB0eXBlID0gJyc7XG4gIHZhciBzdGF0ZXMgPSBbXTtcbiAgdmFyIGF0dHJpYnV0ZSA9ICcnO1xuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5jb21waWxlZFNjaGVtYXMpIHtcbiAgICBzdGF0ZXMgPSBbXTtcbiAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgaWYgKHNjaGVtYSkge1xuICAgICAgZm9yIChhdHRyaWJ1dGUgaW4gc2NoZW1hKSB7XG4gICAgICAgIHR5cGUgPSBzY2hlbWFbYXR0cmlidXRlXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGF0dHJpYnV0ZS5pbmRleE9mKCdfJykgIT09IDAgJiZcbiAgICAgICAgICBpbnRlcm5hbFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc3RvcmUuc3RhdGVzW25hbWVdID0gc3RhdGVzO1xuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja0ltcFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0RlZiBzY2hlbWEgdG8gdGVzdFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0ltcCBzY2hlbWEgdG8gdmFsaWRhdGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBpdHMgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGNoZWNrSW1wKGNsYXNzRGVmLCBjbGFzc0ltcCkge1xuICB2YXIgcHJvcGVydHkgPSAnJztcbiAgdmFyIHZhbHVlID0gbnVsbDtcblxuICBmb3IgKHByb3BlcnR5IGluIGNsYXNzSW1wKSB7XG4gICAgaWYgKFxuICAgICAgcHJvcGVydHkgIT09IElEICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgcHJvcGVydHkgIT09IERFU0NSSVBUSU9OICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBDTEFTUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENPUkVcbiAgICApIHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NEZWZbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YWx1ZSA9IGNsYXNzRGVmW3Byb3BlcnR5XTtcbiAgICAgICAgaWYgKCFjaGVja1NjaGVtYSh2YWx1ZSwgY2xhc3NJbXBbcHJvcGVydHldKSkge1xuICAgICAgICAgICRsb2cuaW52YWxpZFR5cGVJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgaWYgYWxsIHByb3BlcnRpZXMgYXJlIHRoZXJlXG4gIGZvciAocHJvcGVydHkgaW4gY2xhc3NEZWYpIHtcbiAgICBpZiAoXG4gICAgICBwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gREVTQ1JJUFRJT04gJiZcbiAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ09SRVxuICAgICkge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc0ltcFtwcm9wZXJ0eV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICRsb2cudW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltOQU1FXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja1NjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlIHR5cGUgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIFRlc3QgaWYgYSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICovXG5mdW5jdGlvbiBjaGVja1NjaGVtYSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICBpZiAoaGFzVHlwZSh0eXBlLCAnc3RyaW5nJykgJiYgZGVmYXVsdFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgdHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBjaGVja0N1c3RvbVNjaGVtYVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gVGVzdCBpZiBhIHZhbHVlIGhhcyBjb3JyZWN0IGN1c3RvbSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlTmFtZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIHR5cGVEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoIWhhc1R5cGUodHlwZURlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgaWYgKCFoYXNUeXBlKHZhbHVlLCAndW5kZWZpbmVkJykpIHtcbiAgICAgIGlmICh0eXBlRGVmLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWhhc1R5cGUodHlwZURlZi5zY2hlbWEsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkU2NoZW1hKHZhbHVlW2ldLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuaXNWYWxpZFR5cGUodmFsdWVbaV0sIHR5cGVEZWYudHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkU2NoZW1hKHZhbHVlLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaW5pdERiU3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEluaXQgdGhlIERhdGFiYXNlIHN0dWN0dXJlXG4gKi9cbmZ1bmN0aW9uIGluaXREYlN0cnVjdHVyZSgpIHtcbiAgJGRiLmNvbGxlY3Rpb24oJ19Mb2dnZXInKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19TY2hlbWEnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19Nb2RlbCcpO1xuICAkZGIuY29sbGVjdGlvbignX0dlbmVyYXRlZE1vZGVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfQ2xhc3NJbmZvJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfQmVoYXZpb3InKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19TdGF0ZScpO1xuICAkZGIuY29sbGVjdGlvbignX1R5cGUnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ19NZXNzYWdlJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdfQ2hhbm5lbCcpO1xuICAkZGIuY29sbGVjdGlvbignX0xvZycpO1xufVxuXG4vKipcbiAqIEBtZXRob2QgY3JlYXRlRGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIHRoZSBEYXRhYmFzZSBzdHJ1Y3R1cmUgKGkuZS4gRGF0YWJhc2VDb2xsZWN0aW9uKVxuICovXG5mdW5jdGlvbiBjcmVhdGVEYlN0cnVjdHVyZSgpIHtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxEZWYgPSB7fTtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiAkZGJbbW9kZWxEZWZbTkFNRV1dID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZVxuICAgICkge1xuICAgICAgJGRiLmNvbGxlY3Rpb24obW9kZWxEZWZbTkFNRV0pO1xuXG4gICAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAgICRsb2cuY3JlYXRlQ29sbGVjdGlvbihtb2RlbERlZltOQU1FXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYWxsIHRoZSBjbGFzc2VzIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcygpIHtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbW9kZWxEZWYgPSB7fTtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmIChtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAkY29tcG9uZW50LmNyZWF0ZSh7XG4gICAgICAgIG1vZGVsOiBtb2RlbE5hbWVcbiAgICAgIH0pO1xuICAgICAgaWYgKCFtb2RlbERlZi5fY29yZSkge1xuICAgICAgICAkbG9nLmNyZWF0ZUNsYXNzKG1vZGVsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc0luZm9cbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGFsbCB0aGUgQ2xhc3NJbmZvIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzc0luZm8oKSB7XG4gIHZhciBtb2RlbE5hbWUgPSAnJztcbiAgdmFyIG1vZGVsRGVmID0ge307XG4gIHZhciBuYW1lID0gJyc7XG5cbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBuYW1lID0gbW9kZWxEZWZbTkFNRV0gKyAnSW5mbyc7XG5cbiAgICBpZiAoXG4gICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlICYmXG4gICAgICBleHBvcnRzLmluaGVyaXRGcm9tKG1vZGVsRGVmW05BTUVdLCAnX0NvbXBvbmVudCcpXG4gICAgKSB7XG4gICAgICBpZiAoISRjb21wb25lbnQuZ2V0KG5hbWUpKSB7XG4gICAgICAgICRkYi5fQ2xhc3NJbmZvLmluc2VydCh7XG4gICAgICAgICAgX2lkOiBuYW1lLFxuICAgICAgICAgIHNjaGVtYTogc3RvcmUuY29tcGlsZWRTY2hlbWFzW21vZGVsTmFtZV0sXG4gICAgICAgICAgbW9kZWw6IG1vZGVsRGVmXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGRiLl9DbGFzc0luZm8udXBkYXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9pZDogbmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgX2lkOiBuYW1lLFxuICAgICAgICAgICAgc2NoZW1hOiBzdG9yZS5jb21waWxlZFNjaGVtYXNbbW9kZWxOYW1lXSxcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbERlZlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFJlYWxDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gcmVhbCBuYW1lXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmVhbCBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGdldFJlYWxDbGFzc05hbWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFJlYWxUeXBlTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgdHlwZVxuICovXG5mdW5jdGlvbiBnZXRSZWFsVHlwZU5hbWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2UoJ3snLCAnJylcbiAgICAucmVwbGFjZSgnfScsICcnKVxuICAgIC50cmltKCk7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc0N1c3RvbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIGN1c3RvbSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzQ3VzdG9tVHlwZSh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID1cbiAgICBoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykgJiZcbiAgICBkZWZhdWx0VHlwZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmXG4gICAgIWV4cG9ydHMuaXNDbGFzc05hbWUodmFsdWUpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc1R5cGVSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIHJlZmVyZW5jZSBhIHR5cGUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gaXNUeXBlUmVmZXJlbmNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCd7JykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgaXNNb2RlbFBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIElzIHRoZSB2YWx1ZSBhIG1vZGVsIHBhdGhcbiAqL1xuZnVuY3Rpb24gaXNNb2RlbFBhdGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTE7XG59XG5cbi8qKlxuICogQG1ldGhvZCBnZXRSZWFsVHlwZVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gdHlwZSBvZiB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSByZWFsIHR5cGUgb2YgYSB2YWx1ZVxuICovXG5mdW5jdGlvbiBnZXRSZWFsVHlwZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknO1xuICB9IGVsc2Uge1xuICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSAnYW55Jykge1xuICAgIHR5cGUgPSAnYW55JztcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0Q2xhc3NOYW1lXG4gKiBAcGFyYW0ge3R5cGV9IG9iaiBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdFxuICovXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUob2JqKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBpZiAob2JqICYmIG9iai5jb25zdHJ1Y3Rvcikge1xuICAgIHJlc3VsdCA9IG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGVudW1WYWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgdmFsaWQgZW51bSB2YWx1ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bVZhbHVlKHZhbHVlLCBlbnVtVmFsdWUpIHtcbiAgcmV0dXJuIGVudW1WYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG59XG5cbi8qKlxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHBhcmFtIHt0eXBlfSB0eXBlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpcyB2YWx1ZSBoYXMgdHlwZSAndHlwZSdcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHZhbHVlIGhhcyB0aGUgc3BlY2lmaWVkIHR5cGVcbiAqL1xuZnVuY3Rpb24gaGFzVHlwZSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIGRhdGUgPSBudWxsO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICByZXN1bHQgPSAhaXNOYU4oZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW55JzpcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0ID0gdHlwZSA9PT0gdHlwZW9mIHZhbHVlO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBoYXMgZm9yIHR5cGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGhhcyBhIHNwZWNpZmljIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tUeXBlKG5hbWUsIGlkLCB0eXBlKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgdmFyIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tpZF07XG4gIHZhciBhdHRyaWJ1dGVUeXBlID0gJyc7XG5cbiAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbTkFNRV0pIHtcbiAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbY29tcG9uZW50U2NoZW1hW05BTUVdXTtcbiAgfVxuXG4gIGlmIChjb21wb25lbnRTY2hlbWEpIHtcbiAgICBhdHRyaWJ1dGVUeXBlID0gY29tcG9uZW50U2NoZW1hW25hbWUuc3BsaXQoJy4nKVswXV07XG4gICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIHNvdXJjZSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgdGFyZ2V0IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBtZXJnZSBhbHNvIHByaXZhdGUgcHJvcGVydGllc1xuICogQHJldHVybnMge09iamVjdH0gbWVyZ2VkIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIE1lcmdlIHR3byBzY2hlbWFzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHNvdXJjZSwgdGFyZ2V0LCBhbGwpIHtcbiAgdmFyIHByb3BOYW1lID0gJyc7XG4gIHZhciByZXN1bHQgPSB0YXJnZXQ7XG5cbiAgZm9yIChwcm9wTmFtZSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgIHJlc3VsdFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgaW5pdENvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG9iamVjdCB0byBjb25maWd1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIG9iamVjdCB0byBjb25maWd1cmVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNNZXRob2QgaXMgYSBtZXRob2RcbiAqIEByZXR1cm5zIHtPYmplY3R9IGEgY29uZmlndXJhdGlvblxuICogQGRlc2NyaXB0aW9uIEluaXQgYSBjb25maWd1cmF0aW9uIGRlcGVuZGluZyBvZiB0aGUgY29udGV4dFxuICovXG5mdW5jdGlvbiBpbml0Q29uZmlndXJhdGlvbihuYW1lLCB0eXBlLCBpc01ldGhvZCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIHR5cGVEZWYgPSBbXTtcbiAgdmFyIHNjaGVtYURlZiA9IFtdO1xuICB2YXIgZGVmYXVsdFZhbHVlID0gJyc7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBuYW1lID09PSAnPT4nOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZSA9PT0gJ2Jvb2xlYW4nOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlID09PSAnc3RyaW5nJzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUgPT09ICdudW1iZXInOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUgPT09ICdvYmplY3QnOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDoge31cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgJiYgdHlwZSA9PT0gJ2FycmF5JzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlID09PSAnZGF0ZSc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUgPT09ICdhbnknOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6ICdhbnknLFxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvLyBsaW5rIC8gY3VzdG9tIHR5cGVcbiAgICBjYXNlIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJzpcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHt9O1xuXG4gICAgICAvLyBjYXNlIG9mIGVudW1lcmF0aW9uXG4gICAgICB0eXBlRGVmID0gJGRiLl9UeXBlLmZpbmQoe1xuICAgICAgICBuYW1lOiB0eXBlXG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlRGVmLmxlbmd0aCkge1xuICAgICAgICBpZiAodHlwZURlZlswXS52YWx1ZSkge1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHR5cGVEZWZbMF0udmFsdWVbMF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2FzZSBvZiBsaW5rXG4gICAgICBzY2hlbWFEZWYgPSAkZGIuX1NjaGVtYS5maW5kKHtcbiAgICAgICAgX25hbWU6IHR5cGVcbiAgICAgIH0pO1xuICAgICAgaWYgKHNjaGVtYURlZi5sZW5ndGgpIHtcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogZGVmYXVsdFZhbHVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBkZWZhdWx0VmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdib29sZWFuJzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBbJ2Jvb2xlYW4nXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogWydib29sZWFuJ10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdzdHJpbmcnOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6IFsnc3RyaW5nJ10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdudW1iZXInOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnbnVtYmVyJ10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6IFsnbnVtYmVyJ10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdvYmplY3QnOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnb2JqZWN0J10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6IFsnb2JqZWN0J10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdkYXRlJzpcbiAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBbJ2RhdGUnXSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogWydkYXRlJ10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheScgJiYgdHlwZW9mIHR5cGVbMF0gPT09ICdhbnknOlxuICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFsnYW55J10sXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHR5cGU6IFsnYW55J10sXG4gICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdHlwZW9mIHR5cGUgPT09ICdhcnJheSc6XG4gICAgICBpZiAoaXNNZXRob2QpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGNvbXBpbGVDb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge0pTT059IG1vZGVsIGRlZmluaXRpb24gb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBjb21waWxlZCBtb2RlbFxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIGZ1bGwgbW9kZWwgZGVmaW5pdGlvbiBmcm9tIGEgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUNvbmZpZ3VyYXRpb24obW9kZWwpIHtcbiAgdmFyIHByb3BOYW1lID0gJyc7XG4gIHZhciBwYXJhbVByb3BOYW1lID0gJyc7XG4gIHZhciBjb25maWd1cmF0aW9uID0gJyc7XG4gIHZhciBtZXRob2RDb25mID0ge307XG5cbiAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vZGVsKSk7XG5cbiAgZm9yIChwcm9wTmFtZSBpbiBtb2RlbCkge1xuICAgIGlmIChtb2RlbC5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgLy8gcHJvcGVydHkgdHlwZVxuICAgICAgICBjYXNlIHR5cGVvZiBtb2RlbFtwcm9wTmFtZV0gPT09ICdzdHJpbmcnOlxuICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXSA9IGluaXRDb25maWd1cmF0aW9uKHByb3BOYW1lLCBtb2RlbFtwcm9wTmFtZV0sIGZhbHNlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBwcm9wZXJ0eSBjb25maWd1cmF0aW9uXG4gICAgICAgIGNhc2UgdHlwZW9mIG1vZGVsW3Byb3BOYW1lXSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICB0eXBlb2YgbW9kZWxbcHJvcE5hbWVdWyc9PiddID09PSAndW5kZWZpbmVkJzpcbiAgICAgICAgICBtb2RlbFtwcm9wTmFtZV0gPSBtZXJnZShcbiAgICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXSxcbiAgICAgICAgICAgIGluaXRDb25maWd1cmF0aW9uKHByb3BOYW1lLCBtb2RlbFtwcm9wTmFtZV0udHlwZSB8fCAnYW55JywgZmFsc2UpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBtZXRob2QgLyBldmVudFxuICAgICAgICBjYXNlIHR5cGVvZiBtb2RlbFtwcm9wTmFtZV0gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgdHlwZW9mIG1vZGVsW3Byb3BOYW1lXVsnPT4nXSAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgbWV0aG9kQ29uZiA9IHtcbiAgICAgICAgICAgIHBhcmFtczogW10sXG4gICAgICAgICAgICByZXN1bHQ6ICdhbnknXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZvciAocGFyYW1Qcm9wTmFtZSBpbiBtb2RlbFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICAgIC8vIHBhcmFtZXRlciB0eXBlXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmFtUHJvcE5hbWUgPT09ICc9PicpIHtcbiAgICAgICAgICAgICAgICBtZXRob2RDb25mLnJlc3VsdCA9IG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXRob2RDb25mLnBhcmFtcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgaW5pdENvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtUHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBhcmFtZXRlciBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgbWV0aG9kQ29uZi5wYXJhbXMucHVzaChcbiAgICAgICAgICAgICAgICBtZXJnZShtb2RlbFtwcm9wTmFtZV1bcGFyYW1Qcm9wTmFtZV0pLFxuICAgICAgICAgICAgICAgIGluaXRDb25maWd1cmF0aW9uKFxuICAgICAgICAgICAgICAgICAgcGFyYW1Qcm9wTmFtZSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsW3Byb3BOYW1lXVtwYXJhbVByb3BOYW1lXS50eXBlIHx8ICdhbnknLFxuICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbW9kZWxbcHJvcE5hbWVdID0gbWV0aG9kQ29uZjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGVsO1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBtZXRob2Qgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gc2NoZW1hIGRlZmluaXRpb24gb2YgdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG5ldyBzY2hlbWEgdG8gdGhlIG1ldGFtb2RlbFxuICovXG5leHBvcnRzLnNjaGVtYSA9IGZ1bmN0aW9uIHNjaGVtYShuYW1lLCBzY2hlbWEpIHtcbiAgdmFyIGlkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgc2NoZW1hTmFtZSA9ICcnO1xuICB2YXIgbWVyZ2VkU2NoZW1hID0ge307XG4gIHZhciBzY2hlbWFzID0gW107XG5cbiAgaWYgKHR5cGVvZiBzY2hlbWEgPT09ICd1bmRlZmluZWQnIHx8IE9iamVjdC5rZXlzKHNjaGVtYSkubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgc2NoZW1hID0ge307XG4gICAgICBzY2hlbWFbTkFNRV0gPSBuYW1lO1xuICAgICAgc2NoZW1hTmFtZSA9IG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmFtZSkpO1xuICAgICAgc2NoZW1hTmFtZSA9IHNjaGVtYVtOQU1FXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzY2hlbWEpKTtcbiAgICBzY2hlbWFbTkFNRV0gPSBuYW1lO1xuICAgIHNjaGVtYU5hbWUgPSBzY2hlbWFbTkFNRV07XG4gIH1cblxuICBpZiAodHlwZW9mIHNjaGVtYVtJRF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2NoZW1hW0lEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9XG4gIGlmICh0eXBlb2Ygc2NoZW1hW0lOSEVSSVRTXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzY2hlbWFbSU5IRVJJVFNdID0gWydfQ29tcG9uZW50J107XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVtb3ZlRHVwbGljYXRlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGluaGVyaXRzIGxpc3Qgb2YgcGFyZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlIGR1cGxpY2F0ZSBwYXJlbnRzIGluIHRoZSBsaXN0IG9mIHBhcmVudHNcbiAgICovXG4gIGZ1bmN0aW9uIF9yZW1vdmVEdXBsaWNhdGUoaW5oZXJpdHMpIHtcbiAgICB2YXIgZmlsdGVyZWRMaXN0ID0gW107XG4gICAgdmFyIGxpc3QgPSB7fTtcblxuICAgIGluaGVyaXRzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGNsZWFuTmFtZSA9IG5hbWUudHJpbSgpO1xuICAgICAgaWYgKHR5cGVvZiBsaXN0W2NsZWFuTmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxpc3RbY2xlYW5OYW1lXSA9IGNsZWFuTmFtZTtcbiAgICAgICAgZmlsdGVyZWRMaXN0LnB1c2goY2xlYW5OYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZExpc3Q7XG4gIH1cblxuICBzY2hlbWFbSU5IRVJJVFNdID0gX3JlbW92ZUR1cGxpY2F0ZShzY2hlbWFbSU5IRVJJVFNdKTtcblxuICAvLyBjaGVjayBpZiBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICBpZiAoZXhwb3J0cy5pc1ZhbGlkT2JqZWN0KHNjaGVtYSwgc3RvcmUubWV0YWRlZi5zY2hlbWEsIGZhbHNlKSkge1xuICAgIHNjaGVtYXMgPSAkZGIuX1NjaGVtYS5maW5kKHtcbiAgICAgIF9uYW1lOiBzY2hlbWFOYW1lXG4gICAgfSk7XG4gICAgaWYgKHNjaGVtYXMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRTY2hlbWEgPSBtZXJnZShzY2hlbWEsIHNjaGVtYXNbMF0pO1xuICAgICAgJGRiLl9TY2hlbWEudXBkYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgX25hbWU6IHNjaGVtYU5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2VkU2NoZW1hXG4gICAgICApO1xuICAgICAgaWQgPSBzY2hlbWFzWzBdLl9pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gJGRiLl9TY2hlbWEuaW5zZXJ0KHNjaGVtYSk7XG4gICAgICBpZCA9IHJlc3VsdFswXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy5pbnZhbGlkU2NoZW1hKHNjaGVtYVtOQU1FXSk7XG4gIH1cblxuICByZXR1cm4gaWQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge0pTT059IG1vZGVsIGRlZmluaXRpb24gb2YgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgbmV3IG1vZGVsIHRvIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5tb2RlbCA9IGZ1bmN0aW9uIG1vZGVsKG5hbWUsIG1vZGVsKSB7XG4gIHZhciBpZCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGluaGVyaXQgPSAnJztcbiAgdmFyIG1vZGVsTmFtZSA9ICcnO1xuICB2YXIgbWVyZ2VkTW9kZWwgPSB7fTtcbiAgdmFyIG1vZGVscyA9IFtdO1xuXG4gIGlmICh0eXBlb2YgbW9kZWwgPT09ICd1bmRlZmluZWQnIHx8IE9iamVjdC5rZXlzKG1vZGVsKS5sZW5ndGggPT09IDApIHtcbiAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmFtZSkpO1xuICAgIG1vZGVsTmFtZSA9IG1vZGVsW05BTUVdO1xuICB9IGVsc2Uge1xuICAgIG1vZGVsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtb2RlbCkpO1xuICAgIG1vZGVsW05BTUVdID0gbmFtZTtcbiAgICBtb2RlbCA9IGNvbXBpbGVDb25maWd1cmF0aW9uKG1vZGVsKTtcbiAgICBtb2RlbE5hbWUgPSBtb2RlbFtOQU1FXTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbW9kZWxbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgIG1vZGVsW0lEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgbW9kZWwgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICBpZiAoZXhwb3J0cy5pc1ZhbGlkT2JqZWN0KG1vZGVsLCBzdG9yZS5tZXRhZGVmLm1vZGVsLCBmYWxzZSkpIHtcbiAgICBtb2RlbHMgPSAkZGIuX01vZGVsLmZpbmQoe1xuICAgICAgX25hbWU6IG1vZGVsTmFtZVxuICAgIH0pO1xuICAgIGlmIChtb2RlbHMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsLCBtb2RlbHNbMF0pO1xuICAgICAgJGRiLl9Nb2RlbC51cGRhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBfbmFtZTogbW9kZWxOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlZE1vZGVsXG4gICAgICApO1xuICAgICAgaWQgPSBtb2RlbHNbMF0uX2lkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAkZGIuX01vZGVsLmluc2VydChtb2RlbCk7XG4gICAgICBpZCA9IHJlc3VsdFswXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy5pbnZhbGlkTW9kZWwobW9kZWxbTkFNRV0pO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gdHlwZSB0eXBlIHRvIGFkZFxuICogQGRlc2NyaXB0aW9uIEFkZCBhIG5ldyB0eXBlXG4gKi9cbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uIHR5cGUobmFtZSwgdHlwZSkge1xuICB2YXIgaWQgPSBudWxsO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciB0eXBlTmFtZSA9ICcnO1xuICB2YXIgdHlwZURlZiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgdHlwZURlZiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmFtZSkpO1xuICAgIHR5cGVOYW1lID0gdHlwZURlZi5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0eXBlKSk7XG4gICAgICB0eXBlRGVmLnZhbHVlID0gdHlwZTtcbiAgICAgIHR5cGVEZWYubmFtZSA9IG5hbWU7XG4gICAgICB0eXBlRGVmLnR5cGUgPSB0eXBlb2YgdHlwZVswXSB8fCAnYW55JztcbiAgICAgIHR5cGVOYW1lID0gdHlwZURlZi5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0eXBlKSk7XG4gICAgICB0eXBlRGVmLnNjaGVtYSA9IGNvbXBpbGVDb25maWd1cmF0aW9uKHR5cGUpO1xuICAgICAgdHlwZURlZi5uYW1lID0gbmFtZTtcbiAgICAgIHR5cGVEZWYudHlwZSA9ICdvYmplY3QnO1xuICAgICAgdHlwZU5hbWUgPSB0eXBlRGVmLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlRGVmW0lEXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlRGVmW0lEXSA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgdHlwZSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gIGlmIChleHBvcnRzLmlzVmFsaWRPYmplY3QodHlwZURlZiwgc3RvcmUubWV0YWRlZi50eXBlKSkge1xuICAgIHJlc3VsdCA9ICRkYi5fVHlwZS5pbnNlcnQodHlwZURlZik7XG4gICAgaWQgPSByZXN1bHRbMF07XG4gIH0gZWxzZSB7XG4gICAgJGxvZy5pbnZhbGlkVHlwZURlZmluaXRpb24odHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGluaXRcbiAqIEBkZXNjcmlwdGlvbiBJbml0IHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgZXhwb3J0cy5jbGVhcigpO1xuICBzdG9yZS5tZXRhZGVmID0ge1xuICAgIHNjaGVtYToge1xuICAgICAgX2lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBfbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX2luaGVyaXQ6IHtcbiAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogWydfQ29tcG9uZW50J11cbiAgICAgIH0sXG4gICAgICBfY2xhc3M6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2NvcmU6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgX2lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYW5kYXRvcnk6IHRydWVcbiAgICAgIH0sXG4gICAgICBfbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgX2luaGVyaXQ6IHtcbiAgICAgICAgdHlwZTogWydzdHJpbmcnXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIF9jbGFzczoge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfY29yZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBfZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIF9pZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICB9LFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogWydhbnknXSxcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGluaXREYlN0cnVjdHVyZSgpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5XG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7XG4gICAgbWV0YWRlZjoge30sXG4gICAgaW5oZXJpdGFuY2U6IHt9LFxuICAgIGluaGVyaXRhbmNlVHJlZToge30sXG4gICAgc2NoZW1hczoge30sXG4gICAgY29tcGlsZWRTY2hlbWFzOiB7fSxcbiAgICBtb2RlbHM6IHt9LFxuICAgIGdlbmVyYXRlZE1vZGVsczoge30sXG4gICAgc3RhdGVzOiB7fSxcbiAgICB0eXBlOiB7fVxuICB9O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKCkge1xuICAkbG9nLm1vZGVsQ3JlYXRpb25CZWdpbigpO1xuICBsb2FkSW5NZW1vcnkoKTtcbiAgY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCk7XG4gIGNvbXBpbGVTY2hlbWFzKCk7XG4gIGdlbmVyYXRlTW9kZWxzKCk7XG4gIGNoZWNrTW9kZWxzKCk7XG4gIGdldFN0YXRlcygpO1xuICBjcmVhdGVEYlN0cnVjdHVyZSgpO1xuICBjcmVhdGVDbGFzcygpO1xuICBjcmVhdGVDbGFzc0luZm8oKTtcbiAgJGxvZy5tb2RlbENyZWF0aW9uRW5kKCk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYW4gZXZlbnRcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhbiBldmVudFxuICovXG5leHBvcnRzLmlzRXZlbnQgPSBmdW5jdGlvbiBpc0V2ZW50KG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIEVWRU5UX1RZUEUpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgcHJvcGVydHlcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzUHJvcGVydHkobmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgUFJPUEVSVFlfVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNMaW5rXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGxpbmtcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGxpbmtcbiAqL1xuZXhwb3J0cy5pc0xpbmsgPSBmdW5jdGlvbiBpc0xpbmsobmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgTElOS19UWVBFKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBjb2xsZWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaXNDb2xsZWN0aW9uID0gZnVuY3Rpb24gaXNDb2xsZWN0aW9uKG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIENPTExFQ1RJT05fVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNNZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIG1ldGhvZFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaXNNZXRob2QgPSBmdW5jdGlvbiBpc01ldGhvZChuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBNRVRIT0RfVFlQRSk7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNTdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGEgc3RydWN0dXJlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBzdHJ1Y3R1cmVcbiAqL1xuZXhwb3J0cy5pc1N0cnVjdHVyZSA9IGZ1bmN0aW9uIGlzU3RydWN0dXJlKG5hbWUsIGlkKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgdmFyIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2lkXTtcbiAgdmFyIGF0dHJpYnV0ZVR5cGUgPSAnJztcbiAgdmFyIHR5cGUgPSAnJztcblxuICBpZiAobW9kZWxbbmFtZV0pIHtcbiAgICB0eXBlID0gc3RvcmUudHlwZVttb2RlbFtuYW1lXS50eXBlXTtcbiAgfVxuXG4gIGlmICh0eXBlICYmIHR5cGUuc2NoZW1hKSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaXNWYWxpZFN0YXRlID0gZnVuY3Rpb24gaXNWYWxpZFN0YXRlKG5hbWUsIGlkKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgdmFyIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tpZF07XG4gIHZhciBzdGF0ZSA9IHt9O1xuXG4gIGlmIChpc01vZGVsUGF0aChuYW1lKSkge1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuaXNWYWxpZE1vZGVsUGF0aChpZCwgbmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbTkFNRV0pIHtcbiAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tjb21wb25lbnRTY2hlbWFbTkFNRV1dO1xuICAgIH1cbiAgICBzdGF0ZSA9IHN0b3JlLnN0YXRlc1tjb21wb25lbnRTY2hlbWFbTkFNRV1dO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGUpKSB7XG4gICAgICByZXN1bHQgPSBzdGF0ZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICovXG5leHBvcnRzLmlzVmFsaWRUeXBlID0gZnVuY3Rpb24gaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkQ3VzdG9tVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZEN1c3RvbVR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIHR5cGVEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHR5cGVEZWYudmFsdWUpICYmIHR5cGVEZWYudmFsdWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfY2hlY2tDbGFzc05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIGEgY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIF9jaGVja0NsYXNzTmFtZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIHR5cGVSZWYgPSBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVOYW1lKTtcbiAgICB2YXIgY29tcG9uZW50ID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAoaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpKSB7XG4gICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChnZXRDbGFzc05hbWUoY29tcG9uZW50KSAhPT0gdHlwZVJlZiAmJiBjb21wb25lbnQuaWQpIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRDbGFzc1R5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZFR5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgcmVhbFR5cGUgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVOYW1lKTtcbiAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gX2NoZWNrQ2xhc3NOYW1lKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZU5hbWUpOlxuICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZU5hbWVdKSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lLCBzdG9yZS50eXBlW3R5cGVOYW1lXS50eXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDdXN0b21UeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZU5hbWUpOlxuICAgICAgcmVzdWx0ID0gX2NoZWNrQ2xhc3NOYW1lKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWUgdmFsdWUgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U2NoZW1hfSBzY2hlbWEgc2NoZW1hIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlIGVudW0uXG4gKi9cbmV4cG9ydHMuaXNWYWxpZEVudW0gPSBmdW5jdGlvbiBpc1ZhbGlkRW51bSh2YWx1ZSwgc2NoZW1hKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc0luc3RhbmNlT2ZcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEBwcml2YXRlIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIGZvciBjbGFzcyBuYW1lIGNsYXNzTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzSW5zdGFuY2VPZihjb21wb25lbnQsIGNsYXNzTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG5cbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmIChjb21wb25lbnRDbGFzc05hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH1cbiAgICByZXN1bHQgPSBjb21wb25lbnRDbGFzc05hbWUgPT09IGNsYXNzTmFtZTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoZXhwb3J0cy5pc0NsYXNzTmFtZShzY2hlbWEudHlwZSkpIHtcbiAgICByZXN1bHQgPVxuICAgICAgX2lzSW5zdGFuY2VPZigkY29tcG9uZW50LmdldCh2YWx1ZSksIGdldFJlYWxDbGFzc05hbWUoc2NoZW1hLnR5cGUpKSAmJlxuICAgICAgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEudHlwZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsIHNjaGVtYS50eXBlKSAmJiBzY2hlbWEudmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHNjaGVtYS5uYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzVmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gb2JqZWN0XG4gKiBAcGFyYW0ge0pTT059IHNjaGVtYVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggYSBzY2hlbWFcbiAqIGl0IGlzIHN1cHBvc2VkIHRvIHZhbGlkYXRlLlxuICovXG5leHBvcnRzLmlzVmFsaWRTY2hlbWEgPSBmdW5jdGlvbiBpc1ZhbGlkU2NoZW1hKG9iamVjdCwgc2NoZW1hKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJztcbiAgdmFyIGZpZWxkID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBtYW5kYXRvcnkgPSB0cnVlO1xuICB2YXIgdHlwZVNjaGVtYSA9ICcnO1xuICB2YXIgdHlwZVJlZiA9ICcnO1xuICB2YXIgcmVhbFR5cGUgPSAnJztcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZENsYXNzTmFtZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSBjbGFzc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgY2xhc3MgbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDbGFzc05hbWUoKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciBlbnVtVmFsdWUgPSBbXTtcblxuICAgIHR5cGVSZWYgPSBnZXRDbGFzc05hbWUodHlwZVNjaGVtYSk7XG4gICAgdHlwZVJlZiA9IG9iamVjdFt0eXBlUmVmXTtcbiAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVSZWYpKSB7XG4gICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXSkge1xuICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS50eXBlKTtcblxuICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgZW51bVZhbHVlID0gc3RvcmUudHlwZVt0eXBlUmVmXS52YWx1ZTtcbiAgICAgICAgICBpZiAoZW51bVZhbHVlKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW1WYWx1ZShmaWVsZCwgZW51bVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVSZWYgPT09ICdhcnJheScpIHtcbiAgICAgICAgaXNWYWxpZCA9IEFycmF5LmlzQXJyYXkoZmllbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVJlZikpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpIHx8IGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTtcbiAgICAgICAgICAvLyBUT0RPIG1heWJlIGhhdmUgYSBtb3JlIHN0cmljdCB2YWxpZGF0aW9uIHRoYW4ganVzdCBhIHR5cGUgY2hlY2tpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlUmVmLCBmaWVsZCk7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzVmFsaWRUeXBlUmVmZXJlbmNlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZXMgdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlcyB0eXBlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGVSZWZlcmVuY2UoKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciBlbnVtVmFsdWUgPSBbXTtcblxuICAgIHR5cGVSZWYgPSBnZXRSZWFsVHlwZU5hbWUodHlwZVNjaGVtYSk7XG4gICAgdHlwZVJlZiA9IG9iamVjdFt0eXBlUmVmXTtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSB0eXBlb2YgdHlwZVJlZiA9PT0gJ3N0cmluZyc6XG4gICAgICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVJlZikpIHtcbiAgICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXSkge1xuICAgICAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICAgIGVudW1WYWx1ZSA9IHN0b3JlLnR5cGVbdHlwZVJlZl0udmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW1WYWx1ZShmaWVsZCwgZW51bVZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlUmVmID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gQXJyYXkuaXNBcnJheShmaWVsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVSZWYpKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgfHwgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpO1xuICAgICAgICAgICAgICAvLyBUT0RPIG1heWJlIGhhdmUgYSBtb3JlIHN0cmljdCB2YWxpZGF0aW9uIHRoYW4ganVzdCBhIHR5cGUgY2hlY2tpbmdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQXJyYXkuaXNBcnJheSh0eXBlUmVmKTpcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVSZWYsIGZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZFR5cGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSgpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGlmIChpc0N1c3RvbVR5cGUocmVhbFR5cGUpKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShcbiAgICAgICAgICAgICAgICBmaWVsZFtpXSxcbiAgICAgICAgICAgICAgICBzdG9yZS50eXBlW3R5cGVTY2hlbWFbMF1dLnNjaGVtYVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkW2ldLCB0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWFbMF0sIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLy8gdHlwZVxuICBpZiAoaGFzVHlwZShvYmplY3QsICdvYmplY3QnKSkge1xuICAgIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgaWYgKGhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXS50eXBlO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBleHBvcnRzLmlzQ2xhc3NOYW1lKHR5cGVTY2hlbWEpOlxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBfaXNWYWxpZENsYXNzTmFtZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzVHlwZVJlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgX2lzVmFsaWRUeXBlUmVmZXJlbmNlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIF9pc1ZhbGlkVHlwZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFuZGF0b3J5XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgaWYgKFxuICAgICAgICBtYW5kYXRvcnkgPT09IHRydWUgJiZcbiAgICAgICAgKGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSAmJlxuICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdICE9PSB1bmRlZmluZWQpXG4gICAgICApIHtcbiAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHkoZmllbGROYW1lKTtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAkbG9nLmludmFsaWRQcm9wZXJ0eUZvcm1hdChvYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3QgdHJ1ZSBpZiB2YWxpZGF0aW9uIGlzIHN0cmljdFxuICogQHBhcmFtIHtCb29sZWFufSBjbGVhblJlZiB0cnVlIGlmIHdlIHJlbW92ZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlzIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYVxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqL1xuZXhwb3J0cy5pc1ZhbGlkT2JqZWN0ID0gZnVuY3Rpb24gaXNWYWxpZE9iamVjdChcbiAgb2JqZWN0LFxuICBzY2hlbWEsXG4gIHN0cmljdCxcbiAgY2xlYW5SZWZcbikge1xuICB2YXIgZmllbGROYW1lID0gJyc7XG4gIHZhciBmaWVsZCA9IG51bGw7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICB2YXIgbWFuZGF0b3J5ID0gdHJ1ZTtcbiAgdmFyIHR5cGVTY2hlbWEgPSAnJztcbiAgdmFyIHR5cGVSZWYgPSAnJztcbiAgdmFyIHJlYWxUeXBlID0gJyc7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG5cbiAgaWYgKGhhc1R5cGUoc3RyaWN0LCAndW5kZWZpbmVkJykpIHtcbiAgICBzdHJpY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGhhc1R5cGUoY2xlYW5SZWYsICd1bmRlZmluZWQnKSkge1xuICAgIGNsZWFuUmVmID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNWYWxpZEN1c3RvbVR5cGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkIGEgZmllbGRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVTY2hlbWEgYSBzY2hlbWFcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgY3VzdG9tIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSBjdXN0b20gdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDdXN0b21UeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciByZWFsVHlwZSA9ICcnO1xuXG4gICAgcmVhbFR5cGUgPSBzdG9yZS50eXBlW3R5cGVTY2hlbWFdO1xuICAgIGlmIChyZWFsVHlwZSkge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgIWhhc1R5cGUocmVhbFR5cGUuc2NoZW1hLCAndW5kZWZpbmVkJyk6XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGQsIHJlYWxUeXBlLnNjaGVtYSwgc3RyaWN0LCBjbGVhblJlZik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgIWhhc1R5cGUocmVhbFR5cGUudmFsdWUsICd1bmRlZmluZWQnKTpcbiAgICAgICAgICBpc1ZhbGlkID0gZXhwb3J0cy5pc1ZhbGlkRW51bShmaWVsZCwgcmVhbFR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlzVmFsaWQgPSBleHBvcnRzLmlzVmFsaWRUeXBlKGZpZWxkLCByZWFsVHlwZS50eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkQ2xhc3NOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBhIGZpZWxkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlU2NoZW1hIGEgc2NoZW1hXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkQ2xhc3NOYW1lKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciBjb21wID0gbnVsbDtcbiAgICB2YXIgaXNDb21wb25lbnQgPSBmYWxzZTtcblxuICAgIHR5cGVSZWYgPSBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVTY2hlbWEpO1xuICAgIGlmIChmaWVsZCAmJiBmaWVsZC5pZCkge1xuICAgICAgY29tcCA9IGZpZWxkO1xuICAgICAgaXNDb21wb25lbnQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wID0gJGNvbXBvbmVudC5nZXQoZmllbGQpO1xuICAgIH1cblxuICAgIGlmICghaGFzVHlwZShjb21wLCAndW5kZWZpbmVkJykpIHtcbiAgICAgIGlmICghZXhwb3J0cy5pbmhlcml0RnJvbShjb21wLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGVSZWYpKSB7XG4gICAgICAgIC8vIGlmIChnZXRDbGFzc05hbWUoY29tcCkgIT09IHR5cGVSZWYpIHsgdW5jb21tZW50IHRoaXMgbGluZSBmb3IgYSBzdHJpY3QgbW9kZVxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGROYW1lLCBmaWVsZCwgdHlwZVJlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNDb21wb25lbnQgJiYgY2xlYW5SZWYpIHtcbiAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGNvbXAuaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgZm9yIGRlZmF1bHQgdmFsdWUgb2YgYW4gb2JqZWN0ICh7fSBvciBudWxsKVxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpICYmXG4gICAgICAgICAgZmllbGQgIT09IG51bGwgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoID4gMDpcbiAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJykgJiYgZmllbGQgIT09ICcnOlxuICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1ZhbGlkVHlwZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgYSBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVNjaGVtYSBhIHNjaGVtYVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgIHZhciBkYXRlID0gbnVsbDtcbiAgICB2YXIgdHlwZUFycmF5ID0gJyc7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ2FueSc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgdHlwZVNjaGVtYSwgc3RyaWN0LCBjbGVhblJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVTY2hlbWEgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShmaWVsZCk7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSAhaXNOYU4oZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBnZXRSZWFsVHlwZShmaWVsZCkgIT09IHR5cGVTY2hlbWEgJiZcbiAgICAgICAgICAgICAgICBnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhbnknXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICB0eXBlQXJyYXkgPSB0eXBlU2NoZW1hWzBdO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGRbaV0sIHR5cGVBcnJheSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWV4cG9ydHMuaXNDbGFzc05hbWUodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGdldFJlYWxUeXBlKGZpZWxkW2ldKSAhPT0gdHlwZUFycmF5ICYmXG4gICAgICAgICAgICAgICAgICB0eXBlQXJyYXkgIT09ICdhbnknXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlQXJyYXksIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0UmVhbFR5cGUoZmllbGRbaV0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgLy8gQ2FzZSBvZiBhbiBpbXBvcnQgb2YgYSBzeXN0ZW1cbiAgICAgICAgICAgICAgICAgIGlmICgkY29tcG9uZW50LmdldChmaWVsZFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICFleHBvcnRzLmluaGVyaXRGcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlYWxDbGFzc05hbWUodHlwZUFycmF5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENsYXNzTmFtZSgkY29tcG9uZW50LmdldChmaWVsZFtpXSkpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZFtpXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkbG9nLmNhbk5vdFlldFZhbGlkYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIWV4cG9ydHMuaW5oZXJpdEZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSZWFsQ2xhc3NOYW1lKHR5cGVBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0UmVhbENsYXNzTmFtZSh0eXBlQXJyYXkpLFxuICAgICAgICAgICAgICAgICAgICAgIGdldENsYXNzTmFtZShmaWVsZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW2ldID0gZmllbGRbaV0uaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGROYW1lLCBmaWVsZCwgJ2FycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICRsb2cudW5rbm93blR5cGUoZmllbGQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvLyBjaGVjayBpZiBvYmplY3RcbiAgaWYgKCFoYXNUeXBlKG9iamVjdCwgJ29iamVjdCcpKSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkQ29uZmlndXJhdGlvbihvYmplY3QsICdvYmplY3QnKTtcbiAgfVxuXG4gIC8vIHR5cGVcbiAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgIGlmIChcbiAgICAgICFoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykgfHxcbiAgICAgIGZpZWxkTmFtZSA9PT0gJ19jb3JlJyB8fFxuICAgICAgZmllbGROYW1lID09PSAnX2lkJ1xuICAgICkge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZmllbGROYW1lID09PSAnX2NvcmUnOlxuICAgICAgICAgIHR5cGVTY2hlbWEgPSAnYm9vbGVhbic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGROYW1lID09PSAnX2lkJzpcbiAgICAgICAgICB0eXBlU2NoZW1hID0gJ3N0cmluZyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVTY2hlbWEpOlxuICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgX2lzVmFsaWRDdXN0b21UeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGV4cG9ydHMuaXNDbGFzc05hbWUodHlwZVNjaGVtYSk6XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBfaXNWYWxpZENsYXNzTmFtZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIF9pc1ZhbGlkVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hbmRhdG9yeVxuICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICBpZiAob2JqZWN0ICYmIGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSkge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBvYmplY3QgaW4gb3JkZXIgdG8gYmUgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIEBtZXRob2QgcHJlcGFyZU9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gcHJlcGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICovXG5leHBvcnRzLnByZXBhcmVPYmplY3QgPSBmdW5jdGlvbiBwcmVwYXJlT2JqZWN0KG9iamVjdCwgc2NoZW1hKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJztcbiAgdmFyIGZpZWxkID0gbnVsbDtcbiAgdmFyIG1hbmRhdG9yeSA9IHRydWU7XG4gIHZhciBkZWZhdWx0VmFsdWUgPSAnJztcblxuICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNjaGVtYSkpO1xuXG4gIC8vIG1hbmRhdG9yeSAmIGRlZmF1bHQgdmFsdWVcbiAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdDtcbiAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAobWFuZGF0b3J5ID09PSBmYWxzZSAmJiAhaGFzVHlwZShkZWZhdWx0VmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBzY2hlbWFcbiAqIEBkZXNjcmlwdGlvbiBHZXQgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5nZXRTY2hlbWEgPSBmdW5jdGlvbiBnZXRTY2hlbWEobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdKSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgZ2V0TW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybnMge09iamVjdH0gdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gR2V0IGEgbW9kZWxcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbCA9IGZ1bmN0aW9uIGdldE1vZGVsKG5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSkge1xuICAgIHJlc3VsdCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEdldCBhIHR5cGVcbiAqL1xuZXhwb3J0cy5nZXRUeXBlID0gZnVuY3Rpb24gZ2V0VHlwZShuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmIChzdG9yZS50eXBlW25hbWVdICYmIHN0b3JlLnR5cGVbbmFtZV0pIHtcbiAgICByZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLnR5cGVbbmFtZV0pKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldE1vZGVsUGF0aFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggcGF0aCBvZiB0aGUgc3RydWN0dXJlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgdHlwZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHlwZSBvZiBhIG1vZGVsIHBhdGhcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbFBhdGhUeXBlID0gZnVuY3Rpb24gZ2V0TW9kZWxQYXRoVHlwZShtb2RlbCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgdmFyIHN1YnBhdGhzID0gW107XG4gIHZhciBzdWJwYXRoID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBzdHJ1Y3R1cmUgPSAnJztcblxuICBzdWJwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgbGVuZ3RoID0gc3VicGF0aHMubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHN1YnBhdGggPSBzdWJwYXRoc1tpXTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0gZXhwb3J0cy5nZXRNb2RlbChtb2RlbClbc3VicGF0aF0udHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZXN1bHQpKSB7XG4gICAgICAgIHN0cnVjdHVyZSA9IGV4cG9ydHMuZ2V0VHlwZShyZXN1bHQpO1xuICAgICAgICBpZiAoc3RydWN0dXJlLnNjaGVtYSkge1xuICAgICAgICAgIHJlc3VsdCA9IHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0udHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZShtb2RlbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFN0YXRlKG1vZGVsLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc1ZhbGlkTW9kZWxQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHBhdGggb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcGF0aCBpcyB2YWxpZCBmb3IgdGhlIG1vZGVsXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgYSBwYXRoIGlzIHZhbGlkIG1vZGVsIHBhdGhcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkTW9kZWxQYXRoID0gZnVuY3Rpb24gaXNWYWxpZE1vZGVsUGF0aChtb2RlbCwgcGF0aCkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgdmFyIHR5cGUgPSBudWxsO1xuICB2YXIgc3VicGF0aHMgPSBbXTtcbiAgdmFyIHN1YnBhdGggPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHN0cnVjdHVyZSA9ICcnO1xuXG4gIHN1YnBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICBsZW5ndGggPSBzdWJwYXRocy5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc3VicGF0aCA9IHN1YnBhdGhzW2ldO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICB0eXBlID0gZXhwb3J0cy5nZXRNb2RlbChtb2RlbClbc3VicGF0aF0udHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlKSkge1xuICAgICAgICBzdHJ1Y3R1cmUgPSBleHBvcnRzLmdldFR5cGUodHlwZSk7XG4gICAgICAgIGlmIChzdHJ1Y3R1cmUuc2NoZW1hICYmIHN0cnVjdHVyZS5zY2hlbWFbc3VicGF0aF0pIHtcbiAgICAgICAgICB0eXBlID0gc3RydWN0dXJlLnNjaGVtYVtzdWJwYXRoXS50eXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgbWV0YWRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbFxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuZ2V0TWV0YURlZiA9IGZ1bmN0aW9uIGdldE1ldGFEZWYoKSB7XG4gIHZhciByZXN1bHQgPSBzdG9yZS5tZXRhZGVmLnNjaGVtYTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm5zIHtBcnJheX0gaWQgaWQgb2YgdGhlIHBhcmVudHNcbiAqIEBkZXNjcmlwdGlvbiBHZXQgcGFyZW50cyBvZiBhIHNjaGVtYSBpZiBhbnlcbiAqL1xuZXhwb3J0cy5nZXRQYXJlbnRzID0gZnVuY3Rpb24gZ2V0UGFyZW50cyhpZCkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKCFzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdKSB7XG4gICAgcmVzdWx0ID0gW107XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5zbGljZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqL1xuZXhwb3J0cy5pbmhlcml0RnJvbSA9IGZ1bmN0aW9uIGluaGVyaXRGcm9tKG5hbWUsIHBhcmVudE5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZWFyY2hQYXJlbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYW5jZXN0b3JOYW1lIG9mIHRoZSBwYXJlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICAgKi9cbiAgZnVuY3Rpb24gX3NlYXJjaFBhcmVudChjbGFzc05hbWUsIGFuY2VzdG9yTmFtZSkge1xuICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2U7XG4gICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKGNsYXNzTmFtZSk7XG4gICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAocGFyZW50cy5pbmRleE9mKGFuY2VzdG9yTmFtZSkgIT09IC0xKSB7XG4gICAgICAgIGlzQW5jZXN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXNBbmNlc3RvciA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgYW5jZXN0b3JOYW1lKTtcbiAgICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0FuY2VzdG9yO1xuICB9XG5cbiAgaWYgKG5hbWUgIT09IHBhcmVudE5hbWUpIHtcbiAgICBwYXJlbnRzID0gZXhwb3J0cy5nZXRQYXJlbnRzKG5hbWUpO1xuICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAocGFyZW50cy5pbmRleE9mKHBhcmVudE5hbWUpICE9PSAtMSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBwYXJlbnROYW1lKTtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjbGFzcyBuYW1lXG4gKiBAZGVzY3JpcHRpb24gSXMgdGhlIHZhbHVlIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmlzQ2xhc3NOYW1lID0gZnVuY3Rpb24gaXNDbGFzc05hbWUodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKTtcblxuICBpZiAocmVzdWx0KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHN0b3JlLmdlbmVyYXRlZE1vZGVscykubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0ID0gdHlwZW9mIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1t2YWx1ZV0gIT09ICd1bmRlZmluZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE4IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHJlcXVpcmVzIGRiXG4gKiBAcmVxdWlyZXMgY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgc3lzdGVtXG4gKiBAcmVxdWlyZXMgaGVscGVyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIFN5c3RlbSBSdW50aW1lLlxuICogSXQgaW5pdHMgU3lzdGVtIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBsb2FkcyBTeXN0ZW0gUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJHN5c3RlbSA9IHJlcXVpcmUoJy4uL2J1aWxkL3N5c3RlbS9zeXN0ZW0uanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuLyogUHJpdmF0ZSBQcm9wZXJ0eSAqL1xuXG52YXIgc3l0ZW1JZCA9ICcnO1xudmFyIHN5c3RlbSA9ICcnO1xudmFyIGNoYW5uZWwgPSBudWxsO1xuXG4vLyBwb2x5ZmlsbFxuJGhlbHBlci5wb2x5ZmlsbCgpO1xuXG4vLyBpbml0IE1ldGFtb2RlbFxuJG1ldGFtb2RlbC5pbml0KCk7XG5cbi8vIGluaXQgcnVudGltZSBmcm9tIGEgc3lzdGVtXG5zeXRlbUlkID0gJGRiLmltcG9ydFN5c3RlbSgkc3lzdGVtLnN5c3RlbSk7XG5cbnN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5dGVtSWQpO1xuY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XG5cbnN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XG5jaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3l0ZW1JZCk7XG5zeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XG5jaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXRlbUlkKTtcbnN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcbmNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoc3l0ZW1JZCk7XG5cbnN5c3RlbS5zdGFydCgpO1xuXG5zeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xuXG4vKiBQdWJsaWMgcHJvcGVydHkgKi9cblxuLyoqXG4gKiBAcHJvcGVydHkgcnVudGltZVxuICogQHR5cGUgX1J1bnRpbWVcbiAqIEBkZXNjcmlwdGlvbiBfUnVudGltZSBpbnN0YW5jZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9ICRjb21wb25lbnQuZ2V0KCdydW50aW1lJyk7XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxOCBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHN0YXRlXG4gKiBAcmVxdWlyZXMgZGJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZWNvbXBvbmVudHNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG52YXIgc3RvcmUgPSB7fTtcblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZCBvbiB3aGljaCBjaGFuZ2UgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHN0YXRlXG4gKiBAZGVzY3JpcHRpb24gU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnNldCA9IGZ1bmN0aW9uIHNldChpZCwgc3RhdGUsIHZhbHVlKSB7XG4gIHN0b3JlW2lkXSA9IHtcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG4gICRkYi5zdG9yZS5fU3RhdGVbaWRdID0ge1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldChpZCkge1xuICByZXR1cm4gc3RvcmVbaWRdO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFsbCB0aGUgc3RhdGVzIG9mIHRoZSBjb21wb25lbnRzIGZyb20gdGhlIG1lbW9yeVxuICovXG5leHBvcnRzLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTggRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSB3b3JrZmxvd1xuICogQHJlcXVpcmVzIG1ldGFtb2RlbFxuICogQHJlcXVpcmVzIGNvbXBvbmVudFxuICogQHJlcXVpcmVzIGJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgc3RhdGVcbiAqIEByZXF1aXJlcyBoZWxwZXJcbiAqIEByZXF1aXJlcyBsb2dcbiAqIEByZXF1aXJlcyBkYlxuICogQGRlc2NyaXB0aW9uIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIFN5c3RlbSBSdW50aW1lLlxuICogSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDpcbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LFxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmRcbiAqIC0gdGhlIG91dHB1dCBvZiBhbGwgYWN0aW9ucyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbC5cbiAqXG4gKiBJZiBhbiBlcnJvciBvY2N1cnMsIHRoZSB3b3JrZmxvdyB3aWxsIGNhbGwgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgYW5kIHJ1bnRpbWUuXG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG4vKipcbiAqIEBjbGFzcyBSdW50aW1lRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBvZiB0aGUgZXJyb3JcbiAqIEBkZXNjcmlwdGlvbiBUaGUgUnVudGltZUVycm9yIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFJ1bnRpbWVFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubmFtZSA9ICdSdW50aW1lRXJyb3InO1xufVxuUnVudGltZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuUnVudGltZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJ1bnRpbWVFcnJvcjtcblxuLyoqXG4gKiBAbWV0aG9kIGlzTW9kZWxQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgdmFsdWUgYSBtb2RlbCBwYXRoXG4gKi9cbmZ1bmN0aW9uIGlzTW9kZWxQYXRoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xO1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBuYW1lcyBvZiBhbGwgcGFyYW1ldGVycyBvZiB0aGUgbWV0aG9kIGZvciB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgbmFtZXMgb2YgdGhlIHBhcmFtZXRlciBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc01vZGVsUGF0aChtZXRob2ROYW1lKSkge1xuICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm5zIHtBcnJheX0gbnVtYmVyIG9mIHBhcmFtZXRlcnMgbWluIGFuZCBtYXggZm9yIHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBudW1iZXIgb2YgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU51bWJlcihpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbDtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBtaW4gPSAwO1xuICB2YXIgbWF4ID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2YgcGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIG1pbiA9IG1pbiArIDE7XG4gICAgICAgIH1cbiAgICAgICAgbWF4ID0gbWF4ICsgMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWluKTtcbiAgICByZXN1bHQucHVzaChtYXgpO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIHNldERlZmF1bHRWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIGFyZ3VtZW50c1xuICogQHJldHVybnMge0FycmF5fSBhcmd1bWVudHMgd2l0aCBkZWZhdWx0IHZhbHVlc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBzZXREZWZhdWx0VmFsdWUoaWQsIG1ldGhvZE5hbWUsIGFyZ3MpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGw7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuXG4gIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSBmYWxzZSAmJiB0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0uZGVmYXVsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgZ2V0UmV0dXJuVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgdHlwZSByZXR1cm5lZCBieSB0aGUgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHlwZSByZXR1cm5lZCBieSBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRSZXR1cm5UeXBlKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciByZXN1bHRUeXBlID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgcmVzdWx0VHlwZSA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdLnJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAocmVzdWx0VHlwZSkge1xuICAgIHJlc3VsdCA9IHJlc3VsdFR5cGU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldFBhcmFtVHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybnMge0FycmF5fSB0aGUgdHlwZXMgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gR2V0IGFsbCB0aGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBnZXRQYXJhbVR5cGVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBtZXRob2QgPSBudWxsO1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBpID0gMDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS50eXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBtZXRob2QgY2hlY2tSZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBvdXRwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tSZXN1bHQocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsO1xuICB2YXIgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8ICcnO1xuICB2YXIgbWV0aG9kUmVzdWx0ID0gbnVsbDtcbiAgdmFyIHR5cGVvZk1ldGhvZFJlc3VsdCA9ICcnO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciByZXR1cm5UeXBlID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMubWV0aG9kUmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1ldGhvZFJlc3VsdCA9IHBhcmFtcy5tZXRob2RSZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kUmVzdWx0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICByZXR1cm5UeXBlID0gZ2V0UmV0dXJuVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICBpZiAoISRtZXRhbW9kZWwuaXNWYWxpZFR5cGUobWV0aG9kUmVzdWx0LCByZXR1cm5UeXBlKSkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoXG4gICAgICBjb21wb25lbnQuaWQoKSxcbiAgICAgIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgbWV0aG9kTmFtZSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHJldHVyblR5cGUpLFxuICAgICAgQXJyYXkuaXNBcnJheShtZXRob2RSZXN1bHQpID8gJ2FycmF5JyA6IHR5cGVvZiBtZXRob2RSZXN1bHRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQgYSBTeXN0ZW0gUnVudGltZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgdHJ1ZSBpZiB0aGUgc3RhdGUgaXMgYW4gZXZlbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gbGlzdCBvZiB0aGUgYWN0aW9uc1xuICogQHByaXZhdGVcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIGFjdGlvbnMgb2YgdGhlIHNwZWNpZmllZCBzdGF0ZVxuICovXG5mdW5jdGlvbiBnZXRBY3Rpb25zKGNvbXBvbmVudCwgbmFtZSwgaXNFdmVudCkge1xuICB2YXIgYWN0aW9uID0gJGJlaGF2aW9yLmdldEFjdGlvbnMoY29tcG9uZW50LmlkKCksIG5hbWUpO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcGFyZW50ID0gbnVsbDtcblxuICBpZiAoIWFjdGlvbi5sZW5ndGggfHwgaXNFdmVudCkge1xuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChcbiAgICAgICAgZ2V0QWN0aW9ucygkY29tcG9uZW50LmdldChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSksIG5hbWUsIGlzRXZlbnQpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRzID0gJG1ldGFtb2RlbC5nZXRQYXJlbnRzKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmVudHNbaV0pO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKHBhcmVudCwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRsb2cudW5rbm93bkNvbXBvbmVudChwYXJlbnRzW2ldLCBjb21wb25lbnQubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgYWN0aW9uLnJldmVyc2UoKTtcbiAgfVxuXG4gIHJldHVybiBhY3Rpb247XG59XG5cbi8qKlxuICogQG1ldGhvZCBhY3Rpb25cbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCBpcyB0aGUgYWN0aW9uIGEgY2FsbGJhY2sgb2YgYW4gZXZlbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICogQGRlc2NyaXB0aW9uIEV4ZWN1dGUgYW4gYWN0aW9uIGFuZCBtYWtlIHNvbWUgRGVwZW5kZW5jeSBJbmplY3Rpb24gaWYgaXQgaXMgYSBjb3JlIGFjdGlvblxuICovXG5mdW5jdGlvbiBhY3Rpb24oY29tcG9uZW50LCBzdGF0ZSwgYWN0aW9uLCBwYXJhbXMsIGlzRXZlbnQpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGw7XG4gIHZhciBpbmplY3RlZFBhcmFtcyA9IFtdO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbmd0aCA9IDA7XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBpZiAoXG4gICAgISRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSAmJlxuICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSAmJlxuICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKVxuICApIHtcbiAgICBwYXJhbXMgPSBzZXREZWZhdWx0VmFsdWUoY29tcG9uZW50Q2xhc3NOYW1lLCBzdGF0ZSwgcGFyYW1zKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2gocGFyYW1zW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnVzZUNvcmVBUEkpIHtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGNvbXBvbmVudCk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRkYik7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRtZXRhbW9kZWwpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChleHBvcnRzKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGJlaGF2aW9yKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJHN0YXRlKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGxvZyk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRoZWxwZXIpO1xuICAgIH1cblxuICAgIGlmICgkaGVscGVyLmlzT25Ob2RlKCkpIHtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGhlbHBlci5nZXRSZXF1aXJlKCkpO1xuICAgIH1cblxuICAgIGlmIChpc0V2ZW50KSB7XG4gICAgICBpZiAoYWN0aW9uLmNvbnRleHQpIHtcbiAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICBhY3Rpb24uYWN0aW9uLmJpbmQuYXBwbHkoXG4gICAgICAgICAgICBhY3Rpb24uYWN0aW9uLFxuICAgICAgICAgICAgW2FjdGlvbi5jb250ZXh0XS5jb25jYXQoaW5qZWN0ZWRQYXJhbXMpXG4gICAgICAgICAgKSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgIGFjdGlvbi5hY3Rpb24uYmluZC5hcHBseShcbiAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24sXG4gICAgICAgICAgICBbY29tcG9uZW50XS5jb25jYXQoaW5qZWN0ZWRQYXJhbXMpXG4gICAgICAgICAgKSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhY3Rpb24uY29udGV4dCkge1xuICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGFjdGlvbi5jb250ZXh0LCBpbmplY3RlZFBhcmFtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgaW5qZWN0ZWRQYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgUnVudGltZUVycm9yKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3IEZ1bmN0aW9uKCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdydW50aW1lOiBjYW4gbm90IGV4ZWN1dGUgbmV3IEZ1bmN0aW9uKCkgaW5zdHJ1Y3Rpb24gaW4gdGhlIGN1cnJlbnQgY29udGV4dC4nXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lcnJvcikge1xuICAgICAgICAgIGNvbXBvbmVudC5lcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgK1xuICAgICAgICAgICAgICBzdGF0ZSArXG4gICAgICAgICAgICAgIFwiJyBvbiBjb21wb25lbnQgJ1wiICtcbiAgICAgICAgICAgICAgY29tcG9uZW50LmlkKCkgK1xuICAgICAgICAgICAgICBcIidcIixcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRoZWxwZXIuZ2V0UnVudGltZSgpKSB7XG4gICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkuZXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICtcbiAgICAgICAgICAgICAgc3RhdGUgK1xuICAgICAgICAgICAgICBcIicgb24gY29tcG9uZW50ICdcIiArXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5pZCgpICtcbiAgICAgICAgICAgICAgXCInXCIsXG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICRsb2cuYWN0aW9uSW52b2tlRXJyb3IoXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgZS5tZXNzYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLyoqXG4gKiBAbWV0aG9kIHZhbGlkUGFyYW1OdW1iZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiBhcHBsaWVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gYWN0aW9uXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYWN0aW9uIGlzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyc1xuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGFuIGFjdGlvbiBoYXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0cy52YWxpZFBhcmFtTnVtYmVycyA9IGZ1bmN0aW9uIHZhbGlkUGFyYW1OdW1iZXJzKFxuICBjbGFzc05hbWUsXG4gIHN0YXRlLFxuICBhY3Rpb25cbikge1xuICB2YXIgZnVuYyA9ICcnO1xuICB2YXIgYmVnaW5Cb2R5ID0gLTE7XG4gIHZhciBoZWFkZXIgPSAnJztcbiAgdmFyIGZ1bmNQYXJhbXMgPSAnJztcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgcGFyYW1OdW1iZXIgPSAwO1xuICB2YXIgbW9kZWxOdW1iZXJQYXJhbSA9IFtdO1xuICB2YXIgaXNQcm9wZXJ0eSA9IGZhbHNlO1xuICB2YXIgaXNMaW5rID0gZmFsc2U7XG4gIHZhciBpc0NvbGxlY3Rpb24gPSBmYWxzZTtcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gIC8vIGNoZWNrIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAgZnVuYyA9IGFjdGlvbi50b1N0cmluZygpO1xuICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgaGVhZGVyID0gaGVhZGVyLnJlcGxhY2UoJz0+JywgJycpO1xuXG4gIGlmIChoZWFkZXIuaW5kZXhPZignKCcpICE9PSAtMSkge1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXJcbiAgICAgIC5zcGxpdCgnKCcpWzFdXG4gICAgICAucmVwbGFjZSgnKScsICcnKVxuICAgICAgLnRyaW0oKTtcbiAgfSBlbHNlIHtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnRyaW0oKTtcbiAgfVxuXG4gIHBhcmFtcyA9IGZ1bmNQYXJhbXMuc3BsaXQoJywnKTtcbiAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICBwYXJhbXMgPSBbXTtcbiAgfVxuICBwYXJhbU51bWJlciA9IHBhcmFtcy5sZW5ndGg7XG5cbiAgLy8gZ2V0IHRoZSBudW1iZXIgbWluIGFuZCBtYXggb2YgdmFsaWQgcGFyYW1ldGVyc1xuICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc05hbWUpO1xuICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzTmFtZSk7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0NvbGxlY3Rpb246XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gWzIsIDJdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWxQYXRoVHlwZShjbGFzc05hbWUsIHN0YXRlKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gWzIsIDJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaXNMaW5rOlxuICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gZ2V0UGFyYW1OdW1iZXIoY2xhc3NOYW1lLCBzdGF0ZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIGNvbXBhcmVcbiAgaWYgKFxuICAgIG1vZGVsTnVtYmVyUGFyYW1bMF0gPD0gcGFyYW1OdW1iZXIgJiZcbiAgICBwYXJhbU51bWJlciA8PSBtb2RlbE51bWJlclBhcmFtWzFdXG4gICkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb24gb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbFxuICogQGRlc2NyaXB0aW9uIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgY2FsbGluZyB0aGUgYWN0aW9uXG4gKi9cbmV4cG9ydHMuY2hlY2tQYXJhbXMgPSBmdW5jdGlvbiBjaGVja1BhcmFtcyhwYXJhbXMpIHtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGw7XG4gIHZhciBtZXRob2ROYW1lID0gcGFyYW1zLm1ldGhvZE5hbWUgfHwgJyc7XG4gIHZhciBhcmdzID0gcGFyYW1zLmFyZ3MgfHwgJyc7XG4gIHZhciBwYXJhbXNOYW1lID0gW107XG4gIHZhciBwYXJhbXNUeXBlID0gW107XG4gIHZhciBwYXJhbXNOdW1iZXIgPSBbXTtcbiAgdmFyIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuICB2YXIgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHBhcmFtID0gbnVsbDtcbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuXG4gIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNDb2xsZWN0aW9uOlxuICAgICAgaWYgKGFyZ3MgJiYgYXJnc1sxXSAmJiBhcmdzWzFdID09PSAncmVzZXQnKSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXG4gICAgICAgICAgWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlWzBdXSxcbiAgICAgICAgICAnc3RyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtcbiAgICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZVswXSxcbiAgICAgICAgICAnc3RyaW5nJ1xuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcGFyYW1zTnVtYmVyID0gWzIsIDJdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgaWYgKGlzTW9kZWxQYXRoKG1ldGhvZE5hbWUpKSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXG4gICAgICAgICAgJG1ldGFtb2RlbC5nZXRNb2RlbFBhdGhUeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSlcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1R5cGUgPSBbJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVdO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAkbWV0YW1vZGVsLmdldE1vZGVsUGF0aFR5cGUoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKSA9PT0gJ2FycmF5J1xuICAgICAgKSB7XG4gICAgICAgIGlmIChhcmdzICYmIGFyZ3NbMV0gJiYgYXJnc1sxXSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAgIHBhcmFtc1R5cGUgPSBbWydhbnknXSwgJ3N0cmluZyddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1R5cGUgPSBbJ2FueScsICdzdHJpbmcnXTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMiwgMl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIGlzTGluazpcbiAgICAgIHBhcmFtc1R5cGUgPSBbJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVdO1xuICAgICAgcGFyYW1zTnVtYmVyID0gWzEsIDFdO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHBhcmFtc1R5cGUgPSBnZXRQYXJhbVR5cGVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICBwYXJhbXNOdW1iZXIgPSBnZXRQYXJhbU51bWJlcihjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICAvLyBjYXNlIG9mIG9iamVjdFxuICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZW5ndGggPSAxO1xuICB9XG5cbiAgaWYgKGxlbmd0aCA8IHBhcmFtc051bWJlclswXSB8fCBwYXJhbXNOdW1iZXJbMV0gPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihcbiAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICBtZXRob2ROYW1lXG4gICAgKTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHBhcmFtID0gYXJnc1tpXTtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGkgPCBwYXJhbXNOdW1iZXJbMF0pIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKFxuICAgICAgICAgIGNvbXBvbmVudC5pZCgpLFxuICAgICAgICAgIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgIG1ldGhvZE5hbWVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoISRtZXRhbW9kZWwuaXNWYWxpZFR5cGUocGFyYW0sIHBhcmFtc1R5cGVbaV0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRQYXJhbVR5cGUoXG4gICAgICAgICAgY29tcG9uZW50LmlkKCksXG4gICAgICAgICAgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgbWV0aG9kTmFtZSxcbiAgICAgICAgICBwYXJhbXNOYW1lW2ldXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBiZWhhdmlvclxuICogQHBhcmFtIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQGRlc2NyaXB0aW9uIEV4ZWN1dGUgYSBiZWhhdmlvciAob25seSBldmVudHMpXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3IgPSBmdW5jdGlvbiBiZWhhdmlvcihiZWhhdmlvcklkLCBwYXJhbXMpIHtcbiAgdmFyIGlzRXZlbnQgPSBmYWxzZTtcbiAgdmFyIGlzUHJvcGVydHkgPSBmYWxzZTtcbiAgdmFyIGlzTGluayA9IGZhbHNlO1xuICB2YXIgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG4gIHZhciBiZWhhdmlvcnMgPSBbXTtcbiAgdmFyIGJlaGF2aW9yID0gbnVsbDtcbiAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcbiAgdmFyIGFjdGlvbkZyb21NZW1vcnkgPSBudWxsO1xuXG4gIGJlaGF2aW9ycyA9ICRkYi5fQmVoYXZpb3IuZmluZCh7XG4gICAgX2lkOiBiZWhhdmlvcklkXG4gIH0pO1xuXG4gIGFjdGlvbkZyb21NZW1vcnkgPSAkYmVoYXZpb3IuZ2V0KGJlaGF2aW9ySWQpO1xuXG4gIGlmIChiZWhhdmlvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgYmVoYXZpb3IgPSBiZWhhdmlvcnNbMF07XG5cbiAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChiZWhhdmlvci5jb21wb25lbnQpO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgfVxuXG4gICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oXG4gICAgICAgIGJlaGF2aW9yLnN0YXRlLFxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWVcbiAgICAgICk7XG5cbiAgICAgIGlmIChpc0V2ZW50IHx8IGlzUHJvcGVydHkgfHwgaXNDb2xsZWN0aW9uIHx8IGlzTGluaykge1xuICAgICAgICBhY3Rpb24oXG4gICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgIGJlaGF2aW9yLnN0YXRlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVzZUNvcmVBUEk6IGJlaGF2aW9yLnVzZUNvcmVBUEksXG4gICAgICAgICAgICBjb250ZXh0OiBiZWhhdmlvci5jb250ZXh0LFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25Gcm9tTWVtb3J5XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlXG4gKiB7U3RyaW5nfSBjb21wb25lbnQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKiBAZGVzY3JpcHRpb24gQ2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIFdvcmtsb3c6XG4gKlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkXG4gKiAxLiBDaGVjayBpZiB0aGUgc3RhdGUgaXMgYSBtZXRob2QsIGEgcHJvcGVydHkgb3IgYW4gZXZlbnRcbiAqIDIuIFNlYXJjaCBpZiB0aGVyZSBpcyBhIGJlaGF2aW9yIHdpdGggYWN0aW9ucyBmb3IgdGhlIG5ldyBzdGF0ZVxuICogMy4gSWYgc28sIGdldCB0aGUgYWN0aW9uKHMpXG4gKiA0LiBDaGVjayBpZiB0aGUgaW5wdXRzIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1ldGFtb2RlbFxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpXG4gKiA2LiBJZiBhIG1ldGhvZCwgY2hlY2sgaWYgdGhlIG91dHB1dCBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIDcuIElmIGFsbCBpcyBvaywgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZFxuICogOC4gUmV0dXJuIHRoZSByZXN1bHRcbiAqL1xuZXhwb3J0cy5zdGF0ZSA9IGZ1bmN0aW9uIHN0YXRlKHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gIHBhcmFtcy5jb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8ICcnO1xuICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG4gIHBhcmFtcy5kYXRhID0gcGFyYW1zLmRhdGEgfHwgW107XG4gIHBhcmFtcy5jb250ZXh0ID0gcGFyYW1zLmNvbnRleHQgfHwgbnVsbDtcblxuICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuICB2YXIgYWN0aW9ucyA9IFtdO1xuICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgY29tcG9uZW50Q2xhc3NOYW1lID0gZmFsc2U7XG4gIHZhciBpc1Byb3BlcnR5ID0gZmFsc2U7XG4gIHZhciBpc0xpbmsgPSBmYWxzZTtcbiAgdmFyIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuICB2YXIgaXNFdmVudCA9IGZhbHNlO1xuXG4gIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG5cbiAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuc3RhdGUgPT09ICdkZXN0cm95Jykge1xuICAgICRsb2cuaW52YWxpZFVzZU9mQ29tcG9uZW50KHBhcmFtcy5jb21wb25lbnQpO1xuICB9XG5cbiAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG4gICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBhY3Rpb25zID0gZ2V0QWN0aW9ucyhjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgaXNFdmVudCk7XG4gIH1cblxuICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBleHBvcnRzLmNoZWNrUGFyYW1zKHtcbiAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgIG1ldGhvZE5hbWU6IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgYXJnczogcGFyYW1zLmRhdGFcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoIWlzRXZlbnQgJiYgIWlzUHJvcGVydHkgJiYgIWlzTGluayAmJiAhaXNDb2xsZWN0aW9uKSB7XG4gICAgICAgIHJlc3VsdCA9IGFjdGlvbihcbiAgICAgICAgICBwYXJhbXMuY29udGV4dCB8fCBjb21wb25lbnQsXG4gICAgICAgICAgcGFyYW1zLnN0YXRlLFxuICAgICAgICAgIGFjdGlvbnNbMF0sXG4gICAgICAgICAgcGFyYW1zLmRhdGEsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICBjaGVja1Jlc3VsdCh7XG4gICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgbWV0aG9kTmFtZTogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgIG1ldGhvZFJlc3VsdDogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFjdGlvbihcbiAgICAgICAgICAgIHBhcmFtcy5jb250ZXh0IHx8IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvbnNbaV0sXG4gICAgICAgICAgICBwYXJhbXMuZGF0YSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNvbXBvbmVudCAmJiAoaXNFdmVudCB8fCBpc1Byb3BlcnR5IHx8IGlzTGluayB8fCBpc0NvbGxlY3Rpb24pKSB7XG4gICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUsIHBhcmFtcy5kYXRhKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIHtCb29sZWFufSBlcnJvciB0cnVlIGlmIHRoZSBzdG9wIG9mIHRoZSB3b3JrZmxvdyBpcyBkdWUgdG8gYW4gZXJyb3IgKGRlZmF1bHQgZmFsc2UpXG4gKiB7U3RyaW5nfSBtZXNzYWdlIGVycm9yIG1lc3NhZ2UgdG8gbG9nIChkZWZhdWx0ICcnKVxuICogQGRlc2NyaXB0aW9uIFN0b3AgdGhlIHdvcmtmbG93IGVuZ2luZVxuICovXG5leHBvcnRzLnN0b3AgPSBmdW5jdGlvbiBzdG9wKHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMuZXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcGFyYW1zLmVycm9yID0gZmFsc2U7XG4gIH1cbiAgcGFyYW1zLm1lc3NhZ2UgPSBwYXJhbXMubWVzc2FnZSB8fCAnJztcblxuICBleHBvcnRzLnN0YXRlID0gZnVuY3Rpb24gc3RhdGUoKSB7fTtcblxuICBpZiAocGFyYW1zLmVycm9yKSB7XG4gICAgaWYgKHBhcmFtcy5tZXNzYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKFxuICAgICAgICAncnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgJyArIHBhcmFtcy5tZXNzYWdlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKFxuICAgICAgICAncnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2Ugb2YgYW4gdW5rbm93biBlcnJvcidcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbXMubWVzc2FnZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ3J1bnRpbWU6IHJ1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlICcgKyBwYXJhbXMubWVzc2FnZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigncnVudGltZTogcnVudGltZSBoYXMgYmVlbiBzdG9wcGVkJyk7XG4gICAgfVxuICB9XG59O1xuIl19
