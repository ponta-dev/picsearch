import type { UserInfo } from '@/common/interface/userInfo'
import { defineStore } from 'pinia'

export const useUserAuth = defineStore('userAuth', {
    state: () => ({
        userId: "",
        userName: "",
        lang: "",
        authToken: ""
    } as UserInfo),

    getters: {
        getUserInfo: (store) => {
            return store as UserInfo
        },

        isAuthrized: (store) => {
            return !(store.authToken == "" || store.authToken == undefined)
        }
    },

    actions: {
        
    }
})