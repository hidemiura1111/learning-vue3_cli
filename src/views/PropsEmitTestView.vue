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
  </div>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array,
  },
  setup(props) {
    console.log(props.setupBooks)
    console.log(props.dataBooks)
  }
}
</script>

<style>

</style>