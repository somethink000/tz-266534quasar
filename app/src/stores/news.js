import { defineStore } from 'pinia'
import axios from "axios";


export const useNewsStore = defineStore('news', {
   
    state: () => ({
        news: [ ],
    }),

    
    actions: {
        
        async loadNews() {
            // axios.delete('/api/nodeBoxes/' + id)
            // .then(res => {
            //     if (res.data) {
            //         this.boxes.delete(id);
            //     } else {
                    
            //     }
            // })
            axios.get('http://localhost/api/news')
            .then(res => {
                this.news = res.data;
            })
        },

    },

    getters: {
       
    },
})