const { isValidNietEmail } = require("./validation");


describe("NIET Email Validation", () => {

    test("accepts valid NIET email", () => {
        expect(
            isValidNietEmail("student@niet.co.in")
        ).toBe(true);
    });


    test("accepts another valid NIET email", () => {
        expect(
            isValidNietEmail("aryan123@niet.co.in")
        ).toBe(true);
    });


    test("rejects Gmail email", () => {
        expect(
            isValidNietEmail("student@gmail.com")
        ).toBe(false);
    });


    test("rejects wrong NIET domain", () => {
        expect(
            isValidNietEmail("student@niet.com")
        ).toBe(false);
    });


    test("rejects extra domain", () => {
        expect(
            isValidNietEmail("student@niet.co.in.in")
        ).toBe(false);
    });


    test("rejects incomplete domain", () => {
        expect(
            isValidNietEmail("student@niet.co")
        ).toBe(false);
    });

});