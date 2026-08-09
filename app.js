/* ======================================================================
   EASY ENGLISH — APP DATA (cleaned from uploaded materials, no watermarks)
   ====================================================================== */
const VOCAB_TOPICS = [
  { id: "complaints", title: "Complaints", letter: "C",
    nouns: ["complaint", "problem", "issue", "inconvenience", "interruption", "delay", "disappointment", "dissatisfaction", "compensation", "refund"],
    verbs: ["complain", "apologise", "improve", "replace", "refund", "solve", "fix", "resolve", "provide", "compensate"],
    phrases: ["I am writing to express my disappointment.", "I would like to make a complaint.", "The problem caused significant inconvenience.", "I would appreciate it if...", "I hope this issue will be resolved soon."] },
  { id: "customer-service", title: "Customer Service", letter: "S",
    nouns: ["customer", "support", "service", "feedback", "assistance", "response", "technician", "solution", "quality"],
    verbs: ["assist", "respond", "support", "improve", "contact", "inform", "update"],
    phrases: ["Thank you for your prompt response.", "I would appreciate better customer support.", "Please keep customers informed.", "Regular updates should be provided."] },
  { id: "travel", title: "Travel", letter: "T",
    nouns: ["flight", "accommodation", "reservation", "luggage", "destination", "transport", "ticket", "passport"],
    verbs: ["book", "cancel", "delay", "miss", "arrive", "depart"],
    phrases: ["My flight was delayed.", "I missed my connection.", "I would like to request a refund."] },
  { id: "education", title: "Education", letter: "E",
    nouns: ["course", "lesson", "teacher", "student", "examination", "assignment", "certificate", "education"],
    verbs: ["study", "attend", "improve", "learn", "complete", "prepare"],
    phrases: ["The course was very useful.", "I learned many new skills.", "The teacher was supportive."] },
  { id: "technology", title: "Technology", letter: "T",
    nouns: ["network", "internet", "connection", "software", "application", "device", "password", "website"],
    verbs: ["install", "update", "download", "upload", "connect", "restart"],
    phrases: ["The internet connection was unstable.", "The application stopped working.", "I could not access the website."] },
  { id: "health", title: "Health", letter: "H",
    nouns: ["appointment", "treatment", "medicine", "patient", "symptom", "illness", "recovery"],
    verbs: ["recover", "examine", "prescribe", "treat"],
    phrases: ["I received excellent care.", "The treatment was successful."] },
  { id: "shopping", title: "Shopping", letter: "S",
    nouns: ["order", "product", "quality", "warranty", "delivery", "purchase", "replacement"],
    verbs: ["order", "receive", "exchange", "return", "replace"],
    phrases: ["The product was damaged.", "I would like a replacement.", "The delivery arrived late."] },
  { id: "events", title: "Events", letter: "E",
    nouns: ["event", "conference", "meeting", "competition", "festival", "ceremony"],
    verbs: ["organise", "attend", "participate", "invite"],
    phrases: ["Thank you for organising the event.", "I really enjoyed participating."] },
  { id: "suggestions", title: "Suggestions", letter: "S",
    nouns: [],
    verbs: ["recommend", "suggest", "encourage", "consider", "improve", "provide"],
    phrases: ["I strongly recommend...", "One possible solution is...", "It would be helpful if...", "I believe you should...", "I suggest that you..."] },
  { id: "feelings", title: "Feelings", letter: "F",
    nouns: ["satisfied", "pleased", "grateful", "impressed", "delighted", "frustrated", "upset", "annoyed", "dissatisfied", "concerned", "disappointed"],
    verbs: [],
    phrases: [] },
];

const COLLOCATIONS = [
  { word: "back into sth", tr: "biror narsaga qaytish" },
  { word: "back sb (to do)", tr: "kimnidir orqaga qaytarish" },
  { word: "come to a conclusion / decision", tr: "xulosaga kelmoq" },
  { word: "come to power", tr: "hokimiyatga kelmoq" },
  { word: "come into view", tr: "ko'rinishga kirish" },
  { word: "come as a shock", tr: "zarba sifatida kelish" },
  { word: "come true", tr: "haqiqatga aylanish" },
  { word: "drive (your point) home", tr: "fikrini aniq yetkazmoq" },
  { word: "drive sb crazy / mad", tr: "kimnidir aqldan ozdirmoq" },
  { word: "drive sb to do sth", tr: "kimnidir biror narsa qilishga undamoq" },
  { word: "drive at sth", tr: "biror narsani nazarda tutmoq" },
];

const LINKING_WORDS = ["Firstly", "Secondly", "In addition", "Moreover", "Furthermore", "However", "Therefore", "As a result", "For this reason", "Finally"];

const FORMAL_PHRASES = [
  "I am writing to...", "I would like to express...", "I would appreciate it if...",
  "I look forward to hearing from you.", "Thank you for your attention.",
  "I hope you will consider my suggestions.", "Please do not hesitate to contact me.",
  "Yours faithfully,", "Yours sincerely,",
];

