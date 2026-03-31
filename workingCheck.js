import * as GoogleAI  from "@google/generative-ai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const genAI = new GoogleAI("AIzaSyAr6afkX0xPTpTYxQfdX94GH7saSkBJHb0");
const schema = {
  type: "object",
  properties: {
    title: { type: "string" },
    singers: { type: "array", items: { type: "string" } },
    mood: { type: "array", items: { type: "string" } },
    year: { type: "number" },
    album: { type: "string" },
    duration: { type: "string" },
    language: { type: "string" },
    thumbnail: { type: "string" }
  },
  required: ["title", "singers", "year", "album"]
};
// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "How to make g frontend project. explain in short.",
//   });
//   console.log(response);
// }

async function main(songName) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", 
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const prompt = `Provide details for the song: ${songName}. 
    For the thumbnail, provide a high-quality YouTube thumbnail URL if known.`;
    
    const result = await model.generateContent(prompt);
    
    // In the latest SDK, you call .text() as a function on the response
    const responseText = result.response.text();
    const songData = JSON.parse(responseText);
    
    console.log(songData);
  } catch (error) {
    console.error("Oops! Something went wrong:", error.message);
  }
}

main("Sorry by Justin Bieber");