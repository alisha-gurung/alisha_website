
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '../utils/confetti';

const ValentinesInvite: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [yesPressed, setYesPressed] = useState(false);
    const [noCount, setNoCount] = useState(0);
    const [noPosition, setNoPosition] = useState({ top: '50%', left: '75%' });
    const [modal, setModal] = useState({ isOpen: false, text: '', img: '' });
    const noBtnRef = useRef<HTMLButtonElement>(null);

    const handleNoHover = () => {
        if (noCount < 2) return;
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 80 + 10; // 10% to 90%
        setNoPosition({ top: `${y}%`, left: `${x}%` });
    };

    const handleNoClick = () => {
        if (noCount === 0) {
            setModal({
                isOpen: true,
                text: "Gu hau k gu timi tah!",
                img: "/alisha_website/images/angry.gif"
            });
            setNoCount(1);
        } else if (noCount === 1) {
            setModal({
                isOpen: true,
                text: "Roke maile timilai feri pani!",
                img: "/alisha_website/images/pout.gif"
            });
            setNoCount(2);
        } else {
            handleNoHover();
        }
    };

    const closeModal = () => setModal({ ...modal, isOpen: false });

    const handleYesClick = () => {
        setYesPressed(true);
        triggerConfetti();
    };

    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const handleServiceClick = () => {
        setShowPasswordPrompt(true);
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput.toLowerCase().trim() === 'prashjeevlovesalisha') {
            setShowPasswordPrompt(false);
            setIsOpen(true);
            setPasswordError(false);
        } else {
            setPasswordError(true);
            triggerConfetti(); // Prank confetti on wrong password? No, maybe just shake.
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full relative">
            <AnimatePresence mode="wait">
                {!isOpen && !showPasswordPrompt ? (
                    <motion.div
                        key="disguise"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        className="cursor-pointer group"
                        onClick={handleServiceClick}
                    >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Services</h2>
                            <p className="text-gray-500 mt-2 group-hover:text-gray-700 transition-colors">Click to view available packages</p>
                        </div>
                    </motion.div>
                ) : showPasswordPrompt && !isOpen ? (
                    <motion.div
                        key="password"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white/80 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl max-w-sm w-full text-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Enter Password</h3>
                        <form onSubmit={handlePasswordSubmit} className="space-y-4">
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => {
                                    setPasswordInput(e.target.value);
                                    setPasswordError(false);
                                }}
                                placeholder="Start typing..."
                                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all ${passwordError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary/50'}`}
                                autoFocus
                            />
                            {passwordError && <p className="text-red-500 text-sm">Incorrect password. Try again 😜</p>}
                            <div className="flex gap-2 justify-center">
                                <button
                                    type="button"
                                    onClick={() => setShowPasswordPrompt(false)}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-all shadow-md"
                                >
                                    Unlock
                                </button>
                            </div>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="invite"
                        initial={{ opacity: 0, y: 20, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        className="relative bg-[#fdfbf7] p-8 md:p-12 rounded-lg shadow-2xl max-w-md w-full text-center border-2 border-gray-200"
                        style={{
                            backgroundImage: 'url("https://www.transparenttextures.com/patterns/lined-paper.png")',
                            fontFamily: '"Indie Flower", cursive',
                        }}
                    >
                        {/* Tape effect */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-2 shadow-sm transform skew-x-12 z-10"></div>

                        {!yesPressed ? (
                            <div className="space-y-8 relative z-0">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                                    Alisha, my baby, my fuchhi will you be my <span className="text-red-500">Valentine?</span>
                                </h1>

                                <div className="flex justify-center gap-8 h-20 items-center relative">
                                    <button
                                        onClick={handleYesClick}
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transform transition hover:scale-110 shadow-lg text-xl"
                                    >
                                        Yes! 💖
                                    </button>

                                    <button
                                        ref={noBtnRef}
                                        onClick={handleNoClick}
                                        onMouseEnter={handleNoHover}
                                        onTouchStart={handleNoHover}
                                        style={{ position: 'absolute', top: noPosition.top, left: noPosition.left, transform: 'translate(-50%, -50%)', transition: 'all 0.3s ease-out' }}
                                        className={`bg-red-400 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl ${noCount >= 2 ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:bg-red-500'}`}
                                    >
                                        No 😢
                                    </button>
                                </div>

                                {/* Modal for "No" clicks */}
                                <AnimatePresence>
                                    {modal.isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                                            onClick={closeModal}
                                        >
                                            <motion.div
                                                initial={{ scale: 0.8, y: 20 }}
                                                animate={{ scale: 1, y: 0 }}
                                                exit={{ scale: 0.8, y: 20 }}
                                                className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-2xl relative"
                                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                                            >
                                                <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✕</button>
                                                <img src={modal.img} alt="Angry Anime Reaction" className="w-full rounded-md mb-4 h-48 object-cover" />
                                                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">{modal.text}</h3>
                                                <button onClick={closeModal} className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 transition">
                                                    Okay 🥺
                                                </button>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="space-y-6 w-full max-w-2xl px-4"
                            >
                                <h1 className="text-4xl md:text-5xl font-bold text-red-500 leading-tight mb-4">
                                    Woo! 🎉
                                </h1>
                                <p className="text-xl text-gray-700 font-handwriting">
                                    I knew you'd say yes! ❤️
                                </p>

                                <div className="columns-1 md:columns-2 gap-4 space-y-4 mx-auto pb-12">
                                    <img src="/alisha_website/images/celebration.gif" alt="Celebration" className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                    <img src="/alisha_website/images/20250223_120214983_iOS.jpg" alt="Memory 1" className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                    <img src="/alisha_website/images/20250302_055713871_iOS.jpg" alt="Memory 2" className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                    <img src="/alisha_website/images/20250330_112351878_iOS.jpg" alt="Memory 3" className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                    <img src="/alisha_website/images/20250629_011138319_iOS.jpg" alt="Memory 4" className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ValentinesInvite;
