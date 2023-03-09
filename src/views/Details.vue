<template>
  <Navbar />
  <div class="container">
    <div class="row mt-5">
      <div class="col-lg-8">
        <div v-if="error">{{ error }}</div>
        <div v-if="post">
          <div>
            <article>
              <!-- Post header-->
              <header class="mb-4">
                <!-- Post title-->
                <h1 class="fw-bolder mb-1">{{ post.title }}</h1>
                <!-- Post meta content-->
                <div class="text-muted fst-italic mb-2">
                  Posted on January 1, 2022 by Start Bootstrap
                </div>
                <!-- Post categories-->
                <div>
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="badge bg-secondary text-decoration-none link-light"
                    >{{ tag }}</span
                  >
                </div>
              </header>
              <!-- Preview image figure-->
              <figure class="mb-4">
                <img
                  class="img-fluid rounded"
                  src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
                  alt="..."
                />
              </figure>
              <!-- Post content-->
              <section class="mb-5">
                <p class="fs-5 mb-4">
                  {{ post.body }}
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <Search />
        <!-- <Categories :posts="posts" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Categories from "../components/Categories.vue";
import getPost from "../composables/getPost.js";
import getPosts from "../composables/getPosts.js";
import { useRoute } from "vue-router";
export default {
  components: { Navbar, Search, Categories },
  setup() {
    const route = useRoute();
    const { post, error, load } = getPost(route.params.id);
    const { posts } = getPosts();
    load();
    return { posts, post, error };
  },
};
</script>

<style>
</style>