function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}var r=document.querySelector(".logo"),t=document.querySelector("body"),n=new Promise(function(e){r.addEventListener("click",function(){e(["message","Promise was resolved!"])})}),o=new Promise(function(e,r){setTimeout(function(){r(Error())},3e3)});function a(r){var n=function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,u=!1;try{for(o=o.call(e);!(i=(t=o.next()).done)&&(a.push(t.value),2!==a.length);i=!0);}catch(e){u=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(u)throw n}}return a}}(r,2)||function(r,t){if(r){if("string"==typeof r)return e(r,2);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,2)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=n[0],a=n[1],i=document.createElement("div");i.classList.add("message"),"error-message"===o&&i.classList.add(o),i.textContent=a,t.append(i)}n.then(a),o.catch(function(){return a(["error-message","Promise was rejected!"])});
//# sourceMappingURL=index.cc18b3b8.js.map
