const Alert = () => {
    return (
        <div className="fixed flex justify-center items-center w-screen h-screen z-20 backdrop-blur-sm">
            <div id="alert-box" className="bg-coffee-400 fixed z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 flex flex-col justify-center items-center rounded-2xl border-2 border-coffee-600">
                <p id="alert-text" className="text-2xl align-middle mb-5 text-coffee-900">Przykładowy tekst alertu</p>
                <button id="alert-btn" className="text-coffee-100 p-1 text-2xl bg-coffee-600 border-2 border-coffee-700 w-2/3 rounded-3xl hover:bg-coffee-800 transition" type="submit">Ok</button>
            </div>
        </div>
    );
};

export default Alert;