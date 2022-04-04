import _ from 'lodash';
import CoinGecko from 'coingecko-api';

export const CoinGeckoClient = new CoinGecko();

export const exchangeRate = async () => {
  const data = await CoinGeckoClient.simple.price({
    ids: ['plastiks'],
    vs_currencies: ['usd'],
  });
  return _.get(data, 'data.plastiks.usd', 0) as number;
};
