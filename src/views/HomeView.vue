<template>
  <Navbar />
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
          <Blogs :posts="posts" />
        </div>
        <div v-else>Loading....</div>
      </div>
      <div class="col-lg-4">
        <Search />
        <Categories />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import Blogs from "../components/Blogs.vue";
import Search from "../components/Search.vue";
import Categories from "../components/Categories.vue";
import getPosts from "../composables/getPosts.js";
export default {
  components: { Navbar, Header, Blogs, Search, Categories },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style>
</style>