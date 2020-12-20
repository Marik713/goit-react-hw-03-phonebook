(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={FormEditor:"ContactForm_FormEditor__3o7-R",FormEditor_label:"ContactForm_FormEditor_label__1AX6R",FormEditor_input:"ContactForm_FormEditor_input__1i_Lu",FormEditor_button:"ContactForm_FormEditor_button__1Qz8m"}},,,,,,,,function(t,e,n){t.exports={ContactList_item:"ContactListItem_ContactList_item__MOnyP",ContactList_button:"ContactListItem_ContactList_button__2B_LI"}},,function(t,e,n){t.exports={ContactList:"ContactList_ContactList__2nNzh",TaskList_item:"ContactList_TaskList_item__3wB7C",completed:"ContactList_completed__rQL_2",TaskList_text:"ContactList_TaskList_text__3ok4_",TaskList_actions:"ContactList_TaskList_actions__3JcCN",TaskList_button:"ContactList_TaskList_button__pvw6D"}},function(t,e,n){t.exports={filterEditor_input:"Filter_filterEditor_input__3t60n"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),c=n(11),i=n.n(c),r=n(14),s=n(3),u=n(5),l=n(6),m=n(8),b=n(7),d=n(23),_=n(12),h=n.n(_),j=n(10),f=n.n(j),C=function(t){var e=t.name,n=t.number,o=t.onRemove;return Object(a.jsxs)("li",{className:f.a.ContactList_item,children:[e+":"+n,Object(a.jsx)("button",{className:f.a.ContactList_button,type:"button",name:"delete",onClick:o,children:"Delete"})]})},p=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(a.jsx)("ul",{className:h.a.ContactList,children:e.map((function(t){var e=t.id,o=t.name,c=t.number;return Object(a.jsx)(C,{name:o,number:c,onRemove:function(){return n(e)}},e)}))})},v=n(13),O=n.n(v);function L(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)("input",{className:O.a.filterEditor_input,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})}var x=n(4),g=n(2),F=n.n(g),k=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(x.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(s.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:F.a.FormEditor,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:F.a.FormEditor_label,children:["Name",Object(a.jsx)("input",{className:F.a.FormEditor_input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:F.a.FormEditor_label,children:["Number",Object(a.jsx)("input",{className:F.a.FormEditor_input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:F.a.FormEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(o.Component);k.defaultProps={name:"",number:""};var E=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else{var n=Object(s.a)(Object(s.a)({},e),{},{id:Object(d.a)()});t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[n])}}))}},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(k,{onAddContact:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(a.jsx)(L,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&Object(a.jsx)(p,{contacts:e,onRemoveContact:this.removeContact})]})}}]),n}(o.Component);n(20);i.a.render(Object(a.jsx)(E,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.7f52a48b.chunk.js.map