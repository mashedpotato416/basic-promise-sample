
// Use fetch to get the image file as a Promise object
let promise = fetch('https://mashedpotato416.github.io/image-gallery/images/coffee.jpg');

// The then() which is executed right after fetch() is finish
let promise2 = promise.then(response => {

  // Important Note: Fetch promises do not fail on 404 or 500 errors — only 
  // on something catastrophic like a network failure. Instead, they succeed, 
  // but with the response.ok property set to false. To produce an error on a 
  // 404, for example, we need to check the value of response.ok, and 
  // if false, throw an error, only returning the blob if it is true.

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.blob();
  }
});

// The next then()
let promise3 = promise2.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
