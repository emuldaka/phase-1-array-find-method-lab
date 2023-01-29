// code your solution here
function superbowlWin(games) {
  const win = games.find((game) => game.result === "W");
  return win ? win.year : undefined;
}
