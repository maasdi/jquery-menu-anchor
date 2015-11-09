# jquery-menu-anchor

[![Build Status](https://travis-ci.org/maasdi/jquery-menu-anchor.svg?branch=master)](https://travis-ci.org/maasdi/jquery-menu-anchor)

jQuery plugin to create menu anchor as navigation on the page

![Menu Anchor View Default](https://raw.githubusercontent.com/maasdi/jquery-menu-anchor/master/demo/sample.png)

## Usage
Add the following resources for the jquery-menu-anchor to function correctly.
```html
<!-- Required Stylesheets -->
<link href="jquery-menu-anchor.css" rel="stylesheet">

<!-- Required Javascript -->
<script src="jquery.js"></script>
<script src="jquery-menu-anchor.js"></script>
```

The component will bind to DOM element, with html markup.

```html
<nav id="container" class="anchor-menu">
	<h3>Anchor Menu</h3>
    <ul>
    	<li id="menu-anchor-css"><a href="#" >CSS</a></li>
        <li id="menu-anchor-html"><a href="#">HTML</a></li>
        <li id="menu-anchor-coldfusion"><a href="#">ColdFusion</a></li>
        <li id="menu-anchor-database"><a href="#">Database</a></li>
        <li id="menu-anchor-programming"><a href="#">Programming</a></li>
    </ul>
</nav>
<div id="menu-anchor-css-content">CSS content</div>
<div id="menu-anchor-html-content">HTML content</div>
<div id="menu-anchor-coldfusion-content">ColdFusion content</div>
<div id="menu-anchor-database-content">Database content</div>
<div id="menu-anchor-programming-content">Programming content</div>
```

Basic usage may look something like this.

```javascript
$('#container').MenuAnchor();
```

## Options
* `window (window.top)` - The current document object.
* `pluralId ('menu-anchor-')` - The prefix of navigations id will be use.
* `contentPostfix ('-content')` - The postfix of contents id will be use.
* `scroll (true)` - When set to true, on scrolling menu-anchor will update the current selected anchor.

## Licenses:
* Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0