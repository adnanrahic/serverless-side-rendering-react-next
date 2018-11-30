const sls = require('serverless-http')
const binaryMimeTypes = require('./binaryMimeTypes')

const server = require('./server')
module.exports.server = sls(server, {
  binary: binaryMimeTypes
})
