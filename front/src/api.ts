import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL =
  import.meta.env.SNOWPACK_API_URI || 'http://localhost:3000/graphql';

const graphQLClient = new GraphQLClient(API_URL);

export function useGetPosts() {
  return useQuery('get-users', () =>
    graphQLClient
      .request(
        gql`
          query {
            users {
              id
              userName
            }
          }
        `,
      )
      .then((resp) => resp.users),
  );
}
