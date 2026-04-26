---
title: 写都写了，发一下吧
date: 2025-12-11 22:15:24
tags: 数学
abbrlink: add30e99
---

$$
question:calculate \lim_{n\to\infty}\frac{\sqrt{1}+\sqrt{2}+...+\sqrt{n}}{n\sqrt{n}}
$$
## Push forward

先根据答案推过程：要求$\int_{0}^{1} \sqrt{n}$ . 已知其极限存在，根据定义等价于求下面这个图形的面积
<div class="svg-container">
<?xml version="1.0" encoding="UTF-8"?>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="360pt" height="240pt" viewBox="0 0 360 240" version="1.1">
<defs>
<g>
<symbol overflow="visible" id="glyph0-0">
<path style="stroke:none;" d="M 1.25 0 L 1.25 -6.25 L 6.25 -6.25 L 6.25 0 Z M 1.40625 -0.15625 L 6.09375 -0.15625 L 6.09375 -6.09375 L 1.40625 -6.09375 Z M 1.40625 -0.15625 "/>
</symbol>
<symbol overflow="visible" id="glyph0-1">
<path style="stroke:none;" d="M 0.414063 -3.53125 C 0.410156 -4.375 0.496094 -5.054688 0.675781 -5.574219 C 0.847656 -6.085938 1.109375 -6.484375 1.453125 -6.765625 C 1.796875 -7.042969 2.226563 -7.183594 2.75 -7.1875 C 3.128906 -7.183594 3.464844 -7.105469 3.757813 -6.953125 C 4.046875 -6.796875 4.289063 -6.574219 4.476563 -6.285156 C 4.664063 -5.992188 4.8125 -5.636719 4.921875 -5.222656 C 5.027344 -4.800781 5.078125 -4.238281 5.082031 -3.53125 C 5.078125 -2.6875 4.992188 -2.007813 4.824219 -1.496094 C 4.648438 -0.976563 4.390625 -0.578125 4.050781 -0.300781 C 3.703125 -0.0195313 3.269531 0.117188 2.75 0.121094 C 2.054688 0.117188 1.515625 -0.128906 1.125 -0.621094 C 0.648438 -1.214844 0.410156 -2.183594 0.414063 -3.53125 Z M 1.320313 -3.53125 C 1.316406 -2.355469 1.453125 -1.574219 1.730469 -1.183594 C 2.003906 -0.792969 2.34375 -0.597656 2.75 -0.601563 C 3.148438 -0.597656 3.488281 -0.792969 3.765625 -1.1875 C 4.039063 -1.574219 4.175781 -2.355469 4.179688 -3.53125 C 4.175781 -4.707031 4.039063 -5.488281 3.765625 -5.878906 C 3.488281 -6.261719 3.144531 -6.457031 2.738281 -6.460938 C 2.332031 -6.457031 2.011719 -6.285156 1.773438 -5.949219 C 1.46875 -5.507813 1.316406 -4.703125 1.320313 -3.53125 Z M 1.320313 -3.53125 "/>
</symbol>
<symbol overflow="visible" id="glyph0-2">
<path style="stroke:none;" d="M 0.910156 0 L 0.910156 -1 L 1.910156 -1 L 1.910156 0 Z M 0.910156 0 "/>
</symbol>
<symbol overflow="visible" id="glyph0-3">
<path style="stroke:none;" d="M 5.035156 -0.84375 L 5.035156 0 L 0.304688 0 C 0.296875 -0.210938 0.328125 -0.414063 0.40625 -0.609375 C 0.523438 -0.929688 0.71875 -1.246094 0.984375 -1.5625 C 1.25 -1.871094 1.632813 -2.234375 2.132813 -2.648438 C 2.910156 -3.285156 3.433594 -3.789063 3.710938 -4.164063 C 3.980469 -4.535156 4.117188 -4.886719 4.121094 -5.21875 C 4.117188 -5.566406 3.992188 -5.859375 3.746094 -6.101563 C 3.496094 -6.335938 3.171875 -6.457031 2.773438 -6.460938 C 2.347656 -6.457031 2.011719 -6.328125 1.757813 -6.078125 C 1.503906 -5.820313 1.375 -5.46875 1.371094 -5.023438 L 0.46875 -5.117188 C 0.53125 -5.789063 0.761719 -6.304688 1.167969 -6.65625 C 1.566406 -7.007813 2.109375 -7.183594 2.792969 -7.1875 C 3.476563 -7.183594 4.019531 -6.992188 4.421875 -6.617188 C 4.820313 -6.234375 5.019531 -5.761719 5.023438 -5.199219 C 5.019531 -4.910156 4.960938 -4.628906 4.847656 -4.355469 C 4.726563 -4.074219 4.535156 -3.785156 4.265625 -3.480469 C 3.992188 -3.175781 3.539063 -2.753906 2.910156 -2.222656 C 2.382813 -1.777344 2.042969 -1.476563 1.894531 -1.320313 C 1.742188 -1.160156 1.621094 -1.003906 1.523438 -0.84375 Z M 5.035156 -0.84375 "/>
</symbol>
<symbol overflow="visible" id="glyph0-4">
<path style="stroke:none;" d="M 3.234375 0 L 3.234375 -1.714844 L 0.128906 -1.714844 L 0.128906 -2.519531 L 3.394531 -7.160156 L 4.113281 -7.160156 L 4.113281 -2.519531 L 5.078125 -2.519531 L 5.078125 -1.714844 L 4.113281 -1.714844 L 4.113281 0 Z M 3.234375 -2.519531 L 3.234375 -5.746094 L 0.992188 -2.519531 Z M 3.234375 -2.519531 "/>
</symbol>
<symbol overflow="visible" id="glyph0-5">
<path style="stroke:none;" d="M 4.976563 -5.40625 L 4.101563 -5.335938 C 4.023438 -5.679688 3.910156 -5.929688 3.769531 -6.089844 C 3.527344 -6.335938 3.234375 -6.460938 2.890625 -6.464844 C 2.609375 -6.460938 2.363281 -6.382813 2.152344 -6.230469 C 1.871094 -6.027344 1.65625 -5.734375 1.5 -5.347656 C 1.339844 -4.957031 1.253906 -4.40625 1.25 -3.691406 C 1.457031 -4.011719 1.714844 -4.25 2.023438 -4.410156 C 2.328125 -4.5625 2.652344 -4.640625 2.988281 -4.644531 C 3.574219 -4.640625 4.070313 -4.425781 4.484375 -3.996094 C 4.890625 -3.566406 5.097656 -3.007813 5.101563 -2.324219 C 5.097656 -1.875 5 -1.457031 4.8125 -1.070313 C 4.617188 -0.683594 4.351563 -0.386719 4.015625 -0.183594 C 3.671875 0.0195313 3.289063 0.117188 2.863281 0.121094 C 2.125 0.117188 1.527344 -0.148438 1.066406 -0.6875 C 0.605469 -1.222656 0.375 -2.113281 0.375 -3.351563 C 0.375 -4.734375 0.628906 -5.738281 1.144531 -6.367188 C 1.585938 -6.910156 2.1875 -7.183594 2.945313 -7.1875 C 3.503906 -7.183594 3.964844 -7.027344 4.328125 -6.714844 C 4.683594 -6.398438 4.898438 -5.960938 4.976563 -5.40625 Z M 1.386719 -2.320313 C 1.382813 -2.015625 1.445313 -1.722656 1.578125 -1.449219 C 1.703125 -1.167969 1.882813 -0.957031 2.117188 -0.816406 C 2.34375 -0.667969 2.589844 -0.597656 2.847656 -0.601563 C 3.214844 -0.597656 3.53125 -0.746094 3.800781 -1.050781 C 4.066406 -1.347656 4.199219 -1.753906 4.203125 -2.269531 C 4.199219 -2.761719 4.070313 -3.152344 3.808594 -3.4375 C 3.542969 -3.722656 3.210938 -3.867188 2.8125 -3.867188 C 2.414063 -3.867188 2.074219 -3.722656 1.800781 -3.4375 C 1.519531 -3.152344 1.382813 -2.78125 1.386719 -2.320313 Z M 1.386719 -2.320313 "/>
</symbol>
<symbol overflow="visible" id="glyph0-6">
<path style="stroke:none;" d="M 1.769531 -3.882813 C 1.402344 -4.011719 1.128906 -4.203125 0.957031 -4.453125 C 0.777344 -4.699219 0.691406 -4.996094 0.695313 -5.34375 C 0.691406 -5.863281 0.878906 -6.300781 1.253906 -6.65625 C 1.628906 -7.007813 2.125 -7.183594 2.75 -7.1875 C 3.371094 -7.183594 3.875 -7 4.257813 -6.640625 C 4.636719 -6.273438 4.828125 -5.832031 4.828125 -5.316406 C 4.828125 -4.980469 4.738281 -4.691406 4.566406 -4.449219 C 4.390625 -4.199219 4.128906 -4.011719 3.773438 -3.882813 C 4.210938 -3.738281 4.542969 -3.507813 4.777344 -3.1875 C 5.003906 -2.867188 5.121094 -2.484375 5.121094 -2.046875 C 5.121094 -1.429688 4.902344 -0.917969 4.472656 -0.503906 C 4.035156 -0.0898438 3.46875 0.117188 2.765625 0.121094 C 2.054688 0.117188 1.484375 -0.0898438 1.054688 -0.503906 C 0.621094 -0.921875 0.402344 -1.441406 0.40625 -2.070313 C 0.402344 -2.53125 0.519531 -2.921875 0.757813 -3.238281 C 0.992188 -3.550781 1.332031 -3.765625 1.769531 -3.882813 Z M 1.59375 -5.371094 C 1.59375 -5.03125 1.699219 -4.753906 1.917969 -4.539063 C 2.132813 -4.324219 2.417969 -4.21875 2.769531 -4.21875 C 3.105469 -4.21875 3.382813 -4.324219 3.601563 -4.539063 C 3.816406 -4.75 3.925781 -5.011719 3.925781 -5.324219 C 3.925781 -5.640625 3.8125 -5.910156 3.589844 -6.132813 C 3.367188 -6.351563 3.089844 -6.460938 2.757813 -6.464844 C 2.421875 -6.460938 2.144531 -6.355469 1.925781 -6.140625 C 1.703125 -5.925781 1.59375 -5.667969 1.59375 -5.371094 Z M 1.308594 -2.066406 C 1.304688 -1.8125 1.363281 -1.570313 1.484375 -1.339844 C 1.601563 -1.101563 1.78125 -0.917969 2.015625 -0.792969 C 2.25 -0.660156 2.5 -0.597656 2.773438 -0.601563 C 3.1875 -0.597656 3.535156 -0.730469 3.8125 -1.003906 C 4.082031 -1.269531 4.21875 -1.613281 4.222656 -2.035156 C 4.21875 -2.457031 4.078125 -2.808594 3.800781 -3.085938 C 3.515625 -3.359375 3.164063 -3.496094 2.746094 -3.5 C 2.328125 -3.496094 1.984375 -3.359375 1.714844 -3.089844 C 1.441406 -2.8125 1.304688 -2.472656 1.308594 -2.066406 Z M 1.308594 -2.066406 "/>
</symbol>
<symbol overflow="visible" id="glyph0-7">
<path style="stroke:none;" d="M 3.726563 0 L 2.847656 0 L 2.847656 -5.601563 C 2.636719 -5.398438 2.359375 -5.195313 2.015625 -4.992188 C 1.671875 -4.789063 1.363281 -4.636719 1.089844 -4.542969 L 1.089844 -5.390625 C 1.582031 -5.621094 2.011719 -5.898438 2.378906 -6.230469 C 2.746094 -6.554688 3.003906 -6.875 3.160156 -7.1875 L 3.726563 -7.1875 Z M 3.726563 0 "/>
</symbol>
<symbol overflow="visible" id="glyph0-8">
<path style="stroke:none;" d="M 0.0742188 0 L 1.96875 -2.695313 L 0.214844 -5.1875 L 1.3125 -5.1875 L 2.109375 -3.96875 C 2.257813 -3.734375 2.378906 -3.542969 2.472656 -3.390625 C 2.613281 -3.601563 2.742188 -3.792969 2.867188 -3.960938 L 3.742188 -5.1875 L 4.789063 -5.1875 L 3 -2.746094 L 4.925781 0 L 3.847656 0 L 2.785156 -1.613281 L 2.5 -2.046875 L 1.136719 0 Z M 0.0742188 0 "/>
</symbol>
<symbol overflow="visible" id="glyph0-9">
<path style="stroke:none;" d="M 0.621094 1.996094 L 0.523438 1.171875 C 0.710938 1.222656 0.878906 1.246094 1.027344 1.25 C 1.21875 1.246094 1.375 1.214844 1.496094 1.152344 C 1.609375 1.085938 1.707031 0.996094 1.78125 0.878906 C 1.835938 0.789063 1.925781 0.570313 2.050781 0.226563 C 2.066406 0.175781 2.089844 0.105469 2.128906 0.0117188 L 0.160156 -5.1875 L 1.109375 -5.1875 L 2.1875 -2.183594 C 2.324219 -1.800781 2.449219 -1.398438 2.5625 -0.980469 C 2.660156 -1.378906 2.78125 -1.773438 2.925781 -2.164063 L 4.035156 -5.1875 L 4.914063 -5.1875 L 2.941406 0.0898438 C 2.726563 0.652344 2.558594 1.046875 2.445313 1.265625 C 2.285156 1.554688 2.105469 1.765625 1.90625 1.902344 C 1.703125 2.035156 1.464844 2.101563 1.1875 2.105469 C 1.015625 2.101563 0.828125 2.066406 0.621094 1.996094 Z M 0.621094 1.996094 "/>
</symbol>
</g>
<clipPath id="clip1">
  <path d="M 16 86 L 232 86 L 232 224.921875 L 16 224.921875 Z M 16 86 "/>
