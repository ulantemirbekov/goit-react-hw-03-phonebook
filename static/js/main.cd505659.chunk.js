(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){t.exports={label:"Filter_label__2zNF-",input:"Filter_input__1pdIK"}},2:function(t,e,n){t.exports={form:"Form_form__1jOSD",label:"Form_label__1tSJI",input:"Form_input__3DTUA",btn:"Form_btn__3Zv8_"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=n(4),i=n(13),l=n(5),u=n(6),d=n(8),b=n(7),m=n(10),h=n.n(m),j=n(0),f=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:h.a.section,children:[Object(j.jsx)("h2",{className:h.a.title,children:e}),n]})},p=n(23),O=n(2),x=n.n(O),C=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:Object(p.a)(),name:a,number:c};t.props.addContact(r),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:x.a.label,children:["Name",Object(j.jsx)("input",{className:x.a.input,onChange:this.handleChange,value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:x.a.label,children:["Number",Object(j.jsx)("input",{className:x.a.input,onChange:this.handleChange,value:n,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:x.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(3),_=n.n(v),g=function(t){var e=t.contacts,n=t.deleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsxs)("li",{className:_.a.contact,children:[Object(j.jsx)("p",{className:_.a.text,children:t.name}),Object(j.jsx)("p",{className:_.a.text,children:t.number}),Object(j.jsx)("button",{type:"button",className:_.a.btn,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},N=n(11),S=n.n(N),y=function(t){var e=t.onChange,n=t.filter;return Object(j.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:S.a.input,onChange:e,value:n,type:"text",name:"filter"})]})},k=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.some((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[e].concat(Object(i.a)(t.contacts))}}))},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleFilter=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.handleFilter();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{title:"Phonebook",children:Object(j.jsx)(C,{addContact:this.addContact})}),Object(j.jsxs)(f,{title:"Contacts",children:[Object(j.jsx)(y,{onChange:this.handleChange,filter:t}),Object(j.jsx)(g,{contacts:e,deleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(19),n(20);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={contact:"Contacts_contact__3xjk6",text:"Contacts_text__10jvS",btn:"Contacts_btn__eaRY7"}}},[[21,1,2]]]);
//# sourceMappingURL=main.cd505659.chunk.js.map