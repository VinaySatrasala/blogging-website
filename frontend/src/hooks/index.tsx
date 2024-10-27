import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
interface Blog{
    title: string,
    content: string,
    id: string,
    author: {
        name: string
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/blog/bulk`,
            {
                headers : {
                    Authorization : "Bearer "+localStorage.getItem("jwt")
                }
            }
        )
            .then((response) => {
                setBlogs(response.data);
                setLoading(false);
            })
    },[])

    return {
        loading,blogs
    }
}

export const useBlog = (id : string) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/blog/id/`+id,
            {
                headers : {
                    Authorization : "Bearer "+localStorage.getItem("jwt")
                }
            }
        )
            .then((response) => {
                setBlog(response.data);
                setLoading(false);
            })
    },[])
    // console.log("blog" + blog);
    return {
        loading,blog
    }
}

