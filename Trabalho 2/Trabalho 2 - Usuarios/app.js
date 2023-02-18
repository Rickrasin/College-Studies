new Vue({
  el: '#app',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      $.ajax({
        url: 'https://reqres.in/api/users?per_page=10',
        type: 'GET',
        success: (response) => {
          this.users = response.data;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
});