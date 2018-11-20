export const AURAL_UPDATE = 'AURAL_UPDATE';
export const getAuralUpdate = () => ({
	type: AURAL_UPDATE
})



export const RESTART_GAME ='RESTART_GAME';
export const newGame = rightAnswer => ({
	type: RESTART_GAME,
	rightAnswer
})


export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess
})