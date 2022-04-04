import _BN, { BigNumber } from 'bignumber.js';

export const BN = _BN.clone({
  ROUNDING_MODE: _BN.ROUND_DOWN,
});

interface FormatCurrency {
  significantDigits: number;
}

export const currencyFormatter = (
  value: string | number | BigNumber,
  options: Partial<FormatCurrency> = {},
) => {
  const { significantDigits = 0 } = options;

  let _value = new BN(value);

  if (_value.isNaN()) _value = new BN(0);

  if (!significantDigits) {
    return _value.integerValue().toString();
  }

  if (significantDigits < 0) {
    return _value.toFixed();
  }

  return _value.toFixed(significantDigits);
};

export const currencyFormatterNoneSignificantDigits = (
  value: string | number | BigNumber,
) => {
  return currencyFormatter(value, {
    significantDigits: 0,
  });
};

export const currencyFormatterTwoSignificantDigits = (
  value: string | number | BigNumber,
) => {
  return currencyFormatter(value, {
    significantDigits: 2,
  });
};
