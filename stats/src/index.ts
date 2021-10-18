import fs from 'fs';

const matches: Array<Array<string>> = fs
   .readFileSync('football-data.csv', {
      encoding: 'utf-8',
   })
   .split('\n')
   .map((row: string): Array<string> => {
      return row.split(',');
   });

enum MatchResult {
   AwayWin = 'A',
   Draw = 'D',
   HomeWin = 'H',
}

let manUnitedWins = 0;

for (let match of matches) {
   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
      manUnitedWins += 1;
   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
      manUnitedWins += 1;
   }
}

console.log('🚀--BLLR?: ===============================================');
console.log(`🚀--BLLR?: MANCHESTER UNITED WON ${manUnitedWins} GAMES!!!`);
console.log('🚀--BLLR?: ===============================================');