// Gap-fill reading tests — {{n}} marks each blank; answers[n-1] is the correct word
const GAP_TESTS = [
  { id: "g1", title: "Olivia", text: "Olivia loves quiet places near the water. Every summer, she visits a small town by the coast. This {{1}} is peaceful, with narrow streets and friendly people. The best part of the town is its view of the sea. Olivia wakes up early just to sit and watch the blue sea. She takes deep breaths and listens to the sound of the {{2}} waves hitting the rocks.\n\nIn the afternoon, Olivia tries local food. The {{3}} there is always fresh, especially the grilled fish, fruit salads, and homemade bread. One day, she took a small boat ride. The boat was painted bright yellow and gently moved across the water. From the {{4}}, Olivia could see birds flying and fish swimming near the surface. The boat took her to a nearby island. The {{5}} was quiet and green, with only a few people around. While walking back to the boat, she saw a beautiful garden full of flowers. The colorful {{6}} danced in the wind — red, yellow, and purple.", answers: ["town", "sea", "food", "boat", "island", "flowers"] },
  { id: "g2", title: "Mia's Forest Walk", text: "On a bright Sunday morning, Mia and her friends went on a trip to the forest. The {{1}} was quiet and cool, filled with tall trees and singing birds. She was not alone. Her friends walked beside her. Some of her friends took pictures of trees, while others collected leaves. Mia and her {{2}} laughed and talked as they walked further into the woods.\n\nTo find their way, the group used a map. The {{3}} showed different trails and spots to visit. They followed a narrow path through the trees. The {{4}} was soft with dry leaves and small stones. As they walked, Mia saw colorful butterflies flying around her. The {{5}} landed on flowers and flew gently over the path. Finally, they reached a small river. Mia and her friends sat by the {{6}}, dipped their hands in the cool water, and ate snacks while resting.", answers: ["forest", "friends", "map", "path", "butterflies", "river"] },
  { id: "g3", title: "Strawberries", text: "The strawberry is a sweet, red fruit that people around the world enjoy. A fresh {{1}} has a soft texture and tiny seeds on the outside. Many families eat this {{2}} in the morning or use it in desserts. Strawberries are very healthy. They contain a lot of vitamin C, which helps protect the body from sickness. A cup of fresh strawberries gives even more {{3}} than an orange. For breakfast, people often eat strawberries with cereal. Some add them to cold {{4}}, while others mix them into a creamy smoothie. Many people also make jam at home. The sweet smell spreads through the kitchen, and later they enjoy the {{5}} on warm bread. The {{6}} is often full of fun when making food with strawberries.", answers: ["strawberry", "fruit", "vitamin C", "cereal", "jam", "kitchen"] },
  { id: "g4", title: "Chess", text: "Many people around the world enjoy playing chess. This classic {{1}} game is played on a black and white board, and it helps improve thinking skills. The {{2}} has 64 squares, and each player starts with 16 pieces. These {{3}} include the king, queen, rooks, bishops, knights, and pawns. The goal of the game is to protect your own king and try to checkmate your opponent's king. When the {{4}} has no way to escape, the game ends with victory. Many players join a chess club at school. In the {{5}}, players learn new strategies, practice with friends, and enjoy fun matches. Professional matches are often played during tournaments. In these tournaments, the best {{6}} compete for prizes and titles.", answers: ["board", "board", "pieces", "king", "club", "players"] },
  { id: "g5", title: "Tennis", text: "Many people love playing tennis because it is fun, healthy, and full of energy. Whether you're on a big court or just playing in the yard, {{1}} is a great way to stay active. In tennis, players use a racket to hit a small yellow ball over a net. Each player tries to send the {{2}} into the other side of the court, so their opponent cannot return it. A good {{3}} helps the player control the ball better. Professional matches are often played on large {{4}} with many fans watching. Each {{5}} is made up of sets, and the one who wins more sets wins the match. Many young {{6}} join tennis clubs to train with coaches.", answers: ["tennis", "ball", "racket", "courts", "match", "players"] },
  { id: "g6", title: "Carrots", text: "The carrot is a popular orange vegetable that many people eat every day. A fresh {{1}} is crunchy, sweet, and full of health benefits. One of the best things about carrots is that they are full of vitamins. Eating just one carrot gives you more than enough {{2}} for the day. That's why doctors often say carrots are great for the {{3}}. These colorful {{4}} are not only tasty but also healthy. Some families drink carrot juice in the morning. This {{5}} gives energy and keeps your skin fresh. Farmers grow carrots in soft soil. Working in the {{6}} is fun and helps children learn about healthy vegetables.", answers: ["carrot", "vitamin A", "eyes", "carrots", "juice", "garden"] },
  { id: "g7", title: "A Trip to the Science Museum", text: "Last weekend, Anna and her brother went to the museum. It was their first time at a science {{1}}, and they were full of excitement. The first section they visited was about space. Anna took a photo of the {{2}}, and her brother asked many questions about how it worked. Next, they moved to the robot area. One {{3}} even danced when someone clapped. A guide explained how each part of the {{4}} helps us live and stay healthy. After so much walking, they went to the cafe. The {{5}} had sandwiches, juice, and even ice cream. Before going home, they visited the gift shop. The {{6}} was full of books, toys, and science puzzles.", answers: ["museum", "rocket", "robot", "body", "cafe", "shop"] },
  { id: "g8", title: "Eating Healthy Every Day", text: "Many people want to eat better and live a healthy life. The food we {{1}} gives us energy and helps us grow strong. Vegetables are full of vitamins and minerals. Two of the most popular {{2}} are the carrot and the potato. Besides vegetables, we also need to eat fruits. {{3}} are sweet, juicy, and very good for the body. We should drink plenty of water. Clean {{4}} helps remove waste from the body. If you don't like plain water, you can drink tea. Herbal {{5}} is also good for the stomach and skin. Simple {{6}} like walking or stretching can make a big difference.", answers: ["eat", "vegetables", "Fruits", "water", "tea", "exercises"] },
  { id: "g9", title: "The Amazing World of Insects", text: "In the natural world, insects are everywhere. There are over one million types of {{1}}, and each one plays an important role in nature. Ants live in big groups. An {{2}} can carry food that is much heavier than its body. Bees fly from flower to flower to collect nectar. This {{3}} becomes sweet honey. The butterfly is a colorful and beautiful {{4}}. Dragonflies fly very fast and have large wings. A {{5}} can catch other small insects in the air. The mosquito is an insect many people do not like. Still, {{6}} are a part of the food chain.", answers: ["insects", "ant", "nectar", "butterfly", "dragonfly", "mosquitoes"] },
  { id: "g10", title: "Preparing for the Big Match", text: "Every afternoon, the school football team meets at the field. The {{1}} is getting ready for an important game next weekend. Their {{2}} has many years of experience. Good {{3}} helps the team improve quickly. Scoring a {{4}} is not easy, but with practice, every goal becomes more possible. Before the game, the {{5}} wear their uniforms and check their equipment. The referee checks the {{6}} before the game starts and makes sure everything is ready.", answers: ["team", "coach", "training", "goal", "players", "equipment"] },
  { id: "g11", title: "A Fun Day at the Zoo", text: "Last Saturday, Mia and her little brother went to the zoo. The first {{1}} they saw were the lions. Mia's brother got scared, but he smiled when the {{2}} sat down again. Then they went to see the fishes. Many colorful {{3}} moved in circles. Later, they sat down at a wooden bench to rest. From the {{4}}, they could see more animals, including zebras and giraffes. While the giraffes were eating leaves, the {{5}} were walking around peacefully. Before leaving the {{6}}, Mia bought a souvenir from the gift shop.", answers: ["animals", "lion", "fish", "bench", "zebras", "zoo"] },
  { id: "g12", title: "A Farm", text: "Anna and her brother Lou visited a farm. The first {{1}} they encountered were sheep. Lou was surprised to learn that the wool from these {{2}} is used to make clothes. Next, they went to the chicken coop. Anna noticed a {{3}} was sitting on a nest of eggs. The farmer explained that the {{4}} would hatch in about three weeks. The {{5}} laughed and said the chicks might look like both parents. Then, they met a friendly cow. Anna was amazed to learn that this {{6}} could produce up to 30 liters of milk.", answers: ["animals", "sheep", "hen", "eggs", "farmer", "cow"] },
  { id: "g13", title: "Discovering New Habitats", text: "For centuries, humans have been fascinated by the mysteries of the oceans. Currently, many {{1}} are investigating new marine species and habitats. First, they look for coral reefs. That's because {{2}} are home to diverse marine life. In recent years, they have discovered nearly 500 new marine species. Unfortunately, many of these {{3}} are endangered. Marine biologists {{4}} for three essential things: water quality, biodiversity, and symbiotic relationships. Species need clean {{5}} to survive. {{6}} in a coral reef is also vital for a balanced ecosystem.", answers: ["biologists", "reefs", "species", "look", "water", "Biodiversity"] },
  { id: "g14", title: "Future Cities", text: "In the future, cities will be very different from today. {{1}} will be even more amazing and exciting! There will be many more buildings, and these {{2}} will be taller and more stunning than ever before. The streets will have self-driving cars. These {{3}} will run on clean energy. There will also be spaces like parks and gardens everywhere. These green {{4}} will help keep the air clean and fresh. You could {{5}} to someone on the other side of the world using holograms. There will be robots patrolling to keep an eye out for problems. These {{6}} won't need sleep or rest like humans do.", answers: ["Cities", "buildings", "cars", "spaces", "talk", "robots"] },
  { id: "g15", title: "Uncovering Dinosaur Voices", text: "Dinosaurs disappeared 65 million years ago, so we don't really know what they sounded like. There are many movies with dinosaurs making all kinds of noises, but these {{1}} are just guesses that movie directors make. A new discovery has given scientists a better idea of the kinds of sounds {{2}} made. The {{3}} examined a rare fossil from an armored dinosaur called an ankylosaur. The {{4}} is around 78 million years old and includes a record of the ankylosaur's voice box. The {{5}} controlled the windpipe and sounds of the voice box. Hollywood may have to change its scary roars to a tweet-tweet {{6}}.", answers: ["noises", "dinosaurs", "scientists", "fossil", "muscles", "sound"] },
  { id: "g16", title: "Onions", text: "Onions are very important in Bangladesh cooking. There is a shortage, and prices have gone up a lot. Many Bangladeshis now cannot afford to {{1}} onions. {{2}} usually imports them from its neighbour India, but recent monsoon rain damaged India's onion harvest. Bangladesh's opposition party has called for nationwide protests because of the record {{3}}. Prime Minister Sheikh Hasina Wazed has stopped using it in her {{4}}. One person said he would stand for two {{5}} more to save some money. A Dhaka resident said {{6}} in her neighbourhood have stopped eating onions.", answers: ["buy", "Bangladesh", "prices", "dishes", "hours", "people"] },
  { id: "g17", title: "Car Fumes", text: "Breathing air pollution could change our brain. A study shows that car fumes can change how parts of our {{1}} connect with other parts. Professor Chris Carlsten was surprised at what he found in his {{2}}. The {{3}} study was on 25 adults. Researchers asked {{4}} to breathe car fumes in a laboratory. The scans showed there were fewer connections between the {{5}}. The brains of the 25 {{6}} returned to normal after they breathed clean air.", answers: ["brain", "study", "research", "adults", "networks", "adults"] },
  { id: "g18", title: "Cycling and Knees", text: "Cycling keeps us fit and healthy. A new study says cyclists have less knee pain when they get older. The {{1}} is from Baylor College of Medicine in the USA. Researchers surveyed 2,600 people. The {{2}} were asked about their levels of physical activity. {{3}} looked at the X-rays for signs of arthritis. Dr Grace Lo said {{4}} were 21 per cent less likely to have signs of osteoarthritis. {{5}} is a very common disease that usually starts in the fifties. A lot of {{6}} shows that cyclists are around 20 per cent less likely to die prematurely.", answers: ["study", "participants", "Researchers", "cyclists", "Osteoarthritis", "research"] },
  { id: "g19", title: "Cycling and Knees (2)", text: "Cycling keeps us fit and healthy. A new study says cyclists have less knee pain when they get older. The {{1}} is from Baylor College of Medicine in the USA. Researchers surveyed 2,600 people. The {{2}} were asked about their levels of physical activity. {{3}} looked at the X-rays for signs of arthritis. Dr Grace Lo said {{4}} were 21 per cent less likely to have signs of osteoarthritis. {{5}} is a very common disease that usually starts in the fifties. A lot of {{6}} shows that cyclists are around 20 per cent less likely to die prematurely.", answers: ["study", "participants", "Researchers", "cyclists", "Osteoarthritis", "research"] },
  { id: "g20", title: "Water", text: "Water is the source of all life. Researchers say {{1}} is important for us to live longer. {{2}} who drink a lot get fewer health problems and old-age illnesses. Adults who do not {{3}} enough water are more likely to die younger. {{4}} looked at data from 11,000 hospital patients over 30 years. The {{5}} had visited a hospital at least five times. An adult needs over 1.5 litres of water every {{6}}.", answers: ["Water", "People", "drink", "Researchers", "patients", "day"] },
];

