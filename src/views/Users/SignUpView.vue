<template>
  <section id="user-signup">
    <div class="container-lg">
      <div class="text-center">
        <h2>Sign Up</h2>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-lg-6">
          <form @submit.prevent="handleSubmit">
            <!-- <form id="login-form" v-on:submit.prevent="submit()"> -->

            <!-- First Name -->
            <label for="firstName" class="form-label">First Name:</label>
            <div class="mb-4 input-group">
              <span class="input-group-text">
                <i class="bi bi-person-fill text-primary"></i>
              </span>

              <input
                type="text"
                id="firstName"
                class="form-control"
                required
                v-model="firstName"
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

            <!-- Last Name -->
            <label for="lastName" class="form-label">Last Name:</label>
            <div class="mb-4 input-group">
              <span class="input-group-text">
                <i class="bi bi-person-fill text-primary"></i>
              </span>

              <input
                type="text"
                id="lastName"
                class="form-control"
                required
                v-model="lastName"
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

            <!-- Email -->
            <label for="email" class="form-label">Email:</label>
            <div class="mb-4 input-group">
              <span class="input-group-text">
                <i class="bi bi-person-fill text-primary"></i>
              </span>

              <input
                type="text"
                id="email"
                class="form-control"
                required
                v-model="email"
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
                  title="What should people call you on this site?"
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

            <!-- Password CONFIRMATION -->
            <label for="password" class="form-label"
              >Password Confirmation:</label
            >
            <div class="input-group mb-4">
              <!-- This is the shaded icon to the left of the input field ... -->
              <span class="input-group-text">
                <i class="bi bi-key-fill text-primary"></i>
              </span>
              <input
                type="password"
                id="passwordSecond"
                class="form-control"
                required
                v-model="passwordSecond"
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

            <!-- 'Terms' Checkbox + Modal trigger -->
            <div class="terms">
              <input type="checkbox" required v-model="consent" />
              <label class="ms-2"
                >Accept
                <a
                  href=""
                  type="button"
                  class="btn btn-link ps-1 pt-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  >terms & conditions</a
                >
              </label>
            </div>
            <!-- 'Terms' Modal -->
            <TermsModal @termsAccepted="toggleConsentViaModal" />

            <!-- Submit -->
            <div class="mb-4 mt-3 text-center">
              <button type="submit" class="btn btn-primary" value="Submit">
                Sign Up
              </button>
              <router-link
                :to="{ name: 'user-login' }"
                class="btn btn-outline-secondary ms-2"
              >
                Already have an account?</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="data-test">
    <div class="container my-5">
      <h3>Dynamic Variables ...</h3>
      <p>
        First Name:
        {{ firstName }}
      </p>
      <p>
        Last Name:
        {{ lastName }}
      </p>
      <p>
        Username:
        {{ userName }}
      </p>
      <p>
        Email:
        {{ email }}
      </p>
      <p>Password: {{ password }}</p>
      <p>Password2: {{ passwordSecond }}</p>
      <p>password match: {{ passwordDoesntMatchError }}</p>
      <p>passwordError: {{ passwordError }}, {{ password.length }}</p>
      <p>Terms Accepted? {{ consent }}</p>
    </div>
  </section> -->
</template>

<script>
import axios from "axios";
import TermsModal from "../../components/Users/TermsModal.vue";

export default {
  name: "LoginView",
  components: {
    TermsModal,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordSecond: "",
      // errors: [], // from Capstone login form ...
      passwordError: "",
      passwordDoesntMatchError: "",
      // Terms Modal Data
      consent: false,
    };
  },

  // Validate that passwords match ...
  watch: {
    password() {
      // Validate Password Length
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 chars long";
    },
    passwordSecond() {
      // Validate Both Passwords Match
      this.passwordDoesntMatchError =
        this.password === this.passwordSecond ? "" : "Passwords must match";
    },
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

    // Toggle 'Terms' Modal Visibility ...
    toggleConsentViaModal() {
      console.log("toggleConsentViaModal Triggered ...");
      if (!this.consent) {
        this.consent = true;
      }
    },

    // Submit User credentials to server ...
    handleSubmit(e) {
      // If Inputs are validated ...
      /**
       * TODO:
       *  - Create a validation, etc. that blocks submission if above validators fail
       */
      // let validationFailed = false;
      // do your validation here ...
      if (this.passwordError || this.passwordDoesntMatchError) {
        console.log("Validators failed ☠️");
        e.preventDefault();
        return false;
      }
      /**
       * TODO: comment below conditional out once FE updates are finished ...
       */
      if (!this.passwordError) {
        console.log("username: ", this.username);
        console.log("password: ", this.password);
      }
      let params = {
        // username: this.username,
        email: this.email,
        password: this.password,
      };
      axios
        // .post("/api/sessions", params) // Local Development
        // .post("localhost:3000/api/sessions", params) // Local Development
        // .post(
        //   "https://evening-retreat-56760.herokuapp.com/https://dnd-aid-back-end.herokuapp.com/api/sessions",
        //   params
        // ) // Local Development + CORS proxy
        .post("https://dnd-aid-back-end.herokuapp.com/api/sessions", params) // Production

        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          // this.$router.push("/user_profile");
          this.$router.push(
            "https://dnd-aid-back-end.herokuapp.com/user_profile"
          );
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
      /**
       * TODO: comment below out once FE updates are finished ...
       */
      console.log("Form submitted");
    },
  },
};
</script>

<style scoped></style>
