import logo from './logo.svg';
import './App.css';
import LeftSection from './components/layouts/LeftSection';
import RigthSection from './components/layouts/RigthSection';

function App() {
  return (
    <div className='Main-view'>
    <LeftSection />
    <RigthSection />
    </div>
  );
}

export default App;
