"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{310:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,o,i,l,a,c,u=t(439),s=t(791),f=t(87),p=t(689),d=t(168),x=t(444),h=x.ZP.div(r||(r=(0,d.Z)(["\n  box-sizing: border-box;\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),m=x.ZP.input(o||(o=(0,d.Z)(["\n  background-color: #d3e2ea;\n  height: 30px;\n  width: 300px;\n  font-size: 16px;\n  padding: 0;\n  padding-left: 10px;\n  border: 0;\n  outline: 1px solid #212121;\n"]))),g=x.ZP.button(i||(i=(0,d.Z)(["\n  margin-left: 10px;\n  height: 30px;\n  width: 150px;\n  border: 0;\n  font-size: 16px;\n  background-color: #212121;\n  color: #ffffff;\n  cursor: pointer;\n"]))),v=(0,x.ZP)(f.rU)(l||(l=(0,d.Z)(["\n  margin-left: 20px;\n  color: #212121;\n\n  &.active {\n    color: #565656;\n    text-decoration: underline;\n  }\n\n  &:hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #565656;\n  }\n"]))),Z=x.ZP.ul(a||(a=(0,d.Z)(["\n  margin-left: 10px;\n  font-size: 20px;\n"]))),b=x.ZP.li(c||(c=(0,d.Z)(["\n  margin-top: 5px;\n"]))),j=t(3),k=t(184),w=function(){var n=(0,s.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,p.TH)(),i=(0,f.lr)(),l=(0,u.Z)(i,2),a=l[0],c=l[1],d=a.get("query");(0,s.useEffect)((function(){d&&(0,j.z1)(d).then((function(n){var e=n.data.results;0!==e.length?r(e):alert("There are no results")})).catch(console.log)}),[d]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h,{children:(0,k.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget.elements.query.value;e&&c({query:e})},children:[(0,k.jsx)(m,{type:"text",name:"query",autoComplete:"off",placeholder:"Movie title",autoFocus:!0}),(0,k.jsx)(g,{type:"submit",children:"Search movies"})]})}),t&&(0,k.jsx)("div",{children:(0,k.jsx)(Z,{children:t.map((function(n){var e=n.id,t=n.title;return(0,k.jsx)(b,{children:(0,k.jsx)(v,{to:"".concat(e),state:{from:o},children:t})},e)}))})})]})}}}]);
//# sourceMappingURL=310.bf96558c.chunk.js.map