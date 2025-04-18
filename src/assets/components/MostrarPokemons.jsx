import { useEffect, useState } from "react"
import Buttons from "./Buttons";
import Personajes from "./Personajes";


const MostrarPokemons = () => {
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");
    const [listaPokemon,setListaPokemon] = useState([]);
    const [anterior,setAnterior] = useState(null);
    const [siguiente,setSiguiente] = useState(null);
    const [tipoPokemon, setTipoPokemon] = useState([]);

    const fetchPersonajes = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setSiguiente(data.next)
        setAnterior(data.previous)

        
        const detalle = await Promise.all(
            data.results.map(async(pokemon)=>{
                const res = await fetch(pokemon.url);
                const resFinal = await res.json()
                return resFinal;
            })
        )
        setListaPokemon(detalle);
    };

    const fetchTipoPersonajes = async () =>{
        const res = await fetch("https://pokeapi.co/api/v2/type/");
        const data = await res.json();
        setTipoPokemon(data.results)
    }



    

    console.log(tipoPokemon)



  

    useEffect(()=>{
        fetchPersonajes();
        fetchTipoPersonajes()
    },[url])

    return(
        <section>
            <ul>
                <li><button> VER TODOS </button></li>
                {tipoPokemon && tipoPokemon.map((pokemon)=>{
                    return(
                        <li><button>{pokemon.name.toUpperCase()}</button></li>
                )
                })}
            </ul>
            <Personajes listaPokemon={listaPokemon}/>
            <Buttons setUrl={setUrl} anterior={anterior} siguiente ={siguiente}/>
        </section>

    )
}

export default MostrarPokemons