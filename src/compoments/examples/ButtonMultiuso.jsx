const ButtonMultiuso = (props) => {
    const estilo={
        backgroundColor:props.color,
        padding:'10px 20px',
        border: 'none',
        color: 'black'
    }
        
    
    
    return (
        <button style={estilo}> {props.text} </button>
    )
        
    
}
export default ButtonMultiuso