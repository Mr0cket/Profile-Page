(this["webpackJsonpprofile-page"]=this["webpackJsonpprofile-page"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},15:function(e,t,a){e.exports=a.p+"static/media/holy.b3ee1fa1.wav"},16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(13),o=a.n(l),r=(a(21),a(4)),c=a(5),s=a(7),m=a(6),u=a(14),d=a.n(u),v=a(2),h=a(11),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"normal-header"},i.a.createElement("div",{id:"positioner"},i.a.createElement("a",{className:"social-links",href:"https://github.com/Mr0cket"},i.a.createElement(v.a,{icon:h.a})),i.a.createElement("img",{src:d.a,className:"react-logo",alt:"react logo"}),i.a.createElement("a",{className:"social-links",href:"https://www.linkedin.com/in/milo-silva/"},i.a.createElement(v.a,{icon:h.b}))))}}]),a}(i.a.Component),y=a(8),E=a(15),p=a.n(E),b=a(3);function g(e){return i.a.createElement("section",{id:"home",className:"section-containers"},i.a.createElement("div",{className:"top-content"}),i.a.createElement("div",{className:"based-titles"},i.a.createElement("h1",{id:"the-main-man",className:"section-headings"},"Milo Silva"),i.a.createElement("h3",{id:"dream-job",className:"title"}," Full-Stack Developer",i.a.createElement("span",{id:"addition",className:"title"},"...Kind of")),i.a.createElement("audio",{id:"holySound"},i.a.createElement("source",{src:p.a,type:"audio/mpeg",onLoad:function(){return console.log("audio loaded")}}),"Your browser does not support the audio element.")),i.a.createElement("div",{className:"bottom-content"},i.a.createElement(S,null)))}var k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this)).sectionName=e.name,n.blendStyle=e.blendStyle,n.id=e.id,n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{id:this.id,className:"section-containers"},i.a.createElement("div",{style:this.blendStyle}),i.a.createElement("div",{className:"based-titles"},i.a.createElement("h1",{className:"section-headings"},this.sectionName)))}}]),a}(i.a.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this)).state={name:"Milo",email:"myaddress@...",formStyle:{visibility:"hidden"}},n.handleChange=n.handleChange.bind(Object(y.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){"name"===e.target.id?this.setState({name:e.target.value}):this.setState({email:e.target.value})}},{key:"handleStyle",value:function(){var e=document.querySelector(".contact-form");"hidden"===e.style.visibility?e.style.visibility="visible":e.style.visibility="hidden"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"contact-form",style:this.state.formStyle},i.a.createElement("form",{action:"/post"},i.a.createElement("label",{htmlFor:"name"},"Your name: "),i.a.createElement("input",{type:"text",id:"name",name:"name",value:this.state.name,onChange:this.handleChange}),i.a.createElement("label",{htmlFor:"email"},"Email: "),i.a.createElement("input",{type:"email",id:"mail",name:"email",value:this.state.email,onChange:this.handleChange}),i.a.createElement("input",{type:"submit",value:"Submit"}))),i.a.createElement("div",null,i.a.createElement(v.a,{style:{fontSize:"30px"},icon:b.b,onClick:this.handleStyle})))}}]),a}(i.a.Component),N=function(){return i.a.createElement("main",{id:"main-stuff-wrapper"},i.a.createElement(g,null),i.a.createElement(k,{name:"this is Work Section",blendStyle:{background:"linear-gradient(to bottom, rgb(55 55 55), #164076)",height:"5px"},id:"work"}),i.a.createElement(k,{name:"this is LifeSection",id:"life",blendStyle:{background:"linear-gradient(to bottom, #164076, #f2b635)",height:"5px"}}))};function j(e){return i.a.createElement("li",{className:"listless-list"},i.a.createElement("a",{href:e.navLink},i.a.createElement(v.a,{icon:e.icon})," ",i.a.createElement("span",{className:"optional-text"},e.text)))}var w=function(){return i.a.createElement("nav",{className:"section-bar"},i.a.createElement("ul",null,i.a.createElement(j,{text:"Home",navLink:"#home",icon:b.d}),i.a.createElement(j,{text:"serious stuff",navLink:"#work",icon:b.a}),i.a.createElement(j,{text:"Fun stuff",navLink:"#life",icon:b.e}),i.a.createElement(j,{text:"Get in Touch!",navLink:"#contact",icon:b.c})))};var x=function(){return i.a.createElement("div",{id:"funky-footer"},i.a.createElement("p",null))};a(27);var C=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null),i.a.createElement(w,null),i.a.createElement(N,null),i.a.createElement(x,null))};o.a.render(i.a.createElement(C,null),document.getElementById("root"));var O=document.getElementById("the-main-man"),I=!1,L=document.querySelector("#addition"),P=document.querySelector("#dream-job"),T={audioPlaying:!1,sound:document.querySelector("#holySound"),timeCount:0,play:function(){T.audioPlaying=!0,T.sound.volume=.01,T.promise=T.sound.play(),T.audioTimeId=setInterval((function(){T.sound.volume<.06?T.sound.volume+=.01:clearInterval(T.audioTimeId)}),500);var e=setInterval((function(){T.timeCount++,T.timeCount>5&&clearInterval(e),console.log("volume: ".concat(T.sound.volume))}),5e3)},pause:function(){clearInterval(T.audioTimeId),T.audioPlaying=!1,T.sound.pause()}};window.onmousedown=function(){return!1===I?I=!0:null},O.onmouseover=function(){return I&&!T.audioPlaying?T.play():console.log("didnt work")},O.onmouseleave=function(){return T.audioPlaying?setTimeout(T.pause,200):null},O.addEventListener("focus",(function(){return T.audioPlaying?console.log("Audio Already playing"):T.play()}));var q=!1;P.onmouseover=function(){q?L.style.visibility="visible":(L.style.visibility="visible",L.style.fontSize="14px",q=!0)}}},[[16,1,2]]]);
//# sourceMappingURL=main.b5784dd5.chunk.js.map