import { useState } from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Component: React.FC = () => {
  const [inputData, setInputData] = useState('');
  const { yourActionCreator } = useActions();

  const { data, error, loading } = useSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //Because form submission causes page refresh.
    yourActionCreator(inputData);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={inputData} onChange={(e) => setInputData(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Component;
