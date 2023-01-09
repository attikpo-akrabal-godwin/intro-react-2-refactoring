export const Cour = ({cour,crenauId,handleclick,jourindex})=>{

    const handleDragStart=(e,coursInfo)=>{
        e.dataTransfer.setData('courInfo',JSON.stringify(coursInfo))
    }
    
    return (
        <div draggable="true" className={cour.isSelected?"cours select":"cours"} 
        onClick={()=>{
            handleclick({coursIndex:cour.id,crenauId,prix:cour.prix,jourindex,nom:cour.nom})
        }} 

        onDragStart ={(e)=>{
            handleDragStart(e,{coursIndex:cour.id,crenauId,prix:cour.prix,jourindex,nom:cour.nom})
        }}
        
        >
            {cour.nom}
        </div>
    )
}