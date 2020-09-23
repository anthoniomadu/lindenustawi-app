module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-54-160-202-3.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d8o22ck5ebpvc6"),
        username: env("DATABASE_USERNAME", "pedhmkzpcpghaa"),
        password: env("DATABASE_PASSWORD", "5d7d6a75acb9a28968d18752ac5f5f06e19c050eea16593e14f18cb0a60dcb76"),
        schema: "public",
        ssl: { rejectUnauthorized: false }
      },
      options: {}
    }
  }
});
