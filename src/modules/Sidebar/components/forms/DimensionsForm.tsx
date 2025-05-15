import type { SubmitHandler } from "react-hook-form";
import { useDimensionsForm, type DimensionsValues } from "../../hooks/forms";
import { useEffect } from "react";

export function DimensionsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, defaultValues },
  } = useDimensionsForm();

  useEffect(() => {
    const found = localStorage.getItem("dims");

    if (!found) {
      localStorage.setItem("dims", JSON.stringify(defaultValues));
    }
  }, []);

  const onSubmit: SubmitHandler<DimensionsValues> = (data) => {
    localStorage.setItem("dims", JSON.stringify(data));
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
