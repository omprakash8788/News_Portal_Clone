
// import React from 'react';

// const NewsItem = ({ title, description, url, src }) => {
//   return (
//     <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
//       <img src={src} style={{ height: "200px", width: "360px" }} className="card-img-top" alt="img" />
//       <div className="card-body">
//         <h5 className="card-title">{title.slice(0, 50)}</h5>
//         <p className="card-text">{description ? description.slice(0, 90) : "News is information about a recently changed situation or a recent event. He's thrilled to bits at the news. News is information that is published in newspapers and broadcast on radio and television about recent events in the country or world or in a particular area of activity"}</p>
//         <a href={url} className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   );
// }

// export default NewsItem;


import React from 'react';

const NewsItem = ({ title, description, url, src }) => {
    // Default image URL
  const defaultImage = 'https://play-lh.googleusercontent.com/8LYEbSl48gJoUVGDUyqO5A0xKlcbm2b39S32xvm_h-8BueclJnZlspfkZmrXNFX2XQ';

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"  style={{ maxWidth: "345px" }}>
      <img src={src ? src: defaultImage} className="card-img-top" alt="News" style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 30) : "News is information about a recently changed situation or a recent event. He's thrilled to bits at the news. News is information that is published in newspapers and broadcast on radio and television about recent events in the country or world or in a particular area of activity"}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
}

export default NewsItem;

