import { gql } from "graphql-request";

export function CharacterByIdQuery() {
    const query = gql`
    query($id: ID!)  {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            origin {
                id
                name
                type
                dimension
            }
            location {
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
                    location {
                        id
                        name
                        dimension
                        type
                    }
                }
            }
            image
            episode {
                id
                name
                air_date
                episode
                characters {
                    id
                    name
                    status
                    species
                    type
                }
            }
        }
    }
    `;
    return query;
}

export function CharactersQuery() {
    const query = gql`
    query {
        characters(page: $page, filter: $filter) {
            info {
                count
                pages
                next
                prev
                }
            results {
                name
                status
                species
                type
                gender
                origin {
                    id
                }
                location {
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
                    }
                }
                image
                episode {
                    id
                    name
                    air_date
                    episode
                    characters {
                        id
                        name
                        status
                        species
                        type
                        gender
                        image
                    }
                }


            }


        }
    }
    `;
    return query;
}

