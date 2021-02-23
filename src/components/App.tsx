import { Provider } from 'react-redux';
import { store } from '../state';
import Component from './Component';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Component />
      </div>
    </Provider>
  );
};

export default App;
