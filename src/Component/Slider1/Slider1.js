import React from 'react';
import Box from '@mui/material/Box';
import { styled as styled1} from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

//Slider Styles
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
      
    });


const Slider1 = () => {
      const [price, setPrice] = React.useState();
      const [downPayment, setDownPayment] = React.useState(10);
      const [interestRate, setInterestRate] = React.useState(10);
      const [months, setMonths] = React.useState(12);


      //This is the original Price of the Car
      const handlePrice = e => {
            setPrice(e.target.value);
      }


      //EMI Calculation

      let loanAmount = price-downPayment;
      let emi = ( (loanAmount * ( (interestRate/100) /months ) * (Math.pow( (( (interestRate/100) /months)+1), months )) ) / ( (Math.pow( (( (interestRate/100) /months)+1), months )) - 1) ).toFixed(0);
      let payAmount = emi*months;
      let payExtra = payAmount - loanAmount ;

      //Slider Functions
      function calculateDownPayment(downPayment) {
            return downPayment;
      }

      const handleChange1 = (event, newValue) => {
            if (typeof newValue === 'number') {
                  setDownPayment(newValue);
            }
      }
      function calculateInterest(interestRate) {
            return interestRate;
      }
      const handleChange2 = (event, newValue) => {
            if (typeof newValue === 'number') {
                  setInterestRate(newValue);
            }
      }
      //Code
      
      
      const handleMonths = (value) => {
            setMonths(value)
      }

      

      return (
            <Box> 
                  <label>Enter Amount </label>
                  <input onBlur={handlePrice} type="number" />
                  <br />
                  <br />
                  <br />

                  <div>
                        <Typography id="track-false-slider" gutterBottom>
                              DownPayment:   {calculateDownPayment(downPayment)}
                        </Typography>
                        <PrettoSlider
                              id="downPayment"
                              value={downPayment}
                              valueLabelDisplay="auto"
                              aria-label="pretto slider"
                              defaultValue={0}
                              step={1000}
                              max={price}
                              onChange={handleChange1}
                        />
                  </div>

                  <div>
                        <Typography id="track-false-slider" gutterBottom>
                              Bank Interest Rate:  {calculateInterest(interestRate)}%
                        </Typography>
                        <PrettoSlider
                              id="bankInterestRate"
                              value={interestRate}
                              valueLabelDisplay="auto"
                              aria-label="pretto slider"
                              defaultValue={0}
                              min={8}
                              step={0.10}
                              max={22}
                              onChange={handleChange2}
                        />
                  </div>
                  <div>
                        <Container>
                              <button onClick={() => handleMonths(12)}>
                                    <span id="yearOne">1</span>
                              </button>
                              <button onClick={() => handleMonths(24)}>
                                    <span id="yearTwo">2</span>
                              </button>
                              <button onClick={() => handleMonths(36)}>
                                    <span id="yearThree">3</span>
                              </button>
                              <button onClick={() => handleMonths(48)}>
                                    <span id="yearFour">4</span>
                              </button>
                              <button onClick={() => handleMonths(60)}>
                                    <span id="yearFive">5</span>
                              </button>
                              <button onClick={() => handleMonths(72)}>
                                    <span id="yearSix">6</span>
                              </button>
                              <button onClick={() => handleMonths(84)}>
                                    <span id="yearSeven">7</span>
                              </button>
                        </Container>
                  </div>

                  <div>
                        <Calculation>
                              <FirstPart>
                                    Total Loan Amount
                              </FirstPart>
                              <LastPart>
                                    $ {loanAmount}
                              </LastPart>
                        </Calculation>
                        <Calculation>
                              <FirstPart>
                                    Payable Amount
                              </FirstPart>
                              <LastPart>
                                    $ {payAmount.toFixed(0)}
                              </LastPart>
                        </Calculation>
                        <Calculation>
                              <FirstPart>
                                    You''ll pay extra
                              </FirstPart>
                              <LastPart>
                                    $ {payExtra.toFixed(0)}
                              </LastPart>
                        </Calculation>
                  </div>      

                  <div>
                        <EmiCalulation>
                              <div>
                                    <h1>EMI</h1>
                                    <h6>per month</h6>
                              </div>
                              <div style={{padding: '50px'}}>
                                    $<span id="emiTotal">{emi}</span>
                              </div>
                        </EmiCalulation>
                  </div>
                  
            </Box>
      );
};

const EmiCalulation = styled.div`
      display: flex;
      justify-content: center;  
      margin-top: 30px;
      border-top:1px solid black;
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
      >div {
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