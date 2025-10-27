export default async function PostCommentPage({
  params,
}: {
  params: Promise<{ id: string; commentId: string }>;
}) {
  const { id, commentId } = await params;
  return (
    <>
      <h1>{`${commentId} ${id} 으아악`}</h1>
    </>
  );
}
