// Questions and answers based on LoL Wild Rift male champions lore
const questions = [
    // Personality questions
    {
        text: "A mysterious stranger offers you great power. What do you do?",
        answers: [
            { text: "Take it immediately - power is meant to be seized", points: { Ezreal: 1, Zed: 3, Darius: 3, Draven: 3, Mordekaiser: 3, Brand: 3, Pantheon: 1, Graves: 2, TwistedFate: 2 } },
            { text: "Consider the consequences first", points: { Ezreal: 2, Yasuo: 2, LeeSin: 3, Garen: 2, Jax: 2, Varus: 1, Kennen: 3, Teemo: 2, Corki: 2 } },
            { text: "Refuse - power corrupts", points: { Garen: 3, Yasuo: 2, LeeSin: 2, Pantheon: 2, Kennen: 3, Teemo: 1, Corki: 1, Jax: 1, Graves: 0 } },
            { text: "Test it on someone else first", points: { Fizz: 3, Jhin: 3, Zed: 2, TwistedFate: 3, Draven: 2, Graves: 3, Brand: 1, Varus: 1, Mordekaiser: 2 } }
        ]
    },
    {
        text: "What drives you forward in life?",
        answers: [
            { text: "Revenge against those who wronged me", points: { Yasuo: 3, Zed: 3, Varus: 3, Brand: 3, Darius: 2, Pantheon: 2, Mordekaiser: 3, Jhin: 2, Graves: 1 } },
            { text: "Protecting my loved ones and home", points: { Garen: 3, LeeSin: 2, Pantheon: 2, Kennen: 3, Yasuo: 1, Jax: 2, Teemo: 2, Corki: 1, Ezreal: 1 } },
            { text: "Adventure and discovery", points: { Ezreal: 3, Fizz: 2, Corki: 3, Graves: 2, TwistedFate: 2, Draven: 1, Jax: 1, LeeSin: 1, Yasuo: 1 } },
            { text: "Proving my worth and becoming stronger", points: { Jax: 3, Darius: 2, Draven: 2, Zed: 2, Yasuo: 2, Pantheon: 3, Mordekaiser: 2, Brand: 2, Varus: 1 } }
        ]
    },
    {
        text: "How do you handle conflict?",
        answers: [
            { text: "Face it head-on with honor", points: { Garen: 3, Darius: 2, Pantheon: 3, LeeSin: 2, Jax: 2, Kennen: 2, Yasuo: 1, Teemo: 1, Corki: 1 } },
            { text: "Use tricks and deception", points: { Fizz: 3, Zed: 3, TwistedFate: 3, Jhin: 3, Ezreal: 2, Graves: 2, Teemo: 2, Shaco: 3, Draven: 1 } },
            { text: "Strike from the shadows", points: { Zed: 3, Jhin: 2, Varus: 2, Graves: 1, TwistedFate: 1, Yasuo: 1, Kennen: 2, Fizz: 2, Shaco: 3 } },
            { text: "Overwhelm with brute force", points: { Darius: 3, Mordekaiser: 3, Brand: 2, Draven: 3, Garen: 2, Pantheon: 2, Jax: 2, Graves: 1, Varus: 1 } }
        ]
    },
    {
        text: "A friend betrays you. What do you do?",
        answers: [
            { text: "Forgive but never forget", points: { Yasuo: 2, LeeSin: 3, Garen: 2, Kennen: 3, Pantheon: 2, Jax: 1, Teemo: 1, Corki: 2, Ezreal: 1 } },
            { text: "Destroy them without mercy", points: { Darius: 3, Zed: 3, Mordekaiser: 3, Brand: 3, Draven: 3, Varus: 2, Jhin: 2, Graves: 2, TwistedFate: 1 } },
            { text: "Find out why they did it", points: { Yasuo: 2, Ezreal: 2, TwistedFate: 2, Jax: 2, LeeSin: 2, Kennen: 2, Teemo: 2, Corki: 2, Pantheon: 1 } },
            { text: "Get revenge in the most creative way", points: { Jhin: 3, Fizz: 3, TwistedFate: 2, Draven: 2, Graves: 2, Zed: 1, Varus: 1, Brand: 1, Shaco: 3 } }
        ]
    },
    {
        text: "What is your greatest strength?",
        answers: [
            { text: "Unwavering determination", points: { Garen: 3, Darius: 3, Yasuo: 2, LeeSin: 2, Pantheon: 3, Jax: 2, Mordekaiser: 2, Brand: 2, Kennen: 1 } },
            { text: "Quick thinking and adaptability", points: { Ezreal: 3, Fizz: 3, TwistedFate: 3, Corki: 2, Graves: 2, Teemo: 2, Shaco: 2, Kennen: 1, Jhin: 1 } },
            { text: "Mastery of my chosen weapon", points: { Jax: 3, Yasuo: 3, Varus: 2, Draven: 2, Graves: 2, Zed: 2, Jhin: 2, Pantheon: 1, Garen: 1 } },
            { text: "Fearlessness in battle", points: { Darius: 3, Mordekaiser: 3, Pantheon: 2, Draven: 2, Brand: 2, Garen: 2, Jax: 1, LeeSin: 1, Varus: 1 } }
        ]
    },
    {
        text: "What is your greatest weakness?",
        answers: [
            { text: "My temper and rage", points: { Darius: 3, Brand: 3, Mordekaiser: 2, Draven: 2, Varus: 2, Jhin: 2, Yasuo: 1, Graves: 1, Zed: 1 } },
            { text: "Trusting people too easily", points: { Ezreal: 2, Teemo: 2, Corki: 2, LeeSin: 1, Garen: 1, Kennen: 2, Yasuo: 1, Jax: 1, Pantheon: 1 } },
            { text: "My pride and ego", points: { Draven: 3, Darius: 2, Zed: 2, TwistedFate: 2, Graves: 2, Jax: 2, Yasuo: 1, Pantheon: 1, Mordekaiser: 2 } },
            { text: "I care too much about others", points: { Garen: 3, LeeSin: 2, Pantheon: 2, Kennen: 2, Yasuo: 2, Teemo: 1, Corki: 1, Jax: 1, Ezreal: 0 } }
        ]
    },
    {
        text: "Someone insults your honor. How do you respond?",
        answers: [
            { text: "Challenge them to a duel", points: { Garen: 3, Yasuo: 2, Darius: 2, Jax: 2, Pantheon: 3, LeeSin: 1, Draven: 2, Kennen: 1, Teemo: 1 } },
            { text: "Prove them wrong with actions", points: { Ezreal: 2, LeeSin: 3, Jax: 2, Corki: 2, Yasuo: 1, Garen: 1, Pantheon: 1, Kennen: 2, Teemo: 2 } },
            { text: "Ignore them - actions speak louder", points: { Zed: 2, Fizz: 2, TwistedFate: 2, Jhin: 2, Varus: 2, Kennen: 2, Teemo: 2, Corki: 2, Graves: 1 } },
            { text: "Make sure everyone knows their insult", points: { Draven: 3, TwistedFate: 2, Graves: 2, Fizz: 2, Ezreal: 1, Jhin: 2, Shaco: 2, Zed: 1, Brand: 1 } }
        ]
    },
    // Game lore-based questions
    {
        text: "A magical artifact could grant your deepest desire but might corrupt you. Do you take it?",
        answers: [
            { text: "Yes - I can handle it", points: { Ezreal: 3, Brand: 3, Mordekaiser: 2, Zed: 2, Darius: 2, Draven: 2, Jhin: 2, Varus: 2, TwistedFate: 1 } },
            { text: "No - not worth the risk", points: { Garen: 3, Yasuo: 2, LeeSin: 2, Jax: 2, Pantheon: 2, Kennen: 3, Teemo: 2, Corki: 2, Graves: 1 } },
            { text: "Let someone else test it first", points: { Fizz: 3, TwistedFate: 3, Shaco: 3, Graves: 2, Ezreal: 1, Jhin: 1, Zed: 1, Draven: 1, Teemo: 1 } },
            { text: "Share its power with others", points: { Kennen: 2, LeeSin: 2, Pantheon: 1, Garen: 1, Yasuo: 1, Jax: 1, Teemo: 2, Corki: 2, Ezreal: 0 } }
        ]
    },
    {
        text: "You witness an injustice in your homeland. What do you do?",
        answers: [
            { text: "Fight against it openly", points: { Garen: 3, Yasuo: 2, Darius: 1, Pantheon: 3, Jax: 2, Kennen: 3, LeeSin: 2, Teemo: 2, Corki: 1 } },
            { text: "Work from the shadows to fix it", points: { Zed: 3, TwistedFate: 2, Graves: 2, Jhin: 2, Shaco: 2, Fizz: 1, Teemo: 1, Kennen: 1, Varus: 1 } },
            { text: "Leave and never look back", points: { Ezreal: 2, Fizz: 2, Graves: 2, Yasuo: 1, Brand: 2, Varus: 2, TwistedFate: 1, Draven: 1, Zed: 1 } },
            { text: "Wait for the right moment", points: { LeeSin: 2, Jax: 2, Kennen: 2, Yasuo: 1, Garen: 1, Pantheon: 1, Teemo: 2, Corki: 2, Ezreal: 1 } }
        ]
    },
    {
        text: "What role do you prefer in a group?",
        answers: [
            { text: "Frontline warrior/protector", points: { Garen: 3, Darius: 3, Pantheon: 3, Mordekaiser: 2, Jax: 2, LeeSin: 1, Kennen: 1, Teemo: 0, Corki: 0 } },
            { text: "Shadowy assassin/sneaky one", points: { Zed: 3, Jhin: 3, Fizz: 2, Shaco: 3, TwistedFate: 1, Graves: 1, Varus: 1, Kennen: 1, Teemo: 1 } },
            { text: "Ranged damage dealer", points: { Ezreal: 3, Varus: 3, Corki: 3, Jhin: 2, TwistedFate: 2, Graves: 2, Teemo: 2, Draven: 2, Kennen: 1 } },
            { text: "Lone wolf - I work alone", points: { Yasuo: 3, LeeSin: 2, Jax: 2, Brand: 2, Mordekaiser: 2, Varus: 2, Zed: 1, Graves: 1, Draven: 1 } }
        ]
    },
    {
        text: "What drives you?",
        answers: [
            { text: "Revenge against those who wronged me", points: { Yasuo: 3, Zed: 3, Varus: 3, Brand: 3, Mordekaiser: 2, Jhin: 2, Darius: 1, Pantheon: 1, Graves: 1 } },
            { text: "Protecting my people and homeland", points: { Garen: 3, Kennen: 3, LeeSin: 2, Pantheon: 2, Jax: 2, Teemo: 2, Corki: 2, Yasuo: 1, Ezreal: 1 } },
            { text: "Adventure and discovery", points: { Ezreal: 3, Fizz: 3, Corki: 2, Graves: 2, TwistedFate: 2, Jax: 1, LeeSin: 1, Yasuo: 0, Teemo: 1 } },
            { text: "Becoming the strongest", points: { Darius: 3, Jax: 3, Draven: 2, Mordekaiser: 2, Zed: 2, Yasuo: 1, Pantheon: 2, Brand: 2, Varus: 1 } }
        ]
    },
    {
        text: "You've been wrongfully accused of a crime. What do you do?",
        answers: [
            { text: "Prove my innocence through combat", points: { Garen: 2, Yasuo: 3, Darius: 2, Pantheon: 2, Jax: 2, LeeSin: 1, Draven: 1, Mordekaiser: 1, Brand: 1 } },
            { text: "Find the real criminal myself", points: { Zed: 3, Jhin: 2, TwistedFate: 2, Graves: 2, Varus: 2, Ezreal: 2, Fizz: 2, Corki: 1, Teemo: 1 } },
            { text: "Accept it and move on", points: { LeeSin: 2, Kennen: 2, Teemo: 2, Corki: 2, Yasuo: 1, Garen: 1, Jax: 1, Pantheon: 1, Ezreal: 1 } },
            { text: "Escape and become an outlaw", points: { Graves: 3, TwistedFate: 3, Fizz: 2, Shaco: 2, Ezreal: 1, Draven: 1, Zed: 1, Brand: 1, Varus: 1 } }
        ]
    },
    {
        text: "A mysterious force offers to bring someone back from the dead. Do you accept?",
        answers: [
            { text: "Yes - I miss them too much", points: { Yasuo: 2, Mordekaiser: 3, Brand: 2, Varus: 2, Zed: 1, Pantheon: 1, Darius: 1, Graves: 1, TwistedFate: 1 } },
            { text: "No - death should be respected", points: { Garen: 3, Kennen: 3, LeeSin: 3, Jax: 2, Pantheon: 2, Teemo: 2, Corki: 2, Ezreal: 1, Fizz: 1 } },
            { text: "Let them decide if they want to return", points: { LeeSin: 2, Kennen: 2, Jax: 2, Yasuo: 1, Garen: 1, Pantheon: 1, Teemo: 2, Corki: 2, Ezreal: 1 } },
            { text: "Use them for a greater purpose", points: { Mordekaiser: 3, Zed: 2, Jhin: 2, Brand: 2, Darius: 1, Varus: 1, TwistedFate: 1, Graves: 1, Shaco: 1 } }
        ]
    },
    {
        text: "What's your weapon of choice?",
        answers: [
            { text: "A massive sword or axe", points: { Garen: 3, Darius: 3, Yasuo: 1, Pantheon: 2, Jax: 2, Mordekaiser: 3, Draven: 2, Brand: 1, Varus: 0 } },
            { text: "Dual blades or daggers", points: { Zed: 3, Yasuo: 2, Kennen: 2, Shaco: 3, Fizz: 2, Jax: 1, Graves: 0, TwistedFate: 0, Teemo: 0 } },
            { text: "Ranged weapons (bow/gun)", points: { Varus: 3, Jhin: 3, Graves: 3, Corki: 2, TwistedFate: 2, Ezreal: 2, Draven: 1, Teemo: 1, Kennen: 0 } },
            { text: "My bare hands/magic fists", points: { LeeSin: 3, Brand: 3, Ezreal: 2, Pantheon: 1, Jax: 1, Mordekaiser: 1, Yasuo: 0, Zed: 0, Garen: 0 } }
        ]
    },
    {
        text: "What is your attitude toward magic?",
        answers: [
            { text: "Embrace it - use its full power", points: { Ezreal: 3, Brand: 3, TwistedFate: 2, Jhin: 2, Varus: 2, Mordekaiser: 2, Kennen: 2, Corki: 1, Fizz: 1 } },
            { text: "Distrust it - magic corrupts", points: { Garen: 3, Darius: 2, Jax: 2, Graves: 1, Draven: 1, Yasuo: 1, LeeSin: 1, Pantheon: 2, Teemo: 1 } },
            { text: "Use it pragmatically", points: { Zed: 2, LeeSin: 2, Kennen: 2, Fizz: 2, TwistedFate: 2, Varus: 1, Corki: 1, Teemo: 1, Ezreal: 1 } },
            { text: "It's just another tool", points: { Jax: 2, Pantheon: 2, Yasuo: 1, Graves: 1, Draven: 1, Mordekaiser: 1, Brand: 1, Zed: 1, Shaco: 1 } }
        ]
    },
    {
        text: "What is most important in battle?",
        answers: [
            { text: "Raw power and strength", points: { Darius: 3, Mordekaiser: 3, Brand: 2, Draven: 2, Garen: 2, Pantheon: 2, Jax: 2, Varus: 1, LeeSin: 1 } },
            { text: "Strategy and cunning", points: { Zed: 3, Jhin: 3, TwistedFate: 3, Fizz: 2, Shaco: 3, Kennen: 2, Teemo: 2, Ezreal: 1, Graves: 1 } },
            { text: "Speed and reflexes", points: { Yasuo: 3, LeeSin: 3, Kennen: 2, Fizz: 2, Ezreal: 2, Zed: 1, Teemo: 2, Corki: 2, Jhin: 1 } },
            { text: "Protecting your allies", points: { Garen: 3, Pantheon: 3, LeeSin: 2, Jax: 2, Kennen: 2, Teemo: 1, Corki: 1, Yasuo: 1, Ezreal: 0 } }
        ]
    },
    {
        text: "You discover a hidden ancient power. What do you do?",
        answers: [
            { text: "Claim it for myself", points: { Ezreal: 3, Brand: 3, Mordekaiser: 2, Zed: 2, Darius: 2, Draven: 2, Varus: 2, Jhin: 2, TwistedFate: 1 } },
            { text: "Protect it from others", points: { Garen: 3, Kennen: 3, Jax: 2, LeeSin: 2, Pantheon: 2, Teemo: 2, Corki: 2, Yasuo: 1, Graves: 1 } },
            { text: "Study it to understand", points: { LeeSin: 2, Kennen: 2, Corki: 2, Ezreal: 2, Yasuo: 1, Jax: 1, Pantheon: 1, Garen: 0, Teemo: 1 } },
            { text: "Share it with everyone", points: { Kennen: 2, Teemo: 2, Corki: 2, Garen: 1, Pantheon: 1, LeeSin: 1, Jax: 1, Yasuo: 0, Ezreal: 0 } }
        ]
    },
    {
        text: "Your home is under attack. What do you do?",
        answers: [
            { text: "Defend it to the death", points: { Garen: 3, Darius: 2, Pantheon: 3, Mordekaiser: 1, Jax: 2, LeeSin: 2, Kennen: 3, Teemo: 2, Corki: 2 } },
            { text: "Counterattack the enemy", points: { Darius: 3, Draven: 2, Zed: 2, Yasuo: 2, Varus: 2, Brand: 2, Jhin: 2, Graves: 2, TwistedFate: 1 } },
            { text: "Evacuate everyone first", points: { LeeSin: 2, Garen: 1, Pantheon: 1, Kennen: 2, Teemo: 2, Corki: 2, Jax: 1, Yasuo: 1, Ezreal: 1 } },
            { text: "Find their leader and end it", points: { Zed: 3, Jhin: 3, Varus: 2, Graves: 2, TwistedFate: 2, Fizz: 2, Darius: 1, Brand: 1, Mordekaiser: 1 } }
        ]
    },
    {
        text: "What does your ideal life look like?",
        answers: [
            { text: "Peaceful with loved ones", points: { Garen: 2, LeeSin: 2, Kennen: 2, Teemo: 2, Corki: 2, Jax: 1, Pantheon: 1, Yasuo: 1, Ezreal: 1 } },
            { text: "Endless adventure and treasure", points: { Ezreal: 3, Fizz: 3, Graves: 2, TwistedFate: 2, Corki: 2, Jax: 1, Yasuo: 1, LeeSin: 0, Garen: 0 } },
            { text: "Respected and powerful", points: { Darius: 3, Draven: 3, Zed: 2, Mordekaiser: 2, Jax: 2, Pantheon: 2, Brand: 2, Varus: 1, Jhin: 1 } },
            { text: "Free from any obligations", points: { Yasuo: 2, Fizz: 2, Graves: 2, TwistedFate: 2, Ezreal: 1, Teemo: 1, Corki: 1, Zed: 1, Jhin: 1 } }
        ]
    }
];

