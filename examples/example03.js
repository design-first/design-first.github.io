/* 
 * TodoMVC
 * 
 * @description Create a Todo manager.
 * 
 * The purpose of this example is to learn how to code in System Designer.
 * 
 * Taken from TodoMVC, http://todomvc.com.
 * 
 * Based on the work made by TasteJS (under a Creative Commons Attribution 4.0 International License).
 * 
 * @system TodoMVC
 * @version 1.0.1
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
 * System TodoMVC
 * @system
 */
runtime.system({
	"_id": "13e7b1b46c1b2ef",
	"name": "TodoMVC",
	"version": "1.0.1",
	"description": "Create a Todo manager.\n\nThe purpose of this example is to learn how to code in System Designer.\n\nTaken from TodoMVC, http://todomvc.com.\n\nBased on the work made by TasteJS (under a Creative Commons Attribution 4.0 International License)."
});


// Schemas, models and types creation


/**
 * Schema HTMLComponent
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "1ff3e1dc98118dc",
	"_name": "HTMLComponent",
	"_inherit": [
		"_Component"
	],
	"template": "property",
	"style": "property",
	"render": "method"
});

/**
 * Schema Router
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "1a1c918f9c1283e",
	"_name": "Router",
	"_inherit": [
		"_Component"
	],
	"path": "property",
	"start": "method"
});

/**
 * Schema Store
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "1541114a9a17011",
	"_name": "Store",
	"_inherit": [
		"_Component"
	],
	"add": "method",
	"remove": "method",
	"get": "method",
	"getAll": "method"
});

/**
 * Schema Todo
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "11a211d1b71929d",
	"_name": "Todo",
	"_inherit": [
		"_Component"
	],
	"isCompleted": "property",
	"label": "property"
});

/**
 * Schema TodoApp
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "1740a1d82d1d818",
	"_name": "TodoApp",
	"_inherit": [
		"_Component"
	],
	"component": "link",
	"list": "link",
	"toggleButton": "link",
	"footer": "link",
	"render": "method",
	"bindEvents": "method",
	"addItem": "event",
	"removeItem": "event",
	"toggleItem": "event",
	"clearCompletedItems": "event",
	"toggleAllItems": "event",
	"editItem": "event",
	"saveItem": "event"
});

/**
 * Schema TodoFooter
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "10e201646713c17",
	"_name": "TodoFooter",
	"_inherit": [
		"_Component"
	],
	"component": "link",
	"clear": "link",
	"render": "method"
});

/**
 * Schema TodoItem
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "16a9f1c82c18818",
	"_name": "TodoItem",
	"_inherit": [
		"_Component"
	],
	"component": "link",
	"todo": "property",
	"render": "method"
});

/**
 * Schema TodoList
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "185be1d12213f59",
	"_name": "TodoList",
	"_inherit": [
		"_Component"
	],
	"render": "method"
});

/**
 * Schema TodoToggleButton
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "1dd961a048100cc",
	"_name": "TodoToggleButton",
	"_inherit": [
		"_Component"
	],
	"component": "link",
	"render": "method"
});

/**
 * Schema _Database
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "1723516a30132ac",
	"_name": "_Database",
	"_inherit": [
		"_Component"
	],
	"_core": true,
	"insert": "event",
	"update": "event",
	"remove": "event"
});

/**
 * Model HTMLComponent
 * @model
 */
runtime.require('metamodel').model({
	"_id": "1b91e159ee1ac17",
	"_name": "HTMLComponent",
	"template": {
		"type": "html",
		"readOnly": false,
		"mandatory": false,
		"default": ""
	},
	"style": {
		"type": "css",
		"readOnly": false,
		"mandatory": false,
		"default": ""
	},
	"render": {
		"params": [
			{
				"name": "elt",
				"type": "DOMElement",
				"mandatory": false,
				"default": null
			}
		]
	}
});

/**
 * Model Router
 * @model
 */
runtime.require('metamodel').model({
	"_id": "1c77717cd21a4f5",
	"_name": "Router",
	"path": {
		"type": "string",
		"readOnly": false,
		"mandatory": false,
		"default": ""
	},
	"start": {}
});

/**
 * Model Store
 * @model
 */
