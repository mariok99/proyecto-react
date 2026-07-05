import {
    collection, getDocs, doc, getDoc, addDoc, query, where
} from "firebase/firestore";
import { db } from "../.firebase/config";

const productsRef = collection(db, "products");

export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);
        //id no es parte del mismo objeto que tiene el resto de datos (doc.data), 
        //hay que agregarlo manualmente.
        const productsFormat = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return productsFormat;
    }
    catch (error) {
        return [];
        console.log(error);
    }
}

export const getProductById = async (id) => {
    try {
        const productRef = doc(db, "products", id);
        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
            const productFormat = { id: snapshot.id, ...snapshot.data() };
            return productFormat;
        } else {
            return null;
        }
    }
    catch (error) {
        console.log("Occur an error while retreving product", error);
        return null;
    }
}

// funciona para cualquier atributo del producto, por eso el nombre
export const getProductsBy = async (attribute) => {
    try {
        let q;
        if (attribute) {
            q = query(productsRef, where("category", "==", attribute));
        } else {
            q = productsRef;
        }
        const snapshot = await getDocs(q);

        if (snapshot.size > 0) {
            const productsFormat = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            return productsFormat;
        } else {
            return [];
        }
    } catch (error) {
        console.log("Occur an error while retreving product", error);
        return [];
    }
}

export const createProduct = async (product) => {
    try {
        if (!validateProducto(product)) {
            const docRef = await addDoc(productsRef, product);
            return docRef.id;
        }
        return null;
    } catch (error) {
        console.log("Occur an error while creating product", error);
        return null;
    }
}