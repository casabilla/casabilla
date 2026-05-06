// Questions and answers
const questions = [
    // Questions about personality and difficult choices
    {
        text: "You're walking through a forest and see a wounded wolf. What do you do?",
        answers: [
            { text: "Help it without hesitation", points: { Kratos: 2, Sam: 2, Joel: 2, Jin: 2, Connor: 1, Miles: 3, Brok: 2, Baldur: 0 } },
            { text: "Observe from a distance first", points: { Kratos: 0, Sam: 3, Joel: 2, Jin: 3, Connor: 3, Miles: 1, Brok: 1, Baldur: 1 } },
            { text: "Walk away, it's not your problem", points: { Kratos: 2, Sam: 0, Joel: 1, Jin: 0, Connor: 1, Miles: 0, Brok: 2, Baldur: 2 } },
            { text: "Put it out of its misery", points: { Kratos: 3, Sam: 1, Joel: 3, Jin: 2, Connor: 0, Miles: 0, Brok: 1, Baldur: 3 } }
        ]
    },
    {
        text: "What's more important to you?",
        answers: [
            { text: "Duty and honor", points: { Kratos: 3, Sam: 0, Joel: 1, Jin: 3, Connor: 2, Miles: 1, Brok: 1, Baldur: 1 } },
            { text: "Freedom and adventure", points: { Kratos: 0, Sam: 2, Joel: 0, Jin: 1, Connor: 1, Miles: 3, Brok: 3, Baldur: 2 } },
            { text: "Protecting loved ones", points: { Kratos: 3, Sam: 1, Joel: 3, Jin: 2, Connor: 2, Miles: 2, Brok: 1, Baldur: 0 } },
            { text: "Surviving at any cost", points: { Kratos: 2, Sam: 3, Joel: 2, Jin: 0, Connor: 1, Miles: 0, Brok: 1, Baldur: 3 } }
        ]
    },
    {
        text: "You're faced with an impossible choice: save one person you love or save many strangers. What do you choose?",
        answers: [
            { text: "Save the person I love", points: { Kratos: 3, Sam: 0, Joel: 3, Jin: 2, Connor: 1, Miles: 2, Brok: 2, Baldur: 1 } },
            { text: "Save the many strangers", points: { Kratos: 1, Sam: 2, Joel: 0, Jin: 2, Connor: 3, Miles: 2, Brok: 1, Baldur: 0 } },
            { text: "Try to find another way", points: { Kratos: 1, Sam: 2, Joel: 1, Jin: 2, Connor: 2, Miles: 3, Brok: 2, Baldur: 0 } },
            { text: "Freeze and can't decide", points: { Kratos: 0, Sam: 1, Joel: 0, Jin: 1, Connor: 1, Miles: 1, Brok: 1, Baldur: 2 } }
        ]
    },
    {
        text: "How do you deal with anger?",
        answers: [
            { text: "Explode and let it out", points: { Kratos: 3, Sam: 0, Joel: 2, Jin: 1, Connor: 0, Miles: 1, Brok: 3, Baldur: 3 } },
            { text: "Bottle it up inside", points: { Kratos: 1, Sam: 2, Joel: 2, Jin: 3, Connor: 2, Miles: 1, Brok: 0, Baldur: 1 } },
            { text: "Channel it into action", points: { Kratos: 2, Sam: 2, Joel: 2, Jin: 2, Connor: 2, Miles: 2, Brok: 2, Baldur: 2 } },
            { text: "Talk it out with someone", points: { Kratos: 0, Sam: 2, Joel: 0, Jin: 1, Connor: 3, Miles: 3, Brok: 2, Baldur: 0 } }
        ]
    },
    {
        text: "What's your ideal way to spend a weekend?",
        answers: [
            { text: "Training and improving skills", points: { Kratos: 3, Sam: 2, Joel: 1, Jin: 3, Connor: 2, Miles: 2, Brok: 1, Baldur: 2 } },
            { text: "Exploring somewhere new", points: { Kratos: 0, Sam: 2, Joel: 0, Jin: 1, Connor: 1, Miles: 3, Brok: 2, Baldur: 1 } },
            { text: "Relaxing with close friends", points: { Kratos: 0, Sam: 1, Joel: 1, Jin: 1, Connor: 2, Miles: 3, Brok: 3, Baldur: 0 } },
            { text: "Working on a personal mission", points: { Kratos: 2, Sam: 3, Joel: 2, Jin: 2, Connor: 3, Miles: 1, Brok: 2, Baldur: 1 } }
        ]
    },
    {
        text: "A friend betrays you. What do you do?",
        answers: [
            { text: "Confront them immediately", points: { Kratos: 3, Sam: 1, Joel: 2, Jin: 2, Connor: 2, Miles: 2, Brok: 3, Baldur: 3 } },
            { text: "Walk away and never speak to them again", points: { Kratos: 2, Sam: 2, Joel: 2, Jin: 2, Connor: 1, Miles: 1, Brok: 1, Baldur: 2 } },
            { text: "Try to understand why", points: { Kratos: 0, Sam: 2, Joel: 1, Jin: 2, Connor: 3, Miles: 2, Brok: 2, Baldur: 0 } },
            { text: "Get revenge", points: { Kratos: 3, Sam: 0, Joel: 1, Jin: 1, Connor: 0, Miles: 0, Brok: 1, Baldur: 2 } }
        ]
    },
    {
        text: "What would you do to protect someone you love?",
        answers: [
            { text: "Anything. No matter the cost.", points: { Kratos: 2, Sam: 1, Joel: 3, Jin: 2, Connor: 1, Miles: 2, Brok: 1, Baldur: 2 } },
            { text: "Fight, but try to keep my humanity", points: { Kratos: 1, Sam: 2, Joel: 1, Jin: 3, Connor: 2, Miles: 3, Brok: 2, Baldur: 0 } },
            { text: "Find a compromise", points: { Kratos: 0, Sam: 2, Joel: 0, Jin: 2, Connor: 3, Miles: 2, Brok: 2, Baldur: 0 } },
            { text: "Sacrifice myself instead", points: { Kratos: 1, Sam: 3, Joel: 1, Jin: 2, Connor: 2, Miles: 3, Brok: 1, Baldur: 0 } }
        ]
    },
    {
        text: "You gain incredible power. What do you do with it?",
        answers: [
            { text: "Use it for revenge", points: { Kratos: 3, Sam: 0, Joel: 2, Jin: 1, Connor: 0, Miles: 0, Brok: 1, Baldur: 3 } },
            { text: "Use it to protect others", points: { Kratos: 2, Sam: 2, Joel: 2, Jin: 3, Connor: 2, Miles: 3, Brok: 2, Baldur: 0 } },
            { text: "Hide it, power is dangerous", points: { Kratos: 1, Sam: 2, Joel: 2, Jin: 2, Connor: 2, Miles: 1, Brok: 1, Baldur: 1 } },
            { text: "Seek more power", points: { Kratos: 3, Sam: 1, Joel: 1, Jin: 1, Connor: 1, Miles: 1, Brok: 2, Baldur: 3 } }
        ]
    },
    {
        text: "What's your role in a team?",
        answers: [
            { text: "The leader, making tough calls", points: { Kratos: 3, Sam: 1, Joel: 3, Jin: 3, Connor: 2, Miles: 1, Brok: 1, Baldur: 2 } },
            { text: "The heart, keeping everyone together", points: { Kratos: 0, Sam: 2, Joel: 1, Jin: 1, Connor: 1, Miles: 3, Brok: 3, Baldur: 0 } },
            { text: "The logic, solving problems", points: { Kratos: 0, Sam: 2, Joel: 1, Jin: 2, Connor: 3, Miles: 2, Brok: 2, Baldur: 1 } },
            { text: "The lone wolf, working alone", points: { Kratos: 3, Sam: 3, Joel: 2, Jin: 2, Connor: 2, Miles: 0, Brok: 1, Baldur: 3 } }
        ]
    },
    {
        text: "How do you deal with loss and grief?",
        answers: [
            { text: "Keep moving forward, carrying the memory", points: { Kratos: 2, Sam: 3, Joel: 2, Jin: 3, Connor: 2, Miles: 2, Brok: 1, Baldur: 1 } },
            { text: "Let the rage consume you", points: { Kratos: 3, Sam: 0, Joel: 2, Jin: 1, Connor: 0, Miles: 0, Brok: 1, Baldur: 3 } },
            { text: "Isolate yourself", points: { Kratos: 2, Sam: 2, Joel: 2, Jin: 2, Connor: 2, Miles: 0, Brok: 1, Baldur: 2 } },
            { text: "Seek connection with others", points: { Kratos: 0, Sam: 2, Joel: 1, Jin: 1, Connor: 2, Miles: 3, Brok: 3, Baldur: 0 } }
        ]
    },
    {
        text: "What drives you forward in life?",
        answers: [
            { text: "Protecting those I care about", points: { Kratos: 3, Sam: 2, Joel: 3, Jin: 2, Connor: 2, Miles: 3, Brok: 2, Baldur: 1 } },
            { text: "Honor and duty", points: { Kratos: 2, Sam: 1, Joel: 1, Jin: 3, Connor: 2, Miles: 1, Brok: 1, Baldur: 2 } },
            { text: "Curiosity and discovery", points: { Kratos: 0, Sam: 2, Joel: 0, Jin: 1, Connor: 2, Miles: 2, Brok: 2, Baldur: 1 } },
            { text: "Survival", points: { Kratos: 2, Sam: 3, Joel: 2, Jin: 1, Connor: 1, Miles: 0, Brok: 1, Baldur: 2 } }
        ]
    },
    {
        text: "You see someone being bullied. What do you do?",
        answers: [
            { text: "Step in immediately", points: { Kratos: 2, Sam: 2, Joel: 2, Jin: 3, Connor: 2, Miles: 3, Brok: 3, Baldur: 0 } },
            { text: "Get help from others", points: { Kratos: 1, Sam: 2, Joel: 2, Jin: 2, Connor: 3, Miles: 2, Brok: 2, Baldur: 0 } },
            { text: "Walk away, not my problem", points: { Kratos: 1, Sam: 1, Joel: 1, Jin: 0, Connor: 1, Miles: 0, Brok: 1, Baldur: 2 } },
            { text: "Wait and see what happens", points: { Kratos: 0, Sam: 1, Joel: 1, Jin: 1, Connor: 2, Miles: 1, Brok: 1, Baldur: 1 } }
        ]
    },
    {
        text: "What's your reaction to failure?",
        answers: [
            { text: "Learn from it and try again", points: { Kratos: 2, Sam: 2, Joel: 2, Jin: 3, Connor: 3, Miles: 3, Brok: 2, Baldur: 1 } },
            { text: "Get angry and frustrated", points: { Kratos: 3, Sam: 1, Joel: 2, Jin: 1, Connor: 0, Miles: 1, Brok: 3, Baldur: 3 } },
            { text: "Blame others", points: { Kratos: 1, Sam: 0, Joel: 0, Jin: 0, Connor: 1, Miles: 0, Brok: 1, Baldur: 2 } },
            { text: "Give up", points: { Kratos: 0, Sam: 1, Joel: 0, Jin: 0, Connor: 1, Miles: 0, Brok: 0, Baldur: 1 } }
        ]
    },
    {
        text: "How do you handle stress?",
        answers: [
            { text: "Channel it into action", points: { Kratos: 3, Sam: 2, Joel: 2, Jin: 3, Connor: 2, Miles: 2, Brok: 2, Baldur: 2 } },
            { text: "Meditate or reflect", points: { Kratos: 1, Sam: 2, Joel: 1, Jin: 3, Connor: 2, Miles: 2, Brok: 1, Baldur: 0 } },
            { text: "Vent to someone", points: { Kratos: 0, Sam: 2, Joel: 1, Jin: 1, Connor: 2, Miles: 3, Brok: 3, Baldur: 1 } },
            { text: "Shut down and isolate", points: { Kratos: 2, Sam: 2, Joel: 2, Jin: 1, Connor: 1, Miles: 0, Brok: 1, Baldur: 2 } }
        ]
    },
    {
        text: "What's your philosophy on life?",
        answers: [
            { text: "Live honorably and die with purpose", points: { Kratos: 2, Sam: 1, Joel: 2, Jin: 3, Connor: 2, Miles: 1, Brok: 1, Baldur: 2 } },
            { text: "Live freely and explore everything", points: { Kratos: 0, Sam: 2, Joel: 0, Jin: 1, Connor: 1, Miles: 3, Brok: 3, Baldur: 1 } },
            { text: "Protect what matters, no matter what", points: { Kratos: 3, Sam: 2, Joel: 3, Jin: 2, Connor: 2, Miles: 2, Brok: 2, Baldur: 1 } },
            { text: "Survive and adapt", points: { Kratos: 2, Sam: 3, Joel: 2, Jin: 1, Connor: 1, Miles: 0, Brok: 1, Baldur: 2 } }
        ]
    }
];

