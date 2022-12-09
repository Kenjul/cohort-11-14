// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("my polybius() tests", ()=>{
    describe("encoding a message", ()=>{
        it("should encode a message by translating each letter to number pairs", ()=>{
            const message = "zzz";
            const actual = polybius(message);
            const expected = "555555";
                expect(actual).to.equal(expected);
        });
        it("should translate both 'i' and 'j' to 42", ()=>{
            const message = "ijij";
            const actual = polybius(message);
            const expected = "42424242";
                expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", ()=>{
            const message = "z zz";
            const actual = polybius(message);
            const expected = "55 5555";
                expect(actual).to.equal(expected);
        });

    });

    describe("decoding now", ()=>{
        it("should decode a message by translating each pair of numbers into a letters", ()=>{
            const message = "555555";
            const actual = polybius(message, false);
            const expected = "zzz";
                expect(actual).to.equal(expected);
        });
        it("should translate 42 to both 'i' and 'j'", ()=>{
            const message = "4242424255"; 
            const actual = polybius(message, false);
                expect(actual).to.include("i");
                expect(actual).to.include("j");
        });
        it("should leave spaces as is", ()=>{
            const message = "55 5555";
            const actual = polybius(message, false);
            const expected = "z zz";
                expect(actual).to.equal(expected);
        });
        it("should return false if the length of all numbers is odd", ()=>{
            const message = "2345 235134341122514";
            const actual = polybius(message, false);
                expect(actual).to.be.false;
        });
    });
});