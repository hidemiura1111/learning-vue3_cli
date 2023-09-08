<template>
  <div>
    <h1>Composition Test</h1>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ sex }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "CompositionTestView",
  setup() {
    console.log("setup") // Order setup->created->mounted
    console.log(this) // Undefined

    let name = "Name from Seup" // Variables are not reactive
    const age = 20
    const sex = ref("Male")

    return { // Variables need to be returned in order to be used in template
      name,
      age,
      sex
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
    console.log("Variable from setup: ", this.name)
    console.log("Variable from data: ", this.nameData)
  },
  mounted() {
    console.log("mounted")
  },
}
</script>

<style>

</style>