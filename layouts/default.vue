<template>
    <div class="flex flex-col h-screen justify-between relative">
        <div>
            <div class="flex justify-between md:justify-center sm:mt-4">
                <button @click="open = !open">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white block sm:hidden ml-4 mt-4 justify-start" :class="{ 'hidden': open }" viewBox="0 0 32 32">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22" />
                    </svg>
                </button>
                <!-- <div class="relative mt-6 sm:mt-3 mr-4 md:mr-0">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-3.5 h-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        class="w-full min-w-[300px] md:min-w-[364px] lg:min-w-[420px] p-4 pl-10 text-sm text-white rounded-slightly bg-secondary placeholder-white focus:ring-0 outline-none"
                        placeholder="Search for songs"
                    />
                </div> -->
            </div>
            <aside id="separator-sidebar" :class="{ 'translate-x-0': open }" class="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <nav class="h-full py-4 overflow-y-auto bg-primary px-6 sm:mt-4 shadow-menu">
                    <button @click="open = !open" class="block sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mt-3" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
                            />
                        </svg>
                    </button>
                    <h2 class="text-3xl font-semibold text-white flex justify-center mt-6">Bludify</h2>
                    <ul class="flex flex-col space-y-6 mt-12">
                        <NuxtLink
                            to="/"
                            exactActiveClass="text-white bg-secondary p-2 rounded-slightly"
                            :class="{ 'text-white/40 p-2 hover:bg-secondary hover:text-white rounded-slightly transition duration-100 ease-in-out': route.name != 'index' }"
                        >
                            <li class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 256 256">
                                    <path
                                        fill="currentColor"
                                        d="m218.83 103.77l-80-75.48a1.14 1.14 0 0 1-.11-.11a16 16 0 0 0-21.53 0l-.11.11l-79.91 75.48A16 16 0 0 0 32 115.55V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-92.45a16 16 0 0 0-5.17-11.78M208 208H48v-92.45l.11-.1L128 40l79.9 75.43l.11.1Z"
                                    />
                                </svg>
                                <span>Home</span>
                            </li>
                        </NuxtLink>
                        <NuxtLink
                            to="/collections"
                            exactActiveClass="text-white bg-secondary p-2 rounded-slightly"
                            :class="{ 'text-white/40 p-2 hover:bg-secondary hover:text-white rounded-slightly transition duration-100 ease-in-out': route.name != 'collections' }"
                        >
                            <li class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 256 256">
                                    <path
                                        fill="currentColor"
                                        d="M212.92 25.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 64v110.08A36 36 0 1 0 88 204V70.25l112-28v99.83A36 36 0 1 0 216 172V32a8 8 0 0 0-3.08-6.31M52 224a20 20 0 1 1 20-20a20 20 0 0 1-20 20m128-32a20 20 0 1 1 20-20a20 20 0 0 1-20 20"
                                    />
                                </svg>
                                <span>Collections</span>
                            </li>
                        </NuxtLink>
                    </ul>
                </nav>
            </aside>
            <div class="p-4 sm:ml-64">
                <div class="container mx-auto mt-3">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div class="p-4 bg-secondary w-full sticky z-50">
            <div class="">
                <div class="flex flex-col md:flex-row md:justify-between gap-y-3">
                    <div class="flex gap-3">
                        <img :src="getSongInformation.thumbnail ? `/song_images/${getSongInformation.thumbnail}` : '/don_pollo.webp' " class="object-cover h-16 w-16 rounded-slightly" />
                        <div class="flex flex-col">
                            <span class="text-white font-semibold">{{ getSongInformation.title ? getSongInformation.title : 'Nothing is playing' }}</span>
                            <template v-if="getSongInformation.title">
                                <a href="https://soundcloud.com/tuomaaszz" class="text-white/60 underline underline-offset-2">Tumpula</a>
                                
                            </template>
                            <template v-else>
                                <span class="text-white/60">Don Pollo</span>
                            </template>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-center items-center gap-3">
                            <div class="rounded-full text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m8 11.333l10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 1 1-2 0V5a1 1 0 0 1 2 0z" />
                                </svg>
                            </div>
                            <button @click="togglePlay">klik</button>
                            <template v-if="getSongPlayingState">
                                <div @click="togglePlay" class="rounded-full p-3 border-2 border-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 512 512">
                                        <path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z" fill="currentColor"/>
                                    </svg>    
                                </div>
                            </template>
                            <template v-else>
                                <div @click="togglePlay" class="rounded-full p-3 border-2 border-white">
                                    <svg class="h-3 w-3" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.666626 19.3333V0.666672L15.3333 10L0.666626 19.3333Z" fill="white" />
                                    </svg>
                                </div>
                            </template>
                            <div class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16 12.667L5.777 19.482A.5.5 0 0 1 5 19.066V4.934a.5.5 0 0 1 .777-.416L16 11.333V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex md:min-w-[540px] justify-center items-center gap-3 text-white min-w-fit">
                            <span>0:12</span>
                            <div class="h-[2px] bg-white w-full rounded-slightly"></div>
                            <span>0:43</span>
                        </div>
                    </div>
                    <div class="hidden md:min-w-[140px] items-center gap-3 text-white md:flex">
                        <!-- sound off -->
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.737t.562-.538q.175-.075.325-.162t.3-.188L12 14.8v2.775q0 .675-.612.938T10.3 18.3L7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l17 17q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275zM19.6 16.8l-1.45-1.45q.425-.775.638-1.625t.212-1.75q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.05T21 11.975q0 1.325-.363 2.55T19.6 16.8m-3.35-3.35L14 11.2V8.85q0-.3.263-.437t.512.012Q15.6 8.95 16.05 10t.45 2q0 .375-.063.738t-.187.712M12 9.2L9.4 6.6l.9-.9q.475-.475 1.088-.213t.612.938z"/>
                            </svg> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975q0 3.175-1.95 5.613T14 20.725M3 15V9h4l5-5v16l-5-5zm11 1V7.95q1.175.55 1.838 1.65T16.5 12q0 1.275-.663 2.363T14 16"
                            />
                        </svg>
                        <div class="h-[2px] bg-white w-full rounded-slightly"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { storeToRefs } from 'pinia'
    import { useSongStore } from '../stores/song'

    const songStore = useSongStore()
    const { getSongPlayingState, getSongInformation } = storeToRefs(songStore)
    // console.log(getSongPlayingState);
    console.log(getSongInformation);
    
    
    const { togglePlay, play } = new useSong()


    const route = useRoute()
    const open = ref(false)
</script>
