<template>
  <main>
    <article class="container">
      <h1 class="text-center">
        Welcome Back,
        <em>{{ currentUser.uScreenName }}</em> !
      </h1>
      <div>{{ currentUser.value }}</div>
      <div class="container d-flex justify-content-center">
        <h2>Profile:</h2>
        <div id="user-info">
          <div id="user-names">
            <h3>Personal Info:</h3>
            <div id="user-first-name">
              First Name: <span>{{ currentUser.uFirstName }}</span>
            </div>
            <div id="user-last-name">
              Last Name: <span>{{ currentUser.uLastName }}</span>
            </div>
            <div id="user-email">
              Email: <span>{{ currentUser.email }}</span>
            </div>
          </div>
          <div id="user-credentials">
            <h3>User Credentials:</h3>
            <div id="user-screen-name">
              Screen Name: <span>{{ currentUser.uScreenName }}</span>
            </div>
            <div id="password">Password: <span>Even we don't know!</span></div>
          </div>
          <div id="user-stats">
            <h3>User Characters:</h3>
            <div id="user-characters">
              <!-- TODO: make this link to 'characters' index page -->
              Current Characters:
              <!-- TODO: make this display all characters - but only their names (as a snippet) -->
              <span>{{}}</span>
            </div>
            <div id="user-campaigns">
              <!-- TODO: make this link to 'campaigns' index page -->
              Current Campaigns:
              <!-- TODO: make this display all campaigns - but only the campaign names (as a snippet) -->
              <span>{{}}</span>
            </div>
            <div id="user-friends">
              <!-- TODO: make this link to 'friends' index page -->
              Friends:
              <!-- TODO: make this display all friends - but only their screen names (as a snippet) -->
              <span>{{}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 
        TODO:
        display stats (# of characters) + make it a link to the index page for characters
       -->
    </article>
  </main>
</template>

<script>
import axios from "axios";
import { ref, reactive, computed, watchEffect } from "vue";

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
    // const currentUser = ref({
    //   adminLevel: null,
    //   email: "not-an-email@gmail.com",
    //   id: null,
    //   password: null,
    //   uFirstName: "Jaqen ",
    //   uLastName: "H'ghar",
    //   uScreenName: "@_man_of_8rav0s",
    //   userID: null,
    // });
    const currentUser = computed(async () => {
      try {
        const data = await axios
          .get("/api/users/current_user") //use data destructuring to get data from the promise object
          .then((response) => {
            console.log("Here's the user's data:", response.data);
            return response.data;
          });
        return data;
      } catch (error) {
        console.log(error);
      }

      // axios.get("/api/users/current_user").then((response) => {
      //   // axios
      //   //   .get("https://dnd-aid-back-end.herokuapp.com/api/users/current_user")
      //   // .then((response) => {
      //   console.log("Here's the user's data:", response.data);
      //   return response.data;
      // });
      // currentUser.value.uScreenName = "CAPTAIN_BLAH!";
    });

    // function isObjectEmpty(obj) {
    //   return (
    //     !!obj && // 👈 null and undefined check
    //     Object.keys(obj).length === 0 &&
    //     obj.constructor === Object
    //   );
    // }

    watchEffect(() => {
      console.log("currentUser function ran", currentUser.value);
    });
    // console.log("currentUser:", currentUser.value);

    // Get current_user's info (Currently Working)
    // const getUserData = () => {
    //   axios.get("/api/users/current_user").then((response) => {
    //     // axios
    //     //   .get("https://dnd-aid-back-end.herokuapp.com/api/users/current_user")
    //     // .then((response) => {
    //     console.log("Here's the user's data:", response.data);
    //     // current_user's info is stored in var currentUser
    //     currentUser.value = response.data;
    //     // currentUser.value.uScreenName = "CAPTAIN_BLAH!";
    //     // console.log("currentUser:", this.currentUser);
    //   });
    // };
    // getUserData();

    return { currentUser, watchEffect };
  },
  methods: {},
};
</script>

<style></style>
