const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

app.prepare().then(() => {
  const server = express()
  const route = pathMatch()

  server.get('/dogs', (req, res) => {
    return app.render(req, res, '/dogs')
  })

  server.get('/dogs/:breed', (req, res) => {
    const params = route('/dogs/:breed')(parse(req.url).pathname);
    return app.render(req, res, '/dogs/_breed', params);
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000')
  })
})
