import connectDB from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    if (request.method == 'DELETE'){
        const client = await connectDB;
        const db = client.db("forum");

        let result = await db.collection("post").deleteOne(
            {_id: new ObjectId(request.body)});
        return response.status(200).redirect('/')
    }
}