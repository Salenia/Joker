import { useAppRoutes } from '@router';
import type { Component } from 'solid-js';


const App: Component = () => {
  const Routes = useAppRoutes();
  return (
    <Routes />
  );
};

export default App;
