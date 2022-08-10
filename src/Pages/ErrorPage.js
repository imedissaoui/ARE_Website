import {Link} from 'react-router-dom';

const ErrorPage =()=>{
    return(
        <div>
            <Link to='/'>home</Link>
            <p>Error!</p>
        </div>
    )
}

export default ErrorPage;