<template>
  <Navbar />
  <Header />

  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts">
          <Blogs :posts="postsTag" />
        </div>
        <div v-else>Loading....</div>
      </div>
      <div class="col-lg-4">
        <Search />
        <div v-if="posts">
          <Categories :posts="posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
import Blogs from "../components/Blogs.vue";
import Search from "../components/Search.vue";
import Categories from "../components/Categories.vue";
export default {
  components: { Navbar, Header, Blogs, Search, Categories },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    const postsTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });
    load();
    return { posts, error, postsTag };
  },
};
</script>

<style>
</style>