const PageProgressIndicator = ({ currentPage, totalPages }) => {
    return (
        <div className="flex items-center justify-center space-x-0">
            {Array.from({ length: totalPages }, (_, index) => (
                <div key={index} className="flex items-center">

                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${index + 1 === currentPage
                            ?`bg-[#6C47DB] text-white`
                            : `border-2 border-[#6C47DB] text-[#6C47DB]`
                            }`}
                    >
                        {index + 1}
                    </div>

                    {index < totalPages - 1 && (
                        <hr className={`w-6 h-[1px] bg-[#6C47DB]`}></hr>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PageProgressIndicator;
