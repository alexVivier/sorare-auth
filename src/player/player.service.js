import axios from 'axios';

export async function getPlayer(user) {
    const player = await axios.post('https://api.sorare.com/graphql', {
        query: `
            query user($slug: String!) {
                user(slug: $slug) {
                    id
                    createdAt
                    nickname
                    paginatedCards(last: 20) {
                        nodes {
                            id
                            name
                            pictureUrl
                            so5Scores(last: 5) {
                                score
                            }
                            power
                            player {
                                lastFiveSo5Appearances
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            slug: user.slug
        },
        headers: {
            'Authorization': `Bearer ${user.jwtToken.token}`
        }
    })

    if (player.data.errors) {
        console.error(player.data.errors);
        return false;
    }

    return player.data.data;
}