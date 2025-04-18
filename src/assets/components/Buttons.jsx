const Buttons = ({setUrl,siguiente,anterior}) => {


    const handleSiguiente = () => {
        siguiente && setUrl(siguiente)

    }

    const handleAnterior = () => {
        anterior && setUrl(anterior)
    }

    return(
        <>
        <button disabled={!anterior} onClick={handleAnterior}>Anterior</button>
        <button disabled={!siguiente} onClick={handleSiguiente}>Siguiente</button>
        </>
    )
}

export default Buttons