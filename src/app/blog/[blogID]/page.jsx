import { data } from "@/app/data";

export default function BlogPage({ params }) {
  const param = params.blogID;
  const user = data.find((item) => {
    return item.id === param;
  });
  return <p>{user.name}</p>;
}
