# Tipsy.sass
A mixin tooltip CSS using Sass. It currently support Internet Explorer 9+, Chrome, Firefox, Safari and Opera

## Installation
* Clone ``git@github.com:dangvanthanh/tipsy.sass.git``
* [Download the latest version](https://github.com/dangvanthanh/tipsy.sass/archive/master.zip)

## Getting Started

#### You need import Tipsy.sass in your stylesheet

  ``@import "tipsy";``

#### Tipsy.sass have 3 parameters allow you can customize

  ``@mixin tipsy($gravity, $color, $radius) {...}

    $gravity: nw | n | ne | e | se | s | sw | w /* Position of tooltip */

    $color  : HEX, RGB, RGBA, HSL /* Background color of tooltip */

    $radius : px, em, rem /* Border radius of tooltip */``

#### How to use

  ``.tipsy--nw { @include tipsy(nw, #34495e, 0);  }

    .tipsy--n  { @include tipsy(n, #2ecc71, 3px); }

    .tipsy--ne { @include tipsy(ne, #3498db, 0);  }

    .tipsy--e  { @include tipsy(e, #9b59b6, 3px); }

    .tipsy--se { @include tipsy(se, #f39c12, 0);  }

    .tipsy--s  { @include tipsy(s, #d35400, 3px); }

    .tipsy--sw { @include tipsy(sw, #c0392b, 0);  }

    .tipsy--w  { @include tipsy(w, #8e44ad, 3px); }``