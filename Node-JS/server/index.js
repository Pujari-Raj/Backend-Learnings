const http = require("http");
const fs = require("fs");
const url = require("url");

/** creating our own server ,to create it we use http.createServer() method
 * it takes a callback function that will be executed whenever a request is
 * made to server. It takes two arguments(request, repsonse) object
 * request (req): This object contains details about the client's request,
 * such as the request method (GET, POST, etc.), URL, headers,
 * and body data (if applicable).
 * response (resp) :  This object is used to send a response back to the
 * client. It includes methods for setting response headers, writing data,
 * and ending the response.
 */

/**
 *  What Happens When a Request is Received:
 * When a client sends a request (for example, by visiting
 * http://localhost:8080 in a browser), the server's callback function is
 * executed. The server inspects the req object to see what the client wants
 * (e.g., which URL they are accessing or which HTTP method they used).
 * The server then uses the res object to send the appropriate response back
 * to the client, such as an HTML page, JSON data, or plain text.
 * */
const myServer = http.createServer((req, resp) => {
  console.log("New request received");
  // console.log(req.headers);
  const timeLog = `${Date.now()} : ${req.url} : New Req Recieved\n`;

  //
  if (req.url === "/favicon.ico") return resp.end() 
  const myUrl = url.parse(req.url,true);
    console.log(myUrl);


  fs.appendFile("log.txt", timeLog, (error, data) => {
    switch (myUrl.pathname) {
      case "/":
        resp.end("Homepage");
        break;
      case "/about":
        const userName = myUrl.query.myName;
        resp.end(`Hey ${userName}`);
        break;
      default:
        resp.end("404 Not Found");
    }
  })
});

/**
 * After creating a server  the server, we need to tell it to "listen" on a
 * specific port. The port is like a door through which requests come in.
 * When the server starts listening on a port, it will be ready to receives
 * requests and run the callback function whenever a request arrives.
 */
myServer.listen(8080, () => {
  console.log("Server started without any errors");
});
