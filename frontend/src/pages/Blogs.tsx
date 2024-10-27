import { BlogCard } from "../Compoents/BlogCard";
import { SkeletonBlogCard } from "../Compoents/BlogCardSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
	const { loading, blogs } = useBlogs();
	if (loading) {
		return (
			<div className="bg-slate-100 p-2">
				<SkeletonBlogCard></SkeletonBlogCard>
				<SkeletonBlogCard></SkeletonBlogCard>
				<SkeletonBlogCard></SkeletonBlogCard>
                <SkeletonBlogCard></SkeletonBlogCard>
                <SkeletonBlogCard></SkeletonBlogCard>

			</div>
		);
	}
	return (
		<div className="bg-slate-100 p-2">
			{blogs.map((blog) => (
				<BlogCard
					title={blog.title}
					content={blog.content}
					authorName={blog.author.name}
					date="Dec 3, 2024"
					time="3 Minutes"
                    id = {blog.id}
					key={blog.id}
				></BlogCard>
			))}
		</div>
	);
};
