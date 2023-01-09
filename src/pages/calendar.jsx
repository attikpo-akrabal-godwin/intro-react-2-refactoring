import { useEffect, useState } from "react"
import { DropListCours } from "../components/dropListCours"
import { Spinner } from "../components/spiner"
import { Table } from "../components/table"
import { dispatcher, selector } from "../module/store/hooks"


export const Calendar = ()=>{
    const { fetchCours } =dispatcher()
    const { useSelectError} = selector()
    useEffect(()=>{
        fetchCours()
    })
    const error = useSelectError()
    let errorView = ""
    if (error) {
        errorView = (
            <div className="error">
                {error}
            </div>
        )
    }
    return(
        <>
          <div className="container" >
            {errorView}
            <Head/>
            <main>
                <DropListCours/>
                <Table/>
            </main>
          </div> 
        </>
    )
}


const Head = ()=>{
    let totalPrix = 0
    const { useSelectSession , useSelectListCoursSelected ,useSelectIsLoading }= selector()
    const firsteSession = useSelectSession()
    const selectedCourList = useSelectListCoursSelected()
    const isLoading = useSelectIsLoading()

    selectedCourList.map((cour)=>{
        totalPrix += cour.prix
    })

     const HeaderView = ()=>{
        return (
            <>
                <li>SESSION {firsteSession.sessionMois} {firsteSession.sessionAnnee}  </li>
                <li>{firsteSession.dateDebut} - {firsteSession.dateFin}</li>
                <li> <span>total:{totalPrix}</span> <button className="btn-a">s'inscrire</button></li>
            </>
        )
    }

    return(
        <>
            <header>
                <h1 className="big-title" >CALENDRIER</h1>
                <hr className="separate"/>
                <ul className="header">
                    {isLoading?<Spinner/>:<HeaderView/>}
                </ul>           
            </header>
        </>
    )
}