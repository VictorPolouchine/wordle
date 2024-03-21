import React from "react"
const GuessInput = ({ handleSubmitGuess, gameStatus }) => {
    const [newGuess, setNewGuess] = React.useState("")
    const submitHandler = (event) => {
        event.preventDefault()
        console.log({newGuess})
        handleSubmitGuess(newGuess)
        setNewGuess("")
    }
    return (
        <form className="guess-input-wrapper" onSubmit={(event) => submitHandler(event)}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" pattern="\D{5}" type="text" disabled={gameStatus} value={newGuess} onChange={({target}) => setNewGuess(target.value.toUpperCase())}/>
        </form>
    )
}

export default GuessInput