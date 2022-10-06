
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyDOOxE7dHeUg19PwjiZP73oIoE7SEd3JwQ",
  authDomain: "chatear1-89e9e.firebaseapp.com",
  databaseURL: "https://chatear1-89e9e-default-rtdb.firebaseio.com",
  projectId: "chatear1-89e9e",
  storageBucket: "chatear1-89e9e.appspot.com",
  messagingSenderId: "646314372390",
  appId: "1:646314372390:web:27a8e8beccb15eb36365e7"
};

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML="¡Hola "+username+"!";

function addroom() {
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({ purpose : "adding room name" });
      localStorage.setItem("roomname", roomname);
      window.location = "chatting_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala- "+Room_names);
       row="<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location="chatting_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html"
}
