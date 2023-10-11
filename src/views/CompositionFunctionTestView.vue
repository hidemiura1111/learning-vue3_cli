<template>
  <div>
    <div>Composition Function Test</div>
    <div>
      <p>Name: {{ item.name }}</p>
      <p>Price: {{ item.price }}</p>
      <p>Amount: {{ item.amount }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <p>Total Price: {{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

const useCounter = item => {
  const increment = () => {
    item.amount++
  }
  const decrement = () => {
    item.amount--
  }
  const totalPrice = computed(() => {
    return item.price * item.amount
  })

  return {
    increment,
    decrement,
    totalPrice
  }
}
export default {
  setup() {
    const item = reactive({
      name: 'Product',
      price: 100,
      amount: 0
    })

    const { increment, decrement, totalPrice } = useCounter(item)

    return {
      item,
      increment,
      decrement,
      totalPrice
    }
  }

}
</script>

<style>

</style>