import robo from '../../img/robo.png';
import './NotFound.css';

export function NotFound() {

    return (
        <div>
            <main className="notFoundMain">
                <h1>404</h1>
                <p>
                    Oh no! It seems like you've stumbled upon a page that doesn't exist...
                </p>  
                <p>
                    Try another <a href="https://www.naramunz.com/" target="blank">page</a>, you might find some lootable skills!
                </p>
            </main>
            <img className='roboNotFound' src={robo} alt="Game character" />
        </div>
    );
}