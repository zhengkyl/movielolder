// https://blog.excalidraw.com/end-to-end-encryption/
export async function getGalleryAndPermission () {
  const searchString = window.location.search;
  const urlParams = new URLSearchParams(searchString)
  
  const galleryId = urlParams.get("gallery")
  const permissionPass = urlParams.get("pp")

  //request from server?
  //e2e permissionPass
}

