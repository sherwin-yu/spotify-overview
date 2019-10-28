import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

const ListItem = styled.li`
  font-size: 24px;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }
`;

const UnorderedList = styled.ul`
  padding: 0;
  font-size: 16px;
  color: #b3b3b3;
`;

const SubListItem = styled.li`
  font-size: 16px;
  list-style-type: none;
  display: inline-block;
  a {
    color: #b3b3b3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 450px;
  justify-content: space-around;
`;

const TopArtistsAndTracks = ({ topArtists, topTracks }) => (
  <div className="row">
    <div className="col-md-6">
      <Title>Top Artists</Title>
      <ol>
        <Flex>
          {topArtists.items.map(artist => (
            <ListItem key={artist.id}>{artist.name}</ListItem>
          ))}
        </Flex>
      </ol>
    </div>
    <div className="col-md-6">
      <Title>Top Songs</Title>
      <ol>
        <Flex>
          {topTracks.items.map(track => (
            <ListItem key={track.id}>
              <a href={track.external_urls.spotify}>{track.name}</a>
              <UnorderedList>
                {track.artists &&
                  track.artists.map((artist, index) => (
                    <SubListItem key={artist.id}>
                      <a href={artist.external_urls.spotify} target="_blank">
                        {artist.name}
                      </a>
                      {index < track.artists.length - 1 ? ',\u00A0' : ''}
                    </SubListItem>
                  ))}
              </UnorderedList>
            </ListItem>
          ))}
        </Flex>
      </ol>
    </div>
  </div>
);

export default TopArtistsAndTracks;
