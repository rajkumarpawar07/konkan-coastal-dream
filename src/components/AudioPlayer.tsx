import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [userPaused, setUserPaused] = useState(false);

    useEffect(() => {
        // Attempt autoplay on mount
        const attemptPlay = async () => {
            if (audioRef.current && !userPaused) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    console.log("Audio started");
                } catch (err) {
                    console.log("Autoplay blocked, waiting for interaction");
                    setIsPlaying(false);
                }
            }
        };
        attemptPlay();
    }, []); // Only on mount

    // Global interaction listener
    useEffect(() => {
        const handleInteraction = async () => {
            if (audioRef.current && !isPlaying && !userPaused && !hasInteracted) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    setHasInteracted(true);
                } catch (err) {
                    console.error("Interaction play failed", err);
                }
            }
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('scroll', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
        };
    }, [isPlaying, userPaused, hasInteracted]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            setUserPaused(true);
        } else {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setUserPaused(false);
                    if (!hasInteracted) setHasInteracted(true);
                })
                .catch(err => {
                    console.error("Play failed", err);
                });
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!audioRef.current) return;
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in print:hidden">
            {/* Native Audio Element */}
            <audio
                ref={audioRef}
                src="/Kokan.mp3"
                loop
                preload="auto"
                autoPlay
            />

            <Button
                onClick={togglePlay}
                className={`rounded-full shadow-lg transition-all duration-300 ${isPlaying
                        ? 'bg-konkan-primary hover:bg-konkan-primary/90 w-auto px-4'
                        : 'bg-white hover:bg-gray-100 text-gray-800 w-12 h-12 p-0'
                    }`}
                variant={isPlaying ? "default" : "outline"}
            >
                <div className="flex items-center gap-2">
                    {isPlaying ? (
                        <>
                            <div className="flex gap-1 h-3 items-end">
                                <span className="w-1 bg-white animate-[music-bar_1s_ease-in-out_infinite] rounded-full h-1"></span>
                                <span className="w-1 bg-white animate-[music-bar_1.2s_ease-in-out_infinite] rounded-full h-2"></span>
                                <span className="w-1 bg-white animate-[music-bar_0.8s_ease-in-out_infinite] rounded-full h-3"></span>
                            </div>
                            <span className="font-medium mr-1">Playing</span>
                            <div
                                onClick={toggleMute}
                                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            >
                                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </div>
                        </>
                    ) : (
                        <Music size={20} className="text-konkan-primary" />
                    )}
                </div>
            </Button>
        </div>
    );
};

export default AudioPlayer;