runtime.require('metamodel').model({
	"_id": "1ce171b33918f6a",
	"_name": "Store",
	"add": {
		"params": [
			{
				"name": "todo",
				"type": "object",
				"mandatory": true,
				"default": {}
			}
		]
	},
	"remove": {
		"params": [
			{
				"name": "id",
				"type": "string",
				"mandatory": true,
				"default": ""
			}
		]
	},
	"getAll": {
		"result": "array"
	},
	"get": {
		"params": [
			{
				"name": "id",
				"type": "string",
				"mandatory": false,
				"default": ""
			}
		],
		"result": "any"
	}
});

/**
 * Model Todo
 * @model
 */
runtime.require('metamodel').model({
	"_id": "1f4381d57e18dc2",
	"_name": "Todo",
	"label": {
		"type": "string",
		"readOnly": false,
		"mandatory": false,
		"default": "new todo"
	},
	"isCompleted": {
		"type": "boolean",
		"readOnly": false,
		"mandatory": false,
		"default": false
	}
});

/**
 * Model TodoApp
 * @model
 */
runtime.require('metamodel').model({
	"_id": "1f99b13a2c10817",
	"_name": "TodoApp",
	"component": {
		"type": "HTMLComponent",
		"readOnly": false,
		"mandatory": false,
		"default": "todoapp"
	},
	"toggleButton": {
		"type": "TodoToggleButton",
		"readOnly": false,
		"mandatory": false,
		"default": "todo-toggle-button"
	},
	"list": {
		"type": "TodoList",
		"readOnly": false,
		"mandatory": false,
		"default": "todo-list"
	},
	"footer": {
		"type": "TodoFooter",
		"readOnly": false,
		"mandatory": false,
		"default": "todo-footer"
	},
	"render": {},
	"addItem": {
		"params": [
			{
				"name": "node",
				"type": "DOMElement",
				"mandatory": false,
				"default": null
			}
		]
	},
	"bindEvents": {},
	"removeItem": {
		"params": [
			{
				"name": "id",
				"type": "string",
				"mandatory": false,
				"default": ""
			}
		]
	},
	"toggleItem": {
		"params": [
			{
				"name": "id",
				"type": "string",
				"mandatory": false,
				"default": ""
			}
		]
	},
	"clearCompletedItems": {},
	"toggleAllItems": {
		"params": [
			{
				"name": "value",
				"type": "boolean",
				"mandatory": false,
				"default": false
			}
		]
	},
	"editItem": {
		"params": [
			{
				"name": "node",
				"type": "DOMElement",
				"mandatory": false,
				"default": null
			}
		]
	},
	"saveItem": {
		"params": [
			{
				"name": "node",
				"type": "DOMElement",
				"mandatory": false,
				"default": null
			}
		]
	}
});

/**
 * Model TodoFooter
 * @model
 */
runtime.require('metamodel').model({
	"_id": "1db15107941dcbc",
	"_name": "TodoFooter",
	"component": {
		"type": "HTMLComponent",
		"readOnly": false,
		"mandatory": false,
		"default": "footer"
	},
	"render": {},
	"clear": {
		"type": "HTMLComponent",
		"readOnly": false,
		"mandatory": false,
		"default": "clearcompleted"
	}
});

/**
 * Model TodoItem
 * @model
 */
runtime.require('metamodel').model({
	"_id": "101e8182641017c",
	"_name": "TodoItem",
	"component": {
		"type": "HTMLComponent",
		"readOnly": false,
		"mandatory": false,
		"default": "todoitem"
	},
	"todo": {
		"type": "Todo",
		"readOnly": false,
		"mandatory": false,
		"default": ""
	},
	"render": {}
});

/**
 * Model TodoList
 * @model
 */
runtime.require('metamodel').model({
	"_id": "13b02113771092d",
	"_name": "TodoList",
	"render": {}
});

/**
 * Model TodoToggleButton
 * @model
 */
runtime.require('metamodel').model({
	"_id": "1b3e315905198bb",
	"_name": "TodoToggleButton",
	"render": {},
	"component": {
		"type": "HTMLComponent",
		"readOnly": false,
		"mandatory": false,
		"default": "toggleall"
	}
});

/**
 * Model _Database
 * @model
 */
runtime.require('metamodel').model({
	"_id": "154bc108b91ea44",
	"_name": "_Database",
	"_core": true,
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
	}
});

/**
 * Type DOMElement
 * @type
 */
runtime.require('metamodel').type({
	"_id": "17e7e1bd1419021",
	"name": "DOMElement",
	"type": "object"
});

/**
 * Type dbInsertEvent
 * @type
 */
runtime.require('metamodel').type({
	"_id": "148ef1e19810e6d",
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
});

/**
 * Type dbRemoveEvent
 * @type
 */
