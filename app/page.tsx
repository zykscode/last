import Aside from '#/components/Aside';
import Container from '#/components/container'
import Me from '#/public/static/images/me.jpg';

export default function Home() {
  console.log('allPosts')
  
  return (
   <Container coverWrapper={Me}>
     <div className="page-content page-content-has-aside">
        <article className="page-content-inner">
          <div className="collection block">
            <div className="collection-header">
              <div className="collection-header-title">Blog Posts</div>
            </div>
            <div className="gallery">
              <div className="gallery-view">
                <div className="gallery-grid gallery-grid-size-medium">
                  {/* {posts.map((post) => (
                    <PostCard
                      key={post.title}
                      post={post}
                      coverImages={coverImage}
                    />
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </article>
        <Aside />
      </div>
   </Container>
  )
}
