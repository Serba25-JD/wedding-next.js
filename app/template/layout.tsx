import React from "react";

export default function TemplateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        {children}
        </>
    )
}