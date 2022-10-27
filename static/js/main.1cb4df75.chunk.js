(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(15),s=a.n(r),c=a(9),l=a.n(c),i=a(10),u=a(4),m=a(5),h=a(7),k=a(6),d=a(8),b=a(13),f="https://reactnd-books-api.udacity.com",p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:p},E=function(){return fetch("".concat(f,"/books"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.books})},y=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},g=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(b.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},N=a(35),j=(a(25),function(e){var t=e.book,a=e.moveBook;return n.a.createElement("li",null,n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:t.imageLinks?"url(".concat(t.imageLinks.thumbnail,")"):""}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:t.shelf?t.shelf:"none",onChange:function(e){return a(t,e.target.value)}},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},t.title),n.a.createElement("div",{className:"book-authors"},t.authors)))}),O=a(34),B=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.filter(function(e){return"currentlyReading"===e.shelf}).map(function(t){return n.a.createElement(j,{book:t,key:t.id,moveBook:e.props.moveBook})})))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.filter(function(e){return"wantToRead"===e.shelf}).map(function(t){return n.a.createElement(j,{book:t,key:t.id,moveBook:e.props.moveBook})})))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.filter(function(e){return"read"===e.shelf}).map(function(t){return n.a.createElement(j,{book:t,key:t.id,moveBook:e.props.moveBook})})))))),n.a.createElement("div",{className:"open-search"},n.a.createElement(O.a,{to:"/search"},n.a.createElement("button",null,"Add a book"))))}}]),t}(n.a.Component),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(n)))).state={query:"",searchedBooks:[],errMsg:""},a.handleQuery=function(){var e=Object(i.a)(l.a.mark(function e(t){var o,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({query:t}),e.next=3,g(a.state.query);case 3:(o=e.sent)&&!o.error?(n=o.map(function(e){return a.props.books.map(function(t){t.id===e.id&&(e.shelf=t.shelf)}),e}),a.setState({searchedBooks:n})):(r='"'.concat(a.state.query,'" could not be found in the library.\n                Please try again with a different query.'),a.setState({searchedBooks:[],errMsg:r}));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.moveBook,a=this.state.query;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(O.a,{className:"close-search",to:"/"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:a,onChange:function(t){return e.handleQuery(t.target.value)}}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},this.state.searchedBooks.length>0?this.state.searchedBooks.map(function(e){return n.a.createElement(j,{book:e,key:e.id,moveBook:t})}):n.a.createElement("li",null,this.state.errMsg))))}}]),t}(n.a.Component),S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(n)))).state={books:[]},a.moveBook=function(e,t){y(e,t).then(Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,a.setState(function(){return{books:t}});case 4:case"end":return e.stop()}},e,this)}))).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},n.a.createElement(N.a,{exact:!0,path:"/",render:function(){return n.a.createElement(B,{books:e.state.books,moveBook:e.moveBook})}}),n.a.createElement(N.a,{path:"/search",render:function(){return n.a.createElement(w,{books:e.state.books,moveBook:e.moveBook})}}))}}]),t}(n.a.Component),R=(a(30),a(36));s.a.render(n.a.createElement(R.a,null,n.a.createElement(S,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.1cb4df75.chunk.js.map