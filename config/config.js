const config = {
  development: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 3306,
      username: 'sk7352',
      password: 'Sudh@neebal',
      database: 'mydb'
    },
  },
  test: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 3306,
      username: 'sk7352',
      password: 'Sudh@neebal',
      database: 'mydb'
    },
  }
};

const env = process.env.NODE_ENV || 'development';

const configuration = config[env];

module.exports = configuration;