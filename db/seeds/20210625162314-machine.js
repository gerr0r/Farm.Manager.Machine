const table = 'Machine'
const createdAt = new Date()
const updatedAt = new Date()
const data = [
  { id: '989a2e39-f758-41f2-b434-b4c61ec2b41c', model: 'Volvo T25', engine: 'Gasoline', type: 'Tractor', createdAt, updatedAt},
  { id: '13dfec1c-7f1c-45ad-a46f-8c6d9ad602b0', model: 'John Deere 9320', engine: 'Diesel', type: 'Tractor', createdAt, updatedAt},
  { id: 'a39878c1-2896-4363-b2cf-4f66053703e1', model: 'F210 Honda', engine: 'Diesel', type: 'Cultivator', createdAt, updatedAt},
  { id: '2b323c7a-3818-457c-a92d-eff794664e69', model: 'Kinze 2200', engine: null, type: 'Planter', createdAt, updatedAt},
  { id: 'f2b9308f-1705-4a8a-9d2d-d57c7ae957c6', model: 'Claas Variant 180', engine: null, type: 'Round Baler', createdAt, updatedAt},
  { id: '7dc7ca95-b32f-44f9-81e2-549edee9bb82', model: 'Model 435', engine: null, type: 'Square Baler', createdAt, updatedAt},
  { id: '8d91fdb9-d311-405d-81fd-6553d677c1e9', model: 'Claas Lexion 570', engine: 'Diesel', type: 'Combine', createdAt, updatedAt},
  { id: '60238eb9-aeff-46fd-a4f3-728cf7d46a65', model: 'John Deere 9870', engine: 'Diesel', type: 'Combine', createdAt, updatedAt},
  { id: 'c685a247-87c1-41f0-bcc7-1a4863976606', model: 'Case IH', engine: 'Gasoline', type: 'Combine', createdAt, updatedAt},
  { id: '03edc043-78fe-4bdb-9c64-f3e1f1e75864', model: 'Allen Scythe', engine: 'Gasoline', type: 'Mower', createdAt, updatedAt},
  { id: 'cfec6d45-de2d-4b1c-877f-915ff088d63f', model: 'Caterpillar 613C', engine: 'Diesel', type: 'Scraper', createdAt, updatedAt},
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(table, data, {})
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete(table, null, {})
  }
}
