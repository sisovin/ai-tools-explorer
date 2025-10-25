'use client'

import React, { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import { Header } from './Header'
import { Footer } from './Footer'
import { SkipToContent } from './SkipToContent'
import { ErrorBoundary } from './ErrorBoundary'
import { cn } from '@/lib/utils'

interface ResponsiveLayoutProps {
    children: React.ReactNode
    className?: string
    showHeader?: boolean
    showFooter?: boolean
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
    children,
    className,
    showHeader = true,
    showFooter = true
}) => {
    const isMobile = useIsMobile()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch by only applying mobile-specific styles after mount
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])



    return (
        <div className="w-full min-h-screen bg-background">
            {/* Skip to content link for accessibility */}
            <SkipToContent />

            {/* Header */}
            {showHeader && <Header />}

            {/* Main Content */}
            <main
                id="main-content"
                className={cn(
                    "flex-1 w-full",
                    className
                )}
            >
                <ErrorBoundary>
                    {children}
                </ErrorBoundary>
            </main>

            {/* Footer */}
            {showFooter && <Footer />}

            {/* Mobile-specific optimizations - only render after mount to avoid hydration issues */}
            {mounted && isMobile && (
                <style jsx global>{`
                    /* Improve touch targets on mobile */
                    button, a, input, select, textarea {
                        min-height: 44px;
                    }

                    /* Better text sizing on mobile */
                    body {
                        font-size: 16px;
                        line-height: 1.5;
                    }

                    /* Prevent zoom on input focus */
                    input[type="text"],
                    input[type="email"],
                    input[type="password"],
                    textarea,
                    select {
                        font-size: 16px;
                    }
                `}</style>
            )}
        </div>
    )
}

export default ResponsiveLayout