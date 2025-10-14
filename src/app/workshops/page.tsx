"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import PageContainer from "@/components/formatting/PageContainer";
import LoadingCircle from "@/components/icons/LoadingCircle";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import { useSearchParams, useRouter } from "next/navigation";

function WorkshopsContent() {
  const { workshops } = useWorkshops();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedSession, setSelectedSession] = useState(searchParams.get("session") || "");
  const [page, setPage] = useState(() => {
    const p = parseInt(searchParams.get("page") || "1", 10);
    return Number.isNaN(p) || p < 1 ? 1 : p;
  });

  // ---- Grid & pagination config ----
  const COLS = 3;                 // 3 columns
  const ROWS_PER_PAGE = 3;        // rows per "page" (tweak to taste)
  const PAGE_SIZE = COLS * ROWS_PER_PAGE;
  // Put this near the top of your file (outside the component or inside, above render)
  const truncateText = (str = "", max = 120) =>
  str.length > max ? str.slice(0, max - 1) + "…" : str;


  // Filter workshops based on search query and session
  const filteredWorkshops = (workshops ?? []).filter((workshop) => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSession =
      selectedSession === "" || workshop.session === parseInt(selectedSession, 10);
    return matchesSearch && matchesSession;
  });

  const total = filteredWorkshops.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  // Clamp page if filters change and current page is out of range
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  // Reset to page 1 when filters change (search or session)
  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedSession]);

  // Slice current page items
  const startIdx = (page - 1) * PAGE_SIZE;
  const currentPageItems = filteredWorkshops.slice(startIdx, startIdx + PAGE_SIZE);
  const hasFilteredWorkshops = currentPageItems.length > 0;

  // Update URL parameters when search, session, or page changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (selectedSession) params.set("session", selectedSession);
    if (page > 1) params.set("page", String(page)); // avoid cluttering URL with page=1
    router.replace(`/workshops?${params.toString()}`);
  }, [router, searchQuery, selectedSession, page]);

  // Smooth-scroll to top when page changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  return (
    <PageContainer title="Workshops" background="bg-gradient mask-(--background-image-blurry-3) mask-size-[1400px] mask-top">
      <div className="flex flex-col items-center px-4">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-4 mb-8 w-full max-w-4xl">
          {/* Search Input with icon */}
          <div className="relative w-full mb-4 md:mb-0">
            <img
              src="/icons/search.png"
              alt="Search"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70"
            />
            <input
              type="text"
              placeholder="Search workshops or panels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[rgba(250,250,250,0.4)] p-3 pl-10 rounded-md
                         focus:outline-hidden transition duration-500"
            />
          </div>

          {/* Session Filter */}
          <select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
            className="w-full md:w-1/3 bg-[rgba(250,250,250,0.4)] p-3 rounded-md
                       focus:outline-hidden transition duration-500 font-semibold font-sans"
          >
            <option value="">All Sessions</option>
            <option value="1">Session 1</option>
            <option value="2">Session 2</option>
            <option value="3">Session 3</option>
          </select>
        </div>

        {/* Workshops Grid */}
        {!workshops ? (
          <LoadingCircle />
        ) : hasFilteredWorkshops ? (
          <>
            {/* Wrapping container: relative + group to enable hover fade for arrows */}
            <div className="group relative w-full max-w-[1400px] mx-auto">
            {/* Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {currentPageItems.map((workshop) => {
                const workshopURL = `${workshop.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-${workshop.id}`;

                const queryParams = new URLSearchParams({
                    ...(searchQuery ? { search: searchQuery } : {}),
                    ...(selectedSession ? { session: selectedSession } : {}),
                    ...(page > 1 ? { page: String(page) } : {}),
                }).toString();

                // --- Character limits for a consistent card height ---
                const TITLE_MAX = 60;       // ~2 lines for text-xl
                const DESC_MAX  = 180;      // ~4-5 lines for base text
                const titleText = truncateText(workshop.title, TITLE_MAX);
                const descText  = truncateText(workshop.description, DESC_MAX);

                return (
                    <Link
                    key={workshop.id}
                    href={`/workshops/${encodeURIComponent(workshopURL)}?${queryParams}`}
                    >
                    <div
                        className="bg-[rgba(250,250,250,0.4)] rounded-xl shadow-md 
                                hover:shadow-xl transition-all duration-300 
                                cursor-pointer p-8 flex flex-col h-full"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                            <img
                            src="/icons/megaphone.png"
                            alt="Megaphone"
                            className="w-7 h-7 opacity-80"
                            />
                            <h2 className="text-xl font-semibold text-foreground-primary leading-snug line-clamp-2">
                                {truncateText(workshop.title, 80)}
                            </h2>

                        </div>

                        <div className="text-right whitespace-nowrap flex items-center">
                            <h3 className="text-xs font-bold text-slate-700">
                            Session {workshop.session}
                            </h3>
                        </div>
                        </div>


                        {/* Description – reserve space for ~4–5 lines */}
                        <p className="text-foreground-secondary leading-relaxed min-h-[6.5rem]">
                        {descText}
                        </p>

                        {/* If you later add footer buttons/tags, push them down uniformly */}
                        {/* <div className="mt-auto pt-4">...</div> */}
                    </div>
                    </Link>
                );
                })}
            </div>

            {/* Left Arrow */}
            <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="absolute -left-[3vw] top-1/2 -translate-y-1/2
                        flex items-center justify-center w-10 h-10 rounded-full
                        bg-[rgba(250,250,250,0.4)] 
                        text-slate-700/50 shadow-lg transition
                        hover:scale-110 hover:border-highlight-2-primary
                        disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous page"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5"
                className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            </button>

            {/* Right Arrow */}
            <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="absolute -right-[3vw] top-1/2 -translate-y-1/2
                        flex items-center justify-center w-10 h-10 rounded-full
                        bg-[rgba(250,250,250,0.4)] 
                        text-slate-700/50 shadow-lg transition
                        hover:scale-110 
                        disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next page"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5"
                className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </button>


            </div>


          </>
        ) : (
          <p>No workshops found.</p>
        )}
      </div>
    </PageContainer>
  );
}

export default function Workshops() {
  return (
    <Suspense fallback={<LoadingCircle />}>
      <WorkshopsContent />
    </Suspense>
  );
}
