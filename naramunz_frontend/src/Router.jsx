import {createBrowserRouter} from "react-router-dom";
import {Welcome} from './components/Welcome/Welcome';
import {Layout} from './components/Layout/Layout';
import {Proposals} from './components/Proposals/Proposals';
import {Vote} from './components/Vote/Vote';
import {Create} from './components/Create/Create';

export const router = createBrowserRouter([{

    path:'/',
    element: <Layout />,
    /// errorElement: <NotFound />,
    children: [
        {
            index: true,
            path:'/',
            element: <Welcome />
        },
        {
           path:'/proposals',
            element: <Proposals />
        },
        {
            path:'/vote',
            element: <Vote />
        },
        {
            path:'/create_proposal',
            element: <Create/>
        },
    ] 
}]);