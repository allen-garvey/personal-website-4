<template>
<div :class="$style.container">
    <template v-if="currentTrack">
        <div :class="$style.progressBarContainer">
            <input 
                type="range" 
                min="0" 
                :max="(currentTrack as Track).length" 
                step="1" 
                :value="elapsedTime"
                @input="progressBarUpdated"
            />
        </div>
        <div :class="$style.mobileTitle">
            <span>{{ currentTrack?.title }}</span>
            <span :class="$style.time">
                {{ formatSeconds(elapsedTime) }} - {{ formatSeconds((currentTrack as Track).length) }}
            </span>
        </div>
        <div :class="$style.innerContainer">
            <div
                :class="$style.buttonContainer"
                v-if="hasAudio"
            >
                <button @click="buttonClicked()" tabindex="1">
                    <svg 
                        :class="$style.icon"
                        viewBox="0 0 24 24"
                    >
                        <use 
                            xlink:href="#icon-play"
                            v-if="isPaused" />
                        <use 
                            xlink:href="#icon-pause"
                            v-if="isPlaying" />
                    </svg>
                </button>
            </div>
            <div :class="$style.desktopTitle">
                {{ currentTrack?.title }}
            </div>
            <div :class="$style.desktopTitle">
                {{ formatSeconds(elapsedTime) }} - {{ formatSeconds((currentTrack as Track).length) }}
            </div>
            <div :class="$style.volumeContainer" v-show="!isAudioEmpty">
                <svg 
                    :class="$style.volumeIcon"
                    viewBox="0 0 24 24"
                >
                    <use 
                        xlink:href="#icon-volume-x"
                        v-if="audioVolume === 0" />
                    <use 
                        xlink:href="#icon-volume-1"
                        v-else-if="audioVolume <= 0.6" />
                    <use 
                        xlink:href="#icon-volume-2"
                        v-else />
                </svg>
                <input 
                    tabindex="2"
                    type="range"
                    min="0"
                    max="1"
                    :value="audioVolume"
                    step="0.05"
                    :class="$style.volumeInput"
                    @input="volumeChanged(parseFloat(($event.target as HTMLInputElement).value))"
                />
            </div>
        </div>
    </template>
</div>
</template>
    
<style lang="scss" module>
$icon-controls-dimensions: 50px;
$breakpoint: 600px;

.container {
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #245261;
    color: #fff;
    text-align: center;
    box-shadow: 0 -5px 15px rgba(84, 22, 8, 0.2);
    padding: 0.5rem 0 0;

    @media screen and (max-width: $breakpoint) {
        height: 104px;
    }
}

@media (prefers-color-scheme: dark) {
    .container {
        background-color: #22234b;
        background-color: #111840;
    }
}

.innerContainer {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobileTitle {
    margin: 0 0 0.75rem;
    
    @media screen and (min-width: $breakpoint) {
        display: none;
    }
}

.desktopTitle {
    margin-left: 1em;
    
    @media screen and (max-width: $breakpoint) {
        display: none;
    }
}

.time {
    margin-left: 1em;
}

.progressBarContainer {
    width: calc(100% - 20px);
    position: absolute;
    top: -6px;
    
    input[type="range"] {
        width: 100%;
    }
}

.buttonContainer {
    max-height: 100%;

    button {
        color: #fff;
    }
}

.icon {
    max-height: 100%;
    width: $icon-controls-dimensions;
    cursor: pointer;
    
    &:hover {
        color: #888;
    }
}

.volumeContainer {
    display: flex;
    align-items: center;
    margin-left: 40px;
}

.volumeIcon {
    margin-right: 5px;
    max-height: 100%;
    width: 28px;
}

$volume-slider-handle-color: #6b6b6b;
$volume-slider-handle-dimensions: 15px;
$volume-slider-handle-border-radius: 50%;
$volume-slider-progress-color: #88c341;
$volume-slider-range-color: #dbd9d6;

.volumeInput {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    background: $volume-slider-range-color;
    border: 1px solid #82887a;
    border-radius: $volume-slider-handle-dimensions;
    height: $volume-slider-handle-dimensions - 1px;
    width: 140px;
    overflow: hidden;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        
        width: $volume-slider-handle-dimensions;
        height: $volume-slider-handle-dimensions;
        border-radius: $volume-slider-handle-border-radius;
        background: $volume-slider-handle-color;

        box-shadow: -80px 0 0 75px $volume-slider-progress-color;
    }

    &::-moz-range-thumb {
        width: $volume-slider-handle-dimensions;
        height: $volume-slider-handle-dimensions;
        border-radius: $volume-slider-handle-border-radius;
        background: $volume-slider-handle-color;
    }

    &::-moz-range-progress {
        height: 100%;
        background-color: $volume-slider-progress-color; 
    }

    &::-moz-range-track {  
        height: 100%;
        background-color: $volume-slider-range-color;
    }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PlayState } from '../models/media-helpers';
import { Track } from '../models/tracks';
import { formatSeconds } from '../view-helpers/time';

export default defineComponent({
    props: {
        currentTrack: {
            type: Object as PropType<Track | undefined>,
        },
        playState: {
            type: Number,
            required: true,
        },
        audioVolume: {
            type: Number,
            required: true,
        },
        elapsedTime: {
            type: Number,
            required: true,
        },
        buttonClicked: {
            type: Function as PropType<() => void>,
            required: true,
        },
        volumeChanged: {
            type: Function as PropType<(volume: number) => void>,
            required: true,
        },
        onTrackSeekRequested: {
            type: Function as PropType<(volume: number) => void>,
            required: true,
        },
    },
    data(){
        return {
            trackSeekTimeout: undefined as NodeJS.Timeout | undefined,
        };
    },
    computed: {
        isAudioEmpty(){
            return this.playState === PlayState.IS_EMPTY;
        },
        hasAudio(){
            return this.playState !== PlayState.IS_EMPTY && this.playState !== PlayState.IS_LOADING;
        },
        isPlaying(){
            return this.playState === PlayState.IS_PLAYING;
        },
        isPaused(){
            return this.playState === PlayState.IS_PAUSED;
        },
    },
    methods: {
        formatSeconds,
        progressBarUpdated(e: Event){
            clearTimeout(this.trackSeekTimeout);
            const time = parseInt((e.target as HTMLInputElement).value);
            this.trackSeekTimeout = setTimeout(() => {
                this.onTrackSeekRequested(time);
            }, 300);
        },
    }
});
</script>