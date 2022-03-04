import { createContext } from "react";


/**
 * Represents context passed down for ProfileCard to avoid parameter drilling
 */
export const ProfileCardContext = createContext({ name:"",title:"",bio:"",image:"" });