const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getMachine(id: ID!): Machine
    getMachines: [Machine]
  }

  type Machine @key(fields: "id") {
    id: ID!
    model: String!
    engine: String
    type: String
  }
`