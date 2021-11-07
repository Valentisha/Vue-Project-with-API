<template>
     <div class='card'>
        <h3>{{title}}</h3>
        <button class='btn' @click="open = !open">{{open ? 'Открыть' : 'Закрыть'}}</button>
        <input class='btn' type="checkbox"  @click="open = !open"/>
        <p class="card" v-if="open">Duis aute irure dolor in reprehenderit in voluptate, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, velit esse cillum dolore eu fugiat nulla pariatur?</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    data(){
        return{
            open: false,
            item: 'some'
        }
    }
}
</script>