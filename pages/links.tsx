import { useLinksQuery } from "../types/gen/graphql-types";

export default function Links() {
  const { data } = useLinksQuery();
  return (
    <div>
      {data?.links.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
  );
}
