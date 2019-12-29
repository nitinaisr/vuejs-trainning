<template>
  <div>
    <h1 class="title">UserProfile</h1>
    <pre>{{ user }}</pre>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";
export default {
  data() {
    return {
      user: {}
    };
  },
  async mounted() {
    //mounted สามารถ เรียก function ต่างๆ จาก Methods ได้อีกที
    const id = this.$route.params.id;
    const res = await axios.get(url + "/" + id);
    this.user = res.data;
    console.log(res.data);
  }
};
</script>
