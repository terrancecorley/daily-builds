import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Page2() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* First column */}
            <div className="flex-1 bg-black text-white flex flex-col items-center justify-center p-8">
                <h1 className="text-6xl font-bold mb-4">LOGO</h1>
                <p className="text-xl text-center">Your Gateway to Amazing Experiences</p>
            </div>

            {/* Second column */}
            <div className="flex-1 bg-white flex items-center justify-center p-8">
                <form className="w-full max-w-md space-y-4">
                    <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
                    <div className="space-y-2">
                        <label
                            htmlFor="username"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Username
                        </label>
                        <Input type="text" id="username" placeholder="Enter your username" className="w-full" />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Password
                        </label>
                        <Input type="password" id="password" placeholder="Enter your password" className="w-full" />
                    </div>
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

