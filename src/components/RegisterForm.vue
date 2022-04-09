<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const phone = ref("");
const email = ref("");
const password = ref("");
const username = ref("");
const errors = ref([]);
const loading = ref(false);

const router = useRouter();

function register() {
  const formData = {
    username: username.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  };
  axios
    .post("register", formData)
    .then((response) => {
      console.log(response);
      // router.push('/login')
    })
    .catch((err) => {
      console.log(err.message);
      errors.value.push(err.message);
    });
}

function validate() {
  loading.value = true;
  let phoneNumber = /^\d{11}$/;
  let emailFormat =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!phone.value.match(phoneNumber)) {
    errors.value.push("Your phone number is not formatted correctly.");
  } else if (!email.value.match(emailFormat)) {
    errors.value.push("Your email is not formatted correctly.");
  } else if (phone.value == "") {
    errors.value.push("Please provide a phone number.");
  } else if (email.value == "") {
    errors.value.push("Please provide an email.");
  } else {
    register();
  }
}
</script>
<template>
  <div class="text-center my-5">
    <h2>Register</h2>
  </div>
  <form @submit.prevent="register">
    <div class="form-group">
      <label for="username">Username</label>
      <input
        type="text"
        class="form-control shadow-none"
        id="username"
        placeholder="Enter your username"
        v-model="username"
      />
    </div>
    <div class="form-group pt-3">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control shadow-none"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter your email"
        v-model="email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group pt-3">
      <label for="phone">Phone Number</label>
      <input
        type="text"
        class="form-control shadow-none"
        id="phone"
        placeholder="Enter your Phone number"
        v-model="phone"
      />
    </div>
    <div class="form-group pt-3">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control shadow-none"
        id="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </div>
    <div v-for="error in errors" :key="error">
      <p class="text-danger">{{ error }}</p>
    </div>
    <button class="btn btn-primary shadow-none mt-3">
      {{ loading ? "Loading..." : "Register" }}
    </button>
  </form>
</template>
<style lang="scss" scoped>
form {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
