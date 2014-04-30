Package.describe({
  summary: "Super Simple WYSIWYG Editor on Bootstrap(3.0 and 2.x)"
});

Package.on_use(function (api, where) {
  api.use([
    'jquery',
    'less-bootstrap-3',
    'less-fontawesome-4',
  ], 'client');

  api.add_files('lib/src/summernote.less', 'client');
  api.add_files('lib/dist/summernote.js', 'client', {bare:true});

  api.export(['summernote'],['client']);

});
