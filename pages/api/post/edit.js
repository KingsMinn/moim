import connectDB from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    if (request.method == 'POST'){
        const client = await connectDB;
        const db = client.db("forum");
        const toChange = {
            title: request.body.title,
            content: request.body.content,
        }
        let result = await db.collection("post").updateOne(
            {_id: new ObjectId(request.body._id)},
            {$set : toChange}
        );
        return response.status(200).redirect('/')
    }
}