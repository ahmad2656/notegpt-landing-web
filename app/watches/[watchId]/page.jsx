// export default async function WatchPage({ params }) {
//   const { watchId } = await params;

//   const watchesData = {
//     hublot: {
//       name: "Hublot",
//       price: "$5,000",
//       description: "Luxury Swiss watch with bold design",
//       year: 1980,
//     },
//     rado: {
//       name: "Rado",
//       price: "$2,000",
//       description: "Known for scratch-resistant ceramic watches",
//       year: 1957,
//     },
//     rolex: {
//       name: "Rolex",
//       price: "$10,000",
//       description: "Iconic luxury watch brand",
//       year: 1905,
//     },
//     omega: {
//       name: "Omega",
//       price: "$6,000",
//       description: "Precision and elegance",
//       year: 1848,
//     },
//   };

//   const watch = watchesData[watchId];

//   if (!watch) {
//     return (
//       <>
//         <h1>Watch not found</h1>
//         <p>No watch found with brand: {watchId}</p>
//       </>
//     );
//   }

//   return (
//     <>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//       <h1>Your Watch Brand: {watch.name}</h1>
//       <p>Price: {watch.price}</p>
//       <p>Description: {watch.description}</p>
//       <p>Year Established: {watch.year}</p>
//     </>
//   );
// }


// 1...ACCESS WITH KEY

// data.hublot     // ✅ { name: "Hublot", price: "$5000" }
// data["rado"]    // ✅ { name: "Rado", price: "$2000" }

// 2......// WITH ARRAY ACCES DATA

export default async function WatchPage({ params }) {
  const { watchId } = await params;

  const watchesArray = [
    {
      id: "hubloot",
      name: "Hublot",
      price: "$5,000",
      description: "Luxury Swiss watch with bold design",
      year: 1980,
    },
    {
      id: "rado",
      name: "Rado",
      price: "$2,000",
      description: "Known for scratch-resistant ceramic watches",
      year: 1957,
    },
    {
      id: "rolex",
      name: "Rolex",
      price: "$10,000",
      description: "Iconic luxury watch brand",
      year: 1905,
    },
    {
      id: "omega",
      name: "Omega",
      price: "$6,000",
      description: "Precision and elegance",
      year: 1848,
    },
  ];

  const watch = watchesArray.find((w) => w.id === watchId);

  if (!watch) {
    return <h1>Watch not found</h1>;
  }

  return (
    <>
    <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
      <h1>Your Watch: {watch.name}</h1>
      <p>Price: {watch.price}</p>
      <p>Description: {watch.description}</p>
      <p>Year: {watch.year}</p>
    </>
  );
}
