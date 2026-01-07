/**
 * AllSubConverter Utility Functions
 * Helper functions to handle subtitle timestamp conversions.
 */

/**
 * Converts seconds to SRT timestamp format (00:00:00,000)
 * @param {number} seconds - Total seconds
 * @returns {string} Formatted timestamp
 */
function secondsToSrtTime(seconds) {
    if (isNaN(seconds)) return '00:00:00,000';
    
    const date = new Date(0);
    date.setMilliseconds(seconds * 1000);
    
    const timeStr = date.toISOString().substr(11, 8);
    const ms = (seconds % 1).toFixed(3).substring(2);
    
    return `${timeStr},${ms}`;
}

/**
 * Converts seconds to VTT timestamp format (00:00:00.000)
 * @param {number} seconds - Total seconds
 * @returns {string} Formatted timestamp
 */
function secondsToVttTime(seconds) {
    if (isNaN(seconds)) return '00:00:00.000';
    
    const date = new Date(0);
    date.setMilliseconds(seconds * 1000);
    
    const timeStr = date.toISOString().substr(11, 8);
    const ms = (seconds % 1).toFixed(3).substring(2);
    
    return `${timeStr}.${ms}`;
}

module.exports = {
    secondsToSrtTime,
    secondsToVttTime
};