// Character descriptions
const characterDescriptions = {
    Kratos: "You are Kratos. You've faced unimaginable loss and carry the weight of your past, but you're learning to be better. You're fierce, protective, and would do anything for those you love. Your strength is unmatched, but your greatest battle is within.",
    Brok: "You are Brok. You're blunt, honest, and have a heart of gold under all that rough exterior. You're a master craftsman who tells it like it is, and your loyalty is unwavering.",
    Baldur: "You are Baldur. You've been broken by circumstances beyond your control. You're driven by pain and seeking something to fill the void. Beneath the anger is someone who just wanted to feel something.",
    Miles: "You are Miles Morales. You're young, hopeful, and carry great responsibility with grace. You balance your duties with your humanity, always trying to do the right thing even when it's hard. You're the hero your city needs.",
    Joel: "You are Joel. You're a survivor who has done terrible things to protect what matters. You're practical, tough, and deeply loyal. You might not be a hero, but you're someone you can count on when everything falls apart.",
    Connor: "You are Connor. You're analytical, determined, and constantly questioning your purpose. You're searching for your identity while trying to do your mission. Your choices define who you become.",
    Sam: "You are Sam Bridges. You're a lone wolf who secretly craves connection. You've carried the weight of the world on your shoulders and kept going. You're resilient, compassionate, and understand that sometimes the hardest journeys are the most important.",
    Jin: "You are Jin Sakai. You're torn between honor and necessity. You adapt to survive, even if it means breaking traditions. You're a warrior who understands that sometimes the right path isn't the easy one."
};

