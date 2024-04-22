<template>
  <el-card class="login-card" shadow="hover">
    <h3 class="login-title">系统登录</h3>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import Mock from 'mockjs';
import Cookies from 'js-cookie';
import { getMenu } from '../api';
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },

    methods: {
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        if (data.code === 20000) {
                            Cookies.set('token', data.data.token)
                            this.$store.commit('setMenu', data.data.menu)
                            this.$store.commit('addMenu', this.$router)
                            this.$router.push('/home')
                        } else {
                            this.$message.error(data.data.message);
                        }
                    })
                }
            })
        }
    }
};
</script>

<style scoped>
.login-card {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
}
.login-title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
</style>
