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

function adduser() {
  username=document.getElementById("username").value;
  localStorage.setItem("username",username);
  window.location="chatting_room.html";
}
