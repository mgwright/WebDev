init();

function addPicButton() {
  let name = document.getElementById("name").value;
  let link = document.getElementById("link").value;
  addToFirebase(name, link);
  document.getElementById("name").value = "";
  document.getElementById("link").value = "";
}

function addToFirebase(title, link) {
  firebase.database().ref('catPics/').push({
    title: title,
    link: link
  });
}

function addPic(link) {
  let img = document.createElement("img");
  img.src = link;
  img.width = "300";
  document.getElementById("catPics").appendChild(img);
}

function getFromFirebase() {
  let list = firebase.database().ref('catPics/')
  list.on('child_added', function(snapshot) {
    addPic(snapshot.val().link);
  });
}

function init() {
  var config = {
    apiKey: "AIzaSyCcXmE1XLx-UMwGljEPzh8CAW9BuzY2IJA",
    authDomain: "example-c60ad.firebaseapp.com",
    databaseURL: "https://example-c60ad.firebaseio.com",
    projectId: "example-c60ad",
    storageBucket: "example-c60ad.appspot.com",
    messagingSenderId: "997909509554"
  };
  firebase.initializeApp(config);
  getFromFirebase()
}