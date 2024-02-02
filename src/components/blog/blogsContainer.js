// components
import BlogCard from '../shared/card/blogCard'
// dummy data
import blogs from "/public/assect/json/blogs.json"

export default function BlogsContainer() {
    return (
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-5 2xl:px-20 xl:px-0 lg:px-10 md:px-0 sm:px-10 ">
            {
                blogs?.map((blog) => <BlogCard key={blog?.id} blog={blog} />)
            }
        </div>
    )
}
