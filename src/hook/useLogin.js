import { useStateValue } from "store/StateProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { action_type } from "store/actions";

// Firebase Authentication
import { app } from "firebase.config";

const useLogin = () => {
  const [{ user }, dispatch] = useStateValue();

  // getting firebaseAuth datas
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);

    dispatch({
      type: action_type.SET_USER,
      user: providerData[0],
    });

    localStorage.setItem("user", JSON.stringify(providerData[0]));
  };

  return { login };
};

export default useLogin;
