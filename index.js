let images = []

function preloadImage(url) {
    let img = new Image()
    img.src = url
    images.push(img)
}

for (let i = 0; i < 15; i++) {
    preloadImage(`img/${i}.jpg`);
}


let phrases = [
    {
        ind: 0,
        phrase: "Никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас. Сами предложат и сами всё дадут!",
        author: "Воланд"
    },
    // {
    //     ind: 1,
    //     phrase: "Кто сказал тебе, что нет на свете настоящей, верной, вечной любви? Да отрежут лгуну его гнусный язык!",
    //     author: "Михаил Булгаков"
    // },
    {
        ind: 2,
        phrase: "Мы говорим с тобой на разных языках, как всегда, но вещи, о которых мы говорим, от этого не меняются.",
        author: "Воланд"
    },
    {
        ind: 3,
        phrase: "Перерезать волосок уж наверно может лишь тот, кто подвесил?",
        author: "Иешуа Га-Ноцри"
    },
    {
        ind: 4,
        phrase: "Все теории стоят одна другой. Есть среди них и такая, согласно которой каждому будет дано по его вере. Да сбудется же это!",
        author: "Воланд"
    },
    {
        ind: 5,
        phrase: "Зачем же гнаться по следам того, что уже давно окончено?",
        author: "Воланд"
    },
    {
        ind: 6,
        phrase: "Простите, не поверю. Этого быть не может. Рукописи не горят.",
        author: "Воланд"
    },
    {
        ind: 7,
        phrase: "Слушай беззвучие, слушай и наслаждайся тем, чего тебе не давали в жизни, — тишиной.",
        author: "Маргарита"
    },
    {
        ind: 8,
        phrase: "Что бы делало твое добро, если бы не существовало зла, и как бы выглядела земля, если бы с нее исчезли тени?",
        author: "Воланд"
    },
    {
        ind: 9,
        phrase: "Злых людей нет на свете.",
        author: "Иешуа Га-Ноцри"
    },
    {
        ind: 10,
        phrase: "Трудный народ эти женщины!",
        author: "Азазелло"
    },
    {
        ind: 11,
        phrase: "Тот, кто любит, должен разделять участь того, кого он любит.",
        author: "Воланд"
    },
    {
        ind: 12,
        phrase: "Люди, как люди. Любят деньги, но ведь это всегда было... Человечество любит деньги, из чего бы те ни были сделаны, из кожи ли, из бумаги ли, из бронзы или золота. Ну, легкомысленны... ну, что ж... обыкновенные люди... в общем, напоминают прежних... квартирный вопрос только испортил их...",
        author: "Воланд"
    },
    {
        ind: 13,
        phrase: "Да, человек смертен, но это было бы еще полбеды. Плохо то, что он иногда внезапно смертен.",
        author: "Воланд"
    },
    {
        ind: 14,
        phrase: "Трусость - один из самый страшных человеческих пороков.",
        author: "Иешуа Га-Ноцри"
    }
]

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

let audio = undefined
const changeBtn = document.getElementById("newPhraseBtn")
changeBtn.addEventListener("click", (ev) => {
    if (phrases.length == 0) {
        smoothly(portraitEl, 'src', `img/100.jpg`)
        smoothly(phraseEl, 'textContent', "Вовремя прочитанная книга — огромная удача.")
        smoothly(authorEl, 'textContent', "Петр Павленко")
        return audio.stop()
    }

    if (audio) {
        audio.stop()
    } else {
        smoothly(changeBtn, 'textContent', "Узнать ещё")
        smoothly(authorEl, 'textContent', "")
    } 

    let randIndex = getRandomIndex(phrases)
    let randEl = phrases[randIndex]

    audio = new Howl({
        src: [`audio/${randEl.ind}.m4a`],
        volume: 0.5,

        onplay: function () {
            smoothly(portraitEl, 'src', images[randEl.ind].src)
            smoothly(phraseEl, 'textContent', randEl.phrase)
            smoothly(authorEl, 'textContent', "")
        },

        // onstop: function () {
        //     smoothly(authorEl, 'textContent', "");
        // },

        onend: function () {
            smoothly(authorEl, 'textContent', randEl.author);
        }
    });
    audio.play()

    phrases.splice(randIndex, 1);
})



const phraseEl = document.getElementById('phrase')
const portraitEl = document.getElementById('portrait')
const authorEl = document.getElementById('author')
const audioEl = document.getElementById('audio')