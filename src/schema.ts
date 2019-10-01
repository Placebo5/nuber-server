import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: GraphQLSchema[] = fileLoader(path.join(__dirname, "./api/**/*.graphql"));

const allResolvers: any[] = fileLoader(path.join(__dirname, "./api/**/*.resolvers.*"));

const margeTypes = mergeTypes(allTypes);
const margedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: margeTypes,
  resolvers: margedResolvers
});

export default schema;
