const { buildFederatedSchema } = require('@apollo/federation');
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type todo {
    title: String
    dueDate: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  extend type Query {
    todos: [todo]
  }
`;

const todos = [
  {
    title: 'todo1',
    dueDate: 'date1',
  },
  {
    title: 'todo2',
    dueDate: 'date2',
  },
];

const resolvers = {
  Query: {
    todos: () => todos,
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs, resolvers
  }])
});;

server.listen({
  port: parseInt(process.env.PORT) + 2
}).then(({ url }) => {
  console.log(`🚀  Server 2 ready at ${url}`);
});