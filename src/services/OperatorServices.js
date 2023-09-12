import { getFirestore,collection, query, where, getDocs, getDoc,doc, updateDoc } from "firebase/firestore";
import axios from "axios";

import app from "src/config/Firebase";

const db = getFirestore(app)

export class OperatorServices {
    async getAllPatients() {
        const q = query(collection(db, "user"), where("role", "==", "patient"));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            data.push(doc.data())
        });

        return data;
    }

    async getAllDoctors() {
        const q = query(collection(db, "user"), where("role", "==", "doctor"));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            data.push(doc.data())
        });

        return data;
    }

    async getAllPromises() {
        const q = query(collection(db, "promise"));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            data.push(doc.data())
        });

        return data;
    }

    async acceptPromise(id) {
        const docRef = doc(db, 'promise', id);
        try {
            await updateDoc(docRef, {
                status: 'accepted'
            });
        } catch(e) {
            throw e;
        }
        
    }

    async rejectPromise(id) {
        const docRef = doc(db, 'promise', id);
        try {
            await updateDoc(docRef, {
                status: 'rejected'
            });
        } catch(e) {
            throw e;
        }
    }

    async getPromiseById(id) {
        const docRef = doc(db, 'promise', id);
        try {
            const data = await getDoc(docRef);
            return data.data();
        } catch(e) {
            throw e;
        }
    }

    async getUserByEmail(email) {
        const q = query(collection(db, "user"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            data.push(doc.data())
        });

        return data[0];
    }

    async uploadAppointment(id, doctor, note, time) {
        const docRef = doc(db, 'promise', id);
        try {
            await updateDoc(docRef, {
                doctor: doctor,
                note_admin: note,
                time: time,
                //image_scan: `https://api.neutron-imager.tech/ct-scan/download?file-path=/home/farhanroy120/project/${path}`,
                status: 'ongoing'
            });
        } catch(e) {
            throw e;
        }
    }

    async uploadCtScan(id, nik, time, ai) {
        console.log(ai);
        const docRef = doc(db, 'promise', id);
        try {
            await updateDoc(docRef, {
                diagnose: {
                    ai: ai,
                    doctor: ""
                },
                image_scan: `https://api.neutron-imager.tech/ct-scan/download?nik=${nik}&&time=${time}`,
                status: 'uploaded'
            });
        } catch(e) {
            throw e;
        }
    }

    async getTotalPromise(nik) {
        const q = query(collection(db, "promise"));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            if (doc.data().patient.nik == nik) {
                data.push(doc.data());
            }
        });
        console.log(data.length);
        return data.length;
    }

    async getCtScan(id) {
        try {
            const res = await axios.get(`https://api.neutron-imager.tech/ct-scan?nik=${id}`);
            return res.data;
        } catch(e) {
            throw e
        }
    }
}