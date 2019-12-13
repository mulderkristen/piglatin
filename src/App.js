import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: '',
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The translate function is where you will put your logic to convert the sentence entered by the user to pig location.  What is currently in the function will only directly copy what the user has entered.

  translate = (e) => {
    e.preventDefault()
    let firstPhrase = this.state.phrase
    console.log("translated:",firstPhrase);
      var vowels = ("aeiou")
      var lowerCase = firstPhrase.toLowerCase()
      var splitArray = lowerCase.split(' ')
      console.log("Logging split translated", splitArray);
      const translateSentence=(splitArray)=> {
          var newArray = []
          return splitArray.map ((translated,i) => {
          if (vowels.includes(translated[0])){
              translated += "way"
          } else if (translated.includes("qu") && translated.indexOf("q") === 0 && translated.indexOf("u") === 1) {
              let qLocation = translated.indexOf("q")
              translated = translated.slice(qLocation + 2, translated.length) + "quay"
              console.log(qLocation);
          } else if (translated.includes("squ") && translated.indexOf("s") === 0 && translated.indexOf("q") === 1 && translated.indexOf("u") === 2) {
                    let qLocation = translated.indexOf("s")
                    translated = translated.slice(qLocation + 3, translated.length) + "squay"
                    console.log(qLocation);
          } else if (!translated.includes("a") && !translated.includes("e") && !translated.includes("i") && !translated.includes("o") && !translated.includes("u") && translated.includes("y")) {
                     let yLocation = translated.indexOf("y")
                     translated = translated.slice(yLocation, yLocation.length) + translated.slice(0, yLocation) + "ay"
                     console.log(yLocation);
          } else {
              let stringSplit = translated.toLowerCase().split("")
              console.log("stringSplit:", stringSplit);
                var firstA = stringSplit.indexOf("a")
                var firstE = stringSplit.indexOf("e")
                var firstI = stringSplit.indexOf("i")
                var firstO = stringSplit.indexOf("o")
                var firstU = stringSplit.indexOf("u")
                console.log(firstA, firstE, firstI, firstO, firstU);
                var vowelArray = []
                var vowelArrayIndex = vowelArray.push(firstA, firstE, firstI, firstO, firstU)
                console.log(vowelArray);
                const filterIndex = (array) => {
                     return array.filter (value => {
                        return value !== -1
                    })
                }
                console.log(filterIndex(vowelArray));
                var filtered = (filterIndex(vowelArray))
                console.log(filtered);
                let sortedArray = filtered.sort((a, b) => a - b);
                var lowestI = sortedArray[0]
                console.log(lowestI);

                let firstString = stringSplit.splice(lowestI,(stringSplit.length - lowestI), 0).join("")
                console.log(firstString);
                let secondString = stringSplit.splice(0,lowestI,0).concat("ay").join("")
                console.log(secondString);
                translated = firstString + secondString
                console.log(translated);
          }
          var combinedArray = newArray.concat(translated)
          console.log("this is new translated:", translated);
          console.log("this is the new array:", combinedArray);
         return combinedArray
      })
}
var finalTranslation = translateSentence(splitArray).join(' ');
console.log("Here is final translation:", finalTranslation);
    this.setState({phraseTranslated: finalTranslation})
  }

  handleChange = (e) => {
    this.setState({phrase: e.target.value})
  }

  render() {
    return (

      <div className="wrapper">
        <header className="box header">
          <div id="pigImage">
            <img src='https://media1.giphy.com/media/OifI1K5VJSQwM/giphy.gif?cid=790b76115f341430e1539b50dd27ffc3fc4be8748da5172a&rid=giphy.gif' alt="pig talking" id="butcherPig"></img>
          </div>
        </header>
        <sidebar className="box sidebar">
          <div>
            <form className="info" onSubmit={this.translate}>
              <label htmlFor="input-phrase">Translate this: </label>
              <input name="input-phrase" onChange={this.handleChange}></input>
              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
        </sidebar>
        <main>
          <div className="text-center box content">
            <p>{this.state.phraseTranslated}</p>
          </div>
        </main>
        <footer className="box footer">
          <div className="text-center">
            <p>LEARN PIG LATIN!</p>
            <p>Coded by 🐷* Sabrina * Kayla * Kristen *</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
