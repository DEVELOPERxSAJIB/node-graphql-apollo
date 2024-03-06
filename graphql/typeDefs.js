export const typeDefs = `#graphql 
    type Developer {
        id : ID,
        name : String,
        email : String,
        skills : [String!],
        location : String,
        isMarried : Boolean,
        age : Int
    },

    type Student {
        id : ID,
        name : String,
        email : String,
        location : String,
        age : Int
    },

    type Query {
        developers : [Developer],
        developer (id : ID) : Developer
        students : [Student]
    }

`;
