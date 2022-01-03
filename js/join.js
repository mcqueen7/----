$(document).ready(function(){
    
  firebase.initializeApp({
    apiKey: "AIzaSyAwzWn4kP3v1JIoT9g94-HhbIS0xBYyz9U",
    authDomain: "htmlfinal-c6b79.firebaseapp.com",
    projectId: "htmlfinal-c6b79",
    storageBucket: "htmlfinal-c6b79.appspot.com",
    messagingSenderId: "1090006288916",
    appId: "1:1090006288916:web:41200ab4edbbe818377501"
  });
 // Reference Firebase Auth
const auth = firebase.auth();
// REGISTER DOM ELEMENTS
 const $email = $('#email');
 const $password = $('#password');
 const $btnSignIn = $('#btnSignIn');
 const $btnSignUp = $('#btnSignUp');
 const $btnSignOut = $('#btnSignOut');
 const $signInfo = $('#sign-info');
 


 // STORE PROFILE INFO
 let profile_Name, 
      profile_photoURL;

// REGISTER DOM ELEMENTS
const avatarImage = $('.avatar-image');
const avatarName = $('.avatar-name');
const avatarEmail = $('.avatar-email');


let userCollectionRef = firebase.firestore().collection("users");
let chatroomDocRef = firebase.firestore().collection("chatroom").doc("anonymousroom");    
let messagesCollectionRef = chatroomDocRef.collection("messages");
let queryMessagesCollectionRef = messagesCollectionRef.orderBy("timeStamp", "asc");

const $messageField = $("#message-field1");
const $nameField = $("#name-field1");
const $messageList = $("#message-list1");
const $color=$("#color");

 // LISTEN FOR KEYPRESS EVENT
$messageField.keypress(function (e) {
    if (e.keyCode == 13) {
        //FIELD VALUES
        let senderName = $nameField.val();
        let message = $messageField.val();
        let color = $color.val();
        const user = auth.currentUser;
        let photourl=user.photoURL;
        //SAVE DATA TO FIREBASE
        messagesCollectionRef.add({
            senderName: profile_Name,
            message: message,
            color:color,
            timeStamp: Date.now(),
            photourl: photourl,
        });
         // EMPTY INPUT FIELD
         $messageField.val('');
    }
 });
 $("#send_btn").click(function(){
    //FIELD VALUES
    let senderName = $nameField.val();
    let message = $messageField.val();
    let color = $color.val();
    const user = auth.currentUser;
    let photourl=user.photoURL;
    //SAVE DATA TO FIREBASE
    messagesCollectionRef.add({
        senderName: profile_Name,
        message: message,
        color:color,
        timeStamp: Date.now(),
        photourl: photourl,
    });
     // EMPTY INPUT FIELD
     $messageField.val('');
 });
 queryMessagesCollectionRef.onSnapshot(function (querySnapshot) {
    $messageList.html("");
    //MONITOR CHAT MESSAGE AND RENDER SCREEN
    querySnapshot.forEach(function (doc) {
      let senderName = doc.data().senderName || "匿名";
      let message = doc.data().message;
      let color =doc.data().color;
      let photourl =doc.data().photourl;
      let messageItem = `
      <li class="message-item">
        <div class=" d-flex align-items-center">
        <div class="chat_photo_container"><img class="chat_photo" src="${photourl}"></img></div>
        <strong class="chat-username ">${senderName}:</strong>
        <span style="color:${color}">${message}</span>
        </div>
      </li>
      `;
    
      if(senderName==profile_Name){
        // $("#message-list").$messageList.addClass("text-right");
        messageItem = `
      <li class="message-item text-end">
      <div class="chat_photo_container"></div>
        <strong class="chat-username">${senderName}:</strong>
        <span style="color:${color}">${message}</span>
      </li>
      `;
      
    }
      $messageList.append(messageItem);
    });
    //SCROLL TO BOTTOM OF MESSAGE LIST
    $messageList[0].scrollTop = $messageList[0].scrollHeight;
  });


 // SignIn
 $btnSignIn.click(function (e) {
  $btnSignIn.html(`<span class="spinner-border spinner-border-sm"></span>`);
  auth.signInWithEmailAndPassword($email.val(), $password.val())
    .then(function (e) {
      $btnSignIn.html(`登入成功`);
      window.location.href = "./join.html";
    })
    .catch(function (e) {
      $btnSignIn.html(`登入失敗`);
      console.log(e.message);
      $signInfo.html(e.message);
    });
});


 // SignUp
 $btnSignUp.click(function (e) {
  console.log('sign up now ...');
  $btnSignUp.html(`<span class="spinner-border spinner-border-sm"></span>`);
    let username = $('#userName').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let photourl = $('#photoURL').val();
  auth.createUserWithEmailAndPassword($email.val(), $password.val())
  
  .then(function () {
      const user = auth.currentUser;
      user.updateProfile({
        displayName: $('#userName').val(),
        photoURL: $('#photoURL').val()
      })
      .then(function () {
        $btnSignUp.html(`已註冊`);
        $email.val('');
        $password.val('');
        $('#userName').val('');
        $('#photoURL').val('');
        
      });
    })
    .then(function(){ 
      userCollectionRef.add({
        username: username,
        email: email,
        password:password,
        photourl: photourl,
    }).then(function(){
      window.location.href = "./join.html";
    });
    })
    .catch(function (e) {
      $btnSignUp.html(`註冊失敗`);
      $signInfo.html(e.message);
    });
});

let check=0;
// Listening Login User
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user);
    $signInfo.html(`${user.email} is login...`);
    user.providerData.forEach(function (profile) {
      console.log(`  Sign-in provider: ${profile.providerId}`);
      console.log(`  Provider-specific UID: ${profile.uid}`);
      console.log(`  Name: ${profile.displayName}`);
      console.log(`  Email: ${profile.email}`);
      console.log(`  Photo URL: ${profile.photoURL}`);
      profile_Name = profile.displayName;
      profile_photoURL = profile.email;
      avatarName.html(profile.displayName);
      avatarEmail.html(profile.email);
      avatarImage.attr("src", profile.photoURL);
      check=1;
    });
  } else {
    check=0;
    console.log("not logged in");
  }
});


// Signout
$btnSignOut.click(function () {
  auth.signOut();
  $email.val('');
  $password.val('');
  $signInfo.html('No one login...');
  window.location.href = "./index.html";
});


const $tosignin = $('#tosignin');
const $tosignup = $('#tosignup');
const $toprofile = $('#toprofile');
const $tosignout = $('#tosignout');
var user = firebase.auth().currentUser;
$tosignin.click(function(){
 
  if (check) {
    window.location.href = "./join.html";
  } else {
    window.location.href = "./signin.html";
  }
});
$tosignup.click(function(){
  if (check) {
    window.location.href = "./join.html";
  } else {
    window.location.href = "./signup.html";
  }
});

$toprofile.click(function(){
  if (check) {
    window.location.href = "./join.html";
  } else {
    window.location.href = "./signin.html";
  }
});
$tosignout.click(function(){
    auth.signOut();
    window.location.href = "./index.html";
  
});










  $("#gototop").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'ease-in-out');
    return false;
  });
  window.onscroll = function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 100) {
         $("#gototop").fadeIn();
    } else {
        $("#gototop").fadeOut();
  };
};


// nav 
  let menu_click=false;
  $(".navbar-toggler").click(function(){
    menu_click=!menu_click;
    if(menu_click){
        $(".navbar-icon-bar").attr("menu-click","true");
    }
    else{
        $(".navbar-icon-bar").attr("menu-click","false");
  }
});


});
