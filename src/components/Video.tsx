import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css'

import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string;

}

export function Video(props: VideoProps) {
    const { data } =  useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data || !data.lesson) {
        return <div className="flex-1 text-[45px] mt-[160px] leading-relaxed"> DevDuque says: "Repetition creates the master" 💪🏽🔥 </div>
    }
    
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                           {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                            <img 
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src={data.lesson.teacher.avatarURL}
                            />
                        
                        <div className="leading-relaxed">
                            <strong className="font-bold text-2xl block"> {data.lesson.teacher.name}</strong>
                            <span className="text-gray-200 text-sm block"> {data.lesson.teacher.bio} </span>
                        </div>
                        </div>
                        ) }
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 
                        text-sm font-bold
                        bg-blue-600
                        flex items-center
                        rounded uppercase 
                        gap-2 justify-center
                        hover:bg-blue-700
                        transition-colors
                        ">
                            <DiscordLogo size={24}/>
                            Discord's Community 
                        </a>
                        <a href="" className="p-4 
                        text-sm font-bold
                        border-blue-500
                        text-blue-500 
                        flex items-center
                        rounded uppercase 
                        gap-2 justify-center
                        hover:bg-blue-500 hover:text-gray-900
                        transition-colors
                        ">
                            <Lightning size={24}/>
                            Challenges
                        </a>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid grid-cols-2">

                    <a 
                    href=""
                    className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                    >
                        <div className="bg-green-700 h-full p-6 flex items-center"> 
                        <FileArrowDown size={40}/> 
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl"> Extras </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Access the extras to speed up your journey 🚀
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a 
                    href=""
                    className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                    >
                        <div className="bg-green-700 h-full p-6 flex items-center"> 
                        <FileArrowDown size={40}/> 
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl"> Exclusive Wallpapers </strong>
                            <p className="text-sm text-gray-200 mt-2">
                            Download wallpapers and customize your desktop 💻
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}