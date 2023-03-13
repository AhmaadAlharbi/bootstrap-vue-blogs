<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div
                  v-if="showLogin"
                  class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                >
                  <Login @login="enterBlog" />
                  <p class="register" @click="showLogin = false">
                    Please <span class="">Register</span> if you do not have an
                    account
                  </p>
                </div>
                <div
                  v-else
                  class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                >
                  <Signup @signup="enterBlog" />
                  <p class="register" @click="showLogin = true">
                    Already registered? please <span class="">Login</span> NOW!
                  </p>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { Signup, Login },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterBlog = () => {
      router.push({ name: "Home" });
    };
    return { showLogin, enterBlog };
  },
};
</script>

<style scoped>
p.register {
  font-size: 14px;
  margin-left: 20px;
}
p span {
  color: rgb(185, 40, 201);
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
}
</style>