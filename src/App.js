import React from "react";
import ConstructorMethod from "./components/Mounting/constructorMethod";
import GetDerivedStateFromPropsMethod from "./components/Mounting/GetDerivedStateFromPropsMtd";
import RenderMethod from "./components/Mounting/renderMethod";
import ComponentDidMountMethod from "./components/Mounting/ComponentDidMountMethod";
import ShouldComponentUpdateMethod from "./components/Updating/shouldComponentUpdateMethod";
import GetSnapshotBeforeUpdateMethod from "./components/Updating/getSnapshotBeforeUpdateMethod";
import ComponentDidUpdateMethod from "./components/Updating/ComponentDidUpdateMethod";
import ComponentWillUnmountMethod from "./components/Unmounting/componentWillUnmount";
export default function App() {
  return (
    <>
      <h1>Mounting</h1>
      <h2>constructor Method</h2>
      <ConstructorMethod />
      <h2>getDerivedStateFromProps Method</h2>
      <GetDerivedStateFromPropsMethod />
      <h2>render Method</h2>
      <RenderMethod />
      <h2>componentDidMount Method</h2>
      <ComponentDidMountMethod />
      <h1>Updating</h1>
      <h2>shouldComponentUpdate Method</h2>
      <ShouldComponentUpdateMethod />
      <h2>getSnapshotBeforeUpdate Method</h2>
      <GetSnapshotBeforeUpdateMethod />
      <h2>componentDidUpdate Method</h2>
      <ComponentDidUpdateMethod />
      <h1>Unmounting</h1>
      <h2>componentWillUnmount Method </h2>
      <ComponentWillUnmountMethod />
      <h4>
        for more info:
        https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b
      </h4>
    </>
  );
}
