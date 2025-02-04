'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="grid grid-cols-2 h-screen">
            <div className="bg-zinc-800 text-white grid place-items-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Cool Logo
                </h1>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    A cool headline
                </h2>
            </div>
            <div className="grid gap-2 place-content-center h-full">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button onClick={() => alert('Have a great day :)')}>Sign in</Button>
            </div>
        </div>
    );
}
