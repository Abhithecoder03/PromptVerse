import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
export const DELETE = async(req, {params}) => {
    try {
        await connectToDB()
        const prompt = await Prompt.findByIdAndDelete(params.id);
        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to delete prompts",{ status: err.status})
    }
}