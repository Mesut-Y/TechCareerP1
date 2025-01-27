//fs: File System
const fs = require('fs');

// Dosya adı sabite atanır.
const dosyaAd = 'denemeDosya.txt';

//Dosya Sil (Delete Write)
fs.unlink(dosyaAd, (hata)=>{
    if(hata){
        console.log("Dosya silinemedi ", hata);
        throw hata;
    }
    else
        console.log("Dosya silindi. \n" + __filename +"\n");
});