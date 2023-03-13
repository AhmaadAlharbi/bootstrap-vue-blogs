import { ref } from "vue";
import { projectAuth } from "../firebase/config";
const error = ref(null);
const login = async (email, password) => {
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

const useLogin = () => {
  return { error, login };
};
export default useLogin;
