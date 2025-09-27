import { type UserProps } from '@/interfaces';

const UserCard = ({ user }: { user: UserProps }) => {
  return (
    <div className="w-full max-w-sm rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-gray-800">{user.name}</h3>
      <p className="mb-4 text-indigo-600">{user.email}</p>
      <div className="text-sm text-gray-500">
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;