import { developers, students } from "../db.js"

export const resolvers = {
    Query : {
        developers() {
           return developers
        },

        developer(parent, arg, context) {
            return developers.find(data => data.id == arg.id)
        },

        students() {
            return students
        }
    }
}