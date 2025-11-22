import Header from '@/components/layout/Header';
import { type PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';
import { GetStaticProps } from 'next';

export interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts: PostProps[] = await response.json();
    
    return {
      props: {
        posts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    };
  }
};
