export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog Post Page</h1>
            <p>{params.dynamic}</p>
        </main>
    );
}
