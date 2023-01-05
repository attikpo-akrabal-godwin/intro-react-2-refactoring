import { Table } from "../components/table"


export const Calendar = ()=>{

    return(
        <>
          <div className="container" >
            <Head/>
            <main>
                <Table/>
            </main>
          </div> 
        </>
    )
}


const Head = ()=>{

    return(
        <>
            <header>
                <h1 className="big-title" >CALENDRIER</h1>
                <hr className="separate"/>
                <ul className="header">
                        <li>SESSION DECEMBER 2022</li>
                        <li>04 déc. 2022 - 19 janv. 2023</li>
                        <li><button className="btn-a">s'inscrire</button></li>
                </ul>
            </header>
        </>
    )
}