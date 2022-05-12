<template>
  <div class="navbar container">
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <a href="#mailchimp" type="button" class="btn btn-success shadow-none"
      >Join Waitlist</a
    >
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 50px;
  color: white;
  background-color: black;
}
.logo {
  width: 200px;
  height: 50px;
}

@media screen and (max-width: 991px) {
  img {
    width: 200px;
    height: 50px;
  }
}
</style>
