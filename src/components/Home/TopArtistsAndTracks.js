import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 22px;
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
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

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  justify-content: space-around;
`;

const TopArtistsAndTracks = ({ topArtists, topTracks, handleChange }) => (
  <div className="row">
    <div className="col-md-6">
      <Title>
        <div>Top Artists</div>
        <select name="topArtists" onChange={handleChange}>
          <option value="short_range">Last 4 Weeks</option>
          <option value="medium_range">Last 6 Months</option>
          <option value="long_range">All Time</option>
        </select>
      </Title>
      <ol>
        <Flex>
          {topArtists.items.map(artist => (
            <ListItem key={artist.id}>
              <Image src={artist.images && artist.images[0].url} />
              {artist.name}
            </ListItem>
          ))}
        </Flex>
      </ol>
    </div>
    <div className="col-md-6">
      <Title>
        <div>Top Songs</div>
        <select name="topTracks" onChange={handleChange}>
          <option value="short_range">Last 4 Weeks</option>
          <option value="medium_range">Last 6 Months</option>
          <option value="long_range">All Time</option>
        </select>
      </Title>
      <ol>
        <Flex>
          {topTracks.items.map(track => (
            <ListItem key={track.id}>
              <Image src={track.album.images[0].url} />
              <div>
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
              </div>
            </ListItem>
          ))}
        </Flex>
      </ol>
    </div>
  </div>
);

export default TopArtistsAndTracks;
