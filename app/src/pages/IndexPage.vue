<template>
  <q-page class="flex flex-center">
    
  </q-page>
</template>

<script>

  import { defineComponent } from "vue";
  import axios from "axios";


  export default defineComponent ({

    name: 'PageIndex',

    setup () {

      axios.get('http://localhost/sanctum/csrf-cookie')

        .then(response => {

          console.log(response)
          
        })

    }
  })
</script>
