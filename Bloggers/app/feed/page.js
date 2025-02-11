import Posts from "@/components/Posts";

import { getPosts } from "@/lib/posts";

export async function generateMetadata() {
    const posts = await getPosts();
    const postsLength = posts.length;

    return {
        title: `Browse all ${postsLength} posts.`,
        description: `Browse all our posts.`,
    };
}

export default async function FeedPage() {
    const posts = await getPosts();

    return (
        <>
            <h1>All posts by all users</h1>
            <Posts posts={posts} />
        </>
    );
}
