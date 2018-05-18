firebaseInit();

function createAccount(){
  let email = document.getElementById("emailCA").value;
  let password = document.getElementById("passwordCA").value;
 
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if(errorCode){
      let message = document.createElement("div");
      message.innerHTML = errorMessage;
      document.getElementById("CA").appendChild(message);
    }
  });
}

function login(){
  let email = document.getElementById("emailL").value;
  let password = document.getElementById("passwordL").value;
  
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if(errorCode){
      let message = document.createElement("div");
      message.innerHTML = errorMessage;
      document.getElementById("L").appendChild(message);
    }
  });
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
  console.log("Firebase is connected");
  
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
    var email = user.email;
    console.log("user is signed in!");
    console.log(email);
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
}