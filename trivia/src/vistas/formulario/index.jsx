import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { questions } from '../../data'

// Interfaz para presentar la Trivia
const Form = () => {
  const { nameJugador } = useParams()
  
  // Hook de ruta
  const navigate = useNavigate()

  // Estados
  const [next, setNext] = useState(1)
  const [round, setRound] = useState(1)
  const [dataScore, setDataScore] = useState({ Jugador: '', score: 0 })
  
  //Variar el orden de la opcion de respuesta correcta
  const barajarRespuesta = Respuesta_incorrectas => {
    if (!Respuesta_incorrectas) {
      alert('¡FELICITACIONES! Obtuviste una puntuación perfecta. Ganaste')
      navigate('/')
      return []
    }

    for (let i = Respuesta_incorrectas.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[Respuesta_incorrectas[i], Respuesta_incorrectas[j]] = [
        Respuesta_incorrectas[j],
        Respuesta_incorrectas[i]
      ]
    }
    return Respuesta_incorrectas
  }

  barajarRespuesta(questions[next] ? questions[next].incorrectAnswer : null)

  // Captura la respuesta para validar si es correcta y continuar o terminar el juego
  const nextQuestions = event => {
    
    const answerUser = event.target.innerText

    // Validacion de la respuesta. Dado el caso retona a vista principal
    if (answerUser === questions[next].correctAnswer) {
      console.log(next)
      setNext(prevState => {
        return prevState + 1
      })
      setDataScore({ ...dataScore, score: dataScore.score + 50 })
      console.log(dataScore)
    } else {
      alert('FIN DEL JUEGO')
      navigate('/')
      localStorage.setItem(
        'recordScore',
        JSON.stringify({ jugador: nameJugador, Puntaje: dataScore.score })
      )
    }
    
    // Mostrar en pantalla el numero de ronda
    switch (next) {
      case 5:
        setRound(2)
        break
      case 10:
        setRound(3)
        break
      case 15:
        setRound(4)
        break
      case 20:
        setRound(5)
        break
      default:
    }
  }

  // Interfaz de interaccion con el usuario
  return (
    <div className='items-center text-center flex flex-wrap w-full h-full text-lg font-semibold'>
      <div className='items-center text-center drop-shadow-2xl h-15 w-full p-10 '>
        <h1 className='text-3xl'>Ronda {round}</h1>
      </div>
      <div
        className='w-4/5 h-1/2 shadow-2xl shadow-gray-500
       border border-gray-300 hover:border-gray-400 rounded-lg
       items-center m-auto p-5 bg-gradient-to-t from-orange-500'
      >
        <div className=' w-full text-right pb-4'>
            <h3>{nameJugador}</h3>
            <h3 className='pr-7'>{dataScore.score}</h3>
          </div>
        <div>
          {/*Muesta en pantalla la pregunta*/}
          
          <h3 className='text-2xl'>
            {questions[next] ? questions[next].question : ''}
          </h3>
        </div>
        <div className='text-xl  w-3/4 m-auto items-center p-5'>
          {/*Muesta en pantalla las respuestas*/}
          {questions[next] &&
            questions[next].incorrectAnswer.map((answer, index) => (
              <div className='' key={index}>
                <button
                  className='w-3/4  m-1 p-2 items-center text-center rounded-lg 
                  shadow-lg shadow-black-500/400 hover:shadow-indigo-500/40
                  border border-gray-300 hover:border-gray-400 bg-orange-400  '
                  value={answer}
                  onClick={e => nextQuestions(e)}
                >
                {answer}
                </button>
                
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Form
