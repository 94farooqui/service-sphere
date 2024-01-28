import React, { useEffect, useState } from "react";
import { addComment, getBugComments } from "../../helpers/commentHelper";

const defaultComment = {
  message: "",
};

const BugConversations = ({ bug }) => {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState(defaultComment);
  const [allComments, setAllComments] = useState();

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const added = addComment(comment, bug._id);
    if (added) {
      setComment(defaultComment);
      setShowComment(false);
      gettingAllComments(bug._id)
    }
  };

  const gettingAllComments = async (bugId) => {
    const data = await getBugComments(bugId);
    setAllComments(data);
  };

  useEffect(() => {
    //setComment({...comment, bugId:bug._id})
    gettingAllComments(bug._id);
  }, [allComments]);
  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-xl font-bold text-slate-700 mb-2">Conversations</h4>
        <button
          onClick={() => setShowComment(true)}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-slate-200 p-2 rounded-md shadow-sm text-sm"
        >
          Add Comment
        </button>
      </div>
      {showComment && (
        <div className="grid grid-cols-1 py-4">
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
                className="w-full bg-white rounded-lg p-4 resize-none focus:ring focus:ring-green-100 focus:outline-none"
                rows={3}
              />
            </div>
            <div className="mt-4 flex gap-2 self-end">
              <button
                onClick={() => setShowComment(false)}
                className="bg-red-800 w-24 text-slate-200 p-2 rounded-md shadow-sm text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-800/95 w-24 text-slate-200 p-2 rounded-md shadow-sm text-sm"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      {allComments && (!allComments.length > 0 ? (
        <p>No comments</p>
      ) : (
        <div className="flex flex-col gap-4 mt-4">
          {allComments.map((com) => (
            <div
              key={com._id}
              className="bg-white grid grid-cols-2 gap-1 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-semibold text-sm">{com.user.firtname}</h4>
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
