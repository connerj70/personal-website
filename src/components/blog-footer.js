import React from 'react'
import {Link} from "gatsby"

const BlogFooter = () => {
    return (
        <div className="w-full h-20 bg-black p-4">
            <ul className="flex-initial flex-col text-white content-center justify-center">
                <Link to="/"><li className="text-xl">CONNER<span className="text-c-orange">JENSEN</span></li></Link>
                <li className="text-xs"><span className="text-c-orange">*</span>This blog is produced with the assistance of urlong tea 🍵</li>
            </ul>
        </div>
    )
}

export default BlogFooter