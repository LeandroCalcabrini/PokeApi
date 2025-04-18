const Personajes = ({listaPokemon}) => {
    return(
        <div className="card-container">
        {listaPokemon.map((personaje,index) => {
            return(
                <div key={index} className="card">
                    <div className="image-container">
                        <img src={personaje.sprites.other["official-artwork"].front_default} alt={personaje.name} />
                    </div>
                    <div>
                        <h2>{personaje.name}</h2>
                        <p>{personaje.types.map((tipo)=>{
                            return(
                                <span>{tipo.type.name}</span>
                            )
                        })}
                        </p>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default Personajes