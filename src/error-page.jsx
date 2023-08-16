import {useRouteError, Link} from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p> 
                <i>Page {error.statusText || error.message}</i>
            </p>
            <p>
                Go back to <Link to="/">home page</Link>
            </p>
        </div>
    );
}

export default ErrorPage;