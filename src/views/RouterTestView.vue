<template>
  <div>
    Router Test
  </div>
  <button @click="goHome">Go Home</button>
  <button @click="routeCheckPath">Route Check Path</button>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const goHome = () => {
      router.push('/')
    }

    const routeCheckPath = () => {
      console.log(route.path)
    }

    return {
      goHome,
      routeCheckPath
    }
  }

}
</script>

<style>

</style>