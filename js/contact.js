 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAzsvtn4oATbViMX5MfmP7_ubOx0T_IkTQ",
    authDomain: "coders-elite.firebaseapp.com",
    databaseURL: "https://coders-elite-default-rtdb.firebaseio.com",
    projectId: "coders-elite",
    storageBucket: "coders-elite.appspot.com",
    messagingSenderId: "770891173779",
    appId: "1:770891173779:web:22fa0c6126ce7d88212266",
    measurementId: "G-CWMCZ9QY0F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

      // Refrerence message collections
var messagesRef = firebase.database().ref('message');

//Listen from submit :
document.getElementById('contactForm').addEventListener('submit',
submitform);

// submit Form
function submitform(e){
  e.preventDefault();


    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

        // save your message
        saveMessage(name, email, message);

            //show alert
    document.querySelector('.alert').style.display = 'block';

    //set timeout for alert for 4000sec
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },4000)

        // Reset contact form
        document.getElementById('contactForm').reset();

  }


    // function for getInputVal
function getInputVal(id){

  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message){
  var newmessageRef = messagesRef.push();
  newmessageRef.set({
      name: name,
      email: email,
      message: message
  });
}

