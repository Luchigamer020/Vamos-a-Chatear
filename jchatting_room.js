
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyDMzmoinQujYBotFaT0tA7fPUPRju5c-Yc",
  authDomain: "vamos-a-chatear.firebaseapp.com",
  databaseURL: "https://vamos-a-chatear-default-rtdb.firebaseio.com",
  projectId: "vamos-a-chatear",
  storageBucket: "vamos-a-chatear.appspot.com",
  messagingSenderId: "1064086224667",
  appId: "1:1064086224667:web:e282cfc5f1c87636819dbe"
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
