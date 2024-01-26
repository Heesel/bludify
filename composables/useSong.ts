
import { useSongStore } from '../stores/song'
import type Song from '../types/song';

export default class useSong {
    private audio: HTMLAudioElement | null = null;
    play(song: Song) {
        const { setPlayingState, addSongToStore } = useSongStore()
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
            setPlayingState(false)
        }
    
        this.audio = new Audio(`/songs/${song.audio_file}`);
        this.audio.volume = 0.2;
        this.audio.play();
        setPlayingState(true)
        addSongToStore(song.title, song.audio_file, song.thumbnail, '0:50')
        return 'Playing audio';
    }

    togglePlay() {
        // console.log('a');
        
        if (!this.audio) {
            return
        }
        const { getSongInformation, setPlayingState } = useSongStore()
          
        if (this.audio.paused) {
            this.audio.play();
            setPlayingState(true)
        } else {
            this.audio.pause();
            setPlayingState(false)
        }
    }
}