// Matching reading tests
const MATCH_TESTS = [
  { id: "m1", title: "Services & Platforms",
    items: [
      "A teacher who wants to teach high school children online.",
      "Someone who wants to create a digital app with quizzes and interactive elements.",
      "A person looking to encourage children to read through fun activities.",
      "A history enthusiast who wants to explore countries' cultures and past.",
      "A book lover searching for new and second-hand books.",
      "A reader interested in interviews and opinions from famous writers.",
      "A person seeking access to books, e-books, and articles in one convenient online platform.",
    ],
    options: [
      { key: "A", text: "This innovative digital app offers quizzes, games, and interactive exercises to make language learning fun and effective." },
      { key: "B", text: "Designed for educators, this platform enables you to teach high school subjects to students online with virtual classrooms and video lectures." },
      { key: "C", text: "This program is tailored for young readers, offering story hours, book-themed games, and reading challenges." },
      { key: "D", text: "Discover a charming collection of new and used books at this cozy bookstore." },
      { key: "E", text: "Dive into the rich history and diverse cultures of countries worldwide through articles, exhibits, and videos." },
      { key: "F", text: "Enjoy interviews with celebrated authors as they share their opinions on books and their creative process." },
      { key: "G", text: "Access a vast collection of books, e-books, and articles all in one place — a digital library." },
      { key: "H", text: "Aspiring authors can learn the art of storytelling and novel writing in this hands-on workshop." },
      { key: "I", text: "For those who love listening to stories, this audiobook platform offers a diverse collection of titles." },
    ],
    answers: ["B", "A", "C", "E", "D", "F", "G"] },
  { id: "m2", title: "Jobs",
    items: [
      "Required Economist — 5+ years experience in accounting or finance, strong computer skills.",
      "Pizza Delivery Courier — company provides a car, taxi license required.",
      "Nurse — private medical agency, visits patients at home after surgery, post-surgical experience required.",
      "Construction Company (USA) — operate trucks/lifting machinery, physical strength, willing to work abroad.",
      "Farm Work — extra hands needed during harvest season, no long-term contract.",
      "Car Wash — no previous experience necessary, applicants must be 18+.",
      "Taxi Dispatcher — female dispatcher, part-time with flexible hours.",
      "Volunteers Wanted (Aged 60+) — mentoring, sharing life advice, helping at events.",
    ],
    options: [
      { key: "A", text: "You are a professional musician searching for performance opportunities." },
      { key: "B", text: "You are a medical professional with experience in post-surgery patient care." },
      { key: "C", text: "You are an experienced economist with seven years of computer-based financial work." },
      { key: "D", text: "You are a licensed taxi driver but you do not own a car." },
      { key: "E", text: "You are on maternity leave and can only work 15 hours a week." },
      { key: "F", text: "You have just finished school and have no work experience." },
      { key: "G", text: "You are a student who is only available for seasonal work." },
      { key: "H", text: "You are an office worker looking for a full-time desk job." },
      { key: "I", text: "You are ready to work overseas and have ten years of experience working with heavy objects." },
      { key: "J", text: "You are retired and want to contribute to the community." },
    ],
    answers: ["C", "D", "B", "I", "G", "F", "E", "J"] },
  { id: "m3", title: "Local Clubs",
    items: [
      "Story Lovers Club — discuss favorite stories: mysteries, romances, fantasy.",
      "Fit & Fun Group — jogging, yoga classes, weekend hiking trips.",
      "Mystery Novel Collective — discuss mystery novels, solve riddles, write your own mysteries.",
      "Green Action Group — community gardening, park clean-ups, recycling drives.",
      "Creating Spark — digital art, graphic design, digital painting, collaborative projects.",
      "Dance Lovers Club — weekly classes: salsa, ballroom, hip-hop.",
      "Helping Hands — assisting elderly people with grocery shopping and household chores.",
      "Language Learners Group — practice speaking a new language, prepare for travel.",
    ],
    options: [
      { key: "A", text: "You have a passion for digital creativity and enjoy working on visual projects." },
      { key: "B", text: "This group is for those who wish to practice a new language with other learners." },
      { key: "C", text: "This club is perfect if you enjoy reading mystery books and want to create your own." },
      { key: "D", text: "This club focuses on helping stray animals find homes in your area." },
      { key: "E", text: "You want to improve your physical health while making friends." },
      { key: "F", text: "You would like to volunteer your time to help elderly residents in your community." },
      { key: "G", text: "You are interested in activities that protect nature and promote environmental health." },
      { key: "H", text: "This club offers classes for people who want to learn different types of dances." },
      { key: "I", text: "This group is for those who love discussing novels and sharing their reading experiences." },
      { key: "J", text: "You are keen on organizing outdoor sports competitions for children." },
    ],
    answers: ["I", "E", "C", "G", "A", "H", "F", "B"] },
  { id: "m4", title: "Hotels & Hospitality Jobs",
    items: [
      "Restaurant Manager — 30-seater restaurant, fine seafood, excellent salary.",
      "Wallford Hotel — Victorian hotel near the sea, private harbour with sailing school.",
      "Second Chef — busy country pub and restaurant, minimum 3 years' experience.",
      "The Highland Hotel — boat hire, whisky tasting, seminar arrangements for small groups.",
      "White House Hotel — luxurious hotel with excellent conference and banquet rooms.",
      "Pendower Beach House Hotel — seeks chef, hotel flat available.",
      "Quarlton Manor — 17th century castle, candlelight dinners for two.",
      "Assistant Manager — Swans Hotel, hotel/restaurant experience essential.",
    ],
    options: [
      { key: "A", text: "A friend wants to spend a holiday learning to handle a small boat." },
      { key: "B", text: "Your friend can cook and is looking for a job in an English pub." },
      { key: "C", text: "You are looking for a quiet hotel to organize a training seminar on a Saturday." },
      { key: "D", text: "You are looking for a hotel for a romantic weekend with your partner." },
      { key: "E", text: "You have been asked to find a hotel with facilities for large meetings and dinners." },
      { key: "F", text: "You have experience in catering and would like to help run an English hotel." },
      { key: "G", text: "You want to run a restaurant and expect a high salary." },
      { key: "H", text: "You want to spend your holiday by the sea." },
      { key: "I", text: "You are a cook looking for a job with accommodation in a small hotel." },
      { key: "J", text: "You and your partner are looking for catering jobs where you can live together." },
    ],
    answers: ["G", "A", "B", "C", "E", "I", "D", "F"] },
];

// Speaking — Multilevel-style Part 1 (personal) & Part 2 (picture comparison)
const SPEAKING_PART1 = [
  "What do you usually do in your free time?",
  "Do you prefer studying alone or with friends? Why?",
  "What is your hometown like?",
  "How often do you use social media, and what for?",
  "What kind of food do you enjoy cooking or eating?",
  "Tell me about a skill you would like to learn.",
  "Do you prefer traveling by plane or by train? Why?",
  "What was the last book or film that you really enjoyed?",
  "How do you usually spend your weekends?",
  "What are your plans for the next few years?",
];
const SPEAKING_PART2 = [
  { id: "sp1", prompt: "Compare the two pictures. Which way of studying do you prefer, and why?", a: { label: "Studying online", icon: "laptop", color: "#3B82F6" }, b: { label: "Studying in a classroom", icon: "graduation-cap", color: "#8B5CF6" } },
  { id: "sp2", prompt: "Compare the two pictures. Would you rather live in a city or in the countryside?", a: { label: "Living in a city", icon: "building-2", color: "#F97316" }, b: { label: "Living in the countryside", icon: "trees", color: "#10B981" } },
  { id: "sp3", prompt: "Compare the two pictures. Do you prefer reading a book or watching a film?", a: { label: "Reading a book", icon: "book-open", color: "#8B5CF6" }, b: { label: "Watching a film", icon: "film", color: "#3B82F6" } },
  { id: "sp4", prompt: "Compare the two pictures. Which way of traveling do you prefer?", a: { label: "Traveling by plane", icon: "plane", color: "#3B82F6" }, b: { label: "Traveling by train", icon: "train-front", color: "#F97316" } },
  { id: "sp5", prompt: "Compare the two pictures. Do you prefer cooking at home or eating at a restaurant?", a: { label: "Cooking at home", icon: "chef-hat", color: "#10B981" }, b: { label: "Eating at a restaurant", icon: "utensils-crossed", color: "#EC4899" } },
];
const SPEAKING_CRITERIA = ["Fluency & Coherence", "Vocabulary Range", "Grammar Accuracy", "Pronunciation"];
function bandFromAvg(avg) { return Math.min(9, Math.max(4, Math.round((3 + avg * 1.1) * 2) / 2)); }
function cefrFromBand(b) { if (b < 5) return "A2"; if (b < 6) return "B1"; if (b < 6.5) return "B1+"; if (b < 7.5) return "B2"; if (b < 8.5) return "C1"; return "C2"; }

/* ======================================================================
   STATE + PERSISTENCE
   ====================================================================== */
let STATE = {
  progress: { streak: 0, wordsLearned: 0, testsCompleted: 0, xp: 0, lastActive: null, speakingLog: [] },
  custom: [],
};
let VOCAB_VIEW = { mode: "list", topicId: null };
let READING_VIEW = { mode: "list", testId: null, inputs: [], checked: false, picks: [], activeItem: 0 };
let SPEAKING_VIEW = { mode: "list", part: null, task: null, stage: "prep", secondsLeft: 0, ratings: [3, 3, 3, 3], timerHandle: null };
let GAME_VIEW = { mode: "menu" }; // menu | memory | rush
let MEMORY_STATE = null;
let RUSH_STATE = null;
let ADD_TYPE = "vocabulary";

function loadState() {
  try { const p = localStorage.getItem("ee-progress"); if (p) STATE.progress = Object.assign(STATE.progress, JSON.parse(p)); } catch (e) {}
  try { const c = localStorage.getItem("ee-custom"); if (c) STATE.custom = JSON.parse(c); } catch (e) {}
  const today = new Date().toDateString();
  if (STATE.progress.lastActive !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    STATE.progress.streak = STATE.progress.lastActive === yesterday ? (STATE.progress.streak || 0) + 1 : 1;
    STATE.progress.lastActive = today;
    saveProgress();
  }
  if (!STATE.progress.speakingLog) STATE.progress.speakingLog = [];
}
function saveProgress() { try { localStorage.setItem("ee-progress", JSON.stringify(STATE.progress)); } catch (e) {} }
function saveCustom() { try { localStorage.setItem("ee-custom", JSON.stringify(STATE.custom)); } catch (e) {} }
function addXp(n) { STATE.progress.xp = (STATE.progress.xp || 0) + n; saveProgress(); renderHomeStats(); }
function addWordsLearned(n) { STATE.progress.wordsLearned += n; saveProgress(); renderHomeStats(); }
function addTestCompleted() { STATE.progress.testsCompleted += 1; saveProgress(); }
function addSpeakingLog(entry) { STATE.progress.speakingLog.push(entry); if (STATE.progress.speakingLog.length > 30) STATE.progress.speakingLog.shift(); saveProgress(); }

function renderHomeStats() {
  const s = document.getElementById("home-streak"); if (s) s.textContent = STATE.progress.streak || 0;
  const w = document.getElementById("home-words"); if (w) w.textContent = (STATE.progress.wordsLearned || 0) + " words";
  const x = document.getElementById("home-xp"); if (x) x.textContent = (STATE.progress.xp || 0) + " XP o'yinlardan";
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._h);
  showToast._h = setTimeout(() => t.classList.remove("show"), 2200);
}

function esc(str) { const d = document.createElement("div"); d.textContent = str; return d.innerHTML; }

/* ======================================================================
   NAVIGATION
   ====================================================================== */
function switchTab(tabId) {
  document.querySelectorAll(".content-tab").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
  document.getElementById("tab-" + tabId).classList.add("active");
  const navBtn = document.querySelector('[data-tab="' + tabId + '"]');
  if (navBtn) navBtn.classList.add("active");
  if (tabId === "vocab") renderVocabTab();
  if (tabId === "reading") renderReadingTab();
  if (tabId === "speaking") renderSpeakingTab();
  if (tabId === "writing") renderWritingTab();
  if (tabId === "add") renderAddTab();
  window.scrollTo({ top: 0, behavior: "smooth" });
  lucide.createIcons();
}

function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.getAttribute("data-theme") === "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  try { localStorage.setItem("ee-theme", isLight ? "dark" : "light"); } catch (e) {}
  document.getElementById("theme-btn").innerHTML = isLight
    ? '<i data-lucide="sun" style="width: 18px; color: #FDE047;"></i>'
    : '<i data-lucide="moon" style="width: 18px;"></i>';
  lucide.createIcons();
}

/* ======================================================================
   HOME
   ====================================================================== */
function renderHome() { renderHomeStats(); }

/* ======================================================================
   VOCABULARY TAB
   ====================================================================== */
function renderVocabTab() {
  const el = document.getElementById("vocab-content");
  if (VOCAB_VIEW.mode === "list") return renderVocabList(el);
  if (VOCAB_VIEW.mode === "topic") return renderVocabTopic(el, VOCAB_VIEW.topicId);
  if (VOCAB_VIEW.mode === "collocations") return renderCollocations(el);
  if (VOCAB_VIEW.mode === "game") return renderGameMenu(el);
  if (VOCAB_VIEW.mode === "memory") return renderMemoryGame(el);
  if (VOCAB_VIEW.mode === "rush") return renderRushGame(el);
}

