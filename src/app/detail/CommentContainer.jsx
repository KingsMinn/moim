import { Button } from "../../components/ui/button";

export default function CommentContainer({ commentList, itemId }) {
  const parsedResult = JSON.parse(commentList);

  return (
    <div>
      <form action="/api/comment/new" method="POST">
        <input readOnly name="postId" id="postId" value={itemId} />
        <textarea name="content" id="content" placeholder="댓글 입력하쇼" />
        <Button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
            />
          </svg>
        </Button>
      </form>
      {parsedResult?.comments.map((v) => (
        <div>
          <p>{v.userName}</p>
          <p>{v.content}</p>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                fill="currentColor"
                d="M12.001 4.529a6 6 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a4 4 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454"
              />
            </svg>
            {v.likes}
          </button>
          <p>{v.createdAt}</p>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </div>
      ))}
    </div>
  );
}
