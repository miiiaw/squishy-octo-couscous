import { sanityClient } from "../sanity/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [postData, setPost] = useState([]);

  //Kan flyttes til Sanity Services-mappe. Se projects-fil for annen struktur.
  async function fetchPosts() {
    const data = await sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
    }`);
    setPost(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <section className="postsGrid">
        <h1>Blog posts page</h1>
        <h2>Welcome to my page of blog posts</h2>
        {postData.map((post, index) => (
          <article className="postCards" key={index}>
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
              <h3>{post.title}</h3>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
