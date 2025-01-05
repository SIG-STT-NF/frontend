import BaseLayout from "@/layouts/base.layout";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  let errorPage;

  if (isRouteErrorResponse(error)) {
    errorPage = (
      <BaseLayout>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </BaseLayout>
    );
  } else if (error instanceof Error) {
    errorPage = (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    errorPage = <h1>Unkown error</h1>;
  }

  return errorPage;
}
