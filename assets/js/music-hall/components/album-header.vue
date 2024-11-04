<template>
    <div :class="$style.container">
        <div :class="$style.imageContainer">
            <img 
                :src="`/media/images/${album.meta.coverImage || album.meta.slug}.webp`" 
                :alt="`${album.meta.title} by ${album.meta.artist} album cover`" 
                :class="$style.coverImage"
                loading="lazy"
            />
            <div :class="$style.albumCoverOverlay" @click="playButtonClicked">
                <svg viewBox="0 0 24 24">
                    <use 
                        xlink:href="#icon-pause"
                        v-if="isPlaying" />
                    <use 
                        xlink:href="#icon-play"
                        v-else />
                </svg>
            </div>
        </div>
        <div :class="$style.infoContainer">
            <table :class="$style.table">
                <tbody>
                    <tr>
                        <td>
                            <h3>{{ album.meta.title }}</h3>
                        </td>
                        <td :class="[$style.secondaryInfo, $style.mobileHide]">{{ yearDescriptionForAlbum(album) }}</td>
                    </tr>
                    <tr>
                        <td>{{ album.meta.artist }}</td>
                        <td :class="[$style.secondaryInfo, $style.mobileHide]">{{ albumTime(album.tracks) }}</td>
                    </tr>
                    <tr :class="$style.mobileHide">
                        <td></td>
                        <td :class="$style.secondaryInfo">{{ album.meta.tags.join(', ') }}</td>
                    </tr>
                    <tr v-if="showShareLink" :class="$style.mobileHide">
                        <td></td>
                        <td>
                            <router-link 
                                :to="{ name: 'albumShow', params: { slug: album.meta.slug } }"
                                :class="$style.shareLink"
                            >
                                <svg 
                                    :class="$style.icon"
                                    viewBox="0 0 24 24"
                                >
                                    <use xlink:href="#icon-share" />
                                </svg>
                            </router-link>
                        </td>
                    </tr>
                    <tr v-if="descriptionRows.length > 0">
                        <td colspan="2">
                            <ul :class="$style.description">
                                <li v-for="row in descriptionRows">{{ row }}</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
    
<style lang="scss" module>
    $cover-image-width: 220px;

    .container {
        margin-bottom: 1.5rem;
        max-width: 784px;
    }
    .albumCoverOverlay {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
        color: #dedede;
        opacity: 0.7;
        mix-blend-mode: screen;
    }
    .imageContainer {
        position: relative;
        margin-left: 1rem;

        &:hover {
            .albumCoverOverlay {
                display: block;
            }
        }
    }
    .table {
        padding: 0 1rem;
        width: 100%;

        td {
            height: 1em;
        }
    }
    .secondaryInfo {
        opacity: 0.5;
        padding-left: 2.5rem;
        text-align: right;
    }
    .coverImage {
        width: $cover-image-width;
        height: $cover-image-width;
    }
    .description {
        list-style-type: none;
        font-family: monospace;
        font-size: 0.8rem;
        padding: 0 0 1em;
        margin: 0;

        li {
            min-height: 1em; // for empty rows for spacing purposes
        }
    }

    .icon {
        color: #000;
        opacity: 0.35;
        cursor: pointer;
        
        &:hover {
            opacity: 1;
        }
    }
    .shareLink {
        display: block;
        width: 100%;
        text-align: right;
        padding: 0.5em 0 0;

        svg {
            width: 22px;
        }
    }

    $breakpoint: 650px;
    
    @media screen and (min-width: $breakpoint) {
        .container {
            display: flex;
            flex-wrap: wrap;
        }
        .infoContainer {
            flex-basis: calc(100% - #{$cover-image-width} - 1rem);
        }

        .description {
            position: relative;
            top: -30px;
            padding-right: 30px;
        }
    }

    @media screen and (max-width: ($breakpoint - 1px)) {
        .mobileHide {
            display: none;
        }
    }
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Album } from '../models/tracks';
import { yearDescriptionForAlbum } from '../models/album-helpers';
import { albumTime } from '../view-helpers/time';

export default defineComponent({
    props: {
        album: {
            required: true,
            type: Object as PropType<Album>,
        },
        playButtonClicked: {
            required: true,
            type: Function as PropType<() => void>,
        },
        isPlaying: {
            required: true,
            type: Boolean,
        },
        showShareLink: {
            required: true,
            type: Boolean,
        },
    },
    computed: {
        descriptionRows(): string[]{
            const descriptionMap: Map<string, string[]> = new Map();
            
            const trackDescriptions: string[] = this.album.tracks
                .filter(track => {
                    if(!track.description){
                        return false;
                    }
                    if(descriptionMap.has(track.description)){
                        descriptionMap.get(track.description)?.push(track.title);
                        return false;
                    }
                    descriptionMap.set(track.description, [track.title]);
                    return true;
                })
                .map(track => `${descriptionMap.get(track.description as string)?.join(', ')}: ${track.description}`);

            return (this.album.meta.description || []).concat(trackDescriptions);
        }
    },
    methods: {
        yearDescriptionForAlbum,
        albumTime,
    }
});
</script>