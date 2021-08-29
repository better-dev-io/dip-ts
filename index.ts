import {Crypto} from "./utils/RandomString/implementation/crypto";
import {NanoID} from "./utils/RandomString/implementation/nanoID";
import {RandomStringService} from "./utils/RandomString/randomStringService";

/**
 * the entry point of the application
 */
function main() {

    // initiating RandomStringService with Crypto implementation
    let ranCrySrv = new RandomStringService(new Crypto())
    console.log(ranCrySrv.randomString())
    console.log(ranCrySrv.randomStringOfMinLength(10))

    // initiating RandomStringService with NanoID implementation
    let ranNanoSrv = new RandomStringService(new NanoID())
    console.log(ranNanoSrv.randomString())
    console.log(ranNanoSrv.randomStringOfMinLength(10))
}

main()