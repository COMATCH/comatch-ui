import { capitalizeFirstLetter, capitalizeAll } from '.';

describe('capitalizer', () => {
    describe('capitalizeFirstLetter', () => {
        it('should return the same input if the string is empty', () => {
            const emptyString = '';
            const transformedString = capitalizeFirstLetter(emptyString);

            expect(emptyString).toEqual(transformedString);
        });

        it('should return the same input if the string is falsy', () => {
            const falsyString: any = null;
            const transformedString = capitalizeFirstLetter(falsyString);

            expect(falsyString).toEqual(transformedString);
        });

        it('should capitalize the first letter', () => {
            const string = 'hello world';
            const transformedString = capitalizeFirstLetter(string);

            expect('Hello world').toEqual(transformedString);
        });

        it('should capitalize the string if only one character passed', () => {
            const string = 'h';
            const transformedString = capitalizeFirstLetter(string);

            expect('H').toEqual(transformedString);
        });
    });

    describe('capitalizeAll', () => {
        it('should return the same input if the string is empty', () => {
            const emptyString = '';
            const transformedString = capitalizeAll(emptyString);

            expect(emptyString).toEqual(transformedString);
        });

        it('should return the same input if the string is falsy', () => {
            const falsyString: any = null;
            const transformedString = capitalizeAll(falsyString);

            expect(falsyString).toEqual(transformedString);
        });

        it('should capitalize all letters', () => {
            const string = 'hello world';
            const transformedString = capitalizeAll(string);

            expect('HELLO WORLD').toEqual(transformedString);
        });

        it('should capitalize the string if only one character passed', () => {
            const string = 'h';
            const transformedString = capitalizeAll(string);

            expect('H').toEqual(transformedString);
        });
    });
});
