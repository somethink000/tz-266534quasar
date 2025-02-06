import { defineStore } from 'pinia'
import axios from "axios";


export const useNewsStore = defineStore('news', {
   
    state: () => ({
        news: [ ],
    }),

    
    actions: {
        
        async loadNews() {
            axios.get('http://localhost/api/news')
            .then(res => {
                this.news = res.data;
            })
        },

    },

    getters: {
       
    },
})