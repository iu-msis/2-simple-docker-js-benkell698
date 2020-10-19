var app = new Vue({
  el: #commmentjs
  data: {
    comments: [{
      id: '',
      commentText: '',
    }]
  }
})
methods:{
  fetchUser(){
    fetch('api/comments/')
    .then(response => response.json())
    .then(json => {
      this.comments=json;
      console.log(this.comments);
    });
  }
}























fetchUser(){
  fetch('api/users/')
  .then(response => response.json())
  .then(json => {
    this.users=json;
    console.log(this.users);
  })
}
