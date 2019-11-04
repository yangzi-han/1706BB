<template>
    <div>
        <p class="first">圈子登录</p>
        <div class="second">
            <input  type="text" placeholder="用户名"/>
            <input  type="text" placeholder="登入密码"/>
        </div>
        <button class="denglu">登入</button>
        <p class="footer"><router-link  to="/register">没有账号,快速登入</router-link></p>
    </div>
</template>
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