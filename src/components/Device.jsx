const Device = ({ name, width, height, type, link }) => {
    return (
        <div className="bg-slate-800 rounded-xl shadow-md p-5 flex flex-col items-center">
            {/* Device Info */}
            <h4 className="text-lg font-semibold text-gray-100">{name}</h4>
            <p className="text-sm text-gray-400 mb-4">Type: {type}</p>

            {/* Device Preview */}
            <div
                className="overflow-hidden border border-slate-700 rounded-lg flex items-center justify-center"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    background: "#fff", // force white fallback instead of dark
                }}
            >
                {link ? (
                    <iframe
                        className="w-full h-full"
                        src={link}
                        title={name}
                        style={{
                            border: "none",
                            background: "transparent", // let site set its own bg
                        }}
                    />
                ) : (
                    <p className="text-gray-500 text-sm">No URL entered</p>
                )}
            </div>

            {/* Device Dimensions */}
            <p className="text-lg text-gray-500 mt-3">
                {width} × {height}
            </p>
        </div>
    );
};

export default Device;