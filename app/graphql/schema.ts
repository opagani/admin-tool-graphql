import { mergeTypes } from 'merge-graphql-schemas';
import { mergedSchema } from './index';

const allSchemas = [...Object.values(mergedSchema)];

const schema = mergeTypes(allSchemas, { all: true });

export default schema;
