import { AlbumFull, PhotoFull } from '../types/types';
import albums from './albums';
import photos from './photos';
import users from './users';

const getPreparedAlbums = (): AlbumFull[] => {
  return albums.map(album => ({
    ...album,
    user: users.find(user => user.id === album.userId),
  }));
};

export const getPreparedPhotos = (): PhotoFull[] => {
  const preparedAlbums = getPreparedAlbums();

  return photos.map(photo => {
    const album = preparedAlbums.find(a => a.id === photo.albumId);

    return {
      ...photo,
      album,
    };
  });
};
