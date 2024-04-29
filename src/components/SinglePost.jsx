import { useEffect, useState } from "react"
import { sanityClient } from "../sanity/client"
import { useParams } from "react-router-dom"
import SanityBlockContent from "@sanity/block-content-to-react"

export default function SinglePost() {

    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams()

    async function fetchSinglePost() {
        const data = await sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name
        }`)
        setSinglePost(data[0])
    }

    useEffect(() => {
        fetchSinglePost()
    }, [slug])

    if (!singlePost) return <p>Loading...</p>

    return (
        <>
        <article className="singlePost">
            <header>
                <h1>{singlePost.title}</h1>
                <img src={singlePost.mainImage.asset.url} alt="" />
                <span>Written by: {singlePost.name}</span>
            </header>
            <div className="singlePostContent">
                <SanityBlockContent 
                blocks={singlePost.body} 
                projectId="6m8515fq" 
                dataset="production"/>
            </div>
        </article>

        </>
    )
}