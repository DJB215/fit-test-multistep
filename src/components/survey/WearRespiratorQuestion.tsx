import Radio from "@mui/material/Radio";
import { FormWrapper } from "./FormWrapper";
import Stack from "@mui/material/Stack";

type WearRespiratorQuestionData = {
  wearRespirator: string;
};

type WearRespiratorQuestionProps = WearRespiratorQuestionData & {
  updateFields: (fields: Partial<WearRespiratorQuestionData>) => void;
};

export function WearRespiratorQuestion({
  wearRespirator,
  updateFields,
}: WearRespiratorQuestionProps) {
  return (
    <FormWrapper title="Question 3">
      <Stack direction="column" spacing={2}>
        <div
          style={{
            padding: "10px",
            maxWidth: "500px",
            fontSize: "18px",
            justifyContent: "center",
          }}
        >
          In the past year, have you experienced any issues while wearing a
          respirator?
        </div>
        <div
          style={{ padding: "10px", alignItems: "center", fontSize: "50px" }}
        >
          <div style={{ fontSize: "20px" }}>
            No
            <Radio
              checked={wearRespirator === "No"}
              onChange={(e) => updateFields({ wearRespirator: e.target.value })}
              value="No"
              name="wearRespirator"
              required
            />
            Yes
            <Radio
              checked={wearRespirator === "Yes"}
              onChange={(e) => updateFields({ wearRespirator: e.target.value })}
              value="Yes"
              name="wearRespirator"
              required
            />
          </div>
        </div>
      </Stack>
    </FormWrapper>
  );
}
