import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Create a reference to the file we want to download
const storage = getStorage();


// Get the download URL


  const fileUpload2 = (file) => {
    const starsRef = ref(storage, 'fotosUsuarios/' + file.name)
    let urlLocal = getDownloadURL(starsRef)
    .then((url) => {
      // ESTE LLEGA A LA FUNCION
      return url
      // Insert url into an <img> tag to "download"
    })
    return urlLocal
   }
   export default fileUpload2;