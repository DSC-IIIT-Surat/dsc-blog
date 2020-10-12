import React from "react";
import { Container, CssBaseline } from "@material-ui/core";

import Header from "./components/Header";

// Section of Blog Categories in Header
const categories = [
  { title: "Web Development", url: "#" },
  { title: "App Development", url: "#" },
  { title: "Machine Learning", url: "#" },
  { title: "Data Science", url: "#" },
  { title: "Cloud Computing", url: "#" },
  { title: "Cyber Security", url: "#" },
  { title: "Embedded Systems Development", url: "#" },
];

export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="DSC Blogs" categories={categories} />
        <main></main>
      </Container>
    </React.Fragment>
  );
}
