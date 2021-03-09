'use strict'

const data =
  {
    "elements": [
      {
        "nom_secteur": "Coeur de ville",
        "id": 1
      },
      {
        "nom_secteur": "Faisceau ferroviaire",
        "id": 2
      },
      {
        "nom_secteur": "Traversée de l'Ile",
        "id": 3
      },
      {
        "nom_secteur": "Vallée du Blosne et de la Vilaine",
        "id": 4
      }
    ],
    "totalElements": 4
  }

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data
  })
  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })
}