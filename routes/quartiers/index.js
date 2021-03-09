'use strict'

const data =
  {
    "elements": [
      {
        "objectid": 6,
        "nuquart": 3,
        "nom": "Bourg l'Evesque - La Touche - Moulin du Comte"
      },
      {
        "objectid": 2,
        "nuquart": 12,
        "nom": "Bréquigny"
      },
      {
        "objectid": 7,
        "nuquart": 1,
        "nom": "Centre"
      },
      {
        "objectid": 5,
        "nuquart": 9,
        "nom": "Cleunay - Arsenal - Redon"
      },
      {
        "objectid": 4,
        "nuquart": 7,
        "nom": "Francisco Ferrer - Landry - Poterie"
      },
      {
        "objectid": 9,
        "nuquart": 6,
        "nom": "Jeanne d'Arc - Longs Champs - Beaulieu"
      },
      {
        "objectid": 1,
        "nuquart": 11,
        "nom": "Le Blosne"
      },
      {
        "objectid": 12,
        "nuquart": 5,
        "nom": "Maurepas - Bellangerais"
      },
      {
        "objectid": 10,
        "nuquart": 4,
        "nom": "Saint Martin"
      },
      {
        "objectid": 3,
        "nuquart": 8,
        "nom": "Sud gare"
      },
      {
        "objectid": 8,
        "nuquart": 2,
        "nom": "Thabor - Saint-Hélier - Alphonse Guérin"
      },
      {
        "objectid": 11,
        "nuquart": 10,
        "nom": "Villejean - Beauregard"
      }
    ],
    "totalElements": 12
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