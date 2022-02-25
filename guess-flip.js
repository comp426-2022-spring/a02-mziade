import { createRequire } from 'module';
import { flipACoin } from './modules/coin.mjs';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2))
args['call']
const call = args.call
const userError = new TypeError("Error: no input.");
const userError2 = new TypeError("Usage: node guess-flip --call=(heads|tails).");

if (call == "heads" | call == "tails") {
    console.log(flipACoin(call))
} else {
    if(call == null){
        console.error(userError.message)
    } else{
        console.error(userError2.message)
    }
}