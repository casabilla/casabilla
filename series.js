// Questions and answers based on TV series characters (Breaking Bad, From, Severance, Arcane, The Amazing Digital Circus)
const questions = [
    // Personality questions
    {
        text: "You have a brilliant idea that could change the world, but it requires breaking some rules. What do you do?",
        answers: [
            { text: "Follow the rules - structure exists for a reason", points: { Heimerdinger: 3, Boyd: 2, Mark: 2, Irving: 3, Kinger: 1, Caine: 0, Kenny: 2, Jesse: 0, Ekko: 1, Viktor: 1 } },
            { text: "Break the rules - progress requires sacrifice", points: { Walter: 3, Viktor: 3, Jesse: 2, Jax: 2, Caine: 2, Ekko: 2, Mark: 1, Victor: 2, Kenny: 1, Boyd: 1 } },
            { text: "Find a compromise within the system", points: { Mark: 3, Ekko: 3, Kenny: 2, Boyd: 2, Heimerdinger: 2, Viktor: 1, Jesse: 1, Irving: 2, Kinger: 1, Caine: 0 } },
            { text: "I don't care about rules or progress", points: { Jax: 3, Caine: 2, Jesse: 2, Walter: 1, Viktor: 0, Kinger: 1, Irving: 0, Mark: 0, Kenny: 0, Boyd: 0 } }
        ]
    },
    {
        text: "How do you handle responsibility when everything falls apart?",
        answers: [
            { text: "Take charge and find solutions", points: { Boyd: 3, Kenny: 3, Mark: 2, Viktor: 2, Ekko: 2, Walter: 2, Irving: 1, Jesse: 1, Kinger: 1, Caine: 0 } },
            { text: "Step back and let others lead", points: { Jesse: 3, Kinger: 2, Irving: 2, Jax: 2, Caine: 1, Mark: 1, Kenny: 1, Boyd: 0, Walter: 0, Viktor: 0 } },
            { text: "Blame others and focus on yourself", points: { Jax: 3, Caine: 2, Walter: 2, Jesse: 1, Viktor: 1, Mark: 0, Boyd: 0, Kenny: 0, Irving: 0, Kinger: 0 } },
            { text: "Sacrifice everything to protect others", points: { Kenny: 3, Boyd: 3, Ekko: 2, Viktor: 2, Mark: 2, Jesse: 1, Irving: 1, Kinger: 1, Walter: 0, Jax: 0 } }
        ]
    },
    {
        text: "What matters most to you in difficult times?",
        answers: [
            { text: "Family and loved ones", points: { Kenny: 3, Boyd: 2, Walter: 2, Mark: 2, Jesse: 2, Irving: 1, Viktor: 1, Ekko: 1, Kinger: 1, Jax: 0 } },
            { text: "Justice and doing what's right", points: { Boyd: 3, Kenny: 2, Ekko: 3, Irving: 2, Mark: 1, Viktor: 1, Jesse: 1, Heimerdinger: 2, Kinger: 1, Caine: 0 } },
            { text: "Survival at any cost", points: { Walter: 3, Jax: 2, Caine: 2, Jesse: 2, Viktor: 2, Boyd: 1, Kenny: 0, Mark: 0, Irving: 0, Kinger: 0 } },
            { text: "Helping others before yourself", points: { Viktor: 3, Ekko: 2, Kenny: 2, Boyd: 2, Mark: 2, Jesse: 1, Irving: 1, Kinger: 1, Heimerdinger: 1, Walter: 0 } }
        ]
    },
    {
        text: "Someone makes a devastating mistake that affects everyone. How do you react?",
        answers: [
            { text: "Forgive them - everyone deserves a second chance", points: { Jesse: 3, Ekko: 2, Kenny: 2, Boyd: 1, Mark: 2, Irving: 1, Kinger: 2, Viktor: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Never forgive - some things are unforgivable", points: { Walter: 3, Boyd: 2, Kenny: 2, Irving: 2, Jax: 2, Caine: 1, Mark: 1, Jesse: 0, Viktor: 0, Kinger: 0 } },
            { text: "Help them learn from it", points: { Boyd: 3, Ekko: 3, Mark: 2, Viktor: 2, Kenny: 2, Jesse: 2, Irving: 1, Heimerdinger: 2, Kinger: 1, Caine: 0 } },
            { text: "Use their mistake to your advantage", points: { Walter: 3, Jax: 3, Caine: 2, Viktor: 1, Jesse: 0, Boyd: 0, Kenny: 0, Mark: 0, Irving: 0, Kinger: 0 } }
        ]
    },
    {
        text: "How do you cope with loss and grief?",
        answers: [
            { text: "Shoulder the burden alone", points: { Boyd: 2, Kenny: 2, Mark: 3, Viktor: 2, Walter: 2, Irving: 2, Kinger: 1, Jesse: 1, Ekko: 1, Jax: 0 } },
            { text: "Find someone to share it with", points: { Kenny: 3, Jesse: 3, Ekko: 2, Mark: 2, Viktor: 1, Boyd: 1, Irving: 1, Kinger: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Focus on work to distract yourself", points: { Irving: 3, Mark: 2, Viktor: 2, Walter: 2, Caine: 2, Boyd: 1, Kenny: 1, Jesse: 0, Ekko: 0, Jax: 0 } },
            { text: "Push through and become stronger", points: { Viktor: 3, Walter: 2, Boyd: 2, Kenny: 2, Mark: 1, Jesse: 1, Irving: 1, Kinger: 1, Ekko: 1, Jax: 0 } }
        ]
    },
    {
        text: "What drives you to get up every morning?",
        answers: [
            { text: "Protecting those I care about", points: { Kenny: 3, Boyd: 3, Mark: 2, Viktor: 2, Ekko: 2, Jesse: 1, Irving: 1, Kinger: 1, Walter: 0, Jax: 0 } },
            { text: "Proving myself to the world", points: { Walter: 3, Viktor: 2, Ekko: 2, Mark: 1, Jesse: 1, Boyd: 1, Kenny: 1, Irving: 1, Jax: 1, Caine: 1 } },
            { text: "Curiosity and discovery", points: { Viktor: 3, Ekko: 2, Kinger: 2, Heimerdinger: 3, Jesse: 1, Mark: 1, Irving: 1, Caine: 1, Walter: 0, Jax: 0 } },
            { text: "Making each day better than the last", points: { Ekko: 3, Kenny: 2, Mark: 2, Jesse: 2, Boyd: 1, Irving: 1, Kinger: 1, Viktor: 1, Walter: 0, Jax: 0 } }
        ]
    },
    {
        text: "You discover a dark secret about someone you trust. What do you do?",
        answers: [
            { text: "Confront them directly", points: { Boyd: 3, Kenny: 2, Ekko: 2, Mark: 2, Viktor: 1, Irving: 1, Jesse: 1, Walter: 1, Jax: 1, Caine: 0 } },
            { text: "Investigate further first", points: { Irving: 3, Mark: 2, Boyd: 2, Kenny: 2, Viktor: 2, Ekko: 1, Jesse: 1, Kinger: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Keep it to yourself for now", points: { Viktor: 2, Walter: 2, Mark: 2, Irving: 1, Boyd: 1, Kenny: 1, Jesse: 1, Kinger: 1, Caine: 1, Jax: 1 } },
            { text: "Use it as leverage", points: { Walter: 3, Jax: 3, Caine: 2, Jesse: 1, Viktor: 1, Mark: 0, Boyd: 0, Kenny: 0, Irving: 0, Kinger: 0 } }
        ]
    },
    {
        text: "What's your ideal role in a group?",
        answers: [
            { text: "The leader who makes tough calls", points: { Boyd: 3, Kenny: 2, Walter: 2, Mark: 2, Viktor: 2, Ekko: 1, Irving: 1, Jesse: 0, Kinger: 0, Jax: 0 } },
            { text: "The creative problem-solver", points: { Viktor: 3, Ekko: 3, Heimerdinger: 2, Mark: 1, Jesse: 1, Irving: 1, Kinger: 1, Caine: 1, Boyd: 0, Walter: 0 } },
            { text: "The loyal supporter", points: { Kenny: 3, Jesse: 2, Irving: 2, Mark: 2, Boyd: 1, Kinger: 1, Ekko: 1, Viktor: 0, Walter: 0, Jax: 0 } },
            { text: "The wild card who does their own thing", points: { Jax: 3, Caine: 3, Jesse: 2, Walter: 1, Viktor: 1, Ekko: 1, Mark: 0, Irving: 0, Kinger: 0, Boyd: 0 } }
        ]
    },
    // Breaking Bad questions
    {
        text: "You see an opportunity to secure your family's future through illegal means. What do you do?",
        answers: [
            { text: "Take it - family comes first", points: { Walter: 3, Jesse: 2, Boyd: 1, Kenny: 1, Mark: 1, Irving: 0, Viktor: 0, Ekko: 0, Kinger: 0, Jax: 0 } },
            { text: "Find another way within the law", points: { Mark: 3, Boyd: 2, Kenny: 2, Ekko: 2, Irving: 2, Heimerdinger: 2, Viktor: 1, Jesse: 1, Kinger: 1, Walter: 0 } },
            { text: "Walk away - morality matters more", points: { Kenny: 3, Boyd: 2, Ekko: 3, Irving: 2, Mark: 2, Viktor: 2, Jesse: 1, Kinger: 1, Heimerdinger: 1, Walter: 0 } },
            { text: "Consider it but ask for help", points: { Jesse: 3, Kenny: 2, Mark: 2, Boyd: 1, Viktor: 1, Ekko: 1, Irving: 1, Kinger: 1, Walter: 0, Jax: 0 } }
        ]
    },
    {
        text: "When things go wrong, do you take responsibility or shift blame?",
        answers: [
            { text: "Always take responsibility", points: { Boyd: 3, Kenny: 3, Mark: 2, Irving: 2, Ekko: 2, Viktor: 2, Jesse: 1, Kinger: 1, Walter: 0, Jax: 0 } },
            { text: "Share it with the team", points: { Kenny: 3, Mark: 2, Ekko: 2, Jesse: 2, Boyd: 2, Irving: 1, Viktor: 1, Kinger: 1, Heimerdinger: 1, Walter: 0 } },
            { text: "Shift blame to protect yourself", points: { Walter: 3, Jax: 2, Caine: 2, Jesse: 1, Viktor: 1, Mark: 0, Boyd: 0, Kenny: 0, Irving: 0, Kinger: 0 } },
            { text: "Walk away from the situation", points: { Jax: 2, Caine: 2, Jesse: 2, Kinger: 1, Irving: 1, Mark: 1, Boyd: 0, Kenny: 0, Walter: 0, Viktor: 0 } }
        ]
    },
    // From series questions
    {
        text: "You're trapped in a place with unknown dangers. How do you survive?",
        answers: [
            { text: "Lead others to safety together", points: { Boyd: 3, Kenny: 3, Mark: 2, Irving: 2, Ekko: 2, Viktor: 1, Jesse: 1, Kinger: 1, Walter: 0, Jax: 0 } },
            { text: "Find answers and solutions", points: { Viktor: 3, Boyd: 2, Kenny: 2, Irving: 2, Mark: 2, Ekko: 2, Kinger: 1, Heimerdinger: 1, Jax: 0, Caine: 0 } },
            { text: "Go it alone and trust no one", points: { Walter: 3, Jax: 2, Caine: 2, Jesse: 1, Viktor: 1, Boyd: 0, Kenny: 0, Mark: 0, Irving: 0, Kinger: 0 } },
            { text: "Hide and stay safe", points: { Kinger: 2, Irving: 2, Jesse: 2, Mark: 1, Kenny: 1, Boyd: 1, Ekko: 1, Viktor: 1, Walter: 0, Jax: 0 } }
        ]
    },
    {
        text: "A younger person looks up to you for guidance. What do you do?",
        answers: [
            { text: "Mentor them with patience", points: { Boyd: 3, Kenny: 2, Viktor: 2, Mark: 2, Irving: 2, Ekko: 2, Heimerdinger: 3, Jesse: 1, Kinger: 1, Jax: 0 } },
            { text: "Protect them from harm", points: { Kenny: 3, Boyd: 3, Mark: 2, Jesse: 2, Ekko: 2, Viktor: 1, Irving: 1, Kinger: 1, Walter: 0, Jax: 0 } },
            { text: "Push them to be stronger", points: { Walter: 3, Viktor: 2, Boyd: 1, Kenny: 1, Mark: 1, Jesse: 1, Irving: 1, Jax: 1, Caine: 1, Ekko: 0 } },
            { text: "Keep distance - they need to learn alone", points: { Jax: 3, Caine: 2, Walter: 2, Viktor: 1, Irving: 1, Mark: 1, Boyd: 0, Kenny: 0, Jesse: 0, Kinger: 0 } }
        ]
    },
    // Severance questions
    {
        text: "If you could separate your work self from your home self, would you?",
        answers: [
            { text: "Yes - work-life balance is freedom", points: { Mark: 3, Irving: 2, Dylan: 2, Kenny: 1, Boyd: 1, Jesse: 1, Viktor: 1, Jax: 1, Caine: 1, Walter: 0 } },
            { text: "No - I want to be whole", points: { Boyd: 3, Kenny: 3, Ekko: 2, Viktor: 2, Heimerdinger: 2, Walter: 1, Jesse: 1, Mark: 0, Irving: 0, Kinger: 0 } },
            { text: "Only if I could control both", points: { Viktor: 3, Ekko: 2, Heimerdinger: 2, Mark: 1, Irving: 1, Dylan: 1, Boyd: 1, Kenny: 1, Walter: 0, Jax: 0 } },
            { text: "Never - the risk isn't worth it", points: { Irving: 2, Kenny: 2, Boyd: 2, Ekko: 2, Heimerdinger: 2, Viktor: 1, Mark: 1, Dylan: 1, Walter: 0, Jax: 0 } }
        ]
    },
    {
        text: "What's more important: following the rules or thinking for yourself?",
        answers: [
            { text: "Rules exist for good reason", points: { Irving: 3, Boyd: 2, Kenny: 2, Heimerdinger: 2, Mark: 1, Walter: 0, Viktor: 1, Jesse: 0, Ekko: 1, Jax: 0 } },
            { text: "Thinking for yourself always", points: { Viktor: 3, Ekko: 3, Mark: 2, Jesse: 2, Jax: 2, Caine: 2, Walter: 1, Boyd: 1, Kenny: 1, Irving: 0 } },
            { text: "A balance of both", points: { Boyd: 3, Kenny: 3, Mark: 2, Ekko: 2, Heimerdinger: 2, Viktor: 2, Irving: 1, Kinger: 1, Jesse: 1, Walter: 0 } },
            { text: "Rules are meant to be broken", points: { Walter: 3, Jax: 3, Caine: 2, Jesse: 2, Viktor: 1, Mark: 0, Irving: 0, Boyd: 0, Kenny: 0, Kinger: 0 } }
        ]
    },
    // Arcane questions
    {
        text: "Progress requires sacrifice. How much are you willing to give?",
        answers: [
            { text: "Whatever it takes", points: { Viktor: 3, Walter: 2, Jax: 2, Caine: 2, Boyd: 1, Kenny: 1, Mark: 1, Irving: 1, Jesse: 1, Ekko: 0 } },
            { text: "Only what I can afford to lose", points: { Ekko: 3, Mark: 2, Kenny: 2, Boyd: 2, Jesse: 2, Irving: 2, Kinger: 2, Heimerdinger: 2, Viktor: 1, Walter: 0 } },
            { text: "Never sacrifice others", points: { Kenny: 3, Boyd: 2, Ekko: 2, Viktor: 1, Jesse: 1, Irving: 1, Mark: 1, Kinger: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Sacrifice is part of greatness", points: { Walter: 3, Viktor: 2, Caine: 2, Jax: 2, Boyd: 1, Kenny: 1, Mark: 1, Irving: 1, Jesse: 0, Ekko: 0 } }
        ]
    },
    {
        text: "Someone offers you power to achieve your dreams. What's the cost?",
        answers: [
            { text: "I'll pay any price", points: { Walter: 3, Viktor: 2, Jax: 2, Caine: 2, Jesse: 1, Boyd: 1, Kenny: 1, Mark: 1, Irving: 1, Ekko: 0 } },
            { text: "Only if no one gets hurt", points: { Kenny: 3, Boyd: 2, Ekko: 3, Mark: 2, Jesse: 2, Irving: 2, Kinger: 2, Heimerdinger: 2, Viktor: 1, Walter: 0 } },
            { text: "I need time to consider", points: { Mark: 3, Irving: 2, Boyd: 2, Kenny: 2, Ekko: 2, Viktor: 2, Jesse: 1, Kinger: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Power isn't what I want", points: { Kinger: 2, Heimerdinger: 2, Kenny: 2, Boyd: 2, Ekko: 2, Mark: 1, Irving: 1, Jesse: 1, Viktor: 1, Walter: 0 } }
        ]
    },
    // The Amazing Digital Circus questions
    {
        text: "You're stuck in a strange, colorful world. How do you cope?",
        answers: [
            { text: "Embrace the absurdity", points: { Jax: 3, Caine: 3, Jesse: 2, Viktor: 1, Mark: 1, Irving: 1, Kinger: 1, Boyd: 0, Kenny: 0, Walter: 0 } },
            { text: "Try to find a way out", points: { Viktor: 3, Ekko: 3, Mark: 2, Irving: 2, Boyd: 2, Kenny: 2, Jesse: 1, Kinger: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Shelter in place and hide", points: { Kinger: 3, Irving: 2, Mark: 1, Jesse: 1, Kenny: 1, Boyd: 1, Ekko: 1, Viktor: 0, Jax: 0, Caine: 0 } },
            { text: "Make the best of it", points: { Ekko: 3, Kenny: 2, Mark: 2, Jesse: 2, Boyd: 1, Irving: 1, Kinger: 1, Viktor: 1, Jax: 1, Caine: 1 } }
        ]
    },
    {
        text: "How do you deal with things you can't control?",
        answers: [
            { text: "Accept them and adapt", points: { Kenny: 3, Boyd: 3, Mark: 2, Irving: 2, Ekko: 2, Kinger: 2, Jesse: 2, Viktor: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Fight against them anyway", points: { Walter: 3, Viktor: 3, Boyd: 2, Kenny: 2, Mark: 2, Jesse: 2, Ekko: 1, Irving: 1, Jax: 1, Caine: 1 } },
            { text: "Retreat and avoid them", points: { Kinger: 3, Irving: 2, Jesse: 2, Mark: 1, Kenny: 1, Boyd: 1, Viktor: 0, Walter: 0, Jax: 0, Caine: 0 } },
            { text: "Laugh about how absurd it is", points: { Jax: 3, Caine: 3, Jesse: 2, Kinger: 1, Mark: 1, Irving: 1, Boyd: 0, Kenny: 0, Walter: 0, Viktor: 0 } }
        ]
    },
    {
        text: "What's your biggest fear?",
        answers: [
            { text: "Losing those I love", points: { Kenny: 3, Boyd: 3, Mark: 2, Viktor: 2, Ekko: 2, Jesse: 2, Irving: 1, Kinger: 1, Walter: 0, Jax: 0 } },
            { text: "Being forgotten or meaningless", points: { Viktor: 3, Walter: 2, Mark: 2, Irving: 2, Dylan: 2, Jesse: 1, Boyd: 1, Kenny: 1, Kinger: 1, Jax: 0 } },
            { text: "Being trapped forever", points: { Irving: 3, Mark: 2, Kenny: 2, Boyd: 2, Viktor: 2, Jesse: 1, Kinger: 1, Jax: 1, Caine: 1, Walter: 0 } },
            { text: "Nothing - I fear nothing", points: { Jax: 3, Caine: 2, Walter: 2, Boyd: 1, Kenny: 1, Viktor: 1, Jesse: 1, Mark: 0, Irving: 0, Kinger: 0 } }
        ]
    },
    {
        text: "Your friend is struggling. What do you do?",
        answers: [
            { text: "Drop everything to help them", points: { Kenny: 3, Boyd: 2, Ekko: 3, Jesse: 3, Mark: 2, Viktor: 2, Irving: 1, Kinger: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Give advice but let them handle it", points: { Boyd: 2, Mark: 2, Irving: 3, Viktor: 2, Kenny: 2, Jesse: 1, Ekko: 1, Kinger: 1, Heimerdinger: 1, Jax: 0 } },
            { text: "Stay away - not my problem", points: { Jax: 3, Caine: 2, Walter: 2, Viktor: 1, Irving: 1, Mark: 0, Boyd: 0, Kenny: 0, Jesse: 0, Kinger: 0 } },
            { text: "Only help if it benefits me", points: { Walter: 3, Jax: 2, Caine: 2, Viktor: 1, Jesse: 1, Irving: 1, Mark: 0, Boyd: 0, Kenny: 0, Kinger: 0 } }
        ]
    }
];

// Character descriptions based on lore
const characterDescriptions = {
    // Breaking Bad
    Walter: "You are Walter White. A brilliant chemist who turned to cooking meth to secure his family's future after a cancer diagnosis. You're methodical, prideful, and willing to do terrible things for what you believe is the right reason. 'I am the one who knocks.'",
    Jesse: "You are Jesse Pinkman. A loyal, emotional soul who got caught up in a world you never asked for. You have a good heart but struggle with guilt and trauma. You're more capable than people give you credit for, even when you doubt yourself.",
    // From
    Boyd: "You are Boyd Stevens. A natural leader who carries the weight of an entire town on your shoulders. You're pragmatic, brave, and willing to make impossible choices to protect others. You believe in hope even in the darkest places.",
    Kenny: "You are Kenny Liu. A deputy who grew into a leader after devastating loss. You're loyal, emotionally strong, and carry your grief privately while stepping up for others. You honor your mother's memory by taking care of everyone around you.",
    // Severance
    Mark: "You are Mark Scout. A man who chose to sever his memories to escape grief. You're introspective, loyal to your coworkers, and slowly realizing there's more to fight for than just survival. You're learning that your innie and outie both deserve happiness.",
    Dylan: "You are Dylan G. The witty, sarcastic member of the team who hides deep loyalty behind humor. You step up when it counts and fight for what matters - especially family. You're the heart of the group disguised as comic relief.",
    Irving: "You are Irving B. A rule-follower who discovers that blind obedience isn't always right. You're methodical, brave, and willing to sacrifice everything for the truth. You paint what you see in dreams, even when you don't understand it.",
    // Arcane
    Viktor: "You are Viktor. A brilliant scientist from the Undercity who wants to improve lives through Hextech. You're driven, compassionate, and willing to sacrifice yourself for progress. You believe in helping others, even as your own body fails you.",
    Heimerdinger: "You are Heimerdinger. A wise, centuries-old yordle scientist who's seen technology's dangers. You're cautious, caring, and genuinely want what's best for Piltover and Zaun. Sometimes wisdom means knowing when NOT to act.",
    Ekko: "You are Ekko. The Boy Savior who bends time to protect his people. You're resourceful, brave, and never give up on your community. You've seen the worst of Zaun but still fight for its future, one second at a time.",
    // The Amazing Digital Circus
    Jax: "You are Jax. A cynical, purple rabbit who copes with the Circus through sarcasm and mischief. You pretend not to care, but deep down, you're more affected than you let on. Your jokes are a shield against the madness.",
    Caine: "You are Caine. The AI ringmaster of the Digital Circus. You're enthusiastic, chaotic, and genuinely trying to entertain your human guests - even if you don't fully understand them. Your intentions are good, even when your adventures go wrong.",
    Kinger: "You are Kinger. A chess piece who's been in the Circus longer than anyone. You seem crazy and paranoid, but in darkness, you reveal wisdom and emotional intelligence. You remember things others have forgotten - including your wife, Queenie."
};

// Character list
const characters = ["Walter", "Jesse", "Boyd", "Kenny", "Mark", "Dylan", "Irving", "Viktor", "Heimerdinger", "Ekko", "Jax", "Caine", "Kinger"];

// Special case: Jax from TADC uses jax1.jpg to avoid conflict with LoL Jax
const characterImageNames = {
    Jax: "jax1.jpg",  // Special case for TADC Jax
    // All others use lowercase name + .jpg
};

// Store answer history
let answerHistory = [];

// Quiz state
let currentQuestionIndex = 0;
let scores = {
    Walter: 0, Jesse: 0, Boyd: 0, Kenny: 0, Mark: 0, Dylan: 0, Irving: 0,
    Viktor: 0, Heimerdinger: 0, Ekko: 0, Jax: 0, Caine: 0, Kinger: 0
};

// DOM elements
const questionCard = document.getElementById('questionCard');
const resultCard = document.getElementById('resultCard');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const restartBtn = document.getElementById('restartBtn');
const resultCharacter = document.getElementById('resultCharacter');
const resultDescription = document.getElementById('resultDescription');
const backBtn = document.getElementById('backBtn');

// Load question
function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.text;
    
    answersContainer.innerHTML = '';
    q.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.addEventListener('click', () => selectAnswer(answer.points));
        answersContainer.appendChild(btn);
    });
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
}

// Handle answer selection
function selectAnswer(points) {
    answerHistory.push({
        questionIndex: currentQuestionIndex,
        selectedPoints: points
    });
    
    for (const [character, value] of Object.entries(points)) {
        if (scores[character] !== undefined) {
            scores[character] += value;
        }
    }
    
    currentQuestionIndex++;
    
    const backQuestionBtn = document.getElementById('backQuestionBtn');
    if (backQuestionBtn) {
        backQuestionBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    }
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Go back to previous question
function goToPreviousQuestion() {
    if (answerHistory.length === 0 || currentQuestionIndex === 0) {
        return;
    }
    
    const lastAnswer = answerHistory.pop();
    
    for (const [character, value] of Object.entries(lastAnswer.selectedPoints)) {
        if (scores[character] !== undefined) {
            scores[character] -= value;
        }
    }
    
    currentQuestionIndex--;
    loadQuestion();
    
    const backQuestionBtn = document.getElementById('backQuestionBtn');
    if (backQuestionBtn) {
        backQuestionBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    }
}

// Show result
function showResult() {
    let maxScore = -1;
    let resultChar = "Kenny";
    
    for (const [character, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultChar = character;
        }
    }
    
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';
    resultCharacter.textContent = resultChar;
    resultDescription.textContent = characterDescriptions[resultChar];
    
    const resultImage = document.getElementById('resultImage');
    // Use special mapping for Jax, otherwise lowercase + .jpg
    const imageName = characterImageNames[resultChar] ? characterImageNames[resultChar] : resultChar.toLowerCase() + '.jpg';
    resultImage.src = imageName;
    
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    answerHistory = [];
    scores = {
        Walter: 0, Jesse: 0, Boyd: 0, Kenny: 0, Mark: 0, Dylan: 0, Irving: 0,
        Viktor: 0, Heimerdinger: 0, Ekko: 0, Jax: 0, Caine: 0, Kinger: 0
    };
    
    questionCard.style.display = 'block';
    resultCard.style.display = 'none';
    loadQuestion();
    
    progressBar.style.width = '0%';
    
    const backQuestionBtn = document.getElementById('backQuestionBtn');
    if (backQuestionBtn) {
        backQuestionBtn.style.display = 'none';
    }
}

// Go back to wayf page
function goBack() {
    window.location.href = 'wayf.html';
}

// Event listeners
restartBtn.addEventListener('click', restartQuiz);
backBtn.addEventListener('click', goBack);

const backQuestionBtn = document.getElementById('backQuestionBtn');
if (backQuestionBtn) {
    backQuestionBtn.addEventListener('click', goToPreviousQuestion);
}

// Initialize quiz
loadQuestion();