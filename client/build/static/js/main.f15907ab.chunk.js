(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/leaderboard.3bb64250.png"},101:function(e,t,a){e.exports=a.p+"static/media/profiles.6570b872.png"},111:function(e,t,a){e.exports=a(292)},116:function(e,t,a){},118:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){},285:function(e,t,a){},287:function(e,t,a){},289:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(63),i=a.n(c),s=(a(116),a(3)),o=a(4),l=a(6),m=a(5),p=a(7),u=a(294),d=a(295),f=a(296),b=(a(118),a(44),a(293)),h=a(99),E=a.n(h),O=a(100),j=a.n(O),v=a(101),N=a.n(v),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"side-bar"},r.a.createElement(b.a,{className:"link",to:"/leaderboard"},r.a.createElement("img",{className:"icon",src:j.a})),r.a.createElement(b.a,{className:"link",to:"/game"},r.a.createElement("img",{className:"icon",src:E.a})),r.a.createElement(b.a,{className:"link",to:"/profiles"},r.a.createElement("img",{className:"icon",src:N.a}))))}}]),t}(n.Component),g=(a(123),function(e){return function(t){fetch("/api/profile/"+e).then(function(e){return e.json()}).then(function(e){t({type:"GET_PROFILE",payload:e})})}}),k=a(23),w=(a(125),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{to:this.props.data.friendName,className:"friend-link"},r.a.createElement("div",{className:"friend"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:this.props.data.image,className:"image-40"})),r.a.createElement("p",{className:"friend-name"},this.props.data.friendName)))}}]),t}(n.Component)),D=(a(127),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"post"},r.a.createElement("p",{className:"post-title"},this.props.title),r.a.createElement("p",{className:"post-content"},this.props.content))}}]),t}(n.Component)),C=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",overflow:"hidden"}},this.props.posts.map(function(e){return r.a.createElement(D,{title:e.title,content:e.content})}))}},{key:"componentDidMount",value:function(){}}]),t}(n.Component),x=a(22),A=a(107),P=a.n(A),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement(x.c,{width:700,height:350,data:this.props.data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(x.e,{dataKey:"date"}),r.a.createElement(x.f,null),r.a.createElement(x.d,null),r.a.createElement(P.a,null),r.a.createElement(x.a,null),r.a.createElement(x.b,{dataKey:"points"})))}}]),t}(n.Component),I=(a(285),a(108)),R=a.n(I),T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R.a,{radius:25,data:[{title:"Wins",value:this.props.wins,color:"#0dc441"},{title:"Draws",value:this.props.draws,color:"#d7f226"},{title:"Losses",value:this.props.losses,color:"#c11b1b"}]}))}}]),t}(n.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Profile"},r.a.createElement("div",{className:"header-image"}),r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"profile-picture"},r.a.createElement("img",{src:this.props.profileData.image,className:"picture"})),r.a.createElement("p",{className:"profile-username"},this.props.match.params.userId),r.a.createElement("div",{className:"bio"},this.props.profileData.bio),r.a.createElement("div",{className:"friends"},r.a.createElement("p",{className:"friends-title"},"Friends"),this.props.profileData.friends.map(function(e){return r.a.createElement(w,{data:e})}))),r.a.createElement("div",{className:"main"},r.a.createElement("p",{className:"profile-username posts-title"},"Posts"),r.a.createElement("div",{className:"posts"},r.a.createElement(C,{posts:this.props.profileData.posts}))),r.a.createElement("div",{className:"statistics"},r.a.createElement("div",{className:"line-chart"},r.a.createElement(L,{data:this.props.profileData.priceData})),r.a.createElement("div",{className:"pie-chart"},r.a.createElement(T,{wins:this.props.profileData.wins,losses:this.props.profileData.losses,draws:this.props.profileData.draws})),r.a.createElement("div",{className:"tags"},r.a.createElement("p",{className:"tag"},"Wins ",r.a.createElement("div",{className:"green block"})),r.a.createElement("p",{className:"tag"},"Losses ",r.a.createElement("div",{className:"red block"})),r.a.createElement("p",{className:"tag"}," Draws ",r.a.createElement("div",{className:"yellow block"})," "))))}},{key:"componentDidMount",value:function(){this.props.dispatch(g(this.props.match.params.userId))}}]),t}(n.Component),W=Object(k.b)(function(e){return{profileData:e.profileData}})(B),_=(a(287),function(){return function(e){fetch("/api/leaderboard").then(function(e){return e.json()}).then(function(t){e({type:"UPDATE_LEADERBOARD",payload:t})})}}),F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("ul",{className:"leaderboard-container"},r.a.createElement("h1",null,"Leaderboard"),this.props.leaderboard.map(function(e){return r.a.createElement(b.a,{to:"/profile/"+e.username,className:"profile-link"},r.a.createElement("li",{className:"user-stats"},r.a.createElement("img",{className:"image",src:e.profilePicture}),r.a.createElement("div",{className:"username"},e.username),r.a.createElement("div",{className:"points"},e.points,"$")))})))}},{key:"componentDidMount",value:function(){this.props.dispatch(_())}}]),t}(n.Component),M=Object(k.b)(function(e){return{leaderboard:e.leaderboard}})(F),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"game")}}]),t}(n.Component),J=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Profiles")}}]),t}(n.Component),U=(a(289),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-container"},"login")}}]),t}(n.Component)),$=a(24),q=a(109),z={leaderboard:[],profileData:{username:"",image:"",bio:"",header:"",friends:[],posts:[],priceData:[],wins:0,losses:0,draws:0}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LEADERBOARD":return Object.assign({},e,{leaderboard:t.payload});case"GET_PROFILE":return Object.assign({},e,{profileData:t.payload});default:return e}},Q=Object($.c)(H,Object($.a)(q.a)),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{store:Q},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(d.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:U}),r.a.createElement(f.a,{path:"/signup",component:J}),r.a.createElement(f.a,{path:"/profile/:userId",component:W}),r.a.createElement(f.a,{path:"/leaderboard",component:M}),r.a.createElement(f.a,{path:"/game",component:G}," "),r.a.createElement(f.a,{path:"/acoount",component:K}," ")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/poker.d649605d.png"}},[[111,2,1]]]);
//# sourceMappingURL=main.f15907ab.chunk.js.map