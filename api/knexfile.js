// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      password: 'docker',
      user: 'postgres',
      port: 5432,
      database: 'damonbase'
    }
  },


};


// development: {
//   client: 'pg',
//   connection: {
//       host: 'db',  //localhost
//       password: 'docker',
//       user: 'postgres',
//       port: 5432,
//       database: 'team_1_info'
//   }
// }
// };

// connection: {
//   host: process.env.DATABASE_HOST || '127.0.0.1',
//   user: process.env.POSTGRES_USER || 'postgres',
//   password: process.env.POSTGRES_PASSWORD || 'docker',
//   database: process.env.POSTGRES_DB || 'team_1_info',
//   port: 5432
// }

// docker run --rm --name DamonBase -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
// -v $HOME/docker/volumes/postgres5:/var/lib/postgresql/data postgres