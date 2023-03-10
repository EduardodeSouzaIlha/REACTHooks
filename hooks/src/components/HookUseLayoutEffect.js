import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Some name");

  useEffect(() => {
    console.log("2");
    setName("Changed!");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Another name");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useEffectLayout</h2>
      <p>Name: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;