</clipPath>
<clipPath id="clip2">
  <path d="M 10.078125 46 L 346.078125 46 L 346.078125 224.921875 L 10.078125 224.921875 Z M 10.078125 46 "/>
</clipPath>
<clipPath id="clip3">
  <path d="M 16 224 L 340 224 L 340 224.921875 L 16 224.921875 Z M 16 224 "/>
</clipPath>
<clipPath id="clip4">
  <path d="M 231 86 L 232 86 L 232 224.921875 L 231 224.921875 Z M 231 86 "/>
</clipPath>
</defs>
<g id="surface1">
<rect x="0" y="0" width="360" height="240" style="fill:rgb(99.998474%,99.998474%,99.998474%);fill-opacity:1;stroke:none;"/>
<g clip-path="url(#clip1)" clip-rule="nonzero">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(85.000381%,85.000381%,85.000381%);fill-opacity:1;" d="M 16.902344 224.71875 L 231.816406 224.71875 L 231.816406 86.355469 L 231.769531 86.371094 L 230.988281 86.621094 L 230.792969 86.6875 L 229.816406 87 L 229.425781 87.128906 L 229.226563 87.191406 L 229.03125 87.253906 L 228.25 87.507813 L 227.859375 87.636719 L 227.46875 87.761719 L 225.875 88.28125 L 225.078125 88.542969 L 224.679688 88.671875 L 224.480469 88.738281 L 224.378906 88.769531 L 224.277344 88.804688 L 221.886719 89.589844 L 221.289063 89.789063 L 221.1875 89.820313 L 221.089844 89.851563 L 214.253906 92.128906 L 207.953125 94.261719 L 201.195313 96.589844 L 194.3125 99.007813 L 187.960938 101.277344 L 181.15625 103.757813 L 174.882813 106.089844 L 168.484375 108.515625 L 161.632813 111.175781 L 155.308594 113.679688 L 148.535156 116.433594 L 141.632813 119.308594 L 135.265625 122.035156 L 128.441406 125.039063 L 122.148438 127.890625 L 115.402344 131.046875 L 108.53125 134.371094 L 102.191406 137.554688 L 95.398438 141.097656 L 89.136719 144.5 L 82.75 148.128906 L 75.910156 152.21875 L 69.597656 156.203125 L 62.835938 160.75 L 55.945313 165.742188 L 49.585938 170.757813 L 42.773438 176.710938 L 36.496094 182.941406 L 33.292969 186.507813 L 31.691406 188.421875 L 30.890625 189.417969 L 30.488281 189.925781 L 30.289063 190.183594 L 30.191406 190.3125 L 30.089844 190.441406 L 28.375 192.75 L 27.515625 193.964844 L 27.089844 194.59375 L 26.875 194.914063 L 26.765625 195.074219 L 26.660156 195.234375 L 24.945313 197.949219 L 24.085938 199.417969 L 23.65625 200.183594 L 23.445313 200.578125 L 23.335938 200.773438 L 23.230469 200.976563 L 21.648438 204.15625 L 20.855469 205.949219 L 20.460938 206.910156 L 20.261719 207.414063 L 20.164063 207.667969 L 20.066406 207.929688 L 19.273438 210.179688 L 18.878906 211.445313 L 18.679688 212.125 L 18.582031 212.480469 L 18.484375 212.847656 L 18.085938 214.4375 L 17.890625 215.332031 L 17.792969 215.8125 L 17.691406 216.324219 L 17.496094 217.449219 L 17.394531 218.082031 L 17.296875 218.78125 L 17.199219 219.578125 L 17.097656 220.519531 L 17 221.75 L 16.902344 224.691406 Z M 16.902344 224.71875 "/>
</g>
<g clip-path="url(#clip2)" clip-rule="nonzero">
<path style="fill:none;stroke-width:2;stroke-linecap:square;stroke-linejoin:miter;stroke:rgb(50.000763%,50.000763%,50.000763%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 229.691406 L 83 226.75 L 83.097656 225.519531 L 83.199219 224.578125 L 83.296875 223.78125 L 83.394531 223.082031 L 83.496094 222.449219 L 83.691406 221.324219 L 83.792969 220.8125 L 83.890625 220.332031 L 84.085938 219.4375 L 84.484375 217.847656 L 84.582031 217.480469 L 84.679688 217.125 L 84.878906 216.445313 L 85.273438 215.179688 L 86.066406 212.929688 L 86.164063 212.667969 L 86.261719 212.414063 L 86.460938 211.910156 L 86.855469 210.949219 L 87.648438 209.15625 L 89.230469 205.976563 L 89.335938 205.773438 L 89.445313 205.578125 L 89.65625 205.183594 L 90.085938 204.417969 L 90.945313 202.949219 L 92.660156 200.234375 L 92.765625 200.074219 L 92.875 199.914063 L 93.089844 199.59375 L 93.515625 198.964844 L 94.375 197.75 L 96.089844 195.441406 L 96.191406 195.3125 L 96.289063 195.183594 L 96.488281 194.925781 L 96.890625 194.417969 L 97.691406 193.421875 L 99.292969 191.507813 L 102.496094 187.941406 L 108.773438 181.710938 L 115.585938 175.757813 L 121.945313 170.742188 L 128.835938 165.75 L 135.597656 161.203125 L 141.910156 157.21875 L 148.75 153.128906 L 155.136719 149.5 L 161.398438 146.097656 L 168.191406 142.554688 L 174.53125 139.371094 L 181.402344 136.046875 L 188.148438 132.890625 L 194.441406 130.039063 L 201.265625 127.035156 L 207.632813 124.308594 L 214.535156 121.433594 L 221.308594 118.679688 L 227.632813 116.175781 L 234.484375 113.515625 L 240.882813 111.089844 L 247.15625 108.757813 L 253.960938 106.277344 L 260.3125 104.007813 L 267.195313 101.589844 L 273.953125 99.261719 L 280.253906 97.128906 L 287.089844 94.851563 L 293.46875 92.761719 L 299.722656 90.742188 L 306.511719 88.585938 L 312.84375 86.601563 L 319.707031 84.480469 L 326.117188 82.527344 L 332.402344 80.636719 L 339.21875 78.613281 L 345.582031 76.75 L 352.472656 74.757813 L 359.242188 72.824219 L 365.558594 71.042969 L 372.402344 69.132813 L 378.792969 67.367188 L 385.0625 65.660156 L 391.859375 63.824219 L 398.203125 62.128906 L 398.3125 62.097656 L 398.421875 62.070313 L 398.644531 62.011719 L 399.085938 61.894531 L 399.972656 61.660156 L 401.742188 61.191406 L 401.855469 61.160156 L 401.964844 61.132813 L 402.1875 61.074219 L 403.511719 60.722656 L 403.625 60.695313 L 403.734375 60.664063 L 403.957031 60.605469 L 404.398438 60.488281 L 404.507813 60.460938 L 404.621094 60.433594 L 404.839844 60.375 L 404.953125 60.34375 L 405.0625 60.316406 L 405.171875 60.285156 L 405.285156 60.257813 " transform="matrix(1,0,0,1,-66,-5)"/>
</g>
<g clip-path="url(#clip3)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.2;stroke-linecap:square;stroke-linejoin:miter;stroke:rgb(94.999619%,62.699321%,14.250401%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 229.71875 L 405.285156 229.71875 " transform="matrix(1,0,0,1,-66,-5)"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:square;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 91.355469 L 405.285156 91.355469 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 229.71875 L 82.902344 225.757813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="9.950684" y="236.76965"/>
  <use xlink:href="#glyph0-2" x="15.512208" y="236.76965"/>
  <use xlink:href="#glyph0-1" x="18.290528" y="236.76965"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 93.648438 229.71875 L 93.648438 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 104.394531 229.71875 L 104.394531 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 115.140625 229.71875 L 115.140625 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 125.886719 229.71875 L 125.886719 225.757813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="52.934996" y="236.76965"/>
  <use xlink:href="#glyph0-2" x="58.49652" y="236.76965"/>
  <use xlink:href="#glyph0-3" x="61.27484" y="236.76965"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 136.632813 229.71875 L 136.632813 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 147.378906 229.71875 L 147.378906 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 158.125 229.71875 L 158.125 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 168.871094 229.71875 L 168.871094 225.757813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="95.919308" y="236.76965"/>
  <use xlink:href="#glyph0-2" x="101.480832" y="236.76965"/>
  <use xlink:href="#glyph0-4" x="104.259152" y="236.76965"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 179.617188 229.71875 L 179.617188 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 190.363281 229.71875 L 190.363281 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 201.109375 229.71875 L 201.109375 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 211.855469 229.71875 L 211.855469 225.757813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="138.90362" y="236.76965"/>
  <use xlink:href="#glyph0-2" x="144.465144" y="236.76965"/>
  <use xlink:href="#glyph0-5" x="147.243464" y="236.76965"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 222.601563 229.71875 L 222.601563 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 233.347656 229.71875 L 233.347656 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 244.09375 229.71875 L 244.09375 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 254.839844 229.71875 L 254.839844 225.757813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="181.887932" y="236.76965"/>
  <use xlink:href="#glyph0-2" x="187.449456" y="236.76965"/>
  <use xlink:href="#glyph0-6" x="190.227776" y="236.76965"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 265.585938 229.71875 L 265.585938 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 276.332031 229.71875 L 276.332031 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 287.078125 229.71875 L 287.078125 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 297.824219 229.71875 L 297.824219 225.757813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-7" x="224.872244" y="236.76965"/>
  <use xlink:href="#glyph0-2" x="230.433768" y="236.76965"/>
  <use xlink:href="#glyph0-1" x="233.212088" y="236.76965"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 308.570313 229.71875 L 308.570313 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 319.316406 229.71875 L 319.316406 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 330.0625 229.71875 L 330.0625 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 340.808594 229.71875 L 340.808594 225.757813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-7" x="267.856556" y="236.76965"/>
  <use xlink:href="#glyph0-2" x="273.41808" y="236.76965"/>
  <use xlink:href="#glyph0-3" x="276.1964" y="236.76965"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 351.554688 229.71875 L 351.554688 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 362.300781 229.71875 L 362.300781 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 373.046875 229.71875 L 373.046875 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 383.792969 229.71875 L 383.792969 225.757813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-7" x="310.840868" y="236.76965"/>
  <use xlink:href="#glyph0-2" x="316.402392" y="236.76965"/>
  <use xlink:href="#glyph0-4" x="319.180712" y="236.76965"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 394.539063 229.71875 L 394.539063 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 405.285156 229.71875 L 405.285156 227.339844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:square;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 76.183594 229.71875 L 412 229.71875 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(40%,40%,40%);fill-opacity:1;">
  <use xlink:href="#glyph0-8" x="354" y="228.183713"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 229.71875 L 86.863281 229.71875 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 222.796875 L 85.277344 222.796875 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 215.878906 L 85.277344 215.878906 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 208.960938 L 85.277344 208.960938 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 202.042969 L 86.863281 202.042969 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="-0.000000000000014211" y="200.511041"/>
  <use xlink:href="#glyph0-2" x="5.561524" y="200.511041"/>
  <use xlink:href="#glyph0-3" x="8.339844" y="200.511041"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 195.125 L 85.277344 195.125 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 188.207031 L 85.277344 188.207031 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 181.289063 L 85.277344 181.289063 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 174.371094 L 86.863281 174.371094 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="-0.000000000000014211" y="172.838369"/>
  <use xlink:href="#glyph0-2" x="5.561524" y="172.838369"/>
  <use xlink:href="#glyph0-4" x="8.339844" y="172.838369"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 167.453125 L 85.277344 167.453125 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 160.535156 L 85.277344 160.535156 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 153.617188 L 85.277344 153.617188 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 146.699219 L 86.863281 146.699219 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="-0.000000000000014211" y="145.165697"/>
  <use xlink:href="#glyph0-2" x="5.561524" y="145.165697"/>
  <use xlink:href="#glyph0-5" x="8.339844" y="145.165697"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 139.78125 L 85.277344 139.78125 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 132.863281 L 85.277344 132.863281 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 125.945313 L 85.277344 125.945313 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 119.027344 L 86.863281 119.027344 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="-0.000000000000014211" y="117.493024"/>
  <use xlink:href="#glyph0-2" x="5.561524" y="117.493024"/>
  <use xlink:href="#glyph0-6" x="8.339844" y="117.493024"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 112.109375 L 85.277344 112.109375 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 105.191406 L 85.277344 105.191406 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 98.273438 L 85.277344 98.273438 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 91.355469 L 86.863281 91.355469 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-7" x="-0.000000000000014211" y="89.820352"/>
  <use xlink:href="#glyph0-2" x="5.561524" y="89.820352"/>
  <use xlink:href="#glyph0-1" x="8.339844" y="89.820352"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 84.433594 L 85.277344 84.433594 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 77.515625 L 85.277344 77.515625 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 70.597656 L 85.277344 70.597656 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 63.679688 L 86.863281 63.679688 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-7" x="-0.000000000000014211" y="62.14768"/>
  <use xlink:href="#glyph0-2" x="5.561524" y="62.14768"/>
  <use xlink:href="#glyph0-3" x="8.339844" y="62.14768"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 56.761719 L 85.277344 56.761719 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 49.84375 L 85.277344 49.84375 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 42.925781 L 85.277344 42.925781 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 36.007813 L 86.863281 36.007813 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#glyph0-7" x="-0.000000000000014211" y="34.475008"/>
  <use xlink:href="#glyph0-2" x="5.561524" y="34.475008"/>
  <use xlink:href="#glyph0-4" x="8.339844" y="34.475008"/>
