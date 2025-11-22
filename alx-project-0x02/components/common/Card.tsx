import { CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
