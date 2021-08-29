import {IRandomString} from "../interfaces/randomString";
import * as crypto from "crypto";

/**
 * Crypto an implementation of IRandomString using crypto library
 */
export class Crypto implements IRandomString {

    /**
     *  randomString returns a random string with a default size of 32
     */
    randomString(): string {
        return crypto.randomBytes(32).toString("hex")
    }

    /**
     *  randomStringOfMinLength returns a random string according to passed length
     *  @param stringLength the required minimum length of a random string
     */
    randomStringOfMinLength(stringLength: number): string {
        return crypto.randomBytes(stringLength).toString("hex");
    }
}