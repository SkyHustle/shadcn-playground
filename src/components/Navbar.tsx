import React from "react"
import NavigationMenuDemo from "./NavigationMenuDemo"
import { ModeToggle } from "./ui/mode-toggle"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background px-4 py-2">
            <NavigationMenuDemo />
            <ModeToggle />
        </nav>
    )
}
