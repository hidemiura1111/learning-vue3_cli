<template>
  <div>
    Router Test
  </div>
  <button @click="goHome">Go Home</button>
  <button @click="routeCheckPath">Route Check Path</button>
</template>

<script>
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';

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

    onBeforeRouteLeave((to, from) => {
      console.log(`to: ${to}`)
      console.log(`from: ${from}`)
    })

    return {
      goHome,
      routeCheckPath
    }
  }

}
</script>

<style>

</style>