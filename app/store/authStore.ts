import {create} from 'zustand';
interface LoginState {
  email: string;
  password: string;
}
interface authStore{
    userData:LoginState | null;
    setUserData: (data:LoginState) => void;
    
}
export const useAuthStore = create<authStore>((set) => ({
  userData: null,
  setUserData: (data:LoginState) => set(() => ({userData: data})),
}));