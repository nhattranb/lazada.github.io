document.getElementById('button-upload').addEventListener('click', function() {
  var fileInput = document.getElementById('upload-image');
  var profileImage = document.getElementById('image');

  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    profileImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

function onClickUpload() {
  let uploadImage = document.getElementById("upload-image");
  uploadImage.click();
}
document.getElementById('log-out').addEventListener('click', function() {

  alert('Logged out successfully');
});