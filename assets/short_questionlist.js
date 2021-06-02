// var trivaQuestionList = [ 

const tqList = [
    {
    question: "What is the name of Yoda’s home?",
    answer: "Dagobah",
    choices: ["Dagobah", "Camelot", "Dantooine", "Mustafar"]
    },
    {
    question: "What is the name of the Wookiees’ homeworld?",
    answer: "Kashyyyk",
    choices: ["Jakku", "Miraku", "Kashyyyk", "Jedda"]
    },
    {
    question: "What species stole the plans to the Death Star?",
    answer: "Bothans",
    choices: ["Tauri", "Mandalorians", "Andorians", "Bothans"]
    },
    {
    question: "Who built C-3P0?",
    answer: "Anakin Skywalker",
    choices: ["Luke Skywalker", "Anakin Skywalker", "Unkar Plutt", "Qui-Gon Jinn"]
    },
    {
    question: "What is the name of Boba Fetts ship?",
    answer: "Slave 1",
    choices: ["Marauder 6", "Slave 1", "Malevolence", "Bounty 6"]
    },
    {
    question: "How old is Yoda when he dies?",
    answer: "900",
    choices: ["60", "90", "600", "900"]
    },
    {
    question: "C-3P0 is fluent in how many languages?",
    answer: "more than 60,000,000",
    choices: ["more than 60,000,000", "exactly 2,587,382", "42", "Less than 6,000,000"]
    },
    {
    question: "What is the Toydarian’s name who owned Anakin Skywalker?",
    answer: "Watto",
    choices: ["Watto", "Wicket", "Wando", "Wacko"]
    }, 
    {
    question: "What is the name of the Death Star’s original commander?",
    answer: "Grand Moff Tarkin",
    choices: ["Grand Moff Tarkin", "Captain Needa", "Admiral Piett", "Grand Admiral Thrawn"]
    }, 
    {
    question: "Who is Chancellor Palpatine’s Sith alter-ego?",
    answer: "Darth Sidious",
    choices: ["Darth Plagueis", "Darth Bane", "Darth Sidious", "Darth Tyranus"]
    }, 
    {
    question: "Who was the Jedi master that ordered to create clones?",
    answer: "Syfo Dyas",
    choices: ["Plo Koon", "Syfo Dyas", "Lord Tyranus", "Eeth Koth"]
    }, 
    {
    question: "What is the substance that powers the lightsabers?",
    answer: "Kyber Crystals",
    choices: ["Yarael Power Cylinders", "MRG-83 Cylinders", "Yandarian Crystals", "Kyber Crystals"]
    }, 
    {
    question: "Darth Tyranus is also known as?",
    answer: "Count Dooku",
    choices: ["Chancellor Palpatine", "Syfo Dyas", "Count Dooku", "Shmii Skywalker"]
    }, 
    {
    question: "How many engines does the X-Wing Fighter have?",
    answer: "Four",
    choices: ["One", "Two", "Four", "Eight"]
    }, 
    {
    question: "In Return of The Jedi, what planet is the second Death Star orbiting?",
    answer: "The forest moon of Endor",
    choices: ["The forest moon of Endor", "Hoth", "Takkodana", "Yavin IV"]
    }, 
    {
    question: "What alien race does Admiral Ackbar belong to?",
    answer: "Mon Calamari",
    choices: ["Rodian", "Toydarian", "Trandoshan", "Mon Calamari"]
    }, 
    {
    question: "What is the name of the planet where Anakin Skywalker loses the duel against Obi-Wan?",
    answer: "Mustafar",
    choices: ["Mandora", "Mustafar", "Moogarian", "Mandalore"]
    }, 
    {
    question: "What is the battle armor used by Boba Fett?",
    answer: "Mandalorian",
    choices: ["Dark Horn", "Clan Fett", "Mandalorian", "Mustafarian"]
    }, 
    {
    question: "In the first Death Star, what detention block was Princess Leia being held in?",
    answer: "AA-23",
    choices: ["AA-23", "42A", "TK-27", "AK-47"]
    }, 
    {
    question: "What did Han and Luke ride on in the snow while in Hoth?",
    answer: "Tauntaun",
    choices: ["Blurrg", "Tauntaun", "Bantha", "Kaadu"]
    }, 
    {
    question: "What is the name of Han’s friend running the cloud city of Bespin?",
    answer: "Lando Calrissian",
    choices: ["Lando Calrissian", "Obi-Wan Kenobi", "Chewie", "Bib Fortuna"]
    }, 
    {
    question: "Who is the creator of Star Wars?",
    answer: "George Lucas",
    choices: ["Stephen Spielberg", "John Williams", "Gene Roddenberry", "George Lucas"]
    }, 
    {
    question: "Jedi Council consists of how many members?",
    answer: "12",
    choices: ["6", "10", "12", "16"]
    }, 
    {
    question: "What were Luke’s aunt and uncle’s jobs on Tatooine?",
    answer: "Moisture farmers",
    choices: ["Mechanics", "Nerf Herders", "Moisture farmers", "Droid Sales"]
    }, 
    {
    question: "What color is Mace Windu’s lightsaber?",
    answer: "Purple",
    choices: ["Red", "Blue", "Orange", "Purple"]
    }, 
    {
    question: "What does AT-AT stand for?",
    answer: "All Terrain Armored Transport",
    choices: ["Any Terrain, Any Time", "Alpha Type Armor Transport", "All Terrain Armored Transport", " Aunt Themla’s Absolute Terror"]
    }, 
    {
    question: "What odds does C-3P0 give Han for successfully navigating the asteroid field?",
    answer: "3720 to 1",
    choices: ["60 to 1", "3720 to 1", "6820 to 1", "8728320 to 1"]
    }, 
    {
    question: "What was the name of the planet that the clones were made on?",
    answer: "Kamino",
    choices: ["El Camino", "Kamino", "Corriander", "Corellia"]
    }, 
    {
    question: "What is the largest annual podrace in the world?",
    answer: "Boonta Eve Classic",
    choices: ["Dianoga Drag", "Kessell Run", "Boonta Eve Classic", "Corellian Cross"]
    }, 
    {
    question: "Where was Luke Skywalker originally headed to pick up power converters?",
    answer: "Tosche Station",
    choices: ["Lor San Tekka", "Nagrall", "Mos Eisley", "Tosche Station"]
    }, 
    {
    question: "Who’s the only rebel pilot to survive all three movies in the original trilogy?",
    answer: "Wedge Antilles",
    choices: ["Wedge Antilles", "Hera Syndulla", "Jek Tono Porkins", "Biggs Darklighter"]
    }, 
    {
    question: "What race of aquatic sentient beings does Jar-Jar Binks belong to?",
    answer: "Gungans",
    choices: ["Zabraks", "Gungans", "Wookies", "Mon Calamari"]
    }, 
    {
    question: "What does the Emperor say is Lukes weakness?",
    answer: "Faith in his friends",
    choices: ["Faith in his friends", "Overconfidence", "Lack of experience", "Poor mentorship"]
    }, 
    {
    question: "What does Luke say is the Emperors weakness?",
    answer: "Overconfidence",
    choices: ["Overconfidence", "Anger", "Pride", "Faith in his minions"]
    }, 
    {
    question: "When Luke asked what was in the cave on Dagobah, what was Yodas response?",
    answer: "Only what you take with you",
    choices: ["Do or do not, there is no try", "Fear, anger, aggression", "Only what you take with you", "Nothing you can not handle with confidence"]
    }, 
    {
    question: "What does TIE stand for in TIE Fighter?",
    answer: "Twin Ion Engines",
    choices: ["Terrain Indifferent Exploration", "Twin Induction Engines", "Twin Ion Engines", "Terrain Infiltration Equalizers"]
    }, 
    {
    question: "Who adopts Leia?",
    answer: "Bail Organa",
    choices: ["Antonio Motti", "Padme Amidala", "Bail Organa", "Uncle Owen and Aunt Beru"]
    }, 
    {
    question: "What is the name of the order Darth Sidious gives the clone troopersto kill all Jedi?",
    answer: "Order 66",
    choices: ["Plan 96", "Order 66", "Order TK-421", "Plan Omega 6"]
    }, 
    {
    question: "In The Empire Strikes Back, name the two people Darth Vader kills",
    answer: "Admiral Ozzel and Captain Needa",
    choices: ["Admiral Thrawn and Governor Pryce", "Captain Statler and Captain Waldorf", "Admiral Ozzel and Captain Needa", "Captain Tekka and Captain Neeth"]
    }, 
    {
    question: "What planet is Ezra Bridger from?",
    answer: "Lothal",
    choices: ["Tatooine", "Alderaan", "Lothal", "Coruscant"]
    }, 
    {
    question: "What planet does the Rebel Alliance on in beginning of The Empire Strikes Back?",
    answer: "Hoth",
    choices: ["Hoth", "Tatooine", "Corellia", "Dantooine"]
    }, 
    {
    question: "In what substance is Han Solo frozen for delivery to Jabba the Hutt?",
    answer: "Carbonite",
    choices: ["Jelloitium", "Adamantium", "Mithril", "Carbonite"]
    }, 
    {
    question: "What planet does Rey live on in The Force Awakens?",
    answer: "Jakku",
    choices: ["Exegol",  "Tatooine", "Geonosis", "Jakku"]
    }, 
    {
    question: "Who is the cantina owner on Takodana?",
    answer: "Maz Katana",
    choices: ["Maz Katana", "Dexter Jettster", "Jex Wuher", "Figrin Dan"]
    }, 
    {
    question: "What is the call sign of the Stormtrooper ambushed for his armor on the Death Star?",
    answer: "TK-421",
    choices: ["AA-42", "TK-421", "MK-187", "A821"]
    },
    {
    question: "In Star Wars, what do they call the invisible power that binds the galaxy together?",
    answer: "The Force",
    choices: ["The Force", "Gluesticks", "Kraggle", "Mycelium"]
    },
    {
      question: "Which character is partially named after George Lucas’ son?",
      answer: "Dexter Jettster",
      choices: ["Lando Calrissian", "Dexter Jettster", "Chewbacca", "Bail Organa"]
    },
    {
      question: "Who kissed Leia first?",
      answer: "Luke Skywalker",
      choices: ["Han Solo", "Anakin Skywalker", "Ben Kenobi", "Luke Skywalker"]
    }     
  ];

