import { useState } from 'react';
import {
  Phone,
  Video,
  MoreVertical,
  ChevronLeft,
  User,
  Feather,
  ScrollText,
  Sparkles,
  Fan
} from 'lucide-react';

// Mock Data
const MESSAGES = [
  { id: 1, text: "Greetings, traveler! Have the scrolls from the southern kingdom arrived?", sender: 'other', time: '10:00 AM' },
  { id: 2, text: "Pranāma! Yes, the elephant caravans reached the gates at sunrise.", sender: 'me', time: '10:05 AM' },
  { id: 3, text: "Excellent. We shall begin the translation of the Rigveda verses tomorrow.", sender: 'other', time: '10:12 AM' },
];

export const Chat = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#efe4cf] via-[#dcc6a1] to-[#c7a672] p-4 font-[Montserrat,ui-sans-serif]">
      {/* Main Container: Scroll-inspired parchment */}
      <div
        className="w-full max-w-md h-[600px] flex flex-col bg-[#f9edd0] rounded-[28px] shadow-2xl border-[6px] border-[#9a6a38] relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/handmade-paper.png'), radial-gradient(circle at 20% 20%, rgba(154,106,56,0.08), transparent 28%), radial-gradient(circle at 80% 70%, rgba(154,106,56,0.08), transparent 28%)"
        }}
      >
        {/* Wooden dowel edges */}
        <div className="absolute -top-5 left-8 right-8 h-4 bg-gradient-to-r from-[#c08a4f] via-[#b57942] to-[#c08a4f] rounded-full shadow-inner" />
        <div className="absolute -bottom-5 left-8 right-8 h-4 bg-gradient-to-r from-[#c08a4f] via-[#b57942] to-[#c08a4f] rounded-full shadow-inner" />
        <div className="absolute inset-y-8 -left-4 w-2 bg-gradient-to-b from-[#c08a4f] via-[#b57942] to-[#c08a4f] rounded-full shadow-md" />
        <div className="absolute inset-y-8 -right-4 w-2 bg-gradient-to-b from-[#c08a4f] via-[#b57942] to-[#c08a4f] rounded-full shadow-md" />

        {/* Header: Rich maroon + gold with motifs */}
        <header className="bg-[#7d2e1c] text-[#f6e4b5] p-4 flex items-center justify-between shadow-md border-b-2 border-[#d8b56b] relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[#f1cf79]/60">
            <Fan size={18} />
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[#f1cf79]/60">
            <Fan size={18} />
          </div>
          <div className="flex items-center gap-3">
            <ChevronLeft className="cursor-pointer" />
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#ffd700] flex items-center justify-center border-2 border-[#8b4513]">
                <User size={24} className="text-[#800000]" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#800000] rounded-full"></div>
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight">Arya Bhatta</h2>
              <p className="text-xs opacity-80">Available in the Court</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone size={20} className="cursor-pointer hover:scale-110 transition-transform" />
            <Video size={20} className="cursor-pointer hover:scale-110 transition-transform" />
            <MoreVertical size={20} className="cursor-pointer" />
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-opacity-30">
          {MESSAGES.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[80%] p-3 shadow-md relative
                ${msg.sender === 'me' 
                  ? 'bg-[#e6ccb2] border-r-4 border-[#8b4513] rounded-l-lg rounded-tr-lg text-[#3e2723]' 
                  : 'bg-[#fffcf2] border-l-4 border-[#b8860b] rounded-r-lg rounded-tl-lg text-[#3e2723]'}
              `}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span className="text-[10px] block mt-1 text-right opacity-60 italic">{msg.time}</span>
                
                {/* Ancient Corner Flourish (Visual Detail) */}
                <div className="absolute top-0 right-0 opacity-10 p-1">
                  <div className="border-t border-r border-[#8b4513] w-2 h-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll-style Input Footer */}
        <footer className="p-4 bg-transparent relative">
          <div className="flex items-center gap-2 bg-[#fdf5e6] rounded-full border-[3px] border-[#9a6a38] shadow-inner px-4 py-2">
            <ScrollText size={20} className="text-[#8b4513] cursor-pointer" />
            <input 
              type="text" 
              placeholder="Inscribe a message..."
              className="flex-1 bg-transparent border-none focus:outline-none text-[#3e2723] placeholder-[#8b4513]/50 italic"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {input.length > 0 ? (
              <Feather size={20} className="text-[#7d2e1c] cursor-pointer" />
            ) : (
              <Sparkles size={20} className="text-[#8b4513] cursor-pointer" />
            )}
          </div>
          
          {/* Subtle "Scroll Roll" edges at bottom */}
          <div className="absolute -bottom-1 left-4 right-4 h-2 bg-[#8b4513] rounded-full opacity-20"></div>
        </footer>
      </div>
    </div>
  );
};