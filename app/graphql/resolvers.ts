import merge from 'deepmerge';
import { mergedResolvers } from './index';

const allResolvers = [...Object.values(mergedResolvers)];

let resolversObj = {};

allResolvers.forEach((resolver) => {
  resolversObj = merge.all([resolversObj, resolver]);
});

export default resolversObj;
