const phrases = [
    {
        phrase: "Никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас. Сами предложат и сами всё дадут!",
        author: "Воланд"
    }
]

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

let audio = undefined
const changeBtn = document.getElementById("newPhraseBtn")
changeBtn.addEventListener("click", () => {
    if (audio) {
        audio.stop()
    }     
    let randIndex = getRandomIndex(phrases)

    audio = new Howl({
        src: [`audio/${randIndex}.m4a`],
        volume: 0.5,

        onplay: function () {
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

$.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
     var $this = $(this);
     $this.html(string.replace(/./g, '<span class="new">$&</span>'));
     $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
     });
    });
   };
   $('#example').show();
   $('#example').animate_Text();