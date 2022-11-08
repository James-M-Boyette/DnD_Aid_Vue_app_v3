<template>
  <!-- FName, LName, Email  -->
  <div id="user-update-info" class="col-lg-8">
    <div id="row-#2" class="row justify-content-center">
      <h3 class="text-center">Personal Info:</h3>
      <!-- First Name -->
      <div class="col-md-8 col-lg-8 col-xl-7 col-xxl-6">
        <label for="firstName" class="form-label">First Name:</label>
        <div class="mb-4 input-group">
          <span class="input-group-text">
            <i class="bi bi-file-person text-primary"></i>
          </span>

          <input
            type="text"
            id="firstName"
            class="form-control"
            required
            v-model="currentUser.uFirstName"
            placeholder="e.g.    Peter"
          />
          <!-- tooltip -->
          <span class="input-group-text">
            <span
              class="tt"
              data-bs-placement="bottom"
              title="What's your first name?"
            >
              <i class="bi bi-question-circle text-muted"></i>
            </span>
          </span>
        </div>
      </div>

      <!-- Last Name -->
      <div class="col-md-8 col-lg-8 col-xl-7 col-xxl-6">
        <label for="lastName" class="form-label">Last Name:</label>
        <div class="mb-4 input-group">
          <span class="input-group-text">
            <i class="bi bi-file-person-fill text-primary"></i>
          </span>

          <input
            type="text"
            id="lastName"
            class="form-control"
            required
            v-model="currentUser.uLastName"
            placeholder="e.g.    Jackson"
          />
          <!-- tooltip -->
          <span class="input-group-text">
            <span
              class="tt"
              data-bs-placement="bottom"
              title="What's your last name?"
            >
              <i class="bi bi-question-circle text-muted"></i>
            </span>
          </span>
        </div>
      </div>

      <!-- Email -->
      <div class="col-md-8 col-lg-8 col-xl-7 col-xxl-6">
        <label for="email" class="form-label">Email:</label>
        <div class="mb-4 input-group">
          <span class="input-group-text">
            <i class="bi bi-envelope-fill text-primary"></i>
          </span>

          <input
            type="text"
            id="email"
            class="form-control"
            required
            v-model="currentUser.email"
            placeholder="e.g.    LotR_is_BESTbro@gmail.com"
          />

          <!-- tooltip -->
          <span class="input-group-text">
            <span
              class="tt"
              data-bs-placement="bottom"
              title="What email can you be reached at?"
            >
              <i class="bi bi-question-circle text-muted"></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- UserName, Password, Confirmation -->
  <div id="user-credentials" class="col-lg-8">
    <div id="row-#2" class="row justify-content-center">
      <h3 class="text-center">Your Credentials:</h3>
      <!-- User Name -->
      <div class="col-md-8 col-lg-8 col-xl-7 col-xxl-6">
        <label for="user-name" class="form-label">Username:</label>
        <div class="mb-4 input-group">
          <span class="input-group-text">
            <i class="bi bi-controller text-primary"></i>
          </span>

          <input
            type="text"
            id="user-name"
            class="form-control"
            required
            v-model="currentUser.uScreenName"
            placeholder="e.g.    Legolas_Fan_1"
          />
          <!-- tooltip -->
          <span class="input-group-text">
            <span
              class="tt"
              data-bs-placement="bottom"
              title="What should people call you on this site?"
            >
              <i class="bi bi-question-circle text-muted"></i>
            </span>
          </span>
        </div>
      </div>

      <!-- PASSWORD -->
      <div class="col-md-8 col-lg-8 col-xl-7 col-xxl-6">
        <label for="password" class="form-label">Password:</label>
        <!-- Input Wrapper -->
        <div class="input-group mb-4">
          <!-- Input's Left-Most Icon -->
          <span class="input-group-text">
            <i class="bi bi-key-fill text-primary"></i>
          </span>
          <!-- Input -->
          <input
            type="password"
            id="password"
            class="form-control"
            required
            v-model="password"
            placeholder="Even we don't know!"
          />
          <!-- Tooltip -->
          <span class="input-group-text pe-auto" @click="password_show_hide()">
            <span
              toggle="#password-field"
              id="toggle-password"
              class="border-end me-2 pe-2 border-secondary"
            >
              <i class="bi bi-eye-fill text-muted d-none" id="showEye"></i>
              <i class="bi bi-eye-slash text-muted" id="hideEye"></i>
            </span>

            <span
              class="tt"
              data-bs-placement="bottom"
              title="What password would you like to use for authentication?"
            >
              <i class="bi bi-question-circle text-muted"></i>
            </span>
          </span>
        </div>
        <!-- Password Length Validation -->
        <div
          v-if="passwordError"
          id="pwLengthError"
          class="mb-2 text-danger fw-bold"
          style="margin-top: -1.5em !important"
        >
          {{ passwordError }}
        </div>
      </div>

      <!-- CONFIRMATION -->
      <div class="col-md-8 col-lg-8 col-xl-7 col-xxl-6">
        <label for="password" class="form-label">Password Confirmation:</label>
        <div class="input-group mb-4">
          <!-- This is the shaded icon to the left of the input field ... -->
          <span class="input-group-text">
            <i class="bi bi-key text-primary"></i>
          </span>
          <input
            type="password"
            id="passwordSecond"
            class="form-control"
            required
            v-model="passwordSecond"
            placeholder="Make sure you've typed it correctly"
          />

          <!-- tooltip -->
          <span class="input-group-text pe-auto" @click="password_show_hide()">
            <span
              toggle="#password-field"
              id="toggle-password"
              class="border-end me-2 pe-2 border-secondary"
            >
              <i class="bi bi-eye-fill text-muted d-none" id="showEye"></i>
              <i class="bi bi-eye-slash text-muted" id="hideEye"></i>
            </span>

            <span
              class="tt"
              data-bs-placement="bottom"
              title="Please re-type your password to ensure correct spelling"
            >
              <i class="bi bi-question-circle text-muted"></i>
            </span>
          </span>
        </div>
        <!-- Password Match Validation -->
        <div
          v-if="passwordDoesntMatchError"
          id="pwMatchError"
          class="mb-2 text-danger fw-bold"
          style="margin-top: -1.5em !important"
        >
          {{ passwordDoesntMatchError }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, reactive, computed, watchEffect } from "vue";

