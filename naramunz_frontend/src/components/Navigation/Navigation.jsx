import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {

      return (
            <nav>
                  <ul>
                  <li>
                        <NavLink to={'/'}>Home</NavLink>
                  </li>
                  <li>
                        <NavLink to={'/proposals'}>Proposals</NavLink>
                  </li>
                  <li>
                        <NavLink to={'/vote'}>Vote</NavLink>
                  </li>
                  <li>
                        <NavLink to={'/create_proposal'}>Create a proposal</NavLink>
                  </li>
                  </ul>
            </nav>
      );
}