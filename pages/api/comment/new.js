import connectDB from "@/utils/database";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    
    if (request.method == 'POST'){
        const session = await getServerSession(request, response,authOptions);
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        
        const postIdFromForm = request.body.postId;
        const commentContent = request.body.content;

        const newCommentData = {
            id: new ObjectId(),
            userName: session?.user.name || ipResponse.data.ip,
            content: commentContent,
            likes: 0,
            createdAt: new Date(),
        };
        
        const client = await connectDB;
        const db = client.db("forum");
        let result = await db.collection("comment").updateOne(
            {postId: new ObjectId(postIdFromForm)},
            {$push: {comments: newCommentData}},
            { upsert: true },
        );

        // console.log(`updated comment : ${newCommentData}`);
        // console.log(`updated request body : ${request.body}`);

        return response.status(200).redirect(`/detail/${postIdFromForm}`);
    }
}