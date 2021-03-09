'use strict'

const data = 
  {
    "elements": [
      {
        "id_etape_operation": 1,
        "code": "EN_PROJET_OFF",
        "libelle": "En projet"
      },
      {
        "id_etape_operation": 2,
        "code": "EN_ETUDE_OFF",
        "libelle": "En étude"
      },
      {
        "id_etape_operation": 3,
        "code": "ANNULE_OFF",
        "libelle": "Annulé"
      },
      {
        "id_etape_operation": 4,
        "code": "EN_PROJET_PUBLIC",
        "libelle": "En projet"
      },
      {
        "id_etape_operation": 5,
        "code": "EN_ETUDE_PUBLIC",
        "libelle": "En étude"
      },
      {
        "id_etape_operation": 6,
        "code": "OPERATIONNEL_PUBLIC",
        "libelle": "Opérationnel"
      },
      {
        "id_etape_operation": 7,
        "code": "CLOTURE_PUBLIC",
        "libelle": "Clôturé"
      },
      {
        "id_etape_operation": 8,
        "code": "ANNULE_PUBLIC",
        "libelle": "Annulé"
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