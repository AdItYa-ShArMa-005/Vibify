import { Fetch } from "./Fetch";
const Explore = () => {
//     let prompt = `
//     Give me 15 current trending songs in India.
//     Rules:
//     - Always return exactly 15 items
//     - Do NOT omit any fields
//     - Do NOT change keys
//     Format:
//     [
//     {
//         "title": "string",
//         "singers": ["string"],
//         "album": "string",
//         "thumbnail": "string"
//     }
//     ]
//     Return ONLY valid JSON. No explanation. No markdown.
//     `;
// console.log(Fetch(prompt));
    return (
        <div className="explore">
            <div className="explore-header">
                <h2>Explore</h2>
                <p>Discover new music and artists.</p>
            </div>
        </div>
    )
}
export default Explore;