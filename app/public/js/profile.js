var app = new Vue({
  el: '#userProfile',
  data: {
    userName: '',
    userCountry: '',
    userDob: '',
    userAge: '',
    userEmail: '',
    userImage: '',
  },

  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser: function() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userImage = userData.picture.large;
        this.userName = userData.name.first + " " + userData.name.last;
        this.userCountry = userData.location.country;
        this.userDob = userData.dob.date[5]+ userData.dob.date[6] + '/' + userData.dob.date[8] + userData.dob.date[9] + '/' + userData.dob.date[0] + userData.dob.date[1] + userData.dob.date[2] + userData.dob.date[3];
        this.userAge = userData.dob.age;
        this.userEmail = userData.email;
      })
    };
    newUser( evt ){
      fetch('https://randomuser.me/api/', {
        method: "get",
        data: data
      })
    };
    }
  }
});
