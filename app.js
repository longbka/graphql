const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const app = express()
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});
async function startServer() {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer()
app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
})
