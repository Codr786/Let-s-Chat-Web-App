function addUser() 
{
    
    localStorage.setItem("user_name",user_name);
    window.location = "chat_room.html";
}
function logout() 
{
    window.location = "index.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyAkNGMioEyt6_n8CXCjenovdHEuC6GNNCk",
    authDomain: "let-s-chat-web-app-5cadf.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-5cadf-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-5cadf",
    storageBucket: "let-s-chat-web-app-5cadf.appspot.com",
    messagingSenderId: "600391250165",
    appId: "1:600391250165:web:b4d3e07f0b8a209d4415bc",
    measurementId: "G-06SYQR7S4C"
  };
  
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

 //End code
 });});}
getData();
