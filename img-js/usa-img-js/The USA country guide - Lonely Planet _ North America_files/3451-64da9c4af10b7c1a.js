"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3451],{9098:function(e,s,t){t.d(s,{O:function(){return p}});var i=t(85893),r=t(45697),n=t.n(r),l=t(93967),a=t.n(l),o=t(49636),c=t(67294),u=t(79724);let d=e=>"".concat("/"===e[0]?e:"/".concat(e));function g(e){let{slug:s="",blue:t=!1,title:r}=e,n=(0,c.useCallback)(()=>{(0,u.yv)("click",{actionOutcome:"INTERNALLINK",outboundUrl:"NULL",webElement:{location:"SECTION",elementType:"LINK",position:"OVERVIEW",text:"BREADCRUMBS"}})},[]);return s?(0,i.jsx)("a",{href:d(s),className:a()("transition-colors ease-out cursor-pointer inline-block",t?"text-blue no-underline":"text-black hover:text-blue link-underline"),itemProp:"item",id:s,onClick:n,children:(0,i.jsx)("span",{itemProp:"name",children:r})}):r}function p(e){let{breadcrumbs:s=[],blue:t=!1,useCarat:r=!1,useComma:n=!1,inline:l=!1}=e;return s[0]?(0,i.jsx)("nav",{className:a()("mb-4",l?"inline-block":"w-full"),"aria-label":"Breadcrumbs",children:(0,i.jsx)("ol",{itemScope:!0,itemType:"http://schema.org/BreadcrumbList",children:s.map((e,l)=>{let{hiddenMobile:c,slug:u,title:d}=e;return(0,i.jsxs)("li",{className:a()("font-semibold",{inline:!c,hidden:c,"md:inline":c}),"data-testid":"breadcrumb",itemScope:!0,itemProp:"itemListElement",itemType:"http://schema.org/ListItem",children:[(0,i.jsx)(g,{slug:u,title:d,blue:t}),(0,i.jsx)("meta",{itemProp:"position",content:l+1}),n&&l<s.length-1&&(0,i.jsx)("span",{className:"pr-2","aria-hidden":"true",children:","}),!n&&l<s.length-1&&(0,i.jsx)("span",{className:"px-2","aria-hidden":"true",children:r?(0,i.jsx)(o.w,{className:a()("inline -rotate-90 text-tiny")}):"/"})]},"".concat(d,"_").concat(u))})})}):null}g.propTypes={slug:n().string,title:n().string.isRequired,blue:n().bool},p.propTypes={breadcrumbs:n().arrayOf(n().shape({slug:n().string,title:n().string,hiddenMobile:n().bool})),blue:n().bool,useCarat:n().bool,useComma:n().bool,inline:n().bool}},35177:function(e,s,t){t.d(s,{T:function(){return h}});var i=t(85893),r=t(45697),n=t.n(r),l=t(93967),a=t.n(l),o=t(79724),c=t(12872),u=t(92301),d=t(9470),g=t(77246),p=t(79238),m=t(71876);function h(e){let{category:s="general",className:t=null,count:r=null,cost:n=null,description:l=null,duration:h=null,eyebrow:x=null,image:b=null,miles:f=null,subtitle:N=null,tagularName:y=null,tagularPosition:j="NEARBY",topChoice:R=!1,href:q,title:v}=e;return(0,i.jsxs)("article",{className:a()("relative rounded",t),children:[b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.X,{type:s,className:a()(b?"rounded":"rounded-t","relative aspect-square"),src:null==b?void 0:b.url,alt:null==b?void 0:b.alt,width:600,height:400,imgixParams:{fit:"crop",ar:"1:1"}}),R&&(0,i.jsx)(c.m,{className:"absolute top-4 left-4 z-10",width:"40px",height:"40px"})]}),(0,i.jsxs)("div",{className:a()("space-y-4",b?"mt-4":"p-4 bg-white rounded"),children:[x&&(0,i.jsx)(m.j,{children:x}),(0,i.jsx)("p",{children:(0,i.jsxs)("a",{className:"card-link line-clamp-2 w-[80%] md:w-90",href:q,onClick:()=>{(0,o.yv)("click",{actionOutcome:"INTERNALLINK",outboundUrl:q,webElement:{location:"SECTION",position:j,text:v,elementType:"LINK",...y&&{name:y}}})},children:[r&&(0,i.jsxs)("span",{className:"heading-05",children:[r,". "]}),(0,i.jsx)("span",{className:"heading-05 font-semibold",children:v})]})}),N&&(0,i.jsx)("p",{className:"text-sm font-semibold uppercase !mt-2",children:N}),(0,i.jsxs)("p",{className:a()("relative flex flex-wrap justify-start items-start gap-x-4 gap-y-2 max-w-full label-sm uppercase",{hidden:!f&&!h&&!n}),children:[f&&(0,i.jsxs)("span",{className:"inline-flex items-center",children:[(0,i.jsx)(u.Y,{className:"text-[#563753] mr-1"}),f," MILES"]}),!(null==b?void 0:b.url)&&(h||n)&&(0,i.jsxs)(i.Fragment,{children:[h&&(0,i.jsxs)("span",{className:"inline-flex items-center",children:[(0,i.jsx)(d.P,{className:"text-[#BA5632] mr-1"}),h]}),n&&(0,i.jsxs)("span",{className:"inline-flex items-center",children:[(0,i.jsx)(g.Q,{className:"text-[#607D6D] mr-1"}),n]})]})]}),(0,i.jsx)("p",{className:"relative line-clamp-3",children:l}),(null==b?void 0:b.url)&&(h||n)&&(0,i.jsxs)("p",{className:"flex items-center gap-x-4 gap-y-2 relative label-sm uppercase",children:[h&&(0,i.jsxs)("span",{className:"inline-flex items-center",children:[(0,i.jsx)(d.P,{className:"text-[#BA5632] mr-1 shrink-0"}),h]}),n&&(0,i.jsxs)("span",{className:"inline-flex items-center",children:[(0,i.jsx)(g.Q,{className:"text-[#607D6D] mr-1 shrink-0"}),n]})]})]})]})}h.propTypes={topChoice:n().bool,count:n().number,href:n().string.isRequired,image:n().shape({url:n().string,alt:n().string}),title:n().string.isRequired,subtitle:n().string,eyebrow:n().string,description:n().string,miles:n().oneOfType([n().string,n().number]),duration:n().string,cost:n().string,className:n().string,tagularPosition:n().string,tagularName:n().string,category:n().string}},49823:function(e,s,t){t.d(s,{V:function(){return d}});var i=t(85893),r=t(67294),n=t(5152),l=t.n(n),a=t(79238),o=t(79724),c=t(47071);let u=l()(()=>t.e(9456).then(t.bind(t,29456)).then(e=>e.HeroGallery),{loadableGenerated:{webpack:()=>[29456]},ssr:!1});function d(e){let{feature:s,secondary:t}=e,[n,l]=(0,r.useState)(!1);return(0,i.jsxs)("section",{className:"lg:px-6 lg:pb-6",children:[(0,i.jsxs)("div",{className:"relative lg:rounded-lg h-screen-1/2 lg:min-h-144 overflow-hidden",children:[(0,i.jsx)(a.X,{src:s.url,alt:s.alt,width:1920,height:640,imgixParams:{w:1920,h:640,fit:"crop",crop:"faces,edges"},className:"object-cover w-full h-full"}),(null==s?void 0:s.credit)&&(0,i.jsx)("p",{className:"absolute left-6 bottom-2 transform -translate-y-4 w-content p-1 m-0 bg-black bg-opacity-80 text-white text-xs leading-tight rounded-sm",children:s.credit}),(0,i.jsx)("div",{className:"z-10 absolute top-0 w-full h-full bg-gradient-to-b from-black/40 via-black/10 to-transparent"}),t&&t.length>2&&(0,i.jsxs)("button",{className:"absolute z-20 bottom-0 right-0 m-8 rounded shadow-lg bg-white p-1",type:"button",onClick:()=>{l(!0),(0,o.yv)("click",{actionOutcome:"open",outboundUrl:"null",webElement:{location:"hero",position:"gallery",text:"show photos",elementType:"button"}})},children:[(0,i.jsx)("span",{className:"block pt-1 pb-2 text-xs text-center font-semibold leading-none",children:"Gallery"}),(0,i.jsxs)("div",{className:"relative w-20 h-20",children:[(0,i.jsx)(a.X,{src:t[0].url,alt:t[0].alt,width:80,height:80,imgixParams:{w:80,h:80,fit:"crop"},className:"rounded"}),(0,i.jsxs)("span",{className:"absolute right-0 bottom-0 z-30 m-1 rounded-sm bg-transparent-80 px-1 text-sm text-white",children:["+ ",t.length]})]})]})]}),n&&(0,i.jsx)(u,{images:t,handleExit:()=>l(!1)})]})}d.propTypes={feature:c.Q.featuredImage,secondary:c.Q.images}},89957:function(e,s,t){t.d(s,{b:function(){return o}});var i=t(85893),r=t(45697),n=t.n(r),l=t(93967),a=t.n(l);function o(e){let{className:s="",flush:t=!1,inset:r=!1,children:n,...l}=e;return n?(0,i.jsx)("section",{className:a()("relative",{"my-12 md:mt-20":!t&&!r},{"py-12 md:py-20":r},s),...l,children:n}):null}o.propTypes={children:n().oneOfType([n().node,n().arrayOf(n().node)]).isRequired,className:n().string,flush:n().bool,inset:n().bool}},47071:function(e,s,t){t.d(s,{Q:function(){return l}});var i=t(45697),r=t.n(i),n=t(35143);let l={coordinates:r().shape({lat:r().string.isRequired,lon:r().string.isRequired}),editorial:r().string,featuredImage:r().shape({alt:r().string,caption:r().string,credit:r().string,url:r().string.isRequired}),images:r().arrayOf(r().shape({alt:r().string,caption:r().string,credit:r().string,url:r().string})),meta:r().shape({fullTitle:r().string.isRequired,tags:r().arrayOf(r().shape({content:r().string,name:r().string,property:r().string,tag:r().string}).isRequired).isRequired,searchableName:r().string}).isRequired,slug:r().string.isRequired,title:r().string.isRequired,travelAlert:r().string,intro:r().string.isRequired,breadcrumb:r().arrayOf(r().shape({slug:r().string,title:r().string})),mustSeePois:r().arrayOf(r().shape({topChoice:r().bool,href:r().string.isRequired,image:r().shape({url:r().string,alt:r().string}),title:r().string.isRequired,description:r().string,miles:r().number,cost:r().string,places:r().arrayOf(r().shape({title:r().string.isRequired}).isRequired)})),thingsToDoPois:r().shape({article:r().shape({title:r().string,slug:r().string,authors:r().arrayOf(r().shape({firstName:r().string,lastName:r().string,slug:r().string}))}),pois:r().arrayOf(r().shape({esid:r().string,subtitle:r().string,title:r().string,type:r().string,href:r().string,slug:r().string,image:r().shape({url:r().string,alt:r().string}),description:r().string,topChoice:r().bool}))}),freeThingsPois:r().shape({article:r().shape({title:r().string,slug:r().string,authors:r().arrayOf(r().shape({firstName:r().string,lastName:r().string,slug:r().string}))}),pois:r().arrayOf(r().shape({esid:r().string,subtitle:r().string,title:r().string,type:r().string,href:r().string,slug:r().string,image:r().shape({url:r().string,alt:r().string}),description:r().string,topChoice:r().bool}))}),relatedPlaces:r().arrayOf(r().shape({key:r().string.isRequired,slug:r().string.isRequired,title:r().string.isRequired,featuredImage:r().shape({alt:r().string,caption:r().string,credit:r().string,height:r().number,name:r().string,title:r().string,url:r().string,width:r().number}).isRequired}).isRequired),planning:r().shape({primary:r().arrayOf(r().shape({excerpt:r().string.isRequired,slug:r().string.isRequired,title:r().string.isRequired,tag:r().string.isRequired,copy:r().string.isRequired}).isRequired).isRequired,secondary:r().arrayOf(r().shape({excerpt:r().string.isRequired,slug:r().string.isRequired,title:r().string.isRequired,tag:r().string.isRequired,copy:r().string.isRequired}).isRequired)}).isRequired,articles:n.d.propTypes.articles,ctx:n.d.propTypes.ctx,books:r().arrayOf(r().shape({title:r().string.isRequired,image:r().string.isRequired,url:r().string.isRequired}))}}}]);
//# sourceMappingURL=3451-64da9c4af10b7c1a.js.map