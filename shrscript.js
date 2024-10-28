function shareFunction() {
  // Define the specific URL you want to copy
  var urlToCopy = "https://www.example.com";

  // Copy the URL to the clipboard
  navigator.clipboard.writeText(urlToCopy).then(() => {
      // Alert the copied URL
      alert("Copied the URL: " + urlToCopy);
  }).catch(err => {
      console.error('Failed to copy: ', err);
  });
}