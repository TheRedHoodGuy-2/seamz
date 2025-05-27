"use client"

import type React from "react"

import { createContext, useContext } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toast, ToastContainer } from "@/components/ui/toast"

const ToastContext = createContext<ReturnType<typeof useToast> | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toastUtils = useToast()

  return (
    <ToastContext.Provider value={toastUtils}>
      {children}
      <ToastContainer>
        {toastUtils.toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={toastUtils.removeToast} />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider")
  }
  return context
}
