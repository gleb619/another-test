<template>
  <div class="center">
    <img src="../img/logo.png" class="animated pulse">
  </div>
</template>
<script>
  export default {
    created: function () {
      const self = this;

      setTimeout(() = > {
        self.$f7router.navigate('/test/')
    },
      1000
      )
    }
  };
</script>
<style>
  .center {
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    margin-top: 50%
  }

  img {
    animation-duration: 1s;
    animation-delay: 0.1s;
  }

</style>
