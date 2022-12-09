// Write your tests here!
const {expect} = require("chai");
const {caesar} = require ("../src/caesar");

describe("my caesar tests", ()=>{
    // describe - tests for errors
    describe("error tests", ()=>{
        it("should return false if shift amount is 0", ()=>{
            const message = "thinkful";
            const shift = 0;
            const actual = caesar(message,shift);

            expect(actual).to.be.false;
        });
        it("should return false if the shift amount is above 25", ()=>{
            const message = "thinkful";
            const shift = 26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        }); 
        it("should return false if the shift amount is below -25", ()=>{
            const message = "thinkful";
            const shift = -26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
    });
    // describe - tests for encoding
    describe("encoding a message", () => {
        it("should encode a message by shifting the letters", () => {
            const message = "thinkful";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });
        it("should leaves spaces and other symbols as is", ()=>{
            const message = "a message";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "d phvvdjh";
                expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", ()=>{
            const message = "A Message";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "d phvvdjh";
                expect(actual).to.equal(expected);
        });
        it("should appropriately handle letters at the end of the alphabet", ()=>{
            const message = "zyx";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "cba";
                expect(actual).to.equal(expected);
        });
        it("should allow for a negative shift that will shift to the left", ()=>{
            const message = "zyx";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "cba";
                expect(actual).to.equal(expected);
        });
    });
    // describe - tests for decoding
    describe("decoding tests", ()=>{
        it("should decode a message by shifting the letters in the opposite direction",()=>{
            const message = "zzz";
            const shift = 1;
            const actual = caesar(message,shift, false); // encode = false then we are decoding
            const expected = "yyy"
                expect(actual).to.equal(expected);
        });
        it("should leaves spaces and other symbols as is", ()=>{
            const message = "zz z";
            const shift = 1;
            const actual = caesar(message,shift, false); // encode = false then we are decoding
            const expected = "yy y"
                expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", ()=>{
            const message = "Zzz";
            const shift = 1;
            const actual = caesar(message,shift, false); // encode = false then we are decoding
            const expected = "yyy"
                expect(actual).to.equal(expected);
        });
        it("should appropriately handle letters at the end of the alphabet", ()=>{
            const message = "aaa";
            const shift = 1;
            const actual = caesar(message,shift, false); // encode = false then we are decoding
            const expected = "zzz"
                expect(actual).to.equal(expected);
        });
        it("should allow for a negative shift that will shift to the left", ()=>{
            const message = "aaa";
            const shift = 1;
            const actual = caesar(message,shift, false); // encode = false then we are decoding
            const expected = "zzz"
                expect(actual).to.equal(expected);
        });
    })
// end of 1st describe
})