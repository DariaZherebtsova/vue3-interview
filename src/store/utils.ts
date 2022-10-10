export function checkUserScore(score: number, rule: string) {
  console.log(`score=${score} rule=${rule}`);
  switch (rule) {
    case '> 20':
      return score > 20;

    case '< 10':
      return score < 10;

    default:
      break;
  }
}
