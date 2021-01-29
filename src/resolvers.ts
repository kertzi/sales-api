import { IResolvers } from "graphql-tools";

let links = [
    {
        id: "link-0",
        url: "www.testlink.com",
        description: "Some description"
    }
];

let idCount = links.length;

const resolvers: IResolvers = {
    Query: {
        helloWorld: () => "Hello from server",
        links: () => {
            return links;
        }
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            };
            links.push(link);
            console.log(links);
            return link;
        }
    }
}

export default resolvers;