import type { SubmitHandler } from "react-hook-form";
import { useDimensionsForm, type DimensionsValues } from "../../hooks/forms";
import { useEffect } from "react";
import { useWorkspaceContext } from "../../../Core/hooks/useWorkspaceState";

export function DimensionsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, defaultValues },
  } = useDimensionsForm();
  const {
    dimensionsController: [_, setDimensions],
  } = useWorkspaceContext();

  useEffect(() => {
    const found = localStorage.getItem("dims");

    if (!found) {
      localStorage.setItem("dims", JSON.stringify(defaultValues));
    }
  }, []);

  const onSubmit: SubmitHandler<DimensionsValues> = (data) => {
    setDimensions(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span className="label-text">Width</span>
        <input type="number" {...register("width", { required: true })} />
      </label>
      <label>
        <span className="label-text">Height</span>
        <input type="number" {...register("height", { required: true })} />
      </label>
      {!!errors.width && (
        <small className="error">{errors.width.message}</small>
      )}
      {!!errors.height && (
        <small className="error">{errors.height.message}</small>
      )}
      <button type="submit" disabled={!isValid && isDirty}>
        Save
      </button>
    </form>
  );
}
