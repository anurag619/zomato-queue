!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e.name,e.concurrency<2)throw this.limit=2,new Error("Minimum concurrency should be 2. Setting it to 2");this.limit=e.concurrency,this.limit=e.concurrency,this.async=e.async,this.store=[],this.active=0,this.startQueue=!1}return r(t,[{key:"test",value:function(){console.log("hello world!!!")}},{key:"createJob",value:function(t){this.startQueue=t.startQueue,this.active<this.limit&&this.startQueue?this.runTask(t):(console.log("queuing task "+name),this.store.push(t))}},{key:"runTask",value:function(t){var e=this,n=t.taskType;this.active++;if(console.log("Scheduling task of type "+n+": active: "+this.active),this.async)if("url"===n)this.fetchCalls(t.data,t.method,t.payload).then(function(){e.active--,e.nextTask()});else{var r=" "+Math.floor(1e3*Math.random());t.data(r).then(function(){e.active--,e.nextTask()})}else"url"===n?(this.fetchCalls(t.data,t.method,t.payload),this.active--,this.nextTask()):(t.data(),this.active--,this.nextTask())}},{key:"nextTask",value:function(){this.store.length&&this.runTask(this.store.shift())}},{key:"runAllTasks",value:function(){for(var t=0;t<this.store.length;t++){var e=this.store.shift();this.active<this.limit?this.runTask(e):(console.log("queuing task "+name),this.store.push(e))}}},{key:"runBackgroundTasks",value:function(){var t=JSON.stringify({store:this.store,limit:this.limit});if(navigator.serviceWorker){if(navigator.serviceWorker.controller){var e=new MessageChannel;e.port1.onmessage=function(t){console.log("Response from the SW : ",t.data.status)},navigator.serviceWorker.controller.postMessage(t,[e.port2])}else console.log("This page is not currently controlled by a service worker.");navigator.serviceWorker.register("worker.js",{scope:"./"}).then(function(t){navigator.serviceWorker.ready}).catch(function(t){console.log("Registration failed with "+t)})}return this}},{key:"getTaskStatus",value:function(){}},{key:"fetchCalls",value:async function(t,e,n){fetch(t,{method:e,headers:new Headers,body:JSON.stringify(n)}).then(function(t){return console.log("Task response came back as: "+t.status),t.status}).catch(function(t){return console.log(JSON.stringify(t)),JSON.stringify(t)})}}]),t}();t.exports=o}]);