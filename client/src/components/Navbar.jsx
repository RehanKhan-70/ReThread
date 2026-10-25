// // import React from 'react';
// // import { Link, NavLink } from 'react-router-dom';
// // import { Shirt, RefreshCw, MapPin, User, PlusCircle, LogIn, LogOut } from 'lucide-react';

// // export default function Navbar({ onOpenAddModal, currentUser, onOpenAuthModal, onLogout }) {
// //   return (
// //     <header className="bg-emerald-950 text-white sticky top-0 z-40 shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        
// //         {/* Brand Logo */}
// //         <Link to="/" className="flex items-center gap-2 text-lg font-black tracking-tight text-white">
// //           <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-emerald-950">
// //             <RefreshCw className="w-5 h-5" />
// //           </div>
// //           <span>ReThread<span className="text-emerald-400">.</span></span>
// //         </Link>

// //         {/* Navigation Links */}
// //         <nav className="hidden md:flex items-center gap-1 bg-emerald-900/50 p-1 rounded-2xl border border-emerald-800/50 text-xs font-semibold text-emerald-200">
// //           <NavLink
// //             to="/"
// //             className={({ isActive }) =>
// //               `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
// //                 isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
// //               }`
// //             }
// //           >
// //             <Shirt className="w-3.5 h-3.5" /> Browse Apparel
// //           </NavLink>

// //           <NavLink
// //             to="/swaps"
// //             className={({ isActive }) =>
// //               `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
// //                 isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
// //               }`
// //             }
// //           >
// //             <RefreshCw className="w-3.5 h-3.5" /> Swap Hub
// //           </NavLink>

// //           <NavLink
// //             to="/map"
// //             className={({ isActive }) =>
// //               `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
// //                 isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
// //               }`
// //             }
// //           >
// //             <MapPin className="w-3.5 h-3.5" /> Nearby Map
// //           </NavLink>

// //           <NavLink
// //             to="/profile"
// //             className={({ isActive }) =>
// //               `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
// //                 isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
// //               }`
// //             }
// //           >
// //             <User className="w-3.5 h-3.5" /> Wardrobe & Impact
// //           </NavLink>
// //         </nav>

// //         {/* Right Actions */}
// //         <div className="flex items-center gap-2">
// //           {currentUser ? (
// //             <div className="flex items-center gap-2">
// //               <span className="text-xs font-bold text-emerald-300 bg-emerald-900 px-3 py-1.5 rounded-xl border border-emerald-700/50">
// //                 {currentUser.name}
// //               </span>
// //               <button
// //                 onClick={onLogout}
// //                 title="Log Out"
// //                 className="p-1.5 bg-red-900/60 hover:bg-red-800 text-red-200 rounded-xl text-xs font-bold border border-red-700/50 transition flex items-center justify-center"
// //               >
// //                 <LogOut className="w-4 h-4" /> LogOut
// //               </button>
// //             </div>
// //           ) : (
// //             <button
// //               onClick={onOpenAuthModal}
// //               className="px-3.5 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-200 rounded-xl text-xs font-bold border border-emerald-700/50 transition flex items-center gap-1.5"
// //             >
// //               <LogIn className="w-3.5 h-3.5" /> Login
// //             </button>
// //           )}

// //           <button
// //             onClick={onOpenAddModal}
// //             className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-xl text-xs font-black shadow-md transition flex items-center gap-1.5 active:scale-95"
// //           >
// //             <PlusCircle className="w-4 h-4" /> + Add Listing
// //           </button>
// //         </div>

// //       </div>
// //     </header>
// //   );
// // }


// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { Shirt, RefreshCw, MapPin, User, PlusCircle, LogIn, LogOut } from 'lucide-react';

// export default function Navbar({ onOpenAddModal, currentUser, onOpenAuthModal, onLogout }) {
  
//   // Guard Handler: Checks authentication before opening Add Listing
//   const handleAddListingClick = () => {
//     if (currentUser) {
//       onOpenAddModal();
//     } else {
//       onOpenAuthModal();
//     }
//   };

//   return (
//     <header className="bg-emerald-950 text-white sticky top-0 z-40 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        
//         {/* Brand Logo */}
//         <Link to="/" className="flex items-center gap-2 text-lg font-black tracking-tight text-white">
//           <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-emerald-950">
//             <RefreshCw className="w-5 h-5" />
//           </div>
//           <span>ReThread<span className="text-emerald-400">.</span></span>
//         </Link>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex items-center gap-1 bg-emerald-900/50 p-1 rounded-2xl border border-emerald-800/50 text-xs font-semibold text-emerald-200">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
//                 isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
//               }`
//             }
//           >
//             <Shirt className="w-3.5 h-3.5" /> Browse Apparel
//           </NavLink>

//           <NavLink
//             to="/swaps"
//             className={({ isActive }) =>
//               `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
//                 isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
//               }`
//             }
//           >
//             <RefreshCw className="w-3.5 h-3.5" /> Swap Hub
//           </NavLink>

