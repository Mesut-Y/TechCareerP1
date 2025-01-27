// const headerFunction=require('./HeaderFunciton') 
// tek dosyadan tek fonksiyonken modül çağırıldı.

const index_mainFunction=require('./MainFunction')
const in_Footer=require('./File_Footer_Func')

// 1 dosyadan 1den fazla fonksiyon çağırıldı
const headerFunction=require('./HeaderFunciton').header
const navigationFunction=require('./HeaderFunciton').navigation

headerFunction();
navigationFunction();
index_mainFunction();
in_Footer();