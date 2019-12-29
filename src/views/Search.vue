<template>
  <div>
    <h1>Search</h1>
    <input
      @keyup="searchUser()"
      v-model="search"
      type="text"
      name=""
      id=""
      class="input"
    />
    <pre>{{ users }}</pre>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

const url = "https://jsonplaceholder.typicode.com/users";
export default {
  created() {
    this.searchUser = _.debounce(this.searchUser, 1000); //higher order function  คือ
  },
  methods: {
    async searchUser() {
      const res = await axios.get(url + "?q=" + this.search);
      this.users = res.data;

      console.log("OK");
    }
  },
  data() {
    return {
      users: [],
      search: ""
    };
  }
};
</script>
