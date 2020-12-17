import React from "react";

import containers from "./containers";
import { screens } from "./containers/Home/_config";

const App = () => {
  return (
    <>
      <div>This is app</div>
      <ul>
        {containers.map(({ config: { path, screens, title } }) => (
          <li key={path}>{title}</li>
        ))}
        {/* {screens?.length !== 0 && (
          <ul>
            {screens.map((screen) => (
              <li key={screen}>{screen}</li>
            ))}
          </ul>
        )} */}
        <ol>
          {screens.map((screen) => (
            <li key={screen}>{screen}</li>
          ))}
        </ol>
      </ul>
    </>
  );
};

export default App;
