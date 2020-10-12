import React from "react";
import { Container, CssBaseline } from "@material-ui/core";

import blogStyles from "./style";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  const classes = blogStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="DSC Blogs" categories={categories} />
          <main></main>
        </Container>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </React.Fragment>
    </div>
  );
}
