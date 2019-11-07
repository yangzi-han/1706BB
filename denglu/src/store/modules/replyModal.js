import {publishReply, publishComment} from '@/service/index'

const state = {
    info: {},
    show: false
}

const mutations = {
    // 显示弹框
    showModal(state, payload){
        state.info = payload.info;
        state.show = true;
    },
    // 隐藏弹框
    hideModal(state, payload){
        state.info = {};
        state.show = false
    }
}

const actions = {
    // 提交评论
    async reply({commit, state, dispatch}, payload){
        console.log('payload...', payload, state.info);
        let data = {};
        if (state.info.type === 'comment'){
            data = await publishComment({
                dynamicid: state.info.dynamicid,
                commentContent: payload
            })
        }else{
            data = await publishReply({
                toCommentReplyid: state.info.toCommentReplyid,
                replyContent: payload
            })
        }
        //await dispatch('timeline/getTimeline', null, {root:true});
        commit('hideModal');
    }
}

export default {
    namespaced: true,
    state,
    actions, 
    mutations
}