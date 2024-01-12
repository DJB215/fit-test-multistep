import { Radio, Stack } from "@mui/material";
import { FormWrapper } from "./FormWrapper";

type HealthChangesQuestionData = {
  healthChanges: string;
};

type HealthChangesQuestionProps = HealthChangesQuestionData & {
  updateFields: (fields: Partial<HealthChangesQuestionData>) => void;
};

export function HealthChangesQuestion({
  healthChanges,
  updateFields,
}: HealthChangesQuestionProps) {
  return (
    <FormWrapper title="Question 1">
      <Stack direction="column" spacing={2}>
        <div
          style={{
            padding: "10px",
            maxWidth: "500px",
            fontSize: "18px",
            justifyContent: "center",
            color: "#152456",
            fontFamily: "museo-sans",
            fontWeight: "500",
            fontStyle: "normal",
            marginBottom: "23px",
          }}
        >
          In the past year, have you experienced any significant changes to your
          health affecting your ability to wear a respirator?
        </div>
        <div
          style={{
            padding: "10px",
            alignItems: "center",
            fontSize: "20px",
            color: "#152456",
            fontFamily: "museo-sans",
            fontWeight: "500",
            fontStyle: "normal",
          }}
        >
          <div
            style={{ fontSize: "20px", color: "#152456", marginBottom: "47px" }}
          >
            No
            <Radio
              checked={healthChanges === "No"}
              onChange={(e) => updateFields({ healthChanges: e.target.value })}
              value="No"
              name="healthChanges"
              style={{ marginRight: "50px" }}
              required
            />
            Yes
            <Radio
              checked={healthChanges === "Yes"}
              onChange={(e) => updateFields({ healthChanges: e.target.value })}
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
