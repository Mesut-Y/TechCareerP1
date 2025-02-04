//Dosya Yolu
console.log(__dirname);
console.log(__filename);

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

//Sayfalar request.url yönlendirmelerinde kullanılır
const index="./index.html";
const blog="./blog.html";
const register="./register.html";
const notFound="./notFound.html";

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
    //response.write("Header Fiels <br/>");
    
    //Request
    console.log("******** REQUEST ********");
    console.log(request);
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers.age);
    console.log(request.headers.host); //çeşitli bilgiler alınabilir.
    //response.write("Request Field </br>")

    if(request.method === 'GET'){    //request client isteği GET
        //ROOT
        if( request.url === '/' || request.url === '/index'){
            fs.readFile(index,(err,data)=>{
                if(err)
                    throw err;
                response.end(data);
            })
        } else if( request.url === '/' || request.url === '/blog'){
            fs.readFile(blog,(err,data)=>{
                if(err)
                    throw err;
                response.end(data);
            })
        } else if( request.url === '/' || request.url === '/register'){
            fs.readFile(register,(err,data)=>{
                if(err)
                    throw err;
                response.end(data);
            })
        } else {
            fs.readFile(notFound,(err,data)=>{
                if(err)
                    throw err;
                response.end(data);
            })
    }}

}); //end server

//Listen Port
server.listen(serverDataObject.port,()=>{
    console.log(`http://${serverDataObject.host}:${serverDataObject.port} Bu portta yayın yapılıyor.`);
});