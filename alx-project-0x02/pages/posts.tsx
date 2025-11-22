import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import { type PostProps } from '@/interfaces';

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Posts</h1>
        
        {loading && (
          <div className="text-center py-8">
            <p className="text-xl text-gray-600">Loading posts...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>Error: {error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{post.body}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <p>User ID: {post.userId}</p>
                  <p>Post ID: {post.id}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
