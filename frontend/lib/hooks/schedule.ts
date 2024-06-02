/* eslint-disable */
import type { Prisma } from "@prisma/client";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateSchedule(options?: MutationOptions<Prisma.ScheduleGetPayload<Prisma.ScheduleCreateArgs> | undefined, unknown, Prisma.ScheduleCreateArgs>) {
    const mutation = request.useModelMutation('Schedule', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ScheduleCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ScheduleCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ScheduleGetPayload<T> | undefined>;
        }
    };
}

export function useCreateManySchedule(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.ScheduleCreateManyArgs>) {
    const mutation = request.useModelMutation('Schedule', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.ScheduleCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.ScheduleCreateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useFindManySchedule<T extends Prisma.ScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.ScheduleFindManyArgs>, options?: QueryOptions<Array<Prisma.ScheduleGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('Schedule', 'findMany', args, options);
}

export function useInfiniteFindManySchedule<T extends Prisma.ScheduleFindManyArgs, R extends Array<Prisma.ScheduleGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.ScheduleFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.ScheduleGetPayload<T>>>) {
    return request.useInfiniteModelQuery('Schedule', 'findMany', getNextArgs, options);
}

export function useFindUniqueSchedule<T extends Prisma.ScheduleFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.ScheduleFindUniqueArgs>, options?: QueryOptions<Prisma.ScheduleGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Schedule', 'findUnique', args, options);
}

export function useFindFirstSchedule<T extends Prisma.ScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.ScheduleFindFirstArgs>, options?: QueryOptions<Prisma.ScheduleGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Schedule', 'findFirst', args, options);
}

export function useUpdateSchedule(options?: MutationOptions<Prisma.ScheduleGetPayload<Prisma.ScheduleUpdateArgs> | undefined, unknown, Prisma.ScheduleUpdateArgs>) {
    const mutation = request.useModelMutation('Schedule', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ScheduleUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.ScheduleUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ScheduleGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManySchedule(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.ScheduleUpdateManyArgs>) {
    const mutation = request.useModelMutation('Schedule', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.ScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.ScheduleUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertSchedule(options?: MutationOptions<Prisma.ScheduleGetPayload<Prisma.ScheduleUpsertArgs> | undefined, unknown, Prisma.ScheduleUpsertArgs>) {
    const mutation = request.useModelMutation('Schedule', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ScheduleUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.ScheduleUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ScheduleGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteSchedule(options?: MutationOptions<Prisma.ScheduleGetPayload<Prisma.ScheduleDeleteArgs> | undefined, unknown, Prisma.ScheduleDeleteArgs>) {
    const mutation = request.useModelMutation('Schedule', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ScheduleDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.ScheduleDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ScheduleGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManySchedule(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.ScheduleDeleteManyArgs>) {
    const mutation = request.useModelMutation('Schedule', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.ScheduleDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.ScheduleDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateSchedule<T extends Prisma.ScheduleAggregateArgs>(args?: Prisma.Subset<T, Prisma.ScheduleAggregateArgs>, options?: QueryOptions<Prisma.GetScheduleAggregateType<T>>) {
    return request.useModelQuery('Schedule', 'aggregate', args, options);
}

export function useGroupBySchedule<T extends Prisma.ScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ScheduleGroupByArgs['orderBy'] } : { orderBy?: Prisma.ScheduleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.ScheduleGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.ScheduleGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.ScheduleGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.ScheduleGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.ScheduleGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('Schedule', 'groupBy', args, options);
}

export function useCountSchedule<T extends Prisma.ScheduleCountArgs>(args?: Prisma.Subset<T, Prisma.ScheduleCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ScheduleCountAggregateOutputType> : number>) {
    return request.useModelQuery('Schedule', 'count', args, options);
}
