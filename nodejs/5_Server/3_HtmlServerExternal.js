//Server Object
const serverDataObject={
    host:'localhost', //domain
    port:1111,
    statusCode:{
        success:200, //başarılı
        notFound:404, //client hataları
        badRequest:400, //url yanlış 
        unauthorized:401, //yetkisiz giriş
        forbidden:403,
        internalServerError:500 //server hatası
    }
};

//Html Object
const htmlFilePath="./example.html";

//Http Modül
const http=require('http');  //require ile veri oluştur.
 
//File System
const fs=require('fs')

//Server Oluşturmak
const server=http.createServer(function(request,response){
    console.log("server oluşturuldu.")

    //Header
    console.log("******** HEADER ********");
    // response.setHeader('Content-Type','application/json'); //alternatif
    // response.writeHead(200,{"content-type":"text/Html ; charset=utf-8"}); //html alternatifi
    // response.writeHead(200,{"content-type":"text/plain ; charset=utf-8"}); // plain alternatifi
    // response.writeHead(200,{"content-type":"text/application/json ; charset=utf-8"}); //json alternatifi
    response.writeHead(serverDataObject.statusCode.success, {"content-type":"text/Html ; charset=utf-8"});
    response.write("Header Fiels <br/>");
    
    //Request
    console.log("******** REQUEST ********");
    console.log(request);
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers.age);
    console.log(request.headers.host); //çeşitli bilgiler alınabilir.
    response.write("Request Field </br>")

    //HTML Sayfasını Okumak
    fs.readFile(htmlFilePath,(err,data)=>{
        if(err)
        {
            console.log("HTML sayfası okunamadı.");
            console.error(err);
            throw(err);
        }
        console.log("HTML dosyası okundu.");
        console.log(data);    //hem konsolda gözükür.
        response.write(data); //hem de sayfada
    });

    //Response - END
    response.end;

}); //end server

//Listen Port
server.listen(serverDataObject.port,()=>{
    console.log(`http://${serverDataObject.host}:${serverDataObject.port} Bu portta yayın yapılıyor.`);
});