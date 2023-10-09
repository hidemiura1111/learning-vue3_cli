<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/children">Children</router-link> |
    <router-link to="/teleport">Teleport</router-link> |
    <router-link to="/composition-test">Composition Test</router-link> |
    <router-link to="/props-emit-test">Props Emit Test</router-link>
  </nav>
  <router-view
    :setupBooks="setupBooks"
    :dataBooks="dataBooks"
    @custom-event="parentEmitTest"
  />
</template>
<script>
import { reactive } from 'vue';

export default {
  setup() {
    const setupBooks = reactive([
      {
        title: 'setup title 1',
        author: 'setup author 1'
      },
      {
        title: 'setup title 2',
        author: 'setup author 2'
      }
    ])

    return {
      setupBooks
    }
  },
  data() {
    return {
      dataBooks: [
        {
          title: 'data title 1',
          author: 'data author 1'
        },
        {
          title: 'data title 2',
          author: 'data author 2'
        }
      ]
    }
  },
  methods: {
    parentEmitTest(e) {
      console.log(e)
    }
  },
  provide() {
    return {
      username: 'Name from HomeView'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
