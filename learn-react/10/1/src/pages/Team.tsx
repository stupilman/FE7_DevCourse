// /team/1
// /team/2
// /team/3
import { useParams, useSearchParams } from "react-router";

export default function Team() {
  const params = useParams();
  const [searchParams] = useSearchParams()
  return (
    <>
      <h1>Team Component</h1>
      <h2>TeamId: {params.id}</h2>
      <h2>GroupId: {params.groupId}</h2>
      <h2>lang: {searchParams.get("lang")}</h2>
    </>
  );
}
