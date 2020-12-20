import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const ScreenFallback = () => {
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    history.push("/nutrition/food-items");
  }, [history]);

  return (
    <>
      <h2>Screen Fallback</h2>
      <pre>{JSON.stringify({ params }, null, 2)}</pre>
    </>
  );
};

export default ScreenFallback;
