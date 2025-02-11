import { useEffect, useState } from "react";
import { graphql } from '../gql'
import { useQuery } from '@apollo/client'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import moment from "moment";
import AddFeed from "./posts/AddFeed";
import PostComment from "./posts/PostComment";


const pluralize = (count: number, noun: string, suffix = "s") =>
  capitalizeFirstLetter(`${noun}${count !== 1 ? suffix : ""}`);

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Feeds: React.FC = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [posts, setPosts] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const getFeed = graphql(`
      query GetPosts {
        getPosts {
          code
          message
          post {
            authorId
            id
            content
            published
            publishedAt
            title
            photo {
              id
              url
            }
            reactions {
              id
              reactionName
            }
            comments {
              id
              published
              title
              publishedAt
              content
            }
          }
        }
      }
    `)
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
  const {data, error, loading} = useQuery(getFeed)
  console.log(data);
  
  if(loading) return <div>loading</div>
  
  if (error || !data) return <div>error</div>
  let comments = data.getPosts?.post[0]?.comments || null;

  console.log(data.getPosts?.post[0].comments)
  // const onLoadMore = () => {
  //   refetch({page: data.getPosts?.info?.next})
  // }

  // const calculateScrollPage = () => {
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     setShowLoadMore(true);
  //   } else {
  //     setShowLoadMore(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", calculateScrollPage);

  //   return () => {
  //     window.removeEventListener("scroll", calculateScrollPage);
  //   };
  // }, []);

  const timeAgo = (date: string) => {
    if (!date) return;

    let finalDate = moment(Number.parseInt(date)).format("YYYY-MM-DD");

    // if invalid date
    if (!moment(finalDate).isValid()) return;

    return moment(finalDate).fromNow();
  };

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-black">News Feed</h2>
        <button
          onClick={handleOpen}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Create Post
        </button>
      </div>
      {data.getPosts?.post?.length ? (
        data.getPosts?.post?.map((post) => (
          <div className="mb-8" key={post?.id}>
            <div className="bg-white rounded-lg shadow p-5 mb-4">
              <div className="flex items-start gap-4 text-black">
                <img
                  src={post?.photo[0]?.url ||"https://placehold.co/400x400"}
                  alt="Post 1"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold">{post?.title}</h4>
                  <p className="text-gray-500 text-sm">
                    {timeAgo(post?.publishedAt || "01/01/2025")}
                  </p>
                  <p className="mt-2 ">
                    {post.content.length > 200
                      ? `${post?.content.slice(0, 200)}...`
                      : post?.content}
                  </p>
                  {/*  carousel image with dots */}
                  <div className="mt-4 relative">
                    <div className="flex gap-4 justify-content-center">
                      <div className="mt-4 flex gap-2">
                        <img
                          src={post?.photo[0]?.url ||"https://placehold.co/700x400"}
                          alt="Post 1"
                          className="w-full h-[200] rounded-md"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-gray-500">
                <p>6355 Likes</p>
                <p>
                  {post.comments.length}{" "}
                  {pluralize(post.comments.length, "comment")}
                </p>
                {/* show comments */}
                <span className="text-blue-500">
                  {post.comments.length ? "View comments" : ""}
                </span>
              </div>
              {/* comments sections expanded */}
              <div className="mt-4">
                {post.comments.length && <PostComment postId={post.id} commentsPost={comments}/>}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-black-500 text-center shadow-lg p-4 bg-white rounded-lg">
          No posts found
        </div>
      )}

      {/* pagination load more */}
      {showLoadMore && (
        <div className="justify-center items-center fixed bottom-10 w-full left-0 right-0 flex">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Show more
          </button>
        </div>
      )}

      {/* add feed */}
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddFeed />
          </Box>
        </Modal>
      )}
    </section>
  );
};

export default Feeds;
