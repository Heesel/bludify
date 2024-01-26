import { defineStore } from 'pinia'

export const useSongStore = defineStore({
    id: 'song-store',
    state: () => {
      return {
        songInformation: {
            title: '',
            audio_file: '',
            thumbnail: '',
            duration: '',
        },
        songIsPlaying: false
      }
    },
    actions: {
      addSongToStore(title: string, audio_file: string, thumbnail: string, duration: string,) {
        this.songInformation = {
            title: title,
            duration: duration,
            audio_file: audio_file,
            thumbnail: thumbnail
        }
      },
      setPlayingState(is_playing: boolean) {
        this.songIsPlaying = is_playing
      }
    },
    getters: {
      getSongInformation: state => state.songInformation,
      getSongPlayingState: state => state.songIsPlaying
    },
  })