import React from "react";
import styles from './App.module.scss';
import Input from "./components/input/input";

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.app}>
      <h1>Hello, React with Webpack and TypeScript!</h1>
      <span>Input</span>
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export default App;