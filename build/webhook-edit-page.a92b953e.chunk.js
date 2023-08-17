"use strict";(self.webpackChunkblogaceff=self.webpackChunkblogaceff||[]).push([[5162],{34882:(X,y,t)=>{t.d(y,{Z:()=>le});var e=t(67294),T=t(45421),E=t(11047),P=t(64777),U=t(77197),z=t(65833),Z=t(33709),l=t(54580),se=t(63237),ae=t(75515),V=t(26031),G=t(36213),A=t(92155),Q=t(41054),ie=t(45697),f=t.n(ie),_=t(86896),D=t(88972),de=t(92686);const m=s=>s.reduce((o,c)=>{const v=c.split(".")[0];return o[v]||(o[v]=[]),o[v].push(c),o},{}),B=(0,D.ZP)(T.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,re=s=>{const o=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(o.push({id:"app.utils.publish",defaultMessage:"Publish"}),o.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),o},Y=s=>{const o=["entry.create","entry.update","entry.delete"];return s&&o.push("entry.publish","entry.unpublish"),{entry:o,media:["media.create","media.update","media.delete"]}},J=e.createContext(),oe=({children:s})=>{const{formatMessage:o}=(0,_.Z)(),{collectionTypes:c,isLoading:v}=(0,de.G)(),u=e.useMemo(()=>c.some(S=>S.options.draftAndPublish===!0),[c]),L=o({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return e.createElement(J.Provider,{value:{isDraftAndPublish:u}},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(P.Q,{"aria-hidden":!0},L),v&&e.createElement(U.a,null,o({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})),e.createElement(B,{"aria-label":L},s)))};oe.propTypes={children:f().oneOfType([f().arrayOf(f().node),f().node]).isRequired};const q=({getHeaders:s=re})=>{const{isDraftAndPublish:o}=e.useContext(J),{formatMessage:c}=(0,_.Z)(),v=s(o);return e.createElement(z.S,null,e.createElement(Z.Z,null,e.createElement(l.g,null,e.createElement(se.T,null,c({id:"Settings.webhooks.event.select",defaultMessage:"Select event"}))),v.map(u=>["app.utils.publish","app.utils.unpublish"].includes(u.id)?e.createElement(l.g,{key:u.id,title:c({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(ae.Z,{variant:"sigma",textColor:"neutral600"},c(u))):e.createElement(l.g,{key:u.id},e.createElement(ae.Z,{variant:"sigma",textColor:"neutral600"},c(u))))))};q.defaultProps={getHeaders:re},q.propTypes={getHeaders:f().func};const ee=({providedEvents:s})=>{const{isDraftAndPublish:o}=e.useContext(J),c=s||Y(o),{values:v,handleChange:u}=(0,Q.u6)(),L="events",S=v.events,F=[],x=m(S),k=({target:{name:M,value:g}})=>{let O=new Set(S);g?O.add(M):O.delete(M),u({target:{name:L,value:Array.from(O)}})},$=({target:{name:M,value:g}})=>{let O=new Set(S);g?c[M].forEach(C=>{F.includes(C)||O.add(C)}):c[M].forEach(C=>O.delete(C)),u({target:{name:L,value:Array.from(O)}})};return e.createElement(V.X,null,Object.entries(c).map(([M,g])=>e.createElement(j,{disabledEvents:F,key:M,name:M,events:g,inputValue:x[M],handleSelect:k,handleSelectAll:$})))};ee.defaultProps={providedEvents:null},ee.propTypes={providedEvents:f().object};const ce=s=>s.replace(/-/g," ").split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()).join(" "),j=({disabledEvents:s,name:o,events:c,inputValue:v,handleSelect:u,handleSelectAll:L})=>{const{formatMessage:S}=(0,_.Z)(),F=c.filter(g=>!s.includes(g)),x=v.length>0,k=v.length===F.length,$=({target:{name:g}})=>{L({target:{name:g,value:!k}})},M=5;return e.createElement(Z.Z,null,e.createElement(l.f,null,e.createElement(G.X,{indeterminate:x&&!k,"aria-label":S({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:o,onChange:$,value:k},ce(o))),c.map(g=>e.createElement(l.f,{key:g},e.createElement(A.C,{disabled:s.includes(g),"aria-label":g,name:g,value:v.includes(g),onValueChange:O=>u({target:{name:g,value:O}})}))),c.length<M&&e.createElement(l.f,{colSpan:M-c.length}))};j.defaultProps={disabledEvents:[],events:[],inputValue:[],handleSelect(){},handleSelectAll(){}},j.propTypes={disabledEvents:f().array,events:f().array,inputValue:f().array,handleSelect:f().func,handleSelectAll:f().func,name:f().string.isRequired};const le={Root:oe,Headers:q,Body:ee,EventRow:j}},81164:(X,y,t)=>{t.d(y,{Z:()=>fe});var e=t(67294),T=t(185),E=t(57993),P=t(88767),U=t(16550),z=t(92686),Z=t(53979),l=t(11047),se=t(29728),ae=t(49066),V=t(41580),G=t(11276),A=t(67819),Q=t(16364),ie=t(90321),f=t(85018),_=t(67109),D=t(41054),de=t(45697),m=t.n(de),B=t(86896),re=t(80902),Y=t(34882);function J(){return e.createElement(Y.Z.Root,null,e.createElement(Y.Z.Headers,null),e.createElement(Y.Z.Body,null))}var oe=t(64777),q=t(39785),ee=t(96315),ce=t(29178),j=t(90608);const le=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],s=({name:n,onChange:a,value:r,...d})=>{const{values:{headers:h}}=(0,D.u6)(),[b,i]=(0,e.useState)(le);(0,e.useEffect)(()=>{i(le.filter(p=>!h?.some(K=>K.key!==r&&K.key===p)))},[h,r]);const w=p=>{a({target:{name:n,value:p}})},N=p=>{i(K=>[...K,p]),w(p)};return e.createElement(ce.XU,{...d,onClear:()=>w(""),onChange:w,onCreateOption:N,placeholder:"",value:r},b.map(p=>e.createElement(j.O,{value:p,key:p},p)))};s.defaultProps={value:void 0},s.propTypes={name:m().string.isRequired,onChange:m().func.isRequired,value:m().string};const o=s,v=()=>{const{formatMessage:n}=(0,B.Z)(),{values:a,errors:r}=(0,D.u6)();return e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(oe.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(V.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(D.F2,{validateOnChange:!1,name:"headers",render:({push:d,remove:h})=>e.createElement(G.r,{gap:4},a.headers.map((b,i)=>e.createElement(e.Fragment,{key:`${i}.${b.key}`},e.createElement(A.P,{col:6},e.createElement(D.gN,{as:o,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:r.headers?.[i]?.key&&r.headers[i].key})),e.createElement(A.P,{col:6},e.createElement(l.k,{alignItems:"flex-end"},e.createElement(V.x,{style:{flex:1}},e.createElement(D.gN,{as:Q.o,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:r.headers?.[i]?.value&&r.headers[i].value})),e.createElement(l.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:r.headers?.[i]?.value?0:5},e.createElement(E.fG,{disabled:a.headers.length===1,onClick:()=>h(i),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})))))),e.createElement(A.P,{col:12},e.createElement(q.A,{type:"button",onClick:()=>{d({key:"",value:""})},startIcon:e.createElement(ee.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var u=t(75515),L=t(86647),S=t(70968),F=t(88972);const x=F.ZP.svg(({theme:n,color:a})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[a]};
  }
`),k=({isPending:n,statusCode:a})=>{const{formatMessage:r}=(0,B.Z)();return n?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(x,{as:L.Z}),e.createElement(u.Z,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):a>=200&&a<300?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(x,{as:f.Z,color:"success700"}),e.createElement(u.Z,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):a>=300?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(x,{as:S.Z,color:"danger700"}),e.createElement(u.Z,null,r({id:"Settings.error",defaultMessage:"error"})," ",a)):null};k.propTypes={isPending:m().bool.isRequired,statusCode:m().number},k.defaultProps={statusCode:void 0};const $=({statusCode:n,message:a})=>{const{formatMessage:r}=(0,B.Z)();return n>=200&&n<300?e.createElement(l.k,{justifyContent:"flex-end"},e.createElement(u.Z,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(l.k,{justifyContent:"flex-end"},e.createElement(l.k,{maxWidth:(0,E.Q1)(250),justifyContent:"flex-end",title:a},e.createElement(u.Z,{ellipsis:!0,textColor:"neutral600"},a))):null};$.propTypes={statusCode:m().number,message:m().string},$.defaultProps={statusCode:void 0,message:void 0};const M=({onCancel:n})=>{const{formatMessage:a}=(0,B.Z)();return e.createElement(l.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(u.Z,{textColor:"neutral400"},a({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(x,{as:S.Z,color:"neutral400"}))))};M.propTypes={onCancel:m().func.isRequired};const g=({isPending:n,onCancel:a,response:r})=>{const{statusCode:d,message:h}=r,{formatMessage:b}=(0,B.Z)();return e.createElement(V.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(G.r,{gap:4,style:{alignItems:"center"}},e.createElement(A.P,{col:3},e.createElement(u.Z,null,b({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(A.P,{col:3},e.createElement(k,{isPending:n,statusCode:d})),e.createElement(A.P,{col:6},n?e.createElement(M,{onCancel:a}):e.createElement($,{statusCode:d,message:h}))))};g.defaultProps={isPending:!1,onCancel(){},response:{}},g.propTypes={isPending:m().bool,onCancel:m().func,response:m().object};const O=g;var C=t(87561);const me=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ee=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,he=({formatMessage:n})=>C.Ry().shape({name:C.Z_().required(n({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(me,n({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:C.Z_().required(n({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ee,n({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:C.Vo(a=>{let r=C.IX();if(a.length===1){const{key:d,value:h}=a[0];if(!d&&!h)return r}return r.of(C.Ry().shape({key:C.Z_().required(n({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:C.Z_().required(n({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:C.IX()}),ue=({handleSubmit:n,triggerWebhook:a,isCreating:r,isTriggering:d,triggerResponse:h,data:b})=>{const{formatMessage:i}=(0,B.Z)(),[w,N]=(0,e.useState)(!1),p=(0,re.c)(J,async()=>(await t.e(568).then(t.bind(t,70568))).EventTableEE),K=W=>Object.keys(W).length?Object.entries(W).map(([te,ne])=>({key:te,value:ne})):[{key:"",value:""}],R=(0,D.TA)({initialValues:{name:b?.name||"",url:b?.url||"",headers:K(b?.headers||{}),events:b?.events||[]},onSubmit(W,{resetForm:te,setSubmitting:ne}){n(W),te({values:W}),ne(!1)},validationSchema:he({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return p?e.createElement(D.Hy,{value:R},e.createElement(E.l0,{onSubmit:R.handleSubmit},e.createElement(Z.T,{primaryAction:e.createElement(l.k,{gap:2},e.createElement(se.z,{onClick:()=>{a(),N(!0)},variant:"tertiary",startIcon:e.createElement(ie.Z,null),disabled:r||d,size:"L"},i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(se.z,{startIcon:e.createElement(f.Z,null),type:"submit",size:"L",disabled:!R.dirty,loading:R.isSubmitting},i({id:"global.save",defaultMessage:"Save"}))),title:r?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):b?.name,navigationAction:e.createElement(E.rU,{startIcon:e.createElement(_.Z,null),to:"/settings/webhooks"},i({id:"global.back",defaultMessage:"Back"}))}),e.createElement(ae.D,null,e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:4},w&&e.createElement(O,{isPending:d,response:h,onCancel:()=>N(!1)}),e.createElement(V.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(G.r,{gap:6},e.createElement(A.P,{col:6},e.createElement(D.gN,{as:Q.o,name:"name",error:R?.errors?.name&&R.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(A.P,{col:12},e.createElement(D.gN,{as:Q.o,name:"url",error:R?.errors?.url&&R.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(v,null),e.createElement(p,null))))))):null};ue.propTypes={data:m().object,handleSubmit:m().func.isRequired,triggerWebhook:m().func.isRequired,isCreating:m().bool.isRequired,isTriggering:m().bool.isRequired,triggerResponse:m().object},ue.defaultProps={data:void 0,triggerResponse:void 0};const pe=ue,ge=n=>({...n,headers:n.headers.reduce((a,{key:r,value:d})=>(r!==""&&(a[r]=d),a),{})}),fe=()=>{const{params:{id:n}}=(0,U.$B)("/settings/webhooks/:id"),a=n==="create",{replace:r}=(0,U.k6)(),d=(0,E.lm)(),{formatAPIError:h}=(0,E.So)(),b=(0,P.useQueryClient)(),{isLoading:i}=(0,z.G)(),{put:w,get:N,post:p}=(0,E.kY)(),{isLoading:K,data:R,error:W}=(0,P.useQuery)(["webhooks",n],async()=>{const{data:{data:I}}=await N(`/admin/webhooks/${n}`);return I},{enabled:!a});e.useEffect(()=>{W&&d({type:"warning",message:h(W)})},[W,d,h]);const{isLoading:te,data:ne,isIdle:ve,mutate:Me}=(0,P.useMutation)(()=>p(`/admin/webhooks/${n}/trigger`)),Ce=()=>Me(null,{onError(I){d({type:"warning",message:h(I)})}}),ye=(0,P.useMutation)(I=>p("/admin/webhooks",I)),Pe=(0,P.useMutation)(({id:I,body:H})=>w(`/admin/webhooks/${I}`,H)),be=async I=>{if(a){ye.mutate(ge(I),{onSuccess({data:H}){d({type:"success",message:{id:"Settings.webhooks.created"}}),r(`/settings/webhooks/${H.data.id}`)},onError(H){d({type:"warning",message:h(H)})}});return}Pe.mutate({id:n,body:ge(I)},{onSuccess(){b.invalidateQueries(["webhooks",n]),d({type:"success",message:{id:"notification.form.success.fields"}})},onError(H){d({type:"warning",message:h(H)})}})};return K||i?e.createElement(E.dO,null):e.createElement(T.o,null,e.createElement(E.SL,{name:"Webhooks"}),e.createElement(pe,{data:R,handleSubmit:be,triggerWebhook:Ce,isCreating:a,isTriggering:te,isTriggerIdle:ve,triggerResponse:ne?.data.data}))}},71589:(X,y,t)=>{t.r(y),t.d(y,{default:()=>Z});var e=t(67294),T=t(57993),E=t(86706),P=t(36364),U=t(81164);const Z=()=>{const l=(0,E.v9)(P._);return e.createElement(T.O4,{permissions:l.settings.webhooks.create},e.createElement(U.Z,null))}},10372:(X,y,t)=>{t.r(y),t.d(y,{default:()=>Z});var e=t(67294),T=t(57993),E=t(86706),P=t(36364),U=t(81164);const Z=()=>{const l=(0,E.v9)(P._);return e.createElement(T.O4,{permissions:l.settings.webhooks.update},e.createElement(U.Z,null))}},90608:(X,y,t)=>{t.d(y,{O:()=>T});var e=t(29178);const T=e.Wx},67109:(X,y,t)=>{t.d(y,{Z:()=>E});var e=t(85893);const T=P=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...P,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),E=T}}]);
