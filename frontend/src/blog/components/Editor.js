import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const useStyles = makeStyles({
  editingArea: {
    height: "80vh",
  },
});
export default function Editor() {
  const classes = useStyles();
  const [value, setValue] = useState("");

  Editor.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <ReactQuill
      theme={"snow"}
      onChange={setValue}
      value={value}
      modules={Editor.modules}
      formats={Editor.formats}
      placeholder={"Go ahead, write something..."}
    >
      <div className={classes.editingArea}></div>
    </ReactQuill>
  );
}
