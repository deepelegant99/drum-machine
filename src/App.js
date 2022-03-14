
import styles from './App.module.css'
import Drumpad from './components/Drumpad';
import Display from './components/Display';

function App() {
  return (
    <div className={styles.App} id='drum-machine' >
      <Drumpad />
      <Display />
    </div>
  );
}

export default App;
