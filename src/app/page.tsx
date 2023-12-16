import Image from "next/image"

export default function Home() {
    return (
        <div className="-mb-3 mt-4">
            <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
                <div
                    className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
                    style={{ backgroundPosition: "10px 10px" }}
                ></div>
                <div className="relative overflow-auto rounded-xl p-8">
                    <div className="bg-stripes-fuchsia grid grid-cols-4 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg brightness-50">
                            01
                        </div>
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg brightness-75">
                            02
                        </div>
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg brightness-100">
                            03
                        </div>
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg brightness-150">
                            04
                        </div>
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">
                            05
                        </div>
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">
                            06
                        </div>
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">
                            07
                        </div>
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">
                            08
                        </div>
                        <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">
                            09
                        </div>
                        <span className="relative inline-flex">
                            <button
                                type="button"
                                className="inline-flex cursor-not-allowed items-center rounded-md bg-white px-4 py-2 text-sm font-semibold leading-6 text-sky-500 shadow ring-1 ring-slate-900/10 transition duration-150 ease-in-out dark:bg-slate-800 dark:ring-slate-200/20"
                                disabled
                            >
                                Transactions
                            </button>
                            <span className="absolute right-0 top-0 -mr-1 -mt-1 flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                            </span>
                        </span>
                        <div className="relative inline-flex">
                            <button
                                type="button"
                                className="inline-flex cursor-not-allowed items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-indigo-400"
                                disabled
                            >
                                <svg
                                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Processing...
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
            </div>
        </div>
    )
}
