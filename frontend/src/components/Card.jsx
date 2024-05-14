import React from 'react';

const Card = ({ card }) => {
  const { name, description, interests, linkedinUsername, twitterUsername } = card;

  // Defining the social media links. Just add the usernames in the link.
  const linkedinUrl = `${linkedinUsername}`;
  const twitterUrl = `/${twitterUsername}`;

  return (
    <div className="cardContainer">
      <div className="card">
        <h1 className="name">{name}</h1>
        <div className="description">{description}</div>
        <div>
          <b>Interests:</b>
          {/* Iterating over the interests array to show each interest on the frontend. */}
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <div className="profileLinks">
          {/* Anchor tag to direct to the user's profile once clicked. */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedinLink"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Linkedin
            </button>
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="twitterLink"
          >
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Twitter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
