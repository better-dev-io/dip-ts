import {IRandomString} from "../interfaces/randomString";
import {nanoid} from "nanoid";

/**
 * NanoID an implementation of IRandomString using crypto library
 */
export class NanoID implements IRandomString {
    /**
     *  randomString returns a random string with a default size 21
     */
    randomString(): string {
        return nanoid();
    }

    /**
     *  randomStringOfMinLength returns a random string according to passed length
     *  @param stringLength the required minimum length of a random string
     */
    randomStringOfMinLength(stringLength: number): string {
        return nanoid(stringLength);
    }
}