

export const coursChosenEvent = ()=>{
    
    const  choseCour = (state,action)=>{
        // action: {type:"todo/selectCours,payload:{crenauId:1,coursIndex}}
        const {crenauId,coursIndex} = action.payload
        let crenau = state.session.creneaux.find(crenauElement=>{
           return crenauElement.id === crenauId
        })
        if (crenau) {
            crenau.jours.forEach(elementJour => {
                    let cour = elementJour.find(elementCours=>{
                        return    elementCours?.id === coursIndex
                    })
                    if (cour) {
                        elementJour.map(elementCours=>{
                            if (elementCours) {
                                if (elementCours.id!== coursIndex) {
                                    elementCours.isSelected=false
                                }
                            }   
                        })
                        cour.isSelected = !cour.isSelected
                    }
            });
        }
    }

    const addCourItem =(state,action)=>{
        const {coursIndex,crenauId,jourindex} = action.payload
        
        let cour = state.selectedCoursList.find(elementCour=>{
            return ((elementCour.coursIndex=== coursIndex)&&(elementCour.crenauId=== crenauId))
        })
    
        if (cour) {
            state.selectedCoursList = state.selectedCoursList.filter(cour => !((cour.coursIndex=== coursIndex)&&(cour.crenauId=== crenauId)));  
        }else{
            state.selectedCoursList = state.selectedCoursList.filter(cour=>!((cour.jourindex=== jourindex)&&(cour.crenauId=== crenauId)))
            state.selectedCoursList.push(action.payload)
        }
        return state
    }
    

    return {
        choseCour,
        addCourItem
    }
}