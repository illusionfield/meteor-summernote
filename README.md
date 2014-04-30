meteor-summernote
=================

By: https://github.com/hackerwins/summernote

### Summernote
Summernote is a javascript program that helps you to create WYSIWYG Editor on web.

Home Page: http://hackerwins.github.io/summernote/

### Why Summernote?

Summernote has something specials no like others.
* Simple UI
* Interative WYSIWYG editing
* Handy integration with server

#### Inspired by
* Gmail WYSIWYG Editor (http://www.gmail.com)
* Redactor (http://imperavi.com/redactor/)



### Usage

Place `div` tag to somewhere in the `body` tag. This element will be placed by the visual representation of the summernote.
```html
<div id="summernote">Hello Summernote</div>
```

Finally, run script after document ready.
```javascript
$(document).ready(function() {
  $('#summernote').summernote();
});
```

### API
Get HTML `code` if you need.

```javascript
var sHTML = $('#summernote').code();
```

`Destroy` summernote.

```javascript
$('#summernote').destroy();
```
