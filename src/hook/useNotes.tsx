import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";

import { db } from '../config/firebase';

export const createItem = async({message, name, photo,visible}:any) => {
    const colRef = collection(db, 'message');
    const data = await addDoc(colRef, {message,name,photo,visible});
    return data.id;
}

export const updateItem = async ({id, obj}:any) => {
    const colRef = collection(db, 'message');
    await updateDoc(doc(colRef, id), obj)
}

export const getItemsByCondition = async (value?: any) => {
    const colRef = collection(db, 'message');
    const result = await getDocs(query(colRef, where('visible', '==', false)));
    return getArrayFromCollection(result);
}

// DELETE
export const deleteItem = async (id:any) => {
    const colRef = collection(db, 'message');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection:any) => {
    return collection.docs.map((doc:any) => {
        return { ...doc.data(), id: doc.id };
    });
}