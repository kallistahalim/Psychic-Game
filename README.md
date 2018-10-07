# Psychic-Game

Instructions:
how does this game work?
    1. the computer chooses a letter randomly from the alphabet.
    2. the user guesses a letter in the alphabet.
    3. computer is alerted a key has been pressed by the user: event.key function
    4. IF:
        the letter that user guesses = computer pick,
            add +1 to wins column
            reset "guesses left" to 9
            clear "your guesses so far"

        the letter != computer pick:
            subtract 1 from "guesses left"
            keep guesses on screen until all 9 are used up
            store all guesses in userInput by indexes

        WHEN:
            all 9 guesses are used up: 
                add +1 to losses column
                reset "guesses left" to 9
                clear "your guesses so far"


variables needed:
numWins
numLosses
remainingGuesses
userInput
index
letter
alphabet
computerGuess
