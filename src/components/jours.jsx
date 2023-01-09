import { Cour } from "./cour"

export const Jours = ({jour,crenauId,handleclick,jourindex})=>{
    return (
        <td>
            {   
                jour.map((cour,i)=>{
                    return   <Cour cour={cour} key={i} crenauId={crenauId} handleclick={handleclick} jourindex={jourindex} />
                })
            }
        </td>
    )
}