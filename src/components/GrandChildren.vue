<template>
  <div>GrandChildren</div>
  <div>{{ username }}</div>
</template>

<script>
export default {
  name: 'GrandChildren',
  data() {
    return {}
  },
  inject: ['username']
}
</script>

<style>

</style>