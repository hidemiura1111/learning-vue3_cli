<template>
  <div>
    <h1>Composition Test</h1>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
  name: "CompositionTestView",
  setup() {
    console.log("setup")
    console.log(this)
    let name = "Name from Seup"
    const age = 20
    return {
      name,
      age
    }
  },
  data() {
    return {
      nameData: "Name from Data",
      ageData: 20
    }
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