"use strict";(self.webpackChunknody=self.webpackChunknody||[]).push([[411],{2371:(e,s,t)=>{t.r(s),t.d(s,{default:()=>k});var i=t(5043),a=t(7523),n=t(4665),l=t(3611),r=t(2767),o=t(4645),c=t(8509),h=t(9790),d=t(5693),m=t.n(d),p=t(579);class v extends i.Component{constructor(e){super(e),this.scrollSection=()=>{let e;this.scrollTargetIds.forEach(((s,t)=>{e=document.getElementById(s).offsetTop-(this.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(s).scrollHeight?(this.getNavLinkElement(s).classList.add(this.activeNavClass),this.getNavLinkElement(s).parentNode.classList.add(this.activeNavClass),this.clearOtherNavLinkActiveStyle(s)):(this.getNavLinkElement(s).classList.remove(this.activeNavClass),this.getNavLinkElement(s).parentNode.classList.remove(this.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&t===this.scrollTargetIds.length-1&&(this.getNavLinkElement(s).classList.add(this.activeNavClass),this.getNavLinkElement(s).parentNode.classList.add(this.activeNavClass),this.clearOtherNavLinkActiveStyle(s))}))},this.props=e,this.scrollTargetIds=this.props.scrollTargetIds,this.activeNavClass=this.props.activeNavClass,this.scrollDuration=Number(this.props.scrollDuration)||1e3,this.headerBackground="true"===this.props.headerBackground,this.props.router&&"HashRouter"===this.props.router?(this.homeDefaultLink="#/",this.hashIdentifier="#/#"):(this.homeDefaultLink="/",this.hashIdentifier="#"),this.scrollSection.bind(this)}easeInOutQuad(e,s,t,i){return(e/=i/2)<1?t/2*e*e+s:-t/2*(--e*(e-2)-1)+s}scrollTo(e,s,t){let i=s-e,a=0,n=()=>{a+=10;let s=this.easeInOutQuad(a,e,i,t);window.scrollTo(0,s),a<t&&setTimeout(n,10)};n()}getNavLinkElement(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}getNavToSectionID(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}componentDidMount(){document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(e=>{e.preventDefault(),this.scrollTo(window.pageYOffset,0,this.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(s=>{s.preventDefault();let t=this.getNavToSectionID(e.getAttribute("href"));if(t){let e=document.getElementById(t).offsetTop-(this.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);this.scrollTo(window.pageYOffset,e,this.scrollDuration)}else this.scrollTo(window.pageYOffset,0,this.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}componentWillUnmount(){window.removeEventListener("scroll",this.scrollSection,!0)}clearOtherNavLinkActiveStyle(e){this.scrollTargetIds.forEach(((s,t)=>{s!==e&&(this.getNavLinkElement(s).classList.remove(this.activeNavClass),this.getNavLinkElement(s).parentNode.classList.remove(this.activeNavClass))}))}render(){return(0,p.jsx)("div",{"data-nav":"list",className:this.props.className,children:this.props.children})}}const u=v,g=t.p+"static/media/logo-dark.44150393b7b77562cf21.png";var N=t(197);class f extends i.Component{constructor(e){super(e),this.state={isOpenMenu:!1},this.toggle=this.toggle.bind(this)}toggle(){this.setState({isOpenMenu:!this.state.isOpenMenu})}render(){let e=this.props.navItems.map((e=>e.idnm));return(0,p.jsx)(i.Fragment,{children:(0,p.jsx)(a.A,{children:(0,p.jsxs)(n.A,{expand:"lg",fixed:!0===this.props.top?"top":"",className:this.props.navClass+" fixed-top navbar-custom sticky sticky-dark align-items-center",id:"navbar",container:!0,children:[(0,p.jsxs)("a",{className:"logo me-3",href:"/",children:[" ",!0===this.props.imglight?(0,p.jsx)("img",{src:N,alt:"",height:"30"}):(0,p.jsx)("img",{src:g,alt:"",height:"30"})]}),(0,p.jsx)(l.A,{onClick:this.toggle,children:(0,p.jsx)("span",{className:"ti-menu"})}),(0,p.jsx)(r.A,{id:"navbarCollapse",isOpen:this.state.isOpenMenu,className:" navbar-collapse",children:(0,p.jsxs)(u,{scrollTargetIds:e,scrollDuration:"800",headerBackground:"true",activeNavClass:"active",className:"navbar-collapse",children:[(0,p.jsx)(o.A,{className:"navbar-nav navbar-center",id:"navbar-navlist",children:this.props.navItems.map(((e,s)=>(0,p.jsx)(c.A,{className:"Home"===e.navheading?"active":"",children:(0,p.jsx)(h.A,{className:"Home"===e.navheading?"active":"",href:"#"+e.idnm,children:e.navheading})},s)))}),(0,p.jsxs)("ul",{className:"list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0",children:[(0,p.jsx)("li",{className:"list-inline-item ml-0",children:(0,p.jsx)("a",{href:"https://web.facebook.com/zyberloop",className:"menu-social-link",target:"_blank",children:(0,p.jsx)(m(),{icon:"facebook",className:"icon-xs sw_1-5"})})}),(0,p.jsx)("li",{className:"list-inline-item",children:(0,p.jsx)("a",{href:"https://www.instagram.com/zyberloop",className:"menu-social-link",children:(0,p.jsx)(m(),{icon:"instagram",className:"icon-xs sw_1-5"})})}),(0,p.jsx)("li",{className:"list-inline-item mr-0",children:(0,p.jsx)("a",{href:"https://www.linkedin.com/company/101731208/",className:"menu-social-link",children:(0,p.jsx)(m(),{icon:"linkedin",className:"icon-xs sw_1-5"})})})]})]})})]})})})}}const k=f},197:(e,s,t)=>{e.exports=t.p+"static/media/logo-light.60be019f10b827514260.png"}}]);
//# sourceMappingURL=411.4ce6e873.chunk.js.map