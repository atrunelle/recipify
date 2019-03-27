<template functional>
  <div class="circle-icon">
    <img
      class="circle-icon__icon"
      :src="props.icon"
      :alt="props.alt"
    >
  </div>
</template>

<style lang="scss">
.circle-icon {
  position: relative;
  margin: auto;
  border-radius: 50%;
  background-color: #fff;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);

  &__icon {
    width: 50px;
    margin-top: 20px;
  }
}

</style>
