import { FormEvent, useState } from "react";
import { Confirmation } from "./components/survey/Confirmation";
import { HealthChangesQuestion } from "./components/survey/HealthChangesQuestion";
import { RespiratorDifficultyQuestion } from "./components/survey/RespiratorDifficultyQuestion";
import { WearRespiratorQuestion } from "./components/survey/WearRespiratorQuestion";
import { WeightQuestion } from "./components/survey/WeightQuestion";
import { useMultistepForm } from "./useMultistepForm";
import { Button, Container } from "@mui/material";
import Header from "./components/Header";
import "./css/index.css";
import Title from "./components/Title";
import Footer from "./components/Footer";

type FormData = {
  healthChanges: string;
  wearRespirator: string;
  respiratorDifficult: string;
  weight: string;
};

const INITIAL_DATA: FormData = {
  healthChanges: "",
  wearRespirator: "",
  respiratorDifficult: "",
  weight: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <HealthChangesQuestion {...data} updateFields={updateFields} />,
      <WeightQuestion {...data} updateFields={updateFields} />,
      <WearRespiratorQuestion {...data} updateFields={updateFields} />,
      <RespiratorDifficultyQuestion {...data} updateFields={updateFields} />,
      <Confirmation />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <Header />
      <Title />
      <Container component="main" maxWidth="lg" style={{ marginTop: "130px" }}>
        <div
          style={{
            position: "relative",
            background: "white",
            border: "2px solid #8E9089",
            padding: "2rem",
            margin: "1rem",
            borderRadius: "20px",
            fontFamily: "Arial",
            width: "1019px",
            height: "476px",
          }}
        >
          <form>
            <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
              {currentStepIndex + 1}/{steps.length}
            </div>
            {step}
            <div
              style={{
                marginTop: "1rem",
                display: "block",
                gap: ".5rem",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {!isFirstStep && (
                <Button
                  size="large"
                  variant="contained"
                  onClick={back}
                  sx={{
                    borderRadius: "5px",
                    width: "200px",
                    height: "75px",
                    color: "#4E5259",
                  }}
                >
                  Back
                </Button>
              )}
              <Button
                size="large"
                variant="contained"
                onClick={onSubmit}
                sx={{
                  borderRadius: "5px",
                  width: "200px",
                  height: "75px",
                  color: "#4E5259",
                  backgroundColor: "#CDC6C1",
                  fontSize: "25px",
                }}
              >
                {isLastStep ? "Submit" : "Next"}
              </Button>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
