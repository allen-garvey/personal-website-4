<template>
<div :class="$style.overallTrackContainer">
    <AlbumHeader 
        :album="album"
        :is-playing="isAlbumPlaying(album)"
        :play-button-clicked="() => albumPlayButtonClicked(album)"
        :show-share-link="showAlbumShareLinks"
    />
    <table :class="$style.table">
        <thead>
            <tr>
                <th :class="$style.playButtonColumn"></th>
                <th :class="$style.titleColumn">Title</th>
                <th :class="$style.timeColumn">Time</th>
                <th :class="$style.yearColumn">Year</th>
                <th :class="$style.shareColumn" v-if="showShareLinks"></th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="(track, trackIndex) in album.tracks" 
                :key="`${album.meta.title}-${track.filename}-${track.title}`"
                :class="$style.trackRow"
            >
                <td :class="$style.iconContainer" tabindex="0">
                    <button 
                        @click="() => trackButtonClicked(album, trackIndex)"
                        :title="isTrackPlaying(album, trackIndex) ? 'Pause' : 'Play'"
                        :class="$style.trackButton"
                    >
                        <svg 
                            :class="[$style.icon, $style.playIcon]"
                            viewBox="0 0 24 24"
                        >
                            <use 
                                xlink:href="#icon-pause"
                                v-if="isTrackPlaying(album, trackIndex)" />
                            <use 
                                xlink:href="#icon-play"
                                v-else />
                        </svg>
                    </button>
                    <span :class="$style.trackNumber">{{ trackIndex + 1 }}</span>
                </td>
                <td>{{ track.title }}</td>
                <td>{{ formatSeconds(track.length) }}</td>
                <td>{{ track.year }}</td>
                <td v-if="showShareLinks">
                    <router-link 
                        :to="{ name: 'trackShow', params: { filename: track.filename } }"
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
        </tbody>
    </table>
</div>
</template>

<style lang="scss" module>
    .overallTrackContainer {
        & + & {
            margin-top: 5rem;
        }
    }
    .table {
        border-collapse: collapse;
        th {
            text-align: left;
        }
    }
    .playButtonColumn {
        width: 60px;
    }
    .titleColumn {
        width: 35em;
    }
    .timeColumn {
        width: 6em;
    }
    .yearColumn {
        width: 4em;
    }
    .shareColumn {
        width: 40px;
    }
    .trackRow {
        td {
            padding: 0.75em 0.25em;
        }

        &:hover, &:focus, &:focus-within {
            background-color: #bdeeff;
            .trackButton, .shareLink {
                visibility: visible;
            }
            .trackNumber {
                display: none;
            }
        }
    }

    @media (prefers-color-scheme: dark) {
        .trackRow {
            &:hover, &:focus, &:focus-within {
                color: #000;
                background-color: #cee6ff;
            }
        }
    }

    $icon-controls-dimensions: 40px;
    .iconContainer {
        display: inline-block;
        position: relative;
        height: $icon-controls-dimensions;
        width: $icon-controls-dimensions;
    }
    .trackButton {
        visibility: hidden;
    }
    .trackNumber {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.25;
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
        visibility: hidden;
        padding-right: 12px;
    }
    .playIcon {
        max-height: 100%;
        width: $icon-controls-dimensions;
    }

    @media (hover: none) {
        .trackNumber {
            display: none;
        }
        .trackButton {
            visibility: visible;
        }
    }
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AlbumHeader from './album-header.vue';
import { Album } from '../models/tracks';
import { yearDescriptionForAlbum } from '../models/album-helpers';
import { formatSeconds } from '../view-helpers/time';

export default defineComponent({
    props: {
        album: {
            required: true,
            type: Object as PropType<Album>,
        },
        isTrackPlaying: {
            required: true,
            type: Function as PropType<(album: Album, trackIndex: number) => boolean>,
        },
        isAlbumPlaying: {
            required: true,
            type: Function as PropType<(album: Album) => boolean>,
        },
        trackButtonClicked: {
            required: true,
            type: Function as PropType<(album: Album, trackIndex: number) => void>,
        },
        albumPlayButtonClicked: {
            required: true,
            type: Function as PropType<(album: Album) => void>,
        },
        showShareLinks: {
            type: Boolean,
            default: false,
        },
        showAlbumShareLinks: {
            type: Boolean,
            default: true,
        },
    },
    components: {
        AlbumHeader,
    },
    methods: {
        formatSeconds,
        yearDescriptionForAlbum,
    }
});
</script>