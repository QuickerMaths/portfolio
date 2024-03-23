'use client'

import React from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ThemeProvider } from 'next-themes'
import { NavigationContextProvider } from '@/context/navigation.context'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

interface ProvidersProps {
    children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
    return (
    <PostHogProvider client={posthog}>
    <NavigationContextProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
        {children}
    </ThemeProvider>
    </NavigationContextProvider>
    </PostHogProvider>
    )
}