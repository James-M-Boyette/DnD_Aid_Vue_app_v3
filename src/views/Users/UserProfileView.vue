<template>
  <main>
    <article>
      <h1 class="container text-center">
        Welcome Back,
        <em>{{ currentUser.uScreenName }}</em> !
        <!-- <em>{{ currentUser }}</em> ! -->
      </h1>
    </article>
  </main>
</template>

<script>
import axios from "axios";
import { ref, reactive, computed } from "vue";

export default {
  name: "UserProfileView",
  // Vue 2's 'Options API' version ...
  // data() {
  //   return {
  //     currentUser: {},
  //     firstName: "Ze User's First Name",
  //     lastName: "Ze User's Last Name",
  //     userName: "Ze User's 'User' Name",
  //     email: "Ze User's Email",
  //     password: "Even we don't know!",
  //   };
  // },
  // async created() {
  //   axios.get("/api/users/current_user").then((response) => {
  //     // axios
  //     //   .get("https://dnd-aid-back-end.herokuapp.com/api/users/current_user")
  //     // .then((response) => {
  //     console.log("Here's the user's data:", response.data);
  //     // current_user's info is stored in var currentUser
  //     this.currentUser = response.data;
  //     console.log("currentUser:", this.currentUser);
  //     this.userName = this.currentUser.uScreenName;
  //   });
  // },

  setup() {
    const currentUser = ref({
      adminLevel: null,
      email: "not-an-email@gmail.com",
      id: null,
      password: null,
      uFirstName: "Jaqen ",
      uLastName: "H'ghar",
      uScreenName: "@_man_of_8rav0s",
      userID: null,
    });
    // const currentUser = computed(() => {
    //   axios.get("/api/users/current_user").then((response) => {
    //     // axios
    //     //   .get("https://dnd-aid-back-end.herokuapp.com/api/users/current_user")
    //     // .then((response) => {
    //     console.log("Here's the user's data:", response.data);
    //     return response.data;
    //   });
    //   currentUser.value.uScreenName = "CAPTAIN_BLAH!";
    // });
    // console.log("currentUser:", currentUser.value);

    // Get current_user's info
    const getUserData = () => {
      axios.get("/api/users/current_user").then((response) => {
        // axios
        //   .get("https://dnd-aid-back-end.herokuapp.com/api/users/current_user")
        // .then((response) => {
        console.log("Here's the user's data:", response.data);
        // current_user's info is stored in var currentUser
        currentUser.value = response.data;
        // currentUser.value.uScreenName = "CAPTAIN_BLAH!";
        // console.log("currentUser:", this.currentUser);
      });
    };
    getUserData();

    return { currentUser };
  },
  methods: {},
};
</script>

<style></style>
