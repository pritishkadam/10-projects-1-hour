const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

sounds.map((sound)=>{
    const audio = document.createElement('audio');
    audio.src=`sounds/${sound}.mp3`;
    audio.id=`${sound}`;

    const btn = document.createElement('btn');
    btn.innerText = sound;
    btn.style.textTransform = 'capitalize';
    btn.classList.add('btn');
    btn.addEventListener('click', ()=>{
        document.getElementById(sound).play();
    });

    document.body.append(audio, btn);
});