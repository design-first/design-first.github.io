self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('systemdesigner').then(function (cache) {
      return cache.addAll([
        '/',
        'app/index.html',
        'behavior.html',
        'component.html',
        'index.html',
        'model.html',
        'schema.html',
        'system.html',
        'type.html',
        'styles/editor.css',
        'styles/system-designer.css',
        'systems/designer-runtime.json',
        'systems/system-designer.json',
        'systems/editor-behavior.json',
        'systems/editor-component.json',
        'systems/editor-model.json',
        'systems/editor-schema.json',
        'systems/editor-system.json',
        'systems/editor-type.json',
        'img/favicon.ico',
        'img/logo.png',
        'lib/ace/ace.js',
        'lib/ace/mode-javascript.js',
        'lib/ace/mode-json.js',
        'lib/ace/mode-css.js',
        'lib/ace/mode-html.js',
        'lib/ace/worker-json.js',
        'lib/ace/worker-html.js',
        'lib/ace/worker-javascript.js',
        'lib/ace/worker-css.js',
        'lib/ace/ext-searchbox.js',
        'lib/ace/ext-language_tools.js',
        'lib/bootstrap/dist/css/bootstrap.min.css',
        'lib/bootstrap/dist/css/bootstrap.min.css.map',
        'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
        'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
        'lib/prism/prism.css',
        'lib/system-runtime/system-runtime.min.js',
        'lib/designer/vendor.js',
        'lib/editor/vendor.js'
      ]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});