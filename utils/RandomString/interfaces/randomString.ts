/**
 * IRandomString an interface that defines the required implementation of the random string
 */
export interface IRandomString {
    randomString(): string;
    randomStringOfMinLength(stringLength: number) : string
}