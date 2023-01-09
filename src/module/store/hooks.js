import { useSelector ,useDispatch } from "react-redux";
import { fetchDataEvent } from "../event/fetchDataEvent";
import { addCourItemEvent, choseCourEvent } from "../slice/coursSlice";



export const selector = ()=>{

    const useSelectIsLoading = ()=>{
        const isLoading =  useSelector((state)=>{
                return state.coursSlice.isLoading
            })

            return isLoading
    }

    const useSelectSession = ()=>{
        const session = useSelector((state)=>{
            return state.coursSlice.session
        })
        return session
    }

    const useSelectListCoursSelected = ()=>{
        const selectedCoursList = useSelector((state)=>{
            return state.coursSlice.selectedCoursList
        })
        return selectedCoursList 
    }

    const useSelectError = ()=>{
        const error = useSelector((state)=>{
            return state.coursSlice.error
        })

        return error
    }
    
    return {
        useSelectIsLoading,
        useSelectSession,
        useSelectListCoursSelected,
        useSelectIsLoading,
        useSelectError
    }
}


export const dispatcher = ()=>{

    const useAppdispatch = ()=>useDispatch()
    const dispatch = useAppdispatch() 

    const useHandleOnClickCours = ({coursIndex,crenauId,jourindex,prix})=>{
        dispatch(addCourItemEvent({coursIndex,crenauId,jourindex,prix}))
        dispatch(choseCourEvent({coursIndex,crenauId,jourindex}))
    }

    const fetchCours = ()=>{
        dispatch(fetchDataEvent().fetchCoursEvent())
    }

    return {
        useHandleOnClickCours,
        fetchCours
    }
}

