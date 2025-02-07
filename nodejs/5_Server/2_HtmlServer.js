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
const html=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Html Server Yapısı</title>
</head>
<body>
    <p> MERHABALAR HTML SAYFASI  </p>
</body>
</html> `



//Http Modül
const http=require('http');  //require ile veri oluştur.

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

    //Response
    console.log("******** RESPONSE ********");
    console.log(response);
    //Html Object
    response.write(html);  //html object buraya ekledik

    //End
    //response.end(`Hoşgeldiniz Node Js Sunucusuna \n http://localhost:${serverDataObject.port} Bu porttan yayın yapılıyor. A`);
    
    //html doküman görününce end boş olması daha uygun
    response.end();

}); //end server

//Listen Port
server.listen(serverDataObject.port,()=>{
    console.log(`http://${serverDataObject.host}:${serverDataObject.port} Bu portta yayın yapılıyor.`);
});