import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2))
args['number']
const number = args.number || 1
// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs';
// Call the coinFlip function and put the return into STDOUT
console.log(coinFlips(number))
console.log(countFlips(coinFlips(number)))

