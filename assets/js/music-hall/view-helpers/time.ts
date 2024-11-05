export const formatSeconds = (seconds: number): string => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
        .toString()
        .padStart(2, '0')}`;
};
