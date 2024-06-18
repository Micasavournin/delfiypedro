
const Page2 = () => {
    const googleCalendarUrl = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MzYwcGdrZTA5Z2didHZhaW12NDJzbXJmNDcgbWljYWFzYXZvb0Bt&tmsrc=micaasavoo%40gmail.com";
    return (
        <div className="contenedor">
            <img className="imagen marcoMarti" src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%204%20(BODA)-02.jpg?alt=media&token=791f89ac-b122-4b97-a2e5-5583fa3c656d" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <a style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleCalendarUrl} target="_blank" 
        rel="noopener noreferrer" className="palabraAgendar">
      <button className="botonRecordar">
          Recordatorio
          </button>
        </a>

        </div>
    );
};

export default Page2;

