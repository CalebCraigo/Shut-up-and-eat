(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{109:function(e,t,a){},170:function(e,t,a){e.exports=a(394)},175:function(e,t,a){},392:function(e){e.exports=JSON.parse('[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"lightness":"0"},{"weight":"0.01"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"saturation":"0"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"lightness":"0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#d2d2d2"},{"weight":"1.00"}]},{"featureType":"road","elementType":"labels","stylers":[{"lightness":"0"},{"weight":"3.00"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#0f2739"},{"weight":"2.00"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"},{"weight":"2.00"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#6aa5b1"},{"visibility":"on"}]}]')},393:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(69),o=a.n(r),s=(a(175),a(25)),i=a(12),c=a(13),h=a(15),u=a(14),d=a(2),m=a(16),p=a(1),b=a.n(p);b.a.defaults.xsrfCookieName="csrftoken",b.a.defaults.xsrfHeaderName="X-CSRFToken";var f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),b.a.post("/api/v1/rest-auth/login/",this.state).then((function(e){localStorage.setItem("my-app-user",JSON.stringify(e.data)),console.log("local storage",localStorage),t.props.history.push("/profile/")})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{id:"username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{id:"email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{id:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement("button",{className:"buttons btn btn-secondary"},"Login"),l.a.createElement("a",{href:"/"},"Back"))}}]),t}(n.Component);b.a.defaults.xsrfCookieName="csrftoken",b.a.defaults.xsrfHeaderName="X-CSRFToken";var g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),b.a.post("/api/v1/rest-auth/registration/",this.state).then((function(e){localStorage.setItem("my-app-user",JSON.stringify(e.data)),t.props.history.push("/profile/create/")})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{id:"username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{id:"email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{id:"password",type:"password",name:"password1",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"password"},"Password 2"),l.a.createElement("input",{id:"password2",type:"password",name:"password2",value:this.state.password2,onChange:this.handleChange,placeholder:"Enter password again",required:!0})),l.a.createElement("button",{className:"buttons btn btn-secondary"},"Sign Up"),l.a.createElement("a",{href:"/"},"Back"))}}]),t}(n.Component);a(109);b.a.defaults.xsrfCookieName="csrftoken",b.a.defaults.xsrfHeaderName="X-CSRFToken";var v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).choiceForm=function(e,t){for(var n in a.state.highlights)console.log(a.state.highlights);return t[e]},a.state={name:"",avatar:null,preview:"",profile:[],created_by:"",kid_friendly:!1,outdoor_seating:!1,vegetarian_friendly:!1,gluten_free_options:!1,farm_to_table:!1,serves_alcohol:!1,fullbar:!1,waterfront:!1,live_music:!1},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleCheckboxChange=a.handleCheckboxChange.bind(Object(d.a)(a)),a.handleAvatarChange=a.handleAvatarChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleCheckboxChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.checked))}},{key:"handleAvatarChange",value:function(e){var t=this,a=e.target.files[0];this.setState({avatar:a});var n=new FileReader;n.onloadend=function(){t.setState({preview:n.result})},n.readAsDataURL(a)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={kid_friendly:"Kid Friendly",outdoor_seating:"Outdoor Seating",vegetarian_friendly:"Vegetarian Friendly",gluten_free_options:"Gluten Free Options",farm_to_table:"Farm-to-Table",serves_alcohol:"Serves Alcohol",fullbar:"Fullbar",waterfront:"Waterfront",live_music:"Live Music"},n=new FormData,l=this.state,r=[];for(var o in a)!0===l[o]&&r.push(a[o]);n.append("name",this.state.name),n.append("avatar",this.state.avatar),n.append("highlights",JSON.stringify(r)),console.log(r),b.a.post("/api/v1/profile/create/",n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e),t.props.history.push("/")})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/v1/profile/create/").then((function(t){console.log(t),e.setState({profile:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,"Create Your Profile"),l.a.createElement("p",null,"Enter Your Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),l.a.createElement("p",null,"Add a picture!"),this.state.avatar?l.a.createElement("img",{className:"profileimg",src:this.state.preview,alt:"preview"}):l.a.createElement("input",{type:"file",name:"avatar",onChange:this.handleAvatarChange}),l.a.createElement("p",null,"Select some preferences to help us make a selection for you!"),l.a.createElement("input",{className:"checkbox",id:"kid_friendly",checked:this.state.kid_friendly,type:"checkbox",name:"kid_friendly",value:this.state.kid_friendly,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"kid_friendly",class:"checkbox"},"Kid Friendly"),l.a.createElement("input",{className:"checkbox",id:"outdoor_seating",checked:this.state.outdoor_seating,type:"checkbox",name:"outdoor_seating",value:this.state.outdoor_seating,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"outdoor_seating",class:"checkbox"},"Outdoor Seating"),l.a.createElement("input",{className:"checkbox",id:"vegetarian_friendly",checked:this.state.vegetarian_friendly,type:"checkbox",name:"vegetarian_friendly",value:this.state.vegetarian_friendly,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"vegetarian_friendly",class:"checkbox"},"Vegetarian Friendly"),l.a.createElement("input",{className:"checkbox",id:"gluten_free_options",checked:this.state.gluten_free_options,type:"checkbox",name:"gluten_free_options",value:this.state.gluten_free_options,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"gluten_free_options",class:"checkbox"},"Gluten Free Option"),l.a.createElement("input",{className:"checkbox",id:"farm_to_table",checked:this.state.farm_to_table,type:"checkbox",name:"farm_to_table",value:this.state.farm_to_table,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"farm_to_table",class:"checkbox"},"Farm-to-Table"),l.a.createElement("input",{className:"checkbox",id:"servers-alcohol",vchecked:this.state.serves_alcohol,type:"checkbox",name:"serves_alcohol",value:this.state.serves_alcohol,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"servers-alcohol",class:"checkbox servesalcohol"},"Serves Alcohol"),l.a.createElement("input",{className:"checkbox",id:"fullbar",checked:this.state.fullbar,type:"checkbox",name:"fullbar",value:this.state.fullbar,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"fullbar",class:"checkbox"},"Fullbar"),l.a.createElement("input",{className:"checkbox",id:"waterfront",checked:this.state.waterfront,type:"checkbox",name:"waterfront",value:this.state.waterfront,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"waterfront",class:"checkbox"},"Waterfront"),l.a.createElement("input",{className:"checkbox",id:"live_music",checked:this.state.live_music,type:"checkbox",name:"live_music",value:this.state.live_music,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"live_music",class:"checkbox"},"Live Music"),l.a.createElement("button",{className:"buttons btn btn-secondary"},"Save"))))}}]),t}(n.Component),y=a(31);b.a.defaults.xsrfCookieName="csrftoken",b.a.defaults.xsrfHeaderName="X-CSRFToken",b.a.defaults.headers.common.Authorization=localStorage.getItem("my-app-user")?"Token ".concat(JSON.parse(localStorage.getItem("my-app-user")).token):null;var k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).logout=function(){b.a.post("/api/v1/rest-auth/logout/"),localStorage.removeItem("my-app-user"),a.setState({navigate:!0})},a.deactivate=function(){b.a.patch("/api/v1/profile/".concat(a.state.profile.id,"/"),{is_active:!1}),a.setState({is_active:!1}),a.props.history.push("/")},a.state={profile:{},is_active:"",navigate:!1,avatar:"",preview:"",loading:!1,kid_friendly:!1,outdoor_seating:!1,vegetarian_friendly:!1,gluten_free_options:!1,farm_to_table:!1,serves_alcohol:!1,fullbar:!1,waterfront:!1,live_music:!1},a.deactivate=a.deactivate.bind(Object(d.a)(a)),a.handleAvatarUpdate=a.handleAvatarUpdate.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleCheckboxChange=a.handleCheckboxChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={"Kid Friendly":"kid_friendly","Outdoor Seating":"outdoor_seating","Vegetarian Friendly":"vegetarian_friendly","Gluten Free Options":"gluten_free_options","Farm-to-Table":"farm_to_table","Serves Alcohol":"serves_alcohol",Fullbar:"fullbar",Waterfront:"waterfront","Live Music":"live_music"};b.a.get("/api/v1/profile/detail/",{headers:{Authorization:"Token ".concat(JSON.parse(localStorage.getItem("my-app-user")).token)}}).then((function(a){console.log(a.data[0].highlights),e.setState({profile:a.data[0]}),a.data[0].highlights.map((function(a){var n=a.text;e.setState(Object(s.a)({},t[n],!0)),e.setState({loading:!0})})),console.log(e.state)})).catch((function(e){console.log(e)}))}},{key:"handleAvatarUpdate",value:function(e){var t=this,a=e.target.files[0];this.setState({avatar:a});var n=new FileReader;n.onloadend=function(){t.setState({preview:n.result})},n.readAsDataURL(a)}},{key:"handleCheckboxChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.checked))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={kid_friendly:"Kid Friendly",outdoor_seating:"Outdoor Seating",vegetarian_friendly:"Vegetarian Friendly",gluten_free_options:"Gluten Free Options",farm_to_table:"Farm-to-Table",serves_alcohol:"Serves Alcohol",fullbar:"Fullbar",waterfront:"Waterfront",live_music:"Live Music"},n=new FormData,l=this.state,r=[];for(var o in a)!0===l[o]&&r.push(a[o]);n.append("highlights",JSON.stringify(r)),b.a.patch("/api/v1/profile/".concat(this.state.profile.id,"/"),n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){t.setState({navigate:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){if(this.state.navigate)return l.a.createElement(y.a,{to:"/",push:!0});var e=this.state.loading;return console.log(this.state),l.a.createElement("section",null,e?l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h1",null,this.state.profile.name),l.a.createElement("img",{className:"profileimg",src:this.state.profile.avatar,alt:""}),l.a.createElement("p",null,"Update Your Preferences"),l.a.createElement("input",{className:"checkbox",id:"kid_friendly",checked:this.state.kid_friendly,type:"checkbox",name:"kid_friendly",value:this.state.kid_friendly,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"kid_friendly",class:"checkbox"},"Kid Friendly"),l.a.createElement("input",{className:"checkbox",id:"outdoor_seating",checked:this.state.outdoor_seating,type:"checkbox",name:"outdoor_seating",value:this.state.outdoor_seating,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"outdoor_seating",class:"checkbox"},"Outdoor Seating"),l.a.createElement("input",{className:"checkbox",id:"vegetarian_friendly",checked:this.state.vegetarian_friendly,type:"checkbox",name:"vegetarian_friendly",value:this.state.vegetarian_friendly,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"vegetarian_friendly",class:"checkbox"},"Vegetarian Friendly"),l.a.createElement("input",{className:"checkbox",id:"gluten_free_options",checked:this.state.gluten_free_options,type:"checkbox",name:"gluten_free_options",value:this.state.gluten_free_options,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"gluten_free_options",class:"checkbox"},"Gluten Free Option"),l.a.createElement("input",{className:"checkbox",id:"farm_to_table",checked:this.state.farm_to_table,type:"checkbox",name:"farm_to_table",value:this.state.farm_to_table,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"farm_to_table",class:"checkbox"},"Farm-to-Table"),l.a.createElement("input",{className:"checkbox",id:"servers-alcohol",vchecked:this.state.serves_alcohol,type:"checkbox",name:"serves_alcohol",value:this.state.serves_alcohol,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"servers-alcohol",class:"checkbox servesalcohol"},"Serves Alcohol"),l.a.createElement("input",{className:"checkbox",id:"fullbar",checked:this.state.fullbar,type:"checkbox",name:"fullbar",value:this.state.fullbar,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"fullbar",class:"checkbox"},"Fullbar"),l.a.createElement("input",{className:"checkbox",id:"waterfront",checked:this.state.waterfront,type:"checkbox",name:"waterfront",value:this.state.waterfront,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"waterfront",class:"checkbox"},"Waterfront"),l.a.createElement("input",{className:"checkbox",id:"live_music",checked:this.state.live_music,type:"checkbox",name:"live_music",value:this.state.live_music,onChange:this.handleCheckboxChange}),l.a.createElement("label",{for:"live_music",class:"checkbox"},"Live Music"),l.a.createElement("a",{href:"/",className:"btn btn-secondary"},"Back"),l.a.createElement("button",{className:"buttons btn btn-secondary"},"Save")),l.a.createElement("button",{className:"buttons btn btn-secondary",onClick:this.deactivate},"Deactivate Account"),l.a.createElement("button",{className:"buttons btn btn-secondary",onClick:this.logout},"Log Out")):null)}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={newrestaurant:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(e){this.setState({newrestaurant:this.props.restaurant}),console.log(this.props.restaurant),console.log(this.props.restaurant.restaurant.timings)}},{key:"render",value:function(e,t){return console.log(this.props),l.a.createElement("div",null,l.a.createElement("h2",null,this.props.restaurant.restaurant.name),l.a.createElement("p",null,this.props.restaurant.restaurant.cuisines),l.a.createElement("div",null,l.a.createElement("p",null,this.props.restaurant.restaurant.timings)))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"aside-box"},l.a.createElement("h1",{className:"header"},"Shut Up & Eat"),localStorage.getItem("my-app-user")?l.a.createElement("a",{className:"navbtn btn btn-secondary",href:"/profile/"},"Profile"):l.a.createElement("div",null,l.a.createElement("a",{className:"navbtn btn btn-secondary",href:"/login/"},"Sign In"),l.a.createElement("a",{className:"navbtn btn btn-secondary",href:"/signup/"},"Sign up")))}}]),t}(n.Component),C=a(169),x=a(44),S=a(392),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={restaurantLocation:{lat:32,lng:32},userLocation:{lat:32,lng:32},loading:!0,bounds:null},a.onBoundsChanged=a.onBoundsChanged.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(e){var t=this;navigator.geolocation.getCurrentPosition((function(e){var a=e.coords,n=a.latitude,l=a.longitude;t.setState({userLocation:{lat:n,lng:l},loading:!1})}),(function(){t.setState({loading:!1})}))}},{key:"onBoundsChanged",value:function(){this.setState({bounds:this.state.restaurantLocation.map.fitBounds(),center:this.state.userLocation.map.getCenter()}),console.log(this.state.restaurantLocation)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.userLocation,n=e.restaurantLocation;return t?null:l.a.createElement(x.GoogleMap,{defaultZoom:15,defaultCenter:a,defaultOptions:{disableDefaultUI:!0,draggable:!0,keyboardShortcuts:!1,scaleControl:!0,scrollwheel:!0,styles:S},onBoundsChanged:this.onBoundsChanged},l.a.createElement(x.Marker,{position:a}),l.a.createElement(x.Marker,{position:n}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{restaurantLocation:{lat:e.restaurantLocation.lat,lng:e.restaurantLocation.lng}}}}]),t}(n.Component),w=Object(x.withScriptjs)(Object(x.withGoogleMap)(O));function j(e){return l.a.createElement("div",{className:"map"},l.a.createElement(w,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBm5r5sZESK6Jo8pWiLFjkGvpGJ010ED9I",loadingElement:l.a.createElement("div",{style:{height:"100% "}}),containerElement:l.a.createElement("div",{style:{height:"100% "}}),mapElement:l.a.createElement("div",{style:{height:"100% "}}),restaurantLocation:e.restaurantLocation}))}a(393);var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={userCoords:null,aside:!1,restaurant:null,restaurantSelected:!1,profile:{},start:0,highlights:[],highlight:""},a.randomGenerator=a.randomGenerator.bind(Object(d.a)(a)),a.generateButton=a.generateButton.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(e){var t=this;navigator.geolocation.getCurrentPosition((function(e){var a=e.coords,n=a.latitude,l=a.longitude;t.setState({userCoords:{lat:n,lng:l}})}));var a=null;localStorage.getItem("my-app-user")&&(a={Authorization:"Token ".concat(JSON.parse(localStorage.getItem("my-app-user")).token)}),b.a.get("/api/v1/profile/detail/",{headers:a}).then((function(e){var a=[];t.setState({profile:e.data[0]}),t.setState({highlights:t.state.profile.highlights}),Object(C.a)(t.state.profile.highlights).forEach((function(e){return a.push(e.text)}));var n=a.toString().replace(/,/g," "),l=encodeURI(n);t.setState({highlight:l})})).catch((function(e){console.log(e)}))}},{key:"randomGenerator",value:function(){var e=this;b.a.get("https://developers.zomato.com/api/v2.1/search?lat=".concat(this.state.userCoords.lat,"&lon=").concat(this.state.userCoords.lng,"&start=").concat(this.state.start,"&count=20&radius=2000&q=").concat(this.state.highlight,"&apikey=5ff1c6015f3549f838e7d3a54deb7e8f")).then((function(t){var a=t.data.restaurants[Math.floor(Math.random()*t.data.restaurants.length)];e.setState({restaurant:a,start:e.state.start+20}),e.setState({restaurantSelected:!0}),e.setState({aside:!0})})).catch((function(e){console.log(e)})),console.log("randomGenerate is firing")}},{key:"generateButton",value:function(){return(this.props.location.pathname="/")?l.a.createElement("button",{className:"buttons btn btn-secondary btn-lg",type:"button",onClick:this.randomGenerator},"Random Generator"):null}},{key:"render",value:function(){return console.log(this.props.location),l.a.createElement("div",{className:"row"},l.a.createElement(j,{restaurantLocation:this.state.restaurant?{lat:Number(this.state.restaurant.restaurant.location.latitude),lng:Number(this.state.restaurant.restaurant.location.longitude)}:{lat:32,lng:32}}),l.a.createElement("aside",{id:"aside",className:!1===this.state.aside?"asidehome":"aside"},l.a.createElement("div",{className:"asideContent"},this.props.children,this.state.restaurantSelected?l.a.createElement(E,{restaurant:this.state.restaurant,profile:this.state.profile}):null,60===this.state.start?l.a.createElement("p",null,"Stop being picky! Shut up and Eat!"):l.a.createElement("button",{className:"buttons btn btn-secondary btn-lg",type:"button",onClick:this.randomGenerator},"Let's Eat!"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(70);o.a.render(l.a.createElement(F.a,null,l.a.createElement(y.d,null,l.a.createElement(N,null,l.a.createElement(y.b,{path:"/restaurant/",component:E}),l.a.createElement(y.b,{path:"/profile/create/",component:v}),l.a.createElement(y.b,{path:"/profile/",component:k}),l.a.createElement(y.b,{path:"/login/",component:f}),l.a.createElement(y.b,{path:"/signup/",component:g}),l.a.createElement(y.b,{exact:!0,path:"/",component:_}))),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cinzel+Decorative|Rock+Salt&display=swap",rel:"stylesheet"}),l.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[170,1,2]]]);
//# sourceMappingURL=main.a8ee716f.chunk.js.map