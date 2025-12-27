/**
 * Returns a message and no embeds
 */

export default {
    embed: false,
    extras: [{
        title: "View All Changes",
        url: "{{ github.context.payload.compare }}"
    }]
}