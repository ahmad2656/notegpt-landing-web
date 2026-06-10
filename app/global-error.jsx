"use client";
export default function GlobalError({error, reset}) {
  return (
    <>
      <div className="router-error">
        <h2>Critical App Error </h2>
        <p>{error.message}</p>
        <button onClick={reset}>Retry</button>
      </div>
    </>
  );
}
