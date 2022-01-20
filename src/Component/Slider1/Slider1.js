import React from 'react';
import Box from '@mui/material/Box';
import { styled as styled1} from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';


const PrettoSlider = styled1(Slider)({
      width: '400px',
      color: '#fafafa',
      height: 2,
      '& .MuiSlider-track': {
        border: '0px solid orange',
        color: 'orange'
      },
      '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid orange',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },
        '&:before': {
          display: 'none',
        },
      },
      '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: 'orange',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
          transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
          transform: 'rotate(45deg)',
        },
      },
    });


const Slider1 = () => {
      const [value1, setValue1] = React.useState(10);
      const [value2, setValue2] = React.useState(10);

      function calculateValue1(value1) {
            return value1;
          }

      const handleChange1 = (event, newValue) => {
            if (typeof newValue === 'number') {
                  setValue1(newValue);
            }
      }


      function calculateValue2(value2) {
            return value2;
      }

      
      const handleChange2 = (event, newValue) => {
            if (typeof newValue === 'number') {
                  setValue2(newValue);
            }
      }
          
      return (
            <Box>
                  <Typography id="track-false-slider" gutterBottom>
                        DownPayment:   {calculateValue1(value1)}
                  </Typography>
                  <PrettoSlider
                        value={value1}
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={0}
                        onChange={handleChange1}
                  />

                  <Typography id="track-false-slider" gutterBottom>
                        Bank Interest Rate:  {calculateValue2(value2)}%
                  </Typography>
                  <PrettoSlider
                        value={value2}
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={0}
                        onChange={handleChange2}
                  />
                  <Container>
                        <button>
                              1
                        </button>
                        <button>
                              2
                        </button>
                        <button>
                              3
                        </button>
                        <button>
                              4
                        </button>
                        <button>
                              5
                        </button>
                        <button>
                              6
                        </button>
                        <button>
                              7
                        </button>
                  </Container>

                  <Calculation>
                        <FirstPart>
                              Total Loan Amount
                        </FirstPart>
                        <LastPart>
                              ${}
                        </LastPart>
                  </Calculation>
                  <Calculation>
                        <FirstPart>
                              Payable Amount
                        </FirstPart>
                        <LastPart>
                              ${}
                        </LastPart>
                  </Calculation>
                  <Calculation>
                        <FirstPart>
                              You''ll pay extra
                        </FirstPart>
                        <LastPart>
                              ${}
                        </LastPart>
                  </Calculation>

                  <EmiCalulation>
                        <div>
                              <h1>EMI</h1>
                              <h6>per month</h6>
                        </div>
                        <div>
                              ${}
                        </div>
                  </EmiCalulation>
                  
            </Box>
      );
};

const EmiCalulation = styled.div`
      display: flex;
      justify-content: center;      
`;


const FirstPart = styled.div`
      display: flex;
      margin-right: 100px;
`;

const LastPart = styled.div`
      display: flex;
      margin-left: 100px;

`;

const Calculation = styled.div`
      margin-top: 100px;
      display: flex;
      justify-content:center;
`;

const Container = styled.div`
      margin-top: 50px;
      display:flex;
      justify-content: center;
      >button {
            margin-left:-1px;
            background-color:white;
            border: 1px solid black;
            padding: 20px 30px;
            &:focus {
                  background-color:black;
                  color:white;
            }

      };
`;

export default Slider1;