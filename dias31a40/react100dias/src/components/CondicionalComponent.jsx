import { useState } from "react";

function CondicionalComponent(){
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Esconder" : "Mostrar"} Mensagem
            </button>
        
            {show && <p>Está é uma Mensagem Condicional</p>}
        </div>
    )
}

export default CondicionalComponent; 