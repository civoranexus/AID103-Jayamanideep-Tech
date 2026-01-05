import { create } from 'zustand';
import { FarmProfile, DiseaseAnalysis, Alert } from '@/types';

interface FarmStore {
  farmProfile: FarmProfile | null;
  analyses: DiseaseAnalysis[];
  alerts: Alert[];
  setFarmProfile: (profile: FarmProfile) => void;
  addAnalysis: (analysis: DiseaseAnalysis) => void;
  addAlert: (alert: Alert) => void;
  updateAlertStatus: (id: string, status: Alert['status']) => void;
}

export const useFarmStore = create<FarmStore>((set) => ({
  farmProfile: null,
  analyses: [],
  alerts: [],
  setFarmProfile: (profile) => set({ farmProfile: profile }),
  addAnalysis: (analysis) =>
    set((state) => ({ analyses: [analysis, ...state.analyses] })),
  addAlert: (alert) => set((state) => ({ alerts: [alert, ...state.alerts] })),
  updateAlertStatus: (id, status) =>
    set((state) => ({
      alerts: state.alerts.map((alert) =>
        alert.id === id ? { ...alert, status } : alert
      ),
    })),
}));
