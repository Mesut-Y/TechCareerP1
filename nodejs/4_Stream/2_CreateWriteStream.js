//Stream: Büyük verileri parça parça işler bellek ve performans kazancı sağlar.

//File Stream
const fs = require('fs');

const path = require('path'); //dosya adını okumak için

//file Path
//const dosyaTamyolu='./4_Stream/Nature.mp4';
const dosyaTamyolu='./4_Stream/Siir.txt';

//Read
const readStreamData=fs.createReadStream(dosyaTamyolu);

//Write
const dosyaAdi= path.parse(dosyaTamyolu).name;
const writeStreamData=fs.createWriteStream(`./4_Stream/${dosyaAdi}2.txt`); //Okunan dosya 

//Mount of Data
let dataMount = 0;

//Data Trigger Event
readStreamData.on('data', function(chunk){
    //console.log("Veri okundu: " + chunk); // Alternatif
    console.log(`Veri Büyüklüğü: ${chunk.length}`);
    dataMount += chunk.length;
    console.log(`Veri Okunuyor: \n\n ${chunk}`);
    console.log(chunk);
});

//Pipe: Verinin Pipe ile Transferi
readStreamData.pipe(writeStreamData);

// End Event
readStreamData.on('end', ()=>{  // different using
    console.log(`Veri Okundu.`);
    console.log(`Okunan Veri Byte Büyüklüğü: ${dataMount}`);
});

// Close Event
readStreamData.on('close', ()=>{  // different using
    console.log(`Veri Kapandı.`);
});

// Error Event
readStreamData.on('error', (err)=>{
    console.error(`Hata Oluştu ${err}`);
});