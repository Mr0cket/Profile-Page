(this["webpackJsonpprofile-page"]=this["webpackJsonpprofile-page"]||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},13:function(e,t,n){e.exports=n.p+"static/media/holy.b3ee1fa1.wav"},14:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(11),i=n.n(l),r=(n(19),n(2)),c=n(3),s=n(5),u=n(4),m=n(12),d=n.n(m),f=n(7),h=n(9),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("header",{className:"normal-header"},o.a.createElement("a",{className:"social-links",href:"https://github.com/Mr0cket"},o.a.createElement(f.a,{icon:h.a})),o.a.createElement("img",{src:d.a,className:"react-logo",alt:"react logo"}),o.a.createElement("a",{className:"social-links",href:"https://www.linkedin.com/in/milo-silva/"},o.a.createElement(f.a,{icon:h.b})))}}]),n}(o.a.Component),p=n(13),E=n.n(p);function b(e){return o.a.createElement("section",{id:"home",className:"section-containers"},o.a.createElement("div",{className:"based-titles"},o.a.createElement("h1",{id:"the-main-man",className:"section-headings"},"Milo Silva"),o.a.createElement("h3",{id:"dream-job",className:"title"}," Full-Stack Developer",o.a.createElement("h5",{id:"addition",className:"title"},"...Kind of")),o.a.createElement("h5",{id:"addition",className:"title"},"...Kind of."),o.a.createElement("audio",{id:"holySound"},o.a.createElement("source",{src:E.a,type:"audio/mpeg",onLoad:function(){return console.log("audio loaded")}}),"Your browser does not support the audio element.")))}var y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).sectionName=e.name,a.blendStyle=e.blendStyle,a.id=e.id,a}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("section",{id:this.id,className:"section-containers"},o.a.createElement("div",{style:this.blendStyle}),o.a.createElement("div",{className:"based-titles"},o.a.createElement("h1",{className:"section-headings"},this.sectionName)))}}]),n}(o.a.Component),g=function(){return o.a.createElement("main",{className:"main-stuff"},o.a.createElement(b,null),o.a.createElement(y,{name:"this is Work Section",blendStyle:{background:"linear-gradient(to bottom, rgb(55 55 55), #164076)",height:"5px"},id:"work"}),o.a.createElement(y,{name:"this is LifeSection",id:"life",blendStyle:{background:"linear-gradient(to bottom, #164076, #f2b635)",height:"5px"}}))};function k(e){return o.a.createElement("li",{className:"listless-list"},o.a.createElement("a",{href:e.navLink},e.text))}var N=function(){return o.a.createElement("nav",{className:"section-bar"},o.a.createElement("ul",null,o.a.createElement(k,{text:"Top",navLink:"#home"}),o.a.createElement(k,{text:"Professional",navLink:"#work"}),o.a.createElement(k,{text:"About Me",navLink:"#life"})))};var S=function(){return o.a.createElement("div",{id:"funky-footer"},o.a.createElement("p",null,"this is the footer"))};n(25);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(N,null),o.a.createElement(g,null),o.a.createElement(S,null))};i.a.render(o.a.createElement(w,null),document.getElementById("root"));var j=document.getElementById("the-main-man"),I=!1,x=document.querySelector("#addition"),O=document.querySelector("#dream-job"),L={audioPlaying:!1,sound:document.querySelector("#holySound"),timeCount:0,play:function(){L.audioPlaying=!0,L.sound.volume=.01,L.promise=L.sound.play(),L.audioTimeId=setInterval((function(){L.sound.volume<.06?L.sound.volume+=.01:clearInterval(L.audioTimeId)}),500);var e=setInterval((function(){L.timeCount++,L.timeCount>5&&clearInterval(e),console.log("volume: ".concat(L.sound.volume))}),5e3)},pause:function(){clearInterval(L.audioTimeId),L.audioPlaying=!1,L.sound.pause()}};window.onmousedown=function(){return!1===I?I=!0:null},j.onmouseover=function(){return I&&!L.audioPlaying?L.play():console.log("didnt work")},j.onmouseleave=function(){return L.audioPlaying?setTimeout(L.pause,200):null},O.onmouseover=function(){return x.style.display="inline"}}},[[14,1,2]]]);
//# sourceMappingURL=main.78541ff1.chunk.js.map