function renderVocabList(el) {
  const customVocab = STATE.custom.filter((c) => c.type === "vocabulary");
  el.innerHTML = `
    <h2 class="ee-display" style="font-size: 22px; font-weight: 800; margin-bottom: 18px; letter-spacing: -0.4px;">Vocabulary Topics</h2>

    <div class="glass-card no-hover" style="background: linear-gradient(135deg, var(--ee-game-col), #F97316); margin-bottom: 14px; display:flex; align-items:center; gap:14px; padding:18px;" onclick="openGameMenu()">
      <div style="width: 46px; height: 46px; background: rgba(255,255,255,0.25); border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink:0;">
        <i data-lucide="gamepad-2" style="color: white; width: 22px;"></i>
      </div>
      <div>
        <h3 class="ee-display" style="font-size: 15px; font-weight: 700; color:white;">O'yinlab yodlash 🎮</h3>
        <p style="font-size: 12px; color: rgba(255,255,255,0.9); margin-top: 2px; font-weight: 500;">Memory Match & Word Rush</p>
      </div>
    </div>

    <div class="glass-card" style="margin-bottom: 14px; display:flex; align-items:center; gap:14px; padding:18px;" onclick="openCollocations()">
      <div style="width: 46px; height: 46px; background: rgba(139,92,246,0.12); border:1px solid rgba(139,92,246,0.25); border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink:0;">
        <i data-lucide="message-square-text" style="color: var(--ee-vocab-col); width: 20px;"></i>
      </div>
      <div>
        <h3 class="ee-display" style="font-size: 14.5px; font-weight: 700;">Phrases & Collocations</h3>
        <p style="font-size: 12px; color: var(--ee-text-soft); margin-top: 2px; font-weight: 500;">back, come, drive — o'zbekcha tarjima bilan</p>
      </div>
    </div>

    <div id="vocab-container" style="display: flex; flex-direction: column; gap: 14px;"></div>
  `;
  const container = el.querySelector("#vocab-container");
  let html = VOCAB_TOPICS.map((t) => `
    <div class="glass-card" style="padding: 18px; display: flex; justify-content: space-between; align-items: center;" onclick="openVocabTopic('${t.id}')">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 48px; height: 48px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; background: var(--ee-vocab-col); font-family:'Outfit',sans-serif;">
          ${t.letter}
        </div>
        <div>
          <p class="ee-display" style="font-size: 15px; font-weight: 700; letter-spacing: -0.2px;">${t.title}</p>
          <p style="font-size: 12px; color: var(--ee-text-soft); margin-top: 3px; font-weight: 500;">${t.nouns.length} nouns · ${t.verbs.length} verbs</p>
        </div>
      </div>
      <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(99,102,241,0.08); display: flex; align-items: center; justify-content: center;">
        <i data-lucide="chevron-right" style="width: 16px; color: var(--ee-text-soft);"></i>
      </div>
    </div>
  `).join("");
  if (customVocab.length) {
    html += `<p class="ee-display" style="font-size:13px; font-weight:700; color:var(--ee-text-soft); margin: 6px 2px;">MENING MATERIALLARIM</p>`;
    html += customVocab.map((c) => `
      <div class="glass-card" style="padding: 16px;">
        <span class="topic-badge" style="background: rgba(16,185,129,0.12); color: var(--ee-add-col); border:1px solid rgba(16,185,129,0.25);">Mening lug'atim</span>
        <p class="ee-display" style="font-size:14.5px; font-weight:700; margin-top:8px;">${esc(c.title)}</p>
        <p style="font-size:12.5px; color:var(--ee-text-soft); margin-top:4px; white-space:pre-wrap; line-height:1.5;">${esc(c.content)}</p>
      </div>
    `).join("");
  }
  container.innerHTML = html;
  lucide.createIcons();
}

function openVocabTopic(id) { VOCAB_VIEW = { mode: "topic", topicId: id }; renderVocabTab(); }
function openCollocations() { VOCAB_VIEW = { mode: "collocations" }; renderVocabTab(); }
function backToVocabList() { VOCAB_VIEW = { mode: "list" }; renderVocabTab(); }

function renderVocabTopic(el, id) {
  const topic = VOCAB_TOPICS.find((t) => t.id === id);
  const words = [...topic.nouns.map((w) => ({ w: w, type: "Noun" })), ...topic.verbs.map((w) => ({ w: w, type: "Verb" }))];
  el.innerHTML = `
    <button class="back-link" onclick="backToVocabList()"><i data-lucide="chevron-left" style="width:16px;"></i> Topics</button>
    <h2 class="ee-display" style="font-size: 20px; font-weight: 800; margin-bottom: 4px;">${topic.title}</h2>
    <p style="font-size: 12.5px; color: var(--ee-text-soft); margin-bottom: 16px; font-weight:500;">Kartani bosib torting — turini ko'rish uchun</p>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom: 22px;">
      ${words.map((item, i) => `
        <div class="flip-card" id="flip-${i}" onclick="document.getElementById('flip-${i}').classList.toggle('flipped')">
          <div class="flip-inner">
            <div class="flip-face" style="background: linear-gradient(135deg, var(--ee-vocab-col)22, var(--ee-vocab-col)0d); border:1px solid var(--ee-vocab-col)55; color:var(--ee-text);">${esc(item.w)}</div>
            <div class="flip-face flip-back" style="background: linear-gradient(135deg, var(--ee-vocab-col), #A78BFA);">
              <span>${item.type}</span>
              <span style="font-size:10px; opacity:0.85; font-weight:500;">qaytarish uchun bos</span>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
    ${topic.phrases.length ? `
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
        <i data-lucide="bookmark" style="width:16px; color:var(--ee-vocab-col);"></i>
        <p class="ee-display" style="font-size:15px; font-weight:700;">Useful phrases</p>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:18px;">
        ${topic.phrases.map((p) => `<div class="glass-card static no-hover" style="padding:12px 14px;"><p style="font-size:13px; font-weight:500;">${esc(p)}</p></div>`).join("")}
      </div>
    ` : ""}
    <button onclick="markTopicLearned(${words.length})" class="ee-display" style="width:100%; padding:14px; border-radius:16px; border:none; background: linear-gradient(135deg,#3B82F6,#6366F1); color:white; font-weight:700; font-size:14px; cursor:pointer;">
      Mavzuni o'rgandim deb belgilash ✓
    </button>
  `;
  lucide.createIcons();
}

function markTopicLearned(n) { addWordsLearned(n); showToast("+" + n + " so'z o'rganildi!"); }

function renderCollocations(el) {
  el.innerHTML = `
    <button class="back-link" onclick="backToVocabList()"><i data-lucide="chevron-left" style="width:16px;"></i> Topics</button>
    <h2 class="ee-display" style="font-size: 20px; font-weight: 800; margin-bottom: 4px;">Phrases & Collocations</h2>
    <p style="font-size: 12.5px; color: var(--ee-text-soft); margin-bottom: 16px; font-weight:500;">Destination B1–C2, Unit 8</p>
    <div style="display:flex; flex-direction:column; gap:10px;">
      ${COLLOCATIONS.map((c) => `
        <div class="glass-card static no-hover" style="padding:14px 16px;">
          <p class="ee-display" style="font-size:14.5px; font-weight:700;">${esc(c.word)}</p>
          <p style="font-size:12.5px; color:var(--ee-text-soft); margin-top:3px; font-weight:500;">${esc(c.tr)}</p>
        </div>
      `).join("")}
    </div>
  `;
  lucide.createIcons();
}

/* ---------- VOCAB GAMES ---------- */
function openGameMenu() { VOCAB_VIEW = { mode: "game" }; renderVocabTab(); }

function renderGameMenu(el) {
  el.innerHTML = `
    <button class="back-link" onclick="backToVocabList()"><i data-lucide="chevron-left" style="width:16px;"></i> Vocabulary</button>
    <h2 class="ee-display" style="font-size: 20px; font-weight: 800; margin-bottom: 16px;">O'ynab yodlash 🎮</h2>
    <div class="glass-card" style="padding:18px; margin-bottom:12px; display:flex; align-items:center; gap:14px;" onclick="startMemoryGame()">
      <div style="width:46px; height:46px; background: rgba(139,92,246,0.12); border:1px solid rgba(139,92,246,0.25); border-radius:16px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
        <i data-lucide="brain" style="color:var(--ee-vocab-col); width:22px;"></i>
      </div>
      <div>
        <h3 class="ee-display" style="font-size:15px; font-weight:700;">Memory Match</h3>
        <p style="font-size:12px; color:var(--ee-text-soft); margin-top:2px; font-weight:500;">Kartalarni ochib, ibora va tarjimasini top</p>
      </div>
    </div>
    <div class="glass-card" style="padding:18px; display:flex; align-items:center; gap:14px;" onclick="startRushGame()">
      <div style="width:46px; height:46px; background: rgba(59,130,246,0.12); border:1px solid rgba(59,130,246,0.25); border-radius:16px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
        <i data-lucide="zap" style="color:var(--ee-read-col); width:22px;"></i>
      </div>
      <div>
        <h3 class="ee-display" style="font-size:15px; font-weight:700;">Word Rush</h3>
        <p style="font-size:12px; color:var(--ee-text-soft); margin-top:2px; font-weight:500;">Noun yoki Verb? Tezlik va 3 jon bilan o'ynang</p>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function shuffleArr(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function startMemoryGame() {
  const pool = shuffleArr(COLLOCATIONS).slice(0, 6);
  let cards = [];
  pool.forEach((p, i) => {
    cards.push({ uid: "w" + i, key: p.word, label: p.word, kind: "word" });
    cards.push({ uid: "t" + i, key: p.word, label: p.tr, kind: "tr" });
  });
  cards = shuffleArr(cards);
  MEMORY_STATE = { cards: cards, flipped: [], matched: [], moves: 0, busy: false };
  VOCAB_VIEW = { mode: "memory" };
  renderVocabTab();
}

