import * as type from '../mutation-types.js';


const state={
    isHideSidebar:true,
    categoryList:[
        {
            value:'javascript',
            label:'javascript'
        },
        {
            value:'label5',
            label:'label5'
        },
        {
            value:'css3',
            label:'css3'
        },
        {
            value:'node',
            label:'node'
        },
        {
            value:'redis',
            label:'redis'
        },
        {
            value:'angular',
            label:'angular'
        },
        {
            value:'vue',
            label:'vue'
        },
        {
            value:'mongodb',
            label:'mongodb'
        },

    ],
    tagList:[
        {
            value:'1',
            label:'前端'
        },
        {
            value:'2',
            label:'移动端'
        },
        {
            value:'3',
            label:'响应式'
        },
        {
            value:'4',
            label:'混合开发'
        },
        {
            value:'5',
            label:'后端'
        },
        {
            value:'6',
            label:'运维'
        },
        {
            value:'7',
            label:'生活'
        },
        {
            value:'8',
            label:'职场'
        },
        {
            value:'9',
            label:'音乐'
        },
        {
            value:'10',
            label:'电影'
        }
    ],
    messageList:[
        {
            id:1,
            date:1490601608593,
            name:'sam',
            email:'12452342@qq.com',
            text:'好无聊的课,顺便过来踩踩...',
            ip:'192.168.1.1'
        },
        {
            id:2,
            date:1490601608593,
            name:'sam',
            email:'12452342@qq.com',
            text:'好无聊的课,顺便过来踩踩...',
            ip:'192.168.1.1'
        },
        {
            id:3,
            date:1490601608593,
            name:'sam',
            email:'12452342@qq.com',
            text:'好无聊的课,顺便过来踩踩...',
            ip:'192.168.1.1'
        },
        {
            id:4,
            date:1490601608593,
            name:'sam',
            email:'12452342@qq.com',
            text:'好无聊的课,顺便过来踩踩...',
            ip:'192.168.1.1'
        }
    ],
    commentList:[
        {
            id:1,
            article:1,
            date:1490166061472,
            ip:'192.168.0.1',
            fromUser:'best',
            parentComment:null,
            content:'贱人就是矫情有木有。。。',
        },
        {
            id:2,
            article:1,
            date:1490166061472,
            ip:'192.168.0.1',
            fromUser:'lala',
            parentComment:null,
            content:'我向你飞，雨温柔的吹',
        },
        {
            id:3,
            article:1,
            date:1490166061472,
            ip:'192.168.0.1',
            fromUser:'lala',
            parentComment:{
                id:2,
                article:1,
                date:1490166061472,
                ip:'192.168.0.1',
                fromUser:'lala',
                parentComment:null,
                content:'我向你飞，雨温柔的吹',
            },
            content:'我向你飞，雨温柔的吹',
        }
    ]
}

const getters={
    isHideSidebar:state=>state.isHideSidebar,
    categoryList:state=>state.categoryList,
    tagList:state=>state.tagList
}

const actions={
    setToggleSidebar({commit}){
        commit(type.SET_TOGGLE_SIDEBAR);
    }
}

const mutations={
    [type.SET_TOGGLE_SIDEBAR](state, flag){
        if(arguments.length ===2 && typeof arguments[1] !== 'undefined'){
            state.isHideSidebar = flag;
            return;
        }
        state.isHideSidebar = !state.isHideSidebar;
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}