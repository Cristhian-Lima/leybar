import './App.sass'
import rootStyles from './root.module.sass'
import Container from './components/containers/container';

function App() {
  return (
    <div className={rootStyles.root}>
      <Container />
    </div>
  );
}

export default App;