</g>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 29.089844 L 85.277344 29.089844 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 22.171875 L 85.277344 22.171875 " transform="matrix(1,0,0,1,-66,-5)"/>
<path style="fill:none;stroke-width:0.2;stroke-linecap:square;stroke-linejoin:miter;stroke:rgb(40%,40%,40%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 82.902344 229.71875 L 82.902344 22.171875 " transform="matrix(1,0,0,1,-66,-5)"/>
<g style="fill:rgb(40%,40%,40%);fill-opacity:1;">
  <use xlink:href="#glyph0-9" x="14.401368" y="9.052734"/>
</g>
<g clip-path="url(#clip4)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.2;stroke-linecap:square;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:3.25;" d="M 297.824219 229.71875 L 297.824219 91.355469 " transform="matrix(1,0,0,1,-66,-5)"/>
</g>
</g>
</svg>
</div>

直观的，当小方块的数量趋近于无穷多时，小方块面积和就是$\sqrt{x},y=0,y=1$与x轴围成的面积，也就是$\int_{0}^{1} \sqrt{n}$.

那怎么求呢？为了方便的求，可以把[0,1] n等分，而不是随机分，这样每一个矩形的宽度就是$1/n$，高度可以取f(区间左端点)或者f(区间右端点)，因为当区间无穷小（n无穷大）时这俩没啥区别.

