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
}

//Http Modül
const http=require('http');  //require ile veri oluştur.

//Server Oluşturmak
const server=http.createServer(function(request,response){
    console.log("server oluşturuldu.")

    //Header
    console.log("******** HEADER ********");
    // response.setHeader('Content-Type','application/json'); //alternatif
    // response.writeHead(200,{"content-type":"text/Html ; charset=utf-8"}); //html 
    // response.writeHead(200,{"content-type":"text/plain ; charset=utf-8"}); // plain
    // response.writeHead(200,{"content-type":"text/application/json ; charset=utf-8"}); //json
    response.writeHead(serverDataObject.statusCode.success, {"content-type":"text/Html ; charset=utf-8"});
    response.write("Header Fiels <br/>");
    
    //Request
    console.log("******** REQUEST ********");
    console.log(request);
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers.age);
    console.log(request.headers.host); //çeşitli bilgiler alınabilir.

    //Response
    console.log("******** RESPONSE ********");
    console.log(response);
    response.write("Response Field: response.write komutu ile yazıldı. <br/>");

    //End
    //response.end(`Hoşgeldiniz Node Js Sunucusuna \n http://localhost:${serverDataObject.port} Bu porttan yayın yapılıyor. A`);
    response.end(` üşğçö Hoşgeldiniz Node Js Sunucusuna \n http://${serverDataObject.host}:${serverDataObject.port} Bu portta yayın yapılıyor.B`);

}); //end server

//Listen Port
server.listen(serverDataObject.port,()=>{
    console.log(`http://${serverDataObject.host}:${serverDataObject.port} Bu portta yayın yapılıyor.`);
});