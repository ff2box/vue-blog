import * as types from '../mutation-types.js';

const state = {
    iShowLoading:false,
    iShowMenu:false,
    iShowToast:false,
    toastMsg:'未知错误'

}

const getters = {
    iShowLoading:state=>state.iShowLoading,
    iShowMenu:state=>state.iShowMenu,
    iShowToast:state=>state.iShowToast
}

const actions = {
    setShowLoading({commit}){
        commit(types.SET_SHOW_LOADING);
    },
    setHideLoading({commit}){
        commit(types.SET_HIDE_LOADING);
    },
    setToggleMenu({commit}){
        commit(types.SET_TOGGLE_MENU);
    },
    setToast({commit}, str){
        let obj = {msg:str, show:true}
        commit(types.SET_TOAST, obj);
        setTimeout(()=>{
            obj.show = false;
            commit(types.SET_TOAST, obj);
        },2000);
    }
}

const mutations = {
    [types.SET_SHOW_LOADING](state){
        state.iShowLoading = true;
    },
    [types.SET_HIDE_LOADING](state){
        state.iShowLoading = false;
    },
    [types.SET_TOGGLE_MENU](state){
        state.iShowMenu = !state.iShowMenu;
    },
    [types.SET_TOAST](state, payload){
        state.iShowToast = payload.show;
        state.toastMsg = payload.msg;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}