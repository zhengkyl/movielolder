export function getGalleryIdandKey() {
  const searchString = window.location.search;
  const urlParams = new URLSearchParams(searchString);
  
  const galleryId = urlParams.get("gallery");
  const keys = urlParams.get("key").split(',');
  return {galleryId, userKey:keys[0], adminKey:keys[1]}
  //https://blog.excalidraw.com/end-to-end-encryption/
  // const key = await window.crypto.subtle.generateKey(
    //   { name: "AES-GCM", length: 128 },
  //   true, // extractable
  //   ["encrypt", "decrypt"]
  // );
}