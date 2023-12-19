import React from "react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo"

export default function CardsChat() {
    return (
        // create a sticky nav bar
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background px-4 py-2">
            <NavigationMenuDemo />
            <ModeToggle />
        </nav>
    )
}
