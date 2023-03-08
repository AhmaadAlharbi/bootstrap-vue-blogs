import { ref } from "vue";
import getPosts from "./getPosts";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
      const data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("no post to show");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
export default getPost;
