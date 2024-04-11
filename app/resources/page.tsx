//import { CardBlogPost } from "@/components/common";



type Posts = {
  PostId : number,
  Title : string,
  Metatitle : string,
  Slug : string,
  Summary : string,
  Published : boolean,
  CreatedAt : string
} 

export default  function Page() {
    // ---------------------------- Works with the database ----------------------
    // const res = await fetch('http://127.0.0.1:8000/posts', {
    //   method : 'GET'
    // });

    // const posts = await res.json(); 
    
    // posts.map((post:Posts) => {
      
    // })

    return (<div></div>
      // ------------------------ Works with the database -----------------------------
      // <div className='max-w-7xl md:w-4/5 w-11/12 justify-center flex flex-col mx-auto pt-20'>
      //   <div>
      //     <div className='flex text-center justify-center text-sf_green py-20'>
      //       <h2>Resurse</h2>
      //     </div>
      //   </div>
      //   <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-9 justify-items-center">
      //     {/* TO DO: 
      //      1. Create the Article componentx
      //      2. Arrange all components x
      //      3. Integrate pagination
      //     */}
      //     {posts.map((post:Posts) => 
            
      //       <CardBlogPost 
      //         title={post.Title}
      //         publishedDate={post.CreatedAt}
      //         summary={post.Summary}
      //         imgSrc="/img/image_get_involved.png"
      //         key={post.PostId}
      //       />
      //   )}
          
      //   </div>
      // </div>
    )
  }
  