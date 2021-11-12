<template>
  <div class='container pt-1'>
     <div class='card'>
        <h2>{{title}}</h2>
       <img v-if="shouldCatShow" :src='cat'/>
       <img v-else :src='dog'/>
     </div>
  </div>
     <AppNews 
       @cat="catHandler"
       @dog="dogHandler"
       />
   
</template>

<script>
import AppNews from './components/AppNews.vue'
import Cat from '@/img/cat.jpg'
import Dog from '@/img/dog.jpg'
export default {
  data(){
    return {
      title: 'Изменить картинку',
      cat: Cat,
      dog: Dog,
      shouldCatShow: true, 
    }
  },
  methods:{
      catHandler(){
        this.shouldCatShow = true;
      },
      dogHandler(){
        this.shouldCatShow = false;
      }
    
  },
  components: {
    AppNews
  }
}
</script>

<style>

</style>
