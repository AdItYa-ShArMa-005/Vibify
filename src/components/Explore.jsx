import SongCard from "./SongCard";

const latestSongs = [
    { id: 1, title: "Noor", singers: ["Arijit Singh", "Shreya Ghoshal"], thumbnail: "https://picsum.photos/seed/noor/300/300", mood: ["romantic"] },
    { id: 2, title: "Raataan Lambiyan", singers: ["Jubin Nautiyal"], thumbnail: "https://picsum.photos/seed/raat/300/300", mood: ["romantic"] },
    { id: 3, title: "Kesariya", singers: ["Arijit Singh"], thumbnail: "https://picsum.photos/seed/kesariya/300/300", mood: ["love"] },
    { id: 4, title: "Phle Pyaar Ka", singers: ["Darshan Raval"], thumbnail: "https://picsum.photos/seed/pehla/300/300", mood: ["nostalgic"] },
    { id: 5, title: "Apna Bana Le", singers: ["Arijit Singh"], thumbnail: "https://picsum.photos/seed/apna/300/300", mood: ["emotional"] },
    { id: 6, title: "Tere Vaaste", singers: ["Varun Jain", "Shreya Ghoshal"], thumbnail: "https://picsum.photos/seed/terevaaste/300/300", mood: ["romantic"] },
];

const trendingSongs = [
    { id: 7, title: "Oo Antava", singers: ["Indravathi Chauhan"], thumbnail: "https://picsum.photos/seed/ooantava/300/300", mood: ["peppy"] },
    { id: 8, title: "Srivalli", singers: ["Sid Sriram"], thumbnail: "https://picsum.photos/seed/srivalli/300/300", mood: ["energetic"] },
    { id: 9, title: "Naatu Naatu", singers: ["Rahul Sipligunj", "Kaala Bhairava"], thumbnail: "https://picsum.photos/seed/naatu/300/300", mood: ["energetic"] },
    { id: 10, title: "Jhoome Jo Pathaan", singers: ["Arijit Singh", "Sukriti Kakar"], thumbnail: "https://picsum.photos/seed/pathaan/300/300", mood: ["peppy"] },
    { id: 11, title: "Besharam Rang", singers: ["Shilpa Rao", "Caralisa Monteiro"], thumbnail: "https://picsum.photos/seed/besharam/300/300", mood: ["bold"] },
    { id: 12, title: "Deva Deva", singers: ["Arijit Singh", "Jonita Gandhi"], thumbnail: "https://picsum.photos/seed/devadeva/300/300", mood: ["devotional"] },
];

const trendingArtists = [
    { id: "a1", name: "Arijit Singh", genre: "Bollywood · Romantic", thumbnail: "https://picsum.photos/seed/arijit/300/300", monthlyListeners: "48M" },
    { id: "a2", name: "Shreya Ghoshal", genre: "Bollywood · Classical", thumbnail: "https://picsum.photos/seed/shreya/300/300", monthlyListeners: "32M" },
    { id: "a3", name: "Darshan Raval", genre: "Indie · Pop", thumbnail: "https://picsum.photos/seed/darshan/300/300", monthlyListeners: "19M" },
    { id: "a4", name: "Sid Sriram", genre: "Tamil · Soul", thumbnail: "https://picsum.photos/seed/sidsriram/300/300", monthlyListeners: "15M" },
    { id: "a5", name: "Jubin Nautiyal", genre: "Bollywood · Soft", thumbnail: "https://picsum.photos/seed/jubin/300/300", monthlyListeners: "22M" },
    { id: "a6", name: "Neha Kakkar", genre: "Bollywood · Peppy", thumbnail: "https://picsum.photos/seed/neha/300/300", monthlyListeners: "26M" },
];

const newAlbums = [
    { id: 13, title: "Animal OST", singers: ["Bhupinder Babbal", "Raghav Chaitanya"], thumbnail: "https://picsum.photos/seed/animal/300/300", mood: ["intense"] },
    { id: 14, title: "Dunki Drop", singers: ["Pritam", "Arijit Singh"], thumbnail: "https://picsum.photos/seed/dunki/300/300", mood: ["emotional"] },
    { id: 15, title: "Rocky Aur Rani", singers: ["Arijit Singh", "Shreya Ghoshal"], thumbnail: "https://picsum.photos/seed/rocky/300/300", mood: ["romantic"] },
    { id: 16, title: "Jawan Prevue", singers: ["Anirudh Ravichander"], thumbnail: "https://picsum.photos/seed/jawan/300/300", mood: ["power"] },
];


const ArtistCard = ({ artist }) => (
    <div className="artist-card">
        <img src={artist.thumbnail} alt={artist.name} className="artist-thumb" />
        <h4 className="artist-name">{artist.name}</h4>
        <p className="artist-genre">{artist.genre}</p>
    </div>
);

const Section = ({ title, children }) => (
    <div className="explore-section">
        <h3 className="section-title">{title}</h3>
        <div className="cards-grid">{children}</div>
    </div>
);


const Explore = () => {
    return (
        <div className="explore">
            <div className="explore-header">
                <h2>Explore</h2>
                <p>Discover new music and artists.</p>
            </div>

            <Section title="Latest Releases">
                {latestSongs.map(song => <SongCard key={song.id} song={song} />)}
            </Section>

            <Section title="Trending Right Now">
                {trendingSongs.map(song => <SongCard key={song.id} song={song} />)}
            </Section>

            <Section title="Trending Artists">
                {trendingArtists.map(artist => <ArtistCard key={artist.id} artist={artist} />)}
            </Section>

            <Section title="New Albums & OSTs">
                {newAlbums.map(song => <SongCard key={song.id} song={song} />)}
            </Section>
        </div>
    );
};

export default Explore;