// Champion descriptions based on lore [citation:1][citation:2][citation:6]
const championDescriptions = {
    Ezreal: "You are Ezreal. A dashing adventurer who plunders forgotten catacombs and gets involved in ancient curses. You're brave, daring, and handle hopeless situations with ease. Trouble follows you everywhere - or maybe you just have a talent for finding it. Your mystical Shuriman glove unleashes devastating arcane explosions, and your curiosity knows no bounds.",
    Fizz: "You are Fizz. An amphibious yordle from Bilgewater who commands beasts from the deep. You're elusive, mischievous, and love leading allies and enemies alike around by the nose. Despite your playful nature, you're fiercely loyal to those you consider friends.",
    Garen: "You are Garen. A proud and noble warrior from Demacia who fights in the Fearless Vanguard. You're beloved by your comrades and respected by your enemies. Wearing magic-resistant armor and wielding a mighty broadsword, you face mages and spellcasters with righteous fury.",
    Gragas: "You are Gragas. A formidable, scrappy brewmaster from the Freljord searching for rare ingredients to craft the perfect ale. You're impulsive, love a good brawl, and when you show up, drinking and destruction follow in that exact order.",
    Jax: "You are Jax. The last known weapons master of Icathia, unrivaled in weapon use and biting sarcasm. You roam the world testing warriors to see if they're strong enough to fight beside you against the coming darkness.",
    Jhin: "You are Jhin. A meticulous criminal psychopath who believes murder is art. You were once a prisoner, now free to create brutal works of art. Your Whisper pistol is a precise killing tool, and every shot is a masterpiece.",
    Brand: "You are Brand. Once Kegan Rodhe, you sought a World Rune and were consumed by living flame. You now roam Valoran seeking other Runes, sworn to revenge for wrongs you never suffered. Fire is your weapon and your curse.",
    Nunu: "You are Nunu (with Willump!). You set out to prove you were a hero by slaying a monster, only to find a lonely Yeti who needed a friend. Together with Willump, you ramble across the Freljord having adventures and searching for your mother.",
    Mordekaiser: "You are Mordekaiser. Twice slain, thrice born. An ageless, deathless warlord from a forgotten era. You wield souls in necromantic service and wait for the day you'll claim dominion over both the living and the dead.",
    Yasuo: "You are Yasuo. A disgraced Ionian swordsman seeking redemption for a crime you didn't commit. You're torn between your desire for honor and the reality of being hunted. Your wind technique and blade have never been sharper.",
    Zed: "You are Zed. A shadow assassin who betrayed his order to embrace forbidden techniques. You believe the path to power requires sacrifice, and you're willing to make those sacrifices to protect Ionia - even if no one understands your methods.",
    LeeSin: "You are Lee Sin. A blind monk who sacrificed his eyes for the Dragon's fire. You seek to atone for your past through discipline and service. Your kicks can shatter mountains, but your spirit is what truly makes you powerful.",
    Darius: "You are Darius. The Hand of Noxus. A ruthless general who rose through the ranks through sheer strength and determination. You believe Noxian might makes right, and you'll crush anyone who threatens your homeland.",
    Draven: "You are Draven. Darius's younger brother, an egotistical executioner who turns every kill into a spectacle. You live for the crowd's applause and have never met a mirror you didn't love. But beneath the showmanship, you're deadly.",
    Pantheon: "You are Pantheon. The Aspect of War reborn, stripped of divinity and fighting as a mortal. You've faced gods and lived. You don't fight for glory - you fight because someone has to.",
    Graves: "You are Graves. An outlaw with a shotgun, always with a cigar. You're gruff, direct, and hate being double-crossed - which happens often. You and Twisted Fate have a complicated relationship, but some bonds never break.",
    TwistedFate: "You are Twisted Fate. A card-sharping gambler who can teleport with magical cards. You're slick, charming, and always looking for the next big score. Never play cards with you - you always win.",
    Varus: "You are Varus. A Darkin arrow, two mortals fused into one being. You seek revenge against those who imprisoned you. Your bow never misses, and your corruption spreads with every shot.",
    Kennen: "You are Kennen. The Heart of the Tempest, dedicated to preserving the sacred balance of Ionia. You're small but mighty, wielding the devastating power of the storm to protect the world you love.",
    Teemo: "You are Teemo. The Swift Scout, one of Bandle City's most formidable protectors. You travel the world with boundless optimism, seeking to earn every merit badge. Never underestimate the Scout's Code - and watch out for shrooms.",
    Corki: "You are Corki. The Daring Bombardier, an aerospace innovator from Piltover. You have a magnificent mustache and an even more magnificent flying machine. Bogies beware - the Screaming Yipsnakes are watching the skies."
};

