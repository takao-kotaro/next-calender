/* eslint-disable */
import type { Prisma } from "@prisma/client";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateVerificationRequest(options?: MutationOptions<Prisma.VerificationRequestGetPayload<Prisma.VerificationRequestCreateArgs> | undefined, unknown, Prisma.VerificationRequestCreateArgs>) {
    const mutation = request.useModelMutation('VerificationRequest', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationRequestCreateArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationRequestCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VerificationRequestGetPayload<T> | undefined>;
        }
    };
}

export function useCreateManyVerificationRequest(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationRequestCreateManyArgs>) {
    const mutation = request.useModelMutation('VerificationRequest', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationRequestCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationRequestCreateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useFindManyVerificationRequest<T extends Prisma.VerificationRequestFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.VerificationRequestFindManyArgs>, options?: QueryOptions<Array<Prisma.VerificationRequestGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('VerificationRequest', 'findMany', args, options);
}

export function useInfiniteFindManyVerificationRequest<T extends Prisma.VerificationRequestFindManyArgs, R extends Array<Prisma.VerificationRequestGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.VerificationRequestFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.VerificationRequestGetPayload<T>>>) {
    return request.useInfiniteModelQuery('VerificationRequest', 'findMany', getNextArgs, options);
}

export function useFindUniqueVerificationRequest<T extends Prisma.VerificationRequestFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.VerificationRequestFindUniqueArgs>, options?: QueryOptions<Prisma.VerificationRequestGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('VerificationRequest', 'findUnique', args, options);
}

export function useFindFirstVerificationRequest<T extends Prisma.VerificationRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.VerificationRequestFindFirstArgs>, options?: QueryOptions<Prisma.VerificationRequestGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('VerificationRequest', 'findFirst', args, options);
}

export function useUpdateVerificationRequest(options?: MutationOptions<Prisma.VerificationRequestGetPayload<Prisma.VerificationRequestUpdateArgs> | undefined, unknown, Prisma.VerificationRequestUpdateArgs>) {
    const mutation = request.useModelMutation('VerificationRequest', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationRequestUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationRequestUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VerificationRequestGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManyVerificationRequest(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationRequestUpdateManyArgs>) {
    const mutation = request.useModelMutation('VerificationRequest', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationRequestUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertVerificationRequest(options?: MutationOptions<Prisma.VerificationRequestGetPayload<Prisma.VerificationRequestUpsertArgs> | undefined, unknown, Prisma.VerificationRequestUpsertArgs>) {
    const mutation = request.useModelMutation('VerificationRequest', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationRequestUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationRequestUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VerificationRequestGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteVerificationRequest(options?: MutationOptions<Prisma.VerificationRequestGetPayload<Prisma.VerificationRequestDeleteArgs> | undefined, unknown, Prisma.VerificationRequestDeleteArgs>) {
    const mutation = request.useModelMutation('VerificationRequest', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationRequestDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationRequestDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VerificationRequestGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManyVerificationRequest(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationRequestDeleteManyArgs>) {
    const mutation = request.useModelMutation('VerificationRequest', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationRequestDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationRequestDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateVerificationRequest<T extends Prisma.VerificationRequestAggregateArgs>(args?: Prisma.Subset<T, Prisma.VerificationRequestAggregateArgs>, options?: QueryOptions<Prisma.GetVerificationRequestAggregateType<T>>) {
    return request.useModelQuery('VerificationRequest', 'aggregate', args, options);
}

export function useGroupByVerificationRequest<T extends Prisma.VerificationRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.VerificationRequestGroupByArgs['orderBy'] } : { orderBy?: Prisma.VerificationRequestGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.VerificationRequestGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.VerificationRequestGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.VerificationRequestGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.VerificationRequestGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.VerificationRequestGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('VerificationRequest', 'groupBy', args, options);
}

export function useCountVerificationRequest<T extends Prisma.VerificationRequestCountArgs>(args?: Prisma.Subset<T, Prisma.VerificationRequestCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.VerificationRequestCountAggregateOutputType> : number>) {
    return request.useModelQuery('VerificationRequest', 'count', args, options);
}
