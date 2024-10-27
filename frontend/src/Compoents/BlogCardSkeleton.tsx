export const SkeletonBlogCard = () => {
    return (
        <div className="flex p-4 mb-4 bg-white rounded-lg shadow animate-pulse space-x-4 max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-2">
            {/* Skeleton Avatar */}
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            
            {/* Skeleton Text Container */}
            <div className="flex-1 space-y-3">
                {/* Author Name and Date */}
                <div className="flex items-center space-x-2">
                    <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                    <div className="w-1/4 h-3 bg-gray-200 rounded"></div>
                </div>
                
                {/* Title Placeholder */}
                <div className="w-1/2 h-5 bg-gray-300 rounded"></div>

                {/* Content Preview Lines */}
                <div className="space-y-1">
                    <div className="w-full h-3 bg-gray-200 rounded"></div>
                    <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
                    <div className="w-4/6 h-3 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    );
};
