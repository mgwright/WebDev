firebaseInit();

function onSubmit(){
  let title = document.getElementById("pictureTitle").value;
  let link = document.getElementById("pictureLink").value;
  
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
}