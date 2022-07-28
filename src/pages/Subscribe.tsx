import { useState, FormEvent } from "react";

import { useNavigate } from "react-router-dom";

import { Logo } from "../components/Logo";

import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber] = useCreateSubscriberMutation()
    
    function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        createSubscriber({
            variables: {
                name, 
                email,
            }
        })
        navigate('/event')
    }
 

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight"> Build an <strong className="text-blue-500">application</strong> with <strong className="text-blue-500">React</strong></h1>
                    <p className="mt-4 text-gray-200 leading-relaxed"> In just one week you will master one of the most used technologies in the world </p>
                </div>

                <div className="p-8 bg-gray-700 border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block"> Sign Up for free</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                        className="bg-gray-900 rounded px-5 h-14" 
                        type="text" 
                        placeholder="Your name" 
                        onChange={event => setName(event.target.value)}
                        />
                        <input 
                        className="bg-gray-900 rounded px-5 h-14" 
                        type="email" 
                        placeholder="Your email" 
                        onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                        type="submit"
                        className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
                        > 
                            Secure your spot
                        </button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/mockup.png" className="mt-10" alt="" />
        </div>
    )
}