(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[4,7,8],{163:function(e,t,a){"use strict";var c=a(2),r=a(10),n=a(3),s=a(4),o=a.n(s),i=a(0),l=a(38),b=a(6),d=a(1),j=["as","bsPrefix","variant","size","active","className"],f=i.forwardRef((function(e,t){var a=e.as,s=e.bsPrefix,i=e.variant,f=e.size,u=e.active,O=e.className,x=Object(n.a)(e,j),m=Object(b.b)(s,"btn"),v=Object(l.b)(Object(c.a)({tagName:a},x)),p=Object(r.a)(v,2),h=p[0],y=p[1].tagName;return Object(d.jsx)(y,Object(c.a)(Object(c.a)(Object(c.a)({},h),x),{},{ref:t,className:o()(O,m,u&&"active",i&&"".concat(m,"-").concat(i),f&&"".concat(m,"-").concat(f),x.href&&x.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f},87:function(e,t,a){"use strict";a.r(t);a(0),a(89);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},90:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(10),s=a(3),o=a(4),i=a.n(o),l=a(6),b=a(1),d=["as","bsPrefix","className"],j=["className"];var f=r.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,r=e.className,n=Object(s.a)(e,d);a=Object(l.b)(a,"col");var o=Object(l.a)(),b=[],j=[];return o.forEach((function(e){var t,c,r,s=n[e];delete n[e],"object"===typeof s&&null!=s?(t=s.span,c=s.offset,r=s.order):t=s;var o="xs"!==e?"-".concat(e):"";t&&b.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=r&&j.push("order".concat(o,"-").concat(r)),null!=c&&j.push("offset".concat(o,"-").concat(c))})),[Object(c.a)(Object(c.a)({},n),{},{className:i.a.apply(void 0,[r].concat(b,j))}),{as:t,bsPrefix:a,spans:b}]}(e),r=Object(n.a)(a,2),o=r[0],f=o.className,u=Object(s.a)(o,j),O=r[1],x=O.as,m=void 0===x?"div":x,v=O.bsPrefix,p=O.spans;return Object(b.jsx)(m,Object(c.a)(Object(c.a)({},u),{},{ref:t,className:i()(f,!p.length&&v)}))}));f.displayName="Col";var u=f,O=a(25),x=a(66),m=["bsPrefix","className","variant","as"],v=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,o=e.as,d=void 0===o?"img":o,j=Object(s.a)(e,m),f=Object(l.b)(a,"card-img");return Object(b.jsx)(d,Object(c.a)({ref:t,className:i()(n?"".concat(f,"-").concat(n):f,r)},j))}));v.displayName="CardImg";var p=v,h=a(67),y=["bsPrefix","className","as"],g=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,j=Object(s.a)(e,y),f=Object(l.b)(a,"card-header"),u=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(b.jsx)(h.a.Provider,{value:u,children:Object(b.jsx)(d,Object(c.a)(Object(c.a)({ref:t},j),{},{className:i()(n,f)}))})}));g.displayName="CardHeader";var N=g,S=["bsPrefix","className","bg","text","border","body","children","as"],P=Object(x.a)("h5"),w=Object(x.a)("h6"),C=Object(O.a)("card-body"),k=Object(O.a)("card-title",{Component:P}),B=Object(O.a)("card-subtitle",{Component:w}),T=Object(O.a)("card-link",{Component:"a"}),R=Object(O.a)("card-text",{Component:"p"}),V=Object(O.a)("card-footer"),E=Object(O.a)("card-img-overlay"),F=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,o=e.text,d=e.border,j=e.body,f=e.children,u=e.as,O=void 0===u?"div":u,x=Object(s.a)(e,S),m=Object(l.b)(a,"card");return Object(b.jsx)(O,Object(c.a)(Object(c.a)({ref:t},x),{},{className:i()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),d&&"border-".concat(d)),children:j?Object(b.jsx)(C,{children:f}):f}))}));F.displayName="Card",F.defaultProps={body:!1};var I=Object.assign(F,{Img:p,Title:k,Subtitle:B,Body:C,Link:T,Text:R,Header:N,Footer:V,ImgOverlay:E}),z=a(163),H=["bsPrefix","bg","pill","text","className","as"],M=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,n=e.pill,o=e.text,d=e.className,j=e.as,f=void 0===j?"span":j,u=Object(s.a)(e,H),O=Object(l.b)(a,"badge");return Object(b.jsx)(f,Object(c.a)(Object(c.a)({ref:t},u),{},{className:i()(d,O,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));M.displayName="Badge",M.defaultProps={bg:"primary",pill:!1};var J=M,L=a(19),A=a(168),D={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};t.default=function(e){var t,a,n=Object(r.useContext)(L.a),s=e.project;return Object(b.jsx)(u,{children:Object(b.jsxs)(I,{style:Object(c.a)(Object(c.a)({},D.cardStyle),{},{backgroundColor:n.cardBackground,borderColor:n.cardBorderColor}),text:n.bsSecondaryVariant,children:[Object(b.jsx)(I.Img,{variant:"top",src:null===s||void 0===s?void 0:s.image}),Object(b.jsxs)(I.Body,{children:[Object(b.jsx)(I.Title,{style:D.cardTitleStyle,children:s.title}),Object(b.jsx)(I.Text,{style:D.cardTextStyle,children:(a=s.bodyText,Object(b.jsx)(A.a,{children:a}))})]}),Object(b.jsx)(I.Body,{children:null===s||void 0===s||null===(t=s.links)||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(z.a,{style:D.buttonStyle,variant:"outline-"+n.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),s.tags&&Object(b.jsx)(I.Footer,{style:{backgroundColor:n.cardFooterBackground},children:s.tags.map((function(e){return Object(b.jsx)(J,{pill:!0,bg:n.bsSecondaryVariant,text:n.bsPrimaryVariant,style:D.badgeStyle,children:e},e)}))})]})})}},95:function(e,t,a){"use strict";a.r(t);var c=a(10),r=a(0),n=a(142),s=a(2),o=a(3),i=a(4),l=a.n(i),b=a(6),d=a(1),j=["bsPrefix","className","as"],f=r.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,r=e.as,n=void 0===r?"div":r,i=Object(o.a)(e,j),f=Object(b.b)(a,"row"),u=Object(b.a)(),O="".concat(f,"-cols"),x=[];return u.forEach((function(e){var t,a=i[e];delete i[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&x.push("".concat(O).concat(c,"-").concat(t))})),Object(d.jsx)(n,Object(s.a)(Object(s.a)({ref:t},i),{},{className:l.a.apply(void 0,[c,f].concat(x))}))}));f.displayName="Row";var u=f,O=a(163),x=a(19),m=a(68),v=a.n(m),p=a(87),h=a(24),y=a(90),g=a(29),N={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};t.default=function(e){var t,a=Object(r.useContext)(x.a),s=e.header,o=Object(r.useState)(null),i=Object(c.a)(o,2),l=i[0],b=i[1],j=Object(r.useState)(!1),f=Object(c.a)(j,2),m=f[0],S=f[1];Object(r.useEffect)((function(){fetch(h.a.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return e}))}),[]);var P=m&&l?l.length:6;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.default,{title:s}),l?Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsxs)(n.a,{style:N.containerStyle,children:[Object(d.jsx)(u,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(t=l.projects)||void 0===t?void 0:t.slice(0,P).map((function(e){return Object(d.jsx)(v.a,{children:Object(d.jsx)(y.default,{project:e})},e.title)}))}),!m&&Object(d.jsx)(O.a,{style:N.showMoreStyle,variant:a.bsSecondaryVariant,onClick:function(){return S(!0)},children:"show more"})]})}):Object(d.jsx)(g.default,{})]})}}}]);
//# sourceMappingURL=4.f54b11ce.chunk.js.map