/*! (C) WebReflection Mit Style License */
var sob=function(e){"use strict";function E(){var e=n.call(t),i=1e3/p.minFPS,o=!1,u=b.length?g.unshift.apply(g,b):g.length;if(u||s&&y.length){r(E),b=g.splice(0,u);while(u--){f(b.shift()),o=n.call(t)-e>=i;if(o)break}u+=1+g.length,p.isOverloaded=o||u>m,m=u,p.debug&&p.isOverloaded&&console.warn("overloaded frame"),s&&!o&&y.length&&f(y.shift())}else d=!1,p.isOverloaded=d}function S(){var e=n.call(t),r=1e3/p.minFPS,s=w.length?y.unshift.apply(y,w):y.length;if(s){i(S),w=y.splice(0,s);while(s--){f(w.shift());if(n.call(t)-e>=r)break}}else v=!1}var t=e.performance||{now:Date.now},n=t.now||t.webkitNow||function(){return(new Date).getTime()},r=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){setTimeout(e,16)},i=e.requestIdleCallback,s=!i,o=function(t,n){return t===this[n]},u=function(t){for(var n=this,r=[],i={id:{},fn:t,ar:r},s=1;s<arguments.length;s++)r[s-1]=arguments[s];return c(n,i)||(n.push(i),i.id)},a=function(t,n){var r=l(t,n),i=-1<r;return i&&t.splice(r,1),i},f=function(t){t.fn.apply(null,t.ar)},l=function(t,n){var r=t.length;while(r--&&t[r].id!==n);return r},c=function(t,n){for(var r=0,i;r<t.length;r++){i=t[r];if(i.fn===n.fn&&i.ar.length===n.ar.length&&i.ar.every(o,n.ar))return i.id}return null},h=function(){d||(d=!0,r(E))},p={debug:!1,isOverloaded:!1,minFPS:60,clear:function(t){void (a(g,t)||a(y,t)||a(b,t)||a(w,t))},frame:function(){return h(),u.apply(g,arguments)},idle:function(){return s?h():v||(v=!0,i(S)),u.apply(y,arguments)}},d=!1,v=!1,m=0,g=[],y=[],b=[],w=[];return p}(window);