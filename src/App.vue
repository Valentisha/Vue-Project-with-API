<template>
  <div class='container pt-1'>
     <div class='card'>
        <h2>Срочные новости на {{day}}</h2>
     </div>
  </div>
     <AppNews v-for="item in news" :key="item" :title="item"/>
   
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import AppNews from './components/AppNews.vue'
export default {
  data(){
    return {
               open: false,
               day: new Date().toLocaleDateString(),
               news: [
                   'Новость 1',
                   'Новость 2',
                   'Новость 3',
                   'Новость 4'
               ]
    }
  },
  components: {
    'the-header': TheHeader,
    AppNews: AppNews
  }
}
</script>

<style>

</style>
