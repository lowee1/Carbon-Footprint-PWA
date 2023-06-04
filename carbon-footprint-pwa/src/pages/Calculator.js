import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Calculator = () => {
  const [token, setToken] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [questionId, setQuestionId] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios.post(
        'https://sandbox.api.doconomy.com/lifestyle-calculator/v2.0/surveys/sessions',
        {
          clientId: 'a24ed635-90c5-4d39-8652-a13a39e13053',
          clientSecret: 'cffaf7ab-dc1c-4683-afd2-e1297d749923',
        },
        {
          headers: {
            'X-Api-Key': 'fb180c86-3e00-41db-98f0-f1d8563dd99c',
            'Content-Type': 'application/json',
          },
        }
      );
      setToken(response.data.token);
      setQuestion(response.data.question);
      setAnswers(response.data.answers);
      setQuestionId(response.data.nextQuestionId);
    };
    // fetchToken();
  }, []);

  const handleStart = async () => {
    const response = await axios.put(
      `https://sandbox.api.doconomy.com/lifestyle-calculator/v2.0/surveys/sessions/${token}/start`,
      {},
      {
        headers: {
          'X-Api-Key': 'fb180c86-3e00-41db-98f0-f1d8563dd99c',
          'Content-Type': 'application/json',
        },
      }
    );
    setQuestion(response.data.question);
    setAnswers(response.data.answers);
    setQuestionId(response.data.nextQuestionId);
  };

  const handleAnswer = async (answer) => {
    const response = await axios.put(
      `https://sandbox.api.doconomy.com/lifestyle-calculator/v2.0/surveys/sessions/${token}/questions/${questionId}`,
      {
        answer: [answer],
      },
      {
        headers: {
          'X-Api-Key': 'fb180c86-3e00-41db-98f0-f1d8563dd99c',
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 204) {
      setIsComplete(true);
    } else {
      setQuestion(response.data.question);
      setAnswers(response.data.answers);
      setIsComplete(!response.data.hasNextQuestion);
      setQuestionId(response.data.nextQuestionId);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" className="Container">
        <h1>Calculator</h1>
        {!token && (
          <Button variant="contained" onClick={handleStart} id='startbutton'>
            Start
          </Button>
        )}
        {question && (
          <>
            <Typography variant="h2">{question}</Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select an answer:</FormLabel>
              <RadioGroup>
                {answers.map((answer) => (
                  <FormControlLabel
                    key={answer.title}
                    value={answer.title}
                    control={<Radio />}
                    label={answer.title}
                    onChange={(event) =>
                      handleAnswer({
                        id: answer.id,
                        input: event.target.value,
                        unit: answer.options[0].unit,
                      })
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </>
        )}
        {isComplete && <Typography variant="h2">Survey complete!</Typography>}
      </Container>
    </ThemeProvider>
  );
};

export default Calculator;