import { createContext } from "react";
import type { User } from "./Demo";

export const DashboardContext = createContext<User | undefined>(undefined)

