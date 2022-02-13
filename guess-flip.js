import { createRequire } from 'module';
import { flipACoin } from './modules/coin.mjs';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2))
args['call']
const call = args.call
if (call != "heads"|"tails") {
    console.error("Error: no input")
    process.exit(1)
} else {
    console.log(flipACoin(call))
}