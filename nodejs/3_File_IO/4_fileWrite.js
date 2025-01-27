//fs: File System
const fs = require('fs');

// Dosya adı sabite atanır.
const dosyaAd = 'denemeDosya.txt';

//Dosya Yaz (Write File)
const dataWriter = fs.createWriteStream(dosyaAd, {encoding:'utf-8'});
dataWriter.write('dataWriter ile yeni satır yazıldı \n')
dataWriter.end();