firebaseInit();

function getPic(){
  let id = getId();
  
  let list = firebase.database().ref('catPics/' + id);
  list.once('value', function(snapshot) {
    addPicToPage(snapshot.val().PictureLink);
    addTitleToPage(snapshot.val().PictureTitle);
  });
}

function getComments(){
  let id = getId();
  let comments = firebase.database().ref('comments/' + id)
  comments.on('child_added', function(snapshot) {
    let c = document.createElement("li");
    c.innerHTML = snapshot.val().comment;
    document.getElementById("comments").appendChild(c);
  });
}

function getId(){
  let url_string =  window.location.href
  let url = new URL(url_string);
  let id = url.searchParams.get("id");
  return id;
}

function addPicToPage(link){
  let img = document.createElement("img");
  img.src = link;
  img.width = 600;
  
  document.getElementById("pic").appendChild(img);
}

function addTitleToPage(title){
  document.getElementById("title").innerHTML = title;
}

function onAddComment(){
  let id = getId();
  let comment = document.getElementById("comment").value;
  firebase.database().ref('comments/' + id).push({
    comment: comment 
  });
  document.getElementById("comment").value = "";
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
  getPic();
  getComments();
}