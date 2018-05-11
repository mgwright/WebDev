firebaseInit();

function onSubmit(){
  let title = document.getElementById("pictureTitle").value;
  let link = document.getElementById("pictureLink").value;
  addToFirebase(title, link);
}

function addToFirebase(title, link){
  firebase.database().ref('catPics/').push({
    PictureTitle: title,
    PictureLink: link
  });
}

function getFromFirebase(){
  let list = firebase.database().ref('catPics/');
  list.on('child_added', function(snapshot) {
    addPic(snapshot.val().PictureLink);
  });
}

function addPic(link){
  let img = document.createElement("img");
  img.src = link;
  img.width = 300;
  
  document.getElementById("pics").appendChild(img);
}

function firebaseInit(){
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
  console.log("Firebase in connected");
  getFromFirebase();
}