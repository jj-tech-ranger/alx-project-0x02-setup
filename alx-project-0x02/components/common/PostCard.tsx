import { type PostProps } from '@/interfaces';

export interface PostCardProps {
  post: PostProps;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="mb-2">
        <span className="text-sm text-gray-500">Post #{post.id}</span>
        <span className="text-sm text-gray-500 ml-4">User #{post.userId}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 capitalize">
        {post.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {post.body}
      </p>
    </div>
  );
}
