export default function Home() {
    return (
        <div className="grid grid-cols-1 grid-rows-[auto, 1fr, auto] h-full">
            <header className="flex justify-between p-4">
                <h1>Site Logo</h1>
                <button>X</button>
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