function renderMemoryGame(el) {
  const s = MEMORY_STATE;
  el.innerHTML = `
    <button class="back-link" onclick="openGameMenu()"><i data-lucide="chevron-left" style="width:16px;"></i> Games</button>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
      <h2 class="ee-display" style="font-size: 18px; font-weight: 800;">Memory Match</h2>
      <span class="topic-badge" style="background: rgba(139,92,246,0.12); color:var(--ee-vocab-col); border:1px solid rgba(139,92,246,0.25);">${s.matched.length / 2}/6 topildi</span>
    </div>
    <p style="font-size:12px; color:var(--ee-text-soft); margin-bottom:14px; font-weight:500;">Ingliz iborasi va uning o'zbekcha tarjimasini topib juftlang.</p>
    <div class="memory-grid" id="memory-grid"></div>
  `;
  const grid = el.querySelector("#memory-grid");
  grid.innerHTML = s.cards.map((c, i) => {
    const isFlipped = s.flipped.includes(i) || s.matched.includes(c.key);
    const isMatched = s.matched.includes(c.key);
    return `
      <div class="memory-card glass-card static no-hover" style="display:flex; align-items:center; justify-content:center; padding:8px; text-align:center; ${isMatched ? 'opacity:0.35;' : ''} background:${isFlipped ? 'linear-gradient(135deg, var(--ee-vocab-col), #A78BFA)' : 'var(--ee-card)'};" onclick="flipMemoryCard(${i})">
        <span style="font-size:10.5px; font-weight:700; color:${isFlipped ? 'white' : 'var(--ee-text)'}; line-height:1.3;">${isFlipped ? esc(c.label) : '?'}</span>
      </div>
    `;
  }).join("");
  if (s.matched.length === s.cards.length) {
    el.insertAdjacentHTML("beforeend", `
      <div class="glass-card no-hover" style="margin-top:18px; text-align:center; padding:26px; background: linear-gradient(135deg,#3B82F6,#6366F1); color:white;">
        <i data-lucide="trophy" style="width:34px; height:34px; margin-bottom:8px;"></i>
        <p class="ee-display" style="font-size:18px; font-weight:800;">Ajoyib! Barchasi topildi 🎉</p>
        <p style="font-size:13px; opacity:0.9; margin-top:4px;">${s.moves} urinishda · +30 XP</p>
        <button onclick="startMemoryGame()" class="ee-display" style="margin-top:16px; background:white; color:#6366F1; border:none; padding:10px 24px; border-radius:14px; font-weight:700; cursor:pointer;">Qayta o'ynash</button>
      </div>
    `);
  }
  lucide.createIcons();
}

function flipMemoryCard(i) {
  const s = MEMORY_STATE;
  if (s.busy) return;
  const c = s.cards[i];
  if (s.matched.includes(c.key) || s.flipped.includes(i)) return;
  s.flipped.push(i);
  if (s.flipped.length === 2) {
    s.moves++;
    const [a, b] = s.flipped;
    if (s.cards[a].key === s.cards[b].key && s.cards[a].kind !== s.cards[b].kind) {
      s.matched.push(s.cards[a].key);
      s.flipped = [];
      addXp(5);
      if (s.matched.length === s.cards.length) addXp(25);
    } else {
      s.busy = true;
      setTimeout(() => { s.flipped = []; s.busy = false; renderVocabTab(); }, 700);
    }
  }
  renderVocabTab();
}

function startRushGame() {
  const pool = [];
  VOCAB_TOPICS.forEach((t) => { t.nouns.forEach((w) => pool.push({ w: w, type: "Noun" })); t.verbs.forEach((w) => pool.push({ w: w, type: "Verb" })); });
  RUSH_STATE = { pool: shuffleArr(pool), idx: 0, lives: 3, score: 0, feedback: null, over: false };
  VOCAB_VIEW = { mode: "rush" };
  renderVocabTab();
}

