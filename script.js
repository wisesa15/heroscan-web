// Select your input type file and store it in a variable
const input = document.getElementById('picture');
const formData = new FormData();
var reader = new FileReader();
// const gambarKucing = document.getElementById('kucing');

// This will upload the file after having read it
const upload = (file) => {
    fetch('https://heroscan-juqv62gjpa-et.a.run.app/api/predict/', { // Your POST endpoint
        method: 'POST',
        body: formData // This is your file object
    }).then(
        response => response.json() // if the response is a JSON object
    ).then(
        success => {
            console.log(success); // Handle the success response object
            const hasil = document.getElementById('hasil');
            hasil.style.visibility = 'visible';
            previewFile();
            const nama = document.getElementById('nama-pahlawan');
            nama.innerHTML = success;
            hideloader();
        }
    ).catch(
        error => {
            console.log(error);
            hideloader();
        } // Handle the error response object
    );
};

// const upload = (file) => {
//     fetch('https://aws.random.cat/meow').then(
//         response => response.json() // if the response is a JSON object
//     ).then(
//         success => {
//             console.log(success);
//             gambarKucing.src = success.file;
//             hideloader();
//         } // Handle the success response object
//     ).catch(
//         error => console.log(error) // Handle the error response object
//     );
// };

// const upload = (file) => {
//     fetch('https://fantasy.premierleague.com/api/bootstrap-static/').then(
//         response => response.json() // if the response is a JSON object
//     ).then(
//         success => console.log(success) // Handle the success response object
//     ).catch(
//         error => console.log(error) // Handle the error response object
//     );
// };

// const upload = (file) => {
//     $.ajax({
//         url: 'https://heroscan-juqv62gjpa-et.a.run.app/api/predict/',
//         type: 'POST',
//         data: formData,
//         processData: false,  // tell jQuery not to process the data
//         contentType: false,  // tell jQuery not to set contentType
//         success: function (data) {
//             console.log(data);
//             alert(data);
//         }
//     });
// };
function previewFile() {
    var preview = document.getElementById('foto-pahlawan');
    var file = document.getElementById('picture').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

function hideloader() {
    document.getElementById('loading').style.visibility = 'hidden';
}
function showloader() {
    document.getElementById('loading').style.visibility = 'visible';
}

// Event handler executed when a file is selected
const onSelectFile = () => {
    const input = document.getElementById('picture');
    formData.append('file', input.files[0]);
    showloader();
    upload(input.files[0]);
};

// Add a listener on your input
// It will be triggered when a file will be selected
const uploadButton = document.getElementById('upload');
uploadButton.addEventListener('click', onSelectFile, false);
console.log('tes');