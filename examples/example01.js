/* 
 * example01
 * 
 * @description Example 01
 * 
 * @system example01
 * @version 0.0.1
 * @requires system-runtime
 * 
 */

// uncomment this line if running this script on node.js
// let runtime = require('system-runtime');

// uncomment this line if running this script on node.js 
// and wanting to debug your system
// runtime.install('node_modules/system-runtime/extensions/mode-admin-server.json');

runtime.require('logger').level('info');
/**
 * System example01
 * @system
 */
runtime.system({
  "_id": "1a3bd1f9e614c73",
  "name": "example01",
  "version": "0.0.1",
  "description": "Example 01"
});


// Schemas, models and types creation


/**
 * Schema Button
 * @schema
 */
runtime.require('metamodel').schema({
  "_id": "1e85d110b712463",
  "_name": "Button",
  "_inherit": [
    "_Component"
  ],
  "css": "property",
  "html": "property",
  "label": "property",
  "render": "method",
  "click": "event"
});

/**
 * Schema CSS
 * @schema
 */
runtime.require('metamodel').schema({
  "_id": "1285314a2b10de9",
  "_name": "CSS",
  "_inherit": [
    "_Component"
  ],
  "source": "property"
});

/**
 * Schema HTML
 * @schema
 */
runtime.require('metamodel').schema({
  "_id": "1de1e157ca1c692",
  "_name": "HTML",
  "_inherit": [
    "_Component"
  ],
  "source": "property"
});

/**
 * Model Button
 * @model
 */
runtime.require('metamodel').model({
  "_id": "1f97a10e081b5a1",
  "_name": "Button",
  "css": {
    "type": "CSS",
    "readOnly": false,
    "mandatory": false,
    "default": {}
  },
  "html": {
    "type": "HTML",
    "readOnly": false,
    "mandatory": false,
    "default": {}
  },
  "label": {
    "type": "string",
    "readOnly": false,
    "mandatory": false,
    "default": ""
  },
  "render": {},
  "click": {}
});

/**
 * Model CSS
 * @model
 */
runtime.require('metamodel').model({
  "_id": "153a41a3301f46a",
  "_name": "CSS",
  "source": {
    "type": "css",
    "readOnly": false,
    "mandatory": false,
    "default": ""
  }
});

/**
 * Model HTML
 * @model
 */
runtime.require('metamodel').model({
  "_id": "1d868181981076f",
  "_name": "HTML",
  "source": {
    "type": "html",
    "readOnly": false,
    "mandatory": false,
    "default": ""
  }
});

runtime.require('metamodel').create();


// Components creation


/**
 * Component y192b31e40811a8c
 * @component
 */
new (runtime.require('Button'))({
  "css": "t1ff211bc5711816",
  "html": "o174c31ff7510b9d",
  "label": "click me!",
  "_id": "y192b31e40811a8c"
});

/**
 * Component t1ff211bc5711816
 * @component
 */
new (runtime.require('CSS'))({
  "source": ".designer-button {width: 200px;height: 50px;position: relative;top:200px;left: 50%;margin-right: -50%;transform: translate(-50%, -50%);}",
  "_id": "t1ff211bc5711816"
});

/**
 * Component o174c31ff7510b9d
 * @component
 */
new (runtime.require('HTML'))({
  "source": "<button type=\"button\" class=\"designer-button\">{{label}}</button>",
  "_id": "o174c31ff7510b9d"
});


// Behaviors creation


// system behaviors

/**
 * @method start
 */
runtime.system().on('start', function start() {
  let CSS = this.require('CSS'),
    HTML = this.require('HTML'),
    Button = this.require('Button');

  let css = new CSS({
    'source': '.designer-button {width: 200px;height: 50px;position: relative;top:200px;left: 50%;margin-right: -50%;transform: translate(-50%, -50%);}'
  });
  let html = new HTML({
    'source': '<button type="button" class="designer-button">{{label}}</button>'
  });

  let button = new Button({
    'css': css,
    'html': html,
    'label': 'click me!'
  });
  button.render();
});

// Button behaviors

/**
 * @method click
 */
runtime.require('Button').on('click', function click() {
  alert('You have no will!');
});

/**
 * @method render
 */
runtime.require('Button').on('render', function render() {
  document.querySelector('body').insertAdjacentHTML('afterbegin', '<style>' + this.css().source() + '</style>');
  document.querySelector('body').insertAdjacentHTML('afterbegin', this.html().source().replace('{{label}}', this.label()));

  let html = document.getElementsByClassName('designer-button');
  html[0].addEventListener('click', function () {
    this.click();
  }.bind(this));
});

// Start the system
runtime.system().start();