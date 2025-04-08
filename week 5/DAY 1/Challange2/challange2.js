const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  console.log(morse);
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(morse);
      console.log(morseJS);
      
      if (Object.keys(morseJS).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morseJS);
      }
    });
  }
  
  
  
  function toMorse(morseJS) {
    const userInput = prompt("Enter a word or sentence").toLowerCase();
    const letters = userInput.split("");
  
    const morseArray = [];
  
    for (let char of letters) {
      if (!morseJS[char]) {
        return Promise.reject(`Character "${char}" is not in the Morse object`);
      }
      morseArray.push(morseJS[char]);
    }
  
    return Promise.resolve(morseArray);
  }
  
  
  function joinWords(morseTranslation) {
    const result = morseTranslation.join("\n");
    const pre = document.createElement("pre");
    pre.textContent = result;
    document.body.appendChild(pre);
  }
  
  
  toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((translation) => joinWords(translation))
    .catch((err) => console.log(err));
  