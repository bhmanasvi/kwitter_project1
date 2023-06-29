
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAJuu6R8w0LNhOtu8xsHM0VRoHTTcq0wsA",
      authDomain: "kwitter-7fbff.firebaseapp.com",
      databaseURL: "https://kwitter-7fbff-default-rtdb.firebaseio.com",
      projectId: "kwitter-7fbff",
      storageBucket: "kwitter-7fbff.appspot.com",
      messagingSenderId: "895755370734",
      appId: "1:895755370734:web:c335355372b76a0a6773ff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("username");
    document.getElementById("name").innerHTML = " Welcome " + user_name + "!";

    function addroom()
    {
      room = document.getElementById("room").value;
      firebase.database().ref("/").child(room).update({
            purpose: "adding_room"
      });
      localStorage.setItem("room_name", room);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name" + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick = 'redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}