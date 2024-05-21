const Logo = () => {
    return (
        <div className="inline-flex items-center space-x-2 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            <span className="text-xl font-bold text-red-600">Rapid Pass</span>
        </div>
    );
};

export default Logo;
