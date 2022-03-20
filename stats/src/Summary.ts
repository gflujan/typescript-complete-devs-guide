/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import type { MatchData } from './MatchData';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
export interface Analyzer {
   run(matches: Array<MatchData>): string;
}

export interface OutputTarget {
   print(report: string): void;
}

/* ========================================================================== */
// DEFINING THE `SUMMARY` CLASS
/* ========================================================================== */
export class Summary {
   constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

   buildAndPrintReport(matches: Array<MatchData>): void {
      const output: string = this.analyzer.run(matches);
      this.outputTarget.print(output);
   }
}
