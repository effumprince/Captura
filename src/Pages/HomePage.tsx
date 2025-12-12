
import Hero from "../components/Hero.tsx";
import Mission from "../components/Mission.tsx";
export default function HomePage() {
  return (
    <>
      <Hero  />
      <Mission />
    </>
  );
}

// import Hero from "../components/Hero.tsx";
// import Mission from "../components/Mission.tsx";

// export default function HomePage() {
//   return (
//     <div className="relative w-full h-screen overflow-x-hidden">
//       {/* First section stays fixed */}
//       <div className="fixed inset-0 z-10">
//         <Hero />
//       </div>

//       {/* Second section starts below the viewport */}
//       <div className="absolute top-[70vh] left-0 right-0 z-20">
//         <Mission />
//       </div>
//     </div>
//   );
// }
