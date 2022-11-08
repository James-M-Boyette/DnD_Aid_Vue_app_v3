<template>
  <div class="container mt-5">
    <footer
      id="main-footer"
      class="d-flex flex-wrap justify-content-sm-between justify-content-md-around align-items-center py-3 mt-auto my-4 border-top"
    >
      <!-- Copyright -->
      <p
        class="col-sm-12 col-md-4 mb-0 mx-sm-auto text-muted order-sm-last order-md-first"
      >
        © 2022 James Boyette
      </p>

      <!-- Center Icons -->
      <ul
        class="nav col-sm-12 col-md-4 align-items-center justify-content-md-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none order-sm-2 order-md-2"
      >
        <!-- Github -->
        <li class="nav-item">
          <a
            href="https://github.com/sou7hernsaint"
            target="_blank"
            class="nav-link px-2 text-muted"
            ><i class="bi bi-github"></i
          ></a>
        </li>
        <!-- LinkedIn -->
        <li class="nav-item">
          <a
            href="https://www.james-boyette.com"
            target="_blank"
            class="nav-link px-2 text-muted"
            ><i class="bi bi-award"></i
          ></a>
        </li>
        <!-- DnD Aid Logo -->
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link px-2 text-muted">
            <!-- Insert DnD Logo ?as SVG? -->
            <i class="bi bi-bootstrap-fill"></i
          ></router-link>
        </li>
        <!-- LinkedIn -->
        <li class="nav-item">
          <a
            href="https://www.linkedin.com/in/james-boyette/"
            target="_blank"
            class="nav-link px-2 text-muted"
            ><i class="bi bi-linkedin"></i
          ></a>
        </li>
        <!-- Twitter -->
        <li class="nav-item">
          <a
            href="https://twitter.com/sou7hernsaint"
            target="_blank"
            class="nav-link px-2 text-muted"
            ><i class="bi bi-twitter"></i
          ></a>
        </li>
      </ul>

      <!-- Right-Hand Links -->
      <ul
        class="nav col-sm-12 col-md-4 justify-content-md-end order-sm-first order-md-last"
      >
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link px-2 text-muted">
            Home</router-link
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">Features</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">FAQs</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">About</a>
        </li>
      </ul>
    </footer>
  </div>
  <!-- <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span class="text-muted">Place sticky footer content here.</span>
    </div>
  </footer> -->
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
/* @media screen and (max-width: 768px) {
  .container {
    flex-direction: column !important;
    justify-content: center !important;
  }
} */
</style>
