!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("Quill")):"function"==typeof define&&define.amd?define(["Quill"],n):"object"==typeof exports?exports.nQuillImageLink=n(require("Quill")):e.nQuillImageLink=n(e.Quill)}(this,function(e){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function e(n){r(this,e);var t=document.getElementsByClassName("ql-image-link");t&&[].slice.call(t).forEach(function(e){e.innerHTML='\n                    <span\n                        style="\n                            font-size: 14px;\n                            font-weight: bold;\n                            line-height: 14px;">\n                        图\n                    </span>\n                '})};u.default.register({"modules/toolbar_image_link":i},!0),n.default=i},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(0);Object.defineProperty(n,"toolbarImageLink",{enumerable:!0,get:function(){return r(o).default}})},function(n,t){n.exports=e}])});