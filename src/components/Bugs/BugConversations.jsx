import React, { useEffect, useState } from "react";
import { addComment, getBugComments } from "../../helpers/commentHelper";
import { FaCommentMedical } from "react-icons/fa";

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
                className="w-full bg-slate-100 rounded-lg p-4 resize-none focus:ring-1 focus:ring-slate-200 focus:outline-none"
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
              <button
                type="submit"
                className="button-primary"
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
        <div className="flex flex-col full-border rounded-lg overflow-hidden mt-4">
          {allComments.map((com) => (
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
