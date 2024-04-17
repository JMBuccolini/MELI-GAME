export const cardsInitialState = {
  queue: [],
  board: [],
};

export function cardsReducer(state, action) {
  switch (action.type) {
    case "ADD_CARD":
      return state.queue.length < 2
        ? {
            ...state,
            queue: [...state.queue, action.payload],
          }
        : {
            ...state,
          };

    case "COMPARE_CARDS":
      
      const [firstCard] = state.queue
      const secondCard = action.payload

      const match = firstCard.id === secondCard.id
      return match
        ? {
            ...state,
            queue: [],
            board: state.board.filter((el) => el.id !== firstCard.id),
          }
        : {
            ...state,
            queue: []
          };

    case "FILL_BOARD":
      return {
        ...state,
        board: action.payload,
      };
    case "CLEAR_BOARD":
      return {
        ...state,
        board:[]
      }

    default:
      return state;
  }
}
