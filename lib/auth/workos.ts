import WorkOS from "@workos-inc/node";
import { env } from "@/env.mjs";

// Initialize the WorkOS client
const workos = new WorkOS(env.WORKOS_API_KEY);

export { workos };