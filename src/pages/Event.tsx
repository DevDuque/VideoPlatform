import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {
    const { slug } = useParams<{slug: string}>()
    
    return (
    <div className="flex flex-col min-h-screen">
        <Header />
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug} /> : <div className="flex-1 text-[45px] mt-[160px] leading-relaxed"> PUT THE PHONE DOWN AND GO LEARN SOMETHING 📚
                </div>}
                <Sidebar />
            </main>
    </div>
    )
}