import { getFirestore,collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";

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
}