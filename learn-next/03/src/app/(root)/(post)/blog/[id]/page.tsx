"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function BlogDetailPage() {
  const params = useParams();
  const serachParams = useSearchParams();
  const lang = serachParams.get("lang");
  return (
    <>
      <h1>
        {`${params.id}번 째 게시물`} - {lang}
      </h1>
    </>
  );
}
