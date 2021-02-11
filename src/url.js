// https://blog.excalidraw.com/end-to-end-encryption/


export async function getGalleryAndPermission () {
  const searchString = window.location.search;
  const urlParams = new URLSearchParams(searchString)
  
  const galleryId = urlParams.get("gallery")
  const permissionPass = urlParams.get("pp")

  //https://blog.excalidraw.com/end-to-end-encryption/
  const key = await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 128 },
    true, // extractable
    ["encrypt", "decrypt"]
  );
}

