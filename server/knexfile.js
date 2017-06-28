'use strict'

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/aiare_test'
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/aiare_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