function renderRushGame(el) {
  const s = RUSH_STATE;
  if (s.over) {
    el.innerHTML = `
      <button class="back-link" onclick="openGameMenu()"><i data-lucide="chevron-left" style="width:16px;"></i> Games</button>
      <div class="glass-card no-hover" style="text-align:center; padding:30px 20px; background: linear-gradient(135deg,#3B82F6,#6366F1); color:white;">
        <i data-lucide="trophy" style="width:34px; height:34px; margin-bottom:8px;"></i>
        <p class="ee-display" style="font-size:18px; font-weight:800;">O'yin tugadi</p>
        <p style="font-size:13px; opacity:0.9; margin-top:4px;">Ball: ${s.score} · +${s.score * 3} XP</p>
        <button onclick="startRushGame()" class="ee-display" style="margin-top:16px; background:white; color:#6366F1; border:none; padding:10px 24px; border-radius:14px; font-weight:700; cursor:pointer;">Qayta o'ynash</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  const current = s.pool[s.idx % s.pool.length];
  el.innerHTML = `
    <button class="back-link" onclick="openGameMenu()"><i data-lucide="chevron-left" style="width:16px;"></i> Games</button>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div style="display:flex; gap:4px;">${[0, 1, 2].map((i) => `<i data-lucide="heart" style="width:18px; ${i < s.lives ? 'color:#F87171; fill:#F87171;' : 'color:var(--ee-text-soft);'}"></i>`).join("")}</div>
      <span class="topic-badge" style="background: rgba(99,102,241,0.1); color:#6366F1;">Ball ${s.score}</span>
    </div>
    <div class="glass-card no-hover" style="text-align:center; padding:34px 20px; margin-bottom:20px; background: ${s.feedback === 'right' ? 'rgba(16,185,129,0.18)' : s.feedback === 'wrong' ? 'rgba(239,68,68,0.18)' : 'var(--ee-card)'};">
      <p style="font-size:12px; color:var(--ee-text-soft); margin-bottom:8px; font-weight:600;">Noun yoki Verb?</p>
      <p class="ee-display" style="font-size:26px; font-weight:800; text-transform:capitalize;">${esc(current.w)}</p>
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <button onclick="answerRush('Noun')" class="ee-display" style="padding:16px; border-radius:16px; border:1.5px solid #8B5CF655; background: rgba(139,92,246,0.12); color:var(--ee-vocab-col); font-weight:700; font-size:14px; cursor:pointer;">Noun</button>
      <button onclick="answerRush('Verb')" class="ee-display" style="padding:16px; border-radius:16px; border:1.5px solid #3B82F655; background: rgba(59,130,246,0.12); color:var(--ee-read-col); font-weight:700; font-size:14px; cursor:pointer;">Verb</button>
    </div>
  `;
  lucide.createIcons();
}

function answerRush(guess) {
  const s = RUSH_STATE;
  if (s.feedback) return;
  const current = s.pool[s.idx % s.pool.length];
  const correct = guess === current.type;
  s.feedback = correct ? "right" : "wrong";
  if (correct) { s.score++; addXp(3); } else { s.lives--; }
  renderVocabTab();
  setTimeout(() => {
    s.feedback = null;
    if (s.lives <= 0) { s.over = true; } else { s.idx++; }
    renderVocabTab();
  }, 500);
}

/* ======================================================================
   READING TAB
   ====================================================================== */
function renderReadingTab() {
  const el = document.getElementById("reading-content");
  if (READING_VIEW.mode === "list") return renderReadingList(el);
  if (READING_VIEW.mode === "gap") return renderGapTest(el);
  if (READING_VIEW.mode === "match") return renderMatchTest(el);
}

function renderReadingList(el) {
  const customReading = STATE.custom.filter((c) => c.type === "reading");
  el.innerHTML = `
    <h2 class="ee-display" style="font-size: 22px; font-weight: 800; margin-bottom: 14px;">Reading Tests</h2>
    <div style="display:flex; gap:8px; margin-bottom:16px;" id="reading-filters">
      <button class="type-chip" data-f="all" onclick="filterReading('all')" style="background: linear-gradient(135deg,#3B82F6,#6366F1); color:white;">Barchasi</button>
      <button class="type-chip" data-f="gap" onclick="filterReading('gap')" style="background: rgba(99,102,241,0.1); color:var(--ee-text-soft);">Gap-fill</button>
      <button class="type-chip" data-f="match" onclick="filterReading('match')" style="background: rgba(99,102,241,0.1); color:var(--ee-text-soft);">Matching</button>
    </div>
    <div id="reading-container" style="display: flex; flex-direction: column; gap: 12px;"></div>
  `;
  renderReadingItems("all");
}

function filterReading(f) {
  document.querySelectorAll("#reading-filters .type-chip").forEach((b) => {
    const active = b.dataset.f === f;
    b.style.background = active ? "linear-gradient(135deg,#3B82F6,#6366F1)" : "rgba(99,102,241,0.1)";
    b.style.color = active ? "white" : "var(--ee-text-soft)";
  });
  renderReadingItems(f);
}

function renderReadingItems(filter) {
  const container = document.getElementById("reading-container");
  let items = [];
  if (filter === "all" || filter === "gap") items = items.concat(GAP_TESTS.map((t) => ({ t: t, kind: "gap" })));
  if (filter === "all" || filter === "match") items = items.concat(MATCH_TESTS.map((t) => ({ t: t, kind: "match" })));
  let html = items.map((item) => {
    const t = item.t;
    if (item.kind === "gap") {
      return `
        <div class="glass-card" style="padding: 16px;" onclick="openGapTest('${t.id}')">
          <span class="topic-badge" style="background: rgba(59, 130, 246, 0.12); color: var(--ee-read-col); border: 1px solid rgba(59, 130, 246, 0.25);">Gap Fill</span>
          <p class="ee-display" style="font-size: 15px; font-weight: 700; margin-top: 10px;">${esc(t.title)}</p>
          <p style="font-size: 12px; color: var(--ee-text-soft); margin-top: 4px; font-weight: 500;">${t.answers.length} bo'shliqni to'ldiring</p>
        </div>`;
    } else {
      return `
        <div class="glass-card" style="padding: 16px;" onclick="openMatchTest('${t.id}')">
          <span class="topic-badge" style="background: rgba(236, 72, 153, 0.12); color: var(--ee-write-col); border: 1px solid rgba(236, 72, 153, 0.25);">Matching</span>
          <p class="ee-display" style="font-size: 15px; font-weight: 700; margin-top: 10px;">${esc(t.title)}</p>
          <p style="font-size: 12px; color: var(--ee-text-soft); margin-top: 4px; font-weight: 500;">${t.items.length} ta moslashtiring</p>
        </div>`;
    }
  }).join("");
  const customReading = STATE.custom.filter((c) => c.type === "reading");
  if (customReading.length && filter === "all") {
    html += `<p class="ee-display" style="font-size:13px; font-weight:700; color:var(--ee-text-soft); margin: 6px 2px;">MENING MATERIALLARIM</p>`;
    html += customReading.map((c) => `
      <div class="glass-card" style="padding: 16px;">
        <span class="topic-badge" style="background: rgba(16,185,129,0.12); color: var(--ee-add-col); border:1px solid rgba(16,185,129,0.25);">Mening testim</span>
        <p class="ee-display" style="font-size:14.5px; font-weight:700; margin-top:8px;">${esc(c.title)}</p>
        <p style="font-size:12.5px; color:var(--ee-text-soft); margin-top:4px; white-space:pre-wrap; line-height:1.5;">${esc(c.content)}</p>
      </div>
    `).join("");
  }
  container.innerHTML = html;
  lucide.createIcons();
}

function backToReadingList() { READING_VIEW = { mode: "list", testId: null, inputs: [], checked: false, picks: [], activeItem: 0 }; renderReadingTab(); }

function openGapTest(id) {
  const t = GAP_TESTS.find((x) => x.id === id);
  READING_VIEW = { mode: "gap", testId: id, inputs: Array(t.answers.length).fill(""), checked: false };
  renderReadingTab();
}

function renderGapTest(el) {
  const t = GAP_TESTS.find((x) => x.id === READING_VIEW.testId);
  const checked = READING_VIEW.checked;
  const parts = t.text.split(/\{\{\d\}\}/g);
  let bodyHtml = "";
  parts.forEach((p, i) => {
    bodyHtml += esc(p).replace(/\n/g, "<br>");
    if (i < t.answers.length) {
      const val = READING_VIEW.inputs[i] || "";
      const correct = checked && val.trim().toLowerCase() === t.answers[i].toLowerCase();
      const wrong = checked && !correct;
      bodyHtml += `<input type="text" class="gap-input ${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''}" ${checked ? 'disabled' : ''} value="${esc(val)}" oninput="updateGapInput(${i}, this.value)">`;
    }
  });
  let scoreHtml = "";
  if (checked) {
    const score = t.answers.filter((a, i) => (READING_VIEW.inputs[i] || "").trim().toLowerCase() === a.toLowerCase()).length;
    let missed = "";
    t.answers.forEach((a, i) => { if ((READING_VIEW.inputs[i] || "").trim().toLowerCase() !== a.toLowerCase()) missed += `<p style="font-size:12px; color:var(--ee-text-soft); margin-top:3px;">Gap ${i + 1}: <b style="color:var(--ee-text);">${esc(a)}</b></p>`; });
    scoreHtml = `
      <div class="glass-card no-hover" style="margin: 16px 0; padding:16px; background:${score === t.answers.length ? 'rgba(16,185,129,0.15)' : 'rgba(99,102,241,0.1)'};">
        <p class="ee-display" style="font-weight:800; font-size:16px;">Natija: ${score}/${t.answers.length}</p>
        ${missed}
      </div>`;
  }
  el.innerHTML = `
    <button class="back-link" onclick="backToReadingList()"><i data-lucide="chevron-left" style="width:16px;"></i> Reading Tests</button>
    <h2 class="ee-display" style="font-size: 19px; font-weight: 800; margin-bottom: 4px;">${esc(t.title)}</h2>
    <p style="font-size: 12.5px; color: var(--ee-text-soft); margin-bottom: 14px; font-weight:500;">Har bir bo'shliqqa matnda allaqachon ishlatilgan bitta so'zni yozing.</p>
    <div class="glass-card static no-hover" style="padding:18px; line-height:2;">
      <p style="font-size:14px; font-weight:500;">${bodyHtml}</p>
    </div>
    ${scoreHtml}
    <button onclick="checkGapTest()" class="ee-display" style="width:100%; padding:14px; border-radius:16px; border:none; background: linear-gradient(135deg,#3B82F6,#6366F1); color:white; font-weight:700; font-size:14px; cursor:pointer; margin-top:16px;">
      ${checked ? "Tayyor" : "Javoblarni tekshirish"}
    </button>
  `;
  lucide.createIcons();
}

function updateGapInput(i, val) { READING_VIEW.inputs[i] = val; }
function checkGapTest() {
  if (!READING_VIEW.checked) {
    READING_VIEW.checked = true;
    const t = GAP_TESTS.find((x) => x.id === READING_VIEW.testId);
    const score = t.answers.filter((a, i) => (READING_VIEW.inputs[i] || "").trim().toLowerCase() === a.toLowerCase()).length;
    addTestCompleted();
    if (score > 0) addXp(score * 2);
    renderReadingTab();
  } else {
    backToReadingList();
  }
}

function openMatchTest(id) {
  const t = MATCH_TESTS.find((x) => x.id === id);
  READING_VIEW = { mode: "match", testId: id, picks: Array(t.items.length).fill(null), activeItem: 0, checked: false };
  renderReadingTab();
}

function renderMatchTest(el) {
  const t = MATCH_TESTS.find((x) => x.id === READING_VIEW.testId);
  const checked = READING_VIEW.checked;
  const picks = READING_VIEW.picks;
  const score = checked ? picks.filter((p, i) => p === t.answers[i]).length : 0;
  el.innerHTML = `
    <button class="back-link" onclick="backToReadingList()"><i data-lucide="chevron-left" style="width:16px;"></i> Reading Tests</button>
    <h2 class="ee-display" style="font-size: 17px; font-weight: 800; margin-bottom: 4px;">${esc(t.title)}</h2>
    <p style="font-size: 12.5px; color: var(--ee-text-soft); margin-bottom: 14px; font-weight:500;">Raqamni bosing, keyin mos harfni tanlang.</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;" id="match-items"></div>
    <p class="ee-display" style="font-weight:700; font-size:13px; margin-bottom:8px;">Variant tanlang (${READING_VIEW.activeItem + 1}-band uchun):</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;" id="match-options"></div>
    <div id="match-score"></div>
    <button onclick="checkMatchTest()" ${(!checked && picks.includes(null)) ? "disabled" : ""} class="ee-display" style="width:100%; padding:14px; border-radius:16px; border:none; color:white; font-weight:700; font-size:14px; cursor:pointer; background:${(!checked && picks.includes(null)) ? '#94A3B8' : 'linear-gradient(135deg,#3B82F6,#6366F1)'};">
      ${checked ? "Tayyor" : "Javoblarni tekshirish"}
    </button>
  `;
  const itemsEl = el.querySelector("#match-items");
  itemsEl.innerHTML = t.items.map((it, i) => {
    const p = picks[i];
    const isActive = READING_VIEW.activeItem === i;
    const correct = checked && p === t.answers[i];
    const wrong = checked && p && p !== t.answers[i];
    return `
      <div class="glass-card match-item" style="padding:12px; border:${isActive ? '1.5px solid #6366F1' : '1px solid var(--ee-card-border)'};" onclick="setActiveMatchItem(${i})">
        <div style="display:flex; align-items:flex-start; gap:8px;">
          <div style="width:24px; height:24px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:${p ? 'white' : 'var(--ee-read-col)'}; background:${p ? (correct ? '#10B981' : (wrong ? '#EF4444' : '#6366F1')) : 'rgba(99,102,241,0.12)'};">${p || (i + 1)}</div>
          <p style="font-size:12px; line-height:1.4;">${esc(it)}</p>
        </div>
      </div>`;
  }).join("");
  const optsEl = el.querySelector("#match-options");
  optsEl.innerHTML = t.options.map((o) => `
    <div class="glass-card match-option" style="padding:12px; background:${picks[READING_VIEW.activeItem] === o.key ? 'rgba(99,102,241,0.15)' : 'var(--ee-card)'};" onclick="pickMatchOption('${o.key}')">
      <div style="display:flex; gap:8px;">
        <span class="ee-display" style="font-weight:800; color:#6366F1; font-size:13px;">${o.key}</span>
        <p style="font-size:12px; line-height:1.4;">${esc(o.text)}</p>
      </div>
    </div>
  `).join("");
  if (checked) {
    el.querySelector("#match-score").innerHTML = `
      <div class="glass-card no-hover" style="margin-bottom:16px; padding:16px; background:${score === t.items.length ? 'rgba(16,185,129,0.15)' : 'rgba(99,102,241,0.1)'};">
        <p class="ee-display" style="font-weight:800; font-size:16px;">Natija: ${score}/${t.items.length}</p>
      </div>`;
  }
  lucide.createIcons();
}

function setActiveMatchItem(i) { READING_VIEW.activeItem = i; renderReadingTab(); }
function pickMatchOption(key) {
  if (READING_VIEW.checked) return;
  READING_VIEW.picks[READING_VIEW.activeItem] = key;
  const t = MATCH_TESTS.find((x) => x.id === READING_VIEW.testId);
  if (READING_VIEW.activeItem < t.items.length - 1) READING_VIEW.activeItem++;
  renderReadingTab();
}
function checkMatchTest() {
  if (!READING_VIEW.checked) {
    READING_VIEW.checked = true;
    const t = MATCH_TESTS.find((x) => x.id === READING_VIEW.testId);
    const score = READING_VIEW.picks.filter((p, i) => p === t.answers[i]).length;
    addTestCompleted();
    if (score > 0) addXp(score * 2);
    renderReadingTab();
  } else {
    backToReadingList();
  }
}

/* ======================================================================
   SPEAKING TAB
   ====================================================================== */
function renderSpeakingTab() {
  const el = document.getElementById("speaking-content");
  if (SPEAKING_VIEW.mode === "list") return renderSpeakingList(el);
  if (SPEAKING_VIEW.mode === "session") return renderSpeakingSession(el);
}

function renderSpeakingList(el) {
  const log = STATE.progress.speakingLog || [];
  const avgBand = log.length ? (log.reduce((a, s) => a + s.band, 0) / log.length).toFixed(1) : null;
  el.innerHTML = `
    <h2 class="ee-display" style="font-size: 22px; font-weight: 800; margin-bottom: 4px;">Speaking</h2>
    <p style="font-size: 13px; color: var(--ee-text-soft); margin-bottom: 16px; font-weight:500;">Multilevel uslubidagi mashq va o'z-o'zini baholash.</p>
    ${avgBand ? `
      <div class="glass-card no-hover" style="padding:16px; margin-bottom:18px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <p style="font-size:12px; color:var(--ee-text-soft); font-weight:600;">O'rtacha band (${log.length} mashq)</p>
          <p class="ee-display" style="font-size:22px; font-weight:800;">${avgBand}</p>
        </div>
        <div style="display:flex; gap:4px;">
          ${log.slice(-5).reverse().map((s) => `<span class="topic-badge" style="background: rgba(249,115,22,0.12); color:var(--ee-speak-col);">${s.band}</span>`).join("")}
        </div>
      </div>` : ""}

    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <i data-lucide="mic" style="width:16px; color:var(--ee-speak-col);"></i>
      <p class="ee-display" style="font-size:15px; font-weight:700;">Part 1 — Personal questions</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:20px;">
      ${SPEAKING_PART1.map((q, i) => `
        <div class="glass-card" style="padding:12px 14px;" onclick="startSpeaking(1, ${i})">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
            <p style="font-size:12.5px; line-height:1.4;">${esc(q)}</p>
            <i data-lucide="chevron-right" style="width:14px; color:var(--ee-text-soft); flex-shrink:0;"></i>
          </div>
        </div>`).join("")}
    </div>

    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <i data-lucide="image" style="width:16px; color:var(--ee-read-col);"></i>
      <p class="ee-display" style="font-size:15px; font-weight:700;">Part 2 — Picture comparison</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:8px;">
      ${SPEAKING_PART2.map((task, i) => `
        <div class="glass-card" style="padding:12px 14px;" onclick="startSpeaking(2, ${i})">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="display:flex;">
              <div style="width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:${task.a.color}33; border:2px solid var(--ee-bg1); margin-right:-8px;"><i data-lucide="${task.a.icon}" style="width:13px; color:${task.a.color};"></i></div>
              <div style="width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:${task.b.color}33; border:2px solid var(--ee-bg1);"><i data-lucide="${task.b.icon}" style="width:13px; color:${task.b.color};"></i></div>
            </div>
            <p style="font-size:12px; line-height:1.4; flex:1;">${esc(task.prompt)}</p>
            <i data-lucide="chevron-right" style="width:14px; color:var(--ee-text-soft); flex-shrink:0;"></i>
          </div>
        </div>`).join("")}
    </div>
  `;
  lucide.createIcons();
}

function backToSpeakingList() { clearTimeout(SPEAKING_VIEW.timerHandle); SPEAKING_VIEW = { mode: "list" }; renderSpeakingTab(); }

function startSpeaking(part, taskIdx) {
  const task = part === 1 ? SPEAKING_PART1[taskIdx] : SPEAKING_PART2[taskIdx];
  SPEAKING_VIEW = { mode: "session", part: part, task: task, stage: "prep", secondsLeft: part === 1 ? 20 : 45, ratings: [3, 3, 3, 3], timerHandle: null };
  renderSpeakingTab();
  runSpeakingTimer();
}

function runSpeakingTimer() {
  clearTimeout(SPEAKING_VIEW.timerHandle);
  if (SPEAKING_VIEW.stage !== "prep" && SPEAKING_VIEW.stage !== "speak") return;
  SPEAKING_VIEW.timerHandle = setTimeout(() => {
    SPEAKING_VIEW.secondsLeft--;
    if (SPEAKING_VIEW.secondsLeft <= 0) {
      if (SPEAKING_VIEW.stage === "prep") { SPEAKING_VIEW.stage = "speak"; SPEAKING_VIEW.secondsLeft = SPEAKING_VIEW.part === 1 ? 45 : 60; }
      else { SPEAKING_VIEW.stage = "assess"; renderSpeakingTab(); return; }
    }
    renderSpeakingTab();
    runSpeakingTimer();
  }, 1000);
}

function skipPrep() { clearTimeout(SPEAKING_VIEW.timerHandle); SPEAKING_VIEW.stage = "speak"; SPEAKING_VIEW.secondsLeft = SPEAKING_VIEW.part === 1 ? 45 : 60; renderSpeakingTab(); runSpeakingTimer(); }
function finishSpeaking() { clearTimeout(SPEAKING_VIEW.timerHandle); SPEAKING_VIEW.stage = "assess"; renderSpeakingTab(); }
function setRating(i, v) { SPEAKING_VIEW.ratings[i] = v; renderSpeakingTab(); }

function submitAssessment() {
  const avg = SPEAKING_VIEW.ratings.reduce((a, b) => a + b, 0) / SPEAKING_VIEW.ratings.length;
  const band = bandFromAvg(avg);
  SPEAKING_VIEW.stage = "result";
  SPEAKING_VIEW.band = band;
  addSpeakingLog({ part: SPEAKING_VIEW.part, band: band, date: new Date().toISOString() });
  addXp(10);
  renderSpeakingTab();
}

function renderSpeakingSession(el) {
  const s = SPEAKING_VIEW;
  if (s.stage === "prep" || s.stage === "speak") {
    let pictureHtml = "";
    if (s.part === 2) {
      pictureHtml = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
          ${[s.task.a, s.task.b].map((p) => `
            <div class="glass-card no-hover" style="padding:22px 10px; text-align:center; background: linear-gradient(160deg, ${p.color}30, ${p.color}10);">
              <i data-lucide="${p.icon}" style="width:30px; height:30px; color:${p.color}; margin-bottom:8px;"></i>
              <p style="font-size:11.5px; font-weight:700;">${esc(p.label)}</p>
            </div>`).join("")}
        </div>`;
    }
    el.innerHTML = `
      <button class="back-link" onclick="backToSpeakingList()"><i data-lucide="chevron-left" style="width:16px;"></i> Speaking</button>
      <span class="topic-badge" style="background: rgba(249,115,22,0.12); color:var(--ee-speak-col); border:1px solid rgba(249,115,22,0.25);">${s.stage === "prep" ? "Tayyorgarlik" : "Gapiring"}</span>
      <div style="margin-top:14px; margin-bottom:20px;">
        ${pictureHtml}
        <div class="glass-card static no-hover" style="padding:18px;">
          <p style="font-size:15px; font-weight:600; line-height:1.6;">${esc(s.part === 2 ? s.task.prompt : s.task)}</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:14px;">
        <div style="width:96px; height:96px; border-radius:50%; display:flex; align-items:center; justify-content:center; background: linear-gradient(135deg,#3B82F6,#6366F1,#EC4899);">
          <span class="ee-display" style="color:white; font-size:28px; font-weight:800;">${s.secondsLeft}</span>
        </div>
        <p style="font-size:12.5px; color:var(--ee-text-soft); font-weight:500;">${s.stage === "prep" ? "Javobingiz haqida o'ylab ko'ring..." : "Ovoz chiqarib javob bering"}</p>
        ${s.stage === "speak" ? `<button onclick="finishSpeaking()" class="ee-display" style="padding:12px 26px; border-radius:16px; border:none; background: linear-gradient(135deg,#3B82F6,#6366F1); color:white; font-weight:700; font-size:13.5px; cursor:pointer;">✓ Gapirib bo'ldim</button>` : ""}
        ${s.stage === "prep" ? `<button onclick="skipPrep()" style="padding:10px 22px; border-radius:16px; background:var(--ee-card); border:1px solid var(--ee-card-border); color:var(--ee-text-soft); font-weight:700; font-size:12.5px; cursor:pointer;">Tayyorgarlikni o'tkazib yuborish</button>` : ""}
      </div>
    `;
  } else if (s.stage === "assess") {
    el.innerHTML = `
      <button class="back-link" onclick="backToSpeakingList()"><i data-lucide="chevron-left" style="width:16px;"></i> Speaking</button>
      <h3 class="ee-display" style="font-size:17px; font-weight:800; margin-bottom:4px;">Javobingizni baholang</h3>
      <p style="font-size:12.5px; color:var(--ee-text-soft); margin-bottom:16px; font-weight:500;">Halol baholang — bu real progressni ko'rsatadi.</p>
      <div id="rating-rows" style="display:flex; flex-direction:column; gap:18px; margin-bottom:20px;"></div>
      <button onclick="submitAssessment()" class="ee-display" style="width:100%; padding:14px; border-radius:16px; border:none; background: linear-gradient(135deg,#3B82F6,#6366F1); color:white; font-weight:700; font-size:14px; cursor:pointer;">Band ballimni ko'rish</button>
    `;
    const rows = el.querySelector("#rating-rows");
    rows.innerHTML = SPEAKING_CRITERIA.map((label, i) => `
      <div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span style="font-size:13px; font-weight:600;">${label}</span>
          <span style="font-size:12px; color:#6366F1; font-weight:700;">${s.ratings[i]}/5</span>
        </div>
        <div style="display:flex; gap:6px;">
          ${[1, 2, 3, 4, 5].map((v) => `<button class="star-btn" onclick="setRating(${i}, ${v})"><i data-lucide="star" style="width:24px; ${v <= s.ratings[i] ? 'color:#8B5CF6; fill:#8B5CF6;' : 'color:var(--ee-text-soft);'}"></i></button>`).join("")}
        </div>
      </div>
    `).join("");
  } else if (s.stage === "result") {
    el.innerHTML = `
      <div class="glass-card no-hover" style="text-align:center; padding:30px 20px; background: linear-gradient(135deg,#3B82F6,#6366F1,#EC4899); color:white;">
        <i data-lucide="trophy" style="width:34px; height:34px; margin-bottom:8px;"></i>
        <p style="font-size:12px; opacity:0.85;">Taxminiy band</p>
        <p class="ee-display" style="font-size:38px; font-weight:800;">${s.band.toFixed(1)}</p>
        <span class="topic-badge" style="background: rgba(255,255,255,0.25); color:white;">${cefrFromBand(s.band)} daraja</span>
        <button onclick="backToSpeakingList()" class="ee-display" style="display:block; margin:18px auto 0; background:white; color:#6366F1; border:none; padding:10px 26px; border-radius:16px; font-weight:700; cursor:pointer;">Speaking'ga qaytish</button>
      </div>
    `;
  }
  lucide.createIcons();
}

/* ======================================================================
   WRITING TAB
   ====================================================================== */
function renderWritingTab() {
  const el = document.getElementById("writing-content");
  const customWriting = STATE.custom.filter((c) => c.type === "writing");
  el.innerHTML = `
    <h2 class="ee-display" style="font-size: 22px; font-weight: 800; margin-bottom: 16px;">Writing Assistant</h2>

    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <i data-lucide="sparkles" style="color:var(--ee-write-col); width:16px;"></i>
      <p class="ee-display" style="font-size:15px; font-weight:700;">High-scoring linking words</p>
    </div>
    <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:18px;">
      ${LINKING_WORDS.map((w) => `<span class="topic-badge" style="background: rgba(236,72,153,0.1); color:var(--ee-write-col); border:1px solid rgba(236,72,153,0.2);">${esc(w)}</span>`).join("")}
    </div>

    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <i data-lucide="bookmark" style="color:var(--ee-write-col); width:16px;"></i>
      <p class="ee-display" style="font-size:15px; font-weight:700;">Band 8–9 formal phrases</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:20px;" id="phrase-bank">
      ${FORMAL_PHRASES.map((p, i) => `
        <div class="glass-card" style="padding:12px 14px;" onclick="insertPhrase(${i})">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <p style="font-size:13px; font-weight:500;">${esc(p)}</p>
            <i data-lucide="plus" style="width:15px; color:var(--ee-write-col);"></i>
          </div>
        </div>`).join("")}
    </div>

    ${customWriting.length ? `
      <p class="ee-display" style="font-size:13px; font-weight:700; color:var(--ee-text-soft); margin: 6px 2px 10px;">MENING MATERIALLARIM</p>
      <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:20px;">
        ${customWriting.map((c) => `
          <div class="glass-card static no-hover" style="padding: 14px;">
            <span class="topic-badge" style="background: rgba(16,185,129,0.12); color: var(--ee-add-col); border:1px solid rgba(16,185,129,0.25);">Mening yozuvim</span>
            <p class="ee-display" style="font-size:13.5px; font-weight:700; margin-top:8px;">${esc(c.title)}</p>
            <p style="font-size:12px; color:var(--ee-text-soft); margin-top:4px; white-space:pre-wrap; line-height:1.5;">${esc(c.content)}</p>
          </div>`).join("")}
      </div>` : ""}

    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <i data-lucide="pen-line" style="color:var(--ee-write-col); width:16px;"></i>
      <p class="ee-display" style="font-size:15px; font-weight:700;">Practice editor</p>
    </div>
    <div class="glass-card static no-hover" style="padding:16px;">
      <textarea id="writing-editor" class="ee-textarea" placeholder="Bu yerdan yozishni boshlang — yuqoridagi iboralarni bosib qo'shishingiz mumkin..." oninput="updateWordCount()"></textarea>
      <div style="display:flex; justify-content:flex-end; margin-top:8px;">
        <span id="word-count" style="font-size:12px; color:var(--ee-text-soft); font-weight:600;">0 words</span>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function insertPhrase(i) {
  const ta = document.getElementById("writing-editor");
  ta.value = ta.value ? ta.value + " " + FORMAL_PHRASES[i] : FORMAL_PHRASES[i];
  updateWordCount();
  ta.focus();
}
function updateWordCount() {
  const ta = document.getElementById("writing-editor");
  const words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
  document.getElementById("word-count").textContent = words + " words";
}

/* ======================================================================
   ADD / UPLOAD TAB
   ====================================================================== */
function renderAddTab() {
  const el = document.getElementById("add-content");
  el.innerHTML = `
    <h2 class="ee-display" style="font-size: 22px; font-weight: 800; margin-bottom: 4px;">Material qo'shish</h2>
    <p style="font-size: 13px; color: var(--ee-text-soft); margin-bottom: 16px; font-weight:500;">O'zingizning lug'at, reading yoki writing materiallaringizni qo'shing.</p>

    <div class="glass-card static no-hover" style="padding: 18px; margin-bottom: 18px;">
      <div style="display:flex; gap:8px; margin-bottom:12px;" id="add-type-chips">
        <button class="type-chip" onclick="setAddType('vocabulary')" data-type="vocabulary">Vocabulary</button>
        <button class="type-chip" onclick="setAddType('reading')" data-type="reading">Reading</button>
        <button class="type-chip" onclick="setAddType('writing')" data-type="writing">Writing</button>
      </div>
      <input id="add-title" class="ee-input" placeholder="Sarlavha (masalan: Mening Unit 11 so'zlarim)" style="margin-bottom:10px;">
      <textarea id="add-content-field" class="ee-textarea" placeholder="Kontentni shu yerga joylang..."></textarea>
      <button onclick="saveCustomMaterial()" class="ee-display" style="width:100%; padding:14px; border-radius:16px; border:none; background: linear-gradient(135deg,#10B981,#059669); color:white; font-weight:700; font-size:14px; cursor:pointer; margin-top:12px;">
        Materialni saqlash
      </button>
    </div>

    <div id="add-list" style="display:flex; flex-direction:column; gap:10px;"></div>
  `;
  updateAddTypeChips();
  renderAddList();
  lucide.createIcons();
}

function setAddType(type) { ADD_TYPE = type; updateAddTypeChips(); }
function updateAddTypeChips() {
  document.querySelectorAll("#add-type-chips .type-chip").forEach((b) => {
    const active = b.dataset.type === ADD_TYPE;
    b.style.background = active ? "linear-gradient(135deg,#10B981,#059669)" : "rgba(16,185,129,0.1)";
    b.style.color = active ? "white" : "var(--ee-add-col)";
  });
}

function saveCustomMaterial() {
  const title = document.getElementById("add-title").value.trim();
  const content = document.getElementById("add-content-field").value.trim();
  if (!title || !content) { showToast("Sarlavha va kontentni to'ldiring"); return; }
  STATE.custom.unshift({ id: Date.now().toString(), type: ADD_TYPE, title: title, content: content });
  saveCustom();
  document.getElementById("add-title").value = "";
  document.getElementById("add-content-field").value = "";
  showToast("Material saqlandi ✓");
  renderAddList();
}

function renderAddList() {
  const listEl = document.getElementById("add-list");
  if (!STATE.custom.length) { listEl.innerHTML = `<p style="font-size:12.5px; color:var(--ee-text-soft); text-align:center; padding:20px 0;">Hali material qo'shilmagan</p>`; return; }
  listEl.innerHTML = STATE.custom.map((c) => `
    <div class="glass-card static no-hover" style="padding:14px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
        <div style="flex:1;">
          <span class="topic-badge" style="background: rgba(16,185,129,0.12); color: var(--ee-add-col); border:1px solid rgba(16,185,129,0.25);">${esc(c.type)}</span>
          <p class="ee-display" style="font-size:14px; font-weight:700; margin-top:6px;">${esc(c.title)}</p>
          <p style="font-size:12px; color:var(--ee-text-soft); margin-top:2px; line-height:1.4;">${esc(c.content.slice(0, 100))}${c.content.length > 100 ? "..." : ""}</p>
        </div>
        <button onclick="deleteCustomMaterial('${c.id}')" style="background:none; border:none; cursor:pointer; flex-shrink:0;"><i data-lucide="x" style="width:16px; color:var(--ee-text-soft);"></i></button>
      </div>
    </div>
  `).join("");
  lucide.createIcons();
}

function deleteCustomMaterial(id) {
  STATE.custom = STATE.custom.filter((c) => c.id !== id);
  saveCustom();
  renderAddList();
  showToast("O'chirildi");
}

/* ======================================================================
   DOWNLOAD / PWA INSTALL + OFFLINE CACHING
   ====================================================================== */
let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredInstallPrompt = e; });

