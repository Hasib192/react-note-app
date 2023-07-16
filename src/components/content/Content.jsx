import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Content = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [note, setNote] = useState("");

  const add_note = () => {
    if (textAreaValue.trim().length === 0) {
      toast.error("Enter your note");
      return;
    }
    setNote(textAreaValue);
    setTextAreaValue("");
  };

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <div className="form-floating my-4">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} value={textAreaValue} onChange={handleTextAreaChange} />
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <button type="button" className="btn btn-primary" onClick={add_note}>
            Submit
          </button>
          <Toaster />
          <div className="mt-4">
            <div className="card">
              <div className="card-body">{note?.length > 0 ? note : "No notes. Type New notes"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
