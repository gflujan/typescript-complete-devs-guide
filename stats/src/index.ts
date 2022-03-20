/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

// Step 1: Create an object that satisfies the `DataReader` interface
const csvFileReader: CsvFileReader = new CsvFileReader('football-data.csv');

// Step 2: Create an instance of `MatchReader` and pass in something satisfying the `DataReader` interface
const matchReader: MatchReader = new MatchReader(csvFileReader);
matchReader.load();
const summary: Summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
