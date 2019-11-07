<template>
    <div class="timeline">
        <div class="timeline-top">
            <input type="text" placeholder="试试搜索你的好友名字" class="inp">
        </div>
        <div class="timeline-center">
            <li class="cont" v-for="item in list" :key="item.dynamicid">
                <div class="Ttop">
                    <img src="../../static/imgs/1.jpg" alt="" class="img">
                    
                    <div class="name">
                        <p>{{item.userName}}</p>
                        <p>2019-06-01</p>
                    </div>
                </div>
                <div class="Tmain">
                    <img class="image" src="../../static/imgs/1.jpg" alt="">
                    <img class="image" src="../../static/imgs/1.jpg" alt="">
                </div>
                <div class="Tfooter">
                    <P class="action">
                    <span>点赞</span>
                    <span>{{`评论${item.comments.length}`}}</span>
                    </P>
                    
                </div>
            </li>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
    computed:{
        ...mapState({
            list: state=>state.timeline.list
        }),
        
    },

    methods:{
        
        ...mapActions({
            //getTimeline:"timeline/getTimeline"
        }),
    },
    created(){
        console.log(this.list)
//this.getTimeline()
    }
}
</script>
<style lang="scss" scoped>
.timeline-top{
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: .15rem .3rem;
    img{
        width: .7rem;
    }
    input{
        flex: 1;
        margin-left: .2rem;
        border-radius: .15rem;
        padding: 0 .2rem;
        line-height: .6rem;
        border: none;
        background: #eee;   
    }
}
.center{
    margin: .2rem .3rem;
    &>li{
        margin-bottom: .5rem;
    }
}
.timeline-center-top-top{
    font-size: .4rem;
}
.cont{
    width: 100%;
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
    width: 100%;
    // height: .5rem;
    font-size: .28rem;
    // line-height: .5rem;
    .action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .2rem 0;
    }
}
.image{
    margin: .2rem;
}
</style>