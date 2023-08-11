import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../config/Firebase";
const auth = getAuth(app);

export class AuthServices {
  async login({ email, password }) {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          return "Email tidak ditemukan";
          break;
        case "auth/wrong-password":
          return "Password salah";
          break;
        default:
          return "Terjadi kesalahan, silahkan coba lagi";
          break;
      }
    }
  }

  async register(email, password) {
    console.log(email, password);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (err) {
      alert(err.message);
      return false;
    }
  }

  async checkLogin() {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        // console.log("check login");
        return user;
      } else {
        // console.log("else");
        return false;
      }
    });
  }

  async changePassword(oldPassword, newPassword) {
    try {
      const user = auth.currentUser;
      const credential = await signInWithEmailAndPassword(
        auth,
        user.email,
        oldPassword
      );

      const res = await updatePassword(user, newPassword);
      return true;
    } catch (err) {
      return err;
    }
  }

  async forgotPassword({ email }) {
    try {
      const res = await sendPasswordResetEmail(auth, email);
    } catch (err) {
      return err;
    }
  }

  async logout() {
    const res = await signOut(auth);
    return res;
  }
}
