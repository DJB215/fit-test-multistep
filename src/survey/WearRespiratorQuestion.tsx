import { FormWrapper } from "./FormWrapper";

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
      <label htmlFor="wearRespirator" className="form-label">
        In the past year, have you experienced any issues while wearing a
        respirator?
      </label>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            name="wearRespirator"
            checked={wearRespirator === "Yes"}
            onChange={(e) => updateFields({ wearRespirator: e.target.value })}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="No"
            name="wearRespirator"
            checked={wearRespirator === "No"}
            onChange={(e) => updateFields({ wearRespirator: e.target.value })}
          />
          No
        </label>
      </div>
    </FormWrapper>
  );
}
