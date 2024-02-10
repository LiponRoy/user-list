import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com',
	}),
	tagTypes: ['user_tag'],

	endpoints: (builder) => ({
		getUsers: builder?.query<any[], void>({
			query: () => '/users',
			providesTags: ['user_tag'],
		}),
		userDetail: builder.query<any, string>({
			query: (_id) => `/singleUser/${_id}`,
			providesTags: ['user_tag'],
		}),
	}),
});

// Export hooks for usage in components
export const { useGetUsersQuery, useUserDetailQuery } = userApi;
