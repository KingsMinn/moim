import connectDB from "@/utils/database";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    
    if (request.method == 'POST'){
        const session = await getServerSession(request, response,authOptions);
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
    
        const postToInsert = request.body;
        postToInsert.likes = 0;
        postToInsert.userName = session?.user.name || ipResponse.data.ip;
        postToInsert.createdAt = new Date();

        
        
        const client = await connectDB;
        
        const db = client.db("forum");
        let postResult = await db.collection("post").insertOne(postToInsert);
        
        const newPostId = postResult.insertedId;
        
        const commentToInsert = {
            "postId": newPostId,
            "comments": [],
        }
        console.log(`iddd: ${newPostId}`);
        console.log(`insertcomment: ${commentToInsert}`)
        let comment = await db.collection("comment").insertOne(commentToInsert);

        return response.status(200).redirect('/')
    }
}