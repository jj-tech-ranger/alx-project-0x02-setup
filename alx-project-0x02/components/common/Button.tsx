import { type ButtonProps } from '@/interfaces';

export default function Button({ size, shape, children, onClick }: ButtonProps) {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 ${sizeClasses[size]} ${shape}`}
    >
      {children}
    </button>
  );
}
