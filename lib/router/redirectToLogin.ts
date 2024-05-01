import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";


type RedirectToLogin = (type?: RedirectType) => void;

export const redirectToLogin: RedirectToLogin = (type?: RedirectType) => {
  redirect("", type);
};
