import { GoogleGenAI } from "@google/genai";
export const Fetch = async ({prompt}) => {

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GENAI_API_KEY2 });

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents : `${prompt}`
        });

        let text = response.text;
        console.log(text);
        text = text.replace(/```json|```/g, "").trim();

        const data = JSON.parse(text);
        return data;

    } 
    catch (error) 
    {
        console.error(error);
        return;
    }
};