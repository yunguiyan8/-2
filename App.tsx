
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Experience } from './components/Experience';
import { TreeState } from './types';
import { COLORS } from './constants';

const App: React.FC = () => {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.SCATTERED);

  const toggleState = () => {
    setTreeState(prev => 
      prev === TreeState.SCATTERED ? TreeState.TREE_SHAPE : TreeState.SCATTERED
    );
  };

  useEffect(() => {
    // Initial delay for dramatic entrance
    const timer = setTimeout(() => {
      setTreeState(TreeState.TREE_SHAPE);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen relative bg-[#011612] select-none">
      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full p-8 z-10 flex flex-col pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest text-[#D4AF37] uppercase drop-shadow-lg">
          Arix <span className="font-bold">Signature</span>
        </h1>
        <p className="text-[#D4AF37]/60 text-sm tracking-[0.3em] mt-2 uppercase">
          Interactive Festive Experience
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <button
          onClick={toggleState}
          className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F9A602] text-black font-bold uppercase tracking-widest rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] active:scale-95 pointer-events-auto overflow-hidden group relative"
        >
          <span className="relative z-10">
            {treeState === TreeState.SCATTERED ? 'Assemble Tree' : 'Scatter Spirit'}
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
        <p className="text-[#D4AF37]/40 text-[10px] uppercase tracking-tighter">
          Drag to rotate • Scroll to zoom
        </p>
      </div>

      {/* Luxury Sidebar/Stats */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-8 items-end pointer-events-none opacity-50">
        <div className="text-right">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">Atmosphere</p>
          <p className="text-xl text-[#D4AF37]">Lobby High</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">Materials</p>
          <p className="text-xl text-[#D4AF37]">Emerald Gold</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">Version</p>
          <p className="text-xl text-[#D4AF37]">2024.12</p>
        </div>
      </div>

      {/* 3D Scene */}
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 4, 25]} fov={35} />
        <OrbitControls 
          enableDamping 
          dampingFactor={0.05} 
          minDistance={10} 
          maxDistance={40} 
          maxPolarAngle={Math.PI / 1.8}
        />
        <Experience state={treeState} />
      </Canvas>

      {/* Vignette Overlay for extra mood */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,22,18,0.4)_100%)] shadow-inner" />
    </div>
  );
};

export default App;
