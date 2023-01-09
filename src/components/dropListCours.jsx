import { useState } from "react"
import { selector, dispatcher } from "../module/store/hooks"

export const DropListCours = ()=>{

    const [togle,setTogle] = useState(false)
    const {useSelectListCoursSelected} = selector()
    const listCoursSelected = useSelectListCoursSelected()
    const {useHandleOnClickCours} = dispatcher()
    const handleTogle = ()=>{
        setTogle(tog=>!tog)
    }
    const handleDragOver =(e)=>{
        e.preventDefault()
        
    }

    const handleDrag =(e)=>{
        e.preventDefault()
        console.log("drop end");
        const coursInfo = JSON.parse(e.dataTransfer.getData('courInfo'));
        useHandleOnClickCours(coursInfo)
    }
    
    return(
        <div  onDragOver={(e)=>{handleDragOver(e)}} onDrop={(e)=>{handleDrag(e)}} className="cours-list" >
                    <div className="cour-list-head">
                       <span>cours selectioner</span> 
                       <div onClick={()=>{ handleTogle()}}>
                            {togle?<svg  className="svg" fill="#ffff" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>:<svg fill="#ffff" className="svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>}
                       </div>
                       
                    </div>
                    <div className={togle?"cour-list-body collapse":"cour-list-body"}>
                        <ul>
                            {
                                listCoursSelected.map((cours,i)=>{
                                    return (<li  key={i} >{cours.nom}</li>)
                                })
                            }
                            
                        </ul>
                    </div>
        </div>
    )
}