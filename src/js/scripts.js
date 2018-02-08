import { union } from 'ramda';

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6, 10, 15];
const arr3 = union(arr1, arr2);

console.log(arr3);

import sum from './utils';

console.log(sum(5, 2));
