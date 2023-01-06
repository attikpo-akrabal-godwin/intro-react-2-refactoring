import { useEffect } from "react"
import { Table } from "../components/table"
import { dispacther, selector } from "../module/store/hooks"


export const Calendar = ()=>{
    const { fetchCours } =dispacther()
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

    const spiner = (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
    const  headerView = (
        <>
            <li>SESSION {firsteSession.sessionMois} {firsteSession.sessionAnnee}  </li>
            <li>{firsteSession.dateDebut} - {firsteSession.dateFin}</li>
            <li> <span>total:{totalPrix}</span> <button className="btn-a">s'inscrire</button></li>
        </>
    )

    return(
        <>
            <header>
                <h1 className="big-title" >CALENDRIER</h1>
                <hr className="separate"/>
                <ul className="header">
                    {isLoading?spiner:headerView}
                </ul>
            </header>
        </>
    )
}