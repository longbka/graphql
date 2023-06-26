const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const app = express()
const mongoose = require("mongoose")
const mongoDataMethods = require("./data/db")

//Load Schema & resolvers
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context:()=>({mongoDataMethods})
});

//connect to mongodb
const connectDB = async ()=>{
  try {
    await mongoose.connect('mongodb+srv://longnh2:Thang1111@tutorial-graphl.2kg5tih.mongodb.net/?retryWrites=true&w=majority')
    console.log('MongoDB Connected')
  } catch (error) {
    console.log(error.message)
    process.exit()
  }
}
connectDB()
async function startServer() {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer()
app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
})
