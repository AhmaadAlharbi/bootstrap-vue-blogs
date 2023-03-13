<template>
  <div v-if="error">{{ error }}</div>
  <div>
    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

    <form class="mx-1 mx-md-4" @submit.prevent="handleSubmit">
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

      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button type="submit" class="btn btn-primary btn-lg">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  emits: ["login"], // declare the emitted event here

  setup(props, context) {
    const email = ref(null);
    const password = ref(null);
    const { error, login } = useLogin();
    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };
    return { email, password, error, handleSubmit };
  },
};
</script>

<style scoped>
</style>