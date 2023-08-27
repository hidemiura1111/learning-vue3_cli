<template>
  <div class="relative">
    <button @click="modalOpen = true">Modal</button>
    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          <p>Modal</p>
          <button @click="modalOpen = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
    };
  },
}
</script>

<style scoped>
.relative {
  position: relative;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}

</style>