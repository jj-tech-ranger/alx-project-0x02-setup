import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Welcome to Next.js', content: 'This is a modern web framework' },
    { title: 'Learn TypeScript', content: 'Type-safe development made easy' },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Home Page</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Post
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
      {showModal && (
        <PostModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
}
