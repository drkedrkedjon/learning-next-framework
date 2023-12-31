import { users } from "@/app/myNewData";

export async function generateMetadata({ params }) {
  const userID = params.userID;
  const getUser = users.find((user) => user.id === userID);

  return {
    title: `About ${getUser.name}`,
  };
}

export default function UserDetails({ params }) {
  const userID = params.userID;

  const getUser = users.find((user) => user.id === userID);
  return (
    <div>
      <p>{getUser.name}</p>
      <p>{getUser.email}</p>
    </div>
  );
}
