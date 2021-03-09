'use strict'

const data =
  {"elements":[{"secteur":"A"},{"secteur":"B"},{"secteur":"C"},{"secteur":"D"},{"secteur":"E"},{"secteur":"Est"},{"secteur":"F"},{"secteur":"Nord"},{"secteur":"Nord-Est"},{"secteur":"Nord-Ouest"},{"secteur":"Ouest"},{"secteur":"Sud"},{"secteur":"Sud-Est"}],"totalElements":13}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data
  })
  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })
}