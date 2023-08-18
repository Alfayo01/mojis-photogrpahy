import {useRouteError, Link, isRouteErrorResponse} from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    if(isRouteErrorResponse(error)) {
        if (error.status === 404) {
                return (
                <div id="error-page">
                    <h1>{error.status}</h1>
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
        if (error.status === 401) {
            return (
            <div>
                <h1>{error.status}</h1>
                <h3>You aren't authorized to see this</h3>
            </div>
            );
          }
      
          if (error.status === 503) {
            return (
            <div>
                <h1>{error.status}</h1>
                <h3>Looks like our API is down</h3>
            </div>
            );
          }
      
          if (error.status === 418) {
            return (
            <div>
                <h1>{error.status}</h1>
                🫖
            </div>
            );
          }
    }

}

export default ErrorPage;