// Champion list
const champions = ["Ezreal", "Fizz", "Garen", "Gragas", "Jax", "Jhin", "Brand", "Nunu", "Mordekaiser", "Yasuo", "Zed", "LeeSin", "Darius", "Draven", "Pantheon", "Graves", "TwistedFate", "Varus", "Kennen", "Teemo", "Corki"];

// Store answer history
let answerHistory = [];

// Quiz state
let currentQuestionIndex = 0;
let scores = {
    Ezreal: 0, Fizz: 0, Garen: 0, Gragas: 0, Jax: 0, Jhin: 0, Brand: 0, Nunu: 0,
    Mordekaiser: 0, Yasuo: 0, Zed: 0, LeeSin: 0, Darius: 0, Draven: 0, Pantheon: 0,
    Graves: 0, TwistedFate: 0, Varus: 0, Kennen: 0, Teemo: 0, Corki: 0
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
    
    for (const [champion, value] of Object.entries(points)) {
        if (scores[champion] !== undefined) {
            scores[champion] += value;
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
    
    for (const [champion, value] of Object.entries(lastAnswer.selectedPoints)) {
        if (scores[champion] !== undefined) {
            scores[champion] -= value;
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
    let resultChamp = "Ezreal";
    
    for (const [champion, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultChamp = champion;
        }
    }
    
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';
    resultCharacter.textContent = resultChamp;
    resultDescription.textContent = championDescriptions[resultChamp];
    
    const resultImage = document.getElementById('resultImage');
    const imageName = resultChamp.toLowerCase() + '.jpg';
    resultImage.src = imageName;
    
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    answerHistory = [];
    scores = {
        Ezreal: 0, Fizz: 0, Garen: 0, Gragas: 0, Jax: 0, Jhin: 0, Brand: 0, Nunu: 0,
        Mordekaiser: 0, Yasuo: 0, Zed: 0, LeeSin: 0, Darius: 0, Draven: 0, Pantheon: 0,
        Graves: 0, TwistedFate: 0, Varus: 0, Kennen: 0, Teemo: 0, Corki: 0
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