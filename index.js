const phrases = [
    {
        phrase: "Никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас. Сами предложат и сами всё дадут!",
        author: "Воланд"
    },
    {
        phrase: "Кто сказал тебе, что нет на свете настоящей, верной, вечной любви? Да отрежут лгуну его гнусный язык!",
        author: "Михаил Булгаков"
    },
    {
        phrase: "Мы говорим с тобой на разных языках, как всегда, но вещи, о которых мы говорим, от этого не меняются.",
        author: "Воланд"
    },
    {
        phrase: "Согласись, что перерезать волосок уж наверно может лишь тот, кто подвесил?",
        author: "Иешуа Га-Ноцри"
    },
    {
        phrase: "Все теории стоят одна другой. Есть среди них и такая, согласно которой каждому будет дано по его вере. Да сбудется же это!",
        author: "Воланд"
    },
    {
        phrase: "Зачем же гнаться по следам того, что уже давно окончено?",
        author: "Воланд"
    },
    {
        phrase: "Рукописи не горят.",
        author: "Воланд"
    },
    {
        phrase: "Слушай беззвучие, слушай и наслаждайся тем, чего тебе не давали в жизни, — тишиной.",
        author: "Маргарита"
    },
    {
        phrase: "Что бы делало твое добро, если бы не существовало зла, и как бы выглядела земля, если бы с нее исчезли тени?",
        author: "Воланд"
    },
    {
        phrase: "Злых людей нет на свете, есть только люди несчастливые.",
        author: "Иешуа Га-Ноцри"
    },
    {
        phrase: "Несчастный человек жесток и черств. А все лишь из-за того, что добрые люди изуродовали его.",
        author: "Иешуа Га-Ноцри"
    },
    {
        phrase: "Трудный народ эти женщины!",
        author: "Азазелло"
    },
    {
        phrase: "Тот, кто любит, должен разделять участь того, кого он любит.",
        author: "Воланд"
    },
    {
        phrase: "Люди, как люди. Любят деньги, но ведь это всегда было... Человечество любит деньги, из чего бы те ни были сделаны, из кожи ли, из бумаги ли, из бронзы или золота. Ну, легкомысленны... ну, что ж... обыкновенные люди... в общем, напоминают прежних... квартирный вопрос только испортил их...",
        author: "Воланд"
    },
    {
        phrase: "Да, человек смертен, но это было бы еще полбеды. Плохо то, что он иногда внезапно смертен, вот в чем фокус!",
        author: "Воланд"
    },
    {
        phrases: "Трусость - один из самый страшных человеческих пороков. Трусость - самый страшный человеческий порок",
        author: "Иешуа Га-Ноцри"
    }, 
    {
        phrases: "Трусость - самый страшный человеческий порок",
        author: "Понтий Пилат"
    }, 
]

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

let audio = undefined
const changeBtn = document.getElementById("newPhraseBtn")
changeBtn.addEventListener("click", () => {
    if (audio) {
        audio.stop()
        smoothly(author, 'textContent', "");
    }     
    let randIndex = getRandomIndex(phrases)

    audio = new Howl({
        src: [`audio/${randIndex}.m4a`],
        volume: 0.5,

        onload: function () {
            smoothly(portrait, 'src', `img/${randIndex}.jpg`)
            smoothly(phrase, 'textContent', phrases[randIndex].phrase)
        },

        onend: function () {
            smoothly(author, 'textContent', phrases[randIndex].author);
        }
    });
    audio.play()
})



const phrase = document.getElementById('phrase')
const portrait = document.getElementById('portrait')
const author = document.getElementById('author')
const audioEl = document.getElementById('audio')