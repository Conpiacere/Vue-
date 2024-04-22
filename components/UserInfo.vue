<template>
  <el-card class="box-card">
    <div class="user">
      <img :src="user.avatar" alt="">
      <div class="userinfo">
        <p class="name">{{ user.name }}</p>
        <p class="access">{{ user.role }}</p>
      </div>
    </div>
    <div class="login-info">
      <p>last time login:<span>{{ user.lastLogin }}</span></p>
      <p>last location login:<span>{{ user.lastLocation }}</span></p>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>


</style>
