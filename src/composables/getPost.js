import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
import getPosts from "./getPosts";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
      let res = await projectFirestore.collection("posts").doc(id).get();
      if (!res.exists) {
        throw Error("the post is not exists");
      }
      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
export default getPost;
