"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{310:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,o,i,l,c=t(439),a=t(791),u=t(87),s=t(689),d=t(168),f=t(444),p=f.ZP.div(r||(r=(0,d.Z)(["\n  box-sizing: border-box;\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),h=f.ZP.input(o||(o=(0,d.Z)(["\n  background-color: #d3e2ea;\n  height: 30px;\n  width: 300px;\n  font-size: 16px;\n  padding: 0;\n  padding-left: 10px;\n  border: 0;\n  outline: 1px solid #212121;\n"]))),x=f.ZP.button(i||(i=(0,d.Z)(["\n  margin-left: 10px;\n  height: 30px;\n  width: 150px;\n  border: 0;\n  font-size: 16px;\n  background-color: #212121;\n  color: #ffffff;\n  cursor: pointer;\n"]))),m=(0,f.ZP)(u.rU)(l||(l=(0,d.Z)(["\n  margin-left: 20px;\n  color: #212121;\n\n  &.active {\n    color: #565656;\n    text-decoration: underline;\n  }\n\n  &:hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #565656;\n  }\n"]))),g=t(3),v=t(184),b=function(){var n=(0,a.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,s.TH)(),i=(0,u.lr)(),l=(0,c.Z)(i,2),d=l[0],f=l[1],b=d.get("query");(0,a.useEffect)((function(){b&&(0,g.z1)(b).then((function(n){var e=n.data.results;0!==e.length?r(e):alert("There are no results")})).catch(console.log)}),[b]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{children:(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget.elements.query.value;f({query:e})},children:[(0,v.jsx)(h,{type:"text",name:"query",autoComplete:"off",placeholder:"Movie title",autoFocus:!0}),(0,v.jsx)(x,{type:"submit",children:"Search movies"})]})}),t&&(0,v.jsx)("div",{children:(0,v.jsx)("ul",{children:t.map((function(n){var e=n.id,t=n.title;return(0,v.jsx)("li",{children:(0,v.jsx)(m,{to:"".concat(e),state:{from:o},children:t})},e)}))})})]})}}}]);
//# sourceMappingURL=310.9cc7140d.chunk.js.map