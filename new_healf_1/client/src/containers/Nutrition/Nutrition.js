import React from "react";
import { Route, Switch } from "react-router-dom";

import ScreenFallback from "../../components/ScreenFallback/ScreenFallback";
import { screens as NutritionScreens } from "./_config";
import screens from "../../screens";

const Nutrition = () => {
  return (
    <>
      <h1>Nutrition</h1>
      <pre>{JSON.stringify(screens, null, 2)}</pre>
      <pre>
        {JSON.stringify(
          {
            screensToRender: screens.filter(({ config: { path } }) =>
              NutritionScreens.includes(path)
            ),
          },
          null,
          2
        )}
      </pre>
      <ol>
        {NutritionScreens.map((screen) => (
          <li>{screen}</li>
        ))}
      </ol>
      <Switch>
        {screens
          .filter(({ config: { path } }) => NutritionScreens.includes(path))
          .map(({ Component, config: { path } }) => (
            <Route component={Component} path={`/nutrition/${path}`} />
          ))}
        <Route component={ScreenFallback} path="/nutrition/:screen?" />
      </Switch>
    </>
  );
};

export default Nutrition;
