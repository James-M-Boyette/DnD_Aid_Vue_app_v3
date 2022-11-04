<template>
  <main>
    <!-- User Profile View -->
    <section id="user-profile">
      <div class="container">
        <div
          id="row-profile-wrapper"
          class="row align-items-center justify-content-center my-5"
        >
          <div
            id="my-row-#1"
            class="row align-items-center justify-content-center text-center"
          >
            <h1>User Profile</h1>

            <div
              id="welcome-message"
              class="row text-center justify-content-center col-lg-6 mb-3 mt-3"
            >
              <h2>
                Welcome Back,
                <em>{{ currentUser.uScreenName }}</em> !
              </h2>
            </div>
          </div>

          <form @submit.prevent="handleSubmit">
            <UserUpdateInfo />
          </form>

          <!-- Characters, Campaigns, Friends -->
          <div id="user-stats">
            <!-- <h3>User Characters:</h3> -->
            <!-- TODO: display stats (# of characters) + make it a link to the index page for characters -->
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
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import { ref, reactive, computed, watchEffect } from "vue";

import UserUpdateInfo from "../../components/Users/UserUpdateInfo.vue";

export default {
  name: "UserProfileView",
  components: {
    UserUpdateInfo,
  },
  // Vue 2's 'Options API' version ...
  data() {
    return {
      currentUserRef: {},
      firstName: "Ze User's First Name",
      lastName: "Ze User's Last Name",
      userName: "Ze User's 'User' Name",
      email: "Ze User's Email",
      password: "Even we don't know!",
      pwMessage: "Even we don't know!",
    };
  },
  watch: {
    password() {
      // Validate Password Length
      if (this.password.length < 6 && this.password.length > 0) {
        this.passwordError = "Password must be at least 6 chars long";
      } else {
        this.passwordError = "";
        this.validatorsFailed = false;
      }
    },
    passwordSecond() {
      // Validate Both Passwords Match
      if (
        this.password != this.passwordSecond &&
        this.passwordSecond.length > 0
      ) {
        this.passwordDoesntMatchError = "Passwords must match";
      } else {
        this.passwordDoesntMatchError = "";
        this.validatorsFailed = false;
      }
    },
  },
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

  // Vue 3's "Composition" API ...
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
      console.log(
        "currentUser function ran",
        currentUser.value,
        "currentUser.value.uFirstName:",
        currentUser.value.uFirstName
      );
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
  methods: {
    // Reveal or Hide User's pw input ...
    password_show_hide() {
      console.log("Current User:", currentUser.value);
      console.log("Current User Ref:", currentUserRef);

      const passwordInputField = document.getElementById("password");
      const showEye = document.getElementById("showEye");
      const hideEye = document.getElementById("hideEye");
      showEye.classList.remove("d-none");
      if (passwordInputField.type === "password") {
        passwordInputField.type = "text";
        showEye.style.display = "block";
        hideEye.style.display = "none";
      } else {
        passwordInputField.type = "password";
        showEye.style.display = "none";
        hideEye.style.display = "block";
      }
    },
  },
};
</script>

<style></style>
