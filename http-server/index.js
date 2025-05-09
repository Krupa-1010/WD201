
const http=require("http");
const fs=require("fs");
const minimist=require("minimist");
const args=minimist(process.argv.slice(2));

let port=args.port;
let homeContent="";
let projectContent="";
let registrationContent=" ";

fs.readFile("home.html",(err,home)=>{
    homeContent=home;
})

fs.readFile("project.html",(err,project)=>{
    projectContent=project;
})
fs.readFile("registration.html",(err,register)=>{
    registrationContent=register;
})

http
    .createServer((request,response)=>{
        const url=request.url;
        response.writeHead(200,{'content-type':"text/html"});

        switch(url)
        {
            case '/project':
                response.write(projectContent);
                response.end();
                break;
            case '/registration':
                response.write(registrationContent);
                response.end();
                break;
            default:
                response.write(homeContent);
                response.end();
                break;

        }
       
    })
    .listen(port);
    