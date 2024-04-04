"use strict";(self.webpackChunknody=self.webpackChunknody||[]).push([[636],{3296:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var r=n(5043),o=n(5475),c=n(5693),s=n.n(c),i=n(7523),a=n(2327),l=n(2345),f=n(5173),u=n.n(f),b=n(6794);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var d=["className","cssModule","tag","innerRef"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var x={children:u().node,tag:b.Wx,innerRef:u().oneOfType([u().object,u().func,u().string]),className:u().string,cssModule:u().object},w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(s,e);var t,n,o,c=j(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).getRef=t.getRef.bind(v(t)),t.submit=t.submit.bind(v(t)),t}return t=s,(n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.tag,c=void 0===o?"form":o,s=e.innerRef,i=y(e,d),a=(0,b.qO)(t,n);return r.createElement(c,m({},i,{ref:s,className:a}))}}])&&h(t.prototype,n),o&&h(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Component);w.propTypes=x;const N=w;var k=n(8139),P=n.n(k),R=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M={children:u().node,row:u().bool,check:u().bool,switch:u().bool,inline:u().bool,floating:u().bool,noMargin:u().bool,disabled:u().bool,tag:b.Wx,className:u().string,cssModule:u().object};function z(e){var t=e.className,n=e.cssModule,o=e.row,c=e.disabled,s=e.check,i=e.inline,a=e.floating,l=e.noMargin,f=e.tag,u=void 0===f?"div":f,p=e.switch,d=E(e,R),m=s||p,y=(0,b.qO)(P()(t,!!o&&"row",!!m&&"form-check",!!p&&"form-switch",!m&&!l&&"mb-3",!(!m||!i)&&"form-check-inline",!(!m||!c)&&"disabled",a&&"form-floating"),n);return"fieldset"===u&&(d.disabled=c),r.createElement(u,S({},d,{className:y}))}z.propTypes=M;const T=z;var _=["className","cssModule","hidden","widths","tag","check","size","for"];function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var q=["xs","sm","md","lg","xl","xxl"],I=u().oneOfType([u().number,u().string]),W=u().oneOfType([u().bool,u().string,u().number,u().shape({size:I,order:I,offset:I})]),B={children:u().node,hidden:u().bool,check:u().bool,size:u().string,for:u().string,tag:b.Wx,className:u().string,cssModule:u().object,xs:W,sm:W,md:W,lg:W,xl:W,xxl:W,widths:u().array},F=function(e,t,n){return!0===n||""===n?e?"col":"col-".concat(t):"auto"===n?e?"col-auto":"col-".concat(t,"-auto"):e?"col-".concat(n):"col-".concat(t,"-").concat(n)};function G(e){var t=e.className,n=e.cssModule,o=e.hidden,c=e.widths,s=void 0===c?q:c,i=e.tag,a=void 0===i?"label":i,l=e.check,f=e.size,u=e.for,p=D(e,_),d=[];s.forEach((function(t,r){var o=e[t];if(delete p[t],o||""===o){var c,s=!r;if((0,b.Gv)(o)){var i,a=s?"-":"-".concat(t,"-");c=F(s,t,o.size),d.push((0,b.qO)(P()((C(i={},c,o.size||""===o.size),C(i,"order".concat(a).concat(o.order),o.order||0===o.order),C(i,"offset".concat(a).concat(o.offset),o.offset||0===o.offset),i))),n)}else c=F(s,t,o),d.push(c)}}));var m=f||d.length,y=!(l||m),h=(0,b.qO)(P()(t,!!o&&"visually-hidden",!!l&&"form-check-label",!!f&&"col-form-label-".concat(f),d,!!m&&"col-form-label",!!y&&"form-label"),n);return r.createElement(a,A({htmlFor:u},p,{className:h}))}G.propTypes=B;const L=G;function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}var V=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Z(e);if(t){var o=Z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return X(e)}(this,n)}}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}var $={children:u().node,type:u().string,size:u().oneOfType([u().number,u().string]),bsSize:u().string,valid:u().bool,invalid:u().bool,tag:b.Wx,innerRef:u().oneOfType([u().object,u().func,u().string]),plaintext:u().bool,addon:u().bool,className:u().string,cssModule:u().object},ee=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(s,e);var t,n,o,c=Q(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).getRef=t.getRef.bind(X(t)),t.focus=t.focus.bind(X(t)),t}return t=s,(n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,c=void 0===o?"text":o,s=e.bsSize,i=e.valid,a=e.invalid,l=e.tag,f=e.addon,u=e.plaintext,p=e.innerRef,d=H(e,V),m=["switch","radio","checkbox"].indexOf(c)>-1,y="select"===c,h="range"===c,g=l||(y||"textarea"===c?c:"input"),j="form-control";u?(j="".concat(j,"-plaintext"),g=l||"input"):h?j="form-range":y?j="form-select":m&&(j=f?null:"form-check-input"),d.size&&/\D/g.test(d.size)&&((0,b.mc)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=d.size,delete d.size);var v=(0,b.qO)(P()(t,a&&"is-invalid",i&&"is-valid",!!s&&(y?"form-select-".concat(s):"form-control-".concat(s)),j),n);return("input"===g||l&&"function"===typeof l)&&(d.type="switch"===c?"checkbox":c),d.children&&!u&&"select"!==c&&"string"===typeof g&&"select"!==g&&((0,b.mc)('Input with a type of "'.concat(c,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete d.children),r.createElement(g,Y({},d,{ref:p,className:v,"aria-invalid":a}))}}])&&J(t.prototype,n),o&&J(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Component);ee.propTypes=$;const te=ee;var ne=["className","cssModule","variant","innerRef"];function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},re.apply(this,arguments)}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ie={active:u().bool,"aria-label":u().string,onClick:u().func,variant:u().oneOf(["white"]),className:u().string,cssModule:u().object,innerRef:u().oneOfType([u().object,u().string,u().func])};function ae(e){var t=e.className,n=(e.cssModule,e.variant),o=e.innerRef,c=se(e,ne),s=(0,b.qO)(P()(t,"btn-close",n&&"btn-close-".concat(n)));return r.createElement("button",re({ref:o,type:"button",className:s},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({"aria-label":"close"},c)))}ae.propTypes=ie;const le=ae;var fe=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"];function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var pe={active:u().bool,"aria-label":u().string,block:u().bool,children:u().node,className:u().string,cssModule:u().object,close:u().bool,color:u().string,disabled:u().bool,innerRef:u().oneOfType([u().object,u().func,u().string]),onClick:u().func,outline:u().bool,size:u().string,tag:b.Wx};function de(e){var t=(0,r.useCallback)((function(t){if(!e.disabled)return e.onClick?e.onClick(t):void 0;t.preventDefault()}),[e.onClick,e.disabled]),n=e.active,o=e["aria-label"],c=e.block,s=e.className,i=e.close,a=e.cssModule,l=e.color,f=void 0===l?"secondary":l,u=e.outline,p=e.size,d=e.tag,m=void 0===d?"button":d,y=e.innerRef,h=be(e,fe);if(i)return r.createElement(le,h);var g="btn".concat(u?"-outline":"","-").concat(f),j=(0,b.qO)(P()(s,"btn",g,!!p&&"btn-".concat(p),!!c&&"d-block w-100",{active:n,disabled:e.disabled}),a);return h.href&&"button"===m&&(m="a"),r.createElement(m,ue({type:"button"===m&&h.onClick?"button":void 0},h,{className:j,ref:y,onClick:t,"aria-label":o}))}de.propTypes=pe;const me=de,ye=n.p+"static/media/contact-img.d79dd481a5afbe1ed64a.png";var he=n(579);class ge extends r.Component{render(){return(0,he.jsx)(r.Fragment,{children:(0,he.jsx)("section",{className:"section",id:"contact",children:(0,he.jsxs)(i.A,{children:[(0,he.jsx)(a.A,{className:"justify-content-center",children:(0,he.jsx)(l.A,{lg:7,children:(0,he.jsxs)("div",{className:"text-center mb-5",children:[(0,he.jsx)("h2",{className:"",children:"Contact Us"}),(0,he.jsx)("p",{className:"text-muted"})]})})}),(0,he.jsxs)(a.A,{className:"align-items-center justify-content-center",children:[(0,he.jsx)(l.A,{lg:6,md:10,children:(0,he.jsx)("div",{className:"mb-5 mb-lg-0",children:(0,he.jsxs)("div",{className:"text-center",children:[(0,he.jsx)("img",{src:ye,alt:"",className:"img-fluid d-block w-75 mx-auto"}),(0,he.jsx)("h4",{className:"mt-4",children:"Are You Facing Any Problem..?"}),(0,he.jsx)("p",{className:"text-muted mb-4"}),(0,he.jsxs)("a",{href:"https://wa.link/sfune1",className:"btn btn-success",target:"_blank",rel:"noopener noreferrer",children:[(0,he.jsx)(s(),{className:"icon mr-2 icon-fill-white",icon:"message-circle"})," Start Live Chat"]}),(0,he.jsx)("p",{className:"mt-4",children:"Or you can contact at"}),(0,he.jsxs)(a.A,{children:[(0,he.jsx)(l.A,{md:6,children:(0,he.jsx)(o.N_,{to:"#",children:(0,he.jsxs)("div",{className:"badge f-14 bg-soft-dark text-muted",children:[(0,he.jsx)("span",{className:"text-dark mr-1",children:"Email:"})," info@zyberloop.com"]})})}),(0,he.jsx)(l.A,{md:6,className:"mt-2 mt-sm-0",children:(0,he.jsx)(o.N_,{to:"#",children:(0,he.jsxs)("div",{className:"badge f-14 bg-soft-dark text-muted",children:[(0,he.jsx)("span",{className:"text-dark mr-1",children:"Phone:"})," (+94) 72 303 2555"]})})})]})]})})}),(0,he.jsxs)(l.A,{lg:5,className:"offset-lg-1",children:[(0,he.jsx)("h4",{className:"line-height-1_4 mb-4",children:"Get in Touch"}),(0,he.jsxs)("div",{className:"custom-form mt-4 mt-lg-0",children:[(0,he.jsx)("div",{id:"message"}),(0,he.jsxs)(N,{method:"post",name:"contact-form",id:"contact-form",children:[(0,he.jsxs)(a.A,{children:[(0,he.jsx)(l.A,{md:6,children:(0,he.jsxs)(T,{className:"app-label",children:[(0,he.jsx)(L,{for:"name",className:"form-label",children:"Name"}),(0,he.jsx)(te,{name:"name",id:"name",type:"text",className:"form-control",placeholder:"Enter your name .."})]})}),(0,he.jsx)(l.A,{md:6,children:(0,he.jsxs)(T,{className:"app-label",children:[(0,he.jsx)(L,{for:"lastname",className:"form-label",children:"Email address"}),(0,he.jsx)(te,{name:"email",id:"email",type:"email",className:"form-control",placeholder:"Enter your email .."})]})}),(0,he.jsx)(l.A,{md:12,children:(0,he.jsxs)(T,{className:"app-label",children:[(0,he.jsx)(L,{for:"email",className:"form-label",children:"Subject"}),(0,he.jsx)(te,{name:"text",id:"text",type:"text",className:"form-control",placeholder:"Enter Subject .."})]})}),(0,he.jsx)(l.A,{md:12,children:(0,he.jsxs)(T,{className:"app-label",children:[(0,he.jsx)(L,{for:"comments",className:"form-label",children:"Massage"}),(0,he.jsx)(te,{name:"comments",id:"comments",type:"textarea",rows:"4",className:"form-control",placeholder:"Enter essage. . ."})]})})]}),(0,he.jsx)(a.A,{children:(0,he.jsxs)(l.A,{lg:12,children:[(0,he.jsx)(me,{color:"primary",id:"submit",name:"send",className:"btn btn-primary",children:"Send Message"}),(0,he.jsx)("div",{id:"simple-msg"})]})})]})]})]})]})]})})})}}}}]);
//# sourceMappingURL=636.de08c2ee.chunk.js.map