//           <NavLink
//             to="/map"
//             className={({ isActive }) =>
//               `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
//                 isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
//               }`
//             }
//           >
//             <MapPin className="w-3.5 h-3.5" /> Nearby Map
//           </NavLink>

//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
//                 isActive ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'hover:text-white hover:bg-emerald-800/40'
//               }`
//             }
//           >
//             <User className="w-3.5 h-3.5" /> Wardrobe & Impact
//           </NavLink>
//         </nav>

//         {/* Right Actions */}
//         <div className="flex items-center gap-2">
//           {currentUser ? (
//             <div className="flex items-center gap-2">
//               <span className="text-xs font-bold text-emerald-300 bg-emerald-900 px-3 py-1.5 rounded-xl border border-emerald-700/50">
//                 {currentUser.name}
//               </span>
//               <button
//                 onClick={onLogout}
//                 title="Log Out"
//                 className="p-1.5 bg-red-900/60 hover:bg-red-800 text-red-200 rounded-xl text-xs font-bold border border-red-700/50 transition flex items-center justify-center gap-1 px-2.5"
//               >
//                 <LogOut className="w-4 h-4" /> LogOut
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={onOpenAuthModal}
//               className="px-3.5 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-emerald-200 rounded-xl text-xs font-bold border border-emerald-700/50 transition flex items-center gap-1.5"
//             >
//               <LogIn className="w-3.5 h-3.5" /> Login
//             </button>
//           )}

//           {/* Add Listing Button with Auth Guard */}
//           <button
//             onClick={handleAddListingClick}
//             className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-xl text-xs font-black shadow-md transition flex items-center gap-1.5 active:scale-95"
//           >
//             <PlusCircle className="w-4 h-4" /> + Add Listing
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddItemModal from './components/AddItemModal';
import AuthModal from './components/AuthModal';
import { fetchListings, createListing } from './services/api';
import AdminPanel from './pages/AdminPanel';
import ItemDetail from './pages/ItemDetail';
import Profile from './pages/Profile';
import NearbyMap from './pages/NearbyMap';
import SwapHub from './pages/SwapHub';
import Home from './pages/Home';

export default function App() {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Intent state to remember if user clicked Add Listing before authenticating
  const [pendingAddModal, setPendingAddModal] = useState(false);

  // Initialize from localStorage or default to null
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    try {
      setLoading(true);
      const data = await fetchListings();
      setClothes(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('API Error:', err);
      setClothes([]);
    } finally {
      setLoading(false);
    }
  };

  // Guarded Handler for Navbar "+ Add Listing"
  const handleOpenAddModal = () => {
    if (currentUser) {
      setShowAddModal(true);
    } else {
      setPendingAddModal(true); // Remember user intent
      setShowAuthModal(true);   // Open Login Modal
    }
  };

  const handleAddItem = async (newItemData) => {
    try {
      setLoading(true);
      const createdItem = await createListing(newItemData);
      console.log('Successfully created item:', createdItem);
      setClothes((prev) => [createdItem, ...prev]);
      setShowAddModal(false);
      alert('Listing created successfully!');
    } catch (err) {
      console.error('Error adding item:', err);
      alert(`Error creating listing: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteListing = (id) => {
    if (window.confirm("Are you sure you want to remove this listing?")) {
      setClothes((prev) => prev.filter((c) => (c._id || c.id) !== id));
    }
  };

  // Login Handler with Auto-Open Add Listing Modal trigger
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setShowAuthModal(false);

    // If user clicked "+ Add Listing" prior to logging in, open Add Item Modal now
    if (pendingAddModal) {
      setShowAddModal(true);
      setPendingAddModal(false); // Reset intent
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      <div>
        {/* HIDE USER NAVBAR ON ADMIN PAGE */}
        {!isAdminRoute && (
          <Navbar
            onOpenAddModal={handleOpenAddModal}
            currentUser={currentUser}
            onOpenAuthModal={() => {
              setPendingAddModal(false); // Manual Login button click
              setShowAuthModal(true);
            }}
            onLogout={handleLogout}
          />
        )}

        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  clothes={clothes}
                  loading={loading}
                  onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
                />
              }
            />
            <Route path="/swaps" element={<SwapHub />} />
            <Route
              path="/map"
              element={
                <NearbyMap
                  clothes={clothes}
                  onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
                />
              }
            />
            <Route 
              path="/profile" 
              element={<Profile userListings={clothes} currentUser={currentUser} />} 
            />
            <Route
              path="/item/:id"
              element={
                <ItemDetail
                  clothes={clothes}
                  onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <AdminPanel
                  clothes={clothes}
                  onDeleteListing={handleDeleteListing}
                />
              }
            />
          </Routes>
        </main>
      </div>

      <Footer />

      {showAddModal && (
        <AddItemModal
          onClose={() => setShowAddModal(false)}
          onItemAdded={handleAddItem}
        />
      )}

      {showAuthModal && (
        <AuthModal
          onClose={() => {
            setShowAuthModal(false);
            setPendingAddModal(false);
          }}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}