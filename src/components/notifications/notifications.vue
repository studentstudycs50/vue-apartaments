<template>
     <notifications />
</template>

<script>
    export default {
        name: 'Notification'
    }
</script>

<style lang="scss" scoped>
::v-deep .vue-notification {
  background: #44A4FC;
  border-left: 5px solid #187FE7;
  color: #ffffff;
  margin: 0 5px 5px;
  padding: 10px;

  .notification-title {
    font-size: 16px;
    line-height: 1.3;
  }

  .notification-content {
    font-size: 14px;
    margin-top: 5px;
  }
 
  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }
 
  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }
 
  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}
</style>