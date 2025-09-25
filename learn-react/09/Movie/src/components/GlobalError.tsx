import type { FallbackProps } from "react-error-boundary";

export default function GlobalError({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <h1>GlobalError Component</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>다시 시도하기</button>
    </div>
  );
}