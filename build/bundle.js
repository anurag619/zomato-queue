!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};console.log("task google 1 Done!!");var s=new i.default(2,!0,!0,!1,"url");s.push(s,1)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(t,r,n,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.limit=t,this.store=[],this.active=0,this.async=n,this.startQueue=r,this.taskType=i}return n(e,[{key:"test",value:function(){console.log("hello world!!!")}},{key:"push",value:function(e,t){this.active<this.limit&&this.startQueue?this.runTask(e,t,this.taskType):(console.log("queuing task "+t),this.store.push([e,t]))}},{key:"runTask",value:function(e,t,r){var n=this;this.active++,console.log("Scheduling task "+t+" current active: "+this.active),this.async?"url"===r||e(t).then(function(){n.nextTask()}):"url"===r?this.fetchCalls("https://jsonplaceholder.typicode.com/todos"):(e(t),this.nextTask()),this.active--}},{key:"nextTask",value:function(){this.store.length&&this.runTask.apply(this,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.store.shift()).concat([this.taskType]))}},{key:"runAllTasks",value:function(){for(var e=this,t=!1,r=function(){var r=e.store[n];console.log("Scheduling task "+r[1]),t||setTimeout(function(){r[0](r[1]),t=!0},2e3*n)},n=0;n<this.store.length;n++)r()}},{key:"runBackgroundTasks",value:function(){var e=JSON.stringify(this.store);navigator.serviceWorker&&(navigator.serviceWorker.controller?navigator.serviceWorker.controller.postMessage(e):console.log("This page is not currently controlled by a service worker."),navigator.serviceWorker.register("worker.js",{scope:"./"}).then(function(e){console.log("Service Worker registration was successful with scope: ",e.scope),navigator.serviceWorker.ready}).catch(function(e){console.log("Registration failed with "+e)}))}},{key:"fetchCalls",value:function(e){fetch(e).then(function(e){return e.status}).then(function(e){console.log(JSON.stringify(e))})}}]),e}();t.default=o}]);