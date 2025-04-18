const Buttons = ({setUrl,siguiente,anterior}) => {


    const handleSiguiente = () => {
        siguiente && setUrl(siguiente)

    }

    const handleAnterior = () => {
        anterior && setUrl(anterior)
    }

    return(
        <>
        <button onClick={handleAnterior}>Anterior</button>
        <button onClick={handleSiguiente}>Siguiente</button>
        </>
    )
}

export default Buttons