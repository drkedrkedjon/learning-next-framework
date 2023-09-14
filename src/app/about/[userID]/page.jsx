import { users } from "@/app/myNewData";

export default function UserDetails({ params }) {
  const userID = params.userID;
  console.log(userID);
  const getUser = users.find((user) => user.id === userID);
  return <p>{getUser.name}</p>;
}
