import { compress, decompress } from '@/utils/hash2unicode';

/**
 * @return {string}
 */
function T(i) {
  return String.fromCharCode(i);
}

test('compress hash to unicode', () => {
  expect(compress('0')).toBe(T(0));
  expect(compress('f')).toBe(T(15));
  expect(compress('aa')).toBe(T(170));
  expect(compress('ccc')).toBe(T(3276));
  expect(compress('ffff')).toBe(T(65535));
  expect(compress('ffffccc')).toBe(`${T(65535)}${T(3276)}`);
  expect(compress('ffffffff')).toBe(`${T(65535)}${T(65535)}`);
});

test('decompress hash to unicode', () => {
  expect(decompress(T(0))).toBe('0');
  expect(decompress(T(15))).toBe('f');
  expect(decompress(T(170))).toBe('aa');
  expect(decompress(T(3276))).toBe('ccc');
  expect(decompress(T(65535))).toBe('ffff');
  expect(decompress(`${T(65535)}${T(3276)}`)).toBe('ffffccc');
  expect(decompress(`${T(65535)}${T(65535)}`)).toBe('ffffffff');
});
