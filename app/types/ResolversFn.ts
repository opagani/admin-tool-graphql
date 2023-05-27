export type ResolverFn<Args, Context> = (parent: unknown, args: Args, ctx: Context) => unknown;
