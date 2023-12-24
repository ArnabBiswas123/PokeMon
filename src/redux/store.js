import { configureStore } from '@reduxjs/toolkit'
import toggleModal from '../slices/modalslice/toggleModal'

export const store = configureStore({
    reducer: {
        modal:toggleModal
    }
})