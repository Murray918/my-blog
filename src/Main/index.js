import React from 'react'
import BlogForm from './BlogForm'
import { tsPropertySignature } from '@babel/types';

const Main = ({ isPosting, tempPost, blogEntries, toggleIsPosting, children }) => {

    function handleClick(){
        toggleIsPosting()
    }


	return (
		<section>
			<div>{!!isPosting ? <BlogForm /> : <button onClick={handleClick}>Click Me</button>}</div>
            {children}
		</section>
	)
}
export default Main
