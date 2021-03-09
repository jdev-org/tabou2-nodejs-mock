'use strict'

const data =
  {
    "elements": [
      {
        "nom_secteur": "Rennes",
        "id": 0
      },
      {
        "nom_secteur": "Saint-Jacques-de-la-Lande",
        "id": 1
      },
      {
        "nom_secteur": "Orgères",
        "id": 2
      },
      {
        "nom_secteur": "Laillé",
        "id": 3
      },
      {
        "nom_secteur": "Nouvoitou",
        "id": 4
      },
      {
        "nom_secteur": "Vezin-le-Coquet",
        "id": 5
      },
      {
        "nom_secteur": "Cesson-Sévigné",
        "id": 6
      },
      {
        "nom_secteur": "Brécé",
        "id": 7
      },
      {
        "nom_secteur": "Bourgbarré",
        "id": 8
      },
      {
        "nom_secteur": "Montgermont",
        "id": 9
      },
      {
        "nom_secteur": "Cintré",
        "id": 10
      },
      {
        "nom_secteur": "l'Hermitage",
        "id": 11
      },
      {
        "nom_secteur": "Chavagne",
        "id": 12
      },
      {
        "nom_secteur": "Corps-Nuds",
        "id": 13
      },
      {
        "nom_secteur": "Clayes",
        "id": 14
      },
      {
        "nom_secteur": "la Chapelle-Thouarault",
        "id": 15
      },
      {
        "nom_secteur": "le Rheu",
        "id": 16
      },
      {
        "nom_secteur": "le Verger",
        "id": 17
      },
      {
        "nom_secteur": "Chartres-de-Bretagne",
        "id": 18
      },
      {
        "nom_secteur": "Noyal-Châtillon-sur-Seiche",
        "id": 19
      },
      {
        "nom_secteur": "Servon-sur-Vilaine",
        "id": 20
      },
      {
        "nom_secteur": "Acigné",
        "id": 21
      }
    ],
    "totalElements": 21
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