import { Album, Track } from './tracks';

export enum PlayState {
    IS_LOADING = 1,
    IS_PLAYING = 2,
    IS_PAUSED = 3,
    IS_EMPTY = 4,
};

export const areAlbumsEqual = (currentAlbum: Album | undefined, album: Album): boolean => currentAlbum?.meta.slug === album.meta.slug;

const extensionForTrack = (isMp3: boolean, canPlayOpus: boolean): string => {
    if(canPlayOpus){
        return 'opus';
    }
    return isMp3 ? 'mp3' : 'm4a';
};

export const mediaUrlForTrack = (track: Track, canPlayOpus: boolean): string => {
    const extension = extensionForTrack(!!track.isMp3, canPlayOpus);
    return `/media/music/${track.filename}.${extension}`;
};
