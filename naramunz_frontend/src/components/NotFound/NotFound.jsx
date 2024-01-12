import robo from '../../img/robo.png';
import './NotFound.css';

export function NotFound() {

    return (
        <div>

        <main>
            <h1>404</h1>
            <p>Sorry, page not found!</p>
        </main>
         <img className='roboNotFound' src={robo} alt="Game character" />
         </div>
    )
}