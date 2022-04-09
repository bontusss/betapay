<template>
  <!-- todo: use https://github.com/prabhuignoto/vue-float-menu -->
  <div class="container-fluid vaccon fixed-top">
    <nav
      class="container navbar navbar-expand-lg navbar-light bg-light fixed-top"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><RouterLink to="/" id="link"> Ompaya </RouterLink></a
        >

        <div class="d-flex">
          <div class="d-flex">
            <div class="dropdown me-2">
              <button
                class="btn btn-light dropdown-toggle d-none d-lg-block"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
            <button class="btn btn-primary waitlist shadow-none" type="submit">
              <a href="#waitlist">Join Waitlist</a>
            </button>
            <RouterLink to="/register" class="register">
              <button
                class="btn btn-dark d-none d-lg-block shadow-none"
                type="submit"
              >
                Sign In
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
      <MobileNavVue />
    </nav>
  </div>
</template>

<script setup>
import MobileNavVue from "./MobileNav.vue";
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
a {
  color: white;
}
.vaccon {
  background-color: #f8f9fa;
  height: 70px;
}
.navbar {
  // border-bottom: 0.5px solid grey;
  .navbar-brand {
    font-weight: bold;
    font-size: 30px;
    color: $base-color;
    #link {
      text-decoration: none;
      color: black;
    }
  }
  .register {
    text-decoration: none;
  }
  .waitlist {
    margin-right: 20px;
  }
}

@media (max-width: 991px) {
  .navbar {
    border-bottom: 0;
  }
  .waitlist {
    margin-right: 45px !important;
  }
}
</style>
