const { gql } = require('graphql-request');

export function LocationByIdQuery() {
    var query = gql`
    query ($id: ID!) {
        location(id: $id) {
            id
            name
            type
            dimension
            residents {
                id
                name
                status
                species
                type
                gender
                image
                created

            }
        }
    }
    `;
    return query;
}


export function LocationsQuery() {
    var query = gql`
    query ($page: Int!, $filter: FilterLocation) {
        locations(page: $page, filter: $filter) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                type
                dimension
                residents {
                    id
                    name
                    image
                }
            }
        }
    }
    `;
    return query;
}


