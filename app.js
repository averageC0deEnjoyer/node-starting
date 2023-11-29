import { createServer } from 'http';
import { upperCase } from 'upper-case';
import * from 'fs'

createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(upperCase('hello world!'));
  res.end();
}).listen(8080);
