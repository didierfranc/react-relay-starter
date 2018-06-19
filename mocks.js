const faker = require('faker')

module.exports = {
  String: () => faker.hacker.phrase(),
}
