import React from 'react';

const Popup = ({children, title, showPopup, setShowPopup, showFooter = true}) => {
    return (<>
        {showPopup ? (<>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex  justify-between rounded-t px-10 pt-5 items-center">
                            <h3 className="text-sm font-semibold text-gray-400 ">{title}</h3>
                            <button
                                className="bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowPopup(false)}>
                    <span
                        className="flex justify-center items-center bg-transparent text-slate-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative px-6 pb-6 flex-auto">
                            {children}
                        </div>
                        {/*footer*/}
                        {showFooter && <div
                            className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowPopup(false)}
                            >
                                Close
                            </button>
                        </div>

                        }
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>) : null}
    </>);
};

export default Popup;
