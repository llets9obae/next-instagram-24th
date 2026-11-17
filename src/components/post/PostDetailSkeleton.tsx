// 게시물 상세를 불러오는 동안 보여줄 회색 자리표시
// PostDetail 과 같은 배치(왼쪽 사진 / 오른쪽 작성자·본문·댓글·버튼)라서 내용이 채워져도 화면이 크게 흔들리지 않음
// 모달(@modal)과 주소로 바로 연 상세 페이지(p/[postId]) 둘 다에서 사용
export default function PostDetailSkeleton() {
  return (
    <article className="post-detail mx-auto max-w-5xl">
      <span role="status" className="sr-only">게시물 불러오는 중</span>
      <div
        aria-hidden
        className="grid overflow-hidden rounded-sm border-neutral-200 motion-safe:animate-pulse md:grid-cols-[5fr_4fr] md:border"
      >
        {/* 사진 */}
        <div className="aspect-square bg-neutral-200" />

        <div className="flex min-h-0 min-w-0 flex-col">
          {/* 작성자 */}
          <div className="flex items-center gap-3 border-b border-neutral-200 p-4">
            <div className="size-9 shrink-0 rounded-full bg-neutral-200" />
            <div className="h-4 w-28 rounded bg-neutral-200" />
          </div>

          {/* 본문 */}
          <div className="space-y-2 p-4">
            <div className="h-3.5 w-11/12 rounded bg-neutral-200" />
            <div className="h-3.5 w-3/5 rounded bg-neutral-200" />
          </div>

          {/* 댓글 */}
          <div className="flex-1 space-y-4 px-4 pb-4">
            {["w-3/4", "w-1/2", "w-2/3"].map((width) => (
              <div key={width} className="flex items-center gap-3">
                <div className="size-8 shrink-0 rounded-full bg-neutral-100" />
                <div className={`h-3 rounded bg-neutral-100 ${width}`} />
              </div>
            ))}
          </div>

          {/* 좋아요·댓글 버튼, 좋아요 수, 날짜 */}
          <div className="space-y-2.5 border-t border-neutral-200 p-4">
            <div className="flex gap-3">
              <div className="size-6 rounded-full bg-neutral-200" />
              <div className="size-6 rounded-full bg-neutral-200" />
            </div>
            <div className="h-3.5 w-24 rounded bg-neutral-200" />
            <div className="h-3 w-20 rounded bg-neutral-100" />
          </div>
        </div>
      </div>
    </article>
  );
}
