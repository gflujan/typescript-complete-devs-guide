/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { MatchResult } from './MatchResult';
// Utils / Methods / Mocks
import { CsvFileReader } from './CsvFileReader';
// Styles

const reader: CsvFileReader = new CsvFileReader('football-data.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
      manUnitedWins += 1;
   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
      manUnitedWins += 1;
   }
}

console.log('🚀--BLLR?: ===============================================');
console.log(`🚀--BLLR?: MANCHESTER UNITED WON ${manUnitedWins} GAMES!!!`);
console.log('🚀--BLLR?: ===============================================');
