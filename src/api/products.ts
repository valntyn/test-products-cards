import { client } from '../helplers/fetchClients';
import { Root } from '../types/Root';

export const getProductsFromServer = () => {
  return client.get<Root>('/products/?limit=0');
};
