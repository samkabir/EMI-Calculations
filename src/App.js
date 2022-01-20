import './App.css';
import styled from 'styled-components';
import Slider1 from './Component/Slider1/Slider1';

function App() {
  return (
    <div className="App">
        <SliderCalc>
          <Slider1 />
        </SliderCalc>
    </div>
  );
}

const SliderCalc = styled.div`
    margin-top: 100px;
`;

export default App;
