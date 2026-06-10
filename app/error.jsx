"use client";
export default function Error({error, reset}) {
  return (
    <>
      <div className="router-error">
        <h2>Route Error </h2>
        <p>{error.message}</p>
        <button onClick={reset}>Retry</button>
      </div>
    </>
  );
}
