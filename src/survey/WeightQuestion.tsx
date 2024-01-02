import { FormWrapper } from "./FormWrapper";

type WeightQuestionData = {
  weight: string;
};

type WeightQuestionProps = WeightQuestionData & {
  updateFields: (fields: Partial<WeightQuestionData>) => void;
};

export function WeightQuestion({ weight, updateFields }: WeightQuestionProps) {
  return (
    <FormWrapper title="Question 2">
      <label htmlFor="weight">
        In the past year, have you gained or lost 10 pounds?
      </label>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            name="weight"
            checked={weight === "Yes"}
            onChange={(e) => updateFields({ weight: e.target.value })}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="No"
            name="weight"
            checked={weight === "No"}
            onChange={(e) => updateFields({ weight: e.target.value })}
          />
          No
        </label>
      </div>
    </FormWrapper>
  );
}
