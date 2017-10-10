var config = {
      apiKey: "AIzaSyBSLUepk6oQpKVCkQj-p-Cwa4E057En3dI",
      authDomain: "rock-paper-scissors-a3748.firebaseapp.com",
      databaseURL: "https://rock-paper-scissors-a3748.firebaseio.com",
      projectId: "rock-paper-scissors-a3748",
      storageBucket: "rock-paper-scissors-a3748.appspot.com",
      messagingSenderId: "540223845963"
    };


    firebase.initializeApp(config);
    var db = firebase.database();
    
    $("#done").on("click", function(event) {
      event.preventDefault();
      var name = $("#name").val().trim();
      var email = $("#email").val().trim();
      var message = $("#message").val().trim();
	  
	  var ref = db.ref("/Contact");   
	    var refKey = ref.push({
	      name: name,
	      email: email,
	      message: message
	      time: firebase.database.ServerValue.TIMESTAMP,
	    }).key;
	}