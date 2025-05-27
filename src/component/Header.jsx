import { PanelLeft, PanelLeftClose } from "lucide-react"

export default function Header({ isOpen, toggleNavbar }) {
    return (
        <header className="fixed top-0 left-0 z-60 w-full h-20 bg-black p-5 flex justify-between items-center">
            <button
                onClick={toggleNavbar}
                className="p-2 cursor-pointer text-white bg-black rounded-md flex items-center justify-center hover:bg-zinc-900 transition-all duration-200"
            >
                {isOpen ? <PanelLeftClose size={20} /> : <PanelLeft size={20} />}
            </button>
        </header>
    )
}