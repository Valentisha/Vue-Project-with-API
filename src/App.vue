<template>
<div class="container">
  <div class="card">
    <div v-for='item in $store.state.people' :key='item.id'>
      <div class="infoAboutItem" v-show="item.id === active">
        <li><span>ID: </span>{{item.id}}</li>
        <li><span>Name: </span>{{item.name}}</li>
        <li><span>E-mail: </span>{{item.email}}</li>
        <li><span>Phone: </span>{{item.phone}}</li>
        <li><span>Website: </span>{{item.website}}</li>
      </div>
    </div>
      <span v-for="item in $store.state.people"
          :key='item.id'
          :class='{active: item.id === active, passive: item.id < active, notActive: true}'
      >
        <button class="btn" @click='tooSlide(item.id)'>{{item.id}}</button>
        <span>{{item.username}}</span>
      </span>
      <div>
        <div>  
          <div>
              <span v-show="!finished">
                <button @click="backSlide" type="button" class="btn" :disabled='active === 1'>Назад</button>
                <button class="btn primary" @click="nextSlide" v-if="active < $store.state.people.length">Вперед</button>
                <button class="btn primary" @click="finish" v-if="active === $store.state.people.length">Завершить просмотр</button>
              </span>
                <button class="btn" @click="reload" v-show="finished">Начать сначала</button>
          </div>
        </div>
      </div>
   </div>  
</div>
</template>
<script >

export default {
    data(){
      return{
         name: '',
         active: 1,
         finished: false
    }
},
  created(){
      this.$store.dispatch('load')
      // dispatch - вызов action
    },
  methods:{
    nextSlide(){
      this.active++
    },
    reload(){
      this.active = 1
      this.finished = false
    },
    finish(){
      this.finished = true
    },
    backSlide(){
      this.active--
    },
    tooSlide(slide){
       this.active = slide 
    }
  }
}
</script>