runtime.require('metamodel').type({
	"_id": "1952e1ac4213f4a",
	"name": "dbRemoveEvent",
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
		}
	}
});

/**
 * Type dbUpdateEvent
 * @type
 */
runtime.require('metamodel').type({
	"_id": "1f5c41309711752",
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
});

runtime.require('metamodel').create();


// Components creation


/**
 * Component todoitem
 * @component
 */
new (runtime.require('HTMLComponent'))({
	"_id": "todoitem",
	"template": "<li data-id=\"{id}\" class=\"{completed}\">\n\t<div class=\"view\">\n\t\t<input class=\"toggle\" type=\"checkbox\" {checked}>\n\t\t<label>{label}</label>\n\t\t<button class=\"destroy\"></button>\n\t</div>\n\t<input class=\"edit\" value=\"{label}\">\n</li>",
	"style": ""
});

/**
 * Component info
 * @component
 */
new (runtime.require('HTMLComponent'))({
	"_id": "info",
	"template": "<footer class=\"info\">\n\t<p>Double-click to edit a todo</p>\n\t<p>Created by <a href=\"https://designfirst.io/systemdesigner/\">System Designer</a></p>\n\t<p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p>\n</footer>",
	"style": ""
});

/**
 * Component footer
 * @component
 */
new (runtime.require('HTMLComponent'))({
	"_id": "footer",
	"template": "<footer class=\"footer\">\n    <span class=\"todo-count\"><strong>{nbItems}</strong> {item} left</span>\n    <ul class=\"filters\">\n    \t<li>\n    \t\t<a class=\"{select_all}\" href=\"{path}#/\">All</a>\n    \t</li>\n    \t<li>\n    \t\t<a class=\"{select_active}\" href=\"{path}#/active\">Active</a>\n    \t</li>\n    \t<li>\n    \t\t<a class=\"{select_completed}\" href=\"{path}#/completed\">Completed</a>\n    \t</li>\n    </ul>\n</footer>",
	"style": ""
});

/**
 * Component todoapp
 * @component
 */
new (runtime.require('HTMLComponent'))({
	"_id": "todoapp",
	"template": "<section class=\"todoapp\">\n\t<header class=\"header\">\n\t\t<h1>todos</h1>\n\t\t<input class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus>\n\t</header>\n\t<section class=\"main\">\n    \t<ul class=\"todo-list\"></ul>\n    </section>\n</section>",
	"style": ""
});

/**
 * Component page
 * @component
 */
new (runtime.require('HTMLComponent'))({
	"_id": "page",
	"template": "",
	"style": "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n:focus {\n\toutline: 0;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n"
});

/**
 * Component clearcompleted
 * @component
 */
new (runtime.require('HTMLComponent'))({
	"_id": "clearcompleted",
	"style": "",
	"template": "<button class=\"clear-completed\">Clear completed</button>"
});

/**
 * Component toggleall
 * @component
 */
new (runtime.require('HTMLComponent'))({
	"_id": "toggleall",
	"style": "",
	"template": "<input class=\"toggle-all\" type=\"checkbox\">\n<label for=\"toggle-all\">Mark all as complete</label>"
});

/**
 * Component router
 * @component
 */
new (runtime.require('Router'))({
	"_id": "router",
	"path": ""
});

/**
 * Component store
 * @component
 */
new (runtime.require('Store'))({
	"_id": "store"
});

/**
 * Component todo-app
 * @component
 */
new (runtime.require('TodoApp'))({
	"_id": "todo-app",
	"component": "todoapp",
	"footer": "todo-footer",
	"list": "todo-list",
	"toggleButton": "todo-toggle-button"
});

/**
 * Component todo-footer
 * @component
 */
new (runtime.require('TodoFooter'))({
	"_id": "todo-footer",
	"clear": "clearcompleted",
	"component": "footer"
});

/**
 * Component todo-list
 * @component
 */
new (runtime.require('TodoList'))({
	"_id": "todo-list"
});

/**
 * Component todo-toggle-button
 * @component
 */
new (runtime.require('TodoToggleButton'))({
	"_id": "todo-toggle-button",
	"component": "toggleall"
});


// Behaviors creation


// system behaviors

/**
 * @method start
 */
