import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useDispatch} from "react-redux";
import {startLogin} from "../actions/ui";

const Home: NextPage = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startLogin('Logged'))
    }

    return (
        <div className={styles.container}>
            <button onClick={handleClick}>
                Iniciar sesión
            </button>
        </div>
    )

}

export default Home
