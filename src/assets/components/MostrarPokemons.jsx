import { useEffect, useState } from "react"

const MostrarPokemons = () => {
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");
    const [listaPokemon,setListaPokemon] = useState([]);

    const fetchPersonajes = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        
        const detalle = await Promise.all(
            data.results.map(async(pokemon)=>{
                const res = await fetch(pokemon.url);
                const resFinal = await res.json()
                return resFinal;
            })
        )
        setListaPokemon(detalle);
    };

    console.log(listaPokemon)

    useEffect(()=>{
        fetchPersonajes();
    },[])

    return(
        <section>
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
        </section>

    )
}

export default MostrarPokemons