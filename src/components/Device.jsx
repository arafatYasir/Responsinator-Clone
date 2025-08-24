const Device = ({ name, width, height, type, link }) => {
    return (
        <div className="text-center">
            <h4>{name}</h4>
            <p>Type: ${type}</p>

            <div className="overflow-hidden border" style={{ width: `${width}px`, height: `${height}px` }}>
                <iframe className="w-full h-full" src={link} frameborder="0"></iframe>
            </div>
        </div>
    );
};

export default Device;