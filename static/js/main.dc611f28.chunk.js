(this["webpackJsonptodo-react-typescript"]=this["webpackJsonptodo-react-typescript"]||[]).push([[0],{100:function(e,t,n){e.exports=n(207)},206:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);n(101);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),l=n(23),i=n.n(l),u=n(43),s=n(42),m=n(19),d=n(41),p=n(97);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=n(202),v="todo/CREATE_TODO",h="todo/CHANGE_INPUT",O="todo/TOGGLE_TODO",g="todo/REMOVE_TODO",y="todo/EDIT_TODO";var j={create:function(e){return{type:v,payload:{id:b(),text:e,complete:!1,date:new Date}}},changeInput:function(e){return{type:h,payload:{input:e}}},toggle:function(e){return{type:O,payload:{todo:e}}},remove:function(e){return{type:g,payload:{todo:e}}},edit:function(e,t){return{type:y,payload:{todo:e,input:t}}}},w={todoItems:[],input:""};var T="filter/SET_FILTER";var N={setFilter:function(e){return{type:T,payload:{filterType:e}}}},I={filterType:"all"};var k,C=n(60),x=n(94),P=n.n(x),D=n(21),S=function(e){var t=e.todo,n=e.toggleTodo,o=e.editTodo,c=e.deleteTodo,l=Object(a.useState)(t.text),i=Object(C.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)(!1),d=Object(C.a)(m,2),p=d[0],f=d[1],E=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=E.current;e&&(e.style.height="".concat(e.scrollHeight,"px"),e.focus())}));return r.a.createElement("li",{className:"todo-list-item"},r.a.createElement("div",{className:"item-header".concat(t.complete?" complete":"")},r.a.createElement("input",{id:t.id,type:"checkbox",checked:t.complete,onChange:function(){return n(t)},className:"checkbox"}),r.a.createElement("label",{htmlFor:t.id}),p?r.a.createElement("textarea",{className:"textarea",value:u,onChange:function(e){var t=e.target.value;s(t),e.target.style.height="inherit";var n=window.getComputedStyle(e.target),a=parseInt(n.getPropertyValue("border-top-width"),10)+parseInt(n.getPropertyValue("padding-top"),10)+e.target.scrollHeight+parseInt(n.getPropertyValue("padding-bottom"),10)+parseInt(n.getPropertyValue("border-bottom-width"),10);e.target.style.height="".concat(a,"px")},ref:E,spellCheck:!1}):r.a.createElement("p",null,t.text)),r.a.createElement("div",{className:"item-footer"},r.a.createElement("p",{className:"item-timestamp"},r.a.createElement(D.b,null),r.a.createElement("span",null,P()(t.date).format("YYYY\ub144 MM\uc6d4 DD\uc77c HH\uc2dc mm\ubd84"))),p&&r.a.createElement("div",{className:"item-functions"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),o(t,u),u.trim()&&f(!p)}},r.a.createElement(D.a,null),r.a.createElement("span",null,"\uc644\ub8cc")),r.a.createElement("button",{onClick:function(e){e.preventDefault(),f(!p),s(t.text)}},r.a.createElement(D.e,null),r.a.createElement("span",null,"\ucde8\uc18c"))),!p&&r.a.createElement("div",{className:"item-functions"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),f(!p)}},r.a.createElement(D.c,null),r.a.createElement("span",null,"\uc218\uc815")),t.complete&&r.a.createElement("button",{onClick:function(){return c(t)}},r.a.createElement(D.f,null),r.a.createElement("span",null,"\uc0ad\uc81c")))))},_=function(e){var t=e.todoItems,n=e.toggleTodo,a=e.editTodo,o=e.deleteTodo,c=e.filter,l=t.filter((function(e){return e.complete})),i=t.filter((function(e){return!e.complete}));return r.a.createElement("div",{className:"todo-list"},r.a.createElement((function(){return"all"!==c||l.length||i.length?"active"!==c||i.length?"completed"!==c||l.length?null:r.a.createElement("p",{className:"todo-none-text"},"\uc644\ub8cc\ub41c \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."):r.a.createElement("p",{className:"todo-none-text"},"\ubbf8\uc644\ub8cc\ub41c \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."):r.a.createElement("p",{className:"todo-none-text"},"\ud560 \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")}),null),r.a.createElement("ul",null,("active"===c||"all"===c)&&i.reverse().map((function(e){return r.a.createElement(S,{key:e.id,todo:e,toggleTodo:n,editTodo:a,deleteTodo:o})})),("completed"===c||"all"===c)&&l.reverse().map((function(e){return r.a.createElement(S,{key:e.id,todo:e,toggleTodo:n,editTodo:a,deleteTodo:o})}))))},A=function(e){var t=e.addTodo,n=e.changeInput,a=e.input;return r.a.createElement("form",{className:"form add-todo-form"},r.a.createElement("textarea",{className:"textarea",value:a,onChange:function(e){n(e.target.value)},placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."}),r.a.createElement("button",{className:"button ".concat(a.trim().length?"":" disabled"),type:"submit",onClick:function(e){e.preventDefault(),t(a)}},r.a.createElement(D.d,null)))},F=function(e){var t=e.clickFilter,n=e.filter;return r.a.createElement("div",{className:"todo-filter"},r.a.createElement("button",{className:"all"===n?"active":void 0,onClick:function(){return t("all")}},"\uc804\uccb4"),r.a.createElement("button",{className:"active"===n?"active":void 0,onClick:function(){return t("active")}},"\ubbf8\uc644\ub8cc"),r.a.createElement("button",{className:"completed"===n?"active":void 0,onClick:function(){return t("completed")}},"\uc644\ub8cc"))},V=n(95),R=n(98),H=n(96),J=n(59),L=n(99);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G="\ud655\uc778",M="\uc815\ub9d0 \uc2e4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",U=function(e){function t(e){var n;return Object(V.a)(this,t),(n=Object(R.a)(this,Object(H.a)(t).call(this,e))).handleCancel=function(){n.setState({isOpen:!1}),k(!1)},n.handleConfirm=function(){n.setState({isOpen:!1}),k(!0)},n.show=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Y({},n.props.createConfirmProps,{},e);return n.setState({isOpen:!0,showConfirmProps:t}),new Promise((function(e){k=e}))},n.state={isOpen:!1,showConfirmProps:{}},n}return Object(L.a)(t,e),Object(J.a)(t,null,[{key:"create",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=document.createElement("div");return document.body.appendChild(n),Object(o.render)(r.a.createElement(t,{createConfirmProps:e}),n)}}]),Object(J.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isOpen,n=e.showConfirmProps,a=n.message,o=n.title,c=n.isAlert;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"modal-overlay"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("header",{className:"modal-header"},r.a.createElement("p",{className:"modal-title"},o||G)),r.a.createElement("section",{className:"modal-body"},r.a.createElement("p",null,a||M)),r.a.createElement("footer",{className:"modal-footer"},r.a.createElement("button",{className:"primary button",onClick:this.handleConfirm},"\ud655\uc778"),!c&&r.a.createElement("button",{className:"secondary button",onClick:this.handleCancel},"\ucde8\uc18c"))))))}}]),t}(a.Component).create({}),B=Object(s.b)((function(e){var t=e.todos,n=e.filter;return{input:t.input,todoItems:t.todoItems,filter:n.filterType}}),(function(e){return{TodosActions:Object(m.a)(j,e),FilterActions:Object(m.a)(N,e)}}))((function(e){var t=e.todoItems,n=e.input,a=e.TodosActions,o=e.FilterActions,c=e.filter,l=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.trim()){e.next=4;break}a.edit(t,n),e.next=6;break;case 4:return e.next=6,U.show({title:"\uc54c\ub9bc",message:"\uacf5\ubc31\uc740 \uc785\ub825\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",isAlert:!0});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.show({message:"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",isAlert:!1});case 2:e.sent&&a.remove(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.trim()){e.next=4;break}a.create(t),e.next=6;break;case 4:return e.next=6,U.show({title:"\uc54c\ub9bc",message:"\uacf5\ubc31\uc740 \uc785\ub825\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",isAlert:!0});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement(F,{clickFilter:function(e){o.setFilter(e)},filter:c}),r.a.createElement(A,{addTodo:m,input:n,changeInput:function(e){a.changeInput(e)}}),r.a.createElement(_,{todoItems:t,toggleTodo:function(e){a.toggle(e)},editTodo:l,deleteTodo:s,filter:c}))})),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null))},z=(n(206),Object(m.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{input:"",todoItems:[].concat(Object(p.a)(e.todoItems),[t.payload])};case h:return E({},e,{input:t.payload.input});case g:return E({},e,{todoItems:e.todoItems.filter((function(e){return e!==t.payload.todo}))});case O:return E({},e,{todoItems:e.todoItems.map((function(e){return e===t.payload.todo&&(e.complete=!e.complete),e}))});case y:return E({},e,{todoItems:e.todoItems.map((function(e){return e===t.payload.todo&&(e.text=t.payload.input),e}))});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{filterType:t.payload.filterType};default:return e}}})),K=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}},Q=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){throw new Error(n)}};var W=function(){var e=K(),t=Object(m.c)(z,e,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return t.subscribe((function(){Q({todos:{input:"",todoItems:t.getState().todos.todoItems}})})),t}();c.a.render(r.a.createElement(s.a,{store:W},r.a.createElement(q,null)),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.dc611f28.chunk.js.map