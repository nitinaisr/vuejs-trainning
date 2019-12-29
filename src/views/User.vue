<template>
  <div>
    <h1 class="title">User</h1>

    <p>
      <button @click="getUser()" class="button is-primary">Get Users</button>
    </p>
    <pre>{{ users }}</pre>

    <!-- ถ้ามีตัวแปรมากกว่า 1 ให้ใส่ () -->
    <!-- <p v-for="(each, idx) in users" :key="each.id">
      {{ idx + 1 }} {{ each.name }}
    </p> -->
    <!-- <figure v-for="each in users" :key="each.id" class="image is-128x128">
      <img :src="each.url" />
    </figure> -->

    <p>
      <input v-model="query" type="text" min="0" max="100" />
    </p>

    <table class="table">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
      </tr>
      <!-- <tr v-for="(each, idx) in users" :key="each.id"> -->
      <tr v-for="(each, idx) in filterUsers" :key="each.id">
        <td>{{ idx + 1 }}</td>
        <td>
          <!-- <router-link :to="'/user/' + each.id">{{ each.name }}</router-link> -->
          <router-link :to="`/user/${each.id}`">{{ each.name }}</router-link>
        </td>
        <td>{{ each.email }}</td>
        <td>{{ each.phone }}</td>
        <td>{{ each.address.city }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    //promised คือ ยังทำไม่เสร็จทันที
    async getUser() {
      // axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      //   this.users = res.data;
      // });
      try {
        // const res = await axios.get(
        //   "https://jsonplaceholder.typicode.com/photos?_limit=5" //สามารถสั่ง limit รายการได้
        // );
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users" //สามารถสั่ง limit รายการได้
        );
        this.users = res.data;
      } catch (e) {
        alert(e.message);
      }

      //   this.users = [1, 2, 3, 4, 5];
    }
  },
  data() {
    return {
      users: [],
      query: ""
    };
  },
  computed: {
    filterUsers() {
      //computed จะมีการ excecute ทุกครั้งที่มีการอ้างตัวถึงแปรตัวอื่น แล้วมีการเปลี่ยนค่า มันก็จะ update หรือ excecute ใหม่
      const pattern = new RegExp(this.query, "i");
      return this.users.filter(each => {
        return pattern.test(each.name) || pattern.test(each.address.street);
      }); //อะไรก็ตามที่เป็น arry สมารถเขียน filter ได้
    }
  }
};
</script>
