import { getFirestore,collection, query, where, getDocs, getDoc,doc, updateDoc } from "firebase/firestore";

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
                state: 'Completed'
            });
        } catch(e) {
            throw e;
        }
        
    }

    async rejectPromise(id) {
        const docRef = doc(db, 'promise', id);
        try {
            await updateDoc(docRef, {
                state: 'Rejected'
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

    async uploadCtScan(id, path, diagnose) {
        const docRef = doc(db, 'promise', id);
        try {
            await updateDoc(docRef, {
                diagnose: {
                    ai: diagnose
                },
                image_scan: `https://firebasestorage.googleapis.com/v0/b/naraya-hack.appspot.com/o/3.jpg?alt=media&token=${path}`,
                status: 'uploaded'
            });
        } catch(e) {
            throw e;
        }
    }
}