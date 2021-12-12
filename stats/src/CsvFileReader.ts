/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import fs from 'fs';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { MatchResult } from './MatchResult';
// Utils / Methods / Mocks
import { dateStringToDate } from './utils';
// Styles

export class CsvFileReader {
   public data: Array<Array<string>> = [];

   constructor(public filename: string) {}

   read(): void {
      this.data = fs
         .readFileSync(this.filename, {
            encoding: 'utf-8',
         })
         .split('\n')
         .map((row: string): Array<string> => {
            return row.split(',');
         })
         .map((row: Array<string>): Array<string> => {
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
