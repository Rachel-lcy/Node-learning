const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  //lodash
  const num = _.random(0,20);
  console.log(num);



  //set header content type
  res.setHeader('Content-Type', 'text/html');
  // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }


  //send an html file
  fs.readFile('./views/index.html', (err,data) => {
    if(err){
      console.log(err);
      res.end()
    }else{
      //res.write(data);
      res.end(data);
    }
  });
  // res.write('<p>Hello, Tia</p>');
  // res.write('<p>Hello Again, Tia</p>');
  // res.end();
});
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
});