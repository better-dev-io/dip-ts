import {IRandomString} from "./interfaces/randomString";

/**
 * RandomStringService high-level class used to invoke IRandomString implementation methods
 */
export class RandomStringService {
    // a private varibale to hold the passed implementation
    private randomStringGenerator: IRandomString;

    /***
     * the constructor accepts an implementation of IRandomString
     * @param randomStringImplementation the low level class that implements IRandomString
     */
    constructor(randomStringImplementation: IRandomString) {
        this.randomStringGenerator = randomStringImplementation
    }

    /**
     * randomString invokes randomString method
     */
    randomString(): string {
        return this.randomStringGenerator.randomString()
    }

    /**
     * randomStringOfMinLength invokes randomStringOfMinLength method
     */
    randomStringOfMinLength(stringLength: number) : string {
        return this.randomStringGenerator.randomStringOfMinLength(stringLength)
    }

}