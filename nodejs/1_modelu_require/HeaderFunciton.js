//Function Header
const HeaderFunction=()=>{
    console.log("Header fonksiyonu modül olarak kullanıldı");
}

const NavigationFunction=()=>{
    console.log("Navigation fonksiyonu 2.fonksiyon olarak kullanıldı");
}

// Fonksiyonu modül olarak kullanıma açmak
// NOT: 1 funciton için tanımlama
//module.exports=HeaderFunction;

module.exports.header=HeaderFunction;
module.exports.navigation=NavigationFunction;