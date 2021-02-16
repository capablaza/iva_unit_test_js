const iva = require('./iva');

test('givenAmountWhenTheValueIs2500AndRateIs19ThenTheResultIs475', () => {
    //prepare - arrange
    let amount = 2500
    let rate = 19
    let expected = 475

    //act
    let result = iva(amount, rate)

    //result
    expect(result).toBeGreaterThan(0); //context
    expect(result).toBe(expected);
});

test('givenAmountWhenTheValueIs3400AndRateIs25ThenTheResultIs850', () => {
    //prepare - arrange
    let amount = 3400
    let rate = 25
    let expected = 850

    //act
    let result = iva(amount, rate)

    //result
    expect(result).toBeGreaterThan(0); //context
    expect(result).toBe(expected);
});

test('givenAmountWhenTheValueIsZeroAndRateIs25ThenTheResultIsZero', () => {
    //prepare - arrange
    let amount = 0
    let rate = 25
    let expected = 0

    //act
    let result = iva(amount, rate)

    //result
    expect(result).toBe(expected);
});

test('givenAmountWhenTheValueIs2500AndRateIsZeroThenTheResultIsZero', () => {
    //prepare - arrange
    let amount = 2500
    let rate = 0
    let expected = 0

    //act
    let result = iva(amount, rate)

    //result
    expect(result).toBe(expected);
});

test('givenAmountWhenTheValueIsNegativeAndRateIs25ThenTheResultIsZero', () => {
    //prepare - arrange
    let amount = -12000
    let rate = 25
    let expected = 0

    //act
    let result = iva(amount, rate)

    //result
    expect(result).toBe(expected);
});

test('givenAmountWhenTheValueIs2500AndRateIsNegativeThenTheResultIsZero', () => {
    //prepare - arrange
    let amount = 2500
    let rate = -25
    let expected = 0

    //act
    let result = iva(amount, rate)

    //result
    expect(result).toBe(expected);
});
