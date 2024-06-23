// Function to display the stored profile picture if it exists
function displayStoredProfilePicture() {
    const storedProfilePicture = localStorage.getItem('profilePicture');
    if (storedProfilePicture) {
        document.getElementById('profile-img').src = storedProfilePicture;
    }
}

// Function to handle the profile picture upload
document.getElementById('upload-btn').addEventListener('click', function() {
    const input = document.getElementById('profile-picture-input');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const profileImg = document.getElementById('profile-img');
            profileImg.src = e.target.result;
            localStorage.setItem('profilePicture', e.target.result); // Store the profile picture in localStorage
        }

        reader.readAsDataURL(file);
    } else {
        alert('Please select a file to upload.');
    }
});

// Display the stored profile picture on page load
displayStoredProfilePicture();
