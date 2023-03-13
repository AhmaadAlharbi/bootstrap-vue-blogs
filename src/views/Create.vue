<template>
  <Navbar />
  <div class="container mt-5">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="exampleFormControlInput1" class="mb-3">Title</label>
        <input type="text" class="form-control" v-model="title" required />
      </div>
      <div class="form-group mt-5">
        <label for="exampleFormControlInput1" class="mb-3">Content</label>
        <textarea
          v-model="body"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          required
        ></textarea>
      </div>
      <div class="form-group mt-5">
        <label for="exampleFormControlInput1" class="mb-3">Category</label>
        <input
          @keydown.enter.prevent="handleKeydown"
          type="text"
          class="form-control"
          v-model="tag"
        />
        <span
          v-for="tag in tags"
          :key="tag"
          class="badge text-bg-secondary mt-2 px-2"
          >#{{ tag }}</span
        >
      </div>
      <button type="submit" class="btn btn-danger mt-5">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { projectFirestore, timestamp } from "../firebase/config";
const router = useRouter();
const title = ref(null);
const body = ref(null);
const tag = ref(null);
const tags = ref([]);

const handleKeydown = () => {
  if (!tags.value.includes(tag.value) && tag.value !== "") {
    tag.value = tag.value.replace(/\s/g, ""); // remove all whitespace
    tags.value.push(tag.value);
  }
  tag.value = "";
};

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: timestamp(),
  };
  const res = await projectFirestore.collection("posts").add(post);

  router.push({ name: "Home" });
};
</script>

<style lang="scss" scoped>
</style>