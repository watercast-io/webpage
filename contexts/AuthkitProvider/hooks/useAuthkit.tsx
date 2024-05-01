import { useContext } from "react"
import { AuthkitContext } from "../authkit-provider";

export const useAuthkit = () => {
  const context = useContext(AuthkitContext);
  if (context === undefined) {
    throw new Error("useAuthkit must be used inside AuthkitProvider");
  }

  return context;
};
