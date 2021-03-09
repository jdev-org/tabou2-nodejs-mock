'use strict'

const data =
  {
    "elements": [
      {
        "num_secteur": 2,
        "nom_secteur": "Est"
      },
      {
        "num_secteur": 7,
        "nom_secteur": "Nord"
      },
      {
        "num_secteur": 1,
        "nom_secteur": "Nord-Est"
      },
      {
        "num_secteur": 6,
        "nom_secteur": "Nord-Ouest"
      },
      {
        "num_secteur": 5,
        "nom_secteur": "Ouest"
      },
      {
        "num_secteur": 4,
        "nom_secteur": "Sud"
      },
      {
        "num_secteur": 3,
        "nom_secteur": "Sud-Est"
      },
      {
        "num_secteur": 8,
        "nom_secteur": "Ville de Rennes"
      }
    ],
    "totalElements": 8
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