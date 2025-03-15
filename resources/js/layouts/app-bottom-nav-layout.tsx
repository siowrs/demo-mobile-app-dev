import { ReactNode } from 'react';

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

export function AppBottomNavLayout({
    children,
    className,
    ...props
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`bg-sidebar sticky bottom-0 max-w-full border-t-1 ${className}`}>
            {children}
        </div>
    );
}
