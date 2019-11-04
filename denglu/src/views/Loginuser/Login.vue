<template>
    <div>
        <p class="first">圈子登录</p>
        <div class="second">
            <input  type="text" placeholder="用户名" v-model="userName"/>
            <input  type="password" placeholder="登入密码" v-model="userPwd"/>
        </div>
        <button class="denglu" @click="login">登入</button>
        <p class="footer"><router-link  to="/register">没有账号,快速登入</router-link></p>
    </div>
</template>
<script>
import {login} from '@/service/index'
export default {
    data(){
        return{
            userName:"",
            userPwd:""
        }
    },
    methods:{
        async login(){
            let {userName,userPwd}=this;
            let result= await login({userName,userPwd})
            console.log(result)
            if(result&&result.data.code===1){
            this.$router.push({ path:'/home/timeline'})
            }
            alert(result.data.msg)
        }
    }
}
</script>
<style>
    .first{
        font-size: 20px;
        text-align: center;
        width: 100%;
        height: 50px;
        background: #ccc;
        line-height: 60px;
    }
    .second{
        margin-top: 30px;
        width: 100%;
        height: 100px;

    }
    input{
        width: 93%;
        margin: 2%;
        height: 40px;
        display: flex;
        background: #ccc;
        border:none;
        outline: none;
        padding-left: 10px;
    }
    .denglu{
        width:93%;
        margin: 2%;
        height: 40px;
        background:red;
        text-align: center;
        font-size: 20px;
        border:none;
    }
    .footer{
        font-size: 10px;
        color: black;
        margin: 2%;
        text-decoration: underline;
        text-decoration: #000;
    }
    a{
        color: #000;
    }
</style>