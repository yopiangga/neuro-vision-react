import axios from "axios";
import baseUrl from "src/config/Url";

export class UserServices {
  async getUser(value) {
    const res = await axios.get(`${baseUrl}/user?email=${value}`);
    return res.data;
  }

  async getAll() {
    const res = await axios.get(`${baseUrl}/users`);
    return res.data;
  }

  async add(data) {
    const res = await axios.post(`${baseUrl}/user`, data);
    return res.data;
  }

  async delete(id) {
    const res = await axios.delete(`${baseUrl}/user`, { _id: id });
    return res.data;
  }

  async update({ _id, name, gender, address }) {
    const res = await axios.put(`${baseUrl}/user`, {
      _id: _id,
      data: { name: name, gender: gender, address: address },
    });
    return res.data;
  }

  async updateQuiz({ _id, quizTrue, quizFalse }) {
    const res = await axios.put(`${baseUrl}/user`, {
      _id: _id,
      data: {
        quiz: {
          true: quizTrue,
          false: quizFalse,
        },
      },
    });
    return res.data;
  }

  async updatePhotoProfile({ _id, photo }) {
    const res = await axios.put(`${baseUrl}/user`, {
      _id: _id,
      data: { photo: photo },
    });
    return res.data;
  }

  async updateScreening({ _id, screening }) {
    const res = await axios.put(`${baseUrl}/user/screening`, {
      _id: _id,
      data: screening,
    });
    return res.data;
  }
}
