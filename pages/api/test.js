import connectDB from "@/utils/database";

export default async function handler(request, response) {
    if (request.method == 'POST') {
        return response.status(200).json('wow');
    } else if (request.method == 'GET') {
        const client = await connectDB;
        const db = client.db("forum");
        let result = await db.collection("post").find().toArray();
        return result;
    }
}