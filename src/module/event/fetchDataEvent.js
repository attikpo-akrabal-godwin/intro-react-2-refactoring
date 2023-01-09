import { createAsyncThunk } from "@reduxjs/toolkit"


export const fetchDataEvent = ()=>{
        const delay = ms => new Promise(r => setTimeout(r, ms));
        
        const   fetchCoursEvent = createAsyncThunk('cours/FindAllCours',
        async ()=>{
            try {
                await delay(3000)
                let response = await  fetch('https://mocki.io/v1/9050467a-a57e-4d3b-8861-96f0d3c472fc')
                let data = await response.json()
                return data[0]
            } catch (error) {
                return Promise.reject(error.toString()) 
            }
        })

        const handleFetchCoursEventFulfilled = (state,action)=>{
            state.session = action.payload
            state.isLoading = false
            return state
        }

        const handleFetchCoursEventPending = (state,action)=>{
            state.isLoading = true
            return state
        }

        const handleFetchCoursEventRejected = (state,action)=>{
            state.isLoading = false
            console.log(action.error);
            state.error =  "erreur reseau"  
            return state
        }


        return {
            fetchCoursEvent,
            handleFetchCoursEventFulfilled,
            handleFetchCoursEventPending,
            handleFetchCoursEventRejected,
        }
}