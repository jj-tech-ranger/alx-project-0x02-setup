import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Username:</span> {username}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Website:</span> {website}
      </p>
      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address:</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}
        </p>
        <p className="text-gray-600">
          {address.city}, {address.zipcode}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company:</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-600 text-sm italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
