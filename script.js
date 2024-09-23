let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hour = day.getHours();

    if( hour >= 0 && hour < 12 ){
        speak("Good Morning Sir");
    }
    else if( hour >= 12 && hour < 16 ){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()

recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"

    //Done
    if( message.includes("hello") || message.includes("hi") || message.includes("Padmasree") || message.includes("Padmashree") || message.includes("padmashree") || message.includes("padmasree")){
        speak("hello sir,what can i help you?")
    }
    
    //Done
    else if( message.includes("who are you") || message.includes("Padmashree how are you") || message.includes("Padmasree how are you") || message.includes("padmasree how are you")){
        speak("I am Padmasree ,Your virtual assistant ,created by Shanto Sir")
    }

    //Done
    else if( message.includes("how are you") || message.includes("Padmashree how are you") || message.includes("Padmasree how are you") || message.includes("padmasree how are you")){
        speak("I’m doing great, Sir .How can i help you?")
    }

    //Done
    else if( message.includes("who made you") || message.includes("who is your owner") || message.includes("create you") || message.includes("owner you") || message.includes("owner")){
        speak("created by Shanto Sir")
    }

    //Done
    else if( message.includes("mother") || message.includes("mother name") || message.includes("shanto's mother name") ){
        speak("Shanto's mother name is Sadhana Rani Pal")
    }

    //Done
    else if( message.includes("your name")){
        speak("My name is Padmasree")
    }
    
    //Done
    else if (message.includes("who is Shanto Paul?") || message.includes("who is shanto") || message.includes("who is shanto paul") || message.includes("who is shanto paul")) {
        window.open("https://www.google.com/search?q=shanto+paul", "_blank");
        speak("Lakshay Dhoundiyal is Software Developer");
    } 


    //Done
    else if( message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }

    //Done
    else if( message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }

    //Done
    else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com", "_blank");
    }

    //Done
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/", "_blank")
    }

    //Done
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/", "_blank")
    }

    //Done
    else if(message.includes("open github")){
        speak("opening github")
        window.open("https://www.github.com/shantopaul", "_blank")
    }

    //Done
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/shantopaul", "_blank")
    }

    //Done
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/shantopaul", "_blank")
    }

    else if(message.includes("University") || message.includes("university")){
        speak("আমি তোমাকে যা পড়াবো এগুলো মুখস্থ কখনোই করো না")
    }

    //Not Done
    else if(message.includes("search")){
        speak(`search on google ${message.replace("Padmasree","") || message.replace("search","") || message.replace("Padmashree","")} `)
        window.open(`https://www.google.com/search?q=${message.replace("Padmasree","") || message.replace("search","") || message.replace("Padmashree","")}`)
    }

    //Not Done
    else if(message.includes("search google")) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }

    //Not Done
    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } 

    //Not Done
    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } 

    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("open telegram")){
        speak("opening telegram")
        window.open("telegram://")
    }

    else {
        speak("Sorry, Your command don't understand");
    }
}










