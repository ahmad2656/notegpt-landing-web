export default async function ProductPage({ params }) {
  const { productId } = await params;
  return (
    <div>
      <h1 style={{ position: "relative", top: "5rem" }}>
        Your Products are {productId}
      </h1>
    </div>
  );
}









