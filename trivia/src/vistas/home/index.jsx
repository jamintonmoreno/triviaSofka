import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const [nameJugador, setNameJugador] = useState('')
  const  recordScore = localStorage.getItem('recordScore');
  const result= JSON.parse(recordScore)

  // Ruta hacia vista donde se muestran las preguntas
  const empezar = () => {
    if(nameJugador !== ''){
      navigate(`/init/questions/${nameJugador}`)
    }else{
    alert('Debes ingresar el nombre del jugador')
    }
  }

  // Vista principal de la Trivia
  return (
    <div
      className='items-center text-center flex flex-wrap w-full h-screen text-lg font-semibold '
      id='inicio'
    >
      <div className='items-center text-center drop-shadow-2xl h-15 w-full p-2'>
        <h1 className='text-4xl'>
          Bienvenido a la <span>Trivia</span>
        </h1>
      </div>
      <div className='w-3/5 h-4/5 shadow-2xl shadow-gray-500
       border border-gray-300 hover:border-gray-400 rounded-lg
       bg-gradient-to-t from-orange-500
        items-center m-auto '>
        <div
          className='container  main-content-formulario '
          id='contentFormulario'
        >
          <div className='intruciones items-center text-center  p-4 '>
            <h3 className='text-2xl'>Instrucciones del juego</h3>
            <br />
            <p>El juego consta de 5 rondas.</p>
            <br />
            <p className='text-justify'>
              Debe responder 5 preguntas para avanzar a la siguiente ronda, para
              ganar deberá responder 25 preguntas de opción multiple. Las
              preguntas aumentarán su nivel de dificultad a medida que avance en
              el juego. Si falla una de las respuestas terminará el juego. Y
              deberá iniciar nuevamente.
            </p>
            <br />
            <p>
              Cada pregunta respondida correctamente tiene un puntaje de 50
              puntos.
            </p>
            <br />
            <div>
              <input className='text-center w-2/4 h-10 rounded-lg bg-orange-300' type="text"
              onChange={(e)=> setNameJugador(e.target.value)} placeholder='Ingrese nombre de usuario' required={true}/>
            </div>
            <br />
            <div
              className='w-1/4 m-auto p-2 items-center text-center rounded-lg 
            shadow-lg shadow-black-500/400 hover:shadow-indigo-500/40
            border border-gray-300 hover:border-gray-400 btn-enviar bg-orange-400'
            >
              <button onClick={() => empezar()}>Empezar Trivia</button>
            </div>
            <br />
          </div>

          <div className='main-score '>
            <label htmlFor='scoremaximo'>PUNTUACIÓN OBTENIDA</label>
            <br />
            <span className='rounded-lg text-black text-center text-xl' > {result ? result.Puntaje:0}</span>
            <br />
            <span className='rounded-lg text-black text-center text-xl' > {result ? result.jugador:"Anonimo"}</span>
            <br />
            <br />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
