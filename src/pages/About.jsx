import {useState} from 'React';

function About() {
    const [mostrarMas, setMostrarMas] = useState(false);

    return(
        <section>
            <h2 className="text-2xl font-bold">Sobre mi</h2>
            <p>Soy un desarrollador web con experiencia en React y Node.js.</p>
       
        {mostrarMas && (
            <p className="mt-3 text-gray-600">
            Me interesa aprender nuevas tecnologías y mejorar mis habilidades en el desarrollo web.
            </p>
        )}
        <button onClick={() => setMostrarMas(!mostrarMas)}>
            {mostrarMas ? 'Mostrar menos' : 'Mostrar más'}
        </button>
        </section>
    
    );
}

export default About;
