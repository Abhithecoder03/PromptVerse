'use client'
import React from 'react'
import HoverCard from './HoverCard';
import AnimatedSearchBar from './AnimatedSearchBar';
import { useState,useEffect } from 'react';
const Feed = () => {
    const placeholders = [
      "Search for the best AI Prompt",
      "Here is the best AI Prompt"
    ];
    const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [filterState, setFilterState] = useState(false);
  const [filterResult, setFilterResult] = useState();
  const handleChange = (event) => { 
      setSearchTerm(event.target.value);
       
  }
 
  const onSubmit = () => {
      // TODO: Implement your search logic here
      
      const result = posts.filter(promptFilter);
      setFilterResult(result);
    setFilterState(true)
function promptFilter(post) {
  if (post.tag.includes(searchTerm) ||post.prompt.includes(searchTerm)) {
          return true;
        }
    }
    
    }
    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();
    
        setPosts(data);
      };
    
      useEffect(() => {
        fetchPosts();
      }, [posts]);
  const handleGetAll = () => { 
    setFilterState(!filterState);
  }
  return (
    
    <div className="max-w-5xl mx-auto px-8 flex flex-col items-center">
      
        
       <AnimatedSearchBar
        placeholders={placeholders}
        onChange={handleChange}
              onSubmit={onSubmit}
             
        />
      {filterState&&<p className=' mx-12 bg-gray-900 p-2 px-4 rounded-full text-red-800 shadow-sm shadow-gray-400 hover:translate-y-1 font-semibold cursor-pointer' onClick={handleGetAll}>{("Showing filter Result for : {" + searchTerm + "} click back to get ALL result")}</p>}
      
      <HoverCard items={filterState?filterResult:posts} />
    </div>
  );
}





export default Feed
