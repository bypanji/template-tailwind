import { defineStore } from "pinia";
import { ref } from "vue";

export const conterStore = defineStore('counter',() => {
    const counter = ref<number>(0)

    const addSum = () => {
        counter.value++
    }

    const minSum = () => {
        if(counter.value > 0)
            counter.value--
    }

    return {
        counter,
        addSum,
        minSum
    }
}) 