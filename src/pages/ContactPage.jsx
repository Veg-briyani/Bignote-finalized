// src/pages/ContactPage.jsx

import ContactSection from "../components/contact/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <ContactSection />
    </div>
  );
};

export default ContactPage;
// import { useNavigate } from "react-router-dom";
// import { AlertTriangle, BookX, Feather } from "lucide-react";

// const NotFoundPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-sky-50 to-blue-50">
//       {/* Left Section - Error Content */}
//       <div className="flex-1 flex items-center justify-center p-8">
//         <div className="max-w-md w-full space-y-8">
//           <div className="text-center">
//             <div className="mb-6 inline-flex items-center gap-2 text-blue-600">
//               <BookX size={32} />
//               <span className="text-2xl font-bold">Author Portal</span>
//             </div>
//             <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
//               Manuscript Missing
//             </h1>
//             <p className="text-gray-600">
//               The page you're seeking seems to have wandered off plot...
//             </p>
//           </div>

//           <div className="flex items-center gap-2 p-3 bg-red-100 text-red-700 rounded-lg">
//             <AlertTriangle size={20} />
//             <span>Error 404 - Page Not Found</span>
//           </div>

//           <div className="space-y-6">
//             <button
//               onClick={() => navigate(-1)}
//               className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//             >
//               <Feather size={20} />
//               Return to Previous Page
//             </button>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-transparent text-gray-500">
//                   Quick Links
//                 </span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <button
//                 onClick={() => navigate("/dashboard")}
//                 className="p-3 text-left rounded-lg border border-gray-300 hover:bg-blue-50 transition-colors"
//               >
//                 <h3 className="font-medium text-blue-600">Dashboard</h3>
//                 <p className="text-sm text-gray-600">Writing workspace</p>
//               </button>
//               <button
//                 onClick={() => navigate("/library")}
//                 className="p-3 text-left rounded-lg border border-gray-300 hover:bg-blue-50 transition-colors"
//               >
//                 <h3 className="font-medium text-blue-600">Library</h3>
//                 <p className="text-sm text-gray-600">Published works</p>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Creative 404 Illustration */}
//       <div className="hidden md:flex flex-1 bg-gradient-to-br from-sky-500 to-blue-600 p-12 items-center justify-center min-h-screen relative overflow-hidden">
//         <div className="max-w-2xl text-white text-center space-y-12 z-10">
//           {/* Broken Pencil Illustration */}
//           <div className="relative h-[400px] w-full">
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3/5 bg-white/5 rounded-t-2xl shadow-xl">
//               {/* Torn Pages */}
//               <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-3/5 bg-white/10 p-4 rounded-lg shadow-lg">
//                 <div className="h-32 bg-white/20 rounded-md flex items-center justify-center">
//                   <span className="text-sm italic opacity-75">
//                     404: Page Not Found
//                   </span>
//                 </div>
//                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/10 clip-path-torn"></div>
//               </div>

//               {/* Broken Pencil */}
//               <div className="absolute left-8 bottom-8 flex space-x-2">
//                 <div className="w-8 h-24 bg-sky-200/30 rounded-full rotate-12">
//                   <div className="w-full h-1/2 bg-blue-200/50 rounded-t-full"></div>
//                   <div className="w-4 h-4 bg-red-200/50 rounded-full mx-auto mt-4"></div>
//                 </div>
//               </div>

//               {/* Crashed Paper Plane */}
//               <div className="absolute right-8 bottom-8 animate-crash">
//                 <div className="w-8 h-8 bg-white/20 transform rotate-45">
//                   <div className="w-full h-1 bg-white/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Writing Progress Card */}
//           <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xs mx-auto">
//             <div className="flex items-center gap-4">
//               <div className="flex-shrink-0">
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//                   <Feather className="w-6 h-6 text-blue-600" />
//                 </div>
//               </div>
//               <div className="text-left">
//                 <h3 className="font-semibold">Lost Inspiration?</h3>
//                 <p className="text-sm opacity-90">Try our writing prompts</p>
//               </div>
//             </div>
//           </div>

//           {/* Inspirational Quote */}
//           <div className="mt-12 italic opacity-90">
//             &quot;The only true error is failing to continue writing.&quot;
//             <div className="mt-2 text-sm">
//               - Anonymous Author
//             </div>
//           </div>
//         </div>

//         {/* Subtle Pattern Background */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEyIDZjMi45NzMgMCA1Ljg5My 1uNzA3IDguNDE2LTEuOTYyTDEyIDEybC04LjQxNi03Ljk2MkM2LjEwNyA1LjI5MyA5LjAyNyA2IDEyIDZ6bTAgMTJjLTIuOTczIDAtNS44OTMuNzA3LTguNDE2IDEuOTYyTDEyIDEybDguNDE2IDcuOTYyQzE3Ljg5MyAxOC43MDcgMTUuOTczIDE4IDEyIDE4em0wLTEyQzYuNDc3IDAgMS45MSAzLjA3Ni4yMjkgNy4wODhsMTEuNzcxIDExLjEyNCAxMS43Ny0xMS4xMkMyMi4wOSAzLjA3NyAxNy41MjMgMCAxMiAwem0wIDEyLjg3OUwuMjMgNy4wODhDMS45MSAzLjA3NiA2LjQ3NyAwIDEyIDBzMTAuMDkgMy4wNzYgMTEuNzcgNy4wODhMMTIgMjQuODc5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=')] repeat"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotFoundPage;