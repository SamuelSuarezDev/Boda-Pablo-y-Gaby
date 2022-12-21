import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";

import { db } from "../config/firebase";

export const createItem = async ({ message, name, photo, visible }: any) => {
  const colRef = collection(db, "message");
  const data = await addDoc(colRef, { message, name, photo, visible });
  return data.id;
};

export const updateItem = async ({ id, obj }: any) => {
  const colRef = collection(db, "message");
  await updateDoc(doc(colRef, id), obj);
};

export const getItemsByCondition = async () => {
  /*  db.collection("message")
    .get()
    .then((docs) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return {
          ...data,
          id,
        };
      });
    }); */
};

// DELETE
export const deleteItem = async (id: any) => {
  const colRef = collection(db, "message");
  await deleteDoc(doc(colRef, id));
};

export const getArrayFromCollection = (collection: any) => {
  return collection.docs.map((doc: any) => {
    return { ...doc.data(), id: doc.id };
  });
};
