import React, {useState}from 'react';

const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial);

    const sumarCountador = () =>{
        if(contador < stock){
            setContador(contador +1)
        }
    }
    const restarCountador = () =>{
        if(contador > initial){
            setContador(contador - 1)
        }
    }
    const agregar = () =>{
        onAdd(contador)
    }
    return(
        <>
            <div style={styles.container} className='itemCount'>
                <div className='itemCounter'>
                    <button className='buttonCounter' onClick={sumarCountador}>+</button>
                    <h1 className='counter'>{contador}</h1>
                    <button className='buttonCounter' onClick={restarCountador}>-</button>
                </div>
                <button className='addCart' onClick={agregar}>agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount

const styles={
    container:{
        minWidth:'15rem'
    }
}