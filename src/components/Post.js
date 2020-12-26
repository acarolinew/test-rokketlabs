import React from 'react';
import Tag from './Tag';

const Post = ({data}) => {
  const [isAnimated, setIsAnimated] = React.useState(false);

  const timing = 150

  const style = {
    transition: `background-color ${timing}ms linear`,
    backgroundColor: !isAnimated ? 'unset' : '#30E4BE'
  }

  const onTriggerEnter = () => {
    setIsAnimated(true);
  }

  const onTriggerLeave = () => {
    setIsAnimated(false);
  }
  
  return (
    <div 
      className="py-10"
      onMouseEnter={()=>onTriggerEnter()}
      onMouseLeave={()=>onTriggerLeave()}
      style={style}
    >
      <div className="py-10">
        <img src={data.image} className="post-img" alt={data.text} />
        <p>
          {data.text}
        </p>
        {data.tags && 
          <ul className="tags-list">
            {data.tags.map((tag) => (
              <li
                key={tag}
                className="li-tag"
              >
                <Tag data={tag} />
              </li>
            ))}
          </ul>
        }
      </div>
      <div className="posted-by font-size-12">
        {`Posted by ${data.owner.firstName} ${data.owner.lastName} on 
        ${new Date(data.publishDate).toLocaleDateString()}
        ${new Date(data.publishDate).toLocaleTimeString()}`}
      </div>
    </div>
  );
};

export default Post;