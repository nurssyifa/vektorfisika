//input nilai > KKM ke variabel localstorage
// localStorage.setItem("nkuis1",80);
// localStorage.setItem("nkuis2",80);
// localStorage.setItem("nkuis3",80);
// localStorage.setItem("nkuis4",80);
// localStorage.setItem("nkuis5",80);

//input nilai 0 ke variabel localstorage
// localStorage.setItem("nkuis1",0);
// localStorage.setItem("nkuis2",0);
// localStorage.setItem("nkuis3",0);
// localStorage.setItem("nkuis4",0);
// localStorage.setItem("nkuis5",0);

//hapus variabel dari localstorage
// localStorage.removeItem("nkuis1");
// localStorage.removeItem("nkuis2");
// localStorage.removeItem("nkuis3");
// localStorage.removeItem("nkuis4");
// localStorage.removeItem("nkuis5");

//hapus semua variabel dari localstorage
// localStorage.clear();

console.log(localStorage);

/*subbab 2*/
function materi2(){ //function nih kena panggil ke htmlnya
    var hasilakhir = localStorage.getItem("nkuis1");
    if (hasilakhir>=75){
      window.location.href='pengantar2.html'; //linknya
    } else{
      $('#exampleModal').modal('show')
    }
}

function materi3(){
  var hasilakhir = localStorage.getItem("nkuis1");
  if (hasilakhir>=75){
    window.location.href='materi3.html';
  } else{
    $('#exampleModal').modal('show')
  }
}

function materi4(){
  var hasilakhir = localStorage.getItem("nkuis1");
  if (hasilakhir>=75){
    window.location.href='materi4.html';
  } else{
    $('#exampleModal').modal('show')
  }
}

function kuis2(){
    var hasilakhir = localStorage.getItem("nkuis1");
    // var hasilakhir = 75;
    if (hasilakhir>=75){
      window.location.href='kuis2.html';
    } else{
      $('#exampleModal').modal('show')
    }
}

/*subbab 3*/

function kuis3(){
  var hasilakhir = localStorage.getItem("nkuis2");
  if (hasilakhir>=75){
    window.location.href='evaluasi.html';
  } else{
    $('#exampleModal').modal('show')
  }
}
