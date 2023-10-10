import { countdown } from '../countdown.js';

describe('Valid input', () => {
    it('Should return an array with count down from 3 to 1', () =>
        expect(countdown(3)).toStrictEqual([3, 2, 1]));
    it('Should return an array with count down from 4 to 1', () =>
        expect(countdown(3.8)).toStrictEqual([4, 3, 2, 1]));
    it('Should return an array with one number', () =>
        expect(countdown(1)).toStrictEqual([1]));
})

describe('Invalid input', () => {
    let zeroNumber = 0;
    let string = 'hello world';
    let negativeNumber = -3;
    it('Should return an error as number is 0', () =>
        expect(countdown(zeroNumber)).toStrictEqual([`You entered "${zeroNumber}", which is a wrong starting number (or even not a number)!`]));
    it('Should return an error as input is a string', () =>
        expect(countdown(string)).toStrictEqual([`You entered "${string}", which is a wrong starting number (or even not a number)!`]));
    it('Should return an error as number is a negative', () =>
        expect(countdown(negativeNumber)).toStrictEqual([`You entered "${negativeNumber}", which is a wrong starting number (or even not a number)!`]))
})