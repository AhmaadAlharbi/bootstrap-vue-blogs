<template>
  <div class="card mb-4">
    <div class="card-header">Categories</div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-6">
          <ul class="list-unstyled mb-0" v-for="tag in tags" :key="tag">
            <router-link :to="{ name: 'Tag', params: { tag: tag } }">
              <li class="text-dark">
                {{ tag }}
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags.js";
export default {
  props: ["posts"],
  setup(props) {
    const { tags } = useTags(props.posts);
    return { tags };
  },
};
</script>

<style>
</style>