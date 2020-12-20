import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ContainerFallback = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/home");
  }, [history]);

  return <>ContainerFallback</>;
};

export default ContainerFallback;
