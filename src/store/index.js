import { createStore, createLogger } from 'vuex'
import sharedStore from './shared'
import { dev } from '@utils/constants'

const store = createStore({
  modules: {
    shared: sharedStore,
  },
  strict: dev,
  plugins: dev ? [createLogger()] : [],
})

export default store
