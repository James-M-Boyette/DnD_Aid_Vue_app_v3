<template>
  <nav>
    <!-- <RouterLink to="/characters">Characters</RouterLink>
      <RouterLink to="/characters:id">Characters</RouterLink> -->
    <div class="topnav">
      <!-- Centered link -->
      <div class="topnav-centered">
        <router-link to="/">Home</router-link>
        <!-- <a href="#home" class="active">Home</a> -->
      </div>

      <!-- Left-aligned links (default) -->
      <!-- <a href="#news">News</a>
      <a href="#contact">Contact</a> -->

      <!-- Right-aligned links -->
      <div class="topnav-right">
        <!-- <a href="#search">Search</a> -->
        <!-- <a href="#about">About</a> -->
        <RouterLink to="/user-profile">Users</RouterLink>
        <RouterLink to="/login">Log-In</RouterLink>
      </div>
    </div>
  </nav>
  <!-- Top navigation -->
</template>

<script>
export default {};
</script>

<style scoped>
/* Add a black background color to the top navigation */
nav {
  /* background-color: #333; */
  background-color: #ffffff;
  opacity: 0.5;
  filter: alpha(opacity=50);
  border: 3px solid #bcbcbc;
  border-radius: 4px;
}

.topnav {
  position: relative;

  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #606060;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04aa6d;
  color: white;
}

/* Centered section inside the top navigation */
.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}

/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */
@media screen and (max-width: 600px) {
  .topnav a,
  .topnav-right {
    float: none;
    display: block;
  }

  .topnav-centered a {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }
}
</style>
