<template>
  <section id="user-signup">
    <div class="container">
      <!-- This div controls the alignment all the children elements -->
      <div
        id="row-signup-wrapper"
        class="row align-items-center justify-content-center my-5"
      >
        <!-- This div controls the overall width of the visual Signup Element -->
        <div id="col-signup-wrapper" class="col-lg-8">
          <div class="row text-center mb-3">
            <h1>Sign Up</h1>
          </div>
          <form @submit.prevent="handleSubmit">
            <!-- FName, LName  -->
            <div id="row-#1" class="row justify-content-center">
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
              </div>
            </div>

            <!-- Email, UN -->
            <div id="row-#2" class="row justify-content-center">
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
              </div>
            </div>

            <!-- Password & Confirmation -->
            <div id="row-#3" class="row justify-content-center">
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
                    placeholder="e.g.    myPassw0rd1234"
                  />
                  <!-- Tooltip -->
                  <span
                    class="input-group-text pe-auto"
                    @click="password_show_hide()"
                  >
                    <span
                      toggle="#password-field"
                      id="toggle-password"
                      class="border-end me-2 pe-2 border-secondary"
                    >
                      <i
                        class="bi bi-eye-fill text-muted d-none"
                        id="showEye"
                      ></i>
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
                <label for="password" class="form-label"
                  >Password Confirmation:</label
                >
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
                  <span
                    class="input-group-text pe-auto"
                    @click="password_show_hide()"
                  >
                    <span
                      toggle="#password-field"
                      id="toggle-password"
                      class="border-end me-2 pe-2 border-secondary"
                    >
                      <i
                        class="bi bi-eye-fill text-muted d-none"
                        id="showEye"
                      ></i>
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

            <!-- Terms & Buttons -->
            <div id="row-#4" class="row justify-content-center">
              <!-- 'Terms' Checkbox + Modal trigger -->
              <div class="terms col-md-8 col-lg-8 col-xl-7 col-xxl-12">
                <input type="checkbox" required v-model="consent" />
                <label class="ms-2">
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="
                      {
                        {
                          this.consent = !this.consent;
                        }
                      }
                    "
                  >
                    Accept
                  </button>

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
            </div>
          </form>

          <div id="row-#4" class="row justify-content-center">
            <!-- 'Terms' Checkbox + Modal trigger -->
            <div class="terms col-sm-8 col-md-8 col-lg-8 col-xl-6 col-xxl-8">
              <div
                v-if="validatorsFailed"
                id="validator-failures-message"
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                ✨🧚❗<span style="opacity: 0">__</span
                ><strong>Pixies must be meddling ... </strong>

                <p>
                  Please make sure there's nothing wrong with your password ...
                </p>
                <!-- <p><strong>Jumpin' Justicars!</strong></p>
            <p>Please make sure there's nothing wrong with your password ...</p> -->

                <!-- <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button> -->
              </div>
            </div>
          </div>
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
  name: "SignUpView",
  components: {
    TermsModal,
  },
  data() {
    return {
      // User Info
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      // Validation Data
      passwordSecond: "",
      passwordError: "",
      passwordDoesntMatchError: "",
      consent: false, // Terms / Modal Data
      validatorsFailed: false,
    };
  },

  // Validate that passwords match ...
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

      if (!this.passwordError && !this.passwordDoesntMatchError) {
        /**
         * TODO: comment below conditional out once FE updates are finished ...
         */
        console.table(
          {
            "First Name ": this.firstName,
            "Last Name ": this.lastName,
            "username ": this.userName,
            "email ": this.email,
            "password ": this.password,
          },
          { test: "test" }
        );

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

<style scoped></style>
