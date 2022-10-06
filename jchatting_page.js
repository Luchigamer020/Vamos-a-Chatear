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
roomname=localStorage.getItem("roomname");

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name:username,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function updatelike(message_id) {
    console.log("Like presionado- "+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updatelikes=Number(likes)+1;
    console.log(updatelikes);
    firebase.database().ref(roomname).child(message_id).update({
        like:updatelikes
    });
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id=childKey;
    message_data=childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name=message_data['name'];
    message=message_data['message'];
    like=message_data['like'];
    name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
    like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
    span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
    row=name_with_tag+message_with_tag+like_button+span_with_tag;
    document.getElementById("output").innerHTML += row;
   }});});}
getData();

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html"
}
