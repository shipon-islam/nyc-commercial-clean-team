import BlogListArea from "@/components/blogs/BlogListArea";
import HeroBanner from "@/components/HeroBanner";

export default function Blogs() {
  return (
    <main>
        <HeroBanner title="Blog Grid" pageName="Blogs"/>
        <BlogListArea/>
    </main>
  )
}
