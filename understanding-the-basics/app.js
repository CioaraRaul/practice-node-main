const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<!DOCTYPE html>");
    res.write('<html lang="en">');
    res.write("<head>");
    res.write('<meta charset="UTF-8">');
    res.write(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    );
    res.write("<title>Enter message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"/> <button type="submit">Send</button>  <form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write('<html lang="en">');
  res.write("<head>");
  res.write('<meta charset="UTF-8">');
  res.write(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
  );
  res.write("<title>Document</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Hello World</h1>");
  res.write("<p>This is a paragraph</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
