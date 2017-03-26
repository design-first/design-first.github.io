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

runtime.require('logger').level('info');

/**
 * System example01
 * @system
 */
let system = runtime.system({
	"_id": "1a3bd1f9e614c73",
	"name": "example01",
	"version": "0.0.1",
	"description": "Example 01"
});


// Schemas, models and types creation


let metamodel = runtime.require('metamodel');

/**
 * Schema Button
 * @schema
 */
metamodel.schema({
	"_id": "1e85d110b712463",
	"_name": "Button",
	"_inherit": [
		"RuntimeComponent"
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
metamodel.schema({
	"_id": "1285314a2b10de9",
	"_name": "CSS",
	"_inherit": [
		"RuntimeComponent"
	],
	"source": "property"
});

/**
 * Schema HTML
 * @schema
 */
metamodel.schema({
	"_id": "1de1e157ca1c692",
	"_name": "HTML",
	"_inherit": [
		"RuntimeComponent"
	],
	"source": "property"
});

/**
 * Model Button
 * @model
 */
metamodel.model({
	"_id": "1f97a10e081b5a1",
	"_name": "Button",
	"css": {
		"type": "@CSS",
		"readOnly": false,
		"mandatory": false,
		"default": {}
	},
	"html": {
		"type": "@HTML",
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
metamodel.model({
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
metamodel.model({
	"_id": "1d868181981076f",
	"_name": "HTML",
	"source": {
		"type": "html",
		"readOnly": false,
		"mandatory": false,
		"default": ""
	}
});

metamodel.create();


// Classes creation


/**
 * Class Button
 * @class
 */
let Button = runtime.require('Button');

/**
 * Class CSS
 * @class
 */
let CSS = runtime.require('CSS');

/**
 * Class HTML
 * @class
 */
let HTML = runtime.require('HTML');


// Behaviors creation


// system behaviors

/**
 * @method start
 */
system.on('start', function start() {
    var CSS = this.require('CSS'),
        HTML = this.require('HTML'),
        Button = this.require('Button');
    
    var css = new CSS({
        'source': '.designer-button {width: 200px;height: 50px;position: relative;top:200px;left: 50%;margin-right: -50%;transform: translate(-50%, -50%);}'
    });
    var html = new HTML({
        'source': '<button type="button" class="designer-button">{{label}}</button>'
    });
    
    var button = new Button({
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
Button.on('click', function click() {
    alert('You have no will!');
});

/**
 * @method render
 */
Button.on('render', function render() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', '<style>' + this.css().source() + '</style>');
    document.querySelector('body').insertAdjacentHTML('afterbegin', this.html().source().replace('{{label}}', this.label()));
    
    var html = document.getElementsByClassName('designer-button');
    html[0].addEventListener('click', function () {
        this.click();
    }.bind(this));
});

// Start the system
system.start();
