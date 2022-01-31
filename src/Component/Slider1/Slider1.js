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
      const [value1, setValue1] = React.useState(10);
      const [value2, setValue2] = React.useState(10);
      const [total, setTotal] = React.useState();
      const [payAmount, setPayAmount] = React.useState();
      const [extra, setExtra] = React.useState();
      const [emi1, setEMI] = React.useState(1);

      //Slider Functions
      function calculateValue1(value1) {
            return value1;
      }
      const handleChange1 = (event, newValue) => {
            if (typeof newValue === 'number') {
                  setTotal(newValue);
                  const totalPayableAmount = loanAmount + (loanAmount * (value2/100));
                  setPayAmount(totalPayableAmount);
                  const payExtra = totalPayableAmount - loanAmount;
                  setExtra(payExtra);
                  handleYear(1);
                  setValue1(newValue);
            }
      }
      function calculateValue2(value2) {
            return value2;
      }
      const handleChange2 = (event, newValue) => {
            if (typeof newValue === 'number') {
                  const totalPayableAmount = loanAmount + (loanAmount * (value2/100));
                  setPayAmount(totalPayableAmount);
                  const payExtra = totalPayableAmount - loanAmount;
                  setExtra(payExtra);
                  setValue2(newValue);
                  handleYear(1);
            }
      }
      //Code
      
      const handlePrice = e => {
            setPrice(e.target.value);
      }
      const handleYear = (value) => {
            const emi = payAmount/value*12;
            setEMI(emi);
      }

      const loanAmount = price-value1;
      return (
            <Box> 
                  <label>Enter Amount </label>
                  <input onBlur={handlePrice} type="number" />
                  <br />
                  <br />
                  <br />

                  <div>
                        <Typography id="track-false-slider" gutterBottom>
                              DownPayment:   {calculateValue1(value1)}
                        </Typography>
                        <PrettoSlider
                              id="downPayment"
                              value={value1}
                              valueLabelDisplay="auto"
                              aria-label="pretto slider"
                              defaultValue={0}
                              max={price}
                              onChange={handleChange1}
                        />
                  </div>

                  <div>
                        <Typography id="track-false-slider" gutterBottom>
                              Bank Interest Rate:  {calculateValue2(value2)}%
                        </Typography>
                        <PrettoSlider
                              id="bankInterestRate"
                              value={value2}
                              valueLabelDisplay="auto"
                              aria-label="pretto slider"
                              defaultValue={0}
                              max="22"
                              onChange={handleChange2}
                        />
                  </div>
                  <div>
                        <Container>
                              <button onClick={() => handleYear(1)}>
                                    <span id="yearOne">1</span>
                              </button>
                              <button onClick={() => handleYear(2)}>
                                    <span id="yearTwo">2</span>
                              </button>
                              <button onClick={() => handleYear(3)}>
                                    <span id="yearThree">3</span>
                              </button>
                              <button onClick={() => handleYear(4)}>
                                    <span id="yearFour">4</span>
                              </button>
                              <button onClick={() => handleYear(5)}>
                                    <span id="yearFive">5</span>
                              </button>
                              <button onClick={() => handleYear(6)}>
                                    <span id="yearSix">6</span>
                              </button>
                              <button onClick={() => handleYear(7)}>
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
                                    $<span id="totalLoanAmount">{loanAmount}</span>
                              </LastPart>
                        </Calculation>
                        <Calculation>
                              <FirstPart>
                                    Payable Amount
                              </FirstPart>
                              <LastPart>
                                    $<span id="payableAamount">{payAmount}</span>
                              </LastPart>
                        </Calculation>
                        <Calculation>
                              <FirstPart>
                                    You''ll pay extra
                              </FirstPart>
                              <LastPart>
                                    $<span id="payExtra">{extra}</span>
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
                                    $<span id="emiTotal">{emi1}</span>
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