<template>
  <!-- View User's Profile Data -->
  <section id="user-profile-view">
    <!-- Page Header -->
    <section id="page-name" class="container d-flex justify-content-center">
      <div id="user-show-page-heading" class="text-center">
        <h1>Profile:</h1>
      </div>
    </section>

    <!-- User Greeting Message -->
    <section id="user-profile-data" class="container">
      <section id="user-greeting" class="sub-section mt-2">
        <div id="row-#2" class="row text-center">
          <h2 class="text-center">
            Welcome Back,
            <em>{{ currentUser.uScreenName }}</em> !
          </h2>
        </div>
      </section>

      <!-- User's PERSONAL Info -->
      <section id="user-personal-info" class="sub-section mt-4">
        <div id="row-#3" class="row">
          <h3 class="text-center">Personal Info:</h3>

          <!-- First Name -->
          <div id="user-first-name" class="row text-start">
            <label class="col-6 me-auto">First Name:</label>
            <div class="col-6 ms-auto">
              {{ currentUser.uFirstName }}
            </div>
          </div>

          <!-- Last Name -->
          <div id="user-last-name" class="row text-start">
            <label class="col-6 ms-auto">Last Name:</label>
            <div class="col-6 me-auto">
              {{ currentUser.uLastName }}
            </div>
          </div>

          <!-- Email -->
          <div id="user-email" class="row text-start">
            <label class="col-6 ms-auto">Email:</label>
            <div class="col-6 me-auto">
              {{ currentUser.email }}
            </div>
          </div>
        </div>
      </section>

      <!-- User's CREDENTIAL Info -->
      <section id="user-credential-info" class="sub-section mt-4">
        <div id="row-#3" class="row">
          <h3 class="text-center">User Credentials:</h3>

          <!-- Screen Name -->
          <div id="user-screen-name" class="row text-start">
            <label class="col-6 ms-auto">Screen Name:</label>
            <div class="col-6 me-auto">
              {{ currentUser.uScreenName }}
            </div>
          </div>

          <!-- Password -->
          <div id="user-password" class="row text-start">
            <label class="col-6 ms-auto">Password:</label>
            <div class="col-6 me-auto">
              {{ currentUser.password }}
            </div>
          </div>
        </div>
      </section>

      <!-- User's CHARACTERS Info -->
      <!-- 
        TODO:
        display stats (# of characters) + make it a link to the index page for characters
       -->
      <!-- <section id="user-credential-info" class="sub-section mt-4">
        <div class="container d-flex justify-content-center">
          <div id="user-info">
            <div id="user-stats">
              <h3>Your Characters:</h3> -->
      <!-- TODO: make this link to 'characters' index page -->
      <!-- TODO: make this display all characters - but only their names (as a snippet) -->
      <!-- <div id="user-characters">
              Current Characters:
              <span>{{}}</span>
            </div> -->
      <!-- TODO: make this link to 'campaigns' index page -->
      <!-- TODO: make this display all campaigns - but only the campaign names (as a snippet) -->
      <!-- <div id="user-campaigns">
              Current Campaigns:
              <span>{{}}</span>
            </div> -->
      <!-- TODO: make this link to 'friends' index page -->
      <!-- TODO: make this display all friends - but only their screen names (as a snippet) -->
      <!-- <div id="user-friends">
              Friends:
              <span>{{}}</span>
            </div> -->
      <!-- </div>
          </div>
        </div>
      </section> -->
    </section>
  </section>
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
    // const currentUser = computed(async () => {
    //   try {
    //     const data = await axios
    //       .get("/api/users/current_user") //use data destructuring to get data from the promise object
    //       .then((response) => {
    //         console.log("Here's the user's data:", response.data);
    //         return response.data;
    //       });
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //   }

    // axios.get("/api/users/current_user").then((response) => {
    //   // axios
    //   //   .get("https://dnd-aid-back-end.herokuapp.com/api/users/current_user")
    //   // .then((response) => {
    //   console.log("Here's the user's data:", response.data);
    //   return response.data;
    // });
    // currentUser.value.uScreenName = "CAPTAIN_BLAH!";
    // });

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

    return { currentUser, watchEffect };
  },
  methods: {},
};
</script>

<style scoped></style>
