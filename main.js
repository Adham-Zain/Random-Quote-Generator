var quotes = [
    `" وما الحياة إلا وهمٌ عابر. " <br>
     " Life is but a fleeting illusion. "`,
    `" لا تُطفئ نور قلبك، حتى وإن غلبتك العتمة. " <br>
     " Do not extinguish the light in your heart, even if darkness overwhelms you. "`,
    `" الصمت أحياناً لغة لا يفهمها إلا العاقل. " <br>
     " Silence is sometimes a language understood only by the wise. "`,
    `" من عرف نفسه، لم يضره قول الناس. " <br>
     " He who knows himself is unaffected by what others say. "`,
    `" الحياة ليست انتظار العاصفة، بل تعلم الرقص تحت المطر. " <br>
     " Life is not about waiting for the storm to pass but learning to dance in the rain. "`,
    `" القلب الذي يحمل الحب لا يهزمه الزمن. " <br>
     " A heart that carries love is not defeated by time. "`,
    `" أجمل الأشياء تنبت من رحم الألم. " <br>
     "The most beautiful things grow from the womb of pain."`,
    `" من لا يرى الجمال في الداخل، سيظل أعمى خارجه. " <br>
     "He who cannot see beauty within will remain blind to it outside."`,
    `" السقوط بداية الطريق نحو القمة. " <br>
     "Falling is the beginning of the road to the summit."`,
    `" الأحلام لا تموت، لكنها تنتظر من يؤمن بها. " <br>
     "Dreams do not die; they await those who believe in them."`,
    `" الحياة كتاب، وأنت الكاتب. فاكتب ما يستحق أن يُقرأ. " <br>
     "Life is a book, and you are the author. Write something worth reading."`,
    `" الخوف يقتل أكثر مما تفعله السيوف. " <br>
     "Fear kills more than swords ever could."`,
    `" الراحة في الصمت، والفهم في الإنصات. " <br>
     "Peace lies in silence, and understanding in listening."`,
    `" ما تبحث عنه في الخارج، قد يكون في داخلك. " <br>
     "What you seek outside might already be within you."`,
    `" من أحب النور، عرف كيف يصنعه. " <br>
     "He who loves the light knows how to create it."`,
    `" القلب الذي يغفر هو الأقوى. " <br>
     "The heart that forgives is the strongest."`,
    `" النجوم لا تُرى إلا في الظلام. " <br>
     "Stars are only seen in the darkness."`,
    `" ما فاتك كان درساً، وما يأتيك نعمة. " <br>
     "What passed was a lesson, and what comes is a blessing."`,
    `" الشجاعة ليست غياب الخوف، بل مواجهته. " <br>
     "Courage is not the absence of fear but confronting it."`,
    `" الحرية الحقيقية هي أن تكون صادقاً مع نفسك. " <br>
     "True freedom is being honest with yourself."`
];

var displayedQuotes = [];

function newQuote() {
    if (displayedQuotes.length === quotes.length) {
        displayedQuotes = []; 
    }
    var randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (displayedQuotes.includes(randomIndex));

    displayedQuotes.push(randomIndex);

    document.getElementById("quote").innerHTML = quotes[randomIndex];
}