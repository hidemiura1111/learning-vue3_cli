<template>
  <div>Children</div>
  <Grand-Children />
</template>

<script>
import GrandChildren from '@/components/GrandChildren.vue'

export default {
  name: 'ChildrenView',
  components: {
    GrandChildren
  }
}
</script>

<style>

</style>