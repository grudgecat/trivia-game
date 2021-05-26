var trivaQuestionList = [
    {
    question: "What is the name of Yoda’s home?",
    answer: "Dagobah",
    filler1: "Camelot",
    filler2: "Dantooine",
    filler3: "Mustafar"
    },
    {
    question: "What is the name of the Wookiees’ homeworld?",
    answer: "Kashyyyk",
    filler1: "Jakku",
    filler2: "Miraku",
    filler3: "Jedda"
    },
    {
    question: "What species stole the plans to the Death Star?",
    answer: "Bothans",
    filler1: "Tauri",
    filler2: "Mandalorians",
    filler3: "Andorians"
    },
    {
    question: "Who built C-3P0?",
    answer: "Anakin Skywalker",
    filler1: "Luke Skywalker",
    filler2: "Unkar Plutt",
    filler3: "Qui-Gon Jinn"
    },
    {
    question: "What is the name of Boba Fett’s ship?",
    answer: "Slave 1",
    filler1: "Marauder 6",
    filler2: "Malevolence",
    filler3: "Bounty 6"
    },
    {
    question: "How old is Yoda when he dies?",
    answer: "900",
    filler1: "90",
    filler2: "600",
    filler3: "6000"
    }
    ];

// console.log(trivaQuestionList);
// console.log(JSON.stringify(trivaQuestionList));

localStorage.setItem("triviaQuestionList", JSON.stringify(trivaQuestionList));
