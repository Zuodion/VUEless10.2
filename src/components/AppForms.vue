<template>
  <div>
    <label>Add new name</label>
    <input type="text" v-model="newName">
    <button @click="addNewName">Add new name</button>
    {{ names }}
    <label>Add new age</label>
    <input type="text" v-model="newAge">
    <button @click="addNewAge">Add new age</button>
    {{ ages }}
    <label>Add new fruit</label>
    <input type="text" v-model="newFruit">
    <button @click="addNewFruit">Add new fruit</button>
    {{ fruits }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newName: "",
      newAge: "",
      newFruit: ""
    };
  },
  name: "AppForms",
  computed: {
    ...mapGetters(["names", "ages", "fruits"])
  },
  methods: {
    addNewName() {
      if (this.newName === "") return;
      this.$store.dispatch("addName", this.newName);
      this.newName = "";
    },
    addNewAge() {
      if (this.newAge === "") return;
      this.$store.dispatch("addAge", this.newAge);
      this.newAge = "";
    },
    addNewFruit() {
      if (this.newFruit === "") return;
      this.$store.dispatch("addFruit", this.newFruit);
      this.newFruit = "";
    }
  }
};
</script>

