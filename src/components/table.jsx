import { useEffect, useState } from "react"
import { dispacther, selector } from "../module/store/hooks"

 export const Table = ()=>{

    const {useHandleOnClickCours} = dispacther()
    const { useSelectSession ,useSelectIsLoading }= selector()
    const session = useSelectSession()
    const isLoading = useSelectIsLoading()

    const  handleclick = ({coursIndex,crenauId,jourindex,prix})=>{
        useHandleOnClickCours({coursIndex,crenauId,jourindex,prix})
    }
    
    let creneauView = []
    if (session.creneaux) {
        session.creneaux.map((creneau,i)=>{
            creneauView.push(<Crenau key={i} crenau={creneau} handleclick={handleclick} />)
        })
    }
    const spiner = (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
    let loadingView = ""
    if (isLoading) {
        loadingView = (
            <tr>
                <td>{spiner}</td>
                <td>{spiner}</td>
                <td>{spiner}</td>
                <td>{spiner}</td>
                <td>{spiner}</td>
                <td>{spiner}</td>
                <td>{spiner}</td>
                <td>{spiner}</td>
            </tr> 
        )
    }
    
    return (
        <>
            <table className="calendar">
                <thead>
                    <tr>
                        <th>Horaires</th>
                        <th>Lundi</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                        <th>Jeudi</th>
                        <th>Vendredi</th>
                        <th>Samedi</th>
                        <th>Dimanche</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading?loadingView:creneauView}
                </tbody>
            </table>
        </>
    )
}


const Crenau = ({crenau,handleclick})=>{
    let jourview = []

    crenau.jours.map((jour,i)=>{
        if (jour) {
            jourview.push(<Jours jour={jour} key={i} crenauId={crenau.id}  handleclick={handleclick} jourindex={i} />)
        }
    })

    return (
        <tr>
            <td className="heure"> {crenau.horaire}</td>
            {jourview}
        </tr>
    )
}


const Jours = ({jour,crenauId,handleclick,jourindex})=>{
    let courView = []

    jour.map((cour,i)=>{
        courView.push(<Cour cour={cour} key={i} crenauId={crenauId} handleclick={handleclick} jourindex={jourindex} />)
    })

    return (
        <td>
            {courView}
        </td>
    )
}


const Cour = ({cour,crenauId,handleclick,jourindex})=>{

    return (
        <div className={cour.isSelected?"cours select":"cours"} onClick={()=>{
            handleclick({coursIndex:cour.id,crenauId,prix:cour.prix,jourindex})
        }} >
        {cour.nom}
        </div>
    )
}