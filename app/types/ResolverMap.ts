import type { ResolverFn } from './ResolversFn';

export interface ResolverMap<Query, Context> {
    [field: string]: ResolverFn<Query, Context>;
}
