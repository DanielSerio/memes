import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface DimensionsValues {
  width: number;
  height: number;
}

/**
 * Returns a form hook for managing width and height values within specified constraints.
 */
export function useDimensionsForm() {
  const existing = localStorage.getItem("dims");
  const { width, height } = JSON.parse(
    existing ?? '{ "width": null, "height": null }'
  );

  return useForm<DimensionsValues>({
    defaultValues: {
      width: width ?? 768,
      height: height ?? 768,
    },
    reValidateMode: "onBlur",
    mode: "onChange",
    resolver: zodResolver(
      z.object({
        width: z.coerce.number().int().positive().gte(120).lte(1920),
        height: z.coerce.number().int().positive().gte(120).lte(1920),
      })
    ),
  });
}
