//========================LOGIN=============================//
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const data = JSON.parse(localStorage.getItem("data"));

  const pengguna = data.find(function(item){
    return item.email == email.value && item.password == password.value;
  });

  if (pengguna){
    alert("Berhasil Masuk");
    window.location.href = "index.html";
  } else {
    alert("Gagal");
  }
});
