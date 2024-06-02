const Alert = () => {
    return (
        <div className="fixed flex justify-center items-center w-screen h-screen z-20 backdrop-blur-sm">
            <div id="alert-box" className="bg-coffee-600 fixed z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 flex flex-col justify-center items-center rounded-2xl border-2 border-coffee-200">
                <p id="alert-text" className="text-xl align-middle mb-2 text-stone-200">Przykładowy tekst alertu</p>
                <button id="alert-btn" className="text-2xl bg-coffee-200 w-2/3 rounded-3xl hover:bg-coffee-400" type="submit">Ok</button>
            </div>
        </div>
    );
};

export default Alert;