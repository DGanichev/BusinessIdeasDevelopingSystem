(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),s=(t(92),t(4)),i=t(5),o=t(9),m=t(8),d=t(10),u=t(23),p=t(32),v=function(e){var a=e.onNewAccountClick,t=e.onSubmit;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Email or username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password"})),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("div",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"checkbox"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"checkbox"},"Remember me"))),r.a.createElement("div",null,r.a.createElement("a",{href:"#"},"Forgot password?"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block my-4"},"Login"),r.a.createElement("p",{className:"card-text text-center"},"Do not have an account? Create ",r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a()}},"one"),"."),r.a.createElement("p",{className:"card-text text-center"},"or login with:"),r.a.createElement("div",{className:"container text-center"},r.a.createElement("a",{href:"#",className:"btn btn-social-icon btn-facebook mx-2",role:"button"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement("a",{href:"#",className:"btn btn-social-icon btn-google mx-2",role:"button"},r.a.createElement("i",{className:"fab fa-google"})),r.a.createElement("a",{href:"#",className:"btn btn-social-icon btn-linkedin mx-2",role:"button"},r.a.createElement("i",{className:"fab fa-linkedin-in"}))))},E=function(e){var a=e.onLoginClick,t=e.onSubmit;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"firstName","aria-describedby":"firstNameHelp",placeholder:"First name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"lastName","aria-describedby":"lastNameHelp",placeholder:"Last name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"username","aria-describedby":"usernameHelp",placeholder:"Username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"rePassword",placeholder:"Repeat password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block my-4"},"Register"),r.a.createElement("p",{className:"card-text text-center"},"You have an account? Log in ",r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a()}},"here"),"."),r.a.createElement("p",{className:"card-text text-center"},"or register with:"),r.a.createElement("div",{className:"container text-center"},r.a.createElement("a",{href:"#",className:"btn btn-social-icon btn-facebook mx-2",role:"button"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement("a",{href:"#",className:"btn btn-social-icon btn-google mx-2",role:"button"},r.a.createElement("i",{className:"fab fa-google"})),r.a.createElement("a",{href:"#",className:"btn btn-social-icon btn-linkedin mx-2",role:"button"},r.a.createElement("i",{className:"fab fa-linkedin-in"}))),r.a.createElement("hr",null),r.a.createElement("p",{className:"card-text text-center"},"By clicking",r.a.createElement("em",null,"Register")," you agree to our",r.a.createElement("a",{href:"#",target:"_blank"},"terms of service")))},f=t(27),b=t(17),N=t(86),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={skills:[{name:"C#",value:5},{name:"JAVA",value:5}]},t.addSkill=t.addSkill.bind(Object(b.a)(Object(b.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"addSkill",value:function(){var e=this.state.skills,a=Object(f.a)(e);a.push({name:"",value:1}),this.setState({skills:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.props.onSubmit()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"username","aria-describedby":"usernameHelp",placeholder:"Username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"firstName","aria-describedby":"firstNameHelp",placeholder:"First name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"lastName","aria-describedby":"lastNameHelp",placeholder:"Last name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"lastName","aria-describedby":"mobileNumHelp",placeholder:"Mobile number"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"lastName","aria-describedby":"emailHelp",placeholder:"E-mail"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",rows:"5",id:"lastName","aria-describedby":"descriptionHelp",placeholder:"Description"})),r.a.createElement("div",{className:"list-group"},this.state.skills.map(function(e){return r.a.createElement("div",{className:"list-group-item",key:e.name},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"username","aria-describedby":"usernameHelp",placeholder:"Skill",value:e.name,onChange:function(){}})),r.a.createElement(N.a,{min:1,step:1,marks:{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10"},onChange:function(){},defaultValue:e.value,max:10}))})),r.a.createElement("div",{className:"form-group mt-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addSkill},"Add skill")))),r.a.createElement("button",{type:"button",className:"mt-4 btn btn-primary btn-block"},"Save"))}}]),a}(r.a.PureComponent),j=function(e){var a=e.name,t=e.value;return r.a.createElement("div",{className:"row mt-1"},r.a.createElement("div",{className:"col-md-7"},r.a.createElement("input",{type:"text",value:a||"",className:"form-control",id:"skillName","aria-describedby":"skillNameHelp",placeholder:"Skill",onChange:function(){}})),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("input",{type:"text",value:t||"",className:"form-control",id:"skillValue","aria-describedby":"skillValueHelp",placeholder:"Value",onChange:function(){}})))},k=function(e){var a=e.name,t=e.skills;return r.a.createElement("div",{className:"list-group mb-2"},r.a.createElement("div",{className:"list-group-item list-group-item-primary"},a),r.a.createElement("div",{className:"list-group-item"},r.a.createElement("div",{className:"list-group"},t&&t.map(function(e){return r.a.createElement("div",{key:e.skill,className:"list-group-item"},e.skill," ",r.a.createElement("span",{className:"badge badge-primary"},e.level))}))))},y=function(e){var a=e.data;return r.a.createElement("div",{className:"user-profile"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h4",null,a.username)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h4",null,a.email)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("a",{href:"/user/edit/",className:"white-text btn btn-primary btn-block"},"Edit profile"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},a.firstName&&a.lastName?"".concat(a.firstName," ").concat(a.lastName):"No info about name provided")),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},a.mobileNum?a.mobileNum:"No mobile number provided.")),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},a.description?a.description:"No description provided.")),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"list-group"},a.skills&&a.skills.map(function(e){return r.a.createElement("div",{key:e.name,className:"list-group-item"},e.name," ",r.a.createElement("span",{className:"badge badge-primary"},e.value))})))))},g=new(function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"getLoggedInUser",value:function(){return{email:"user@email.com",username:"user",firstName:"Georgi",lastName:"Georgiev",mobileNum:"999999999",description:"Some description",skills:[{name:"JAVA",value:"5"},{name:"C#",value:"6"}]}}},{key:"login",value:function(e){return new Promise(function(e,a){e()})}},{key:"register",value:function(e){return new Promise(function(e,a){e()})}}]),e}()),O=new(function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"getMyProjects",value:function(){return new Promise(function(e){e([{id:"82f2fd62-3906-4d24-9edc-06a1765ac538",name:"Project 1",description:"Some description of project 1",date:"05/10/2018",users:5,positions:[{name:"Java Developer",skills:[{skill:"Java OOP",level:"6"},{skill:"Java Design Patterns",level:"6"}]},{name:"React Developer",skills:[{skill:"JavaScript fundamentals",level:"6"},{skill:"React fundamentals",level:"7"}]}]},{id:"3cbd6dda-d28c-4842-9b16-ce7e6602da83",name:"Project 2",description:"Some description of project 2",date:"05/11/2018",users:3,positions:[{name:"PHP Developer",skills:[{skill:"PHP fundamentals",level:"6"}]},{name:"React developer",skills:[{skill:"JavaScript fundamentals",level:"6"},{skill:"React fundamentals",level:"7"}]}]},{id:"9d581a63-0c82-4de1-be9a-c3d209e041fc",name:"Project 3",description:"Some description of project 3",date:"01/01/2019",users:10,positions:[{name:"Java Spring Developer",skills:[{skill:"Spring framework",level:"7"},{skill:"Java Design Patterns",level:"6"},{skill:"Algorithms",level:"5"}]}]},{id:"7ec15fec-7faf-46f3-85b3-5c8bc3a7df51",name:"Project 4",description:"Some description of project 4",date:"05/10/2018",users:7,positions:[{name:"Java Developer",skills:[{skill:"Java OOP",level:"6"},{skill:"Java Design Patterns",level:"6"}]},{name:"React developer",skills:[{skill:"JavaScript fundamentals",level:"6"},{skill:"React fundamentals",level:"7"}]}]},{id:"450d91a0-0a5b-4934-b9e5-446efa034335",name:"Project 5",description:"Some description of project 5",date:"25/04/2017",users:2,positions:[{name:"Java Developer",skills:[{skill:"Java OOP",level:"6"},{skill:"Java Design Patterns",level:"6"}]},{name:"React developer",skills:[{skill:"JavaScript fundamentals",level:"6"},{skill:"React fundamentals",level:"7"}]}]}])})}},{key:"getProjectsInvitedTo",value:function(){return new Promise(function(e){e([{id:"b9610d97-923c-4445-908e-88198ef59a07",name:"Project 1",description:"Some description of project 1",date:"25/03/2019",users:2,positions:[{name:"Project Manager",skills:[{skill:"Working with clients",level:"6"},{skill:"Team work",level:"8"}]},{name:"AngularJS developer",skills:[{skill:"JavaScript fundamentals",level:"6"},{skill:"AngularJS fundamentals",level:"7"}]}]},{id:"3e9f0aaa-3848-4afd-8cd7-1eb71edd3b9b",name:"Project 2",description:"Some description of project 2",date:"30/06/2018",users:8,positions:[{name:"Java Developer",skills:[{skill:"Java OOP",level:"6"},{skill:"Java Design Patterns",level:"6"}]},{name:"React developer",skills:[{skill:"JavaScript fundamentals",level:"6"},{skill:"React fundamentals",level:"7"}]}]},{id:"a834a2f7-5352-4b4a-a266-f421f1b309b7",name:"Project 3",description:"Some description of project 3",date:"02/02/2016",users:2,positions:[{name:"Java Developer",skills:[{skill:"Java OOP",level:"6"},{skill:"Java Design Patterns",level:"6"}]},{name:"React developer",skills:[{skill:"JavaScript fundamentals",level:"6"},{skill:"React fundamentals",level:"7"}]}]}])})}}]),e}()),P=new(function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"getSearchResults",value:function(){return new Promise(function(e){e([{user_id:"3cbd6dda-d28c-4842-9b16-de7e6602da99",username:"User_1",projectName:"Project 1",position:"Java Developer"},{user_id:"3cbd6dda-d28c-4148-9b16-de7e6602da99",username:"User",projectName:"Project 1",position:"Java Developer"},{user_id:"3bbc5dda-d28c-4148-9b16-de7e6602da99",username:"User_2",projectName:"Project 1",position:"React Developer"}])})}}]),e}()),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).login=function(){g.login().then(function(){t.props.history.push("/projects")})},t.state={form:"login"},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Business Ideas Developing System"),r.a.createElement("p",null,"Many people have potentially profitable ideas. Did you know that many have imagined the iPhone, virtual reality and services like Uber years before they become reality?"),r.a.createElement("hr",null),r.a.createElement("p",null,"There is a big difference between thinking about something and doing it in practice. Many people have difficulty in creating the right team with the right people."),r.a.createElement("hr",null),r.a.createElement("p",null,"The system will help create good teams that have the ability to realize an idea."))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h5",null,"login"===this.state.form?"Login":"Register")),r.a.createElement("div",{className:"card-body"},"login"===this.state.form?r.a.createElement(v,{onNewAccountClick:function(){return e.setState({form:"register"})},onSubmit:this.login}):r.a.createElement(E,{onLoginClick:function(){return e.setState({form:"login"})},onSubmit:this.login})))))))}}]),a}(r.a.PureComponent),x=function(){return r.a.createElement("footer",{className:"footer mt-3 p-3"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"text-muted container-fluid text-center"},"\xa9 Business ideas developing system. All rights reserved.")))},S=function(){return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-primary"},r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/projects",className:"nav-link"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/projects/create",className:"nav-link"},"Create project")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/search/profiles",className:"nav-link"},"Search profiles")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/search/projects",className:"nav-link"},"Search projects"))),r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/user/profile",className:"nav-link"},r.a.createElement("img",{src:"/images/default_pic.png",className:"rounded mr-2",width:"26px",height:"26px",alt:""}),g.getLoggedInUser().username)),r.a.createElement("li",{className:"nav-item pl-3"},r.a.createElement(u.b,{to:"/",className:"nav-link"},"Logout"))))},C=function(e){var a=e.id,t=e.name,n=e.description,l=e.date,c=e.users;return r.a.createElement("div",{className:"card border-primary"},r.a.createElement("div",{className:"card-header bg-transparent"},t),r.a.createElement("div",{className:"card-body bg-transparent"},r.a.createElement("div",{className:"card-text"},n)),r.a.createElement("div",{className:"card-footer text-center bg-transparent"},r.a.createElement("span",{className:"card-text pr-3"},r.a.createElement("i",{className:"far fa-clock pr-1"}),l),r.a.createElement("span",{className:"card-text pr-3"},r.a.createElement("i",{className:"fas fa-users"},c)),r.a.createElement("span",{className:"card-text pr-3"},r.a.createElement("a",{href:"/projects/details/".concat(a),className:"white-text"},r.a.createElement("i",{className:"fas fa-info-circle"})))))},D=function(e){var a=e.projects;return r.a.createElement("div",{className:"card-columns"},a.map(function(e){return r.a.createElement(C,{key:e.name,id:e.id,name:e.name,description:e.description,date:e.date,users:e.users})}))},J=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).addNewSkill=function(){var e=t.state.skills,a=Object(f.a)(e);a.push(a.length+1),t.setState({skills:a})},t.state={skills:t.props.data&&t.props.data||[1]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.name,n=this.state.skills;return r.a.createElement("div",{className:"list-group-item"},r.a.createElement("p",null,t||"Position"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10"},n.map(function(e){return r.a.createElement(j,{key:a&&e.skill?e.skill:e,name:e.skill,value:e.level})})),r.a.createElement("div",{className:"col-md-2 m-auto"},r.a.createElement("i",{className:"fas fa-plus-circle fa-2x",onClick:this.addNewSkill}))))}}]),a}(r.a.PureComponent),R=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).addNewPosition=function(){var e=t.state.positions,a=Object(f.a)(e);a.push(a.length+1),t.setState({positions:a})},t.state={positions:[1,2]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data;e&&this.setState({positions:e.positions});var a=this.state.positions;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",value:e&&e.name?e.name:"",className:"form-control",id:"projectName","aria-describedby":"projectNameHelp",placeholder:"Project name",onChange:function(){}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{rows:"5",value:e&&e.description?e.description:"",className:"form-control",id:"description","aria-describedby":"descriptionHelp",placeholder:"Project description",onChange:function(){}})),r.a.createElement("div",{className:"form-group"},a&&a.map(function(a){return r.a.createElement(J,{key:e&&a.name?a.name:a,data:a.skills,name:a.name})})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addNewPosition},"Add position")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:function(){}},"Cancel")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){}},"Save")))))}}]),a}(r.a.PureComponent),I=function(e){var a=e.data,t=e.positions;return r.a.createElement("div",{className:"project-details-card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("h4",null,a.name)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("i",{className:"fas fa-users"},a.users)),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("a",{href:"/projects/edit/".concat(a.id),className:"white-text btn btn-primary btn-block"},"Edit"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},a.description)),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},t&&t.map(function(e){return r.a.createElement(k,{key:e.name,name:e.name,skills:e.skills})}))))},H=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={myProjects:[],projectsInvitedTo:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.getMyProjects().then(function(a){e.setState({myProjects:a})}),O.getProjectsInvitedTo().then(function(a){e.setState({projectsInvitedTo:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mt-2 p-3 mb-2 bg-light text-dark rounded"},r.a.createElement("h1",null,"My projects"),r.a.createElement(D,{projects:this.state.myProjects})),r.a.createElement("hr",null),r.a.createElement("div",{className:"mt-2 p-3 mb-2 bg-light text-dark rounded"},r.a.createElement("h1",null,"Projects invited to"),r.a.createElement(D,{projects:this.state.projectsInvitedTo}))))}}]),a}(r.a.PureComponent),M=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"project-create"},r.a.createElement(S,null),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-center"},"Create new project"),r.a.createElement("div",{className:"card-body"},r.a.createElement(R,null))))))}}]),a}(r.a.PureComponent),T=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={myProject:{},projectInvitedTo:{}},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.projectId;O.getMyProjects().then(function(t){e.setState({myProject:t.filter(function(e){return e.id===a})[0]})}),O.getProjectsInvitedTo().then(function(t){e.setState({projectInvitedTo:t.filter(function(e){return e.id===a})[0]})})}},{key:"render",value:function(){var e=this.state,a=e.myProject,t=e.projectInvitedTo,n=null==a?t:a;return r.a.createElement("div",{className:"project-details"},r.a.createElement(S,null),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-center"},"Project Details"),r.a.createElement("div",{className:"card-body"},r.a.createElement(I,{data:n,positions:n.positions}))))))}}]),a}(r.a.PureComponent),A=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-edit"},r.a.createElement(S,null),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-center"},"Edit profile"),r.a.createElement("div",{className:"card-body"},r.a.createElement(h,null))))))}}]),a}(r.a.PureComponent),L=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={myProject:{},projectInvitedTo:{}},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.projectId;O.getMyProjects().then(function(t){e.setState({myProject:t.filter(function(e){return e.id===a})[0]})}),O.getProjectsInvitedTo().then(function(t){e.setState({projectInvitedTo:t.filter(function(e){return e.id===a})[0]})})}},{key:"render",value:function(){var e=this.state,a=e.myProject,t=e.projectInvitedTo,n=null==a?t:a;return r.a.createElement("div",{className:"project-edit"},r.a.createElement(S,null),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-center"},"Edit project"),r.a.createElement("div",{className:"card-body"},r.a.createElement(R,{data:n}))))))}}]),a}(r.a.PureComponent),U=t(64),_=t.n(U),V=(t(154),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={projectName:"",projectPosition:"",skills:[1,2]},t.onProjectNameDropdownChange=t.onProjectNameDropdownChange.bind(Object(b.a)(Object(b.a)(t))),t.onProjectPositionDropdownChange=t.onProjectPositionDropdownChange.bind(Object(b.a)(Object(b.a)(t))),t.addNewSkill=t.addNewSkill.bind(Object(b.a)(Object(b.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"onProjectNameDropdownChange",value:function(e){this.setState({projectName:e.value})}},{key:"onProjectPositionDropdownChange",value:function(e){this.setState({projectPosition:e.value})}},{key:"addNewSkill",value:function(){var e=this.state.skills,a=Object(f.a)(e);a.push(a.length+1),this.setState({skills:a})}},{key:"render",value:function(){var e=this.props,a=e.data,t=void 0===a?[]:a,n=e.type,l=void 0===n?"profiles":n,c=this.state,s=c.projectName,i=c.projectPosition,o=c.skills,m=t.find(function(e){return e.name===s})&&t.find(function(e){return e.name===s}).positions;return r.a.createElement("div",{className:"search-card"},"profiles"===l?r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-md-1"}),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(_.a,{options:t.map(function(e){return e.name}),onChange:this.onProjectNameDropdownChange,value:s,placeholder:"Select a project"})),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(_.a,{options:m?m.map(function(e){return e.name}):[],onChange:this.onProjectPositionDropdownChange,value:i,placeholder:"Select a position"})),r.a.createElement("div",{className:"col-md-1"})):null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-md-11"},r.a.createElement("div",{className:"row"},o.map(function(e){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement(j,{key:e}))}))),r.a.createElement("div",{className:"col-md-1 d-block m-auto w-25"},r.a.createElement("i",{className:"fas fa-plus-circle fa-2x",onClick:this.addNewSkill}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:function(){}},"Auto search")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){}},"Clear filters"))))}}]),a}(r.a.PureComponent)),B=function(e){var a=e.type,t=void 0===a?"profiles":a,n=e.data;return r.a.createElement("tr",null,"profiles"===t?r.a.createElement("th",{scope:"row"},r.a.createElement("a",{href:"/user/profile"},n.username)):null,r.a.createElement("td",null,n.projectName),r.a.createElement("td",null,n.position),r.a.createElement("td",null,r.a.createElement("a",{href:"#",className:"btn btn-primary btn-block"},"Message")))},F=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={myProjects:[],searchResults:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.getMyProjects().then(function(a){e.setState({myProjects:a})}),P.getSearchResults().then(function(a){e.setState({searchResults:a})})}},{key:"render",value:function(){var e=this.state,a=e.myProjects,t=e.searchResults;return r.a.createElement("div",{className:"search-profiles"},r.a.createElement(S,null),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-11"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Search profiles"),r.a.createElement("div",{className:"card-body"},r.a.createElement(V,{data:a,type:"profiles"}))))),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-11"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Username"),r.a.createElement("th",{scope:"col"},"Project name"),r.a.createElement("th",{scope:"col"},"Position name"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",{className:"text-center"},t&&t.map(function(e){return r.a.createElement(B,{key:e.user_id,data:e})}))))))))}}]),a}(r.a.PureComponent),G=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={searchResults:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;P.getSearchResults().then(function(a){e.setState({searchResults:a})})}},{key:"render",value:function(){var e=this.state.searchResults;return r.a.createElement("div",{className:"search-projects"},r.a.createElement(S,null),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-11"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Search profiles"),r.a.createElement("div",{className:"card-body"},r.a.createElement(V,{type:"projects"}))))),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-11"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"text-center"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Project name"),r.a.createElement("th",{scope:"col"},"Position name"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",{className:"text-center"},e&&e.map(function(e){return r.a.createElement(B,{type:"projects",data:e})}))))))))}}]),a}(r.a.PureComponent),z=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={userData:{}},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=g.getLoggedInUser();this.setState({userData:e})}},{key:"render",value:function(){var e=this.state.userData;return r.a.createElement("div",{className:"user-edit"},r.a.createElement(S,null),r.a.createElement("div",{className:"row justify-content-center mt-4"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-center"},"Profile details"),r.a.createElement("div",{className:"card-body"},r.a.createElement(y,{data:e}))))))}}]),a}(r.a.PureComponent),W=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,component:w}),r.a.createElement(p.b,{path:"/projects",exact:!0,component:H}),r.a.createElement(p.b,{path:"/projects/create",exact:!0,component:M}),r.a.createElement(p.b,{path:"/projects/details/:projectId",exact:!0,component:T}),r.a.createElement(p.b,{path:"/projects/edit/:projectId",exact:!0,component:L}),r.a.createElement(p.b,{path:"/search/profiles",exact:!0,component:F}),r.a.createElement(p.b,{path:"/search/projects",exact:!0,component:G}),r.a.createElement(p.b,{path:"/user/profile",exact:!0,component:z}),r.a.createElement(p.b,{path:"/user/edit",exact:!0,component:A}),r.a.createElement(p.a,{to:"/"})),r.a.createElement(x,null))}}]),a}(n.Component);c.a.render(r.a.createElement(W,null),document.getElementById("root"))},87:function(e,a,t){e.exports=t(155)},92:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.371a505f.chunk.js.map