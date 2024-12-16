'use strict'

const sons = {
    'A': '04-DRUM-KIT_sounds_boom.wav',
    'S':   '04-DRUM-KIT_sounds_tink.wav',
     'D':       '04-DRUM-KIT_sounds_snare.wav',
     'F':       '04-DRUM-KIT_sounds_ride.wav',
      'G':      '04-DRUM-KIT_sounds_openhat.wav',
      'H':      '04-DRUM-KIT_sounds_kick.wav',
      'J':      '04-DRUM-KIT_sounds_hihat.wav',
      'K':      '04-DRUM-KIT_sounds_clap.wav',
      'L':      '04-DRUM-KIT_sounds_tom.wav',
        
}

const criardiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sons) => {
    Object.keys(sons).forEach(criardiv);
}

const tocarsom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const adicionarefeito = (letra) => document.getElementById(letra)
                                        .classList.add('active');

const removerefeito = (letra) => {
    const div = document.getElementById(letra);
    const removeactive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeactive);
}

const ativardiv = (evento) => {
 
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    const letrapermitida = sons.hasOwnProperty(letra);//pergunta se existe
    if (letrapermitida){
        adicionarefeito(letra)
        tocarsom(letra);
        removerefeito(letra)
    }
}

exibir(sons);

document.getElementById('container')
    .addEventListener('click', ativardiv);

    window.addEventListener('keydown', ativardiv)