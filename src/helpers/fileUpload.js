import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

// 'file' comes from the Blob or File API
const fileUpload = async (file) => {
 let urlTotal =  await uploadBytes(ref(storage, "fotosUsuarios/" + file.name), file)
 .then(
    (snapshot) => {
      console.log("Archivo subido correctamente");
      // Get url from snapshot ref
      let urlLocal = getDownloadURL(snapshot.ref)
      .then((url) => {
        console.log("File available at", url);
        return url;
      })
      .catch((error) => {
        console.log(error);
      }); 
      return urlLocal;   
    }
  )
  .catch((error) => {
      console.log(error);
  });

  return urlTotal;
};

export default fileUpload;
