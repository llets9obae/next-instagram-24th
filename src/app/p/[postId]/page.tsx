import { Suspense } from "react";
import PostDetail from "@/components/post/PostDetail";
import PostDetailSkeleton from "@/components/post/PostDetailSkeleton";
import { getFeedPosts } from "@/lib/data";

export function generateStaticParams() {
  return getFeedPosts().map(({ id }) => ({ postId: id }));
}

async function Content({ params }: Pick<PageProps<"/p/[postId]">, "params">) {
  return <PostDetail standalone postId={(await params).postId} />;
}

// 프로필 페이지처럼 params 를 읽는 부분만 <Suspense> 안에 둬서
// 주소로 들어오면 스켈레톤이 먼저 보이고 내용이 이어서 채워짐
export default function PostPage({ params }: PageProps<"/p/[postId]">) {
  return (
    <Suspense fallback={<PostDetailSkeleton />}>
      <Content params={params} />
    </Suspense>
  );
}
