const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vaccine</title>
      <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@500&display=swap" rel="stylesheet">
  
      <link rel="stylesheet" href="index.css">
  </head>
  <body>
  
      <header>
          <div id="head">
       <ul>
  <li><a id="act" href="#Home">Home</a> </li>
  <li><a href="#cont">Vaccines</a></li>
  <li><a href="#forms">Book</a></li>
  <li><a href="#About">About</a></li>
  <input type="text" name="" placeholder="Search" id="search">
  </ul>
  
  </div>
  
  
      </header>
  <div id="info">
      <h1 class="h">BOOK VACCINE</h1>
      <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi
           sapiente beatae, porro, eum omnis ad iure temporibus est esse illo eius
            rerum aliquid suscipit labore odio asperiores enim. Delectus eos dignissimos
             necessitatibus aspernatur repellendus ab officia molestiae ut ad
          mollitia ducimus dolorum quas, magnam, neque, accusamus cupiditate
           consequatur reprehenderit eligendi? Ea deserunt facere a.</p>
  </div>
  
  <hr>
   <h1 class="h" >VACCINES AVAILABLE</h1>
  <div id="cont">
      <div id="v1"><h2>Covishield</h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam commodi est quo enim explicabo beatae! Molestias, porro. Neque, quidem. tfvtv uhbhb.</div>
      <div id="v2"><h2>Covaxin</h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsum culpa corrupti assumenda fugit officiis? Voluptates alias cumque totam vitae.</div>
      <div id="v3"><h2>Sputnik</h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsum culpa corrupti assumenda fugit officiis? Voluptates alias cumque totam vitae. </div>
  </div>
  <hr>
  
  <div id="book"><h1 class ="h">BOOK YOUR VACCINE</h1>
      <form id ="forms" action="">
     <input type="text" placeholder="Name" required>
     <input type="text" placeholder="Email" required>
     <input type="text" placeholder="Phone No." required>
     <input type="text" placeholder="Location" required>
     <input type="submit"  required>
      </form>
  
  
  </div>
  
  
  
  
  
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});