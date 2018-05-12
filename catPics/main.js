firebaseInit();
	
function onSubmit() {
  let title = document.getElementById("pictureTitle").value;
  let link = document.getElementById("pictureLink").value;
  
  addToFirebase(title, link);
}

function addToFirebase(title, link) {
  firebase.database().ref('catPics/').push({
    PictureTitle: title,
    PictureLink: link
  });
  window.location.href = "../index.html";

}

function firebaseInit() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcXmE1XLx-UMwGljEPzh8CAW9BuzY2IJA",
    authDomain: "example-c60ad.firebaseapp.com",
    databaseURL: "https://example-c60ad.firebaseio.com",
    projectId: "example-c60ad",
    storageBucket: "example-c60ad.appspot.com",
    messagingSenderId: "997909509554"
  };
  firebase.initializeApp(config);
  console.log("Firebase is connected");
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href = "../profile/login.html";
    } 
  });
}