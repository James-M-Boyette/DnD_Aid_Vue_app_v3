<template>
  <section id="user-login">
    <div id="login-form-wrapper">
      <form id="login-form" v-on:submit.prevent="submit()">
        <h1>Have an account?</h1>
        <ul>
          <li class="text-danger" v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
        <!-- <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div> -->
        <!-- <div class="form-group"> -->
        <div class="form-input">
          <!-- <label>Username:</label> -->
          <input
            type="text"
            class="form-control"
            v-model="username"
            placeholder="Username"
          />
        </div>
        <div class="form-input">
          <!-- <label>Password:</label> -->
          <input
            type="password"
            class="form-control"
            v-model="password"
            placeholder="Password"
          />
          <span
            toggle="#password-field"
            class="fa fa-fw field-icon toggle-password fa-eye"
          ></span>
        </div>
        <!-- <input type="submit" class="btn btn-primary" value="Submit" /> -->
        <button class="submit-button" type="submit" value="Submit">
          Login
        </button>
        <!-- <button type="submit" class="btn btn-primary" value="Submit" /> -->
      </form>
    </div>
  </section>
  <section id="contact">
    <div class="container-lg">
      <div class="text-center">
        <h2>Log In</h2>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-lg-6">
          <form>
            <!-- Email Address -->
            <label for="email" class="form-label">Email address:</label>
            <div class="input-group mb-4">
              <!-- This is the shaded icon to the left of the input field ... -->
              <span class="input-group-text">
                <i class="bi bi-envelope-fill text-secondary"></i>
              </span>
              <input
                type="text"
                id="email"
                class="form-control"
                placeholder="e.g. mario@example.com"
              />
              <!-- tooltip -->
              <span class="input-group-text">
                <span
                  class="tt"
                  data-bs-placement="right"
                  title="Enter an email address we can reach you at 😄"
                >
                  <i class="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>

            <!-- User Name -->
            <label for="name" class="form-label">Name:</label>
            <div class="mb-4 input-group">
              <span class="input-group-text">
                <i class="bi bi-person-fill text-secondary"></i>
              </span>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="e.g. Mario"
              />
              <!-- tooltip -->
              <span class="input-group-text">
                <span
                  class="tt"
                  data-bs-placement="right"
                  title="What name can we use when referring to you?"
                >
                  <i class="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>

            <!-- Submit -->
            <div class="mb-4 text-center">
              <button type="submit" class="btn btn-secondary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <i class="bi bi-question-circle text-muted"></i>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      // email: "",
      username: "",
      password: "",
      errors: [],
    };
  },
  // How does the Login page create state?
  // It establishes a function "submit" and emplys it at the end of the template as a primary button (btn)
  // This function 1) creates a temp variable named "params", 2) establishes two keys (email: password:), 3) refers to the data stored in 'data, variables' (w/ same names) - which were updated via v-mode, and 4) stores our local variable contents in the function variables
  // Next, using axios, this hash variable 'params' is sent to the route api/sessions, waits for a response, and updates the header with a jwt (+ "bearer" syntax) ... it also stores the jwt locally.
  // Finally, the user is sent on to the webpage "userProfile" ...
  methods: {
    submit: function () {
      var params = {
        // email: this.email,
        username: this.username,
        password: this.password,
      };
      axios
        // .post("/api/sessions", params)
        .post("https://dnd-aid-back-end.herokuapp.com/api/sessions", params)
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
    },
  },
};
</script>

<style scoped></style>
