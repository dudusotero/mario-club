import fetch from "isomorphic-unfetch";

const Post = ({ show }) => (
  <>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={show.image.medium} alt={show.name} />
  </>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
