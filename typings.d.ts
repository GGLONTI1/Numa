import { defaultUser } from "./context/AuthContext";

interface userDataType {
  fullName: string;
  email: string;
  password: string;
}

interface AuthState {
  user: typeof defaultUser;
  setUser: React.Dispatch<React.SetStateAction<typeof defaultUser>>;
  isGettingUser: boolean;
}
