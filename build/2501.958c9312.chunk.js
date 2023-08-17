"use strict";(self.webpackChunkblogaceff=self.webpackChunkblogaceff||[]).push([[2501],{7761:(I,p,e)=>{e.d(p,{pl:()=>i,aY:()=>M,q5:()=>P.q});var t=e(67294),E=e(57993),v=e(18172);const d={data:[],isLoading:!0},r=(l,s)=>(0,v.ZP)(l,a=>{switch(s.type){case"GET_DATA_SUCCEEDED":{a.data=s.data,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),i=({ssoEnabled:l})=>{const[s,a]=(0,t.useReducer)(r,d),O=(0,E.lm)(),{get:c}=(0,E.kY)();return(0,t.useEffect)(()=>{(async()=>{try{if(!l){a({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:h}=await c("/admin/providers");a({type:"GET_DATA_SUCCEEDED",data:h})}catch(h){console.error(h),a({type:"GET_DATA_ERROR"}),O({type:"warning",message:{id:"notification.error"}})}})()},[c,l,O]),s};var L=e(14293),g=e.n(L),f=e(86896),u=e(16550),P=e(71926);const o="strapi-notification-seat-limit",T="https://cloud.strapi.io/profile/billing",C="https://strapi.io/billing/request-seats",M=()=>{const{formatMessage:l}=(0,f.Z)();let{license:s,isError:a,isLoading:O}=(0,P.q)();const c=(0,E.lm)(),{pathname:A}=(0,u.TH)(),{enforcementUserCount:h,permittedSeats:R,licenseLimitStatus:y,isHostedOnStrapiCloud:S}=s;(0,t.useEffect)(()=>{if(a||O)return;const B=!g()(R)&&!window.sessionStorage.getItem(`${o}-${A}`)&&(y==="AT_LIMIT"||y==="OVER_LIMIT");let U;y==="OVER_LIMIT"?U="warning":y==="AT_LIMIT"&&(U="softWarning"),B&&c({type:U,message:l({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:y}),title:l({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:y,enforcementUserCount:h,permittedSeats:R}),link:{url:S?T:C,label:l({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:S})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${o}-${A}`,!0)}})},[c,s,A,l,O,R,y,h,S,a])}},71926:(I,p,e)=>{e.d(p,{q:()=>d});var t=e(67294),E=e(57993),v=e(88767);function d({enabled:m}={enabled:!0}){const{get:r}=(0,E.kY)(),{data:D,isError:i,isLoading:L}=(0,v.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:u}}=await r("/admin/license-limit-information");return u},{enabled:m}),g=D??{},f=t.useCallback(u=>(g?.features??[]).find(o=>o.name===u)?.options??{},[g?.features]);return{license:g,getFeature:f,isError:i,isLoading:L}}},80090:(I,p,e)=>{e.d(p,{Z:()=>C});var t=e(67294),E=e(11047),v=e(84495),d=e(75515),m=e(11276),r=e(67819),D=e(45697),i=e.n(D),L=e(86896),g=e(73727),f=e(88972);const u=f.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,P=(0,f.ZP)(E.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,o=({provider:n})=>t.createElement(v.u,{label:n.displayName},t.createElement(u,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.Z,null,n.displayName)));o.propTypes={provider:i().shape({icon:i().string,displayName:i().string.isRequired,uid:i().string.isRequired}).isRequired};const T=({providers:n,displayAllProviders:M})=>{const{formatMessage:l}=(0,L.Z)();return M?t.createElement(m.r,{gap:4},n.map(s=>t.createElement(r.P,{key:s.uid,col:4},t.createElement(o,{provider:s})))):n.length>2&&!M?t.createElement(m.r,{gap:4},n.slice(0,2).map(s=>t.createElement(r.P,{key:s.uid,col:4},t.createElement(o,{provider:s}))),t.createElement(r.P,{col:4},t.createElement(v.u,{label:l({id:"global.see-more"})},t.createElement(u,{as:g.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(P,{justifyContent:"center"},n.map(s=>t.createElement(o,{key:s.uid,provider:s})))};T.defaultProps={displayAllProviders:!0},T.propTypes={providers:i().arrayOf(i().object).isRequired,displayAllProviders:i().bool};const C=T},52501:(I,p,e)=>{e.r(p),e.d(p,{FORMS:()=>s});var t=e(67294),E=e(70004),v=e(185),d=e(41580),m=e(75515),r=e(11047),D=e(77197),i=e(29728),L=e(57993),g=e(86896),f=e(16550),u=e(88972),P=e(68890),o=e(50745),T=e(7761),C=e(80090);const n=(0,u.ZP)(E.i)`
  flex: 1;
`,s={providers:{Component:()=>{const a=window.strapi.features.isEnabled(window.strapi.features.SSO),{push:O}=(0,f.k6)(),{formatMessage:c}=(0,g.Z)(),{isLoading:A,data:h}=(0,T.pl)({ssoEnabled:a}),R=()=>{O("/auth/login")};return!a||!A&&h.length===0?t.createElement(f.l_,{to:"/auth/login"}):t.createElement(o.ZP,null,t.createElement(v.o,null,t.createElement(o.bU,null,t.createElement(o.sg,null,t.createElement(P.Z,null),t.createElement(d.x,{paddingTop:6,paddingBottom:1},t.createElement(m.Z,{as:"h1",variant:"alpha"},c({id:"Auth.form.welcome.title"}))),t.createElement(d.x,{paddingBottom:7},t.createElement(m.Z,{variant:"epsilon",textColor:"neutral600"},c({id:"Auth.login.sso.subtitle"})))),t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:7},A?t.createElement(r.k,{justifyContent:"center"},t.createElement(D.a,null,c({id:"Auth.login.sso.loading"}))):t.createElement(C.Z,{providers:h}),t.createElement(r.k,null,t.createElement(n,null),t.createElement(d.x,{paddingLeft:3,paddingRight:3},t.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},c({id:"or"}))),t.createElement(n,null)),t.createElement(i.z,{fullWidth:!0,size:"L",onClick:R},c({id:"Auth.form.button.login.strapi"})))),t.createElement(r.k,{justifyContent:"center"},t.createElement(d.x,{paddingTop:4},t.createElement(L.rU,{to:"/auth/forgot-password"},t.createElement(m.Z,{variant:"pi"},c({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}}}]);
