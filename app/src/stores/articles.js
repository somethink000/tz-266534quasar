import { defineStore } from 'pinia'
import axios from "axios";


export const useArticlesStore = defineStore('articles', {
   
    
    state: () => ({
        articles: [ ],
        current: {},
    }),

    
    actions: {
        
        async get() {
            axios.get('http://localhost/api/article')
            .then(res => {
                this.articles = res.data;
            })
        },


        async create(form) {
            
            return axios.post('http://localhost/api/article', form, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => {
                
                var data = res.data;

                if (data) {
                    
                    this.articles.push(data);
                } 
            })  
        },

        async show(id) {
            axios.get('http://localhost/api/article/'+id)
            .then(res => {
            
                this.current = res.data;
            })
        },
        

        async edit(form) {

            axios.patch('http://localhost/api/article/' + this.current.id, form, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => {
                if (res.data) {
                    this.current = res.data;
                    //динамическое обноление списка новостей чтобы не подгружать при переходе на главную
                    for (var i = 0; i < this.articles.length; i++) {

                        var obj = this.articles[i];
                        if (obj.id == this.current.id) {
                            this.articles[i] = res.data;
                        }
                    }
                }
            })
        },

        async delete() {
            
            axios.delete('http://localhost/api/article/' + this.current.id)
            .then(res => {
                if (res) {
                    //удаление из масива чтобы не делать дополнительный запрос 
                    for (var i = 0; i < this.articles.length; i++) {

                        var obj = this.articles[i];
                    
                        if (obj.id == this.current.id) {
                            this.articles.splice(i, 1);
                        }
                    }

                    this.current = {}
                }
            })
        },
        
    },

    getters: {
       
    },
})