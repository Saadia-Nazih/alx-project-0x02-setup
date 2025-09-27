import { type PostProps } from '@/interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <article className="w-full max-w-xl rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-2 text-2xl font-bold text-gray-800">{title}</h3>
      <p className="mb-4 text-gray-600">{content}</p>
      <footer className="text-right text-sm font-medium text-gray-400">
        - Scritto dall'utente #{userId}
      </footer>
    </article>
  );
};

export default PostCard;