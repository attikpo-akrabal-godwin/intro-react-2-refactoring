import { Jours } from "./jours"

export const Crenau = ({crenau,handleclick})=>{
    let jourview = []

    

    return (
        <tr>
            <td className="heure"> {crenau.horaire}</td>
            {
                crenau.jours.map((jour,i)=>{
                   return  <Jours jour={jour} key={i} crenauId={crenau.id}  handleclick={handleclick} jourindex={i} />
                })
            }
        </tr>
    )
}