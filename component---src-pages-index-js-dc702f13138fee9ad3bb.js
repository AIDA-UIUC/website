(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(197),o=t(202),s=t.n(o),c=t(218),l=t.n(c);function m(){return r.a.createElement("div",{id:"header"},r.a.createElement("img",{src:l.a,alt:"Siebel Center"}),r.a.createElement("h1",null,s.a.heading),r.a.createElement("p",null,s.a.subHeading),r.a.createElement("br",null),r.a.createElement("h4",{style:{color:"orange"}},"First general meeting September 1st at 2:30 p.m. in Siebel 1109"))}t(49),t(39),t(29),t(30),t(13),t(23);var u=t(219),d=t.n(u);t(203);function p(e,a,t,n,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void t(l)}s.done?a(c):Promise.resolve(c).then(n,r)}var h=function(){var e=Object(n.useState)({}),a=e[0],r=e[1];return{handleChange:function(e){e.persist(),r(function(a){var t;return Object.assign({},a,((t={})[e.target.name]=e.target.value,t))})},handleSubmit:function(){var e,n=(e=d.a.mark(function e(n){var i,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t(220),e.prev=1,e.next=4,i.post("https://al210gps9i.execute-api.us-east-1.amazonaws.com/dev/message",JSON.stringify(a));case 4:return o=e.sent,console.log(o),e.next=8,alert("Message sent! We'll be in touch shortly.");case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0),e.next=15,alert("Internal server error. Could not send your message. Please message us on Facebook at facebook.com/adsa-uiuc.");case 15:r({});case 16:case"end":return e.stop()}},e,null,[[1,10]])}),function(){var a=this,t=arguments;return new Promise(function(n,r){var i=e.apply(a,t);function o(e){p(i,n,r,o,s,"next",e)}function s(e){p(i,n,r,o,s,"throw",e)}o(void 0)})});return function(e){return n.apply(this,arguments)}}(),values:a}};function f(){var e=h(),a=e.handleChange,t=e.handleSubmit,n=e.values;return r.a.createElement("form",{method:"post",onSubmit:function(){return!1}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 col-12-mobilep"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:a,value:n.name||""})),r.a.createElement("div",{className:"col-6 col-12-mobilep"},r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",onChange:a,value:n.email||""})),r.a.createElement("div",{className:"col-12"},r.a.createElement("textarea",{name:"message",placeholder:"Message",rows:"6",onChange:a,value:n.message||""})),r.a.createElement("div",{className:"col-12"},r.a.createElement("ul",{className:"actions special"},r.a.createElement("li",null,r.a.createElement("input",{type:"button",value:"Send message",onClick:t}))))))}function g(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"container medium"},r.a.createElement("header",{className:"major last"},r.a.createElement("h2",null,"Questions or comments?")),r.a.createElement("p",null,"Life will feel it is always a great time to chat"),r.a.createElement(f,null),r.a.createElement("ul",{className:"icons"},s.a.socialLinks.map(function(e){var a=e.icon,t=e.name,n=e.url;return r.a.createElement("li",{key:n},r.a.createElement("a",{href:n,className:"icon "+a},r.a.createElement("span",{className:"label"},t)))}))))}var v=t(241),b=t.n(v),E=t(242),y=t.n(E),w=t(243),k=t.n(w);t(244);var x=function(e){return r.a.createElement("section",{className:"feature "+e.side},r.a.createElement("a",{href:e.link,className:"image icon "+e.icon},r.a.createElement("img",{src:e.image,className:"image fit",alt:""})),r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.body)))};a.default=function(){return r.a.createElement(i.a,null,r.a.createElement(m,null),r.a.createElement("div",{id:"main"},r.a.createElement("header",{className:"major container medium"},r.a.createElement("h2",null,"Inspiring students from any background to reshape their perspective with data-driven decision making.")),r.a.createElement("div",{className:"box alt container"},r.a.createElement(x,{side:"left",link:"https://github.com/ADSA-UIUC/BeginnerWorkshopsSP19",icon:"fa-signal",image:b.a,title:"Practical Application Workshops",body:"Teaching foundational data science topics and Python tools in individualized sessions. These sessions are designed to be accessible to students from any background, hands-on, and independent from each other. Only come to workshops you are interested in!"}),r.a.createElement(x,{side:"right",link:"https://www.github.com/adsa-uiuc/advanced-workshops",icon:"fa-cogs",image:y.a,title:"Machine Learning Workshops",body:"Targeted towards experienced programmers and those seeking to gain insight into the programming of machine learning algorithms. These sessions are designed to challenge you on both the theory and implementation."}),r.a.createElement(x,{side:"left",link:"https://www.github.com/adsa-uiuc",icon:"fa-code",image:k.a,title:"Supported Team Projects",body:"Open-ended, real-world experience for students interested in data science. Past projects have included mental health sentiment analysis, meme and tweet generators, news web scrapers, and much more. Check them out on our GitHub!"}))),r.a.createElement(g,null))}},194:function(e,a,t){var n;e.exports=(n=t(196))&&n.default||n},195:function(e){e.exports={data:{site:{siteMetadata:{title:"Data Science @ Illinois"}}}}},196:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),r=t.n(n),i=t(99);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null}},197:function(e,a,t){"use strict";var n=t(195),r=t(0),i=t.n(r),o=t(198),s=t.n(o),c=(t(66),t(194),t(9).default.enqueue,i.a.createContext({}));function l(e){var a=e.staticQueryData,t=e.data,n=e.query,r=e.render,o=t?t.data:a[n]&&a[n].data;return i.a.createElement(i.a.Fragment,null,o&&r(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,r=e.children;return i.a.createElement(c.Consumer,null,function(e){return i.a.createElement(l,{data:a,query:t,render:n||r,staticQueryData:e})})};t(201);var u=function(e){var a,t;function r(a){var t;return(t=e.call(this,a)||this).state={isPreloaded:!0},t}t=e,(a=r).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var o=r.prototype;return o.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},o.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},o.render=function(){var e=this.props.children,a=this.state.isPreloaded;return i.a.createElement(m,{query:"1044757290",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Directive"},{name:"keywords",content:"site, web"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{className:a?"main-body is-preload":"main-body"},e))},data:n})},r}(r.Component);a.a=u},202:function(e,a){e.exports={siteTitle:"Data Science @ Illinois",manifestName:"adsa",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"./src/assets/images/adsa-logo-notext.png",heading:"The Association of Data Science and Analytics",subHeading:"We are the premier data science student organization at the University of Illinois",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/adsa-uiuc"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com/adsauiuc"},{icon:"fa-envelope-o",name:"Email",url:"mailto:bailey.tincher@btin.io"}]}},218:function(e,a,t){e.exports=t.p+"static/adsa-logo-notext-9b02fdddd07f33d7ef3b4cd6a2e52ddb.png"},241:function(e,a,t){e.exports=t.p+"static/practical-team-0b18f36afade77f13c9c81216ef5f323.jpg"},242:function(e,a,t){e.exports=t.p+"static/neural_network-263e80b123fd73d8598ae01262273b12.jpeg"},243:function(e,a,t){e.exports=t.p+"static/software-engineer-ba5cedc06aa033ac916be2c1f1a85832.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-dc702f13138fee9ad3bb.js.map