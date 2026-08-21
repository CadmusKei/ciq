

export default function Button() {
    return (
        <div className="w-10 h-10 border-2 rounded-lg border-neutral-400
        shadow-2xl shadow-black hover:border-neutral-300 transition duration-300
        flex items-center justify-center">
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 fill-neutral-400
                    hover:fill-neutral-300 transition duration-200`}
            >
                <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
}