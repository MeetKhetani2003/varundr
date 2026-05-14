'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppointmentContextType {
  isModalOpen: boolean;
  openModal: (doctor?: string, service?: string) => void;
  closeModal: () => void;
  initialDoctor: string;
  initialService: string;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialDoctor, setInitialDoctor] = useState('');
  const [initialService, setInitialService] = useState('');

  const openModal = (doctor?: string, service?: string) => {
    setInitialDoctor(doctor || '');
    setInitialService(service || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppointmentContext.Provider value={{ isModalOpen, openModal, closeModal, initialDoctor, initialService }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
}
