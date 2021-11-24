export const resolvers = {
    Query: {
      hello: (_, { name }) => `Hello ${name || 'World'}`,
      num: () => {
          return 1;
      },
      suma: (_, {a, b}) => { return a + b }
    },
  };