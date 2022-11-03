<template>
  <!-- <footer id="main-footer" class="footer fixed-bottom mt-auto py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link px-2 text-muted">
          Home</router-link
        >
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Features</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Pricing</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">FAQs</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">About</a>
      </li>
    </ul>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
        <a
          class="text-muted"
          target="_blank"
          href="https://twitter.com/sou7hernsaint"
          ><i class="bi bi-twitter"></i>
        </a>
      </li>
      <li class="ms-3">
        <a class="text-muted" href="#"
          ><svg class="bi" width="24" height="24">
            <use xlink:href="#instagram"></use></svg
        ></a>
      </li>
      <li class="ms-3">
        <a class="text-muted" href="#"
          ><svg class="bi" width="24" height="24">
            <use xlink:href="#facebook"></use></svg
        ></a>
      </li>
    </ul>
    <p class="text-center text-muted">© 2022 Company, Inc</p>
  </footer> -->

  <footer id="main-footer" class="footer fixed-bottom mt-auto py-3">
    <div class="container">
      <div
        class="d-flex flex-wrap justify-content-around align-items-center py-3 mt-auto my-4 border-top"
      >
        <!-- Copyright -->
        <p class="col-sm-12 col-md-4 mb-0 text-muted order-sm-3 order-md-1">
          © 2022 James Boyette
        </p>

        <!-- Center Icons -->
        <ul
          class="nav col-sm-12 col-md-4 align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none order-sm-2 order-md-2"
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
            <router-link
              :to="{ name: 'home' }"
              class="nav-link px-2 text-muted"
            >
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
          class="nav col-sm-12 col-md-4 justify-content-end order-sm-1 order-md-3"
        >
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link px-2 text-muted"
            >
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
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style></style>
