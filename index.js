import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers'

const server = new GraphQLServer({ 
    typeDefs: "graphql/schema.graphql",
    resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
        