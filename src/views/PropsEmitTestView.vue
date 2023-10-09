<template>
  <div>
    <div>Props Emit Test</div>
    <div>{{ setupBooks }}</div>
    <ul>
      <li v-for="book in setupBooks" :key="book">
        {{ book.title }}
        {{ book.author }}
      </li>
    </ul>
    <div>{{ dataBooks }}</div>
    <button @click="emitTest">Emit Test</button>
  </div>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array,
  },
  setup(props, context) { // seup(props, { emit })
    console.log(props.setupBooks)
    console.log(props.dataBooks)

    const emitTest = () => {
      context.emit('custom-event', 'Custom Event from Children')
    }

    return {
      emitTest
    }
  }
}
</script>

<style>

</style>