runtime.system().on('start', function start() { 
  var store = null;
  
  // get data from localstore
  store = this.require('store').getAll();
  store.forEach(function (todo) {
    this.require('db').collections().Todo.insert(todo);
  }.bind(this));
 
  // add CSS
  this.require('page').render();

  // add TodoApp widget
  this.require('todo-app').render();
  this.require('todo-app').bindEvents();
  
  // add footer
  this.require('info').render();
  
  // start router
  this.require('router').start();
});

// HTMLComponent behaviors

/**
 * @method render
 * @param {DOMElement} elt
 */
runtime.require('HTMLComponent').on('render', function render(elt) { 
  var eltStyle = document.createElement('style'),
      style = this.style(),
      template = this.template(),
      domNode = elt;

  // render style
  if (style) {
    eltStyle.innerHTML = style;
    document.head.appendChild(eltStyle);
  }
  
  // render html
  if (template) {
    if (domNode === null) {
      domNode = document.body;
    }
    
    domNode.insertAdjacentHTML('beforeend', template);
  }
});

// Router behaviors

/**
 * @method path
 */
runtime.require('Router').on('path', function path(value) { 
  // render TodoApp widget
  this.require('todo-app').toggleButton().render();
  this.require('todo-app').list().render();
  this.require('todo-app').footer().render();
});

/**
 * @method start
 */
runtime.require('Router').on('start', function start() { 
  var currentPath = window.location.href.split('#/')[1];
  
  // init 
  if (currentPath) {
    this.path(currentPath);
  }
  
  // on url change
  window.addEventListener('hashchange', function (e) {
    this.path(window.location.href.split('#/')[1]);
  }.bind(this));
});

// Store behaviors

/**
 * @method add
 * @param {object} todo
 */
runtime.require('Store').on('add', function add(todo) { 
  var store = null,
      todos = {
        'Todo': {}
      };
  
  try {
    if (typeof localStorage !== 'undefined') {
      store = localStorage.getItem('todos-system');
      if (store) {
        todos = JSON.parse(store);
      }
      
      todos.Todo[todo._id] = todo;
      
      localStorage.setItem('todos-system', JSON.stringify(todos));
    } else {
      this.require('logger').warn('no localStorage object found.');
    }
  } catch(e) {}
});

/**
 * @method get
 * @param {string} id
 * @returns {any} 
 */
runtime.require('Store').on('get', function get(id) { 
  var store = null,
      todos = {
        'Todo': {}
      },
      result = [];
      
	try { 
    if (typeof localStorage !== 'undefined') {
      store = localStorage.getItem('todos-system');
      if (store) {
        todos = JSON.parse(store);
      }
      
      result = todos.Todo[id];
    } else {
    this.require('logger').warn('no localStorage object found.');
    }
  } catch(e) {}
	
  return result;
});

/**
 * @method getAll
 * @returns {array} 
 */
runtime.require('Store').on('getAll', function getAll() { 
  var store = null,
      todos = {
        'Todo': {}
      },
      result = [],
      id = '';
	
  try {
    if (typeof localStorage !== 'undefined') {
      store = localStorage.getItem('todos-system');
      if (store) {
        store = localStorage.getItem('todos-system');
        todos = JSON.parse(store);
      }
      
      for (id in todos.Todo) {
        result.push(todos.Todo[id]);
      }
    } else {
      this.require('logger').warn('no localStorage object found.');
    }
  } catch(e) {}
  
  return result;
});

/**
 * @method remove
 * @param {string} id
 */
runtime.require('Store').on('remove', function remove(id) { 
  var store = null,
      todos = {
        'Todo': {}
      };
      
  try {    
    if (typeof localStorage !== 'undefined') {
      store = localStorage.getItem('todos-system');
      if (store) {
      todos = JSON.parse(store);
      }
      
      delete todos.Todo[id];
      
      localStorage.setItem('todos-system', JSON.stringify(todos));
    } else {
      this.require('logger').warn('no localStorage object found.');
    }
  } catch(e) {}
});

// Todo behaviors

/**
 * @method init
 */
runtime.require('Todo').on('init', function init(conf) { 
  var todoApp = this.require('todo-app');
  
  if (todoApp) {
    if (todoApp.toggleButton()) {
      todoApp.toggleButton().render();
    }
    if (todoApp.list()) {
      todoApp.list().render();
    }
    if (todoApp.footer()) {
      todoApp.footer().render();
    }
  }
});

// TodoApp behaviors

/**
 * @method addItem
 * @param {DOMElement} node
 */
runtime.require('TodoApp').on('addItem', function addItem(node) { 
  var Todo = this.require('Todo');
  
  if (node.value.trim().length > 0) {
    new Todo({
      'label': node.value.trim(),
      'isCompleted': false
    });
    node.value = '';
  }
});

