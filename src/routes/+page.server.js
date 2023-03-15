import { getPosts } from '$lib/services'

export const load = async() => {
    const {data, error} = await getPosts();
    return {
        props: {
            posts: data,
            error
        }
    };
};