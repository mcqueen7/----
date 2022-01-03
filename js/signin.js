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
          //SAVE DATA TO FIREBASE
          messagesCollectionRef.add({
              senderName: senderName,
              message: message,
              color:color,
              timeStamp: Date.now(),
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
      //SAVE DATA TO FIREBASE
      messagesCollectionRef.add({
          senderName: senderName,
          message: message,
          color:color,
          timeStamp: Date.now(),
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
        let messageItem = `
        <li class="message-item">
          <strong class="chat-username">${senderName}:</strong>
          <span style="color:${color}">${message}</span>
        </li>
        `;
        $messageList.append(messageItem);
      });
      //SCROLL TO BOTTOM OF MESSAGE LIST
      $messageList[0].scrollTop = $messageList[0].scrollHeight;
    });
  
   // SignIn
   $btnSignIn.click(function(e){
      $btnSignIn.html(`<span class="spinner-border spinner-border-sm"></span>`);
      auth.signInWithEmailAndPassword($email.val(), $password.val())
      .then(function () {
          $btnSignIn.html(`已登入`);
          // window.location.href = "./sport.html";
        })
      .catch(function(e){
          $btnSignIn.html(`登入`);
        $signInfo.html(e.message);
      });
  });
  let userCollectionRef = firebase.firestore().collection("users");
   // SignUp
  $btnSignUp.click(function(e){
      $btnSignUp.html(`<span class="spinner-border spinner-border-sm"></span>`);
      let email = $("#email").val();
      let password = $("#password").val();
      auth.createUserWithEmailAndPassword($email.val(), $password.val())
  
      .then(function () {
          userCollectionRef.add({
              email: email,
              password: password, 
          });
          $btnSignUp.html(`已註冊`);
        })
      .catch(function(e){
          $btnSignUp.html(`註冊`);
          $signInfo.html(e.message);
      });
  });
  
  // Listening Login User
  auth.onAuthStateChanged(function(user){
      if(user) {
        $signInfo.html(`${user.email} 已登入...`);
        console.log(user);
      } else {
        console.log("未有使用者登入");
      }
  });
  
  // Signout
  $btnSignOut.click(function(){
      auth.signOut();
      $email.val('');
      $password.val('');
      $signInfo.html('未有使用者登入...');
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
  