<template>
  <div>
    <h1 class="title">Form</h1>

    <div class="field">
      <div class="control">
        <input
          :class="`input ${className2('name')}`"
          v-model="person.name"
          type="text"
          placeholder="Name"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input
          :class="'input ' + className2('surname')"
          v-model="person.surname"
          type="text"
          placeholder="Surname"
        />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="person.isMarried" /> Married
        </label>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="person.hobbies" value="reading" />
          reading
        </label>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="person.hobbies" value="music" /> Music
        </label>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="person.hobbies" value="hangout" />
          hangout
        </label>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="radio">
          <input type="radio" v-model="person.gender" value="M" /> Male
        </label>
        <label class="radio">
          <input type="radio" v-model="person.gender" value="F" /> Female
        </label>
      </div>
    </div>

    <div class="field">
      <div class="select">
        <select v-model="person.languages">
          <option v-for="each in languages" :value="each" :key="each">
            {{ each }}
          </option>
        </select>
      </div>
    </div>

    <p>Name: {{ person }}</p>
    <p>{{ person.name.length }}</p>
  </div>
</template>

<script>
import "animate.css/animate.min.css";
export default {
  methods: {
    // สามารถรับค่า parameter ได้  // สามารถเรียกได้สองวิธี   :class="`input ${className2('name')}`" หรือ  :class="'input ' + className2('surname')"
    className2(fieldName) {
      return this.person[fieldName] ? "is-success" : "is-danger animated shake"; //เรียกใช้ animate ด้วยการเพิ่ม animated ตามด้วยชื่อของ effect ที่ต้องการ
    }
  },
  data() {
    return {
      languages: ["JavaScript", "PHP", "C#", "Java", "Python"],
      person: {
        name: "",
        surname: "",
        isMarried: false,
        hobbies: [],
        gender: "M",
        languages: "JavaScript"
      }
    };
  },
  computed: {
    // computed ไม่สามารถรับค่า parameter ได้
    className() {
      return {
        // เก็บเป็น object เพื่อเก็บได้ง่ายขึ้น
        name: this.person.name ? "is-success" : "is-danger",
        surname: this.person.surname ? "is-success" : "is-danger"
        // empty: "is-danger",
        // success: "is-success"
      };
      // this.person.surname.length > 0
      //   ? " input is-primary"
      //   : " input is-danger";
    }
  }
};
</script>
