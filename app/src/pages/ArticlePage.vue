<template>

<main role="main">




  <section class="jumbotron text-center" style="margin-bottom: 0;">
    <div class="container">
      <h1 class="jumbotron-heading" style="overflow: hidden;">{{ store.current.title }}</h1>
      <p class="lead text-muted" style="overflow: hidden;">{{ store.current.text }}</p>
      <p>
         <button href="#" class="btn btn-primary my-2" data-toggle="modal" data-target="#updateArticle">Изменить новость</button>
         <button href="#" class="btn btn-secondary my-2" data-toggle="modal" data-target="#deletArticle">Удалить новость</button>
      </p>
    </div>
  </section>

  <div class="modal fade" id="updateArticle" tabindex="-1" role="dialog" aria-labelledby="updateArticleTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="updateArticleTitle">Изменить новость</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>

                  <div class="modal-body">

                      <div class="form-group">
                          <label for="recipient-name" class="col-form-label">Заголовок:</label>
                          <input type="text" name="article" class="form-control" id="recipient-name" v-model="form.title">
                      </div>
                      <div class="form-group">
                          <label for="message-text" class="col-form-label">Название:</label>
                          <textarea class="form-control" name="name" id="message-text" v-model="form.text"></textarea>
                      </div>

                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                      <button @click="store.edit(form)" class="btn btn-primary">Изменить</button>
                  </div>

            </div>
        </div>
    </div>


    <div class="modal fade" id="deletArticle" tabindex="-1" role="dialog" aria-labelledby="deletArticleTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="deletArticleTitle">Удалить новость</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>

                  <div class="modal-body">

                      <div class="form-group">

                        <button @click="deleteArticle()" type="button" class="btn btn-secondary" data-dismiss="modal">Удалить</button>
                      </div>
                      <div class="form-group">
                    
                  </div>
        
            </div>
        </div>
      </div>
    </div>

    
</main>

</template>

<script setup>

  import { useArticlesStore } from 'src/stores/articles';
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()
  const store = useArticlesStore();

  store.show(route.params.id)

  var form = {
    title: "",
    text: "",
  }

  async function deleteArticle(){
    store.delete()
    router.push({ name: 'Index'});
  }

</script>
