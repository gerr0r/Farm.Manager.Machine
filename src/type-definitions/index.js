const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getMachines: [Machine]
  }

  type Machine @key(fields: "id") {
    id: ID!
    model: String!
  }
`