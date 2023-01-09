export const Cour = ({cour,crenauId,handleclick,jourindex})=>{

    return (
        <div className={cour.isSelected?"cours select":"cours"} onClick={()=>{
            handleclick({coursIndex:cour.id,crenauId,prix:cour.prix,jourindex})
        }} >
            {cour.nom}
        </div>
    )
}