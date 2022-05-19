import React, {Component} from 'react';
import {randomWord} from "./RandomWord";
import "./Hangman.css"
import image0 from "./hangmanImg/hangman0.png";
import image1 from "./hangmanImg/hangman1.png";
import image2 from "./hangmanImg/hangman2.png";
import image3 from "./hangmanImg/hangman3.png";
import image4 from "./hangmanImg/hangman4.png";
import image5 from "./hangmanImg/hangman5.png";
import image6 from "./hangmanImg/hangman6.png";


class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [image0, image1, image2, image3, image4, image5, image6]
    };

    constructor(props) {
        super(props);
        this.state = {
            numOfWrongGuess: 0, 
            guessed: new Set(),
            anwser: randomWord(),
        };
        this.handleGuess = this.handleGuess.bind(this);
        this.reset = this.reset.bind(this); 
    }

    reset(){
        this.setState({
            numOfWrongGuess: 0, 
            guessed: new Set(),
            anwser: randomWord(),
        });
    }

    guessedWord(){
        return this.state.anwser.split("").map((letter) => (this.state.guessed.has(letter) ? letter: "_"));
    }

    //evt = event
    handleGuess(evt){
        let letter = evt.target.value;
        //st = state
        this.setState((st) => ({
            guessed : st.guessed.add(letter),
            numOfWrongGuess: st.numOfWrongGuess + (st.anwser.includes(letter) ? 0 : 1),
        }));
    }

    generateKeyPad(){
        return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
            <button key={letter} value={letter} onClick={this.handleGuess} disabled={this.state.guessed.has(letter)}>
                {letter}
            </button>
        ));
    }

    render() {
        const gameOver = this.state.numOfWrongGuess >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.anwser;
        //declare winner
        let gameState = this.generateKeyPad();
        if(isWinner) gameState = "Congratulations, You have won the Game";
        if(gameOver) gameState = "Game Over, try again";
        
        //restart if it is over or not
        let retart = gameOver || isWinner;

        return (
            <div className="Hangman">
                <h2>Hangman</h2>
                <img src={this.props.images[this.state.numOfWrongGuess]} alt="hangman"/>
                <p>Guess the Mystery Word</p>
                <p>
                    Guesses remaining: {this.props.maxWrong - this.state.numOfWrongGuess} / {" "} {this.props.maxWrong}
                </p>
                <p className='Hangman-word'>
                    {!gameOver ? this.guessedWord() : this.state.anwser} 
                </p>
                <br></br>
                <p className='Hangman-buttons'> {gameState} </p>
                {retart && (
                    <button id="reset" onClick={this.reset}> Restart </button>
                )}
            </div>
        );
    }
}

export default Hangman;