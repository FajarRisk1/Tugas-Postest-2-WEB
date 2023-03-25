//============================REGIS==============================//
const tombol = document.querySelector(".submit-btn");
tombol.onclick = register;

function register(e) {
  e.preventDefault();
  const nama = document.getElementById("daf_nama").value;
  const email = document.getElementById("daf_email").value;
  const password = document.getElementById("daf_pass").value;

  // membuat objek baru untuk data pengguna
  const pengguna = { 
    nama: nama, 
    email: email, 
    password: password 
  };

  // mengambil data pengguna yang sudah ada dari local storage (jika ada)
  let existingData = JSON.parse(localStorage.getItem("data")) || [];

  // memeriksa apakah data sudah berbentuk array atau belum
  if (!Array.isArray(existingData)) {
    // jika belum, kita ubah menjadi array dengan menempatkannya dalam array kosong
    existingData = [existingData];
  }

  // menambahkan objek pengguna ke dalam array data
  existingData.push(pengguna);

  // menyimpan data dalam local storage dalam bentuk string JSON
  localStorage.setItem("data", JSON.stringify(existingData));

  alert("Berhasil Daftar");
}

function goFurther() {
    const chkAgree = document.getElementById("chkAgree");
    const submitBtn = document.querySelector(".submit-btn");
  if (chkAgree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}



