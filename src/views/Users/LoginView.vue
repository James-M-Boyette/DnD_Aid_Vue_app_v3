<template>
  <section id="user-login">
    <div class="container-lg">
      <div class="text-center">
        <h2>Log In</h2>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-lg-6">
          <form @submit.prevent="handleSubmit">
            <!-- <form id="login-form" v-on:submit.prevent="submit()"> -->
            <!-- User Name -->
            <label for="user-name" class="form-label">Username:</label>
            <div class="mb-4 input-group">
              <span class="input-group-text">
                <i class="bi bi-person-fill text-primary"></i>
              </span>

              <input
                type="text"
                id="user-name"
                class="form-control"
                required
                v-model="userName"
                placeholder="e.g.    Legolas_Fan_1"
              />
              <!-- tooltip -->
              <span class="input-group-text">
                <span
                  class="tt"
                  data-bs-placement="bottom"
                  title="The  USER NAME  used for your account?"
                >
                  <i class="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>

            <!-- Password -->
            <label for="password" class="form-label">Password:</label>
            <div class="input-group mb-4">
              <!-- This is the shaded icon to the left of the input field ... -->
              <span class="input-group-text">
                <i class="bi bi-key-fill text-primary"></i>
              </span>
              <input
                type="password"
                id="password"
                class="form-control"
                required
                v-model="password"
                placeholder="e.g.    myPassw0rd1234"
              />

              <!-- tooltip -->
              <span
                class="input-group-text pe-auto"
                @click="password_show_hide()"
              >
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
                  title="The  PASSWORD  used for your account?"
                >
                  <i class="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>

            <!-- Password Length Validation -->
            <div
              v-if="passwordError"
              id="pwLengthError"
              class="password-error mb-2 text-danger fw-bold"
              style="margin-top: -1.5em !important"
            >
              {{ passwordError }}
            </div>

            <!-- Submit -->
            <div class="mb-4 mt-3 text-center">
              <button type="submit" class="btn btn-primary" value="Submit">
                Login
              </button>
              <router-link
                :to="{ name: 'user-sign-up' }"
                class="btn btn-outline-secondary ms-2"
              >
                Need to sign up for an account?</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="data-test">
    <div class="container my-5">
      <h3>Dynamic Variables ...</h3>
      <p>
        Username:
        {{ userName }}
      </p>
      <p>
        Email:
        {{ email }}
      </p>
      <p>Password: {{ password }}</p>
      <p>passwordError: {{ passwordError }}, {{ password.length }}</p>
      <!-- <p>Login Errors: {{ errors }}</p> -->
      <p>Terms Accepted? {{ consent }}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",

  // data: function () { // Interesting ... a more explicit Object declaration ...
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      // errors: [], // from Capstone login form ...
      passwordError: "",
      consent: false,
    };
  },
  methods: {
    // Reveal or Hide User's pw input ...
    password_show_hide() {
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
    // Submit User credentials to server ...
    handleSubmit() {
      // Validate Password Length
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 chars long";

      // If Inputs are validated ...
      let params = {
        username: this.userName,
        // email: this.email,s
        password: this.password,
      };
      axios
        .post("/api/sessions", params) // Local Development
        // ) // Local Development + CORS proxy
        // .post("https://dnd-aid-back-end.herokuapp.com/api/sessions", params) // Production

        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          console.log("Logged in:", localStorage.getItem("jwt"));
          this.$router.push({ name: "user-profile" });
          // this.$router.push(
          //   "https://dnd-aid-back-end.herokuapp.com/user_profile"
          // );
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<style scoped></style>
