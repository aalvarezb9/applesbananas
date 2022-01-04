const Texto = ({titulo, ancho, parrafo}) => {
    return (
        <div className="texto" style={{ marginLeft: '50px', marginRight: '50px'}}>
            <h2 style={{marginBottom: '30px'}}>{titulo}</h2>
            <p style={{width: ancho}}>
                {parrafo}
            </p>
        </div>
    )
}

export default Texto
