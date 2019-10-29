

<button on:click={someFunction}>Show message</button>

<script>
import { NotificationDisplay, notifier } from './_components/svelte-notifications/src/index.js'

function someFunction () {
  notifier.success('Notifications work!')
}
</script>

<NotificationDisplay />