export default {
  name: "UserUpdateInfo",
  // Vue 2's 'Options API' version ...
  data() {
    return {
      currentUserRef: {},
      currentUser: {},
      firstName: "Ze User's First Name",
      lastName: "Ze User's Last Name",
      userName: "Ze User's 'User' Name",
      email: "Ze User's Email",
      password: "Even we don't know!",
      pwMessage: "Even we don't know!",
      // Validation Data
      passwordSecond: "",
      passwordError: "",
      passwordDoesntMatchError: "",
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

    getUserData = () => {
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

    // Submit User credentials to server ...
    handleSubmit(e) {
      // If Inputs are validated ...
      /**
       * TODO:
       *  - Create a validation, etc. that blocks submission if above validators fail
       */
      // let validationFailed = false;
      // do your validation here ...

      if (!this.passwordError && !this.passwordDoesntMatchError) {
        /**
         * TODO: comment below conditional out once FE updates are finished ...
         */
        console.table({
          "First Name ": this.firstName,
          "Last Name ": this.lastName,
          "username ": this.userName,
          "email ": this.email,
          "password ": this.password,
        });

        const params = {
          // username: this.username,
          user_first_name: this.firstName,
          user_last_name: this.lastName,
          user_screen_name: this.userName,
          email: this.email,
          password: this.password,
        };
        axios
          .post("/api/users", params) // Local Development
          // .post("localhost:3000/api/sessions", params) // Local Development
          // .post(
          //   "https://evening-retreat-56760.herokuapp.com/https://dnd-aid-back-end.herokuapp.com/api/sessions",
          //   params
          // ) // Local Development + CORS proxy
          // .post("https://dnd-aid-back-end.herokuapp.com/api/sessions", params) // Production

          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "user-login" });
            // this.$router.push(
            //   "https://dnd-aid-back-end.herokuapp.com/user_profile"
            // );
          })
          .catch((error) => {
            console.log(error.response);
          });
        /**
         * TODO: comment below out once FE updates are finished ...
         */
        console.log("Form submitted");
      } else {
        this.validatorsFailed = true;
      }
    },
  },
};
</script>

<style></style>
