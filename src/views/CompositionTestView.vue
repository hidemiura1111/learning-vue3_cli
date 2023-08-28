<template>
  <div>
    <h1>Composition Test</h1>
  </div>
</template>

<script>
export default {
  name: "CompositionTestView",
  data() { },
  setup() {
    console.log("setup")
  },
  created() {
    console.log("created")
  },
  mounted() {
    console.log("mounted")
  },
}
</script>

<style>

</style>