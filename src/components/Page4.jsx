
const Page4 = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeVa3inQQjxYQg8c_oEg-XyOTJJdh8Wqfk6wH6PMiIk5XoPsw/viewform?usp=sf_link';
    return (
        <div className="contenedor">
            <img  src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%204%20(BODA)-04.jpg?alt=media&token=8986181a-b9b0-463c-80de-6ee9732da3fc" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <a 
            style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleFormUrl} 
        target="_blank" rel="noopener noreferrer" 
        className=""
      >
        <button className="botonConfirmar">
        Confirmar
            </button>
      </a>
        </div>
        )
    }


export default Page4