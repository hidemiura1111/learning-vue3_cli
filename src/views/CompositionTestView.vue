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
    console.log(this)
  },
  created() {
    console.log("created")
    console.log(this)
  },
  mounted() {
    console.log("mounted")
  },
}
</script>

<style>

</style>