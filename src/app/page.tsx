import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Loader2 } from "lucide-react"

export default function Home() {
    return (
        <div className="m-10 flex flex-wrap justify-evenly">
            <Button>Button</Button>
            <Button variant="destructive">Button</Button>
            <Button variant="outline">Button</Button>
            <Button variant="secondary">Button</Button>
            <Button variant="ghost">Button</Button>
            <Button>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
        </div>
    )
}
