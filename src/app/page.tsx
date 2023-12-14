import Image from "next/image"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started by editing&nbsp;
                    <code className="font-mono font-bold">
                        src/app/page.tsx
                    </code>
                </p>
            </div>

            <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <a
                href="#"
                className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
            >
                <div className="flex items-center space-x-3">
                    <svg
                        className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                        fill="none"
                        viewBox="0 0 24 24"
                    ></svg>
                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white">
                        New project
                    </h3>
                </div>
                <p className="text-sm text-slate-500 group-hover:text-white">
                    Create a new project from a variety of starting templates.
                </p>
            </a>

            <fieldset className="mx-auto max-w-md bg-white p-8 text-sm shadow">
                <div className="mb-6 border-b border-slate-200 pb-2 text-base font-semibold">
                    Published status
                </div>
                <input
                    id="draft"
                    className="peer/draft form-radio mb-0.5 mr-2 border-slate-300 text-sky-400 focus:ring-sky-300"
                    type="radio"
                    name="status"
                    defaultChecked
                />
                <label
                    className="font-medium peer-checked/draft:text-sky-500"
                    htmlFor="draft"
                >
                    Draft
                </label>{" "}
                <input
                    id="published"
                    className="peer/published form-radio mb-0.5 ml-4 mr-2 border-slate-300 text-sky-400 focus:ring-sky-300"
                    type="radio"
                    name="status"
                />
                <label
                    className="font-medium peer-checked/published:text-sky-500"
                    htmlFor="published"
                >
                    Published
                </label>
                <div className="mt-4 hidden text-gray-500 peer-checked/draft:block">
                    Drafts are only visible to administrators.
                </div>
                <div className="mt-4 hidden text-gray-500 peer-checked/published:block">
                    Your post will be publicly visible on your site.
                </div>
            </fieldset>

            <div className="mx-auto max-w-sm bg-white px-6 pb-5 pt-6 shadow">
                <form>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                            Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="you@example.com"
                        />
                    </label>
                </form>
            </div>

            <form className="flex items-center space-x-6">
                <div className="shrink-0">
                    <Image
                        className="h-16 w-16 rounded-full object-cover"
                        src=""
                        alt="Current profile photo"
                        width={32}
                        height={32}
                    />
                </div>
                <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                        type="file"
                        className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
                    />
                </label>
            </form>

            <div className="-mb-3 mt-4">
                <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
                    <div
                        className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
                        style={{ backgroundPosition: "10px 10px" }}
                    ></div>
                    <div className="relative overflow-auto rounded-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="p-8 pt-7">
                                <p className="mb-2 text-sm font-medium text-slate-500">
                                    Light mode
                                </p>
                                <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5">
                                    <div>
                                        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                                            <svg
                                                className="h-6 w-6 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900">
                                        Writes Upside-Down
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500">
                                        The Zero Gravity Pen can be used to
                                        write in any orientation, including
                                        upside-down. It even works in outer
                                        space.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-900 p-8 pt-7">
                                <p className="mb-2 text-sm font-medium text-slate-400">
                                    Dark mode
                                </p>
                                <div className="rounded-lg bg-slate-800 px-6 py-8 shadow-xl ring-1 ring-slate-900/5">
                                    <div>
                                        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                                            <svg
                                                className="h-6 w-6 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 className="mt-5 text-base font-medium tracking-tight text-white">
                                        Writes Upside-Down
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-400">
                                        The Zero Gravity Pen can be used to
                                        write in any orientation, including
                                        upside-down. It even works in outer
                                        space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Docs{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>
            </div>

            <div className="h-38 fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{" "}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </main>
    )
}
