# JQuery Background Image Scroll
A very simple, short, beautiful, and responsive JQuery plugin to scroll background image with page scroll.
![show1](https://media.giphy.com/media/3o6fJ4fwX10mFhW3Xa/giphy.gif)
![show2](https://media.giphy.com/media/3oxHQkdp87LNZfRM3u/giphy.gif)

**[Live Demo](https://hoffie420.github.io/JQuery-Background-Image-Scroll/)**

# Get started
To start using **JQuery Background Image Scroll** you just need to add `bgscroll.js` to your page in the `<head>` section just after JQuery.
```
<script src='scripts/bgscroll.js'></script>
```
Now let's create `<div>` element with some `background-image` css property.

```html
<head>
  <style>
    .background{
      width: 100vw;
      height: 70vh;
      background-image: url('background1.jpg');
      background-repeat: no-repeat;
      background-position: 50% 0%;
    }
  </style>
  <script src='scripts/jquery.js'></script>
  <script src='scripts/bgscroll.js'></script>
</head>

<body>
  <div class="background"></div>
</body>
```

And add JQuery's `$(window).scroll()` event in `<head>`  and `<script>` section.

```html
  <script>
    $(window).scroll(function(){
      $('.background').bgscroll();
    })
  </script>
```

That's all!

# Options
You can define some options and change its default to your custom:
- `bgpositionx`  [INT between `0` and `100`] X position of the background image measured in %. The value 50 is 50% (center of the image). **Default: `50`**
- `direction` [STRING `'top'` or `'bottom'`] The direction of scrolled image, `top` means: when the page is scrolled down, the background image is scrolled to top, `bottom` means: when the page is scrolled down, the background image is scrolled also to down. **Default : `'top'`**
- `debug` [BOOLEAN `true` or `false`] Output of current's image position in the browser console. **Default : `false`**
- `max` - [INT between `0` and `100`] the maximum position (in %) this `background-image` can move to. **Default : `'100'`**
- `min` - [INT between `0` and `100`] the minimum position (in %) this `background-image` can move from. **Default : `'0'`**
