(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{9092:function(e,t,r){Promise.resolve().then(r.bind(r,1766))},1766:function(e,t,r){"use strict";r.r(t);var a=r(7437),i=r(7812),n=r(3226),o=r(3457),d=r(6869),s=r(9050),l=r(2265),c=r(9242),x=r(8777),p=r(4344),f=r(2750),g=r(4124),h=r(442);t.default=()=>{let[e,t]=l.useState(""),[r,u]=(0,l.useState)(""),[m,y]=(0,l.useState)(""),[b,Z]=(0,l.useState)(""),[j,k]=(0,l.useState)(""),[v,C]=(0,l.useState)(""),[F,w]=(0,l.useState)(""),[I,B]=(0,l.useState)(""),A=e=>{t(e.target.value)},[R,E]=(0,l.useState)("");return(0,a.jsxs)(i.Z,{sx:{height:"100vh",width:"100vw",overflow:"auto",backgroundImage:"".concat(x.Z.palette.background.image2.image," !important"),backgroundSize:"cover"},children:[(0,a.jsx)(i.Z,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:(0,a.jsx)(p.Z,{})}),(0,a.jsx)(i.Z,{sx:{mt:"3%",mb:"5%",display:"flex",justifyContent:"center"},children:(0,a.jsx)(c.Z,{})}),(0,a.jsx)(n.Z,{sx:{color:"white",my:"1%",mx:"5%",fontFamily:x.Z.typography.fontFamily},children:"Register"}),(0,a.jsxs)(o.Z,{spacing:5,sx:{my:"1%",mx:"10%"},children:[(0,a.jsx)(d.Z,{placeholder:"ชื่อ",sx:{borderRadius:"5px",border:"1px solid #0C72BA",textIndent:"11px",background:"white"},onChange:e=>{u(e.target.value)}}),(0,a.jsx)(d.Z,{placeholder:"นามสกุล",sx:{borderRadius:"5px",border:"1px solid #0C72BA",textIndent:"11px",background:"white"},onChange:e=>{y(e.target.value)}}),(0,a.jsx)(d.Z,{placeholder:"เบอร์โทรศัพท์",sx:{borderRadius:"5px",border:"1px solid #0C72BA",textIndent:"11px",background:"white"},onChange:e=>{Z(e.target.value)}}),(0,a.jsx)(g._,{dateAdapter:f.y,children:(0,a.jsx)(h.M,{sx:{borderRadius:"5px",border:"1px solid #0C72BA",textIndent:"11px",background:"white"},onChange:e=>{k(e.format("YYYYMMDD"))}})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{style:{color:"white",fontFamily:x.Z.typography.fontFamily},children:[(0,a.jsx)("input",{type:"radio",name:"typenationality",value:"Thai",onChange:A})," ","คนไทย"]}),(0,a.jsxs)("label",{style:{color:"white",fontFamily:x.Z.typography.fontFamily},children:[(0,a.jsx)("input",{type:"radio",name:"typenationality",value:"Foreigner",onChange:A})," ","ต่างชาติ"]})]}),"Thai"===e&&(0,a.jsx)("div",{id:"ndidField",children:(0,a.jsx)(d.Z,{placeholder:"เลขบัตรประชาชน",id:"ndid",name:"ndid",onChange:e=>{C(e.target.value)},sx:{borderRadius:"5px",border:"1px solid #0C72BA",textIndent:"11px",background:"white",width:"calc(100%)",marginRight:"10px"}})}),"Foreigner"===e&&(0,a.jsx)("div",{id:"passportField",children:(0,a.jsx)(d.Z,{placeholder:"Passport",id:"passport",name:"passport",onChange:e=>{w(e.target.value)},sx:{borderRadius:"5px",border:"1px solid #0C72BA",textIndent:"11px",background:"white",width:"calc(100%)",marginRight:"10px"}})})]}),(0,a.jsx)(s.Z,{onClick:()=>{liff.init({liffId:"2002325712-8Ppdb4dx"}).then(()=>{liff.isLoggedIn()?liff.getProfile().then(e=>{let t=e.userId;B(t),console.log("User ID:",t)}).catch(e=>{console.error("Error getting profile",e)}):liff.login()}).catch(e=>{console.error("LIFF initialization failed",e)})},sx:{backgroundColor:x.Z.palette.primary.main,color:x.Z.palette.primary.contrastText,borderRadius:"5px",border:"1px solid #0C72BA",textIndent:"11px",fontFamily:x.Z.typography.fontFamily,my:"56px"},children:"ดำเนินการต่อ"})]})]})}},4344:function(e,t,r){"use strict";var a=r(7437);r(2265);var i=r(9050),n=r(3226),o=r(9190),d=r(8777);let s=(0,o.Z)(i.Z)({display:"flex",border:"1px solid",borderColor:"#ffffff",borderRadius:"5px"}),l=(0,o.Z)("img")({width:"20px !important",height:"20px !important",position:"relative !important"}),c=(0,o.Z)(n.Z)({color:"#ffffff",textAlign:"center",fontFamily:d.Z.typography.fontFamily});t.Z=()=>(0,a.jsxs)(s,{onClick:()=>{},children:[(0,a.jsx)(l,{src:"Logo&Icon/Icon-Language.png"}),(0,a.jsx)(c,{style:{marginLeft:5},children:"TH"})]})},9242:function(e,t,r){"use strict";var a=r(7437);r(2265),t.Z=()=>(0,a.jsx)("img",{src:"Logo&Icon/Hospital Logo.png",width:"80%"})},8777:function(e,t,r){"use strict";var a=r(1552),i=r.n(a),n=r(8595);let o=(0,n.Z)({palette:{mode:"light",primary:{light:"#3c8ec7",main:"#0C72BA",dark:"#084f82",contrastText:"#fff"},secondary:{light:"#e35251",main:"#dd2726",dark:"#9a1b1a",contrastText:"#fff"},error:{light:"#e35251",main:"#dd2726",dark:"#9a1b1a",contrastText:"#fff"},success:{light:"#64df9b",main:"#3ed883",dark:"#2b975b",contrastText:"#fff"},warning:{light:"#ffaa33",main:"#ff9500",dark:"#b26800",contrastText:"#fff"},background:{light:"#FFFFFF",main:"#EEEEEE",dark:"#e0e0e0",contrastText:"#fff",image1:{image:"url(Background/Background1.png)"},image2:{image:"url(Background/Background2.png)"}},frame:{light:"#989898",main:"#373737",dark:"#000000"}},typography:{fontFamily:i().style.fontFamily},components:{MuiAlert:{styleOverrides:{root:e=>{let{ownerState:t}=e;return{..."info"===t.severity&&{backgroundColor:"#60a5fa"}}}}}}});t.Z=o}},function(e){e.O(0,[940,656,498,869,407,971,472,744],function(){return e(e.s=9092)}),_N_E=e.O()}]);