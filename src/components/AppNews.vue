<template>
     <div class='card'>
        <img :src="image"/>
    <button @click="$emit('cat')">Кот</button>
    <button @click="$emit('dog')">Пес</button>
    </div>
    
</template>

<script>
export default {
    props: {
       image: String
    },


    
    data(){
        return{
           
        }
    },
    methods:{
        
            }
            
        
    
}
</script>