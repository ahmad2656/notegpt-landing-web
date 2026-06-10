export default async function BlogPage({ params }) {
  const { blogId } = await params;
  return (
    <div>
      <h1 style={{ position: "relative", top: "5rem" }}>
        Your Blogs are {blogId}
      </h1>
    </div>
  );
}
