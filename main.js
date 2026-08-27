var firebaseConfig = {
  apiKey: "AIzaSyD-ZAJioXYo0x0ZBByt7VEYd3LrugUkBK0",
  authDomain: "bhcg-8634a.firebaseapp.com",
  projectId: "bhcg-8634a",
  databaseURL: "https://bhcg-8634a-default-rtdb.firebaseio.com/",
  storageBucket: "bhcg-8634a.firebasestorage.app",
  messagingSenderId: "422221835445",
  appId: "1:422221835445:web:4880ae6dc068d9c56d62fc",
  measurementId: "G-VC6MJ4YSHN",
};

firebase.initializeApp(firebaseConfig);

function showPassword() {
  var x = document.getElementById("password_entry");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function addUser() {
  password = document.getElementById("password_entry").value;
  user_name = document.getElementById("user_name").value;
  if (user_name == "Raj") {
    if (password == "r") {
      firebase.database().ref("Logins/").push({
        name: user_name,
        time: time,
      });
      localStorage.setItem("user_name_main", user_name);
      window.location = "page.html";
    } else {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        password: password,
      });
      console.log("wrong password");
    }
  } else if (user_name == "Test1") {
    if (password == "bits") {
      firebase.database().ref("Logins/").push({
        name: user_name,
        time: time,
      });
      localStorage.setItem("user_name_main", user_name);
      window.location = "page.html";
    } else {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        password: password,
      });
    }
  } else if (user_name == "Test2") {
    if (password == "bits") {
      firebase.database().ref("Logins/").push({
        name: user_name,
        time: time,
      });
      localStorage.setItem("user_name_main", user_name);
      window.location = "page.html";
    } else {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        password: password,
      });
    }
  } else if (user_name == "Test3") {
    if (password == "bits") {
      firebase.database().ref("Logins/").push({
        name: user_name,
        time: time,
      });
      localStorage.setItem("user_name_main", user_name);
      window.location = "page.html";
    } else {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        password: password,
      });
    }
  } else if (user_name == "Temp") {
    if (password == "12") {
      localStorage.setItem("user_name_main", user_name);
      window.location = "page.html";
    } else {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        password: password,
      });
    }
  } else {
    firebase.database().ref("Failed_Logins/").push({
      name: user_name,
      time: time,
      password: password,
    });
  }
}
