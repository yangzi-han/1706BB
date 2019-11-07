<template>
    <div class="timeline">
        <div class="timeline-top">
            <input type="text" placeholder="试试搜索你的好友名字" class="inp">
        </div>
        <div class="timeline-center">
            <li class="cont">
                <div class="Ttop">
                    <img src="../../static/imgs/1.jpg" alt="" class="img">
                    
                    <div class="name">
                        <p>张俊杰</p>
                        <p>2019-06-01</p>
                    </div>
                </div>
                <div class="Tmain">
                    <img class="image" src="../../static/imgs/1.jpg" alt="">
                    <img class="image" src="../../static/imgs/1.jpg" alt="">
                </div>
                <div class="Tfooter">
                    <p class="Pl">点赞</p>
                    <p class="Pr">评论</p>
                </div>
            </li>
        </div>
    </div>
</template>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
    .timeline-top{
        width: 100%;
        height: 1rem;
        // background: #ccc;
        // border:solid 1px #ccc;
        margin-bottom: .2rem;
    }
    .inp{
        width: 230px;
        border-radius: 30px;
        padding-left: 1rem;
        height: .7rem;
        margin-left: 60px;
        line-height: 1rem;
        margin-top: 10px;

    }
    .timeline-center-top-top{
        font-size: .4rem;
    }
    .cont{
         width: 100%;
        height: 3.6rem;
        // background: pink;
        font-size: .28rem;
        border-bottom: 1px solid #666
    }
    .Ttop{
       width: 100%;
       height: 1rem;
    //    background: #ccc
    }
    .img{
        width: 40px;
        height: 40px;
        float: left;
        margin-right: .2rem;
        border-radius: 50%;
        // background: gold;
    }
    .Tfooter{
        width: 95%;
        height: 0.5rem;
        padding-left: .2rem;
        padding-right: .2rem;
        // background: gold;
        font-size: .28rem;
        line-height: .5rem;
        .Pl{
            float: left;
        }
        .Pr{
            float: right;
        }
    }
    .image{
        margin: .2rem;
    }
</style>