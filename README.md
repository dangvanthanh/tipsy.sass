# Tipsy.sass

> A mixin tooltip CSS using Sass. It currently support Internet Explorer 9+, Chrome, Firefox, Safari and Opera

## Installation

### NPM

```shell
$ npm install tipsy-sass
```

### Normal
* Clone ``git@github.com:dangvanthanh/tipsy.sass.git``
* [Download the latest version](https://github.com/dangvanthanh/tipsy.sass/archive/master.zip)

## Getting Started

### You need import Tipsy.sass in your stylesheet

```scss
@import "tipsy";
```

### Tipsy.sass have 5 parameters allow you can customize

**SCSS**

```scss
@mixin tipsy($gravity, $bgcolor, $bordersize, $radius, $width) {...}
```

**SASS**

```scss
+tipsy($gravity, $bgcolor, $bordersize, $radius, $width)
```

**PARAMETERS**

| Param         | Description                 | Value                             |
|---------------|-----------------------------|-----------------------------------|
| `$gravity`    | Position of tooltip         | nw | n | ne | e | se | s | sw | w |
| `$bgcolor`    | Background color of tooltip | HEX, RGB, RGBA, HSL               |
| `$bordersize` | Arrow size of tooltip       | px, em, rem                       |
| `$radius`     | Border radius of tooltip    | px, em, rem                       |
| `$width`      | Width of tooltip            | px, em, rem                       |

### How to use

#### HTML

```html
<span class="tipsy" data-tipsy="Simple Tipsy">Simple Tipsy</span>
```

#### SCSS

```scss
.tipsy--nw { @include tipsy(nw, #34495e, 5px, 0);  }
.tipsy--n  { @include tipsy(n, #2ecc71, 5px, 3px); }
.tipsy--ne { @include tipsy(ne, #3498db, 5px, 0);  }
.tipsy--e  { @include tipsy(e, #9b59b6, 5px, 3px); }
.tipsy--se { @include tipsy(se, #f39c12, 5px, 0);  }
.tipsy--s  { @include tipsy(s, #d35400, 5px, 3px); }
.tipsy--sw { @include tipsy(sw, #c0392b, 5px, 0);  }
.tipsy--w  { @include tipsy(w, #8e44ad, 5px, 3px, 10px); }
```
