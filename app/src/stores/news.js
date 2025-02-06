import { defineStore } from 'pinia'
import { ref } from 'vue';


export const useNodesStore = defineStore('news', {
    state: () => ({
        news: ref([ ]),
    }),

    actions: {
   
   
    },
    getters: {
       
    },
})