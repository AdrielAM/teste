// Não há mais a obrigação do import React from "react";

import { useState } from "react";
import { Container, ListIten } from "./styles";

function Header () { 
    
    const [iten, setIten] =useState('Home')
    
    return (
        <Container>
            <div onClick={()=>setIten('Home')}>
                <ListIten active={iten === 'Home'}>Home</ListIten>
            </div>
            <div onClick={()=>setIten('Contato')}>
                <ListIten active={iten === 'Contato'}>Contato</ListIten>
            </div>
            <div onClick={()=>setIten('Fotos')}>
                <ListIten active={iten === 'Fotos'}>Fotos</ListIten>
            </div>
        </Container>
    )
}

export default Header;


