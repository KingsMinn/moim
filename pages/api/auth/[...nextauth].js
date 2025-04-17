import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23lijMj5PQooW8CLvA',
            clientSecret: 'bd5adf9872d73162895fa1f29d762aca5fa8728b',
        }),
    ],
    secret : `enfnal1234`
}

export default NextAuth(authOptions);