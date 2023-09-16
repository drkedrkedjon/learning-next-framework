/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { data } from "@/app/data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlogPage({ params }) {
  const redirect = useRouter();
  const param = params.blogID;
  const user = data.find((item) => {
    return item.id === param;
  });

  useEffect(() => {
    const cancelTimeout = setTimeout(() => redirect.push("/"), 2000);
    return () => cancelTimeout;
  }, []);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Vamos a regresar en 2 segundo...</p>
    </div>
  );
}
