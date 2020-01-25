
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-BLvMy57lUy-bfAM2khW1vyIZ8EmVkS0",
    authDomain: "datagami-registration.firebaseapp.com",
    databaseURL: "https://datagami-registration.firebaseio.com",
    projectId: "datagami-registration",
    storageBucket: "datagami-registration.appspot.com",
    messagingSenderId: "193025313399",
    appId: "1:193025313399:web:7c8aec76a3f5bb17459472",
    measurementId: "G-13DCVTCTJX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let fname = document.querySelector('#fname').value;
  let lname = document.querySelector('#lname').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let dob= document.querySelector('#dob').value;
  let gender= document.querySelector('#gender').value;
  let city= document.querySelector('#city').value;
  let instname= document.querySelector('#instname').value;
  let fstudy= document.querySelector('#fstudy').value;
  let dlevel= document.querySelector('#dlevel').value;
  let other= document.querySelector('#other').value;
  let mygrad= document.querySelector('#mygrad').value;
  let totexp= document.querySelector('#totexp').value;
  let aexp= document.querySelector('#aexp').value;
  let company= document.querySelector('#company').value;
  let position= document.querySelector('#position').value;
  let from= document.querySelector('#from').value;
  let to= document.querySelector('#to').value;
  let work= document.querySelector('#work').value;
  //send message values
  sendMessage(fname,lname,email,phone,dob,gender,city,instname,fstudy,dlevel,other,mygrad,totexp,aexp,company,position,from,to,work);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(fname,lname,email,phone,dob,gender,city,instname,fstudy,dlevel,other,mygrad,totexp,aexp,company,position,from,to,work) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
   fname:fname,
   lname:lname,
   email:email,
   phone:phone,
   dob:dob,
   gender:gender,
   city:city,
   instname:instname,
   fstudy:fstudy,
   dlevel:dlevel,
   other:other,
   mygrad:mygrad,
   totexp:totexp,
   aexp:aexp,
   company:company,
   position:position,
   from:from,
   to:to,
   work:work
    
  });
}