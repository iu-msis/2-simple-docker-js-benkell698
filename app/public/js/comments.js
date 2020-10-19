commentApp = new Vue({
  el: '#commmentTable',
  data: {
    comments: [{ //Holds the data from the database
      id: '',
      commentText: ''
    }]
  },
methods:{
  fetchUser(){ //Grabs the API from the Vue.js app
    fetch('api/comments/')
    .then(response => response.json())
    .then(json => {
      this.comments=json;
      console.log(this.comments);
    });
  }
  created(){
    this.fetchUser();
  }
}
};






















//
// fetchUser(){
//   fetch('api/users/')
//   .then(response => response.json())
//   .then(json => {
//     this.users=json;
//     console.log(this.users);
//   })
// }
