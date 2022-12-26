import { RedesEstilizadas } from "./style"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Redes = () => {

    return(
        <RedesEstilizadas>
            <a href="https://github.com/evaaldo"><AiFillGithub size={40}/></a>
            <a href="https://www.linkedin.com/in/evaldorodrigues/"><AiFillLinkedin size={40}/></a>
        </RedesEstilizadas>
    )

}

export default Redes