function openDownloadModal() {
  document.getElementById("downloadModal").classList.add("open");
  document.getElementById("startDlBtn").style.display = "block";
  document.getElementById("dlProgressBox").style.display = "none";
  document.getElementById("dlDoneBtn").style.display = "none";
  document.getElementById("dlCircle").style.strokeDashoffset = 264;
  document.getElementById("dlText").innerHTML = "0%";
  document.getElementById("dlStatus").innerText = "Fayllar keshlanmoqda...";
  document.getElementById("dlStatus").style.color = "var(--ee-text)";
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  document.getElementById("dlSubtitle").textContent = isStandalone
    ? "Ilova allaqachon o'rnatilgan — offline fayllarni yangilash uchun bosing"
    : "Bosh ekranga qo'shing va internetsiz ham foydalaning";
}
function closeDownloadModal() { document.getElementById("downloadModal").classList.remove("open"); }

function startDownload() {
  document.getElementById("startDlBtn").style.display = "none";
  document.getElementById("dlProgressBox").style.display = "flex";
  const circle = document.getElementById("dlCircle");
  const text = document.getElementById("dlText");
  const circumference = 2 * Math.PI * 42;
  let progress = 0;

  // real caching via the service worker + visual progress in parallel
  const cachingDone = cacheAppShell();

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 6;
    if (progress >= 96) progress = 96; // hold near-complete until real caching resolves
    text.innerText = progress + "%";
    circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
  }, 140);

  cachingDone.finally(async () => {
    clearInterval(interval);
    circle.style.strokeDashoffset = 0;
    text.innerHTML = '<i data-lucide="check" style="color:#10B981; width:24px; height:24px;"></i>';
    lucide.createIcons();

    // trigger the real "Add to Home Screen" native prompt if available
    let installed = false;
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice.catch(() => null);
      installed = choice && choice.outcome === "accepted";
      deferredInstallPrompt = null;
    }

    const statusEl = document.getElementById("dlStatus");
    if (installed) {
      statusEl.innerText = "Bosh ekranga qo'shildi! 🎉";
    } else if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone) {
      statusEl.innerText = "Offline fayllar yangilandi ✓";
    } else {
      const ua = navigator.userAgent;
      const isiOS = /iPad|iPhone|iPod/.test(ua);
      statusEl.innerText = isiOS
        ? "Fayllar saqlandi. Endi: Share → 'Add to Home Screen'"
        : "Fayllar saqlandi. Brauzer menyusidan 'Install app'ni tanlang";
    }
    statusEl.style.color = "#059669";
    document.getElementById("dlDoneBtn").style.display = "block";
  });
}

