import { createSlice } from "@reduxjs/toolkit";
import { coursChosenEvent } from "../event/coursChosenEvent";
import { fetchDataEvent } from "../event/fetchDataEvent";

const initialState = {
    isLoading:false,
    session:[],
    selectedCoursList:[],
    error:""
}

export const coursSlice =createSlice({
    name:"coursSlice",
    initialState,
    reducer:{
        choseCourEvent: coursChosenEvent().choseCour,
        addCourItemEvent: coursChosenEvent().addCourItem

    },
    extraReducers:(builder)=>{

        builder.addCase(
            fetchDataEvent().fetchCoursEvent.pending,
            fetchDataEvent().handleFetchCoursEventPending
        )

        builder.addCase(
            fetchDataEvent().fetchCoursEvent.fulfilled,
            fetchDataEvent().handleFetchCoursEventFulfilled
        )

        builder.addCase(
            fetchDataEvent().fetchCoursEvent.rejected,
            fetchDataEvent().handleFetchCoursEventRejected
        )
    }
}) 


export const  {choseCourEvent,addCourItemEvent} = coursSlice.actions