// Character list for scoring
const characters = ["Kratos", "Brok", "Baldur", "Miles", "Joel", "Connor", "Sam", "Jin Sakai"];

// Store answer history for going back
let answerHistory = [];

// Quiz state
let currentQuestionIndex = 0;
let scores = {
    Kratos: 0,
    Brok: 0,
    Baldur: 0,
    Miles: 0,
    Joel: 0,
    Connor: 0,
    Sam: 0,
    Jin: 0
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
    // Save current question and selected points to history
    answerHistory.push({
        questionIndex: currentQuestionIndex,
        selectedPoints: points
    });
    
    // Add points to scores
    for (const [character, value] of Object.entries(points)) {
        if (scores[character] !== undefined) {
            scores[character] += value;
        }
    }
    
    // Move to next question or show result
    currentQuestionIndex++;
    
    // Update back button visibility
    const backBtn = document.getElementById('backQuestionBtn');
    if (backBtn) {
        backBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
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
    
    // Get last answer
    const lastAnswer = answerHistory.pop();
    
    // Subtract points from scores
    for (const [character, value] of Object.entries(lastAnswer.selectedPoints)) {
        if (scores[character] !== undefined) {
            scores[character] -= value;
        }
    }
    
    // Move to previous question
    currentQuestionIndex--;
    
    // Reload the question
    loadQuestion();
    
    // Update back button visibility
    const backBtn = document.getElementById('backQuestionBtn');
    if (backBtn) {
        backBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    }
}

// Show result
function showResult() {
    // Find character with highest score
    let maxScore = -1;
    let resultChar = "Kratos";
    
    for (const [character, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultChar = character;
        }
    }
    
    // Display result
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';
    resultCharacter.textContent = resultChar;
    resultDescription.textContent = characterDescriptions[resultChar];
    
    // Set character image
    const resultImage = document.getElementById('resultImage');
    const imageName = resultChar.toLowerCase() + '.jpg';
    resultImage.src = imageName;
    
    // Scroll to result
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    answerHistory = [];
    scores = {
        Kratos: 0,
        Brok: 0,
        Baldur: 0,
        Miles: 0,
        Joel: 0,
        Connor: 0,
        Sam: 0,
        Jin: 0
    };
    
    questionCard.style.display = 'block';
    resultCard.style.display = 'none';
    loadQuestion();
    
    // Reset progress
    progressBar.style.width = '0%';
    
    // Hide back button
    const backBtn = document.getElementById('backQuestionBtn');
    if (backBtn) {
        backBtn.style.display = 'none';
    }
}

// Go back to previous page
function goBack() {
    window.location.href = 'wayf.html';
}

// Event listeners
restartBtn.addEventListener('click', restartQuiz);
backBtn.addEventListener('click', goBack);

// Back question button handler
const backQuestionBtn = document.getElementById('backQuestionBtn');
if (backQuestionBtn) {
    backQuestionBtn.addEventListener('click', goToPreviousQuestion);
}

// Initialize quiz
loadQuestion();