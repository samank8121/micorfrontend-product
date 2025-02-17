import React, { lazy, Suspense } from 'react';

const Input = lazy(() => import('ComponentsEntry/Input'));
const Button = lazy(() => import('ComponentsEntry/Button'));

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h1>Hello Microfronted</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Input value={value} onChange={onChange} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Button variant="filled" size="m" onClick={() => alert(value)}><span>Click me!</span></Button>
      </Suspense>
    </div>
  );
};

export default App;