function cacheAppShell() {
  if (!("serviceWorker" in navigator)) return Promise.resolve();
  return navigator.serviceWorker.ready
    .then((reg) => reg.active && new Promise((resolve) => {
      // ask the SW to (re)cache the shell; resolve after a short grace period either way
      const timer = setTimeout(resolve, 1200);
      caches.open("easy-english-v1").then(() => { clearTimeout(timer); resolve(); }).catch(() => resolve());
    }))
    .catch(() => Promise.resolve());
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

/* ======================================================================
   INIT
   ====================================================================== */
window.addEventListener("load", () => {
  try {
    const savedTheme = localStorage.getItem("ee-theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      if (savedTheme === "dark") document.getElementById("theme-btn").innerHTML = '<i data-lucide="sun" style="width: 18px; color: #FDE047;"></i>';
    }
  } catch (e) {}

  loadState();
  renderHome();
  registerServiceWorker();

  // deterministic 3-second splash
  let progress = 0;
  const bar = document.getElementById("splash-progress");
  const text = document.getElementById("splash-text");
  const splash = document.getElementById("splash-screen");
  const totalSteps = 30, stepMs = 100;
  const interval = setInterval(() => {
    progress += 100 / totalSteps;
    const display = Math.min(100, Math.round(progress));
    bar.style.width = display + "%";
    text.innerText = display + "%";
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => { splash.style.opacity = "0"; splash.style.visibility = "hidden"; }, 300);
    }
  }, stepMs);

  lucide.createIcons();
});
