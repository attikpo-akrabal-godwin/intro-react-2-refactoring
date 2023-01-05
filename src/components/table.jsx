 export const Table = ()=>{

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
                    <Crenau />
                </tbody>
            </table>
        </>
    )
}


const Crenau = ()=>{
    return (
        <tr>
            <td className="heure">1</td>
            <Jours/>
            <Jours/>
            <Jours/>
            <Jours/>
            <Jours/>
            <Jours/>
            <Jours/>
        </tr>
    )
}


const Jours = ()=>{
    return (
        <td>
            <Cours/>
        </td>
    )
}


const Cours = ()=>{
    return (
        <div className="cours select">salsa2</div>
    )
}