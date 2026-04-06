const songs = [
  {
    title: "Shape of You",
    singers: ["Ed Sheeran"],
    mood: ["Chill", "Happy", "Romantic"],
    year: 2017,
    album: "Divide",
    duration: "3:53",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    timeStamp: "7:45 PM"
  },
  {
    title: "Blinding Lights",
    singers: ["The Weeknd"],
    mood: ["Energetic", "Night Drive"],
    year: 2019,
    album: "After Hours",
    duration: "3:20",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
    timeStamp: "10:30 PM"
  },
  {
    title: "Tum Hi Ho",
    singers: ["Arijit Singh"],
    mood: ["Sad", "Emotional"],
    year: 2013,
    album: "Aashiqui 2",
    duration: "4:22",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/Umqb9KENgmk/hqdefault.jpg",
    timeStamp: "12:15 AM"
  },
  {
    title: "Kesariya",
    singers: ["Arijit Singh"],
    mood: ["Romantic", "Warm"],
    year: 2022,
    album: "Brahmāstra",
    duration: "4:28",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg",
    timeStamp: "6:50 PM"
  },
  {
    title: "Believer",
    singers: ["Imagine Dragons"],
    mood: ["Motivational", "Energetic"],
    year: 2017,
    album: "Evolve",
    duration: "3:24",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg",
    timeStamp: "7:00 AM"
  },
  {
    title: "Despacito",
    singers: ["Luis Fonsi", "Daddy Yankee"],
    mood: ["Party", "Feel Good"],
    year: 2017,
    album: "Vida",
    duration: "3:47",
    language: "Spanish",
    thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    timeStamp: "9:30 PM"
  },
  {
    title: "Senorita",
    singers: ["Shawn Mendes", "Camila Cabello"],
    mood: ["Romantic", "Chill"],
    year: 2019,
    album: "Single",
    duration: "3:11",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/Pkh8UtuejGw/hqdefault.jpg",
    timeStamp: "8:10 PM"
  },
  {
    title: "Apna Bana Le",
    singers: ["Arijit Singh"],
    mood: ["Soft", "Emotional"],
    year: 2022,
    album: "Bhediya",
    duration: "4:21",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg",
    timeStamp: "11:05 PM"
  },
  {
    title: "Naatu Naatu",
    singers: ["Rahul Sipligunj", "Kaala Bhairava"],
    mood: ["Dance", "Energetic"],
    year: 2022,
    album: "RRR",
    duration: "3:34",
    language: "Telugu",
    thumbnail: "https://c8.alamy.com/comp/2R7R1KD/rrr-naatu-naatu-2022-directed-by-prem-rakshith-2R7R1KD.jpg",
    timeStamp: "5:30 PM"
  },
  {
    title: "Levitating",
    singers: ["Dua Lipa"],
    mood: ["Happy", "Dance"],
    year: 2020,
    album: "Future Nostalgia",
    duration: "3:23",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/TUVcZfQe-Kw/hqdefault.jpg",
    timeStamp: "4:45 PM"
  },
  {
    title: "Perfect",
    singers: ["Ed Sheeran"],
    mood: ["Romantic"],
    year: 2017,
    album: "Divide",
    duration: "4:23",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    timeStamp: "9:00 PM"
  },
  {
    title: "Heat Waves",
    singers: ["Glass Animals"],
    mood: ["Chill"],
    year: 2020,
    album: "Dreamland",
    duration: "3:58",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg",
    timeStamp: "11:20 PM"
  },
  {
    title: "On My Way",
    singers: ["Alan Walker"],
    mood: ["Motivational"],
    year: 2019,
    album: "Single",
    duration: "3:14",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/dhYOPzcsbGM/hqdefault.jpg",
    timeStamp: "6:30 AM"
  },
  {
    title: "Closer",
    singers: ["The Chainsmokers", "Halsey"],
    mood: ["Chill", "Romantic"],
    year: 2016,
    album: "Single",
    duration: "4:05",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/PT2_F-1esPk/hqdefault.jpg",
    timeStamp: "8:25 PM"
  },
  {
    title: "Hawayein",
    singers: ["Arijit Singh"],
    mood: ["Romantic"],
    year: 2017,
    album: "Jab Harry Met Sejal",
    duration: "4:50",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/cYOB941gyXI/hqdefault.jpg",
    timeStamp: "7:10 PM"
  },
  {
    title: "Attention",
    singers: ["Charlie Puth"],
    mood: ["Chill"],
    year: 2017,
    album: "Voicenotes",
    duration: "3:31",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",
    timeStamp: "6:15 PM"
  },
  {
    title: "Love Me Like You Do",
    singers: ["Ellie Goulding"],
    mood: ["Romantic"],
    year: 2015,
    album: "Delirium",
    duration: "4:12",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/AJtDXIazrMo/hqdefault.jpg",
    timeStamp: "9:40 PM"
  },
  {
    title: "Faded",
    singers: ["Alan Walker"],
    mood: ["Sad", "Chill"],
    year: 2015,
    album: "Different World",
    duration: "3:32",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg",
    timeStamp: "12:40 AM"
  },
  {
    title: "Ghungroo",
    singers: ["Arijit Singh", "Shilpa Rao"],
    mood: ["Dance", "Happy"],
    year: 2019,
    album: "War",
    duration: "5:02",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/qFkNATtc3mc/hqdefault.jpg",
    timeStamp: "5:50 PM"
  },
  {
    title: "Stay",
    singers: ["The Kid LAROI", "Justin Bieber"],
    mood: ["Energetic"],
    year: 2021,
    album: "Single",
    duration: "2:21",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/kTJczUoc26U/hqdefault.jpg",
    timeStamp: "3:30 PM"
  },
  {
    title: "Let Me Love You",
    singers: ["DJ Snake", "Justin Bieber"],
    mood: ["Party"],
    year: 2016,
    album: "Encore",
    duration: "3:25",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/SMs0GnYze34/hqdefault.jpg",
    timeStamp: "10:00 PM"
  },
  {
    title: "Channa Mereya",
    singers: ["Arijit Singh"],
    mood: ["Sad"],
    year: 2016,
    album: "Ae Dil Hai Mushkil",
    duration: "4:49",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/284Ov7ysmfA/hqdefault.jpg",
    timeStamp: "1:10 AM"
  },
  {
    title: "Tera Ban Jaunga",
    singers: ["Akhil Sachdeva"],
    mood: ["Romantic"],
    year: 2019,
    album: "Kabir Singh",
    duration: "3:56",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/Qdz5n1Xe5Qo/hqdefault.jpg",
    timeStamp: "8:00 PM"
  },
  {
    title: "Peaches",
    singers: ["Justin Bieber"],
    mood: ["Chill"],
    year: 2021,
    album: "Justice",
    duration: "3:18",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/tQ0yjYUFKAE/hqdefault.jpg",
    timeStamp: "2:15 PM"
  },
  {
    title: "Industry Baby",
    singers: ["Lil Nas X"],
    mood: ["Hype"],
    year: 2021,
    album: "Montero",
    duration: "3:32",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/UTHLKHL_whs/hqdefault.jpg",
    timeStamp: "4:10 PM"
  },
  {
    title: "Raataan Lambiyan",
    singers: ["Jubin Nautiyal"],
    mood: ["Romantic"],
    year: 2021,
    album: "Shershaah",
    duration: "3:50",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/gvyUuxdRdR4/hqdefault.jpg",
    timeStamp: "7:20 PM"
  },
  {
    title: "Lovely",
    singers: ["Billie Eilish"],
    mood: ["Sad", "Emotional"],
    year: 2018,
    album: "Single",
    duration: "3:21",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/V1Pl8CzNzCw/hqdefault.jpg",
    timeStamp: "12:55 AM"
  },
  {
    title: "Bones",
    singers: ["Imagine Dragons"],
    mood: ["Energetic"],
    year: 2022,
    album: "Mercury",
    duration: "2:45",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/TO-_3tck2tg/hqdefault.jpg",
    timeStamp: "3:50 PM"
  },
  {
    title: "Calm Down",
    singers: ["Rema"],
    mood: ["Chill", "Feel Good"],
    year: 2022,
    album: "Rave & Roses",
    duration: "3:39",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/WcIcVapfqXw/hqdefault.jpg",
    timeStamp: "6:05 PM"
  },
  {
    title: "Perfect Strangers",
    singers: ["Jonas Blue"],
    mood: ["Party"],
    year: 2016,
    album: "Blue",
    duration: "3:16",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/EkHTsc9PU2A/hqdefault.jpg",
    timeStamp: "9:50 PM"
  }
  ,
  {
    title: "Perfect",
    singers: ["Ed Sheeran"],
    mood: ["Romantic", "Soft", "Emotional"],
    year: 2017,
    album: "Divide",
    duration: "4:23",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg"
  },
  {
    title: "Faded",
    singers: ["Alan Walker"],
    mood: ["Sad", "Emotional", "Chill"],
    year: 2015,
    album: "Different World",
    duration: "3:32",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg"
  },
  {
    title: "On My Way",
    singers: ["Alan Walker", "Sabrina Carpenter"],
    mood: ["Motivational", "Energetic", "Travel"],
    year: 2019,
    album: "Single",
    duration: "3:13",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/dhYOPzcsbGM/hqdefault.jpg"
  },
  {
    title: "Raataan Lambiyan",
    singers: ["Jubin Nautiyal", "Asees Kaur"],
    mood: ["Romantic", "Calm", "Soft"],
    year: 2021,
    album: "Shershaah",
    duration: "3:50",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/gvyUuxdRdR4/hqdefault.jpg"
  },
  {
    title: "Ranjha",
    singers: ["B Praak", "Jasleen Royal"],
    mood: ["Emotional", "Sad", "Romantic"],
    year: 2021,
    album: "Shershaah",
    duration: "3:48",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/VuG7ge_8I2Y/hqdefault.jpg"
  },
  {
    title: "We Rollin",
    singers: ["Shubh"],
    mood: ["Hype", "Cool", "Chill"],
    year: 2021,
    album: "Single",
    duration: "3:19",
    language: "Punjabi",
    thumbnail: "https://i.ytimg.com/vi/Ml9uJNF_kXk/hqdefault.jpg"
  },
  {
    title: "295",
    singers: ["Sidhu Moose Wala"],
    mood: ["Serious", "Real Talk", "Emotional"],
    year: 2021,
    album: "Moosetape",
    duration: "4:10",
    language: "Punjabi",
    thumbnail: "https://i.ytimg.com/vi/7f0dQ5l3d7g/hqdefault.jpg"
  },
  {
    title: "Tera Ban Jaunga",
    singers: ["Akhil Sachdeva", "Tulsi Kumar"],
    mood: ["Romantic", "Soft", "Emotional"],
    year: 2019,
    album: "Kabir Singh",
    duration: "3:56",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/wxNn6A7Z3zA/hqdefault.jpg"
  },
  {
    title: "Attention",
    singers: ["Charlie Puth"],
    mood: ["Chill", "Groovy", "Attitude"],
    year: 2017,
    album: "Voicenotes",
    duration: "3:31",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg"
  },
  {
    title: "See You Again",
    singers: ["Wiz Khalifa", "Charlie Puth"],
    mood: ["Emotional", "Sad", "Memories"],
    year: 2015,
    album: "Furious 7",
    duration: "3:57",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg"
  },
  {
    title: "Gangnam Style",
    singers: ["PSY"],
    mood: ["Fun", "Dance", "Party"],
    year: 2012,
    album: "PSY 6",
    duration: "3:39",
    language: "Korean",
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg"
  },
  {
    title: "How You Like That",
    singers: ["BLACKPINK"],
    mood: ["Hype", "Powerful", "Energetic"],
    year: 2020,
    album: "The Album",
    duration: "3:01",
    language: "Korean",
    thumbnail: "https://i.ytimg.com/vi/ioNng23DkIM/hqdefault.jpg"
  },
  {
    title: "Cheap Thrills",
    singers: ["Sia"],
    mood: ["Party", "Dance", "Fun"],
    year: 2016,
    album: "This Is Acting",
    duration: "3:31",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/31crA53Dgu0/hqdefault.jpg"
  },
{
    title: "Kar Gayi Chull",
    singers: ["Badshah", "Neha Kakkar"],
    mood: ["Party", "Dance", "Hype"],
    year: 2016,
    album: "Kapoor & Sons",
    duration: "3:07",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/NTHz9ephYTw/hqdefault.jpg"
  },
  {
    title: "Abhi Toh Party Shuru Hui Hai",
    singers: ["Badshah", "Aastha Gill"],
    mood: ["Party", "Hype", "Dance"],
    year: 2014,
    album: "Khoobsurat",
    duration: "2:59",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/8LZgzAZ2lpQ/hqdefault.jpg"
  },
  {
    title: "Nashe Si Chadh Gayi",
    singers: ["Arijit Singh"],
    mood: ["Party", "Dance", "Romantic"],
    year: 2016,
    album: "Befikre",
    duration: "3:57",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/WD8u1kD3p6s/hqdefault.jpg"
  },
  {
    title: "London Thumakda",
    singers: ["Neha Kakkar", "Sonu Kakkar"],
    mood: ["Wedding", "Dance", "Fun"],
    year: 2014,
    album: "Queen",
    duration: "3:50",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/udra3Mfw2oo/hqdefault.jpg"
  },
  {
    title: "Morni Banke",
    singers: ["Guru Randhawa", "Neha Kakkar"],
    mood: ["Dance", "Party", "Wedding"],
    year: 2018,
    album: "Badhaai Ho",
    duration: "3:18",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/1Q4g1Qb4iRk/hqdefault.jpg"
  },
  {
    title: "Proper Patola",
    singers: ["Diljit Dosanjh", "Badshah"],
    mood: ["Party", "Cool", "Dance"],
    year: 2018,
    album: "Namaste England",
    duration: "3:05",
    language: "Punjabi",
    thumbnail: "https://i.ytimg.com/vi/NRk7qKc8Q9Q/hqdefault.jpg"
  },
  {
    title: "High Heels",
    singers: ["Yo Yo Honey Singh", "Jaz Dhami"],
    mood: ["Party", "Dance", "Hype"],
    year: 2016,
    album: "Ki & Ka",
    duration: "3:24",
    language: "Punjabi",
    thumbnail: "https://i.ytimg.com/vi/2d3p6yqXjLk/hqdefault.jpg"
  },
  {
    title: "Bom Diggy Diggy",
    singers: ["Zack Knight", "Jasmin Walia"],
    mood: ["Party", "Dance", "Fun"],
    year: 2018,
    album: "Sonu Ke Titu Ki Sweety",
    duration: "3:58",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/KV7kJcR3p9A/hqdefault.jpg"
  },
  {
    title: "Aankh Marey",
    singers: ["Neha Kakkar", "Mika Singh"],
    mood: ["Party", "Dance", "Hype"],
    year: 2018,
    album: "Simmba",
    duration: "3:32",
    language: "Hindi",
    thumbnail: "https://i.ytimg.com/vi/_KhQT-LGb-4/hqdefault.jpg"
  },
  {
    title: "Dil Chori",
    singers: ["Yo Yo Honey Singh", "Simar Kaur"],
    mood: ["Party", "Dance", "Wedding"],
    year: 2018,
    album: "Sonu Ke Titu Ki Sweety",
    duration: "3:46",
    language: "Punjabi",
    thumbnail: "https://i.ytimg.com/vi/ZmDBbnmKpqQ/hqdefault.jpg"
  }
  
];

export default songs;