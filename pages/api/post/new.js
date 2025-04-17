import connectDB from "@/utils/database";

export default async function handler(request, response) {
    if (request.method == 'POST'){
        const client = await connectDB;
        const db = client.db("forum");
        let result = await db.collection("post").insertOne(request.body);
        return response.status(200).redirect('/')
    }
}