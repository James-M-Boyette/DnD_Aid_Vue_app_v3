<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg sticky-sm-top navbar-light pt-5 pb-4">
    <div class="container-xxl">
      <!-- Hamburger toggle button for mobile nav -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse align-center" id="main-nav">
        <ul class="navbar-nav me-auto">
          <!-- Drop-Down Menu: DEMOs -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bi bi-tools me-1"></i>
              Dev Links:
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link to="/" class="dropdown-item">Home</router-link>
              <a
                class="dropdown-item"
                href="/views/characters/CharactersIndex.html"
                >See all Characters</a
              >
              <a
                class="dropdown-item"
                href="/views/characters/CharactersShow.html"
                >View One Character</a
              >
              <a
                class="dropdown-item"
                href="/views/characters/CharactersCreate.html"
                >Create a Character</a
              >
            </div>
          </li>
          <li></li>
        </ul>

        <!-- Navbar brand / title; "linked" to Home, currently -->
        <!-- 
          I think this is a great opportunity to add a simple banner - just 'DnD Aid' in fancy font
          - Make sure it's centered over the 'Login' / other modules

         -->
        <a class="navbar-brand mx-auto" href="/index.html">
          <span class="text-secondary fw-bold"> DnD Aid </span>
        </a>

        <ul class="navbar-nav ms-auto">
          <!-- Synthesis Links -->

          <!-- Drop-Down Menu: Synthesis -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle me-1"></i>
              Users:
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <!-- <a
                class="dropdown-item"
                href="/views/synthesis/book-store.html#pricing"
              >
                Sign Up</a
              > -->
              <router-link :to="{ name: 'user-sign-up' }" class="dropdown-item"
                ><i class="bi bi-pencil-square me-1"></i> Sign Up</router-link
              >
              <router-link :to="{ name: 'user-login' }" class="dropdown-item"
                ><i class="bi-door-open-fill me-1"></i> Log In</router-link
              >
              <!-- 
                TODO:
                - This needs to run a composable for logging a person out (before returning them to the landing page)
               -->
              <router-link :to="{ name: 'home' }" class="dropdown-item"
                ><i class="bi bi-escape me-1"></i> Log Out</router-link
              >
              <!-- 
                TODO:
                - Update with profile link

               -->
              <router-link :to="{ name: 'user-profile' }" class="dropdown-item"
                ><i class="bi bi-person-lines-fill me-1"></i> View
                Profile</router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
