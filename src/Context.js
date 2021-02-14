import { createContext } from 'react';

const hitsuji = {
    name: '羊',
    count: 0
}
  
export const Context = createContext(hitsuji);