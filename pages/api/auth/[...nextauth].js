import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/database";
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID, 
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                userId: { label: "아이디", type: "text" },
                password: { label: "비밀번호", type: "password" }
            },

            async authorize(credentials, req) {
                let db;
        
                db = (await connectDB).db("forum");
                let user = await db.collection('user_cred').findOne({ userId: credentials.userId });
        
                if (!user) {
                    console.log('해당 아이디 없음');
                    return null;
                }
                const passwordMatch = await bcrypt.compare(credentials.password, user.password);
                if (!passwordMatch) {
                    console.log('비밀번호 불일치:', credentials.userId);
                    return null;
                }
        
                console.log('로그인 성공:', credentials.userName);
        
                return {
                    id: user._id.toString(),
                    name: user.userName,
                };
              }
        })
    ],

    session: {
        strategy: "jwt", // JWT 사용 권장 (DB 부하 줄임)
        maxAge: 30 * 24 * 60 * 60, // 30일 (로그인 유지 기간)
      },
      callbacks: {
        // authorize 성공 시 반환된 user 객체를 받아서 jwt 토큰에 정보 추가
        jwt: async ({ token, user }) => {
          if (user) {
            // 로그인 성공 시 user 객체의 정보를 token에 담음
            token.id = user.id;
            token.name = user.name; // name도 필요하면 담기
          }
          return token; // 최종 token 객체 반환
        },

        session: async ({ session, token }) => {
          if (token) {
            session.user.id = token.id;
            session.user.name = token.name; // name 추가했다면 여기서도 추가
          }
          return session; // 최종 session 객체 반환
        },
      },


    secret : process.env.SECRET
}

export default NextAuth(authOptions);