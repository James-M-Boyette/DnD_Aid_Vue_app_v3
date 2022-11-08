<template>
  <div class="container mt-5">
    <!-- 
      * (I think ...) the 'nav' class of Bootstrap is dictating the staggered look of the elements @ medium (md) screen size
     -->
    <footer
      id="main-footer"
      class="row row-cols-sm-1 row-cols-md-3 py-3 mt-auto mb-3 border-top"
    >
      <!-- Copyright -->
      <p
        class="col-md-12 col-lg-4 order-last order-md-first align-middle mt-2 mt-md-0 text-muted"
      >
        © 2022 James Boyette
      </p>

      <!-- Center Icons -->
      <ul
        class="nav col-md-12 col-lg-4 justify-content-md-center align-middle link-dark text-decoration-none order-2"
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
        class="nav col-md-12 col-lg-4 justify-content-md-end align-middle order-first order-md-last"
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
