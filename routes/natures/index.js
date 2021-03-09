'use strict'

const data =
{"elements":[{"id":1,"libelle":"ZAC","dateInactif":null},{"id":2,"libelle":"ZA","dateInactif":null},{"id":3,"libelle":"En diffus","dateInactif":null}],"totalElements":2}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data
  })
  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })
}