"use client";

import { useForm, Controller } from "react-hook-form";
import { Profile } from "@/app/types/profile";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

export const ProfileForm = () => {
  const { control, handleSubmit, reset, formState: { isValid } } = useForm<Profile>({
    defaultValues: {
      name: "",
      country: "",
      foundingYear: "",
      totalPortfolio: "",
      creditRiskScore: "",
      productType: "",
      websiteUrl: "",
      contacts: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: Profile) => {
    console.log(data);
    reset(); 
  };

  const fields: (keyof Profile)[] = [
    "name",
    "country",
    "foundingYear",
    "totalPortfolio",
    "creditRiskScore",
    "productType",
    "websiteUrl",
    "contacts",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-md">
      {fields.map((field) => {
        if (field === "productType") {
          return (
            <Controller
              key={field}
              name={field}
              control={control}
              rules={{ required: "Select a product type" }}
              render={({ field: f, fieldState }) => (
                <>
                  <Select
                    {...f}
                    label="Product Type"
                    options={[
                      { value: "", label: "Select product type" },
                      { value: "Mortgage", label: "Mortgage" },
                      { value: "Private", label: "Private" },
                      { value: "Business", label: "Business" },
                    ]}
                    hasError={fieldState.isTouched && !!fieldState.error}
                    success={fieldState.isDirty && !fieldState.error}
                  />
                  {fieldState.error && (
                    <p className="error-text error-bottom">{fieldState.error.message}</p>
                  )}
                </>
              )}
            />
          );
        }

        const isNumberField = ["totalPortfolio", "creditRiskScore", "foundingYear"].includes(field);
        const fieldLabel = field.charAt(0).toUpperCase() + field.slice(1);
        const numberRules = isNumberField
          ? {
              required: `${fieldLabel} is required`,
              pattern: {
          value: /^\d+(\.\d+)?$/,
          message: `${fieldLabel} must be a number`,
              },
            }
          : { required: `${fieldLabel} is required` };

        const isUrlField = field === "websiteUrl";
        const urlRules = isUrlField
          ? {
              required: "Website URL is required",
              pattern: {
                value: /^(https?:\/\/)?([\w.-]+)+[\w-]+(\/[\w.-]*)*\/?$/,
                message: "Invalid URL",
              },
            }
          : {};

        return (
          <Controller
            key={field}
            name={field}
            control={control}
            rules={{ ...numberRules, ...urlRules }}
            render={({ field: f, fieldState }) => (
              <>
                <Input
                  {...f}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  hasError={!!fieldState.error}
                  success={fieldState.isDirty && !fieldState.error}
                />
                {fieldState.error && (
                  <p className="error-text error-bottom">{fieldState.error.message}</p>
                )}
              </>
            )}
          />
        );
      })}
      <div className="flex justify-end gap-2 mt-4">
        <Button type="reset" onClick={() => reset()}>Clear</Button>
        <Button type="submit" className="btn-primary" disabled={!isValid}>Create Profile</Button>
      </div>
    </form>
  );
};