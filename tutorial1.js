import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnIX4-39IsTziPD5e3WvGWtIvaJM7EwEA",
    authDomain: "vektorfirebase-93f19.firebaseapp.com",
    databaseURL: "https://vektorfirebase-93f19-default-rtdb.firebaseio.com",
    projectId: "vektorfirebase-93f19",
    storageBucket: "vektorfirebase-93f19.appspot.com",
    messagingSenderId: "77096962259",
    appId: "1:77096962259:web:b693d465ac56c42e12ac26",
    measurementId: "G-JCHGKF9NGZ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const dbkkm = ref(db, "kkm/");
onValue(dbkkm, kkmSuccess, handleError, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

let loop1;
let kkm1 = 0;
let kkm2 = 0;
let kkm3 = 0;

let getKKM;
function kkmSuccess(items1) {
  getKKM = items1.val();

  kkm1 = items1.val()[0]["kkm"];
  kkm2 = items1.val()[1]["kkm"];
  kkm3 = items1.val()[2]["kkm"];
}
function handleError(error) {
  console.log(error);
}

console.log(localStorage);

const btn = document.querySelectorAll(".nav-link");

btn[0].addEventListener("click", function () {
  materi2();
});

btn[1].addEventListener("click", function () {
  materi3();
});
btn[2].addEventListener("click", function () {
  materi4();
});
btn[3].addEventListener("click", function () {
  materi5();
});
btn[4].addEventListener("click", function () {
  materi6();
});
btn[5].addEventListener("click", function () {
  materi7();
});
btn[6].addEventListener("click", function () {
  materi8();
});
btn[7].addEventListener("click", function () {
  materi9();
});
btn[8].addEventListener("click", function () {
  materi10();
});
btn[9].addEventListener("click", function () {
  materi11();
});
btn[10].addEventListener("click", function () {
  kuis2();
});
btn[11].addEventListener("click", function () {
  evaluasi();
});

function materi2() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "materi2/sub2.1.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

function materi3() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "materi2/sub.2.2.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

function materi4() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "../../materi2-hewan/hewan_aseksual/fragmentasi.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

function materi5() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "../../materi2-hewan/hewan_aseksual/partenogenesis.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

function materi6() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "../../materi2-hewan/hewan_seksual/ovipar.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

function materi7() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "../../materi2-hewan/hewan_seksual/vivipar.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

function materi8() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "../../materi2-hewan/hewan_seksual/ovovivipar.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

function materi9() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "../../materi2-hewan/perkembangan_hidup_hewan/metamorfosis.html";
  } else {
    $("#exampleModal").modal("show");
  }
}
function materi10() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "../../materi2-hewan/teknologi_hewan/inseminasi_buatan.html";
  } else {
    $("#exampleModal").modal("show");
  }
}
function materi11() {
  var hasilakhir = localStorage.getItem("nilaik1");
  if (parseInt(hasilakhir) >= parseInt(kkm1)) {
    window.location.href = "../../materi2-hewan/teknologi_hewan/kesimpulan.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

function kuis2() {
  var hasilakhir = localStorage.getItem("nilaik1");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm1));
  if (parseInt(hasilakhir) >= parseInt(kkm2)) {
    window.location.href = "../../materi2-hewan/kuis/kuis2.html";
  } else {
    $("#exampleModal").modal("show");
  }
}

/subbab 3/

function evaluasi() {
  var hasilakhir = localStorage.getItem("nilaik2");
  console.log(parseInt(hasilakhir));
  console.log(parseInt(kkm2));
  if (parseInt(hasilakhir) >= parseInt(kkm3)) {
    window.location.href = "../../evaluasi/evaluasi.html";
  } else {
    $("#exampleModal").modal("show");
  }
}