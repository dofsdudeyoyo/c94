var firebaseConfig = {
    apiKey: "AIzaSyCOiFoFnABWccNOEEz5HA7z-GK21od3i5A",
    authDomain: "class-test-b6b6a.firebaseapp.com",
    databaseURL: "https://class-test-b6b6a-default-rtdb.firebaseio.com",
    projectId: "class-test-b6b6a",
    storageBucket: "class-test-b6b6a.appspot.com",
    messagingSenderId: "185828936340",
    appId: "1:185828936340:web:2484fc3455732b7f748281"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :"adding user"
    });
}