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
import { dateStringToDate } from './utils';
// Styles

type MatchData = [Date, string, string, number, number, MatchResult, string]; // this is a Tuple definition

interface DataReader {
   read(): void;
   data: Array<Array<string>>;
}

export class MatchReader {
   public matches: Array<MatchData> = [];

   constructor(public reader: DataReader) {}

   load(): void {
      this.reader.read();

      this.matches = this.reader.data.map((row: Array<string>): MatchData => {
         return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6],
         ];
      });
   }
}
