"use strict";(self.webpackChunknody=self.webpackChunknody||[]).push([[481],{2765:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(5043),o=r(7523),a=r(2327),i=r(2345),c=r(5173),s=r.n(c),l=r(8139),u=r.n(l),f=n.createContext({}),p=r(6794);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var g={tag:p.Wx,activeTab:s().any,className:s().string,cssModule:s().object},j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(i,e);var t,r,o,a=m(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={activeTab:t.props.activeTab},t}return t=i,o=[{key:"getDerivedStateFromProps",value:function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null}}],(r=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.cssModule,o=e.tag,a=void 0===o?"div":o,i=(0,p.cJ)(this.props,Object.keys(g)),c=(0,p.qO)(u()("tab-content",t),r);return n.createElement(f.Provider,{value:{activeTabId:this.state.activeTab}},n.createElement(a,b({},i,{className:c})))}}])&&v(t.prototype,r),o&&v(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.Component);const O=j;j.propTypes=g;var x=["className","cssModule","tabId","tag"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function w(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var N={tag:p.Wx,className:s().string,cssModule:s().object,tabId:s().any};function T(e){var t=e.className,r=e.cssModule,o=e.tabId,a=e.tag,i=void 0===a?"div":a,c=w(e,x),s=function(e){return(0,p.qO)(u()("tab-pane",t,{active:o===e}),r)};return n.createElement(f.Consumer,null,(function(e){var t=e.activeTabId;return n.createElement(i,k({},c,{className:s(t)}))}))}T.propTypes=N;var P=r(4645),C=r(8509),E=r(9790);const S=r.p+"static/media/img-1.e30a84a035b641c8ca35.png",A=r.p+"static/media/img-2.2a71a06a43542960d935.png",_=r.p+"static/media/img-3.890d18152489b5b54b6c.png";var M=r(579);class R extends n.Component{constructor(e){super(e),this.state={activeTab:"v-pills-work"},this.toggleTab=this.toggleTab.bind(this)}toggleTab(e){this.state.activeTab!==e&&this.setState({activeTab:e})}render(){return(0,M.jsx)(n.Fragment,{children:(0,M.jsx)("section",{className:"section",id:"features",children:(0,M.jsxs)(o.A,{children:[(0,M.jsx)(a.A,{className:"justify-content-center",children:(0,M.jsx)(i.A,{lg:7,children:(0,M.jsxs)("div",{className:"text-center mb-5",children:[(0,M.jsx)("h2",{className:"",children:"Our Features"}),(0,M.jsx)("p",{className:"text-muted",children:"Our features include cutting-edge technology implementation, user-centric design, and data-driven marketing approaches, ensuring optimal performance and results for your business."})]})})}),(0,M.jsx)("div",{className:"features-content",children:(0,M.jsxs)(a.A,{className:"align-items-center",children:[(0,M.jsx)(i.A,{lg:6,className:"order-2 order-lg-1",children:(0,M.jsxs)(O,{id:"v-pills-tabContent",activeTab:this.state.activeTab,children:[(0,M.jsx)(T,{tabId:"v-pills-work",className:"fade show",children:(0,M.jsx)("img",{src:S,alt:"",className:"img-fluid d-block mx-auto"})}),(0,M.jsx)(T,{tabId:"v-pills-marketing",className:"fade show",children:(0,M.jsx)("img",{src:A,alt:"",className:"img-fluid d-block mx-auto"})}),(0,M.jsx)(T,{tabId:"v-pills-feedback",className:"fade show",children:(0,M.jsx)("img",{src:_,alt:"",className:"img-fluid d-block mx-auto"})})]})}),(0,M.jsx)(i.A,{lg:5,className:"offset-lg-1 order-1 order-lg-2",children:(0,M.jsxs)(P.A,{className:"flex-column",pills:!0,id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:[(0,M.jsx)(C.A,{children:(0,M.jsxs)(E.A,{href:"#",className:u()({active:"v-pills-work"===this.state.activeTab},"rounded"),onClick:()=>{this.toggleTab("v-pills-work")},id:"v-pills-work-tab",children:[(0,M.jsx)("h4",{className:"text-dark f-18",children:"Works With Existing Apps"}),(0,M.jsx)("p",{className:"text-muted f-15",children:"We specialize in enhancing and expanding your existing apps and websites, leveraging our expertise to elevate their functionality and performance to meet your evolving needs."})]})}),(0,M.jsx)(C.A,{children:(0,M.jsxs)(E.A,{href:"#",className:u()({active:"v-pills-marketing"===this.state.activeTab},"rounded"),onClick:()=>{this.toggleTab("v-pills-marketing")},id:"v-pills-work-tab",children:[(0,M.jsx)("h4",{className:"text-dark f-18",children:"Easy Email Marketing"}),(0,M.jsx)("p",{className:"text-muted f-15",children:"We offer targeted email marketing campaigns designed to reach and engage your audience effectively, driving conversions and fostering customer loyalty."})]})}),(0,M.jsx)(C.A,{children:(0,M.jsxs)(E.A,{href:"#",className:u()({active:"v-pills-feedback"===this.state.activeTab},"rounded"),onClick:()=>{this.toggleTab("v-pills-feedback")},id:"v-pills-work-tab",children:[(0,M.jsx)("h4",{className:"text-dark f-18",children:"Get Private Customers Feedback"}),(0,M.jsx)("p",{className:"text-muted f-15",children:"We prioritize private customer feedback to continuously improve our services and ensure customer satisfaction."})]})})]})})]})})]})})})}}const I=R},4645:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(5043),o=r(5173),a=r.n(o),i=r(8139),c=r.n(i),s=r(6794),l=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p={card:a().bool,className:a().string,cssModule:a().object,fill:a().bool,horizontal:a().oneOf(["center","end"]),justified:a().bool,navbar:a().bool,pills:a().bool,tabs:a().bool,tag:s.Wx,vertical:a().oneOfType([a().bool,a().string])};function d(e){var t=e.className,r=e.cssModule,o=e.tabs,a=e.pills,i=e.vertical,p=void 0!==i&&i,d=e.horizontal,b=e.justified,v=e.fill,y=e.navbar,m=e.card,h=e.tag,g=void 0===h?"ul":h,j=f(e,l),O=(0,s.qO)(c()(t,y?"navbar-nav":"nav",!!d&&"justify-content-".concat(d),function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-".concat(e,"-column"))}(p),{"nav-tabs":o,"card-header-tabs":m&&o,"nav-pills":a,"card-header-pills":m&&a,"nav-justified":b,"nav-fill":v}),r);return n.createElement(g,u({},j,{className:O}))}d.propTypes=p;const b=d},8509:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(5043),o=r(5173),a=r.n(o),i=r(8139),c=r.n(i),s=r(6794),l=["className","cssModule","active","tag"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p={active:a().bool,className:a().string,cssModule:a().object,tag:s.Wx};function d(e){var t=e.className,r=e.cssModule,o=e.active,a=e.tag,i=void 0===a?"li":a,p=f(e,l),d=(0,s.qO)(c()(t,"nav-item",!!o&&"active"),r);return n.createElement(i,u({},p,{className:d}))}d.propTypes=p;const b=d},9790:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(5043),o=r(5173),a=r.n(o),i=r(8139),c=r.n(i),s=r(6794);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var u=["className","cssModule","active","tag","innerRef"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,r)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var h={active:a().bool,className:a().string,cssModule:a().object,disabled:a().bool,href:a().any,innerRef:a().oneOfType([a().object,a().func,a().string]),onClick:a().func,tag:s.Wx},g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(i,e);var t,r,o,a=v(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).onClick=t.onClick.bind(y(t)),t}return t=i,(r=[{key:"onClick",value:function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.cssModule,o=e.active,a=e.tag,i=void 0===a?"a":a,l=e.innerRef,d=p(e,u),b=(0,s.qO)(c()(t,"nav-link",{disabled:d.disabled,active:o}),r);return n.createElement(i,f({},d,{ref:l,onClick:this.onClick,className:b}))}}])&&d(t.prototype,r),o&&d(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.Component);g.propTypes=h;const j=g}}]);
//# sourceMappingURL=481.8fb859a6.chunk.js.map