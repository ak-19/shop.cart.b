import {formatCurency} from '../../util/format';

describe('formatCurency tests', () => {
  test('Should return string representing number with 2 decimal places after formating', () => {
    expect(formatCurency(12.123)).toBe("12.12");
    expect(formatCurency(.123)).toBe("0.12");
    expect(formatCurency(2.1)).toBe("2.10");
  })
});
