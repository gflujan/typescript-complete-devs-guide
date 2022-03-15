/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
// Assets
// Constants / Models / Interfaces / Types
import { MatchResult } from './MatchResult';
// Utils / Methods / Mocks
// Styles

// Step 1: Create an object that satisfies the `DataReader` interface
const csvFileReader: CsvFileReader = new CsvFileReader('football-data.csv');

// Step 2: Create an instance of `MatchReader` and pass in something satisfying the `DataReader` interface
const matchReader: MatchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
      manUnitedWins += 1;
   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
      manUnitedWins += 1;
   }
}

console.log('🚀--BLLR?: ===============================================');
console.log(`🚀--BLLR?: MANCHESTER UNITED WON ${manUnitedWins} GAMES!!!`);
console.log('🚀--BLLR?: ===============================================');
