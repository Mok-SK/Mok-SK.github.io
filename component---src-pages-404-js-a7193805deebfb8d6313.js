(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),o=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(148);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(155),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,c=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.siteMetadata.keywords>0?{name:"keywords",content:s.siteMetadata.keywords.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(146),o=a(147).a.div.withConfig({displayName:"nav-button__DisabledButton",componentId:"sc-1qoiq4n-0"})(["opacity:0.5;"]);t.a=function(e){var t=e.title,a=e.to,n=e.sprite,s=e.enabled,c=e.external;return s?c?r.a.createElement("a",{className:"sprite sprite-"+n,href:a,title:t,target:"_blank"}):r.a.createElement(i.a,{className:"sprite sprite-"+n,to:a,title:t}):r.a.createElement(o,{disabled:!0,className:"sprite sprite-"+n})}},151:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(146),l=a(147),u=a(150),d=l.a.header.withConfig({displayName:"header__Root",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;padding:10px 0 0 0;.sprite-logo{margin-bottom:28px;}"]),p=function(e){e.siteTitle;return i.a.createElement(d,null,i.a.createElement("div",{className:"sprite sprite-logo"}),i.a.createElement(u.a,{to:"https://www.facebook.com/OutOfTheKnownUniverse",title:"First",sprite:"fb",enabled:"true",external:"true"}))},m=(a(157),a(158),l.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-0"})(["text-align:center;"])),f=l.a.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-1"})(["margin:0 auto;max-width:587px;padding:0px 1.0875rem 1.45rem;padding-top:0;box-sizing:content-box;"]),y=function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(f,null,i.a.createElement("main",null,t),i.a.createElement(m,null,"© 2019 by Ivan Ruttkay-Nedecký")))},data:n})};y.propTypes={children:s.a.node.isRequired};t.a=y},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Out of the known universe",description:"Out of the known universe graphic novel",author:"Ivan Ruttkay-Nedecký",keywords:["novel","comics","sci-fi"]}}}}},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Out of the known universe"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-a7193805deebfb8d6313.js.map