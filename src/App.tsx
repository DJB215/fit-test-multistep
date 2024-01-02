import { FormEvent, useState } from "react";
import { Confirmation } from "./survey/Confirmation";
import { HealthChangesQuestion } from "./survey/HealthChangesQuestion";
import { RespiratorDifficultyQuestion } from "./survey/RespiratorDifficultyQuestion";
import { WearRespiratorQuestion } from "./survey/WearRespiratorQuestion";
import { WeightQuestion } from "./survey/WeightQuestion";
import { useMultistepForm } from "./useMultistepForm";

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
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
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
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button onClick={onSubmit} type="button">
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
