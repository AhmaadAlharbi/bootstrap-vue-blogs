<template>
  <div v-if="error">{{ error }}</div>
  <div class="">
    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

    <form class="mx-1 mx-md-4" @submit.prevent="handleSubmit">
      <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
          <input
            type="text"
            id="form3Example1c"
            class="form-control"
            v-model="displayName"
          />
          <label class="form-label" for="form3Example1c">Your Name</label>
        </div>
      </div>

      <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
          <input
            type="email"
            id="form3Example3c"
            class="form-control"
            v-model="email"
          />
          <label class="form-label" for="form3Example3c">Your Email</label>
        </div>
      </div>

      <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
          <input
            type="password"
            id="form3Example4c"
            class="form-control"
            v-model="password"
          />
          <label class="form-label" for="form3Example4c">Password</label>
        </div>
      </div>

      <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
          <input type="password" id="form3Example4cd" class="form-control" />
          <label class="form-label" for="form3Example4cd"
            >Repeat your password</label
          >
        </div>
      </div>

      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button type="submit" class="btn btn-primary btn-lg">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";
export default {
  emits: ["signup"], // declare the emitted event here

  setup(props, context) {
    const { error, signup } = useSignup();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signup");
      }
    };
    return { error, displayName, email, password, handleSubmit };
  },
};
</script>

<style>
</style>