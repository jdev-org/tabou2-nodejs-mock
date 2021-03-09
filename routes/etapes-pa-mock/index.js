'use strict'

const data =
  {
    "elements": [
      {
        "id_etape_programme": 1,
        "code": "EN_PROJET_OFF",
        "libelle": "En projet"
      },
      {
        "id_etape_programme": 2,
        "code": "EN_ETUDE_OFF",
        "libelle": "En Etude"
      },
      {
        "id_etape_programme": 3,
        "code": "ANNULE_OFF",
        "libelle": "Annulée"
      },
      {
        "id_etape_programme": 4,
        "code": "EN_PROJET_PUBLIC",
        "libelle": "En projet"
      },
      {
        "id_etape_programme": 5,
        "code": "EN_ETUDE_PUBLIC",
        "libelle": "En Etude"
      },
      {
        "id_etape_programme": 6,
        "code": "EN_CHANTIER_PUBLIC",
        "libelle": "En chantier"
      },
      {
        "id_etape_programme": 7,
        "code": "ACHEVE_PUBLIC",
        "libelle": "Achevé"
      },
      {
        "id_etape_programme": 8,
        "code": "CLOTURE_PUBLIC",
        "libelle": "Clôturé"
      },
      {
        "id_etape_programme": 9,
        "code": "ANNULE_PUBLIC",
        "libelle": "Annulée"
      }
    ],
    "totalElements": 9
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