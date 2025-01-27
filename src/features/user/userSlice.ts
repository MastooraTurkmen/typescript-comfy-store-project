import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useToast } from "../../hooks/use-toast";
export type User = {
  username: string;
  jwt: string;
};

type UserState = {
  user: User | null;
};

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  if (!user) return null;
  return JSON.parse(user);
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { toast } = useToast();

      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));

      if (user.username === "demo user") {
        toast({ description: `Welcome Guest User` });
        return;
      }

      toast({ description: `Login successful` });
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
