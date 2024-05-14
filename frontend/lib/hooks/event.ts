/* eslint-disable */
import type { Prisma } from "@prisma/client";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateEvent(options?: MutationOptions<Prisma.EventGetPayload<Prisma.EventCreateArgs> | undefined, unknown, Prisma.EventCreateArgs>) {
    const mutation = request.useModelMutation('Event', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.EventCreateArgs>(args: Prisma.SelectSubset<T, Prisma.EventCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.EventGetPayload<T> | undefined>;
        }
    };
}

export function useCreateManyEvent(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.EventCreateManyArgs>) {
    const mutation = request.useModelMutation('Event', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.EventCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.EventCreateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useFindManyEvent<T extends Prisma.EventFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.EventFindManyArgs>, options?: QueryOptions<Array<Prisma.EventGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('Event', 'findMany', args, options);
}

export function useInfiniteFindManyEvent<T extends Prisma.EventFindManyArgs, R extends Array<Prisma.EventGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.EventFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.EventGetPayload<T>>>) {
    return request.useInfiniteModelQuery('Event', 'findMany', getNextArgs, options);
}

export function useFindUniqueEvent<T extends Prisma.EventFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.EventFindUniqueArgs>, options?: QueryOptions<Prisma.EventGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Event', 'findUnique', args, options);
}

export function useFindFirstEvent<T extends Prisma.EventFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.EventFindFirstArgs>, options?: QueryOptions<Prisma.EventGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Event', 'findFirst', args, options);
}

export function useUpdateEvent(options?: MutationOptions<Prisma.EventGetPayload<Prisma.EventUpdateArgs> | undefined, unknown, Prisma.EventUpdateArgs>) {
    const mutation = request.useModelMutation('Event', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.EventUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.EventUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.EventGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManyEvent(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.EventUpdateManyArgs>) {
    const mutation = request.useModelMutation('Event', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.EventUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.EventUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertEvent(options?: MutationOptions<Prisma.EventGetPayload<Prisma.EventUpsertArgs> | undefined, unknown, Prisma.EventUpsertArgs>) {
    const mutation = request.useModelMutation('Event', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.EventUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.EventUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.EventGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteEvent(options?: MutationOptions<Prisma.EventGetPayload<Prisma.EventDeleteArgs> | undefined, unknown, Prisma.EventDeleteArgs>) {
    const mutation = request.useModelMutation('Event', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.EventDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.EventDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.EventGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManyEvent(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.EventDeleteManyArgs>) {
    const mutation = request.useModelMutation('Event', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.EventDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.EventDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateEvent<T extends Prisma.EventAggregateArgs>(args?: Prisma.Subset<T, Prisma.EventAggregateArgs>, options?: QueryOptions<Prisma.GetEventAggregateType<T>>) {
    return request.useModelQuery('Event', 'aggregate', args, options);
}

export function useGroupByEvent<T extends Prisma.EventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.EventGroupByArgs['orderBy'] } : { orderBy?: Prisma.EventGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.EventGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.EventGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.EventGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.EventGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.EventGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('Event', 'groupBy', args, options);
}

export function useCountEvent<T extends Prisma.EventCountArgs>(args?: Prisma.Subset<T, Prisma.EventCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.EventCountAggregateOutputType> : number>) {
    return request.useModelQuery('Event', 'count', args, options);
}
