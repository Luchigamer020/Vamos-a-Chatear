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

function adduser() {
  username=document.getElementById("username").value;
  localStorage.setItem("username",username);
  window.location="chatting_room.html";
}