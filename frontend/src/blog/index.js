import React from "react";
import { Container, CssBaseline, Grid } from "@material-ui/core";

import blogStyles from "./style";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainFeaturedBlog from "./components/MainFeaturedBlog";

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

// Featured Blog Post
const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

export default function Blog() {
  const classes = blogStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="DSC Blogs" categories={categories} />
          <main>
            <MainFeaturedBlog post={mainFeaturedPost} />
            {/* <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedBlog key={post.title} post={post} />
              ))}
            </Grid> */}
          </main>
        </Container>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </React.Fragment>
    </div>
  );
}
