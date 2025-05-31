"use client";
import { useState } from "react";

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-1 grid-rows-[auto, 1fr, auto] h-full">
            <header className="flex justify-between p-4">
                <h1>Site Logo</h1>
                <button
                    className="h-5 w-5 flex flex-col justify-between cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <div className="h-0.5 bg-cyan-500 w-full"></div>
                    <div className="h-0.5 bg-cyan-500 w-full"></div>
                    <div className="h-0.5 bg-cyan-500 w-full"></div>
                </button>
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-black text-white opacity-70">
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            X
                        </button>
                        <ul>
                            <li>Nav Item 1</li>
                            <li>Nav Item 2</li>
                            <li>Nav Item 3</li>
                            <li>Nav Item 4</li>
                            <li>Nav Item 5</li>
                        </ul>
                    </div>
                )}
            </header>
            <main>
                <div className="p-4">
                    <ul className="grid grid-cols-1 gap-4">
                        <li>
                            <img
                                src="https://cdn.pixabay.com/photo/2025/04/19/18/20/goose-9544312_640.jpg"
                                alt="photo of a duck"
                            />
                        </li>
                        <li>
                            <img
                                src="https://cdn.pixabay.com/photo/2025/04/19/18/20/goose-9544312_640.jpg"
                                alt="photo of a duck"
                            />
                        </li>
                        <li>
                            <img
                                src="https://cdn.pixabay.com/photo/2025/04/19/18/20/goose-9544312_640.jpg"
                                alt="photo of a duck"
                            />
                        </li>
                        <li>
                            <img
                                src="https://cdn.pixabay.com/photo/2025/04/19/18/20/goose-9544312_640.jpg"
                                alt="photo of a duck"
                            />
                        </li>
                        <li>
                            <img
                                src="https://cdn.pixabay.com/photo/2025/04/19/18/20/goose-9544312_640.jpg"
                                alt="photo of a duck"
                            />
                        </li>
                        <li>
                            <img
                                src="https://cdn.pixabay.com/photo/2025/04/19/18/20/goose-9544312_640.jpg"
                                alt="photo of a duck"
                            />
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="p-4 text-center">
                <p>
                    &copy; {new Date().getFullYear()} created by Terrance Corley
                </p>
            </footer>
        </div>
    );
}
