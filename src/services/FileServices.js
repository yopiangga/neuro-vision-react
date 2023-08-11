import React, { useState } from "react";

import app from "../config/Firebase";
import {
  ref,
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

const storage = getStorage(app);

class FileServices {
  async uploadArticleThumbnail(file, name) {
    const storageRef = ref(storage, `article/${name}`);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    const res = await getDownloadURL(storageRef);
    return res;
  }

  async uploadArticleImage(file, name) {
    const storageRef = ref(storage, `article-image/${name}`);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    const res = await getDownloadURL(storageRef);
    return res;
  }

  async uploadPhotoProfile(file, email) {
    const storageRef = ref(storage, `users/${email}`);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    const res = await getDownloadURL(storageRef);
    return res;
  }
}

export default FileServices;
