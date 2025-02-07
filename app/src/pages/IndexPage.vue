<template>

<main role="main">




  <section class="jumbotron text-center" style="margin-bottom: 0;">
    <div class="container">
      <h1 class="jumbotron-heading">Album example</h1>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
      <p>
         <button href="#" class="btn btn-primary my-2" data-toggle="modal" data-target="#createProduct">Добавить новость</button>
      </p>
    </div>
  </section>
  
  <div class="modal fade" id="createProduct" tabindex="-1" role="dialog" aria-labelledby="createProductTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="createProductTitle">Добавить новость</h5>
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
                      <button @click="store.create(form)" class="btn btn-primary">Добавить</button>
                  </div>

            </div>
        </div>
    </div>
  
  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">

        <div class="col-md-4" v-for="article in store.articles" :key="article.id">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_194df0b9437%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_194df0b9437%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="height: 225px; width: 100%; display: block;">
            <div class="card-body">
              <p class="card-text">{{ article.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <RouterLink class="btn btn-sm btn-outline-secondary" :to="'/article/' + article.id">View</RouterLink>
                </div>
                <small class="text-muted">{{ article.views }} views</small>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  </div>

</main>

</template>

<script setup>

  import { useArticlesStore } from 'src/stores/articles';

  const store = useArticlesStore();
  var form = {
      title: "",
      text: "",
  }

  store.get();

  
</script>
