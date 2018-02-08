import { union } from 'ramda';

import sum from './utils';

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6, 10, 15];
const arr3 = union(arr1, arr2);

console.log(arr3);

console.log(sum(5, 2));
