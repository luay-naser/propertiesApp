import { create } from "zustand";

interface loginType {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}
interface AuthStore {
  userData: loginType | null;
  setUserData: (data: loginType) => void;
  loadUser: () => void;
}
export const useAuthStore = create<AuthStore>((set) => ({
  userData: null,
  setUserData: (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    set({ userData: data });
  },
  loadUser: () => {
    const userString = localStorage.getItem("user");
    if (!userString) return;
    try {
      const userData: loginType = JSON.parse(userString);
      set({ userData });
    } catch {
      localStorage.removeItem("user");
    }
  },
}));
