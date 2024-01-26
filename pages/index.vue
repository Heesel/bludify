<template>
    <section class="relative">
        <img src="/thumbnail.jpg" class="object-cover w-full h-auto md:h-[26rem] rounded-slightly" />
        <div class="flex flex-col">
            <h1 class="absolute top-0 left-0 px-3 md:px-6 py-5 text-3xl md:text-4xl lg:text-5xl text-white font-bold uppercase">Top song of today</h1>
            <div class="absolute bottom-0 left-0 px-3 md:px-6 py-5 my-16">
                <h2 class="text-white font-bold">Two Steps From Hell x Don Pollo</h2>
                <span class="text-white/70">Don Pollo</span>
            </div>
            <div class="flex absolute bottom-0 left-0 px-3 md:px-6 py-5 gap-3">
                <div class="bg-primary rounded-full p-3 border-2 border-white">
                    <svg class="h-5 w-5" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666626 19.3333V0.666672L15.3333 10L0.666626 19.3333Z" fill="white" />
                    </svg>
                </div>
                <div class="bg-white rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </section>
    <section class="relative mt-14">
        <h2 class="text-3xl text-white font-bold uppercase">New releases</h2>
        <ul class="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4">
            <li v-for="song in songs">
                <div class="flex flex-col mx-auto">
                    <div class="relative">
                        <img :src="`/song_images/${song.thumbnail}`" class="w-full h-full rounded-slightly" alt="" />
                        <div @click="play(song)" class="bg-primary rounded-full p-3 border-2 border-white absolute bottom-3 ml-3">
                            <svg class="h-5 w-5" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.666626 19.3333V0.666672L15.3333 10L0.666626 19.3333Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col mt-1">
                        <span class="text-white font-semibold">{{song.title}}</span>
                        <span class="text-white/70">By <a href="https://soundcloud.com/tuomaaszz" class="text-white underline underline-offset-2">Tumpula</a></span>
                        
                    </div>
                </div>
                <div class="mt-2">
                    <h4 class="text-gray-700 font-semibold sm:text-lg"></h4>
                    <p class="text-indigo-600"></p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script lang="ts" setup>


const songs = ref([
    {id: 1, thumbnail: "Don_Pollo_x_Danza_Kuduro.jpg", audio_file: "Don_Pollo_x_Danza_Kuduro.mp3", title: "Don Pollo x Danza Kuduro"},
    {id: 2, thumbnail: "This_Is_Our_Destiny_Ahh_Sound.jpg", audio_file: "This_Is_Our_Destiny_Ahh_Sound.mp3", title: '"This Is Our Destiny" Ahh Sound'},
    {id: 3, thumbnail: "Don_Pollo_x_Stereo_Love.jpg", audio_file: "Don_Pollo_x_Stereo_Love.mp3", title: "Don Pollo x Stereo Love"}
])

const { play } = new useSong()

</script>
