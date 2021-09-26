# Federated apollo graphql server demo

This gql server has three part

1. Federated GQL gateway server
2. Books GQL server
3. Todos GQL server

## Brief

The books and Todos are microservices that run on their own port
The Gateway creates a consolidated schema based on above two subgraphs/microservices
