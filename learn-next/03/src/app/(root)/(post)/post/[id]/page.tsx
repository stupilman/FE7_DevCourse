import { formDate } from "@/src/app/(root)/(post)/post/[id]/_helper/utils";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang: string }>;
}) {
  const { id } = await params;
  const { lang } = await searchParams;
  const date = new Date();
  return (
    <>
      <h1>
        {`${id}번 째 게시글`} - {lang}
      </h1>
      <h1>{formDate(date)}</h1>
    </>
  );
}
