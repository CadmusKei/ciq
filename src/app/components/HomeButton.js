

export default function HomeButton({onClick, colour}) {
    return (
        <div className={`w-12 h-12 aspect-square border-neutral-400 rounded-full
        flex items-center justify-center 
        shadow-xl hover:inset-shadow-sm inset-shadow-neutral-600
        bg-linear-to-br from-pink-500 to-blue-400 transition duration-900 hover:duration-300
         group hover:from-blue-400 hover:to-pink-500 `}>
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={` w-6 h-6 fill-neutral-100 group duration-900 transition
                    group-hover:fill-neutral-200 group-hover:duration-300`}
            >
           
            <path fillRule="evenodd" 
            d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" 
            clipRule="evenodd" />

            </svg>
        </div>
    );
}