这样小方块面积和就是
$$
\sum_{i=1}^{n}  底 \times 高
=\sum_{i=1}^{n} \frac{1}{n}\times f(区间右端点) = \sum_{i=1}^{n}\frac{1}{n}\times f(\frac{i}{n})
$$
再取个极限
$$
\lim_{n\to\infty}\sum_{i=1}^{n}\frac{1}{n}\times f(\frac{i}{n}) = \lim_{n\to\infty}\sum_{i=1}^{n}\frac{1}{n}\times \sqrt{\frac{i}{n}} =\int_{0}^{1} \sqrt{n}
$$
把式子结构调整一下
$$
\lim_{n\to\infty}\sum_{i=1}^{n}\frac{1}{n}\times \sqrt{\frac{i}{n}} = \lim_{n\to\infty}\frac{1}{n}\sum_{i=1}^{n}\times \sqrt{\frac{i}{n}} = \lim_{n\to\infty}\frac{1}{n}\times \frac{1}{\sqrt{n}}\times(\sqrt{1}+\sqrt{2}+...+\sqrt{n})
$$
就是原式.

所以只需求
$$
\int_0^1 \sqrt{x} = [\frac{2}{3} x^{\frac{3}{2}}]_0^1 =\frac{2}{3}
$$

## Pull back

but,怎么联想到$\int_{0}^{1} \sqrt{n}$？回归定义，最直观的办法就是观察到有**面积**的表达式和$1/n$和$i/n$的关系~~（也许是这样~~.

主包最开始想两边夹的. 一定要来评论区补充啊/(ㄒoㄒ)/~~