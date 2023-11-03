import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux-store/store';
import { HomePage } from './pages/HomePage';

export function App() {

  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default App
