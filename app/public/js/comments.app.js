var app = new Vue({
  el: '#commentsapp',
  data: {
    oldComments: [{
      id: '',
      commentText: '',
    }],
    newComment: {
      commentText: '',
    }
  },
    created(){
      this.fetchComments();
    },

  methods: {
    fetchComments: function(){
      fetch("api/comments/index.php")
      .then(response => response.json())
      .then(json => {
        this.oldComments=json;

      console.log(this.oldComments);
      });
    },
    createComment: function(){
      // this.newComment.commentId = (this.newComment.commentText)
      fetch("api/comments/create.php", {
        method: 'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log("Retrieved:", json);
        this.oldComments.push(json[0]);
        this.newComment= this.newCommentInfo();
      });
        console.log("Creating (POSTing)...!");
        console.log(this.newComment);
    },
    newCommentInfo() {
      return {
        commentText: ''
      }
    }
  }

})
