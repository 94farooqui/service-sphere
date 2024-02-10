import React, { useEffect, useState } from "react";
import { addComment, getBugComments } from "../../helpers/commentHelper";
import { FaCommentMedical } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";

const defaultComment = {
  message: "",
};

const BugConversations = ({id}) => {
  //to show or hide the add comment box
  console.log(id);
  const [showComment, setShowComment] = useState(false);
  //new comment
  const [comment, setComment] = useState(defaultComment);

  const {
    data: comments,
    isLoading,
    error: queryError,
    refetch : refetchComments
  } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => getBugComments(id),
  });

  const mutatation = useMutation({
    mutationFn: () => addComment(comment, id),
    onSuccess: () => {
      setComment(defaultComment);
      setShowComment(false);
      refetchComments()
    },
    onError: () => {
      console.log("Unable to add comment");
    },
  });

 
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log("ID from submit", id)
    mutatation.mutate(comment, id);
  };

  useEffect(() => {

  }, []);
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h4 className="section-head">Conversations</h4>
        <button
          onClick={() => setShowComment(true)}
          className="drop-shadow-sm text-slate-600 border self-center px-2 py-2 rounded-md shadow-sm font-bold"
        >
          <FaCommentMedical />
        </button>
      </div>
      {showComment && (
        <div className=" grid grid-cols-1 py-4">
          <form
            onSubmit={(event) => handleCommentSubmit(event)}
            className="flex flex-col"
          >
            <div className="">
              <textarea
                name="message"
                placeholder="Comment"
                onChange={(e) =>
                  setComment({ ...comment, message: e.target.value })
                }
                className="w-full text-slate-600 bg-slate-100 rounded-lg p-4 resize-none focus:ring-1 focus:ring-slate-200 focus:outline-none"
                rows={3}
              />
            </div>
            <div className="mt-4 flex gap-2 self-end">
              <button
                onClick={() => setShowComment(false)}
                className="button-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="button-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      {comments &&
        (!comments.length > 0 ? (
          <p>No comments</p>
        ) : (
          <div className="flex flex-col full-border rounded-lg overflow-hidden mt-4">
            {comments.map((com) => (
              <div
                key={com._id}
                className="bg-white grid grid-cols-2 gap-1 p-4 shadow-sm border-b border-slate-200 text-slate-600"
              >
                <h4 className="font-semibold text-sm">Mubasshir</h4>
                {/* <p className='text-sm text-slate-400 text-end'>{com.time.toLocaleString()}</p> */}
                <p className="col-span-2">{com.message}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default BugConversations;
