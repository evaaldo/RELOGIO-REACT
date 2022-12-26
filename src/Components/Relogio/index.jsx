import { useEffect, useState } from "react"
import { RelogioEstilizado } from "./style"

const Relogio = () => {

    const [dateToday, setDateToday] = useState(new Date())
    const [hora, setHora] = useState(dateToday.getHours())
    const [minuto, setMinuto] = useState(dateToday.getMinutes())
    const [segundo, setSegundo] = useState(dateToday.getSeconds())

    useEffect(function() {
        setDateToday(new Date())
        setHora(dateToday.getHours())
        setMinuto(dateToday.getMinutes())
        setSegundo(dateToday.getSeconds())
    }, [dateToday])

    return(
        <RelogioEstilizado>
            <div>
                <span>
                    {hora.toString().padStart(2, '0')}
                </span>
                <p>Horas</p>
            </div>
            <div>
                <span>
                    {minuto.toString().padStart(2, '0')}
                </span>
                <p>Minutos</p>
            </div>
            <div>
                <span>
                    {segundo.toString().padStart(2, '0')}
                </span>
                <p>Segundos</p>
            </div>
        </RelogioEstilizado>

    )

}

export default Relogio