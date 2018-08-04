/*
 * @Author: Laphets 
 * @Date: 2018-07-13 14:01:33 
 * @Last Modified by:   Laphets 
 * @Last Modified time: 2018-07-13 14:01:33 
 */

import { Module } from 'vuex';
import { AppState } from '@/store/modules/interfaces/app.interface';


export default {
    state: {
        // sidebar: {
        //     opened: !+db.sidebarStatus.get(),
        //     withoutAnimation: false,
        // }
        clientHeight: document.documentElement.clientHeight
    },
    mutations: {
        // TOGGLE_SIDEBAR: state => {
        //     if (state.sidebar.opened) {
        //         db.sidebarStatus.set('1')
        //     } else {
        //         db.sidebarStatus.set('0')
        //     }
        //     state.sidebar.opened = !state.sidebar.opened
        //     state.sidebar.withoutAnimation = false
        // },
        // CLOSE_SIDEBAR: (state, withoutAnimation) => {
        //     db.sidebarStatus.set('1')
        //     state.sidebar.opened = false
        //     state.sidebar.withoutAnimation = withoutAnimation
        // },
        SET_CLIENTHEIGHT: (state, height) => {
            state.clientHeight = height
        }
    },
    actions: {
        // toggleSideBar({ commit }) {
        //     commit('TOGGLE_SIDEBAR')
        // },
        // closeSideBar({ commit }, { withoutAnimation }) {
        //     commit('CLOSE_SIDEBAR', withoutAnimation)
        // },
    }
} as Module<AppState, any>
