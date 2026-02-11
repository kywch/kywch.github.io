import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DGU9Ga8f.js";import{o,b as u,w as a,g as s,ad as l,d as c,m as d,v as m,x as f,T as e}from"./modules/vue-QpRFbTAP.js";import{I as g}from"./slidev/default-BBHWx-J0.js";import{u as _,f as h}from"./slidev/context-D1Uxcboh.js";import"./modules/unplugin-icons-C1MyatBV.js";import"./index-BhVj79nh.js";import"./modules/shiki-aKul_mAN.js";const k={class:"grid grid-cols-2 gap-8 mt-4"},y={__name:"slides.md__slidev_9",setup(v){const{$clicksContext:i,$frontmatter:t}=_();return i.setup(),(x,n)=>{const p=r;return o(),u(g,m(f(e(h)(e(t),8))),{default:a(()=>[n[2]||(n[2]=s("h1",null,"Network Architecture",-1)),s("div",k,[n[1]||(n[1]=s("div",null,[s("ul",null,[s("li",null,[l("3.7M params, "),s("strong",null,"15MB"),l(" policy")]),s("li",null,[l("Scale via "),s("code",null,"hidden_size"),l(": 128, 256, "),s("strong",null,"512")]),s("li",null,"LSTM helps with sequential patterns")])],-1)),s("div",null,[c(p,d({},{title:"",ranges:[]}),{default:a(()=>[...n[0]||(n[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"  288 + 1 features (18/cell)")]),l(`
`),s("span",{class:"line"},[s("span",null,"        │")]),l(`
`),s("span",{class:"line"},[s("span",null,"  ┌─────▼─────┐")]),l(`
`),s("span",{class:"line"},[s("span",null,"  │  Encoder  │  3× FC + GELU")]),l(`
`),s("span",{class:"line"},[s("span",null,"  │  (2H→H→H) │  H = hidden_size")]),l(`
`),s("span",{class:"line"},[s("span",null,"  └─────┬─────┘")]),l(`
`),s("span",{class:"line"},[s("span",null,"        │")]),l(`
`),s("span",{class:"line"},[s("span",null,"  ┌─────▼─────┐")]),l(`
`),s("span",{class:"line"},[s("span",null,"  │    LSTM   │  short-term")]),l(`
`),s("span",{class:"line"},[s("span",null,"  │    (H)    │  sequential memory")]),l(`
`),s("span",{class:"line"},[s("span",null,"  └──┬─────┬──┘")]),l(`
`),s("span",{class:"line"},[s("span",null,"     │     │")]),l(`
`),s("span",{class:"line"},[s("span",null,"  ┌──▼──┐┌─▼───┐")]),l(`
`),s("span",{class:"line"},[s("span",null,"  │Actor││Value│  FC + GELU + FC")]),l(`
`),s("span",{class:"line"},[s("span",null,"  │(H→4)││(H→1)│")]),l(`
`),s("span",{class:"line"},[s("span",null,"  └─────┘└─────┘")])])],-1)])]),_:1},16)])])]),_:1},16)}}};export{y as default};
