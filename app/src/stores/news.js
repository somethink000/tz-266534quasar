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


        async createNewsobj(form) {
            
            return axios.post('http://localhost/api/news', form, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => {
                
                var data = res.data;

                if (data) {
                    
                    this.news.push(data);
                } 
            })  
        },

        
    },

    getters: {
       
    },
})