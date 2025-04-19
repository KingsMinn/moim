import connectDB from "@/utils/database";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
    
    if (request.method == 'POST'){
        // let session = await getServerSession(authOptions);
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
    
        const insert = request.body;
        insert.likes = 0;
        insert.user = ipResponse.data.ip;
        insert.createdAt = new Date();
        // session?.user.name || 
        
        // console.log(session?.user.name);
        const client = await connectDB;
        const db = client.db("forum");
        let result = await db.collection("post").insertOne(request.body);
        console.log(request.body);
        return response.status(200).redirect('/')
    }
}