/**
 * @method bindEvents
 */
runtime.require('TodoApp').on('bindEvents', function bindEvents() { 
	var dom = null;
	
	dom = document.getElementsByClassName('todoapp')[0];
	dom.addEventListener('keyup', function keyup(e) {
	  var ENTER_CODE = 13;
	  
	  if (e.keyCode == ENTER_CODE) {
	    switch (true) {
	      case e.target.className === 'new-todo':
  	      this.addItem(e.target);
  	    break;
  	  case e.target.className === 'edit':
  	    this.saveItem(e.target);
  	    break;
  	  default:
  	    break;
	    }
	  }
	}.bind(this));
	
	dom = document.getElementsByClassName('todoapp')[0];
	dom.addEventListener('click', function click(e) {
	  var id = '';
	  
	  switch (true) {
	    case e.target.className === 'destroy':
	      id = e.target.parentNode.parentNode.getAttribute('data-id');
	      this.removeItem(id);
	      break;
	    case e.target.className === 'toggle':
	      id = e.target.parentNode.parentNode.getAttribute('data-id');
	      this.toggleItem(id);
	      break;
	    case e.target.className === 'clear-completed':
        this.clearCompletedItems();
	      break;
	    case e.target.className === 'toggle-all':
        this.toggleAllItems(e.target.checked);
	      break;
	    default:
	      break;
	  }
	}.bind(this));
	
	dom = document.getElementsByClassName('todoapp')[0];
	dom.addEventListener('dblclick', function dbclick(e) {
	  switch (true) {
	    case e.target.tagName === 'LABEL':
	      this.editItem(e.target.parentNode.parentNode);
	      break;
	    default:
	      break;
	  }
	}.bind(this));
});

/**
 * @method clearCompletedItems
 */
runtime.require('TodoApp').on('clearCompletedItems', function clearCompletedItems() { 
  var Todo = this.require('db').collections().Todo;
  
  Todo.remove({
	  'isCompleted': true
  });
	
  this.toggleButton().render();
  this.list().render();
  this.footer().render();
});

/**
 * @method editItem
 * @param {DOMElement} node
 */
runtime.require('TodoApp').on('editItem', function editItem(node) { 
  node.setAttribute('class', 'editing');
  node.children[1].value = node.children[1].value;
  node.children[1].focus();
});

/**
 * @method removeItem
 * @param {string} id
 */
runtime.require('TodoApp').on('removeItem', function removeItem(id) { 
  this.require(id).destroy();
  
  this.toggleButton().render();
  this.list().render();
  this.footer().render();
});

/**
 * @method render
 */
runtime.require('TodoApp').on('render', function render() { 
  // template    
  this.component().render();  
  
  // toggle button
  this.toggleButton().render();
  
  // list
  this.list().render();
  
  // footer
  this.footer().render();
});

/**
 * @method saveItem
 * @param {DOMElement} node
 */
runtime.require('TodoApp').on('saveItem', function saveItem(node) { 
  var value = node.value,
      li = node.parentNode,
      id = li.getAttribute('data-id'),
      label = '';
  
  if (value.trim().length > 0) {
    this.require(id).label(value);
  
    label = document.querySelector('li[data-id=\'' + id +'\'] label');
    label.innerText = value;
  } else {
    this.removeItem(id);
  }
  
  li.setAttribute('class', '');
  node.blur();
});

/**
 * @method toggleAllItems
 * @param {boolean} value
 */
runtime.require('TodoApp').on('toggleAllItems', function toggleAllItems(value) { 
  var Todo = this.require('db').collections().Todo;
  
  Todo.update({}, {
    'isCompleted': value
  });
  
  this.list().render();
  this.footer().render();
});

/**
 * @method toggleItem
 * @param {string} id
 */
runtime.require('TodoApp').on('toggleItem', function toggleItem(id) { 
  this.require(id).isCompleted(!this.require(id).isCompleted());
	
  this.toggleButton().render();
  this.list().render();
  this.footer().render();
});

// TodoFooter behaviors

/**
 * @method render
 */
