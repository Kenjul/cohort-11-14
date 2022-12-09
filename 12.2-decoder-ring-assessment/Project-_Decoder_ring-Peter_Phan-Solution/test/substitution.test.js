// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("my submission tests", () => {
    describe("error tests", () => {
      it("should return false if the substitution alphabet is missing", () => {
        const message = "yes";
        const actual = substitution(message);
            expect(actual).to.be.false;
      });
  
      it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "howaboutno";
        const alphabet = "yesno";
        const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
      });
  
      it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "thisisjustamessage";
        const alphabet = "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf";
        const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
      });
    });
  
    describe("encoding", () => {
      it("should encode a message by using the given substitution alphabet", () => {
        const message = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";
            expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "ysii.rs";
            expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "yp ysii.rs";
            expect(actual).to.equal(expected);
      });
    });
  
    describe("decoding", () => {
      it("should decode a message by using the given substitution alphabet", () => {
        const message = "ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
            expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
            expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
            expect(actual).to.equal(expected);
      });
    });
  });