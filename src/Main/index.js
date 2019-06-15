import React from 'react'
import BlogForm from './BlogForm'
import { tsPropertySignature } from '@babel/types';

const Main = ({ isPosting, blogEntries, toggleIsPosting, children, addEntry}) => {
    
    function handleClick(){
        toggleIsPosting()
    }


	return (
		<section>
			<div>{!!isPosting ? <BlogForm addEntry={addEntry}  /> : <button onClick={handleClick}>Click Me</button>}</div>
            {children}
		</section>
	)
}
export default Main
