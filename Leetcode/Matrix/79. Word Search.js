//https://www.youtube.com/watch?v=m9TrOL1ETxI

const wordSearch = (board = [["a"]], word = "a") => {
  let visited = board.map((row) => row.map((_) => false));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word.charAt(0) && searchWord(i, j, 0, word, board)) {
        return true;
      }
    }
  }

  function searchWord (i, j, index, word, board){
    if (index === word.length) return true;
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j > board[i].length ||
      visited[i][j] ||
      word.charAt(index) != board[i][j]
    )
      return false;
    visited[i][j] = true;
    if (
      searchWord(i + 1, j, index + 1, word, board) ||
      searchWord(i - 1, j, index + 1, word, board) ||
      searchWord(i, j + 1, index + 1, word, board) ||
      searchWord(i, j - 1, index + 1, word, board)
    ) {
        return true
    }
    visited[i][j] = false
  };
  return false;
};

console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))


console.log('abcd'.charAt(1))
