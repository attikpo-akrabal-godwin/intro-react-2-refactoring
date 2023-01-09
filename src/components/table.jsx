import { useCallback, useEffect, useState } from "react"
import { dispatcher, selector } from "../module/store/hooks"
import { Crenau } from "./crenau"
import { Spinner } from "./spiner"

 export const Table = ()=>{

    const { useSelectIsLoading }= selector()
    const isLoading = useSelectIsLoading()

    const LoadingView = ()=>{
        return (
            <tr>
                <td>{<Spinner/>}</td>
                <td>{<Spinner/>}</td>
                <td>{<Spinner/>}</td>
                <td>{<Spinner/>}</td>
                <td>{<Spinner/>}</td>
                <td>{<Spinner/>}</td>
                <td>{<Spinner/>}</td>
                <td>{<Spinner/>}</td>
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
                    {isLoading?<LoadingView/>:<CoursIterator/>}
                </tbody>
            </table>
        </>
    )
}


const CoursIterator = ()=>{
    const {useHandleOnClickCours} = dispatcher()
    const { useSelectSession  }= selector()
    const session = useSelectSession()

    const  handleclick = ({coursIndex,crenauId,jourindex,prix})=>{
        useHandleOnClickCours({coursIndex,crenauId,jourindex,prix})
    }
    
    return (
        <>
            {   
                session?.creneaux?.map((creneau,i)=>{
                     return(<Crenau key={i} crenau={creneau} handleclick={handleclick} />)     
                })
            }
        </>
    )

}







