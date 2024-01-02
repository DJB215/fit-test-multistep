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
      <div>
        <label htmlFor="healthChanges">
          In the past year, have you experienced any significant changes to your
          health affecting your ability to wear a respirator?
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            name="healthChanges"
            checked={healthChanges === "Yes"}
            onChange={(e) => updateFields({ healthChanges: e.target.value })}
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="No"
            name="healthChanges"
            checked={healthChanges === "No"}
            onChange={(e) => updateFields({ healthChanges: e.target.value })}
          />
          No
        </label>
      </div>
    </FormWrapper>
  );
}
