import Stack from "@mui/material/Stack";
import { FormWrapper } from "./FormWrapper";
import Radio from "@mui/material/Radio";

type WeightQuestionData = {
  weight: string;
};

type WeightQuestionProps = WeightQuestionData & {
  updateFields: (fields: Partial<WeightQuestionData>) => void;
};

export function WeightQuestion({ weight, updateFields }: WeightQuestionProps) {
  return (
    <FormWrapper title="Question 2">
      <Stack direction="column" spacing={2}>
        <div
          style={{
            padding: "10px",
            maxWidth: "500px",
            fontSize: "18px",
            justifyContent: "center",
          }}
        >
          In the past year, have you gained or lost 10 pounds?
        </div>
        <div
          style={{ padding: "10px", alignItems: "center", fontSize: "50px" }}
        >
          <div style={{ fontSize: "20px" }}>
            No
            <Radio
              checked={weight === "No"}
              onChange={(e) => updateFields({ weight: e.target.value })}
              value="No"
              name="healthChanges"
              required
            />
            Yes
            <Radio
              checked={weight === "Yes"}
              onChange={(e) => updateFields({ weight: e.target.value })}
              value="Yes"
              name="healthChanges"
              required
            />
          </div>
        </div>
      </Stack>
    </FormWrapper>
  );
}
