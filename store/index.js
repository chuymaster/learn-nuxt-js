import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: '1',
                                title: "My post 1",
                                previewText: "Super amazing, thanks for that!",
                                thumbnail:
                                    "https://www.amd.com/system/files/59364-radeon-vega-1260x709.jpg"
                            },
                            {
                                id: '2',
                                title: "My post 2",
                                previewText: "Super amazing, thanks for that!",
                                thumbnail:
                                    "https://www.amd.com/system/files/59364-radeon-vega-1260x709.jpg"
                            }
                        ])
                        resolve()
                    }, 1000);
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore