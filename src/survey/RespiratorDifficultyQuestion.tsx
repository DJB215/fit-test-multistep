import { FormWrapper } from "./FormWrapper";

type RespiratorDifficultyQuestionData = {
  respiratorDifficult: string;
};

type RespiratorDifficultyQuestionProps = RespiratorDifficultyQuestionData & {
  updateFields: (fields: Partial<RespiratorDifficultyQuestionData>) => void;
};

export function RespiratorDifficultyQuestion({
  respiratorDifficult,
  updateFields,
}: RespiratorDifficultyQuestionProps) {
  return (
    <FormWrapper title="Question 4">
      <label htmlFor="respiratorDifficult">
        In the past year, have there been changes in your work duties that have
        made wearing a respirator during work more difficult?
      </label>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            name="respiratorDifficult"
            checked={respiratorDifficult === "Yes"}
            onChange={(e) =>
              updateFields({ respiratorDifficult: e.target.value })
            }
          />
          Yes
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="No"
            name="respiratorDifficult"
            checked={respiratorDifficult === "No"}
            onChange={(e) =>
              updateFields({ respiratorDifficult: e.target.value })
            }
          />
          No
        </label>
      </div>
    </FormWrapper>
  );
}
