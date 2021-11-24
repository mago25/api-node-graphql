import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from "./resolvers.js";

const typeDefs = `
  type Query {
    hello(name: String): String!
    num: Int
    suma(a: Int, b: Int): Int!
  }
`;

export default makeExecutableSchema(
    {
        typeDefs: typeDefs,
        resolvers: resolvers
    }
)