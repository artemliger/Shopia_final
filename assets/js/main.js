!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nwindow.onload = function () {\n  $('.carousel').slick({\n    arrows: true,\n    dots: true,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    speed: 1000\n  });\n  var categoryItem = document.querySelectorAll('.categories .categories-item');\n  var hoverItem = document.querySelectorAll('.categories .item-hover');\n\n  var _loop = function _loop(i) {\n    categoryItem[i].addEventListener('mouseenter', function () {\n      hoverItem[i].classList.remove('hover');\n    });\n    categoryItem[i].addEventListener('mouseleave', function () {\n      hoverItem[i].classList.add('hover');\n    });\n  };\n\n  for (var i = 0; i < categoryItem.length; i++) {\n    _loop(i);\n  }\n\n  $('.show').slick({\n    arrows: true,\n    dots: false,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    speed: 1000,\n    slidesToShow: 3,\n    slidesToScroll: 3,\n    mobileFirst: true,\n    responsive: [{\n      breakpoint: 960,\n      settings: 'unslick'\n    }, {\n      breakpoint: 950,\n      settings: 'slick'\n    }]\n  });\n  $('.burger-btn').on(\"click\", function () {\n    $('.header-top__bar').slideToggle('slow');\n  });\n};\n\n//# sourceURL=webpack:///./src/js/main.js?")}]);