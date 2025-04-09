
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useUrlSearchParam = (
  paramName: string,
  setter: (value: string) => void
) => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const paramValue = searchParams.get(paramName);
    if (paramValue) {
      setter(paramValue);
    }
  }, [searchParams, paramName, setter]);
};
