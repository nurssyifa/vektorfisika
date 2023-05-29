function check(){
    var pertanyaan1 = document.quiz.pertanyaan1.value;
    var pertanyaan2 = document.quiz.pertanyaan2.value;
    
    var cekAja = document.querySelectorAll('.cek-aja');
    var Benar = 0;
    var Salah = 0;

    if (pertanyaan1 == "Kecepatan", "Gaya"){
        Benar++;
        cekAja[5].innerHTML = `
            <span class="p-1"><i style="color: #00e600;" 
            class="fas fa-check-circle"></i> Benar</span>
        `;
    } else if(pertanyaan1 == ""){
        cekAja[5].innerHTML = `
            <span class="p-1"><i style="color: #ffa500;" 
            class="fas fa-exclamation-triangle"></i> Isi dulu</span>
        `;
    } else {
        Salah++;
        cekAja[5].innerHTML = `
            <span class="p-1"><i style="color: red;" 
            class="fas fa-times-circle"></i> Salah</span>
        `;
    }


    if (pertanyaan2 == "Massa", "Energi"){
        Benar++;
        cekAja[5].innerHTML = `
            <span class="p-1"><i style="color: #00e600;" 
            class="fas fa-check-circle"></i> Benar</span>
        `;
    } else if(pertanyaan2 == ""){
        cekAja[5].innerHTML = `
            <span class="p-1"><i style="color: #ffa500;" 
            class="fas fa-exclamation-triangle"></i> Isi dulu</span>
        `;
    } else {
        Salah++;
        cekAja[5].innerHTML = `
            <span class="p-1"><i style="color: red;" 
            class="fas fa-times-circle"></i> Salah</span>
        `;
    }

    var pesan = ["Bagus Sekali!", "Sudah Lumayan, Tingkatkan!", 
    "Belajar lebih giat lagi!"];
    var tingkat;

    if (pertanyaan1 == "" || pertanyaan2 == "" ){
        document.getElementById('pesan-ganti').innerHTML=`
            <div class="cekhasilquiz text-center" id="after_cek">
                <div class="kontencekhasil text-white" style="background-color: #ffa500">
                    <span>Masih ada jawaban yang kosong, Isi terlebih dahulu!</span>
                </div>
            </div>
        `;
    }

    else if (Benar <= 1){
        tingkat =2;
        document.getElementById('pesan-ganti').innerHTML=`
            <div class="cekhasilquiz text-center" id="after_cek">
                <div class="kontencekhasil bg-danger text-white">
                    <p id="pesan" class="text-white"></p>
                    <span id="number_benar"></span><br>
                    <span id="number_salah"></span>
                </div>
            </div><br>
            <hr class="hr5">
        `;
    }
    else if (Benar > 2){
        tingkat =0;
        document.getElementById('pesan-ganti').innerHTML=`
            <div class="cekhasilquiz text-center" id="after_cek">
                <div class="kontencekhasil bg-success text-white">
                    <p id="pesan"></p>
                    <span id="number_benar"></span><br>
                    <span id="number_salah"></span><br>
                </div>
            </div><br>
            <hr class="hr5">
        `;
    }
    document.getElementById("after_cek").style.visibility = "visible";

    document.getElementById("pesan").innerHTML = pesan[tingkat];
    document.getElementById("number_benar").innerHTML = "Benar = " + Benar;
    document.getElementById("number_salah").innerHTML = "Salah = " + Salah;
}