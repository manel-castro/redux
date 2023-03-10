Implements the most basic functionality of react-redux with a bundle size of 5.24kB.

Components to use:

Example:

```JSX
import React, { useState } from "react";
import { onStoreChanged,updateState  } from "@react-mini/redux";

export const Home = () => {
  const propertyName = "buttonClick";
  const [buttonState, setButtonState] = useState(false);

  onStoreChanged({
    propertyName,
    callback: (data) => setButtonState(data),
  });

  return (
    <div>
      <input
        type="button"
        onClick={() =>
          updateState({
            value: !buttonState,
            propertyName,
          })
        }
        value={`${buttonState}`}
      ></input>
    </div>
  );
};
```