runtime.require('TodoFooter').on('render', function render() { 
  var template = this.component().template(),
      domNode = null,
      domTodoApp = null, 
      path = this.require('router').path(),
      Todo = this.require('db').collections().Todo,
      uncompletedTodo = [],
      completedTodo = [];
      
  domTodoApp = document.getElementsByClassName('todoapp')[0];
  if (domTodoApp) {
      
    // clean space
    domNode = document.getElementsByClassName('footer')[0];
    if (domNode) {
      domNode.parentNode.removeChild(domNode);
    } 
    
    if (Todo.count() > 0) {
      
      uncompletedTodo = Todo.find({
        'isCompleted': false
      });
      
      // templating
      template = template.replace(/{nbItems}/g, uncompletedTodo.length);
      template = template.replace(/{item}/g, uncompletedTodo.length > 1 ? 'items' : 'item');
      template = template.replace(/{select_all}/g, path === '' ? 'selected' : '');
      template = template.replace(/{select_active}/g, path === 'active' ? 'selected' : '');
      template = template.replace(/{select_completed}/g, path === 'completed' ? 'selected' : '');
      
      // if run inside System Designer
      if (location.href.indexOf('/app/') !== -1) {
        template = template.replace(/{path}/g, '#' + document.location.href.split('#')[1].split('?')[0].split('/')[0]);
      } else {
        template = template.replace(/{path}/g, '');
      }
      
      domTodoApp.insertAdjacentHTML('beforeend', template);
      
      // clear button
      completedTodo = Todo.find({
        'isCompleted': true
      });
      
      if (completedTodo.length > 0) {
        template = this.clear().template();
        
        domNode = document.getElementsByClassName('footer')[0];
        domNode.insertAdjacentHTML('beforeend', template);
      }
    }
  }
});

// TodoItem behaviors

/**
 * @method render
 */
runtime.require('TodoItem').on('render', function render() { 
 var template = this.component().template(),
     domNode = null;
      
  // templating
  template = template.replace(/{id}/g, this.todo().id());
  template = template.replace(/{checked}/g, this.todo().isCompleted() ? 'checked': '');
  template = template.replace(/{label}/g, this.todo().label());  
  template = template.replace(/{completed}/g, this.todo().isCompleted() ? 'completed': '');  
    
  domNode = document.getElementsByClassName('todo-list')[0];
  domNode.insertAdjacentHTML('beforeend', template);
});

// TodoList behaviors

/**
 * @method render
 */
runtime.require('TodoList').on('render', function render() { 
  var domNode = null,
      path = this.require('router').path(),
      Todo = this.require('db').collections().Todo,
      todos = [];
      
  domNode = document.getElementsByClassName('todo-list')[0];
  if (domNode) {
    
    // clean
    this.require('db').collections().TodoItem.remove();
    domNode.innerHTML = '';
    
    // find todos depenfing of path
    switch (path) {
      case 'active':
        todos = Todo.find({
          'isCompleted': false
        });
        break;
      case 'completed':
        todos = Todo.find({
          'isCompleted': true
        });
        break;
      default: 
         todos = Todo.find({});
         break;
    }
    
    // add the todos in the list
    todos.forEach(function(todo) {
      var TodoItem = this.require('TodoItem'),
          todoItem = new TodoItem({
            todo: this.require(todo._id)
          });
          
      todoItem.render();
    }.bind(this));
  }
});

// TodoToggleButton behaviors

/**
 * @method render
 */
runtime.require('TodoToggleButton').on('render', function render() { 
  var domNode = null;
  
  // clean
  domNode = document.getElementsByClassName('toggle-all')[0];
  if (domNode) {
    domNode.parentNode.removeChild(domNode);
  } 
  domNode = document.querySelector('label[for=toggle-all]');
  if (domNode) {
    domNode.parentNode.removeChild(domNode);
  } 
  
  if (this.require('db').collections().Todo.count() > 0) {
    this.component().render(document.getElementsByClassName('main')[0]);
  }
});

// _Database behaviors

/**
 * @method insert
 * @param {dbInsertEvent} event
 */
runtime.require('_Database').on('insert', function insert(event) { 
  if (event.collection === 'Todo') {
    this.require('store').add(event.document);
  }
});

/**
 * @method remove
 * @param {dbRemoveEvent} event
 */
runtime.require('_Database').on('remove', function remove(event) { 
  if (event.collection === 'Todo') {
	  this.require('store').remove(event.id);
  }
});

/**
 * @method update
 * @param {dbUpdateEvent} event
 */
runtime.require('_Database').on('update', function update(event) { 
  var document = {},
      store = this.require('store');

	if (event.collection === 'Todo') {
	  document = store.get(event.id);
	  document[event.field] = event.value;
	  store.add(document);
  }
});

// Start the system
runtime.system().start();
