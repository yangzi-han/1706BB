<template>
    <div>
        <p class="first"><router-link to="/login" tag="span" class="zuo">&lt;</router-link>圈子注册</p>
        <div class="second">
            <input  type="text" placeholder="用户名"/>
            <input  type="text" placeholder="密码"/>
        </div>
        <button class="denglu">注册</button>
    </div>
</template>
<style>
.zuo{
    float: left;
    font-size: 30px;
    line-height: 60px;
}
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
        background: rgb(241, 237, 237);
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