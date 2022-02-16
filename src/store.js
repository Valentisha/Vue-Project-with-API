import {createStore} from "vuex";

export default createStore({
    state(){

        return {
            people: [],
            counter: 0
        }
    },
    mutations:{
        valya(state){
            fetch('https://jsonplaceholder.typicode.com/users')
             .then((res) => res.json())
               .then((data) => {               
                console.log(data)
                state.people = data.slice(0, 6)
                // берем только первые 6 элементов, можно взять больше
                })
        },
    },
    actions: {
        //App.vue вызывается created с действием load и action пинает мутацию, она обновляет state 
        load(context){
        context.commit('valya')
        }
    }
}) 
   
    

