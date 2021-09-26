const { ApolloGateway } = require("@apollo/gateway");
const { ApolloServer } = require("apollo-server");

gateway = new ApolloGateway({
    serviceList: [
        { name: "service1", url: "http://localhost:3001" },
        { name: "service2", url: "http://localhost:3002" }
    ]
})

const server = new ApolloServer({
    gateway,
    subscriptions: false
})

server.listen({
    port: parseInt(process.env.PORT)
}).then(({ url }) => {
    console.log(`🚀  Gateway ready at ${url}`);
});